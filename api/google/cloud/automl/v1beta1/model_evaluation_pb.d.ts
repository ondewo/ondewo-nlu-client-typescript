import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_classification_pb from '../../../../google/cloud/automl/v1beta1/classification_pb';
import * as google_cloud_automl_v1beta1_translation_pb from '../../../../google/cloud/automl/v1beta1/translation_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ModelEvaluation extends jspb.Message {
  getClassificationEvaluationMetrics(): google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics | undefined;
  setClassificationEvaluationMetrics(value?: google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics): ModelEvaluation;
  hasClassificationEvaluationMetrics(): boolean;
  clearClassificationEvaluationMetrics(): ModelEvaluation;

  getTranslationEvaluationMetrics(): google_cloud_automl_v1beta1_translation_pb.TranslationEvaluationMetrics | undefined;
  setTranslationEvaluationMetrics(value?: google_cloud_automl_v1beta1_translation_pb.TranslationEvaluationMetrics): ModelEvaluation;
  hasTranslationEvaluationMetrics(): boolean;
  clearTranslationEvaluationMetrics(): ModelEvaluation;

  getName(): string;
  setName(value: string): ModelEvaluation;

  getAnnotationSpecId(): string;
  setAnnotationSpecId(value: string): ModelEvaluation;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): ModelEvaluation;
  hasCreateTime(): boolean;
  clearCreateTime(): ModelEvaluation;

  getEvaluatedExampleCount(): number;
  setEvaluatedExampleCount(value: number): ModelEvaluation;

  getMetricsCase(): ModelEvaluation.MetricsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelEvaluation.AsObject;
  static toObject(includeInstance: boolean, msg: ModelEvaluation): ModelEvaluation.AsObject;
  static serializeBinaryToWriter(message: ModelEvaluation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelEvaluation;
  static deserializeBinaryFromReader(message: ModelEvaluation, reader: jspb.BinaryReader): ModelEvaluation;
}

export namespace ModelEvaluation {
  export type AsObject = {
    classificationEvaluationMetrics?: google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics.AsObject,
    translationEvaluationMetrics?: google_cloud_automl_v1beta1_translation_pb.TranslationEvaluationMetrics.AsObject,
    name: string,
    annotationSpecId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    evaluatedExampleCount: number,
  }

  export enum MetricsCase { 
    METRICS_NOT_SET = 0,
    CLASSIFICATION_EVALUATION_METRICS = 8,
    TRANSLATION_EVALUATION_METRICS = 9,
  }
}

