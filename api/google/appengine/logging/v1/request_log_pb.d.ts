import * as jspb from 'google-protobuf'

import * as google_logging_type_log_severity_pb from '../../../../google/logging/type/log_severity_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class LogLine extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): LogLine;
  hasTime(): boolean;
  clearTime(): LogLine;

  getSeverity(): google_logging_type_log_severity_pb.LogSeverity;
  setSeverity(value: google_logging_type_log_severity_pb.LogSeverity): LogLine;

  getLogMessage(): string;
  setLogMessage(value: string): LogLine;

  getSourceLocation(): SourceLocation | undefined;
  setSourceLocation(value?: SourceLocation): LogLine;
  hasSourceLocation(): boolean;
  clearSourceLocation(): LogLine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogLine.AsObject;
  static toObject(includeInstance: boolean, msg: LogLine): LogLine.AsObject;
  static serializeBinaryToWriter(message: LogLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogLine;
  static deserializeBinaryFromReader(message: LogLine, reader: jspb.BinaryReader): LogLine;
}

export namespace LogLine {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    severity: google_logging_type_log_severity_pb.LogSeverity,
    logMessage: string,
    sourceLocation?: SourceLocation.AsObject,
  }
}

export class SourceLocation extends jspb.Message {
  getFile(): string;
  setFile(value: string): SourceLocation;

  getLine(): number;
  setLine(value: number): SourceLocation;

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
    file: string,
    line: number,
    functionName: string,
  }
}

export class SourceReference extends jspb.Message {
  getRepository(): string;
  setRepository(value: string): SourceReference;

  getRevisionId(): string;
  setRevisionId(value: string): SourceReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceReference.AsObject;
  static toObject(includeInstance: boolean, msg: SourceReference): SourceReference.AsObject;
  static serializeBinaryToWriter(message: SourceReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceReference;
  static deserializeBinaryFromReader(message: SourceReference, reader: jspb.BinaryReader): SourceReference;
}

export namespace SourceReference {
  export type AsObject = {
    repository: string,
    revisionId: string,
  }
}

export class RequestLog extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): RequestLog;

  getModuleId(): string;
  setModuleId(value: string): RequestLog;

  getVersionId(): string;
  setVersionId(value: string): RequestLog;

  getRequestId(): string;
  setRequestId(value: string): RequestLog;

  getIp(): string;
  setIp(value: string): RequestLog;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): RequestLog;
  hasStartTime(): boolean;
  clearStartTime(): RequestLog;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): RequestLog;
  hasEndTime(): boolean;
  clearEndTime(): RequestLog;

  getLatency(): google_protobuf_duration_pb.Duration | undefined;
  setLatency(value?: google_protobuf_duration_pb.Duration): RequestLog;
  hasLatency(): boolean;
  clearLatency(): RequestLog;

  getMegaCycles(): number;
  setMegaCycles(value: number): RequestLog;

  getMethod(): string;
  setMethod(value: string): RequestLog;

  getResource(): string;
  setResource(value: string): RequestLog;

  getHttpVersion(): string;
  setHttpVersion(value: string): RequestLog;

  getStatus(): number;
  setStatus(value: number): RequestLog;

  getResponseSize(): number;
  setResponseSize(value: number): RequestLog;

  getReferrer(): string;
  setReferrer(value: string): RequestLog;

  getUserAgent(): string;
  setUserAgent(value: string): RequestLog;

  getNickname(): string;
  setNickname(value: string): RequestLog;

  getUrlMapEntry(): string;
  setUrlMapEntry(value: string): RequestLog;

  getHost(): string;
  setHost(value: string): RequestLog;

  getCost(): number;
  setCost(value: number): RequestLog;

  getTaskQueueName(): string;
  setTaskQueueName(value: string): RequestLog;

  getTaskName(): string;
  setTaskName(value: string): RequestLog;

  getWasLoadingRequest(): boolean;
  setWasLoadingRequest(value: boolean): RequestLog;

  getPendingTime(): google_protobuf_duration_pb.Duration | undefined;
  setPendingTime(value?: google_protobuf_duration_pb.Duration): RequestLog;
  hasPendingTime(): boolean;
  clearPendingTime(): RequestLog;

  getInstanceIndex(): number;
  setInstanceIndex(value: number): RequestLog;

  getFinished(): boolean;
  setFinished(value: boolean): RequestLog;

  getFirst(): boolean;
  setFirst(value: boolean): RequestLog;

  getInstanceId(): string;
  setInstanceId(value: string): RequestLog;

  getLineList(): Array<LogLine>;
  setLineList(value: Array<LogLine>): RequestLog;
  clearLineList(): RequestLog;
  addLine(value?: LogLine, index?: number): LogLine;

  getAppEngineRelease(): string;
  setAppEngineRelease(value: string): RequestLog;

  getTraceId(): string;
  setTraceId(value: string): RequestLog;

  getSourceReferenceList(): Array<SourceReference>;
  setSourceReferenceList(value: Array<SourceReference>): RequestLog;
  clearSourceReferenceList(): RequestLog;
  addSourceReference(value?: SourceReference, index?: number): SourceReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestLog.AsObject;
  static toObject(includeInstance: boolean, msg: RequestLog): RequestLog.AsObject;
  static serializeBinaryToWriter(message: RequestLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestLog;
  static deserializeBinaryFromReader(message: RequestLog, reader: jspb.BinaryReader): RequestLog;
}

export namespace RequestLog {
  export type AsObject = {
    appId: string,
    moduleId: string,
    versionId: string,
    requestId: string,
    ip: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    latency?: google_protobuf_duration_pb.Duration.AsObject,
    megaCycles: number,
    method: string,
    resource: string,
    httpVersion: string,
    status: number,
    responseSize: number,
    referrer: string,
    userAgent: string,
    nickname: string,
    urlMapEntry: string,
    host: string,
    cost: number,
    taskQueueName: string,
    taskName: string,
    wasLoadingRequest: boolean,
    pendingTime?: google_protobuf_duration_pb.Duration.AsObject,
    instanceIndex: number,
    finished: boolean,
    first: boolean,
    instanceId: string,
    lineList: Array<LogLine.AsObject>,
    appEngineRelease: string,
    traceId: string,
    sourceReferenceList: Array<SourceReference.AsObject>,
  }
}

