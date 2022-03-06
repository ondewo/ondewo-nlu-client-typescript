import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_ad_group_ad_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_ad_pb';
import * as google_ads_googleads_v0_services_ad_group_ad_service_pb from '../../../../../google/ads/googleads/v0/services/ad_group_ad_service_pb';


export class AdGroupAdServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAdGroupAd(
    request: google_ads_googleads_v0_services_ad_group_ad_service_pb.GetAdGroupAdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd>;

  mutateAdGroupAds(
    request: google_ads_googleads_v0_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse>;

}

export class AdGroupAdServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAdGroupAd(
    request: google_ads_googleads_v0_services_ad_group_ad_service_pb.GetAdGroupAdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd>;

  mutateAdGroupAds(
    request: google_ads_googleads_v0_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse>;

}

