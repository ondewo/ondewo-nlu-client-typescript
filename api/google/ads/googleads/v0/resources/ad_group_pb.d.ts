import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_custom_parameter_pb from '../../../../../google/ads/googleads/v0/common/custom_parameter_pb';
import * as google_ads_googleads_v0_enums_ad_group_status_pb from '../../../../../google/ads/googleads/v0/enums/ad_group_status_pb';
import * as google_ads_googleads_v0_enums_ad_group_type_pb from '../../../../../google/ads/googleads/v0/enums/ad_group_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class AdGroup extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): AdGroup;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): AdGroup;
  hasId(): boolean;
  clearId(): AdGroup;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): AdGroup;
  hasName(): boolean;
  clearName(): AdGroup;

  getStatus(): google_ads_googleads_v0_enums_ad_group_status_pb.AdGroupStatusEnum.AdGroupStatus;
  setStatus(value: google_ads_googleads_v0_enums_ad_group_status_pb.AdGroupStatusEnum.AdGroupStatus): AdGroup;

  getType(): google_ads_googleads_v0_enums_ad_group_type_pb.AdGroupTypeEnum.AdGroupType;
  setType(value: google_ads_googleads_v0_enums_ad_group_type_pb.AdGroupTypeEnum.AdGroupType): AdGroup;

  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): AdGroup;
  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): AdGroup;

  getUrlCustomParametersList(): Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter>): AdGroup;
  clearUrlCustomParametersList(): AdGroup;
  addUrlCustomParameters(value?: google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter;

  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): AdGroup;
  hasCampaign(): boolean;
  clearCampaign(): AdGroup;

  getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroup;
  hasCpcBidMicros(): boolean;
  clearCpcBidMicros(): AdGroup;

  getCpmBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpmBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroup;
  hasCpmBidMicros(): boolean;
  clearCpmBidMicros(): AdGroup;

  getCpaBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpaBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroup;
  hasCpaBidMicros(): boolean;
  clearCpaBidMicros(): AdGroup;

  getCpvBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpvBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroup;
  hasCpvBidMicros(): boolean;
  clearCpvBidMicros(): AdGroup;

  getTargetRoasOverride(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTargetRoasOverride(value?: google_protobuf_wrappers_pb.DoubleValue): AdGroup;
  hasTargetRoasOverride(): boolean;
  clearTargetRoasOverride(): AdGroup;

  getPercentCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPercentCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): AdGroup;
  hasPercentCpcBidMicros(): boolean;
  clearPercentCpcBidMicros(): AdGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroup.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroup): AdGroup.AsObject;
  static serializeBinaryToWriter(message: AdGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroup;
  static deserializeBinaryFromReader(message: AdGroup, reader: jspb.BinaryReader): AdGroup;
}

export namespace AdGroup {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v0_enums_ad_group_status_pb.AdGroupStatusEnum.AdGroupStatus,
    type: google_ads_googleads_v0_enums_ad_group_type_pb.AdGroupTypeEnum.AdGroupType,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter.AsObject>,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpmBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpaBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpvBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    targetRoasOverride?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    percentCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

