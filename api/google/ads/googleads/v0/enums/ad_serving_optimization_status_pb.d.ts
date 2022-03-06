import * as jspb from 'google-protobuf'



export class AdServingOptimizationStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdServingOptimizationStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdServingOptimizationStatusEnum): AdServingOptimizationStatusEnum.AsObject;
  static serializeBinaryToWriter(message: AdServingOptimizationStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdServingOptimizationStatusEnum;
  static deserializeBinaryFromReader(message: AdServingOptimizationStatusEnum, reader: jspb.BinaryReader): AdServingOptimizationStatusEnum;
}

export namespace AdServingOptimizationStatusEnum {
  export type AsObject = {
  }

  export enum AdServingOptimizationStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    OPTIMIZE = 2,
    CONVERSION_OPTIMIZE = 3,
    ROTATE = 4,
    ROTATE_INDEFINITELY = 5,
    UNAVAILABLE = 6,
  }
}

