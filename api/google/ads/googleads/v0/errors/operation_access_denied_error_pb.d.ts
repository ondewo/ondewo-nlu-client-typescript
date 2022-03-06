import * as jspb from 'google-protobuf'



export class OperationAccessDeniedErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationAccessDeniedErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: OperationAccessDeniedErrorEnum): OperationAccessDeniedErrorEnum.AsObject;
  static serializeBinaryToWriter(message: OperationAccessDeniedErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationAccessDeniedErrorEnum;
  static deserializeBinaryFromReader(message: OperationAccessDeniedErrorEnum, reader: jspb.BinaryReader): OperationAccessDeniedErrorEnum;
}

export namespace OperationAccessDeniedErrorEnum {
  export type AsObject = {
  }

  export enum OperationAccessDeniedError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ACTION_NOT_PERMITTED = 2,
    CREATE_OPERATION_NOT_PERMITTED = 3,
    REMOVE_OPERATION_NOT_PERMITTED = 4,
    UPDATE_OPERATION_NOT_PERMITTED = 5,
    MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT = 6,
    OPERATION_NOT_PERMITTED_FOR_CAMPAIGN_TYPE = 7,
    CREATE_AS_REMOVED_NOT_PERMITTED = 8,
    OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE = 9,
    OPERATION_NOT_PERMITTED_FOR_AD_GROUP_TYPE = 10,
  }
}

