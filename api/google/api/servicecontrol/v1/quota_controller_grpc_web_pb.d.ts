import * as grpcWeb from 'grpc-web';

import * as google_api_servicecontrol_v1_quota_controller_pb from '../../../../google/api/servicecontrol/v1/quota_controller_pb';


export class QuotaControllerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  allocateQuota(
    request: google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse>;

}

export class QuotaControllerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  allocateQuota(
    request: google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse>;

}

