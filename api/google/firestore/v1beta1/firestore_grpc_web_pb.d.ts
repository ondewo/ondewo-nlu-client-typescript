import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_firestore_v1beta1_document_pb from '../../../google/firestore/v1beta1/document_pb';
import * as google_firestore_v1beta1_firestore_pb from '../../../google/firestore/v1beta1/firestore_pb';


export class FirestoreClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDocument(
    request: google_firestore_v1beta1_firestore_pb.GetDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_v1beta1_document_pb.Document) => void
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_document_pb.Document>;

  listDocuments(
    request: google_firestore_v1beta1_firestore_pb.ListDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_v1beta1_firestore_pb.ListDocumentsResponse) => void
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_firestore_pb.ListDocumentsResponse>;

  createDocument(
    request: google_firestore_v1beta1_firestore_pb.CreateDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_v1beta1_document_pb.Document) => void
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_document_pb.Document>;

  updateDocument(
    request: google_firestore_v1beta1_firestore_pb.UpdateDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_v1beta1_document_pb.Document) => void
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_document_pb.Document>;

  deleteDocument(
    request: google_firestore_v1beta1_firestore_pb.DeleteDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  batchGetDocuments(
    request: google_firestore_v1beta1_firestore_pb.BatchGetDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_firestore_pb.BatchGetDocumentsResponse>;

  beginTransaction(
    request: google_firestore_v1beta1_firestore_pb.BeginTransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_v1beta1_firestore_pb.BeginTransactionResponse) => void
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_firestore_pb.BeginTransactionResponse>;

  commit(
    request: google_firestore_v1beta1_firestore_pb.CommitRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_v1beta1_firestore_pb.CommitResponse) => void
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_firestore_pb.CommitResponse>;

  rollback(
    request: google_firestore_v1beta1_firestore_pb.RollbackRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  runQuery(
    request: google_firestore_v1beta1_firestore_pb.RunQueryRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_firestore_pb.RunQueryResponse>;

  listCollectionIds(
    request: google_firestore_v1beta1_firestore_pb.ListCollectionIdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_v1beta1_firestore_pb.ListCollectionIdsResponse) => void
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_firestore_pb.ListCollectionIdsResponse>;

}

export class FirestorePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDocument(
    request: google_firestore_v1beta1_firestore_pb.GetDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_v1beta1_document_pb.Document>;

  listDocuments(
    request: google_firestore_v1beta1_firestore_pb.ListDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_v1beta1_firestore_pb.ListDocumentsResponse>;

  createDocument(
    request: google_firestore_v1beta1_firestore_pb.CreateDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_v1beta1_document_pb.Document>;

  updateDocument(
    request: google_firestore_v1beta1_firestore_pb.UpdateDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_v1beta1_document_pb.Document>;

  deleteDocument(
    request: google_firestore_v1beta1_firestore_pb.DeleteDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  batchGetDocuments(
    request: google_firestore_v1beta1_firestore_pb.BatchGetDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_firestore_pb.BatchGetDocumentsResponse>;

  beginTransaction(
    request: google_firestore_v1beta1_firestore_pb.BeginTransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_v1beta1_firestore_pb.BeginTransactionResponse>;

  commit(
    request: google_firestore_v1beta1_firestore_pb.CommitRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_v1beta1_firestore_pb.CommitResponse>;

  rollback(
    request: google_firestore_v1beta1_firestore_pb.RollbackRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  runQuery(
    request: google_firestore_v1beta1_firestore_pb.RunQueryRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_firestore_v1beta1_firestore_pb.RunQueryResponse>;

  listCollectionIds(
    request: google_firestore_v1beta1_firestore_pb.ListCollectionIdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_v1beta1_firestore_pb.ListCollectionIdsResponse>;

}

