import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_dialogflow_v2beta1_agent_pb from '../../../../google/cloud/dialogflow/v2beta1/agent_pb';


export class AgentsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAgent(
    request: google_cloud_dialogflow_v2beta1_agent_pb.GetAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_agent_pb.Agent) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_agent_pb.Agent>;

  searchAgents(
    request: google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsResponse>;

  trainAgent(
    request: google_cloud_dialogflow_v2beta1_agent_pb.TrainAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  exportAgent(
    request: google_cloud_dialogflow_v2beta1_agent_pb.ExportAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  importAgent(
    request: google_cloud_dialogflow_v2beta1_agent_pb.ImportAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  restoreAgent(
    request: google_cloud_dialogflow_v2beta1_agent_pb.RestoreAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class AgentsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAgent(
    request: google_cloud_dialogflow_v2beta1_agent_pb.GetAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_agent_pb.Agent>;

  searchAgents(
    request: google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_agent_pb.SearchAgentsResponse>;

  trainAgent(
    request: google_cloud_dialogflow_v2beta1_agent_pb.TrainAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  exportAgent(
    request: google_cloud_dialogflow_v2beta1_agent_pb.ExportAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  importAgent(
    request: google_cloud_dialogflow_v2beta1_agent_pb.ImportAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  restoreAgent(
    request: google_cloud_dialogflow_v2beta1_agent_pb.RestoreAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

