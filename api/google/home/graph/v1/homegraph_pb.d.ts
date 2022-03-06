import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_home_graph_v1_device_pb from '../../../../google/home/graph/v1/device_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class RequestSyncDevicesRequest extends jspb.Message {
  getAgentUserId(): string;
  setAgentUserId(value: string): RequestSyncDevicesRequest;

  getAsync(): boolean;
  setAsync(value: boolean): RequestSyncDevicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestSyncDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestSyncDevicesRequest): RequestSyncDevicesRequest.AsObject;
  static serializeBinaryToWriter(message: RequestSyncDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestSyncDevicesRequest;
  static deserializeBinaryFromReader(message: RequestSyncDevicesRequest, reader: jspb.BinaryReader): RequestSyncDevicesRequest;
}

export namespace RequestSyncDevicesRequest {
  export type AsObject = {
    agentUserId: string,
    async: boolean,
  }
}

export class RequestSyncDevicesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestSyncDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RequestSyncDevicesResponse): RequestSyncDevicesResponse.AsObject;
  static serializeBinaryToWriter(message: RequestSyncDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestSyncDevicesResponse;
  static deserializeBinaryFromReader(message: RequestSyncDevicesResponse, reader: jspb.BinaryReader): RequestSyncDevicesResponse;
}

export namespace RequestSyncDevicesResponse {
  export type AsObject = {
  }
}

export class ReportStateAndNotificationRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): ReportStateAndNotificationRequest;

  getEventId(): string;
  setEventId(value: string): ReportStateAndNotificationRequest;

  getAgentUserId(): string;
  setAgentUserId(value: string): ReportStateAndNotificationRequest;

  getFollowUpToken(): string;
  setFollowUpToken(value: string): ReportStateAndNotificationRequest;

  getPayload(): StateAndNotificationPayload | undefined;
  setPayload(value?: StateAndNotificationPayload): ReportStateAndNotificationRequest;
  hasPayload(): boolean;
  clearPayload(): ReportStateAndNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportStateAndNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportStateAndNotificationRequest): ReportStateAndNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: ReportStateAndNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportStateAndNotificationRequest;
  static deserializeBinaryFromReader(message: ReportStateAndNotificationRequest, reader: jspb.BinaryReader): ReportStateAndNotificationRequest;
}

export namespace ReportStateAndNotificationRequest {
  export type AsObject = {
    requestId: string,
    eventId: string,
    agentUserId: string,
    followUpToken: string,
    payload?: StateAndNotificationPayload.AsObject,
  }
}

export class ReportStateAndNotificationResponse extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): ReportStateAndNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportStateAndNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportStateAndNotificationResponse): ReportStateAndNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: ReportStateAndNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportStateAndNotificationResponse;
  static deserializeBinaryFromReader(message: ReportStateAndNotificationResponse, reader: jspb.BinaryReader): ReportStateAndNotificationResponse;
}

export namespace ReportStateAndNotificationResponse {
  export type AsObject = {
    requestId: string,
  }
}

export class StateAndNotificationPayload extends jspb.Message {
  getDevices(): ReportStateAndNotificationDevice | undefined;
  setDevices(value?: ReportStateAndNotificationDevice): StateAndNotificationPayload;
  hasDevices(): boolean;
  clearDevices(): StateAndNotificationPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateAndNotificationPayload.AsObject;
  static toObject(includeInstance: boolean, msg: StateAndNotificationPayload): StateAndNotificationPayload.AsObject;
  static serializeBinaryToWriter(message: StateAndNotificationPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateAndNotificationPayload;
  static deserializeBinaryFromReader(message: StateAndNotificationPayload, reader: jspb.BinaryReader): StateAndNotificationPayload;
}

export namespace StateAndNotificationPayload {
  export type AsObject = {
    devices?: ReportStateAndNotificationDevice.AsObject,
  }
}

export class ReportStateAndNotificationDevice extends jspb.Message {
  getStates(): google_protobuf_struct_pb.Struct | undefined;
  setStates(value?: google_protobuf_struct_pb.Struct): ReportStateAndNotificationDevice;
  hasStates(): boolean;
  clearStates(): ReportStateAndNotificationDevice;

  getNotifications(): google_protobuf_struct_pb.Struct | undefined;
  setNotifications(value?: google_protobuf_struct_pb.Struct): ReportStateAndNotificationDevice;
  hasNotifications(): boolean;
  clearNotifications(): ReportStateAndNotificationDevice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportStateAndNotificationDevice.AsObject;
  static toObject(includeInstance: boolean, msg: ReportStateAndNotificationDevice): ReportStateAndNotificationDevice.AsObject;
  static serializeBinaryToWriter(message: ReportStateAndNotificationDevice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportStateAndNotificationDevice;
  static deserializeBinaryFromReader(message: ReportStateAndNotificationDevice, reader: jspb.BinaryReader): ReportStateAndNotificationDevice;
}

export namespace ReportStateAndNotificationDevice {
  export type AsObject = {
    states?: google_protobuf_struct_pb.Struct.AsObject,
    notifications?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DeleteAgentUserRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): DeleteAgentUserRequest;

  getAgentUserId(): string;
  setAgentUserId(value: string): DeleteAgentUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentUserRequest): DeleteAgentUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAgentUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentUserRequest;
  static deserializeBinaryFromReader(message: DeleteAgentUserRequest, reader: jspb.BinaryReader): DeleteAgentUserRequest;
}

export namespace DeleteAgentUserRequest {
  export type AsObject = {
    requestId: string,
    agentUserId: string,
  }
}

export class QueryRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): QueryRequest;

  getAgentUserId(): string;
  setAgentUserId(value: string): QueryRequest;

  getInputsList(): Array<QueryRequestInput>;
  setInputsList(value: Array<QueryRequestInput>): QueryRequest;
  clearInputsList(): QueryRequest;
  addInputs(value?: QueryRequestInput, index?: number): QueryRequestInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    requestId: string,
    agentUserId: string,
    inputsList: Array<QueryRequestInput.AsObject>,
  }
}

export class QueryRequestInput extends jspb.Message {
  getPayload(): QueryRequestPayload | undefined;
  setPayload(value?: QueryRequestPayload): QueryRequestInput;
  hasPayload(): boolean;
  clearPayload(): QueryRequestInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestInput.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestInput): QueryRequestInput.AsObject;
  static serializeBinaryToWriter(message: QueryRequestInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestInput;
  static deserializeBinaryFromReader(message: QueryRequestInput, reader: jspb.BinaryReader): QueryRequestInput;
}

export namespace QueryRequestInput {
  export type AsObject = {
    payload?: QueryRequestPayload.AsObject,
  }
}

export class QueryRequestPayload extends jspb.Message {
  getDevicesList(): Array<AgentDeviceId>;
  setDevicesList(value: Array<AgentDeviceId>): QueryRequestPayload;
  clearDevicesList(): QueryRequestPayload;
  addDevices(value?: AgentDeviceId, index?: number): AgentDeviceId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestPayload.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestPayload): QueryRequestPayload.AsObject;
  static serializeBinaryToWriter(message: QueryRequestPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestPayload;
  static deserializeBinaryFromReader(message: QueryRequestPayload, reader: jspb.BinaryReader): QueryRequestPayload;
}

export namespace QueryRequestPayload {
  export type AsObject = {
    devicesList: Array<AgentDeviceId.AsObject>,
  }
}

export class AgentDeviceId extends jspb.Message {
  getId(): string;
  setId(value: string): AgentDeviceId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentDeviceId.AsObject;
  static toObject(includeInstance: boolean, msg: AgentDeviceId): AgentDeviceId.AsObject;
  static serializeBinaryToWriter(message: AgentDeviceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentDeviceId;
  static deserializeBinaryFromReader(message: AgentDeviceId, reader: jspb.BinaryReader): AgentDeviceId;
}

export namespace AgentDeviceId {
  export type AsObject = {
    id: string,
  }
}

export class QueryResponse extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): QueryResponse;

  getPayload(): QueryResponsePayload | undefined;
  setPayload(value?: QueryResponsePayload): QueryResponse;
  hasPayload(): boolean;
  clearPayload(): QueryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
  static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponse;
  static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
  export type AsObject = {
    requestId: string,
    payload?: QueryResponsePayload.AsObject,
  }
}

export class QueryResponsePayload extends jspb.Message {
  getDevicesMap(): jspb.Map<string, google_protobuf_struct_pb.Struct>;
  clearDevicesMap(): QueryResponsePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponsePayload.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponsePayload): QueryResponsePayload.AsObject;
  static serializeBinaryToWriter(message: QueryResponsePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponsePayload;
  static deserializeBinaryFromReader(message: QueryResponsePayload, reader: jspb.BinaryReader): QueryResponsePayload;
}

export namespace QueryResponsePayload {
  export type AsObject = {
    devicesMap: Array<[string, google_protobuf_struct_pb.Struct.AsObject]>,
  }
}

export class SyncRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): SyncRequest;

  getAgentUserId(): string;
  setAgentUserId(value: string): SyncRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncRequest): SyncRequest.AsObject;
  static serializeBinaryToWriter(message: SyncRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncRequest;
  static deserializeBinaryFromReader(message: SyncRequest, reader: jspb.BinaryReader): SyncRequest;
}

export namespace SyncRequest {
  export type AsObject = {
    requestId: string,
    agentUserId: string,
  }
}

export class SyncResponse extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): SyncResponse;

  getPayload(): SyncResponsePayload | undefined;
  setPayload(value?: SyncResponsePayload): SyncResponse;
  hasPayload(): boolean;
  clearPayload(): SyncResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncResponse): SyncResponse.AsObject;
  static serializeBinaryToWriter(message: SyncResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncResponse;
  static deserializeBinaryFromReader(message: SyncResponse, reader: jspb.BinaryReader): SyncResponse;
}

export namespace SyncResponse {
  export type AsObject = {
    requestId: string,
    payload?: SyncResponsePayload.AsObject,
  }
}

export class SyncResponsePayload extends jspb.Message {
  getAgentUserId(): string;
  setAgentUserId(value: string): SyncResponsePayload;

  getDevicesList(): Array<google_home_graph_v1_device_pb.Device>;
  setDevicesList(value: Array<google_home_graph_v1_device_pb.Device>): SyncResponsePayload;
  clearDevicesList(): SyncResponsePayload;
  addDevices(value?: google_home_graph_v1_device_pb.Device, index?: number): google_home_graph_v1_device_pb.Device;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncResponsePayload.AsObject;
  static toObject(includeInstance: boolean, msg: SyncResponsePayload): SyncResponsePayload.AsObject;
  static serializeBinaryToWriter(message: SyncResponsePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncResponsePayload;
  static deserializeBinaryFromReader(message: SyncResponsePayload, reader: jspb.BinaryReader): SyncResponsePayload;
}

export namespace SyncResponsePayload {
  export type AsObject = {
    agentUserId: string,
    devicesList: Array<google_home_graph_v1_device_pb.Device.AsObject>,
  }
}

