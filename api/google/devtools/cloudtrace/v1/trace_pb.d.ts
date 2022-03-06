import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Trace extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): Trace;

  getTraceId(): string;
  setTraceId(value: string): Trace;

  getSpansList(): Array<TraceSpan>;
  setSpansList(value: Array<TraceSpan>): Trace;
  clearSpansList(): Trace;
  addSpans(value?: TraceSpan, index?: number): TraceSpan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trace.AsObject;
  static toObject(includeInstance: boolean, msg: Trace): Trace.AsObject;
  static serializeBinaryToWriter(message: Trace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trace;
  static deserializeBinaryFromReader(message: Trace, reader: jspb.BinaryReader): Trace;
}

export namespace Trace {
  export type AsObject = {
    projectId: string,
    traceId: string,
    spansList: Array<TraceSpan.AsObject>,
  }
}

export class Traces extends jspb.Message {
  getTracesList(): Array<Trace>;
  setTracesList(value: Array<Trace>): Traces;
  clearTracesList(): Traces;
  addTraces(value?: Trace, index?: number): Trace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Traces.AsObject;
  static toObject(includeInstance: boolean, msg: Traces): Traces.AsObject;
  static serializeBinaryToWriter(message: Traces, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Traces;
  static deserializeBinaryFromReader(message: Traces, reader: jspb.BinaryReader): Traces;
}

export namespace Traces {
  export type AsObject = {
    tracesList: Array<Trace.AsObject>,
  }
}

export class TraceSpan extends jspb.Message {
  getSpanId(): number;
  setSpanId(value: number): TraceSpan;

  getKind(): TraceSpan.SpanKind;
  setKind(value: TraceSpan.SpanKind): TraceSpan;

  getName(): string;
  setName(value: string): TraceSpan;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TraceSpan;
  hasStartTime(): boolean;
  clearStartTime(): TraceSpan;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TraceSpan;
  hasEndTime(): boolean;
  clearEndTime(): TraceSpan;

  getParentSpanId(): number;
  setParentSpanId(value: number): TraceSpan;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): TraceSpan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraceSpan.AsObject;
  static toObject(includeInstance: boolean, msg: TraceSpan): TraceSpan.AsObject;
  static serializeBinaryToWriter(message: TraceSpan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraceSpan;
  static deserializeBinaryFromReader(message: TraceSpan, reader: jspb.BinaryReader): TraceSpan;
}

export namespace TraceSpan {
  export type AsObject = {
    spanId: number,
    kind: TraceSpan.SpanKind,
    name: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    parentSpanId: number,
    labelsMap: Array<[string, string]>,
  }

  export enum SpanKind { 
    SPAN_KIND_UNSPECIFIED = 0,
    RPC_SERVER = 1,
    RPC_CLIENT = 2,
  }
}

export class ListTracesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListTracesRequest;

  getView(): ListTracesRequest.ViewType;
  setView(value: ListTracesRequest.ViewType): ListTracesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTracesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTracesRequest;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ListTracesRequest;
  hasStartTime(): boolean;
  clearStartTime(): ListTracesRequest;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): ListTracesRequest;
  hasEndTime(): boolean;
  clearEndTime(): ListTracesRequest;

  getFilter(): string;
  setFilter(value: string): ListTracesRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListTracesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTracesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTracesRequest): ListTracesRequest.AsObject;
  static serializeBinaryToWriter(message: ListTracesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTracesRequest;
  static deserializeBinaryFromReader(message: ListTracesRequest, reader: jspb.BinaryReader): ListTracesRequest;
}

export namespace ListTracesRequest {
  export type AsObject = {
    projectId: string,
    view: ListTracesRequest.ViewType,
    pageSize: number,
    pageToken: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    filter: string,
    orderBy: string,
  }

  export enum ViewType { 
    VIEW_TYPE_UNSPECIFIED = 0,
    MINIMAL = 1,
    ROOTSPAN = 2,
    COMPLETE = 3,
  }
}

export class ListTracesResponse extends jspb.Message {
  getTracesList(): Array<Trace>;
  setTracesList(value: Array<Trace>): ListTracesResponse;
  clearTracesList(): ListTracesResponse;
  addTraces(value?: Trace, index?: number): Trace;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTracesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTracesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTracesResponse): ListTracesResponse.AsObject;
  static serializeBinaryToWriter(message: ListTracesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTracesResponse;
  static deserializeBinaryFromReader(message: ListTracesResponse, reader: jspb.BinaryReader): ListTracesResponse;
}

export namespace ListTracesResponse {
  export type AsObject = {
    tracesList: Array<Trace.AsObject>,
    nextPageToken: string,
  }
}

export class GetTraceRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetTraceRequest;

  getTraceId(): string;
  setTraceId(value: string): GetTraceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTraceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTraceRequest): GetTraceRequest.AsObject;
  static serializeBinaryToWriter(message: GetTraceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTraceRequest;
  static deserializeBinaryFromReader(message: GetTraceRequest, reader: jspb.BinaryReader): GetTraceRequest;
}

export namespace GetTraceRequest {
  export type AsObject = {
    projectId: string,
    traceId: string,
  }
}

export class PatchTracesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): PatchTracesRequest;

  getTraces(): Traces | undefined;
  setTraces(value?: Traces): PatchTracesRequest;
  hasTraces(): boolean;
  clearTraces(): PatchTracesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchTracesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchTracesRequest): PatchTracesRequest.AsObject;
  static serializeBinaryToWriter(message: PatchTracesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchTracesRequest;
  static deserializeBinaryFromReader(message: PatchTracesRequest, reader: jspb.BinaryReader): PatchTracesRequest;
}

export namespace PatchTracesRequest {
  export type AsObject = {
    projectId: string,
    traces?: Traces.AsObject,
  }
}

