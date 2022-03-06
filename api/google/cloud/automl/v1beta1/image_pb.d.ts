import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_classification_pb from '../../../../google/cloud/automl/v1beta1/classification_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ImageClassificationDatasetMetadata extends jspb.Message {
  getClassificationType(): google_cloud_automl_v1beta1_classification_pb.ClassificationType;
  setClassificationType(value: google_cloud_automl_v1beta1_classification_pb.ClassificationType): ImageClassificationDatasetMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageClassificationDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImageClassificationDatasetMetadata): ImageClassificationDatasetMetadata.AsObject;
  static serializeBinaryToWriter(message: ImageClassificationDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageClassificationDatasetMetadata;
  static deserializeBinaryFromReader(message: ImageClassificationDatasetMetadata, reader: jspb.BinaryReader): ImageClassificationDatasetMetadata;
}

export namespace ImageClassificationDatasetMetadata {
  export type AsObject = {
    classificationType: google_cloud_automl_v1beta1_classification_pb.ClassificationType,
  }
}

export class ImageClassificationModelMetadata extends jspb.Message {
  getBaseModelId(): string;
  setBaseModelId(value: string): ImageClassificationModelMetadata;

  getTrainBudget(): number;
  setTrainBudget(value: number): ImageClassificationModelMetadata;

  getTrainCost(): number;
  setTrainCost(value: number): ImageClassificationModelMetadata;

  getStopReason(): string;
  setStopReason(value: string): ImageClassificationModelMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageClassificationModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImageClassificationModelMetadata): ImageClassificationModelMetadata.AsObject;
  static serializeBinaryToWriter(message: ImageClassificationModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageClassificationModelMetadata;
  static deserializeBinaryFromReader(message: ImageClassificationModelMetadata, reader: jspb.BinaryReader): ImageClassificationModelMetadata;
}

export namespace ImageClassificationModelMetadata {
  export type AsObject = {
    baseModelId: string,
    trainBudget: number,
    trainCost: number,
    stopReason: string,
  }
}

