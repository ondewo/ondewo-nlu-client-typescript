import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';


export class Range extends jspb.Message {
  getReferenceName(): string;
  setReferenceName(value: string): Range;

  getStart(): number;
  setStart(value: number): Range;

  getEnd(): number;
  setEnd(value: number): Range;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Range.AsObject;
  static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
  static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Range;
  static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
  export type AsObject = {
    referenceName: string,
    start: number,
    end: number,
  }
}

