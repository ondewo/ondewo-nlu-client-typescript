import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_bigtable_v2_data_pb from '../../../google/bigtable/v2/data_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';


export class ReadRowsRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): ReadRowsRequest;

  getAppProfileId(): string;
  setAppProfileId(value: string): ReadRowsRequest;

  getRows(): google_bigtable_v2_data_pb.RowSet | undefined;
  setRows(value?: google_bigtable_v2_data_pb.RowSet): ReadRowsRequest;
  hasRows(): boolean;
  clearRows(): ReadRowsRequest;

  getFilter(): google_bigtable_v2_data_pb.RowFilter | undefined;
  setFilter(value?: google_bigtable_v2_data_pb.RowFilter): ReadRowsRequest;
  hasFilter(): boolean;
  clearFilter(): ReadRowsRequest;

  getRowsLimit(): number;
  setRowsLimit(value: number): ReadRowsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRowsRequest): ReadRowsRequest.AsObject;
  static serializeBinaryToWriter(message: ReadRowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRowsRequest;
  static deserializeBinaryFromReader(message: ReadRowsRequest, reader: jspb.BinaryReader): ReadRowsRequest;
}

export namespace ReadRowsRequest {
  export type AsObject = {
    tableName: string,
    appProfileId: string,
    rows?: google_bigtable_v2_data_pb.RowSet.AsObject,
    filter?: google_bigtable_v2_data_pb.RowFilter.AsObject,
    rowsLimit: number,
  }
}

export class ReadRowsResponse extends jspb.Message {
  getChunksList(): Array<ReadRowsResponse.CellChunk>;
  setChunksList(value: Array<ReadRowsResponse.CellChunk>): ReadRowsResponse;
  clearChunksList(): ReadRowsResponse;
  addChunks(value?: ReadRowsResponse.CellChunk, index?: number): ReadRowsResponse.CellChunk;

  getLastScannedRowKey(): Uint8Array | string;
  getLastScannedRowKey_asU8(): Uint8Array;
  getLastScannedRowKey_asB64(): string;
  setLastScannedRowKey(value: Uint8Array | string): ReadRowsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRowsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRowsResponse): ReadRowsResponse.AsObject;
  static serializeBinaryToWriter(message: ReadRowsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRowsResponse;
  static deserializeBinaryFromReader(message: ReadRowsResponse, reader: jspb.BinaryReader): ReadRowsResponse;
}

export namespace ReadRowsResponse {
  export type AsObject = {
    chunksList: Array<ReadRowsResponse.CellChunk.AsObject>,
    lastScannedRowKey: Uint8Array | string,
  }

  export class CellChunk extends jspb.Message {
    getRowKey(): Uint8Array | string;
    getRowKey_asU8(): Uint8Array;
    getRowKey_asB64(): string;
    setRowKey(value: Uint8Array | string): CellChunk;

    getFamilyName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFamilyName(value?: google_protobuf_wrappers_pb.StringValue): CellChunk;
    hasFamilyName(): boolean;
    clearFamilyName(): CellChunk;

    getQualifier(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setQualifier(value?: google_protobuf_wrappers_pb.BytesValue): CellChunk;
    hasQualifier(): boolean;
    clearQualifier(): CellChunk;

    getTimestampMicros(): number;
    setTimestampMicros(value: number): CellChunk;

    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): CellChunk;
    clearLabelsList(): CellChunk;
    addLabels(value: string, index?: number): CellChunk;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): CellChunk;

    getValueSize(): number;
    setValueSize(value: number): CellChunk;

    getResetRow(): boolean;
    setResetRow(value: boolean): CellChunk;

    getCommitRow(): boolean;
    setCommitRow(value: boolean): CellChunk;

    getRowStatusCase(): CellChunk.RowStatusCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellChunk.AsObject;
    static toObject(includeInstance: boolean, msg: CellChunk): CellChunk.AsObject;
    static serializeBinaryToWriter(message: CellChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellChunk;
    static deserializeBinaryFromReader(message: CellChunk, reader: jspb.BinaryReader): CellChunk;
  }

  export namespace CellChunk {
    export type AsObject = {
      rowKey: Uint8Array | string,
      familyName?: google_protobuf_wrappers_pb.StringValue.AsObject,
      qualifier?: google_protobuf_wrappers_pb.BytesValue.AsObject,
      timestampMicros: number,
      labelsList: Array<string>,
      value: Uint8Array | string,
      valueSize: number,
      resetRow: boolean,
      commitRow: boolean,
    }

    export enum RowStatusCase { 
      ROW_STATUS_NOT_SET = 0,
      RESET_ROW = 8,
      COMMIT_ROW = 9,
    }
  }

}

export class SampleRowKeysRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): SampleRowKeysRequest;

  getAppProfileId(): string;
  setAppProfileId(value: string): SampleRowKeysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleRowKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SampleRowKeysRequest): SampleRowKeysRequest.AsObject;
  static serializeBinaryToWriter(message: SampleRowKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleRowKeysRequest;
  static deserializeBinaryFromReader(message: SampleRowKeysRequest, reader: jspb.BinaryReader): SampleRowKeysRequest;
}

export namespace SampleRowKeysRequest {
  export type AsObject = {
    tableName: string,
    appProfileId: string,
  }
}

export class SampleRowKeysResponse extends jspb.Message {
  getRowKey(): Uint8Array | string;
  getRowKey_asU8(): Uint8Array;
  getRowKey_asB64(): string;
  setRowKey(value: Uint8Array | string): SampleRowKeysResponse;

  getOffsetBytes(): number;
  setOffsetBytes(value: number): SampleRowKeysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleRowKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SampleRowKeysResponse): SampleRowKeysResponse.AsObject;
  static serializeBinaryToWriter(message: SampleRowKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleRowKeysResponse;
  static deserializeBinaryFromReader(message: SampleRowKeysResponse, reader: jspb.BinaryReader): SampleRowKeysResponse;
}

export namespace SampleRowKeysResponse {
  export type AsObject = {
    rowKey: Uint8Array | string,
    offsetBytes: number,
  }
}

export class MutateRowRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): MutateRowRequest;

  getAppProfileId(): string;
  setAppProfileId(value: string): MutateRowRequest;

  getRowKey(): Uint8Array | string;
  getRowKey_asU8(): Uint8Array;
  getRowKey_asB64(): string;
  setRowKey(value: Uint8Array | string): MutateRowRequest;

  getMutationsList(): Array<google_bigtable_v2_data_pb.Mutation>;
  setMutationsList(value: Array<google_bigtable_v2_data_pb.Mutation>): MutateRowRequest;
  clearMutationsList(): MutateRowRequest;
  addMutations(value?: google_bigtable_v2_data_pb.Mutation, index?: number): google_bigtable_v2_data_pb.Mutation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateRowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateRowRequest): MutateRowRequest.AsObject;
  static serializeBinaryToWriter(message: MutateRowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateRowRequest;
  static deserializeBinaryFromReader(message: MutateRowRequest, reader: jspb.BinaryReader): MutateRowRequest;
}

export namespace MutateRowRequest {
  export type AsObject = {
    tableName: string,
    appProfileId: string,
    rowKey: Uint8Array | string,
    mutationsList: Array<google_bigtable_v2_data_pb.Mutation.AsObject>,
  }
}

export class MutateRowResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateRowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateRowResponse): MutateRowResponse.AsObject;
  static serializeBinaryToWriter(message: MutateRowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateRowResponse;
  static deserializeBinaryFromReader(message: MutateRowResponse, reader: jspb.BinaryReader): MutateRowResponse;
}

export namespace MutateRowResponse {
  export type AsObject = {
  }
}

export class MutateRowsRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): MutateRowsRequest;

  getAppProfileId(): string;
  setAppProfileId(value: string): MutateRowsRequest;

  getEntriesList(): Array<MutateRowsRequest.Entry>;
  setEntriesList(value: Array<MutateRowsRequest.Entry>): MutateRowsRequest;
  clearEntriesList(): MutateRowsRequest;
  addEntries(value?: MutateRowsRequest.Entry, index?: number): MutateRowsRequest.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateRowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateRowsRequest): MutateRowsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateRowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateRowsRequest;
  static deserializeBinaryFromReader(message: MutateRowsRequest, reader: jspb.BinaryReader): MutateRowsRequest;
}

export namespace MutateRowsRequest {
  export type AsObject = {
    tableName: string,
    appProfileId: string,
    entriesList: Array<MutateRowsRequest.Entry.AsObject>,
  }

  export class Entry extends jspb.Message {
    getRowKey(): Uint8Array | string;
    getRowKey_asU8(): Uint8Array;
    getRowKey_asB64(): string;
    setRowKey(value: Uint8Array | string): Entry;

    getMutationsList(): Array<google_bigtable_v2_data_pb.Mutation>;
    setMutationsList(value: Array<google_bigtable_v2_data_pb.Mutation>): Entry;
    clearMutationsList(): Entry;
    addMutations(value?: google_bigtable_v2_data_pb.Mutation, index?: number): google_bigtable_v2_data_pb.Mutation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      rowKey: Uint8Array | string,
      mutationsList: Array<google_bigtable_v2_data_pb.Mutation.AsObject>,
    }
  }

}

export class MutateRowsResponse extends jspb.Message {
  getEntriesList(): Array<MutateRowsResponse.Entry>;
  setEntriesList(value: Array<MutateRowsResponse.Entry>): MutateRowsResponse;
  clearEntriesList(): MutateRowsResponse;
  addEntries(value?: MutateRowsResponse.Entry, index?: number): MutateRowsResponse.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateRowsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateRowsResponse): MutateRowsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateRowsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateRowsResponse;
  static deserializeBinaryFromReader(message: MutateRowsResponse, reader: jspb.BinaryReader): MutateRowsResponse;
}

export namespace MutateRowsResponse {
  export type AsObject = {
    entriesList: Array<MutateRowsResponse.Entry.AsObject>,
  }

  export class Entry extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): Entry;

    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): Entry;
    hasStatus(): boolean;
    clearStatus(): Entry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      index: number,
      status?: google_rpc_status_pb.Status.AsObject,
    }
  }

}

export class CheckAndMutateRowRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): CheckAndMutateRowRequest;

  getAppProfileId(): string;
  setAppProfileId(value: string): CheckAndMutateRowRequest;

  getRowKey(): Uint8Array | string;
  getRowKey_asU8(): Uint8Array;
  getRowKey_asB64(): string;
  setRowKey(value: Uint8Array | string): CheckAndMutateRowRequest;

  getPredicateFilter(): google_bigtable_v2_data_pb.RowFilter | undefined;
  setPredicateFilter(value?: google_bigtable_v2_data_pb.RowFilter): CheckAndMutateRowRequest;
  hasPredicateFilter(): boolean;
  clearPredicateFilter(): CheckAndMutateRowRequest;

  getTrueMutationsList(): Array<google_bigtable_v2_data_pb.Mutation>;
  setTrueMutationsList(value: Array<google_bigtable_v2_data_pb.Mutation>): CheckAndMutateRowRequest;
  clearTrueMutationsList(): CheckAndMutateRowRequest;
  addTrueMutations(value?: google_bigtable_v2_data_pb.Mutation, index?: number): google_bigtable_v2_data_pb.Mutation;

  getFalseMutationsList(): Array<google_bigtable_v2_data_pb.Mutation>;
  setFalseMutationsList(value: Array<google_bigtable_v2_data_pb.Mutation>): CheckAndMutateRowRequest;
  clearFalseMutationsList(): CheckAndMutateRowRequest;
  addFalseMutations(value?: google_bigtable_v2_data_pb.Mutation, index?: number): google_bigtable_v2_data_pb.Mutation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAndMutateRowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAndMutateRowRequest): CheckAndMutateRowRequest.AsObject;
  static serializeBinaryToWriter(message: CheckAndMutateRowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAndMutateRowRequest;
  static deserializeBinaryFromReader(message: CheckAndMutateRowRequest, reader: jspb.BinaryReader): CheckAndMutateRowRequest;
}

export namespace CheckAndMutateRowRequest {
  export type AsObject = {
    tableName: string,
    appProfileId: string,
    rowKey: Uint8Array | string,
    predicateFilter?: google_bigtable_v2_data_pb.RowFilter.AsObject,
    trueMutationsList: Array<google_bigtable_v2_data_pb.Mutation.AsObject>,
    falseMutationsList: Array<google_bigtable_v2_data_pb.Mutation.AsObject>,
  }
}

export class CheckAndMutateRowResponse extends jspb.Message {
  getPredicateMatched(): boolean;
  setPredicateMatched(value: boolean): CheckAndMutateRowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAndMutateRowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAndMutateRowResponse): CheckAndMutateRowResponse.AsObject;
  static serializeBinaryToWriter(message: CheckAndMutateRowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAndMutateRowResponse;
  static deserializeBinaryFromReader(message: CheckAndMutateRowResponse, reader: jspb.BinaryReader): CheckAndMutateRowResponse;
}

export namespace CheckAndMutateRowResponse {
  export type AsObject = {
    predicateMatched: boolean,
  }
}

export class ReadModifyWriteRowRequest extends jspb.Message {
  getTableName(): string;
  setTableName(value: string): ReadModifyWriteRowRequest;

  getAppProfileId(): string;
  setAppProfileId(value: string): ReadModifyWriteRowRequest;

  getRowKey(): Uint8Array | string;
  getRowKey_asU8(): Uint8Array;
  getRowKey_asB64(): string;
  setRowKey(value: Uint8Array | string): ReadModifyWriteRowRequest;

  getRulesList(): Array<google_bigtable_v2_data_pb.ReadModifyWriteRule>;
  setRulesList(value: Array<google_bigtable_v2_data_pb.ReadModifyWriteRule>): ReadModifyWriteRowRequest;
  clearRulesList(): ReadModifyWriteRowRequest;
  addRules(value?: google_bigtable_v2_data_pb.ReadModifyWriteRule, index?: number): google_bigtable_v2_data_pb.ReadModifyWriteRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadModifyWriteRowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadModifyWriteRowRequest): ReadModifyWriteRowRequest.AsObject;
  static serializeBinaryToWriter(message: ReadModifyWriteRowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadModifyWriteRowRequest;
  static deserializeBinaryFromReader(message: ReadModifyWriteRowRequest, reader: jspb.BinaryReader): ReadModifyWriteRowRequest;
}

export namespace ReadModifyWriteRowRequest {
  export type AsObject = {
    tableName: string,
    appProfileId: string,
    rowKey: Uint8Array | string,
    rulesList: Array<google_bigtable_v2_data_pb.ReadModifyWriteRule.AsObject>,
  }
}

export class ReadModifyWriteRowResponse extends jspb.Message {
  getRow(): google_bigtable_v2_data_pb.Row | undefined;
  setRow(value?: google_bigtable_v2_data_pb.Row): ReadModifyWriteRowResponse;
  hasRow(): boolean;
  clearRow(): ReadModifyWriteRowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadModifyWriteRowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadModifyWriteRowResponse): ReadModifyWriteRowResponse.AsObject;
  static serializeBinaryToWriter(message: ReadModifyWriteRowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadModifyWriteRowResponse;
  static deserializeBinaryFromReader(message: ReadModifyWriteRowResponse, reader: jspb.BinaryReader): ReadModifyWriteRowResponse;
}

export namespace ReadModifyWriteRowResponse {
  export type AsObject = {
    row?: google_bigtable_v2_data_pb.Row.AsObject,
  }
}

