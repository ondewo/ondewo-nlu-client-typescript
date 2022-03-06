import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class KeyRing extends jspb.Message {
  getName(): string;
  setName(value: string): KeyRing;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): KeyRing;
  hasCreateTime(): boolean;
  clearCreateTime(): KeyRing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyRing.AsObject;
  static toObject(includeInstance: boolean, msg: KeyRing): KeyRing.AsObject;
  static serializeBinaryToWriter(message: KeyRing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyRing;
  static deserializeBinaryFromReader(message: KeyRing, reader: jspb.BinaryReader): KeyRing;
}

export namespace KeyRing {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CryptoKey extends jspb.Message {
  getName(): string;
  setName(value: string): CryptoKey;

  getPrimary(): CryptoKeyVersion | undefined;
  setPrimary(value?: CryptoKeyVersion): CryptoKey;
  hasPrimary(): boolean;
  clearPrimary(): CryptoKey;

  getPurpose(): CryptoKey.CryptoKeyPurpose;
  setPurpose(value: CryptoKey.CryptoKeyPurpose): CryptoKey;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): CryptoKey;
  hasCreateTime(): boolean;
  clearCreateTime(): CryptoKey;

  getNextRotationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNextRotationTime(value?: google_protobuf_timestamp_pb.Timestamp): CryptoKey;
  hasNextRotationTime(): boolean;
  clearNextRotationTime(): CryptoKey;

  getRotationPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setRotationPeriod(value?: google_protobuf_duration_pb.Duration): CryptoKey;
  hasRotationPeriod(): boolean;
  clearRotationPeriod(): CryptoKey;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CryptoKey;

  getRotationScheduleCase(): CryptoKey.RotationScheduleCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoKey.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoKey): CryptoKey.AsObject;
  static serializeBinaryToWriter(message: CryptoKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoKey;
  static deserializeBinaryFromReader(message: CryptoKey, reader: jspb.BinaryReader): CryptoKey;
}

export namespace CryptoKey {
  export type AsObject = {
    name: string,
    primary?: CryptoKeyVersion.AsObject,
    purpose: CryptoKey.CryptoKeyPurpose,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextRotationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    rotationPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    labelsMap: Array<[string, string]>,
  }

  export enum CryptoKeyPurpose { 
    CRYPTO_KEY_PURPOSE_UNSPECIFIED = 0,
    ENCRYPT_DECRYPT = 1,
  }

  export enum RotationScheduleCase { 
    ROTATION_SCHEDULE_NOT_SET = 0,
    ROTATION_PERIOD = 8,
  }
}

export class CryptoKeyVersion extends jspb.Message {
  getName(): string;
  setName(value: string): CryptoKeyVersion;

  getState(): CryptoKeyVersion.CryptoKeyVersionState;
  setState(value: CryptoKeyVersion.CryptoKeyVersionState): CryptoKeyVersion;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): CryptoKeyVersion;
  hasCreateTime(): boolean;
  clearCreateTime(): CryptoKeyVersion;

  getDestroyTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDestroyTime(value?: google_protobuf_timestamp_pb.Timestamp): CryptoKeyVersion;
  hasDestroyTime(): boolean;
  clearDestroyTime(): CryptoKeyVersion;

  getDestroyEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDestroyEventTime(value?: google_protobuf_timestamp_pb.Timestamp): CryptoKeyVersion;
  hasDestroyEventTime(): boolean;
  clearDestroyEventTime(): CryptoKeyVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoKeyVersion.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoKeyVersion): CryptoKeyVersion.AsObject;
  static serializeBinaryToWriter(message: CryptoKeyVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoKeyVersion;
  static deserializeBinaryFromReader(message: CryptoKeyVersion, reader: jspb.BinaryReader): CryptoKeyVersion;
}

export namespace CryptoKeyVersion {
  export type AsObject = {
    name: string,
    state: CryptoKeyVersion.CryptoKeyVersionState,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    destroyTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    destroyEventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum CryptoKeyVersionState { 
    CRYPTO_KEY_VERSION_STATE_UNSPECIFIED = 0,
    ENABLED = 1,
    DISABLED = 2,
    DESTROYED = 3,
    DESTROY_SCHEDULED = 4,
  }
}

