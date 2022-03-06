import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_resources_campaign_criterion_pb from '../../../../../google/ads/googleads/v0/resources/campaign_criterion_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class GetCampaignCriterionRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetCampaignCriterionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignCriterionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignCriterionRequest): GetCampaignCriterionRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignCriterionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignCriterionRequest;
  static deserializeBinaryFromReader(message: GetCampaignCriterionRequest, reader: jspb.BinaryReader): GetCampaignCriterionRequest;
}

export namespace GetCampaignCriterionRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignCriteriaRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): MutateCampaignCriteriaRequest;

  getOperationsList(): Array<CampaignCriterionOperation>;
  setOperationsList(value: Array<CampaignCriterionOperation>): MutateCampaignCriteriaRequest;
  clearOperationsList(): MutateCampaignCriteriaRequest;
  addOperations(value?: CampaignCriterionOperation, index?: number): CampaignCriterionOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignCriteriaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignCriteriaRequest): MutateCampaignCriteriaRequest.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignCriteriaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignCriteriaRequest;
  static deserializeBinaryFromReader(message: MutateCampaignCriteriaRequest, reader: jspb.BinaryReader): MutateCampaignCriteriaRequest;
}

export namespace MutateCampaignCriteriaRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignCriterionOperation.AsObject>,
  }
}

export class CampaignCriterionOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): CampaignCriterionOperation;
  hasUpdateMask(): boolean;
  clearUpdateMask(): CampaignCriterionOperation;

  getCreate(): google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion | undefined;
  setCreate(value?: google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion): CampaignCriterionOperation;
  hasCreate(): boolean;
  clearCreate(): CampaignCriterionOperation;

  getUpdate(): google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion | undefined;
  setUpdate(value?: google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion): CampaignCriterionOperation;
  hasUpdate(): boolean;
  clearUpdate(): CampaignCriterionOperation;

  getRemove(): string;
  setRemove(value: string): CampaignCriterionOperation;

  getOperationCase(): CampaignCriterionOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCriterionOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCriterionOperation): CampaignCriterionOperation.AsObject;
  static serializeBinaryToWriter(message: CampaignCriterionOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCriterionOperation;
  static deserializeBinaryFromReader(message: CampaignCriterionOperation, reader: jspb.BinaryReader): CampaignCriterionOperation;
}

export namespace CampaignCriterionOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion.AsObject,
    update?: google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCampaignCriteriaResponse extends jspb.Message {
  getResultsList(): Array<MutateCampaignCriterionResult>;
  setResultsList(value: Array<MutateCampaignCriterionResult>): MutateCampaignCriteriaResponse;
  clearResultsList(): MutateCampaignCriteriaResponse;
  addResults(value?: MutateCampaignCriterionResult, index?: number): MutateCampaignCriterionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignCriteriaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignCriteriaResponse): MutateCampaignCriteriaResponse.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignCriteriaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignCriteriaResponse;
  static deserializeBinaryFromReader(message: MutateCampaignCriteriaResponse, reader: jspb.BinaryReader): MutateCampaignCriteriaResponse;
}

export namespace MutateCampaignCriteriaResponse {
  export type AsObject = {
    resultsList: Array<MutateCampaignCriterionResult.AsObject>,
  }
}

export class MutateCampaignCriterionResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): MutateCampaignCriterionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignCriterionResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignCriterionResult): MutateCampaignCriterionResult.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignCriterionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignCriterionResult;
  static deserializeBinaryFromReader(message: MutateCampaignCriterionResult, reader: jspb.BinaryReader): MutateCampaignCriterionResult;
}

export namespace MutateCampaignCriterionResult {
  export type AsObject = {
    resourceName: string,
  }
}

