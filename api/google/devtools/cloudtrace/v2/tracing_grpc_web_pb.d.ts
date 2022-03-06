import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_devtools_cloudtrace_v2_trace_pb from '../../../../google/devtools/cloudtrace/v2/trace_pb';
import * as google_devtools_cloudtrace_v2_tracing_pb from '../../../../google/devtools/cloudtrace/v2/tracing_pb';


export class TraceServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  batchWriteSpans(
    request: google_devtools_cloudtrace_v2_tracing_pb.BatchWriteSpansRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createSpan(
    request: google_devtools_cloudtrace_v2_trace_pb.Span,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudtrace_v2_trace_pb.Span) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudtrace_v2_trace_pb.Span>;

}

export class TraceServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  batchWriteSpans(
    request: google_devtools_cloudtrace_v2_tracing_pb.BatchWriteSpansRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createSpan(
    request: google_devtools_cloudtrace_v2_trace_pb.Span,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudtrace_v2_trace_pb.Span>;

}

