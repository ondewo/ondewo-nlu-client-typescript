import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';


export class Reference extends jspb.Message {
  getId(): string;
  setId(value: string): Reference;

  getLength(): number;
  setLength(value: number): Reference;

  getMd5checksum(): string;
  setMd5checksum(value: string): Reference;

  getName(): string;
  setName(value: string): Reference;

  getSourceUri(): string;
  setSourceUri(value: string): Reference;

  getSourceAccessionsList(): Array<string>;
  setSourceAccessionsList(value: Array<string>): Reference;
  clearSourceAccessionsList(): Reference;
  addSourceAccessions(value: string, index?: number): Reference;

  getNcbiTaxonId(): number;
  setNcbiTaxonId(value: number): Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reference.AsObject;
  static toObject(includeInstance: boolean, msg: Reference): Reference.AsObject;
  static serializeBinaryToWriter(message: Reference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reference;
  static deserializeBinaryFromReader(message: Reference, reader: jspb.BinaryReader): Reference;
}

export namespace Reference {
  export type AsObject = {
    id: string,
    length: number,
    md5checksum: string,
    name: string,
    sourceUri: string,
    sourceAccessionsList: Array<string>,
    ncbiTaxonId: number,
  }
}

export class ReferenceSet extends jspb.Message {
  getId(): string;
  setId(value: string): ReferenceSet;

  getReferenceIdsList(): Array<string>;
  setReferenceIdsList(value: Array<string>): ReferenceSet;
  clearReferenceIdsList(): ReferenceSet;
  addReferenceIds(value: string, index?: number): ReferenceSet;

  getMd5checksum(): string;
  setMd5checksum(value: string): ReferenceSet;

  getNcbiTaxonId(): number;
  setNcbiTaxonId(value: number): ReferenceSet;

  getDescription(): string;
  setDescription(value: string): ReferenceSet;

  getAssemblyId(): string;
  setAssemblyId(value: string): ReferenceSet;

  getSourceUri(): string;
  setSourceUri(value: string): ReferenceSet;

  getSourceAccessionsList(): Array<string>;
  setSourceAccessionsList(value: Array<string>): ReferenceSet;
  clearSourceAccessionsList(): ReferenceSet;
  addSourceAccessions(value: string, index?: number): ReferenceSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceSet.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceSet): ReferenceSet.AsObject;
  static serializeBinaryToWriter(message: ReferenceSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceSet;
  static deserializeBinaryFromReader(message: ReferenceSet, reader: jspb.BinaryReader): ReferenceSet;
}

export namespace ReferenceSet {
  export type AsObject = {
    id: string,
    referenceIdsList: Array<string>,
    md5checksum: string,
    ncbiTaxonId: number,
    description: string,
    assemblyId: string,
    sourceUri: string,
    sourceAccessionsList: Array<string>,
  }
}

export class SearchReferenceSetsRequest extends jspb.Message {
  getMd5checksumsList(): Array<string>;
  setMd5checksumsList(value: Array<string>): SearchReferenceSetsRequest;
  clearMd5checksumsList(): SearchReferenceSetsRequest;
  addMd5checksums(value: string, index?: number): SearchReferenceSetsRequest;

  getAccessionsList(): Array<string>;
  setAccessionsList(value: Array<string>): SearchReferenceSetsRequest;
  clearAccessionsList(): SearchReferenceSetsRequest;
  addAccessions(value: string, index?: number): SearchReferenceSetsRequest;

  getAssemblyId(): string;
  setAssemblyId(value: string): SearchReferenceSetsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchReferenceSetsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchReferenceSetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReferenceSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReferenceSetsRequest): SearchReferenceSetsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchReferenceSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReferenceSetsRequest;
  static deserializeBinaryFromReader(message: SearchReferenceSetsRequest, reader: jspb.BinaryReader): SearchReferenceSetsRequest;
}

export namespace SearchReferenceSetsRequest {
  export type AsObject = {
    md5checksumsList: Array<string>,
    accessionsList: Array<string>,
    assemblyId: string,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchReferenceSetsResponse extends jspb.Message {
  getReferenceSetsList(): Array<ReferenceSet>;
  setReferenceSetsList(value: Array<ReferenceSet>): SearchReferenceSetsResponse;
  clearReferenceSetsList(): SearchReferenceSetsResponse;
  addReferenceSets(value?: ReferenceSet, index?: number): ReferenceSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchReferenceSetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReferenceSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReferenceSetsResponse): SearchReferenceSetsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchReferenceSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReferenceSetsResponse;
  static deserializeBinaryFromReader(message: SearchReferenceSetsResponse, reader: jspb.BinaryReader): SearchReferenceSetsResponse;
}

export namespace SearchReferenceSetsResponse {
  export type AsObject = {
    referenceSetsList: Array<ReferenceSet.AsObject>,
    nextPageToken: string,
  }
}

export class GetReferenceSetRequest extends jspb.Message {
  getReferenceSetId(): string;
  setReferenceSetId(value: string): GetReferenceSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReferenceSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReferenceSetRequest): GetReferenceSetRequest.AsObject;
  static serializeBinaryToWriter(message: GetReferenceSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReferenceSetRequest;
  static deserializeBinaryFromReader(message: GetReferenceSetRequest, reader: jspb.BinaryReader): GetReferenceSetRequest;
}

export namespace GetReferenceSetRequest {
  export type AsObject = {
    referenceSetId: string,
  }
}

export class SearchReferencesRequest extends jspb.Message {
  getMd5checksumsList(): Array<string>;
  setMd5checksumsList(value: Array<string>): SearchReferencesRequest;
  clearMd5checksumsList(): SearchReferencesRequest;
  addMd5checksums(value: string, index?: number): SearchReferencesRequest;

  getAccessionsList(): Array<string>;
  setAccessionsList(value: Array<string>): SearchReferencesRequest;
  clearAccessionsList(): SearchReferencesRequest;
  addAccessions(value: string, index?: number): SearchReferencesRequest;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): SearchReferencesRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchReferencesRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchReferencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReferencesRequest): SearchReferencesRequest.AsObject;
  static serializeBinaryToWriter(message: SearchReferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReferencesRequest;
  static deserializeBinaryFromReader(message: SearchReferencesRequest, reader: jspb.BinaryReader): SearchReferencesRequest;
}

export namespace SearchReferencesRequest {
  export type AsObject = {
    md5checksumsList: Array<string>,
    accessionsList: Array<string>,
    referenceSetId: string,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchReferencesResponse extends jspb.Message {
  getReferencesList(): Array<Reference>;
  setReferencesList(value: Array<Reference>): SearchReferencesResponse;
  clearReferencesList(): SearchReferencesResponse;
  addReferences(value?: Reference, index?: number): Reference;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchReferencesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReferencesResponse): SearchReferencesResponse.AsObject;
  static serializeBinaryToWriter(message: SearchReferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReferencesResponse;
  static deserializeBinaryFromReader(message: SearchReferencesResponse, reader: jspb.BinaryReader): SearchReferencesResponse;
}

export namespace SearchReferencesResponse {
  export type AsObject = {
    referencesList: Array<Reference.AsObject>,
    nextPageToken: string,
  }
}

export class GetReferenceRequest extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): GetReferenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReferenceRequest): GetReferenceRequest.AsObject;
  static serializeBinaryToWriter(message: GetReferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReferenceRequest;
  static deserializeBinaryFromReader(message: GetReferenceRequest, reader: jspb.BinaryReader): GetReferenceRequest;
}

export namespace GetReferenceRequest {
  export type AsObject = {
    referenceId: string,
  }
}

export class ListBasesRequest extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): ListBasesRequest;

  getStart(): number;
  setStart(value: number): ListBasesRequest;

  getEnd(): number;
  setEnd(value: number): ListBasesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBasesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBasesRequest): ListBasesRequest.AsObject;
  static serializeBinaryToWriter(message: ListBasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBasesRequest;
  static deserializeBinaryFromReader(message: ListBasesRequest, reader: jspb.BinaryReader): ListBasesRequest;
}

export namespace ListBasesRequest {
  export type AsObject = {
    referenceId: string,
    start: number,
    end: number,
    pageToken: string,
    pageSize: number,
  }
}

export class ListBasesResponse extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ListBasesResponse;

  getSequence(): string;
  setSequence(value: string): ListBasesResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBasesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBasesResponse): ListBasesResponse.AsObject;
  static serializeBinaryToWriter(message: ListBasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBasesResponse;
  static deserializeBinaryFromReader(message: ListBasesResponse, reader: jspb.BinaryReader): ListBasesResponse;
}

export namespace ListBasesResponse {
  export type AsObject = {
    offset: number,
    sequence: string,
    nextPageToken: string,
  }
}

