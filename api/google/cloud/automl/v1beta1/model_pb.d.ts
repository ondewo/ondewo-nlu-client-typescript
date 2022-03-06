import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_image_pb from '../../../../google/cloud/automl/v1beta1/image_pb';
import * as google_cloud_automl_v1beta1_text_pb from '../../../../google/cloud/automl/v1beta1/text_pb';
import * as google_cloud_automl_v1beta1_translation_pb from '../../../../google/cloud/automl/v1beta1/translation_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Model extends jspb.Message {
  getImageClassificationModelMetadata(): google_cloud_automl_v1beta1_image_pb.ImageClassificationModelMetadata | undefined;
  setImageClassificationModelMetadata(value?: google_cloud_automl_v1beta1_image_pb.ImageClassificationModelMetadata): Model;
  hasImageClassificationModelMetadata(): boolean;
  clearImageClassificationModelMetadata(): Model;

  getTextClassificationModelMetadata(): google_cloud_automl_v1beta1_text_pb.TextClassificationModelMetadata | undefined;
  setTextClassificationModelMetadata(value?: google_cloud_automl_v1beta1_text_pb.TextClassificationModelMetadata): Model;
  hasTextClassificationModelMetadata(): boolean;
  clearTextClassificationModelMetadata(): Model;

  getTranslationModelMetadata(): google_cloud_automl_v1beta1_translation_pb.TranslationModelMetadata | undefined;
  setTranslationModelMetadata(value?: google_cloud_automl_v1beta1_translation_pb.TranslationModelMetadata): Model;
  hasTranslationModelMetadata(): boolean;
  clearTranslationModelMetadata(): Model;

  getName(): string;
  setName(value: string): Model;

  getDisplayName(): string;
  setDisplayName(value: string): Model;

  getDatasetId(): string;
  setDatasetId(value: string): Model;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Model;
  hasCreateTime(): boolean;
  clearCreateTime(): Model;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Model;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Model;

  getDeploymentState(): Model.DeploymentState;
  setDeploymentState(value: Model.DeploymentState): Model;

  getModelMetadataCase(): Model.ModelMetadataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    imageClassificationModelMetadata?: google_cloud_automl_v1beta1_image_pb.ImageClassificationModelMetadata.AsObject,
    textClassificationModelMetadata?: google_cloud_automl_v1beta1_text_pb.TextClassificationModelMetadata.AsObject,
    translationModelMetadata?: google_cloud_automl_v1beta1_translation_pb.TranslationModelMetadata.AsObject,
    name: string,
    displayName: string,
    datasetId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deploymentState: Model.DeploymentState,
  }

  export enum DeploymentState { 
    DEPLOYMENT_STATE_UNSPECIFIED = 0,
    DEPLOYED = 1,
    UNDEPLOYED = 2,
  }

  export enum ModelMetadataCase { 
    MODEL_METADATA_NOT_SET = 0,
    IMAGE_CLASSIFICATION_MODEL_METADATA = 13,
    TEXT_CLASSIFICATION_MODEL_METADATA = 14,
    TRANSLATION_MODEL_METADATA = 15,
  }
}

