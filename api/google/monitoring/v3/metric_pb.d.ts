import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_label_pb from '../../../google/api/label_pb';
import * as google_api_metric_pb from '../../../google/api/metric_pb';
import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_monitoring_v3_common_pb from '../../../google/monitoring/v3/common_pb';


export class Point extends jspb.Message {
  getInterval(): google_monitoring_v3_common_pb.TimeInterval | undefined;
  setInterval(value?: google_monitoring_v3_common_pb.TimeInterval): Point;
  hasInterval(): boolean;
  clearInterval(): Point;

  getValue(): google_monitoring_v3_common_pb.TypedValue | undefined;
  setValue(value?: google_monitoring_v3_common_pb.TypedValue): Point;
  hasValue(): boolean;
  clearValue(): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    interval?: google_monitoring_v3_common_pb.TimeInterval.AsObject,
    value?: google_monitoring_v3_common_pb.TypedValue.AsObject,
  }
}

export class TimeSeries extends jspb.Message {
  getMetric(): google_api_metric_pb.Metric | undefined;
  setMetric(value?: google_api_metric_pb.Metric): TimeSeries;
  hasMetric(): boolean;
  clearMetric(): TimeSeries;

  getResource(): google_api_monitored_resource_pb.MonitoredResource | undefined;
  setResource(value?: google_api_monitored_resource_pb.MonitoredResource): TimeSeries;
  hasResource(): boolean;
  clearResource(): TimeSeries;

  getMetadata(): google_api_monitored_resource_pb.MonitoredResourceMetadata | undefined;
  setMetadata(value?: google_api_monitored_resource_pb.MonitoredResourceMetadata): TimeSeries;
  hasMetadata(): boolean;
  clearMetadata(): TimeSeries;

  getMetricKind(): google_api_metric_pb.MetricDescriptor.MetricKind;
  setMetricKind(value: google_api_metric_pb.MetricDescriptor.MetricKind): TimeSeries;

  getValueType(): google_api_metric_pb.MetricDescriptor.ValueType;
  setValueType(value: google_api_metric_pb.MetricDescriptor.ValueType): TimeSeries;

  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): TimeSeries;
  clearPointsList(): TimeSeries;
  addPoints(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeries.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeries): TimeSeries.AsObject;
  static serializeBinaryToWriter(message: TimeSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeries;
  static deserializeBinaryFromReader(message: TimeSeries, reader: jspb.BinaryReader): TimeSeries;
}

export namespace TimeSeries {
  export type AsObject = {
    metric?: google_api_metric_pb.Metric.AsObject,
    resource?: google_api_monitored_resource_pb.MonitoredResource.AsObject,
    metadata?: google_api_monitored_resource_pb.MonitoredResourceMetadata.AsObject,
    metricKind: google_api_metric_pb.MetricDescriptor.MetricKind,
    valueType: google_api_metric_pb.MetricDescriptor.ValueType,
    pointsList: Array<Point.AsObject>,
  }
}

