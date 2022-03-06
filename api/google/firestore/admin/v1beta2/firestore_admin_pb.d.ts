import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_firestore_admin_v1beta2_field_pb from '../../../../google/firestore/admin/v1beta2/field_pb';
import * as google_firestore_admin_v1beta2_index_pb from '../../../../google/firestore/admin/v1beta2/index_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class UpdateFieldRequest extends jspb.Message {
  getField(): google_firestore_admin_v1beta2_field_pb.Field | undefined;
  setField(value?: google_firestore_admin_v1beta2_field_pb.Field): UpdateFieldRequest;
  hasField(): boolean;
  clearField(): UpdateFieldRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFieldRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateFieldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFieldRequest): UpdateFieldRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFieldRequest;
  static deserializeBinaryFromReader(message: UpdateFieldRequest, reader: jspb.BinaryReader): UpdateFieldRequest;
}

export namespace UpdateFieldRequest {
  export type AsObject = {
    field?: google_firestore_admin_v1beta2_field_pb.Field.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetFieldRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetFieldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFieldRequest): GetFieldRequest.AsObject;
  static serializeBinaryToWriter(message: GetFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFieldRequest;
  static deserializeBinaryFromReader(message: GetFieldRequest, reader: jspb.BinaryReader): GetFieldRequest;
}

export namespace GetFieldRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListFieldsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListFieldsRequest;

  getFilter(): string;
  setFilter(value: string): ListFieldsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFieldsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFieldsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFieldsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFieldsRequest): ListFieldsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFieldsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFieldsRequest;
  static deserializeBinaryFromReader(message: ListFieldsRequest, reader: jspb.BinaryReader): ListFieldsRequest;
}

export namespace ListFieldsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListFieldsResponse extends jspb.Message {
  getFieldsList(): Array<google_firestore_admin_v1beta2_field_pb.Field>;
  setFieldsList(value: Array<google_firestore_admin_v1beta2_field_pb.Field>): ListFieldsResponse;
  clearFieldsList(): ListFieldsResponse;
  addFields(value?: google_firestore_admin_v1beta2_field_pb.Field, index?: number): google_firestore_admin_v1beta2_field_pb.Field;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFieldsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFieldsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFieldsResponse): ListFieldsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFieldsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFieldsResponse;
  static deserializeBinaryFromReader(message: ListFieldsResponse, reader: jspb.BinaryReader): ListFieldsResponse;
}

export namespace ListFieldsResponse {
  export type AsObject = {
    fieldsList: Array<google_firestore_admin_v1beta2_field_pb.Field.AsObject>,
    nextPageToken: string,
  }
}

