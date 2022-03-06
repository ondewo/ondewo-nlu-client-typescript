import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_bigtable_admin_v2_instance_pb from '../../../../google/bigtable/admin/v2/instance_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class CreateInstanceRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateInstanceRequest;

  getInstanceId(): string;
  setInstanceId(value: string): CreateInstanceRequest;

  getInstance(): google_bigtable_admin_v2_instance_pb.Instance | undefined;
  setInstance(value?: google_bigtable_admin_v2_instance_pb.Instance): CreateInstanceRequest;
  hasInstance(): boolean;
  clearInstance(): CreateInstanceRequest;

  getClustersMap(): jspb.Map<string, google_bigtable_admin_v2_instance_pb.Cluster>;
  clearClustersMap(): CreateInstanceRequest;

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
    instance?: google_bigtable_admin_v2_instance_pb.Instance.AsObject,
    clustersMap: Array<[string, google_bigtable_admin_v2_instance_pb.Cluster.AsObject]>,
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

export class ListInstancesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListInstancesRequest;

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
    pageToken: string,
  }
}

export class ListInstancesResponse extends jspb.Message {
  getInstancesList(): Array<google_bigtable_admin_v2_instance_pb.Instance>;
  setInstancesList(value: Array<google_bigtable_admin_v2_instance_pb.Instance>): ListInstancesResponse;
  clearInstancesList(): ListInstancesResponse;
  addInstances(value?: google_bigtable_admin_v2_instance_pb.Instance, index?: number): google_bigtable_admin_v2_instance_pb.Instance;

  getFailedLocationsList(): Array<string>;
  setFailedLocationsList(value: Array<string>): ListInstancesResponse;
  clearFailedLocationsList(): ListInstancesResponse;
  addFailedLocations(value: string, index?: number): ListInstancesResponse;

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
    instancesList: Array<google_bigtable_admin_v2_instance_pb.Instance.AsObject>,
    failedLocationsList: Array<string>,
    nextPageToken: string,
  }
}

export class PartialUpdateInstanceRequest extends jspb.Message {
  getInstance(): google_bigtable_admin_v2_instance_pb.Instance | undefined;
  setInstance(value?: google_bigtable_admin_v2_instance_pb.Instance): PartialUpdateInstanceRequest;
  hasInstance(): boolean;
  clearInstance(): PartialUpdateInstanceRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): PartialUpdateInstanceRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): PartialUpdateInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialUpdateInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PartialUpdateInstanceRequest): PartialUpdateInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: PartialUpdateInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialUpdateInstanceRequest;
  static deserializeBinaryFromReader(message: PartialUpdateInstanceRequest, reader: jspb.BinaryReader): PartialUpdateInstanceRequest;
}

export namespace PartialUpdateInstanceRequest {
  export type AsObject = {
    instance?: google_bigtable_admin_v2_instance_pb.Instance.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
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

export class CreateClusterRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateClusterRequest;

  getClusterId(): string;
  setClusterId(value: string): CreateClusterRequest;

  getCluster(): google_bigtable_admin_v2_instance_pb.Cluster | undefined;
  setCluster(value?: google_bigtable_admin_v2_instance_pb.Cluster): CreateClusterRequest;
  hasCluster(): boolean;
  clearCluster(): CreateClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClusterRequest): CreateClusterRequest.AsObject;
  static serializeBinaryToWriter(message: CreateClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClusterRequest;
  static deserializeBinaryFromReader(message: CreateClusterRequest, reader: jspb.BinaryReader): CreateClusterRequest;
}

export namespace CreateClusterRequest {
  export type AsObject = {
    parent: string,
    clusterId: string,
    cluster?: google_bigtable_admin_v2_instance_pb.Cluster.AsObject,
  }
}

export class GetClusterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClusterRequest): GetClusterRequest.AsObject;
  static serializeBinaryToWriter(message: GetClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClusterRequest;
  static deserializeBinaryFromReader(message: GetClusterRequest, reader: jspb.BinaryReader): GetClusterRequest;
}

export namespace GetClusterRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListClustersRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListClustersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListClustersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersRequest): ListClustersRequest.AsObject;
  static serializeBinaryToWriter(message: ListClustersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersRequest;
  static deserializeBinaryFromReader(message: ListClustersRequest, reader: jspb.BinaryReader): ListClustersRequest;
}

export namespace ListClustersRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
  }
}

export class ListClustersResponse extends jspb.Message {
  getClustersList(): Array<google_bigtable_admin_v2_instance_pb.Cluster>;
  setClustersList(value: Array<google_bigtable_admin_v2_instance_pb.Cluster>): ListClustersResponse;
  clearClustersList(): ListClustersResponse;
  addClusters(value?: google_bigtable_admin_v2_instance_pb.Cluster, index?: number): google_bigtable_admin_v2_instance_pb.Cluster;

  getFailedLocationsList(): Array<string>;
  setFailedLocationsList(value: Array<string>): ListClustersResponse;
  clearFailedLocationsList(): ListClustersResponse;
  addFailedLocations(value: string, index?: number): ListClustersResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListClustersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersResponse): ListClustersResponse.AsObject;
  static serializeBinaryToWriter(message: ListClustersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersResponse;
  static deserializeBinaryFromReader(message: ListClustersResponse, reader: jspb.BinaryReader): ListClustersResponse;
}

export namespace ListClustersResponse {
  export type AsObject = {
    clustersList: Array<google_bigtable_admin_v2_instance_pb.Cluster.AsObject>,
    failedLocationsList: Array<string>,
    nextPageToken: string,
  }
}

export class DeleteClusterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClusterRequest): DeleteClusterRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClusterRequest;
  static deserializeBinaryFromReader(message: DeleteClusterRequest, reader: jspb.BinaryReader): DeleteClusterRequest;
}

export namespace DeleteClusterRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateInstanceMetadata extends jspb.Message {
  getOriginalRequest(): CreateInstanceRequest | undefined;
  setOriginalRequest(value?: CreateInstanceRequest): CreateInstanceMetadata;
  hasOriginalRequest(): boolean;
  clearOriginalRequest(): CreateInstanceMetadata;

  getRequestTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestTime(value?: google_protobuf_timestamp_pb.Timestamp): CreateInstanceMetadata;
  hasRequestTime(): boolean;
  clearRequestTime(): CreateInstanceMetadata;

  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): CreateInstanceMetadata;
  hasFinishTime(): boolean;
  clearFinishTime(): CreateInstanceMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstanceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstanceMetadata): CreateInstanceMetadata.AsObject;
  static serializeBinaryToWriter(message: CreateInstanceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstanceMetadata;
  static deserializeBinaryFromReader(message: CreateInstanceMetadata, reader: jspb.BinaryReader): CreateInstanceMetadata;
}

export namespace CreateInstanceMetadata {
  export type AsObject = {
    originalRequest?: CreateInstanceRequest.AsObject,
    requestTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateInstanceMetadata extends jspb.Message {
  getOriginalRequest(): PartialUpdateInstanceRequest | undefined;
  setOriginalRequest(value?: PartialUpdateInstanceRequest): UpdateInstanceMetadata;
  hasOriginalRequest(): boolean;
  clearOriginalRequest(): UpdateInstanceMetadata;

  getRequestTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateInstanceMetadata;
  hasRequestTime(): boolean;
  clearRequestTime(): UpdateInstanceMetadata;

  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateInstanceMetadata;
  hasFinishTime(): boolean;
  clearFinishTime(): UpdateInstanceMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstanceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstanceMetadata): UpdateInstanceMetadata.AsObject;
  static serializeBinaryToWriter(message: UpdateInstanceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstanceMetadata;
  static deserializeBinaryFromReader(message: UpdateInstanceMetadata, reader: jspb.BinaryReader): UpdateInstanceMetadata;
}

export namespace UpdateInstanceMetadata {
  export type AsObject = {
    originalRequest?: PartialUpdateInstanceRequest.AsObject,
    requestTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateClusterMetadata extends jspb.Message {
  getOriginalRequest(): CreateClusterRequest | undefined;
  setOriginalRequest(value?: CreateClusterRequest): CreateClusterMetadata;
  hasOriginalRequest(): boolean;
  clearOriginalRequest(): CreateClusterMetadata;

  getRequestTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestTime(value?: google_protobuf_timestamp_pb.Timestamp): CreateClusterMetadata;
  hasRequestTime(): boolean;
  clearRequestTime(): CreateClusterMetadata;

  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): CreateClusterMetadata;
  hasFinishTime(): boolean;
  clearFinishTime(): CreateClusterMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClusterMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClusterMetadata): CreateClusterMetadata.AsObject;
  static serializeBinaryToWriter(message: CreateClusterMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClusterMetadata;
  static deserializeBinaryFromReader(message: CreateClusterMetadata, reader: jspb.BinaryReader): CreateClusterMetadata;
}

export namespace CreateClusterMetadata {
  export type AsObject = {
    originalRequest?: CreateClusterRequest.AsObject,
    requestTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateClusterMetadata extends jspb.Message {
  getOriginalRequest(): google_bigtable_admin_v2_instance_pb.Cluster | undefined;
  setOriginalRequest(value?: google_bigtable_admin_v2_instance_pb.Cluster): UpdateClusterMetadata;
  hasOriginalRequest(): boolean;
  clearOriginalRequest(): UpdateClusterMetadata;

  getRequestTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateClusterMetadata;
  hasRequestTime(): boolean;
  clearRequestTime(): UpdateClusterMetadata;

  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateClusterMetadata;
  hasFinishTime(): boolean;
  clearFinishTime(): UpdateClusterMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClusterMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClusterMetadata): UpdateClusterMetadata.AsObject;
  static serializeBinaryToWriter(message: UpdateClusterMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClusterMetadata;
  static deserializeBinaryFromReader(message: UpdateClusterMetadata, reader: jspb.BinaryReader): UpdateClusterMetadata;
}

export namespace UpdateClusterMetadata {
  export type AsObject = {
    originalRequest?: google_bigtable_admin_v2_instance_pb.Cluster.AsObject,
    requestTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateAppProfileRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateAppProfileRequest;

  getAppProfileId(): string;
  setAppProfileId(value: string): CreateAppProfileRequest;

  getAppProfile(): google_bigtable_admin_v2_instance_pb.AppProfile | undefined;
  setAppProfile(value?: google_bigtable_admin_v2_instance_pb.AppProfile): CreateAppProfileRequest;
  hasAppProfile(): boolean;
  clearAppProfile(): CreateAppProfileRequest;

  getIgnoreWarnings(): boolean;
  setIgnoreWarnings(value: boolean): CreateAppProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAppProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAppProfileRequest): CreateAppProfileRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAppProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAppProfileRequest;
  static deserializeBinaryFromReader(message: CreateAppProfileRequest, reader: jspb.BinaryReader): CreateAppProfileRequest;
}

export namespace CreateAppProfileRequest {
  export type AsObject = {
    parent: string,
    appProfileId: string,
    appProfile?: google_bigtable_admin_v2_instance_pb.AppProfile.AsObject,
    ignoreWarnings: boolean,
  }
}

export class GetAppProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetAppProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppProfileRequest): GetAppProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetAppProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppProfileRequest;
  static deserializeBinaryFromReader(message: GetAppProfileRequest, reader: jspb.BinaryReader): GetAppProfileRequest;
}

export namespace GetAppProfileRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListAppProfilesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListAppProfilesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListAppProfilesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListAppProfilesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppProfilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppProfilesRequest): ListAppProfilesRequest.AsObject;
  static serializeBinaryToWriter(message: ListAppProfilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppProfilesRequest;
  static deserializeBinaryFromReader(message: ListAppProfilesRequest, reader: jspb.BinaryReader): ListAppProfilesRequest;
}

export namespace ListAppProfilesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAppProfilesResponse extends jspb.Message {
  getAppProfilesList(): Array<google_bigtable_admin_v2_instance_pb.AppProfile>;
  setAppProfilesList(value: Array<google_bigtable_admin_v2_instance_pb.AppProfile>): ListAppProfilesResponse;
  clearAppProfilesList(): ListAppProfilesResponse;
  addAppProfiles(value?: google_bigtable_admin_v2_instance_pb.AppProfile, index?: number): google_bigtable_admin_v2_instance_pb.AppProfile;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListAppProfilesResponse;

  getFailedLocationsList(): Array<string>;
  setFailedLocationsList(value: Array<string>): ListAppProfilesResponse;
  clearFailedLocationsList(): ListAppProfilesResponse;
  addFailedLocations(value: string, index?: number): ListAppProfilesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppProfilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppProfilesResponse): ListAppProfilesResponse.AsObject;
  static serializeBinaryToWriter(message: ListAppProfilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppProfilesResponse;
  static deserializeBinaryFromReader(message: ListAppProfilesResponse, reader: jspb.BinaryReader): ListAppProfilesResponse;
}

export namespace ListAppProfilesResponse {
  export type AsObject = {
    appProfilesList: Array<google_bigtable_admin_v2_instance_pb.AppProfile.AsObject>,
    nextPageToken: string,
    failedLocationsList: Array<string>,
  }
}

export class UpdateAppProfileRequest extends jspb.Message {
  getAppProfile(): google_bigtable_admin_v2_instance_pb.AppProfile | undefined;
  setAppProfile(value?: google_bigtable_admin_v2_instance_pb.AppProfile): UpdateAppProfileRequest;
  hasAppProfile(): boolean;
  clearAppProfile(): UpdateAppProfileRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAppProfileRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateAppProfileRequest;

  getIgnoreWarnings(): boolean;
  setIgnoreWarnings(value: boolean): UpdateAppProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAppProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAppProfileRequest): UpdateAppProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAppProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAppProfileRequest;
  static deserializeBinaryFromReader(message: UpdateAppProfileRequest, reader: jspb.BinaryReader): UpdateAppProfileRequest;
}

export namespace UpdateAppProfileRequest {
  export type AsObject = {
    appProfile?: google_bigtable_admin_v2_instance_pb.AppProfile.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    ignoreWarnings: boolean,
  }
}

export class DeleteAppProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteAppProfileRequest;

  getIgnoreWarnings(): boolean;
  setIgnoreWarnings(value: boolean): DeleteAppProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAppProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAppProfileRequest): DeleteAppProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAppProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAppProfileRequest;
  static deserializeBinaryFromReader(message: DeleteAppProfileRequest, reader: jspb.BinaryReader): DeleteAppProfileRequest;
}

export namespace DeleteAppProfileRequest {
  export type AsObject = {
    name: string,
    ignoreWarnings: boolean,
  }
}

export class UpdateAppProfileMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAppProfileMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAppProfileMetadata): UpdateAppProfileMetadata.AsObject;
  static serializeBinaryToWriter(message: UpdateAppProfileMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAppProfileMetadata;
  static deserializeBinaryFromReader(message: UpdateAppProfileMetadata, reader: jspb.BinaryReader): UpdateAppProfileMetadata;
}

export namespace UpdateAppProfileMetadata {
  export type AsObject = {
  }
}

