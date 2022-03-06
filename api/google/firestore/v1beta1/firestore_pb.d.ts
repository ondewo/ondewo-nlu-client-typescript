import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_firestore_v1beta1_common_pb from '../../../google/firestore/v1beta1/common_pb';
import * as google_firestore_v1beta1_document_pb from '../../../google/firestore/v1beta1/document_pb';
import * as google_firestore_v1beta1_query_pb from '../../../google/firestore/v1beta1/query_pb';
import * as google_firestore_v1beta1_write_pb from '../../../google/firestore/v1beta1/write_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';


export class GetDocumentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetDocumentRequest;

  getMask(): google_firestore_v1beta1_common_pb.DocumentMask | undefined;
  setMask(value?: google_firestore_v1beta1_common_pb.DocumentMask): GetDocumentRequest;
  hasMask(): boolean;
  clearMask(): GetDocumentRequest;

  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): GetDocumentRequest;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): GetDocumentRequest;
  hasReadTime(): boolean;
  clearReadTime(): GetDocumentRequest;

  getConsistencySelectorCase(): GetDocumentRequest.ConsistencySelectorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDocumentRequest): GetDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: GetDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDocumentRequest;
  static deserializeBinaryFromReader(message: GetDocumentRequest, reader: jspb.BinaryReader): GetDocumentRequest;
}

export namespace GetDocumentRequest {
  export type AsObject = {
    name: string,
    mask?: google_firestore_v1beta1_common_pb.DocumentMask.AsObject,
    transaction: Uint8Array | string,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ConsistencySelectorCase { 
    CONSISTENCY_SELECTOR_NOT_SET = 0,
    TRANSACTION = 3,
    READ_TIME = 5,
  }
}

export class ListDocumentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListDocumentsRequest;

  getCollectionId(): string;
  setCollectionId(value: string): ListDocumentsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDocumentsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDocumentsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListDocumentsRequest;

  getMask(): google_firestore_v1beta1_common_pb.DocumentMask | undefined;
  setMask(value?: google_firestore_v1beta1_common_pb.DocumentMask): ListDocumentsRequest;
  hasMask(): boolean;
  clearMask(): ListDocumentsRequest;

  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): ListDocumentsRequest;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): ListDocumentsRequest;
  hasReadTime(): boolean;
  clearReadTime(): ListDocumentsRequest;

  getShowMissing(): boolean;
  setShowMissing(value: boolean): ListDocumentsRequest;

  getConsistencySelectorCase(): ListDocumentsRequest.ConsistencySelectorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDocumentsRequest): ListDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDocumentsRequest;
  static deserializeBinaryFromReader(message: ListDocumentsRequest, reader: jspb.BinaryReader): ListDocumentsRequest;
}

export namespace ListDocumentsRequest {
  export type AsObject = {
    parent: string,
    collectionId: string,
    pageSize: number,
    pageToken: string,
    orderBy: string,
    mask?: google_firestore_v1beta1_common_pb.DocumentMask.AsObject,
    transaction: Uint8Array | string,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    showMissing: boolean,
  }

  export enum ConsistencySelectorCase { 
    CONSISTENCY_SELECTOR_NOT_SET = 0,
    TRANSACTION = 8,
    READ_TIME = 10,
  }
}

export class ListDocumentsResponse extends jspb.Message {
  getDocumentsList(): Array<google_firestore_v1beta1_document_pb.Document>;
  setDocumentsList(value: Array<google_firestore_v1beta1_document_pb.Document>): ListDocumentsResponse;
  clearDocumentsList(): ListDocumentsResponse;
  addDocuments(value?: google_firestore_v1beta1_document_pb.Document, index?: number): google_firestore_v1beta1_document_pb.Document;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDocumentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDocumentsResponse): ListDocumentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDocumentsResponse;
  static deserializeBinaryFromReader(message: ListDocumentsResponse, reader: jspb.BinaryReader): ListDocumentsResponse;
}

export namespace ListDocumentsResponse {
  export type AsObject = {
    documentsList: Array<google_firestore_v1beta1_document_pb.Document.AsObject>,
    nextPageToken: string,
  }
}

export class CreateDocumentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateDocumentRequest;

  getCollectionId(): string;
  setCollectionId(value: string): CreateDocumentRequest;

  getDocumentId(): string;
  setDocumentId(value: string): CreateDocumentRequest;

  getDocument(): google_firestore_v1beta1_document_pb.Document | undefined;
  setDocument(value?: google_firestore_v1beta1_document_pb.Document): CreateDocumentRequest;
  hasDocument(): boolean;
  clearDocument(): CreateDocumentRequest;

  getMask(): google_firestore_v1beta1_common_pb.DocumentMask | undefined;
  setMask(value?: google_firestore_v1beta1_common_pb.DocumentMask): CreateDocumentRequest;
  hasMask(): boolean;
  clearMask(): CreateDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDocumentRequest): CreateDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDocumentRequest;
  static deserializeBinaryFromReader(message: CreateDocumentRequest, reader: jspb.BinaryReader): CreateDocumentRequest;
}

export namespace CreateDocumentRequest {
  export type AsObject = {
    parent: string,
    collectionId: string,
    documentId: string,
    document?: google_firestore_v1beta1_document_pb.Document.AsObject,
    mask?: google_firestore_v1beta1_common_pb.DocumentMask.AsObject,
  }
}

export class UpdateDocumentRequest extends jspb.Message {
  getDocument(): google_firestore_v1beta1_document_pb.Document | undefined;
  setDocument(value?: google_firestore_v1beta1_document_pb.Document): UpdateDocumentRequest;
  hasDocument(): boolean;
  clearDocument(): UpdateDocumentRequest;

  getUpdateMask(): google_firestore_v1beta1_common_pb.DocumentMask | undefined;
  setUpdateMask(value?: google_firestore_v1beta1_common_pb.DocumentMask): UpdateDocumentRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateDocumentRequest;

  getMask(): google_firestore_v1beta1_common_pb.DocumentMask | undefined;
  setMask(value?: google_firestore_v1beta1_common_pb.DocumentMask): UpdateDocumentRequest;
  hasMask(): boolean;
  clearMask(): UpdateDocumentRequest;

  getCurrentDocument(): google_firestore_v1beta1_common_pb.Precondition | undefined;
  setCurrentDocument(value?: google_firestore_v1beta1_common_pb.Precondition): UpdateDocumentRequest;
  hasCurrentDocument(): boolean;
  clearCurrentDocument(): UpdateDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDocumentRequest): UpdateDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDocumentRequest;
  static deserializeBinaryFromReader(message: UpdateDocumentRequest, reader: jspb.BinaryReader): UpdateDocumentRequest;
}

export namespace UpdateDocumentRequest {
  export type AsObject = {
    document?: google_firestore_v1beta1_document_pb.Document.AsObject,
    updateMask?: google_firestore_v1beta1_common_pb.DocumentMask.AsObject,
    mask?: google_firestore_v1beta1_common_pb.DocumentMask.AsObject,
    currentDocument?: google_firestore_v1beta1_common_pb.Precondition.AsObject,
  }
}

export class DeleteDocumentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteDocumentRequest;

  getCurrentDocument(): google_firestore_v1beta1_common_pb.Precondition | undefined;
  setCurrentDocument(value?: google_firestore_v1beta1_common_pb.Precondition): DeleteDocumentRequest;
  hasCurrentDocument(): boolean;
  clearCurrentDocument(): DeleteDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDocumentRequest): DeleteDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDocumentRequest;
  static deserializeBinaryFromReader(message: DeleteDocumentRequest, reader: jspb.BinaryReader): DeleteDocumentRequest;
}

export namespace DeleteDocumentRequest {
  export type AsObject = {
    name: string,
    currentDocument?: google_firestore_v1beta1_common_pb.Precondition.AsObject,
  }
}

export class BatchGetDocumentsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): BatchGetDocumentsRequest;

  getDocumentsList(): Array<string>;
  setDocumentsList(value: Array<string>): BatchGetDocumentsRequest;
  clearDocumentsList(): BatchGetDocumentsRequest;
  addDocuments(value: string, index?: number): BatchGetDocumentsRequest;

  getMask(): google_firestore_v1beta1_common_pb.DocumentMask | undefined;
  setMask(value?: google_firestore_v1beta1_common_pb.DocumentMask): BatchGetDocumentsRequest;
  hasMask(): boolean;
  clearMask(): BatchGetDocumentsRequest;

  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): BatchGetDocumentsRequest;

  getNewTransaction(): google_firestore_v1beta1_common_pb.TransactionOptions | undefined;
  setNewTransaction(value?: google_firestore_v1beta1_common_pb.TransactionOptions): BatchGetDocumentsRequest;
  hasNewTransaction(): boolean;
  clearNewTransaction(): BatchGetDocumentsRequest;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): BatchGetDocumentsRequest;
  hasReadTime(): boolean;
  clearReadTime(): BatchGetDocumentsRequest;

  getConsistencySelectorCase(): BatchGetDocumentsRequest.ConsistencySelectorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetDocumentsRequest): BatchGetDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: BatchGetDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetDocumentsRequest;
  static deserializeBinaryFromReader(message: BatchGetDocumentsRequest, reader: jspb.BinaryReader): BatchGetDocumentsRequest;
}

export namespace BatchGetDocumentsRequest {
  export type AsObject = {
    database: string,
    documentsList: Array<string>,
    mask?: google_firestore_v1beta1_common_pb.DocumentMask.AsObject,
    transaction: Uint8Array | string,
    newTransaction?: google_firestore_v1beta1_common_pb.TransactionOptions.AsObject,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ConsistencySelectorCase { 
    CONSISTENCY_SELECTOR_NOT_SET = 0,
    TRANSACTION = 4,
    NEW_TRANSACTION = 5,
    READ_TIME = 7,
  }
}

export class BatchGetDocumentsResponse extends jspb.Message {
  getFound(): google_firestore_v1beta1_document_pb.Document | undefined;
  setFound(value?: google_firestore_v1beta1_document_pb.Document): BatchGetDocumentsResponse;
  hasFound(): boolean;
  clearFound(): BatchGetDocumentsResponse;

  getMissing(): string;
  setMissing(value: string): BatchGetDocumentsResponse;

  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): BatchGetDocumentsResponse;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): BatchGetDocumentsResponse;
  hasReadTime(): boolean;
  clearReadTime(): BatchGetDocumentsResponse;

  getResultCase(): BatchGetDocumentsResponse.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetDocumentsResponse): BatchGetDocumentsResponse.AsObject;
  static serializeBinaryToWriter(message: BatchGetDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetDocumentsResponse;
  static deserializeBinaryFromReader(message: BatchGetDocumentsResponse, reader: jspb.BinaryReader): BatchGetDocumentsResponse;
}

export namespace BatchGetDocumentsResponse {
  export type AsObject = {
    found?: google_firestore_v1beta1_document_pb.Document.AsObject,
    missing: string,
    transaction: Uint8Array | string,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    FOUND = 1,
    MISSING = 2,
  }
}

export class BeginTransactionRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): BeginTransactionRequest;

  getOptions(): google_firestore_v1beta1_common_pb.TransactionOptions | undefined;
  setOptions(value?: google_firestore_v1beta1_common_pb.TransactionOptions): BeginTransactionRequest;
  hasOptions(): boolean;
  clearOptions(): BeginTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeginTransactionRequest): BeginTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: BeginTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginTransactionRequest;
  static deserializeBinaryFromReader(message: BeginTransactionRequest, reader: jspb.BinaryReader): BeginTransactionRequest;
}

export namespace BeginTransactionRequest {
  export type AsObject = {
    database: string,
    options?: google_firestore_v1beta1_common_pb.TransactionOptions.AsObject,
  }
}

export class BeginTransactionResponse extends jspb.Message {
  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): BeginTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BeginTransactionResponse): BeginTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: BeginTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginTransactionResponse;
  static deserializeBinaryFromReader(message: BeginTransactionResponse, reader: jspb.BinaryReader): BeginTransactionResponse;
}

export namespace BeginTransactionResponse {
  export type AsObject = {
    transaction: Uint8Array | string,
  }
}

export class CommitRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): CommitRequest;

  getWritesList(): Array<google_firestore_v1beta1_write_pb.Write>;
  setWritesList(value: Array<google_firestore_v1beta1_write_pb.Write>): CommitRequest;
  clearWritesList(): CommitRequest;
  addWrites(value?: google_firestore_v1beta1_write_pb.Write, index?: number): google_firestore_v1beta1_write_pb.Write;

  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): CommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommitRequest): CommitRequest.AsObject;
  static serializeBinaryToWriter(message: CommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitRequest;
  static deserializeBinaryFromReader(message: CommitRequest, reader: jspb.BinaryReader): CommitRequest;
}

export namespace CommitRequest {
  export type AsObject = {
    database: string,
    writesList: Array<google_firestore_v1beta1_write_pb.Write.AsObject>,
    transaction: Uint8Array | string,
  }
}

export class CommitResponse extends jspb.Message {
  getWriteResultsList(): Array<google_firestore_v1beta1_write_pb.WriteResult>;
  setWriteResultsList(value: Array<google_firestore_v1beta1_write_pb.WriteResult>): CommitResponse;
  clearWriteResultsList(): CommitResponse;
  addWriteResults(value?: google_firestore_v1beta1_write_pb.WriteResult, index?: number): google_firestore_v1beta1_write_pb.WriteResult;

  getCommitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCommitTime(value?: google_protobuf_timestamp_pb.Timestamp): CommitResponse;
  hasCommitTime(): boolean;
  clearCommitTime(): CommitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommitResponse): CommitResponse.AsObject;
  static serializeBinaryToWriter(message: CommitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitResponse;
  static deserializeBinaryFromReader(message: CommitResponse, reader: jspb.BinaryReader): CommitResponse;
}

export namespace CommitResponse {
  export type AsObject = {
    writeResultsList: Array<google_firestore_v1beta1_write_pb.WriteResult.AsObject>,
    commitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RollbackRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): RollbackRequest;

  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): RollbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RollbackRequest): RollbackRequest.AsObject;
  static serializeBinaryToWriter(message: RollbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollbackRequest;
  static deserializeBinaryFromReader(message: RollbackRequest, reader: jspb.BinaryReader): RollbackRequest;
}

export namespace RollbackRequest {
  export type AsObject = {
    database: string,
    transaction: Uint8Array | string,
  }
}

export class RunQueryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RunQueryRequest;

  getStructuredQuery(): google_firestore_v1beta1_query_pb.StructuredQuery | undefined;
  setStructuredQuery(value?: google_firestore_v1beta1_query_pb.StructuredQuery): RunQueryRequest;
  hasStructuredQuery(): boolean;
  clearStructuredQuery(): RunQueryRequest;

  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): RunQueryRequest;

  getNewTransaction(): google_firestore_v1beta1_common_pb.TransactionOptions | undefined;
  setNewTransaction(value?: google_firestore_v1beta1_common_pb.TransactionOptions): RunQueryRequest;
  hasNewTransaction(): boolean;
  clearNewTransaction(): RunQueryRequest;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): RunQueryRequest;
  hasReadTime(): boolean;
  clearReadTime(): RunQueryRequest;

  getQueryTypeCase(): RunQueryRequest.QueryTypeCase;

  getConsistencySelectorCase(): RunQueryRequest.ConsistencySelectorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunQueryRequest): RunQueryRequest.AsObject;
  static serializeBinaryToWriter(message: RunQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunQueryRequest;
  static deserializeBinaryFromReader(message: RunQueryRequest, reader: jspb.BinaryReader): RunQueryRequest;
}

export namespace RunQueryRequest {
  export type AsObject = {
    parent: string,
    structuredQuery?: google_firestore_v1beta1_query_pb.StructuredQuery.AsObject,
    transaction: Uint8Array | string,
    newTransaction?: google_firestore_v1beta1_common_pb.TransactionOptions.AsObject,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum QueryTypeCase { 
    QUERY_TYPE_NOT_SET = 0,
    STRUCTURED_QUERY = 2,
  }

  export enum ConsistencySelectorCase { 
    CONSISTENCY_SELECTOR_NOT_SET = 0,
    TRANSACTION = 5,
    NEW_TRANSACTION = 6,
    READ_TIME = 7,
  }
}

export class RunQueryResponse extends jspb.Message {
  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): RunQueryResponse;

  getDocument(): google_firestore_v1beta1_document_pb.Document | undefined;
  setDocument(value?: google_firestore_v1beta1_document_pb.Document): RunQueryResponse;
  hasDocument(): boolean;
  clearDocument(): RunQueryResponse;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): RunQueryResponse;
  hasReadTime(): boolean;
  clearReadTime(): RunQueryResponse;

  getSkippedResults(): number;
  setSkippedResults(value: number): RunQueryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunQueryResponse): RunQueryResponse.AsObject;
  static serializeBinaryToWriter(message: RunQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunQueryResponse;
  static deserializeBinaryFromReader(message: RunQueryResponse, reader: jspb.BinaryReader): RunQueryResponse;
}

export namespace RunQueryResponse {
  export type AsObject = {
    transaction: Uint8Array | string,
    document?: google_firestore_v1beta1_document_pb.Document.AsObject,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skippedResults: number,
  }
}

export class WriteRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): WriteRequest;

  getStreamId(): string;
  setStreamId(value: string): WriteRequest;

  getWritesList(): Array<google_firestore_v1beta1_write_pb.Write>;
  setWritesList(value: Array<google_firestore_v1beta1_write_pb.Write>): WriteRequest;
  clearWritesList(): WriteRequest;
  addWrites(value?: google_firestore_v1beta1_write_pb.Write, index?: number): google_firestore_v1beta1_write_pb.Write;

  getStreamToken(): Uint8Array | string;
  getStreamToken_asU8(): Uint8Array;
  getStreamToken_asB64(): string;
  setStreamToken(value: Uint8Array | string): WriteRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): WriteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteRequest): WriteRequest.AsObject;
  static serializeBinaryToWriter(message: WriteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteRequest;
  static deserializeBinaryFromReader(message: WriteRequest, reader: jspb.BinaryReader): WriteRequest;
}

export namespace WriteRequest {
  export type AsObject = {
    database: string,
    streamId: string,
    writesList: Array<google_firestore_v1beta1_write_pb.Write.AsObject>,
    streamToken: Uint8Array | string,
    labelsMap: Array<[string, string]>,
  }
}

export class WriteResponse extends jspb.Message {
  getStreamId(): string;
  setStreamId(value: string): WriteResponse;

  getStreamToken(): Uint8Array | string;
  getStreamToken_asU8(): Uint8Array;
  getStreamToken_asB64(): string;
  setStreamToken(value: Uint8Array | string): WriteResponse;

  getWriteResultsList(): Array<google_firestore_v1beta1_write_pb.WriteResult>;
  setWriteResultsList(value: Array<google_firestore_v1beta1_write_pb.WriteResult>): WriteResponse;
  clearWriteResultsList(): WriteResponse;
  addWriteResults(value?: google_firestore_v1beta1_write_pb.WriteResult, index?: number): google_firestore_v1beta1_write_pb.WriteResult;

  getCommitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCommitTime(value?: google_protobuf_timestamp_pb.Timestamp): WriteResponse;
  hasCommitTime(): boolean;
  clearCommitTime(): WriteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WriteResponse): WriteResponse.AsObject;
  static serializeBinaryToWriter(message: WriteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteResponse;
  static deserializeBinaryFromReader(message: WriteResponse, reader: jspb.BinaryReader): WriteResponse;
}

export namespace WriteResponse {
  export type AsObject = {
    streamId: string,
    streamToken: Uint8Array | string,
    writeResultsList: Array<google_firestore_v1beta1_write_pb.WriteResult.AsObject>,
    commitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListenRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListenRequest;

  getAddTarget(): Target | undefined;
  setAddTarget(value?: Target): ListenRequest;
  hasAddTarget(): boolean;
  clearAddTarget(): ListenRequest;

  getRemoveTarget(): number;
  setRemoveTarget(value: number): ListenRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListenRequest;

  getTargetChangeCase(): ListenRequest.TargetChangeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenRequest): ListenRequest.AsObject;
  static serializeBinaryToWriter(message: ListenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenRequest;
  static deserializeBinaryFromReader(message: ListenRequest, reader: jspb.BinaryReader): ListenRequest;
}

export namespace ListenRequest {
  export type AsObject = {
    database: string,
    addTarget?: Target.AsObject,
    removeTarget: number,
    labelsMap: Array<[string, string]>,
  }

  export enum TargetChangeCase { 
    TARGET_CHANGE_NOT_SET = 0,
    ADD_TARGET = 2,
    REMOVE_TARGET = 3,
  }
}

export class ListenResponse extends jspb.Message {
  getTargetChange(): TargetChange | undefined;
  setTargetChange(value?: TargetChange): ListenResponse;
  hasTargetChange(): boolean;
  clearTargetChange(): ListenResponse;

  getDocumentChange(): google_firestore_v1beta1_write_pb.DocumentChange | undefined;
  setDocumentChange(value?: google_firestore_v1beta1_write_pb.DocumentChange): ListenResponse;
  hasDocumentChange(): boolean;
  clearDocumentChange(): ListenResponse;

  getDocumentDelete(): google_firestore_v1beta1_write_pb.DocumentDelete | undefined;
  setDocumentDelete(value?: google_firestore_v1beta1_write_pb.DocumentDelete): ListenResponse;
  hasDocumentDelete(): boolean;
  clearDocumentDelete(): ListenResponse;

  getDocumentRemove(): google_firestore_v1beta1_write_pb.DocumentRemove | undefined;
  setDocumentRemove(value?: google_firestore_v1beta1_write_pb.DocumentRemove): ListenResponse;
  hasDocumentRemove(): boolean;
  clearDocumentRemove(): ListenResponse;

  getFilter(): google_firestore_v1beta1_write_pb.ExistenceFilter | undefined;
  setFilter(value?: google_firestore_v1beta1_write_pb.ExistenceFilter): ListenResponse;
  hasFilter(): boolean;
  clearFilter(): ListenResponse;

  getResponseTypeCase(): ListenResponse.ResponseTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenResponse): ListenResponse.AsObject;
  static serializeBinaryToWriter(message: ListenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenResponse;
  static deserializeBinaryFromReader(message: ListenResponse, reader: jspb.BinaryReader): ListenResponse;
}

export namespace ListenResponse {
  export type AsObject = {
    targetChange?: TargetChange.AsObject,
    documentChange?: google_firestore_v1beta1_write_pb.DocumentChange.AsObject,
    documentDelete?: google_firestore_v1beta1_write_pb.DocumentDelete.AsObject,
    documentRemove?: google_firestore_v1beta1_write_pb.DocumentRemove.AsObject,
    filter?: google_firestore_v1beta1_write_pb.ExistenceFilter.AsObject,
  }

  export enum ResponseTypeCase { 
    RESPONSE_TYPE_NOT_SET = 0,
    TARGET_CHANGE = 2,
    DOCUMENT_CHANGE = 3,
    DOCUMENT_DELETE = 4,
    DOCUMENT_REMOVE = 6,
    FILTER = 5,
  }
}

export class Target extends jspb.Message {
  getQuery(): Target.QueryTarget | undefined;
  setQuery(value?: Target.QueryTarget): Target;
  hasQuery(): boolean;
  clearQuery(): Target;

  getDocuments(): Target.DocumentsTarget | undefined;
  setDocuments(value?: Target.DocumentsTarget): Target;
  hasDocuments(): boolean;
  clearDocuments(): Target;

  getResumeToken(): Uint8Array | string;
  getResumeToken_asU8(): Uint8Array;
  getResumeToken_asB64(): string;
  setResumeToken(value: Uint8Array | string): Target;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): Target;
  hasReadTime(): boolean;
  clearReadTime(): Target;

  getTargetId(): number;
  setTargetId(value: number): Target;

  getOnce(): boolean;
  setOnce(value: boolean): Target;

  getTargetTypeCase(): Target.TargetTypeCase;

  getResumeTypeCase(): Target.ResumeTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Target.AsObject;
  static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
  static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Target;
  static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
}

export namespace Target {
  export type AsObject = {
    query?: Target.QueryTarget.AsObject,
    documents?: Target.DocumentsTarget.AsObject,
    resumeToken: Uint8Array | string,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    targetId: number,
    once: boolean,
  }

  export class DocumentsTarget extends jspb.Message {
    getDocumentsList(): Array<string>;
    setDocumentsList(value: Array<string>): DocumentsTarget;
    clearDocumentsList(): DocumentsTarget;
    addDocuments(value: string, index?: number): DocumentsTarget;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DocumentsTarget.AsObject;
    static toObject(includeInstance: boolean, msg: DocumentsTarget): DocumentsTarget.AsObject;
    static serializeBinaryToWriter(message: DocumentsTarget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DocumentsTarget;
    static deserializeBinaryFromReader(message: DocumentsTarget, reader: jspb.BinaryReader): DocumentsTarget;
  }

  export namespace DocumentsTarget {
    export type AsObject = {
      documentsList: Array<string>,
    }
  }


  export class QueryTarget extends jspb.Message {
    getParent(): string;
    setParent(value: string): QueryTarget;

    getStructuredQuery(): google_firestore_v1beta1_query_pb.StructuredQuery | undefined;
    setStructuredQuery(value?: google_firestore_v1beta1_query_pb.StructuredQuery): QueryTarget;
    hasStructuredQuery(): boolean;
    clearStructuredQuery(): QueryTarget;

    getQueryTypeCase(): QueryTarget.QueryTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTarget.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTarget): QueryTarget.AsObject;
    static serializeBinaryToWriter(message: QueryTarget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTarget;
    static deserializeBinaryFromReader(message: QueryTarget, reader: jspb.BinaryReader): QueryTarget;
  }

  export namespace QueryTarget {
    export type AsObject = {
      parent: string,
      structuredQuery?: google_firestore_v1beta1_query_pb.StructuredQuery.AsObject,
    }

    export enum QueryTypeCase { 
      QUERY_TYPE_NOT_SET = 0,
      STRUCTURED_QUERY = 2,
    }
  }


  export enum TargetTypeCase { 
    TARGET_TYPE_NOT_SET = 0,
    QUERY = 2,
    DOCUMENTS = 3,
  }

  export enum ResumeTypeCase { 
    RESUME_TYPE_NOT_SET = 0,
    RESUME_TOKEN = 4,
    READ_TIME = 11,
  }
}

export class TargetChange extends jspb.Message {
  getTargetChangeType(): TargetChange.TargetChangeType;
  setTargetChangeType(value: TargetChange.TargetChangeType): TargetChange;

  getTargetIdsList(): Array<number>;
  setTargetIdsList(value: Array<number>): TargetChange;
  clearTargetIdsList(): TargetChange;
  addTargetIds(value: number, index?: number): TargetChange;

  getCause(): google_rpc_status_pb.Status | undefined;
  setCause(value?: google_rpc_status_pb.Status): TargetChange;
  hasCause(): boolean;
  clearCause(): TargetChange;

  getResumeToken(): Uint8Array | string;
  getResumeToken_asU8(): Uint8Array;
  getResumeToken_asB64(): string;
  setResumeToken(value: Uint8Array | string): TargetChange;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): TargetChange;
  hasReadTime(): boolean;
  clearReadTime(): TargetChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetChange.AsObject;
  static toObject(includeInstance: boolean, msg: TargetChange): TargetChange.AsObject;
  static serializeBinaryToWriter(message: TargetChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetChange;
  static deserializeBinaryFromReader(message: TargetChange, reader: jspb.BinaryReader): TargetChange;
}

export namespace TargetChange {
  export type AsObject = {
    targetChangeType: TargetChange.TargetChangeType,
    targetIdsList: Array<number>,
    cause?: google_rpc_status_pb.Status.AsObject,
    resumeToken: Uint8Array | string,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum TargetChangeType { 
    NO_CHANGE = 0,
    ADD = 1,
    REMOVE = 2,
    CURRENT = 3,
    RESET = 4,
  }
}

export class ListCollectionIdsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListCollectionIdsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCollectionIdsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCollectionIdsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionIdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionIdsRequest): ListCollectionIdsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCollectionIdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionIdsRequest;
  static deserializeBinaryFromReader(message: ListCollectionIdsRequest, reader: jspb.BinaryReader): ListCollectionIdsRequest;
}

export namespace ListCollectionIdsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListCollectionIdsResponse extends jspb.Message {
  getCollectionIdsList(): Array<string>;
  setCollectionIdsList(value: Array<string>): ListCollectionIdsResponse;
  clearCollectionIdsList(): ListCollectionIdsResponse;
  addCollectionIds(value: string, index?: number): ListCollectionIdsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCollectionIdsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionIdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionIdsResponse): ListCollectionIdsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCollectionIdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionIdsResponse;
  static deserializeBinaryFromReader(message: ListCollectionIdsResponse, reader: jspb.BinaryReader): ListCollectionIdsResponse;
}

export namespace ListCollectionIdsResponse {
  export type AsObject = {
    collectionIdsList: Array<string>,
    nextPageToken: string,
  }
}

