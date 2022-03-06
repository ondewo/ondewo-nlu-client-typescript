import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_servicecontrol_v1_log_entry_pb from '../../../../google/api/servicecontrol/v1/log_entry_pb';
import * as google_api_servicecontrol_v1_metric_value_pb from '../../../../google/api/servicecontrol/v1/metric_value_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Operation extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): Operation;

  getOperationName(): string;
  setOperationName(value: string): Operation;

  getConsumerId(): string;
  setConsumerId(value: string): Operation;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Operation;
  hasStartTime(): boolean;
  clearStartTime(): Operation;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Operation;
  hasEndTime(): boolean;
  clearEndTime(): Operation;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Operation;

  getMetricValueSetsList(): Array<google_api_servicecontrol_v1_metric_value_pb.MetricValueSet>;
  setMetricValueSetsList(value: Array<google_api_servicecontrol_v1_metric_value_pb.MetricValueSet>): Operation;
  clearMetricValueSetsList(): Operation;
  addMetricValueSets(value?: google_api_servicecontrol_v1_metric_value_pb.MetricValueSet, index?: number): google_api_servicecontrol_v1_metric_value_pb.MetricValueSet;

  getLogEntriesList(): Array<google_api_servicecontrol_v1_log_entry_pb.LogEntry>;
  setLogEntriesList(value: Array<google_api_servicecontrol_v1_log_entry_pb.LogEntry>): Operation;
  clearLogEntriesList(): Operation;
  addLogEntries(value?: google_api_servicecontrol_v1_log_entry_pb.LogEntry, index?: number): google_api_servicecontrol_v1_log_entry_pb.LogEntry;

  getImportance(): Operation.Importance;
  setImportance(value: Operation.Importance): Operation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    operationId: string,
    operationName: string,
    consumerId: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    labelsMap: Array<[string, string]>,
    metricValueSetsList: Array<google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.AsObject>,
    logEntriesList: Array<google_api_servicecontrol_v1_log_entry_pb.LogEntry.AsObject>,
    importance: Operation.Importance,
  }

  export enum Importance { 
    LOW = 0,
    HIGH = 1,
  }
}

