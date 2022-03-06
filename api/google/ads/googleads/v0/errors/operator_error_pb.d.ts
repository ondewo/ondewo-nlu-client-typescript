import * as jspb from 'google-protobuf'



export class OperatorErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatorErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: OperatorErrorEnum): OperatorErrorEnum.AsObject;
  static serializeBinaryToWriter(message: OperatorErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatorErrorEnum;
  static deserializeBinaryFromReader(message: OperatorErrorEnum, reader: jspb.BinaryReader): OperatorErrorEnum;
}

export namespace OperatorErrorEnum {
  export type AsObject = {
  }

  export enum OperatorError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    OPERATOR_NOT_SUPPORTED = 2,
  }
}

