import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb from '../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_data_pb';
import * as google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb from '../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_service_messages_pb';


export class BigtableClusterServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listZones(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse>;

  getCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>;

  listClusters(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse>;

  createCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>;

  updateCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>;

  deleteCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  undeleteCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class BigtableClusterServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listZones(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse>;

  getCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>;

  listClusters(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse>;

  createCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>;

  updateCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>;

  deleteCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  undeleteCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

