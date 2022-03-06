import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_vision_v1p3beta1_geometry_pb from '../../../../google/cloud/vision/v1p3beta1/geometry_pb';
import * as google_cloud_vision_v1p3beta1_product_search_pb from '../../../../google/cloud/vision/v1p3beta1/product_search_pb';
import * as google_cloud_vision_v1p3beta1_text_annotation_pb from '../../../../google/cloud/vision/v1p3beta1/text_annotation_pb';
import * as google_cloud_vision_v1p3beta1_web_detection_pb from '../../../../google/cloud/vision/v1p3beta1/web_detection_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_type_color_pb from '../../../../google/type/color_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';


export class Feature extends jspb.Message {
  getType(): Feature.Type;
  setType(value: Feature.Type): Feature;

  getMaxResults(): number;
  setMaxResults(value: number): Feature;

  getModel(): string;
  setModel(value: string): Feature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feature.AsObject;
  static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
  static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feature;
  static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
  export type AsObject = {
    type: Feature.Type,
    maxResults: number,
    model: string,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    FACE_DETECTION = 1,
    LANDMARK_DETECTION = 2,
    LOGO_DETECTION = 3,
    LABEL_DETECTION = 4,
    TEXT_DETECTION = 5,
    DOCUMENT_TEXT_DETECTION = 11,
    SAFE_SEARCH_DETECTION = 6,
    IMAGE_PROPERTIES = 7,
    CROP_HINTS = 9,
    WEB_DETECTION = 10,
    PRODUCT_SEARCH = 12,
    OBJECT_LOCALIZATION = 19,
  }
}

export class ImageSource extends jspb.Message {
  getGcsImageUri(): string;
  setGcsImageUri(value: string): ImageSource;

  getImageUri(): string;
  setImageUri(value: string): ImageSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageSource.AsObject;
  static toObject(includeInstance: boolean, msg: ImageSource): ImageSource.AsObject;
  static serializeBinaryToWriter(message: ImageSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageSource;
  static deserializeBinaryFromReader(message: ImageSource, reader: jspb.BinaryReader): ImageSource;
}

export namespace ImageSource {
  export type AsObject = {
    gcsImageUri: string,
    imageUri: string,
  }
}

export class Image extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): Image;

  getSource(): ImageSource | undefined;
  setSource(value?: ImageSource): Image;
  hasSource(): boolean;
  clearSource(): Image;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    content: Uint8Array | string,
    source?: ImageSource.AsObject,
  }
}

export class FaceAnnotation extends jspb.Message {
  getBoundingPoly(): google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly): FaceAnnotation;
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): FaceAnnotation;

  getFdBoundingPoly(): google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly | undefined;
  setFdBoundingPoly(value?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly): FaceAnnotation;
  hasFdBoundingPoly(): boolean;
  clearFdBoundingPoly(): FaceAnnotation;

  getLandmarksList(): Array<FaceAnnotation.Landmark>;
  setLandmarksList(value: Array<FaceAnnotation.Landmark>): FaceAnnotation;
  clearLandmarksList(): FaceAnnotation;
  addLandmarks(value?: FaceAnnotation.Landmark, index?: number): FaceAnnotation.Landmark;

  getRollAngle(): number;
  setRollAngle(value: number): FaceAnnotation;

  getPanAngle(): number;
  setPanAngle(value: number): FaceAnnotation;

  getTiltAngle(): number;
  setTiltAngle(value: number): FaceAnnotation;

  getDetectionConfidence(): number;
  setDetectionConfidence(value: number): FaceAnnotation;

  getLandmarkingConfidence(): number;
  setLandmarkingConfidence(value: number): FaceAnnotation;

  getJoyLikelihood(): Likelihood;
  setJoyLikelihood(value: Likelihood): FaceAnnotation;

  getSorrowLikelihood(): Likelihood;
  setSorrowLikelihood(value: Likelihood): FaceAnnotation;

  getAngerLikelihood(): Likelihood;
  setAngerLikelihood(value: Likelihood): FaceAnnotation;

  getSurpriseLikelihood(): Likelihood;
  setSurpriseLikelihood(value: Likelihood): FaceAnnotation;

  getUnderExposedLikelihood(): Likelihood;
  setUnderExposedLikelihood(value: Likelihood): FaceAnnotation;

  getBlurredLikelihood(): Likelihood;
  setBlurredLikelihood(value: Likelihood): FaceAnnotation;

  getHeadwearLikelihood(): Likelihood;
  setHeadwearLikelihood(value: Likelihood): FaceAnnotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: FaceAnnotation): FaceAnnotation.AsObject;
  static serializeBinaryToWriter(message: FaceAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceAnnotation;
  static deserializeBinaryFromReader(message: FaceAnnotation, reader: jspb.BinaryReader): FaceAnnotation;
}

export namespace FaceAnnotation {
  export type AsObject = {
    boundingPoly?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly.AsObject,
    fdBoundingPoly?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly.AsObject,
    landmarksList: Array<FaceAnnotation.Landmark.AsObject>,
    rollAngle: number,
    panAngle: number,
    tiltAngle: number,
    detectionConfidence: number,
    landmarkingConfidence: number,
    joyLikelihood: Likelihood,
    sorrowLikelihood: Likelihood,
    angerLikelihood: Likelihood,
    surpriseLikelihood: Likelihood,
    underExposedLikelihood: Likelihood,
    blurredLikelihood: Likelihood,
    headwearLikelihood: Likelihood,
  }

  export class Landmark extends jspb.Message {
    getType(): FaceAnnotation.Landmark.Type;
    setType(value: FaceAnnotation.Landmark.Type): Landmark;

    getPosition(): google_cloud_vision_v1p3beta1_geometry_pb.Position | undefined;
    setPosition(value?: google_cloud_vision_v1p3beta1_geometry_pb.Position): Landmark;
    hasPosition(): boolean;
    clearPosition(): Landmark;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Landmark.AsObject;
    static toObject(includeInstance: boolean, msg: Landmark): Landmark.AsObject;
    static serializeBinaryToWriter(message: Landmark, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Landmark;
    static deserializeBinaryFromReader(message: Landmark, reader: jspb.BinaryReader): Landmark;
  }

  export namespace Landmark {
    export type AsObject = {
      type: FaceAnnotation.Landmark.Type,
      position?: google_cloud_vision_v1p3beta1_geometry_pb.Position.AsObject,
    }

    export enum Type { 
      UNKNOWN_LANDMARK = 0,
      LEFT_EYE = 1,
      RIGHT_EYE = 2,
      LEFT_OF_LEFT_EYEBROW = 3,
      RIGHT_OF_LEFT_EYEBROW = 4,
      LEFT_OF_RIGHT_EYEBROW = 5,
      RIGHT_OF_RIGHT_EYEBROW = 6,
      MIDPOINT_BETWEEN_EYES = 7,
      NOSE_TIP = 8,
      UPPER_LIP = 9,
      LOWER_LIP = 10,
      MOUTH_LEFT = 11,
      MOUTH_RIGHT = 12,
      MOUTH_CENTER = 13,
      NOSE_BOTTOM_RIGHT = 14,
      NOSE_BOTTOM_LEFT = 15,
      NOSE_BOTTOM_CENTER = 16,
      LEFT_EYE_TOP_BOUNDARY = 17,
      LEFT_EYE_RIGHT_CORNER = 18,
      LEFT_EYE_BOTTOM_BOUNDARY = 19,
      LEFT_EYE_LEFT_CORNER = 20,
      RIGHT_EYE_TOP_BOUNDARY = 21,
      RIGHT_EYE_RIGHT_CORNER = 22,
      RIGHT_EYE_BOTTOM_BOUNDARY = 23,
      RIGHT_EYE_LEFT_CORNER = 24,
      LEFT_EYEBROW_UPPER_MIDPOINT = 25,
      RIGHT_EYEBROW_UPPER_MIDPOINT = 26,
      LEFT_EAR_TRAGION = 27,
      RIGHT_EAR_TRAGION = 28,
      LEFT_EYE_PUPIL = 29,
      RIGHT_EYE_PUPIL = 30,
      FOREHEAD_GLABELLA = 31,
      CHIN_GNATHION = 32,
      CHIN_LEFT_GONION = 33,
      CHIN_RIGHT_GONION = 34,
    }
  }

}

export class LocationInfo extends jspb.Message {
  getLatLng(): google_type_latlng_pb.LatLng | undefined;
  setLatLng(value?: google_type_latlng_pb.LatLng): LocationInfo;
  hasLatLng(): boolean;
  clearLatLng(): LocationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LocationInfo): LocationInfo.AsObject;
  static serializeBinaryToWriter(message: LocationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationInfo;
  static deserializeBinaryFromReader(message: LocationInfo, reader: jspb.BinaryReader): LocationInfo;
}

export namespace LocationInfo {
  export type AsObject = {
    latLng?: google_type_latlng_pb.LatLng.AsObject,
  }
}

export class Property extends jspb.Message {
  getName(): string;
  setName(value: string): Property;

  getValue(): string;
  setValue(value: string): Property;

  getUint64Value(): number;
  setUint64Value(value: number): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    name: string,
    value: string,
    uint64Value: number,
  }
}

export class EntityAnnotation extends jspb.Message {
  getMid(): string;
  setMid(value: string): EntityAnnotation;

  getLocale(): string;
  setLocale(value: string): EntityAnnotation;

  getDescription(): string;
  setDescription(value: string): EntityAnnotation;

  getScore(): number;
  setScore(value: number): EntityAnnotation;

  getConfidence(): number;
  setConfidence(value: number): EntityAnnotation;

  getTopicality(): number;
  setTopicality(value: number): EntityAnnotation;

  getBoundingPoly(): google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly): EntityAnnotation;
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): EntityAnnotation;

  getLocationsList(): Array<LocationInfo>;
  setLocationsList(value: Array<LocationInfo>): EntityAnnotation;
  clearLocationsList(): EntityAnnotation;
  addLocations(value?: LocationInfo, index?: number): LocationInfo;

  getPropertiesList(): Array<Property>;
  setPropertiesList(value: Array<Property>): EntityAnnotation;
  clearPropertiesList(): EntityAnnotation;
  addProperties(value?: Property, index?: number): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: EntityAnnotation): EntityAnnotation.AsObject;
  static serializeBinaryToWriter(message: EntityAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityAnnotation;
  static deserializeBinaryFromReader(message: EntityAnnotation, reader: jspb.BinaryReader): EntityAnnotation;
}

export namespace EntityAnnotation {
  export type AsObject = {
    mid: string,
    locale: string,
    description: string,
    score: number,
    confidence: number,
    topicality: number,
    boundingPoly?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly.AsObject,
    locationsList: Array<LocationInfo.AsObject>,
    propertiesList: Array<Property.AsObject>,
  }
}

export class LocalizedObjectAnnotation extends jspb.Message {
  getMid(): string;
  setMid(value: string): LocalizedObjectAnnotation;

  getLanguageCode(): string;
  setLanguageCode(value: string): LocalizedObjectAnnotation;

  getName(): string;
  setName(value: string): LocalizedObjectAnnotation;

  getScore(): number;
  setScore(value: number): LocalizedObjectAnnotation;

  getBoundingPoly(): google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly): LocalizedObjectAnnotation;
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): LocalizedObjectAnnotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizedObjectAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizedObjectAnnotation): LocalizedObjectAnnotation.AsObject;
  static serializeBinaryToWriter(message: LocalizedObjectAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizedObjectAnnotation;
  static deserializeBinaryFromReader(message: LocalizedObjectAnnotation, reader: jspb.BinaryReader): LocalizedObjectAnnotation;
}

export namespace LocalizedObjectAnnotation {
  export type AsObject = {
    mid: string,
    languageCode: string,
    name: string,
    score: number,
    boundingPoly?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly.AsObject,
  }
}

export class SafeSearchAnnotation extends jspb.Message {
  getAdult(): Likelihood;
  setAdult(value: Likelihood): SafeSearchAnnotation;

  getSpoof(): Likelihood;
  setSpoof(value: Likelihood): SafeSearchAnnotation;

  getMedical(): Likelihood;
  setMedical(value: Likelihood): SafeSearchAnnotation;

  getViolence(): Likelihood;
  setViolence(value: Likelihood): SafeSearchAnnotation;

  getRacy(): Likelihood;
  setRacy(value: Likelihood): SafeSearchAnnotation;

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
    violence: Likelihood,
    racy: Likelihood,
  }
}

export class LatLongRect extends jspb.Message {
  getMinLatLng(): google_type_latlng_pb.LatLng | undefined;
  setMinLatLng(value?: google_type_latlng_pb.LatLng): LatLongRect;
  hasMinLatLng(): boolean;
  clearMinLatLng(): LatLongRect;

  getMaxLatLng(): google_type_latlng_pb.LatLng | undefined;
  setMaxLatLng(value?: google_type_latlng_pb.LatLng): LatLongRect;
  hasMaxLatLng(): boolean;
  clearMaxLatLng(): LatLongRect;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LatLongRect.AsObject;
  static toObject(includeInstance: boolean, msg: LatLongRect): LatLongRect.AsObject;
  static serializeBinaryToWriter(message: LatLongRect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LatLongRect;
  static deserializeBinaryFromReader(message: LatLongRect, reader: jspb.BinaryReader): LatLongRect;
}

export namespace LatLongRect {
  export type AsObject = {
    minLatLng?: google_type_latlng_pb.LatLng.AsObject,
    maxLatLng?: google_type_latlng_pb.LatLng.AsObject,
  }
}

export class ColorInfo extends jspb.Message {
  getColor(): google_type_color_pb.Color | undefined;
  setColor(value?: google_type_color_pb.Color): ColorInfo;
  hasColor(): boolean;
  clearColor(): ColorInfo;

  getScore(): number;
  setScore(value: number): ColorInfo;

  getPixelFraction(): number;
  setPixelFraction(value: number): ColorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ColorInfo): ColorInfo.AsObject;
  static serializeBinaryToWriter(message: ColorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorInfo;
  static deserializeBinaryFromReader(message: ColorInfo, reader: jspb.BinaryReader): ColorInfo;
}

export namespace ColorInfo {
  export type AsObject = {
    color?: google_type_color_pb.Color.AsObject,
    score: number,
    pixelFraction: number,
  }
}

export class DominantColorsAnnotation extends jspb.Message {
  getColorsList(): Array<ColorInfo>;
  setColorsList(value: Array<ColorInfo>): DominantColorsAnnotation;
  clearColorsList(): DominantColorsAnnotation;
  addColors(value?: ColorInfo, index?: number): ColorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DominantColorsAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: DominantColorsAnnotation): DominantColorsAnnotation.AsObject;
  static serializeBinaryToWriter(message: DominantColorsAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DominantColorsAnnotation;
  static deserializeBinaryFromReader(message: DominantColorsAnnotation, reader: jspb.BinaryReader): DominantColorsAnnotation;
}

export namespace DominantColorsAnnotation {
  export type AsObject = {
    colorsList: Array<ColorInfo.AsObject>,
  }
}

export class ImageProperties extends jspb.Message {
  getDominantColors(): DominantColorsAnnotation | undefined;
  setDominantColors(value?: DominantColorsAnnotation): ImageProperties;
  hasDominantColors(): boolean;
  clearDominantColors(): ImageProperties;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageProperties.AsObject;
  static toObject(includeInstance: boolean, msg: ImageProperties): ImageProperties.AsObject;
  static serializeBinaryToWriter(message: ImageProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageProperties;
  static deserializeBinaryFromReader(message: ImageProperties, reader: jspb.BinaryReader): ImageProperties;
}

export namespace ImageProperties {
  export type AsObject = {
    dominantColors?: DominantColorsAnnotation.AsObject,
  }
}

export class CropHint extends jspb.Message {
  getBoundingPoly(): google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly): CropHint;
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): CropHint;

  getConfidence(): number;
  setConfidence(value: number): CropHint;

  getImportanceFraction(): number;
  setImportanceFraction(value: number): CropHint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CropHint.AsObject;
  static toObject(includeInstance: boolean, msg: CropHint): CropHint.AsObject;
  static serializeBinaryToWriter(message: CropHint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CropHint;
  static deserializeBinaryFromReader(message: CropHint, reader: jspb.BinaryReader): CropHint;
}

export namespace CropHint {
  export type AsObject = {
    boundingPoly?: google_cloud_vision_v1p3beta1_geometry_pb.BoundingPoly.AsObject,
    confidence: number,
    importanceFraction: number,
  }
}

export class CropHintsAnnotation extends jspb.Message {
  getCropHintsList(): Array<CropHint>;
  setCropHintsList(value: Array<CropHint>): CropHintsAnnotation;
  clearCropHintsList(): CropHintsAnnotation;
  addCropHints(value?: CropHint, index?: number): CropHint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CropHintsAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: CropHintsAnnotation): CropHintsAnnotation.AsObject;
  static serializeBinaryToWriter(message: CropHintsAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CropHintsAnnotation;
  static deserializeBinaryFromReader(message: CropHintsAnnotation, reader: jspb.BinaryReader): CropHintsAnnotation;
}

export namespace CropHintsAnnotation {
  export type AsObject = {
    cropHintsList: Array<CropHint.AsObject>,
  }
}

export class CropHintsParams extends jspb.Message {
  getAspectRatiosList(): Array<number>;
  setAspectRatiosList(value: Array<number>): CropHintsParams;
  clearAspectRatiosList(): CropHintsParams;
  addAspectRatios(value: number, index?: number): CropHintsParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CropHintsParams.AsObject;
  static toObject(includeInstance: boolean, msg: CropHintsParams): CropHintsParams.AsObject;
  static serializeBinaryToWriter(message: CropHintsParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CropHintsParams;
  static deserializeBinaryFromReader(message: CropHintsParams, reader: jspb.BinaryReader): CropHintsParams;
}

export namespace CropHintsParams {
  export type AsObject = {
    aspectRatiosList: Array<number>,
  }
}

export class WebDetectionParams extends jspb.Message {
  getIncludeGeoResults(): boolean;
  setIncludeGeoResults(value: boolean): WebDetectionParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebDetectionParams.AsObject;
  static toObject(includeInstance: boolean, msg: WebDetectionParams): WebDetectionParams.AsObject;
  static serializeBinaryToWriter(message: WebDetectionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebDetectionParams;
  static deserializeBinaryFromReader(message: WebDetectionParams, reader: jspb.BinaryReader): WebDetectionParams;
}

export namespace WebDetectionParams {
  export type AsObject = {
    includeGeoResults: boolean,
  }
}

export class ImageContext extends jspb.Message {
  getLatLongRect(): LatLongRect | undefined;
  setLatLongRect(value?: LatLongRect): ImageContext;
  hasLatLongRect(): boolean;
  clearLatLongRect(): ImageContext;

  getLanguageHintsList(): Array<string>;
  setLanguageHintsList(value: Array<string>): ImageContext;
  clearLanguageHintsList(): ImageContext;
  addLanguageHints(value: string, index?: number): ImageContext;

  getCropHintsParams(): CropHintsParams | undefined;
  setCropHintsParams(value?: CropHintsParams): ImageContext;
  hasCropHintsParams(): boolean;
  clearCropHintsParams(): ImageContext;

  getProductSearchParams(): google_cloud_vision_v1p3beta1_product_search_pb.ProductSearchParams | undefined;
  setProductSearchParams(value?: google_cloud_vision_v1p3beta1_product_search_pb.ProductSearchParams): ImageContext;
  hasProductSearchParams(): boolean;
  clearProductSearchParams(): ImageContext;

  getWebDetectionParams(): WebDetectionParams | undefined;
  setWebDetectionParams(value?: WebDetectionParams): ImageContext;
  hasWebDetectionParams(): boolean;
  clearWebDetectionParams(): ImageContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageContext.AsObject;
  static toObject(includeInstance: boolean, msg: ImageContext): ImageContext.AsObject;
  static serializeBinaryToWriter(message: ImageContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageContext;
  static deserializeBinaryFromReader(message: ImageContext, reader: jspb.BinaryReader): ImageContext;
}

export namespace ImageContext {
  export type AsObject = {
    latLongRect?: LatLongRect.AsObject,
    languageHintsList: Array<string>,
    cropHintsParams?: CropHintsParams.AsObject,
    productSearchParams?: google_cloud_vision_v1p3beta1_product_search_pb.ProductSearchParams.AsObject,
    webDetectionParams?: WebDetectionParams.AsObject,
  }
}

export class AnnotateImageRequest extends jspb.Message {
  getImage(): Image | undefined;
  setImage(value?: Image): AnnotateImageRequest;
  hasImage(): boolean;
  clearImage(): AnnotateImageRequest;

  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): AnnotateImageRequest;
  clearFeaturesList(): AnnotateImageRequest;
  addFeatures(value?: Feature, index?: number): Feature;

  getImageContext(): ImageContext | undefined;
  setImageContext(value?: ImageContext): AnnotateImageRequest;
  hasImageContext(): boolean;
  clearImageContext(): AnnotateImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateImageRequest): AnnotateImageRequest.AsObject;
  static serializeBinaryToWriter(message: AnnotateImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateImageRequest;
  static deserializeBinaryFromReader(message: AnnotateImageRequest, reader: jspb.BinaryReader): AnnotateImageRequest;
}

export namespace AnnotateImageRequest {
  export type AsObject = {
    image?: Image.AsObject,
    featuresList: Array<Feature.AsObject>,
    imageContext?: ImageContext.AsObject,
  }
}

export class ImageAnnotationContext extends jspb.Message {
  getUri(): string;
  setUri(value: string): ImageAnnotationContext;

  getPageNumber(): number;
  setPageNumber(value: number): ImageAnnotationContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageAnnotationContext.AsObject;
  static toObject(includeInstance: boolean, msg: ImageAnnotationContext): ImageAnnotationContext.AsObject;
  static serializeBinaryToWriter(message: ImageAnnotationContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageAnnotationContext;
  static deserializeBinaryFromReader(message: ImageAnnotationContext, reader: jspb.BinaryReader): ImageAnnotationContext;
}

export namespace ImageAnnotationContext {
  export type AsObject = {
    uri: string,
    pageNumber: number,
  }
}

export class AnnotateImageResponse extends jspb.Message {
  getFaceAnnotationsList(): Array<FaceAnnotation>;
  setFaceAnnotationsList(value: Array<FaceAnnotation>): AnnotateImageResponse;
  clearFaceAnnotationsList(): AnnotateImageResponse;
  addFaceAnnotations(value?: FaceAnnotation, index?: number): FaceAnnotation;

  getLandmarkAnnotationsList(): Array<EntityAnnotation>;
  setLandmarkAnnotationsList(value: Array<EntityAnnotation>): AnnotateImageResponse;
  clearLandmarkAnnotationsList(): AnnotateImageResponse;
  addLandmarkAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  getLogoAnnotationsList(): Array<EntityAnnotation>;
  setLogoAnnotationsList(value: Array<EntityAnnotation>): AnnotateImageResponse;
  clearLogoAnnotationsList(): AnnotateImageResponse;
  addLogoAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  getLabelAnnotationsList(): Array<EntityAnnotation>;
  setLabelAnnotationsList(value: Array<EntityAnnotation>): AnnotateImageResponse;
  clearLabelAnnotationsList(): AnnotateImageResponse;
  addLabelAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  getLocalizedObjectAnnotationsList(): Array<LocalizedObjectAnnotation>;
  setLocalizedObjectAnnotationsList(value: Array<LocalizedObjectAnnotation>): AnnotateImageResponse;
  clearLocalizedObjectAnnotationsList(): AnnotateImageResponse;
  addLocalizedObjectAnnotations(value?: LocalizedObjectAnnotation, index?: number): LocalizedObjectAnnotation;

  getTextAnnotationsList(): Array<EntityAnnotation>;
  setTextAnnotationsList(value: Array<EntityAnnotation>): AnnotateImageResponse;
  clearTextAnnotationsList(): AnnotateImageResponse;
  addTextAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  getFullTextAnnotation(): google_cloud_vision_v1p3beta1_text_annotation_pb.TextAnnotation | undefined;
  setFullTextAnnotation(value?: google_cloud_vision_v1p3beta1_text_annotation_pb.TextAnnotation): AnnotateImageResponse;
  hasFullTextAnnotation(): boolean;
  clearFullTextAnnotation(): AnnotateImageResponse;

  getSafeSearchAnnotation(): SafeSearchAnnotation | undefined;
  setSafeSearchAnnotation(value?: SafeSearchAnnotation): AnnotateImageResponse;
  hasSafeSearchAnnotation(): boolean;
  clearSafeSearchAnnotation(): AnnotateImageResponse;

  getImagePropertiesAnnotation(): ImageProperties | undefined;
  setImagePropertiesAnnotation(value?: ImageProperties): AnnotateImageResponse;
  hasImagePropertiesAnnotation(): boolean;
  clearImagePropertiesAnnotation(): AnnotateImageResponse;

  getCropHintsAnnotation(): CropHintsAnnotation | undefined;
  setCropHintsAnnotation(value?: CropHintsAnnotation): AnnotateImageResponse;
  hasCropHintsAnnotation(): boolean;
  clearCropHintsAnnotation(): AnnotateImageResponse;

  getWebDetection(): google_cloud_vision_v1p3beta1_web_detection_pb.WebDetection | undefined;
  setWebDetection(value?: google_cloud_vision_v1p3beta1_web_detection_pb.WebDetection): AnnotateImageResponse;
  hasWebDetection(): boolean;
  clearWebDetection(): AnnotateImageResponse;

  getProductSearchResults(): google_cloud_vision_v1p3beta1_product_search_pb.ProductSearchResults | undefined;
  setProductSearchResults(value?: google_cloud_vision_v1p3beta1_product_search_pb.ProductSearchResults): AnnotateImageResponse;
  hasProductSearchResults(): boolean;
  clearProductSearchResults(): AnnotateImageResponse;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): AnnotateImageResponse;
  hasError(): boolean;
  clearError(): AnnotateImageResponse;

  getContext(): ImageAnnotationContext | undefined;
  setContext(value?: ImageAnnotationContext): AnnotateImageResponse;
  hasContext(): boolean;
  clearContext(): AnnotateImageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateImageResponse): AnnotateImageResponse.AsObject;
  static serializeBinaryToWriter(message: AnnotateImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateImageResponse;
  static deserializeBinaryFromReader(message: AnnotateImageResponse, reader: jspb.BinaryReader): AnnotateImageResponse;
}

export namespace AnnotateImageResponse {
  export type AsObject = {
    faceAnnotationsList: Array<FaceAnnotation.AsObject>,
    landmarkAnnotationsList: Array<EntityAnnotation.AsObject>,
    logoAnnotationsList: Array<EntityAnnotation.AsObject>,
    labelAnnotationsList: Array<EntityAnnotation.AsObject>,
    localizedObjectAnnotationsList: Array<LocalizedObjectAnnotation.AsObject>,
    textAnnotationsList: Array<EntityAnnotation.AsObject>,
    fullTextAnnotation?: google_cloud_vision_v1p3beta1_text_annotation_pb.TextAnnotation.AsObject,
    safeSearchAnnotation?: SafeSearchAnnotation.AsObject,
    imagePropertiesAnnotation?: ImageProperties.AsObject,
    cropHintsAnnotation?: CropHintsAnnotation.AsObject,
    webDetection?: google_cloud_vision_v1p3beta1_web_detection_pb.WebDetection.AsObject,
    productSearchResults?: google_cloud_vision_v1p3beta1_product_search_pb.ProductSearchResults.AsObject,
    error?: google_rpc_status_pb.Status.AsObject,
    context?: ImageAnnotationContext.AsObject,
  }
}

export class AnnotateFileResponse extends jspb.Message {
  getInputConfig(): InputConfig | undefined;
  setInputConfig(value?: InputConfig): AnnotateFileResponse;
  hasInputConfig(): boolean;
  clearInputConfig(): AnnotateFileResponse;

  getResponsesList(): Array<AnnotateImageResponse>;
  setResponsesList(value: Array<AnnotateImageResponse>): AnnotateFileResponse;
  clearResponsesList(): AnnotateFileResponse;
  addResponses(value?: AnnotateImageResponse, index?: number): AnnotateImageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateFileResponse): AnnotateFileResponse.AsObject;
  static serializeBinaryToWriter(message: AnnotateFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateFileResponse;
  static deserializeBinaryFromReader(message: AnnotateFileResponse, reader: jspb.BinaryReader): AnnotateFileResponse;
}

export namespace AnnotateFileResponse {
  export type AsObject = {
    inputConfig?: InputConfig.AsObject,
    responsesList: Array<AnnotateImageResponse.AsObject>,
  }
}

export class BatchAnnotateImagesRequest extends jspb.Message {
  getRequestsList(): Array<AnnotateImageRequest>;
  setRequestsList(value: Array<AnnotateImageRequest>): BatchAnnotateImagesRequest;
  clearRequestsList(): BatchAnnotateImagesRequest;
  addRequests(value?: AnnotateImageRequest, index?: number): AnnotateImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchAnnotateImagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchAnnotateImagesRequest): BatchAnnotateImagesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchAnnotateImagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchAnnotateImagesRequest;
  static deserializeBinaryFromReader(message: BatchAnnotateImagesRequest, reader: jspb.BinaryReader): BatchAnnotateImagesRequest;
}

export namespace BatchAnnotateImagesRequest {
  export type AsObject = {
    requestsList: Array<AnnotateImageRequest.AsObject>,
  }
}

export class BatchAnnotateImagesResponse extends jspb.Message {
  getResponsesList(): Array<AnnotateImageResponse>;
  setResponsesList(value: Array<AnnotateImageResponse>): BatchAnnotateImagesResponse;
  clearResponsesList(): BatchAnnotateImagesResponse;
  addResponses(value?: AnnotateImageResponse, index?: number): AnnotateImageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchAnnotateImagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchAnnotateImagesResponse): BatchAnnotateImagesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchAnnotateImagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchAnnotateImagesResponse;
  static deserializeBinaryFromReader(message: BatchAnnotateImagesResponse, reader: jspb.BinaryReader): BatchAnnotateImagesResponse;
}

export namespace BatchAnnotateImagesResponse {
  export type AsObject = {
    responsesList: Array<AnnotateImageResponse.AsObject>,
  }
}

export class AsyncAnnotateFileRequest extends jspb.Message {
  getInputConfig(): InputConfig | undefined;
  setInputConfig(value?: InputConfig): AsyncAnnotateFileRequest;
  hasInputConfig(): boolean;
  clearInputConfig(): AsyncAnnotateFileRequest;

  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): AsyncAnnotateFileRequest;
  clearFeaturesList(): AsyncAnnotateFileRequest;
  addFeatures(value?: Feature, index?: number): Feature;

  getImageContext(): ImageContext | undefined;
  setImageContext(value?: ImageContext): AsyncAnnotateFileRequest;
  hasImageContext(): boolean;
  clearImageContext(): AsyncAnnotateFileRequest;

  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): AsyncAnnotateFileRequest;
  hasOutputConfig(): boolean;
  clearOutputConfig(): AsyncAnnotateFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncAnnotateFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncAnnotateFileRequest): AsyncAnnotateFileRequest.AsObject;
  static serializeBinaryToWriter(message: AsyncAnnotateFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncAnnotateFileRequest;
  static deserializeBinaryFromReader(message: AsyncAnnotateFileRequest, reader: jspb.BinaryReader): AsyncAnnotateFileRequest;
}

export namespace AsyncAnnotateFileRequest {
  export type AsObject = {
    inputConfig?: InputConfig.AsObject,
    featuresList: Array<Feature.AsObject>,
    imageContext?: ImageContext.AsObject,
    outputConfig?: OutputConfig.AsObject,
  }
}

export class AsyncAnnotateFileResponse extends jspb.Message {
  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): AsyncAnnotateFileResponse;
  hasOutputConfig(): boolean;
  clearOutputConfig(): AsyncAnnotateFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncAnnotateFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncAnnotateFileResponse): AsyncAnnotateFileResponse.AsObject;
  static serializeBinaryToWriter(message: AsyncAnnotateFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncAnnotateFileResponse;
  static deserializeBinaryFromReader(message: AsyncAnnotateFileResponse, reader: jspb.BinaryReader): AsyncAnnotateFileResponse;
}

export namespace AsyncAnnotateFileResponse {
  export type AsObject = {
    outputConfig?: OutputConfig.AsObject,
  }
}

export class AsyncBatchAnnotateFilesRequest extends jspb.Message {
  getRequestsList(): Array<AsyncAnnotateFileRequest>;
  setRequestsList(value: Array<AsyncAnnotateFileRequest>): AsyncBatchAnnotateFilesRequest;
  clearRequestsList(): AsyncBatchAnnotateFilesRequest;
  addRequests(value?: AsyncAnnotateFileRequest, index?: number): AsyncAnnotateFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncBatchAnnotateFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncBatchAnnotateFilesRequest): AsyncBatchAnnotateFilesRequest.AsObject;
  static serializeBinaryToWriter(message: AsyncBatchAnnotateFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncBatchAnnotateFilesRequest;
  static deserializeBinaryFromReader(message: AsyncBatchAnnotateFilesRequest, reader: jspb.BinaryReader): AsyncBatchAnnotateFilesRequest;
}

export namespace AsyncBatchAnnotateFilesRequest {
  export type AsObject = {
    requestsList: Array<AsyncAnnotateFileRequest.AsObject>,
  }
}

export class AsyncBatchAnnotateFilesResponse extends jspb.Message {
  getResponsesList(): Array<AsyncAnnotateFileResponse>;
  setResponsesList(value: Array<AsyncAnnotateFileResponse>): AsyncBatchAnnotateFilesResponse;
  clearResponsesList(): AsyncBatchAnnotateFilesResponse;
  addResponses(value?: AsyncAnnotateFileResponse, index?: number): AsyncAnnotateFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncBatchAnnotateFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncBatchAnnotateFilesResponse): AsyncBatchAnnotateFilesResponse.AsObject;
  static serializeBinaryToWriter(message: AsyncBatchAnnotateFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncBatchAnnotateFilesResponse;
  static deserializeBinaryFromReader(message: AsyncBatchAnnotateFilesResponse, reader: jspb.BinaryReader): AsyncBatchAnnotateFilesResponse;
}

export namespace AsyncBatchAnnotateFilesResponse {
  export type AsObject = {
    responsesList: Array<AsyncAnnotateFileResponse.AsObject>,
  }
}

export class InputConfig extends jspb.Message {
  getGcsSource(): GcsSource | undefined;
  setGcsSource(value?: GcsSource): InputConfig;
  hasGcsSource(): boolean;
  clearGcsSource(): InputConfig;

  getMimeType(): string;
  setMimeType(value: string): InputConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InputConfig): InputConfig.AsObject;
  static serializeBinaryToWriter(message: InputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputConfig;
  static deserializeBinaryFromReader(message: InputConfig, reader: jspb.BinaryReader): InputConfig;
}

export namespace InputConfig {
  export type AsObject = {
    gcsSource?: GcsSource.AsObject,
    mimeType: string,
  }
}

export class OutputConfig extends jspb.Message {
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): OutputConfig;
  hasGcsDestination(): boolean;
  clearGcsDestination(): OutputConfig;

  getBatchSize(): number;
  setBatchSize(value: number): OutputConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OutputConfig): OutputConfig.AsObject;
  static serializeBinaryToWriter(message: OutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputConfig;
  static deserializeBinaryFromReader(message: OutputConfig, reader: jspb.BinaryReader): OutputConfig;
}

export namespace OutputConfig {
  export type AsObject = {
    gcsDestination?: GcsDestination.AsObject,
    batchSize: number,
  }
}

export class GcsSource extends jspb.Message {
  getUri(): string;
  setUri(value: string): GcsSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsSource.AsObject;
  static toObject(includeInstance: boolean, msg: GcsSource): GcsSource.AsObject;
  static serializeBinaryToWriter(message: GcsSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsSource;
  static deserializeBinaryFromReader(message: GcsSource, reader: jspb.BinaryReader): GcsSource;
}

export namespace GcsSource {
  export type AsObject = {
    uri: string,
  }
}

export class GcsDestination extends jspb.Message {
  getUri(): string;
  setUri(value: string): GcsDestination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsDestination.AsObject;
  static toObject(includeInstance: boolean, msg: GcsDestination): GcsDestination.AsObject;
  static serializeBinaryToWriter(message: GcsDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsDestination;
  static deserializeBinaryFromReader(message: GcsDestination, reader: jspb.BinaryReader): GcsDestination;
}

export namespace GcsDestination {
  export type AsObject = {
    uri: string,
  }
}

export class OperationMetadata extends jspb.Message {
  getState(): OperationMetadata.State;
  setState(value: OperationMetadata.State): OperationMetadata;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
  hasCreateTime(): boolean;
  clearCreateTime(): OperationMetadata;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
  hasUpdateTime(): boolean;
  clearUpdateTime(): OperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
  static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadata;
  static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
  export type AsObject = {
    state: OperationMetadata.State,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    CREATED = 1,
    RUNNING = 2,
    DONE = 3,
    CANCELLED = 4,
  }
}

export enum Likelihood { 
  UNKNOWN = 0,
  VERY_UNLIKELY = 1,
  UNLIKELY = 2,
  POSSIBLE = 3,
  LIKELY = 4,
  VERY_LIKELY = 5,
}
