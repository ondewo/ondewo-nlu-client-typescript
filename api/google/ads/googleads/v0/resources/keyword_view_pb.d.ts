import * as jspb from 'google-protobuf'



export class KeywordView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): KeywordView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordView.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordView): KeywordView.AsObject;
  static serializeBinaryToWriter(message: KeywordView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordView;
  static deserializeBinaryFromReader(message: KeywordView, reader: jspb.BinaryReader): KeywordView;
}

export namespace KeywordView {
  export type AsObject = {
    resourceName: string,
  }
}

