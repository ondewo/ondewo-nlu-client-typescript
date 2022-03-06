import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_ad_pb from '../../../../../google/ads/googleads/v0/common/ad_pb';
import * as google_ads_googleads_v0_enums_keyword_match_type_pb from '../../../../../google/ads/googleads/v0/enums/keyword_match_type_pb';
import * as google_ads_googleads_v0_resources_recommendation_pb from '../../../../../google/ads/googleads/v0/resources/recommendation_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';


export class GetRecommendationRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetRecommendationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationRequest): GetRecommendationRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecommendationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendationRequest;
  static deserializeBinaryFromReader(message: GetRecommendationRequest, reader: jspb.BinaryReader): GetRecommendationRequest;
}

export namespace GetRecommendationRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class ApplyRecommendationRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): ApplyRecommendationRequest;

  getOperationsList(): Array<ApplyRecommendationOperation>;
  setOperationsList(value: Array<ApplyRecommendationOperation>): ApplyRecommendationRequest;
  clearOperationsList(): ApplyRecommendationRequest;
  addOperations(value?: ApplyRecommendationOperation, index?: number): ApplyRecommendationOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationRequest): ApplyRecommendationRequest.AsObject;
  static serializeBinaryToWriter(message: ApplyRecommendationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationRequest;
  static deserializeBinaryFromReader(message: ApplyRecommendationRequest, reader: jspb.BinaryReader): ApplyRecommendationRequest;
}

export namespace ApplyRecommendationRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<ApplyRecommendationOperation.AsObject>,
  }
}

export class ApplyRecommendationOperation extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): ApplyRecommendationOperation;

  getCampaignBudget(): ApplyRecommendationOperation.CampaignBudgetParameters | undefined;
  setCampaignBudget(value?: ApplyRecommendationOperation.CampaignBudgetParameters): ApplyRecommendationOperation;
  hasCampaignBudget(): boolean;
  clearCampaignBudget(): ApplyRecommendationOperation;

  getTextAd(): ApplyRecommendationOperation.TextAdParameters | undefined;
  setTextAd(value?: ApplyRecommendationOperation.TextAdParameters): ApplyRecommendationOperation;
  hasTextAd(): boolean;
  clearTextAd(): ApplyRecommendationOperation;

  getKeyword(): ApplyRecommendationOperation.KeywordParameters | undefined;
  setKeyword(value?: ApplyRecommendationOperation.KeywordParameters): ApplyRecommendationOperation;
  hasKeyword(): boolean;
  clearKeyword(): ApplyRecommendationOperation;

  getTargetCpaOptIn(): ApplyRecommendationOperation.TargetCpaOptInParameters | undefined;
  setTargetCpaOptIn(value?: ApplyRecommendationOperation.TargetCpaOptInParameters): ApplyRecommendationOperation;
  hasTargetCpaOptIn(): boolean;
  clearTargetCpaOptIn(): ApplyRecommendationOperation;

  getApplyParametersCase(): ApplyRecommendationOperation.ApplyParametersCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationOperation): ApplyRecommendationOperation.AsObject;
  static serializeBinaryToWriter(message: ApplyRecommendationOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationOperation;
  static deserializeBinaryFromReader(message: ApplyRecommendationOperation, reader: jspb.BinaryReader): ApplyRecommendationOperation;
}

export namespace ApplyRecommendationOperation {
  export type AsObject = {
    resourceName: string,
    campaignBudget?: ApplyRecommendationOperation.CampaignBudgetParameters.AsObject,
    textAd?: ApplyRecommendationOperation.TextAdParameters.AsObject,
    keyword?: ApplyRecommendationOperation.KeywordParameters.AsObject,
    targetCpaOptIn?: ApplyRecommendationOperation.TargetCpaOptInParameters.AsObject,
  }

  export class CampaignBudgetParameters extends jspb.Message {
    getNewBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNewBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): CampaignBudgetParameters;
    hasNewBudgetAmountMicros(): boolean;
    clearNewBudgetAmountMicros(): CampaignBudgetParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignBudgetParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignBudgetParameters): CampaignBudgetParameters.AsObject;
    static serializeBinaryToWriter(message: CampaignBudgetParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignBudgetParameters;
    static deserializeBinaryFromReader(message: CampaignBudgetParameters, reader: jspb.BinaryReader): CampaignBudgetParameters;
  }

  export namespace CampaignBudgetParameters {
    export type AsObject = {
      newBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export class TextAdParameters extends jspb.Message {
    getAd(): google_ads_googleads_v0_common_ad_pb.Ad | undefined;
    setAd(value?: google_ads_googleads_v0_common_ad_pb.Ad): TextAdParameters;
    hasAd(): boolean;
    clearAd(): TextAdParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextAdParameters.AsObject;
    static toObject(includeInstance: boolean, msg: TextAdParameters): TextAdParameters.AsObject;
    static serializeBinaryToWriter(message: TextAdParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextAdParameters;
    static deserializeBinaryFromReader(message: TextAdParameters, reader: jspb.BinaryReader): TextAdParameters;
  }

  export namespace TextAdParameters {
    export type AsObject = {
      ad?: google_ads_googleads_v0_common_ad_pb.Ad.AsObject,
    }
  }


  export class KeywordParameters extends jspb.Message {
    getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): KeywordParameters;
    hasAdGroup(): boolean;
    clearAdGroup(): KeywordParameters;

    getMatchType(): google_ads_googleads_v0_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType;
    setMatchType(value: google_ads_googleads_v0_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType): KeywordParameters;

    getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): KeywordParameters;
    hasCpcBidMicros(): boolean;
    clearCpcBidMicros(): KeywordParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeywordParameters.AsObject;
    static toObject(includeInstance: boolean, msg: KeywordParameters): KeywordParameters.AsObject;
    static serializeBinaryToWriter(message: KeywordParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeywordParameters;
    static deserializeBinaryFromReader(message: KeywordParameters, reader: jspb.BinaryReader): KeywordParameters;
  }

  export namespace KeywordParameters {
    export type AsObject = {
      adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
      matchType: google_ads_googleads_v0_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType,
      cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export class TargetCpaOptInParameters extends jspb.Message {
    getTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetCpaOptInParameters;
    hasTargetCpaMicros(): boolean;
    clearTargetCpaMicros(): TargetCpaOptInParameters;

    getNewCampaignBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNewCampaignBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetCpaOptInParameters;
    hasNewCampaignBudgetAmountMicros(): boolean;
    clearNewCampaignBudgetAmountMicros(): TargetCpaOptInParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetCpaOptInParameters.AsObject;
    static toObject(includeInstance: boolean, msg: TargetCpaOptInParameters): TargetCpaOptInParameters.AsObject;
    static serializeBinaryToWriter(message: TargetCpaOptInParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetCpaOptInParameters;
    static deserializeBinaryFromReader(message: TargetCpaOptInParameters, reader: jspb.BinaryReader): TargetCpaOptInParameters;
  }

  export namespace TargetCpaOptInParameters {
    export type AsObject = {
      targetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      newCampaignBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export enum ApplyParametersCase { 
    APPLY_PARAMETERS_NOT_SET = 0,
    CAMPAIGN_BUDGET = 2,
    TEXT_AD = 3,
    KEYWORD = 4,
    TARGET_CPA_OPT_IN = 5,
  }
}

export class ApplyRecommendationResponse extends jspb.Message {
  getResultsList(): Array<ApplyRecommendationResult>;
  setResultsList(value: Array<ApplyRecommendationResult>): ApplyRecommendationResponse;
  clearResultsList(): ApplyRecommendationResponse;
  addResults(value?: ApplyRecommendationResult, index?: number): ApplyRecommendationResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationResponse): ApplyRecommendationResponse.AsObject;
  static serializeBinaryToWriter(message: ApplyRecommendationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationResponse;
  static deserializeBinaryFromReader(message: ApplyRecommendationResponse, reader: jspb.BinaryReader): ApplyRecommendationResponse;
}

export namespace ApplyRecommendationResponse {
  export type AsObject = {
    resultsList: Array<ApplyRecommendationResult.AsObject>,
  }
}

export class ApplyRecommendationResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): ApplyRecommendationResult;

  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): ApplyRecommendationResult;
  hasStatus(): boolean;
  clearStatus(): ApplyRecommendationResult;

  getResultCase(): ApplyRecommendationResult.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationResult.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationResult): ApplyRecommendationResult.AsObject;
  static serializeBinaryToWriter(message: ApplyRecommendationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationResult;
  static deserializeBinaryFromReader(message: ApplyRecommendationResult, reader: jspb.BinaryReader): ApplyRecommendationResult;
}

export namespace ApplyRecommendationResult {
  export type AsObject = {
    resourceName: string,
    status?: google_rpc_status_pb.Status.AsObject,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    RESOURCE_NAME = 1,
    STATUS = 2,
  }
}

