import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_bigtable_admin_v2_table_pb from '../../../../google/bigtable/admin/v2/table_pb';
import * as google_bigtable_admin_v2_bigtable_table_admin_pb from '../../../../google/bigtable/admin/v2/bigtable_table_admin_pb';


export class BigtableTableAdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTable(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_table_pb.Table) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_table_pb.Table>;

  createTableFromSnapshot(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableFromSnapshotRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listTables(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesResponse>;

  getTable(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.GetTableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_table_pb.Table) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_table_pb.Table>;

  deleteTable(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteTableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  modifyColumnFamilies(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.ModifyColumnFamiliesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_table_pb.Table) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_table_pb.Table>;

  dropRowRange(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.DropRowRangeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  generateConsistencyToken(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenResponse>;

  checkConsistency(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyResponse>;

  snapshotTable(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.SnapshotTableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getSnapshot(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.GetSnapshotRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_table_pb.Snapshot) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_table_pb.Snapshot>;

  listSnapshots(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsResponse>;

  deleteSnapshot(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteSnapshotRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class BigtableTableAdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTable(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_table_pb.Table>;

  createTableFromSnapshot(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.CreateTableFromSnapshotRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listTables(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_bigtable_table_admin_pb.ListTablesResponse>;

  getTable(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.GetTableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_table_pb.Table>;

  deleteTable(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteTableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  modifyColumnFamilies(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.ModifyColumnFamiliesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_table_pb.Table>;

  dropRowRange(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.DropRowRangeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  generateConsistencyToken(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_bigtable_table_admin_pb.GenerateConsistencyTokenResponse>;

  checkConsistency(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_bigtable_table_admin_pb.CheckConsistencyResponse>;

  snapshotTable(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.SnapshotTableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getSnapshot(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.GetSnapshotRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_table_pb.Snapshot>;

  listSnapshots(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_v2_bigtable_table_admin_pb.ListSnapshotsResponse>;

  deleteSnapshot(
    request: google_bigtable_admin_v2_bigtable_table_admin_pb.DeleteSnapshotRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

