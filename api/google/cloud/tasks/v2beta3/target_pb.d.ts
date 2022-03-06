import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class AppEngineHttpQueue extends jspb.Message {
  getAppEngineRoutingOverride(): AppEngineRouting | undefined;
  setAppEngineRoutingOverride(value?: AppEngineRouting): AppEngineHttpQueue;
  hasAppEngineRoutingOverride(): boolean;
  clearAppEngineRoutingOverride(): AppEngineHttpQueue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppEngineHttpQueue.AsObject;
  static toObject(includeInstance: boolean, msg: AppEngineHttpQueue): AppEngineHttpQueue.AsObject;
  static serializeBinaryToWriter(message: AppEngineHttpQueue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppEngineHttpQueue;
  static deserializeBinaryFromReader(message: AppEngineHttpQueue, reader: jspb.BinaryReader): AppEngineHttpQueue;
}

export namespace AppEngineHttpQueue {
  export type AsObject = {
    appEngineRoutingOverride?: AppEngineRouting.AsObject,
  }
}

export class AppEngineHttpRequest extends jspb.Message {
  getHttpMethod(): HttpMethod;
  setHttpMethod(value: HttpMethod): AppEngineHttpRequest;

  getAppEngineRouting(): AppEngineRouting | undefined;
  setAppEngineRouting(value?: AppEngineRouting): AppEngineHttpRequest;
  hasAppEngineRouting(): boolean;
  clearAppEngineRouting(): AppEngineHttpRequest;

  getRelativeUri(): string;
  setRelativeUri(value: string): AppEngineHttpRequest;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): AppEngineHttpRequest;

  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): AppEngineHttpRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppEngineHttpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppEngineHttpRequest): AppEngineHttpRequest.AsObject;
  static serializeBinaryToWriter(message: AppEngineHttpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppEngineHttpRequest;
  static deserializeBinaryFromReader(message: AppEngineHttpRequest, reader: jspb.BinaryReader): AppEngineHttpRequest;
}

export namespace AppEngineHttpRequest {
  export type AsObject = {
    httpMethod: HttpMethod,
    appEngineRouting?: AppEngineRouting.AsObject,
    relativeUri: string,
    headersMap: Array<[string, string]>,
    body: Uint8Array | string,
  }
}

export class AppEngineRouting extends jspb.Message {
  getService(): string;
  setService(value: string): AppEngineRouting;

  getVersion(): string;
  setVersion(value: string): AppEngineRouting;

  getInstance(): string;
  setInstance(value: string): AppEngineRouting;

  getHost(): string;
  setHost(value: string): AppEngineRouting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppEngineRouting.AsObject;
  static toObject(includeInstance: boolean, msg: AppEngineRouting): AppEngineRouting.AsObject;
  static serializeBinaryToWriter(message: AppEngineRouting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppEngineRouting;
  static deserializeBinaryFromReader(message: AppEngineRouting, reader: jspb.BinaryReader): AppEngineRouting;
}

export namespace AppEngineRouting {
  export type AsObject = {
    service: string,
    version: string,
    instance: string,
    host: string,
  }
}

export enum HttpMethod { 
  HTTP_METHOD_UNSPECIFIED = 0,
  POST = 1,
  GET = 2,
  HEAD = 3,
  PUT = 4,
  DELETE = 5,
}
