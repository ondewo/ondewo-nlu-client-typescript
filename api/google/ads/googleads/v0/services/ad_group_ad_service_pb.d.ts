import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_resources_ad_group_ad_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_ad_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class GetAdGroupAdRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetAdGroupAdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupAdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupAdRequest): GetAdGroupAdRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdGroupAdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupAdRequest;
  static deserializeBinaryFromReader(message: GetAdGroupAdRequest, reader: jspb.BinaryReader): GetAdGroupAdRequest;
}

export namespace GetAdGroupAdRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupAdsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): MutateAdGroupAdsRequest;

  getOperationsList(): Array<AdGroupAdOperation>;
  setOperationsList(value: Array<AdGroupAdOperation>): MutateAdGroupAdsRequest;
  clearOperationsList(): MutateAdGroupAdsRequest;
  addOperations(value?: AdGroupAdOperation, index?: number): AdGroupAdOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupAdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupAdsRequest): MutateAdGroupAdsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupAdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupAdsRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupAdsRequest, reader: jspb.BinaryReader): MutateAdGroupAdsRequest;
}

export namespace MutateAdGroupAdsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupAdOperation.AsObject>,
  }
}

export class AdGroupAdOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): AdGroupAdOperation;
  hasUpdateMask(): boolean;
  clearUpdateMask(): AdGroupAdOperation;

  getCreate(): google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd | undefined;
  setCreate(value?: google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd): AdGroupAdOperation;
  hasCreate(): boolean;
  clearCreate(): AdGroupAdOperation;

  getUpdate(): google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd | undefined;
  setUpdate(value?: google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd): AdGroupAdOperation;
  hasUpdate(): boolean;
  clearUpdate(): AdGroupAdOperation;

  getRemove(): string;
  setRemove(value: string): AdGroupAdOperation;

  getOperationCase(): AdGroupAdOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdOperation): AdGroupAdOperation.AsObject;
  static serializeBinaryToWriter(message: AdGroupAdOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdOperation;
  static deserializeBinaryFromReader(message: AdGroupAdOperation, reader: jspb.BinaryReader): AdGroupAdOperation;
}

export namespace AdGroupAdOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd.AsObject,
    update?: google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateAdGroupAdsResponse extends jspb.Message {
  getResultsList(): Array<MutateAdGroupAdResult>;
  setResultsList(value: Array<MutateAdGroupAdResult>): MutateAdGroupAdsResponse;
  clearResultsList(): MutateAdGroupAdsResponse;
  addResults(value?: MutateAdGroupAdResult, index?: number): MutateAdGroupAdResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupAdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupAdsResponse): MutateAdGroupAdsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupAdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupAdsResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupAdsResponse, reader: jspb.BinaryReader): MutateAdGroupAdsResponse;
}

export namespace MutateAdGroupAdsResponse {
  export type AsObject = {
    resultsList: Array<MutateAdGroupAdResult.AsObject>,
  }
}

export class MutateAdGroupAdResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): MutateAdGroupAdResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupAdResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupAdResult): MutateAdGroupAdResult.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupAdResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupAdResult;
  static deserializeBinaryFromReader(message: MutateAdGroupAdResult, reader: jspb.BinaryReader): MutateAdGroupAdResult;
}

export namespace MutateAdGroupAdResult {
  export type AsObject = {
    resourceName: string,
  }
}

