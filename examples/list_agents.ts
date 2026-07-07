import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_web_pb';
import { ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import type { AgentWithOwner } from '../api/ondewo/nlu/agent_pb';
import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';
import { Client } from './ts-client';
import { config as loadDotenv } from 'dotenv';
import * as path from 'path';

// Load the canonical ONDEWO_*/KEYCLOAK_* variables from the committed template next to this script,
// so configuration is read from the environment regardless of the current working directory.
loadDotenv({ path: path.join(__dirname, 'environment.env') });

/**
 * Read a required environment variable, throwing a descriptive error when it is missing or empty.
 *
 * @param name - The environment variable name to read.
 * @returns The non-empty value.
 * @throws {Error} When the variable is unset or blank.
 */
function requireEnv(name: string): string {
	const value: string | undefined = process.env[name];
	if (value === undefined || value.length === 0) {
		throw new Error(`Missing required environment variable ${name} (set it in examples/environment.env)`);
	}
	return value;
}

/**
 * Minimal end-to-end example: a headless Keycloak login followed by a bearer-authenticated `ListAgents`.
 *
 * @returns A promise that resolves once the agents have been listed and printed.
 */
async function main(): Promise<void> {
	console.log('[list_agents] START: headless Keycloak login + ListAgents example');

	// 1. One-time headless login (ROPC + offline_access) against the public NLU SDK Keycloak client.
	//    Bearer authentication is the only supported NLU auth scheme.
	const keycloakUrl: string = requireEnv('KEYCLOAK_URL');
	const keycloakRealm: string = requireEnv('KEYCLOAK_REALM');
	const keycloakClientId: string = process.env.KEYCLOAK_CLIENT_ID ?? 'ondewo-nlu-cai-sdk-public';
	const keycloakUserName: string = requireEnv('KEYCLOAK_USER_NAME');
	const keycloakVerifySsl: boolean = process.env.KEYCLOAK_VERIFY_SSL !== 'false';

	console.log(
		`[list_agents] Logging in to Keycloak at ${keycloakUrl} (realm=${keycloakRealm}, ` +
			`client=${keycloakClientId}, user=${keycloakUserName}, verifySsl=${keycloakVerifySsl})`
	);
	const tokenProvider: OfflineTokenProvider = await login({
		keycloakUrl,
		realm: keycloakRealm,
		clientId: keycloakClientId,
		username: keycloakUserName,
		password: requireEnv('KEYCLOAK_PASSWORD'),
		keycloakVerifySsl
	});
	console.log('[list_agents] Keycloak login succeeded; obtained a bearer access token');

	try {
		// 2. Build the generated gRPC-web client against the NLU (envoy) endpoint.
		const ondewoHost: string = process.env.ONDEWO_HOST ?? 'localhost';
		const ondewoPort: string = process.env.ONDEWO_PORT ?? '50053';
		let scheme: string = 'http';
		if (process.env.ONDEWO_USE_SECURE_CHANNEL === 'true') {
			scheme = 'https';
		}
		const grpcWebUrl: string = `${scheme}://${ondewoHost}:${ondewoPort}`;
		console.log(`[list_agents] Connecting to NLU gRPC-web endpoint ${grpcWebUrl}`);
		const agentsClient: AgentsClient = new AgentsClient(grpcWebUrl);

		// 3. Wrap it and issue a representative RPC; the wrapper attaches the bearer authorization header.
		const client: Client = new Client(agentsClient, tokenProvider.getAuthorizationHeader());
		console.log('[list_agents] Issuing ListAgents RPC');
		const response: ListAgentsResponse = await client.listAllAgents(new ListAgentsRequest());

		// 4. Handle the response.
		const agents: AgentWithOwner[] = response.getAgentsWithOwnersList();
		console.log(`[list_agents] DONE: ListAgents returned ${agents.length} agent(s)`);
	} finally {
		// 5. Stop the background token-refresh loop so the process can exit cleanly.
		tokenProvider.stop();
	}
}

main().catch((error: unknown): void => {
	// grpc-web rejects with an RpcError carrying a numeric `code` and `message`; log them when present.
	const rpcError: { code?: unknown; message?: unknown } = error as { code?: unknown; message?: unknown };
	if (rpcError !== null && typeof rpcError === 'object' && 'code' in rpcError) {
		console.error(`[list_agents] RPC failed (code=${String(rpcError.code)}): ${String(rpcError.message)}`);
	}
	console.error('[list_agents] example failed:', error);
	process.exit(1);
});
