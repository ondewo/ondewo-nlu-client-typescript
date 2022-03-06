import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class EntityType extends jspb.Message {
  getName(): string;
  setName(value: string): EntityType;

  getDisplayName(): string;
  setDisplayName(value: string): EntityType;

  getKind(): EntityType.Kind;
  setKind(value: EntityType.Kind): EntityType;

  getAutoExpansionMode(): EntityType.AutoExpansionMode;
  setAutoExpansionMode(value: EntityType.AutoExpansionMode): EntityType;

  getEntitiesList(): Array<EntityType.Entity>;
  setEntitiesList(value: Array<EntityType.Entity>): EntityType;
  clearEntitiesList(): EntityType;
  addEntities(value?: EntityType.Entity, index?: number): EntityType.Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityType.AsObject;
  static toObject(includeInstance: boolean, msg: EntityType): EntityType.AsObject;
  static serializeBinaryToWriter(message: EntityType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityType;
  static deserializeBinaryFromReader(message: EntityType, reader: jspb.BinaryReader): EntityType;
}

export namespace EntityType {
  export type AsObject = {
    name: string,
    displayName: string,
    kind: EntityType.Kind,
    autoExpansionMode: EntityType.AutoExpansionMode,
    entitiesList: Array<EntityType.Entity.AsObject>,
  }

  export class Entity extends jspb.Message {
    getValue(): string;
    setValue(value: string): Entity;

    getSynonymsList(): Array<string>;
    setSynonymsList(value: Array<string>): Entity;
    clearSynonymsList(): Entity;
    addSynonyms(value: string, index?: number): Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
  }

  export namespace Entity {
    export type AsObject = {
      value: string,
      synonymsList: Array<string>,
    }
  }


  export enum Kind { 
    KIND_UNSPECIFIED = 0,
    KIND_MAP = 1,
    KIND_LIST = 2,
  }

  export enum AutoExpansionMode { 
    AUTO_EXPANSION_MODE_UNSPECIFIED = 0,
    AUTO_EXPANSION_MODE_DEFAULT = 1,
  }
}

export class ListEntityTypesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListEntityTypesRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListEntityTypesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListEntityTypesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListEntityTypesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEntityTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEntityTypesRequest): ListEntityTypesRequest.AsObject;
  static serializeBinaryToWriter(message: ListEntityTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEntityTypesRequest;
  static deserializeBinaryFromReader(message: ListEntityTypesRequest, reader: jspb.BinaryReader): ListEntityTypesRequest;
}

export namespace ListEntityTypesRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListEntityTypesResponse extends jspb.Message {
  getEntityTypesList(): Array<EntityType>;
  setEntityTypesList(value: Array<EntityType>): ListEntityTypesResponse;
  clearEntityTypesList(): ListEntityTypesResponse;
  addEntityTypes(value?: EntityType, index?: number): EntityType;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListEntityTypesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEntityTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEntityTypesResponse): ListEntityTypesResponse.AsObject;
  static serializeBinaryToWriter(message: ListEntityTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEntityTypesResponse;
  static deserializeBinaryFromReader(message: ListEntityTypesResponse, reader: jspb.BinaryReader): ListEntityTypesResponse;
}

export namespace ListEntityTypesResponse {
  export type AsObject = {
    entityTypesList: Array<EntityType.AsObject>,
    nextPageToken: string,
  }
}

export class GetEntityTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetEntityTypeRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetEntityTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntityTypeRequest): GetEntityTypeRequest.AsObject;
  static serializeBinaryToWriter(message: GetEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntityTypeRequest;
  static deserializeBinaryFromReader(message: GetEntityTypeRequest, reader: jspb.BinaryReader): GetEntityTypeRequest;
}

export namespace GetEntityTypeRequest {
  export type AsObject = {
    name: string,
    languageCode: string,
  }
}

export class CreateEntityTypeRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateEntityTypeRequest;

  getEntityType(): EntityType | undefined;
  setEntityType(value?: EntityType): CreateEntityTypeRequest;
  hasEntityType(): boolean;
  clearEntityType(): CreateEntityTypeRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateEntityTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntityTypeRequest): CreateEntityTypeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntityTypeRequest;
  static deserializeBinaryFromReader(message: CreateEntityTypeRequest, reader: jspb.BinaryReader): CreateEntityTypeRequest;
}

export namespace CreateEntityTypeRequest {
  export type AsObject = {
    parent: string,
    entityType?: EntityType.AsObject,
    languageCode: string,
  }
}

export class UpdateEntityTypeRequest extends jspb.Message {
  getEntityType(): EntityType | undefined;
  setEntityType(value?: EntityType): UpdateEntityTypeRequest;
  hasEntityType(): boolean;
  clearEntityType(): UpdateEntityTypeRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateEntityTypeRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateEntityTypeRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateEntityTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntityTypeRequest): UpdateEntityTypeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntityTypeRequest;
  static deserializeBinaryFromReader(message: UpdateEntityTypeRequest, reader: jspb.BinaryReader): UpdateEntityTypeRequest;
}

export namespace UpdateEntityTypeRequest {
  export type AsObject = {
    entityType?: EntityType.AsObject,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteEntityTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteEntityTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntityTypeRequest): DeleteEntityTypeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntityTypeRequest;
  static deserializeBinaryFromReader(message: DeleteEntityTypeRequest, reader: jspb.BinaryReader): DeleteEntityTypeRequest;
}

export namespace DeleteEntityTypeRequest {
  export type AsObject = {
    name: string,
  }
}

export class BatchUpdateEntityTypesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchUpdateEntityTypesRequest;

  getEntityTypeBatchUri(): string;
  setEntityTypeBatchUri(value: string): BatchUpdateEntityTypesRequest;

  getEntityTypeBatchInline(): EntityTypeBatch | undefined;
  setEntityTypeBatchInline(value?: EntityTypeBatch): BatchUpdateEntityTypesRequest;
  hasEntityTypeBatchInline(): boolean;
  clearEntityTypeBatchInline(): BatchUpdateEntityTypesRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): BatchUpdateEntityTypesRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): BatchUpdateEntityTypesRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): BatchUpdateEntityTypesRequest;

  getEntityTypeBatchCase(): BatchUpdateEntityTypesRequest.EntityTypeBatchCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateEntityTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateEntityTypesRequest): BatchUpdateEntityTypesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchUpdateEntityTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateEntityTypesRequest;
  static deserializeBinaryFromReader(message: BatchUpdateEntityTypesRequest, reader: jspb.BinaryReader): BatchUpdateEntityTypesRequest;
}

export namespace BatchUpdateEntityTypesRequest {
  export type AsObject = {
    parent: string,
    entityTypeBatchUri: string,
    entityTypeBatchInline?: EntityTypeBatch.AsObject,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum EntityTypeBatchCase { 
    ENTITY_TYPE_BATCH_NOT_SET = 0,
    ENTITY_TYPE_BATCH_URI = 2,
    ENTITY_TYPE_BATCH_INLINE = 3,
  }
}

export class BatchUpdateEntityTypesResponse extends jspb.Message {
  getEntityTypesList(): Array<EntityType>;
  setEntityTypesList(value: Array<EntityType>): BatchUpdateEntityTypesResponse;
  clearEntityTypesList(): BatchUpdateEntityTypesResponse;
  addEntityTypes(value?: EntityType, index?: number): EntityType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateEntityTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateEntityTypesResponse): BatchUpdateEntityTypesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchUpdateEntityTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateEntityTypesResponse;
  static deserializeBinaryFromReader(message: BatchUpdateEntityTypesResponse, reader: jspb.BinaryReader): BatchUpdateEntityTypesResponse;
}

export namespace BatchUpdateEntityTypesResponse {
  export type AsObject = {
    entityTypesList: Array<EntityType.AsObject>,
  }
}

export class BatchDeleteEntityTypesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchDeleteEntityTypesRequest;

  getEntityTypeNamesList(): Array<string>;
  setEntityTypeNamesList(value: Array<string>): BatchDeleteEntityTypesRequest;
  clearEntityTypeNamesList(): BatchDeleteEntityTypesRequest;
  addEntityTypeNames(value: string, index?: number): BatchDeleteEntityTypesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchDeleteEntityTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchDeleteEntityTypesRequest): BatchDeleteEntityTypesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchDeleteEntityTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchDeleteEntityTypesRequest;
  static deserializeBinaryFromReader(message: BatchDeleteEntityTypesRequest, reader: jspb.BinaryReader): BatchDeleteEntityTypesRequest;
}

export namespace BatchDeleteEntityTypesRequest {
  export type AsObject = {
    parent: string,
    entityTypeNamesList: Array<string>,
  }
}

export class BatchCreateEntitiesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchCreateEntitiesRequest;

  getEntitiesList(): Array<EntityType.Entity>;
  setEntitiesList(value: Array<EntityType.Entity>): BatchCreateEntitiesRequest;
  clearEntitiesList(): BatchCreateEntitiesRequest;
  addEntities(value?: EntityType.Entity, index?: number): EntityType.Entity;

  getLanguageCode(): string;
  setLanguageCode(value: string): BatchCreateEntitiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateEntitiesRequest): BatchCreateEntitiesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateEntitiesRequest;
  static deserializeBinaryFromReader(message: BatchCreateEntitiesRequest, reader: jspb.BinaryReader): BatchCreateEntitiesRequest;
}

export namespace BatchCreateEntitiesRequest {
  export type AsObject = {
    parent: string,
    entitiesList: Array<EntityType.Entity.AsObject>,
    languageCode: string,
  }
}

export class BatchUpdateEntitiesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchUpdateEntitiesRequest;

  getEntitiesList(): Array<EntityType.Entity>;
  setEntitiesList(value: Array<EntityType.Entity>): BatchUpdateEntitiesRequest;
  clearEntitiesList(): BatchUpdateEntitiesRequest;
  addEntities(value?: EntityType.Entity, index?: number): EntityType.Entity;

  getLanguageCode(): string;
  setLanguageCode(value: string): BatchUpdateEntitiesRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): BatchUpdateEntitiesRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): BatchUpdateEntitiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateEntitiesRequest): BatchUpdateEntitiesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchUpdateEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateEntitiesRequest;
  static deserializeBinaryFromReader(message: BatchUpdateEntitiesRequest, reader: jspb.BinaryReader): BatchUpdateEntitiesRequest;
}

export namespace BatchUpdateEntitiesRequest {
  export type AsObject = {
    parent: string,
    entitiesList: Array<EntityType.Entity.AsObject>,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class BatchDeleteEntitiesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchDeleteEntitiesRequest;

  getEntityValuesList(): Array<string>;
  setEntityValuesList(value: Array<string>): BatchDeleteEntitiesRequest;
  clearEntityValuesList(): BatchDeleteEntitiesRequest;
  addEntityValues(value: string, index?: number): BatchDeleteEntitiesRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): BatchDeleteEntitiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchDeleteEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchDeleteEntitiesRequest): BatchDeleteEntitiesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchDeleteEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchDeleteEntitiesRequest;
  static deserializeBinaryFromReader(message: BatchDeleteEntitiesRequest, reader: jspb.BinaryReader): BatchDeleteEntitiesRequest;
}

export namespace BatchDeleteEntitiesRequest {
  export type AsObject = {
    parent: string,
    entityValuesList: Array<string>,
    languageCode: string,
  }
}

export class EntityTypeBatch extends jspb.Message {
  getEntityTypesList(): Array<EntityType>;
  setEntityTypesList(value: Array<EntityType>): EntityTypeBatch;
  clearEntityTypesList(): EntityTypeBatch;
  addEntityTypes(value?: EntityType, index?: number): EntityType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityTypeBatch.AsObject;
  static toObject(includeInstance: boolean, msg: EntityTypeBatch): EntityTypeBatch.AsObject;
  static serializeBinaryToWriter(message: EntityTypeBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityTypeBatch;
  static deserializeBinaryFromReader(message: EntityTypeBatch, reader: jspb.BinaryReader): EntityTypeBatch;
}

export namespace EntityTypeBatch {
  export type AsObject = {
    entityTypesList: Array<EntityType.AsObject>,
  }
}

