import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_web_pb';
import { ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import type { AgentWithOwner } from '../api/ondewo/nlu/agent_pb';
import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';
import { Client } from './ts-client';
import { config as loadDotenv } from 'dotenv';

// Load EXAMPLES_* variables from a local .env file (see the assignments below for the expected names).
loadDotenv();

/**
 * Minimal end-to-end example: a headless Keycloak login followed by a bearer-authenticated `ListAgents`.
 *
 * @returns A promise that resolves once the agents have been listed and printed.
 */
async function main(): Promise<void> {
	// 1. One-time headless login (ROPC + offline_access) against the public NLU SDK Keycloak client.
	//    Bearer authentication is the only supported NLU auth scheme.
	const tokenProvider: OfflineTokenProvider = await login({
		keycloakUrl: process.env.EXAMPLES_KEYCLOAK_URL ?? '',
		realm: process.env.EXAMPLES_KEYCLOAK_REALM ?? '',
		clientId: process.env.EXAMPLES_KEYCLOAK_CLIENT_ID ?? 'ondewo-nlu-cai-sdk-public',
		username: process.env.EXAMPLES_USER_NAME ?? '',
		password: process.env.EXAMPLES_PASSWORD ?? ''
	});

	try {
		// 2. Build the generated gRPC-web client against the NLU (envoy) endpoint.
		const host: string = process.env.EXAMPLES_HOST ?? 'http://localhost:50053';
		const agentsClient: AgentsClient = new AgentsClient(host);

		// 3. Wrap it and issue a representative RPC; the wrapper attaches the bearer authorization header.
		const client: Client = new Client(agentsClient, tokenProvider.getAuthorizationHeader());
		const response: ListAgentsResponse = await client.listAllAgents(new ListAgentsRequest());

		// 4. Handle the response.
		const agents: AgentWithOwner[] = response.getAgentsWithOwnersList();
		console.log(`ListAgents returned ${agents.length} agent(s).`);
	} finally {
		// 5. Stop the background token-refresh loop so the process can exit cleanly.
		tokenProvider.stop();
	}
}

main().catch((error: unknown): void => {
	console.error('list_agents example failed:', error);
	process.exitCode = 1;
});
