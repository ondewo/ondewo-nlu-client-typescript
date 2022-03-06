import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_enums_keyword_match_type_pb from '../../../../../google/ads/googleads/v0/enums/keyword_match_type_pb';
import * as google_ads_googleads_v0_enums_listing_custom_attribute_index_pb from '../../../../../google/ads/googleads/v0/enums/listing_custom_attribute_index_pb';
import * as google_ads_googleads_v0_enums_listing_group_type_pb from '../../../../../google/ads/googleads/v0/enums/listing_group_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class KeywordInfo extends jspb.Message {
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): KeywordInfo;
  hasText(): boolean;
  clearText(): KeywordInfo;

  getMatchType(): google_ads_googleads_v0_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType;
  setMatchType(value: google_ads_googleads_v0_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType): KeywordInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordInfo.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordInfo): KeywordInfo.AsObject;
  static serializeBinaryToWriter(message: KeywordInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordInfo;
  static deserializeBinaryFromReader(message: KeywordInfo, reader: jspb.BinaryReader): KeywordInfo;
}

export namespace KeywordInfo {
  export type AsObject = {
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    matchType: google_ads_googleads_v0_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType,
  }
}

export class LocationInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LocationInfo): LocationInfo.AsObject;
  static serializeBinaryToWriter(message: LocationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationInfo;
  static deserializeBinaryFromReader(message: LocationInfo, reader: jspb.BinaryReader): LocationInfo;
}

export namespace LocationInfo {
  export type AsObject = {
  }
}

export class PlatformInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlatformInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PlatformInfo): PlatformInfo.AsObject;
  static serializeBinaryToWriter(message: PlatformInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlatformInfo;
  static deserializeBinaryFromReader(message: PlatformInfo, reader: jspb.BinaryReader): PlatformInfo;
}

export namespace PlatformInfo {
  export type AsObject = {
  }
}

export class ListingGroupInfo extends jspb.Message {
  getType(): google_ads_googleads_v0_enums_listing_group_type_pb.ListingGroupTypeEnum.ListingGroupType;
  setType(value: google_ads_googleads_v0_enums_listing_group_type_pb.ListingGroupTypeEnum.ListingGroupType): ListingGroupInfo;

  getCaseValue(): ListingDimensionInfo | undefined;
  setCaseValue(value?: ListingDimensionInfo): ListingGroupInfo;
  hasCaseValue(): boolean;
  clearCaseValue(): ListingGroupInfo;

  getParentCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): ListingGroupInfo;
  hasParentCriterionId(): boolean;
  clearParentCriterionId(): ListingGroupInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingGroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingGroupInfo): ListingGroupInfo.AsObject;
  static serializeBinaryToWriter(message: ListingGroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingGroupInfo;
  static deserializeBinaryFromReader(message: ListingGroupInfo, reader: jspb.BinaryReader): ListingGroupInfo;
}

export namespace ListingGroupInfo {
  export type AsObject = {
    type: google_ads_googleads_v0_enums_listing_group_type_pb.ListingGroupTypeEnum.ListingGroupType,
    caseValue?: ListingDimensionInfo.AsObject,
    parentCriterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class ListingDimensionInfo extends jspb.Message {
  getListingBrand(): ListingBrandInfo | undefined;
  setListingBrand(value?: ListingBrandInfo): ListingDimensionInfo;
  hasListingBrand(): boolean;
  clearListingBrand(): ListingDimensionInfo;

  getHotelId(): HotelIdInfo | undefined;
  setHotelId(value?: HotelIdInfo): ListingDimensionInfo;
  hasHotelId(): boolean;
  clearHotelId(): ListingDimensionInfo;

  getHotelClass(): HotelClassInfo | undefined;
  setHotelClass(value?: HotelClassInfo): ListingDimensionInfo;
  hasHotelClass(): boolean;
  clearHotelClass(): ListingDimensionInfo;

  getHotelCountryRegion(): HotelCountryRegionInfo | undefined;
  setHotelCountryRegion(value?: HotelCountryRegionInfo): ListingDimensionInfo;
  hasHotelCountryRegion(): boolean;
  clearHotelCountryRegion(): ListingDimensionInfo;

  getHotelState(): HotelStateInfo | undefined;
  setHotelState(value?: HotelStateInfo): ListingDimensionInfo;
  hasHotelState(): boolean;
  clearHotelState(): ListingDimensionInfo;

  getHotelCity(): HotelCityInfo | undefined;
  setHotelCity(value?: HotelCityInfo): ListingDimensionInfo;
  hasHotelCity(): boolean;
  clearHotelCity(): ListingDimensionInfo;

  getListingCustomAttribute(): ListingCustomAttributeInfo | undefined;
  setListingCustomAttribute(value?: ListingCustomAttributeInfo): ListingDimensionInfo;
  hasListingCustomAttribute(): boolean;
  clearListingCustomAttribute(): ListingDimensionInfo;

  getDimensionCase(): ListingDimensionInfo.DimensionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingDimensionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingDimensionInfo): ListingDimensionInfo.AsObject;
  static serializeBinaryToWriter(message: ListingDimensionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingDimensionInfo;
  static deserializeBinaryFromReader(message: ListingDimensionInfo, reader: jspb.BinaryReader): ListingDimensionInfo;
}

export namespace ListingDimensionInfo {
  export type AsObject = {
    listingBrand?: ListingBrandInfo.AsObject,
    hotelId?: HotelIdInfo.AsObject,
    hotelClass?: HotelClassInfo.AsObject,
    hotelCountryRegion?: HotelCountryRegionInfo.AsObject,
    hotelState?: HotelStateInfo.AsObject,
    hotelCity?: HotelCityInfo.AsObject,
    listingCustomAttribute?: ListingCustomAttributeInfo.AsObject,
  }

  export enum DimensionCase { 
    DIMENSION_NOT_SET = 0,
    LISTING_BRAND = 1,
    HOTEL_ID = 2,
    HOTEL_CLASS = 3,
    HOTEL_COUNTRY_REGION = 4,
    HOTEL_STATE = 5,
    HOTEL_CITY = 6,
    LISTING_CUSTOM_ATTRIBUTE = 7,
  }
}

export class ListingBrandInfo extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): ListingBrandInfo;
  hasValue(): boolean;
  clearValue(): ListingBrandInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingBrandInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingBrandInfo): ListingBrandInfo.AsObject;
  static serializeBinaryToWriter(message: ListingBrandInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingBrandInfo;
  static deserializeBinaryFromReader(message: ListingBrandInfo, reader: jspb.BinaryReader): ListingBrandInfo;
}

export namespace ListingBrandInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelIdInfo extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): HotelIdInfo;
  hasValue(): boolean;
  clearValue(): HotelIdInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelIdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelIdInfo): HotelIdInfo.AsObject;
  static serializeBinaryToWriter(message: HotelIdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelIdInfo;
  static deserializeBinaryFromReader(message: HotelIdInfo, reader: jspb.BinaryReader): HotelIdInfo;
}

export namespace HotelIdInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelClassInfo extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setValue(value?: google_protobuf_wrappers_pb.Int64Value): HotelClassInfo;
  hasValue(): boolean;
  clearValue(): HotelClassInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelClassInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelClassInfo): HotelClassInfo.AsObject;
  static serializeBinaryToWriter(message: HotelClassInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelClassInfo;
  static deserializeBinaryFromReader(message: HotelClassInfo, reader: jspb.BinaryReader): HotelClassInfo;
}

export namespace HotelClassInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class HotelCountryRegionInfo extends jspb.Message {
  getCountryRegionCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryRegionCriterion(value?: google_protobuf_wrappers_pb.StringValue): HotelCountryRegionInfo;
  hasCountryRegionCriterion(): boolean;
  clearCountryRegionCriterion(): HotelCountryRegionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelCountryRegionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelCountryRegionInfo): HotelCountryRegionInfo.AsObject;
  static serializeBinaryToWriter(message: HotelCountryRegionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelCountryRegionInfo;
  static deserializeBinaryFromReader(message: HotelCountryRegionInfo, reader: jspb.BinaryReader): HotelCountryRegionInfo;
}

export namespace HotelCountryRegionInfo {
  export type AsObject = {
    countryRegionCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelStateInfo extends jspb.Message {
  getStateCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStateCriterion(value?: google_protobuf_wrappers_pb.StringValue): HotelStateInfo;
  hasStateCriterion(): boolean;
  clearStateCriterion(): HotelStateInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelStateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelStateInfo): HotelStateInfo.AsObject;
  static serializeBinaryToWriter(message: HotelStateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelStateInfo;
  static deserializeBinaryFromReader(message: HotelStateInfo, reader: jspb.BinaryReader): HotelStateInfo;
}

export namespace HotelStateInfo {
  export type AsObject = {
    stateCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelCityInfo extends jspb.Message {
  getCityCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCityCriterion(value?: google_protobuf_wrappers_pb.StringValue): HotelCityInfo;
  hasCityCriterion(): boolean;
  clearCityCriterion(): HotelCityInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelCityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelCityInfo): HotelCityInfo.AsObject;
  static serializeBinaryToWriter(message: HotelCityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelCityInfo;
  static deserializeBinaryFromReader(message: HotelCityInfo, reader: jspb.BinaryReader): HotelCityInfo;
}

export namespace HotelCityInfo {
  export type AsObject = {
    cityCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ListingCustomAttributeInfo extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): ListingCustomAttributeInfo;
  hasValue(): boolean;
  clearValue(): ListingCustomAttributeInfo;

  getIndex(): google_ads_googleads_v0_enums_listing_custom_attribute_index_pb.ListingCustomAttributeIndexEnum.ListingCustomAttributeIndex;
  setIndex(value: google_ads_googleads_v0_enums_listing_custom_attribute_index_pb.ListingCustomAttributeIndexEnum.ListingCustomAttributeIndex): ListingCustomAttributeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingCustomAttributeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingCustomAttributeInfo): ListingCustomAttributeInfo.AsObject;
  static serializeBinaryToWriter(message: ListingCustomAttributeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingCustomAttributeInfo;
  static deserializeBinaryFromReader(message: ListingCustomAttributeInfo, reader: jspb.BinaryReader): ListingCustomAttributeInfo;
}

export namespace ListingCustomAttributeInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
    index: google_ads_googleads_v0_enums_listing_custom_attribute_index_pb.ListingCustomAttributeIndexEnum.ListingCustomAttributeIndex,
  }
}

export class HotelDateSelectionTypeInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelDateSelectionTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelDateSelectionTypeInfo): HotelDateSelectionTypeInfo.AsObject;
  static serializeBinaryToWriter(message: HotelDateSelectionTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelDateSelectionTypeInfo;
  static deserializeBinaryFromReader(message: HotelDateSelectionTypeInfo, reader: jspb.BinaryReader): HotelDateSelectionTypeInfo;
}

export namespace HotelDateSelectionTypeInfo {
  export type AsObject = {
  }
}

export class HotelAdvanceBookingWindowInfo extends jspb.Message {
  getMinDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMinDays(value?: google_protobuf_wrappers_pb.Int64Value): HotelAdvanceBookingWindowInfo;
  hasMinDays(): boolean;
  clearMinDays(): HotelAdvanceBookingWindowInfo;

  getMaxDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxDays(value?: google_protobuf_wrappers_pb.Int64Value): HotelAdvanceBookingWindowInfo;
  hasMaxDays(): boolean;
  clearMaxDays(): HotelAdvanceBookingWindowInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelAdvanceBookingWindowInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelAdvanceBookingWindowInfo): HotelAdvanceBookingWindowInfo.AsObject;
  static serializeBinaryToWriter(message: HotelAdvanceBookingWindowInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelAdvanceBookingWindowInfo;
  static deserializeBinaryFromReader(message: HotelAdvanceBookingWindowInfo, reader: jspb.BinaryReader): HotelAdvanceBookingWindowInfo;
}

export namespace HotelAdvanceBookingWindowInfo {
  export type AsObject = {
    minDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    maxDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class HotelLengthOfStayInfo extends jspb.Message {
  getMinNights(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMinNights(value?: google_protobuf_wrappers_pb.Int64Value): HotelLengthOfStayInfo;
  hasMinNights(): boolean;
  clearMinNights(): HotelLengthOfStayInfo;

  getMaxNights(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxNights(value?: google_protobuf_wrappers_pb.Int64Value): HotelLengthOfStayInfo;
  hasMaxNights(): boolean;
  clearMaxNights(): HotelLengthOfStayInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelLengthOfStayInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelLengthOfStayInfo): HotelLengthOfStayInfo.AsObject;
  static serializeBinaryToWriter(message: HotelLengthOfStayInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelLengthOfStayInfo;
  static deserializeBinaryFromReader(message: HotelLengthOfStayInfo, reader: jspb.BinaryReader): HotelLengthOfStayInfo;
}

export namespace HotelLengthOfStayInfo {
  export type AsObject = {
    minNights?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    maxNights?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class HotelCheckInDayInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelCheckInDayInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelCheckInDayInfo): HotelCheckInDayInfo.AsObject;
  static serializeBinaryToWriter(message: HotelCheckInDayInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelCheckInDayInfo;
  static deserializeBinaryFromReader(message: HotelCheckInDayInfo, reader: jspb.BinaryReader): HotelCheckInDayInfo;
}

export namespace HotelCheckInDayInfo {
  export type AsObject = {
  }
}

