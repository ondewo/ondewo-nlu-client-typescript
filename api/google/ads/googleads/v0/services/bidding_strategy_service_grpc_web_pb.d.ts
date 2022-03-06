import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_bidding_strategy_pb from '../../../../../google/ads/googleads/v0/resources/bidding_strategy_pb';
import * as google_ads_googleads_v0_services_bidding_strategy_service_pb from '../../../../../google/ads/googleads/v0/services/bidding_strategy_service_pb';


export class BiddingStrategyServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getBiddingStrategy(
    request: google_ads_googleads_v0_services_bidding_strategy_service_pb.GetBiddingStrategyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy>;

  mutateBiddingStrategies(
    request: google_ads_googleads_v0_services_bidding_strategy_service_pb.MutateBiddingStrategiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_bidding_strategy_service_pb.MutateBiddingStrategiesResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_bidding_strategy_service_pb.MutateBiddingStrategiesResponse>;

}

export class BiddingStrategyServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getBiddingStrategy(
    request: google_ads_googleads_v0_services_bidding_strategy_service_pb.GetBiddingStrategyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy>;

  mutateBiddingStrategies(
    request: google_ads_googleads_v0_services_bidding_strategy_service_pb.MutateBiddingStrategiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_bidding_strategy_service_pb.MutateBiddingStrategiesResponse>;

}

