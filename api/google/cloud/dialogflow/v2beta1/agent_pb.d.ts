import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class Agent extends jspb.Message {
  getParent(): string;
  setParent(value: string): Agent;

  getDisplayName(): string;
  setDisplayName(value: string): Agent;

  getDefaultLanguageCode(): string;
  setDefaultLanguageCode(value: string): Agent;

  getSupportedLanguageCodesList(): Array<string>;
  setSupportedLanguageCodesList(value: Array<string>): Agent;
  clearSupportedLanguageCodesList(): Agent;
  addSupportedLanguageCodes(value: string, index?: number): Agent;

  getTimeZone(): string;
  setTimeZone(value: string): Agent;

  getDescription(): string;
  setDescription(value: string): Agent;

  getAvatarUri(): string;
  setAvatarUri(value: string): Agent;

  getEnableLogging(): boolean;
  setEnableLogging(value: boolean): Agent;

  getMatchMode(): Agent.MatchMode;
  setMatchMode(value: Agent.MatchMode): Agent;

  getClassificationThreshold(): number;
  setClassificationThreshold(value: number): Agent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Agent.AsObject;
  static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
  static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Agent;
  static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
}

export namespace Agent {
  export type AsObject = {
    parent: string,
    displayName: string,
    defaultLanguageCode: string,
    supportedLanguageCodesList: Array<string>,
    timeZone: string,
    description: string,
    avatarUri: string,
    enableLogging: boolean,
    matchMode: Agent.MatchMode,
    classificationThreshold: number,
  }

  export enum MatchMode { 
    MATCH_MODE_UNSPECIFIED = 0,
    MATCH_MODE_HYBRID = 1,
    MATCH_MODE_ML_ONLY = 2,
  }
}

export class GetAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): GetAgentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentRequest): GetAgentRequest.AsObject;
  static serializeBinaryToWriter(message: GetAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentRequest;
  static deserializeBinaryFromReader(message: GetAgentRequest, reader: jspb.BinaryReader): GetAgentRequest;
}

export namespace GetAgentRequest {
  export type AsObject = {
    parent: string,
  }
}

export class SearchAgentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): SearchAgentsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchAgentsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchAgentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAgentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAgentsRequest): SearchAgentsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchAgentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAgentsRequest;
  static deserializeBinaryFromReader(message: SearchAgentsRequest, reader: jspb.BinaryReader): SearchAgentsRequest;
}

export namespace SearchAgentsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class SearchAgentsResponse extends jspb.Message {
  getAgentsList(): Array<Agent>;
  setAgentsList(value: Array<Agent>): SearchAgentsResponse;
  clearAgentsList(): SearchAgentsResponse;
  addAgents(value?: Agent, index?: number): Agent;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchAgentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAgentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAgentsResponse): SearchAgentsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchAgentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAgentsResponse;
  static deserializeBinaryFromReader(message: SearchAgentsResponse, reader: jspb.BinaryReader): SearchAgentsResponse;
}

export namespace SearchAgentsResponse {
  export type AsObject = {
    agentsList: Array<Agent.AsObject>,
    nextPageToken: string,
  }
}

export class TrainAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): TrainAgentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrainAgentRequest): TrainAgentRequest.AsObject;
  static serializeBinaryToWriter(message: TrainAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainAgentRequest;
  static deserializeBinaryFromReader(message: TrainAgentRequest, reader: jspb.BinaryReader): TrainAgentRequest;
}

export namespace TrainAgentRequest {
  export type AsObject = {
    parent: string,
  }
}

export class ExportAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ExportAgentRequest;

  getAgentUri(): string;
  setAgentUri(value: string): ExportAgentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAgentRequest): ExportAgentRequest.AsObject;
  static serializeBinaryToWriter(message: ExportAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAgentRequest;
  static deserializeBinaryFromReader(message: ExportAgentRequest, reader: jspb.BinaryReader): ExportAgentRequest;
}

export namespace ExportAgentRequest {
  export type AsObject = {
    parent: string,
    agentUri: string,
  }
}

export class ExportAgentResponse extends jspb.Message {
  getAgentUri(): string;
  setAgentUri(value: string): ExportAgentResponse;

  getAgentContent(): Uint8Array | string;
  getAgentContent_asU8(): Uint8Array;
  getAgentContent_asB64(): string;
  setAgentContent(value: Uint8Array | string): ExportAgentResponse;

  getAgentCase(): ExportAgentResponse.AgentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAgentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAgentResponse): ExportAgentResponse.AsObject;
  static serializeBinaryToWriter(message: ExportAgentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAgentResponse;
  static deserializeBinaryFromReader(message: ExportAgentResponse, reader: jspb.BinaryReader): ExportAgentResponse;
}

export namespace ExportAgentResponse {
  export type AsObject = {
    agentUri: string,
    agentContent: Uint8Array | string,
  }

  export enum AgentCase { 
    AGENT_NOT_SET = 0,
    AGENT_URI = 1,
    AGENT_CONTENT = 2,
  }
}

export class ImportAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ImportAgentRequest;

  getAgentUri(): string;
  setAgentUri(value: string): ImportAgentRequest;

  getAgentContent(): Uint8Array | string;
  getAgentContent_asU8(): Uint8Array;
  getAgentContent_asB64(): string;
  setAgentContent(value: Uint8Array | string): ImportAgentRequest;

  getAgentCase(): ImportAgentRequest.AgentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportAgentRequest): ImportAgentRequest.AsObject;
  static serializeBinaryToWriter(message: ImportAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportAgentRequest;
  static deserializeBinaryFromReader(message: ImportAgentRequest, reader: jspb.BinaryReader): ImportAgentRequest;
}

export namespace ImportAgentRequest {
  export type AsObject = {
    parent: string,
    agentUri: string,
    agentContent: Uint8Array | string,
  }

  export enum AgentCase { 
    AGENT_NOT_SET = 0,
    AGENT_URI = 2,
    AGENT_CONTENT = 3,
  }
}

export class RestoreAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RestoreAgentRequest;

  getAgentUri(): string;
  setAgentUri(value: string): RestoreAgentRequest;

  getAgentContent(): Uint8Array | string;
  getAgentContent_asU8(): Uint8Array;
  getAgentContent_asB64(): string;
  setAgentContent(value: Uint8Array | string): RestoreAgentRequest;

  getAgentCase(): RestoreAgentRequest.AgentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreAgentRequest): RestoreAgentRequest.AsObject;
  static serializeBinaryToWriter(message: RestoreAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreAgentRequest;
  static deserializeBinaryFromReader(message: RestoreAgentRequest, reader: jspb.BinaryReader): RestoreAgentRequest;
}

export namespace RestoreAgentRequest {
  export type AsObject = {
    parent: string,
    agentUri: string,
    agentContent: Uint8Array | string,
  }

  export enum AgentCase { 
    AGENT_NOT_SET = 0,
    AGENT_URI = 2,
    AGENT_CONTENT = 3,
  }
}

