import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';


export class AuditData extends jspb.Message {
  getPolicyDelta(): google_iam_v1_policy_pb.PolicyDelta | undefined;
  setPolicyDelta(value?: google_iam_v1_policy_pb.PolicyDelta): AuditData;
  hasPolicyDelta(): boolean;
  clearPolicyDelta(): AuditData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditData.AsObject;
  static toObject(includeInstance: boolean, msg: AuditData): AuditData.AsObject;
  static serializeBinaryToWriter(message: AuditData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditData;
  static deserializeBinaryFromReader(message: AuditData, reader: jspb.BinaryReader): AuditData;
}

export namespace AuditData {
  export type AsObject = {
    policyDelta?: google_iam_v1_policy_pb.PolicyDelta.AsObject,
  }
}

