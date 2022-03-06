import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class PolicyViolationKey extends jspb.Message {
  getPolicyName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPolicyName(value?: google_protobuf_wrappers_pb.StringValue): PolicyViolationKey;
  hasPolicyName(): boolean;
  clearPolicyName(): PolicyViolationKey;

  getViolatingText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setViolatingText(value?: google_protobuf_wrappers_pb.StringValue): PolicyViolationKey;
  hasViolatingText(): boolean;
  clearViolatingText(): PolicyViolationKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyViolationKey.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyViolationKey): PolicyViolationKey.AsObject;
  static serializeBinaryToWriter(message: PolicyViolationKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyViolationKey;
  static deserializeBinaryFromReader(message: PolicyViolationKey, reader: jspb.BinaryReader): PolicyViolationKey;
}

export namespace PolicyViolationKey {
  export type AsObject = {
    policyName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    violatingText?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

