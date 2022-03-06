import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_datastore_admin_v1_index_pb from '../../../../google/datastore/admin/v1/index_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class CommonMetadata extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CommonMetadata;
  hasStartTime(): boolean;
  clearStartTime(): CommonMetadata;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CommonMetadata;
  hasEndTime(): boolean;
  clearEndTime(): CommonMetadata;

  getOperationType(): OperationType;
  setOperationType(value: OperationType): CommonMetadata;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CommonMetadata;

  getState(): CommonMetadata.State;
  setState(value: CommonMetadata.State): CommonMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CommonMetadata): CommonMetadata.AsObject;
  static serializeBinaryToWriter(message: CommonMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonMetadata;
  static deserializeBinaryFromReader(message: CommonMetadata, reader: jspb.BinaryReader): CommonMetadata;
}

export namespace CommonMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operationType: OperationType,
    labelsMap: Array<[string, string]>,
    state: CommonMetadata.State,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    INITIALIZING = 1,
    PROCESSING = 2,
    CANCELLING = 3,
    FINALIZING = 4,
    SUCCESSFUL = 5,
    FAILED = 6,
    CANCELLED = 7,
  }
}

export class Progress extends jspb.Message {
  getWorkCompleted(): number;
  setWorkCompleted(value: number): Progress;

  getWorkEstimated(): number;
  setWorkEstimated(value: number): Progress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Progress.AsObject;
  static toObject(includeInstance: boolean, msg: Progress): Progress.AsObject;
  static serializeBinaryToWriter(message: Progress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Progress;
  static deserializeBinaryFromReader(message: Progress, reader: jspb.BinaryReader): Progress;
}

export namespace Progress {
  export type AsObject = {
    workCompleted: number,
    workEstimated: number,
  }
}

export class ExportEntitiesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ExportEntitiesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ExportEntitiesRequest;

  getEntityFilter(): EntityFilter | undefined;
  setEntityFilter(value?: EntityFilter): ExportEntitiesRequest;
  hasEntityFilter(): boolean;
  clearEntityFilter(): ExportEntitiesRequest;

  getOutputUrlPrefix(): string;
  setOutputUrlPrefix(value: string): ExportEntitiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportEntitiesRequest): ExportEntitiesRequest.AsObject;
  static serializeBinaryToWriter(message: ExportEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportEntitiesRequest;
  static deserializeBinaryFromReader(message: ExportEntitiesRequest, reader: jspb.BinaryReader): ExportEntitiesRequest;
}

export namespace ExportEntitiesRequest {
  export type AsObject = {
    projectId: string,
    labelsMap: Array<[string, string]>,
    entityFilter?: EntityFilter.AsObject,
    outputUrlPrefix: string,
  }
}

export class ImportEntitiesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ImportEntitiesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ImportEntitiesRequest;

  getInputUrl(): string;
  setInputUrl(value: string): ImportEntitiesRequest;

  getEntityFilter(): EntityFilter | undefined;
  setEntityFilter(value?: EntityFilter): ImportEntitiesRequest;
  hasEntityFilter(): boolean;
  clearEntityFilter(): ImportEntitiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportEntitiesRequest): ImportEntitiesRequest.AsObject;
  static serializeBinaryToWriter(message: ImportEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportEntitiesRequest;
  static deserializeBinaryFromReader(message: ImportEntitiesRequest, reader: jspb.BinaryReader): ImportEntitiesRequest;
}

export namespace ImportEntitiesRequest {
  export type AsObject = {
    projectId: string,
    labelsMap: Array<[string, string]>,
    inputUrl: string,
    entityFilter?: EntityFilter.AsObject,
  }
}

export class ExportEntitiesResponse extends jspb.Message {
  getOutputUrl(): string;
  setOutputUrl(value: string): ExportEntitiesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportEntitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportEntitiesResponse): ExportEntitiesResponse.AsObject;
  static serializeBinaryToWriter(message: ExportEntitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportEntitiesResponse;
  static deserializeBinaryFromReader(message: ExportEntitiesResponse, reader: jspb.BinaryReader): ExportEntitiesResponse;
}

export namespace ExportEntitiesResponse {
  export type AsObject = {
    outputUrl: string,
  }
}

export class ExportEntitiesMetadata extends jspb.Message {
  getCommon(): CommonMetadata | undefined;
  setCommon(value?: CommonMetadata): ExportEntitiesMetadata;
  hasCommon(): boolean;
  clearCommon(): ExportEntitiesMetadata;

  getProgressEntities(): Progress | undefined;
  setProgressEntities(value?: Progress): ExportEntitiesMetadata;
  hasProgressEntities(): boolean;
  clearProgressEntities(): ExportEntitiesMetadata;

  getProgressBytes(): Progress | undefined;
  setProgressBytes(value?: Progress): ExportEntitiesMetadata;
  hasProgressBytes(): boolean;
  clearProgressBytes(): ExportEntitiesMetadata;

  getEntityFilter(): EntityFilter | undefined;
  setEntityFilter(value?: EntityFilter): ExportEntitiesMetadata;
  hasEntityFilter(): boolean;
  clearEntityFilter(): ExportEntitiesMetadata;

  getOutputUrlPrefix(): string;
  setOutputUrlPrefix(value: string): ExportEntitiesMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportEntitiesMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExportEntitiesMetadata): ExportEntitiesMetadata.AsObject;
  static serializeBinaryToWriter(message: ExportEntitiesMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportEntitiesMetadata;
  static deserializeBinaryFromReader(message: ExportEntitiesMetadata, reader: jspb.BinaryReader): ExportEntitiesMetadata;
}

export namespace ExportEntitiesMetadata {
  export type AsObject = {
    common?: CommonMetadata.AsObject,
    progressEntities?: Progress.AsObject,
    progressBytes?: Progress.AsObject,
    entityFilter?: EntityFilter.AsObject,
    outputUrlPrefix: string,
  }
}

export class ImportEntitiesMetadata extends jspb.Message {
  getCommon(): CommonMetadata | undefined;
  setCommon(value?: CommonMetadata): ImportEntitiesMetadata;
  hasCommon(): boolean;
  clearCommon(): ImportEntitiesMetadata;

  getProgressEntities(): Progress | undefined;
  setProgressEntities(value?: Progress): ImportEntitiesMetadata;
  hasProgressEntities(): boolean;
  clearProgressEntities(): ImportEntitiesMetadata;

  getProgressBytes(): Progress | undefined;
  setProgressBytes(value?: Progress): ImportEntitiesMetadata;
  hasProgressBytes(): boolean;
  clearProgressBytes(): ImportEntitiesMetadata;

  getEntityFilter(): EntityFilter | undefined;
  setEntityFilter(value?: EntityFilter): ImportEntitiesMetadata;
  hasEntityFilter(): boolean;
  clearEntityFilter(): ImportEntitiesMetadata;

  getInputUrl(): string;
  setInputUrl(value: string): ImportEntitiesMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportEntitiesMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImportEntitiesMetadata): ImportEntitiesMetadata.AsObject;
  static serializeBinaryToWriter(message: ImportEntitiesMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportEntitiesMetadata;
  static deserializeBinaryFromReader(message: ImportEntitiesMetadata, reader: jspb.BinaryReader): ImportEntitiesMetadata;
}

export namespace ImportEntitiesMetadata {
  export type AsObject = {
    common?: CommonMetadata.AsObject,
    progressEntities?: Progress.AsObject,
    progressBytes?: Progress.AsObject,
    entityFilter?: EntityFilter.AsObject,
    inputUrl: string,
  }
}

export class EntityFilter extends jspb.Message {
  getKindsList(): Array<string>;
  setKindsList(value: Array<string>): EntityFilter;
  clearKindsList(): EntityFilter;
  addKinds(value: string, index?: number): EntityFilter;

  getNamespaceIdsList(): Array<string>;
  setNamespaceIdsList(value: Array<string>): EntityFilter;
  clearNamespaceIdsList(): EntityFilter;
  addNamespaceIds(value: string, index?: number): EntityFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EntityFilter): EntityFilter.AsObject;
  static serializeBinaryToWriter(message: EntityFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityFilter;
  static deserializeBinaryFromReader(message: EntityFilter, reader: jspb.BinaryReader): EntityFilter;
}

export namespace EntityFilter {
  export type AsObject = {
    kindsList: Array<string>,
    namespaceIdsList: Array<string>,
  }
}

export class GetIndexRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetIndexRequest;

  getIndexId(): string;
  setIndexId(value: string): GetIndexRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIndexRequest): GetIndexRequest.AsObject;
  static serializeBinaryToWriter(message: GetIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIndexRequest;
  static deserializeBinaryFromReader(message: GetIndexRequest, reader: jspb.BinaryReader): GetIndexRequest;
}

export namespace GetIndexRequest {
  export type AsObject = {
    projectId: string,
    indexId: string,
  }
}

export class ListIndexesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListIndexesRequest;

  getFilter(): string;
  setFilter(value: string): ListIndexesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListIndexesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListIndexesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexesRequest): ListIndexesRequest.AsObject;
  static serializeBinaryToWriter(message: ListIndexesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndexesRequest;
  static deserializeBinaryFromReader(message: ListIndexesRequest, reader: jspb.BinaryReader): ListIndexesRequest;
}

export namespace ListIndexesRequest {
  export type AsObject = {
    projectId: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListIndexesResponse extends jspb.Message {
  getIndexesList(): Array<google_datastore_admin_v1_index_pb.Index>;
  setIndexesList(value: Array<google_datastore_admin_v1_index_pb.Index>): ListIndexesResponse;
  clearIndexesList(): ListIndexesResponse;
  addIndexes(value?: google_datastore_admin_v1_index_pb.Index, index?: number): google_datastore_admin_v1_index_pb.Index;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListIndexesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexesResponse): ListIndexesResponse.AsObject;
  static serializeBinaryToWriter(message: ListIndexesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndexesResponse;
  static deserializeBinaryFromReader(message: ListIndexesResponse, reader: jspb.BinaryReader): ListIndexesResponse;
}

export namespace ListIndexesResponse {
  export type AsObject = {
    indexesList: Array<google_datastore_admin_v1_index_pb.Index.AsObject>,
    nextPageToken: string,
  }
}

export class IndexOperationMetadata extends jspb.Message {
  getCommon(): CommonMetadata | undefined;
  setCommon(value?: CommonMetadata): IndexOperationMetadata;
  hasCommon(): boolean;
  clearCommon(): IndexOperationMetadata;

  getProgressEntities(): Progress | undefined;
  setProgressEntities(value?: Progress): IndexOperationMetadata;
  hasProgressEntities(): boolean;
  clearProgressEntities(): IndexOperationMetadata;

  getIndexId(): string;
  setIndexId(value: string): IndexOperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: IndexOperationMetadata): IndexOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: IndexOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexOperationMetadata;
  static deserializeBinaryFromReader(message: IndexOperationMetadata, reader: jspb.BinaryReader): IndexOperationMetadata;
}

export namespace IndexOperationMetadata {
  export type AsObject = {
    common?: CommonMetadata.AsObject,
    progressEntities?: Progress.AsObject,
    indexId: string,
  }
}

export enum OperationType { 
  OPERATION_TYPE_UNSPECIFIED = 0,
  EXPORT_ENTITIES = 1,
  IMPORT_ENTITIES = 2,
  CREATE_INDEX = 3,
  DELETE_INDEX = 4,
}
