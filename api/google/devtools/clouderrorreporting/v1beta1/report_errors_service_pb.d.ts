import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_clouderrorreporting_v1beta1_common_pb from '../../../../google/devtools/clouderrorreporting/v1beta1/common_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ReportErrorEventRequest extends jspb.Message {
  getProjectName(): string;
  setProjectName(value: string): ReportErrorEventRequest;

  getEvent(): ReportedErrorEvent | undefined;
  setEvent(value?: ReportedErrorEvent): ReportErrorEventRequest;
  hasEvent(): boolean;
  clearEvent(): ReportErrorEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportErrorEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportErrorEventRequest): ReportErrorEventRequest.AsObject;
  static serializeBinaryToWriter(message: ReportErrorEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportErrorEventRequest;
  static deserializeBinaryFromReader(message: ReportErrorEventRequest, reader: jspb.BinaryReader): ReportErrorEventRequest;
}

export namespace ReportErrorEventRequest {
  export type AsObject = {
    projectName: string,
    event?: ReportedErrorEvent.AsObject,
  }
}

export class ReportErrorEventResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportErrorEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportErrorEventResponse): ReportErrorEventResponse.AsObject;
  static serializeBinaryToWriter(message: ReportErrorEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportErrorEventResponse;
  static deserializeBinaryFromReader(message: ReportErrorEventResponse, reader: jspb.BinaryReader): ReportErrorEventResponse;
}

export namespace ReportErrorEventResponse {
  export type AsObject = {
  }
}

export class ReportedErrorEvent extends jspb.Message {
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): ReportedErrorEvent;
  hasEventTime(): boolean;
  clearEventTime(): ReportedErrorEvent;

  getServiceContext(): google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext | undefined;
  setServiceContext(value?: google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext): ReportedErrorEvent;
  hasServiceContext(): boolean;
  clearServiceContext(): ReportedErrorEvent;

  getMessage(): string;
  setMessage(value: string): ReportedErrorEvent;

  getContext(): google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext | undefined;
  setContext(value?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext): ReportedErrorEvent;
  hasContext(): boolean;
  clearContext(): ReportedErrorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportedErrorEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ReportedErrorEvent): ReportedErrorEvent.AsObject;
  static serializeBinaryToWriter(message: ReportedErrorEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportedErrorEvent;
  static deserializeBinaryFromReader(message: ReportedErrorEvent, reader: jspb.BinaryReader): ReportedErrorEvent;
}

export namespace ReportedErrorEvent {
  export type AsObject = {
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    serviceContext?: google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext.AsObject,
    message: string,
    context?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext.AsObject,
  }
}

