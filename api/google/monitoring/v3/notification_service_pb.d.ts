import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_monitoring_v3_notification_pb from '../../../google/monitoring/v3/notification_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ListNotificationChannelDescriptorsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListNotificationChannelDescriptorsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNotificationChannelDescriptorsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotificationChannelDescriptorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationChannelDescriptorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationChannelDescriptorsRequest): ListNotificationChannelDescriptorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotificationChannelDescriptorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationChannelDescriptorsRequest;
  static deserializeBinaryFromReader(message: ListNotificationChannelDescriptorsRequest, reader: jspb.BinaryReader): ListNotificationChannelDescriptorsRequest;
}

export namespace ListNotificationChannelDescriptorsRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotificationChannelDescriptorsResponse extends jspb.Message {
  getChannelDescriptorsList(): Array<google_monitoring_v3_notification_pb.NotificationChannelDescriptor>;
  setChannelDescriptorsList(value: Array<google_monitoring_v3_notification_pb.NotificationChannelDescriptor>): ListNotificationChannelDescriptorsResponse;
  clearChannelDescriptorsList(): ListNotificationChannelDescriptorsResponse;
  addChannelDescriptors(value?: google_monitoring_v3_notification_pb.NotificationChannelDescriptor, index?: number): google_monitoring_v3_notification_pb.NotificationChannelDescriptor;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListNotificationChannelDescriptorsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationChannelDescriptorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationChannelDescriptorsResponse): ListNotificationChannelDescriptorsResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotificationChannelDescriptorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationChannelDescriptorsResponse;
  static deserializeBinaryFromReader(message: ListNotificationChannelDescriptorsResponse, reader: jspb.BinaryReader): ListNotificationChannelDescriptorsResponse;
}

export namespace ListNotificationChannelDescriptorsResponse {
  export type AsObject = {
    channelDescriptorsList: Array<google_monitoring_v3_notification_pb.NotificationChannelDescriptor.AsObject>,
    nextPageToken: string,
  }
}

export class GetNotificationChannelDescriptorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetNotificationChannelDescriptorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationChannelDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationChannelDescriptorRequest): GetNotificationChannelDescriptorRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotificationChannelDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationChannelDescriptorRequest;
  static deserializeBinaryFromReader(message: GetNotificationChannelDescriptorRequest, reader: jspb.BinaryReader): GetNotificationChannelDescriptorRequest;
}

export namespace GetNotificationChannelDescriptorRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateNotificationChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateNotificationChannelRequest;

  getNotificationChannel(): google_monitoring_v3_notification_pb.NotificationChannel | undefined;
  setNotificationChannel(value?: google_monitoring_v3_notification_pb.NotificationChannel): CreateNotificationChannelRequest;
  hasNotificationChannel(): boolean;
  clearNotificationChannel(): CreateNotificationChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotificationChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotificationChannelRequest): CreateNotificationChannelRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNotificationChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotificationChannelRequest;
  static deserializeBinaryFromReader(message: CreateNotificationChannelRequest, reader: jspb.BinaryReader): CreateNotificationChannelRequest;
}

export namespace CreateNotificationChannelRequest {
  export type AsObject = {
    name: string,
    notificationChannel?: google_monitoring_v3_notification_pb.NotificationChannel.AsObject,
  }
}

export class ListNotificationChannelsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListNotificationChannelsRequest;

  getFilter(): string;
  setFilter(value: string): ListNotificationChannelsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListNotificationChannelsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNotificationChannelsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotificationChannelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationChannelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationChannelsRequest): ListNotificationChannelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotificationChannelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationChannelsRequest;
  static deserializeBinaryFromReader(message: ListNotificationChannelsRequest, reader: jspb.BinaryReader): ListNotificationChannelsRequest;
}

export namespace ListNotificationChannelsRequest {
  export type AsObject = {
    name: string,
    filter: string,
    orderBy: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotificationChannelsResponse extends jspb.Message {
  getNotificationChannelsList(): Array<google_monitoring_v3_notification_pb.NotificationChannel>;
  setNotificationChannelsList(value: Array<google_monitoring_v3_notification_pb.NotificationChannel>): ListNotificationChannelsResponse;
  clearNotificationChannelsList(): ListNotificationChannelsResponse;
  addNotificationChannels(value?: google_monitoring_v3_notification_pb.NotificationChannel, index?: number): google_monitoring_v3_notification_pb.NotificationChannel;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListNotificationChannelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationChannelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationChannelsResponse): ListNotificationChannelsResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotificationChannelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationChannelsResponse;
  static deserializeBinaryFromReader(message: ListNotificationChannelsResponse, reader: jspb.BinaryReader): ListNotificationChannelsResponse;
}

export namespace ListNotificationChannelsResponse {
  export type AsObject = {
    notificationChannelsList: Array<google_monitoring_v3_notification_pb.NotificationChannel.AsObject>,
    nextPageToken: string,
  }
}

export class GetNotificationChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetNotificationChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationChannelRequest): GetNotificationChannelRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotificationChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationChannelRequest;
  static deserializeBinaryFromReader(message: GetNotificationChannelRequest, reader: jspb.BinaryReader): GetNotificationChannelRequest;
}

export namespace GetNotificationChannelRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateNotificationChannelRequest extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateNotificationChannelRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateNotificationChannelRequest;

  getNotificationChannel(): google_monitoring_v3_notification_pb.NotificationChannel | undefined;
  setNotificationChannel(value?: google_monitoring_v3_notification_pb.NotificationChannel): UpdateNotificationChannelRequest;
  hasNotificationChannel(): boolean;
  clearNotificationChannel(): UpdateNotificationChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotificationChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotificationChannelRequest): UpdateNotificationChannelRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNotificationChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotificationChannelRequest;
  static deserializeBinaryFromReader(message: UpdateNotificationChannelRequest, reader: jspb.BinaryReader): UpdateNotificationChannelRequest;
}

export namespace UpdateNotificationChannelRequest {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    notificationChannel?: google_monitoring_v3_notification_pb.NotificationChannel.AsObject,
  }
}

export class DeleteNotificationChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteNotificationChannelRequest;

  getForce(): boolean;
  setForce(value: boolean): DeleteNotificationChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotificationChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotificationChannelRequest): DeleteNotificationChannelRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNotificationChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotificationChannelRequest;
  static deserializeBinaryFromReader(message: DeleteNotificationChannelRequest, reader: jspb.BinaryReader): DeleteNotificationChannelRequest;
}

export namespace DeleteNotificationChannelRequest {
  export type AsObject = {
    name: string,
    force: boolean,
  }
}

export class SendNotificationChannelVerificationCodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): SendNotificationChannelVerificationCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendNotificationChannelVerificationCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendNotificationChannelVerificationCodeRequest): SendNotificationChannelVerificationCodeRequest.AsObject;
  static serializeBinaryToWriter(message: SendNotificationChannelVerificationCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendNotificationChannelVerificationCodeRequest;
  static deserializeBinaryFromReader(message: SendNotificationChannelVerificationCodeRequest, reader: jspb.BinaryReader): SendNotificationChannelVerificationCodeRequest;
}

export namespace SendNotificationChannelVerificationCodeRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetNotificationChannelVerificationCodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetNotificationChannelVerificationCodeRequest;

  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): GetNotificationChannelVerificationCodeRequest;
  hasExpireTime(): boolean;
  clearExpireTime(): GetNotificationChannelVerificationCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationChannelVerificationCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationChannelVerificationCodeRequest): GetNotificationChannelVerificationCodeRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotificationChannelVerificationCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationChannelVerificationCodeRequest;
  static deserializeBinaryFromReader(message: GetNotificationChannelVerificationCodeRequest, reader: jspb.BinaryReader): GetNotificationChannelVerificationCodeRequest;
}

export namespace GetNotificationChannelVerificationCodeRequest {
  export type AsObject = {
    name: string,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetNotificationChannelVerificationCodeResponse extends jspb.Message {
  getCode(): string;
  setCode(value: string): GetNotificationChannelVerificationCodeResponse;

  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): GetNotificationChannelVerificationCodeResponse;
  hasExpireTime(): boolean;
  clearExpireTime(): GetNotificationChannelVerificationCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationChannelVerificationCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationChannelVerificationCodeResponse): GetNotificationChannelVerificationCodeResponse.AsObject;
  static serializeBinaryToWriter(message: GetNotificationChannelVerificationCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationChannelVerificationCodeResponse;
  static deserializeBinaryFromReader(message: GetNotificationChannelVerificationCodeResponse, reader: jspb.BinaryReader): GetNotificationChannelVerificationCodeResponse;
}

export namespace GetNotificationChannelVerificationCodeResponse {
  export type AsObject = {
    code: string,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class VerifyNotificationChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): VerifyNotificationChannelRequest;

  getCode(): string;
  setCode(value: string): VerifyNotificationChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyNotificationChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyNotificationChannelRequest): VerifyNotificationChannelRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyNotificationChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyNotificationChannelRequest;
  static deserializeBinaryFromReader(message: VerifyNotificationChannelRequest, reader: jspb.BinaryReader): VerifyNotificationChannelRequest;
}

export namespace VerifyNotificationChannelRequest {
  export type AsObject = {
    name: string,
    code: string,
  }
}

