import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_devtools_clouddebugger_v2_debugger_pb from '../../../../google/devtools/clouddebugger/v2/debugger_pb';


export class Debugger2Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  setBreakpoint(
    request: google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointResponse>;

  getBreakpoint(
    request: google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointResponse>;

  deleteBreakpoint(
    request: google_devtools_clouddebugger_v2_debugger_pb.DeleteBreakpointRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBreakpoints(
    request: google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsResponse>;

  listDebuggees(
    request: google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesResponse>;

}

export class Debugger2PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  setBreakpoint(
    request: google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouddebugger_v2_debugger_pb.SetBreakpointResponse>;

  getBreakpoint(
    request: google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouddebugger_v2_debugger_pb.GetBreakpointResponse>;

  deleteBreakpoint(
    request: google_devtools_clouddebugger_v2_debugger_pb.DeleteBreakpointRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBreakpoints(
    request: google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouddebugger_v2_debugger_pb.ListBreakpointsResponse>;

  listDebuggees(
    request: google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouddebugger_v2_debugger_pb.ListDebuggeesResponse>;

}

