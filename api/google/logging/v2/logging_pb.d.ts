import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_logging_v2_log_entry_pb from '../../../google/logging/v2/log_entry_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';


export class DeleteLogRequest extends jspb.Message {
  getLogName(): string;
  setLogName(value: string): DeleteLogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLogRequest): DeleteLogRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLogRequest;
  static deserializeBinaryFromReader(message: DeleteLogRequest, reader: jspb.BinaryReader): DeleteLogRequest;
}

export namespace DeleteLogRequest {
  export type AsObject = {
    logName: string,
  }
}

export class WriteLogEntriesRequest extends jspb.Message {
  getLogName(): string;
  setLogName(value: string): WriteLogEntriesRequest;

  getResource(): google_api_monitored_resource_pb.MonitoredResource | undefined;
  setResource(value?: google_api_monitored_resource_pb.MonitoredResource): WriteLogEntriesRequest;
  hasResource(): boolean;
  clearResource(): WriteLogEntriesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): WriteLogEntriesRequest;

  getEntriesList(): Array<google_logging_v2_log_entry_pb.LogEntry>;
  setEntriesList(value: Array<google_logging_v2_log_entry_pb.LogEntry>): WriteLogEntriesRequest;
  clearEntriesList(): WriteLogEntriesRequest;
  addEntries(value?: google_logging_v2_log_entry_pb.LogEntry, index?: number): google_logging_v2_log_entry_pb.LogEntry;

  getPartialSuccess(): boolean;
  setPartialSuccess(value: boolean): WriteLogEntriesRequest;

  getDryRun(): boolean;
  setDryRun(value: boolean): WriteLogEntriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteLogEntriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteLogEntriesRequest): WriteLogEntriesRequest.AsObject;
  static serializeBinaryToWriter(message: WriteLogEntriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteLogEntriesRequest;
  static deserializeBinaryFromReader(message: WriteLogEntriesRequest, reader: jspb.BinaryReader): WriteLogEntriesRequest;
}

export namespace WriteLogEntriesRequest {
  export type AsObject = {
    logName: string,
    resource?: google_api_monitored_resource_pb.MonitoredResource.AsObject,
    labelsMap: Array<[string, string]>,
    entriesList: Array<google_logging_v2_log_entry_pb.LogEntry.AsObject>,
    partialSuccess: boolean,
    dryRun: boolean,
  }
}

export class WriteLogEntriesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteLogEntriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WriteLogEntriesResponse): WriteLogEntriesResponse.AsObject;
  static serializeBinaryToWriter(message: WriteLogEntriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteLogEntriesResponse;
  static deserializeBinaryFromReader(message: WriteLogEntriesResponse, reader: jspb.BinaryReader): WriteLogEntriesResponse;
}

export namespace WriteLogEntriesResponse {
  export type AsObject = {
  }
}

export class WriteLogEntriesPartialErrors extends jspb.Message {
  getLogEntryErrorsMap(): jspb.Map<number, google_rpc_status_pb.Status>;
  clearLogEntryErrorsMap(): WriteLogEntriesPartialErrors;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteLogEntriesPartialErrors.AsObject;
  static toObject(includeInstance: boolean, msg: WriteLogEntriesPartialErrors): WriteLogEntriesPartialErrors.AsObject;
  static serializeBinaryToWriter(message: WriteLogEntriesPartialErrors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteLogEntriesPartialErrors;
  static deserializeBinaryFromReader(message: WriteLogEntriesPartialErrors, reader: jspb.BinaryReader): WriteLogEntriesPartialErrors;
}

export namespace WriteLogEntriesPartialErrors {
  export type AsObject = {
    logEntryErrorsMap: Array<[number, google_rpc_status_pb.Status.AsObject]>,
  }
}

export class ListLogEntriesRequest extends jspb.Message {
  getProjectIdsList(): Array<string>;
  setProjectIdsList(value: Array<string>): ListLogEntriesRequest;
  clearProjectIdsList(): ListLogEntriesRequest;
  addProjectIds(value: string, index?: number): ListLogEntriesRequest;

  getResourceNamesList(): Array<string>;
  setResourceNamesList(value: Array<string>): ListLogEntriesRequest;
  clearResourceNamesList(): ListLogEntriesRequest;
  addResourceNames(value: string, index?: number): ListLogEntriesRequest;

  getFilter(): string;
  setFilter(value: string): ListLogEntriesRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListLogEntriesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLogEntriesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLogEntriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogEntriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogEntriesRequest): ListLogEntriesRequest.AsObject;
  static serializeBinaryToWriter(message: ListLogEntriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogEntriesRequest;
  static deserializeBinaryFromReader(message: ListLogEntriesRequest, reader: jspb.BinaryReader): ListLogEntriesRequest;
}

export namespace ListLogEntriesRequest {
  export type AsObject = {
    projectIdsList: Array<string>,
    resourceNamesList: Array<string>,
    filter: string,
    orderBy: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListLogEntriesResponse extends jspb.Message {
  getEntriesList(): Array<google_logging_v2_log_entry_pb.LogEntry>;
  setEntriesList(value: Array<google_logging_v2_log_entry_pb.LogEntry>): ListLogEntriesResponse;
  clearEntriesList(): ListLogEntriesResponse;
  addEntries(value?: google_logging_v2_log_entry_pb.LogEntry, index?: number): google_logging_v2_log_entry_pb.LogEntry;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLogEntriesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogEntriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogEntriesResponse): ListLogEntriesResponse.AsObject;
  static serializeBinaryToWriter(message: ListLogEntriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogEntriesResponse;
  static deserializeBinaryFromReader(message: ListLogEntriesResponse, reader: jspb.BinaryReader): ListLogEntriesResponse;
}

export namespace ListLogEntriesResponse {
  export type AsObject = {
    entriesList: Array<google_logging_v2_log_entry_pb.LogEntry.AsObject>,
    nextPageToken: string,
  }
}

export class ListMonitoredResourceDescriptorsRequest extends jspb.Message {
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

export class ListLogsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLogsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLogsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogsRequest): ListLogsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogsRequest;
  static deserializeBinaryFromReader(message: ListLogsRequest, reader: jspb.BinaryReader): ListLogsRequest;
}

export namespace ListLogsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListLogsResponse extends jspb.Message {
  getLogNamesList(): Array<string>;
  setLogNamesList(value: Array<string>): ListLogsResponse;
  clearLogNamesList(): ListLogsResponse;
  addLogNames(value: string, index?: number): ListLogsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLogsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogsResponse): ListLogsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogsResponse;
  static deserializeBinaryFromReader(message: ListLogsResponse, reader: jspb.BinaryReader): ListLogsResponse;
}

export namespace ListLogsResponse {
  export type AsObject = {
    logNamesList: Array<string>,
    nextPageToken: string,
  }
}

