import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_distribution_pb from '../../../google/api/distribution_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TypedValue extends jspb.Message {
  getBoolValue(): boolean;
  setBoolValue(value: boolean): TypedValue;

  getInt64Value(): number;
  setInt64Value(value: number): TypedValue;

  getDoubleValue(): number;
  setDoubleValue(value: number): TypedValue;

  getStringValue(): string;
  setStringValue(value: string): TypedValue;

  getDistributionValue(): google_api_distribution_pb.Distribution | undefined;
  setDistributionValue(value?: google_api_distribution_pb.Distribution): TypedValue;
  hasDistributionValue(): boolean;
  clearDistributionValue(): TypedValue;

  getValueCase(): TypedValue.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypedValue.AsObject;
  static toObject(includeInstance: boolean, msg: TypedValue): TypedValue.AsObject;
  static serializeBinaryToWriter(message: TypedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypedValue;
  static deserializeBinaryFromReader(message: TypedValue, reader: jspb.BinaryReader): TypedValue;
}

export namespace TypedValue {
  export type AsObject = {
    boolValue: boolean,
    int64Value: number,
    doubleValue: number,
    stringValue: string,
    distributionValue?: google_api_distribution_pb.Distribution.AsObject,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    BOOL_VALUE = 1,
    INT64_VALUE = 2,
    DOUBLE_VALUE = 3,
    STRING_VALUE = 4,
    DISTRIBUTION_VALUE = 5,
  }
}

export class TimeInterval extends jspb.Message {
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeInterval;
  hasEndTime(): boolean;
  clearEndTime(): TimeInterval;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeInterval;
  hasStartTime(): boolean;
  clearStartTime(): TimeInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeInterval.AsObject;
  static toObject(includeInstance: boolean, msg: TimeInterval): TimeInterval.AsObject;
  static serializeBinaryToWriter(message: TimeInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeInterval;
  static deserializeBinaryFromReader(message: TimeInterval, reader: jspb.BinaryReader): TimeInterval;
}

export namespace TimeInterval {
  export type AsObject = {
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Aggregation extends jspb.Message {
  getAlignmentPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setAlignmentPeriod(value?: google_protobuf_duration_pb.Duration): Aggregation;
  hasAlignmentPeriod(): boolean;
  clearAlignmentPeriod(): Aggregation;

  getPerSeriesAligner(): Aggregation.Aligner;
  setPerSeriesAligner(value: Aggregation.Aligner): Aggregation;

  getCrossSeriesReducer(): Aggregation.Reducer;
  setCrossSeriesReducer(value: Aggregation.Reducer): Aggregation;

  getGroupByFieldsList(): Array<string>;
  setGroupByFieldsList(value: Array<string>): Aggregation;
  clearGroupByFieldsList(): Aggregation;
  addGroupByFields(value: string, index?: number): Aggregation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Aggregation.AsObject;
  static toObject(includeInstance: boolean, msg: Aggregation): Aggregation.AsObject;
  static serializeBinaryToWriter(message: Aggregation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Aggregation;
  static deserializeBinaryFromReader(message: Aggregation, reader: jspb.BinaryReader): Aggregation;
}

export namespace Aggregation {
  export type AsObject = {
    alignmentPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    perSeriesAligner: Aggregation.Aligner,
    crossSeriesReducer: Aggregation.Reducer,
    groupByFieldsList: Array<string>,
  }

  export enum Aligner { 
    ALIGN_NONE = 0,
    ALIGN_DELTA = 1,
    ALIGN_RATE = 2,
    ALIGN_INTERPOLATE = 3,
    ALIGN_NEXT_OLDER = 4,
    ALIGN_MIN = 10,
    ALIGN_MAX = 11,
    ALIGN_MEAN = 12,
    ALIGN_COUNT = 13,
    ALIGN_SUM = 14,
    ALIGN_STDDEV = 15,
    ALIGN_COUNT_TRUE = 16,
    ALIGN_COUNT_FALSE = 24,
    ALIGN_FRACTION_TRUE = 17,
    ALIGN_PERCENTILE_99 = 18,
    ALIGN_PERCENTILE_95 = 19,
    ALIGN_PERCENTILE_50 = 20,
    ALIGN_PERCENTILE_05 = 21,
    ALIGN_PERCENT_CHANGE = 23,
  }

  export enum Reducer { 
    REDUCE_NONE = 0,
    REDUCE_MEAN = 1,
    REDUCE_MIN = 2,
    REDUCE_MAX = 3,
    REDUCE_SUM = 4,
    REDUCE_STDDEV = 5,
    REDUCE_COUNT = 6,
    REDUCE_COUNT_TRUE = 7,
    REDUCE_COUNT_FALSE = 15,
    REDUCE_FRACTION_TRUE = 8,
    REDUCE_PERCENTILE_99 = 9,
    REDUCE_PERCENTILE_95 = 10,
    REDUCE_PERCENTILE_50 = 11,
    REDUCE_PERCENTILE_05 = 12,
  }
}

export enum ComparisonType { 
  COMPARISON_UNSPECIFIED = 0,
  COMPARISON_GT = 1,
  COMPARISON_GE = 2,
  COMPARISON_LT = 3,
  COMPARISON_LE = 4,
  COMPARISON_EQ = 5,
  COMPARISON_NE = 6,
}
export enum ServiceTier { 
  SERVICE_TIER_UNSPECIFIED = 0,
  SERVICE_TIER_BASIC = 1,
  SERVICE_TIER_PREMIUM = 2,
}
