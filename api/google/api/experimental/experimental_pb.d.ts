import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_experimental_authorization_config_pb from '../../../google/api/experimental/authorization_config_pb';


export class Experimental extends jspb.Message {
  getAuthorization(): google_api_experimental_authorization_config_pb.AuthorizationConfig | undefined;
  setAuthorization(value?: google_api_experimental_authorization_config_pb.AuthorizationConfig): Experimental;
  hasAuthorization(): boolean;
  clearAuthorization(): Experimental;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Experimental.AsObject;
  static toObject(includeInstance: boolean, msg: Experimental): Experimental.AsObject;
  static serializeBinaryToWriter(message: Experimental, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Experimental;
  static deserializeBinaryFromReader(message: Experimental, reader: jspb.BinaryReader): Experimental;
}

export namespace Experimental {
  export type AsObject = {
    authorization?: google_api_experimental_authorization_config_pb.AuthorizationConfig.AsObject,
  }
}

