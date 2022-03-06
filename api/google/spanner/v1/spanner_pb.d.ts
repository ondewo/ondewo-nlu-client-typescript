import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_spanner_v1_keys_pb from '../../../google/spanner/v1/keys_pb';
import * as google_spanner_v1_mutation_pb from '../../../google/spanner/v1/mutation_pb';
import * as google_spanner_v1_result_set_pb from '../../../google/spanner/v1/result_set_pb';
import * as google_spanner_v1_transaction_pb from '../../../google/spanner/v1/transaction_pb';
import * as google_spanner_v1_type_pb from '../../../google/spanner/v1/type_pb';


export class CreateSessionRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): CreateSessionRequest;

  getSession(): Session | undefined;
  setSession(value?: Session): CreateSessionRequest;
  hasSession(): boolean;
  clearSession(): CreateSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionRequest): CreateSessionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionRequest;
  static deserializeBinaryFromReader(message: CreateSessionRequest, reader: jspb.BinaryReader): CreateSessionRequest;
}

export namespace CreateSessionRequest {
  export type AsObject = {
    database: string,
    session?: Session.AsObject,
  }
}

export class Session extends jspb.Message {
  getName(): string;
  setName(value: string): Session;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Session;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Session;
  hasCreateTime(): boolean;
  clearCreateTime(): Session;

  getApproximateLastUseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setApproximateLastUseTime(value?: google_protobuf_timestamp_pb.Timestamp): Session;
  hasApproximateLastUseTime(): boolean;
  clearApproximateLastUseTime(): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    name: string,
    labelsMap: Array<[string, string]>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    approximateLastUseTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetSessionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionRequest): GetSessionRequest.AsObject;
  static serializeBinaryToWriter(message: GetSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionRequest;
  static deserializeBinaryFromReader(message: GetSessionRequest, reader: jspb.BinaryReader): GetSessionRequest;
}

export namespace GetSessionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListSessionsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListSessionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListSessionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSessionsRequest;

  getFilter(): string;
  setFilter(value: string): ListSessionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionsRequest): ListSessionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionsRequest;
  static deserializeBinaryFromReader(message: ListSessionsRequest, reader: jspb.BinaryReader): ListSessionsRequest;
}

export namespace ListSessionsRequest {
  export type AsObject = {
    database: string,
    pageSize: number,
    pageToken: string,
    filter: string,
  }
}

export class ListSessionsResponse extends jspb.Message {
  getSessionsList(): Array<Session>;
  setSessionsList(value: Array<Session>): ListSessionsResponse;
  clearSessionsList(): ListSessionsResponse;
  addSessions(value?: Session, index?: number): Session;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSessionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionsResponse): ListSessionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSessionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionsResponse;
  static deserializeBinaryFromReader(message: ListSessionsResponse, reader: jspb.BinaryReader): ListSessionsResponse;
}

export namespace ListSessionsResponse {
  export type AsObject = {
    sessionsList: Array<Session.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteSessionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSessionRequest): DeleteSessionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSessionRequest;
  static deserializeBinaryFromReader(message: DeleteSessionRequest, reader: jspb.BinaryReader): DeleteSessionRequest;
}

export namespace DeleteSessionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ExecuteSqlRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): ExecuteSqlRequest;

  getTransaction(): google_spanner_v1_transaction_pb.TransactionSelector | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.TransactionSelector): ExecuteSqlRequest;
  hasTransaction(): boolean;
  clearTransaction(): ExecuteSqlRequest;

  getSql(): string;
  setSql(value: string): ExecuteSqlRequest;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): ExecuteSqlRequest;
  hasParams(): boolean;
  clearParams(): ExecuteSqlRequest;

  getParamTypesMap(): jspb.Map<string, google_spanner_v1_type_pb.Type>;
  clearParamTypesMap(): ExecuteSqlRequest;

  getResumeToken(): Uint8Array | string;
  getResumeToken_asU8(): Uint8Array;
  getResumeToken_asB64(): string;
  setResumeToken(value: Uint8Array | string): ExecuteSqlRequest;

  getQueryMode(): ExecuteSqlRequest.QueryMode;
  setQueryMode(value: ExecuteSqlRequest.QueryMode): ExecuteSqlRequest;

  getPartitionToken(): Uint8Array | string;
  getPartitionToken_asU8(): Uint8Array;
  getPartitionToken_asB64(): string;
  setPartitionToken(value: Uint8Array | string): ExecuteSqlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSqlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSqlRequest): ExecuteSqlRequest.AsObject;
  static serializeBinaryToWriter(message: ExecuteSqlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSqlRequest;
  static deserializeBinaryFromReader(message: ExecuteSqlRequest, reader: jspb.BinaryReader): ExecuteSqlRequest;
}

export namespace ExecuteSqlRequest {
  export type AsObject = {
    session: string,
    transaction?: google_spanner_v1_transaction_pb.TransactionSelector.AsObject,
    sql: string,
    params?: google_protobuf_struct_pb.Struct.AsObject,
    paramTypesMap: Array<[string, google_spanner_v1_type_pb.Type.AsObject]>,
    resumeToken: Uint8Array | string,
    queryMode: ExecuteSqlRequest.QueryMode,
    partitionToken: Uint8Array | string,
  }

  export enum QueryMode { 
    NORMAL = 0,
    PLAN = 1,
    PROFILE = 2,
  }
}

export class PartitionOptions extends jspb.Message {
  getPartitionSizeBytes(): number;
  setPartitionSizeBytes(value: number): PartitionOptions;

  getMaxPartitions(): number;
  setMaxPartitions(value: number): PartitionOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionOptions): PartitionOptions.AsObject;
  static serializeBinaryToWriter(message: PartitionOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionOptions;
  static deserializeBinaryFromReader(message: PartitionOptions, reader: jspb.BinaryReader): PartitionOptions;
}

export namespace PartitionOptions {
  export type AsObject = {
    partitionSizeBytes: number,
    maxPartitions: number,
  }
}

export class PartitionQueryRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): PartitionQueryRequest;

  getTransaction(): google_spanner_v1_transaction_pb.TransactionSelector | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.TransactionSelector): PartitionQueryRequest;
  hasTransaction(): boolean;
  clearTransaction(): PartitionQueryRequest;

  getSql(): string;
  setSql(value: string): PartitionQueryRequest;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): PartitionQueryRequest;
  hasParams(): boolean;
  clearParams(): PartitionQueryRequest;

  getParamTypesMap(): jspb.Map<string, google_spanner_v1_type_pb.Type>;
  clearParamTypesMap(): PartitionQueryRequest;

  getPartitionOptions(): PartitionOptions | undefined;
  setPartitionOptions(value?: PartitionOptions): PartitionQueryRequest;
  hasPartitionOptions(): boolean;
  clearPartitionOptions(): PartitionQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionQueryRequest): PartitionQueryRequest.AsObject;
  static serializeBinaryToWriter(message: PartitionQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionQueryRequest;
  static deserializeBinaryFromReader(message: PartitionQueryRequest, reader: jspb.BinaryReader): PartitionQueryRequest;
}

export namespace PartitionQueryRequest {
  export type AsObject = {
    session: string,
    transaction?: google_spanner_v1_transaction_pb.TransactionSelector.AsObject,
    sql: string,
    params?: google_protobuf_struct_pb.Struct.AsObject,
    paramTypesMap: Array<[string, google_spanner_v1_type_pb.Type.AsObject]>,
    partitionOptions?: PartitionOptions.AsObject,
  }
}

export class PartitionReadRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): PartitionReadRequest;

  getTransaction(): google_spanner_v1_transaction_pb.TransactionSelector | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.TransactionSelector): PartitionReadRequest;
  hasTransaction(): boolean;
  clearTransaction(): PartitionReadRequest;

  getTable(): string;
  setTable(value: string): PartitionReadRequest;

  getIndex(): string;
  setIndex(value: string): PartitionReadRequest;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): PartitionReadRequest;
  clearColumnsList(): PartitionReadRequest;
  addColumns(value: string, index?: number): PartitionReadRequest;

  getKeySet(): google_spanner_v1_keys_pb.KeySet | undefined;
  setKeySet(value?: google_spanner_v1_keys_pb.KeySet): PartitionReadRequest;
  hasKeySet(): boolean;
  clearKeySet(): PartitionReadRequest;

  getPartitionOptions(): PartitionOptions | undefined;
  setPartitionOptions(value?: PartitionOptions): PartitionReadRequest;
  hasPartitionOptions(): boolean;
  clearPartitionOptions(): PartitionReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionReadRequest): PartitionReadRequest.AsObject;
  static serializeBinaryToWriter(message: PartitionReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionReadRequest;
  static deserializeBinaryFromReader(message: PartitionReadRequest, reader: jspb.BinaryReader): PartitionReadRequest;
}

export namespace PartitionReadRequest {
  export type AsObject = {
    session: string,
    transaction?: google_spanner_v1_transaction_pb.TransactionSelector.AsObject,
    table: string,
    index: string,
    columnsList: Array<string>,
    keySet?: google_spanner_v1_keys_pb.KeySet.AsObject,
    partitionOptions?: PartitionOptions.AsObject,
  }
}

export class Partition extends jspb.Message {
  getPartitionToken(): Uint8Array | string;
  getPartitionToken_asU8(): Uint8Array;
  getPartitionToken_asB64(): string;
  setPartitionToken(value: Uint8Array | string): Partition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Partition.AsObject;
  static toObject(includeInstance: boolean, msg: Partition): Partition.AsObject;
  static serializeBinaryToWriter(message: Partition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Partition;
  static deserializeBinaryFromReader(message: Partition, reader: jspb.BinaryReader): Partition;
}

export namespace Partition {
  export type AsObject = {
    partitionToken: Uint8Array | string,
  }
}

export class PartitionResponse extends jspb.Message {
  getPartitionsList(): Array<Partition>;
  setPartitionsList(value: Array<Partition>): PartitionResponse;
  clearPartitionsList(): PartitionResponse;
  addPartitions(value?: Partition, index?: number): Partition;

  getTransaction(): google_spanner_v1_transaction_pb.Transaction | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.Transaction): PartitionResponse;
  hasTransaction(): boolean;
  clearTransaction(): PartitionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionResponse): PartitionResponse.AsObject;
  static serializeBinaryToWriter(message: PartitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionResponse;
  static deserializeBinaryFromReader(message: PartitionResponse, reader: jspb.BinaryReader): PartitionResponse;
}

export namespace PartitionResponse {
  export type AsObject = {
    partitionsList: Array<Partition.AsObject>,
    transaction?: google_spanner_v1_transaction_pb.Transaction.AsObject,
  }
}

export class ReadRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): ReadRequest;

  getTransaction(): google_spanner_v1_transaction_pb.TransactionSelector | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.TransactionSelector): ReadRequest;
  hasTransaction(): boolean;
  clearTransaction(): ReadRequest;

  getTable(): string;
  setTable(value: string): ReadRequest;

  getIndex(): string;
  setIndex(value: string): ReadRequest;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): ReadRequest;
  clearColumnsList(): ReadRequest;
  addColumns(value: string, index?: number): ReadRequest;

  getKeySet(): google_spanner_v1_keys_pb.KeySet | undefined;
  setKeySet(value?: google_spanner_v1_keys_pb.KeySet): ReadRequest;
  hasKeySet(): boolean;
  clearKeySet(): ReadRequest;

  getLimit(): number;
  setLimit(value: number): ReadRequest;

  getResumeToken(): Uint8Array | string;
  getResumeToken_asU8(): Uint8Array;
  getResumeToken_asB64(): string;
  setResumeToken(value: Uint8Array | string): ReadRequest;

  getPartitionToken(): Uint8Array | string;
  getPartitionToken_asU8(): Uint8Array;
  getPartitionToken_asB64(): string;
  setPartitionToken(value: Uint8Array | string): ReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    session: string,
    transaction?: google_spanner_v1_transaction_pb.TransactionSelector.AsObject,
    table: string,
    index: string,
    columnsList: Array<string>,
    keySet?: google_spanner_v1_keys_pb.KeySet.AsObject,
    limit: number,
    resumeToken: Uint8Array | string,
    partitionToken: Uint8Array | string,
  }
}

export class BeginTransactionRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): BeginTransactionRequest;

  getOptions(): google_spanner_v1_transaction_pb.TransactionOptions | undefined;
  setOptions(value?: google_spanner_v1_transaction_pb.TransactionOptions): BeginTransactionRequest;
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
    session: string,
    options?: google_spanner_v1_transaction_pb.TransactionOptions.AsObject,
  }
}

export class CommitRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): CommitRequest;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): CommitRequest;

  getSingleUseTransaction(): google_spanner_v1_transaction_pb.TransactionOptions | undefined;
  setSingleUseTransaction(value?: google_spanner_v1_transaction_pb.TransactionOptions): CommitRequest;
  hasSingleUseTransaction(): boolean;
  clearSingleUseTransaction(): CommitRequest;

  getMutationsList(): Array<google_spanner_v1_mutation_pb.Mutation>;
  setMutationsList(value: Array<google_spanner_v1_mutation_pb.Mutation>): CommitRequest;
  clearMutationsList(): CommitRequest;
  addMutations(value?: google_spanner_v1_mutation_pb.Mutation, index?: number): google_spanner_v1_mutation_pb.Mutation;

  getTransactionCase(): CommitRequest.TransactionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommitRequest): CommitRequest.AsObject;
  static serializeBinaryToWriter(message: CommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitRequest;
  static deserializeBinaryFromReader(message: CommitRequest, reader: jspb.BinaryReader): CommitRequest;
}

export namespace CommitRequest {
  export type AsObject = {
    session: string,
    transactionId: Uint8Array | string,
    singleUseTransaction?: google_spanner_v1_transaction_pb.TransactionOptions.AsObject,
    mutationsList: Array<google_spanner_v1_mutation_pb.Mutation.AsObject>,
  }

  export enum TransactionCase { 
    TRANSACTION_NOT_SET = 0,
    TRANSACTION_ID = 2,
    SINGLE_USE_TRANSACTION = 3,
  }
}

export class CommitResponse extends jspb.Message {
  getCommitTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCommitTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): CommitResponse;
  hasCommitTimestamp(): boolean;
  clearCommitTimestamp(): CommitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommitResponse): CommitResponse.AsObject;
  static serializeBinaryToWriter(message: CommitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitResponse;
  static deserializeBinaryFromReader(message: CommitResponse, reader: jspb.BinaryReader): CommitResponse;
}

export namespace CommitResponse {
  export type AsObject = {
    commitTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RollbackRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): RollbackRequest;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): RollbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RollbackRequest): RollbackRequest.AsObject;
  static serializeBinaryToWriter(message: RollbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollbackRequest;
  static deserializeBinaryFromReader(message: RollbackRequest, reader: jspb.BinaryReader): RollbackRequest;
}

export namespace RollbackRequest {
  export type AsObject = {
    session: string,
    transactionId: Uint8Array | string,
  }
}

