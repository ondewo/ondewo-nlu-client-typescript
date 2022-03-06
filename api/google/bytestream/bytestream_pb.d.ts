import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class ReadRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): ReadRequest;

  getReadOffset(): number;
  setReadOffset(value: number): ReadRequest;

  getReadLimit(): number;
  setReadLimit(value: number): ReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    resourceName: string,
    readOffset: number,
    readLimit: number,
  }
}

export class ReadResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ReadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadResponse): ReadResponse.AsObject;
  static serializeBinaryToWriter(message: ReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadResponse;
  static deserializeBinaryFromReader(message: ReadResponse, reader: jspb.BinaryReader): ReadResponse;
}

export namespace ReadResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class WriteRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): WriteRequest;

  getWriteOffset(): number;
  setWriteOffset(value: number): WriteRequest;

  getFinishWrite(): boolean;
  setFinishWrite(value: boolean): WriteRequest;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): WriteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteRequest): WriteRequest.AsObject;
  static serializeBinaryToWriter(message: WriteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteRequest;
  static deserializeBinaryFromReader(message: WriteRequest, reader: jspb.BinaryReader): WriteRequest;
}

export namespace WriteRequest {
  export type AsObject = {
    resourceName: string,
    writeOffset: number,
    finishWrite: boolean,
    data: Uint8Array | string,
  }
}

export class WriteResponse extends jspb.Message {
  getCommittedSize(): number;
  setCommittedSize(value: number): WriteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WriteResponse): WriteResponse.AsObject;
  static serializeBinaryToWriter(message: WriteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteResponse;
  static deserializeBinaryFromReader(message: WriteResponse, reader: jspb.BinaryReader): WriteResponse;
}

export namespace WriteResponse {
  export type AsObject = {
    committedSize: number,
  }
}

export class QueryWriteStatusRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): QueryWriteStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryWriteStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryWriteStatusRequest): QueryWriteStatusRequest.AsObject;
  static serializeBinaryToWriter(message: QueryWriteStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryWriteStatusRequest;
  static deserializeBinaryFromReader(message: QueryWriteStatusRequest, reader: jspb.BinaryReader): QueryWriteStatusRequest;
}

export namespace QueryWriteStatusRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class QueryWriteStatusResponse extends jspb.Message {
  getCommittedSize(): number;
  setCommittedSize(value: number): QueryWriteStatusResponse;

  getComplete(): boolean;
  setComplete(value: boolean): QueryWriteStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryWriteStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryWriteStatusResponse): QueryWriteStatusResponse.AsObject;
  static serializeBinaryToWriter(message: QueryWriteStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryWriteStatusResponse;
  static deserializeBinaryFromReader(message: QueryWriteStatusResponse, reader: jspb.BinaryReader): QueryWriteStatusResponse;
}

export namespace QueryWriteStatusResponse {
  export type AsObject = {
    committedSize: number,
    complete: boolean,
  }
}

