import * as jspb from 'google-protobuf'

import * as google_devtools_resultstore_v2_file_pb from '../../../../google/devtools/resultstore/v2/file_pb';


export class FileSet extends jspb.Message {
  getName(): string;
  setName(value: string): FileSet;

  getId(): FileSet.Id | undefined;
  setId(value?: FileSet.Id): FileSet;
  hasId(): boolean;
  clearId(): FileSet;

  getFileSetsList(): Array<string>;
  setFileSetsList(value: Array<string>): FileSet;
  clearFileSetsList(): FileSet;
  addFileSets(value: string, index?: number): FileSet;

  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): FileSet;
  clearFilesList(): FileSet;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileSet.AsObject;
  static toObject(includeInstance: boolean, msg: FileSet): FileSet.AsObject;
  static serializeBinaryToWriter(message: FileSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileSet;
  static deserializeBinaryFromReader(message: FileSet, reader: jspb.BinaryReader): FileSet;
}

export namespace FileSet {
  export type AsObject = {
    name: string,
    id?: FileSet.Id.AsObject,
    fileSetsList: Array<string>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
  }

  export class Id extends jspb.Message {
    getInvocationId(): string;
    setInvocationId(value: string): Id;

    getFileSetId(): string;
    setFileSetId(value: string): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      invocationId: string,
      fileSetId: string,
    }
  }

}

