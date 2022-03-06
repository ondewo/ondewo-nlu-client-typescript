import * as jspb from 'google-protobuf'



export class BudgetStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BudgetStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BudgetStatusEnum): BudgetStatusEnum.AsObject;
  static serializeBinaryToWriter(message: BudgetStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BudgetStatusEnum;
  static deserializeBinaryFromReader(message: BudgetStatusEnum, reader: jspb.BinaryReader): BudgetStatusEnum;
}

export namespace BudgetStatusEnum {
  export type AsObject = {
  }

  export enum BudgetStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

