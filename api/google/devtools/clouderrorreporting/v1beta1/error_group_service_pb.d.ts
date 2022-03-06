import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_clouderrorreporting_v1beta1_common_pb from '../../../../google/devtools/clouderrorreporting/v1beta1/common_pb';


export class GetGroupRequest extends jspb.Message {
  getGroupName(): string;
  setGroupName(value: string): GetGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupRequest): GetGroupRequest.AsObject;
  static serializeBinaryToWriter(message: GetGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupRequest;
  static deserializeBinaryFromReader(message: GetGroupRequest, reader: jspb.BinaryReader): GetGroupRequest;
}

export namespace GetGroupRequest {
  export type AsObject = {
    groupName: string,
  }
}

export class UpdateGroupRequest extends jspb.Message {
  getGroup(): google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup | undefined;
  setGroup(value?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup): UpdateGroupRequest;
  hasGroup(): boolean;
  clearGroup(): UpdateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupRequest): UpdateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupRequest;
  static deserializeBinaryFromReader(message: UpdateGroupRequest, reader: jspb.BinaryReader): UpdateGroupRequest;
}

export namespace UpdateGroupRequest {
  export type AsObject = {
    group?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup.AsObject,
  }
}

