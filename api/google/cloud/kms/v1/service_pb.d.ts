import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_kms_v1_resources_pb from '../../../../google/cloud/kms/v1/resources_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class ListKeyRingsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListKeyRingsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListKeyRingsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListKeyRingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeyRingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeyRingsRequest): ListKeyRingsRequest.AsObject;
  static serializeBinaryToWriter(message: ListKeyRingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeyRingsRequest;
  static deserializeBinaryFromReader(message: ListKeyRingsRequest, reader: jspb.BinaryReader): ListKeyRingsRequest;
}

export namespace ListKeyRingsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListCryptoKeysRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListCryptoKeysRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCryptoKeysRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCryptoKeysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCryptoKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCryptoKeysRequest): ListCryptoKeysRequest.AsObject;
  static serializeBinaryToWriter(message: ListCryptoKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCryptoKeysRequest;
  static deserializeBinaryFromReader(message: ListCryptoKeysRequest, reader: jspb.BinaryReader): ListCryptoKeysRequest;
}

export namespace ListCryptoKeysRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListCryptoKeyVersionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListCryptoKeyVersionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCryptoKeyVersionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCryptoKeyVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCryptoKeyVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCryptoKeyVersionsRequest): ListCryptoKeyVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCryptoKeyVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCryptoKeyVersionsRequest;
  static deserializeBinaryFromReader(message: ListCryptoKeyVersionsRequest, reader: jspb.BinaryReader): ListCryptoKeyVersionsRequest;
}

export namespace ListCryptoKeyVersionsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListKeyRingsResponse extends jspb.Message {
  getKeyRingsList(): Array<google_cloud_kms_v1_resources_pb.KeyRing>;
  setKeyRingsList(value: Array<google_cloud_kms_v1_resources_pb.KeyRing>): ListKeyRingsResponse;
  clearKeyRingsList(): ListKeyRingsResponse;
  addKeyRings(value?: google_cloud_kms_v1_resources_pb.KeyRing, index?: number): google_cloud_kms_v1_resources_pb.KeyRing;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListKeyRingsResponse;

  getTotalSize(): number;
  setTotalSize(value: number): ListKeyRingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeyRingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeyRingsResponse): ListKeyRingsResponse.AsObject;
  static serializeBinaryToWriter(message: ListKeyRingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeyRingsResponse;
  static deserializeBinaryFromReader(message: ListKeyRingsResponse, reader: jspb.BinaryReader): ListKeyRingsResponse;
}

export namespace ListKeyRingsResponse {
  export type AsObject = {
    keyRingsList: Array<google_cloud_kms_v1_resources_pb.KeyRing.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class ListCryptoKeysResponse extends jspb.Message {
  getCryptoKeysList(): Array<google_cloud_kms_v1_resources_pb.CryptoKey>;
  setCryptoKeysList(value: Array<google_cloud_kms_v1_resources_pb.CryptoKey>): ListCryptoKeysResponse;
  clearCryptoKeysList(): ListCryptoKeysResponse;
  addCryptoKeys(value?: google_cloud_kms_v1_resources_pb.CryptoKey, index?: number): google_cloud_kms_v1_resources_pb.CryptoKey;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCryptoKeysResponse;

  getTotalSize(): number;
  setTotalSize(value: number): ListCryptoKeysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCryptoKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCryptoKeysResponse): ListCryptoKeysResponse.AsObject;
  static serializeBinaryToWriter(message: ListCryptoKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCryptoKeysResponse;
  static deserializeBinaryFromReader(message: ListCryptoKeysResponse, reader: jspb.BinaryReader): ListCryptoKeysResponse;
}

export namespace ListCryptoKeysResponse {
  export type AsObject = {
    cryptoKeysList: Array<google_cloud_kms_v1_resources_pb.CryptoKey.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class ListCryptoKeyVersionsResponse extends jspb.Message {
  getCryptoKeyVersionsList(): Array<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;
  setCryptoKeyVersionsList(value: Array<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>): ListCryptoKeyVersionsResponse;
  clearCryptoKeyVersionsList(): ListCryptoKeyVersionsResponse;
  addCryptoKeyVersions(value?: google_cloud_kms_v1_resources_pb.CryptoKeyVersion, index?: number): google_cloud_kms_v1_resources_pb.CryptoKeyVersion;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCryptoKeyVersionsResponse;

  getTotalSize(): number;
  setTotalSize(value: number): ListCryptoKeyVersionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCryptoKeyVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCryptoKeyVersionsResponse): ListCryptoKeyVersionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCryptoKeyVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCryptoKeyVersionsResponse;
  static deserializeBinaryFromReader(message: ListCryptoKeyVersionsResponse, reader: jspb.BinaryReader): ListCryptoKeyVersionsResponse;
}

export namespace ListCryptoKeyVersionsResponse {
  export type AsObject = {
    cryptoKeyVersionsList: Array<google_cloud_kms_v1_resources_pb.CryptoKeyVersion.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class GetKeyRingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetKeyRingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyRingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyRingRequest): GetKeyRingRequest.AsObject;
  static serializeBinaryToWriter(message: GetKeyRingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyRingRequest;
  static deserializeBinaryFromReader(message: GetKeyRingRequest, reader: jspb.BinaryReader): GetKeyRingRequest;
}

export namespace GetKeyRingRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetCryptoKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetCryptoKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCryptoKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCryptoKeyRequest): GetCryptoKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetCryptoKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCryptoKeyRequest;
  static deserializeBinaryFromReader(message: GetCryptoKeyRequest, reader: jspb.BinaryReader): GetCryptoKeyRequest;
}

export namespace GetCryptoKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetCryptoKeyVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetCryptoKeyVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCryptoKeyVersionRequest): GetCryptoKeyVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: GetCryptoKeyVersionRequest, reader: jspb.BinaryReader): GetCryptoKeyVersionRequest;
}

export namespace GetCryptoKeyVersionRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateKeyRingRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateKeyRingRequest;

  getKeyRingId(): string;
  setKeyRingId(value: string): CreateKeyRingRequest;

  getKeyRing(): google_cloud_kms_v1_resources_pb.KeyRing | undefined;
  setKeyRing(value?: google_cloud_kms_v1_resources_pb.KeyRing): CreateKeyRingRequest;
  hasKeyRing(): boolean;
  clearKeyRing(): CreateKeyRingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKeyRingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKeyRingRequest): CreateKeyRingRequest.AsObject;
  static serializeBinaryToWriter(message: CreateKeyRingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKeyRingRequest;
  static deserializeBinaryFromReader(message: CreateKeyRingRequest, reader: jspb.BinaryReader): CreateKeyRingRequest;
}

export namespace CreateKeyRingRequest {
  export type AsObject = {
    parent: string,
    keyRingId: string,
    keyRing?: google_cloud_kms_v1_resources_pb.KeyRing.AsObject,
  }
}

export class CreateCryptoKeyRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateCryptoKeyRequest;

  getCryptoKeyId(): string;
  setCryptoKeyId(value: string): CreateCryptoKeyRequest;

  getCryptoKey(): google_cloud_kms_v1_resources_pb.CryptoKey | undefined;
  setCryptoKey(value?: google_cloud_kms_v1_resources_pb.CryptoKey): CreateCryptoKeyRequest;
  hasCryptoKey(): boolean;
  clearCryptoKey(): CreateCryptoKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCryptoKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCryptoKeyRequest): CreateCryptoKeyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCryptoKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCryptoKeyRequest;
  static deserializeBinaryFromReader(message: CreateCryptoKeyRequest, reader: jspb.BinaryReader): CreateCryptoKeyRequest;
}

export namespace CreateCryptoKeyRequest {
  export type AsObject = {
    parent: string,
    cryptoKeyId: string,
    cryptoKey?: google_cloud_kms_v1_resources_pb.CryptoKey.AsObject,
  }
}

export class CreateCryptoKeyVersionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateCryptoKeyVersionRequest;

  getCryptoKeyVersion(): google_cloud_kms_v1_resources_pb.CryptoKeyVersion | undefined;
  setCryptoKeyVersion(value?: google_cloud_kms_v1_resources_pb.CryptoKeyVersion): CreateCryptoKeyVersionRequest;
  hasCryptoKeyVersion(): boolean;
  clearCryptoKeyVersion(): CreateCryptoKeyVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCryptoKeyVersionRequest): CreateCryptoKeyVersionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: CreateCryptoKeyVersionRequest, reader: jspb.BinaryReader): CreateCryptoKeyVersionRequest;
}

export namespace CreateCryptoKeyVersionRequest {
  export type AsObject = {
    parent: string,
    cryptoKeyVersion?: google_cloud_kms_v1_resources_pb.CryptoKeyVersion.AsObject,
  }
}

export class UpdateCryptoKeyRequest extends jspb.Message {
  getCryptoKey(): google_cloud_kms_v1_resources_pb.CryptoKey | undefined;
  setCryptoKey(value?: google_cloud_kms_v1_resources_pb.CryptoKey): UpdateCryptoKeyRequest;
  hasCryptoKey(): boolean;
  clearCryptoKey(): UpdateCryptoKeyRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCryptoKeyRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateCryptoKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCryptoKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCryptoKeyRequest): UpdateCryptoKeyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCryptoKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCryptoKeyRequest;
  static deserializeBinaryFromReader(message: UpdateCryptoKeyRequest, reader: jspb.BinaryReader): UpdateCryptoKeyRequest;
}

export namespace UpdateCryptoKeyRequest {
  export type AsObject = {
    cryptoKey?: google_cloud_kms_v1_resources_pb.CryptoKey.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCryptoKeyVersionRequest extends jspb.Message {
  getCryptoKeyVersion(): google_cloud_kms_v1_resources_pb.CryptoKeyVersion | undefined;
  setCryptoKeyVersion(value?: google_cloud_kms_v1_resources_pb.CryptoKeyVersion): UpdateCryptoKeyVersionRequest;
  hasCryptoKeyVersion(): boolean;
  clearCryptoKeyVersion(): UpdateCryptoKeyVersionRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCryptoKeyVersionRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateCryptoKeyVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCryptoKeyVersionRequest): UpdateCryptoKeyVersionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: UpdateCryptoKeyVersionRequest, reader: jspb.BinaryReader): UpdateCryptoKeyVersionRequest;
}

export namespace UpdateCryptoKeyVersionRequest {
  export type AsObject = {
    cryptoKeyVersion?: google_cloud_kms_v1_resources_pb.CryptoKeyVersion.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class EncryptRequest extends jspb.Message {
  getName(): string;
  setName(value: string): EncryptRequest;

  getPlaintext(): Uint8Array | string;
  getPlaintext_asU8(): Uint8Array;
  getPlaintext_asB64(): string;
  setPlaintext(value: Uint8Array | string): EncryptRequest;

  getAdditionalAuthenticatedData(): Uint8Array | string;
  getAdditionalAuthenticatedData_asU8(): Uint8Array;
  getAdditionalAuthenticatedData_asB64(): string;
  setAdditionalAuthenticatedData(value: Uint8Array | string): EncryptRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptRequest): EncryptRequest.AsObject;
  static serializeBinaryToWriter(message: EncryptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptRequest;
  static deserializeBinaryFromReader(message: EncryptRequest, reader: jspb.BinaryReader): EncryptRequest;
}

export namespace EncryptRequest {
  export type AsObject = {
    name: string,
    plaintext: Uint8Array | string,
    additionalAuthenticatedData: Uint8Array | string,
  }
}

export class DecryptRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DecryptRequest;

  getCiphertext(): Uint8Array | string;
  getCiphertext_asU8(): Uint8Array;
  getCiphertext_asB64(): string;
  setCiphertext(value: Uint8Array | string): DecryptRequest;

  getAdditionalAuthenticatedData(): Uint8Array | string;
  getAdditionalAuthenticatedData_asU8(): Uint8Array;
  getAdditionalAuthenticatedData_asB64(): string;
  setAdditionalAuthenticatedData(value: Uint8Array | string): DecryptRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptRequest): DecryptRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptRequest;
  static deserializeBinaryFromReader(message: DecryptRequest, reader: jspb.BinaryReader): DecryptRequest;
}

export namespace DecryptRequest {
  export type AsObject = {
    name: string,
    ciphertext: Uint8Array | string,
    additionalAuthenticatedData: Uint8Array | string,
  }
}

export class DecryptResponse extends jspb.Message {
  getPlaintext(): Uint8Array | string;
  getPlaintext_asU8(): Uint8Array;
  getPlaintext_asB64(): string;
  setPlaintext(value: Uint8Array | string): DecryptResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptResponse): DecryptResponse.AsObject;
  static serializeBinaryToWriter(message: DecryptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptResponse;
  static deserializeBinaryFromReader(message: DecryptResponse, reader: jspb.BinaryReader): DecryptResponse;
}

export namespace DecryptResponse {
  export type AsObject = {
    plaintext: Uint8Array | string,
  }
}

export class EncryptResponse extends jspb.Message {
  getName(): string;
  setName(value: string): EncryptResponse;

  getCiphertext(): Uint8Array | string;
  getCiphertext_asU8(): Uint8Array;
  getCiphertext_asB64(): string;
  setCiphertext(value: Uint8Array | string): EncryptResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptResponse): EncryptResponse.AsObject;
  static serializeBinaryToWriter(message: EncryptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptResponse;
  static deserializeBinaryFromReader(message: EncryptResponse, reader: jspb.BinaryReader): EncryptResponse;
}

export namespace EncryptResponse {
  export type AsObject = {
    name: string,
    ciphertext: Uint8Array | string,
  }
}

export class UpdateCryptoKeyPrimaryVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateCryptoKeyPrimaryVersionRequest;

  getCryptoKeyVersionId(): string;
  setCryptoKeyVersionId(value: string): UpdateCryptoKeyPrimaryVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCryptoKeyPrimaryVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCryptoKeyPrimaryVersionRequest): UpdateCryptoKeyPrimaryVersionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCryptoKeyPrimaryVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCryptoKeyPrimaryVersionRequest;
  static deserializeBinaryFromReader(message: UpdateCryptoKeyPrimaryVersionRequest, reader: jspb.BinaryReader): UpdateCryptoKeyPrimaryVersionRequest;
}

export namespace UpdateCryptoKeyPrimaryVersionRequest {
  export type AsObject = {
    name: string,
    cryptoKeyVersionId: string,
  }
}

export class DestroyCryptoKeyVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DestroyCryptoKeyVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyCryptoKeyVersionRequest): DestroyCryptoKeyVersionRequest.AsObject;
  static serializeBinaryToWriter(message: DestroyCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: DestroyCryptoKeyVersionRequest, reader: jspb.BinaryReader): DestroyCryptoKeyVersionRequest;
}

export namespace DestroyCryptoKeyVersionRequest {
  export type AsObject = {
    name: string,
  }
}

export class RestoreCryptoKeyVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RestoreCryptoKeyVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreCryptoKeyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreCryptoKeyVersionRequest): RestoreCryptoKeyVersionRequest.AsObject;
  static serializeBinaryToWriter(message: RestoreCryptoKeyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreCryptoKeyVersionRequest;
  static deserializeBinaryFromReader(message: RestoreCryptoKeyVersionRequest, reader: jspb.BinaryReader): RestoreCryptoKeyVersionRequest;
}

export namespace RestoreCryptoKeyVersionRequest {
  export type AsObject = {
    name: string,
  }
}

