import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_api_metric_pb from '../../../google/api/metric_pb';
import * as google_monitoring_v3_metric_service_pb from '../../../google/monitoring/v3/metric_service_pb';


export class MetricServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listMonitoredResourceDescriptors(
    request: google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsResponse>;

  getMonitoredResourceDescriptor(
    request: google_monitoring_v3_metric_service_pb.GetMonitoredResourceDescriptorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_monitored_resource_pb.MonitoredResourceDescriptor) => void
  ): grpcWeb.ClientReadableStream<google_api_monitored_resource_pb.MonitoredResourceDescriptor>;

  listMetricDescriptors(
    request: google_monitoring_v3_metric_service_pb.ListMetricDescriptorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_metric_service_pb.ListMetricDescriptorsResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_metric_service_pb.ListMetricDescriptorsResponse>;

  getMetricDescriptor(
    request: google_monitoring_v3_metric_service_pb.GetMetricDescriptorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_metric_pb.MetricDescriptor) => void
  ): grpcWeb.ClientReadableStream<google_api_metric_pb.MetricDescriptor>;

  createMetricDescriptor(
    request: google_monitoring_v3_metric_service_pb.CreateMetricDescriptorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_metric_pb.MetricDescriptor) => void
  ): grpcWeb.ClientReadableStream<google_api_metric_pb.MetricDescriptor>;

  deleteMetricDescriptor(
    request: google_monitoring_v3_metric_service_pb.DeleteMetricDescriptorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listTimeSeries(
    request: google_monitoring_v3_metric_service_pb.ListTimeSeriesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_metric_service_pb.ListTimeSeriesResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_metric_service_pb.ListTimeSeriesResponse>;

  createTimeSeries(
    request: google_monitoring_v3_metric_service_pb.CreateTimeSeriesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class MetricServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listMonitoredResourceDescriptors(
    request: google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_metric_service_pb.ListMonitoredResourceDescriptorsResponse>;

  getMonitoredResourceDescriptor(
    request: google_monitoring_v3_metric_service_pb.GetMonitoredResourceDescriptorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_monitored_resource_pb.MonitoredResourceDescriptor>;

  listMetricDescriptors(
    request: google_monitoring_v3_metric_service_pb.ListMetricDescriptorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_metric_service_pb.ListMetricDescriptorsResponse>;

  getMetricDescriptor(
    request: google_monitoring_v3_metric_service_pb.GetMetricDescriptorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_metric_pb.MetricDescriptor>;

  createMetricDescriptor(
    request: google_monitoring_v3_metric_service_pb.CreateMetricDescriptorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_metric_pb.MetricDescriptor>;

  deleteMetricDescriptor(
    request: google_monitoring_v3_metric_service_pb.DeleteMetricDescriptorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listTimeSeries(
    request: google_monitoring_v3_metric_service_pb.ListTimeSeriesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_metric_service_pb.ListTimeSeriesResponse>;

  createTimeSeries(
    request: google_monitoring_v3_metric_service_pb.CreateTimeSeriesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

