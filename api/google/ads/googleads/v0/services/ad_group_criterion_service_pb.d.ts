import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_resources_ad_group_criterion_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_criterion_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class GetAdGroupCriterionRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetAdGroupCriterionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupCriterionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupCriterionRequest): GetAdGroupCriterionRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdGroupCriterionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupCriterionRequest;
  static deserializeBinaryFromReader(message: GetAdGroupCriterionRequest, reader: jspb.BinaryReader): GetAdGroupCriterionRequest;
}

export namespace GetAdGroupCriterionRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupCriteriaRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): MutateAdGroupCriteriaRequest;

  getOperationsList(): Array<AdGroupCriterionOperation>;
  setOperationsList(value: Array<AdGroupCriterionOperation>): MutateAdGroupCriteriaRequest;
  clearOperationsList(): MutateAdGroupCriteriaRequest;
  addOperations(value?: AdGroupCriterionOperation, index?: number): AdGroupCriterionOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupCriteriaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupCriteriaRequest): MutateAdGroupCriteriaRequest.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupCriteriaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupCriteriaRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupCriteriaRequest, reader: jspb.BinaryReader): MutateAdGroupCriteriaRequest;
}

export namespace MutateAdGroupCriteriaRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupCriterionOperation.AsObject>,
  }
}

export class AdGroupCriterionOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): AdGroupCriterionOperation;
  hasUpdateMask(): boolean;
  clearUpdateMask(): AdGroupCriterionOperation;

  getCreate(): google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion | undefined;
  setCreate(value?: google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion): AdGroupCriterionOperation;
  hasCreate(): boolean;
  clearCreate(): AdGroupCriterionOperation;

  getUpdate(): google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion | undefined;
  setUpdate(value?: google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion): AdGroupCriterionOperation;
  hasUpdate(): boolean;
  clearUpdate(): AdGroupCriterionOperation;

  getRemove(): string;
  setRemove(value: string): AdGroupCriterionOperation;

  getOperationCase(): AdGroupCriterionOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterionOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterionOperation): AdGroupCriterionOperation.AsObject;
  static serializeBinaryToWriter(message: AdGroupCriterionOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterionOperation;
  static deserializeBinaryFromReader(message: AdGroupCriterionOperation, reader: jspb.BinaryReader): AdGroupCriterionOperation;
}

export namespace AdGroupCriterionOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion.AsObject,
    update?: google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateAdGroupCriteriaResponse extends jspb.Message {
  getResultsList(): Array<MutateAdGroupCriterionResult>;
  setResultsList(value: Array<MutateAdGroupCriterionResult>): MutateAdGroupCriteriaResponse;
  clearResultsList(): MutateAdGroupCriteriaResponse;
  addResults(value?: MutateAdGroupCriterionResult, index?: number): MutateAdGroupCriterionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupCriteriaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupCriteriaResponse): MutateAdGroupCriteriaResponse.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupCriteriaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupCriteriaResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupCriteriaResponse, reader: jspb.BinaryReader): MutateAdGroupCriteriaResponse;
}

export namespace MutateAdGroupCriteriaResponse {
  export type AsObject = {
    resultsList: Array<MutateAdGroupCriterionResult.AsObject>,
  }
}

export class MutateAdGroupCriterionResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): MutateAdGroupCriterionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupCriterionResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupCriterionResult): MutateAdGroupCriterionResult.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupCriterionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupCriterionResult;
  static deserializeBinaryFromReader(message: MutateAdGroupCriterionResult, reader: jspb.BinaryReader): MutateAdGroupCriterionResult;
}

export namespace MutateAdGroupCriterionResult {
  export type AsObject = {
    resourceName: string,
  }
}

