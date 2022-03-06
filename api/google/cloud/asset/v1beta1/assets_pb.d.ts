import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TemporalAsset extends jspb.Message {
  getWindow(): TimeWindow | undefined;
  setWindow(value?: TimeWindow): TemporalAsset;
  hasWindow(): boolean;
  clearWindow(): TemporalAsset;

  getDeleted(): boolean;
  setDeleted(value: boolean): TemporalAsset;

  getAsset(): Asset | undefined;
  setAsset(value?: Asset): TemporalAsset;
  hasAsset(): boolean;
  clearAsset(): TemporalAsset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemporalAsset.AsObject;
  static toObject(includeInstance: boolean, msg: TemporalAsset): TemporalAsset.AsObject;
  static serializeBinaryToWriter(message: TemporalAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemporalAsset;
  static deserializeBinaryFromReader(message: TemporalAsset, reader: jspb.BinaryReader): TemporalAsset;
}

export namespace TemporalAsset {
  export type AsObject = {
    window?: TimeWindow.AsObject,
    deleted: boolean,
    asset?: Asset.AsObject,
  }
}

export class TimeWindow extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeWindow;
  hasStartTime(): boolean;
  clearStartTime(): TimeWindow;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeWindow;
  hasEndTime(): boolean;
  clearEndTime(): TimeWindow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeWindow.AsObject;
  static toObject(includeInstance: boolean, msg: TimeWindow): TimeWindow.AsObject;
  static serializeBinaryToWriter(message: TimeWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeWindow;
  static deserializeBinaryFromReader(message: TimeWindow, reader: jspb.BinaryReader): TimeWindow;
}

export namespace TimeWindow {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Asset extends jspb.Message {
  getName(): string;
  setName(value: string): Asset;

  getAssetType(): string;
  setAssetType(value: string): Asset;

  getResource(): Resource | undefined;
  setResource(value?: Resource): Asset;
  hasResource(): boolean;
  clearResource(): Asset;

  getIamPolicy(): google_iam_v1_policy_pb.Policy | undefined;
  setIamPolicy(value?: google_iam_v1_policy_pb.Policy): Asset;
  hasIamPolicy(): boolean;
  clearIamPolicy(): Asset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    name: string,
    assetType: string,
    resource?: Resource.AsObject,
    iamPolicy?: google_iam_v1_policy_pb.Policy.AsObject,
  }
}

export class Resource extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): Resource;

  getDiscoveryDocumentUri(): string;
  setDiscoveryDocumentUri(value: string): Resource;

  getDiscoveryName(): string;
  setDiscoveryName(value: string): Resource;

  getResourceUrl(): string;
  setResourceUrl(value: string): Resource;

  getParent(): string;
  setParent(value: string): Resource;

  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): Resource;
  hasData(): boolean;
  clearData(): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    version: string,
    discoveryDocumentUri: string,
    discoveryName: string,
    resourceUrl: string,
    parent: string,
    data?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

