import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_classification_pb from '../../../../google/cloud/automl/v1beta1/classification_pb';


export class TextClassificationDatasetMetadata extends jspb.Message {
  getClassificationType(): google_cloud_automl_v1beta1_classification_pb.ClassificationType;
  setClassificationType(value: google_cloud_automl_v1beta1_classification_pb.ClassificationType): TextClassificationDatasetMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextClassificationDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TextClassificationDatasetMetadata): TextClassificationDatasetMetadata.AsObject;
  static serializeBinaryToWriter(message: TextClassificationDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextClassificationDatasetMetadata;
  static deserializeBinaryFromReader(message: TextClassificationDatasetMetadata, reader: jspb.BinaryReader): TextClassificationDatasetMetadata;
}

export namespace TextClassificationDatasetMetadata {
  export type AsObject = {
    classificationType: google_cloud_automl_v1beta1_classification_pb.ClassificationType,
  }
}

export class TextClassificationModelMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextClassificationModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TextClassificationModelMetadata): TextClassificationModelMetadata.AsObject;
  static serializeBinaryToWriter(message: TextClassificationModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextClassificationModelMetadata;
  static deserializeBinaryFromReader(message: TextClassificationModelMetadata, reader: jspb.BinaryReader): TextClassificationModelMetadata;
}

export namespace TextClassificationModelMetadata {
  export type AsObject = {
  }
}

