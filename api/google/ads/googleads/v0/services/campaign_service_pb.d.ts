import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_resources_campaign_pb from '../../../../../google/ads/googleads/v0/resources/campaign_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class GetCampaignRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetCampaignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignRequest): GetCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignRequest;
  static deserializeBinaryFromReader(message: GetCampaignRequest, reader: jspb.BinaryReader): GetCampaignRequest;
}

export namespace GetCampaignRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): MutateCampaignsRequest;

  getOperationsList(): Array<CampaignOperation>;
  setOperationsList(value: Array<CampaignOperation>): MutateCampaignsRequest;
  clearOperationsList(): MutateCampaignsRequest;
  addOperations(value?: CampaignOperation, index?: number): CampaignOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignsRequest): MutateCampaignsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignsRequest;
  static deserializeBinaryFromReader(message: MutateCampaignsRequest, reader: jspb.BinaryReader): MutateCampaignsRequest;
}

export namespace MutateCampaignsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignOperation.AsObject>,
  }
}

export class CampaignOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): CampaignOperation;
  hasUpdateMask(): boolean;
  clearUpdateMask(): CampaignOperation;

  getCreate(): google_ads_googleads_v0_resources_campaign_pb.Campaign | undefined;
  setCreate(value?: google_ads_googleads_v0_resources_campaign_pb.Campaign): CampaignOperation;
  hasCreate(): boolean;
  clearCreate(): CampaignOperation;

  getUpdate(): google_ads_googleads_v0_resources_campaign_pb.Campaign | undefined;
  setUpdate(value?: google_ads_googleads_v0_resources_campaign_pb.Campaign): CampaignOperation;
  hasUpdate(): boolean;
  clearUpdate(): CampaignOperation;

  getRemove(): string;
  setRemove(value: string): CampaignOperation;

  getOperationCase(): CampaignOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignOperation): CampaignOperation.AsObject;
  static serializeBinaryToWriter(message: CampaignOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignOperation;
  static deserializeBinaryFromReader(message: CampaignOperation, reader: jspb.BinaryReader): CampaignOperation;
}

export namespace CampaignOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v0_resources_campaign_pb.Campaign.AsObject,
    update?: google_ads_googleads_v0_resources_campaign_pb.Campaign.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCampaignsResponse extends jspb.Message {
  getResultsList(): Array<MutateCampaignResult>;
  setResultsList(value: Array<MutateCampaignResult>): MutateCampaignsResponse;
  clearResultsList(): MutateCampaignsResponse;
  addResults(value?: MutateCampaignResult, index?: number): MutateCampaignResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignsResponse): MutateCampaignsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignsResponse;
  static deserializeBinaryFromReader(message: MutateCampaignsResponse, reader: jspb.BinaryReader): MutateCampaignsResponse;
}

export namespace MutateCampaignsResponse {
  export type AsObject = {
    resultsList: Array<MutateCampaignResult.AsObject>,
  }
}

export class MutateCampaignResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): MutateCampaignResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignResult): MutateCampaignResult.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignResult;
  static deserializeBinaryFromReader(message: MutateCampaignResult, reader: jspb.BinaryReader): MutateCampaignResult;
}

export namespace MutateCampaignResult {
  export type AsObject = {
    resourceName: string,
  }
}

