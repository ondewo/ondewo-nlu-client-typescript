import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_auth_pb from '../../../../google/api/auth_pb';
import * as google_cloud_functions_v1beta2_operations_pb from '../../../../google/cloud/functions/v1beta2/operations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class CloudFunction extends jspb.Message {
  getName(): string;
  setName(value: string): CloudFunction;

  getSourceArchiveUrl(): string;
  setSourceArchiveUrl(value: string): CloudFunction;

  getSourceRepository(): SourceRepository | undefined;
  setSourceRepository(value?: SourceRepository): CloudFunction;
  hasSourceRepository(): boolean;
  clearSourceRepository(): CloudFunction;

  getHttpsTrigger(): HTTPSTrigger | undefined;
  setHttpsTrigger(value?: HTTPSTrigger): CloudFunction;
  hasHttpsTrigger(): boolean;
  clearHttpsTrigger(): CloudFunction;

  getEventTrigger(): EventTrigger | undefined;
  setEventTrigger(value?: EventTrigger): CloudFunction;
  hasEventTrigger(): boolean;
  clearEventTrigger(): CloudFunction;

  getStatus(): CloudFunctionStatus;
  setStatus(value: CloudFunctionStatus): CloudFunction;

  getLatestOperation(): string;
  setLatestOperation(value: string): CloudFunction;

  getEntryPoint(): string;
  setEntryPoint(value: string): CloudFunction;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): CloudFunction;
  hasTimeout(): boolean;
  clearTimeout(): CloudFunction;

  getAvailableMemoryMb(): number;
  setAvailableMemoryMb(value: number): CloudFunction;

  getServiceAccount(): string;
  setServiceAccount(value: string): CloudFunction;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): CloudFunction;
  hasUpdateTime(): boolean;
  clearUpdateTime(): CloudFunction;

  getSourceCodeCase(): CloudFunction.SourceCodeCase;

  getTriggerCase(): CloudFunction.TriggerCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudFunction.AsObject;
  static toObject(includeInstance: boolean, msg: CloudFunction): CloudFunction.AsObject;
  static serializeBinaryToWriter(message: CloudFunction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudFunction;
  static deserializeBinaryFromReader(message: CloudFunction, reader: jspb.BinaryReader): CloudFunction;
}

export namespace CloudFunction {
  export type AsObject = {
    name: string,
    sourceArchiveUrl: string,
    sourceRepository?: SourceRepository.AsObject,
    httpsTrigger?: HTTPSTrigger.AsObject,
    eventTrigger?: EventTrigger.AsObject,
    status: CloudFunctionStatus,
    latestOperation: string,
    entryPoint: string,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    availableMemoryMb: number,
    serviceAccount: string,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum SourceCodeCase { 
    SOURCE_CODE_NOT_SET = 0,
    SOURCE_ARCHIVE_URL = 14,
    SOURCE_REPOSITORY = 3,
  }

  export enum TriggerCase { 
    TRIGGER_NOT_SET = 0,
    HTTPS_TRIGGER = 6,
    EVENT_TRIGGER = 12,
  }
}

export class HTTPSTrigger extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): HTTPSTrigger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPSTrigger.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPSTrigger): HTTPSTrigger.AsObject;
  static serializeBinaryToWriter(message: HTTPSTrigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPSTrigger;
  static deserializeBinaryFromReader(message: HTTPSTrigger, reader: jspb.BinaryReader): HTTPSTrigger;
}

export namespace HTTPSTrigger {
  export type AsObject = {
    url: string,
  }
}

export class EventTrigger extends jspb.Message {
  getEventType(): string;
  setEventType(value: string): EventTrigger;

  getResource(): string;
  setResource(value: string): EventTrigger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTrigger.AsObject;
  static toObject(includeInstance: boolean, msg: EventTrigger): EventTrigger.AsObject;
  static serializeBinaryToWriter(message: EventTrigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTrigger;
  static deserializeBinaryFromReader(message: EventTrigger, reader: jspb.BinaryReader): EventTrigger;
}

export namespace EventTrigger {
  export type AsObject = {
    eventType: string,
    resource: string,
  }
}

export class SourceRepository extends jspb.Message {
  getRepositoryUrl(): string;
  setRepositoryUrl(value: string): SourceRepository;

  getSourcePath(): string;
  setSourcePath(value: string): SourceRepository;

  getBranch(): string;
  setBranch(value: string): SourceRepository;

  getTag(): string;
  setTag(value: string): SourceRepository;

  getRevision(): string;
  setRevision(value: string): SourceRepository;

  getDeployedRevision(): string;
  setDeployedRevision(value: string): SourceRepository;

  getVersionCase(): SourceRepository.VersionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceRepository.AsObject;
  static toObject(includeInstance: boolean, msg: SourceRepository): SourceRepository.AsObject;
  static serializeBinaryToWriter(message: SourceRepository, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceRepository;
  static deserializeBinaryFromReader(message: SourceRepository, reader: jspb.BinaryReader): SourceRepository;
}

export namespace SourceRepository {
  export type AsObject = {
    repositoryUrl: string,
    sourcePath: string,
    branch: string,
    tag: string,
    revision: string,
    deployedRevision: string,
  }

  export enum VersionCase { 
    VERSION_NOT_SET = 0,
    BRANCH = 3,
    TAG = 4,
    REVISION = 5,
  }
}

export class CreateFunctionRequest extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): CreateFunctionRequest;

  getFunction(): CloudFunction | undefined;
  setFunction(value?: CloudFunction): CreateFunctionRequest;
  hasFunction(): boolean;
  clearFunction(): CreateFunctionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFunctionRequest): CreateFunctionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFunctionRequest;
  static deserializeBinaryFromReader(message: CreateFunctionRequest, reader: jspb.BinaryReader): CreateFunctionRequest;
}

export namespace CreateFunctionRequest {
  export type AsObject = {
    location: string,
    pb_function?: CloudFunction.AsObject,
  }
}

export class UpdateFunctionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateFunctionRequest;

  getFunction(): CloudFunction | undefined;
  setFunction(value?: CloudFunction): UpdateFunctionRequest;
  hasFunction(): boolean;
  clearFunction(): UpdateFunctionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFunctionRequest): UpdateFunctionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFunctionRequest;
  static deserializeBinaryFromReader(message: UpdateFunctionRequest, reader: jspb.BinaryReader): UpdateFunctionRequest;
}

export namespace UpdateFunctionRequest {
  export type AsObject = {
    name: string,
    pb_function?: CloudFunction.AsObject,
  }
}

export class GetFunctionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetFunctionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFunctionRequest): GetFunctionRequest.AsObject;
  static serializeBinaryToWriter(message: GetFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFunctionRequest;
  static deserializeBinaryFromReader(message: GetFunctionRequest, reader: jspb.BinaryReader): GetFunctionRequest;
}

export namespace GetFunctionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListFunctionsRequest extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): ListFunctionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFunctionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFunctionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFunctionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFunctionsRequest): ListFunctionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFunctionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFunctionsRequest;
  static deserializeBinaryFromReader(message: ListFunctionsRequest, reader: jspb.BinaryReader): ListFunctionsRequest;
}

export namespace ListFunctionsRequest {
  export type AsObject = {
    location: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListFunctionsResponse extends jspb.Message {
  getFunctionsList(): Array<CloudFunction>;
  setFunctionsList(value: Array<CloudFunction>): ListFunctionsResponse;
  clearFunctionsList(): ListFunctionsResponse;
  addFunctions(value?: CloudFunction, index?: number): CloudFunction;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFunctionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFunctionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFunctionsResponse): ListFunctionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFunctionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFunctionsResponse;
  static deserializeBinaryFromReader(message: ListFunctionsResponse, reader: jspb.BinaryReader): ListFunctionsResponse;
}

export namespace ListFunctionsResponse {
  export type AsObject = {
    functionsList: Array<CloudFunction.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteFunctionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteFunctionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFunctionRequest): DeleteFunctionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFunctionRequest;
  static deserializeBinaryFromReader(message: DeleteFunctionRequest, reader: jspb.BinaryReader): DeleteFunctionRequest;
}

export namespace DeleteFunctionRequest {
  export type AsObject = {
    name: string,
  }
}

export class CallFunctionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CallFunctionRequest;

  getData(): string;
  setData(value: string): CallFunctionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallFunctionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CallFunctionRequest): CallFunctionRequest.AsObject;
  static serializeBinaryToWriter(message: CallFunctionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallFunctionRequest;
  static deserializeBinaryFromReader(message: CallFunctionRequest, reader: jspb.BinaryReader): CallFunctionRequest;
}

export namespace CallFunctionRequest {
  export type AsObject = {
    name: string,
    data: string,
  }
}

export class CallFunctionResponse extends jspb.Message {
  getExecutionId(): string;
  setExecutionId(value: string): CallFunctionResponse;

  getResult(): string;
  setResult(value: string): CallFunctionResponse;

  getError(): string;
  setError(value: string): CallFunctionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallFunctionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CallFunctionResponse): CallFunctionResponse.AsObject;
  static serializeBinaryToWriter(message: CallFunctionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallFunctionResponse;
  static deserializeBinaryFromReader(message: CallFunctionResponse, reader: jspb.BinaryReader): CallFunctionResponse;
}

export namespace CallFunctionResponse {
  export type AsObject = {
    executionId: string,
    result: string,
    error: string,
  }
}

export enum CloudFunctionStatus { 
  STATUS_UNSPECIFIED = 0,
  READY = 1,
  FAILED = 2,
  DEPLOYING = 3,
  DELETING = 4,
}
