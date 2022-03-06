import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Color extends jspb.Message {
  getRed(): number;
  setRed(value: number): Color;

  getGreen(): number;
  setGreen(value: number): Color;

  getBlue(): number;
  setBlue(value: number): Color;

  getAlpha(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAlpha(value?: google_protobuf_wrappers_pb.FloatValue): Color;
  hasAlpha(): boolean;
  clearAlpha(): Color;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Color.AsObject;
  static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
  static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Color;
  static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
}

export namespace Color {
  export type AsObject = {
    red: number,
    green: number,
    blue: number,
    alpha?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

