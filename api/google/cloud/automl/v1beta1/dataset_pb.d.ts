import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_annotation_payload_pb from '../../../../google/cloud/automl/v1beta1/annotation_payload_pb';
import * as google_cloud_automl_v1beta1_data_items_pb from '../../../../google/cloud/automl/v1beta1/data_items_pb';
import * as google_cloud_automl_v1beta1_image_pb from '../../../../google/cloud/automl/v1beta1/image_pb';
import * as google_cloud_automl_v1beta1_text_pb from '../../../../google/cloud/automl/v1beta1/text_pb';
import * as google_cloud_automl_v1beta1_translation_pb from '../../../../google/cloud/automl/v1beta1/translation_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Dataset extends jspb.Message {
  getTranslationDatasetMetadata(): google_cloud_automl_v1beta1_translation_pb.TranslationDatasetMetadata | undefined;
  setTranslationDatasetMetadata(value?: google_cloud_automl_v1beta1_translation_pb.TranslationDatasetMetadata): Dataset;
  hasTranslationDatasetMetadata(): boolean;
  clearTranslationDatasetMetadata(): Dataset;

  getImageClassificationDatasetMetadata(): google_cloud_automl_v1beta1_image_pb.ImageClassificationDatasetMetadata | undefined;
  setImageClassificationDatasetMetadata(value?: google_cloud_automl_v1beta1_image_pb.ImageClassificationDatasetMetadata): Dataset;
  hasImageClassificationDatasetMetadata(): boolean;
  clearImageClassificationDatasetMetadata(): Dataset;

  getTextClassificationDatasetMetadata(): google_cloud_automl_v1beta1_text_pb.TextClassificationDatasetMetadata | undefined;
  setTextClassificationDatasetMetadata(value?: google_cloud_automl_v1beta1_text_pb.TextClassificationDatasetMetadata): Dataset;
  hasTextClassificationDatasetMetadata(): boolean;
  clearTextClassificationDatasetMetadata(): Dataset;

  getName(): string;
  setName(value: string): Dataset;

  getDisplayName(): string;
  setDisplayName(value: string): Dataset;

  getExampleCount(): number;
  setExampleCount(value: number): Dataset;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Dataset;
  hasCreateTime(): boolean;
  clearCreateTime(): Dataset;

  getDatasetMetadataCase(): Dataset.DatasetMetadataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    translationDatasetMetadata?: google_cloud_automl_v1beta1_translation_pb.TranslationDatasetMetadata.AsObject,
    imageClassificationDatasetMetadata?: google_cloud_automl_v1beta1_image_pb.ImageClassificationDatasetMetadata.AsObject,
    textClassificationDatasetMetadata?: google_cloud_automl_v1beta1_text_pb.TextClassificationDatasetMetadata.AsObject,
    name: string,
    displayName: string,
    exampleCount: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum DatasetMetadataCase { 
    DATASET_METADATA_NOT_SET = 0,
    TRANSLATION_DATASET_METADATA = 23,
    IMAGE_CLASSIFICATION_DATASET_METADATA = 24,
    TEXT_CLASSIFICATION_DATASET_METADATA = 25,
  }
}

