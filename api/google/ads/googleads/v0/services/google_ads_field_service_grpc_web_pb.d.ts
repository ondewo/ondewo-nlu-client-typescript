import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_google_ads_field_pb from '../../../../../google/ads/googleads/v0/resources/google_ads_field_pb';
import * as google_ads_googleads_v0_services_google_ads_field_service_pb from '../../../../../google/ads/googleads/v0/services/google_ads_field_service_pb';


export class GoogleAdsFieldServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGoogleAdsField(
    request: google_ads_googleads_v0_services_google_ads_field_service_pb.GetGoogleAdsFieldRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField>;

  searchGoogleAdsFields(
    request: google_ads_googleads_v0_services_google_ads_field_service_pb.SearchGoogleAdsFieldsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_services_google_ads_field_service_pb.SearchGoogleAdsFieldsResponse) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_services_google_ads_field_service_pb.SearchGoogleAdsFieldsResponse>;

}

export class GoogleAdsFieldServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGoogleAdsField(
    request: google_ads_googleads_v0_services_google_ads_field_service_pb.GetGoogleAdsFieldRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField>;

  searchGoogleAdsFields(
    request: google_ads_googleads_v0_services_google_ads_field_service_pb.SearchGoogleAdsFieldsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_services_google_ads_field_service_pb.SearchGoogleAdsFieldsResponse>;

}

