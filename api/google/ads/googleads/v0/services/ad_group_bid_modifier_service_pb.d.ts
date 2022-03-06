import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_resources_ad_group_bid_modifier_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_bid_modifier_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class GetAdGroupBidModifierRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetAdGroupBidModifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupBidModifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupBidModifierRequest): GetAdGroupBidModifierRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdGroupBidModifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupBidModifierRequest;
  static deserializeBinaryFromReader(message: GetAdGroupBidModifierRequest, reader: jspb.BinaryReader): GetAdGroupBidModifierRequest;
}

export namespace GetAdGroupBidModifierRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupBidModifiersRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): MutateAdGroupBidModifiersRequest;

  getOperationsList(): Array<AdGroupBidModifierOperation>;
  setOperationsList(value: Array<AdGroupBidModifierOperation>): MutateAdGroupBidModifiersRequest;
  clearOperationsList(): MutateAdGroupBidModifiersRequest;
  addOperations(value?: AdGroupBidModifierOperation, index?: number): AdGroupBidModifierOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupBidModifiersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupBidModifiersRequest): MutateAdGroupBidModifiersRequest.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupBidModifiersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupBidModifiersRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupBidModifiersRequest, reader: jspb.BinaryReader): MutateAdGroupBidModifiersRequest;
}

export namespace MutateAdGroupBidModifiersRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupBidModifierOperation.AsObject>,
  }
}

export class AdGroupBidModifierOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): AdGroupBidModifierOperation;
  hasUpdateMask(): boolean;
  clearUpdateMask(): AdGroupBidModifierOperation;

  getCreate(): google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier | undefined;
  setCreate(value?: google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier): AdGroupBidModifierOperation;
  hasCreate(): boolean;
  clearCreate(): AdGroupBidModifierOperation;

  getUpdate(): google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier | undefined;
  setUpdate(value?: google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier): AdGroupBidModifierOperation;
  hasUpdate(): boolean;
  clearUpdate(): AdGroupBidModifierOperation;

  getRemove(): string;
  setRemove(value: string): AdGroupBidModifierOperation;

  getOperationCase(): AdGroupBidModifierOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupBidModifierOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupBidModifierOperation): AdGroupBidModifierOperation.AsObject;
  static serializeBinaryToWriter(message: AdGroupBidModifierOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupBidModifierOperation;
  static deserializeBinaryFromReader(message: AdGroupBidModifierOperation, reader: jspb.BinaryReader): AdGroupBidModifierOperation;
}

export namespace AdGroupBidModifierOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier.AsObject,
    update?: google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateAdGroupBidModifiersResponse extends jspb.Message {
  getResultsList(): Array<MutateAdGroupBidModifierResult>;
  setResultsList(value: Array<MutateAdGroupBidModifierResult>): MutateAdGroupBidModifiersResponse;
  clearResultsList(): MutateAdGroupBidModifiersResponse;
  addResults(value?: MutateAdGroupBidModifierResult, index?: number): MutateAdGroupBidModifierResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupBidModifiersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupBidModifiersResponse): MutateAdGroupBidModifiersResponse.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupBidModifiersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupBidModifiersResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupBidModifiersResponse, reader: jspb.BinaryReader): MutateAdGroupBidModifiersResponse;
}

export namespace MutateAdGroupBidModifiersResponse {
  export type AsObject = {
    resultsList: Array<MutateAdGroupBidModifierResult.AsObject>,
  }
}

export class MutateAdGroupBidModifierResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): MutateAdGroupBidModifierResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupBidModifierResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupBidModifierResult): MutateAdGroupBidModifierResult.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupBidModifierResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupBidModifierResult;
  static deserializeBinaryFromReader(message: MutateAdGroupBidModifierResult, reader: jspb.BinaryReader): MutateAdGroupBidModifierResult;
}

export namespace MutateAdGroupBidModifierResult {
  export type AsObject = {
    resourceName: string,
  }
}

