import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_campaign_budget_pb from '../../../../../google/ads/googleads/v0/resources/campaign_budget_pb';
import * as google_ads_googleads_v0_services_campaign_budget_service_pb from '../../../../../google/ads/googleads/v0/services/campaign_budget_service_pb';


export class CampaignBudgetServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCampaignBudget(
    request: google_ads_googleads_v0_services_campaign_budget_service_pb.GetCampaignBudgetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget>;

  mutateCampaignBudgets(
    request: google_ads_googleads_v0_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse>;

}

export class CampaignBudgetServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCampaignBudget(
    request: google_ads_googleads_v0_services_campaign_budget_service_pb.GetCampaignBudgetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget>;

  mutateCampaignBudgets(
    request: google_ads_googleads_v0_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse>;

}

