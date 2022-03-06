import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Folder extends jspb.Message {
  getName(): string;
  setName(value: string): Folder;

  getParent(): string;
  setParent(value: string): Folder;

  getDisplayName(): string;
  setDisplayName(value: string): Folder;

  getLifecycleState(): Folder.LifecycleState;
  setLifecycleState(value: Folder.LifecycleState): Folder;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Folder;
  hasCreateTime(): boolean;
  clearCreateTime(): Folder;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Folder;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Folder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Folder.AsObject;
  static toObject(includeInstance: boolean, msg: Folder): Folder.AsObject;
  static serializeBinaryToWriter(message: Folder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Folder;
  static deserializeBinaryFromReader(message: Folder, reader: jspb.BinaryReader): Folder;
}

export namespace Folder {
  export type AsObject = {
    name: string,
    parent: string,
    displayName: string,
    lifecycleState: Folder.LifecycleState,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum LifecycleState { 
    LIFECYCLE_STATE_UNSPECIFIED = 0,
    ACTIVE = 1,
    DELETE_REQUESTED = 2,
  }
}

export class ListFoldersRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListFoldersRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFoldersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFoldersRequest;

  getShowDeleted(): boolean;
  setShowDeleted(value: boolean): ListFoldersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFoldersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFoldersRequest): ListFoldersRequest.AsObject;
  static serializeBinaryToWriter(message: ListFoldersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFoldersRequest;
  static deserializeBinaryFromReader(message: ListFoldersRequest, reader: jspb.BinaryReader): ListFoldersRequest;
}

export namespace ListFoldersRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    showDeleted: boolean,
  }
}

export class ListFoldersResponse extends jspb.Message {
  getFoldersList(): Array<Folder>;
  setFoldersList(value: Array<Folder>): ListFoldersResponse;
  clearFoldersList(): ListFoldersResponse;
  addFolders(value?: Folder, index?: number): Folder;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFoldersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFoldersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFoldersResponse): ListFoldersResponse.AsObject;
  static serializeBinaryToWriter(message: ListFoldersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFoldersResponse;
  static deserializeBinaryFromReader(message: ListFoldersResponse, reader: jspb.BinaryReader): ListFoldersResponse;
}

export namespace ListFoldersResponse {
  export type AsObject = {
    foldersList: Array<Folder.AsObject>,
    nextPageToken: string,
  }
}

export class SearchFoldersRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): SearchFoldersRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchFoldersRequest;

  getQuery(): string;
  setQuery(value: string): SearchFoldersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchFoldersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchFoldersRequest): SearchFoldersRequest.AsObject;
  static serializeBinaryToWriter(message: SearchFoldersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchFoldersRequest;
  static deserializeBinaryFromReader(message: SearchFoldersRequest, reader: jspb.BinaryReader): SearchFoldersRequest;
}

export namespace SearchFoldersRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    query: string,
  }
}

export class SearchFoldersResponse extends jspb.Message {
  getFoldersList(): Array<Folder>;
  setFoldersList(value: Array<Folder>): SearchFoldersResponse;
  clearFoldersList(): SearchFoldersResponse;
  addFolders(value?: Folder, index?: number): Folder;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchFoldersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchFoldersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchFoldersResponse): SearchFoldersResponse.AsObject;
  static serializeBinaryToWriter(message: SearchFoldersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchFoldersResponse;
  static deserializeBinaryFromReader(message: SearchFoldersResponse, reader: jspb.BinaryReader): SearchFoldersResponse;
}

export namespace SearchFoldersResponse {
  export type AsObject = {
    foldersList: Array<Folder.AsObject>,
    nextPageToken: string,
  }
}

export class GetFolderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetFolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFolderRequest): GetFolderRequest.AsObject;
  static serializeBinaryToWriter(message: GetFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFolderRequest;
  static deserializeBinaryFromReader(message: GetFolderRequest, reader: jspb.BinaryReader): GetFolderRequest;
}

export namespace GetFolderRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateFolderRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateFolderRequest;

  getFolder(): Folder | undefined;
  setFolder(value?: Folder): CreateFolderRequest;
  hasFolder(): boolean;
  clearFolder(): CreateFolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFolderRequest): CreateFolderRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFolderRequest;
  static deserializeBinaryFromReader(message: CreateFolderRequest, reader: jspb.BinaryReader): CreateFolderRequest;
}

export namespace CreateFolderRequest {
  export type AsObject = {
    parent: string,
    folder?: Folder.AsObject,
  }
}

export class MoveFolderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): MoveFolderRequest;

  getDestinationParent(): string;
  setDestinationParent(value: string): MoveFolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveFolderRequest): MoveFolderRequest.AsObject;
  static serializeBinaryToWriter(message: MoveFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveFolderRequest;
  static deserializeBinaryFromReader(message: MoveFolderRequest, reader: jspb.BinaryReader): MoveFolderRequest;
}

export namespace MoveFolderRequest {
  export type AsObject = {
    name: string,
    destinationParent: string,
  }
}

export class UpdateFolderRequest extends jspb.Message {
  getFolder(): Folder | undefined;
  setFolder(value?: Folder): UpdateFolderRequest;
  hasFolder(): boolean;
  clearFolder(): UpdateFolderRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFolderRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateFolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFolderRequest): UpdateFolderRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFolderRequest;
  static deserializeBinaryFromReader(message: UpdateFolderRequest, reader: jspb.BinaryReader): UpdateFolderRequest;
}

export namespace UpdateFolderRequest {
  export type AsObject = {
    folder?: Folder.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteFolderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteFolderRequest;

  getRecursiveDelete(): boolean;
  setRecursiveDelete(value: boolean): DeleteFolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFolderRequest): DeleteFolderRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFolderRequest;
  static deserializeBinaryFromReader(message: DeleteFolderRequest, reader: jspb.BinaryReader): DeleteFolderRequest;
}

export namespace DeleteFolderRequest {
  export type AsObject = {
    name: string,
    recursiveDelete: boolean,
  }
}

export class UndeleteFolderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UndeleteFolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteFolderRequest): UndeleteFolderRequest.AsObject;
  static serializeBinaryToWriter(message: UndeleteFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteFolderRequest;
  static deserializeBinaryFromReader(message: UndeleteFolderRequest, reader: jspb.BinaryReader): UndeleteFolderRequest;
}

export namespace UndeleteFolderRequest {
  export type AsObject = {
    name: string,
  }
}

export class FolderOperation extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): FolderOperation;

  getOperationType(): FolderOperation.OperationType;
  setOperationType(value: FolderOperation.OperationType): FolderOperation;

  getSourceParent(): string;
  setSourceParent(value: string): FolderOperation;

  getDestinationParent(): string;
  setDestinationParent(value: string): FolderOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FolderOperation.AsObject;
  static toObject(includeInstance: boolean, msg: FolderOperation): FolderOperation.AsObject;
  static serializeBinaryToWriter(message: FolderOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FolderOperation;
  static deserializeBinaryFromReader(message: FolderOperation, reader: jspb.BinaryReader): FolderOperation;
}

export namespace FolderOperation {
  export type AsObject = {
    displayName: string,
    operationType: FolderOperation.OperationType,
    sourceParent: string,
    destinationParent: string,
  }

  export enum OperationType { 
    OPERATION_TYPE_UNSPECIFIED = 0,
    CREATE = 1,
    MOVE = 2,
  }
}

