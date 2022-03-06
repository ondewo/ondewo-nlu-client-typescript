import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_distribution_pb from '../../../google/api/distribution_pb';
import * as google_api_metric_pb from '../../../google/api/metric_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class LogMetric extends jspb.Message {
  getName(): string;
  setName(value: string): LogMetric;

  getDescription(): string;
  setDescription(value: string): LogMetric;

  getFilter(): string;
  setFilter(value: string): LogMetric;

  getMetricDescriptor(): google_api_metric_pb.MetricDescriptor | undefined;
  setMetricDescriptor(value?: google_api_metric_pb.MetricDescriptor): LogMetric;
  hasMetricDescriptor(): boolean;
  clearMetricDescriptor(): LogMetric;

  getValueExtractor(): string;
  setValueExtractor(value: string): LogMetric;

  getLabelExtractorsMap(): jspb.Map<string, string>;
  clearLabelExtractorsMap(): LogMetric;

  getBucketOptions(): google_api_distribution_pb.Distribution.BucketOptions | undefined;
  setBucketOptions(value?: google_api_distribution_pb.Distribution.BucketOptions): LogMetric;
  hasBucketOptions(): boolean;
  clearBucketOptions(): LogMetric;

  getVersion(): LogMetric.ApiVersion;
  setVersion(value: LogMetric.ApiVersion): LogMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogMetric.AsObject;
  static toObject(includeInstance: boolean, msg: LogMetric): LogMetric.AsObject;
  static serializeBinaryToWriter(message: LogMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogMetric;
  static deserializeBinaryFromReader(message: LogMetric, reader: jspb.BinaryReader): LogMetric;
}

export namespace LogMetric {
  export type AsObject = {
    name: string,
    description: string,
    filter: string,
    metricDescriptor?: google_api_metric_pb.MetricDescriptor.AsObject,
    valueExtractor: string,
    labelExtractorsMap: Array<[string, string]>,
    bucketOptions?: google_api_distribution_pb.Distribution.BucketOptions.AsObject,
    version: LogMetric.ApiVersion,
  }

  export enum ApiVersion { 
    V2 = 0,
    V1 = 1,
  }
}

export class ListLogMetricsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLogMetricsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLogMetricsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLogMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogMetricsRequest): ListLogMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLogMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogMetricsRequest;
  static deserializeBinaryFromReader(message: ListLogMetricsRequest, reader: jspb.BinaryReader): ListLogMetricsRequest;
}

export namespace ListLogMetricsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListLogMetricsResponse extends jspb.Message {
  getMetricsList(): Array<LogMetric>;
  setMetricsList(value: Array<LogMetric>): ListLogMetricsResponse;
  clearMetricsList(): ListLogMetricsResponse;
  addMetrics(value?: LogMetric, index?: number): LogMetric;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLogMetricsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogMetricsResponse): ListLogMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLogMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogMetricsResponse;
  static deserializeBinaryFromReader(message: ListLogMetricsResponse, reader: jspb.BinaryReader): ListLogMetricsResponse;
}

export namespace ListLogMetricsResponse {
  export type AsObject = {
    metricsList: Array<LogMetric.AsObject>,
    nextPageToken: string,
  }
}

export class GetLogMetricRequest extends jspb.Message {
  getMetricName(): string;
  setMetricName(value: string): GetLogMetricRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogMetricRequest): GetLogMetricRequest.AsObject;
  static serializeBinaryToWriter(message: GetLogMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogMetricRequest;
  static deserializeBinaryFromReader(message: GetLogMetricRequest, reader: jspb.BinaryReader): GetLogMetricRequest;
}

export namespace GetLogMetricRequest {
  export type AsObject = {
    metricName: string,
  }
}

export class CreateLogMetricRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateLogMetricRequest;

  getMetric(): LogMetric | undefined;
  setMetric(value?: LogMetric): CreateLogMetricRequest;
  hasMetric(): boolean;
  clearMetric(): CreateLogMetricRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLogMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLogMetricRequest): CreateLogMetricRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLogMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLogMetricRequest;
  static deserializeBinaryFromReader(message: CreateLogMetricRequest, reader: jspb.BinaryReader): CreateLogMetricRequest;
}

export namespace CreateLogMetricRequest {
  export type AsObject = {
    parent: string,
    metric?: LogMetric.AsObject,
  }
}

export class UpdateLogMetricRequest extends jspb.Message {
  getMetricName(): string;
  setMetricName(value: string): UpdateLogMetricRequest;

  getMetric(): LogMetric | undefined;
  setMetric(value?: LogMetric): UpdateLogMetricRequest;
  hasMetric(): boolean;
  clearMetric(): UpdateLogMetricRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLogMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLogMetricRequest): UpdateLogMetricRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLogMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLogMetricRequest;
  static deserializeBinaryFromReader(message: UpdateLogMetricRequest, reader: jspb.BinaryReader): UpdateLogMetricRequest;
}

export namespace UpdateLogMetricRequest {
  export type AsObject = {
    metricName: string,
    metric?: LogMetric.AsObject,
  }
}

export class DeleteLogMetricRequest extends jspb.Message {
  getMetricName(): string;
  setMetricName(value: string): DeleteLogMetricRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLogMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLogMetricRequest): DeleteLogMetricRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLogMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLogMetricRequest;
  static deserializeBinaryFromReader(message: DeleteLogMetricRequest, reader: jspb.BinaryReader): DeleteLogMetricRequest;
}

export namespace DeleteLogMetricRequest {
  export type AsObject = {
    metricName: string,
  }
}

