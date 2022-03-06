import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_firestore_admin_v1beta1_index_pb from '../../../../google/firestore/admin/v1beta1/index_pb';
import * as google_firestore_admin_v1beta1_firestore_admin_pb from '../../../../google/firestore/admin/v1beta1/firestore_admin_pb';


export class FirestoreAdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createIndex(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.CreateIndexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listIndexes(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesResponse) => void
  ): grpcWeb.ClientReadableStream<google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesResponse>;

  getIndex(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.GetIndexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_admin_v1beta1_index_pb.Index) => void
  ): grpcWeb.ClientReadableStream<google_firestore_admin_v1beta1_index_pb.Index>;

  deleteIndex(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.DeleteIndexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  exportDocuments(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.ExportDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  importDocuments(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.ImportDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class FirestoreAdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createIndex(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.CreateIndexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listIndexes(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_admin_v1beta1_firestore_admin_pb.ListIndexesResponse>;

  getIndex(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.GetIndexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_admin_v1beta1_index_pb.Index>;

  deleteIndex(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.DeleteIndexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  exportDocuments(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.ExportDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  importDocuments(
    request: google_firestore_admin_v1beta1_firestore_admin_pb.ImportDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

