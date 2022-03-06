import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class Application extends jspb.Message {
  getName(): string;
  setName(value: string): Application;

  getId(): string;
  setId(value: string): Application;

  getDispatchRulesList(): Array<UrlDispatchRule>;
  setDispatchRulesList(value: Array<UrlDispatchRule>): Application;
  clearDispatchRulesList(): Application;
  addDispatchRules(value?: UrlDispatchRule, index?: number): UrlDispatchRule;

  getAuthDomain(): string;
  setAuthDomain(value: string): Application;

  getLocationId(): string;
  setLocationId(value: string): Application;

  getCodeBucket(): string;
  setCodeBucket(value: string): Application;

  getDefaultCookieExpiration(): google_protobuf_duration_pb.Duration | undefined;
  setDefaultCookieExpiration(value?: google_protobuf_duration_pb.Duration): Application;
  hasDefaultCookieExpiration(): boolean;
  clearDefaultCookieExpiration(): Application;

  getDefaultHostname(): string;
  setDefaultHostname(value: string): Application;

  getDefaultBucket(): string;
  setDefaultBucket(value: string): Application;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    name: string,
    id: string,
    dispatchRulesList: Array<UrlDispatchRule.AsObject>,
    authDomain: string,
    locationId: string,
    codeBucket: string,
    defaultCookieExpiration?: google_protobuf_duration_pb.Duration.AsObject,
    defaultHostname: string,
    defaultBucket: string,
  }
}

export class UrlDispatchRule extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): UrlDispatchRule;

  getPath(): string;
  setPath(value: string): UrlDispatchRule;

  getService(): string;
  setService(value: string): UrlDispatchRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlDispatchRule.AsObject;
  static toObject(includeInstance: boolean, msg: UrlDispatchRule): UrlDispatchRule.AsObject;
  static serializeBinaryToWriter(message: UrlDispatchRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlDispatchRule;
  static deserializeBinaryFromReader(message: UrlDispatchRule, reader: jspb.BinaryReader): UrlDispatchRule;
}

export namespace UrlDispatchRule {
  export type AsObject = {
    domain: string,
    path: string,
    service: string,
  }
}

