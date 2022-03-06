import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_resources_ad_group_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class GetAdGroupRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetAdGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupRequest): GetAdGroupRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupRequest;
  static deserializeBinaryFromReader(message: GetAdGroupRequest, reader: jspb.BinaryReader): GetAdGroupRequest;
}

export namespace GetAdGroupRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): MutateAdGroupsRequest;

  getOperationsList(): Array<AdGroupOperation>;
  setOperationsList(value: Array<AdGroupOperation>): MutateAdGroupsRequest;
  clearOperationsList(): MutateAdGroupsRequest;
  addOperations(value?: AdGroupOperation, index?: number): AdGroupOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupsRequest): MutateAdGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupsRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupsRequest, reader: jspb.BinaryReader): MutateAdGroupsRequest;
}

export namespace MutateAdGroupsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupOperation.AsObject>,
  }
}

export class AdGroupOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): AdGroupOperation;
  hasUpdateMask(): boolean;
  clearUpdateMask(): AdGroupOperation;

  getCreate(): google_ads_googleads_v0_resources_ad_group_pb.AdGroup | undefined;
  setCreate(value?: google_ads_googleads_v0_resources_ad_group_pb.AdGroup): AdGroupOperation;
  hasCreate(): boolean;
  clearCreate(): AdGroupOperation;

  getUpdate(): google_ads_googleads_v0_resources_ad_group_pb.AdGroup | undefined;
  setUpdate(value?: google_ads_googleads_v0_resources_ad_group_pb.AdGroup): AdGroupOperation;
  hasUpdate(): boolean;
  clearUpdate(): AdGroupOperation;

  getRemove(): string;
  setRemove(value: string): AdGroupOperation;

  getOperationCase(): AdGroupOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupOperation): AdGroupOperation.AsObject;
  static serializeBinaryToWriter(message: AdGroupOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupOperation;
  static deserializeBinaryFromReader(message: AdGroupOperation, reader: jspb.BinaryReader): AdGroupOperation;
}

export namespace AdGroupOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v0_resources_ad_group_pb.AdGroup.AsObject,
    update?: google_ads_googleads_v0_resources_ad_group_pb.AdGroup.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateAdGroupsResponse extends jspb.Message {
  getResultsList(): Array<MutateAdGroupResult>;
  setResultsList(value: Array<MutateAdGroupResult>): MutateAdGroupsResponse;
  clearResultsList(): MutateAdGroupsResponse;
  addResults(value?: MutateAdGroupResult, index?: number): MutateAdGroupResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupsResponse): MutateAdGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupsResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupsResponse, reader: jspb.BinaryReader): MutateAdGroupsResponse;
}

export namespace MutateAdGroupsResponse {
  export type AsObject = {
    resultsList: Array<MutateAdGroupResult.AsObject>,
  }
}

export class MutateAdGroupResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): MutateAdGroupResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupResult): MutateAdGroupResult.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupResult;
  static deserializeBinaryFromReader(message: MutateAdGroupResult, reader: jspb.BinaryReader): MutateAdGroupResult;
}

export namespace MutateAdGroupResult {
  export type AsObject = {
    resourceName: string,
  }
}

