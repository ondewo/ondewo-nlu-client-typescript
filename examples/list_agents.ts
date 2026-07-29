import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_web_pb';
import { ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import type { AgentWithOwner } from '../api/ondewo/nlu/agent_pb';
import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';
import type { OfflineTokenLoginOptions } from '../auth/offlineTokenProvider';
import { Client } from './ts-client';
import type { AgentsService } from './ts-client';
import { config as loadDotenv } from 'dotenv';
import * as path from 'path';

// Load the canonical ONDEWO_*/KEYCLOAK_* variables from the committed template next to this script,
// so configuration is read from the environment regardless of the current working directory.
loadDotenv({ path: path.join(__dirname, 'environment.env') });

/**
 * Constructor shape of the generated gRPC-web `AgentsClient`, narrowed to the single RPC this example
 * issues. It is injected rather than referenced directly inside {@link main} so a unit test can supply
 * an in-memory fake instead of a client pointed at a live NLU endpoint.
 *
 * @param grpcWebUrl - The gRPC-web (envoy) endpoint the client talks to.
 * @returns A client exposing the `listAllAgents` RPC.
 */
export type AgentsClientConstructor = new (grpcWebUrl: string) => AgentsService;

/**
 * Constructor shape of the generated `ListAgentsRequest` message, injected for the same reason as
 * {@link AgentsClientConstructor}.
 *
 * @returns An empty `ListAgentsRequest`.
 */
export type ListAgentsRequestConstructor = new () => ListAgentsRequest;

/**
 * Everything this example touches outside its own module: the environment, the auth helper, the two
 * generated constructors and the console/process side effects. Production wiring lives in
 * {@link DEFAULT_DEPENDENCIES}; a unit test injects fakes instead, so importing this module performs
 * no Keycloak login, no RPC and no process exit.
 */
export interface ListAgentsDependencies {
	/** The environment the configuration is read from (the real `process.env` in production). */
	readonly env: Record<string, string | undefined>;
	/**
	 * Perform the headless Keycloak login.
	 *
	 * @param options - The ROPC + offline_access login options.
	 * @returns A promise resolving to a bootstrapped token provider.
	 */
	readonly login: (options: OfflineTokenLoginOptions) => Promise<OfflineTokenProvider>;
	/** The generated `AgentsClient` constructor. */
	readonly agentsClientConstructor: AgentsClientConstructor;
	/** The generated `ListAgentsRequest` constructor. */
	readonly listAgentsRequestConstructor: ListAgentsRequestConstructor;
	/**
	 * Write one progress line (the real `console.log` in production).
	 *
	 * @param message - The line to write.
	 */
	readonly log: (message: string) => void;
	/**
	 * Write one failure line (the real `console.error` in production).
	 *
	 * @param message - The line to write.
	 * @param error - The optional raw error, passed through as a second argument.
	 */
	readonly logError: (message: string, error?: unknown) => void;
	/**
	 * Terminate the process (the real `process.exit` in production).
	 *
	 * @param code - The exit status code.
	 */
	readonly exit: (code: number) => void;
}

/** The production wiring: the real environment, auth helper, generated stubs, console and process. */
export const DEFAULT_DEPENDENCIES: ListAgentsDependencies = {
	env: process.env,
	login,
	agentsClientConstructor: AgentsClient,
	listAgentsRequestConstructor: ListAgentsRequest,
	log: console.log,
	logError: console.error,
	exit: process.exit
};

/**
 * Read a required environment variable, throwing a descriptive error when it is missing or empty.
 *
 * @param env - The environment to read from.
 * @param name - The environment variable name to read.
 * @returns The non-empty value.
 * @throws {Error} When the variable is unset or blank.
 */
export function requireEnv(env: Record<string, string | undefined>, name: string): string {
	const value: string | undefined = env[name];
	if (value === undefined || value.length === 0) {
		throw new Error(`Missing required environment variable ${name} (set it in examples/environment.env)`);
	}
	return value;
}

/**
 * Minimal end-to-end example: a headless Keycloak login followed by a bearer-authenticated `ListAgents`.
 *
 * @param dependencies - The environment, auth helper, generated constructors and log sink to use.
 * @returns A promise that resolves once the agents have been listed and printed.
 * @throws {Error} When a required environment variable is missing, the login fails or the RPC fails;
 *   the token-refresh loop is stopped either way.
 */
export async function main(dependencies: ListAgentsDependencies): Promise<void> {
	dependencies.log('[list_agents] START: headless Keycloak login + ListAgents example');

	// 1. One-time headless login (ROPC + offline_access) against the public NLU SDK Keycloak client.
	//    Bearer authentication is the only supported NLU auth scheme.
	const keycloakUrl: string = requireEnv(dependencies.env, 'KEYCLOAK_URL');
	const keycloakRealm: string = requireEnv(dependencies.env, 'KEYCLOAK_REALM');
	const keycloakClientId: string = dependencies.env.KEYCLOAK_CLIENT_ID ?? 'ondewo-nlu-cai-sdk-public';
	const keycloakUserName: string = requireEnv(dependencies.env, 'KEYCLOAK_USER_NAME');
	const keycloakVerifySsl: boolean = dependencies.env.KEYCLOAK_VERIFY_SSL !== 'false';

	dependencies.log(
		`[list_agents] Logging in to Keycloak at ${keycloakUrl} (realm=${keycloakRealm}, ` +
			`client=${keycloakClientId}, user=${keycloakUserName}, verifySsl=${keycloakVerifySsl})`
	);
	const tokenProvider: OfflineTokenProvider = await dependencies.login({
		keycloakUrl,
		realm: keycloakRealm,
		clientId: keycloakClientId,
		username: keycloakUserName,
		password: requireEnv(dependencies.env, 'KEYCLOAK_PASSWORD'),
		keycloakVerifySsl
	});
	dependencies.log('[list_agents] Keycloak login succeeded; obtained a bearer access token');

	try {
		// 2. Build the generated gRPC-web client against the NLU (envoy) endpoint.
		const ondewoHost: string = dependencies.env.ONDEWO_HOST ?? 'localhost';
		const ondewoPort: string = dependencies.env.ONDEWO_PORT ?? '50053';
		let scheme: string = 'http';
		if (dependencies.env.ONDEWO_USE_SECURE_CHANNEL === 'true') {
			scheme = 'https';
		}
		const grpcWebUrl: string = `${scheme}://${ondewoHost}:${ondewoPort}`;
		dependencies.log(`[list_agents] Connecting to NLU gRPC-web endpoint ${grpcWebUrl}`);
		const agentsClient: AgentsService = new dependencies.agentsClientConstructor(grpcWebUrl);

		// 3. Wrap it and issue a representative RPC; the wrapper attaches the bearer authorization header.
		const client: Client = new Client(agentsClient, tokenProvider.getAuthorizationHeader());
		dependencies.log('[list_agents] Issuing ListAgents RPC');
		const request: ListAgentsRequest = new dependencies.listAgentsRequestConstructor();
		const response: ListAgentsResponse = await client.listAllAgents(request);

		// 4. Handle the response.
		const agents: AgentWithOwner[] = response.getAgentsWithOwnersList();
		dependencies.log(`[list_agents] DONE: ListAgents returned ${agents.length} agent(s)`);
	} finally {
		// 5. Stop the background token-refresh loop so the process can exit cleanly.
		tokenProvider.stop();
	}
}

/**
 * Report a failed example run and terminate the process with a non-zero status.
 *
 * @param error - Whatever {@link main} rejected with; grpc-web rejects with an `RpcError` carrying a
 *   numeric `code` and `message`, which are logged when present.
 * @param dependencies - The log sink and process-exit hook to report through.
 */
export function reportFatalError(error: unknown, dependencies: ListAgentsDependencies): void {
	const rpcError: { code?: unknown; message?: unknown } = error as { code?: unknown; message?: unknown };
	if (rpcError !== null && typeof rpcError === 'object' && 'code' in rpcError) {
		dependencies.logError(`[list_agents] RPC failed (code=${String(rpcError.code)}): ${String(rpcError.message)}`);
	}
	dependencies.logError('[list_agents] example failed:', error);
	dependencies.exit(1);
}

/**
 * Entry point used at module scope: run the example only when this file is the process entry point, so
 * importing the module (as the unit test does) has no side effects.
 *
 * @param isMainModule - Whether this module was executed as a script rather than imported.
 * @param dependencies - The dependencies to run {@link main} with.
 * @returns A promise that resolves once the example has finished; a failure is reported through
 *   {@link reportFatalError} rather than rejected.
 */
export function runAsScript(isMainModule: boolean, dependencies: ListAgentsDependencies): Promise<void> {
	if (!isMainModule) {
		return Promise.resolve();
	}
	return main(dependencies).catch((error: unknown): void => {
		reportFatalError(error, dependencies);
	});
}

void runAsScript(require.main === module, DEFAULT_DEPENDENCIES);
