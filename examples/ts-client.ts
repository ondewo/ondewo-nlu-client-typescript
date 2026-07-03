import type { ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import type { Metadata, RpcError } from 'grpc-web';

/**
 * Structural type of the single generated `AgentsClient` method this wrapper drives.
 *
 * The generated `AgentsClient` is assignable to it, so production code injects the real client while a
 * unit test injects a fake -- no live gRPC backend is required to exercise the wrapper.
 */
export interface AgentsService {
	listAllAgents(
		request: ListAgentsRequest,
		metadata: Metadata | undefined,
		responseCallback: (error: RpcError, response: ListAgentsResponse) => void
	): unknown;
}

/**
 * Thin, promise-returning wrapper around the generated NLU `AgentsClient`.
 *
 * Every call carries the Keycloak access token as the `authorization` gRPC-web metadata header -- the
 * current NLU auth scheme. The legacy cai-token / HTTP-basic `users.login()` credentials were removed in
 * the Keycloak migration; obtain the header from `OfflineTokenProvider.getAuthorizationHeader()`.
 */
export class Client {
	private readonly agentsClient: AgentsService;
	private readonly authorizationHeader: string;

	/**
	 * @param agentsClient - The generated `AgentsClient` (or any structural {@link AgentsService}).
	 * @param authorizationHeader - The `Bearer <access_token>` value, e.g. from
	 *   `OfflineTokenProvider.getAuthorizationHeader()`.
	 */
	public constructor(agentsClient: AgentsService, authorizationHeader: string) {
		this.agentsClient = agentsClient;
		this.authorizationHeader = authorizationHeader;
	}

	/**
	 * List every agent, attaching the bearer `authorization` metadata, as a promise.
	 *
	 * @param request - The `ListAgentsRequest` to send.
	 * @returns A promise resolving to the `ListAgentsResponse`; it rejects with the gRPC `RpcError` on
	 *   a failed call.
	 */
	public listAllAgents(request: ListAgentsRequest): Promise<ListAgentsResponse> {
		const metadata: Metadata = { Authorization: this.authorizationHeader };
		return new Promise<ListAgentsResponse>(
			(
				resolve: (value: ListAgentsResponse | PromiseLike<ListAgentsResponse>) => void,
				reject: (reason?: unknown) => void
			): void => {
				this.agentsClient.listAllAgents(
					request,
					metadata,
					(error: RpcError, response: ListAgentsResponse): void => {
						if (error) {
							reject(error);
							return;
						}
						resolve(response);
					}
				);
			}
		);
	}
}
