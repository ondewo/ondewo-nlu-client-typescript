import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_classification_pb from '../../../../google/cloud/automl/v1beta1/classification_pb';
import * as google_cloud_automl_v1beta1_translation_pb from '../../../../google/cloud/automl/v1beta1/translation_pb';


export class AnnotationPayload extends jspb.Message {
  getTranslation(): google_cloud_automl_v1beta1_translation_pb.TranslationAnnotation | undefined;
  setTranslation(value?: google_cloud_automl_v1beta1_translation_pb.TranslationAnnotation): AnnotationPayload;
  hasTranslation(): boolean;
  clearTranslation(): AnnotationPayload;

  getClassification(): google_cloud_automl_v1beta1_classification_pb.ClassificationAnnotation | undefined;
  setClassification(value?: google_cloud_automl_v1beta1_classification_pb.ClassificationAnnotation): AnnotationPayload;
  hasClassification(): boolean;
  clearClassification(): AnnotationPayload;

  getAnnotationSpecId(): string;
  setAnnotationSpecId(value: string): AnnotationPayload;

  getDisplayName(): string;
  setDisplayName(value: string): AnnotationPayload;

  getDetailCase(): AnnotationPayload.DetailCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationPayload): AnnotationPayload.AsObject;
  static serializeBinaryToWriter(message: AnnotationPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationPayload;
  static deserializeBinaryFromReader(message: AnnotationPayload, reader: jspb.BinaryReader): AnnotationPayload;
}

export namespace AnnotationPayload {
  export type AsObject = {
    translation?: google_cloud_automl_v1beta1_translation_pb.TranslationAnnotation.AsObject,
    classification?: google_cloud_automl_v1beta1_classification_pb.ClassificationAnnotation.AsObject,
    annotationSpecId: string,
    displayName: string,
  }

  export enum DetailCase { 
    DETAIL_NOT_SET = 0,
    TRANSLATION = 2,
    CLASSIFICATION = 3,
  }
}

