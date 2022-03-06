import * as jspb from 'google-protobuf'



export class CriterionErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionErrorEnum): CriterionErrorEnum.AsObject;
  static serializeBinaryToWriter(message: CriterionErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionErrorEnum;
  static deserializeBinaryFromReader(message: CriterionErrorEnum, reader: jspb.BinaryReader): CriterionErrorEnum;
}

export namespace CriterionErrorEnum {
  export type AsObject = {
  }

  export enum CriterionError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CONCRETE_TYPE_REQUIRED = 2,
    INVALID_EXCLUDED_CATEGORY = 3,
    INVALID_KEYWORD_TEXT = 4,
    KEYWORD_TEXT_TOO_LONG = 5,
    KEYWORD_HAS_TOO_MANY_WORDS = 6,
    KEYWORD_HAS_INVALID_CHARS = 7,
    INVALID_PLACEMENT_URL = 8,
    INVALID_USER_LIST = 9,
    INVALID_USER_INTEREST = 10,
    INVALID_FORMAT_FOR_PLACEMENT_URL = 11,
    PLACEMENT_URL_IS_TOO_LONG = 12,
    PLACEMENT_URL_HAS_ILLEGAL_CHAR = 13,
    PLACEMENT_URL_HAS_MULTIPLE_SITES_IN_LINE = 14,
    PLACEMENT_IS_NOT_AVAILABLE_FOR_TARGETING_OR_EXCLUSION = 15,
    INVALID_VERTICAL_PATH = 16,
    INVALID_YOUTUBE_CHANNEL_ID = 17,
    INVALID_YOUTUBE_VIDEO_ID = 18,
    YOUTUBE_VERTICAL_CHANNEL_DEPRECATED = 19,
    YOUTUBE_DEMOGRAPHIC_CHANNEL_DEPRECATED = 20,
    YOUTUBE_URL_UNSUPPORTED = 21,
    CANNOT_EXCLUDE_CRITERIA_TYPE = 22,
    CANNOT_ADD_CRITERIA_TYPE = 23,
    INVALID_PRODUCT_FILTER = 24,
    PRODUCT_FILTER_TOO_LONG = 25,
    CANNOT_EXCLUDE_SIMILAR_USER_LIST = 26,
    CANNOT_ADD_CLOSED_USER_LIST = 27,
    CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SEARCH_ONLY_CAMPAIGNS = 28,
    CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SEARCH_CAMPAIGNS = 29,
    CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SHOPPING_CAMPAIGNS = 30,
    CANNOT_ADD_USER_INTERESTS_TO_SEARCH_CAMPAIGNS = 31,
    CANNOT_SET_BIDS_ON_CRITERION_TYPE_IN_SEARCH_CAMPAIGNS = 32,
    CANNOT_ADD_URLS_TO_CRITERION_TYPE_FOR_CAMPAIGN_TYPE = 33,
    INVALID_IP_ADDRESS = 34,
    INVALID_IP_FORMAT = 35,
    INVALID_MOBILE_APP = 36,
    INVALID_MOBILE_APP_CATEGORY = 37,
    INVALID_CRITERION_ID = 38,
    CANNOT_TARGET_CRITERION = 39,
    CANNOT_TARGET_OBSOLETE_CRITERION = 40,
    CRITERION_ID_AND_TYPE_MISMATCH = 41,
    INVALID_PROXIMITY_RADIUS = 42,
    INVALID_PROXIMITY_RADIUS_UNITS = 43,
    INVALID_STREETADDRESS_LENGTH = 44,
    INVALID_CITYNAME_LENGTH = 45,
    INVALID_REGIONCODE_LENGTH = 46,
    INVALID_REGIONNAME_LENGTH = 47,
    INVALID_POSTALCODE_LENGTH = 48,
    INVALID_COUNTRY_CODE = 49,
    INVALID_LATITUDE = 50,
    INVALID_LONGITUDE = 51,
    PROXIMITY_GEOPOINT_AND_ADDRESS_BOTH_CANNOT_BE_NULL = 52,
    INVALID_PROXIMITY_ADDRESS = 53,
    INVALID_USER_DOMAIN_NAME = 54,
    CRITERION_PARAMETER_TOO_LONG = 55,
    AD_SCHEDULE_TIME_INTERVALS_OVERLAP = 56,
    AD_SCHEDULE_INTERVAL_CANNOT_SPAN_MULTIPLE_DAYS = 57,
    AD_SCHEDULE_INVALID_TIME_INTERVAL = 58,
    AD_SCHEDULE_EXCEEDED_INTERVALS_PER_DAY_LIMIT = 59,
    AD_SCHEDULE_CRITERION_ID_MISMATCHING_FIELDS = 60,
    CANNOT_BID_MODIFY_CRITERION_TYPE = 61,
    CANNOT_BID_MODIFY_CRITERION_CAMPAIGN_OPTED_OUT = 62,
    CANNOT_BID_MODIFY_NEGATIVE_CRITERION = 63,
    BID_MODIFIER_ALREADY_EXISTS = 64,
    FEED_ID_NOT_ALLOWED = 65,
    ACCOUNT_INELIGIBLE_FOR_CRITERIA_TYPE = 66,
    CRITERIA_TYPE_INVALID_FOR_BIDDING_STRATEGY = 67,
    CANNOT_EXCLUDE_CRITERION = 68,
    CANNOT_REMOVE_CRITERION = 69,
    PRODUCT_SCOPE_TOO_LONG = 70,
    PRODUCT_SCOPE_TOO_MANY_DIMENSIONS = 71,
    PRODUCT_PARTITION_TOO_LONG = 72,
    PRODUCT_PARTITION_TOO_MANY_DIMENSIONS = 73,
    INVALID_PRODUCT_DIMENSION = 74,
    INVALID_PRODUCT_DIMENSION_TYPE = 75,
    INVALID_PRODUCT_BIDDING_CATEGORY = 76,
    MISSING_SHOPPING_SETTING = 77,
    INVALID_MATCHING_FUNCTION = 78,
    LOCATION_FILTER_NOT_ALLOWED = 79,
    LOCATION_FILTER_INVALID = 80,
    CANNOT_ATTACH_CRITERIA_AT_CAMPAIGN_AND_ADGROUP = 81,
    HOTEL_LENGTH_OF_STAY_OVERLAPS_WITH_EXISTING_CRITERION = 82,
    HOTEL_ADVANCE_BOOKING_WINDOW_OVERLAPS_WITH_EXISTING_CRITERION = 83,
    FIELD_INCOMPATIBLE_WITH_NEGATIVE_TARGETING = 84,
  }
}

