import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_devtools_cloudtrace_v1_trace_pb from '../../../../google/devtools/cloudtrace/v1/trace_pb';


export class TraceServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listTraces(
    request: google_devtools_cloudtrace_v1_trace_pb.ListTracesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudtrace_v1_trace_pb.ListTracesResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudtrace_v1_trace_pb.ListTracesResponse>;

  getTrace(
    request: google_devtools_cloudtrace_v1_trace_pb.GetTraceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudtrace_v1_trace_pb.Trace) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudtrace_v1_trace_pb.Trace>;

  patchTraces(
    request: google_devtools_cloudtrace_v1_trace_pb.PatchTracesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class TraceServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listTraces(
    request: google_devtools_cloudtrace_v1_trace_pb.ListTracesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudtrace_v1_trace_pb.ListTracesResponse>;

  getTrace(
    request: google_devtools_cloudtrace_v1_trace_pb.GetTraceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudtrace_v1_trace_pb.Trace>;

  patchTraces(
    request: google_devtools_cloudtrace_v1_trace_pb.PatchTracesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

