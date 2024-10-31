import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_web_pb';
import { ListAgentsRequest, Agent } from '../api/ondewo/nlu/agent_pb';
import { Client } from './ts-client';
import dotenv from 'dotenv';

dotenv.config();

interface Config {
	host: string;
	port: string;
	httpToken: string;
	userName: string;
	password: string;
	grpcCert: string;
}

const config: Config = {
	host: process.env.EXAMPLES_HOST || '',
	port: process.env.EXAMPLES_PORT || '',
	httpToken: process.env.EXAMPLES_HTTP_TOKEN || '',
	userName: process.env.EXAMPLES_USER_NAME || '',
	password: process.env.EXAMPLES_PASSWORD || '',
	grpcCert: process.env.EXAMPLES_GRPC_CERT || '',
};

interface AgentClientOptions {
	userName: string;
	password: string;
	grpcCert: string;
	httpToken: string;
}

const agentClientOptions: AgentClientOptions = {
	userName: config.userName,
	password: config.password,
	grpcCert: config.grpcCert,
	httpToken: config.httpToken,
};

const client: Client = new Client(new AgentsClient(`${config.host}:${config.port}`, agentClientOptions));

// Explicitly define the return type based on `listAllAgents`'s return value
const listAgents: Promise<Agent[]> = client.listAllAgents(new ListAgentsRequest());
console.log(listAgents);
