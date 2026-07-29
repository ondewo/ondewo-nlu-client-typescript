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

import { test as runTestCase } from 'node:test';
import assert from 'node:assert/strict';

import type { ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import type { Metadata, RpcError } from 'grpc-web';
import { Client } from './ts-client';
import type { AgentsService } from './ts-client';

/**
 * Unit tests for the `Client` example wrapper. The generated `AgentsClient` is replaced by an in-memory
 * fake, so the bearer-auth metadata and the callback -> promise handling are proven with NO gRPC backend.
 *
 * Everything pulled from `../api/**` is imported with `import type`: the generated stubs are not loadable
 * under Node (a codegen dependency is missing), so a value import would crash the spec at require time.
 *
 * @module
 */

/** The `Authorization` metadata value the wrapper under test is expected to forward verbatim. */
const AUTHORIZATION_HEADER: string = 'Bearer test-access-token';

/** A `ListAgentsRequest` stand-in; the wrapper never inspects it, it only forwards the object through. */
const FAKE_REQUEST: ListAgentsRequest = {} as ListAgentsRequest;

/**
 * Build a `ListAgentsResponse` stand-in exposing only the accessor the example reads.
 *
 * @param agentCount - How many agents `getAgentsWithOwnersList()` should report.
 * @returns A minimal object typed as a `ListAgentsResponse`.
 */
function makeFakeResponse(agentCount: number): ListAgentsResponse {
	return {
		getAgentsWithOwnersList: (): unknown[] => new Array<unknown>(agentCount),
		getNextPageToken: (): string => ''
	} as unknown as ListAgentsResponse;
}

runTestCase(
	'listAllAgents forwards the request, attaches the bearer metadata, and resolves the response',
	async (): Promise<void> => {
		const expectedResponse: ListAgentsResponse = makeFakeResponse(2);
		let capturedRequest: ListAgentsRequest | null = null;
		let capturedMetadata: Metadata | undefined;

		const fakeAgentsService: AgentsService = {
			listAllAgents(
				request: ListAgentsRequest,
				metadata: Metadata | undefined,
				responseCallback: (error: RpcError, response: ListAgentsResponse) => void
			): void {
				capturedRequest = request;
				capturedMetadata = metadata;
				// grpc-web signals success with a null error.
				responseCallback(null as unknown as RpcError, expectedResponse);
			}
		};

		const client: Client = new Client(fakeAgentsService, AUTHORIZATION_HEADER);
		const response: ListAgentsResponse = await client.listAllAgents(FAKE_REQUEST);

		assert.equal(capturedRequest, FAKE_REQUEST);
		assert.deepStrictEqual(capturedMetadata, { Authorization: AUTHORIZATION_HEADER });
		assert.equal(response, expectedResponse);
		assert.equal(response.getAgentsWithOwnersList().length, 2);
	}
);

runTestCase('listAllAgents resolves when the callback reports an undefined error', async (): Promise<void> => {
	const expectedResponse: ListAgentsResponse = makeFakeResponse(0);

	const fakeAgentsService: AgentsService = {
		listAllAgents(
			_request: ListAgentsRequest,
			_metadata: Metadata | undefined,
			responseCallback: (error: RpcError, response: ListAgentsResponse) => void
		): void {
			// The second falsy error state grpc-web can report, next to null.
			responseCallback(undefined as unknown as RpcError, expectedResponse);
		}
	};

	const client: Client = new Client(fakeAgentsService, AUTHORIZATION_HEADER);
	const response: ListAgentsResponse = await client.listAllAgents(FAKE_REQUEST);

	assert.equal(response, expectedResponse);
});

runTestCase('listAllAgents rejects with the RpcError when the RPC fails', async (): Promise<void> => {
	const rpcError: RpcError = { code: 2, message: 'boom', metadata: {}, name: 'RpcError' };

	const fakeAgentsService: AgentsService = {
		listAllAgents(
			_request: ListAgentsRequest,
			_metadata: Metadata | undefined,
			responseCallback: (error: RpcError, response: ListAgentsResponse) => void
		): void {
			responseCallback(rpcError, null as unknown as ListAgentsResponse);
		}
	};

	const client: Client = new Client(fakeAgentsService, AUTHORIZATION_HEADER);
	await assert.rejects(
		(): Promise<ListAgentsResponse> => client.listAllAgents(FAKE_REQUEST),
		(thrown: unknown): boolean => thrown === rpcError
	);
});

runTestCase(
	'listAllAgents rejects when an error and a response arrive together (the error wins)',
	async (): Promise<void> => {
		const rpcError: RpcError = { code: 7, message: 'denied', metadata: {}, name: 'RpcError' };

		const fakeAgentsService: AgentsService = {
			listAllAgents(
				_request: ListAgentsRequest,
				_metadata: Metadata | undefined,
				responseCallback: (error: RpcError, response: ListAgentsResponse) => void
			): void {
				// Both arguments are set: the wrapper must reject and return before resolving.
				responseCallback(rpcError, makeFakeResponse(3));
			}
		};

		const client: Client = new Client(fakeAgentsService, AUTHORIZATION_HEADER);
		await assert.rejects(
			(): Promise<ListAgentsResponse> => client.listAllAgents(FAKE_REQUEST),
			(thrown: unknown): boolean => thrown === rpcError
		);
	}
);

runTestCase('listAllAgents settles when the callback is invoked asynchronously', async (): Promise<void> => {
	const expectedResponse: ListAgentsResponse = makeFakeResponse(1);

	const fakeAgentsService: AgentsService = {
		listAllAgents(
			_request: ListAgentsRequest,
			_metadata: Metadata | undefined,
			responseCallback: (error: RpcError, response: ListAgentsResponse) => void
		): void {
			// The real transport never answers synchronously.
			setTimeout((): void => {
				responseCallback(null as unknown as RpcError, expectedResponse);
			}, 0);
		}
	};

	const client: Client = new Client(fakeAgentsService, AUTHORIZATION_HEADER);
	const response: ListAgentsResponse = await client.listAllAgents(FAKE_REQUEST);

	assert.equal(response, expectedResponse);
});
