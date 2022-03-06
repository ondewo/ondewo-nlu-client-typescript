import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class ClassificationAnnotation extends jspb.Message {
  getScore(): number;
  setScore(value: number): ClassificationAnnotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassificationAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ClassificationAnnotation): ClassificationAnnotation.AsObject;
  static serializeBinaryToWriter(message: ClassificationAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassificationAnnotation;
  static deserializeBinaryFromReader(message: ClassificationAnnotation, reader: jspb.BinaryReader): ClassificationAnnotation;
}

export namespace ClassificationAnnotation {
  export type AsObject = {
    score: number,
  }
}

export class ClassificationEvaluationMetrics extends jspb.Message {
  getAuPrc(): number;
  setAuPrc(value: number): ClassificationEvaluationMetrics;

  getBaseAuPrc(): number;
  setBaseAuPrc(value: number): ClassificationEvaluationMetrics;

  getConfidenceMetricsEntryList(): Array<ClassificationEvaluationMetrics.ConfidenceMetricsEntry>;
  setConfidenceMetricsEntryList(value: Array<ClassificationEvaluationMetrics.ConfidenceMetricsEntry>): ClassificationEvaluationMetrics;
  clearConfidenceMetricsEntryList(): ClassificationEvaluationMetrics;
  addConfidenceMetricsEntry(value?: ClassificationEvaluationMetrics.ConfidenceMetricsEntry, index?: number): ClassificationEvaluationMetrics.ConfidenceMetricsEntry;

  getConfusionMatrix(): ClassificationEvaluationMetrics.ConfusionMatrix | undefined;
  setConfusionMatrix(value?: ClassificationEvaluationMetrics.ConfusionMatrix): ClassificationEvaluationMetrics;
  hasConfusionMatrix(): boolean;
  clearConfusionMatrix(): ClassificationEvaluationMetrics;

  getAnnotationSpecIdList(): Array<string>;
  setAnnotationSpecIdList(value: Array<string>): ClassificationEvaluationMetrics;
  clearAnnotationSpecIdList(): ClassificationEvaluationMetrics;
  addAnnotationSpecId(value: string, index?: number): ClassificationEvaluationMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassificationEvaluationMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ClassificationEvaluationMetrics): ClassificationEvaluationMetrics.AsObject;
  static serializeBinaryToWriter(message: ClassificationEvaluationMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassificationEvaluationMetrics;
  static deserializeBinaryFromReader(message: ClassificationEvaluationMetrics, reader: jspb.BinaryReader): ClassificationEvaluationMetrics;
}

export namespace ClassificationEvaluationMetrics {
  export type AsObject = {
    auPrc: number,
    baseAuPrc: number,
    confidenceMetricsEntryList: Array<ClassificationEvaluationMetrics.ConfidenceMetricsEntry.AsObject>,
    confusionMatrix?: ClassificationEvaluationMetrics.ConfusionMatrix.AsObject,
    annotationSpecIdList: Array<string>,
  }

  export class ConfidenceMetricsEntry extends jspb.Message {
    getConfidenceThreshold(): number;
    setConfidenceThreshold(value: number): ConfidenceMetricsEntry;

    getRecall(): number;
    setRecall(value: number): ConfidenceMetricsEntry;

    getPrecision(): number;
    setPrecision(value: number): ConfidenceMetricsEntry;

    getF1Score(): number;
    setF1Score(value: number): ConfidenceMetricsEntry;

    getRecallAt1(): number;
    setRecallAt1(value: number): ConfidenceMetricsEntry;

    getPrecisionAt1(): number;
    setPrecisionAt1(value: number): ConfidenceMetricsEntry;

    getF1ScoreAt1(): number;
    setF1ScoreAt1(value: number): ConfidenceMetricsEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfidenceMetricsEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ConfidenceMetricsEntry): ConfidenceMetricsEntry.AsObject;
    static serializeBinaryToWriter(message: ConfidenceMetricsEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfidenceMetricsEntry;
    static deserializeBinaryFromReader(message: ConfidenceMetricsEntry, reader: jspb.BinaryReader): ConfidenceMetricsEntry;
  }

  export namespace ConfidenceMetricsEntry {
    export type AsObject = {
      confidenceThreshold: number,
      recall: number,
      precision: number,
      f1Score: number,
      recallAt1: number,
      precisionAt1: number,
      f1ScoreAt1: number,
    }
  }


  export class ConfusionMatrix extends jspb.Message {
    getAnnotationSpecIdList(): Array<string>;
    setAnnotationSpecIdList(value: Array<string>): ConfusionMatrix;
    clearAnnotationSpecIdList(): ConfusionMatrix;
    addAnnotationSpecId(value: string, index?: number): ConfusionMatrix;

    getRowList(): Array<ClassificationEvaluationMetrics.ConfusionMatrix.Row>;
    setRowList(value: Array<ClassificationEvaluationMetrics.ConfusionMatrix.Row>): ConfusionMatrix;
    clearRowList(): ConfusionMatrix;
    addRow(value?: ClassificationEvaluationMetrics.ConfusionMatrix.Row, index?: number): ClassificationEvaluationMetrics.ConfusionMatrix.Row;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfusionMatrix.AsObject;
    static toObject(includeInstance: boolean, msg: ConfusionMatrix): ConfusionMatrix.AsObject;
    static serializeBinaryToWriter(message: ConfusionMatrix, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfusionMatrix;
    static deserializeBinaryFromReader(message: ConfusionMatrix, reader: jspb.BinaryReader): ConfusionMatrix;
  }

  export namespace ConfusionMatrix {
    export type AsObject = {
      annotationSpecIdList: Array<string>,
      rowList: Array<ClassificationEvaluationMetrics.ConfusionMatrix.Row.AsObject>,
    }

    export class Row extends jspb.Message {
      getExampleCountList(): Array<number>;
      setExampleCountList(value: Array<number>): Row;
      clearExampleCountList(): Row;
      addExampleCount(value: number, index?: number): Row;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Row.AsObject;
      static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
      static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Row;
      static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
    }

    export namespace Row {
      export type AsObject = {
        exampleCountList: Array<number>,
      }
    }

  }

}

export enum ClassificationType { 
  CLASSIFICATION_TYPE_UNSPECIFIED = 0,
  MULTICLASS = 1,
  MULTILABEL = 2,
}
