import * as jspb from 'google-protobuf'



export class Layer extends jspb.Message {
  getDirective(): Layer.Directive;
  setDirective(value: Layer.Directive): Layer;

  getArguments(): string;
  setArguments(value: string): Layer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Layer.AsObject;
  static toObject(includeInstance: boolean, msg: Layer): Layer.AsObject;
  static serializeBinaryToWriter(message: Layer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Layer;
  static deserializeBinaryFromReader(message: Layer, reader: jspb.BinaryReader): Layer;
}

export namespace Layer {
  export type AsObject = {
    directive: Layer.Directive,
    arguments: string,
  }

  export enum Directive { 
    DIRECTIVE_UNSPECIFIED = 0,
    MAINTAINER = 1,
    RUN = 2,
    CMD = 3,
    LABEL = 4,
    EXPOSE = 5,
    ENV = 6,
    ADD = 7,
    COPY = 8,
    ENTRYPOINT = 9,
    VOLUME = 10,
    USER = 11,
    WORKDIR = 12,
    ARG = 13,
    ONBUILD = 14,
    STOPSIGNAL = 15,
    HEALTHCHECK = 16,
    SHELL = 17,
  }
}

export class Fingerprint extends jspb.Message {
  getV1Name(): string;
  setV1Name(value: string): Fingerprint;

  getV2BlobList(): Array<string>;
  setV2BlobList(value: Array<string>): Fingerprint;
  clearV2BlobList(): Fingerprint;
  addV2Blob(value: string, index?: number): Fingerprint;

  getV2Name(): string;
  setV2Name(value: string): Fingerprint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fingerprint.AsObject;
  static toObject(includeInstance: boolean, msg: Fingerprint): Fingerprint.AsObject;
  static serializeBinaryToWriter(message: Fingerprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fingerprint;
  static deserializeBinaryFromReader(message: Fingerprint, reader: jspb.BinaryReader): Fingerprint;
}

export namespace Fingerprint {
  export type AsObject = {
    v1Name: string,
    v2BlobList: Array<string>,
    v2Name: string,
  }
}

export class Basis extends jspb.Message {
  getResourceUrl(): string;
  setResourceUrl(value: string): Basis;

  getFingerprint(): Fingerprint | undefined;
  setFingerprint(value?: Fingerprint): Basis;
  hasFingerprint(): boolean;
  clearFingerprint(): Basis;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Basis.AsObject;
  static toObject(includeInstance: boolean, msg: Basis): Basis.AsObject;
  static serializeBinaryToWriter(message: Basis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Basis;
  static deserializeBinaryFromReader(message: Basis, reader: jspb.BinaryReader): Basis;
}

export namespace Basis {
  export type AsObject = {
    resourceUrl: string,
    fingerprint?: Fingerprint.AsObject,
  }
}

export class Details extends jspb.Message {
  getDerivedImage(): Derived | undefined;
  setDerivedImage(value?: Derived): Details;
  hasDerivedImage(): boolean;
  clearDerivedImage(): Details;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    derivedImage?: Derived.AsObject,
  }
}

export class Derived extends jspb.Message {
  getFingerprint(): Fingerprint | undefined;
  setFingerprint(value?: Fingerprint): Derived;
  hasFingerprint(): boolean;
  clearFingerprint(): Derived;

  getDistance(): number;
  setDistance(value: number): Derived;

  getLayerInfoList(): Array<Layer>;
  setLayerInfoList(value: Array<Layer>): Derived;
  clearLayerInfoList(): Derived;
  addLayerInfo(value?: Layer, index?: number): Layer;

  getBaseResourceUrl(): string;
  setBaseResourceUrl(value: string): Derived;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Derived.AsObject;
  static toObject(includeInstance: boolean, msg: Derived): Derived.AsObject;
  static serializeBinaryToWriter(message: Derived, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Derived;
  static deserializeBinaryFromReader(message: Derived, reader: jspb.BinaryReader): Derived;
}

export namespace Derived {
  export type AsObject = {
    fingerprint?: Fingerprint.AsObject,
    distance: number,
    layerInfoList: Array<Layer.AsObject>,
    baseResourceUrl: string,
  }
}

