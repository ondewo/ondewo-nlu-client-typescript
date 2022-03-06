import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TransactionOptions extends jspb.Message {
  getReadWrite(): TransactionOptions.ReadWrite | undefined;
  setReadWrite(value?: TransactionOptions.ReadWrite): TransactionOptions;
  hasReadWrite(): boolean;
  clearReadWrite(): TransactionOptions;

  getReadOnly(): TransactionOptions.ReadOnly | undefined;
  setReadOnly(value?: TransactionOptions.ReadOnly): TransactionOptions;
  hasReadOnly(): boolean;
  clearReadOnly(): TransactionOptions;

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
    readWrite?: TransactionOptions.ReadWrite.AsObject,
    readOnly?: TransactionOptions.ReadOnly.AsObject,
  }

  export class ReadWrite extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadWrite.AsObject;
    static toObject(includeInstance: boolean, msg: ReadWrite): ReadWrite.AsObject;
    static serializeBinaryToWriter(message: ReadWrite, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadWrite;
    static deserializeBinaryFromReader(message: ReadWrite, reader: jspb.BinaryReader): ReadWrite;
  }

  export namespace ReadWrite {
    export type AsObject = {
    }
  }


  export class ReadOnly extends jspb.Message {
    getStrong(): boolean;
    setStrong(value: boolean): ReadOnly;

    getMinReadTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setMinReadTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ReadOnly;
    hasMinReadTimestamp(): boolean;
    clearMinReadTimestamp(): ReadOnly;

    getMaxStaleness(): google_protobuf_duration_pb.Duration | undefined;
    setMaxStaleness(value?: google_protobuf_duration_pb.Duration): ReadOnly;
    hasMaxStaleness(): boolean;
    clearMaxStaleness(): ReadOnly;

    getReadTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReadTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ReadOnly;
    hasReadTimestamp(): boolean;
    clearReadTimestamp(): ReadOnly;

    getExactStaleness(): google_protobuf_duration_pb.Duration | undefined;
    setExactStaleness(value?: google_protobuf_duration_pb.Duration): ReadOnly;
    hasExactStaleness(): boolean;
    clearExactStaleness(): ReadOnly;

    getReturnReadTimestamp(): boolean;
    setReturnReadTimestamp(value: boolean): ReadOnly;

    getTimestampBoundCase(): ReadOnly.TimestampBoundCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadOnly.AsObject;
    static toObject(includeInstance: boolean, msg: ReadOnly): ReadOnly.AsObject;
    static serializeBinaryToWriter(message: ReadOnly, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadOnly;
    static deserializeBinaryFromReader(message: ReadOnly, reader: jspb.BinaryReader): ReadOnly;
  }

  export namespace ReadOnly {
    export type AsObject = {
      strong: boolean,
      minReadTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      maxStaleness?: google_protobuf_duration_pb.Duration.AsObject,
      readTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      exactStaleness?: google_protobuf_duration_pb.Duration.AsObject,
      returnReadTimestamp: boolean,
    }

    export enum TimestampBoundCase { 
      TIMESTAMP_BOUND_NOT_SET = 0,
      STRONG = 1,
      MIN_READ_TIMESTAMP = 2,
      MAX_STALENESS = 3,
      READ_TIMESTAMP = 4,
      EXACT_STALENESS = 5,
    }
  }


  export enum ModeCase { 
    MODE_NOT_SET = 0,
    READ_WRITE = 1,
    READ_ONLY = 2,
  }
}

export class Transaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): Transaction;

  getReadTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;
  hasReadTimestamp(): boolean;
  clearReadTimestamp(): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    id: Uint8Array | string,
    readTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TransactionSelector extends jspb.Message {
  getSingleUse(): TransactionOptions | undefined;
  setSingleUse(value?: TransactionOptions): TransactionSelector;
  hasSingleUse(): boolean;
  clearSingleUse(): TransactionSelector;

  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): TransactionSelector;

  getBegin(): TransactionOptions | undefined;
  setBegin(value?: TransactionOptions): TransactionSelector;
  hasBegin(): boolean;
  clearBegin(): TransactionSelector;

  getSelectorCase(): TransactionSelector.SelectorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionSelector.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionSelector): TransactionSelector.AsObject;
  static serializeBinaryToWriter(message: TransactionSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionSelector;
  static deserializeBinaryFromReader(message: TransactionSelector, reader: jspb.BinaryReader): TransactionSelector;
}

export namespace TransactionSelector {
  export type AsObject = {
    singleUse?: TransactionOptions.AsObject,
    id: Uint8Array | string,
    begin?: TransactionOptions.AsObject,
  }

  export enum SelectorCase { 
    SELECTOR_NOT_SET = 0,
    SINGLE_USE = 1,
    ID = 2,
    BEGIN = 3,
  }
}

