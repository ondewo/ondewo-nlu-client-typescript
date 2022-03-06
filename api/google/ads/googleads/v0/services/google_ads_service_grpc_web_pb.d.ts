import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_services_google_ads_service_pb from '../../../../../google/ads/googleads/v0/services/google_ads_service_pb';


export class GoogleAdsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  search(
    request: google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsResponse>;

}

export class GoogleAdsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  search(
    request: google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsResponse>;

}

