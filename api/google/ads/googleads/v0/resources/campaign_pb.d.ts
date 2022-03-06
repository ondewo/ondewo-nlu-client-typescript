import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_bidding_pb from '../../../../../google/ads/googleads/v0/common/bidding_pb';
import * as google_ads_googleads_v0_common_custom_parameter_pb from '../../../../../google/ads/googleads/v0/common/custom_parameter_pb';
import * as google_ads_googleads_v0_enums_ad_serving_optimization_status_pb from '../../../../../google/ads/googleads/v0/enums/ad_serving_optimization_status_pb';
import * as google_ads_googleads_v0_enums_advertising_channel_sub_type_pb from '../../../../../google/ads/googleads/v0/enums/advertising_channel_sub_type_pb';
import * as google_ads_googleads_v0_enums_advertising_channel_type_pb from '../../../../../google/ads/googleads/v0/enums/advertising_channel_type_pb';
import * as google_ads_googleads_v0_enums_bidding_strategy_type_pb from '../../../../../google/ads/googleads/v0/enums/bidding_strategy_type_pb';
import * as google_ads_googleads_v0_enums_campaign_serving_status_pb from '../../../../../google/ads/googleads/v0/enums/campaign_serving_status_pb';
import * as google_ads_googleads_v0_enums_campaign_status_pb from '../../../../../google/ads/googleads/v0/enums/campaign_status_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Campaign extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): Campaign;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): Campaign;
  hasId(): boolean;
  clearId(): Campaign;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): Campaign;
  hasName(): boolean;
  clearName(): Campaign;

  getStatus(): google_ads_googleads_v0_enums_campaign_status_pb.CampaignStatusEnum.CampaignStatus;
  setStatus(value: google_ads_googleads_v0_enums_campaign_status_pb.CampaignStatusEnum.CampaignStatus): Campaign;

  getServingStatus(): google_ads_googleads_v0_enums_campaign_serving_status_pb.CampaignServingStatusEnum.CampaignServingStatus;
  setServingStatus(value: google_ads_googleads_v0_enums_campaign_serving_status_pb.CampaignServingStatusEnum.CampaignServingStatus): Campaign;

  getAdServingOptimizationStatus(): google_ads_googleads_v0_enums_ad_serving_optimization_status_pb.AdServingOptimizationStatusEnum.AdServingOptimizationStatus;
  setAdServingOptimizationStatus(value: google_ads_googleads_v0_enums_ad_serving_optimization_status_pb.AdServingOptimizationStatusEnum.AdServingOptimizationStatus): Campaign;

  getAdvertisingChannelType(): google_ads_googleads_v0_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType;
  setAdvertisingChannelType(value: google_ads_googleads_v0_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType): Campaign;

  getAdvertisingChannelSubType(): google_ads_googleads_v0_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType;
  setAdvertisingChannelSubType(value: google_ads_googleads_v0_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType): Campaign;

  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): Campaign;
  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): Campaign;

  getUrlCustomParametersList(): Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter>): Campaign;
  clearUrlCustomParametersList(): Campaign;
  addUrlCustomParameters(value?: google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter;

  getNetworkSettings(): Campaign.NetworkSettings | undefined;
  setNetworkSettings(value?: Campaign.NetworkSettings): Campaign;
  hasNetworkSettings(): boolean;
  clearNetworkSettings(): Campaign;

  getHotelSetting(): Campaign.HotelSettingInfo | undefined;
  setHotelSetting(value?: Campaign.HotelSettingInfo): Campaign;
  hasHotelSetting(): boolean;
  clearHotelSetting(): Campaign;

  getDynamicSearchAdsSetting(): Campaign.DynamicSearchAdsSetting | undefined;
  setDynamicSearchAdsSetting(value?: Campaign.DynamicSearchAdsSetting): Campaign;
  hasDynamicSearchAdsSetting(): boolean;
  clearDynamicSearchAdsSetting(): Campaign;

  getCampaignBudget(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaignBudget(value?: google_protobuf_wrappers_pb.StringValue): Campaign;
  hasCampaignBudget(): boolean;
  clearCampaignBudget(): Campaign;

  getBiddingStrategyType(): google_ads_googleads_v0_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyType;
  setBiddingStrategyType(value: google_ads_googleads_v0_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyType): Campaign;

  getStartDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDate(value?: google_protobuf_wrappers_pb.StringValue): Campaign;
  hasStartDate(): boolean;
  clearStartDate(): Campaign;

  getEndDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDate(value?: google_protobuf_wrappers_pb.StringValue): Campaign;
  hasEndDate(): boolean;
  clearEndDate(): Campaign;

  getBiddingStrategy(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBiddingStrategy(value?: google_protobuf_wrappers_pb.StringValue): Campaign;
  hasBiddingStrategy(): boolean;
  clearBiddingStrategy(): Campaign;

  getManualCpc(): google_ads_googleads_v0_common_bidding_pb.ManualCpc | undefined;
  setManualCpc(value?: google_ads_googleads_v0_common_bidding_pb.ManualCpc): Campaign;
  hasManualCpc(): boolean;
  clearManualCpc(): Campaign;

  getManualCpm(): google_ads_googleads_v0_common_bidding_pb.ManualCpm | undefined;
  setManualCpm(value?: google_ads_googleads_v0_common_bidding_pb.ManualCpm): Campaign;
  hasManualCpm(): boolean;
  clearManualCpm(): Campaign;

  getMaximizeConversions(): google_ads_googleads_v0_common_bidding_pb.MaximizeConversions | undefined;
  setMaximizeConversions(value?: google_ads_googleads_v0_common_bidding_pb.MaximizeConversions): Campaign;
  hasMaximizeConversions(): boolean;
  clearMaximizeConversions(): Campaign;

  getMaximizeConversionValue(): google_ads_googleads_v0_common_bidding_pb.MaximizeConversionValue | undefined;
  setMaximizeConversionValue(value?: google_ads_googleads_v0_common_bidding_pb.MaximizeConversionValue): Campaign;
  hasMaximizeConversionValue(): boolean;
  clearMaximizeConversionValue(): Campaign;

  getTargetCpa(): google_ads_googleads_v0_common_bidding_pb.TargetCpa | undefined;
  setTargetCpa(value?: google_ads_googleads_v0_common_bidding_pb.TargetCpa): Campaign;
  hasTargetCpa(): boolean;
  clearTargetCpa(): Campaign;

  getTargetRoas(): google_ads_googleads_v0_common_bidding_pb.TargetRoas | undefined;
  setTargetRoas(value?: google_ads_googleads_v0_common_bidding_pb.TargetRoas): Campaign;
  hasTargetRoas(): boolean;
  clearTargetRoas(): Campaign;

  getTargetSpend(): google_ads_googleads_v0_common_bidding_pb.TargetSpend | undefined;
  setTargetSpend(value?: google_ads_googleads_v0_common_bidding_pb.TargetSpend): Campaign;
  hasTargetSpend(): boolean;
  clearTargetSpend(): Campaign;

  getPercentCpc(): google_ads_googleads_v0_common_bidding_pb.PercentCpc | undefined;
  setPercentCpc(value?: google_ads_googleads_v0_common_bidding_pb.PercentCpc): Campaign;
  hasPercentCpc(): boolean;
  clearPercentCpc(): Campaign;

  getCampaignBiddingStrategyCase(): Campaign.CampaignBiddingStrategyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Campaign.AsObject;
  static toObject(includeInstance: boolean, msg: Campaign): Campaign.AsObject;
  static serializeBinaryToWriter(message: Campaign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Campaign;
  static deserializeBinaryFromReader(message: Campaign, reader: jspb.BinaryReader): Campaign;
}

export namespace Campaign {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v0_enums_campaign_status_pb.CampaignStatusEnum.CampaignStatus,
    servingStatus: google_ads_googleads_v0_enums_campaign_serving_status_pb.CampaignServingStatusEnum.CampaignServingStatus,
    adServingOptimizationStatus: google_ads_googleads_v0_enums_ad_serving_optimization_status_pb.AdServingOptimizationStatusEnum.AdServingOptimizationStatus,
    advertisingChannelType: google_ads_googleads_v0_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType,
    advertisingChannelSubType: google_ads_googleads_v0_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter.AsObject>,
    networkSettings?: Campaign.NetworkSettings.AsObject,
    hotelSetting?: Campaign.HotelSettingInfo.AsObject,
    dynamicSearchAdsSetting?: Campaign.DynamicSearchAdsSetting.AsObject,
    campaignBudget?: google_protobuf_wrappers_pb.StringValue.AsObject,
    biddingStrategyType: google_ads_googleads_v0_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyType,
    startDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    biddingStrategy?: google_protobuf_wrappers_pb.StringValue.AsObject,
    manualCpc?: google_ads_googleads_v0_common_bidding_pb.ManualCpc.AsObject,
    manualCpm?: google_ads_googleads_v0_common_bidding_pb.ManualCpm.AsObject,
    maximizeConversions?: google_ads_googleads_v0_common_bidding_pb.MaximizeConversions.AsObject,
    maximizeConversionValue?: google_ads_googleads_v0_common_bidding_pb.MaximizeConversionValue.AsObject,
    targetCpa?: google_ads_googleads_v0_common_bidding_pb.TargetCpa.AsObject,
    targetRoas?: google_ads_googleads_v0_common_bidding_pb.TargetRoas.AsObject,
    targetSpend?: google_ads_googleads_v0_common_bidding_pb.TargetSpend.AsObject,
    percentCpc?: google_ads_googleads_v0_common_bidding_pb.PercentCpc.AsObject,
  }

  export class NetworkSettings extends jspb.Message {
    getTargetGoogleSearch(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTargetGoogleSearch(value?: google_protobuf_wrappers_pb.BoolValue): NetworkSettings;
    hasTargetGoogleSearch(): boolean;
    clearTargetGoogleSearch(): NetworkSettings;

    getTargetSearchNetwork(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTargetSearchNetwork(value?: google_protobuf_wrappers_pb.BoolValue): NetworkSettings;
    hasTargetSearchNetwork(): boolean;
    clearTargetSearchNetwork(): NetworkSettings;

    getTargetContentNetwork(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTargetContentNetwork(value?: google_protobuf_wrappers_pb.BoolValue): NetworkSettings;
    hasTargetContentNetwork(): boolean;
    clearTargetContentNetwork(): NetworkSettings;

    getTargetPartnerSearchNetwork(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTargetPartnerSearchNetwork(value?: google_protobuf_wrappers_pb.BoolValue): NetworkSettings;
    hasTargetPartnerSearchNetwork(): boolean;
    clearTargetPartnerSearchNetwork(): NetworkSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSettings.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSettings): NetworkSettings.AsObject;
    static serializeBinaryToWriter(message: NetworkSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSettings;
    static deserializeBinaryFromReader(message: NetworkSettings, reader: jspb.BinaryReader): NetworkSettings;
  }

  export namespace NetworkSettings {
    export type AsObject = {
      targetGoogleSearch?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      targetSearchNetwork?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      targetContentNetwork?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      targetPartnerSearchNetwork?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
  }


  export class HotelSettingInfo extends jspb.Message {
    getHotelCenterId(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setHotelCenterId(value?: google_protobuf_wrappers_pb.Int64Value): HotelSettingInfo;
    hasHotelCenterId(): boolean;
    clearHotelCenterId(): HotelSettingInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotelSettingInfo.AsObject;
    static toObject(includeInstance: boolean, msg: HotelSettingInfo): HotelSettingInfo.AsObject;
    static serializeBinaryToWriter(message: HotelSettingInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotelSettingInfo;
    static deserializeBinaryFromReader(message: HotelSettingInfo, reader: jspb.BinaryReader): HotelSettingInfo;
  }

  export namespace HotelSettingInfo {
    export type AsObject = {
      hotelCenterId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export class DynamicSearchAdsSetting extends jspb.Message {
    getDomainName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDomainName(value?: google_protobuf_wrappers_pb.StringValue): DynamicSearchAdsSetting;
    hasDomainName(): boolean;
    clearDomainName(): DynamicSearchAdsSetting;

    getLanguageCode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setLanguageCode(value?: google_protobuf_wrappers_pb.StringValue): DynamicSearchAdsSetting;
    hasLanguageCode(): boolean;
    clearLanguageCode(): DynamicSearchAdsSetting;

    getUseSuppliedUrlsOnly(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseSuppliedUrlsOnly(value?: google_protobuf_wrappers_pb.BoolValue): DynamicSearchAdsSetting;
    hasUseSuppliedUrlsOnly(): boolean;
    clearUseSuppliedUrlsOnly(): DynamicSearchAdsSetting;

    getFeedIdsList(): Array<google_protobuf_wrappers_pb.Int64Value>;
    setFeedIdsList(value: Array<google_protobuf_wrappers_pb.Int64Value>): DynamicSearchAdsSetting;
    clearFeedIdsList(): DynamicSearchAdsSetting;
    addFeedIds(value?: google_protobuf_wrappers_pb.Int64Value, index?: number): google_protobuf_wrappers_pb.Int64Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicSearchAdsSetting.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicSearchAdsSetting): DynamicSearchAdsSetting.AsObject;
    static serializeBinaryToWriter(message: DynamicSearchAdsSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicSearchAdsSetting;
    static deserializeBinaryFromReader(message: DynamicSearchAdsSetting, reader: jspb.BinaryReader): DynamicSearchAdsSetting;
  }

  export namespace DynamicSearchAdsSetting {
    export type AsObject = {
      domainName?: google_protobuf_wrappers_pb.StringValue.AsObject,
      languageCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
      useSuppliedUrlsOnly?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      feedIdsList: Array<google_protobuf_wrappers_pb.Int64Value.AsObject>,
    }
  }


  export enum CampaignBiddingStrategyCase { 
    CAMPAIGN_BIDDING_STRATEGY_NOT_SET = 0,
    BIDDING_STRATEGY = 23,
    MANUAL_CPC = 24,
    MANUAL_CPM = 25,
    MAXIMIZE_CONVERSIONS = 30,
    MAXIMIZE_CONVERSION_VALUE = 31,
    TARGET_CPA = 26,
    TARGET_ROAS = 29,
    TARGET_SPEND = 27,
    PERCENT_CPC = 34,
  }
}

