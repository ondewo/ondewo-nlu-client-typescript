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

import type { ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import type { Metadata, RpcError } from 'grpc-web';

/**
 * Promise-returning example wrapper around the generated NLU `AgentsClient`.
 *
 * Shows the supported NLU auth scheme (an `Authorization: Bearer <access_token>` gRPC-web metadata
 * header, obtained from `OfflineTokenProvider.getAuthorizationHeader()`) and the callback -> promise
 * adaptation of the generated gRPC-web surface.
 *
 * @module
 */

/**
 * Structural type of the single generated `AgentsClient` method this wrapper drives.
 *
 * The generated `AgentsClient` is assignable to it, so production code injects the real client while a
 * unit test injects a fake -- no live gRPC backend is required to exercise the wrapper.
 */
export interface AgentsService {
	/**
	 * Issue the `ListAllAgents` RPC, reporting the outcome through a node-style callback.
	 *
	 * @param request - The `ListAgentsRequest` to send.
	 * @param metadata - The gRPC-web call metadata (the `Authorization` header), or `undefined`.
	 * @param responseCallback - Invoked with the `RpcError` on failure, or a falsy error plus the
	 *   `ListAgentsResponse` on success.
	 * @returns The generated client's call handle; this wrapper ignores it.
	 */
	listAllAgents(
		request: ListAgentsRequest,
		metadata: Metadata | undefined,
		responseCallback: (error: RpcError, response: ListAgentsResponse) => void
	): unknown;
}

/**
 * Thin, promise-returning wrapper around the generated NLU `AgentsClient`.
 *
 * Every call carries the Keycloak access token as the `Authorization` gRPC-web metadata header -- the
 * only supported NLU auth scheme; obtain the header from `OfflineTokenProvider.getAuthorizationHeader()`.
 */
export class Client {
	/** The injected agents client every RPC is delegated to (the generated client in production). */
	private readonly agentsClient: AgentsService;
	/** The `Bearer <access_token>` value sent as the `Authorization` metadata header on every call. */
	private readonly authorizationHeader: string;

	/**
	 * Construct a wrapper binding one agents client to one bearer authorization header.
	 *
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
				this.agentsClient.listAllAgents(request, metadata, (error: RpcError, response: ListAgentsResponse): void => {
					if (error) {
						reject(error);
						return;
					}
					resolve(response);
				});
			}
		);
	}
}
