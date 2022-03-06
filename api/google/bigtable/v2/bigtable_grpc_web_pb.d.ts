import * as grpcWeb from 'grpc-web';

import * as google_bigtable_v2_bigtable_pb from '../../../google/bigtable/v2/bigtable_pb';


export class BigtableClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  readRows(
    request: google_bigtable_v2_bigtable_pb.ReadRowsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bigtable_v2_bigtable_pb.ReadRowsResponse>;

  sampleRowKeys(
    request: google_bigtable_v2_bigtable_pb.SampleRowKeysRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bigtable_v2_bigtable_pb.SampleRowKeysResponse>;

  mutateRow(
    request: google_bigtable_v2_bigtable_pb.MutateRowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_v2_bigtable_pb.MutateRowResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_v2_bigtable_pb.MutateRowResponse>;

  mutateRows(
    request: google_bigtable_v2_bigtable_pb.MutateRowsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bigtable_v2_bigtable_pb.MutateRowsResponse>;

  checkAndMutateRow(
    request: google_bigtable_v2_bigtable_pb.CheckAndMutateRowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_v2_bigtable_pb.CheckAndMutateRowResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_v2_bigtable_pb.CheckAndMutateRowResponse>;

  readModifyWriteRow(
    request: google_bigtable_v2_bigtable_pb.ReadModifyWriteRowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_v2_bigtable_pb.ReadModifyWriteRowResponse) => void
  ): grpcWeb.ClientReadableStream<google_bigtable_v2_bigtable_pb.ReadModifyWriteRowResponse>;

}

export class BigtablePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  readRows(
    request: google_bigtable_v2_bigtable_pb.ReadRowsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bigtable_v2_bigtable_pb.ReadRowsResponse>;

  sampleRowKeys(
    request: google_bigtable_v2_bigtable_pb.SampleRowKeysRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bigtable_v2_bigtable_pb.SampleRowKeysResponse>;

  mutateRow(
    request: google_bigtable_v2_bigtable_pb.MutateRowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_v2_bigtable_pb.MutateRowResponse>;

  mutateRows(
    request: google_bigtable_v2_bigtable_pb.MutateRowsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bigtable_v2_bigtable_pb.MutateRowsResponse>;

  checkAndMutateRow(
    request: google_bigtable_v2_bigtable_pb.CheckAndMutateRowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_v2_bigtable_pb.CheckAndMutateRowResponse>;

  readModifyWriteRow(
    request: google_bigtable_v2_bigtable_pb.ReadModifyWriteRowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bigtable_v2_bigtable_pb.ReadModifyWriteRowResponse>;

}

