import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_resources_bidding_strategy_pb from '../../../../../google/ads/googleads/v0/resources/bidding_strategy_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class GetBiddingStrategyRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetBiddingStrategyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBiddingStrategyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBiddingStrategyRequest): GetBiddingStrategyRequest.AsObject;
  static serializeBinaryToWriter(message: GetBiddingStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBiddingStrategyRequest;
  static deserializeBinaryFromReader(message: GetBiddingStrategyRequest, reader: jspb.BinaryReader): GetBiddingStrategyRequest;
}

export namespace GetBiddingStrategyRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateBiddingStrategiesRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): MutateBiddingStrategiesRequest;

  getOperationsList(): Array<BiddingStrategyOperation>;
  setOperationsList(value: Array<BiddingStrategyOperation>): MutateBiddingStrategiesRequest;
  clearOperationsList(): MutateBiddingStrategiesRequest;
  addOperations(value?: BiddingStrategyOperation, index?: number): BiddingStrategyOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBiddingStrategiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBiddingStrategiesRequest): MutateBiddingStrategiesRequest.AsObject;
  static serializeBinaryToWriter(message: MutateBiddingStrategiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBiddingStrategiesRequest;
  static deserializeBinaryFromReader(message: MutateBiddingStrategiesRequest, reader: jspb.BinaryReader): MutateBiddingStrategiesRequest;
}

export namespace MutateBiddingStrategiesRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<BiddingStrategyOperation.AsObject>,
  }
}

export class BiddingStrategyOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): BiddingStrategyOperation;
  hasUpdateMask(): boolean;
  clearUpdateMask(): BiddingStrategyOperation;

  getCreate(): google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy | undefined;
  setCreate(value?: google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy): BiddingStrategyOperation;
  hasCreate(): boolean;
  clearCreate(): BiddingStrategyOperation;

  getUpdate(): google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy | undefined;
  setUpdate(value?: google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy): BiddingStrategyOperation;
  hasUpdate(): boolean;
  clearUpdate(): BiddingStrategyOperation;

  getRemove(): string;
  setRemove(value: string): BiddingStrategyOperation;

  getOperationCase(): BiddingStrategyOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiddingStrategyOperation.AsObject;
  static toObject(includeInstance: boolean, msg: BiddingStrategyOperation): BiddingStrategyOperation.AsObject;
  static serializeBinaryToWriter(message: BiddingStrategyOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiddingStrategyOperation;
  static deserializeBinaryFromReader(message: BiddingStrategyOperation, reader: jspb.BinaryReader): BiddingStrategyOperation;
}

export namespace BiddingStrategyOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy.AsObject,
    update?: google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateBiddingStrategiesResponse extends jspb.Message {
  getResultsList(): Array<MutateBiddingStrategyResult>;
  setResultsList(value: Array<MutateBiddingStrategyResult>): MutateBiddingStrategiesResponse;
  clearResultsList(): MutateBiddingStrategiesResponse;
  addResults(value?: MutateBiddingStrategyResult, index?: number): MutateBiddingStrategyResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBiddingStrategiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBiddingStrategiesResponse): MutateBiddingStrategiesResponse.AsObject;
  static serializeBinaryToWriter(message: MutateBiddingStrategiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBiddingStrategiesResponse;
  static deserializeBinaryFromReader(message: MutateBiddingStrategiesResponse, reader: jspb.BinaryReader): MutateBiddingStrategiesResponse;
}

export namespace MutateBiddingStrategiesResponse {
  export type AsObject = {
    resultsList: Array<MutateBiddingStrategyResult.AsObject>,
  }
}

export class MutateBiddingStrategyResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): MutateBiddingStrategyResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBiddingStrategyResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBiddingStrategyResult): MutateBiddingStrategyResult.AsObject;
  static serializeBinaryToWriter(message: MutateBiddingStrategyResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBiddingStrategyResult;
  static deserializeBinaryFromReader(message: MutateBiddingStrategyResult, reader: jspb.BinaryReader): MutateBiddingStrategyResult;
}

export namespace MutateBiddingStrategyResult {
  export type AsObject = {
    resourceName: string,
  }
}

