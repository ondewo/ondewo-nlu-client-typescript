import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_criteria_pb from '../../../../../google/ads/googleads/v0/common/criteria_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class AdGroupBidModifier extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): AdGroupBidModifier;

  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): AdGroupBidModifier;
  hasAdGroup(): boolean;
  clearAdGroup(): AdGroupBidModifier;

  getCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): AdGroupBidModifier;
  hasCriterionId(): boolean;
  clearCriterionId(): AdGroupBidModifier;

  getBidModifier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBidModifier(value?: google_protobuf_wrappers_pb.DoubleValue): AdGroupBidModifier;
  hasBidModifier(): boolean;
  clearBidModifier(): AdGroupBidModifier;

  getHotelDateSelectionType(): google_ads_googleads_v0_common_criteria_pb.HotelDateSelectionTypeInfo | undefined;
  setHotelDateSelectionType(value?: google_ads_googleads_v0_common_criteria_pb.HotelDateSelectionTypeInfo): AdGroupBidModifier;
  hasHotelDateSelectionType(): boolean;
  clearHotelDateSelectionType(): AdGroupBidModifier;

  getHotelAdvanceBookingWindow(): google_ads_googleads_v0_common_criteria_pb.HotelAdvanceBookingWindowInfo | undefined;
  setHotelAdvanceBookingWindow(value?: google_ads_googleads_v0_common_criteria_pb.HotelAdvanceBookingWindowInfo): AdGroupBidModifier;
  hasHotelAdvanceBookingWindow(): boolean;
  clearHotelAdvanceBookingWindow(): AdGroupBidModifier;

  getHotelLengthOfStay(): google_ads_googleads_v0_common_criteria_pb.HotelLengthOfStayInfo | undefined;
  setHotelLengthOfStay(value?: google_ads_googleads_v0_common_criteria_pb.HotelLengthOfStayInfo): AdGroupBidModifier;
  hasHotelLengthOfStay(): boolean;
  clearHotelLengthOfStay(): AdGroupBidModifier;

  getHotelCheckInDay(): google_ads_googleads_v0_common_criteria_pb.HotelCheckInDayInfo | undefined;
  setHotelCheckInDay(value?: google_ads_googleads_v0_common_criteria_pb.HotelCheckInDayInfo): AdGroupBidModifier;
  hasHotelCheckInDay(): boolean;
  clearHotelCheckInDay(): AdGroupBidModifier;

  getCriterionCase(): AdGroupBidModifier.CriterionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupBidModifier.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupBidModifier): AdGroupBidModifier.AsObject;
  static serializeBinaryToWriter(message: AdGroupBidModifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupBidModifier;
  static deserializeBinaryFromReader(message: AdGroupBidModifier, reader: jspb.BinaryReader): AdGroupBidModifier;
}

export namespace AdGroupBidModifier {
  export type AsObject = {
    resourceName: string,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    criterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    bidModifier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    hotelDateSelectionType?: google_ads_googleads_v0_common_criteria_pb.HotelDateSelectionTypeInfo.AsObject,
    hotelAdvanceBookingWindow?: google_ads_googleads_v0_common_criteria_pb.HotelAdvanceBookingWindowInfo.AsObject,
    hotelLengthOfStay?: google_ads_googleads_v0_common_criteria_pb.HotelLengthOfStayInfo.AsObject,
    hotelCheckInDay?: google_ads_googleads_v0_common_criteria_pb.HotelCheckInDayInfo.AsObject,
  }

  export enum CriterionCase { 
    CRITERION_NOT_SET = 0,
    HOTEL_DATE_SELECTION_TYPE = 5,
    HOTEL_ADVANCE_BOOKING_WINDOW = 6,
    HOTEL_LENGTH_OF_STAY = 7,
    HOTEL_CHECK_IN_DAY = 8,
  }
}

