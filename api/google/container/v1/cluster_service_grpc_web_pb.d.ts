import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_container_v1_cluster_service_pb from '../../../google/container/v1/cluster_service_pb';


export class ClusterManagerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listClusters(
    request: google_container_v1_cluster_service_pb.ListClustersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.ListClustersResponse) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.ListClustersResponse>;

  getCluster(
    request: google_container_v1_cluster_service_pb.GetClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Cluster) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Cluster>;

  createCluster(
    request: google_container_v1_cluster_service_pb.CreateClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  updateCluster(
    request: google_container_v1_cluster_service_pb.UpdateClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  updateNodePool(
    request: google_container_v1_cluster_service_pb.UpdateNodePoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setNodePoolAutoscaling(
    request: google_container_v1_cluster_service_pb.SetNodePoolAutoscalingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setLoggingService(
    request: google_container_v1_cluster_service_pb.SetLoggingServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setMonitoringService(
    request: google_container_v1_cluster_service_pb.SetMonitoringServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setAddonsConfig(
    request: google_container_v1_cluster_service_pb.SetAddonsConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setLocations(
    request: google_container_v1_cluster_service_pb.SetLocationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  updateMaster(
    request: google_container_v1_cluster_service_pb.UpdateMasterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setMasterAuth(
    request: google_container_v1_cluster_service_pb.SetMasterAuthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  deleteCluster(
    request: google_container_v1_cluster_service_pb.DeleteClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  listOperations(
    request: google_container_v1_cluster_service_pb.ListOperationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.ListOperationsResponse) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.ListOperationsResponse>;

  getOperation(
    request: google_container_v1_cluster_service_pb.GetOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  cancelOperation(
    request: google_container_v1_cluster_service_pb.CancelOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getServerConfig(
    request: google_container_v1_cluster_service_pb.GetServerConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.ServerConfig) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.ServerConfig>;

  listNodePools(
    request: google_container_v1_cluster_service_pb.ListNodePoolsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.ListNodePoolsResponse) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.ListNodePoolsResponse>;

  getNodePool(
    request: google_container_v1_cluster_service_pb.GetNodePoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.NodePool) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.NodePool>;

  createNodePool(
    request: google_container_v1_cluster_service_pb.CreateNodePoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  deleteNodePool(
    request: google_container_v1_cluster_service_pb.DeleteNodePoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  rollbackNodePoolUpgrade(
    request: google_container_v1_cluster_service_pb.RollbackNodePoolUpgradeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setNodePoolManagement(
    request: google_container_v1_cluster_service_pb.SetNodePoolManagementRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setLabels(
    request: google_container_v1_cluster_service_pb.SetLabelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setLegacyAbac(
    request: google_container_v1_cluster_service_pb.SetLegacyAbacRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  startIPRotation(
    request: google_container_v1_cluster_service_pb.StartIPRotationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  completeIPRotation(
    request: google_container_v1_cluster_service_pb.CompleteIPRotationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setNodePoolSize(
    request: google_container_v1_cluster_service_pb.SetNodePoolSizeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setNetworkPolicy(
    request: google_container_v1_cluster_service_pb.SetNetworkPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

  setMaintenancePolicy(
    request: google_container_v1_cluster_service_pb.SetMaintenancePolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_container_v1_cluster_service_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_container_v1_cluster_service_pb.Operation>;

}

export class ClusterManagerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listClusters(
    request: google_container_v1_cluster_service_pb.ListClustersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.ListClustersResponse>;

  getCluster(
    request: google_container_v1_cluster_service_pb.GetClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Cluster>;

  createCluster(
    request: google_container_v1_cluster_service_pb.CreateClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  updateCluster(
    request: google_container_v1_cluster_service_pb.UpdateClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  updateNodePool(
    request: google_container_v1_cluster_service_pb.UpdateNodePoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setNodePoolAutoscaling(
    request: google_container_v1_cluster_service_pb.SetNodePoolAutoscalingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setLoggingService(
    request: google_container_v1_cluster_service_pb.SetLoggingServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setMonitoringService(
    request: google_container_v1_cluster_service_pb.SetMonitoringServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setAddonsConfig(
    request: google_container_v1_cluster_service_pb.SetAddonsConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setLocations(
    request: google_container_v1_cluster_service_pb.SetLocationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  updateMaster(
    request: google_container_v1_cluster_service_pb.UpdateMasterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setMasterAuth(
    request: google_container_v1_cluster_service_pb.SetMasterAuthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  deleteCluster(
    request: google_container_v1_cluster_service_pb.DeleteClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  listOperations(
    request: google_container_v1_cluster_service_pb.ListOperationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.ListOperationsResponse>;

  getOperation(
    request: google_container_v1_cluster_service_pb.GetOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  cancelOperation(
    request: google_container_v1_cluster_service_pb.CancelOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getServerConfig(
    request: google_container_v1_cluster_service_pb.GetServerConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.ServerConfig>;

  listNodePools(
    request: google_container_v1_cluster_service_pb.ListNodePoolsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.ListNodePoolsResponse>;

  getNodePool(
    request: google_container_v1_cluster_service_pb.GetNodePoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.NodePool>;

  createNodePool(
    request: google_container_v1_cluster_service_pb.CreateNodePoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  deleteNodePool(
    request: google_container_v1_cluster_service_pb.DeleteNodePoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  rollbackNodePoolUpgrade(
    request: google_container_v1_cluster_service_pb.RollbackNodePoolUpgradeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setNodePoolManagement(
    request: google_container_v1_cluster_service_pb.SetNodePoolManagementRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setLabels(
    request: google_container_v1_cluster_service_pb.SetLabelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setLegacyAbac(
    request: google_container_v1_cluster_service_pb.SetLegacyAbacRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  startIPRotation(
    request: google_container_v1_cluster_service_pb.StartIPRotationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  completeIPRotation(
    request: google_container_v1_cluster_service_pb.CompleteIPRotationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setNodePoolSize(
    request: google_container_v1_cluster_service_pb.SetNodePoolSizeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setNetworkPolicy(
    request: google_container_v1_cluster_service_pb.SetNetworkPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

  setMaintenancePolicy(
    request: google_container_v1_cluster_service_pb.SetMaintenancePolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_container_v1_cluster_service_pb.Operation>;

}

