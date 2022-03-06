import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_bigtable_v1_bigtable_data_pb from '../../../google/bigtable/v1/bigtable_data_pb';
import * as google_bigtable_v1_bigtable_service_messages_pb from '../../../google/bigtable/v1/bigtable_service_messages_pb';


export class BigtableServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  readRows(
    request: google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse>;

  sampleRowKeys(
    request: google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse>;

  mutateRow(
    request: google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  mutateRows(
    request: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse>;

  checkAndMutateRow(
    request: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse>;

  readModifyWriteRow(
    request: google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_v1_bigtable_data_pb.Row) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_v1_bigtable_data_pb.Row>;

}

export class BigtableServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  readRows(
    request: google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse>;

  sampleRowKeys(
    request: google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse>;

  mutateRow(
    request: google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  mutateRows(
    request: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse>;

  checkAndMutateRow(
    request: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse>;

  readModifyWriteRow(
    request: google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_v1_bigtable_data_pb.Row>;

}

