import * as jspb from 'google-protobuf'



export class Value extends jspb.Message {
  getBooleanValue(): boolean;
  setBooleanValue(value: boolean): Value;

  getInt64Value(): number;
  setInt64Value(value: number): Value;

  getFloatValue(): number;
  setFloatValue(value: number): Value;

  getDoubleValue(): number;
  setDoubleValue(value: number): Value;

  getStringValue(): string;
  setStringValue(value: string): Value;

  getValueCase(): Value.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    booleanValue: boolean,
    int64Value: number,
    floatValue: number,
    doubleValue: number,
    stringValue: string,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    BOOLEAN_VALUE = 1,
    INT64_VALUE = 2,
    FLOAT_VALUE = 3,
    DOUBLE_VALUE = 4,
    STRING_VALUE = 5,
  }
}

