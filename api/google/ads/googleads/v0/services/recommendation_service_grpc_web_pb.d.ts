import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_recommendation_pb from '../../../../../google/ads/googleads/v0/resources/recommendation_pb';
import * as google_ads_googleads_v0_services_recommendation_service_pb from '../../../../../google/ads/googleads/v0/services/recommendation_service_pb';


export class RecommendationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getRecommendation(
    request: google_ads_googleads_v0_services_recommendation_service_pb.GetRecommendationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_recommendation_pb.Recommendation) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_recommendation_pb.Recommendation>;

  applyRecommendation(
    request: google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationResponse>;

}

export class RecommendationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getRecommendation(
    request: google_ads_googleads_v0_services_recommendation_service_pb.GetRecommendationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_recommendation_pb.Recommendation>;

  applyRecommendation(
    request: google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationResponse>;

}

