import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_bigtable_admin_v2_instance_pb from '../../../../google/bigtable/admin/v2/instance_pb';
import * as google_bigtable_admin_v2_bigtable_instance_admin_pb from '../../../../google/bigtable/admin/v2/bigtable_instance_admin_pb';


export class BigtableInstanceAdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createInstance(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getInstance(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_instance_pb.Instance) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_instance_pb.Instance>;

  listInstances(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesResponse>;

  updateInstance(
    request: google_bigtable_admin_v2_instance_pb.Instance,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_instance_pb.Instance) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_instance_pb.Instance>;

  partialUpdateInstance(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.PartialUpdateInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteInstance(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createCluster(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getCluster(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_instance_pb.Cluster) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_instance_pb.Cluster>;

  listClusters(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersResponse>;

  updateCluster(
    request: google_bigtable_admin_v2_instance_pb.Cluster,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteCluster(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createAppProfile(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateAppProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_instance_pb.AppProfile) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_instance_pb.AppProfile>;

  getAppProfile(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetAppProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_instance_pb.AppProfile) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_instance_pb.AppProfile>;

  listAppProfiles(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesResponse>;

  updateAppProfile(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.UpdateAppProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteAppProfile(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteAppProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

}

export class BigtableInstanceAdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createInstance(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getInstance(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_instance_pb.Instance>;

  listInstances(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListInstancesResponse>;

  updateInstance(
    request: google_bigtable_admin_v2_instance_pb.Instance,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_instance_pb.Instance>;

  partialUpdateInstance(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.PartialUpdateInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteInstance(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createCluster(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getCluster(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_instance_pb.Cluster>;

  listClusters(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListClustersResponse>;

  updateCluster(
    request: google_bigtable_admin_v2_instance_pb.Cluster,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteCluster(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createAppProfile(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.CreateAppProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_instance_pb.AppProfile>;

  getAppProfile(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.GetAppProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_instance_pb.AppProfile>;

  listAppProfiles(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_bigtable_instance_admin_pb.ListAppProfilesResponse>;

  updateAppProfile(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.UpdateAppProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteAppProfile(
    request: google_bigtable_admin_v2_bigtable_instance_admin_pb.DeleteAppProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

}

