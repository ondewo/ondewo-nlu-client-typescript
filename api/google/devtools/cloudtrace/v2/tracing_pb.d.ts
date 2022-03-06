import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_cloudtrace_v2_trace_pb from '../../../../google/devtools/cloudtrace/v2/trace_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class BatchWriteSpansRequest extends jspb.Message {
  getName(): string;
  setName(value: string): BatchWriteSpansRequest;

  getSpansList(): Array<google_devtools_cloudtrace_v2_trace_pb.Span>;
  setSpansList(value: Array<google_devtools_cloudtrace_v2_trace_pb.Span>): BatchWriteSpansRequest;
  clearSpansList(): BatchWriteSpansRequest;
  addSpans(value?: google_devtools_cloudtrace_v2_trace_pb.Span, index?: number): google_devtools_cloudtrace_v2_trace_pb.Span;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchWriteSpansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchWriteSpansRequest): BatchWriteSpansRequest.AsObject;
  static serializeBinaryToWriter(message: BatchWriteSpansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchWriteSpansRequest;
  static deserializeBinaryFromReader(message: BatchWriteSpansRequest, reader: jspb.BinaryReader): BatchWriteSpansRequest;
}

export namespace BatchWriteSpansRequest {
  export type AsObject = {
    name: string,
    spansList: Array<google_devtools_cloudtrace_v2_trace_pb.Span.AsObject>,
  }
}

