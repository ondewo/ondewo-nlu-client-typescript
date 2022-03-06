import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';


export class Type extends jspb.Message {
  getCode(): TypeCode;
  setCode(value: TypeCode): Type;

  getArrayElementType(): Type | undefined;
  setArrayElementType(value?: Type): Type;
  hasArrayElementType(): boolean;
  clearArrayElementType(): Type;

  getStructType(): StructType | undefined;
  setStructType(value?: StructType): Type;
  hasStructType(): boolean;
  clearStructType(): Type;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Type.AsObject;
  static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
  static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Type;
  static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export namespace Type {
  export type AsObject = {
    code: TypeCode,
    arrayElementType?: Type.AsObject,
    structType?: StructType.AsObject,
  }
}

export class StructType extends jspb.Message {
  getFieldsList(): Array<StructType.Field>;
  setFieldsList(value: Array<StructType.Field>): StructType;
  clearFieldsList(): StructType;
  addFields(value?: StructType.Field, index?: number): StructType.Field;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructType.AsObject;
  static toObject(includeInstance: boolean, msg: StructType): StructType.AsObject;
  static serializeBinaryToWriter(message: StructType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructType;
  static deserializeBinaryFromReader(message: StructType, reader: jspb.BinaryReader): StructType;
}

export namespace StructType {
  export type AsObject = {
    fieldsList: Array<StructType.Field.AsObject>,
  }

  export class Field extends jspb.Message {
    getName(): string;
    setName(value: string): Field;

    getType(): Type | undefined;
    setType(value?: Type): Field;
    hasType(): boolean;
    clearType(): Field;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Field.AsObject;
    static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
    static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Field;
    static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
  }

  export namespace Field {
    export type AsObject = {
      name: string,
      type?: Type.AsObject,
    }
  }

}

export enum TypeCode { 
  TYPE_CODE_UNSPECIFIED = 0,
  BOOL = 1,
  INT64 = 2,
  FLOAT64 = 3,
  TIMESTAMP = 4,
  DATE = 5,
  STRING = 6,
  BYTES = 7,
  ARRAY = 8,
  STRUCT = 9,
}
