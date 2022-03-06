import * as jspb from 'google-protobuf'



export class BudgetDeliveryMethodEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BudgetDeliveryMethodEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BudgetDeliveryMethodEnum): BudgetDeliveryMethodEnum.AsObject;
  static serializeBinaryToWriter(message: BudgetDeliveryMethodEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BudgetDeliveryMethodEnum;
  static deserializeBinaryFromReader(message: BudgetDeliveryMethodEnum, reader: jspb.BinaryReader): BudgetDeliveryMethodEnum;
}

export namespace BudgetDeliveryMethodEnum {
  export type AsObject = {
  }

  export enum BudgetDeliveryMethod { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    STANDARD = 2,
    ACCELERATED = 3,
  }
}

