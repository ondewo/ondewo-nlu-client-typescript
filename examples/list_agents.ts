import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_web_pb';
import { ListAgentsRequest } from '../api/ondewo/nlu/agent_pb';
import { Client } from './ts-client';
import { config as dotenvConfig } from 'dotenv';

// Load environment variables from .env file
dotenvConfig();

interface ClientConfig {
	host: string;
	port: string;
	http_token: string;
	user_name: string;
	password: string;
	grpc_cert: string;
}

const clientConfig: ClientConfig = {
	host: process.env.EXAMPLES_HOST || '',
	port: process.env.EXAMPLES_PORT || '',
	http_token: process.env.EXAMPLES_HTTP_TOKEN || '',
	user_name: process.env.EXAMPLES_USER_NAME || '',
	password: process.env.EXAMPLES_PASSWORD || '',
	grpc_cert: process.env.EXAMPLES_GRPC_CERT || ''
};

const client: Client = new Client(
	new AgentsClient(`${clientConfig.host}:${clientConfig.port}`, {
		user_name: clientConfig.user_name,
		password: clientConfig.password,
		grpc_cert: clientConfig.grpc_cert,
		http_token: clientConfig.http_token
	})
);

// Explicitly define the return type based on `listAllAgents`'s return value
client.listAllAgents(new ListAgentsRequest());
