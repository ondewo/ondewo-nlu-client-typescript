import * as jspb from 'google-protobuf'

import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class Table extends jspb.Message {
  getName(): string;
  setName(value: string): Table;

  getCurrentOperation(): google_longrunning_operations_pb.Operation | undefined;
  setCurrentOperation(value?: google_longrunning_operations_pb.Operation): Table;
  hasCurrentOperation(): boolean;
  clearCurrentOperation(): Table;

  getColumnFamiliesMap(): jspb.Map<string, ColumnFamily>;
  clearColumnFamiliesMap(): Table;

  getGranularity(): Table.TimestampGranularity;
  setGranularity(value: Table.TimestampGranularity): Table;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Table.AsObject;
  static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
  static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Table;
  static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
  export type AsObject = {
    name: string,
    currentOperation?: google_longrunning_operations_pb.Operation.AsObject,
    columnFamiliesMap: Array<[string, ColumnFamily.AsObject]>,
    granularity: Table.TimestampGranularity,
  }

  export enum TimestampGranularity { 
    MILLIS = 0,
  }
}

export class ColumnFamily extends jspb.Message {
  getName(): string;
  setName(value: string): ColumnFamily;

  getGcExpression(): string;
  setGcExpression(value: string): ColumnFamily;

  getGcRule(): GcRule | undefined;
  setGcRule(value?: GcRule): ColumnFamily;
  hasGcRule(): boolean;
  clearGcRule(): ColumnFamily;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnFamily.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnFamily): ColumnFamily.AsObject;
  static serializeBinaryToWriter(message: ColumnFamily, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnFamily;
  static deserializeBinaryFromReader(message: ColumnFamily, reader: jspb.BinaryReader): ColumnFamily;
}

export namespace ColumnFamily {
  export type AsObject = {
    name: string,
    gcExpression: string,
    gcRule?: GcRule.AsObject,
  }
}

export class GcRule extends jspb.Message {
  getMaxNumVersions(): number;
  setMaxNumVersions(value: number): GcRule;

  getMaxAge(): google_protobuf_duration_pb.Duration | undefined;
  setMaxAge(value?: google_protobuf_duration_pb.Duration): GcRule;
  hasMaxAge(): boolean;
  clearMaxAge(): GcRule;

  getIntersection(): GcRule.Intersection | undefined;
  setIntersection(value?: GcRule.Intersection): GcRule;
  hasIntersection(): boolean;
  clearIntersection(): GcRule;

  getUnion(): GcRule.Union | undefined;
  setUnion(value?: GcRule.Union): GcRule;
  hasUnion(): boolean;
  clearUnion(): GcRule;

  getRuleCase(): GcRule.RuleCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcRule.AsObject;
  static toObject(includeInstance: boolean, msg: GcRule): GcRule.AsObject;
  static serializeBinaryToWriter(message: GcRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcRule;
  static deserializeBinaryFromReader(message: GcRule, reader: jspb.BinaryReader): GcRule;
}

export namespace GcRule {
  export type AsObject = {
    maxNumVersions: number,
    maxAge?: google_protobuf_duration_pb.Duration.AsObject,
    intersection?: GcRule.Intersection.AsObject,
    union?: GcRule.Union.AsObject,
  }

  export class Intersection extends jspb.Message {
    getRulesList(): Array<GcRule>;
    setRulesList(value: Array<GcRule>): Intersection;
    clearRulesList(): Intersection;
    addRules(value?: GcRule, index?: number): GcRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Intersection.AsObject;
    static toObject(includeInstance: boolean, msg: Intersection): Intersection.AsObject;
    static serializeBinaryToWriter(message: Intersection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Intersection;
    static deserializeBinaryFromReader(message: Intersection, reader: jspb.BinaryReader): Intersection;
  }

  export namespace Intersection {
    export type AsObject = {
      rulesList: Array<GcRule.AsObject>,
    }
  }


  export class Union extends jspb.Message {
    getRulesList(): Array<GcRule>;
    setRulesList(value: Array<GcRule>): Union;
    clearRulesList(): Union;
    addRules(value?: GcRule, index?: number): GcRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Union.AsObject;
    static toObject(includeInstance: boolean, msg: Union): Union.AsObject;
    static serializeBinaryToWriter(message: Union, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Union;
    static deserializeBinaryFromReader(message: Union, reader: jspb.BinaryReader): Union;
  }

  export namespace Union {
    export type AsObject = {
      rulesList: Array<GcRule.AsObject>,
    }
  }


  export enum RuleCase { 
    RULE_NOT_SET = 0,
    MAX_NUM_VERSIONS = 1,
    MAX_AGE = 2,
    INTERSECTION = 3,
    UNION = 4,
  }
}

