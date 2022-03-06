import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class Task extends jspb.Message {
  getName(): string;
  setName(value: string): Task;

  getDescription(): google_protobuf_any_pb.Any | undefined;
  setDescription(value?: google_protobuf_any_pb.Any): Task;
  hasDescription(): boolean;
  clearDescription(): Task;

  getLogsMap(): jspb.Map<string, string>;
  clearLogsMap(): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    name: string,
    description?: google_protobuf_any_pb.Any.AsObject,
    logsMap: Array<[string, string]>,
  }
}

export class TaskResult extends jspb.Message {
  getName(): string;
  setName(value: string): TaskResult;

  getComplete(): boolean;
  setComplete(value: boolean): TaskResult;

  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): TaskResult;
  hasStatus(): boolean;
  clearStatus(): TaskResult;

  getOutput(): google_protobuf_any_pb.Any | undefined;
  setOutput(value?: google_protobuf_any_pb.Any): TaskResult;
  hasOutput(): boolean;
  clearOutput(): TaskResult;

  getMeta(): google_protobuf_any_pb.Any | undefined;
  setMeta(value?: google_protobuf_any_pb.Any): TaskResult;
  hasMeta(): boolean;
  clearMeta(): TaskResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskResult.AsObject;
  static toObject(includeInstance: boolean, msg: TaskResult): TaskResult.AsObject;
  static serializeBinaryToWriter(message: TaskResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskResult;
  static deserializeBinaryFromReader(message: TaskResult, reader: jspb.BinaryReader): TaskResult;
}

export namespace TaskResult {
  export type AsObject = {
    name: string,
    complete: boolean,
    status?: google_rpc_status_pb.Status.AsObject,
    output?: google_protobuf_any_pb.Any.AsObject,
    meta?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class GetTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
  static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateTaskResultRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateTaskResultRequest;

  getResult(): TaskResult | undefined;
  setResult(value?: TaskResult): UpdateTaskResultRequest;
  hasResult(): boolean;
  clearResult(): UpdateTaskResultRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateTaskResultRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateTaskResultRequest;

  getSource(): string;
  setSource(value: string): UpdateTaskResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskResultRequest): UpdateTaskResultRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskResultRequest;
  static deserializeBinaryFromReader(message: UpdateTaskResultRequest, reader: jspb.BinaryReader): UpdateTaskResultRequest;
}

export namespace UpdateTaskResultRequest {
  export type AsObject = {
    name: string,
    result?: TaskResult.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    source: string,
  }
}

export class AddTaskLogRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddTaskLogRequest;

  getLogId(): string;
  setLogId(value: string): AddTaskLogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTaskLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTaskLogRequest): AddTaskLogRequest.AsObject;
  static serializeBinaryToWriter(message: AddTaskLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTaskLogRequest;
  static deserializeBinaryFromReader(message: AddTaskLogRequest, reader: jspb.BinaryReader): AddTaskLogRequest;
}

export namespace AddTaskLogRequest {
  export type AsObject = {
    name: string,
    logId: string,
  }
}

export class AddTaskLogResponse extends jspb.Message {
  getHandle(): string;
  setHandle(value: string): AddTaskLogResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTaskLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddTaskLogResponse): AddTaskLogResponse.AsObject;
  static serializeBinaryToWriter(message: AddTaskLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTaskLogResponse;
  static deserializeBinaryFromReader(message: AddTaskLogResponse, reader: jspb.BinaryReader): AddTaskLogResponse;
}

export namespace AddTaskLogResponse {
  export type AsObject = {
    handle: string,
  }
}

