import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class InstanceConfig extends jspb.Message {
  getName(): string;
  setName(value: string): InstanceConfig;

  getDisplayName(): string;
  setDisplayName(value: string): InstanceConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceConfig): InstanceConfig.AsObject;
  static serializeBinaryToWriter(message: InstanceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceConfig;
  static deserializeBinaryFromReader(message: InstanceConfig, reader: jspb.BinaryReader): InstanceConfig;
}

export namespace InstanceConfig {
  export type AsObject = {
    name: string,
    displayName: string,
  }
}

export class Instance extends jspb.Message {
  getName(): string;
  setName(value: string): Instance;

  getConfig(): string;
  setConfig(value: string): Instance;

  getDisplayName(): string;
  setDisplayName(value: string): Instance;

  getNodeCount(): number;
  setNodeCount(value: number): Instance;

  getState(): Instance.State;
  setState(value: Instance.State): Instance;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Instance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instance.AsObject;
  static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
  static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instance;
  static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
  export type AsObject = {
    name: string,
    config: string,
    displayName: string,
    nodeCount: number,
    state: Instance.State,
    labelsMap: Array<[string, string]>,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
  }
}

export class ListInstanceConfigsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListInstanceConfigsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListInstanceConfigsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListInstanceConfigsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstanceConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstanceConfigsRequest): ListInstanceConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstanceConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstanceConfigsRequest;
  static deserializeBinaryFromReader(message: ListInstanceConfigsRequest, reader: jspb.BinaryReader): ListInstanceConfigsRequest;
}

export namespace ListInstanceConfigsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListInstanceConfigsResponse extends jspb.Message {
  getInstanceConfigsList(): Array<InstanceConfig>;
  setInstanceConfigsList(value: Array<InstanceConfig>): ListInstanceConfigsResponse;
  clearInstanceConfigsList(): ListInstanceConfigsResponse;
  addInstanceConfigs(value?: InstanceConfig, index?: number): InstanceConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListInstanceConfigsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstanceConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstanceConfigsResponse): ListInstanceConfigsResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstanceConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstanceConfigsResponse;
  static deserializeBinaryFromReader(message: ListInstanceConfigsResponse, reader: jspb.BinaryReader): ListInstanceConfigsResponse;
}

export namespace ListInstanceConfigsResponse {
  export type AsObject = {
    instanceConfigsList: Array<InstanceConfig.AsObject>,
    nextPageToken: string,
  }
}

export class GetInstanceConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetInstanceConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstanceConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstanceConfigRequest): GetInstanceConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstanceConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstanceConfigRequest;
  static deserializeBinaryFromReader(message: GetInstanceConfigRequest, reader: jspb.BinaryReader): GetInstanceConfigRequest;
}

export namespace GetInstanceConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetInstanceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstanceRequest): GetInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstanceRequest;
  static deserializeBinaryFromReader(message: GetInstanceRequest, reader: jspb.BinaryReader): GetInstanceRequest;
}

export namespace GetInstanceRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateInstanceRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateInstanceRequest;

  getInstanceId(): string;
  setInstanceId(value: string): CreateInstanceRequest;

  getInstance(): Instance | undefined;
  setInstance(value?: Instance): CreateInstanceRequest;
  hasInstance(): boolean;
  clearInstance(): CreateInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstanceRequest): CreateInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstanceRequest;
  static deserializeBinaryFromReader(message: CreateInstanceRequest, reader: jspb.BinaryReader): CreateInstanceRequest;
}

export namespace CreateInstanceRequest {
  export type AsObject = {
    parent: string,
    instanceId: string,
    instance?: Instance.AsObject,
  }
}

export class ListInstancesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListInstancesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListInstancesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListInstancesRequest;

  getFilter(): string;
  setFilter(value: string): ListInstancesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstancesRequest): ListInstancesRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstancesRequest;
  static deserializeBinaryFromReader(message: ListInstancesRequest, reader: jspb.BinaryReader): ListInstancesRequest;
}

export namespace ListInstancesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    filter: string,
  }
}

export class ListInstancesResponse extends jspb.Message {
  getInstancesList(): Array<Instance>;
  setInstancesList(value: Array<Instance>): ListInstancesResponse;
  clearInstancesList(): ListInstancesResponse;
  addInstances(value?: Instance, index?: number): Instance;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListInstancesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstancesResponse): ListInstancesResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstancesResponse;
  static deserializeBinaryFromReader(message: ListInstancesResponse, reader: jspb.BinaryReader): ListInstancesResponse;
}

export namespace ListInstancesResponse {
  export type AsObject = {
    instancesList: Array<Instance.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateInstanceRequest extends jspb.Message {
  getInstance(): Instance | undefined;
  setInstance(value?: Instance): UpdateInstanceRequest;
  hasInstance(): boolean;
  clearInstance(): UpdateInstanceRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateInstanceRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstanceRequest): UpdateInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstanceRequest;
  static deserializeBinaryFromReader(message: UpdateInstanceRequest, reader: jspb.BinaryReader): UpdateInstanceRequest;
}

export namespace UpdateInstanceRequest {
  export type AsObject = {
    instance?: Instance.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteInstanceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInstanceRequest): DeleteInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInstanceRequest;
  static deserializeBinaryFromReader(message: DeleteInstanceRequest, reader: jspb.BinaryReader): DeleteInstanceRequest;
}

export namespace DeleteInstanceRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateInstanceMetadata extends jspb.Message {
  getInstance(): Instance | undefined;
  setInstance(value?: Instance): CreateInstanceMetadata;
  hasInstance(): boolean;
  clearInstance(): CreateInstanceMetadata;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CreateInstanceMetadata;
  hasStartTime(): boolean;
  clearStartTime(): CreateInstanceMetadata;

  getCancelTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCancelTime(value?: google_protobuf_timestamp_pb.Timestamp): CreateInstanceMetadata;
  hasCancelTime(): boolean;
  clearCancelTime(): CreateInstanceMetadata;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CreateInstanceMetadata;
  hasEndTime(): boolean;
  clearEndTime(): CreateInstanceMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstanceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstanceMetadata): CreateInstanceMetadata.AsObject;
  static serializeBinaryToWriter(message: CreateInstanceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstanceMetadata;
  static deserializeBinaryFromReader(message: CreateInstanceMetadata, reader: jspb.BinaryReader): CreateInstanceMetadata;
}

export namespace CreateInstanceMetadata {
  export type AsObject = {
    instance?: Instance.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateInstanceMetadata extends jspb.Message {
  getInstance(): Instance | undefined;
  setInstance(value?: Instance): UpdateInstanceMetadata;
  hasInstance(): boolean;
  clearInstance(): UpdateInstanceMetadata;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateInstanceMetadata;
  hasStartTime(): boolean;
  clearStartTime(): UpdateInstanceMetadata;

  getCancelTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCancelTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateInstanceMetadata;
  hasCancelTime(): boolean;
  clearCancelTime(): UpdateInstanceMetadata;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateInstanceMetadata;
  hasEndTime(): boolean;
  clearEndTime(): UpdateInstanceMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstanceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstanceMetadata): UpdateInstanceMetadata.AsObject;
  static serializeBinaryToWriter(message: UpdateInstanceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstanceMetadata;
  static deserializeBinaryFromReader(message: UpdateInstanceMetadata, reader: jspb.BinaryReader): UpdateInstanceMetadata;
}

export namespace UpdateInstanceMetadata {
  export type AsObject = {
    instance?: Instance.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

