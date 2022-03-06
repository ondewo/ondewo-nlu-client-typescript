import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_spanner_admin_database_v1_spanner_database_admin_pb from '../../../../../google/spanner/admin/database/v1/spanner_database_admin_pb';


export class DatabaseAdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listDatabases(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesResponse) => void
  ): grpcWeb.ClientReadableStream<google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesResponse>;

  createDatabase(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.CreateDatabaseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getDatabase(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_admin_database_v1_spanner_database_admin_pb.Database) => void
  ): grpcWeb.ClientReadableStream<google_spanner_admin_database_v1_spanner_database_admin_pb.Database>;

  updateDatabaseDdl(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.UpdateDatabaseDdlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  dropDatabase(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.DropDatabaseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getDatabaseDdl(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlResponse) => void
  ): grpcWeb.ClientReadableStream<google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlResponse>;

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

export class DatabaseAdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listDatabases(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_admin_database_v1_spanner_database_admin_pb.ListDatabasesResponse>;

  createDatabase(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.CreateDatabaseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getDatabase(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_admin_database_v1_spanner_database_admin_pb.Database>;

  updateDatabaseDdl(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.UpdateDatabaseDdlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  dropDatabase(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.DropDatabaseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getDatabaseDdl(
    request: google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_admin_database_v1_spanner_database_admin_pb.GetDatabaseDdlResponse>;

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

