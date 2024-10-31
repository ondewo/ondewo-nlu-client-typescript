import { AgentsClient } from '../api/ondewo/nlu/agent_grpc_web_pb';
import { CreateAgentRequest, ListAgentsRequest } from '../api/ondewo/nlu/agent_pb';

export class Client {
	private agentsClient: AgentsClient;

	public constructor(agentsClient: AgentsClient) {
		this.agentsClient = agentsClient;
	}

	public createAgent(agent: CreateAgentRequest): void {
		this.agentsClient.createAgent(agent, undefined, () => {
			console.log('CreateAgent Done');
		});
	}

	public listAllAgents(listAgentsRequest: ListAgentsRequest): void {
		this.agentsClient.listAllAgents(listAgentsRequest, undefined, () => {
			console.log('ListAllAgents Done');
		});
	}
}
