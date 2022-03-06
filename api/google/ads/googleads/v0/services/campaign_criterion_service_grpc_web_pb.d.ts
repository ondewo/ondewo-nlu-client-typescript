import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_campaign_criterion_pb from '../../../../../google/ads/googleads/v0/resources/campaign_criterion_pb';
import * as google_ads_googleads_v0_services_campaign_criterion_service_pb from '../../../../../google/ads/googleads/v0/services/campaign_criterion_service_pb';


export class CampaignCriterionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCampaignCriterion(
    request: google_ads_googleads_v0_services_campaign_criterion_service_pb.GetCampaignCriterionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion>;

  mutateCampaignCriteria(
    request: google_ads_googleads_v0_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse>;

}

export class CampaignCriterionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCampaignCriterion(
    request: google_ads_googleads_v0_services_campaign_criterion_service_pb.GetCampaignCriterionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion>;

  mutateCampaignCriteria(
    request: google_ads_googleads_v0_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse>;

}

