import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v0_resources_customer_pb from '../../../../../google/ads/googleads/v0/resources/customer_pb';
import * as google_ads_googleads_v0_services_customer_service_pb from '../../../../../google/ads/googleads/v0/services/customer_service_pb';


export class CustomerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCustomer(
    request: google_ads_googleads_v0_services_customer_service_pb.GetCustomerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v0_resources_customer_pb.Customer) => void
  ): grpcWeb.ClientReadableStream<google_ads_googleads_v0_resources_customer_pb.Customer>;

}

export class CustomerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCustomer(
    request: google_ads_googleads_v0_services_customer_service_pb.GetCustomerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_ads_googleads_v0_resources_customer_pb.Customer>;

}

