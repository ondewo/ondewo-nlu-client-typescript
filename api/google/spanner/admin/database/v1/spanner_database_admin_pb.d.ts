import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Database extends jspb.Message {
  getName(): string;
  setName(value: string): Database;

  getState(): Database.State;
  setState(value: Database.State): Database;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Database.AsObject;
  static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
  static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Database;
  static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
}

export namespace Database {
  export type AsObject = {
    name: string,
    state: Database.State,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
  }
}

export class ListDatabasesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListDatabasesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDatabasesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDatabasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatabasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatabasesRequest): ListDatabasesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatabasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatabasesRequest;
  static deserializeBinaryFromReader(message: ListDatabasesRequest, reader: jspb.BinaryReader): ListDatabasesRequest;
}

export namespace ListDatabasesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDatabasesResponse extends jspb.Message {
  getDatabasesList(): Array<Database>;
  setDatabasesList(value: Array<Database>): ListDatabasesResponse;
  clearDatabasesList(): ListDatabasesResponse;
  addDatabases(value?: Database, index?: number): Database;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDatabasesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatabasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatabasesResponse): ListDatabasesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDatabasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatabasesResponse;
  static deserializeBinaryFromReader(message: ListDatabasesResponse, reader: jspb.BinaryReader): ListDatabasesResponse;
}

export namespace ListDatabasesResponse {
  export type AsObject = {
    databasesList: Array<Database.AsObject>,
    nextPageToken: string,
  }
}

export class CreateDatabaseRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateDatabaseRequest;

  getCreateStatement(): string;
  setCreateStatement(value: string): CreateDatabaseRequest;

  getExtraStatementsList(): Array<string>;
  setExtraStatementsList(value: Array<string>): CreateDatabaseRequest;
  clearExtraStatementsList(): CreateDatabaseRequest;
  addExtraStatements(value: string, index?: number): CreateDatabaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatabaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatabaseRequest): CreateDatabaseRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatabaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatabaseRequest;
  static deserializeBinaryFromReader(message: CreateDatabaseRequest, reader: jspb.BinaryReader): CreateDatabaseRequest;
}

export namespace CreateDatabaseRequest {
  export type AsObject = {
    parent: string,
    createStatement: string,
    extraStatementsList: Array<string>,
  }
}

export class CreateDatabaseMetadata extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): CreateDatabaseMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatabaseMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatabaseMetadata): CreateDatabaseMetadata.AsObject;
  static serializeBinaryToWriter(message: CreateDatabaseMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatabaseMetadata;
  static deserializeBinaryFromReader(message: CreateDatabaseMetadata, reader: jspb.BinaryReader): CreateDatabaseMetadata;
}

export namespace CreateDatabaseMetadata {
  export type AsObject = {
    database: string,
  }
}

export class GetDatabaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetDatabaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabaseRequest): GetDatabaseRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatabaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabaseRequest;
  static deserializeBinaryFromReader(message: GetDatabaseRequest, reader: jspb.BinaryReader): GetDatabaseRequest;
}

export namespace GetDatabaseRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateDatabaseDdlRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): UpdateDatabaseDdlRequest;

  getStatementsList(): Array<string>;
  setStatementsList(value: Array<string>): UpdateDatabaseDdlRequest;
  clearStatementsList(): UpdateDatabaseDdlRequest;
  addStatements(value: string, index?: number): UpdateDatabaseDdlRequest;

  getOperationId(): string;
  setOperationId(value: string): UpdateDatabaseDdlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatabaseDdlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatabaseDdlRequest): UpdateDatabaseDdlRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDatabaseDdlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatabaseDdlRequest;
  static deserializeBinaryFromReader(message: UpdateDatabaseDdlRequest, reader: jspb.BinaryReader): UpdateDatabaseDdlRequest;
}

export namespace UpdateDatabaseDdlRequest {
  export type AsObject = {
    database: string,
    statementsList: Array<string>,
    operationId: string,
  }
}

export class UpdateDatabaseDdlMetadata extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): UpdateDatabaseDdlMetadata;

  getStatementsList(): Array<string>;
  setStatementsList(value: Array<string>): UpdateDatabaseDdlMetadata;
  clearStatementsList(): UpdateDatabaseDdlMetadata;
  addStatements(value: string, index?: number): UpdateDatabaseDdlMetadata;

  getCommitTimestampsList(): Array<google_protobuf_timestamp_pb.Timestamp>;
  setCommitTimestampsList(value: Array<google_protobuf_timestamp_pb.Timestamp>): UpdateDatabaseDdlMetadata;
  clearCommitTimestampsList(): UpdateDatabaseDdlMetadata;
  addCommitTimestamps(value?: google_protobuf_timestamp_pb.Timestamp, index?: number): google_protobuf_timestamp_pb.Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatabaseDdlMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatabaseDdlMetadata): UpdateDatabaseDdlMetadata.AsObject;
  static serializeBinaryToWriter(message: UpdateDatabaseDdlMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatabaseDdlMetadata;
  static deserializeBinaryFromReader(message: UpdateDatabaseDdlMetadata, reader: jspb.BinaryReader): UpdateDatabaseDdlMetadata;
}

export namespace UpdateDatabaseDdlMetadata {
  export type AsObject = {
    database: string,
    statementsList: Array<string>,
    commitTimestampsList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>,
  }
}

export class DropDatabaseRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): DropDatabaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropDatabaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropDatabaseRequest): DropDatabaseRequest.AsObject;
  static serializeBinaryToWriter(message: DropDatabaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropDatabaseRequest;
  static deserializeBinaryFromReader(message: DropDatabaseRequest, reader: jspb.BinaryReader): DropDatabaseRequest;
}

export namespace DropDatabaseRequest {
  export type AsObject = {
    database: string,
  }
}

export class GetDatabaseDdlRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): GetDatabaseDdlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabaseDdlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabaseDdlRequest): GetDatabaseDdlRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatabaseDdlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabaseDdlRequest;
  static deserializeBinaryFromReader(message: GetDatabaseDdlRequest, reader: jspb.BinaryReader): GetDatabaseDdlRequest;
}

export namespace GetDatabaseDdlRequest {
  export type AsObject = {
    database: string,
  }
}

export class GetDatabaseDdlResponse extends jspb.Message {
  getStatementsList(): Array<string>;
  setStatementsList(value: Array<string>): GetDatabaseDdlResponse;
  clearStatementsList(): GetDatabaseDdlResponse;
  addStatements(value: string, index?: number): GetDatabaseDdlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabaseDdlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabaseDdlResponse): GetDatabaseDdlResponse.AsObject;
  static serializeBinaryToWriter(message: GetDatabaseDdlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabaseDdlResponse;
  static deserializeBinaryFromReader(message: GetDatabaseDdlResponse, reader: jspb.BinaryReader): GetDatabaseDdlResponse;
}

export namespace GetDatabaseDdlResponse {
  export type AsObject = {
    statementsList: Array<string>,
  }
}

