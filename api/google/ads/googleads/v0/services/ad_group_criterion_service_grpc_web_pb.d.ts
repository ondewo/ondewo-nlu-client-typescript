import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_ad_group_criterion_pb from '../../../../../google/ads/googleads/v0/resources/ad_group_criterion_pb';
import * as google_ads_googleads_v0_services_ad_group_criterion_service_pb from '../../../../../google/ads/googleads/v0/services/ad_group_criterion_service_pb';


export class AdGroupCriterionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAdGroupCriterion(
    request: google_ads_googleads_v0_services_ad_group_criterion_service_pb.GetAdGroupCriterionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion>;

  mutateAdGroupCriteria(
    request: google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaResponse>;

}

export class AdGroupCriterionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAdGroupCriterion(
    request: google_ads_googleads_v0_services_ad_group_criterion_service_pb.GetAdGroupCriterionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion>;

  mutateAdGroupCriteria(
    request: google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaResponse>;

}

