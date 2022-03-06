import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_data_items_pb from '../../../../google/cloud/automl/v1beta1/data_items_pb';


export class TranslationDatasetMetadata extends jspb.Message {
  getSourceLanguageCode(): string;
  setSourceLanguageCode(value: string): TranslationDatasetMetadata;

  getTargetLanguageCode(): string;
  setTargetLanguageCode(value: string): TranslationDatasetMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationDatasetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationDatasetMetadata): TranslationDatasetMetadata.AsObject;
  static serializeBinaryToWriter(message: TranslationDatasetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationDatasetMetadata;
  static deserializeBinaryFromReader(message: TranslationDatasetMetadata, reader: jspb.BinaryReader): TranslationDatasetMetadata;
}

export namespace TranslationDatasetMetadata {
  export type AsObject = {
    sourceLanguageCode: string,
    targetLanguageCode: string,
  }
}

export class TranslationEvaluationMetrics extends jspb.Message {
  getBleuScore(): number;
  setBleuScore(value: number): TranslationEvaluationMetrics;

  getBaseBleuScore(): number;
  setBaseBleuScore(value: number): TranslationEvaluationMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationEvaluationMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationEvaluationMetrics): TranslationEvaluationMetrics.AsObject;
  static serializeBinaryToWriter(message: TranslationEvaluationMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationEvaluationMetrics;
  static deserializeBinaryFromReader(message: TranslationEvaluationMetrics, reader: jspb.BinaryReader): TranslationEvaluationMetrics;
}

export namespace TranslationEvaluationMetrics {
  export type AsObject = {
    bleuScore: number,
    baseBleuScore: number,
  }
}

export class TranslationModelMetadata extends jspb.Message {
  getBaseModel(): string;
  setBaseModel(value: string): TranslationModelMetadata;

  getSourceLanguageCode(): string;
  setSourceLanguageCode(value: string): TranslationModelMetadata;

  getTargetLanguageCode(): string;
  setTargetLanguageCode(value: string): TranslationModelMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationModelMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationModelMetadata): TranslationModelMetadata.AsObject;
  static serializeBinaryToWriter(message: TranslationModelMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationModelMetadata;
  static deserializeBinaryFromReader(message: TranslationModelMetadata, reader: jspb.BinaryReader): TranslationModelMetadata;
}

export namespace TranslationModelMetadata {
  export type AsObject = {
    baseModel: string,
    sourceLanguageCode: string,
    targetLanguageCode: string,
  }
}

export class TranslationAnnotation extends jspb.Message {
  getTranslatedContent(): google_cloud_automl_v1beta1_data_items_pb.TextSnippet | undefined;
  setTranslatedContent(value?: google_cloud_automl_v1beta1_data_items_pb.TextSnippet): TranslationAnnotation;
  hasTranslatedContent(): boolean;
  clearTranslatedContent(): TranslationAnnotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationAnnotation): TranslationAnnotation.AsObject;
  static serializeBinaryToWriter(message: TranslationAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationAnnotation;
  static deserializeBinaryFromReader(message: TranslationAnnotation, reader: jspb.BinaryReader): TranslationAnnotation;
}

export namespace TranslationAnnotation {
  export type AsObject = {
    translatedContent?: google_cloud_automl_v1beta1_data_items_pb.TextSnippet.AsObject,
  }
}

