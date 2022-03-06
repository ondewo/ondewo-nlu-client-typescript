import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_ad_group_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_pb';
import * as google_ads_googleads_v0_services_ad_group_service_pb from '../../../../../google/ads/googleads/v0/services/ad_group_service_pb';


export class AdGroupServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAdGroup(
    request: google_ads_googleads_v0_services_ad_group_service_pb.GetAdGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_ad_group_pb.AdGroup) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_ad_group_pb.AdGroup>;

  mutateAdGroups(
    request: google_ads_googleads_v0_services_ad_group_service_pb.MutateAdGroupsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_ad_group_service_pb.MutateAdGroupsResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_ad_group_service_pb.MutateAdGroupsResponse>;

}

export class AdGroupServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAdGroup(
    request: google_ads_googleads_v0_services_ad_group_service_pb.GetAdGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_ad_group_pb.AdGroup>;

  mutateAdGroups(
    request: google_ads_googleads_v0_services_ad_group_service_pb.MutateAdGroupsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_ad_group_service_pb.MutateAdGroupsResponse>;

}

