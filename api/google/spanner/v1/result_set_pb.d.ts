import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_spanner_v1_query_plan_pb from '../../../google/spanner/v1/query_plan_pb';
import * as google_spanner_v1_transaction_pb from '../../../google/spanner/v1/transaction_pb';
import * as google_spanner_v1_type_pb from '../../../google/spanner/v1/type_pb';


export class ResultSet extends jspb.Message {
  getMetadata(): ResultSetMetadata | undefined;
  setMetadata(value?: ResultSetMetadata): ResultSet;
  hasMetadata(): boolean;
  clearMetadata(): ResultSet;

  getRowsList(): Array<google_protobuf_struct_pb.ListValue>;
  setRowsList(value: Array<google_protobuf_struct_pb.ListValue>): ResultSet;
  clearRowsList(): ResultSet;
  addRows(value?: google_protobuf_struct_pb.ListValue, index?: number): google_protobuf_struct_pb.ListValue;

  getStats(): ResultSetStats | undefined;
  setStats(value?: ResultSetStats): ResultSet;
  hasStats(): boolean;
  clearStats(): ResultSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultSet.AsObject;
  static toObject(includeInstance: boolean, msg: ResultSet): ResultSet.AsObject;
  static serializeBinaryToWriter(message: ResultSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultSet;
  static deserializeBinaryFromReader(message: ResultSet, reader: jspb.BinaryReader): ResultSet;
}

export namespace ResultSet {
  export type AsObject = {
    metadata?: ResultSetMetadata.AsObject,
    rowsList: Array<google_protobuf_struct_pb.ListValue.AsObject>,
    stats?: ResultSetStats.AsObject,
  }
}

export class PartialResultSet extends jspb.Message {
  getMetadata(): ResultSetMetadata | undefined;
  setMetadata(value?: ResultSetMetadata): PartialResultSet;
  hasMetadata(): boolean;
  clearMetadata(): PartialResultSet;

  getValuesList(): Array<google_protobuf_struct_pb.Value>;
  setValuesList(value: Array<google_protobuf_struct_pb.Value>): PartialResultSet;
  clearValuesList(): PartialResultSet;
  addValues(value?: google_protobuf_struct_pb.Value, index?: number): google_protobuf_struct_pb.Value;

  getChunkedValue(): boolean;
  setChunkedValue(value: boolean): PartialResultSet;

  getResumeToken(): Uint8Array | string;
  getResumeToken_asU8(): Uint8Array;
  getResumeToken_asB64(): string;
  setResumeToken(value: Uint8Array | string): PartialResultSet;

  getStats(): ResultSetStats | undefined;
  setStats(value?: ResultSetStats): PartialResultSet;
  hasStats(): boolean;
  clearStats(): PartialResultSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialResultSet.AsObject;
  static toObject(includeInstance: boolean, msg: PartialResultSet): PartialResultSet.AsObject;
  static serializeBinaryToWriter(message: PartialResultSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialResultSet;
  static deserializeBinaryFromReader(message: PartialResultSet, reader: jspb.BinaryReader): PartialResultSet;
}

export namespace PartialResultSet {
  export type AsObject = {
    metadata?: ResultSetMetadata.AsObject,
    valuesList: Array<google_protobuf_struct_pb.Value.AsObject>,
    chunkedValue: boolean,
    resumeToken: Uint8Array | string,
    stats?: ResultSetStats.AsObject,
  }
}

export class ResultSetMetadata extends jspb.Message {
  getRowType(): google_spanner_v1_type_pb.StructType | undefined;
  setRowType(value?: google_spanner_v1_type_pb.StructType): ResultSetMetadata;
  hasRowType(): boolean;
  clearRowType(): ResultSetMetadata;

  getTransaction(): google_spanner_v1_transaction_pb.Transaction | undefined;
  setTransaction(value?: google_spanner_v1_transaction_pb.Transaction): ResultSetMetadata;
  hasTransaction(): boolean;
  clearTransaction(): ResultSetMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultSetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ResultSetMetadata): ResultSetMetadata.AsObject;
  static serializeBinaryToWriter(message: ResultSetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultSetMetadata;
  static deserializeBinaryFromReader(message: ResultSetMetadata, reader: jspb.BinaryReader): ResultSetMetadata;
}

export namespace ResultSetMetadata {
  export type AsObject = {
    rowType?: google_spanner_v1_type_pb.StructType.AsObject,
    transaction?: google_spanner_v1_transaction_pb.Transaction.AsObject,
  }
}

export class ResultSetStats extends jspb.Message {
  getQueryPlan(): google_spanner_v1_query_plan_pb.QueryPlan | undefined;
  setQueryPlan(value?: google_spanner_v1_query_plan_pb.QueryPlan): ResultSetStats;
  hasQueryPlan(): boolean;
  clearQueryPlan(): ResultSetStats;

  getQueryStats(): google_protobuf_struct_pb.Struct | undefined;
  setQueryStats(value?: google_protobuf_struct_pb.Struct): ResultSetStats;
  hasQueryStats(): boolean;
  clearQueryStats(): ResultSetStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultSetStats.AsObject;
  static toObject(includeInstance: boolean, msg: ResultSetStats): ResultSetStats.AsObject;
  static serializeBinaryToWriter(message: ResultSetStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultSetStats;
  static deserializeBinaryFromReader(message: ResultSetStats, reader: jspb.BinaryReader): ResultSetStats;
}

export namespace ResultSetStats {
  export type AsObject = {
    queryPlan?: google_spanner_v1_query_plan_pb.QueryPlan.AsObject,
    queryStats?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

