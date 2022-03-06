import * as jspb from 'google-protobuf'



export class AuthorizationConfig extends jspb.Message {
  getProvider(): string;
  setProvider(value: string): AuthorizationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationConfig): AuthorizationConfig.AsObject;
  static serializeBinaryToWriter(message: AuthorizationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationConfig;
  static deserializeBinaryFromReader(message: AuthorizationConfig, reader: jspb.BinaryReader): AuthorizationConfig;
}

export namespace AuthorizationConfig {
  export type AsObject = {
    provider: string,
  }
}

