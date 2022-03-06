import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_dataproc_v1_clusters_pb from '../../../../google/cloud/dataproc/v1/clusters_pb';


export class ClusterControllerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createCluster(
    request: google_cloud_dataproc_v1_clusters_pb.CreateClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateCluster(
    request: google_cloud_dataproc_v1_clusters_pb.UpdateClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteCluster(
    request: google_cloud_dataproc_v1_clusters_pb.DeleteClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getCluster(
    request: google_cloud_dataproc_v1_clusters_pb.GetClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1_clusters_pb.Cluster) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1_clusters_pb.Cluster>;

  listClusters(
    request: google_cloud_dataproc_v1_clusters_pb.ListClustersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1_clusters_pb.ListClustersResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1_clusters_pb.ListClustersResponse>;

  diagnoseCluster(
    request: google_cloud_dataproc_v1_clusters_pb.DiagnoseClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class ClusterControllerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createCluster(
    request: google_cloud_dataproc_v1_clusters_pb.CreateClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateCluster(
    request: google_cloud_dataproc_v1_clusters_pb.UpdateClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteCluster(
    request: google_cloud_dataproc_v1_clusters_pb.DeleteClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getCluster(
    request: google_cloud_dataproc_v1_clusters_pb.GetClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1_clusters_pb.Cluster>;

  listClusters(
    request: google_cloud_dataproc_v1_clusters_pb.ListClustersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1_clusters_pb.ListClustersResponse>;

  diagnoseCluster(
    request: google_cloud_dataproc_v1_clusters_pb.DiagnoseClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

