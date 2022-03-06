import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_type_latlng_pb from '../../../google/type/latlng_pb';


export class Document extends jspb.Message {
  getName(): string;
  setName(value: string): Document;

  getFieldsMap(): jspb.Map<string, Value>;
  clearFieldsMap(): Document;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Document;
  hasCreateTime(): boolean;
  clearCreateTime(): Document;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Document;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Document;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    name: string,
    fieldsMap: Array<[string, Value.AsObject]>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Value extends jspb.Message {
  getNullValue(): google_protobuf_struct_pb.NullValue;
  setNullValue(value: google_protobuf_struct_pb.NullValue): Value;

  getBooleanValue(): boolean;
  setBooleanValue(value: boolean): Value;

  getIntegerValue(): number;
  setIntegerValue(value: number): Value;

  getDoubleValue(): number;
  setDoubleValue(value: number): Value;

  getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): Value;
  hasTimestampValue(): boolean;
  clearTimestampValue(): Value;

  getStringValue(): string;
  setStringValue(value: string): Value;

  getBytesValue(): Uint8Array | string;
  getBytesValue_asU8(): Uint8Array;
  getBytesValue_asB64(): string;
  setBytesValue(value: Uint8Array | string): Value;

  getReferenceValue(): string;
  setReferenceValue(value: string): Value;

  getGeoPointValue(): google_type_latlng_pb.LatLng | undefined;
  setGeoPointValue(value?: google_type_latlng_pb.LatLng): Value;
  hasGeoPointValue(): boolean;
  clearGeoPointValue(): Value;

  getArrayValue(): ArrayValue | undefined;
  setArrayValue(value?: ArrayValue): Value;
  hasArrayValue(): boolean;
  clearArrayValue(): Value;

  getMapValue(): MapValue | undefined;
  setMapValue(value?: MapValue): Value;
  hasMapValue(): boolean;
  clearMapValue(): Value;

  getValueTypeCase(): Value.ValueTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    nullValue: google_protobuf_struct_pb.NullValue,
    booleanValue: boolean,
    integerValue: number,
    doubleValue: number,
    timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stringValue: string,
    bytesValue: Uint8Array | string,
    referenceValue: string,
    geoPointValue?: google_type_latlng_pb.LatLng.AsObject,
    arrayValue?: ArrayValue.AsObject,
    mapValue?: MapValue.AsObject,
  }

  export enum ValueTypeCase { 
    VALUE_TYPE_NOT_SET = 0,
    NULL_VALUE = 11,
    BOOLEAN_VALUE = 1,
    INTEGER_VALUE = 2,
    DOUBLE_VALUE = 3,
    TIMESTAMP_VALUE = 10,
    STRING_VALUE = 17,
    BYTES_VALUE = 18,
    REFERENCE_VALUE = 5,
    GEO_POINT_VALUE = 8,
    ARRAY_VALUE = 9,
    MAP_VALUE = 6,
  }
}

export class ArrayValue extends jspb.Message {
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): ArrayValue;
  clearValuesList(): ArrayValue;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrayValue.AsObject;
  static toObject(includeInstance: boolean, msg: ArrayValue): ArrayValue.AsObject;
  static serializeBinaryToWriter(message: ArrayValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrayValue;
  static deserializeBinaryFromReader(message: ArrayValue, reader: jspb.BinaryReader): ArrayValue;
}

export namespace ArrayValue {
  export type AsObject = {
    valuesList: Array<Value.AsObject>,
  }
}

export class MapValue extends jspb.Message {
  getFieldsMap(): jspb.Map<string, Value>;
  clearFieldsMap(): MapValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapValue.AsObject;
  static toObject(includeInstance: boolean, msg: MapValue): MapValue.AsObject;
  static serializeBinaryToWriter(message: MapValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapValue;
  static deserializeBinaryFromReader(message: MapValue, reader: jspb.BinaryReader): MapValue;
}

export namespace MapValue {
  export type AsObject = {
    fieldsMap: Array<[string, Value.AsObject]>,
  }
}

