import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../google/longrunning/operations_pb';
import * as ondewo_nlu_agent_pb from '../../ondewo/nlu/agent_pb';


export class AgentsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createAgent(
    request: ondewo_nlu_agent_pb.CreateAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.Agent) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.Agent>;

  updateAgent(
    request: ondewo_nlu_agent_pb.UpdateAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.Agent) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.Agent>;

  getAgent(
    request: ondewo_nlu_agent_pb.GetAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.Agent) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.Agent>;

  deleteAgent(
    request: ondewo_nlu_agent_pb.DeleteAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteAllAgents(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listAgents(
    request: ondewo_nlu_agent_pb.ListAgentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ListAgentsResponse>;

  listAgentsOfUser(
    request: ondewo_nlu_agent_pb.ListAgentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.ListAgentsOfUserResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ListAgentsOfUserResponse>;

  listAllAgents(
    request: ondewo_nlu_agent_pb.ListAgentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ListAgentsResponse>;

  addUserToProject(
    request: ondewo_nlu_agent_pb.AddUserToProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  removeUserFromProject(
    request: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listUsersInProject(
    request: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.ListUsersInProjectResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ListUsersInProjectResponse>;

  getPlatformInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.GetPlatformInfoResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.GetPlatformInfoResponse>;

  listProjectPermissions(
    request: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.ListProjectPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ListProjectPermissionsResponse>;

  trainAgent(
    request: ondewo_nlu_agent_pb.TrainAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  buildCache(
    request: ondewo_nlu_agent_pb.BuildCacheRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  exportAgent(
    request: ondewo_nlu_agent_pb.ExportAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  importAgent(
    request: ondewo_nlu_agent_pb.ImportAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  optimizeRankingMatch(
    request: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  restoreAgent(
    request: ondewo_nlu_agent_pb.RestoreAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getAgentStatistics(
    request: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.GetAgentStatisticsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.GetAgentStatisticsResponse>;

  setAgentStatus(
    request: ondewo_nlu_agent_pb.SetAgentStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.Agent) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.Agent>;

  setResources(
    request: ondewo_nlu_agent_pb.SetResourcesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteResources(
    request: ondewo_nlu_agent_pb.DeleteResourcesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  exportResources(
    request: ondewo_nlu_agent_pb.ExportResourcesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_agent_pb.ExportResourcesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ExportResourcesResponse>;

}

export class AgentsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createAgent(
    request: ondewo_nlu_agent_pb.CreateAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.Agent>;

  updateAgent(
    request: ondewo_nlu_agent_pb.UpdateAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.Agent>;

  getAgent(
    request: ondewo_nlu_agent_pb.GetAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.Agent>;

  deleteAgent(
    request: ondewo_nlu_agent_pb.DeleteAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteAllAgents(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listAgents(
    request: ondewo_nlu_agent_pb.ListAgentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.ListAgentsResponse>;

  listAgentsOfUser(
    request: ondewo_nlu_agent_pb.ListAgentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.ListAgentsOfUserResponse>;

  listAllAgents(
    request: ondewo_nlu_agent_pb.ListAgentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.ListAgentsResponse>;

  addUserToProject(
    request: ondewo_nlu_agent_pb.AddUserToProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  removeUserFromProject(
    request: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listUsersInProject(
    request: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.ListUsersInProjectResponse>;

  getPlatformInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.GetPlatformInfoResponse>;

  listProjectPermissions(
    request: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.ListProjectPermissionsResponse>;

  trainAgent(
    request: ondewo_nlu_agent_pb.TrainAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  buildCache(
    request: ondewo_nlu_agent_pb.BuildCacheRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  exportAgent(
    request: ondewo_nlu_agent_pb.ExportAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  importAgent(
    request: ondewo_nlu_agent_pb.ImportAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  optimizeRankingMatch(
    request: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  restoreAgent(
    request: ondewo_nlu_agent_pb.RestoreAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getAgentStatistics(
    request: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.GetAgentStatisticsResponse>;

  setAgentStatus(
    request: ondewo_nlu_agent_pb.SetAgentStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.Agent>;

  setResources(
    request: ondewo_nlu_agent_pb.SetResourcesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteResources(
    request: ondewo_nlu_agent_pb.DeleteResourcesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  exportResources(
    request: ondewo_nlu_agent_pb.ExportResourcesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_agent_pb.ExportResourcesResponse>;

}

