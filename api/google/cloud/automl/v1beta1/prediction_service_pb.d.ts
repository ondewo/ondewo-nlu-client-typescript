import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_annotation_payload_pb from '../../../../google/cloud/automl/v1beta1/annotation_payload_pb';
import * as google_cloud_automl_v1beta1_data_items_pb from '../../../../google/cloud/automl/v1beta1/data_items_pb';


export class PredictRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PredictRequest;

  getPayload(): google_cloud_automl_v1beta1_data_items_pb.ExamplePayload | undefined;
  setPayload(value?: google_cloud_automl_v1beta1_data_items_pb.ExamplePayload): PredictRequest;
  hasPayload(): boolean;
  clearPayload(): PredictRequest;

  getParamsMap(): jspb.Map<string, string>;
  clearParamsMap(): PredictRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PredictRequest): PredictRequest.AsObject;
  static serializeBinaryToWriter(message: PredictRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictRequest;
  static deserializeBinaryFromReader(message: PredictRequest, reader: jspb.BinaryReader): PredictRequest;
}

export namespace PredictRequest {
  export type AsObject = {
    name: string,
    payload?: google_cloud_automl_v1beta1_data_items_pb.ExamplePayload.AsObject,
    paramsMap: Array<[string, string]>,
  }
}

export class PredictResponse extends jspb.Message {
  getPayloadList(): Array<google_cloud_automl_v1beta1_annotation_payload_pb.AnnotationPayload>;
  setPayloadList(value: Array<google_cloud_automl_v1beta1_annotation_payload_pb.AnnotationPayload>): PredictResponse;
  clearPayloadList(): PredictResponse;
  addPayload(value?: google_cloud_automl_v1beta1_annotation_payload_pb.AnnotationPayload, index?: number): google_cloud_automl_v1beta1_annotation_payload_pb.AnnotationPayload;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): PredictResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PredictResponse): PredictResponse.AsObject;
  static serializeBinaryToWriter(message: PredictResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictResponse;
  static deserializeBinaryFromReader(message: PredictResponse, reader: jspb.BinaryReader): PredictResponse;
}

export namespace PredictResponse {
  export type AsObject = {
    payloadList: Array<google_cloud_automl_v1beta1_annotation_payload_pb.AnnotationPayload.AsObject>,
    metadataMap: Array<[string, string]>,
  }
}

