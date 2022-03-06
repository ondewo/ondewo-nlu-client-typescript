import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';


export class DroppedLabels extends jspb.Message {
  getLabelMap(): jspb.Map<string, string>;
  clearLabelMap(): DroppedLabels;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DroppedLabels.AsObject;
  static toObject(includeInstance: boolean, msg: DroppedLabels): DroppedLabels.AsObject;
  static serializeBinaryToWriter(message: DroppedLabels, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DroppedLabels;
  static deserializeBinaryFromReader(message: DroppedLabels, reader: jspb.BinaryReader): DroppedLabels;
}

export namespace DroppedLabels {
  export type AsObject = {
    labelMap: Array<[string, string]>,
  }
}

