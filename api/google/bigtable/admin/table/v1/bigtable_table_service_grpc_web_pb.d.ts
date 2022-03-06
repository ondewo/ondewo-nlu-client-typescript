import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_bigtable_admin_table_v1_bigtable_table_data_pb from '../../../../../google/bigtable/admin/table/v1/bigtable_table_data_pb';
import * as google_bigtable_admin_table_v1_bigtable_table_service_messages_pb from '../../../../../google/bigtable/admin/table/v1/bigtable_table_service_messages_pb';


export class BigtableTableServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_table_v1_bigtable_table_data_pb.Table) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>;

  listTables(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse>;

  getTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_table_v1_bigtable_table_data_pb.Table) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>;

  deleteTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  renameTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createColumnFamily(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>;

  updateColumnFamily(
    request: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>;

  deleteColumnFamily(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  bulkDeleteRows(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class BigtableTableServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>;

  listTables(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse>;

  getTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_table_v1_bigtable_table_data_pb.Table>;

  deleteTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  renameTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createColumnFamily(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>;

  updateColumnFamily(
    request: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily>;

  deleteColumnFamily(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  bulkDeleteRows(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

