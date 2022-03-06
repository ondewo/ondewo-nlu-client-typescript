import * as grpcWeb from 'grpc-web';

import * as google_api_servicecontrol_v1_service_controller_pb from '../../../../google/api/servicecontrol/v1/service_controller_pb';


export class ServiceControllerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  check(
    request: google_api_servicecontrol_v1_service_controller_pb.CheckRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_servicecontrol_v1_service_controller_pb.CheckResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_servicecontrol_v1_service_controller_pb.CheckResponse>;

  report(
    request: google_api_servicecontrol_v1_service_controller_pb.ReportRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_servicecontrol_v1_service_controller_pb.ReportResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_servicecontrol_v1_service_controller_pb.ReportResponse>;

}

export class ServiceControllerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  check(
    request: google_api_servicecontrol_v1_service_controller_pb.CheckRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_servicecontrol_v1_service_controller_pb.CheckResponse>;

  report(
    request: google_api_servicecontrol_v1_service_controller_pb.ReportRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_servicecontrol_v1_service_controller_pb.ReportResponse>;

}

