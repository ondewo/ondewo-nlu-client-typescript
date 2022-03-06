import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class CreateProfileRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateProfileRequest;

  getDeployment(): Deployment | undefined;
  setDeployment(value?: Deployment): CreateProfileRequest;
  hasDeployment(): boolean;
  clearDeployment(): CreateProfileRequest;

  getProfileTypeList(): Array<ProfileType>;
  setProfileTypeList(value: Array<ProfileType>): CreateProfileRequest;
  clearProfileTypeList(): CreateProfileRequest;
  addProfileType(value: ProfileType, index?: number): CreateProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProfileRequest): CreateProfileRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProfileRequest;
  static deserializeBinaryFromReader(message: CreateProfileRequest, reader: jspb.BinaryReader): CreateProfileRequest;
}

export namespace CreateProfileRequest {
  export type AsObject = {
    parent: string,
    deployment?: Deployment.AsObject,
    profileTypeList: Array<ProfileType>,
  }
}

export class CreateOfflineProfileRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateOfflineProfileRequest;

  getProfile(): Profile | undefined;
  setProfile(value?: Profile): CreateOfflineProfileRequest;
  hasProfile(): boolean;
  clearProfile(): CreateOfflineProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOfflineProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOfflineProfileRequest): CreateOfflineProfileRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOfflineProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOfflineProfileRequest;
  static deserializeBinaryFromReader(message: CreateOfflineProfileRequest, reader: jspb.BinaryReader): CreateOfflineProfileRequest;
}

export namespace CreateOfflineProfileRequest {
  export type AsObject = {
    parent: string,
    profile?: Profile.AsObject,
  }
}

export class UpdateProfileRequest extends jspb.Message {
  getProfile(): Profile | undefined;
  setProfile(value?: Profile): UpdateProfileRequest;
  hasProfile(): boolean;
  clearProfile(): UpdateProfileRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateProfileRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    profile?: Profile.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class Profile extends jspb.Message {
  getName(): string;
  setName(value: string): Profile;

  getProfileType(): ProfileType;
  setProfileType(value: ProfileType): Profile;

  getDeployment(): Deployment | undefined;
  setDeployment(value?: Deployment): Profile;
  hasDeployment(): boolean;
  clearDeployment(): Profile;

  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): Profile;
  hasDuration(): boolean;
  clearDuration(): Profile;

  getProfileBytes(): Uint8Array | string;
  getProfileBytes_asU8(): Uint8Array;
  getProfileBytes_asB64(): string;
  setProfileBytes(value: Uint8Array | string): Profile;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Profile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    name: string,
    profileType: ProfileType,
    deployment?: Deployment.AsObject,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
    profileBytes: Uint8Array | string,
    labelsMap: Array<[string, string]>,
  }
}

export class Deployment extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): Deployment;

  getTarget(): string;
  setTarget(value: string): Deployment;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Deployment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployment.AsObject;
  static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
  static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployment;
  static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
}

export namespace Deployment {
  export type AsObject = {
    projectId: string,
    target: string,
    labelsMap: Array<[string, string]>,
  }
}

export enum ProfileType { 
  PROFILE_TYPE_UNSPECIFIED = 0,
  CPU = 1,
  WALL = 2,
  HEAP = 3,
  THREADS = 4,
  CONTENTION = 5,
  PEAK_HEAP = 6,
  HEAP_ALLOC = 7,
}
