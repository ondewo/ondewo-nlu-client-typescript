import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_custom_parameter_pb from '../../../../../google/ads/googleads/v0/common/custom_parameter_pb';
import * as google_ads_googleads_v0_enums_ad_type_pb from '../../../../../google/ads/googleads/v0/enums/ad_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Ad extends jspb.Message {
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): Ad;
  hasId(): boolean;
  clearId(): Ad;

  getFinalUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): Ad;
  clearFinalUrlsList(): Ad;
  addFinalUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getFinalMobileUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalMobileUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): Ad;
  clearFinalMobileUrlsList(): Ad;
  addFinalMobileUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): Ad;
  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): Ad;

  getUrlCustomParametersList(): Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter>): Ad;
  clearUrlCustomParametersList(): Ad;
  addUrlCustomParameters(value?: google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter;

  getDisplayUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDisplayUrl(value?: google_protobuf_wrappers_pb.StringValue): Ad;
  hasDisplayUrl(): boolean;
  clearDisplayUrl(): Ad;

  getType(): google_ads_googleads_v0_enums_ad_type_pb.AdTypeEnum.AdType;
  setType(value: google_ads_googleads_v0_enums_ad_type_pb.AdTypeEnum.AdType): Ad;

  getTextAd(): TextAdInfo | undefined;
  setTextAd(value?: TextAdInfo): Ad;
  hasTextAd(): boolean;
  clearTextAd(): Ad;

  getExpandedTextAd(): ExpandedTextAdInfo | undefined;
  setExpandedTextAd(value?: ExpandedTextAdInfo): Ad;
  hasExpandedTextAd(): boolean;
  clearExpandedTextAd(): Ad;

  getDynamicSearchAd(): DynamicSearchAdInfo | undefined;
  setDynamicSearchAd(value?: DynamicSearchAdInfo): Ad;
  hasDynamicSearchAd(): boolean;
  clearDynamicSearchAd(): Ad;

  getResponsiveDisplayAd(): ResponsiveDisplayAdInfo | undefined;
  setResponsiveDisplayAd(value?: ResponsiveDisplayAdInfo): Ad;
  hasResponsiveDisplayAd(): boolean;
  clearResponsiveDisplayAd(): Ad;

  getCallOnlyAd(): CallOnlyAdInfo | undefined;
  setCallOnlyAd(value?: CallOnlyAdInfo): Ad;
  hasCallOnlyAd(): boolean;
  clearCallOnlyAd(): Ad;

  getExpandedDynamicSearchAd(): ExpandedDynamicSearchAdInfo | undefined;
  setExpandedDynamicSearchAd(value?: ExpandedDynamicSearchAdInfo): Ad;
  hasExpandedDynamicSearchAd(): boolean;
  clearExpandedDynamicSearchAd(): Ad;

  getHotelAd(): HotelAdInfo | undefined;
  setHotelAd(value?: HotelAdInfo): Ad;
  hasHotelAd(): boolean;
  clearHotelAd(): Ad;

  getAdDataCase(): Ad.AdDataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ad.AsObject;
  static toObject(includeInstance: boolean, msg: Ad): Ad.AsObject;
  static serializeBinaryToWriter(message: Ad, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ad;
  static deserializeBinaryFromReader(message: Ad, reader: jspb.BinaryReader): Ad;
}

export namespace Ad {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    finalUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    finalMobileUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter.AsObject>,
    displayUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v0_enums_ad_type_pb.AdTypeEnum.AdType,
    textAd?: TextAdInfo.AsObject,
    expandedTextAd?: ExpandedTextAdInfo.AsObject,
    dynamicSearchAd?: DynamicSearchAdInfo.AsObject,
    responsiveDisplayAd?: ResponsiveDisplayAdInfo.AsObject,
    callOnlyAd?: CallOnlyAdInfo.AsObject,
    expandedDynamicSearchAd?: ExpandedDynamicSearchAdInfo.AsObject,
    hotelAd?: HotelAdInfo.AsObject,
  }

  export enum AdDataCase { 
    AD_DATA_NOT_SET = 0,
    TEXT_AD = 6,
    EXPANDED_TEXT_AD = 7,
    DYNAMIC_SEARCH_AD = 8,
    RESPONSIVE_DISPLAY_AD = 9,
    CALL_ONLY_AD = 13,
    EXPANDED_DYNAMIC_SEARCH_AD = 14,
    HOTEL_AD = 15,
  }
}

export class TextAdInfo extends jspb.Message {
  getHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline(value?: google_protobuf_wrappers_pb.StringValue): TextAdInfo;
  hasHeadline(): boolean;
  clearHeadline(): TextAdInfo;

  getDescription1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription1(value?: google_protobuf_wrappers_pb.StringValue): TextAdInfo;
  hasDescription1(): boolean;
  clearDescription1(): TextAdInfo;

  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): TextAdInfo;
  hasDescription2(): boolean;
  clearDescription2(): TextAdInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TextAdInfo): TextAdInfo.AsObject;
  static serializeBinaryToWriter(message: TextAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextAdInfo;
  static deserializeBinaryFromReader(message: TextAdInfo, reader: jspb.BinaryReader): TextAdInfo;
}

export namespace TextAdInfo {
  export type AsObject = {
    headline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ExpandedTextAdInfo extends jspb.Message {
  getHeadlinePart1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadlinePart1(value?: google_protobuf_wrappers_pb.StringValue): ExpandedTextAdInfo;
  hasHeadlinePart1(): boolean;
  clearHeadlinePart1(): ExpandedTextAdInfo;

  getHeadlinePart2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadlinePart2(value?: google_protobuf_wrappers_pb.StringValue): ExpandedTextAdInfo;
  hasHeadlinePart2(): boolean;
  clearHeadlinePart2(): ExpandedTextAdInfo;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): ExpandedTextAdInfo;
  hasDescription(): boolean;
  clearDescription(): ExpandedTextAdInfo;

  getPath1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPath1(value?: google_protobuf_wrappers_pb.StringValue): ExpandedTextAdInfo;
  hasPath1(): boolean;
  clearPath1(): ExpandedTextAdInfo;

  getPath2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPath2(value?: google_protobuf_wrappers_pb.StringValue): ExpandedTextAdInfo;
  hasPath2(): boolean;
  clearPath2(): ExpandedTextAdInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpandedTextAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExpandedTextAdInfo): ExpandedTextAdInfo.AsObject;
  static serializeBinaryToWriter(message: ExpandedTextAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpandedTextAdInfo;
  static deserializeBinaryFromReader(message: ExpandedTextAdInfo, reader: jspb.BinaryReader): ExpandedTextAdInfo;
}

export namespace ExpandedTextAdInfo {
  export type AsObject = {
    headlinePart1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    headlinePart2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    path1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    path2?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class DynamicSearchAdInfo extends jspb.Message {
  getDescription1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription1(value?: google_protobuf_wrappers_pb.StringValue): DynamicSearchAdInfo;
  hasDescription1(): boolean;
  clearDescription1(): DynamicSearchAdInfo;

  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): DynamicSearchAdInfo;
  hasDescription2(): boolean;
  clearDescription2(): DynamicSearchAdInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicSearchAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicSearchAdInfo): DynamicSearchAdInfo.AsObject;
  static serializeBinaryToWriter(message: DynamicSearchAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicSearchAdInfo;
  static deserializeBinaryFromReader(message: DynamicSearchAdInfo, reader: jspb.BinaryReader): DynamicSearchAdInfo;
}

export namespace DynamicSearchAdInfo {
  export type AsObject = {
    description1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ResponsiveDisplayAdInfo extends jspb.Message {
  getShortHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setShortHeadline(value?: google_protobuf_wrappers_pb.StringValue): ResponsiveDisplayAdInfo;
  hasShortHeadline(): boolean;
  clearShortHeadline(): ResponsiveDisplayAdInfo;

  getLongHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLongHeadline(value?: google_protobuf_wrappers_pb.StringValue): ResponsiveDisplayAdInfo;
  hasLongHeadline(): boolean;
  clearLongHeadline(): ResponsiveDisplayAdInfo;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): ResponsiveDisplayAdInfo;
  hasDescription(): boolean;
  clearDescription(): ResponsiveDisplayAdInfo;

  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): ResponsiveDisplayAdInfo;
  hasBusinessName(): boolean;
  clearBusinessName(): ResponsiveDisplayAdInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponsiveDisplayAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResponsiveDisplayAdInfo): ResponsiveDisplayAdInfo.AsObject;
  static serializeBinaryToWriter(message: ResponsiveDisplayAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponsiveDisplayAdInfo;
  static deserializeBinaryFromReader(message: ResponsiveDisplayAdInfo, reader: jspb.BinaryReader): ResponsiveDisplayAdInfo;
}

export namespace ResponsiveDisplayAdInfo {
  export type AsObject = {
    shortHeadline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    longHeadline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CallOnlyAdInfo extends jspb.Message {
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): CallOnlyAdInfo;
  hasCountryCode(): boolean;
  clearCountryCode(): CallOnlyAdInfo;

  getPhoneNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumber(value?: google_protobuf_wrappers_pb.StringValue): CallOnlyAdInfo;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): CallOnlyAdInfo;

  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): CallOnlyAdInfo;
  hasBusinessName(): boolean;
  clearBusinessName(): CallOnlyAdInfo;

  getDescription1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription1(value?: google_protobuf_wrappers_pb.StringValue): CallOnlyAdInfo;
  hasDescription1(): boolean;
  clearDescription1(): CallOnlyAdInfo;

  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): CallOnlyAdInfo;
  hasDescription2(): boolean;
  clearDescription2(): CallOnlyAdInfo;

  getCallTracked(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCallTracked(value?: google_protobuf_wrappers_pb.BoolValue): CallOnlyAdInfo;
  hasCallTracked(): boolean;
  clearCallTracked(): CallOnlyAdInfo;

  getDisableCallConversion(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setDisableCallConversion(value?: google_protobuf_wrappers_pb.BoolValue): CallOnlyAdInfo;
  hasDisableCallConversion(): boolean;
  clearDisableCallConversion(): CallOnlyAdInfo;

  getPhoneNumberVerificationUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumberVerificationUrl(value?: google_protobuf_wrappers_pb.StringValue): CallOnlyAdInfo;
  hasPhoneNumberVerificationUrl(): boolean;
  clearPhoneNumberVerificationUrl(): CallOnlyAdInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallOnlyAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CallOnlyAdInfo): CallOnlyAdInfo.AsObject;
  static serializeBinaryToWriter(message: CallOnlyAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallOnlyAdInfo;
  static deserializeBinaryFromReader(message: CallOnlyAdInfo, reader: jspb.BinaryReader): CallOnlyAdInfo;
}

export namespace CallOnlyAdInfo {
  export type AsObject = {
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    phoneNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callTracked?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    disableCallConversion?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    phoneNumberVerificationUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ExpandedDynamicSearchAdInfo extends jspb.Message {
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): ExpandedDynamicSearchAdInfo;
  hasDescription(): boolean;
  clearDescription(): ExpandedDynamicSearchAdInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpandedDynamicSearchAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExpandedDynamicSearchAdInfo): ExpandedDynamicSearchAdInfo.AsObject;
  static serializeBinaryToWriter(message: ExpandedDynamicSearchAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpandedDynamicSearchAdInfo;
  static deserializeBinaryFromReader(message: ExpandedDynamicSearchAdInfo, reader: jspb.BinaryReader): ExpandedDynamicSearchAdInfo;
}

export namespace ExpandedDynamicSearchAdInfo {
  export type AsObject = {
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelAdInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelAdInfo): HotelAdInfo.AsObject;
  static serializeBinaryToWriter(message: HotelAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelAdInfo;
  static deserializeBinaryFromReader(message: HotelAdInfo, reader: jspb.BinaryReader): HotelAdInfo;
}

export namespace HotelAdInfo {
  export type AsObject = {
  }
}

