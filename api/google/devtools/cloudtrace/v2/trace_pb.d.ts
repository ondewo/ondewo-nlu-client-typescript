import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class Span extends jspb.Message {
  getName(): string;
  setName(value: string): Span;

  getSpanId(): string;
  setSpanId(value: string): Span;

  getParentSpanId(): string;
  setParentSpanId(value: string): Span;

  getDisplayName(): TruncatableString | undefined;
  setDisplayName(value?: TruncatableString): Span;
  hasDisplayName(): boolean;
  clearDisplayName(): Span;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Span;
  hasStartTime(): boolean;
  clearStartTime(): Span;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Span;
  hasEndTime(): boolean;
  clearEndTime(): Span;

  getAttributes(): Span.Attributes | undefined;
  setAttributes(value?: Span.Attributes): Span;
  hasAttributes(): boolean;
  clearAttributes(): Span;

  getStackTrace(): StackTrace | undefined;
  setStackTrace(value?: StackTrace): Span;
  hasStackTrace(): boolean;
  clearStackTrace(): Span;

  getTimeEvents(): Span.TimeEvents | undefined;
  setTimeEvents(value?: Span.TimeEvents): Span;
  hasTimeEvents(): boolean;
  clearTimeEvents(): Span;

  getLinks(): Span.Links | undefined;
  setLinks(value?: Span.Links): Span;
  hasLinks(): boolean;
  clearLinks(): Span;

  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): Span;
  hasStatus(): boolean;
  clearStatus(): Span;

  getSameProcessAsParentSpan(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSameProcessAsParentSpan(value?: google_protobuf_wrappers_pb.BoolValue): Span;
  hasSameProcessAsParentSpan(): boolean;
  clearSameProcessAsParentSpan(): Span;

  getChildSpanCount(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setChildSpanCount(value?: google_protobuf_wrappers_pb.Int32Value): Span;
  hasChildSpanCount(): boolean;
  clearChildSpanCount(): Span;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Span.AsObject;
  static toObject(includeInstance: boolean, msg: Span): Span.AsObject;
  static serializeBinaryToWriter(message: Span, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Span;
  static deserializeBinaryFromReader(message: Span, reader: jspb.BinaryReader): Span;
}

export namespace Span {
  export type AsObject = {
    name: string,
    spanId: string,
    parentSpanId: string,
    displayName?: TruncatableString.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    attributes?: Span.Attributes.AsObject,
    stackTrace?: StackTrace.AsObject,
    timeEvents?: Span.TimeEvents.AsObject,
    links?: Span.Links.AsObject,
    status?: google_rpc_status_pb.Status.AsObject,
    sameProcessAsParentSpan?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    childSpanCount?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }

  export class Attributes extends jspb.Message {
    getAttributeMapMap(): jspb.Map<string, AttributeValue>;
    clearAttributeMapMap(): Attributes;

    getDroppedAttributesCount(): number;
    setDroppedAttributesCount(value: number): Attributes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attributes.AsObject;
    static toObject(includeInstance: boolean, msg: Attributes): Attributes.AsObject;
    static serializeBinaryToWriter(message: Attributes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attributes;
    static deserializeBinaryFromReader(message: Attributes, reader: jspb.BinaryReader): Attributes;
  }

  export namespace Attributes {
    export type AsObject = {
      attributeMapMap: Array<[string, AttributeValue.AsObject]>,
      droppedAttributesCount: number,
    }
  }


  export class TimeEvent extends jspb.Message {
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeEvent;
    hasTime(): boolean;
    clearTime(): TimeEvent;

    getAnnotation(): Span.TimeEvent.Annotation | undefined;
    setAnnotation(value?: Span.TimeEvent.Annotation): TimeEvent;
    hasAnnotation(): boolean;
    clearAnnotation(): TimeEvent;

    getMessageEvent(): Span.TimeEvent.MessageEvent | undefined;
    setMessageEvent(value?: Span.TimeEvent.MessageEvent): TimeEvent;
    hasMessageEvent(): boolean;
    clearMessageEvent(): TimeEvent;

    getValueCase(): TimeEvent.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TimeEvent): TimeEvent.AsObject;
    static serializeBinaryToWriter(message: TimeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeEvent;
    static deserializeBinaryFromReader(message: TimeEvent, reader: jspb.BinaryReader): TimeEvent;
  }

  export namespace TimeEvent {
    export type AsObject = {
      time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      annotation?: Span.TimeEvent.Annotation.AsObject,
      messageEvent?: Span.TimeEvent.MessageEvent.AsObject,
    }

    export class Annotation extends jspb.Message {
      getDescription(): TruncatableString | undefined;
      setDescription(value?: TruncatableString): Annotation;
      hasDescription(): boolean;
      clearDescription(): Annotation;

      getAttributes(): Span.Attributes | undefined;
      setAttributes(value?: Span.Attributes): Annotation;
      hasAttributes(): boolean;
      clearAttributes(): Annotation;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Annotation.AsObject;
      static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
      static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Annotation;
      static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
    }

    export namespace Annotation {
      export type AsObject = {
        description?: TruncatableString.AsObject,
        attributes?: Span.Attributes.AsObject,
      }
    }


    export class MessageEvent extends jspb.Message {
      getType(): Span.TimeEvent.MessageEvent.Type;
      setType(value: Span.TimeEvent.MessageEvent.Type): MessageEvent;

      getId(): number;
      setId(value: number): MessageEvent;

      getUncompressedSizeBytes(): number;
      setUncompressedSizeBytes(value: number): MessageEvent;

      getCompressedSizeBytes(): number;
      setCompressedSizeBytes(value: number): MessageEvent;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MessageEvent.AsObject;
      static toObject(includeInstance: boolean, msg: MessageEvent): MessageEvent.AsObject;
      static serializeBinaryToWriter(message: MessageEvent, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MessageEvent;
      static deserializeBinaryFromReader(message: MessageEvent, reader: jspb.BinaryReader): MessageEvent;
    }

    export namespace MessageEvent {
      export type AsObject = {
        type: Span.TimeEvent.MessageEvent.Type,
        id: number,
        uncompressedSizeBytes: number,
        compressedSizeBytes: number,
      }

      export enum Type { 
        TYPE_UNSPECIFIED = 0,
        SENT = 1,
        RECEIVED = 2,
      }
    }


    export enum ValueCase { 
      VALUE_NOT_SET = 0,
      ANNOTATION = 2,
      MESSAGE_EVENT = 3,
    }
  }


  export class TimeEvents extends jspb.Message {
    getTimeEventList(): Array<Span.TimeEvent>;
    setTimeEventList(value: Array<Span.TimeEvent>): TimeEvents;
    clearTimeEventList(): TimeEvents;
    addTimeEvent(value?: Span.TimeEvent, index?: number): Span.TimeEvent;

    getDroppedAnnotationsCount(): number;
    setDroppedAnnotationsCount(value: number): TimeEvents;

    getDroppedMessageEventsCount(): number;
    setDroppedMessageEventsCount(value: number): TimeEvents;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeEvents.AsObject;
    static toObject(includeInstance: boolean, msg: TimeEvents): TimeEvents.AsObject;
    static serializeBinaryToWriter(message: TimeEvents, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeEvents;
    static deserializeBinaryFromReader(message: TimeEvents, reader: jspb.BinaryReader): TimeEvents;
  }

  export namespace TimeEvents {
    export type AsObject = {
      timeEventList: Array<Span.TimeEvent.AsObject>,
      droppedAnnotationsCount: number,
      droppedMessageEventsCount: number,
    }
  }


  export class Link extends jspb.Message {
    getTraceId(): string;
    setTraceId(value: string): Link;

    getSpanId(): string;
    setSpanId(value: string): Link;

    getType(): Span.Link.Type;
    setType(value: Span.Link.Type): Link;

    getAttributes(): Span.Attributes | undefined;
    setAttributes(value?: Span.Attributes): Link;
    hasAttributes(): boolean;
    clearAttributes(): Link;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
  }

  export namespace Link {
    export type AsObject = {
      traceId: string,
      spanId: string,
      type: Span.Link.Type,
      attributes?: Span.Attributes.AsObject,
    }

    export enum Type { 
      TYPE_UNSPECIFIED = 0,
      CHILD_LINKED_SPAN = 1,
      PARENT_LINKED_SPAN = 2,
    }
  }


  export class Links extends jspb.Message {
    getLinkList(): Array<Span.Link>;
    setLinkList(value: Array<Span.Link>): Links;
    clearLinkList(): Links;
    addLink(value?: Span.Link, index?: number): Span.Link;

    getDroppedLinksCount(): number;
    setDroppedLinksCount(value: number): Links;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Links.AsObject;
    static toObject(includeInstance: boolean, msg: Links): Links.AsObject;
    static serializeBinaryToWriter(message: Links, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Links;
    static deserializeBinaryFromReader(message: Links, reader: jspb.BinaryReader): Links;
  }

  export namespace Links {
    export type AsObject = {
      linkList: Array<Span.Link.AsObject>,
      droppedLinksCount: number,
    }
  }

}

export class AttributeValue extends jspb.Message {
  getStringValue(): TruncatableString | undefined;
  setStringValue(value?: TruncatableString): AttributeValue;
  hasStringValue(): boolean;
  clearStringValue(): AttributeValue;

  getIntValue(): number;
  setIntValue(value: number): AttributeValue;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): AttributeValue;

  getValueCase(): AttributeValue.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeValue.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeValue): AttributeValue.AsObject;
  static serializeBinaryToWriter(message: AttributeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeValue;
  static deserializeBinaryFromReader(message: AttributeValue, reader: jspb.BinaryReader): AttributeValue;
}

export namespace AttributeValue {
  export type AsObject = {
    stringValue?: TruncatableString.AsObject,
    intValue: number,
    boolValue: boolean,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    STRING_VALUE = 1,
    INT_VALUE = 2,
    BOOL_VALUE = 3,
  }
}

export class StackTrace extends jspb.Message {
  getStackFrames(): StackTrace.StackFrames | undefined;
  setStackFrames(value?: StackTrace.StackFrames): StackTrace;
  hasStackFrames(): boolean;
  clearStackFrames(): StackTrace;

  getStackTraceHashId(): number;
  setStackTraceHashId(value: number): StackTrace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StackTrace.AsObject;
  static toObject(includeInstance: boolean, msg: StackTrace): StackTrace.AsObject;
  static serializeBinaryToWriter(message: StackTrace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StackTrace;
  static deserializeBinaryFromReader(message: StackTrace, reader: jspb.BinaryReader): StackTrace;
}

export namespace StackTrace {
  export type AsObject = {
    stackFrames?: StackTrace.StackFrames.AsObject,
    stackTraceHashId: number,
  }

  export class StackFrame extends jspb.Message {
    getFunctionName(): TruncatableString | undefined;
    setFunctionName(value?: TruncatableString): StackFrame;
    hasFunctionName(): boolean;
    clearFunctionName(): StackFrame;

    getOriginalFunctionName(): TruncatableString | undefined;
    setOriginalFunctionName(value?: TruncatableString): StackFrame;
    hasOriginalFunctionName(): boolean;
    clearOriginalFunctionName(): StackFrame;

    getFileName(): TruncatableString | undefined;
    setFileName(value?: TruncatableString): StackFrame;
    hasFileName(): boolean;
    clearFileName(): StackFrame;

    getLineNumber(): number;
    setLineNumber(value: number): StackFrame;

    getColumnNumber(): number;
    setColumnNumber(value: number): StackFrame;

    getLoadModule(): Module | undefined;
    setLoadModule(value?: Module): StackFrame;
    hasLoadModule(): boolean;
    clearLoadModule(): StackFrame;

    getSourceVersion(): TruncatableString | undefined;
    setSourceVersion(value?: TruncatableString): StackFrame;
    hasSourceVersion(): boolean;
    clearSourceVersion(): StackFrame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StackFrame.AsObject;
    static toObject(includeInstance: boolean, msg: StackFrame): StackFrame.AsObject;
    static serializeBinaryToWriter(message: StackFrame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StackFrame;
    static deserializeBinaryFromReader(message: StackFrame, reader: jspb.BinaryReader): StackFrame;
  }

  export namespace StackFrame {
    export type AsObject = {
      functionName?: TruncatableString.AsObject,
      originalFunctionName?: TruncatableString.AsObject,
      fileName?: TruncatableString.AsObject,
      lineNumber: number,
      columnNumber: number,
      loadModule?: Module.AsObject,
      sourceVersion?: TruncatableString.AsObject,
    }
  }


  export class StackFrames extends jspb.Message {
    getFrameList(): Array<StackTrace.StackFrame>;
    setFrameList(value: Array<StackTrace.StackFrame>): StackFrames;
    clearFrameList(): StackFrames;
    addFrame(value?: StackTrace.StackFrame, index?: number): StackTrace.StackFrame;

    getDroppedFramesCount(): number;
    setDroppedFramesCount(value: number): StackFrames;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StackFrames.AsObject;
    static toObject(includeInstance: boolean, msg: StackFrames): StackFrames.AsObject;
    static serializeBinaryToWriter(message: StackFrames, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StackFrames;
    static deserializeBinaryFromReader(message: StackFrames, reader: jspb.BinaryReader): StackFrames;
  }

  export namespace StackFrames {
    export type AsObject = {
      frameList: Array<StackTrace.StackFrame.AsObject>,
      droppedFramesCount: number,
    }
  }

}

export class Module extends jspb.Message {
  getModule(): TruncatableString | undefined;
  setModule(value?: TruncatableString): Module;
  hasModule(): boolean;
  clearModule(): Module;

  getBuildId(): TruncatableString | undefined;
  setBuildId(value?: TruncatableString): Module;
  hasBuildId(): boolean;
  clearBuildId(): Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    module?: TruncatableString.AsObject,
    buildId?: TruncatableString.AsObject,
  }
}

export class TruncatableString extends jspb.Message {
  getValue(): string;
  setValue(value: string): TruncatableString;

  getTruncatedByteCount(): number;
  setTruncatedByteCount(value: number): TruncatableString;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruncatableString.AsObject;
  static toObject(includeInstance: boolean, msg: TruncatableString): TruncatableString.AsObject;
  static serializeBinaryToWriter(message: TruncatableString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TruncatableString;
  static deserializeBinaryFromReader(message: TruncatableString, reader: jspb.BinaryReader): TruncatableString;
}

export namespace TruncatableString {
  export type AsObject = {
    value: string,
    truncatedByteCount: number,
  }
}

