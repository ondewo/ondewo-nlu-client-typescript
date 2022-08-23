import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_web_pb';
import { ListAgentsRequest } from '../api/ondewo/nlu/agent_pb';
import { Client } from './ts-client';
const grpcWeb = require('grpc-web');

require('dotenv').config();

let config = {
	host: process.env.EXAMPLES_HOST || '',
	port: process.env.EXAMPLES_PORT || '',
	http_token: process.env.EXAMPLES_HTTP_TOKEN || '',
	user_name: process.env.EXAMPLES_USER_NAME || '',
	password: process.env.EXAMPLES_PASSWORD || '',
	grpc_cert: process.env.EXAMPLES_GRPC_CERT || ''
};

let client = new Client(
	new AgentsClient(`${config.host}:${config.port}`, {
		user_name: config.user_name,
		password: config.password,
		grpc_cert: config.grpc_cert,
		http_token: config.http_token
	})
);

let listagents = client.listAllAgents(new ListAgentsRequest());
console.log(listagents);
//client.createAgent();
