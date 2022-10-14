import * as grpcWeb from 'grpc-web';
import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_web_pb';
import { Agent, CreateAgentRequest, ListAgentsRequest } from '../api/ondewo/nlu/agent_pb';

export class Client {
	agentsClient: AgentsClient;
	constructor(agentsClient: AgentsClient) {
		this.agentsClient = agentsClient;
	}

	createAgent(agent: CreateAgentRequest) {
		return this.agentsClient.createAgent(agent, undefined, () => {
			console.log('CreateAgents Done');
		});
	}

	listAllAgents(listAgentsRequest: ListAgentsRequest) {
		return this.agentsClient.listAllAgents(listAgentsRequest, undefined, () => {
			console.log('ListAllAgents Done');
		});
	}
}
