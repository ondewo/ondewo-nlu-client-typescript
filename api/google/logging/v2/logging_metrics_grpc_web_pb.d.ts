import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_logging_v2_logging_metrics_pb from '../../../google/logging/v2/logging_metrics_pb';


export class MetricsServiceV2Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listLogMetrics(
    request: google_logging_v2_logging_metrics_pb.ListLogMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_metrics_pb.ListLogMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_metrics_pb.ListLogMetricsResponse>;

  getLogMetric(
    request: google_logging_v2_logging_metrics_pb.GetLogMetricRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_metrics_pb.LogMetric) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_metrics_pb.LogMetric>;

  createLogMetric(
    request: google_logging_v2_logging_metrics_pb.CreateLogMetricRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_metrics_pb.LogMetric) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_metrics_pb.LogMetric>;

  updateLogMetric(
    request: google_logging_v2_logging_metrics_pb.UpdateLogMetricRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_metrics_pb.LogMetric) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_metrics_pb.LogMetric>;

  deleteLogMetric(
    request: google_logging_v2_logging_metrics_pb.DeleteLogMetricRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class MetricsServiceV2PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listLogMetrics(
    request: google_logging_v2_logging_metrics_pb.ListLogMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_metrics_pb.ListLogMetricsResponse>;

  getLogMetric(
    request: google_logging_v2_logging_metrics_pb.GetLogMetricRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_metrics_pb.LogMetric>;

  createLogMetric(
    request: google_logging_v2_logging_metrics_pb.CreateLogMetricRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_metrics_pb.LogMetric>;

  updateLogMetric(
    request: google_logging_v2_logging_metrics_pb.UpdateLogMetricRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_metrics_pb.LogMetric>;

  deleteLogMetric(
    request: google_logging_v2_logging_metrics_pb.DeleteLogMetricRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

