import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Deployable extends jspb.Message {
  getResourceUriList(): Array<string>;
  setResourceUriList(value: Array<string>): Deployable;
  clearResourceUriList(): Deployable;
  addResourceUri(value: string, index?: number): Deployable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployable.AsObject;
  static toObject(includeInstance: boolean, msg: Deployable): Deployable.AsObject;
  static serializeBinaryToWriter(message: Deployable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployable;
  static deserializeBinaryFromReader(message: Deployable, reader: jspb.BinaryReader): Deployable;
}

export namespace Deployable {
  export type AsObject = {
    resourceUriList: Array<string>,
  }
}

export class Details extends jspb.Message {
  getDeployment(): Deployment | undefined;
  setDeployment(value?: Deployment): Details;
  hasDeployment(): boolean;
  clearDeployment(): Details;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    deployment?: Deployment.AsObject,
  }
}

export class Deployment extends jspb.Message {
  getUserEmail(): string;
  setUserEmail(value: string): Deployment;

  getDeployTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeployTime(value?: google_protobuf_timestamp_pb.Timestamp): Deployment;
  hasDeployTime(): boolean;
  clearDeployTime(): Deployment;

  getUndeployTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUndeployTime(value?: google_protobuf_timestamp_pb.Timestamp): Deployment;
  hasUndeployTime(): boolean;
  clearUndeployTime(): Deployment;

  getConfig(): string;
  setConfig(value: string): Deployment;

  getAddress(): string;
  setAddress(value: string): Deployment;

  getResourceUriList(): Array<string>;
  setResourceUriList(value: Array<string>): Deployment;
  clearResourceUriList(): Deployment;
  addResourceUri(value: string, index?: number): Deployment;

  getPlatform(): Deployment.Platform;
  setPlatform(value: Deployment.Platform): Deployment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployment.AsObject;
  static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
  static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployment;
  static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
}

export namespace Deployment {
  export type AsObject = {
    userEmail: string,
    deployTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    undeployTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    config: string,
    address: string,
    resourceUriList: Array<string>,
    platform: Deployment.Platform,
  }

  export enum Platform { 
    PLATFORM_UNSPECIFIED = 0,
    GKE = 1,
    FLEX = 2,
    CUSTOM = 3,
  }
}

