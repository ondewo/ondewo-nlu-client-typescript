import * as jspb from 'google-protobuf'



export class Test extends jspb.Message {
  getName(): string;
  setName(value: string): Test;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Test.AsObject;
  static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
  static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Test;
  static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
}

export namespace Test {
  export type AsObject = {
    name: string,
  }
}

export class NewTest extends jspb.Message {
  getName(): string;
  setName(value: string): NewTest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewTest.AsObject;
  static toObject(includeInstance: boolean, msg: NewTest): NewTest.AsObject;
  static serializeBinaryToWriter(message: NewTest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewTest;
  static deserializeBinaryFromReader(message: NewTest, reader: jspb.BinaryReader): NewTest;
}

export namespace NewTest {
  export type AsObject = {
    name: string,
  }
}

