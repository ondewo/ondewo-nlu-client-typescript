import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_monitored_resource_pb from '../../../../google/api/monitored_resource_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ErrorGroup extends jspb.Message {
  getName(): string;
  setName(value: string): ErrorGroup;

  getGroupId(): string;
  setGroupId(value: string): ErrorGroup;

  getTrackingIssuesList(): Array<TrackingIssue>;
  setTrackingIssuesList(value: Array<TrackingIssue>): ErrorGroup;
  clearTrackingIssuesList(): ErrorGroup;
  addTrackingIssues(value?: TrackingIssue, index?: number): TrackingIssue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorGroup): ErrorGroup.AsObject;
  static serializeBinaryToWriter(message: ErrorGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorGroup;
  static deserializeBinaryFromReader(message: ErrorGroup, reader: jspb.BinaryReader): ErrorGroup;
}

export namespace ErrorGroup {
  export type AsObject = {
    name: string,
    groupId: string,
    trackingIssuesList: Array<TrackingIssue.AsObject>,
  }
}

export class TrackingIssue extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): TrackingIssue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackingIssue.AsObject;
  static toObject(includeInstance: boolean, msg: TrackingIssue): TrackingIssue.AsObject;
  static serializeBinaryToWriter(message: TrackingIssue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackingIssue;
  static deserializeBinaryFromReader(message: TrackingIssue, reader: jspb.BinaryReader): TrackingIssue;
}

export namespace TrackingIssue {
  export type AsObject = {
    url: string,
  }
}

export class ErrorEvent extends jspb.Message {
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): ErrorEvent;
  hasEventTime(): boolean;
  clearEventTime(): ErrorEvent;

  getServiceContext(): ServiceContext | undefined;
  setServiceContext(value?: ServiceContext): ErrorEvent;
  hasServiceContext(): boolean;
  clearServiceContext(): ErrorEvent;

  getMessage(): string;
  setMessage(value: string): ErrorEvent;

  getContext(): ErrorContext | undefined;
  setContext(value?: ErrorContext): ErrorEvent;
  hasContext(): boolean;
  clearContext(): ErrorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorEvent): ErrorEvent.AsObject;
  static serializeBinaryToWriter(message: ErrorEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorEvent;
  static deserializeBinaryFromReader(message: ErrorEvent, reader: jspb.BinaryReader): ErrorEvent;
}

export namespace ErrorEvent {
  export type AsObject = {
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    serviceContext?: ServiceContext.AsObject,
    message: string,
    context?: ErrorContext.AsObject,
  }
}

export class ServiceContext extends jspb.Message {
  getService(): string;
  setService(value: string): ServiceContext;

  getVersion(): string;
  setVersion(value: string): ServiceContext;

  getResourceType(): string;
  setResourceType(value: string): ServiceContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceContext.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceContext): ServiceContext.AsObject;
  static serializeBinaryToWriter(message: ServiceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceContext;
  static deserializeBinaryFromReader(message: ServiceContext, reader: jspb.BinaryReader): ServiceContext;
}

export namespace ServiceContext {
  export type AsObject = {
    service: string,
    version: string,
    resourceType: string,
  }
}

export class ErrorContext extends jspb.Message {
  getHttpRequest(): HttpRequestContext | undefined;
  setHttpRequest(value?: HttpRequestContext): ErrorContext;
  hasHttpRequest(): boolean;
  clearHttpRequest(): ErrorContext;

  getUser(): string;
  setUser(value: string): ErrorContext;

  getReportLocation(): SourceLocation | undefined;
  setReportLocation(value?: SourceLocation): ErrorContext;
  hasReportLocation(): boolean;
  clearReportLocation(): ErrorContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorContext.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorContext): ErrorContext.AsObject;
  static serializeBinaryToWriter(message: ErrorContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorContext;
  static deserializeBinaryFromReader(message: ErrorContext, reader: jspb.BinaryReader): ErrorContext;
}

export namespace ErrorContext {
  export type AsObject = {
    httpRequest?: HttpRequestContext.AsObject,
    user: string,
    reportLocation?: SourceLocation.AsObject,
  }
}

export class HttpRequestContext extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): HttpRequestContext;

  getUrl(): string;
  setUrl(value: string): HttpRequestContext;

  getUserAgent(): string;
  setUserAgent(value: string): HttpRequestContext;

  getReferrer(): string;
  setReferrer(value: string): HttpRequestContext;

  getResponseStatusCode(): number;
  setResponseStatusCode(value: number): HttpRequestContext;

  getRemoteIp(): string;
  setRemoteIp(value: string): HttpRequestContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpRequestContext.AsObject;
  static toObject(includeInstance: boolean, msg: HttpRequestContext): HttpRequestContext.AsObject;
  static serializeBinaryToWriter(message: HttpRequestContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpRequestContext;
  static deserializeBinaryFromReader(message: HttpRequestContext, reader: jspb.BinaryReader): HttpRequestContext;
}

export namespace HttpRequestContext {
  export type AsObject = {
    method: string,
    url: string,
    userAgent: string,
    referrer: string,
    responseStatusCode: number,
    remoteIp: string,
  }
}

export class SourceLocation extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): SourceLocation;

  getLineNumber(): number;
  setLineNumber(value: number): SourceLocation;

  getFunctionName(): string;
  setFunctionName(value: string): SourceLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: SourceLocation): SourceLocation.AsObject;
  static serializeBinaryToWriter(message: SourceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceLocation;
  static deserializeBinaryFromReader(message: SourceLocation, reader: jspb.BinaryReader): SourceLocation;
}

export namespace SourceLocation {
  export type AsObject = {
    filePath: string,
    lineNumber: number,
    functionName: string,
  }
}

