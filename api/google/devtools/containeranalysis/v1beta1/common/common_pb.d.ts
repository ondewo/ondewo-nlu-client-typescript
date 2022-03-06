import * as jspb from 'google-protobuf'



export class RelatedUrl extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): RelatedUrl;

  getLabel(): string;
  setLabel(value: string): RelatedUrl;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelatedUrl.AsObject;
  static toObject(includeInstance: boolean, msg: RelatedUrl): RelatedUrl.AsObject;
  static serializeBinaryToWriter(message: RelatedUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelatedUrl;
  static deserializeBinaryFromReader(message: RelatedUrl, reader: jspb.BinaryReader): RelatedUrl;
}

export namespace RelatedUrl {
  export type AsObject = {
    url: string,
    label: string,
  }
}

export enum NoteKind { 
  NOTE_KIND_UNSPECIFIED = 0,
  VULNERABILITY = 1,
  BUILD = 2,
  IMAGE = 3,
  PACKAGE = 4,
  DEPLOYMENT = 5,
  DISCOVERY = 6,
  ATTESTATION = 7,
}
