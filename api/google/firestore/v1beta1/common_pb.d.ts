import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class DocumentMask extends jspb.Message {
  getFieldPathsList(): Array<string>;
  setFieldPathsList(value: Array<string>): DocumentMask;
  clearFieldPathsList(): DocumentMask;
  addFieldPaths(value: string, index?: number): DocumentMask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentMask.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentMask): DocumentMask.AsObject;
  static serializeBinaryToWriter(message: DocumentMask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentMask;
  static deserializeBinaryFromReader(message: DocumentMask, reader: jspb.BinaryReader): DocumentMask;
}

export namespace DocumentMask {
  export type AsObject = {
    fieldPathsList: Array<string>,
  }
}

export class Precondition extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): Precondition;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Precondition;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Precondition;

  getConditionTypeCase(): Precondition.ConditionTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Precondition.AsObject;
  static toObject(includeInstance: boolean, msg: Precondition): Precondition.AsObject;
  static serializeBinaryToWriter(message: Precondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Precondition;
  static deserializeBinaryFromReader(message: Precondition, reader: jspb.BinaryReader): Precondition;
}

export namespace Precondition {
  export type AsObject = {
    exists: boolean,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ConditionTypeCase { 
    CONDITION_TYPE_NOT_SET = 0,
    EXISTS = 1,
    UPDATE_TIME = 2,
  }
}

export class TransactionOptions extends jspb.Message {
  getReadOnly(): TransactionOptions.ReadOnly | undefined;
  setReadOnly(value?: TransactionOptions.ReadOnly): TransactionOptions;
  hasReadOnly(): boolean;
  clearReadOnly(): TransactionOptions;

  getReadWrite(): TransactionOptions.ReadWrite | undefined;
  setReadWrite(value?: TransactionOptions.ReadWrite): TransactionOptions;
  hasReadWrite(): boolean;
  clearReadWrite(): TransactionOptions;

  getModeCase(): TransactionOptions.ModeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionOptions.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionOptions): TransactionOptions.AsObject;
  static serializeBinaryToWriter(message: TransactionOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionOptions;
  static deserializeBinaryFromReader(message: TransactionOptions, reader: jspb.BinaryReader): TransactionOptions;
}

export namespace TransactionOptions {
  export type AsObject = {
    readOnly?: TransactionOptions.ReadOnly.AsObject,
    readWrite?: TransactionOptions.ReadWrite.AsObject,
  }

  export class ReadWrite extends jspb.Message {
    getRetryTransaction(): Uint8Array | string;
    getRetryTransaction_asU8(): Uint8Array;
    getRetryTransaction_asB64(): string;
    setRetryTransaction(value: Uint8Array | string): ReadWrite;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadWrite.AsObject;
    static toObject(includeInstance: boolean, msg: ReadWrite): ReadWrite.AsObject;
    static serializeBinaryToWriter(message: ReadWrite, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadWrite;
    static deserializeBinaryFromReader(message: ReadWrite, reader: jspb.BinaryReader): ReadWrite;
  }

  export namespace ReadWrite {
    export type AsObject = {
      retryTransaction: Uint8Array | string,
    }
  }


  export class ReadOnly extends jspb.Message {
    getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): ReadOnly;
    hasReadTime(): boolean;
    clearReadTime(): ReadOnly;

    getConsistencySelectorCase(): ReadOnly.ConsistencySelectorCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOnly.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOnly): ReadOnly.AsObject;
    static serializeBinaryToWriter(message: ReadOnly, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOnly;
    static deserializeBinaryFromReader(message: ReadOnly, reader: jspb.BinaryReader): ReadOnly;
  }

  export namespace ReadOnly {
    export type AsObject = {
      readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum ConsistencySelectorCase { 
      CONSISTENCY_SELECTOR_NOT_SET = 0,
      READ_TIME = 2,
    }
  }


  export enum ModeCase { 
    MODE_NOT_SET = 0,
    READ_ONLY = 2,
    READ_WRITE = 3,
  }
}

