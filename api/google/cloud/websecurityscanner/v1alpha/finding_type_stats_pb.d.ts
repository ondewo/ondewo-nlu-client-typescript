import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_websecurityscanner_v1alpha_finding_pb from '../../../../google/cloud/websecurityscanner/v1alpha/finding_pb';


export class FindingTypeStats extends jspb.Message {
  getFindingType(): google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.FindingType;
  setFindingType(value: google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.FindingType): FindingTypeStats;

  getFindingCount(): number;
  setFindingCount(value: number): FindingTypeStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindingTypeStats.AsObject;
  static toObject(includeInstance: boolean, msg: FindingTypeStats): FindingTypeStats.AsObject;
  static serializeBinaryToWriter(message: FindingTypeStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindingTypeStats;
  static deserializeBinaryFromReader(message: FindingTypeStats, reader: jspb.BinaryReader): FindingTypeStats;
}

export namespace FindingTypeStats {
  export type AsObject = {
    findingType: google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.FindingType,
    findingCount: number,
  }
}

