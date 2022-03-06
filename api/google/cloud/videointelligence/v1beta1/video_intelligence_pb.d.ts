import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class AnnotateVideoRequest extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): AnnotateVideoRequest;

  getInputContent(): string;
  setInputContent(value: string): AnnotateVideoRequest;

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
    inputContent: string,
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

  getLabelDetectionMode(): LabelDetectionMode;
  setLabelDetectionMode(value: LabelDetectionMode): VideoContext;

  getStationaryCamera(): boolean;
  setStationaryCamera(value: boolean): VideoContext;

  getLabelDetectionModel(): string;
  setLabelDetectionModel(value: string): VideoContext;

  getFaceDetectionModel(): string;
  setFaceDetectionModel(value: string): VideoContext;

  getShotChangeDetectionModel(): string;
  setShotChangeDetectionModel(value: string): VideoContext;

  getSafeSearchDetectionModel(): string;
  setSafeSearchDetectionModel(value: string): VideoContext;

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
    labelDetectionMode: LabelDetectionMode,
    stationaryCamera: boolean,
    labelDetectionModel: string,
    faceDetectionModel: string,
    shotChangeDetectionModel: string,
    safeSearchDetectionModel: string,
  }
}

export class VideoSegment extends jspb.Message {
  getStartTimeOffset(): number;
  setStartTimeOffset(value: number): VideoSegment;

  getEndTimeOffset(): number;
  setEndTimeOffset(value: number): VideoSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoSegment.AsObject;
  static toObject(includeInstance: boolean, msg: VideoSegment): VideoSegment.AsObject;
  static serializeBinaryToWriter(message: VideoSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoSegment;
  static deserializeBinaryFromReader(message: VideoSegment, reader: jspb.BinaryReader): VideoSegment;
}

export namespace VideoSegment {
  export type AsObject = {
    startTimeOffset: number,
    endTimeOffset: number,
  }
}

export class LabelLocation extends jspb.Message {
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): LabelLocation;
  hasSegment(): boolean;
  clearSegment(): LabelLocation;

  getConfidence(): number;
  setConfidence(value: number): LabelLocation;

  getLevel(): LabelLevel;
  setLevel(value: LabelLevel): LabelLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelLocation.AsObject;
  static toObject(includeInstance: boolean, msg: LabelLocation): LabelLocation.AsObject;
  static serializeBinaryToWriter(message: LabelLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelLocation;
  static deserializeBinaryFromReader(message: LabelLocation, reader: jspb.BinaryReader): LabelLocation;
}

export namespace LabelLocation {
  export type AsObject = {
    segment?: VideoSegment.AsObject,
    confidence: number,
    level: LabelLevel,
  }
}

export class LabelAnnotation extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): LabelAnnotation;

  getLanguageCode(): string;
  setLanguageCode(value: string): LabelAnnotation;

  getLocationsList(): Array<LabelLocation>;
  setLocationsList(value: Array<LabelLocation>): LabelAnnotation;
  clearLocationsList(): LabelAnnotation;
  addLocations(value?: LabelLocation, index?: number): LabelLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: LabelAnnotation): LabelAnnotation.AsObject;
  static serializeBinaryToWriter(message: LabelAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelAnnotation;
  static deserializeBinaryFromReader(message: LabelAnnotation, reader: jspb.BinaryReader): LabelAnnotation;
}

export namespace LabelAnnotation {
  export type AsObject = {
    description: string,
    languageCode: string,
    locationsList: Array<LabelLocation.AsObject>,
  }
}

export class SafeSearchAnnotation extends jspb.Message {
  getAdult(): Likelihood;
  setAdult(value: Likelihood): SafeSearchAnnotation;

  getSpoof(): Likelihood;
  setSpoof(value: Likelihood): SafeSearchAnnotation;

  getMedical(): Likelihood;
  setMedical(value: Likelihood): SafeSearchAnnotation;

  getViolent(): Likelihood;
  setViolent(value: Likelihood): SafeSearchAnnotation;

  getRacy(): Likelihood;
  setRacy(value: Likelihood): SafeSearchAnnotation;

  getTimeOffset(): number;
  setTimeOffset(value: number): SafeSearchAnnotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SafeSearchAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: SafeSearchAnnotation): SafeSearchAnnotation.AsObject;
  static serializeBinaryToWriter(message: SafeSearchAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SafeSearchAnnotation;
  static deserializeBinaryFromReader(message: SafeSearchAnnotation, reader: jspb.BinaryReader): SafeSearchAnnotation;
}

export namespace SafeSearchAnnotation {
  export type AsObject = {
    adult: Likelihood,
    spoof: Likelihood,
    medical: Likelihood,
    violent: Likelihood,
    racy: Likelihood,
    timeOffset: number,
  }
}

export class BoundingBox extends jspb.Message {
  getLeft(): number;
  setLeft(value: number): BoundingBox;

  getRight(): number;
  setRight(value: number): BoundingBox;

  getBottom(): number;
  setBottom(value: number): BoundingBox;

  getTop(): number;
  setTop(value: number): BoundingBox;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingBox.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingBox): BoundingBox.AsObject;
  static serializeBinaryToWriter(message: BoundingBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingBox;
  static deserializeBinaryFromReader(message: BoundingBox, reader: jspb.BinaryReader): BoundingBox;
}

export namespace BoundingBox {
  export type AsObject = {
    left: number,
    right: number,
    bottom: number,
    top: number,
  }
}

export class FaceLocation extends jspb.Message {
  getBoundingBox(): BoundingBox | undefined;
  setBoundingBox(value?: BoundingBox): FaceLocation;
  hasBoundingBox(): boolean;
  clearBoundingBox(): FaceLocation;

  getTimeOffset(): number;
  setTimeOffset(value: number): FaceLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: FaceLocation): FaceLocation.AsObject;
  static serializeBinaryToWriter(message: FaceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceLocation;
  static deserializeBinaryFromReader(message: FaceLocation, reader: jspb.BinaryReader): FaceLocation;
}

export namespace FaceLocation {
  export type AsObject = {
    boundingBox?: BoundingBox.AsObject,
    timeOffset: number,
  }
}

export class FaceAnnotation extends jspb.Message {
  getThumbnail(): string;
  setThumbnail(value: string): FaceAnnotation;

  getSegmentsList(): Array<VideoSegment>;
  setSegmentsList(value: Array<VideoSegment>): FaceAnnotation;
  clearSegmentsList(): FaceAnnotation;
  addSegments(value?: VideoSegment, index?: number): VideoSegment;

  getLocationsList(): Array<FaceLocation>;
  setLocationsList(value: Array<FaceLocation>): FaceAnnotation;
  clearLocationsList(): FaceAnnotation;
  addLocations(value?: FaceLocation, index?: number): FaceLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: FaceAnnotation): FaceAnnotation.AsObject;
  static serializeBinaryToWriter(message: FaceAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceAnnotation;
  static deserializeBinaryFromReader(message: FaceAnnotation, reader: jspb.BinaryReader): FaceAnnotation;
}

export namespace FaceAnnotation {
  export type AsObject = {
    thumbnail: string,
    segmentsList: Array<VideoSegment.AsObject>,
    locationsList: Array<FaceLocation.AsObject>,
  }
}

export class VideoAnnotationResults extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): VideoAnnotationResults;

  getLabelAnnotationsList(): Array<LabelAnnotation>;
  setLabelAnnotationsList(value: Array<LabelAnnotation>): VideoAnnotationResults;
  clearLabelAnnotationsList(): VideoAnnotationResults;
  addLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  getFaceAnnotationsList(): Array<FaceAnnotation>;
  setFaceAnnotationsList(value: Array<FaceAnnotation>): VideoAnnotationResults;
  clearFaceAnnotationsList(): VideoAnnotationResults;
  addFaceAnnotations(value?: FaceAnnotation, index?: number): FaceAnnotation;

  getShotAnnotationsList(): Array<VideoSegment>;
  setShotAnnotationsList(value: Array<VideoSegment>): VideoAnnotationResults;
  clearShotAnnotationsList(): VideoAnnotationResults;
  addShotAnnotations(value?: VideoSegment, index?: number): VideoSegment;

  getSafeSearchAnnotationsList(): Array<SafeSearchAnnotation>;
  setSafeSearchAnnotationsList(value: Array<SafeSearchAnnotation>): VideoAnnotationResults;
  clearSafeSearchAnnotationsList(): VideoAnnotationResults;
  addSafeSearchAnnotations(value?: SafeSearchAnnotation, index?: number): SafeSearchAnnotation;

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
    labelAnnotationsList: Array<LabelAnnotation.AsObject>,
    faceAnnotationsList: Array<FaceAnnotation.AsObject>,
    shotAnnotationsList: Array<VideoSegment.AsObject>,
    safeSearchAnnotationsList: Array<SafeSearchAnnotation.AsObject>,
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
  FACE_DETECTION = 2,
  SHOT_CHANGE_DETECTION = 3,
  SAFE_SEARCH_DETECTION = 4,
}
export enum LabelLevel { 
  LABEL_LEVEL_UNSPECIFIED = 0,
  VIDEO_LEVEL = 1,
  SEGMENT_LEVEL = 2,
  SHOT_LEVEL = 3,
  FRAME_LEVEL = 4,
}
export enum LabelDetectionMode { 
  LABEL_DETECTION_MODE_UNSPECIFIED = 0,
  SHOT_MODE = 1,
  FRAME_MODE = 2,
  SHOT_AND_FRAME_MODE = 3,
}
export enum Likelihood { 
  UNKNOWN = 0,
  VERY_UNLIKELY = 1,
  UNLIKELY = 2,
  POSSIBLE = 3,
  LIKELY = 4,
  VERY_LIKELY = 5,
}
