import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class KeyRange extends jspb.Message {
  getStartClosed(): google_protobuf_struct_pb.ListValue | undefined;
  setStartClosed(value?: google_protobuf_struct_pb.ListValue): KeyRange;
  hasStartClosed(): boolean;
  clearStartClosed(): KeyRange;

  getStartOpen(): google_protobuf_struct_pb.ListValue | undefined;
  setStartOpen(value?: google_protobuf_struct_pb.ListValue): KeyRange;
  hasStartOpen(): boolean;
  clearStartOpen(): KeyRange;

  getEndClosed(): google_protobuf_struct_pb.ListValue | undefined;
  setEndClosed(value?: google_protobuf_struct_pb.ListValue): KeyRange;
  hasEndClosed(): boolean;
  clearEndClosed(): KeyRange;

  getEndOpen(): google_protobuf_struct_pb.ListValue | undefined;
  setEndOpen(value?: google_protobuf_struct_pb.ListValue): KeyRange;
  hasEndOpen(): boolean;
  clearEndOpen(): KeyRange;

  getStartKeyTypeCase(): KeyRange.StartKeyTypeCase;

  getEndKeyTypeCase(): KeyRange.EndKeyTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyRange.AsObject;
  static toObject(includeInstance: boolean, msg: KeyRange): KeyRange.AsObject;
  static serializeBinaryToWriter(message: KeyRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyRange;
  static deserializeBinaryFromReader(message: KeyRange, reader: jspb.BinaryReader): KeyRange;
}

export namespace KeyRange {
  export type AsObject = {
    startClosed?: google_protobuf_struct_pb.ListValue.AsObject,
    startOpen?: google_protobuf_struct_pb.ListValue.AsObject,
    endClosed?: google_protobuf_struct_pb.ListValue.AsObject,
    endOpen?: google_protobuf_struct_pb.ListValue.AsObject,
  }

  export enum StartKeyTypeCase { 
    START_KEY_TYPE_NOT_SET = 0,
    START_CLOSED = 1,
    START_OPEN = 2,
  }

  export enum EndKeyTypeCase { 
    END_KEY_TYPE_NOT_SET = 0,
    END_CLOSED = 3,
    END_OPEN = 4,
  }
}

export class KeySet extends jspb.Message {
  getKeysList(): Array<google_protobuf_struct_pb.ListValue>;
  setKeysList(value: Array<google_protobuf_struct_pb.ListValue>): KeySet;
  clearKeysList(): KeySet;
  addKeys(value?: google_protobuf_struct_pb.ListValue, index?: number): google_protobuf_struct_pb.ListValue;

  getRangesList(): Array<KeyRange>;
  setRangesList(value: Array<KeyRange>): KeySet;
  clearRangesList(): KeySet;
  addRanges(value?: KeyRange, index?: number): KeyRange;

  getAll(): boolean;
  setAll(value: boolean): KeySet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeySet.AsObject;
  static toObject(includeInstance: boolean, msg: KeySet): KeySet.AsObject;
  static serializeBinaryToWriter(message: KeySet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeySet;
  static deserializeBinaryFromReader(message: KeySet, reader: jspb.BinaryReader): KeySet;
}

export namespace KeySet {
  export type AsObject = {
    keysList: Array<google_protobuf_struct_pb.ListValue.AsObject>,
    rangesList: Array<KeyRange.AsObject>,
    all: boolean,
  }
}

