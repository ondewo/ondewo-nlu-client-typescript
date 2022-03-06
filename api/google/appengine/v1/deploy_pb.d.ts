import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';


export class Deployment extends jspb.Message {
  getFilesMap(): jspb.Map<string, FileInfo>;
  clearFilesMap(): Deployment;

  getContainer(): ContainerInfo | undefined;
  setContainer(value?: ContainerInfo): Deployment;
  hasContainer(): boolean;
  clearContainer(): Deployment;

  getZip(): ZipInfo | undefined;
  setZip(value?: ZipInfo): Deployment;
  hasZip(): boolean;
  clearZip(): Deployment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployment.AsObject;
  static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
  static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployment;
  static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
}

export namespace Deployment {
  export type AsObject = {
    filesMap: Array<[string, FileInfo.AsObject]>,
    container?: ContainerInfo.AsObject,
    zip?: ZipInfo.AsObject,
  }
}

export class FileInfo extends jspb.Message {
  getSourceUrl(): string;
  setSourceUrl(value: string): FileInfo;

  getSha1Sum(): string;
  setSha1Sum(value: string): FileInfo;

  getMimeType(): string;
  setMimeType(value: string): FileInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    sourceUrl: string,
    sha1Sum: string,
    mimeType: string,
  }
}

export class ContainerInfo extends jspb.Message {
  getImage(): string;
  setImage(value: string): ContainerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerInfo): ContainerInfo.AsObject;
  static serializeBinaryToWriter(message: ContainerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerInfo;
  static deserializeBinaryFromReader(message: ContainerInfo, reader: jspb.BinaryReader): ContainerInfo;
}

export namespace ContainerInfo {
  export type AsObject = {
    image: string,
  }
}

export class ZipInfo extends jspb.Message {
  getSourceUrl(): string;
  setSourceUrl(value: string): ZipInfo;

  getFilesCount(): number;
  setFilesCount(value: number): ZipInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZipInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ZipInfo): ZipInfo.AsObject;
  static serializeBinaryToWriter(message: ZipInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZipInfo;
  static deserializeBinaryFromReader(message: ZipInfo, reader: jspb.BinaryReader): ZipInfo;
}

export namespace ZipInfo {
  export type AsObject = {
    sourceUrl: string,
    filesCount: number,
  }
}

