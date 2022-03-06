import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class RuntimeConfig extends jspb.Message {
  getName(): string;
  setName(value: string): RuntimeConfig;

  getDescription(): string;
  setDescription(value: string): RuntimeConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuntimeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RuntimeConfig): RuntimeConfig.AsObject;
  static serializeBinaryToWriter(message: RuntimeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuntimeConfig;
  static deserializeBinaryFromReader(message: RuntimeConfig, reader: jspb.BinaryReader): RuntimeConfig;
}

export namespace RuntimeConfig {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class Variable extends jspb.Message {
  getName(): string;
  setName(value: string): Variable;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): Variable;

  getText(): string;
  setText(value: string): Variable;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Variable;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Variable;

  getState(): VariableState;
  setState(value: VariableState): Variable;

  getContentsCase(): Variable.ContentsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variable.AsObject;
  static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
  static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variable;
  static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
  export type AsObject = {
    name: string,
    value: Uint8Array | string,
    text: string,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: VariableState,
  }

  export enum ContentsCase { 
    CONTENTS_NOT_SET = 0,
    VALUE = 2,
    TEXT = 5,
  }
}

export class EndCondition extends jspb.Message {
  getCardinality(): EndCondition.Cardinality | undefined;
  setCardinality(value?: EndCondition.Cardinality): EndCondition;
  hasCardinality(): boolean;
  clearCardinality(): EndCondition;

  getConditionCase(): EndCondition.ConditionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndCondition.AsObject;
  static toObject(includeInstance: boolean, msg: EndCondition): EndCondition.AsObject;
  static serializeBinaryToWriter(message: EndCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndCondition;
  static deserializeBinaryFromReader(message: EndCondition, reader: jspb.BinaryReader): EndCondition;
}

export namespace EndCondition {
  export type AsObject = {
    cardinality?: EndCondition.Cardinality.AsObject,
  }

  export class Cardinality extends jspb.Message {
    getPath(): string;
    setPath(value: string): Cardinality;

    getNumber(): number;
    setNumber(value: number): Cardinality;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cardinality.AsObject;
    static toObject(includeInstance: boolean, msg: Cardinality): Cardinality.AsObject;
    static serializeBinaryToWriter(message: Cardinality, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cardinality;
    static deserializeBinaryFromReader(message: Cardinality, reader: jspb.BinaryReader): Cardinality;
  }

  export namespace Cardinality {
    export type AsObject = {
      path: string,
      number: number,
    }
  }


  export enum ConditionCase { 
    CONDITION_NOT_SET = 0,
    CARDINALITY = 1,
  }
}

export class Waiter extends jspb.Message {
  getName(): string;
  setName(value: string): Waiter;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): Waiter;
  hasTimeout(): boolean;
  clearTimeout(): Waiter;

  getFailure(): EndCondition | undefined;
  setFailure(value?: EndCondition): Waiter;
  hasFailure(): boolean;
  clearFailure(): Waiter;

  getSuccess(): EndCondition | undefined;
  setSuccess(value?: EndCondition): Waiter;
  hasSuccess(): boolean;
  clearSuccess(): Waiter;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Waiter;
  hasCreateTime(): boolean;
  clearCreateTime(): Waiter;

  getDone(): boolean;
  setDone(value: boolean): Waiter;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): Waiter;
  hasError(): boolean;
  clearError(): Waiter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Waiter.AsObject;
  static toObject(includeInstance: boolean, msg: Waiter): Waiter.AsObject;
  static serializeBinaryToWriter(message: Waiter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Waiter;
  static deserializeBinaryFromReader(message: Waiter, reader: jspb.BinaryReader): Waiter;
}

export namespace Waiter {
  export type AsObject = {
    name: string,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    failure?: EndCondition.AsObject,
    success?: EndCondition.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    done: boolean,
    error?: google_rpc_status_pb.Status.AsObject,
  }
}

export enum VariableState { 
  VARIABLE_STATE_UNSPECIFIED = 0,
  UPDATED = 1,
  DELETED = 2,
}
