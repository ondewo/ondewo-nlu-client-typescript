import * as grpcWeb from 'grpc-web';

import * as google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb from '../../../../google/devtools/clouderrorreporting/v1beta1/report_errors_service_pb';


export class ReportErrorsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  reportErrorEvent(
    request: google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventResponse>;

}

export class ReportErrorsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  reportErrorEvent(
    request: google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouderrorreporting_v1beta1_report_errors_service_pb.ReportErrorEventResponse>;

}

