import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_resources_geo_target_constant_pb from '../../../../../google/ads/googleads/v0/resources/geo_target_constant_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';


export class GetGeoTargetConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetGeoTargetConstantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGeoTargetConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGeoTargetConstantRequest): GetGeoTargetConstantRequest.AsObject;
  static serializeBinaryToWriter(message: GetGeoTargetConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGeoTargetConstantRequest;
  static deserializeBinaryFromReader(message: GetGeoTargetConstantRequest, reader: jspb.BinaryReader): GetGeoTargetConstantRequest;
}

export namespace GetGeoTargetConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

