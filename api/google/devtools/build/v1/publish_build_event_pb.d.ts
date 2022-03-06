import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_build_v1_build_events_pb from '../../../../google/devtools/build/v1/build_events_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class PublishLifecycleEventRequest extends jspb.Message {
  getServiceLevel(): PublishLifecycleEventRequest.ServiceLevel;
  setServiceLevel(value: PublishLifecycleEventRequest.ServiceLevel): PublishLifecycleEventRequest;

  getBuildEvent(): OrderedBuildEvent | undefined;
  setBuildEvent(value?: OrderedBuildEvent): PublishLifecycleEventRequest;
  hasBuildEvent(): boolean;
  clearBuildEvent(): PublishLifecycleEventRequest;

  getStreamTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setStreamTimeout(value?: google_protobuf_duration_pb.Duration): PublishLifecycleEventRequest;
  hasStreamTimeout(): boolean;
  clearStreamTimeout(): PublishLifecycleEventRequest;

  getNotificationKeywordsList(): Array<string>;
  setNotificationKeywordsList(value: Array<string>): PublishLifecycleEventRequest;
  clearNotificationKeywordsList(): PublishLifecycleEventRequest;
  addNotificationKeywords(value: string, index?: number): PublishLifecycleEventRequest;

  getProjectId(): string;
  setProjectId(value: string): PublishLifecycleEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishLifecycleEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishLifecycleEventRequest): PublishLifecycleEventRequest.AsObject;
  static serializeBinaryToWriter(message: PublishLifecycleEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishLifecycleEventRequest;
  static deserializeBinaryFromReader(message: PublishLifecycleEventRequest, reader: jspb.BinaryReader): PublishLifecycleEventRequest;
}

export namespace PublishLifecycleEventRequest {
  export type AsObject = {
    serviceLevel: PublishLifecycleEventRequest.ServiceLevel,
    buildEvent?: OrderedBuildEvent.AsObject,
    streamTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    notificationKeywordsList: Array<string>,
    projectId: string,
  }

  export enum ServiceLevel { 
    NONINTERACTIVE = 0,
    INTERACTIVE = 1,
  }
}

export class PublishBuildToolEventStreamResponse extends jspb.Message {
  getStreamId(): google_devtools_build_v1_build_events_pb.StreamId | undefined;
  setStreamId(value?: google_devtools_build_v1_build_events_pb.StreamId): PublishBuildToolEventStreamResponse;
  hasStreamId(): boolean;
  clearStreamId(): PublishBuildToolEventStreamResponse;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): PublishBuildToolEventStreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishBuildToolEventStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishBuildToolEventStreamResponse): PublishBuildToolEventStreamResponse.AsObject;
  static serializeBinaryToWriter(message: PublishBuildToolEventStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishBuildToolEventStreamResponse;
  static deserializeBinaryFromReader(message: PublishBuildToolEventStreamResponse, reader: jspb.BinaryReader): PublishBuildToolEventStreamResponse;
}

export namespace PublishBuildToolEventStreamResponse {
  export type AsObject = {
    streamId?: google_devtools_build_v1_build_events_pb.StreamId.AsObject,
    sequenceNumber: number,
  }
}

export class OrderedBuildEvent extends jspb.Message {
  getStreamId(): google_devtools_build_v1_build_events_pb.StreamId | undefined;
  setStreamId(value?: google_devtools_build_v1_build_events_pb.StreamId): OrderedBuildEvent;
  hasStreamId(): boolean;
  clearStreamId(): OrderedBuildEvent;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): OrderedBuildEvent;

  getEvent(): google_devtools_build_v1_build_events_pb.BuildEvent | undefined;
  setEvent(value?: google_devtools_build_v1_build_events_pb.BuildEvent): OrderedBuildEvent;
  hasEvent(): boolean;
  clearEvent(): OrderedBuildEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderedBuildEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OrderedBuildEvent): OrderedBuildEvent.AsObject;
  static serializeBinaryToWriter(message: OrderedBuildEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderedBuildEvent;
  static deserializeBinaryFromReader(message: OrderedBuildEvent, reader: jspb.BinaryReader): OrderedBuildEvent;
}

export namespace OrderedBuildEvent {
  export type AsObject = {
    streamId?: google_devtools_build_v1_build_events_pb.StreamId.AsObject,
    sequenceNumber: number,
    event?: google_devtools_build_v1_build_events_pb.BuildEvent.AsObject,
  }
}

export class PublishBuildToolEventStreamRequest extends jspb.Message {
  getStreamId(): google_devtools_build_v1_build_events_pb.StreamId | undefined;
  setStreamId(value?: google_devtools_build_v1_build_events_pb.StreamId): PublishBuildToolEventStreamRequest;
  hasStreamId(): boolean;
  clearStreamId(): PublishBuildToolEventStreamRequest;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): PublishBuildToolEventStreamRequest;

  getEvent(): google_devtools_build_v1_build_events_pb.BuildEvent | undefined;
  setEvent(value?: google_devtools_build_v1_build_events_pb.BuildEvent): PublishBuildToolEventStreamRequest;
  hasEvent(): boolean;
  clearEvent(): PublishBuildToolEventStreamRequest;

  getOrderedBuildEvent(): OrderedBuildEvent | undefined;
  setOrderedBuildEvent(value?: OrderedBuildEvent): PublishBuildToolEventStreamRequest;
  hasOrderedBuildEvent(): boolean;
  clearOrderedBuildEvent(): PublishBuildToolEventStreamRequest;

  getNotificationKeywordsList(): Array<string>;
  setNotificationKeywordsList(value: Array<string>): PublishBuildToolEventStreamRequest;
  clearNotificationKeywordsList(): PublishBuildToolEventStreamRequest;
  addNotificationKeywords(value: string, index?: number): PublishBuildToolEventStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishBuildToolEventStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishBuildToolEventStreamRequest): PublishBuildToolEventStreamRequest.AsObject;
  static serializeBinaryToWriter(message: PublishBuildToolEventStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishBuildToolEventStreamRequest;
  static deserializeBinaryFromReader(message: PublishBuildToolEventStreamRequest, reader: jspb.BinaryReader): PublishBuildToolEventStreamRequest;
}

export namespace PublishBuildToolEventStreamRequest {
  export type AsObject = {
    streamId?: google_devtools_build_v1_build_events_pb.StreamId.AsObject,
    sequenceNumber: number,
    event?: google_devtools_build_v1_build_events_pb.BuildEvent.AsObject,
    orderedBuildEvent?: OrderedBuildEvent.AsObject,
    notificationKeywordsList: Array<string>,
  }
}

