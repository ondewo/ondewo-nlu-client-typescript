import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_spanner_admin_instance_v1_spanner_instance_admin_pb from '../../../../../google/spanner/admin/instance/v1/spanner_instance_admin_pb';


export class InstanceAdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listInstanceConfigs(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsResponse>;

  getInstanceConfig(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_admin_instance_v1_spanner_instance_admin_pb.InstanceConfig) => void
  ): grpcWeb.ClientReadableStream<google_spanner_admin_instance_v1_spanner_instance_admin_pb.InstanceConfig>;

  listInstances(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesResponse) => void
  ): grpcWeb.ClientReadableStream<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesResponse>;

  getInstance(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_admin_instance_v1_spanner_instance_admin_pb.Instance) => void
  ): grpcWeb.ClientReadableStream<google_spanner_admin_instance_v1_spanner_instance_admin_pb.Instance>;

  createInstance(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.CreateInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateInstance(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.UpdateInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteInstance(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.DeleteInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
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

export class InstanceAdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listInstanceConfigs(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstanceConfigsResponse>;

  getInstanceConfig(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_admin_instance_v1_spanner_instance_admin_pb.InstanceConfig>;

  listInstances(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_admin_instance_v1_spanner_instance_admin_pb.ListInstancesResponse>;

  getInstance(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.GetInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_admin_instance_v1_spanner_instance_admin_pb.Instance>;

  createInstance(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.CreateInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateInstance(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.UpdateInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteInstance(
    request: google_spanner_admin_instance_v1_spanner_instance_admin_pb.DeleteInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

}

