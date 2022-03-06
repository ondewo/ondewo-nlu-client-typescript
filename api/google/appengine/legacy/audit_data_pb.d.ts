import * as jspb from 'google-protobuf'



export class AuditData extends jspb.Message {
  getEventMessage(): string;
  setEventMessage(value: string): AuditData;

  getEventDataMap(): jspb.Map<string, string>;
  clearEventDataMap(): AuditData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditData.AsObject;
  static toObject(includeInstance: boolean, msg: AuditData): AuditData.AsObject;
  static serializeBinaryToWriter(message: AuditData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditData;
  static deserializeBinaryFromReader(message: AuditData, reader: jspb.BinaryReader): AuditData;
}

export namespace AuditData {
  export type AsObject = {
    eventMessage: string,
    eventDataMap: Array<[string, string]>,
  }
}

