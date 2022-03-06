import * as grpcWeb from 'grpc-web';

import * as google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb from '../../../../google/devtools/clouderrorreporting/v1beta1/error_stats_service_pb';


export class ErrorStatsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listGroupStats(
    request: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsResponse>;

  listEvents(
    request: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsResponse>;

  deleteEvents(
    request: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsResponse>;

}

export class ErrorStatsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listGroupStats(
    request: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListGroupStatsResponse>;

  listEvents(
    request: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.ListEventsResponse>;

  deleteEvents(
    request: google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouderrorreporting_v1beta1_error_stats_service_pb.DeleteEventsResponse>;

}

