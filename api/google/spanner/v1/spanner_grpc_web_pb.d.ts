import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_spanner_v1_transaction_pb from '../../../google/spanner/v1/transaction_pb';
import * as google_spanner_v1_result_set_pb from '../../../google/spanner/v1/result_set_pb';
import * as google_spanner_v1_spanner_pb from '../../../google/spanner/v1/spanner_pb';


export class SpannerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSession(
    request: google_spanner_v1_spanner_pb.CreateSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_spanner_pb.Session) => void
  ): grpcWeb.ClientReadableStream<google_spanner_v1_spanner_pb.Session>;

  getSession(
    request: google_spanner_v1_spanner_pb.GetSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_spanner_pb.Session) => void
  ): grpcWeb.ClientReadableStream<google_spanner_v1_spanner_pb.Session>;

  listSessions(
    request: google_spanner_v1_spanner_pb.ListSessionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_spanner_pb.ListSessionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_spanner_v1_spanner_pb.ListSessionsResponse>;

  deleteSession(
    request: google_spanner_v1_spanner_pb.DeleteSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  executeSql(
    request: google_spanner_v1_spanner_pb.ExecuteSqlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_result_set_pb.ResultSet) => void
  ): grpcWeb.ClientReadableStream<google_spanner_v1_result_set_pb.ResultSet>;

  executeStreamingSql(
    request: google_spanner_v1_spanner_pb.ExecuteSqlRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_spanner_v1_result_set_pb.PartialResultSet>;

  read(
    request: google_spanner_v1_spanner_pb.ReadRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_result_set_pb.ResultSet) => void
  ): grpcWeb.ClientReadableStream<google_spanner_v1_result_set_pb.ResultSet>;

  streamingRead(
    request: google_spanner_v1_spanner_pb.ReadRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_spanner_v1_result_set_pb.PartialResultSet>;

  beginTransaction(
    request: google_spanner_v1_spanner_pb.BeginTransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_transaction_pb.Transaction) => void
  ): grpcWeb.ClientReadableStream<google_spanner_v1_transaction_pb.Transaction>;

  commit(
    request: google_spanner_v1_spanner_pb.CommitRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_spanner_pb.CommitResponse) => void
  ): grpcWeb.ClientReadableStream<google_spanner_v1_spanner_pb.CommitResponse>;

  rollback(
    request: google_spanner_v1_spanner_pb.RollbackRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  partitionQuery(
    request: google_spanner_v1_spanner_pb.PartitionQueryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_spanner_pb.PartitionResponse) => void
  ): grpcWeb.ClientReadableStream<google_spanner_v1_spanner_pb.PartitionResponse>;

  partitionRead(
    request: google_spanner_v1_spanner_pb.PartitionReadRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_spanner_pb.PartitionResponse) => void
  ): grpcWeb.ClientReadableStream<google_spanner_v1_spanner_pb.PartitionResponse>;

}

export class SpannerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSession(
    request: google_spanner_v1_spanner_pb.CreateSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_v1_spanner_pb.Session>;

  getSession(
    request: google_spanner_v1_spanner_pb.GetSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_v1_spanner_pb.Session>;

  listSessions(
    request: google_spanner_v1_spanner_pb.ListSessionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_v1_spanner_pb.ListSessionsResponse>;

  deleteSession(
    request: google_spanner_v1_spanner_pb.DeleteSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  executeSql(
    request: google_spanner_v1_spanner_pb.ExecuteSqlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_v1_result_set_pb.ResultSet>;

  executeStreamingSql(
    request: google_spanner_v1_spanner_pb.ExecuteSqlRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_spanner_v1_result_set_pb.PartialResultSet>;

  read(
    request: google_spanner_v1_spanner_pb.ReadRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_v1_result_set_pb.ResultSet>;

  streamingRead(
    request: google_spanner_v1_spanner_pb.ReadRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_spanner_v1_result_set_pb.PartialResultSet>;

  beginTransaction(
    request: google_spanner_v1_spanner_pb.BeginTransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_v1_transaction_pb.Transaction>;

  commit(
    request: google_spanner_v1_spanner_pb.CommitRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_v1_spanner_pb.CommitResponse>;

  rollback(
    request: google_spanner_v1_spanner_pb.RollbackRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  partitionQuery(
    request: google_spanner_v1_spanner_pb.PartitionQueryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_v1_spanner_pb.PartitionResponse>;

  partitionRead(
    request: google_spanner_v1_spanner_pb.PartitionReadRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_spanner_v1_spanner_pb.PartitionResponse>;

}

