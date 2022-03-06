import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class GeoTargetConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GeoTargetConstant;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): GeoTargetConstant;
  hasId(): boolean;
  clearId(): GeoTargetConstant;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): GeoTargetConstant;
  hasName(): boolean;
  clearName(): GeoTargetConstant;

  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): GeoTargetConstant;
  hasCountryCode(): boolean;
  clearCountryCode(): GeoTargetConstant;

  getTargetType(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTargetType(value?: google_protobuf_wrappers_pb.StringValue): GeoTargetConstant;
  hasTargetType(): boolean;
  clearTargetType(): GeoTargetConstant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoTargetConstant.AsObject;
  static toObject(includeInstance: boolean, msg: GeoTargetConstant): GeoTargetConstant.AsObject;
  static serializeBinaryToWriter(message: GeoTargetConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoTargetConstant;
  static deserializeBinaryFromReader(message: GeoTargetConstant, reader: jspb.BinaryReader): GeoTargetConstant;
}

export namespace GeoTargetConstant {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    targetType?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

