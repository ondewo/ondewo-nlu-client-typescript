import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class AnnotateVideoRequest extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): AnnotateVideoRequest;

  getInputContent(): Uint8Array | string;
  getInputContent_asU8(): Uint8Array;
  getInputContent_asB64(): string;
  setInputContent(value: Uint8Array | string): AnnotateVideoRequest;

  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): AnnotateVideoRequest;
  clearFeaturesList(): AnnotateVideoRequest;
  addFeatures(value: Feature, index?: number): AnnotateVideoRequest;

  getVideoContext(): VideoContext | undefined;
  setVideoContext(value?: VideoContext): AnnotateVideoRequest;
  hasVideoContext(): boolean;
  clearVideoContext(): AnnotateVideoRequest;

  getOutputUri(): string;
  setOutputUri(value: string): AnnotateVideoRequest;

  getLocationId(): string;
  setLocationId(value: string): AnnotateVideoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoRequest): AnnotateVideoRequest.AsObject;
  static serializeBinaryToWriter(message: AnnotateVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoRequest;
  static deserializeBinaryFromReader(message: AnnotateVideoRequest, reader: jspb.BinaryReader): AnnotateVideoRequest;
}

export namespace AnnotateVideoRequest {
  export type AsObject = {
    inputUri: string,
    inputContent: Uint8Array | string,
    featuresList: Array<Feature>,
    videoContext?: VideoContext.AsObject,
    outputUri: string,
    locationId: string,
  }
}

export class VideoContext extends jspb.Message {
  getSegmentsList(): Array<VideoSegment>;
  setSegmentsList(value: Array<VideoSegment>): VideoContext;
  clearSegmentsList(): VideoContext;
  addSegments(value?: VideoSegment, index?: number): VideoSegment;

  getLabelDetectionConfig(): LabelDetectionConfig | undefined;
  setLabelDetectionConfig(value?: LabelDetectionConfig): VideoContext;
  hasLabelDetectionConfig(): boolean;
  clearLabelDetectionConfig(): VideoContext;

  getShotChangeDetectionConfig(): ShotChangeDetectionConfig | undefined;
  setShotChangeDetectionConfig(value?: ShotChangeDetectionConfig): VideoContext;
  hasShotChangeDetectionConfig(): boolean;
  clearShotChangeDetectionConfig(): VideoContext;

  getExplicitContentDetectionConfig(): ExplicitContentDetectionConfig | undefined;
  setExplicitContentDetectionConfig(value?: ExplicitContentDetectionConfig): VideoContext;
  hasExplicitContentDetectionConfig(): boolean;
  clearExplicitContentDetectionConfig(): VideoContext;

  getFaceDetectionConfig(): FaceDetectionConfig | undefined;
  setFaceDetectionConfig(value?: FaceDetectionConfig): VideoContext;
  hasFaceDetectionConfig(): boolean;
  clearFaceDetectionConfig(): VideoContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoContext.AsObject;
  static toObject(includeInstance: boolean, msg: VideoContext): VideoContext.AsObject;
  static serializeBinaryToWriter(message: VideoContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoContext;
  static deserializeBinaryFromReader(message: VideoContext, reader: jspb.BinaryReader): VideoContext;
}

export namespace VideoContext {
  export type AsObject = {
    segmentsList: Array<VideoSegment.AsObject>,
    labelDetectionConfig?: LabelDetectionConfig.AsObject,
    shotChangeDetectionConfig?: ShotChangeDetectionConfig.AsObject,
    explicitContentDetectionConfig?: ExplicitContentDetectionConfig.AsObject,
    faceDetectionConfig?: FaceDetectionConfig.AsObject,
  }
}

export class LabelDetectionConfig extends jspb.Message {
  getLabelDetectionMode(): LabelDetectionMode;
  setLabelDetectionMode(value: LabelDetectionMode): LabelDetectionConfig;

  getStationaryCamera(): boolean;
  setStationaryCamera(value: boolean): LabelDetectionConfig;

  getModel(): string;
  setModel(value: string): LabelDetectionConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LabelDetectionConfig): LabelDetectionConfig.AsObject;
  static serializeBinaryToWriter(message: LabelDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelDetectionConfig;
  static deserializeBinaryFromReader(message: LabelDetectionConfig, reader: jspb.BinaryReader): LabelDetectionConfig;
}

export namespace LabelDetectionConfig {
  export type AsObject = {
    labelDetectionMode: LabelDetectionMode,
    stationaryCamera: boolean,
    model: string,
  }
}

export class ShotChangeDetectionConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): ShotChangeDetectionConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShotChangeDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ShotChangeDetectionConfig): ShotChangeDetectionConfig.AsObject;
  static serializeBinaryToWriter(message: ShotChangeDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShotChangeDetectionConfig;
  static deserializeBinaryFromReader(message: ShotChangeDetectionConfig, reader: jspb.BinaryReader): ShotChangeDetectionConfig;
}

export namespace ShotChangeDetectionConfig {
  export type AsObject = {
    model: string,
  }
}

export class ExplicitContentDetectionConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): ExplicitContentDetectionConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentDetectionConfig): ExplicitContentDetectionConfig.AsObject;
  static serializeBinaryToWriter(message: ExplicitContentDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentDetectionConfig;
  static deserializeBinaryFromReader(message: ExplicitContentDetectionConfig, reader: jspb.BinaryReader): ExplicitContentDetectionConfig;
}

export namespace ExplicitContentDetectionConfig {
  export type AsObject = {
    model: string,
  }
}

export class FaceDetectionConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): FaceDetectionConfig;

  getIncludeBoundingBoxes(): boolean;
  setIncludeBoundingBoxes(value: boolean): FaceDetectionConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectionConfig): FaceDetectionConfig.AsObject;
  static serializeBinaryToWriter(message: FaceDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectionConfig;
  static deserializeBinaryFromReader(message: FaceDetectionConfig, reader: jspb.BinaryReader): FaceDetectionConfig;
}

export namespace FaceDetectionConfig {
  export type AsObject = {
    model: string,
    includeBoundingBoxes: boolean,
  }
}

export class VideoSegment extends jspb.Message {
  getStartTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setStartTimeOffset(value?: google_protobuf_duration_pb.Duration): VideoSegment;
  hasStartTimeOffset(): boolean;
  clearStartTimeOffset(): VideoSegment;

  getEndTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setEndTimeOffset(value?: google_protobuf_duration_pb.Duration): VideoSegment;
  hasEndTimeOffset(): boolean;
  clearEndTimeOffset(): VideoSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoSegment.AsObject;
  static toObject(includeInstance: boolean, msg: VideoSegment): VideoSegment.AsObject;
  static serializeBinaryToWriter(message: VideoSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoSegment;
  static deserializeBinaryFromReader(message: VideoSegment, reader: jspb.BinaryReader): VideoSegment;
}

export namespace VideoSegment {
  export type AsObject = {
    startTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    endTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class LabelSegment extends jspb.Message {
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): LabelSegment;
  hasSegment(): boolean;
  clearSegment(): LabelSegment;

  getConfidence(): number;
  setConfidence(value: number): LabelSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelSegment.AsObject;
  static toObject(includeInstance: boolean, msg: LabelSegment): LabelSegment.AsObject;
  static serializeBinaryToWriter(message: LabelSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelSegment;
  static deserializeBinaryFromReader(message: LabelSegment, reader: jspb.BinaryReader): LabelSegment;
}

export namespace LabelSegment {
  export type AsObject = {
    segment?: VideoSegment.AsObject,
    confidence: number,
  }
}

export class LabelFrame extends jspb.Message {
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): LabelFrame;
  hasTimeOffset(): boolean;
  clearTimeOffset(): LabelFrame;

  getConfidence(): number;
  setConfidence(value: number): LabelFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelFrame.AsObject;
  static toObject(includeInstance: boolean, msg: LabelFrame): LabelFrame.AsObject;
  static serializeBinaryToWriter(message: LabelFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelFrame;
  static deserializeBinaryFromReader(message: LabelFrame, reader: jspb.BinaryReader): LabelFrame;
}

export namespace LabelFrame {
  export type AsObject = {
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    confidence: number,
  }
}

export class Entity extends jspb.Message {
  getEntityId(): string;
  setEntityId(value: string): Entity;

  getDescription(): string;
  setDescription(value: string): Entity;

  getLanguageCode(): string;
  setLanguageCode(value: string): Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    entityId: string,
    description: string,
    languageCode: string,
  }
}

export class LabelAnnotation extends jspb.Message {
  getEntity(): Entity | undefined;
  setEntity(value?: Entity): LabelAnnotation;
  hasEntity(): boolean;
  clearEntity(): LabelAnnotation;

  getCategoryEntitiesList(): Array<Entity>;
  setCategoryEntitiesList(value: Array<Entity>): LabelAnnotation;
  clearCategoryEntitiesList(): LabelAnnotation;
  addCategoryEntities(value?: Entity, index?: number): Entity;

  getSegmentsList(): Array<LabelSegment>;
  setSegmentsList(value: Array<LabelSegment>): LabelAnnotation;
  clearSegmentsList(): LabelAnnotation;
  addSegments(value?: LabelSegment, index?: number): LabelSegment;

  getFramesList(): Array<LabelFrame>;
  setFramesList(value: Array<LabelFrame>): LabelAnnotation;
  clearFramesList(): LabelAnnotation;
  addFrames(value?: LabelFrame, index?: number): LabelFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: LabelAnnotation): LabelAnnotation.AsObject;
  static serializeBinaryToWriter(message: LabelAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelAnnotation;
  static deserializeBinaryFromReader(message: LabelAnnotation, reader: jspb.BinaryReader): LabelAnnotation;
}

export namespace LabelAnnotation {
  export type AsObject = {
    entity?: Entity.AsObject,
    categoryEntitiesList: Array<Entity.AsObject>,
    segmentsList: Array<LabelSegment.AsObject>,
    framesList: Array<LabelFrame.AsObject>,
  }
}

export class ExplicitContentFrame extends jspb.Message {
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): ExplicitContentFrame;
  hasTimeOffset(): boolean;
  clearTimeOffset(): ExplicitContentFrame;

  getPornographyLikelihood(): Likelihood;
  setPornographyLikelihood(value: Likelihood): ExplicitContentFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentFrame.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentFrame): ExplicitContentFrame.AsObject;
  static serializeBinaryToWriter(message: ExplicitContentFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentFrame;
  static deserializeBinaryFromReader(message: ExplicitContentFrame, reader: jspb.BinaryReader): ExplicitContentFrame;
}

export namespace ExplicitContentFrame {
  export type AsObject = {
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    pornographyLikelihood: Likelihood,
  }
}

export class ExplicitContentAnnotation extends jspb.Message {
  getFramesList(): Array<ExplicitContentFrame>;
  setFramesList(value: Array<ExplicitContentFrame>): ExplicitContentAnnotation;
  clearFramesList(): ExplicitContentAnnotation;
  addFrames(value?: ExplicitContentFrame, index?: number): ExplicitContentFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentAnnotation): ExplicitContentAnnotation.AsObject;
  static serializeBinaryToWriter(message: ExplicitContentAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentAnnotation;
  static deserializeBinaryFromReader(message: ExplicitContentAnnotation, reader: jspb.BinaryReader): ExplicitContentAnnotation;
}

export namespace ExplicitContentAnnotation {
  export type AsObject = {
    framesList: Array<ExplicitContentFrame.AsObject>,
  }
}

export class NormalizedBoundingBox extends jspb.Message {
  getLeft(): number;
  setLeft(value: number): NormalizedBoundingBox;

  getTop(): number;
  setTop(value: number): NormalizedBoundingBox;

  getRight(): number;
  setRight(value: number): NormalizedBoundingBox;

  getBottom(): number;
  setBottom(value: number): NormalizedBoundingBox;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizedBoundingBox.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizedBoundingBox): NormalizedBoundingBox.AsObject;
  static serializeBinaryToWriter(message: NormalizedBoundingBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizedBoundingBox;
  static deserializeBinaryFromReader(message: NormalizedBoundingBox, reader: jspb.BinaryReader): NormalizedBoundingBox;
}

export namespace NormalizedBoundingBox {
  export type AsObject = {
    left: number,
    top: number,
    right: number,
    bottom: number,
  }
}

export class FaceSegment extends jspb.Message {
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): FaceSegment;
  hasSegment(): boolean;
  clearSegment(): FaceSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceSegment.AsObject;
  static toObject(includeInstance: boolean, msg: FaceSegment): FaceSegment.AsObject;
  static serializeBinaryToWriter(message: FaceSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceSegment;
  static deserializeBinaryFromReader(message: FaceSegment, reader: jspb.BinaryReader): FaceSegment;
}

export namespace FaceSegment {
  export type AsObject = {
    segment?: VideoSegment.AsObject,
  }
}

export class FaceFrame extends jspb.Message {
  getNormalizedBoundingBoxesList(): Array<NormalizedBoundingBox>;
  setNormalizedBoundingBoxesList(value: Array<NormalizedBoundingBox>): FaceFrame;
  clearNormalizedBoundingBoxesList(): FaceFrame;
  addNormalizedBoundingBoxes(value?: NormalizedBoundingBox, index?: number): NormalizedBoundingBox;

  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): FaceFrame;
  hasTimeOffset(): boolean;
  clearTimeOffset(): FaceFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceFrame.AsObject;
  static toObject(includeInstance: boolean, msg: FaceFrame): FaceFrame.AsObject;
  static serializeBinaryToWriter(message: FaceFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceFrame;
  static deserializeBinaryFromReader(message: FaceFrame, reader: jspb.BinaryReader): FaceFrame;
}

export namespace FaceFrame {
  export type AsObject = {
    normalizedBoundingBoxesList: Array<NormalizedBoundingBox.AsObject>,
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class FaceAnnotation extends jspb.Message {
  getThumbnail(): Uint8Array | string;
  getThumbnail_asU8(): Uint8Array;
  getThumbnail_asB64(): string;
  setThumbnail(value: Uint8Array | string): FaceAnnotation;

  getSegmentsList(): Array<FaceSegment>;
  setSegmentsList(value: Array<FaceSegment>): FaceAnnotation;
  clearSegmentsList(): FaceAnnotation;
  addSegments(value?: FaceSegment, index?: number): FaceSegment;

  getFramesList(): Array<FaceFrame>;
  setFramesList(value: Array<FaceFrame>): FaceAnnotation;
  clearFramesList(): FaceAnnotation;
  addFrames(value?: FaceFrame, index?: number): FaceFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: FaceAnnotation): FaceAnnotation.AsObject;
  static serializeBinaryToWriter(message: FaceAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceAnnotation;
  static deserializeBinaryFromReader(message: FaceAnnotation, reader: jspb.BinaryReader): FaceAnnotation;
}

export namespace FaceAnnotation {
  export type AsObject = {
    thumbnail: Uint8Array | string,
    segmentsList: Array<FaceSegment.AsObject>,
    framesList: Array<FaceFrame.AsObject>,
  }
}

export class VideoAnnotationResults extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): VideoAnnotationResults;

  getSegmentLabelAnnotationsList(): Array<LabelAnnotation>;
  setSegmentLabelAnnotationsList(value: Array<LabelAnnotation>): VideoAnnotationResults;
  clearSegmentLabelAnnotationsList(): VideoAnnotationResults;
  addSegmentLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  getShotLabelAnnotationsList(): Array<LabelAnnotation>;
  setShotLabelAnnotationsList(value: Array<LabelAnnotation>): VideoAnnotationResults;
  clearShotLabelAnnotationsList(): VideoAnnotationResults;
  addShotLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  getFrameLabelAnnotationsList(): Array<LabelAnnotation>;
  setFrameLabelAnnotationsList(value: Array<LabelAnnotation>): VideoAnnotationResults;
  clearFrameLabelAnnotationsList(): VideoAnnotationResults;
  addFrameLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  getFaceAnnotationsList(): Array<FaceAnnotation>;
  setFaceAnnotationsList(value: Array<FaceAnnotation>): VideoAnnotationResults;
  clearFaceAnnotationsList(): VideoAnnotationResults;
  addFaceAnnotations(value?: FaceAnnotation, index?: number): FaceAnnotation;

  getShotAnnotationsList(): Array<VideoSegment>;
  setShotAnnotationsList(value: Array<VideoSegment>): VideoAnnotationResults;
  clearShotAnnotationsList(): VideoAnnotationResults;
  addShotAnnotations(value?: VideoSegment, index?: number): VideoSegment;

  getExplicitAnnotation(): ExplicitContentAnnotation | undefined;
  setExplicitAnnotation(value?: ExplicitContentAnnotation): VideoAnnotationResults;
  hasExplicitAnnotation(): boolean;
  clearExplicitAnnotation(): VideoAnnotationResults;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): VideoAnnotationResults;
  hasError(): boolean;
  clearError(): VideoAnnotationResults;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAnnotationResults.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAnnotationResults): VideoAnnotationResults.AsObject;
  static serializeBinaryToWriter(message: VideoAnnotationResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAnnotationResults;
  static deserializeBinaryFromReader(message: VideoAnnotationResults, reader: jspb.BinaryReader): VideoAnnotationResults;
}

export namespace VideoAnnotationResults {
  export type AsObject = {
    inputUri: string,
    segmentLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    shotLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    frameLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    faceAnnotationsList: Array<FaceAnnotation.AsObject>,
    shotAnnotationsList: Array<VideoSegment.AsObject>,
    explicitAnnotation?: ExplicitContentAnnotation.AsObject,
    error?: google_rpc_status_pb.Status.AsObject,
  }
}

export class AnnotateVideoResponse extends jspb.Message {
  getAnnotationResultsList(): Array<VideoAnnotationResults>;
  setAnnotationResultsList(value: Array<VideoAnnotationResults>): AnnotateVideoResponse;
  clearAnnotationResultsList(): AnnotateVideoResponse;
  addAnnotationResults(value?: VideoAnnotationResults, index?: number): VideoAnnotationResults;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoResponse): AnnotateVideoResponse.AsObject;
  static serializeBinaryToWriter(message: AnnotateVideoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoResponse;
  static deserializeBinaryFromReader(message: AnnotateVideoResponse, reader: jspb.BinaryReader): AnnotateVideoResponse;
}

export namespace AnnotateVideoResponse {
  export type AsObject = {
    annotationResultsList: Array<VideoAnnotationResults.AsObject>,
  }
}

export class VideoAnnotationProgress extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): VideoAnnotationProgress;

  getProgressPercent(): number;
  setProgressPercent(value: number): VideoAnnotationProgress;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): VideoAnnotationProgress;
  hasStartTime(): boolean;
  clearStartTime(): VideoAnnotationProgress;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): VideoAnnotationProgress;
  hasUpdateTime(): boolean;
  clearUpdateTime(): VideoAnnotationProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAnnotationProgress.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAnnotationProgress): VideoAnnotationProgress.AsObject;
  static serializeBinaryToWriter(message: VideoAnnotationProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAnnotationProgress;
  static deserializeBinaryFromReader(message: VideoAnnotationProgress, reader: jspb.BinaryReader): VideoAnnotationProgress;
}

export namespace VideoAnnotationProgress {
  export type AsObject = {
    inputUri: string,
    progressPercent: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AnnotateVideoProgress extends jspb.Message {
  getAnnotationProgressList(): Array<VideoAnnotationProgress>;
  setAnnotationProgressList(value: Array<VideoAnnotationProgress>): AnnotateVideoProgress;
  clearAnnotationProgressList(): AnnotateVideoProgress;
  addAnnotationProgress(value?: VideoAnnotationProgress, index?: number): VideoAnnotationProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoProgress.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoProgress): AnnotateVideoProgress.AsObject;
  static serializeBinaryToWriter(message: AnnotateVideoProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoProgress;
  static deserializeBinaryFromReader(message: AnnotateVideoProgress, reader: jspb.BinaryReader): AnnotateVideoProgress;
}

export namespace AnnotateVideoProgress {
  export type AsObject = {
    annotationProgressList: Array<VideoAnnotationProgress.AsObject>,
  }
}

export enum Feature { 
  FEATURE_UNSPECIFIED = 0,
  LABEL_DETECTION = 1,
  SHOT_CHANGE_DETECTION = 2,
  EXPLICIT_CONTENT_DETECTION = 3,
  FACE_DETECTION = 4,
}
export enum LabelDetectionMode { 
  LABEL_DETECTION_MODE_UNSPECIFIED = 0,
  SHOT_MODE = 1,
  FRAME_MODE = 2,
  SHOT_AND_FRAME_MODE = 3,
}
export enum Likelihood { 
  LIKELIHOOD_UNSPECIFIED = 0,
  VERY_UNLIKELY = 1,
  UNLIKELY = 2,
  POSSIBLE = 3,
  LIKELY = 4,
  VERY_LIKELY = 5,
}
