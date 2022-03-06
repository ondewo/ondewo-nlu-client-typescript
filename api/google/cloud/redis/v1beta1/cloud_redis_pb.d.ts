import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Instance extends jspb.Message {
  getName(): string;
  setName(value: string): Instance;

  getDisplayName(): string;
  setDisplayName(value: string): Instance;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Instance;

  getLocationId(): string;
  setLocationId(value: string): Instance;

  getAlternativeLocationId(): string;
  setAlternativeLocationId(value: string): Instance;

  getRedisVersion(): string;
  setRedisVersion(value: string): Instance;

  getReservedIpRange(): string;
  setReservedIpRange(value: string): Instance;

  getHost(): string;
  setHost(value: string): Instance;

  getPort(): number;
  setPort(value: number): Instance;

  getCurrentLocationId(): string;
  setCurrentLocationId(value: string): Instance;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Instance;
  hasCreateTime(): boolean;
  clearCreateTime(): Instance;

  getState(): Instance.State;
  setState(value: Instance.State): Instance;

  getStatusMessage(): string;
  setStatusMessage(value: string): Instance;

  getRedisConfigsMap(): jspb.Map<string, string>;
  clearRedisConfigsMap(): Instance;

  getTier(): Instance.Tier;
  setTier(value: Instance.Tier): Instance;

  getMemorySizeGb(): number;
  setMemorySizeGb(value: number): Instance;

  getAuthorizedNetwork(): string;
  setAuthorizedNetwork(value: string): Instance;

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
    displayName: string,
    labelsMap: Array<[string, string]>,
    locationId: string,
    alternativeLocationId: string,
    redisVersion: string,
    reservedIpRange: string,
    host: string,
    port: number,
    currentLocationId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: Instance.State,
    statusMessage: string,
    redisConfigsMap: Array<[string, string]>,
    tier: Instance.Tier,
    memorySizeGb: number,
    authorizedNetwork: string,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    UPDATING = 3,
    DELETING = 4,
    REPAIRING = 5,
    MAINTENANCE = 6,
  }

  export enum Tier { 
    TIER_UNSPECIFIED = 0,
    BASIC = 1,
    STANDARD_HA = 3,
  }
}

export class ListInstancesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListInstancesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListInstancesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListInstancesRequest;

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

export class UpdateInstanceRequest extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateInstanceRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateInstanceRequest;

  getInstance(): Instance | undefined;
  setInstance(value?: Instance): UpdateInstanceRequest;
  hasInstance(): boolean;
  clearInstance(): UpdateInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstanceRequest): UpdateInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstanceRequest;
  static deserializeBinaryFromReader(message: UpdateInstanceRequest, reader: jspb.BinaryReader): UpdateInstanceRequest;
}

export namespace UpdateInstanceRequest {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    instance?: Instance.AsObject,
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

export class LocationMetadata extends jspb.Message {
  getAvailableZonesMap(): jspb.Map<string, ZoneMetadata>;
  clearAvailableZonesMap(): LocationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LocationMetadata): LocationMetadata.AsObject;
  static serializeBinaryToWriter(message: LocationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationMetadata;
  static deserializeBinaryFromReader(message: LocationMetadata, reader: jspb.BinaryReader): LocationMetadata;
}

export namespace LocationMetadata {
  export type AsObject = {
    availableZonesMap: Array<[string, ZoneMetadata.AsObject]>,
  }
}

export class ZoneMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneMetadata): ZoneMetadata.AsObject;
  static serializeBinaryToWriter(message: ZoneMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneMetadata;
  static deserializeBinaryFromReader(message: ZoneMetadata, reader: jspb.BinaryReader): ZoneMetadata;
}

export namespace ZoneMetadata {
  export type AsObject = {
  }
}

