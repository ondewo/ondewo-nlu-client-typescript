import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_criteria_pb from '../../../../../google/ads/googleads/v0/common/criteria_pb';
import * as google_ads_googleads_v0_common_custom_parameter_pb from '../../../../../google/ads/googleads/v0/common/custom_parameter_pb';
import * as google_ads_googleads_v0_enums_ad_group_criterion_status_pb from '../../../../../google/ads/googleads/v0/enums/ad_group_criterion_status_pb';
import * as google_ads_googleads_v0_enums_bidding_source_pb from '../../../../../google/ads/googleads/v0/enums/bidding_source_pb';
import * as google_ads_googleads_v0_enums_criterion_type_pb from '../../../../../google/ads/googleads/v0/enums/criterion_type_pb';
import * as google_ads_googleads_v0_enums_quality_score_bucket_pb from '../../../../../google/ads/googleads/v0/enums/quality_score_bucket_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class AdGroupCriterion extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): AdGroupCriterion;

  getCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): AdGroupCriterion;
  hasCriterionId(): boolean;
  clearCriterionId(): AdGroupCriterion;

  getStatus(): google_ads_googleads_v0_enums_ad_group_criterion_status_pb.AdGroupCriterionStatusEnum.AdGroupCriterionStatus;
  setStatus(value: google_ads_googleads_v0_enums_ad_group_criterion_status_pb.AdGroupCriterionStatusEnum.AdGroupCriterionStatus): AdGroupCriterion;

  getQualityInfo(): AdGroupCriterion.QualityInfo | undefined;
  setQualityInfo(value?: AdGroupCriterion.QualityInfo): AdGroupCriterion;
  hasQualityInfo(): boolean;
  clearQualityInfo(): AdGroupCriterion;

  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): AdGroupCriterion;
  hasAdGroup(): boolean;
  clearAdGroup(): AdGroupCriterion;

  getType(): google_ads_googleads_v0_enums_criterion_type_pb.CriterionTypeEnum.CriterionType;
  setType(value: google_ads_googleads_v0_enums_criterion_type_pb.CriterionTypeEnum.CriterionType): AdGroupCriterion;

  getNegative(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setNegative(value?: google_protobuf_wrappers_pb.BoolValue): AdGroupCriterion;
  hasNegative(): boolean;
  clearNegative(): AdGroupCriterion;

  getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroupCriterion;
  hasCpcBidMicros(): boolean;
  clearCpcBidMicros(): AdGroupCriterion;

  getCpmBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpmBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroupCriterion;
  hasCpmBidMicros(): boolean;
  clearCpmBidMicros(): AdGroupCriterion;

  getCpvBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpvBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroupCriterion;
  hasCpvBidMicros(): boolean;
  clearCpvBidMicros(): AdGroupCriterion;

  getPercentCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPercentCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroupCriterion;
  hasPercentCpcBidMicros(): boolean;
  clearPercentCpcBidMicros(): AdGroupCriterion;

  getEffectiveCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEffectiveCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroupCriterion;
  hasEffectiveCpcBidMicros(): boolean;
  clearEffectiveCpcBidMicros(): AdGroupCriterion;

  getEffectiveCpmBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEffectiveCpmBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroupCriterion;
  hasEffectiveCpmBidMicros(): boolean;
  clearEffectiveCpmBidMicros(): AdGroupCriterion;

  getEffectiveCpvBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEffectiveCpvBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroupCriterion;
  hasEffectiveCpvBidMicros(): boolean;
  clearEffectiveCpvBidMicros(): AdGroupCriterion;

  getEffectivePercentCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEffectivePercentCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroupCriterion;
  hasEffectivePercentCpcBidMicros(): boolean;
  clearEffectivePercentCpcBidMicros(): AdGroupCriterion;

  getEffectiveCpcBidSource(): google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource;
  setEffectiveCpcBidSource(value: google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource): AdGroupCriterion;

  getEffectiveCpmBidSource(): google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource;
  setEffectiveCpmBidSource(value: google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource): AdGroupCriterion;

  getEffectiveCpvBidSource(): google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource;
  setEffectiveCpvBidSource(value: google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource): AdGroupCriterion;

  getEffectivePercentCpcBidSource(): google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource;
  setEffectivePercentCpcBidSource(value: google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource): AdGroupCriterion;

  getPositionEstimates(): AdGroupCriterion.PositionEstimates | undefined;
  setPositionEstimates(value?: AdGroupCriterion.PositionEstimates): AdGroupCriterion;
  hasPositionEstimates(): boolean;
  clearPositionEstimates(): AdGroupCriterion;

  getFinalUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): AdGroupCriterion;
  clearFinalUrlsList(): AdGroupCriterion;
  addFinalUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): AdGroupCriterion;
  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): AdGroupCriterion;

  getUrlCustomParametersList(): Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter>): AdGroupCriterion;
  clearUrlCustomParametersList(): AdGroupCriterion;
  addUrlCustomParameters(value?: google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter;

  getKeyword(): google_ads_googleads_v0_common_criteria_pb.KeywordInfo | undefined;
  setKeyword(value?: google_ads_googleads_v0_common_criteria_pb.KeywordInfo): AdGroupCriterion;
  hasKeyword(): boolean;
  clearKeyword(): AdGroupCriterion;

  getListingGroup(): google_ads_googleads_v0_common_criteria_pb.ListingGroupInfo | undefined;
  setListingGroup(value?: google_ads_googleads_v0_common_criteria_pb.ListingGroupInfo): AdGroupCriterion;
  hasListingGroup(): boolean;
  clearListingGroup(): AdGroupCriterion;

  getCriterionCase(): AdGroupCriterion.CriterionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterion.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterion): AdGroupCriterion.AsObject;
  static serializeBinaryToWriter(message: AdGroupCriterion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterion;
  static deserializeBinaryFromReader(message: AdGroupCriterion, reader: jspb.BinaryReader): AdGroupCriterion;
}

export namespace AdGroupCriterion {
  export type AsObject = {
    resourceName: string,
    criterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    status: google_ads_googleads_v0_enums_ad_group_criterion_status_pb.AdGroupCriterionStatusEnum.AdGroupCriterionStatus,
    qualityInfo?: AdGroupCriterion.QualityInfo.AsObject,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v0_enums_criterion_type_pb.CriterionTypeEnum.CriterionType,
    negative?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpmBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpvBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    percentCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectiveCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectiveCpmBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectiveCpvBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectivePercentCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectiveCpcBidSource: google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource,
    effectiveCpmBidSource: google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource,
    effectiveCpvBidSource: google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource,
    effectivePercentCpcBidSource: google_ads_googleads_v0_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource,
    positionEstimates?: AdGroupCriterion.PositionEstimates.AsObject,
    finalUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter.AsObject>,
    keyword?: google_ads_googleads_v0_common_criteria_pb.KeywordInfo.AsObject,
    listingGroup?: google_ads_googleads_v0_common_criteria_pb.ListingGroupInfo.AsObject,
  }

  export class QualityInfo extends jspb.Message {
    getQualityScore(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setQualityScore(value?: google_protobuf_wrappers_pb.Int32Value): QualityInfo;
    hasQualityScore(): boolean;
    clearQualityScore(): QualityInfo;

    getCreativeQualityScore(): google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket;
    setCreativeQualityScore(value: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket): QualityInfo;

    getPostClickQualityScore(): google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket;
    setPostClickQualityScore(value: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket): QualityInfo;

    getSearchPredictedCtr(): google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket;
    setSearchPredictedCtr(value: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket): QualityInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QualityInfo.AsObject;
    static toObject(includeInstance: boolean, msg: QualityInfo): QualityInfo.AsObject;
    static serializeBinaryToWriter(message: QualityInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QualityInfo;
    static deserializeBinaryFromReader(message: QualityInfo, reader: jspb.BinaryReader): QualityInfo;
  }

  export namespace QualityInfo {
    export type AsObject = {
      qualityScore?: google_protobuf_wrappers_pb.Int32Value.AsObject,
      creativeQualityScore: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket,
      postClickQualityScore: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket,
      searchPredictedCtr: google_ads_googleads_v0_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket,
    }
  }


  export class PositionEstimates extends jspb.Message {
    getFirstPageCpcMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFirstPageCpcMicros(value?: google_protobuf_wrappers_pb.Int64Value): PositionEstimates;
    hasFirstPageCpcMicros(): boolean;
    clearFirstPageCpcMicros(): PositionEstimates;

    getFirstPositionCpcMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFirstPositionCpcMicros(value?: google_protobuf_wrappers_pb.Int64Value): PositionEstimates;
    hasFirstPositionCpcMicros(): boolean;
    clearFirstPositionCpcMicros(): PositionEstimates;

    getTopOfPageCpcMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTopOfPageCpcMicros(value?: google_protobuf_wrappers_pb.Int64Value): PositionEstimates;
    hasTopOfPageCpcMicros(): boolean;
    clearTopOfPageCpcMicros(): PositionEstimates;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionEstimates.AsObject;
    static toObject(includeInstance: boolean, msg: PositionEstimates): PositionEstimates.AsObject;
    static serializeBinaryToWriter(message: PositionEstimates, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionEstimates;
    static deserializeBinaryFromReader(message: PositionEstimates, reader: jspb.BinaryReader): PositionEstimates;
  }

  export namespace PositionEstimates {
    export type AsObject = {
      firstPageCpcMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      firstPositionCpcMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      topOfPageCpcMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export enum CriterionCase { 
    CRITERION_NOT_SET = 0,
    KEYWORD = 27,
    LISTING_GROUP = 32,
  }
}

