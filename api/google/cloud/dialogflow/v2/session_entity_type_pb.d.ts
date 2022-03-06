import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_dialogflow_v2_entity_type_pb from '../../../../google/cloud/dialogflow/v2/entity_type_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class SessionEntityType extends jspb.Message {
  getName(): string;
  setName(value: string): SessionEntityType;

  getEntityOverrideMode(): SessionEntityType.EntityOverrideMode;
  setEntityOverrideMode(value: SessionEntityType.EntityOverrideMode): SessionEntityType;

  getEntitiesList(): Array<google_cloud_dialogflow_v2_entity_type_pb.EntityType.Entity>;
  setEntitiesList(value: Array<google_cloud_dialogflow_v2_entity_type_pb.EntityType.Entity>): SessionEntityType;
  clearEntitiesList(): SessionEntityType;
  addEntities(value?: google_cloud_dialogflow_v2_entity_type_pb.EntityType.Entity, index?: number): google_cloud_dialogflow_v2_entity_type_pb.EntityType.Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionEntityType.AsObject;
  static toObject(includeInstance: boolean, msg: SessionEntityType): SessionEntityType.AsObject;
  static serializeBinaryToWriter(message: SessionEntityType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionEntityType;
  static deserializeBinaryFromReader(message: SessionEntityType, reader: jspb.BinaryReader): SessionEntityType;
}

export namespace SessionEntityType {
  export type AsObject = {
    name: string,
    entityOverrideMode: SessionEntityType.EntityOverrideMode,
    entitiesList: Array<google_cloud_dialogflow_v2_entity_type_pb.EntityType.Entity.AsObject>,
  }

  export enum EntityOverrideMode { 
    ENTITY_OVERRIDE_MODE_UNSPECIFIED = 0,
    ENTITY_OVERRIDE_MODE_OVERRIDE = 1,
    ENTITY_OVERRIDE_MODE_SUPPLEMENT = 2,
  }
}

export class ListSessionEntityTypesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListSessionEntityTypesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListSessionEntityTypesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSessionEntityTypesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionEntityTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionEntityTypesRequest): ListSessionEntityTypesRequest.AsObject;
  static serializeBinaryToWriter(message: ListSessionEntityTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionEntityTypesRequest;
  static deserializeBinaryFromReader(message: ListSessionEntityTypesRequest, reader: jspb.BinaryReader): ListSessionEntityTypesRequest;
}

export namespace ListSessionEntityTypesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSessionEntityTypesResponse extends jspb.Message {
  getSessionEntityTypesList(): Array<SessionEntityType>;
  setSessionEntityTypesList(value: Array<SessionEntityType>): ListSessionEntityTypesResponse;
  clearSessionEntityTypesList(): ListSessionEntityTypesResponse;
  addSessionEntityTypes(value?: SessionEntityType, index?: number): SessionEntityType;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSessionEntityTypesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionEntityTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionEntityTypesResponse): ListSessionEntityTypesResponse.AsObject;
  static serializeBinaryToWriter(message: ListSessionEntityTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionEntityTypesResponse;
  static deserializeBinaryFromReader(message: ListSessionEntityTypesResponse, reader: jspb.BinaryReader): ListSessionEntityTypesResponse;
}

export namespace ListSessionEntityTypesResponse {
  export type AsObject = {
    sessionEntityTypesList: Array<SessionEntityType.AsObject>,
    nextPageToken: string,
  }
}

export class GetSessionEntityTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetSessionEntityTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionEntityTypeRequest): GetSessionEntityTypeRequest.AsObject;
  static serializeBinaryToWriter(message: GetSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionEntityTypeRequest;
  static deserializeBinaryFromReader(message: GetSessionEntityTypeRequest, reader: jspb.BinaryReader): GetSessionEntityTypeRequest;
}

export namespace GetSessionEntityTypeRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateSessionEntityTypeRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateSessionEntityTypeRequest;

  getSessionEntityType(): SessionEntityType | undefined;
  setSessionEntityType(value?: SessionEntityType): CreateSessionEntityTypeRequest;
  hasSessionEntityType(): boolean;
  clearSessionEntityType(): CreateSessionEntityTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionEntityTypeRequest): CreateSessionEntityTypeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionEntityTypeRequest;
  static deserializeBinaryFromReader(message: CreateSessionEntityTypeRequest, reader: jspb.BinaryReader): CreateSessionEntityTypeRequest;
}

export namespace CreateSessionEntityTypeRequest {
  export type AsObject = {
    parent: string,
    sessionEntityType?: SessionEntityType.AsObject,
  }
}

export class UpdateSessionEntityTypeRequest extends jspb.Message {
  getSessionEntityType(): SessionEntityType | undefined;
  setSessionEntityType(value?: SessionEntityType): UpdateSessionEntityTypeRequest;
  hasSessionEntityType(): boolean;
  clearSessionEntityType(): UpdateSessionEntityTypeRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSessionEntityTypeRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateSessionEntityTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSessionEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSessionEntityTypeRequest): UpdateSessionEntityTypeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSessionEntityTypeRequest;
  static deserializeBinaryFromReader(message: UpdateSessionEntityTypeRequest, reader: jspb.BinaryReader): UpdateSessionEntityTypeRequest;
}

export namespace UpdateSessionEntityTypeRequest {
  export type AsObject = {
    sessionEntityType?: SessionEntityType.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteSessionEntityTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteSessionEntityTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSessionEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSessionEntityTypeRequest): DeleteSessionEntityTypeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSessionEntityTypeRequest;
  static deserializeBinaryFromReader(message: DeleteSessionEntityTypeRequest, reader: jspb.BinaryReader): DeleteSessionEntityTypeRequest;
}

export namespace DeleteSessionEntityTypeRequest {
  export type AsObject = {
    name: string,
  }
}

