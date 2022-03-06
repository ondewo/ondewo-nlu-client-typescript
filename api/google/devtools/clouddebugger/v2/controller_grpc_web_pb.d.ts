import * as grpcWeb from 'grpc-web';

import * as google_devtools_clouddebugger_v2_controller_pb from '../../../../google/devtools/clouddebugger/v2/controller_pb';


export class Controller2Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  registerDebuggee(
    request: google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeResponse>;

  listActiveBreakpoints(
    request: google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsResponse>;

  updateActiveBreakpoint(
    request: google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointResponse>;

}

export class Controller2PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  registerDebuggee(
    request: google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouddebugger_v2_controller_pb.RegisterDebuggeeResponse>;

  listActiveBreakpoints(
    request: google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouddebugger_v2_controller_pb.ListActiveBreakpointsResponse>;

  updateActiveBreakpoint(
    request: google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouddebugger_v2_controller_pb.UpdateActiveBreakpointResponse>;

}

