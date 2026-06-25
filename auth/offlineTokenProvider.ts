// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// D18 headless-SDK auth helper (keycloak-migration-plan §7.8 + D18).
//
// One-time ROPC login (grant_type=password, scope=offline_access) against the PUBLIC SDK client
// `ondewo-nlu-cai-sdk-public` (no client_secret -- Q1), then a bounded background loop that refreshes
// the short-lived access token from the offline refresh token before it expires. The current access
// token is exposed for an `Authorization: Bearer <token>` gRPC metadata header. The refresh loop stops
// after `tokenExpirationInS` (if given) has elapsed since login.

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the refresh fires before the access
 * token actually lapses (covers clock skew + the round-trip to Keycloak).
 */
const REFRESH_SKEW_IN_S: number = 30;

/** Lower bound for the scheduled refresh delay so a tiny/zero `expires_in` cannot spin a hot loop. */
const MIN_REFRESH_DELAY_IN_S: number = 1;

/**
 * Minimal structural type of the fetch Response fields this helper reads. Keeps the module
 * self-contained (no DOM lib dependency) while still typing the injectable `fetchImpl`.
 */
export interface TokenFetchResponse {
  /** Whether the HTTP status is in the 2xx success range. */
  ok: boolean;
  /** The numeric HTTP status code. */
  status: number;
  /**
   * Read the full response body as text.
   *
   * @returns A promise resolving to the raw body string.
   */
  text(): Promise<string>;
}

/** Init object passed to the injectable fetch. */
export interface TokenFetchInit {
  /** HTTP method (always `"POST"` for the token endpoint). */
  method: string;
  /** Request headers (content-type and accept). */
  headers: Record<string, string>;
  /** The form-encoded request body. */
  body: string;
}

/**
 * Injectable fetch signature (a subset of the global `fetch`) used by the token endpoint call.
 *
 * @param url - The token endpoint URL to POST to.
 * @param init - The request init (method, headers, body).
 * @returns A promise resolving to the (structurally minimal) response.
 */
export type TokenFetch = (url: string, init: TokenFetchInit) => Promise<TokenFetchResponse>;

/** Parsed Keycloak token-endpoint response (only the fields this helper consumes). */
interface KeycloakTokenResponse {
  /** The short-lived bearer access token. */
  access_token: string;
  /** The offline refresh token (present on login; may be rotated on refresh). */
  refresh_token?: string;
  /** Access-token lifetime in seconds, as reported by Keycloak. */
  expires_in?: number;
}

/** Options for the D18 headless-SDK offline-token login. */
export interface OfflineTokenLoginOptions {
  /** Base Keycloak URL, e.g. "https://auth.example.com/auth" (trailing slash tolerated). */
  keycloakUrl: string;
  /** Realm name, e.g. "ondewo-ccai-platform". */
  realm: string;
  /** Public SDK client id, e.g. "ondewo-nlu-cai-sdk-public". NO client_secret (Q1). */
  clientId: string;
  /** 2FA-exempt technical-user email. */
  username: string;
  /** Technical-user password. */
  password: string;
  /** Optional cap (seconds) on how long the auto-refresh loop runs after login. */
  tokenExpirationInS?: number;
  /** Optional fetch override (tests inject a mock); defaults to the global fetch. */
  fetchImpl?: TokenFetch;
  /** Optional clock override returning epoch ms (tests); defaults to Date.now. */
  nowInMs?: () => number;
}

/** Error raised on any token-endpoint or token-shape failure. */
export class TokenError extends Error {
  /**
   * Construct a token error.
   *
   * @param message - Human-readable description of the token failure.
   */
  public constructor(message: string) {
    super(message);
    this.name = "TokenError";
  }
}

/**
 * Build the OIDC token endpoint URL for a realm, tolerating a trailing slash on `keycloakUrl` and an
 * optional `/auth` relative path already baked into it.
 *
 * @param keycloakUrl - Base Keycloak URL (trailing slashes are stripped).
 * @param realm - Realm name (URL-encoded into the path).
 * @returns The fully-qualified `.../realms/<realm>/protocol/openid-connect/token` endpoint URL.
 */
function buildTokenEndpoint(keycloakUrl: string, realm: string): string {
  const base: string = keycloakUrl.replace(/\/+$/, "");
  return `${base}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
}

/**
 * POST an `application/x-www-form-urlencoded` body to the token endpoint and return the parsed JSON.
 * Raises TokenError on a non-2xx response or unparseable / access_token-less body.
 *
 * @param tokenEndpoint - The realm token endpoint URL to POST to.
 * @param params - The form fields to URL-encode into the request body.
 * @param fetchImpl - The fetch transport to use (real or injected mock).
 * @returns The parsed Keycloak token response.
 * @throws {TokenError} On a non-2xx status, a non-JSON body, or a body without an `access_token`.
 */
async function postTokenRequest(
  tokenEndpoint: string,
  params: Record<string, string>,
  fetchImpl: TokenFetch
): Promise<KeycloakTokenResponse> {
  const body: string = new URLSearchParams(params).toString();
  const response: TokenFetchResponse = await fetchImpl(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    },
    body
  });

  const text: string = await response.text();
  if (!response.ok) {
    throw new TokenError(`Keycloak token endpoint returned HTTP ${response.status}: ${text}`);
  }

  let parsed: KeycloakTokenResponse;
  try {
    parsed = JSON.parse(text) as KeycloakTokenResponse;
  } catch {
    throw new TokenError(`Keycloak token endpoint returned a non-JSON body: ${text}`);
  }
  if (typeof parsed.access_token !== "string" || parsed.access_token.length === 0) {
    throw new TokenError("Keycloak token response did not contain an access_token");
  }
  return parsed;
}

/**
 * A live access-token holder backed by a bounded auto-refresh loop. Obtain one from {@link login};
 * read {@link getAuthorizationHeader} for the gRPC `Authorization` metadata and call {@link stop} when done.
 */
export class OfflineTokenProvider {
  /** The realm token endpoint derived from `keycloakUrl` + `realm`. */
  private readonly tokenEndpoint: string;
  /** The public SDK client id sent on every grant. */
  private readonly clientId: string;
  /** Optional cap (seconds) on how long the refresh loop runs after login; `undefined` = unbounded. */
  private readonly tokenExpirationInS: number | undefined;
  /** The fetch transport (real global fetch or an injected mock). */
  private readonly fetchImpl: TokenFetch;
  /** Epoch-ms clock (injectable for deterministic tests; defaults to `Date.now`). */
  private readonly nowInMs: () => number;

  /** The current access token, or `null` before bootstrap / after the loop has lapsed. */
  private accessToken: string | null;
  /** The current offline refresh token, or `null` before bootstrap. */
  private refreshToken: string | null;
  /** The pending refresh timer handle, or `null` when no refresh is armed. */
  private timer: ReturnType<typeof setTimeout> | null;
  /** Whether {@link stop} has been called; suppresses further refresh scheduling. */
  private stopped: boolean;
  /** Epoch-ms instant past which the loop stops renewing, or `null` when unbounded. */
  private deadlineInMs: number | null;
  /** Optional callback invoked with the error of a failed background refresh. */
  private onRefreshErrorHandler: ((error: unknown) => void) | null;

  /**
   * Construct an (un-bootstrapped) provider from login options. Call {@link bootstrap} (or use the
   * module-level {@link login}) before reading a token.
   *
   * @param options - The D18 headless-SDK offline-token login options.
   */
  public constructor(options: OfflineTokenLoginOptions) {
    this.tokenEndpoint = buildTokenEndpoint(options.keycloakUrl, options.realm);
    this.clientId = options.clientId;
    this.tokenExpirationInS = options.tokenExpirationInS;
    this.fetchImpl = options.fetchImpl !== undefined ? options.fetchImpl : globalThis.fetch;
    this.nowInMs = options.nowInMs !== undefined ? options.nowInMs : Date.now;

    this.accessToken = null;
    this.refreshToken = null;
    this.timer = null;
    this.stopped = false;
    this.deadlineInMs = null;
    this.onRefreshErrorHandler = null;
  }

  /**
   * Perform the one-time ROPC login and arm the first refresh. Awaited by {@link login}.
   *
   * @param username - The 2FA-exempt technical-user email.
   * @param password - The technical-user password.
   * @returns A promise that resolves once the initial token is held and the first refresh is armed.
   * @throws {TokenError} When the token endpoint fails or the response carries no refresh token.
   */
  public async bootstrap(username: string, password: string): Promise<void> {
    const tokenResponse: KeycloakTokenResponse = await postTokenRequest(
      this.tokenEndpoint,
      {
        grant_type: "password",
        client_id: this.clientId,
        username,
        password,
        scope: "offline_access"
      },
      this.fetchImpl
    );

    this.accessToken = tokenResponse.access_token;
    this.refreshToken = typeof tokenResponse.refresh_token === "string" ? tokenResponse.refresh_token : null;
    if (this.refreshToken === null) {
      throw new TokenError(
        "Keycloak token response did not contain a refresh_token; the SDK client must have " +
          "directAccessGrants + the offline_access scope (ondewo-nlu-cai-sdk-public)"
      );
    }

    if (this.tokenExpirationInS !== undefined) {
      const expirationInMs: number = this.tokenExpirationInS * 1000;
      this.deadlineInMs = this.nowInMs() + expirationInMs;
    }
    this.scheduleRefresh(tokenResponse.expires_in);
  }

  /**
   * Exchange the offline refresh token for a fresh access token and re-arm the next refresh.
   *
   * @returns A promise that resolves once the token is refreshed (or the loop has stopped).
   * @throws {TokenError} When the refresh token-endpoint call fails or returns an invalid body.
   */
  private async refresh(): Promise<void> {
    /* c8 ignore next 3 -- unreachable: stop() always clears the only timer that calls refresh() */
    if (this.stopped) {
      return;
    }
    // Re-check the bounded deadline at fire time (not just at schedule time): once it has elapsed the
    // loop stops with no further renewal -> the access token lapses -> re-login is required.
    if (this.deadlineInMs !== null && this.nowInMs() >= this.deadlineInMs) {
      this.stop();
      return;
    }
    const tokenResponse: KeycloakTokenResponse = await postTokenRequest(
      this.tokenEndpoint,
      {
        grant_type: "refresh_token",
        client_id: this.clientId,
        refresh_token: this.refreshToken as string
      },
      this.fetchImpl
    );

    this.accessToken = tokenResponse.access_token;
    // Keycloak may rotate the offline refresh token; keep the newest one when present.
    if (typeof tokenResponse.refresh_token === "string" && tokenResponse.refresh_token.length > 0) {
      this.refreshToken = tokenResponse.refresh_token;
    }
    this.scheduleRefresh(tokenResponse.expires_in);
  }

  /**
   * Arm a single timer for the next refresh, clamped to the bounded deadline. Stops silently once
   * `tokenExpirationInS` has elapsed (no further renewal -> access lapses -> re-login required).
   *
   * @param expiresInRaw - The `expires_in` (seconds) reported by Keycloak; absent/non-positive
   *   values fall back to {@link MIN_REFRESH_DELAY_IN_S}.
   */
  private scheduleRefresh(expiresInRaw: number | undefined): void {
    if (this.stopped) {
      return;
    }
    const expiresInS: number =
      typeof expiresInRaw === "number" && expiresInRaw > 0 ? expiresInRaw : MIN_REFRESH_DELAY_IN_S;
    let delayInS: number = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);

    if (this.deadlineInMs !== null) {
      const remainingInMs: number = this.deadlineInMs - this.nowInMs();
      if (remainingInMs <= 0) {
        this.stop();
        return;
      }
      delayInS = Math.min(delayInS, remainingInMs / 1000);
    }

    this.timer = setTimeout((): void => {
      this.refresh().catch((refreshError: unknown): void => {
        // Swallow a transient refresh failure but surface it so the caller can react; the next
        // gRPC call gets the stale (possibly expired) token and re-logs in on UNAUTHENTICATED.
        if (this.onRefreshErrorHandler !== null) {
          this.onRefreshErrorHandler(refreshError);
        }
      });
    }, delayInS * 1000);
    // Do not keep the event loop alive solely for the refresh timer.
    /* c8 ignore next 3 -- the else branch is unreachable: Node's Timeout always exposes unref() */
    if (typeof this.timer.unref === "function") {
      this.timer.unref();
    }
  }

  /**
   * Register a callback invoked with the error of a failed background refresh (optional diagnostics).
   *
   * @param handler - The callback to receive the refresh error; replaces any previously registered one.
   */
  public onRefreshError(handler: (error: unknown) => void): void {
    this.onRefreshErrorHandler = handler;
  }

  /**
   * Read the current access token.
   *
   * @returns The current access token, or `null` before bootstrap / after the bounded loop has lapsed.
   */
  public getAccessToken(): string | null {
    return this.accessToken;
  }

  /**
   * Build the value for an `Authorization` gRPC metadata header.
   *
   * @returns The `Bearer <access_token>` header value.
   * @throws {TokenError} When no access token is available (login not completed or already lapsed).
   */
  public getAuthorizationHeader(): string {
    if (this.accessToken === null) {
      throw new TokenError("No access token available; login() has not completed or has lapsed");
    }
    return `Bearer ${this.accessToken}`;
  }

  /** Stop the auto-refresh loop. Idempotent; safe to call from any state. */
  public stop(): void {
    this.stopped = true;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}

/**
 * One-time ROPC + offline_access login against the PUBLIC SDK client, returning a live token provider
 * whose access token is auto-refreshed in the background until `tokenExpirationInS` elapses.
 *
 * @param options - The headless-SDK login options (`keycloakUrl`, `realm`, `clientId`, `username`,
 *   `password` are required; `tokenExpirationInS`, `fetchImpl`, `nowInMs` are optional).
 * @returns A bootstrapped {@link OfflineTokenProvider} holding a live access token.
 * @throws {TokenError} When required options are missing/empty, the token endpoint fails, or the
 *   response lacks an access or refresh token.
 */
export async function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider> {
  if (options === undefined || options === null) {
    throw new TokenError("login() requires an options object");
  }
  const requiredKeys: (keyof OfflineTokenLoginOptions)[] = [
    "keycloakUrl",
    "realm",
    "clientId",
    "username",
    "password"
  ];
  for (const key of requiredKeys) {
    const value: unknown = options[key];
    if (typeof value !== "string" || value.length === 0) {
      throw new TokenError(`login() option "${key}" is required and must be a non-empty string`);
    }
  }

  const provider: OfflineTokenProvider = new OfflineTokenProvider(options);
  await provider.bootstrap(options.username, options.password);
  return provider;
}
