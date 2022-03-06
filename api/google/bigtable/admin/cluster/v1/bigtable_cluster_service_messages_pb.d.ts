import * as jspb from 'google-protobuf'

import * as google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb from '../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_data_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ListZonesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListZonesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListZonesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListZonesRequest): ListZonesRequest.AsObject;
  static serializeBinaryToWriter(message: ListZonesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListZonesRequest;
  static deserializeBinaryFromReader(message: ListZonesRequest, reader: jspb.BinaryReader): ListZonesRequest;
}

export namespace ListZonesRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListZonesResponse extends jspb.Message {
  getZonesList(): Array<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Zone>;
  setZonesList(value: Array<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Zone>): ListZonesResponse;
  clearZonesList(): ListZonesResponse;
  addZones(value?: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Zone, index?: number): google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Zone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListZonesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListZonesResponse): ListZonesResponse.AsObject;
  static serializeBinaryToWriter(message: ListZonesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListZonesResponse;
  static deserializeBinaryFromReader(message: ListZonesResponse, reader: jspb.BinaryReader): ListZonesResponse;
}

export namespace ListZonesResponse {
  export type AsObject = {
    zonesList: Array<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Zone.AsObject>,
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
  getName(): string;
  setName(value: string): ListClustersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersRequest): ListClustersRequest.AsObject;
  static serializeBinaryToWriter(message: ListClustersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersRequest;
  static deserializeBinaryFromReader(message: ListClustersRequest, reader: jspb.BinaryReader): ListClustersRequest;
}

export namespace ListClustersRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListClustersResponse extends jspb.Message {
  getClustersList(): Array<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>;
  setClustersList(value: Array<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster>): ListClustersResponse;
  clearClustersList(): ListClustersResponse;
  addClusters(value?: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster, index?: number): google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster;

  getFailedZonesList(): Array<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Zone>;
  setFailedZonesList(value: Array<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Zone>): ListClustersResponse;
  clearFailedZonesList(): ListClustersResponse;
  addFailedZones(value?: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Zone, index?: number): google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Zone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersResponse): ListClustersResponse.AsObject;
  static serializeBinaryToWriter(message: ListClustersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersResponse;
  static deserializeBinaryFromReader(message: ListClustersResponse, reader: jspb.BinaryReader): ListClustersResponse;
}

export namespace ListClustersResponse {
  export type AsObject = {
    clustersList: Array<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.AsObject>,
    failedZonesList: Array<google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Zone.AsObject>,
  }
}

export class CreateClusterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateClusterRequest;

  getClusterId(): string;
  setClusterId(value: string): CreateClusterRequest;

  getCluster(): google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster | undefined;
  setCluster(value?: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster): CreateClusterRequest;
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
    name: string,
    clusterId: string,
    cluster?: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.AsObject,
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
  getOriginalRequest(): google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster | undefined;
  setOriginalRequest(value?: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster): UpdateClusterMetadata;
  hasOriginalRequest(): boolean;
  clearOriginalRequest(): UpdateClusterMetadata;

  getRequestTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateClusterMetadata;
  hasRequestTime(): boolean;
  clearRequestTime(): UpdateClusterMetadata;

  getCancelTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCancelTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateClusterMetadata;
  hasCancelTime(): boolean;
  clearCancelTime(): UpdateClusterMetadata;

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
    originalRequest?: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.AsObject,
    requestTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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

export class UndeleteClusterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UndeleteClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteClusterRequest): UndeleteClusterRequest.AsObject;
  static serializeBinaryToWriter(message: UndeleteClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteClusterRequest;
  static deserializeBinaryFromReader(message: UndeleteClusterRequest, reader: jspb.BinaryReader): UndeleteClusterRequest;
}

export namespace UndeleteClusterRequest {
  export type AsObject = {
    name: string,
  }
}

export class UndeleteClusterMetadata extends jspb.Message {
  getRequestTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestTime(value?: google_protobuf_timestamp_pb.Timestamp): UndeleteClusterMetadata;
  hasRequestTime(): boolean;
  clearRequestTime(): UndeleteClusterMetadata;

  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): UndeleteClusterMetadata;
  hasFinishTime(): boolean;
  clearFinishTime(): UndeleteClusterMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteClusterMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteClusterMetadata): UndeleteClusterMetadata.AsObject;
  static serializeBinaryToWriter(message: UndeleteClusterMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteClusterMetadata;
  static deserializeBinaryFromReader(message: UndeleteClusterMetadata, reader: jspb.BinaryReader): UndeleteClusterMetadata;
}

export namespace UndeleteClusterMetadata {
  export type AsObject = {
    requestTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class V2OperationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V2OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: V2OperationMetadata): V2OperationMetadata.AsObject;
  static serializeBinaryToWriter(message: V2OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V2OperationMetadata;
  static deserializeBinaryFromReader(message: V2OperationMetadata, reader: jspb.BinaryReader): V2OperationMetadata;
}

export namespace V2OperationMetadata {
  export type AsObject = {
  }
}

