import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_campaign_pb from '../../../../../google/ads/googleads/v0/resources/campaign_pb';
import * as google_ads_googleads_v0_services_campaign_service_pb from '../../../../../google/ads/googleads/v0/services/campaign_service_pb';


export class CampaignServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCampaign(
    request: google_ads_googleads_v0_services_campaign_service_pb.GetCampaignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_campaign_pb.Campaign) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_campaign_pb.Campaign>;

  mutateCampaigns(
    request: google_ads_googleads_v0_services_campaign_service_pb.MutateCampaignsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_campaign_service_pb.MutateCampaignsResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_campaign_service_pb.MutateCampaignsResponse>;

}

export class CampaignServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCampaign(
    request: google_ads_googleads_v0_services_campaign_service_pb.GetCampaignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_campaign_pb.Campaign>;

  mutateCampaigns(
    request: google_ads_googleads_v0_services_campaign_service_pb.MutateCampaignsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_campaign_service_pb.MutateCampaignsResponse>;

}

