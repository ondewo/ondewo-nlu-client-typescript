import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class KnowledgeBase extends jspb.Message {
  getName(): string;
  setName(value: string): KnowledgeBase;

  getDisplayName(): string;
  setDisplayName(value: string): KnowledgeBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeBase.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeBase): KnowledgeBase.AsObject;
  static serializeBinaryToWriter(message: KnowledgeBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeBase;
  static deserializeBinaryFromReader(message: KnowledgeBase, reader: jspb.BinaryReader): KnowledgeBase;
}

export namespace KnowledgeBase {
  export type AsObject = {
    name: string,
    displayName: string,
  }
}

export class ListKnowledgeBasesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListKnowledgeBasesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListKnowledgeBasesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListKnowledgeBasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKnowledgeBasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListKnowledgeBasesRequest): ListKnowledgeBasesRequest.AsObject;
  static serializeBinaryToWriter(message: ListKnowledgeBasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKnowledgeBasesRequest;
  static deserializeBinaryFromReader(message: ListKnowledgeBasesRequest, reader: jspb.BinaryReader): ListKnowledgeBasesRequest;
}

export namespace ListKnowledgeBasesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListKnowledgeBasesResponse extends jspb.Message {
  getKnowledgeBasesList(): Array<KnowledgeBase>;
  setKnowledgeBasesList(value: Array<KnowledgeBase>): ListKnowledgeBasesResponse;
  clearKnowledgeBasesList(): ListKnowledgeBasesResponse;
  addKnowledgeBases(value?: KnowledgeBase, index?: number): KnowledgeBase;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListKnowledgeBasesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKnowledgeBasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListKnowledgeBasesResponse): ListKnowledgeBasesResponse.AsObject;
  static serializeBinaryToWriter(message: ListKnowledgeBasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKnowledgeBasesResponse;
  static deserializeBinaryFromReader(message: ListKnowledgeBasesResponse, reader: jspb.BinaryReader): ListKnowledgeBasesResponse;
}

export namespace ListKnowledgeBasesResponse {
  export type AsObject = {
    knowledgeBasesList: Array<KnowledgeBase.AsObject>,
    nextPageToken: string,
  }
}

export class GetKnowledgeBaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetKnowledgeBaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeBaseRequest): GetKnowledgeBaseRequest.AsObject;
  static serializeBinaryToWriter(message: GetKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: GetKnowledgeBaseRequest, reader: jspb.BinaryReader): GetKnowledgeBaseRequest;
}

export namespace GetKnowledgeBaseRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateKnowledgeBaseRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateKnowledgeBaseRequest;

  getKnowledgeBase(): KnowledgeBase | undefined;
  setKnowledgeBase(value?: KnowledgeBase): CreateKnowledgeBaseRequest;
  hasKnowledgeBase(): boolean;
  clearKnowledgeBase(): CreateKnowledgeBaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeBaseRequest): CreateKnowledgeBaseRequest.AsObject;
  static serializeBinaryToWriter(message: CreateKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: CreateKnowledgeBaseRequest, reader: jspb.BinaryReader): CreateKnowledgeBaseRequest;
}

export namespace CreateKnowledgeBaseRequest {
  export type AsObject = {
    parent: string,
    knowledgeBase?: KnowledgeBase.AsObject,
  }
}

export class DeleteKnowledgeBaseRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteKnowledgeBaseRequest;

  getForce(): boolean;
  setForce(value: boolean): DeleteKnowledgeBaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKnowledgeBaseRequest): DeleteKnowledgeBaseRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: DeleteKnowledgeBaseRequest, reader: jspb.BinaryReader): DeleteKnowledgeBaseRequest;
}

export namespace DeleteKnowledgeBaseRequest {
  export type AsObject = {
    name: string,
    force: boolean,
  }
}

