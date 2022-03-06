import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class OutdatedLibrary extends jspb.Message {
  getLibraryName(): string;
  setLibraryName(value: string): OutdatedLibrary;

  getVersion(): string;
  setVersion(value: string): OutdatedLibrary;

  getLearnMoreUrlsList(): Array<string>;
  setLearnMoreUrlsList(value: Array<string>): OutdatedLibrary;
  clearLearnMoreUrlsList(): OutdatedLibrary;
  addLearnMoreUrls(value: string, index?: number): OutdatedLibrary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutdatedLibrary.AsObject;
  static toObject(includeInstance: boolean, msg: OutdatedLibrary): OutdatedLibrary.AsObject;
  static serializeBinaryToWriter(message: OutdatedLibrary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutdatedLibrary;
  static deserializeBinaryFromReader(message: OutdatedLibrary, reader: jspb.BinaryReader): OutdatedLibrary;
}

export namespace OutdatedLibrary {
  export type AsObject = {
    libraryName: string,
    version: string,
    learnMoreUrlsList: Array<string>,
  }
}

export class ViolatingResource extends jspb.Message {
  getContentType(): string;
  setContentType(value: string): ViolatingResource;

  getResourceUrl(): string;
  setResourceUrl(value: string): ViolatingResource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViolatingResource.AsObject;
  static toObject(includeInstance: boolean, msg: ViolatingResource): ViolatingResource.AsObject;
  static serializeBinaryToWriter(message: ViolatingResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViolatingResource;
  static deserializeBinaryFromReader(message: ViolatingResource, reader: jspb.BinaryReader): ViolatingResource;
}

export namespace ViolatingResource {
  export type AsObject = {
    contentType: string,
    resourceUrl: string,
  }
}

export class VulnerableParameters extends jspb.Message {
  getParameterNamesList(): Array<string>;
  setParameterNamesList(value: Array<string>): VulnerableParameters;
  clearParameterNamesList(): VulnerableParameters;
  addParameterNames(value: string, index?: number): VulnerableParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VulnerableParameters.AsObject;
  static toObject(includeInstance: boolean, msg: VulnerableParameters): VulnerableParameters.AsObject;
  static serializeBinaryToWriter(message: VulnerableParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VulnerableParameters;
  static deserializeBinaryFromReader(message: VulnerableParameters, reader: jspb.BinaryReader): VulnerableParameters;
}

export namespace VulnerableParameters {
  export type AsObject = {
    parameterNamesList: Array<string>,
  }
}

export class Xss extends jspb.Message {
  getStackTracesList(): Array<string>;
  setStackTracesList(value: Array<string>): Xss;
  clearStackTracesList(): Xss;
  addStackTraces(value: string, index?: number): Xss;

  getErrorMessage(): string;
  setErrorMessage(value: string): Xss;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Xss.AsObject;
  static toObject(includeInstance: boolean, msg: Xss): Xss.AsObject;
  static serializeBinaryToWriter(message: Xss, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Xss;
  static deserializeBinaryFromReader(message: Xss, reader: jspb.BinaryReader): Xss;
}

export namespace Xss {
  export type AsObject = {
    stackTracesList: Array<string>,
    errorMessage: string,
  }
}

