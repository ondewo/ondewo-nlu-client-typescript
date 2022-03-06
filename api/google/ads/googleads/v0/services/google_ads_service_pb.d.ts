import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_metrics_pb from '../../../../../google/ads/googleads/v0/common/metrics_pb';
import * as google_ads_googleads_v0_enums_ad_network_type_pb from '../../../../../google/ads/googleads/v0/enums/ad_network_type_pb';
import * as google_ads_googleads_v0_enums_day_of_week_pb from '../../../../../google/ads/googleads/v0/enums/day_of_week_pb';
import * as google_ads_googleads_v0_enums_device_pb from '../../../../../google/ads/googleads/v0/enums/device_pb';
import * as google_ads_googleads_v0_enums_slot_pb from '../../../../../google/ads/googleads/v0/enums/slot_pb';
import * as google_ads_googleads_v0_resources_ad_group_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_pb';
import * as google_ads_googleads_v0_resources_ad_group_ad_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_ad_pb';
import * as google_ads_googleads_v0_resources_ad_group_bid_modifier_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_bid_modifier_pb';
import * as google_ads_googleads_v0_resources_ad_group_criterion_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_criterion_pb';
import * as google_ads_googleads_v0_resources_bidding_strategy_pb from '../../../../../google/ads/googleads/v0/resources/bidding_strategy_pb';
import * as google_ads_googleads_v0_resources_campaign_pb from '../../../../../google/ads/googleads/v0/resources/campaign_pb';
import * as google_ads_googleads_v0_resources_campaign_budget_pb from '../../../../../google/ads/googleads/v0/resources/campaign_budget_pb';
import * as google_ads_googleads_v0_resources_campaign_criterion_pb from '../../../../../google/ads/googleads/v0/resources/campaign_criterion_pb';
import * as google_ads_googleads_v0_resources_customer_pb from '../../../../../google/ads/googleads/v0/resources/customer_pb';
import * as google_ads_googleads_v0_resources_geo_target_constant_pb from '../../../../../google/ads/googleads/v0/resources/geo_target_constant_pb';
import * as google_ads_googleads_v0_resources_keyword_view_pb from '../../../../../google/ads/googleads/v0/resources/keyword_view_pb';
import * as google_ads_googleads_v0_resources_recommendation_pb from '../../../../../google/ads/googleads/v0/resources/recommendation_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class SearchGoogleAdsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): SearchGoogleAdsRequest;

  getQuery(): string;
  setQuery(value: string): SearchGoogleAdsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchGoogleAdsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchGoogleAdsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoogleAdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoogleAdsRequest): SearchGoogleAdsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchGoogleAdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoogleAdsRequest;
  static deserializeBinaryFromReader(message: SearchGoogleAdsRequest, reader: jspb.BinaryReader): SearchGoogleAdsRequest;
}

export namespace SearchGoogleAdsRequest {
  export type AsObject = {
    customerId: string,
    query: string,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchGoogleAdsResponse extends jspb.Message {
  getResultsList(): Array<GoogleAdsRow>;
  setResultsList(value: Array<GoogleAdsRow>): SearchGoogleAdsResponse;
  clearResultsList(): SearchGoogleAdsResponse;
  addResults(value?: GoogleAdsRow, index?: number): GoogleAdsRow;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchGoogleAdsResponse;

  getTotalResultsCount(): number;
  setTotalResultsCount(value: number): SearchGoogleAdsResponse;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): SearchGoogleAdsResponse;
  hasFieldMask(): boolean;
  clearFieldMask(): SearchGoogleAdsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoogleAdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoogleAdsResponse): SearchGoogleAdsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchGoogleAdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoogleAdsResponse;
  static deserializeBinaryFromReader(message: SearchGoogleAdsResponse, reader: jspb.BinaryReader): SearchGoogleAdsResponse;
}

export namespace SearchGoogleAdsResponse {
  export type AsObject = {
    resultsList: Array<GoogleAdsRow.AsObject>,
    nextPageToken: string,
    totalResultsCount: number,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GoogleAdsRow extends jspb.Message {
  getAdGroup(): google_ads_googleads_v0_resources_ad_group_pb.AdGroup | undefined;
  setAdGroup(value?: google_ads_googleads_v0_resources_ad_group_pb.AdGroup): GoogleAdsRow;
  hasAdGroup(): boolean;
  clearAdGroup(): GoogleAdsRow;

  getAdGroupAd(): google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd | undefined;
  setAdGroupAd(value?: google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd): GoogleAdsRow;
  hasAdGroupAd(): boolean;
  clearAdGroupAd(): GoogleAdsRow;

  getAdGroupBidModifier(): google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier | undefined;
  setAdGroupBidModifier(value?: google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier): GoogleAdsRow;
  hasAdGroupBidModifier(): boolean;
  clearAdGroupBidModifier(): GoogleAdsRow;

  getAdGroupCriterion(): google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion | undefined;
  setAdGroupCriterion(value?: google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion): GoogleAdsRow;
  hasAdGroupCriterion(): boolean;
  clearAdGroupCriterion(): GoogleAdsRow;

  getBiddingStrategy(): google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy | undefined;
  setBiddingStrategy(value?: google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy): GoogleAdsRow;
  hasBiddingStrategy(): boolean;
  clearBiddingStrategy(): GoogleAdsRow;

  getCampaignBudget(): google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget | undefined;
  setCampaignBudget(value?: google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget): GoogleAdsRow;
  hasCampaignBudget(): boolean;
  clearCampaignBudget(): GoogleAdsRow;

  getCampaign(): google_ads_googleads_v0_resources_campaign_pb.Campaign | undefined;
  setCampaign(value?: google_ads_googleads_v0_resources_campaign_pb.Campaign): GoogleAdsRow;
  hasCampaign(): boolean;
  clearCampaign(): GoogleAdsRow;

  getCampaignCriterion(): google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion | undefined;
  setCampaignCriterion(value?: google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion): GoogleAdsRow;
  hasCampaignCriterion(): boolean;
  clearCampaignCriterion(): GoogleAdsRow;

  getCustomer(): google_ads_googleads_v0_resources_customer_pb.Customer | undefined;
  setCustomer(value?: google_ads_googleads_v0_resources_customer_pb.Customer): GoogleAdsRow;
  hasCustomer(): boolean;
  clearCustomer(): GoogleAdsRow;

  getGeoTargetConstant(): google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant | undefined;
  setGeoTargetConstant(value?: google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant): GoogleAdsRow;
  hasGeoTargetConstant(): boolean;
  clearGeoTargetConstant(): GoogleAdsRow;

  getKeywordView(): google_ads_googleads_v0_resources_keyword_view_pb.KeywordView | undefined;
  setKeywordView(value?: google_ads_googleads_v0_resources_keyword_view_pb.KeywordView): GoogleAdsRow;
  hasKeywordView(): boolean;
  clearKeywordView(): GoogleAdsRow;

  getRecommendation(): google_ads_googleads_v0_resources_recommendation_pb.Recommendation | undefined;
  setRecommendation(value?: google_ads_googleads_v0_resources_recommendation_pb.Recommendation): GoogleAdsRow;
  hasRecommendation(): boolean;
  clearRecommendation(): GoogleAdsRow;

  getMetrics(): google_ads_googleads_v0_common_metrics_pb.Metrics | undefined;
  setMetrics(value?: google_ads_googleads_v0_common_metrics_pb.Metrics): GoogleAdsRow;
  hasMetrics(): boolean;
  clearMetrics(): GoogleAdsRow;

  getAdNetworkType(): google_ads_googleads_v0_enums_ad_network_type_pb.AdNetworkTypeEnum.AdNetworkType;
  setAdNetworkType(value: google_ads_googleads_v0_enums_ad_network_type_pb.AdNetworkTypeEnum.AdNetworkType): GoogleAdsRow;

  getDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDate(value?: google_protobuf_wrappers_pb.StringValue): GoogleAdsRow;
  hasDate(): boolean;
  clearDate(): GoogleAdsRow;

  getDayOfWeek(): google_ads_googleads_v0_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek;
  setDayOfWeek(value: google_ads_googleads_v0_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek): GoogleAdsRow;

  getDevice(): google_ads_googleads_v0_enums_device_pb.DeviceEnum.Device;
  setDevice(value: google_ads_googleads_v0_enums_device_pb.DeviceEnum.Device): GoogleAdsRow;

  getHour(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setHour(value?: google_protobuf_wrappers_pb.Int32Value): GoogleAdsRow;
  hasHour(): boolean;
  clearHour(): GoogleAdsRow;

  getMonth(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMonth(value?: google_protobuf_wrappers_pb.StringValue): GoogleAdsRow;
  hasMonth(): boolean;
  clearMonth(): GoogleAdsRow;

  getQuarter(): google_protobuf_wrappers_pb.StringValue | undefined;
  setQuarter(value?: google_protobuf_wrappers_pb.StringValue): GoogleAdsRow;
  hasQuarter(): boolean;
  clearQuarter(): GoogleAdsRow;

  getSlot(): google_ads_googleads_v0_enums_slot_pb.SlotEnum.Slot;
  setSlot(value: google_ads_googleads_v0_enums_slot_pb.SlotEnum.Slot): GoogleAdsRow;

  getWeek(): google_protobuf_wrappers_pb.StringValue | undefined;
  setWeek(value?: google_protobuf_wrappers_pb.StringValue): GoogleAdsRow;
  hasWeek(): boolean;
  clearWeek(): GoogleAdsRow;

  getYear(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setYear(value?: google_protobuf_wrappers_pb.Int32Value): GoogleAdsRow;
  hasYear(): boolean;
  clearYear(): GoogleAdsRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsRow.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsRow): GoogleAdsRow.AsObject;
  static serializeBinaryToWriter(message: GoogleAdsRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsRow;
  static deserializeBinaryFromReader(message: GoogleAdsRow, reader: jspb.BinaryReader): GoogleAdsRow;
}

export namespace GoogleAdsRow {
  export type AsObject = {
    adGroup?: google_ads_googleads_v0_resources_ad_group_pb.AdGroup.AsObject,
    adGroupAd?: google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd.AsObject,
    adGroupBidModifier?: google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier.AsObject,
    adGroupCriterion?: google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion.AsObject,
    biddingStrategy?: google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy.AsObject,
    campaignBudget?: google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget.AsObject,
    campaign?: google_ads_googleads_v0_resources_campaign_pb.Campaign.AsObject,
    campaignCriterion?: google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion.AsObject,
    customer?: google_ads_googleads_v0_resources_customer_pb.Customer.AsObject,
    geoTargetConstant?: google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant.AsObject,
    keywordView?: google_ads_googleads_v0_resources_keyword_view_pb.KeywordView.AsObject,
    recommendation?: google_ads_googleads_v0_resources_recommendation_pb.Recommendation.AsObject,
    metrics?: google_ads_googleads_v0_common_metrics_pb.Metrics.AsObject,
    adNetworkType: google_ads_googleads_v0_enums_ad_network_type_pb.AdNetworkTypeEnum.AdNetworkType,
    date?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dayOfWeek: google_ads_googleads_v0_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek,
    device: google_ads_googleads_v0_enums_device_pb.DeviceEnum.Device,
    hour?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    month?: google_protobuf_wrappers_pb.StringValue.AsObject,
    quarter?: google_protobuf_wrappers_pb.StringValue.AsObject,
    slot: google_ads_googleads_v0_enums_slot_pb.SlotEnum.Slot,
    week?: google_protobuf_wrappers_pb.StringValue.AsObject,
    year?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

