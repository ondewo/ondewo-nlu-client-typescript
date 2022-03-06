import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class BillingAccount extends jspb.Message {
  getName(): string;
  setName(value: string): BillingAccount;

  getOpen(): boolean;
  setOpen(value: boolean): BillingAccount;

  getDisplayName(): string;
  setDisplayName(value: string): BillingAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: BillingAccount): BillingAccount.AsObject;
  static serializeBinaryToWriter(message: BillingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingAccount;
  static deserializeBinaryFromReader(message: BillingAccount, reader: jspb.BinaryReader): BillingAccount;
}

export namespace BillingAccount {
  export type AsObject = {
    name: string,
    open: boolean,
    displayName: string,
  }
}

export class ProjectBillingInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ProjectBillingInfo;

  getProjectId(): string;
  setProjectId(value: string): ProjectBillingInfo;

  getBillingAccountName(): string;
  setBillingAccountName(value: string): ProjectBillingInfo;

  getBillingEnabled(): boolean;
  setBillingEnabled(value: boolean): ProjectBillingInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectBillingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectBillingInfo): ProjectBillingInfo.AsObject;
  static serializeBinaryToWriter(message: ProjectBillingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectBillingInfo;
  static deserializeBinaryFromReader(message: ProjectBillingInfo, reader: jspb.BinaryReader): ProjectBillingInfo;
}

export namespace ProjectBillingInfo {
  export type AsObject = {
    name: string,
    projectId: string,
    billingAccountName: string,
    billingEnabled: boolean,
  }
}

export class GetBillingAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetBillingAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingAccountRequest): GetBillingAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetBillingAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingAccountRequest;
  static deserializeBinaryFromReader(message: GetBillingAccountRequest, reader: jspb.BinaryReader): GetBillingAccountRequest;
}

export namespace GetBillingAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListBillingAccountsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListBillingAccountsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBillingAccountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingAccountsRequest): ListBillingAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBillingAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingAccountsRequest;
  static deserializeBinaryFromReader(message: ListBillingAccountsRequest, reader: jspb.BinaryReader): ListBillingAccountsRequest;
}

export namespace ListBillingAccountsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class ListBillingAccountsResponse extends jspb.Message {
  getBillingAccountsList(): Array<BillingAccount>;
  setBillingAccountsList(value: Array<BillingAccount>): ListBillingAccountsResponse;
  clearBillingAccountsList(): ListBillingAccountsResponse;
  addBillingAccounts(value?: BillingAccount, index?: number): BillingAccount;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBillingAccountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingAccountsResponse): ListBillingAccountsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBillingAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingAccountsResponse;
  static deserializeBinaryFromReader(message: ListBillingAccountsResponse, reader: jspb.BinaryReader): ListBillingAccountsResponse;
}

export namespace ListBillingAccountsResponse {
  export type AsObject = {
    billingAccountsList: Array<BillingAccount.AsObject>,
    nextPageToken: string,
  }
}

export class ListProjectBillingInfoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListProjectBillingInfoRequest;

  getPageSize(): number;
  setPageSize(value: number): ListProjectBillingInfoRequest;

  getPageToken(): string;
  setPageToken(value: string): ListProjectBillingInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectBillingInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectBillingInfoRequest): ListProjectBillingInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ListProjectBillingInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectBillingInfoRequest;
  static deserializeBinaryFromReader(message: ListProjectBillingInfoRequest, reader: jspb.BinaryReader): ListProjectBillingInfoRequest;
}

export namespace ListProjectBillingInfoRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListProjectBillingInfoResponse extends jspb.Message {
  getProjectBillingInfoList(): Array<ProjectBillingInfo>;
  setProjectBillingInfoList(value: Array<ProjectBillingInfo>): ListProjectBillingInfoResponse;
  clearProjectBillingInfoList(): ListProjectBillingInfoResponse;
  addProjectBillingInfo(value?: ProjectBillingInfo, index?: number): ProjectBillingInfo;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListProjectBillingInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectBillingInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectBillingInfoResponse): ListProjectBillingInfoResponse.AsObject;
  static serializeBinaryToWriter(message: ListProjectBillingInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectBillingInfoResponse;
  static deserializeBinaryFromReader(message: ListProjectBillingInfoResponse, reader: jspb.BinaryReader): ListProjectBillingInfoResponse;
}

export namespace ListProjectBillingInfoResponse {
  export type AsObject = {
    projectBillingInfoList: Array<ProjectBillingInfo.AsObject>,
    nextPageToken: string,
  }
}

export class GetProjectBillingInfoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetProjectBillingInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectBillingInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectBillingInfoRequest): GetProjectBillingInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetProjectBillingInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectBillingInfoRequest;
  static deserializeBinaryFromReader(message: GetProjectBillingInfoRequest, reader: jspb.BinaryReader): GetProjectBillingInfoRequest;
}

export namespace GetProjectBillingInfoRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateProjectBillingInfoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateProjectBillingInfoRequest;

  getProjectBillingInfo(): ProjectBillingInfo | undefined;
  setProjectBillingInfo(value?: ProjectBillingInfo): UpdateProjectBillingInfoRequest;
  hasProjectBillingInfo(): boolean;
  clearProjectBillingInfo(): UpdateProjectBillingInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectBillingInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectBillingInfoRequest): UpdateProjectBillingInfoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectBillingInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectBillingInfoRequest;
  static deserializeBinaryFromReader(message: UpdateProjectBillingInfoRequest, reader: jspb.BinaryReader): UpdateProjectBillingInfoRequest;
}

export namespace UpdateProjectBillingInfoRequest {
  export type AsObject = {
    name: string,
    projectBillingInfo?: ProjectBillingInfo.AsObject,
  }
}

