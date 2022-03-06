import * as jspb from 'google-protobuf'

import * as google_devtools_resultstore_v2_common_pb from '../../../../google/devtools/resultstore/v2/common_pb';
import * as google_devtools_resultstore_v2_file_pb from '../../../../google/devtools/resultstore/v2/file_pb';


export class Target extends jspb.Message {
  getName(): string;
  setName(value: string): Target;

  getId(): Target.Id | undefined;
  setId(value?: Target.Id): Target;
  hasId(): boolean;
  clearId(): Target;

  getStatusAttributes(): google_devtools_resultstore_v2_common_pb.StatusAttributes | undefined;
  setStatusAttributes(value?: google_devtools_resultstore_v2_common_pb.StatusAttributes): Target;
  hasStatusAttributes(): boolean;
  clearStatusAttributes(): Target;

  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): Target;
  hasTiming(): boolean;
  clearTiming(): Target;

  getTargetAttributes(): TargetAttributes | undefined;
  setTargetAttributes(value?: TargetAttributes): Target;
  hasTargetAttributes(): boolean;
  clearTargetAttributes(): Target;

  getTestAttributes(): TestAttributes | undefined;
  setTestAttributes(value?: TestAttributes): Target;
  hasTestAttributes(): boolean;
  clearTestAttributes(): Target;

  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): Target;
  clearPropertiesList(): Target;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): Target;
  clearFilesList(): Target;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  getIsVisible(): boolean;
  setIsVisible(value: boolean): Target;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Target.AsObject;
  static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
  static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Target;
  static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
}

export namespace Target {
  export type AsObject = {
    name: string,
    id?: Target.Id.AsObject,
    statusAttributes?: google_devtools_resultstore_v2_common_pb.StatusAttributes.AsObject,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    targetAttributes?: TargetAttributes.AsObject,
    testAttributes?: TestAttributes.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
    isVisible: boolean,
  }

  export class Id extends jspb.Message {
    getInvocationId(): string;
    setInvocationId(value: string): Id;

    getTargetId(): string;
    setTargetId(value: string): Id;

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
      targetId: string,
    }
  }

}

export class TargetAttributes extends jspb.Message {
  getType(): TargetType;
  setType(value: TargetType): TargetAttributes;

  getLanguage(): google_devtools_resultstore_v2_common_pb.Language;
  setLanguage(value: google_devtools_resultstore_v2_common_pb.Language): TargetAttributes;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): TargetAttributes;
  clearTagsList(): TargetAttributes;
  addTags(value: string, index?: number): TargetAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: TargetAttributes): TargetAttributes.AsObject;
  static serializeBinaryToWriter(message: TargetAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetAttributes;
  static deserializeBinaryFromReader(message: TargetAttributes, reader: jspb.BinaryReader): TargetAttributes;
}

export namespace TargetAttributes {
  export type AsObject = {
    type: TargetType,
    language: google_devtools_resultstore_v2_common_pb.Language,
    tagsList: Array<string>,
  }
}

export class TestAttributes extends jspb.Message {
  getSize(): TestSize;
  setSize(value: TestSize): TestAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: TestAttributes): TestAttributes.AsObject;
  static serializeBinaryToWriter(message: TestAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestAttributes;
  static deserializeBinaryFromReader(message: TestAttributes, reader: jspb.BinaryReader): TestAttributes;
}

export namespace TestAttributes {
  export type AsObject = {
    size: TestSize,
  }
}

export enum TargetType { 
  TARGET_TYPE_UNSPECIFIED = 0,
  APPLICATION = 1,
  BINARY = 2,
  LIBRARY = 3,
  PACKAGE = 4,
  TEST = 5,
}
export enum TestSize { 
  TEST_SIZE_UNSPECIFIED = 0,
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
  ENORMOUS = 4,
  OTHER_SIZE = 5,
}
