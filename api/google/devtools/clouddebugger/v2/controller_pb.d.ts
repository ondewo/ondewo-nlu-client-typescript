import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_clouddebugger_v2_data_pb from '../../../../google/devtools/clouddebugger/v2/data_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class RegisterDebuggeeRequest extends jspb.Message {
  getDebuggee(): google_devtools_clouddebugger_v2_data_pb.Debuggee | undefined;
  setDebuggee(value?: google_devtools_clouddebugger_v2_data_pb.Debuggee): RegisterDebuggeeRequest;
  hasDebuggee(): boolean;
  clearDebuggee(): RegisterDebuggeeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterDebuggeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterDebuggeeRequest): RegisterDebuggeeRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterDebuggeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterDebuggeeRequest;
  static deserializeBinaryFromReader(message: RegisterDebuggeeRequest, reader: jspb.BinaryReader): RegisterDebuggeeRequest;
}

export namespace RegisterDebuggeeRequest {
  export type AsObject = {
    debuggee?: google_devtools_clouddebugger_v2_data_pb.Debuggee.AsObject,
  }
}

export class RegisterDebuggeeResponse extends jspb.Message {
  getDebuggee(): google_devtools_clouddebugger_v2_data_pb.Debuggee | undefined;
  setDebuggee(value?: google_devtools_clouddebugger_v2_data_pb.Debuggee): RegisterDebuggeeResponse;
  hasDebuggee(): boolean;
  clearDebuggee(): RegisterDebuggeeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterDebuggeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterDebuggeeResponse): RegisterDebuggeeResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterDebuggeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterDebuggeeResponse;
  static deserializeBinaryFromReader(message: RegisterDebuggeeResponse, reader: jspb.BinaryReader): RegisterDebuggeeResponse;
}

export namespace RegisterDebuggeeResponse {
  export type AsObject = {
    debuggee?: google_devtools_clouddebugger_v2_data_pb.Debuggee.AsObject,
  }
}

export class ListActiveBreakpointsRequest extends jspb.Message {
  getDebuggeeId(): string;
  setDebuggeeId(value: string): ListActiveBreakpointsRequest;

  getWaitToken(): string;
  setWaitToken(value: string): ListActiveBreakpointsRequest;

  getSuccessOnTimeout(): boolean;
  setSuccessOnTimeout(value: boolean): ListActiveBreakpointsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActiveBreakpointsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListActiveBreakpointsRequest): ListActiveBreakpointsRequest.AsObject;
  static serializeBinaryToWriter(message: ListActiveBreakpointsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActiveBreakpointsRequest;
  static deserializeBinaryFromReader(message: ListActiveBreakpointsRequest, reader: jspb.BinaryReader): ListActiveBreakpointsRequest;
}

export namespace ListActiveBreakpointsRequest {
  export type AsObject = {
    debuggeeId: string,
    waitToken: string,
    successOnTimeout: boolean,
  }
}

export class ListActiveBreakpointsResponse extends jspb.Message {
  getBreakpointsList(): Array<google_devtools_clouddebugger_v2_data_pb.Breakpoint>;
  setBreakpointsList(value: Array<google_devtools_clouddebugger_v2_data_pb.Breakpoint>): ListActiveBreakpointsResponse;
  clearBreakpointsList(): ListActiveBreakpointsResponse;
  addBreakpoints(value?: google_devtools_clouddebugger_v2_data_pb.Breakpoint, index?: number): google_devtools_clouddebugger_v2_data_pb.Breakpoint;

  getNextWaitToken(): string;
  setNextWaitToken(value: string): ListActiveBreakpointsResponse;

  getWaitExpired(): boolean;
  setWaitExpired(value: boolean): ListActiveBreakpointsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActiveBreakpointsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListActiveBreakpointsResponse): ListActiveBreakpointsResponse.AsObject;
  static serializeBinaryToWriter(message: ListActiveBreakpointsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActiveBreakpointsResponse;
  static deserializeBinaryFromReader(message: ListActiveBreakpointsResponse, reader: jspb.BinaryReader): ListActiveBreakpointsResponse;
}

export namespace ListActiveBreakpointsResponse {
  export type AsObject = {
    breakpointsList: Array<google_devtools_clouddebugger_v2_data_pb.Breakpoint.AsObject>,
    nextWaitToken: string,
    waitExpired: boolean,
  }
}

export class UpdateActiveBreakpointRequest extends jspb.Message {
  getDebuggeeId(): string;
  setDebuggeeId(value: string): UpdateActiveBreakpointRequest;

  getBreakpoint(): google_devtools_clouddebugger_v2_data_pb.Breakpoint | undefined;
  setBreakpoint(value?: google_devtools_clouddebugger_v2_data_pb.Breakpoint): UpdateActiveBreakpointRequest;
  hasBreakpoint(): boolean;
  clearBreakpoint(): UpdateActiveBreakpointRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActiveBreakpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActiveBreakpointRequest): UpdateActiveBreakpointRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateActiveBreakpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActiveBreakpointRequest;
  static deserializeBinaryFromReader(message: UpdateActiveBreakpointRequest, reader: jspb.BinaryReader): UpdateActiveBreakpointRequest;
}

export namespace UpdateActiveBreakpointRequest {
  export type AsObject = {
    debuggeeId: string,
    breakpoint?: google_devtools_clouddebugger_v2_data_pb.Breakpoint.AsObject,
  }
}

export class UpdateActiveBreakpointResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActiveBreakpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActiveBreakpointResponse): UpdateActiveBreakpointResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateActiveBreakpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActiveBreakpointResponse;
  static deserializeBinaryFromReader(message: UpdateActiveBreakpointResponse, reader: jspb.BinaryReader): UpdateActiveBreakpointResponse;
}

export namespace UpdateActiveBreakpointResponse {
  export type AsObject = {
  }
}

