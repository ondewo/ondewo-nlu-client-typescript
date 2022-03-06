import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_metric_pb from '../../../google/api/metric_pb';
import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_monitoring_v3_common_pb from '../../../google/monitoring/v3/common_pb';
import * as google_monitoring_v3_metric_pb from '../../../google/monitoring/v3/metric_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';


export class ListMonitoredResourceDescriptorsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListMonitoredResourceDescriptorsRequest;

  getFilter(): string;
  setFilter(value: string): ListMonitoredResourceDescriptorsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListMonitoredResourceDescriptorsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListMonitoredResourceDescriptorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMonitoredResourceDescriptorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMonitoredResourceDescriptorsRequest): ListMonitoredResourceDescriptorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMonitoredResourceDescriptorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMonitoredResourceDescriptorsRequest;
  static deserializeBinaryFromReader(message: ListMonitoredResourceDescriptorsRequest, reader: jspb.BinaryReader): ListMonitoredResourceDescriptorsRequest;
}

export namespace ListMonitoredResourceDescriptorsRequest {
  export type AsObject = {
    name: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListMonitoredResourceDescriptorsResponse extends jspb.Message {
  getResourceDescriptorsList(): Array<google_api_monitored_resource_pb.MonitoredResourceDescriptor>;
  setResourceDescriptorsList(value: Array<google_api_monitored_resource_pb.MonitoredResourceDescriptor>): ListMonitoredResourceDescriptorsResponse;
  clearResourceDescriptorsList(): ListMonitoredResourceDescriptorsResponse;
  addResourceDescriptors(value?: google_api_monitored_resource_pb.MonitoredResourceDescriptor, index?: number): google_api_monitored_resource_pb.MonitoredResourceDescriptor;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListMonitoredResourceDescriptorsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMonitoredResourceDescriptorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMonitoredResourceDescriptorsResponse): ListMonitoredResourceDescriptorsResponse.AsObject;
  static serializeBinaryToWriter(message: ListMonitoredResourceDescriptorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMonitoredResourceDescriptorsResponse;
  static deserializeBinaryFromReader(message: ListMonitoredResourceDescriptorsResponse, reader: jspb.BinaryReader): ListMonitoredResourceDescriptorsResponse;
}

export namespace ListMonitoredResourceDescriptorsResponse {
  export type AsObject = {
    resourceDescriptorsList: Array<google_api_monitored_resource_pb.MonitoredResourceDescriptor.AsObject>,
    nextPageToken: string,
  }
}

export class GetMonitoredResourceDescriptorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetMonitoredResourceDescriptorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMonitoredResourceDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMonitoredResourceDescriptorRequest): GetMonitoredResourceDescriptorRequest.AsObject;
  static serializeBinaryToWriter(message: GetMonitoredResourceDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMonitoredResourceDescriptorRequest;
  static deserializeBinaryFromReader(message: GetMonitoredResourceDescriptorRequest, reader: jspb.BinaryReader): GetMonitoredResourceDescriptorRequest;
}

export namespace GetMonitoredResourceDescriptorRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListMetricDescriptorsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListMetricDescriptorsRequest;

  getFilter(): string;
  setFilter(value: string): ListMetricDescriptorsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListMetricDescriptorsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListMetricDescriptorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMetricDescriptorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMetricDescriptorsRequest): ListMetricDescriptorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMetricDescriptorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMetricDescriptorsRequest;
  static deserializeBinaryFromReader(message: ListMetricDescriptorsRequest, reader: jspb.BinaryReader): ListMetricDescriptorsRequest;
}

export namespace ListMetricDescriptorsRequest {
  export type AsObject = {
    name: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListMetricDescriptorsResponse extends jspb.Message {
  getMetricDescriptorsList(): Array<google_api_metric_pb.MetricDescriptor>;
  setMetricDescriptorsList(value: Array<google_api_metric_pb.MetricDescriptor>): ListMetricDescriptorsResponse;
  clearMetricDescriptorsList(): ListMetricDescriptorsResponse;
  addMetricDescriptors(value?: google_api_metric_pb.MetricDescriptor, index?: number): google_api_metric_pb.MetricDescriptor;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListMetricDescriptorsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMetricDescriptorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMetricDescriptorsResponse): ListMetricDescriptorsResponse.AsObject;
  static serializeBinaryToWriter(message: ListMetricDescriptorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMetricDescriptorsResponse;
  static deserializeBinaryFromReader(message: ListMetricDescriptorsResponse, reader: jspb.BinaryReader): ListMetricDescriptorsResponse;
}

export namespace ListMetricDescriptorsResponse {
  export type AsObject = {
    metricDescriptorsList: Array<google_api_metric_pb.MetricDescriptor.AsObject>,
    nextPageToken: string,
  }
}

export class GetMetricDescriptorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetMetricDescriptorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetricDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetricDescriptorRequest): GetMetricDescriptorRequest.AsObject;
  static serializeBinaryToWriter(message: GetMetricDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetricDescriptorRequest;
  static deserializeBinaryFromReader(message: GetMetricDescriptorRequest, reader: jspb.BinaryReader): GetMetricDescriptorRequest;
}

export namespace GetMetricDescriptorRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateMetricDescriptorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateMetricDescriptorRequest;

  getMetricDescriptor(): google_api_metric_pb.MetricDescriptor | undefined;
  setMetricDescriptor(value?: google_api_metric_pb.MetricDescriptor): CreateMetricDescriptorRequest;
  hasMetricDescriptor(): boolean;
  clearMetricDescriptor(): CreateMetricDescriptorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMetricDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMetricDescriptorRequest): CreateMetricDescriptorRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMetricDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMetricDescriptorRequest;
  static deserializeBinaryFromReader(message: CreateMetricDescriptorRequest, reader: jspb.BinaryReader): CreateMetricDescriptorRequest;
}

export namespace CreateMetricDescriptorRequest {
  export type AsObject = {
    name: string,
    metricDescriptor?: google_api_metric_pb.MetricDescriptor.AsObject,
  }
}

export class DeleteMetricDescriptorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteMetricDescriptorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMetricDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMetricDescriptorRequest): DeleteMetricDescriptorRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMetricDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMetricDescriptorRequest;
  static deserializeBinaryFromReader(message: DeleteMetricDescriptorRequest, reader: jspb.BinaryReader): DeleteMetricDescriptorRequest;
}

export namespace DeleteMetricDescriptorRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTimeSeriesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListTimeSeriesRequest;

  getFilter(): string;
  setFilter(value: string): ListTimeSeriesRequest;

  getInterval(): google_monitoring_v3_common_pb.TimeInterval | undefined;
  setInterval(value?: google_monitoring_v3_common_pb.TimeInterval): ListTimeSeriesRequest;
  hasInterval(): boolean;
  clearInterval(): ListTimeSeriesRequest;

  getAggregation(): google_monitoring_v3_common_pb.Aggregation | undefined;
  setAggregation(value?: google_monitoring_v3_common_pb.Aggregation): ListTimeSeriesRequest;
  hasAggregation(): boolean;
  clearAggregation(): ListTimeSeriesRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListTimeSeriesRequest;

  getView(): ListTimeSeriesRequest.TimeSeriesView;
  setView(value: ListTimeSeriesRequest.TimeSeriesView): ListTimeSeriesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTimeSeriesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTimeSeriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTimeSeriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTimeSeriesRequest): ListTimeSeriesRequest.AsObject;
  static serializeBinaryToWriter(message: ListTimeSeriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTimeSeriesRequest;
  static deserializeBinaryFromReader(message: ListTimeSeriesRequest, reader: jspb.BinaryReader): ListTimeSeriesRequest;
}

export namespace ListTimeSeriesRequest {
  export type AsObject = {
    name: string,
    filter: string,
    interval?: google_monitoring_v3_common_pb.TimeInterval.AsObject,
    aggregation?: google_monitoring_v3_common_pb.Aggregation.AsObject,
    orderBy: string,
    view: ListTimeSeriesRequest.TimeSeriesView,
    pageSize: number,
    pageToken: string,
  }

  export enum TimeSeriesView { 
    FULL = 0,
    HEADERS = 1,
  }
}

export class ListTimeSeriesResponse extends jspb.Message {
  getTimeSeriesList(): Array<google_monitoring_v3_metric_pb.TimeSeries>;
  setTimeSeriesList(value: Array<google_monitoring_v3_metric_pb.TimeSeries>): ListTimeSeriesResponse;
  clearTimeSeriesList(): ListTimeSeriesResponse;
  addTimeSeries(value?: google_monitoring_v3_metric_pb.TimeSeries, index?: number): google_monitoring_v3_metric_pb.TimeSeries;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTimeSeriesResponse;

  getExecutionErrorsList(): Array<google_rpc_status_pb.Status>;
  setExecutionErrorsList(value: Array<google_rpc_status_pb.Status>): ListTimeSeriesResponse;
  clearExecutionErrorsList(): ListTimeSeriesResponse;
  addExecutionErrors(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTimeSeriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTimeSeriesResponse): ListTimeSeriesResponse.AsObject;
  static serializeBinaryToWriter(message: ListTimeSeriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTimeSeriesResponse;
  static deserializeBinaryFromReader(message: ListTimeSeriesResponse, reader: jspb.BinaryReader): ListTimeSeriesResponse;
}

export namespace ListTimeSeriesResponse {
  export type AsObject = {
    timeSeriesList: Array<google_monitoring_v3_metric_pb.TimeSeries.AsObject>,
    nextPageToken: string,
    executionErrorsList: Array<google_rpc_status_pb.Status.AsObject>,
  }
}

export class CreateTimeSeriesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateTimeSeriesRequest;

  getTimeSeriesList(): Array<google_monitoring_v3_metric_pb.TimeSeries>;
  setTimeSeriesList(value: Array<google_monitoring_v3_metric_pb.TimeSeries>): CreateTimeSeriesRequest;
  clearTimeSeriesList(): CreateTimeSeriesRequest;
  addTimeSeries(value?: google_monitoring_v3_metric_pb.TimeSeries, index?: number): google_monitoring_v3_metric_pb.TimeSeries;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTimeSeriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTimeSeriesRequest): CreateTimeSeriesRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTimeSeriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTimeSeriesRequest;
  static deserializeBinaryFromReader(message: CreateTimeSeriesRequest, reader: jspb.BinaryReader): CreateTimeSeriesRequest;
}

export namespace CreateTimeSeriesRequest {
  export type AsObject = {
    name: string,
    timeSeriesList: Array<google_monitoring_v3_metric_pb.TimeSeries.AsObject>,
  }
}

export class CreateTimeSeriesError extends jspb.Message {
  getTimeSeries(): google_monitoring_v3_metric_pb.TimeSeries | undefined;
  setTimeSeries(value?: google_monitoring_v3_metric_pb.TimeSeries): CreateTimeSeriesError;
  hasTimeSeries(): boolean;
  clearTimeSeries(): CreateTimeSeriesError;

  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): CreateTimeSeriesError;
  hasStatus(): boolean;
  clearStatus(): CreateTimeSeriesError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTimeSeriesError.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTimeSeriesError): CreateTimeSeriesError.AsObject;
  static serializeBinaryToWriter(message: CreateTimeSeriesError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTimeSeriesError;
  static deserializeBinaryFromReader(message: CreateTimeSeriesError, reader: jspb.BinaryReader): CreateTimeSeriesError;
}

export namespace CreateTimeSeriesError {
  export type AsObject = {
    timeSeries?: google_monitoring_v3_metric_pb.TimeSeries.AsObject,
    status?: google_rpc_status_pb.Status.AsObject,
  }
}

