import * as grpcWeb from 'grpc-web';

import * as google_datastore_v1beta3_datastore_pb from '../../../google/datastore/v1beta3/datastore_pb';


export class DatastoreClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  lookup(
    request: google_datastore_v1beta3_datastore_pb.LookupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_datastore_v1beta3_datastore_pb.LookupResponse) => void
  ): grpcWeb.ClientReadableStream<google_datastore_v1beta3_datastore_pb.LookupResponse>;

  runQuery(
    request: google_datastore_v1beta3_datastore_pb.RunQueryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_datastore_v1beta3_datastore_pb.RunQueryResponse) => void
  ): grpcWeb.ClientReadableStream<google_datastore_v1beta3_datastore_pb.RunQueryResponse>;

  beginTransaction(
    request: google_datastore_v1beta3_datastore_pb.BeginTransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_datastore_v1beta3_datastore_pb.BeginTransactionResponse) => void
  ): grpcWeb.ClientReadableStream<google_datastore_v1beta3_datastore_pb.BeginTransactionResponse>;

  commit(
    request: google_datastore_v1beta3_datastore_pb.CommitRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_datastore_v1beta3_datastore_pb.CommitResponse) => void
  ): grpcWeb.ClientReadableStream<google_datastore_v1beta3_datastore_pb.CommitResponse>;

  rollback(
    request: google_datastore_v1beta3_datastore_pb.RollbackRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_datastore_v1beta3_datastore_pb.RollbackResponse) => void
  ): grpcWeb.ClientReadableStream<google_datastore_v1beta3_datastore_pb.RollbackResponse>;

  allocateIds(
    request: google_datastore_v1beta3_datastore_pb.AllocateIdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_datastore_v1beta3_datastore_pb.AllocateIdsResponse) => void
  ): grpcWeb.ClientReadableStream<google_datastore_v1beta3_datastore_pb.AllocateIdsResponse>;

  reserveIds(
    request: google_datastore_v1beta3_datastore_pb.ReserveIdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_datastore_v1beta3_datastore_pb.ReserveIdsResponse) => void
  ): grpcWeb.ClientReadableStream<google_datastore_v1beta3_datastore_pb.ReserveIdsResponse>;

}

export class DatastorePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  lookup(
    request: google_datastore_v1beta3_datastore_pb.LookupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_datastore_v1beta3_datastore_pb.LookupResponse>;

  runQuery(
    request: google_datastore_v1beta3_datastore_pb.RunQueryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_datastore_v1beta3_datastore_pb.RunQueryResponse>;

  beginTransaction(
    request: google_datastore_v1beta3_datastore_pb.BeginTransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_datastore_v1beta3_datastore_pb.BeginTransactionResponse>;

  commit(
    request: google_datastore_v1beta3_datastore_pb.CommitRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_datastore_v1beta3_datastore_pb.CommitResponse>;

  rollback(
    request: google_datastore_v1beta3_datastore_pb.RollbackRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_datastore_v1beta3_datastore_pb.RollbackResponse>;

  allocateIds(
    request: google_datastore_v1beta3_datastore_pb.AllocateIdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_datastore_v1beta3_datastore_pb.AllocateIdsResponse>;

  reserveIds(
    request: google_datastore_v1beta3_datastore_pb.ReserveIdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_datastore_v1beta3_datastore_pb.ReserveIdsResponse>;

}

