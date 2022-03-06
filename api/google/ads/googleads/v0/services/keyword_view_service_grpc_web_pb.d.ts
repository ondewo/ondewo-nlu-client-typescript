import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_keyword_view_pb from '../../../../../google/ads/googleads/v0/resources/keyword_view_pb';
import * as google_ads_googleads_v0_services_keyword_view_service_pb from '../../../../../google/ads/googleads/v0/services/keyword_view_service_pb';


export class KeywordViewServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getKeywordView(
    request: google_ads_googleads_v0_services_keyword_view_service_pb.GetKeywordViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_keyword_view_pb.KeywordView) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_keyword_view_pb.KeywordView>;

}

export class KeywordViewServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getKeywordView(
    request: google_ads_googleads_v0_services_keyword_view_service_pb.GetKeywordViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_keyword_view_pb.KeywordView>;

}

