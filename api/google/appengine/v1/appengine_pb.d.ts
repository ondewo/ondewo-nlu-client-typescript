import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_appengine_v1_application_pb from '../../../google/appengine/v1/application_pb';
import * as google_appengine_v1_instance_pb from '../../../google/appengine/v1/instance_pb';
import * as google_appengine_v1_service_pb from '../../../google/appengine/v1/service_pb';
import * as google_appengine_v1_version_pb from '../../../google/appengine/v1/version_pb';
import * as google_iam_v1_iam_policy_pb from '../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class GetApplicationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplicationRequest): GetApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: GetApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplicationRequest;
  static deserializeBinaryFromReader(message: GetApplicationRequest, reader: jspb.BinaryReader): GetApplicationRequest;
}

export namespace GetApplicationRequest {
  export type AsObject = {
    name: string,
  }
}

export class RepairApplicationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RepairApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepairApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RepairApplicationRequest): RepairApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: RepairApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepairApplicationRequest;
  static deserializeBinaryFromReader(message: RepairApplicationRequest, reader: jspb.BinaryReader): RepairApplicationRequest;
}

export namespace RepairApplicationRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListServicesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListServicesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListServicesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListServicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServicesRequest): ListServicesRequest.AsObject;
  static serializeBinaryToWriter(message: ListServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServicesRequest;
  static deserializeBinaryFromReader(message: ListServicesRequest, reader: jspb.BinaryReader): ListServicesRequest;
}

export namespace ListServicesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListServicesResponse extends jspb.Message {
  getServicesList(): Array<google_appengine_v1_service_pb.Service>;
  setServicesList(value: Array<google_appengine_v1_service_pb.Service>): ListServicesResponse;
  clearServicesList(): ListServicesResponse;
  addServices(value?: google_appengine_v1_service_pb.Service, index?: number): google_appengine_v1_service_pb.Service;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListServicesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServicesResponse): ListServicesResponse.AsObject;
  static serializeBinaryToWriter(message: ListServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServicesResponse;
  static deserializeBinaryFromReader(message: ListServicesResponse, reader: jspb.BinaryReader): ListServicesResponse;
}

export namespace ListServicesResponse {
  export type AsObject = {
    servicesList: Array<google_appengine_v1_service_pb.Service.AsObject>,
    nextPageToken: string,
  }
}

export class GetServiceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceRequest): GetServiceRequest.AsObject;
  static serializeBinaryToWriter(message: GetServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceRequest;
  static deserializeBinaryFromReader(message: GetServiceRequest, reader: jspb.BinaryReader): GetServiceRequest;
}

export namespace GetServiceRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateServiceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateServiceRequest;

  getService(): google_appengine_v1_service_pb.Service | undefined;
  setService(value?: google_appengine_v1_service_pb.Service): UpdateServiceRequest;
  hasService(): boolean;
  clearService(): UpdateServiceRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateServiceRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateServiceRequest;

  getMigrateTraffic(): boolean;
  setMigrateTraffic(value: boolean): UpdateServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServiceRequest): UpdateServiceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServiceRequest;
  static deserializeBinaryFromReader(message: UpdateServiceRequest, reader: jspb.BinaryReader): UpdateServiceRequest;
}

export namespace UpdateServiceRequest {
  export type AsObject = {
    name: string,
    service?: google_appengine_v1_service_pb.Service.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    migrateTraffic: boolean,
  }
}

export class DeleteServiceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceRequest): DeleteServiceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceRequest;
  static deserializeBinaryFromReader(message: DeleteServiceRequest, reader: jspb.BinaryReader): DeleteServiceRequest;
}

export namespace DeleteServiceRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListVersionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListVersionsRequest;

  getView(): VersionView;
  setView(value: VersionView): ListVersionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListVersionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVersionsRequest): ListVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVersionsRequest;
  static deserializeBinaryFromReader(message: ListVersionsRequest, reader: jspb.BinaryReader): ListVersionsRequest;
}

export namespace ListVersionsRequest {
  export type AsObject = {
    parent: string,
    view: VersionView,
    pageSize: number,
    pageToken: string,
  }
}

export class ListVersionsResponse extends jspb.Message {
  getVersionsList(): Array<google_appengine_v1_version_pb.Version>;
  setVersionsList(value: Array<google_appengine_v1_version_pb.Version>): ListVersionsResponse;
  clearVersionsList(): ListVersionsResponse;
  addVersions(value?: google_appengine_v1_version_pb.Version, index?: number): google_appengine_v1_version_pb.Version;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListVersionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVersionsResponse): ListVersionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVersionsResponse;
  static deserializeBinaryFromReader(message: ListVersionsResponse, reader: jspb.BinaryReader): ListVersionsResponse;
}

export namespace ListVersionsResponse {
  export type AsObject = {
    versionsList: Array<google_appengine_v1_version_pb.Version.AsObject>,
    nextPageToken: string,
  }
}

export class GetVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetVersionRequest;

  getView(): VersionView;
  setView(value: VersionView): GetVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionRequest): GetVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionRequest;
  static deserializeBinaryFromReader(message: GetVersionRequest, reader: jspb.BinaryReader): GetVersionRequest;
}

export namespace GetVersionRequest {
  export type AsObject = {
    name: string,
    view: VersionView,
  }
}

export class CreateVersionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateVersionRequest;

  getVersion(): google_appengine_v1_version_pb.Version | undefined;
  setVersion(value?: google_appengine_v1_version_pb.Version): CreateVersionRequest;
  hasVersion(): boolean;
  clearVersion(): CreateVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVersionRequest): CreateVersionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVersionRequest;
  static deserializeBinaryFromReader(message: CreateVersionRequest, reader: jspb.BinaryReader): CreateVersionRequest;
}

export namespace CreateVersionRequest {
  export type AsObject = {
    parent: string,
    version?: google_appengine_v1_version_pb.Version.AsObject,
  }
}

export class UpdateVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateVersionRequest;

  getVersion(): google_appengine_v1_version_pb.Version | undefined;
  setVersion(value?: google_appengine_v1_version_pb.Version): UpdateVersionRequest;
  hasVersion(): boolean;
  clearVersion(): UpdateVersionRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateVersionRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVersionRequest): UpdateVersionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVersionRequest;
  static deserializeBinaryFromReader(message: UpdateVersionRequest, reader: jspb.BinaryReader): UpdateVersionRequest;
}

export namespace UpdateVersionRequest {
  export type AsObject = {
    name: string,
    version?: google_appengine_v1_version_pb.Version.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVersionRequest): DeleteVersionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVersionRequest;
  static deserializeBinaryFromReader(message: DeleteVersionRequest, reader: jspb.BinaryReader): DeleteVersionRequest;
}

export namespace DeleteVersionRequest {
  export type AsObject = {
    name: string,
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
  getInstancesList(): Array<google_appengine_v1_instance_pb.Instance>;
  setInstancesList(value: Array<google_appengine_v1_instance_pb.Instance>): ListInstancesResponse;
  clearInstancesList(): ListInstancesResponse;
  addInstances(value?: google_appengine_v1_instance_pb.Instance, index?: number): google_appengine_v1_instance_pb.Instance;

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
    instancesList: Array<google_appengine_v1_instance_pb.Instance.AsObject>,
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

export class DebugInstanceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DebugInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebugInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DebugInstanceRequest): DebugInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: DebugInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebugInstanceRequest;
  static deserializeBinaryFromReader(message: DebugInstanceRequest, reader: jspb.BinaryReader): DebugInstanceRequest;
}

export namespace DebugInstanceRequest {
  export type AsObject = {
    name: string,
  }
}

export enum VersionView { 
  BASIC = 0,
  FULL = 1,
}
