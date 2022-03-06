import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_ad_group_bid_modifier_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_bid_modifier_pb';
import * as google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb from '../../../../../google/ads/googleads/v0/services/ad_group_bid_modifier_service_pb';


export class AdGroupBidModifierServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAdGroupBidModifier(
    request: google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.GetAdGroupBidModifierRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier>;

  mutateAdGroupBidModifiers(
    request: google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersResponse>;

}

export class AdGroupBidModifierServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAdGroupBidModifier(
    request: google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.GetAdGroupBidModifierRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier>;

  mutateAdGroupBidModifiers(
    request: google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifiersResponse>;

}

