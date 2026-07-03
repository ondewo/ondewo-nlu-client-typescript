import { test as runTestCase } from 'node:test';
import assert from 'node:assert/strict';

import type { ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import type { Metadata, RpcError } from 'grpc-web';
import { Client } from './ts-client';
import type { AgentsService } from './ts-client';

// Unit tests for the `Client` example wrapper. The generated `AgentsClient` is replaced by an in-memory
// fake, so the bearer-auth metadata and the callback -> promise handling are proven with NO gRPC backend.

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

runTestCase('listAllAgents forwards the request, attaches the bearer metadata, and resolves the response', async (): Promise<void> => {
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
	assert.ok(capturedMetadata);
	assert.equal(capturedMetadata.Authorization, AUTHORIZATION_HEADER);
	assert.equal(response, expectedResponse);
	assert.equal(response.getAgentsWithOwnersList().length, 2);
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
