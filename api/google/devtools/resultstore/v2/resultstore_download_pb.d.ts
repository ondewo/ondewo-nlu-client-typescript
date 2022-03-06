import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_resultstore_v2_action_pb from '../../../../google/devtools/resultstore/v2/action_pb';
import * as google_devtools_resultstore_v2_common_pb from '../../../../google/devtools/resultstore/v2/common_pb';
import * as google_devtools_resultstore_v2_configuration_pb from '../../../../google/devtools/resultstore/v2/configuration_pb';
import * as google_devtools_resultstore_v2_configured_target_pb from '../../../../google/devtools/resultstore/v2/configured_target_pb';
import * as google_devtools_resultstore_v2_file_set_pb from '../../../../google/devtools/resultstore/v2/file_set_pb';
import * as google_devtools_resultstore_v2_invocation_pb from '../../../../google/devtools/resultstore/v2/invocation_pb';
import * as google_devtools_resultstore_v2_target_pb from '../../../../google/devtools/resultstore/v2/target_pb';


export class GetInvocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetInvocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvocationRequest): GetInvocationRequest.AsObject;
  static serializeBinaryToWriter(message: GetInvocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvocationRequest;
  static deserializeBinaryFromReader(message: GetInvocationRequest, reader: jspb.BinaryReader): GetInvocationRequest;
}

export namespace GetInvocationRequest {
  export type AsObject = {
    name: string,
  }
}

export class SearchInvocationsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): SearchInvocationsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchInvocationsRequest;

  getOffset(): number;
  setOffset(value: number): SearchInvocationsRequest;

  getQuery(): string;
  setQuery(value: string): SearchInvocationsRequest;

  getProjectId(): string;
  setProjectId(value: string): SearchInvocationsRequest;

  getPageStartCase(): SearchInvocationsRequest.PageStartCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchInvocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchInvocationsRequest): SearchInvocationsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchInvocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchInvocationsRequest;
  static deserializeBinaryFromReader(message: SearchInvocationsRequest, reader: jspb.BinaryReader): SearchInvocationsRequest;
}

export namespace SearchInvocationsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    offset: number,
    query: string,
    projectId: string,
  }

  export enum PageStartCase { 
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 2,
    OFFSET = 3,
  }
}

export class SearchInvocationsResponse extends jspb.Message {
  getInvocationsList(): Array<google_devtools_resultstore_v2_invocation_pb.Invocation>;
  setInvocationsList(value: Array<google_devtools_resultstore_v2_invocation_pb.Invocation>): SearchInvocationsResponse;
  clearInvocationsList(): SearchInvocationsResponse;
  addInvocations(value?: google_devtools_resultstore_v2_invocation_pb.Invocation, index?: number): google_devtools_resultstore_v2_invocation_pb.Invocation;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchInvocationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchInvocationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchInvocationsResponse): SearchInvocationsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchInvocationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchInvocationsResponse;
  static deserializeBinaryFromReader(message: SearchInvocationsResponse, reader: jspb.BinaryReader): SearchInvocationsResponse;
}

export namespace SearchInvocationsResponse {
  export type AsObject = {
    invocationsList: Array<google_devtools_resultstore_v2_invocation_pb.Invocation.AsObject>,
    nextPageToken: string,
  }
}

export class GetConfigurationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetConfigurationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfigurationRequest): GetConfigurationRequest.AsObject;
  static serializeBinaryToWriter(message: GetConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfigurationRequest;
  static deserializeBinaryFromReader(message: GetConfigurationRequest, reader: jspb.BinaryReader): GetConfigurationRequest;
}

export namespace GetConfigurationRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListConfigurationsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListConfigurationsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListConfigurationsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListConfigurationsRequest;

  getOffset(): number;
  setOffset(value: number): ListConfigurationsRequest;

  getPageStartCase(): ListConfigurationsRequest.PageStartCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfigurationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfigurationsRequest): ListConfigurationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConfigurationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfigurationsRequest;
  static deserializeBinaryFromReader(message: ListConfigurationsRequest, reader: jspb.BinaryReader): ListConfigurationsRequest;
}

export namespace ListConfigurationsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
  }

  export enum PageStartCase { 
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListConfigurationsResponse extends jspb.Message {
  getConfigurationsList(): Array<google_devtools_resultstore_v2_configuration_pb.Configuration>;
  setConfigurationsList(value: Array<google_devtools_resultstore_v2_configuration_pb.Configuration>): ListConfigurationsResponse;
  clearConfigurationsList(): ListConfigurationsResponse;
  addConfigurations(value?: google_devtools_resultstore_v2_configuration_pb.Configuration, index?: number): google_devtools_resultstore_v2_configuration_pb.Configuration;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListConfigurationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfigurationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfigurationsResponse): ListConfigurationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListConfigurationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfigurationsResponse;
  static deserializeBinaryFromReader(message: ListConfigurationsResponse, reader: jspb.BinaryReader): ListConfigurationsResponse;
}

export namespace ListConfigurationsResponse {
  export type AsObject = {
    configurationsList: Array<google_devtools_resultstore_v2_configuration_pb.Configuration.AsObject>,
    nextPageToken: string,
  }
}

export class GetTargetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetTargetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetRequest): GetTargetRequest.AsObject;
  static serializeBinaryToWriter(message: GetTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetRequest;
  static deserializeBinaryFromReader(message: GetTargetRequest, reader: jspb.BinaryReader): GetTargetRequest;
}

export namespace GetTargetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTargetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListTargetsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTargetsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTargetsRequest;

  getOffset(): number;
  setOffset(value: number): ListTargetsRequest;

  getPageStartCase(): ListTargetsRequest.PageStartCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTargetsRequest): ListTargetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTargetsRequest;
  static deserializeBinaryFromReader(message: ListTargetsRequest, reader: jspb.BinaryReader): ListTargetsRequest;
}

export namespace ListTargetsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
  }

  export enum PageStartCase { 
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListTargetsResponse extends jspb.Message {
  getTargetsList(): Array<google_devtools_resultstore_v2_target_pb.Target>;
  setTargetsList(value: Array<google_devtools_resultstore_v2_target_pb.Target>): ListTargetsResponse;
  clearTargetsList(): ListTargetsResponse;
  addTargets(value?: google_devtools_resultstore_v2_target_pb.Target, index?: number): google_devtools_resultstore_v2_target_pb.Target;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTargetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTargetsResponse): ListTargetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTargetsResponse;
  static deserializeBinaryFromReader(message: ListTargetsResponse, reader: jspb.BinaryReader): ListTargetsResponse;
}

export namespace ListTargetsResponse {
  export type AsObject = {
    targetsList: Array<google_devtools_resultstore_v2_target_pb.Target.AsObject>,
    nextPageToken: string,
  }
}

export class GetConfiguredTargetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetConfiguredTargetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfiguredTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfiguredTargetRequest): GetConfiguredTargetRequest.AsObject;
  static serializeBinaryToWriter(message: GetConfiguredTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfiguredTargetRequest;
  static deserializeBinaryFromReader(message: GetConfiguredTargetRequest, reader: jspb.BinaryReader): GetConfiguredTargetRequest;
}

export namespace GetConfiguredTargetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListConfiguredTargetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListConfiguredTargetsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListConfiguredTargetsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListConfiguredTargetsRequest;

  getOffset(): number;
  setOffset(value: number): ListConfiguredTargetsRequest;

  getPageStartCase(): ListConfiguredTargetsRequest.PageStartCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfiguredTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfiguredTargetsRequest): ListConfiguredTargetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConfiguredTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfiguredTargetsRequest;
  static deserializeBinaryFromReader(message: ListConfiguredTargetsRequest, reader: jspb.BinaryReader): ListConfiguredTargetsRequest;
}

export namespace ListConfiguredTargetsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
  }

  export enum PageStartCase { 
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListConfiguredTargetsResponse extends jspb.Message {
  getConfiguredTargetsList(): Array<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget>;
  setConfiguredTargetsList(value: Array<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget>): ListConfiguredTargetsResponse;
  clearConfiguredTargetsList(): ListConfiguredTargetsResponse;
  addConfiguredTargets(value?: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget, index?: number): google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListConfiguredTargetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConfiguredTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConfiguredTargetsResponse): ListConfiguredTargetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListConfiguredTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConfiguredTargetsResponse;
  static deserializeBinaryFromReader(message: ListConfiguredTargetsResponse, reader: jspb.BinaryReader): ListConfiguredTargetsResponse;
}

export namespace ListConfiguredTargetsResponse {
  export type AsObject = {
    configuredTargetsList: Array<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.AsObject>,
    nextPageToken: string,
  }
}

export class GetActionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetActionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionRequest): GetActionRequest.AsObject;
  static serializeBinaryToWriter(message: GetActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionRequest;
  static deserializeBinaryFromReader(message: GetActionRequest, reader: jspb.BinaryReader): GetActionRequest;
}

export namespace GetActionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListActionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListActionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListActionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListActionsRequest;

  getOffset(): number;
  setOffset(value: number): ListActionsRequest;

  getPageStartCase(): ListActionsRequest.PageStartCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListActionsRequest): ListActionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListActionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActionsRequest;
  static deserializeBinaryFromReader(message: ListActionsRequest, reader: jspb.BinaryReader): ListActionsRequest;
}

export namespace ListActionsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
  }

  export enum PageStartCase { 
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListActionsResponse extends jspb.Message {
  getActionsList(): Array<google_devtools_resultstore_v2_action_pb.Action>;
  setActionsList(value: Array<google_devtools_resultstore_v2_action_pb.Action>): ListActionsResponse;
  clearActionsList(): ListActionsResponse;
  addActions(value?: google_devtools_resultstore_v2_action_pb.Action, index?: number): google_devtools_resultstore_v2_action_pb.Action;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListActionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListActionsResponse): ListActionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListActionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActionsResponse;
  static deserializeBinaryFromReader(message: ListActionsResponse, reader: jspb.BinaryReader): ListActionsResponse;
}

export namespace ListActionsResponse {
  export type AsObject = {
    actionsList: Array<google_devtools_resultstore_v2_action_pb.Action.AsObject>,
    nextPageToken: string,
  }
}

export class GetFileSetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetFileSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileSetRequest): GetFileSetRequest.AsObject;
  static serializeBinaryToWriter(message: GetFileSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileSetRequest;
  static deserializeBinaryFromReader(message: GetFileSetRequest, reader: jspb.BinaryReader): GetFileSetRequest;
}

export namespace GetFileSetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListFileSetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListFileSetsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFileSetsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFileSetsRequest;

  getOffset(): number;
  setOffset(value: number): ListFileSetsRequest;

  getPageStartCase(): ListFileSetsRequest.PageStartCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFileSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFileSetsRequest): ListFileSetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFileSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFileSetsRequest;
  static deserializeBinaryFromReader(message: ListFileSetsRequest, reader: jspb.BinaryReader): ListFileSetsRequest;
}

export namespace ListFileSetsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
  }

  export enum PageStartCase { 
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListFileSetsResponse extends jspb.Message {
  getFileSetsList(): Array<google_devtools_resultstore_v2_file_set_pb.FileSet>;
  setFileSetsList(value: Array<google_devtools_resultstore_v2_file_set_pb.FileSet>): ListFileSetsResponse;
  clearFileSetsList(): ListFileSetsResponse;
  addFileSets(value?: google_devtools_resultstore_v2_file_set_pb.FileSet, index?: number): google_devtools_resultstore_v2_file_set_pb.FileSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFileSetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFileSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFileSetsResponse): ListFileSetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFileSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFileSetsResponse;
  static deserializeBinaryFromReader(message: ListFileSetsResponse, reader: jspb.BinaryReader): ListFileSetsResponse;
}

export namespace ListFileSetsResponse {
  export type AsObject = {
    fileSetsList: Array<google_devtools_resultstore_v2_file_set_pb.FileSet.AsObject>,
    nextPageToken: string,
  }
}

