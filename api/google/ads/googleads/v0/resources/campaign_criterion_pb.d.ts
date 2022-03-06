import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_criteria_pb from '../../../../../google/ads/googleads/v0/common/criteria_pb';
import * as google_ads_googleads_v0_enums_criterion_type_pb from '../../../../../google/ads/googleads/v0/enums/criterion_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class CampaignCriterion extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): CampaignCriterion;

  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): CampaignCriterion;
  hasCampaign(): boolean;
  clearCampaign(): CampaignCriterion;

  getCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): CampaignCriterion;
  hasCriterionId(): boolean;
  clearCriterionId(): CampaignCriterion;

  getBidModifier(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setBidModifier(value?: google_protobuf_wrappers_pb.FloatValue): CampaignCriterion;
  hasBidModifier(): boolean;
  clearBidModifier(): CampaignCriterion;

  getNegative(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setNegative(value?: google_protobuf_wrappers_pb.BoolValue): CampaignCriterion;
  hasNegative(): boolean;
  clearNegative(): CampaignCriterion;

  getType(): google_ads_googleads_v0_enums_criterion_type_pb.CriterionTypeEnum.CriterionType;
  setType(value: google_ads_googleads_v0_enums_criterion_type_pb.CriterionTypeEnum.CriterionType): CampaignCriterion;

  getKeyword(): google_ads_googleads_v0_common_criteria_pb.KeywordInfo | undefined;
  setKeyword(value?: google_ads_googleads_v0_common_criteria_pb.KeywordInfo): CampaignCriterion;
  hasKeyword(): boolean;
  clearKeyword(): CampaignCriterion;

  getLocation(): google_ads_googleads_v0_common_criteria_pb.LocationInfo | undefined;
  setLocation(value?: google_ads_googleads_v0_common_criteria_pb.LocationInfo): CampaignCriterion;
  hasLocation(): boolean;
  clearLocation(): CampaignCriterion;

  getPlatform(): google_ads_googleads_v0_common_criteria_pb.PlatformInfo | undefined;
  setPlatform(value?: google_ads_googleads_v0_common_criteria_pb.PlatformInfo): CampaignCriterion;
  hasPlatform(): boolean;
  clearPlatform(): CampaignCriterion;

  getCriterionCase(): CampaignCriterion.CriterionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCriterion.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCriterion): CampaignCriterion.AsObject;
  static serializeBinaryToWriter(message: CampaignCriterion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCriterion;
  static deserializeBinaryFromReader(message: CampaignCriterion, reader: jspb.BinaryReader): CampaignCriterion;
}

export namespace CampaignCriterion {
  export type AsObject = {
    resourceName: string,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    criterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    bidModifier?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    negative?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    type: google_ads_googleads_v0_enums_criterion_type_pb.CriterionTypeEnum.CriterionType,
    keyword?: google_ads_googleads_v0_common_criteria_pb.KeywordInfo.AsObject,
    location?: google_ads_googleads_v0_common_criteria_pb.LocationInfo.AsObject,
    platform?: google_ads_googleads_v0_common_criteria_pb.PlatformInfo.AsObject,
  }

  export enum CriterionCase { 
    CRITERION_NOT_SET = 0,
    KEYWORD = 8,
    LOCATION = 12,
    PLATFORM = 13,
  }
}

