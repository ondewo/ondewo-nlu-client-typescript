import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_oslogin_common_common_pb from '../../../../google/cloud/oslogin/common/common_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class LoginProfile extends jspb.Message {
  getName(): string;
  setName(value: string): LoginProfile;

  getPosixAccountsList(): Array<google_cloud_oslogin_common_common_pb.PosixAccount>;
  setPosixAccountsList(value: Array<google_cloud_oslogin_common_common_pb.PosixAccount>): LoginProfile;
  clearPosixAccountsList(): LoginProfile;
  addPosixAccounts(value?: google_cloud_oslogin_common_common_pb.PosixAccount, index?: number): google_cloud_oslogin_common_common_pb.PosixAccount;

  getSshPublicKeysMap(): jspb.Map<string, google_cloud_oslogin_common_common_pb.SshPublicKey>;
  clearSshPublicKeysMap(): LoginProfile;

  getSuspended(): boolean;
  setSuspended(value: boolean): LoginProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginProfile.AsObject;
  static toObject(includeInstance: boolean, msg: LoginProfile): LoginProfile.AsObject;
  static serializeBinaryToWriter(message: LoginProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginProfile;
  static deserializeBinaryFromReader(message: LoginProfile, reader: jspb.BinaryReader): LoginProfile;
}

export namespace LoginProfile {
  export type AsObject = {
    name: string,
    posixAccountsList: Array<google_cloud_oslogin_common_common_pb.PosixAccount.AsObject>,
    sshPublicKeysMap: Array<[string, google_cloud_oslogin_common_common_pb.SshPublicKey.AsObject]>,
    suspended: boolean,
  }
}

export class DeletePosixAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeletePosixAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePosixAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePosixAccountRequest): DeletePosixAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePosixAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePosixAccountRequest;
  static deserializeBinaryFromReader(message: DeletePosixAccountRequest, reader: jspb.BinaryReader): DeletePosixAccountRequest;
}

export namespace DeletePosixAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteSshPublicKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteSshPublicKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSshPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSshPublicKeyRequest): DeleteSshPublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSshPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSshPublicKeyRequest;
  static deserializeBinaryFromReader(message: DeleteSshPublicKeyRequest, reader: jspb.BinaryReader): DeleteSshPublicKeyRequest;
}

export namespace DeleteSshPublicKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetLoginProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLoginProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLoginProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLoginProfileRequest): GetLoginProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetLoginProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLoginProfileRequest;
  static deserializeBinaryFromReader(message: GetLoginProfileRequest, reader: jspb.BinaryReader): GetLoginProfileRequest;
}

export namespace GetLoginProfileRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetSshPublicKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetSshPublicKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSshPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSshPublicKeyRequest): GetSshPublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetSshPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSshPublicKeyRequest;
  static deserializeBinaryFromReader(message: GetSshPublicKeyRequest, reader: jspb.BinaryReader): GetSshPublicKeyRequest;
}

export namespace GetSshPublicKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class ImportSshPublicKeyRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ImportSshPublicKeyRequest;

  getSshPublicKey(): google_cloud_oslogin_common_common_pb.SshPublicKey | undefined;
  setSshPublicKey(value?: google_cloud_oslogin_common_common_pb.SshPublicKey): ImportSshPublicKeyRequest;
  hasSshPublicKey(): boolean;
  clearSshPublicKey(): ImportSshPublicKeyRequest;

  getProjectId(): string;
  setProjectId(value: string): ImportSshPublicKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportSshPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportSshPublicKeyRequest): ImportSshPublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: ImportSshPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportSshPublicKeyRequest;
  static deserializeBinaryFromReader(message: ImportSshPublicKeyRequest, reader: jspb.BinaryReader): ImportSshPublicKeyRequest;
}

export namespace ImportSshPublicKeyRequest {
  export type AsObject = {
    parent: string,
    sshPublicKey?: google_cloud_oslogin_common_common_pb.SshPublicKey.AsObject,
    projectId: string,
  }
}

export class ImportSshPublicKeyResponse extends jspb.Message {
  getLoginProfile(): LoginProfile | undefined;
  setLoginProfile(value?: LoginProfile): ImportSshPublicKeyResponse;
  hasLoginProfile(): boolean;
  clearLoginProfile(): ImportSshPublicKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportSshPublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportSshPublicKeyResponse): ImportSshPublicKeyResponse.AsObject;
  static serializeBinaryToWriter(message: ImportSshPublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportSshPublicKeyResponse;
  static deserializeBinaryFromReader(message: ImportSshPublicKeyResponse, reader: jspb.BinaryReader): ImportSshPublicKeyResponse;
}

export namespace ImportSshPublicKeyResponse {
  export type AsObject = {
    loginProfile?: LoginProfile.AsObject,
  }
}

export class UpdateSshPublicKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateSshPublicKeyRequest;

  getSshPublicKey(): google_cloud_oslogin_common_common_pb.SshPublicKey | undefined;
  setSshPublicKey(value?: google_cloud_oslogin_common_common_pb.SshPublicKey): UpdateSshPublicKeyRequest;
  hasSshPublicKey(): boolean;
  clearSshPublicKey(): UpdateSshPublicKeyRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSshPublicKeyRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateSshPublicKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSshPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSshPublicKeyRequest): UpdateSshPublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSshPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSshPublicKeyRequest;
  static deserializeBinaryFromReader(message: UpdateSshPublicKeyRequest, reader: jspb.BinaryReader): UpdateSshPublicKeyRequest;
}

export namespace UpdateSshPublicKeyRequest {
  export type AsObject = {
    name: string,
    sshPublicKey?: google_cloud_oslogin_common_common_pb.SshPublicKey.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

