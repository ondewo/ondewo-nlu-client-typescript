import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_ad_pb from '../../../../../google/ads/googleads/v0/common/ad_pb';
import * as google_ads_googleads_v0_enums_ad_group_ad_status_pb from '../../../../../google/ads/googleads/v0/enums/ad_group_ad_status_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class AdGroupAd extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): AdGroupAd;

  getStatus(): google_ads_googleads_v0_enums_ad_group_ad_status_pb.AdGroupAdStatusEnum.AdGroupAdStatus;
  setStatus(value: google_ads_googleads_v0_enums_ad_group_ad_status_pb.AdGroupAdStatusEnum.AdGroupAdStatus): AdGroupAd;

  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): AdGroupAd;
  hasAdGroup(): boolean;
  clearAdGroup(): AdGroupAd;

  getAd(): google_ads_googleads_v0_common_ad_pb.Ad | undefined;
  setAd(value?: google_ads_googleads_v0_common_ad_pb.Ad): AdGroupAd;
  hasAd(): boolean;
  clearAd(): AdGroupAd;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAd.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAd): AdGroupAd.AsObject;
  static serializeBinaryToWriter(message: AdGroupAd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAd;
  static deserializeBinaryFromReader(message: AdGroupAd, reader: jspb.BinaryReader): AdGroupAd;
}

export namespace AdGroupAd {
  export type AsObject = {
    resourceName: string,
    status: google_ads_googleads_v0_enums_ad_group_ad_status_pb.AdGroupAdStatusEnum.AdGroupAdStatus,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    ad?: google_ads_googleads_v0_common_ad_pb.Ad.AsObject,
  }
}

