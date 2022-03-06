import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_tasks_v2beta2_target_pb from '../../../../google/cloud/tasks/v2beta2/target_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class Task extends jspb.Message {
  getName(): string;
  setName(value: string): Task;

  getAppEngineHttpRequest(): google_cloud_tasks_v2beta2_target_pb.AppEngineHttpRequest | undefined;
  setAppEngineHttpRequest(value?: google_cloud_tasks_v2beta2_target_pb.AppEngineHttpRequest): Task;
  hasAppEngineHttpRequest(): boolean;
  clearAppEngineHttpRequest(): Task;

  getPullMessage(): google_cloud_tasks_v2beta2_target_pb.PullMessage | undefined;
  setPullMessage(value?: google_cloud_tasks_v2beta2_target_pb.PullMessage): Task;
  hasPullMessage(): boolean;
  clearPullMessage(): Task;

  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): Task;
  hasScheduleTime(): boolean;
  clearScheduleTime(): Task;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Task;
  hasCreateTime(): boolean;
  clearCreateTime(): Task;

  getStatus(): TaskStatus | undefined;
  setStatus(value?: TaskStatus): Task;
  hasStatus(): boolean;
  clearStatus(): Task;

  getView(): Task.View;
  setView(value: Task.View): Task;

  getPayloadTypeCase(): Task.PayloadTypeCase;

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
    appEngineHttpRequest?: google_cloud_tasks_v2beta2_target_pb.AppEngineHttpRequest.AsObject,
    pullMessage?: google_cloud_tasks_v2beta2_target_pb.PullMessage.AsObject,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status?: TaskStatus.AsObject,
    view: Task.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    FULL = 2,
  }

  export enum PayloadTypeCase { 
    PAYLOAD_TYPE_NOT_SET = 0,
    APP_ENGINE_HTTP_REQUEST = 3,
    PULL_MESSAGE = 4,
  }
}

export class TaskStatus extends jspb.Message {
  getAttemptDispatchCount(): number;
  setAttemptDispatchCount(value: number): TaskStatus;

  getAttemptResponseCount(): number;
  setAttemptResponseCount(value: number): TaskStatus;

  getFirstAttemptStatus(): AttemptStatus | undefined;
  setFirstAttemptStatus(value?: AttemptStatus): TaskStatus;
  hasFirstAttemptStatus(): boolean;
  clearFirstAttemptStatus(): TaskStatus;

  getLastAttemptStatus(): AttemptStatus | undefined;
  setLastAttemptStatus(value?: AttemptStatus): TaskStatus;
  hasLastAttemptStatus(): boolean;
  clearLastAttemptStatus(): TaskStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatus.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatus): TaskStatus.AsObject;
  static serializeBinaryToWriter(message: TaskStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatus;
  static deserializeBinaryFromReader(message: TaskStatus, reader: jspb.BinaryReader): TaskStatus;
}

export namespace TaskStatus {
  export type AsObject = {
    attemptDispatchCount: number,
    attemptResponseCount: number,
    firstAttemptStatus?: AttemptStatus.AsObject,
    lastAttemptStatus?: AttemptStatus.AsObject,
  }
}

export class AttemptStatus extends jspb.Message {
  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): AttemptStatus;
  hasScheduleTime(): boolean;
  clearScheduleTime(): AttemptStatus;

  getDispatchTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDispatchTime(value?: google_protobuf_timestamp_pb.Timestamp): AttemptStatus;
  hasDispatchTime(): boolean;
  clearDispatchTime(): AttemptStatus;

  getResponseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResponseTime(value?: google_protobuf_timestamp_pb.Timestamp): AttemptStatus;
  hasResponseTime(): boolean;
  clearResponseTime(): AttemptStatus;

  getResponseStatus(): google_rpc_status_pb.Status | undefined;
  setResponseStatus(value?: google_rpc_status_pb.Status): AttemptStatus;
  hasResponseStatus(): boolean;
  clearResponseStatus(): AttemptStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttemptStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AttemptStatus): AttemptStatus.AsObject;
  static serializeBinaryToWriter(message: AttemptStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttemptStatus;
  static deserializeBinaryFromReader(message: AttemptStatus, reader: jspb.BinaryReader): AttemptStatus;
}

export namespace AttemptStatus {
  export type AsObject = {
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dispatchTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    responseTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    responseStatus?: google_rpc_status_pb.Status.AsObject,
  }
}

