import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_tasks_v2beta2_queue_pb from '../../../../google/cloud/tasks/v2beta2/queue_pb';
import * as google_cloud_tasks_v2beta2_task_pb from '../../../../google/cloud/tasks/v2beta2/task_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_code_pb from '../../../../google/rpc/code_pb';


export class ListQueuesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListQueuesRequest;

  getFilter(): string;
  setFilter(value: string): ListQueuesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListQueuesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListQueuesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQueuesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListQueuesRequest): ListQueuesRequest.AsObject;
  static serializeBinaryToWriter(message: ListQueuesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQueuesRequest;
  static deserializeBinaryFromReader(message: ListQueuesRequest, reader: jspb.BinaryReader): ListQueuesRequest;
}

export namespace ListQueuesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListQueuesResponse extends jspb.Message {
  getQueuesList(): Array<google_cloud_tasks_v2beta2_queue_pb.Queue>;
  setQueuesList(value: Array<google_cloud_tasks_v2beta2_queue_pb.Queue>): ListQueuesResponse;
  clearQueuesList(): ListQueuesResponse;
  addQueues(value?: google_cloud_tasks_v2beta2_queue_pb.Queue, index?: number): google_cloud_tasks_v2beta2_queue_pb.Queue;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListQueuesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQueuesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListQueuesResponse): ListQueuesResponse.AsObject;
  static serializeBinaryToWriter(message: ListQueuesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQueuesResponse;
  static deserializeBinaryFromReader(message: ListQueuesResponse, reader: jspb.BinaryReader): ListQueuesResponse;
}

export namespace ListQueuesResponse {
  export type AsObject = {
    queuesList: Array<google_cloud_tasks_v2beta2_queue_pb.Queue.AsObject>,
    nextPageToken: string,
  }
}

export class GetQueueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetQueueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueueRequest): GetQueueRequest.AsObject;
  static serializeBinaryToWriter(message: GetQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueueRequest;
  static deserializeBinaryFromReader(message: GetQueueRequest, reader: jspb.BinaryReader): GetQueueRequest;
}

export namespace GetQueueRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateQueueRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateQueueRequest;

  getQueue(): google_cloud_tasks_v2beta2_queue_pb.Queue | undefined;
  setQueue(value?: google_cloud_tasks_v2beta2_queue_pb.Queue): CreateQueueRequest;
  hasQueue(): boolean;
  clearQueue(): CreateQueueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQueueRequest): CreateQueueRequest.AsObject;
  static serializeBinaryToWriter(message: CreateQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQueueRequest;
  static deserializeBinaryFromReader(message: CreateQueueRequest, reader: jspb.BinaryReader): CreateQueueRequest;
}

export namespace CreateQueueRequest {
  export type AsObject = {
    parent: string,
    queue?: google_cloud_tasks_v2beta2_queue_pb.Queue.AsObject,
  }
}

export class UpdateQueueRequest extends jspb.Message {
  getQueue(): google_cloud_tasks_v2beta2_queue_pb.Queue | undefined;
  setQueue(value?: google_cloud_tasks_v2beta2_queue_pb.Queue): UpdateQueueRequest;
  hasQueue(): boolean;
  clearQueue(): UpdateQueueRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateQueueRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateQueueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQueueRequest): UpdateQueueRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQueueRequest;
  static deserializeBinaryFromReader(message: UpdateQueueRequest, reader: jspb.BinaryReader): UpdateQueueRequest;
}

export namespace UpdateQueueRequest {
  export type AsObject = {
    queue?: google_cloud_tasks_v2beta2_queue_pb.Queue.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteQueueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteQueueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQueueRequest): DeleteQueueRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQueueRequest;
  static deserializeBinaryFromReader(message: DeleteQueueRequest, reader: jspb.BinaryReader): DeleteQueueRequest;
}

export namespace DeleteQueueRequest {
  export type AsObject = {
    name: string,
  }
}

export class PurgeQueueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PurgeQueueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurgeQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurgeQueueRequest): PurgeQueueRequest.AsObject;
  static serializeBinaryToWriter(message: PurgeQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurgeQueueRequest;
  static deserializeBinaryFromReader(message: PurgeQueueRequest, reader: jspb.BinaryReader): PurgeQueueRequest;
}

export namespace PurgeQueueRequest {
  export type AsObject = {
    name: string,
  }
}

export class PauseQueueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PauseQueueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseQueueRequest): PauseQueueRequest.AsObject;
  static serializeBinaryToWriter(message: PauseQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseQueueRequest;
  static deserializeBinaryFromReader(message: PauseQueueRequest, reader: jspb.BinaryReader): PauseQueueRequest;
}

export namespace PauseQueueRequest {
  export type AsObject = {
    name: string,
  }
}

export class ResumeQueueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ResumeQueueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeQueueRequest): ResumeQueueRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeQueueRequest;
  static deserializeBinaryFromReader(message: ResumeQueueRequest, reader: jspb.BinaryReader): ResumeQueueRequest;
}

export namespace ResumeQueueRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTasksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListTasksRequest;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.View;
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.View): ListTasksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTasksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTasksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTasksRequest): ListTasksRequest.AsObject;
  static serializeBinaryToWriter(message: ListTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTasksRequest;
  static deserializeBinaryFromReader(message: ListTasksRequest, reader: jspb.BinaryReader): ListTasksRequest;
}

export namespace ListTasksRequest {
  export type AsObject = {
    parent: string,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.View,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTasksResponse extends jspb.Message {
  getTasksList(): Array<google_cloud_tasks_v2beta2_task_pb.Task>;
  setTasksList(value: Array<google_cloud_tasks_v2beta2_task_pb.Task>): ListTasksResponse;
  clearTasksList(): ListTasksResponse;
  addTasks(value?: google_cloud_tasks_v2beta2_task_pb.Task, index?: number): google_cloud_tasks_v2beta2_task_pb.Task;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTasksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTasksResponse): ListTasksResponse.AsObject;
  static serializeBinaryToWriter(message: ListTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTasksResponse;
  static deserializeBinaryFromReader(message: ListTasksResponse, reader: jspb.BinaryReader): ListTasksResponse;
}

export namespace ListTasksResponse {
  export type AsObject = {
    tasksList: Array<google_cloud_tasks_v2beta2_task_pb.Task.AsObject>,
    nextPageToken: string,
  }
}

export class GetTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetTaskRequest;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.View;
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.View): GetTaskRequest;

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
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.View,
  }
}

export class CreateTaskRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateTaskRequest;

  getTask(): google_cloud_tasks_v2beta2_task_pb.Task | undefined;
  setTask(value?: google_cloud_tasks_v2beta2_task_pb.Task): CreateTaskRequest;
  hasTask(): boolean;
  clearTask(): CreateTaskRequest;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.View;
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.View): CreateTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskRequest): CreateTaskRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskRequest;
  static deserializeBinaryFromReader(message: CreateTaskRequest, reader: jspb.BinaryReader): CreateTaskRequest;
}

export namespace CreateTaskRequest {
  export type AsObject = {
    parent: string,
    task?: google_cloud_tasks_v2beta2_task_pb.Task.AsObject,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.View,
  }
}

export class DeleteTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskRequest): DeleteTaskRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskRequest;
  static deserializeBinaryFromReader(message: DeleteTaskRequest, reader: jspb.BinaryReader): DeleteTaskRequest;
}

export namespace DeleteTaskRequest {
  export type AsObject = {
    name: string,
  }
}

export class LeaseTasksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): LeaseTasksRequest;

  getMaxTasks(): number;
  setMaxTasks(value: number): LeaseTasksRequest;

  getLeaseDuration(): google_protobuf_duration_pb.Duration | undefined;
  setLeaseDuration(value?: google_protobuf_duration_pb.Duration): LeaseTasksRequest;
  hasLeaseDuration(): boolean;
  clearLeaseDuration(): LeaseTasksRequest;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.View;
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.View): LeaseTasksRequest;

  getFilter(): string;
  setFilter(value: string): LeaseTasksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaseTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaseTasksRequest): LeaseTasksRequest.AsObject;
  static serializeBinaryToWriter(message: LeaseTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaseTasksRequest;
  static deserializeBinaryFromReader(message: LeaseTasksRequest, reader: jspb.BinaryReader): LeaseTasksRequest;
}

export namespace LeaseTasksRequest {
  export type AsObject = {
    parent: string,
    maxTasks: number,
    leaseDuration?: google_protobuf_duration_pb.Duration.AsObject,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.View,
    filter: string,
  }
}

export class LeaseTasksResponse extends jspb.Message {
  getTasksList(): Array<google_cloud_tasks_v2beta2_task_pb.Task>;
  setTasksList(value: Array<google_cloud_tasks_v2beta2_task_pb.Task>): LeaseTasksResponse;
  clearTasksList(): LeaseTasksResponse;
  addTasks(value?: google_cloud_tasks_v2beta2_task_pb.Task, index?: number): google_cloud_tasks_v2beta2_task_pb.Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaseTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaseTasksResponse): LeaseTasksResponse.AsObject;
  static serializeBinaryToWriter(message: LeaseTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaseTasksResponse;
  static deserializeBinaryFromReader(message: LeaseTasksResponse, reader: jspb.BinaryReader): LeaseTasksResponse;
}

export namespace LeaseTasksResponse {
  export type AsObject = {
    tasksList: Array<google_cloud_tasks_v2beta2_task_pb.Task.AsObject>,
  }
}

export class AcknowledgeTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AcknowledgeTaskRequest;

  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): AcknowledgeTaskRequest;
  hasScheduleTime(): boolean;
  clearScheduleTime(): AcknowledgeTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcknowledgeTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcknowledgeTaskRequest): AcknowledgeTaskRequest.AsObject;
  static serializeBinaryToWriter(message: AcknowledgeTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcknowledgeTaskRequest;
  static deserializeBinaryFromReader(message: AcknowledgeTaskRequest, reader: jspb.BinaryReader): AcknowledgeTaskRequest;
}

export namespace AcknowledgeTaskRequest {
  export type AsObject = {
    name: string,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RenewLeaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RenewLeaseRequest;

  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): RenewLeaseRequest;
  hasScheduleTime(): boolean;
  clearScheduleTime(): RenewLeaseRequest;

  getLeaseDuration(): google_protobuf_duration_pb.Duration | undefined;
  setLeaseDuration(value?: google_protobuf_duration_pb.Duration): RenewLeaseRequest;
  hasLeaseDuration(): boolean;
  clearLeaseDuration(): RenewLeaseRequest;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.View;
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.View): RenewLeaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenewLeaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenewLeaseRequest): RenewLeaseRequest.AsObject;
  static serializeBinaryToWriter(message: RenewLeaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenewLeaseRequest;
  static deserializeBinaryFromReader(message: RenewLeaseRequest, reader: jspb.BinaryReader): RenewLeaseRequest;
}

export namespace RenewLeaseRequest {
  export type AsObject = {
    name: string,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    leaseDuration?: google_protobuf_duration_pb.Duration.AsObject,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.View,
  }
}

export class CancelLeaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CancelLeaseRequest;

  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): CancelLeaseRequest;
  hasScheduleTime(): boolean;
  clearScheduleTime(): CancelLeaseRequest;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.View;
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.View): CancelLeaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelLeaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelLeaseRequest): CancelLeaseRequest.AsObject;
  static serializeBinaryToWriter(message: CancelLeaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelLeaseRequest;
  static deserializeBinaryFromReader(message: CancelLeaseRequest, reader: jspb.BinaryReader): CancelLeaseRequest;
}

export namespace CancelLeaseRequest {
  export type AsObject = {
    name: string,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.View,
  }
}

export class RunTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RunTaskRequest;

  getResponseView(): google_cloud_tasks_v2beta2_task_pb.Task.View;
  setResponseView(value: google_cloud_tasks_v2beta2_task_pb.Task.View): RunTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunTaskRequest): RunTaskRequest.AsObject;
  static serializeBinaryToWriter(message: RunTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunTaskRequest;
  static deserializeBinaryFromReader(message: RunTaskRequest, reader: jspb.BinaryReader): RunTaskRequest;
}

export namespace RunTaskRequest {
  export type AsObject = {
    name: string,
    responseView: google_cloud_tasks_v2beta2_task_pb.Task.View,
  }
}

