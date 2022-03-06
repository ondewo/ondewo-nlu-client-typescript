import * as jspb from 'google-protobuf'



export class SpanContext extends jspb.Message {
  getSpanName(): string;
  setSpanName(value: string): SpanContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpanContext.AsObject;
  static toObject(includeInstance: boolean, msg: SpanContext): SpanContext.AsObject;
  static serializeBinaryToWriter(message: SpanContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpanContext;
  static deserializeBinaryFromReader(message: SpanContext, reader: jspb.BinaryReader): SpanContext;
}

export namespace SpanContext {
  export type AsObject = {
    spanName: string,
  }
}

