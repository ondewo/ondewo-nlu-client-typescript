import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_ad_pb from '../../../../../google/ads/googleads/v0/common/ad_pb';
import * as google_ads_googleads_v0_common_criteria_pb from '../../../../../google/ads/googleads/v0/common/criteria_pb';
import * as google_ads_googleads_v0_enums_recommendation_type_pb from '../../../../../google/ads/googleads/v0/enums/recommendation_type_pb';
import * as google_ads_googleads_v0_enums_target_cpa_opt_in_recommendation_goal_pb from '../../../../../google/ads/googleads/v0/enums/target_cpa_opt_in_recommendation_goal_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Recommendation extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): Recommendation;

  getType(): google_ads_googleads_v0_enums_recommendation_type_pb.RecommendationTypeEnum.RecommendationType;
  setType(value: google_ads_googleads_v0_enums_recommendation_type_pb.RecommendationTypeEnum.RecommendationType): Recommendation;

  getImpact(): Recommendation.RecommendationImpact | undefined;
  setImpact(value?: Recommendation.RecommendationImpact): Recommendation;
  hasImpact(): boolean;
  clearImpact(): Recommendation;

  getCampaignBudget(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaignBudget(value?: google_protobuf_wrappers_pb.StringValue): Recommendation;
  hasCampaignBudget(): boolean;
  clearCampaignBudget(): Recommendation;

  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): Recommendation;
  hasCampaign(): boolean;
  clearCampaign(): Recommendation;

  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): Recommendation;
  hasAdGroup(): boolean;
  clearAdGroup(): Recommendation;

  getCampaignBudgetRecommendation(): Recommendation.CampaignBudgetRecommendation | undefined;
  setCampaignBudgetRecommendation(value?: Recommendation.CampaignBudgetRecommendation): Recommendation;
  hasCampaignBudgetRecommendation(): boolean;
  clearCampaignBudgetRecommendation(): Recommendation;

  getKeywordRecommendation(): Recommendation.KeywordRecommendation | undefined;
  setKeywordRecommendation(value?: Recommendation.KeywordRecommendation): Recommendation;
  hasKeywordRecommendation(): boolean;
  clearKeywordRecommendation(): Recommendation;

  getTextAdRecommendation(): Recommendation.TextAdRecommendation | undefined;
  setTextAdRecommendation(value?: Recommendation.TextAdRecommendation): Recommendation;
  hasTextAdRecommendation(): boolean;
  clearTextAdRecommendation(): Recommendation;

  getTargetCpaOptInRecommendation(): Recommendation.TargetCpaOptInRecommendation | undefined;
  setTargetCpaOptInRecommendation(value?: Recommendation.TargetCpaOptInRecommendation): Recommendation;
  hasTargetCpaOptInRecommendation(): boolean;
  clearTargetCpaOptInRecommendation(): Recommendation;

  getRecommendationCase(): Recommendation.RecommendationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recommendation.AsObject;
  static toObject(includeInstance: boolean, msg: Recommendation): Recommendation.AsObject;
  static serializeBinaryToWriter(message: Recommendation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recommendation;
  static deserializeBinaryFromReader(message: Recommendation, reader: jspb.BinaryReader): Recommendation;
}

export namespace Recommendation {
  export type AsObject = {
    resourceName: string,
    type: google_ads_googleads_v0_enums_recommendation_type_pb.RecommendationTypeEnum.RecommendationType,
    impact?: Recommendation.RecommendationImpact.AsObject,
    campaignBudget?: google_protobuf_wrappers_pb.StringValue.AsObject,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    campaignBudgetRecommendation?: Recommendation.CampaignBudgetRecommendation.AsObject,
    keywordRecommendation?: Recommendation.KeywordRecommendation.AsObject,
    textAdRecommendation?: Recommendation.TextAdRecommendation.AsObject,
    targetCpaOptInRecommendation?: Recommendation.TargetCpaOptInRecommendation.AsObject,
  }

  export class RecommendationImpact extends jspb.Message {
    getBaseMetrics(): Recommendation.RecommendationMetrics | undefined;
    setBaseMetrics(value?: Recommendation.RecommendationMetrics): RecommendationImpact;
    hasBaseMetrics(): boolean;
    clearBaseMetrics(): RecommendationImpact;

    getPotentialMetrics(): Recommendation.RecommendationMetrics | undefined;
    setPotentialMetrics(value?: Recommendation.RecommendationMetrics): RecommendationImpact;
    hasPotentialMetrics(): boolean;
    clearPotentialMetrics(): RecommendationImpact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecommendationImpact.AsObject;
    static toObject(includeInstance: boolean, msg: RecommendationImpact): RecommendationImpact.AsObject;
    static serializeBinaryToWriter(message: RecommendationImpact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecommendationImpact;
    static deserializeBinaryFromReader(message: RecommendationImpact, reader: jspb.BinaryReader): RecommendationImpact;
  }

  export namespace RecommendationImpact {
    export type AsObject = {
      baseMetrics?: Recommendation.RecommendationMetrics.AsObject,
      potentialMetrics?: Recommendation.RecommendationMetrics.AsObject,
    }
  }


  export class RecommendationMetrics extends jspb.Message {
    getImpressions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setImpressions(value?: google_protobuf_wrappers_pb.DoubleValue): RecommendationMetrics;
    hasImpressions(): boolean;
    clearImpressions(): RecommendationMetrics;

    getClicks(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setClicks(value?: google_protobuf_wrappers_pb.DoubleValue): RecommendationMetrics;
    hasClicks(): boolean;
    clearClicks(): RecommendationMetrics;

    getCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): RecommendationMetrics;
    hasCostMicros(): boolean;
    clearCostMicros(): RecommendationMetrics;

    getConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setConversions(value?: google_protobuf_wrappers_pb.DoubleValue): RecommendationMetrics;
    hasConversions(): boolean;
    clearConversions(): RecommendationMetrics;

    getVideoViews(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setVideoViews(value?: google_protobuf_wrappers_pb.DoubleValue): RecommendationMetrics;
    hasVideoViews(): boolean;
    clearVideoViews(): RecommendationMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecommendationMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: RecommendationMetrics): RecommendationMetrics.AsObject;
    static serializeBinaryToWriter(message: RecommendationMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecommendationMetrics;
    static deserializeBinaryFromReader(message: RecommendationMetrics, reader: jspb.BinaryReader): RecommendationMetrics;
  }

  export namespace RecommendationMetrics {
    export type AsObject = {
      impressions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      clicks?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      costMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      conversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      videoViews?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
  }


  export class CampaignBudgetRecommendation extends jspb.Message {
    getCurrentBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCurrentBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): CampaignBudgetRecommendation;
    hasCurrentBudgetAmountMicros(): boolean;
    clearCurrentBudgetAmountMicros(): CampaignBudgetRecommendation;

    getRecommendedBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRecommendedBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): CampaignBudgetRecommendation;
    hasRecommendedBudgetAmountMicros(): boolean;
    clearRecommendedBudgetAmountMicros(): CampaignBudgetRecommendation;

    getBudgetOptionsList(): Array<Recommendation.CampaignBudgetRecommendation.CampaignBudgetRecommendationOption>;
    setBudgetOptionsList(value: Array<Recommendation.CampaignBudgetRecommendation.CampaignBudgetRecommendationOption>): CampaignBudgetRecommendation;
    clearBudgetOptionsList(): CampaignBudgetRecommendation;
    addBudgetOptions(value?: Recommendation.CampaignBudgetRecommendation.CampaignBudgetRecommendationOption, index?: number): Recommendation.CampaignBudgetRecommendation.CampaignBudgetRecommendationOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignBudgetRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignBudgetRecommendation): CampaignBudgetRecommendation.AsObject;
    static serializeBinaryToWriter(message: CampaignBudgetRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignBudgetRecommendation;
    static deserializeBinaryFromReader(message: CampaignBudgetRecommendation, reader: jspb.BinaryReader): CampaignBudgetRecommendation;
  }

  export namespace CampaignBudgetRecommendation {
    export type AsObject = {
      currentBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      recommendedBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      budgetOptionsList: Array<Recommendation.CampaignBudgetRecommendation.CampaignBudgetRecommendationOption.AsObject>,
    }

    export class CampaignBudgetRecommendationOption extends jspb.Message {
      getBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): CampaignBudgetRecommendationOption;
      hasBudgetAmountMicros(): boolean;
      clearBudgetAmountMicros(): CampaignBudgetRecommendationOption;

      getImpact(): Recommendation.RecommendationImpact | undefined;
      setImpact(value?: Recommendation.RecommendationImpact): CampaignBudgetRecommendationOption;
      hasImpact(): boolean;
      clearImpact(): CampaignBudgetRecommendationOption;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CampaignBudgetRecommendationOption.AsObject;
      static toObject(includeInstance: boolean, msg: CampaignBudgetRecommendationOption): CampaignBudgetRecommendationOption.AsObject;
      static serializeBinaryToWriter(message: CampaignBudgetRecommendationOption, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CampaignBudgetRecommendationOption;
      static deserializeBinaryFromReader(message: CampaignBudgetRecommendationOption, reader: jspb.BinaryReader): CampaignBudgetRecommendationOption;
    }

    export namespace CampaignBudgetRecommendationOption {
      export type AsObject = {
        budgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        impact?: Recommendation.RecommendationImpact.AsObject,
      }
    }

  }


  export class KeywordRecommendation extends jspb.Message {
    getKeyword(): google_ads_googleads_v0_common_criteria_pb.KeywordInfo | undefined;
    setKeyword(value?: google_ads_googleads_v0_common_criteria_pb.KeywordInfo): KeywordRecommendation;
    hasKeyword(): boolean;
    clearKeyword(): KeywordRecommendation;

    getRecommendedCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRecommendedCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): KeywordRecommendation;
    hasRecommendedCpcBidMicros(): boolean;
    clearRecommendedCpcBidMicros(): KeywordRecommendation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeywordRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: KeywordRecommendation): KeywordRecommendation.AsObject;
    static serializeBinaryToWriter(message: KeywordRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeywordRecommendation;
    static deserializeBinaryFromReader(message: KeywordRecommendation, reader: jspb.BinaryReader): KeywordRecommendation;
  }

  export namespace KeywordRecommendation {
    export type AsObject = {
      keyword?: google_ads_googleads_v0_common_criteria_pb.KeywordInfo.AsObject,
      recommendedCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export class TextAdRecommendation extends jspb.Message {
    getAd(): google_ads_googleads_v0_common_ad_pb.Ad | undefined;
    setAd(value?: google_ads_googleads_v0_common_ad_pb.Ad): TextAdRecommendation;
    hasAd(): boolean;
    clearAd(): TextAdRecommendation;

    getCreationDate(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCreationDate(value?: google_protobuf_wrappers_pb.StringValue): TextAdRecommendation;
    hasCreationDate(): boolean;
    clearCreationDate(): TextAdRecommendation;

    getAutoApplyDate(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAutoApplyDate(value?: google_protobuf_wrappers_pb.StringValue): TextAdRecommendation;
    hasAutoApplyDate(): boolean;
    clearAutoApplyDate(): TextAdRecommendation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextAdRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: TextAdRecommendation): TextAdRecommendation.AsObject;
    static serializeBinaryToWriter(message: TextAdRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextAdRecommendation;
    static deserializeBinaryFromReader(message: TextAdRecommendation, reader: jspb.BinaryReader): TextAdRecommendation;
  }

  export namespace TextAdRecommendation {
    export type AsObject = {
      ad?: google_ads_googleads_v0_common_ad_pb.Ad.AsObject,
      creationDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
      autoApplyDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }


  export class TargetCpaOptInRecommendation extends jspb.Message {
    getOptionsList(): Array<Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption>;
    setOptionsList(value: Array<Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption>): TargetCpaOptInRecommendation;
    clearOptionsList(): TargetCpaOptInRecommendation;
    addOptions(value?: Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption, index?: number): Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption;

    getRecommendedTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRecommendedTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetCpaOptInRecommendation;
    hasRecommendedTargetCpaMicros(): boolean;
    clearRecommendedTargetCpaMicros(): TargetCpaOptInRecommendation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetCpaOptInRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: TargetCpaOptInRecommendation): TargetCpaOptInRecommendation.AsObject;
    static serializeBinaryToWriter(message: TargetCpaOptInRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetCpaOptInRecommendation;
    static deserializeBinaryFromReader(message: TargetCpaOptInRecommendation, reader: jspb.BinaryReader): TargetCpaOptInRecommendation;
  }

  export namespace TargetCpaOptInRecommendation {
    export type AsObject = {
      optionsList: Array<Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption.AsObject>,
      recommendedTargetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }

    export class TargetCpaOptInRecommendationOption extends jspb.Message {
      getGoal(): google_ads_googleads_v0_enums_target_cpa_opt_in_recommendation_goal_pb.TargetCpaOptInRecommendationGoalEnum.TargetCpaOptInRecommendationGoal;
      setGoal(value: google_ads_googleads_v0_enums_target_cpa_opt_in_recommendation_goal_pb.TargetCpaOptInRecommendationGoalEnum.TargetCpaOptInRecommendationGoal): TargetCpaOptInRecommendationOption;

      getTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetCpaOptInRecommendationOption;
      hasTargetCpaMicros(): boolean;
      clearTargetCpaMicros(): TargetCpaOptInRecommendationOption;

      getRequiredCampaignBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setRequiredCampaignBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetCpaOptInRecommendationOption;
      hasRequiredCampaignBudgetAmountMicros(): boolean;
      clearRequiredCampaignBudgetAmountMicros(): TargetCpaOptInRecommendationOption;

      getImpact(): Recommendation.RecommendationImpact | undefined;
      setImpact(value?: Recommendation.RecommendationImpact): TargetCpaOptInRecommendationOption;
      hasImpact(): boolean;
      clearImpact(): TargetCpaOptInRecommendationOption;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TargetCpaOptInRecommendationOption.AsObject;
      static toObject(includeInstance: boolean, msg: TargetCpaOptInRecommendationOption): TargetCpaOptInRecommendationOption.AsObject;
      static serializeBinaryToWriter(message: TargetCpaOptInRecommendationOption, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TargetCpaOptInRecommendationOption;
      static deserializeBinaryFromReader(message: TargetCpaOptInRecommendationOption, reader: jspb.BinaryReader): TargetCpaOptInRecommendationOption;
    }

    export namespace TargetCpaOptInRecommendationOption {
      export type AsObject = {
        goal: google_ads_googleads_v0_enums_target_cpa_opt_in_recommendation_goal_pb.TargetCpaOptInRecommendationGoalEnum.TargetCpaOptInRecommendationGoal,
        targetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        requiredCampaignBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        impact?: Recommendation.RecommendationImpact.AsObject,
      }
    }

  }


  export enum RecommendationCase { 
    RECOMMENDATION_NOT_SET = 0,
    CAMPAIGN_BUDGET_RECOMMENDATION = 4,
    KEYWORD_RECOMMENDATION = 8,
    TEXT_AD_RECOMMENDATION = 9,
    TARGET_CPA_OPT_IN_RECOMMENDATION = 10,
  }
}

