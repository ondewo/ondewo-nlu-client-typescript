import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_geo_target_constant_pb from '../../../../../google/ads/googleads/v0/resources/geo_target_constant_pb';
import * as google_ads_googleads_v0_services_geo_target_constant_service_pb from '../../../../../google/ads/googleads/v0/services/geo_target_constant_service_pb';


export class GeoTargetConstantServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGeoTargetConstant(
    request: google_ads_googleads_v0_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant>;

}

export class GeoTargetConstantServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGeoTargetConstant(
    request: google_ads_googleads_v0_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant>;

}

