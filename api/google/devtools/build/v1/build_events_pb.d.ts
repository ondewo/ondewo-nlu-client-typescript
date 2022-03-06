import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_build_v1_build_status_pb from '../../../../google/devtools/build/v1/build_status_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class BuildEvent extends jspb.Message {
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): BuildEvent;
  hasEventTime(): boolean;
  clearEventTime(): BuildEvent;

  getInvocationAttemptStarted(): BuildEvent.InvocationAttemptStarted | undefined;
  setInvocationAttemptStarted(value?: BuildEvent.InvocationAttemptStarted): BuildEvent;
  hasInvocationAttemptStarted(): boolean;
  clearInvocationAttemptStarted(): BuildEvent;

  getInvocationAttemptFinished(): BuildEvent.InvocationAttemptFinished | undefined;
  setInvocationAttemptFinished(value?: BuildEvent.InvocationAttemptFinished): BuildEvent;
  hasInvocationAttemptFinished(): boolean;
  clearInvocationAttemptFinished(): BuildEvent;

  getBuildEnqueued(): BuildEvent.BuildEnqueued | undefined;
  setBuildEnqueued(value?: BuildEvent.BuildEnqueued): BuildEvent;
  hasBuildEnqueued(): boolean;
  clearBuildEnqueued(): BuildEvent;

  getBuildFinished(): BuildEvent.BuildFinished | undefined;
  setBuildFinished(value?: BuildEvent.BuildFinished): BuildEvent;
  hasBuildFinished(): boolean;
  clearBuildFinished(): BuildEvent;

  getConsoleOutput(): BuildEvent.ConsoleOutput | undefined;
  setConsoleOutput(value?: BuildEvent.ConsoleOutput): BuildEvent;
  hasConsoleOutput(): boolean;
  clearConsoleOutput(): BuildEvent;

  getComponentStreamFinished(): BuildEvent.BuildComponentStreamFinished | undefined;
  setComponentStreamFinished(value?: BuildEvent.BuildComponentStreamFinished): BuildEvent;
  hasComponentStreamFinished(): boolean;
  clearComponentStreamFinished(): BuildEvent;

  getBazelEvent(): google_protobuf_any_pb.Any | undefined;
  setBazelEvent(value?: google_protobuf_any_pb.Any): BuildEvent;
  hasBazelEvent(): boolean;
  clearBazelEvent(): BuildEvent;

  getBuildExecutionEvent(): google_protobuf_any_pb.Any | undefined;
  setBuildExecutionEvent(value?: google_protobuf_any_pb.Any): BuildEvent;
  hasBuildExecutionEvent(): boolean;
  clearBuildExecutionEvent(): BuildEvent;

  getSourceFetchEvent(): google_protobuf_any_pb.Any | undefined;
  setSourceFetchEvent(value?: google_protobuf_any_pb.Any): BuildEvent;
  hasSourceFetchEvent(): boolean;
  clearSourceFetchEvent(): BuildEvent;

  getEventCase(): BuildEvent.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BuildEvent): BuildEvent.AsObject;
  static serializeBinaryToWriter(message: BuildEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildEvent;
  static deserializeBinaryFromReader(message: BuildEvent, reader: jspb.BinaryReader): BuildEvent;
}

export namespace BuildEvent {
  export type AsObject = {
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    invocationAttemptStarted?: BuildEvent.InvocationAttemptStarted.AsObject,
    invocationAttemptFinished?: BuildEvent.InvocationAttemptFinished.AsObject,
    buildEnqueued?: BuildEvent.BuildEnqueued.AsObject,
    buildFinished?: BuildEvent.BuildFinished.AsObject,
    consoleOutput?: BuildEvent.ConsoleOutput.AsObject,
    componentStreamFinished?: BuildEvent.BuildComponentStreamFinished.AsObject,
    bazelEvent?: google_protobuf_any_pb.Any.AsObject,
    buildExecutionEvent?: google_protobuf_any_pb.Any.AsObject,
    sourceFetchEvent?: google_protobuf_any_pb.Any.AsObject,
  }

  export class InvocationAttemptStarted extends jspb.Message {
    getAttemptNumber(): number;
    setAttemptNumber(value: number): InvocationAttemptStarted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvocationAttemptStarted.AsObject;
    static toObject(includeInstance: boolean, msg: InvocationAttemptStarted): InvocationAttemptStarted.AsObject;
    static serializeBinaryToWriter(message: InvocationAttemptStarted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvocationAttemptStarted;
    static deserializeBinaryFromReader(message: InvocationAttemptStarted, reader: jspb.BinaryReader): InvocationAttemptStarted;
  }

  export namespace InvocationAttemptStarted {
    export type AsObject = {
      attemptNumber: number,
    }
  }


  export class InvocationAttemptFinished extends jspb.Message {
    getExitCode(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setExitCode(value?: google_protobuf_wrappers_pb.Int32Value): InvocationAttemptFinished;
    hasExitCode(): boolean;
    clearExitCode(): InvocationAttemptFinished;

    getInvocationStatus(): google_devtools_build_v1_build_status_pb.BuildStatus | undefined;
    setInvocationStatus(value?: google_devtools_build_v1_build_status_pb.BuildStatus): InvocationAttemptFinished;
    hasInvocationStatus(): boolean;
    clearInvocationStatus(): InvocationAttemptFinished;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvocationAttemptFinished.AsObject;
    static toObject(includeInstance: boolean, msg: InvocationAttemptFinished): InvocationAttemptFinished.AsObject;
    static serializeBinaryToWriter(message: InvocationAttemptFinished, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvocationAttemptFinished;
    static deserializeBinaryFromReader(message: InvocationAttemptFinished, reader: jspb.BinaryReader): InvocationAttemptFinished;
  }

  export namespace InvocationAttemptFinished {
    export type AsObject = {
      exitCode?: google_protobuf_wrappers_pb.Int32Value.AsObject,
      invocationStatus?: google_devtools_build_v1_build_status_pb.BuildStatus.AsObject,
    }
  }


  export class BuildEnqueued extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildEnqueued.AsObject;
    static toObject(includeInstance: boolean, msg: BuildEnqueued): BuildEnqueued.AsObject;
    static serializeBinaryToWriter(message: BuildEnqueued, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildEnqueued;
    static deserializeBinaryFromReader(message: BuildEnqueued, reader: jspb.BinaryReader): BuildEnqueued;
  }

  export namespace BuildEnqueued {
    export type AsObject = {
    }
  }


  export class BuildFinished extends jspb.Message {
    getStatus(): google_devtools_build_v1_build_status_pb.BuildStatus | undefined;
    setStatus(value?: google_devtools_build_v1_build_status_pb.BuildStatus): BuildFinished;
    hasStatus(): boolean;
    clearStatus(): BuildFinished;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildFinished.AsObject;
    static toObject(includeInstance: boolean, msg: BuildFinished): BuildFinished.AsObject;
    static serializeBinaryToWriter(message: BuildFinished, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildFinished;
    static deserializeBinaryFromReader(message: BuildFinished, reader: jspb.BinaryReader): BuildFinished;
  }

  export namespace BuildFinished {
    export type AsObject = {
      status?: google_devtools_build_v1_build_status_pb.BuildStatus.AsObject,
    }
  }


  export class ConsoleOutput extends jspb.Message {
    getType(): ConsoleOutputStream;
    setType(value: ConsoleOutputStream): ConsoleOutput;

    getTextOutput(): string;
    setTextOutput(value: string): ConsoleOutput;

    getBinaryOutput(): Uint8Array | string;
    getBinaryOutput_asU8(): Uint8Array;
    getBinaryOutput_asB64(): string;
    setBinaryOutput(value: Uint8Array | string): ConsoleOutput;

    getOutputCase(): ConsoleOutput.OutputCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsoleOutput.AsObject;
    static toObject(includeInstance: boolean, msg: ConsoleOutput): ConsoleOutput.AsObject;
    static serializeBinaryToWriter(message: ConsoleOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsoleOutput;
    static deserializeBinaryFromReader(message: ConsoleOutput, reader: jspb.BinaryReader): ConsoleOutput;
  }

  export namespace ConsoleOutput {
    export type AsObject = {
      type: ConsoleOutputStream,
      textOutput: string,
      binaryOutput: Uint8Array | string,
    }

    export enum OutputCase { 
      OUTPUT_NOT_SET = 0,
      TEXT_OUTPUT = 2,
      BINARY_OUTPUT = 3,
    }
  }


  export class BuildComponentStreamFinished extends jspb.Message {
    getType(): BuildEvent.BuildComponentStreamFinished.FinishType;
    setType(value: BuildEvent.BuildComponentStreamFinished.FinishType): BuildComponentStreamFinished;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildComponentStreamFinished.AsObject;
    static toObject(includeInstance: boolean, msg: BuildComponentStreamFinished): BuildComponentStreamFinished.AsObject;
    static serializeBinaryToWriter(message: BuildComponentStreamFinished, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildComponentStreamFinished;
    static deserializeBinaryFromReader(message: BuildComponentStreamFinished, reader: jspb.BinaryReader): BuildComponentStreamFinished;
  }

  export namespace BuildComponentStreamFinished {
    export type AsObject = {
      type: BuildEvent.BuildComponentStreamFinished.FinishType,
    }

    export enum FinishType { 
      FINISH_TYPE_UNSPECIFIED = 0,
      FINISHED = 1,
      EXPIRED = 2,
    }
  }


  export enum EventCase { 
    EVENT_NOT_SET = 0,
    INVOCATION_ATTEMPT_STARTED = 51,
    INVOCATION_ATTEMPT_FINISHED = 52,
    BUILD_ENQUEUED = 53,
    BUILD_FINISHED = 55,
    CONSOLE_OUTPUT = 56,
    COMPONENT_STREAM_FINISHED = 59,
    BAZEL_EVENT = 60,
    BUILD_EXECUTION_EVENT = 61,
    SOURCE_FETCH_EVENT = 62,
  }
}

export class StreamId extends jspb.Message {
  getBuildId(): string;
  setBuildId(value: string): StreamId;

  getInvocationId(): string;
  setInvocationId(value: string): StreamId;

  getComponent(): StreamId.BuildComponent;
  setComponent(value: StreamId.BuildComponent): StreamId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamId.AsObject;
  static toObject(includeInstance: boolean, msg: StreamId): StreamId.AsObject;
  static serializeBinaryToWriter(message: StreamId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamId;
  static deserializeBinaryFromReader(message: StreamId, reader: jspb.BinaryReader): StreamId;
}

export namespace StreamId {
  export type AsObject = {
    buildId: string,
    invocationId: string,
    component: StreamId.BuildComponent,
  }

  export enum BuildComponent { 
    UNKNOWN_COMPONENT = 0,
    CONTROLLER = 1,
    WORKER = 2,
    TOOL = 3,
  }
}

export enum ConsoleOutputStream { 
  UNKNOWN = 0,
  STDOUT = 1,
  STDERR = 2,
}
