import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class Document extends jspb.Message {
  getName(): string;
  setName(value: string): Document;

  getDisplayName(): string;
  setDisplayName(value: string): Document;

  getMimeType(): string;
  setMimeType(value: string): Document;

  getKnowledgeTypesList(): Array<Document.KnowledgeType>;
  setKnowledgeTypesList(value: Array<Document.KnowledgeType>): Document;
  clearKnowledgeTypesList(): Document;
  addKnowledgeTypes(value: Document.KnowledgeType, index?: number): Document;

  getContentUri(): string;
  setContentUri(value: string): Document;

  getContent(): string;
  setContent(value: string): Document;

  getSourceCase(): Document.SourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    name: string,
    displayName: string,
    mimeType: string,
    knowledgeTypesList: Array<Document.KnowledgeType>,
    contentUri: string,
    content: string,
  }

  export enum KnowledgeType { 
    KNOWLEDGE_TYPE_UNSPECIFIED = 0,
    FAQ = 1,
    EXTRACTIVE_QA = 2,
  }

  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    CONTENT_URI = 5,
    CONTENT = 6,
  }
}

export class ListDocumentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListDocumentsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDocumentsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDocumentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDocumentsRequest): ListDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDocumentsRequest;
  static deserializeBinaryFromReader(message: ListDocumentsRequest, reader: jspb.BinaryReader): ListDocumentsRequest;
}

export namespace ListDocumentsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDocumentsResponse extends jspb.Message {
  getDocumentsList(): Array<Document>;
  setDocumentsList(value: Array<Document>): ListDocumentsResponse;
  clearDocumentsList(): ListDocumentsResponse;
  addDocuments(value?: Document, index?: number): Document;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDocumentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDocumentsResponse): ListDocumentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDocumentsResponse;
  static deserializeBinaryFromReader(message: ListDocumentsResponse, reader: jspb.BinaryReader): ListDocumentsResponse;
}

export namespace ListDocumentsResponse {
  export type AsObject = {
    documentsList: Array<Document.AsObject>,
    nextPageToken: string,
  }
}

export class GetDocumentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDocumentRequest): GetDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: GetDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDocumentRequest;
  static deserializeBinaryFromReader(message: GetDocumentRequest, reader: jspb.BinaryReader): GetDocumentRequest;
}

export namespace GetDocumentRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateDocumentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateDocumentRequest;

  getDocument(): Document | undefined;
  setDocument(value?: Document): CreateDocumentRequest;
  hasDocument(): boolean;
  clearDocument(): CreateDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDocumentRequest): CreateDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDocumentRequest;
  static deserializeBinaryFromReader(message: CreateDocumentRequest, reader: jspb.BinaryReader): CreateDocumentRequest;
}

export namespace CreateDocumentRequest {
  export type AsObject = {
    parent: string,
    document?: Document.AsObject,
  }
}

export class DeleteDocumentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDocumentRequest): DeleteDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDocumentRequest;
  static deserializeBinaryFromReader(message: DeleteDocumentRequest, reader: jspb.BinaryReader): DeleteDocumentRequest;
}

export namespace DeleteDocumentRequest {
  export type AsObject = {
    name: string,
  }
}

export class KnowledgeOperationMetadata extends jspb.Message {
  getState(): KnowledgeOperationMetadata.State;
  setState(value: KnowledgeOperationMetadata.State): KnowledgeOperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeOperationMetadata): KnowledgeOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: KnowledgeOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeOperationMetadata;
  static deserializeBinaryFromReader(message: KnowledgeOperationMetadata, reader: jspb.BinaryReader): KnowledgeOperationMetadata;
}

export namespace KnowledgeOperationMetadata {
  export type AsObject = {
    state: KnowledgeOperationMetadata.State,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    PENDING = 1,
    RUNNING = 2,
    DONE = 3,
  }
}

