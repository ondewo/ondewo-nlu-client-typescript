import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_remoteworkers_v1test2_worker_pb from '../../../../google/devtools/remoteworkers/v1test2/worker_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class BotSession extends jspb.Message {
  getName(): string;
  setName(value: string): BotSession;

  getBotId(): string;
  setBotId(value: string): BotSession;

  getStatus(): BotStatus;
  setStatus(value: BotStatus): BotSession;

  getWorker(): google_devtools_remoteworkers_v1test2_worker_pb.Worker | undefined;
  setWorker(value?: google_devtools_remoteworkers_v1test2_worker_pb.Worker): BotSession;
  hasWorker(): boolean;
  clearWorker(): BotSession;

  getLeasesList(): Array<Lease>;
  setLeasesList(value: Array<Lease>): BotSession;
  clearLeasesList(): BotSession;
  addLeases(value?: Lease, index?: number): Lease;

  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): BotSession;
  hasExpireTime(): boolean;
  clearExpireTime(): BotSession;

  getVersion(): string;
  setVersion(value: string): BotSession;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BotSession.AsObject;
  static toObject(includeInstance: boolean, msg: BotSession): BotSession.AsObject;
  static serializeBinaryToWriter(message: BotSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BotSession;
  static deserializeBinaryFromReader(message: BotSession, reader: jspb.BinaryReader): BotSession;
}

export namespace BotSession {
  export type AsObject = {
    name: string,
    botId: string,
    status: BotStatus,
    worker?: google_devtools_remoteworkers_v1test2_worker_pb.Worker.AsObject,
    leasesList: Array<Lease.AsObject>,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: string,
  }
}

export class Lease extends jspb.Message {
  getId(): string;
  setId(value: string): Lease;

  getPayload(): google_protobuf_any_pb.Any | undefined;
  setPayload(value?: google_protobuf_any_pb.Any): Lease;
  hasPayload(): boolean;
  clearPayload(): Lease;

  getResult(): google_protobuf_any_pb.Any | undefined;
  setResult(value?: google_protobuf_any_pb.Any): Lease;
  hasResult(): boolean;
  clearResult(): Lease;

  getState(): LeaseState;
  setState(value: LeaseState): Lease;

  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): Lease;
  hasStatus(): boolean;
  clearStatus(): Lease;

  getRequirements(): google_devtools_remoteworkers_v1test2_worker_pb.Worker | undefined;
  setRequirements(value?: google_devtools_remoteworkers_v1test2_worker_pb.Worker): Lease;
  hasRequirements(): boolean;
  clearRequirements(): Lease;

  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): Lease;
  hasExpireTime(): boolean;
  clearExpireTime(): Lease;

  getAssignment(): string;
  setAssignment(value: string): Lease;

  getInlineAssignment(): google_protobuf_any_pb.Any | undefined;
  setInlineAssignment(value?: google_protobuf_any_pb.Any): Lease;
  hasInlineAssignment(): boolean;
  clearInlineAssignment(): Lease;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lease.AsObject;
  static toObject(includeInstance: boolean, msg: Lease): Lease.AsObject;
  static serializeBinaryToWriter(message: Lease, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lease;
  static deserializeBinaryFromReader(message: Lease, reader: jspb.BinaryReader): Lease;
}

export namespace Lease {
  export type AsObject = {
    id: string,
    payload?: google_protobuf_any_pb.Any.AsObject,
    result?: google_protobuf_any_pb.Any.AsObject,
    state: LeaseState,
    status?: google_rpc_status_pb.Status.AsObject,
    requirements?: google_devtools_remoteworkers_v1test2_worker_pb.Worker.AsObject,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assignment: string,
    inlineAssignment?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class AdminTemp extends jspb.Message {
  getCommand(): AdminTemp.Command;
  setCommand(value: AdminTemp.Command): AdminTemp;

  getArg(): string;
  setArg(value: string): AdminTemp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminTemp.AsObject;
  static toObject(includeInstance: boolean, msg: AdminTemp): AdminTemp.AsObject;
  static serializeBinaryToWriter(message: AdminTemp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminTemp;
  static deserializeBinaryFromReader(message: AdminTemp, reader: jspb.BinaryReader): AdminTemp;
}

export namespace AdminTemp {
  export type AsObject = {
    command: AdminTemp.Command,
    arg: string,
  }

  export enum Command { 
    UNSPECIFIED = 0,
    BOT_UPDATE = 1,
    BOT_RESTART = 2,
    BOT_TERMINATE = 3,
    HOST_RESTART = 4,
  }
}

export class CreateBotSessionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateBotSessionRequest;

  getBotSession(): BotSession | undefined;
  setBotSession(value?: BotSession): CreateBotSessionRequest;
  hasBotSession(): boolean;
  clearBotSession(): CreateBotSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBotSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBotSessionRequest): CreateBotSessionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBotSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBotSessionRequest;
  static deserializeBinaryFromReader(message: CreateBotSessionRequest, reader: jspb.BinaryReader): CreateBotSessionRequest;
}

export namespace CreateBotSessionRequest {
  export type AsObject = {
    parent: string,
    botSession?: BotSession.AsObject,
  }
}

export class UpdateBotSessionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateBotSessionRequest;

  getBotSession(): BotSession | undefined;
  setBotSession(value?: BotSession): UpdateBotSessionRequest;
  hasBotSession(): boolean;
  clearBotSession(): UpdateBotSessionRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateBotSessionRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateBotSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBotSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBotSessionRequest): UpdateBotSessionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBotSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBotSessionRequest;
  static deserializeBinaryFromReader(message: UpdateBotSessionRequest, reader: jspb.BinaryReader): UpdateBotSessionRequest;
}

export namespace UpdateBotSessionRequest {
  export type AsObject = {
    name: string,
    botSession?: BotSession.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PostBotEventTempRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PostBotEventTempRequest;

  getType(): PostBotEventTempRequest.Type;
  setType(value: PostBotEventTempRequest.Type): PostBotEventTempRequest;

  getMsg(): string;
  setMsg(value: string): PostBotEventTempRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostBotEventTempRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostBotEventTempRequest): PostBotEventTempRequest.AsObject;
  static serializeBinaryToWriter(message: PostBotEventTempRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostBotEventTempRequest;
  static deserializeBinaryFromReader(message: PostBotEventTempRequest, reader: jspb.BinaryReader): PostBotEventTempRequest;
}

export namespace PostBotEventTempRequest {
  export type AsObject = {
    name: string,
    type: PostBotEventTempRequest.Type,
    msg: string,
  }

  export enum Type { 
    UNSPECIFIED = 0,
    INFO = 1,
    ERROR = 2,
  }
}

export enum BotStatus { 
  BOT_STATUS_UNSPECIFIED = 0,
  OK = 1,
  UNHEALTHY = 2,
  HOST_REBOOTING = 3,
  BOT_TERMINATING = 4,
}
export enum LeaseState { 
  LEASE_STATE_UNSPECIFIED = 0,
  PENDING = 1,
  ACTIVE = 2,
  COMPLETED = 4,
  CANCELLED = 5,
}
