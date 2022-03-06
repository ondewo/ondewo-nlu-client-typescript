import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_policy_pb from '../../../../../google/ads/googleads/v0/common/policy_pb';
import * as google_ads_googleads_v0_common_value_pb from '../../../../../google/ads/googleads/v0/common/value_pb';
import * as google_ads_googleads_v0_errors_ad_customizer_error_pb from '../../../../../google/ads/googleads/v0/errors/ad_customizer_error_pb';
import * as google_ads_googleads_v0_errors_ad_error_pb from '../../../../../google/ads/googleads/v0/errors/ad_error_pb';
import * as google_ads_googleads_v0_errors_ad_group_ad_error_pb from '../../../../../google/ads/googleads/v0/errors/ad_group_ad_error_pb';
import * as google_ads_googleads_v0_errors_ad_group_bid_modifier_error_pb from '../../../../../google/ads/googleads/v0/errors/ad_group_bid_modifier_error_pb';
import * as google_ads_googleads_v0_errors_ad_group_criterion_error_pb from '../../../../../google/ads/googleads/v0/errors/ad_group_criterion_error_pb';
import * as google_ads_googleads_v0_errors_ad_group_error_pb from '../../../../../google/ads/googleads/v0/errors/ad_group_error_pb';
import * as google_ads_googleads_v0_errors_ad_sharing_error_pb from '../../../../../google/ads/googleads/v0/errors/ad_sharing_error_pb';
import * as google_ads_googleads_v0_errors_adx_error_pb from '../../../../../google/ads/googleads/v0/errors/adx_error_pb';
import * as google_ads_googleads_v0_errors_authentication_error_pb from '../../../../../google/ads/googleads/v0/errors/authentication_error_pb';
import * as google_ads_googleads_v0_errors_authorization_error_pb from '../../../../../google/ads/googleads/v0/errors/authorization_error_pb';
import * as google_ads_googleads_v0_errors_bidding_error_pb from '../../../../../google/ads/googleads/v0/errors/bidding_error_pb';
import * as google_ads_googleads_v0_errors_bidding_strategy_error_pb from '../../../../../google/ads/googleads/v0/errors/bidding_strategy_error_pb';
import * as google_ads_googleads_v0_errors_campaign_budget_error_pb from '../../../../../google/ads/googleads/v0/errors/campaign_budget_error_pb';
import * as google_ads_googleads_v0_errors_campaign_criterion_error_pb from '../../../../../google/ads/googleads/v0/errors/campaign_criterion_error_pb';
import * as google_ads_googleads_v0_errors_campaign_error_pb from '../../../../../google/ads/googleads/v0/errors/campaign_error_pb';
import * as google_ads_googleads_v0_errors_collection_size_error_pb from '../../../../../google/ads/googleads/v0/errors/collection_size_error_pb';
import * as google_ads_googleads_v0_errors_context_error_pb from '../../../../../google/ads/googleads/v0/errors/context_error_pb';
import * as google_ads_googleads_v0_errors_criterion_error_pb from '../../../../../google/ads/googleads/v0/errors/criterion_error_pb';
import * as google_ads_googleads_v0_errors_date_error_pb from '../../../../../google/ads/googleads/v0/errors/date_error_pb';
import * as google_ads_googleads_v0_errors_date_range_error_pb from '../../../../../google/ads/googleads/v0/errors/date_range_error_pb';
import * as google_ads_googleads_v0_errors_distinct_error_pb from '../../../../../google/ads/googleads/v0/errors/distinct_error_pb';
import * as google_ads_googleads_v0_errors_feed_attribute_reference_error_pb from '../../../../../google/ads/googleads/v0/errors/feed_attribute_reference_error_pb';
import * as google_ads_googleads_v0_errors_field_error_pb from '../../../../../google/ads/googleads/v0/errors/field_error_pb';
import * as google_ads_googleads_v0_errors_field_mask_error_pb from '../../../../../google/ads/googleads/v0/errors/field_mask_error_pb';
import * as google_ads_googleads_v0_errors_function_error_pb from '../../../../../google/ads/googleads/v0/errors/function_error_pb';
import * as google_ads_googleads_v0_errors_function_parsing_error_pb from '../../../../../google/ads/googleads/v0/errors/function_parsing_error_pb';
import * as google_ads_googleads_v0_errors_id_error_pb from '../../../../../google/ads/googleads/v0/errors/id_error_pb';
import * as google_ads_googleads_v0_errors_image_error_pb from '../../../../../google/ads/googleads/v0/errors/image_error_pb';
import * as google_ads_googleads_v0_errors_internal_error_pb from '../../../../../google/ads/googleads/v0/errors/internal_error_pb';
import * as google_ads_googleads_v0_errors_list_operation_error_pb from '../../../../../google/ads/googleads/v0/errors/list_operation_error_pb';
import * as google_ads_googleads_v0_errors_media_bundle_error_pb from '../../../../../google/ads/googleads/v0/errors/media_bundle_error_pb';
import * as google_ads_googleads_v0_errors_media_error_pb from '../../../../../google/ads/googleads/v0/errors/media_error_pb';
import * as google_ads_googleads_v0_errors_multiplier_error_pb from '../../../../../google/ads/googleads/v0/errors/multiplier_error_pb';
import * as google_ads_googleads_v0_errors_mutate_error_pb from '../../../../../google/ads/googleads/v0/errors/mutate_error_pb';
import * as google_ads_googleads_v0_errors_new_resource_creation_error_pb from '../../../../../google/ads/googleads/v0/errors/new_resource_creation_error_pb';
import * as google_ads_googleads_v0_errors_not_empty_error_pb from '../../../../../google/ads/googleads/v0/errors/not_empty_error_pb';
import * as google_ads_googleads_v0_errors_null_error_pb from '../../../../../google/ads/googleads/v0/errors/null_error_pb';
import * as google_ads_googleads_v0_errors_operation_access_denied_error_pb from '../../../../../google/ads/googleads/v0/errors/operation_access_denied_error_pb';
import * as google_ads_googleads_v0_errors_operator_error_pb from '../../../../../google/ads/googleads/v0/errors/operator_error_pb';
import * as google_ads_googleads_v0_errors_query_error_pb from '../../../../../google/ads/googleads/v0/errors/query_error_pb';
import * as google_ads_googleads_v0_errors_quota_error_pb from '../../../../../google/ads/googleads/v0/errors/quota_error_pb';
import * as google_ads_googleads_v0_errors_range_error_pb from '../../../../../google/ads/googleads/v0/errors/range_error_pb';
import * as google_ads_googleads_v0_errors_recommendation_error_pb from '../../../../../google/ads/googleads/v0/errors/recommendation_error_pb';
import * as google_ads_googleads_v0_errors_region_code_error_pb from '../../../../../google/ads/googleads/v0/errors/region_code_error_pb';
import * as google_ads_googleads_v0_errors_request_error_pb from '../../../../../google/ads/googleads/v0/errors/request_error_pb';
import * as google_ads_googleads_v0_errors_resource_access_denied_error_pb from '../../../../../google/ads/googleads/v0/errors/resource_access_denied_error_pb';
import * as google_ads_googleads_v0_errors_resource_count_limit_exceeded_error_pb from '../../../../../google/ads/googleads/v0/errors/resource_count_limit_exceeded_error_pb';
import * as google_ads_googleads_v0_errors_setting_error_pb from '../../../../../google/ads/googleads/v0/errors/setting_error_pb';
import * as google_ads_googleads_v0_errors_string_format_error_pb from '../../../../../google/ads/googleads/v0/errors/string_format_error_pb';
import * as google_ads_googleads_v0_errors_string_length_error_pb from '../../../../../google/ads/googleads/v0/errors/string_length_error_pb';
import * as google_ads_googleads_v0_errors_url_field_error_pb from '../../../../../google/ads/googleads/v0/errors/url_field_error_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class GoogleAdsFailure extends jspb.Message {
  getErrorsList(): Array<GoogleAdsError>;
  setErrorsList(value: Array<GoogleAdsError>): GoogleAdsFailure;
  clearErrorsList(): GoogleAdsFailure;
  addErrors(value?: GoogleAdsError, index?: number): GoogleAdsError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsFailure.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsFailure): GoogleAdsFailure.AsObject;
  static serializeBinaryToWriter(message: GoogleAdsFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsFailure;
  static deserializeBinaryFromReader(message: GoogleAdsFailure, reader: jspb.BinaryReader): GoogleAdsFailure;
}

export namespace GoogleAdsFailure {
  export type AsObject = {
    errorsList: Array<GoogleAdsError.AsObject>,
  }
}

export class GoogleAdsError extends jspb.Message {
  getErrorCode(): ErrorCode | undefined;
  setErrorCode(value?: ErrorCode): GoogleAdsError;
  hasErrorCode(): boolean;
  clearErrorCode(): GoogleAdsError;

  getMessage(): string;
  setMessage(value: string): GoogleAdsError;

  getTrigger(): google_ads_googleads_v0_common_value_pb.Value | undefined;
  setTrigger(value?: google_ads_googleads_v0_common_value_pb.Value): GoogleAdsError;
  hasTrigger(): boolean;
  clearTrigger(): GoogleAdsError;

  getLocation(): ErrorLocation | undefined;
  setLocation(value?: ErrorLocation): GoogleAdsError;
  hasLocation(): boolean;
  clearLocation(): GoogleAdsError;

  getDetails(): ErrorDetails | undefined;
  setDetails(value?: ErrorDetails): GoogleAdsError;
  hasDetails(): boolean;
  clearDetails(): GoogleAdsError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsError.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsError): GoogleAdsError.AsObject;
  static serializeBinaryToWriter(message: GoogleAdsError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsError;
  static deserializeBinaryFromReader(message: GoogleAdsError, reader: jspb.BinaryReader): GoogleAdsError;
}

export namespace GoogleAdsError {
  export type AsObject = {
    errorCode?: ErrorCode.AsObject,
    message: string,
    trigger?: google_ads_googleads_v0_common_value_pb.Value.AsObject,
    location?: ErrorLocation.AsObject,
    details?: ErrorDetails.AsObject,
  }
}

export class ErrorCode extends jspb.Message {
  getRequestError(): google_ads_googleads_v0_errors_request_error_pb.RequestErrorEnum.RequestError;
  setRequestError(value: google_ads_googleads_v0_errors_request_error_pb.RequestErrorEnum.RequestError): ErrorCode;

  getBiddingStrategyError(): google_ads_googleads_v0_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyError;
  setBiddingStrategyError(value: google_ads_googleads_v0_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyError): ErrorCode;

  getUrlFieldError(): google_ads_googleads_v0_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldError;
  setUrlFieldError(value: google_ads_googleads_v0_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldError): ErrorCode;

  getListOperationError(): google_ads_googleads_v0_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationError;
  setListOperationError(value: google_ads_googleads_v0_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationError): ErrorCode;

  getQueryError(): google_ads_googleads_v0_errors_query_error_pb.QueryErrorEnum.QueryError;
  setQueryError(value: google_ads_googleads_v0_errors_query_error_pb.QueryErrorEnum.QueryError): ErrorCode;

  getMutateError(): google_ads_googleads_v0_errors_mutate_error_pb.MutateErrorEnum.MutateError;
  setMutateError(value: google_ads_googleads_v0_errors_mutate_error_pb.MutateErrorEnum.MutateError): ErrorCode;

  getFieldMaskError(): google_ads_googleads_v0_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskError;
  setFieldMaskError(value: google_ads_googleads_v0_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskError): ErrorCode;

  getAuthorizationError(): google_ads_googleads_v0_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationError;
  setAuthorizationError(value: google_ads_googleads_v0_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationError): ErrorCode;

  getInternalError(): google_ads_googleads_v0_errors_internal_error_pb.InternalErrorEnum.InternalError;
  setInternalError(value: google_ads_googleads_v0_errors_internal_error_pb.InternalErrorEnum.InternalError): ErrorCode;

  getQuotaError(): google_ads_googleads_v0_errors_quota_error_pb.QuotaErrorEnum.QuotaError;
  setQuotaError(value: google_ads_googleads_v0_errors_quota_error_pb.QuotaErrorEnum.QuotaError): ErrorCode;

  getAdError(): google_ads_googleads_v0_errors_ad_error_pb.AdErrorEnum.AdError;
  setAdError(value: google_ads_googleads_v0_errors_ad_error_pb.AdErrorEnum.AdError): ErrorCode;

  getAdGroupError(): google_ads_googleads_v0_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupError;
  setAdGroupError(value: google_ads_googleads_v0_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupError): ErrorCode;

  getCampaignBudgetError(): google_ads_googleads_v0_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetError;
  setCampaignBudgetError(value: google_ads_googleads_v0_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetError): ErrorCode;

  getCampaignError(): google_ads_googleads_v0_errors_campaign_error_pb.CampaignErrorEnum.CampaignError;
  setCampaignError(value: google_ads_googleads_v0_errors_campaign_error_pb.CampaignErrorEnum.CampaignError): ErrorCode;

  getAuthenticationError(): google_ads_googleads_v0_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationError;
  setAuthenticationError(value: google_ads_googleads_v0_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationError): ErrorCode;

  getAdGroupCriterionError(): google_ads_googleads_v0_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionError;
  setAdGroupCriterionError(value: google_ads_googleads_v0_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionError): ErrorCode;

  getAdCustomizerError(): google_ads_googleads_v0_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerError;
  setAdCustomizerError(value: google_ads_googleads_v0_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerError): ErrorCode;

  getAdGroupAdError(): google_ads_googleads_v0_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdError;
  setAdGroupAdError(value: google_ads_googleads_v0_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdError): ErrorCode;

  getAdSharingError(): google_ads_googleads_v0_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingError;
  setAdSharingError(value: google_ads_googleads_v0_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingError): ErrorCode;

  getAdxError(): google_ads_googleads_v0_errors_adx_error_pb.AdxErrorEnum.AdxError;
  setAdxError(value: google_ads_googleads_v0_errors_adx_error_pb.AdxErrorEnum.AdxError): ErrorCode;

  getBiddingError(): google_ads_googleads_v0_errors_bidding_error_pb.BiddingErrorEnum.BiddingError;
  setBiddingError(value: google_ads_googleads_v0_errors_bidding_error_pb.BiddingErrorEnum.BiddingError): ErrorCode;

  getCampaignCriterionError(): google_ads_googleads_v0_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionError;
  setCampaignCriterionError(value: google_ads_googleads_v0_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionError): ErrorCode;

  getCollectionSizeError(): google_ads_googleads_v0_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeError;
  setCollectionSizeError(value: google_ads_googleads_v0_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeError): ErrorCode;

  getCriterionError(): google_ads_googleads_v0_errors_criterion_error_pb.CriterionErrorEnum.CriterionError;
  setCriterionError(value: google_ads_googleads_v0_errors_criterion_error_pb.CriterionErrorEnum.CriterionError): ErrorCode;

  getDateError(): google_ads_googleads_v0_errors_date_error_pb.DateErrorEnum.DateError;
  setDateError(value: google_ads_googleads_v0_errors_date_error_pb.DateErrorEnum.DateError): ErrorCode;

  getDateRangeError(): google_ads_googleads_v0_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeError;
  setDateRangeError(value: google_ads_googleads_v0_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeError): ErrorCode;

  getDistinctError(): google_ads_googleads_v0_errors_distinct_error_pb.DistinctErrorEnum.DistinctError;
  setDistinctError(value: google_ads_googleads_v0_errors_distinct_error_pb.DistinctErrorEnum.DistinctError): ErrorCode;

  getFeedAttributeReferenceError(): google_ads_googleads_v0_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError;
  setFeedAttributeReferenceError(value: google_ads_googleads_v0_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError): ErrorCode;

  getFunctionError(): google_ads_googleads_v0_errors_function_error_pb.FunctionErrorEnum.FunctionError;
  setFunctionError(value: google_ads_googleads_v0_errors_function_error_pb.FunctionErrorEnum.FunctionError): ErrorCode;

  getFunctionParsingError(): google_ads_googleads_v0_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingError;
  setFunctionParsingError(value: google_ads_googleads_v0_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingError): ErrorCode;

  getIdError(): google_ads_googleads_v0_errors_id_error_pb.IdErrorEnum.IdError;
  setIdError(value: google_ads_googleads_v0_errors_id_error_pb.IdErrorEnum.IdError): ErrorCode;

  getImageError(): google_ads_googleads_v0_errors_image_error_pb.ImageErrorEnum.ImageError;
  setImageError(value: google_ads_googleads_v0_errors_image_error_pb.ImageErrorEnum.ImageError): ErrorCode;

  getMediaBundleError(): google_ads_googleads_v0_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleError;
  setMediaBundleError(value: google_ads_googleads_v0_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleError): ErrorCode;

  getMediaError(): google_ads_googleads_v0_errors_media_error_pb.MediaErrorEnum.MediaError;
  setMediaError(value: google_ads_googleads_v0_errors_media_error_pb.MediaErrorEnum.MediaError): ErrorCode;

  getMultiplierError(): google_ads_googleads_v0_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierError;
  setMultiplierError(value: google_ads_googleads_v0_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierError): ErrorCode;

  getNewResourceCreationError(): google_ads_googleads_v0_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationError;
  setNewResourceCreationError(value: google_ads_googleads_v0_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationError): ErrorCode;

  getNotEmptyError(): google_ads_googleads_v0_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyError;
  setNotEmptyError(value: google_ads_googleads_v0_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyError): ErrorCode;

  getNullError(): google_ads_googleads_v0_errors_null_error_pb.NullErrorEnum.NullError;
  setNullError(value: google_ads_googleads_v0_errors_null_error_pb.NullErrorEnum.NullError): ErrorCode;

  getOperatorError(): google_ads_googleads_v0_errors_operator_error_pb.OperatorErrorEnum.OperatorError;
  setOperatorError(value: google_ads_googleads_v0_errors_operator_error_pb.OperatorErrorEnum.OperatorError): ErrorCode;

  getRangeError(): google_ads_googleads_v0_errors_range_error_pb.RangeErrorEnum.RangeError;
  setRangeError(value: google_ads_googleads_v0_errors_range_error_pb.RangeErrorEnum.RangeError): ErrorCode;

  getRecommendationError(): google_ads_googleads_v0_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationError;
  setRecommendationError(value: google_ads_googleads_v0_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationError): ErrorCode;

  getRegionCodeError(): google_ads_googleads_v0_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeError;
  setRegionCodeError(value: google_ads_googleads_v0_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeError): ErrorCode;

  getSettingError(): google_ads_googleads_v0_errors_setting_error_pb.SettingErrorEnum.SettingError;
  setSettingError(value: google_ads_googleads_v0_errors_setting_error_pb.SettingErrorEnum.SettingError): ErrorCode;

  getStringFormatError(): google_ads_googleads_v0_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatError;
  setStringFormatError(value: google_ads_googleads_v0_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatError): ErrorCode;

  getStringLengthError(): google_ads_googleads_v0_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthError;
  setStringLengthError(value: google_ads_googleads_v0_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthError): ErrorCode;

  getOperationAccessDeniedError(): google_ads_googleads_v0_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedError;
  setOperationAccessDeniedError(value: google_ads_googleads_v0_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedError): ErrorCode;

  getResourceAccessDeniedError(): google_ads_googleads_v0_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError;
  setResourceAccessDeniedError(value: google_ads_googleads_v0_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError): ErrorCode;

  getResourceCountLimitExceededError(): google_ads_googleads_v0_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError;
  setResourceCountLimitExceededError(value: google_ads_googleads_v0_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError): ErrorCode;

  getAdGroupBidModifierError(): google_ads_googleads_v0_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierError;
  setAdGroupBidModifierError(value: google_ads_googleads_v0_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierError): ErrorCode;

  getContextError(): google_ads_googleads_v0_errors_context_error_pb.ContextErrorEnum.ContextError;
  setContextError(value: google_ads_googleads_v0_errors_context_error_pb.ContextErrorEnum.ContextError): ErrorCode;

  getFieldError(): google_ads_googleads_v0_errors_field_error_pb.FieldErrorEnum.FieldError;
  setFieldError(value: google_ads_googleads_v0_errors_field_error_pb.FieldErrorEnum.FieldError): ErrorCode;

  getErrorCodeCase(): ErrorCode.ErrorCodeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorCode): ErrorCode.AsObject;
  static serializeBinaryToWriter(message: ErrorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorCode;
  static deserializeBinaryFromReader(message: ErrorCode, reader: jspb.BinaryReader): ErrorCode;
}

export namespace ErrorCode {
  export type AsObject = {
    requestError: google_ads_googleads_v0_errors_request_error_pb.RequestErrorEnum.RequestError,
    biddingStrategyError: google_ads_googleads_v0_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyError,
    urlFieldError: google_ads_googleads_v0_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldError,
    listOperationError: google_ads_googleads_v0_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationError,
    queryError: google_ads_googleads_v0_errors_query_error_pb.QueryErrorEnum.QueryError,
    mutateError: google_ads_googleads_v0_errors_mutate_error_pb.MutateErrorEnum.MutateError,
    fieldMaskError: google_ads_googleads_v0_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskError,
    authorizationError: google_ads_googleads_v0_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationError,
    internalError: google_ads_googleads_v0_errors_internal_error_pb.InternalErrorEnum.InternalError,
    quotaError: google_ads_googleads_v0_errors_quota_error_pb.QuotaErrorEnum.QuotaError,
    adError: google_ads_googleads_v0_errors_ad_error_pb.AdErrorEnum.AdError,
    adGroupError: google_ads_googleads_v0_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupError,
    campaignBudgetError: google_ads_googleads_v0_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetError,
    campaignError: google_ads_googleads_v0_errors_campaign_error_pb.CampaignErrorEnum.CampaignError,
    authenticationError: google_ads_googleads_v0_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationError,
    adGroupCriterionError: google_ads_googleads_v0_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionError,
    adCustomizerError: google_ads_googleads_v0_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerError,
    adGroupAdError: google_ads_googleads_v0_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdError,
    adSharingError: google_ads_googleads_v0_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingError,
    adxError: google_ads_googleads_v0_errors_adx_error_pb.AdxErrorEnum.AdxError,
    biddingError: google_ads_googleads_v0_errors_bidding_error_pb.BiddingErrorEnum.BiddingError,
    campaignCriterionError: google_ads_googleads_v0_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionError,
    collectionSizeError: google_ads_googleads_v0_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeError,
    criterionError: google_ads_googleads_v0_errors_criterion_error_pb.CriterionErrorEnum.CriterionError,
    dateError: google_ads_googleads_v0_errors_date_error_pb.DateErrorEnum.DateError,
    dateRangeError: google_ads_googleads_v0_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeError,
    distinctError: google_ads_googleads_v0_errors_distinct_error_pb.DistinctErrorEnum.DistinctError,
    feedAttributeReferenceError: google_ads_googleads_v0_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError,
    functionError: google_ads_googleads_v0_errors_function_error_pb.FunctionErrorEnum.FunctionError,
    functionParsingError: google_ads_googleads_v0_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingError,
    idError: google_ads_googleads_v0_errors_id_error_pb.IdErrorEnum.IdError,
    imageError: google_ads_googleads_v0_errors_image_error_pb.ImageErrorEnum.ImageError,
    mediaBundleError: google_ads_googleads_v0_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleError,
    mediaError: google_ads_googleads_v0_errors_media_error_pb.MediaErrorEnum.MediaError,
    multiplierError: google_ads_googleads_v0_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierError,
    newResourceCreationError: google_ads_googleads_v0_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationError,
    notEmptyError: google_ads_googleads_v0_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyError,
    nullError: google_ads_googleads_v0_errors_null_error_pb.NullErrorEnum.NullError,
    operatorError: google_ads_googleads_v0_errors_operator_error_pb.OperatorErrorEnum.OperatorError,
    rangeError: google_ads_googleads_v0_errors_range_error_pb.RangeErrorEnum.RangeError,
    recommendationError: google_ads_googleads_v0_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationError,
    regionCodeError: google_ads_googleads_v0_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeError,
    settingError: google_ads_googleads_v0_errors_setting_error_pb.SettingErrorEnum.SettingError,
    stringFormatError: google_ads_googleads_v0_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatError,
    stringLengthError: google_ads_googleads_v0_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthError,
    operationAccessDeniedError: google_ads_googleads_v0_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedError,
    resourceAccessDeniedError: google_ads_googleads_v0_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError,
    resourceCountLimitExceededError: google_ads_googleads_v0_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError,
    adGroupBidModifierError: google_ads_googleads_v0_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierError,
    contextError: google_ads_googleads_v0_errors_context_error_pb.ContextErrorEnum.ContextError,
    fieldError: google_ads_googleads_v0_errors_field_error_pb.FieldErrorEnum.FieldError,
  }

  export enum ErrorCodeCase { 
    ERROR_CODE_NOT_SET = 0,
    REQUEST_ERROR = 1,
    BIDDING_STRATEGY_ERROR = 2,
    URL_FIELD_ERROR = 3,
    LIST_OPERATION_ERROR = 4,
    QUERY_ERROR = 5,
    MUTATE_ERROR = 7,
    FIELD_MASK_ERROR = 8,
    AUTHORIZATION_ERROR = 9,
    INTERNAL_ERROR = 10,
    QUOTA_ERROR = 11,
    AD_ERROR = 12,
    AD_GROUP_ERROR = 13,
    CAMPAIGN_BUDGET_ERROR = 14,
    CAMPAIGN_ERROR = 15,
    AUTHENTICATION_ERROR = 17,
    AD_GROUP_CRITERION_ERROR = 18,
    AD_CUSTOMIZER_ERROR = 19,
    AD_GROUP_AD_ERROR = 21,
    AD_SHARING_ERROR = 24,
    ADX_ERROR = 25,
    BIDDING_ERROR = 26,
    CAMPAIGN_CRITERION_ERROR = 29,
    COLLECTION_SIZE_ERROR = 31,
    CRITERION_ERROR = 32,
    DATE_ERROR = 33,
    DATE_RANGE_ERROR = 34,
    DISTINCT_ERROR = 35,
    FEED_ATTRIBUTE_REFERENCE_ERROR = 36,
    FUNCTION_ERROR = 37,
    FUNCTION_PARSING_ERROR = 38,
    ID_ERROR = 39,
    IMAGE_ERROR = 40,
    MEDIA_BUNDLE_ERROR = 42,
    MEDIA_ERROR = 43,
    MULTIPLIER_ERROR = 44,
    NEW_RESOURCE_CREATION_ERROR = 45,
    NOT_EMPTY_ERROR = 46,
    NULL_ERROR = 47,
    OPERATOR_ERROR = 48,
    RANGE_ERROR = 49,
    RECOMMENDATION_ERROR = 58,
    REGION_CODE_ERROR = 51,
    SETTING_ERROR = 52,
    STRING_FORMAT_ERROR = 53,
    STRING_LENGTH_ERROR = 54,
    OPERATION_ACCESS_DENIED_ERROR = 55,
    RESOURCE_ACCESS_DENIED_ERROR = 56,
    RESOURCE_COUNT_LIMIT_EXCEEDED_ERROR = 57,
    AD_GROUP_BID_MODIFIER_ERROR = 59,
    CONTEXT_ERROR = 60,
    FIELD_ERROR = 61,
  }
}

export class ErrorLocation extends jspb.Message {
  getOperationIndex(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setOperationIndex(value?: google_protobuf_wrappers_pb.Int64Value): ErrorLocation;
  hasOperationIndex(): boolean;
  clearOperationIndex(): ErrorLocation;

  getFieldPathElementsList(): Array<ErrorLocation.FieldPathElement>;
  setFieldPathElementsList(value: Array<ErrorLocation.FieldPathElement>): ErrorLocation;
  clearFieldPathElementsList(): ErrorLocation;
  addFieldPathElements(value?: ErrorLocation.FieldPathElement, index?: number): ErrorLocation.FieldPathElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorLocation): ErrorLocation.AsObject;
  static serializeBinaryToWriter(message: ErrorLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorLocation;
  static deserializeBinaryFromReader(message: ErrorLocation, reader: jspb.BinaryReader): ErrorLocation;
}

export namespace ErrorLocation {
  export type AsObject = {
    operationIndex?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    fieldPathElementsList: Array<ErrorLocation.FieldPathElement.AsObject>,
  }

  export class FieldPathElement extends jspb.Message {
    getFieldName(): string;
    setFieldName(value: string): FieldPathElement;

    getIndex(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setIndex(value?: google_protobuf_wrappers_pb.Int64Value): FieldPathElement;
    hasIndex(): boolean;
    clearIndex(): FieldPathElement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldPathElement.AsObject;
    static toObject(includeInstance: boolean, msg: FieldPathElement): FieldPathElement.AsObject;
    static serializeBinaryToWriter(message: FieldPathElement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldPathElement;
    static deserializeBinaryFromReader(message: FieldPathElement, reader: jspb.BinaryReader): FieldPathElement;
  }

  export namespace FieldPathElement {
    export type AsObject = {
      fieldName: string,
      index?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }

}

export class ErrorDetails extends jspb.Message {
  getUnpublishedErrorCode(): string;
  setUnpublishedErrorCode(value: string): ErrorDetails;

  getPolicyViolationDetails(): PolicyViolationDetails | undefined;
  setPolicyViolationDetails(value?: PolicyViolationDetails): ErrorDetails;
  hasPolicyViolationDetails(): boolean;
  clearPolicyViolationDetails(): ErrorDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorDetails): ErrorDetails.AsObject;
  static serializeBinaryToWriter(message: ErrorDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorDetails;
  static deserializeBinaryFromReader(message: ErrorDetails, reader: jspb.BinaryReader): ErrorDetails;
}

export namespace ErrorDetails {
  export type AsObject = {
    unpublishedErrorCode: string,
    policyViolationDetails?: PolicyViolationDetails.AsObject,
  }
}

export class PolicyViolationDetails extends jspb.Message {
  getExternalPolicyDescription(): string;
  setExternalPolicyDescription(value: string): PolicyViolationDetails;

  getKey(): google_ads_googleads_v0_common_policy_pb.PolicyViolationKey | undefined;
  setKey(value?: google_ads_googleads_v0_common_policy_pb.PolicyViolationKey): PolicyViolationDetails;
  hasKey(): boolean;
  clearKey(): PolicyViolationDetails;

  getExternalPolicyName(): string;
  setExternalPolicyName(value: string): PolicyViolationDetails;

  getIsExemptible(): boolean;
  setIsExemptible(value: boolean): PolicyViolationDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyViolationDetails.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyViolationDetails): PolicyViolationDetails.AsObject;
  static serializeBinaryToWriter(message: PolicyViolationDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyViolationDetails;
  static deserializeBinaryFromReader(message: PolicyViolationDetails, reader: jspb.BinaryReader): PolicyViolationDetails;
}

export namespace PolicyViolationDetails {
  export type AsObject = {
    externalPolicyDescription: string,
    key?: google_ads_googleads_v0_common_policy_pb.PolicyViolationKey.AsObject,
    externalPolicyName: string,
    isExemptible: boolean,
  }
}

