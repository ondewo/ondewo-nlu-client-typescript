import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class CrawledUrl extends jspb.Message {
  getHttpMethod(): string;
  setHttpMethod(value: string): CrawledUrl;

  getUrl(): string;
  setUrl(value: string): CrawledUrl;

  getBody(): string;
  setBody(value: string): CrawledUrl;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawledUrl.AsObject;
  static toObject(includeInstance: boolean, msg: CrawledUrl): CrawledUrl.AsObject;
  static serializeBinaryToWriter(message: CrawledUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawledUrl;
  static deserializeBinaryFromReader(message: CrawledUrl, reader: jspb.BinaryReader): CrawledUrl;
}

export namespace CrawledUrl {
  export type AsObject = {
    httpMethod: string,
    url: string,
    body: string,
  }
}

