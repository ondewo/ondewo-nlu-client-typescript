import { test as runTestCase } from 'node:test';
import assert from 'node:assert/strict';

import type { ListAgentsRequest, ListAgentsResponse } from '../api/ondewo/nlu/agent_pb';
import type { Metadata, RpcError } from 'grpc-web';
import { login } from '../auth/offlineTokenProvider';
import type { OfflineTokenLoginOptions, OfflineTokenProvider } from '../auth/offlineTokenProvider';
import type { AgentsService } from './ts-client';

// Unit tests for the `list_agents` example. Every side effect -- the environment, the Keycloak login,
// the two generated constructors, the console and the process exit -- is injected, so the example is
// exercised end to end with NO Keycloak, NO gRPC backend and NO process termination.

/**
 * Stand-in for the generated `ListAgentsRequest`. It is seeded into the module cache below AND
 * injected as the request constructor; the example only forwards the instance, never inspects it.
 */
class FakeListAgentsRequest {}

/** Stand-in for the generated `AgentsClient` constructor in the pre-seeded module cache. */
class FakeGeneratedAgentsClient {}

/**
 * Install `moduleExports` as the cached CommonJS module for `moduleSpecifier`, so a later `require` of
 * that specifier returns the fake instead of executing the real file.
 *
 * The generated gRPC-web stubs cannot be loaded under Node at all: `api/google/api/annotations_pb.js`
 * requires `google/api/http_pb.js`, which the proto compiler never emits. That is a pre-existing
 * upstream codegen gap; pre-seeding the cache keeps this unit test independent of it.
 *
 * @param moduleSpecifier - The module specifier, resolved relative to this spec file.
 * @param moduleExports - The exports object the fake module should expose.
 */
function seedModuleCache(moduleSpecifier: string, moduleExports: Record<string, unknown>): void {
	const resolvedPath: string = require.resolve(moduleSpecifier);
	require.cache[resolvedPath] = {
		id: resolvedPath,
		filename: resolvedPath,
		loaded: true,
		exports: moduleExports
	} as unknown as NodeModule;
}

seedModuleCache('../api/ondewo/nlu/agent_grpc_web_pb', { AgentsClient: FakeGeneratedAgentsClient });
seedModuleCache('../api/ondewo/nlu/agent_pb', { ListAgentsRequest: FakeListAgentsRequest });

// Imported AFTER the cache seeding above ON PURPOSE: this import is what loads the module under test,
// which in turn requires the two generated stubs at its own module scope.
import { DEFAULT_DEPENDENCIES, main, reportFatalError, requireEnv, runAsScript } from './list_agents';
import type { ListAgentsDependencies, ListAgentsRequestConstructor } from './list_agents';

/** The `Authorization` header value the fake token provider hands out. */
const AUTHORIZATION_HEADER: string = 'Bearer test-access-token';

/** How many agents the faked `ListAgents` response reports. */
const AGENT_COUNT: number = 2;

/** The minimum environment `main` accepts: exactly the variables `requireEnv` insists on. */
const REQUIRED_ENV: Record<string, string | undefined> = {
	KEYCLOAK_URL: 'https://auth.example.test',
	KEYCLOAK_REALM: 'test-realm',
	KEYCLOAK_USER_NAME: 'tester',
	KEYCLOAK_PASSWORD: 'secret'
};

/** The six progress lines a successful run emits, in order, with every value left at its default. */
const EXPECTED_DEFAULT_LOG_LINES: string[] = [
	'[list_agents] START: headless Keycloak login + ListAgents example',
	'[list_agents] Logging in to Keycloak at https://auth.example.test (realm=test-realm, ' +
		'client=ondewo-nlu-cai-sdk-public, user=tester, verifySsl=true)',
	'[list_agents] Keycloak login succeeded; obtained a bearer access token',
	'[list_agents] Connecting to NLU gRPC-web endpoint http://localhost:50053',
	'[list_agents] Issuing ListAgents RPC',
	'[list_agents] DONE: ListAgents returned 2 agent(s)'
];

/** Everything one run of the example did to its injected dependencies. */
interface RecordedRun {
	/** Every line passed to `log`, in call order. */
	readonly logLines: string[];
	/** Every `logError` call, captured as its complete argument list. */
	readonly errorCalls: unknown[][];
	/** Every status code passed to `exit`. */
	readonly exitCodes: number[];
	/** The options of every `login` call. */
	readonly loginOptions: OfflineTokenLoginOptions[];
	/** The gRPC-web URL every `AgentsClient` was constructed with. */
	readonly grpcWebUrls: string[];
	/** The request object of every issued RPC. */
	readonly requests: unknown[];
	/** The `Authorization` metadata of every issued RPC. */
	readonly authorizationHeaders: (string | undefined)[];
	/** How often the token provider's `stop()` was called. */
	stopCount: number;
}

/** A dependency set wired to fakes, together with the recorder those fakes write to. */
interface TestHarness {
	/** The dependencies to hand to the module under test. */
	readonly dependencies: ListAgentsDependencies;
	/** What the example did to them. */
	readonly recorded: RecordedRun;
}

/**
 * Build a fully faked dependency set: an in-memory environment, a login resolving to a fake token
 * provider, a fake `AgentsClient` answering the RPC, and log/exit sinks that only record.
 *
 * @param env - The environment the example should read its configuration from.
 * @param rpcError - The `RpcError` the faked RPC fails with, or `null` to answer with two agents.
 * @returns The dependencies plus the recorder they write to.
 */
function createHarness(env: Record<string, string | undefined>, rpcError: RpcError | null): TestHarness {
	const recorded: RecordedRun = {
		logLines: [],
		errorCalls: [],
		exitCodes: [],
		loginOptions: [],
		grpcWebUrls: [],
		requests: [],
		authorizationHeaders: [],
		stopCount: 0
	};

	const tokenProvider: OfflineTokenProvider = {
		getAuthorizationHeader: (): string => AUTHORIZATION_HEADER,
		stop: (): void => {
			recorded.stopCount += 1;
		}
	} as unknown as OfflineTokenProvider;

	const response: ListAgentsResponse = {
		getAgentsWithOwnersList: (): unknown[] => new Array<unknown>(AGENT_COUNT)
	} as unknown as ListAgentsResponse;

	/** Fake gRPC-web client: records how it was built and how it was called, then answers immediately. */
	class RecordingAgentsClient implements AgentsService {
		/**
		 * @param grpcWebUrl - The endpoint the example built from the environment.
		 */
		public constructor(grpcWebUrl: string) {
			recorded.grpcWebUrls.push(grpcWebUrl);
		}

		/**
		 * Answer the RPC synchronously with the configured error or response.
		 *
		 * @param request - The forwarded `ListAgentsRequest`.
		 * @param metadata - The gRPC-web metadata the wrapper attached.
		 * @param responseCallback - The grpc-web style completion callback.
		 */
		public listAllAgents(
			request: ListAgentsRequest,
			metadata: Metadata | undefined,
			responseCallback: (error: RpcError, response: ListAgentsResponse) => void
		): void {
			recorded.requests.push(request);
			recorded.authorizationHeaders.push(metadata?.Authorization);
			responseCallback(rpcError as RpcError, response);
		}
	}

	const dependencies: ListAgentsDependencies = {
		env,
		login: (options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider> => {
			recorded.loginOptions.push(options);
			return Promise.resolve(tokenProvider);
		},
		agentsClientConstructor: RecordingAgentsClient,
		listAgentsRequestConstructor: FakeListAgentsRequest as unknown as ListAgentsRequestConstructor,
		log: (message: string): void => {
			recorded.logLines.push(message);
		},
		logError: (message: string, ...details: unknown[]): void => {
			recorded.errorCalls.push([message, ...details]);
		},
		exit: (code: number): void => {
			recorded.exitCodes.push(code);
		}
	};

	return { dependencies, recorded };
}

runTestCase('requireEnv returns the value of a variable that is set', (): void => {
	assert.equal(requireEnv({ KEYCLOAK_URL: 'https://auth.example.test' }, 'KEYCLOAK_URL'), 'https://auth.example.test');
});

runTestCase('requireEnv throws when the variable is unset', (): void => {
	assert.throws((): string => requireEnv({}, 'KEYCLOAK_URL'), {
		message: 'Missing required environment variable KEYCLOAK_URL (set it in examples/environment.env)'
	});
});

runTestCase('requireEnv throws when the variable is an empty string', (): void => {
	assert.throws((): string => requireEnv({ KEYCLOAK_REALM: '' }, 'KEYCLOAK_REALM'), {
		message: 'Missing required environment variable KEYCLOAK_REALM (set it in examples/environment.env)'
	});
});

runTestCase(
	'main falls back to every default (client id, host, port, http scheme, verified SSL) and stops the provider',
	async (): Promise<void> => {
		const harness: TestHarness = createHarness({ ...REQUIRED_ENV }, null);

		await main(harness.dependencies);

		assert.deepEqual(harness.recorded.logLines, EXPECTED_DEFAULT_LOG_LINES);
		assert.deepEqual(harness.recorded.loginOptions, [
			{
				keycloakUrl: 'https://auth.example.test',
				realm: 'test-realm',
				clientId: 'ondewo-nlu-cai-sdk-public',
				username: 'tester',
				password: 'secret',
				keycloakVerifySsl: true
			}
		]);
		assert.deepEqual(harness.recorded.grpcWebUrls, ['http://localhost:50053']);
		assert.deepEqual(harness.recorded.authorizationHeaders, [AUTHORIZATION_HEADER]);
		assert.ok(harness.recorded.requests[0] instanceof FakeListAgentsRequest);
		assert.equal(harness.recorded.stopCount, 1);
		assert.deepEqual(harness.recorded.errorCalls, []);
		assert.deepEqual(harness.recorded.exitCodes, []);
	}
);

runTestCase('main honours every configuration override and builds a secure endpoint', async (): Promise<void> => {
	const harness: TestHarness = createHarness(
		{
			...REQUIRED_ENV,
			KEYCLOAK_CLIENT_ID: 'custom-sdk-client',
			KEYCLOAK_VERIFY_SSL: 'false',
			ONDEWO_HOST: 'nlu.example.test',
			ONDEWO_PORT: '443',
			ONDEWO_USE_SECURE_CHANNEL: 'true'
		},
		null
	);

	await main(harness.dependencies);

	assert.equal(harness.recorded.loginOptions[0].clientId, 'custom-sdk-client');
	assert.equal(harness.recorded.loginOptions[0].keycloakVerifySsl, false);
	assert.equal(
		harness.recorded.logLines[1],
		'[list_agents] Logging in to Keycloak at https://auth.example.test (realm=test-realm, ' +
			'client=custom-sdk-client, user=tester, verifySsl=false)'
	);
	assert.deepEqual(harness.recorded.grpcWebUrls, ['https://nlu.example.test:443']);
	assert.equal(
		harness.recorded.logLines[3],
		'[list_agents] Connecting to NLU gRPC-web endpoint https://nlu.example.test:443'
	);
	assert.equal(harness.recorded.stopCount, 1);
});

runTestCase('main stops the token provider and rethrows when the RPC fails', async (): Promise<void> => {
	const rpcError: RpcError = { code: 14, message: 'unavailable', metadata: {}, name: 'RpcError' };
	const harness: TestHarness = createHarness({ ...REQUIRED_ENV }, rpcError);

	await assert.rejects(
		(): Promise<void> => main(harness.dependencies),
		(thrown: unknown): boolean => thrown === rpcError
	);

	assert.equal(harness.recorded.stopCount, 1);
	assert.equal(harness.recorded.logLines.length, 5);
});

runTestCase('reportFatalError reports a null rejection reason and exits non-zero', (): void => {
	const harness: TestHarness = createHarness({ ...REQUIRED_ENV }, null);

	reportFatalError(null, harness.dependencies);

	assert.deepEqual(harness.recorded.errorCalls, [['[list_agents] example failed:', null]]);
	assert.deepEqual(harness.recorded.exitCodes, [1]);
});

runTestCase('reportFatalError reports a non-object rejection reason without an RPC line', (): void => {
	const harness: TestHarness = createHarness({ ...REQUIRED_ENV }, null);

	reportFatalError('boom', harness.dependencies);

	assert.deepEqual(harness.recorded.errorCalls, [['[list_agents] example failed:', 'boom']]);
	assert.deepEqual(harness.recorded.exitCodes, [1]);
});

runTestCase('reportFatalError reports a plain Error (no code property) without an RPC line', (): void => {
	const harness: TestHarness = createHarness({ ...REQUIRED_ENV }, null);
	const error: Error = new Error('login failed');

	reportFatalError(error, harness.dependencies);

	assert.deepEqual(harness.recorded.errorCalls, [['[list_agents] example failed:', error]]);
	assert.deepEqual(harness.recorded.exitCodes, [1]);
});

runTestCase('reportFatalError prefixes an RPC line when the reason carries a code', (): void => {
	const harness: TestHarness = createHarness({ ...REQUIRED_ENV }, null);
	const error: RpcError = { code: 7, message: 'permission denied', metadata: {}, name: 'RpcError' };

	reportFatalError(error, harness.dependencies);

	assert.deepEqual(harness.recorded.errorCalls, [
		['[list_agents] RPC failed (code=7): permission denied'],
		['[list_agents] example failed:', error]
	]);
	assert.deepEqual(harness.recorded.exitCodes, [1]);
});

runTestCase('runAsScript does nothing when the module was imported rather than executed', async (): Promise<void> => {
	const harness: TestHarness = createHarness({ ...REQUIRED_ENV }, null);

	await runAsScript(false, harness.dependencies);

	assert.deepEqual(harness.recorded.logLines, []);
	assert.deepEqual(harness.recorded.loginOptions, []);
	assert.deepEqual(harness.recorded.errorCalls, []);
	assert.deepEqual(harness.recorded.exitCodes, []);
});

runTestCase('runAsScript runs the example when executed as a script', async (): Promise<void> => {
	const harness: TestHarness = createHarness({ ...REQUIRED_ENV }, null);

	await runAsScript(true, harness.dependencies);

	assert.deepEqual(harness.recorded.logLines, EXPECTED_DEFAULT_LOG_LINES);
	assert.deepEqual(harness.recorded.errorCalls, []);
	assert.deepEqual(harness.recorded.exitCodes, []);
});

runTestCase('runAsScript reports the failure and exits non-zero instead of rejecting', async (): Promise<void> => {
	const rpcError: RpcError = { code: 14, message: 'unavailable', metadata: {}, name: 'RpcError' };
	const harness: TestHarness = createHarness({ ...REQUIRED_ENV }, rpcError);

	await runAsScript(true, harness.dependencies);

	assert.deepEqual(harness.recorded.errorCalls, [
		['[list_agents] RPC failed (code=14): unavailable'],
		['[list_agents] example failed:', rpcError]
	]);
	assert.deepEqual(harness.recorded.exitCodes, [1]);
	assert.equal(harness.recorded.stopCount, 1);
});

runTestCase('DEFAULT_DEPENDENCIES wires the real environment, auth helper, stubs, console and process', (): void => {
	assert.equal(DEFAULT_DEPENDENCIES.env, process.env);
	assert.equal(DEFAULT_DEPENDENCIES.login, login);
	assert.equal(DEFAULT_DEPENDENCIES.agentsClientConstructor, FakeGeneratedAgentsClient);
	assert.equal(DEFAULT_DEPENDENCIES.listAgentsRequestConstructor, FakeListAgentsRequest);
	assert.equal(DEFAULT_DEPENDENCIES.log, console.log);
	assert.equal(DEFAULT_DEPENDENCIES.logError, console.error);
	assert.equal(DEFAULT_DEPENDENCIES.exit, process.exit);
});
