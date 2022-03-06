import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_support_common_pb from '../../../../google/cloud/support/common_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class GetSupportAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetSupportAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSupportAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSupportAccountRequest): GetSupportAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetSupportAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSupportAccountRequest;
  static deserializeBinaryFromReader(message: GetSupportAccountRequest, reader: jspb.BinaryReader): GetSupportAccountRequest;
}

export namespace GetSupportAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListSupportAccountsRequest extends jspb.Message {
  getFilter(): string;
  setFilter(value: string): ListSupportAccountsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListSupportAccountsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSupportAccountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSupportAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSupportAccountsRequest): ListSupportAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSupportAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSupportAccountsRequest;
  static deserializeBinaryFromReader(message: ListSupportAccountsRequest, reader: jspb.BinaryReader): ListSupportAccountsRequest;
}

export namespace ListSupportAccountsRequest {
  export type AsObject = {
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSupportAccountsResponse extends jspb.Message {
  getAccountsList(): Array<google_cloud_support_common_pb.SupportAccount>;
  setAccountsList(value: Array<google_cloud_support_common_pb.SupportAccount>): ListSupportAccountsResponse;
  clearAccountsList(): ListSupportAccountsResponse;
  addAccounts(value?: google_cloud_support_common_pb.SupportAccount, index?: number): google_cloud_support_common_pb.SupportAccount;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSupportAccountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSupportAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSupportAccountsResponse): ListSupportAccountsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSupportAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSupportAccountsResponse;
  static deserializeBinaryFromReader(message: ListSupportAccountsResponse, reader: jspb.BinaryReader): ListSupportAccountsResponse;
}

export namespace ListSupportAccountsResponse {
  export type AsObject = {
    accountsList: Array<google_cloud_support_common_pb.SupportAccount.AsObject>,
    nextPageToken: string,
  }
}

export class GetCaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetCaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCaseRequest): GetCaseRequest.AsObject;
  static serializeBinaryToWriter(message: GetCaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCaseRequest;
  static deserializeBinaryFromReader(message: GetCaseRequest, reader: jspb.BinaryReader): GetCaseRequest;
}

export namespace GetCaseRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListCasesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListCasesRequest;

  getFilter(): string;
  setFilter(value: string): ListCasesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCasesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCasesRequest): ListCasesRequest.AsObject;
  static serializeBinaryToWriter(message: ListCasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCasesRequest;
  static deserializeBinaryFromReader(message: ListCasesRequest, reader: jspb.BinaryReader): ListCasesRequest;
}

export namespace ListCasesRequest {
  export type AsObject = {
    name: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListCasesResponse extends jspb.Message {
  getCasesList(): Array<google_cloud_support_common_pb.Case>;
  setCasesList(value: Array<google_cloud_support_common_pb.Case>): ListCasesResponse;
  clearCasesList(): ListCasesResponse;
  addCases(value?: google_cloud_support_common_pb.Case, index?: number): google_cloud_support_common_pb.Case;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCasesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCasesResponse): ListCasesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCasesResponse;
  static deserializeBinaryFromReader(message: ListCasesResponse, reader: jspb.BinaryReader): ListCasesResponse;
}

export namespace ListCasesResponse {
  export type AsObject = {
    casesList: Array<google_cloud_support_common_pb.Case.AsObject>,
    nextPageToken: string,
  }
}

export class ListCommentsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListCommentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCommentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCommentsRequest): ListCommentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCommentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCommentsRequest;
  static deserializeBinaryFromReader(message: ListCommentsRequest, reader: jspb.BinaryReader): ListCommentsRequest;
}

export namespace ListCommentsRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListCommentsResponse extends jspb.Message {
  getCommentsList(): Array<google_cloud_support_common_pb.Comment>;
  setCommentsList(value: Array<google_cloud_support_common_pb.Comment>): ListCommentsResponse;
  clearCommentsList(): ListCommentsResponse;
  addComments(value?: google_cloud_support_common_pb.Comment, index?: number): google_cloud_support_common_pb.Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCommentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCommentsResponse): ListCommentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCommentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCommentsResponse;
  static deserializeBinaryFromReader(message: ListCommentsResponse, reader: jspb.BinaryReader): ListCommentsResponse;
}

export namespace ListCommentsResponse {
  export type AsObject = {
    commentsList: Array<google_cloud_support_common_pb.Comment.AsObject>,
  }
}

export class CreateCaseRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateCaseRequest;

  getCase(): google_cloud_support_common_pb.Case | undefined;
  setCase(value?: google_cloud_support_common_pb.Case): CreateCaseRequest;
  hasCase(): boolean;
  clearCase(): CreateCaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCaseRequest): CreateCaseRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCaseRequest;
  static deserializeBinaryFromReader(message: CreateCaseRequest, reader: jspb.BinaryReader): CreateCaseRequest;
}

export namespace CreateCaseRequest {
  export type AsObject = {
    parent: string,
    pb_case?: google_cloud_support_common_pb.Case.AsObject,
  }
}

export class UpdateCaseRequest extends jspb.Message {
  getCase(): google_cloud_support_common_pb.Case | undefined;
  setCase(value?: google_cloud_support_common_pb.Case): UpdateCaseRequest;
  hasCase(): boolean;
  clearCase(): UpdateCaseRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCaseRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateCaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCaseRequest): UpdateCaseRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCaseRequest;
  static deserializeBinaryFromReader(message: UpdateCaseRequest, reader: jspb.BinaryReader): UpdateCaseRequest;
}

export namespace UpdateCaseRequest {
  export type AsObject = {
    pb_case?: google_cloud_support_common_pb.Case.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateCommentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateCommentRequest;

  getComment(): google_cloud_support_common_pb.Comment | undefined;
  setComment(value?: google_cloud_support_common_pb.Comment): CreateCommentRequest;
  hasComment(): boolean;
  clearComment(): CreateCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentRequest): CreateCommentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentRequest;
  static deserializeBinaryFromReader(message: CreateCommentRequest, reader: jspb.BinaryReader): CreateCommentRequest;
}

export namespace CreateCommentRequest {
  export type AsObject = {
    name: string,
    comment?: google_cloud_support_common_pb.Comment.AsObject,
  }
}

export class GetIssueTaxonomyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIssueTaxonomyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIssueTaxonomyRequest): GetIssueTaxonomyRequest.AsObject;
  static serializeBinaryToWriter(message: GetIssueTaxonomyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIssueTaxonomyRequest;
  static deserializeBinaryFromReader(message: GetIssueTaxonomyRequest, reader: jspb.BinaryReader): GetIssueTaxonomyRequest;
}

export namespace GetIssueTaxonomyRequest {
  export type AsObject = {
  }
}

