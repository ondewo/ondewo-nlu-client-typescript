import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';


export class UploadRef extends jspb.Message {
  getUploadUrl(): string;
  setUploadUrl(value: string): UploadRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadRef.AsObject;
  static toObject(includeInstance: boolean, msg: UploadRef): UploadRef.AsObject;
  static serializeBinaryToWriter(message: UploadRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadRef;
  static deserializeBinaryFromReader(message: UploadRef, reader: jspb.BinaryReader): UploadRef;
}

export namespace UploadRef {
  export type AsObject = {
    uploadUrl: string,
  }
}

export class PhotoId extends jspb.Message {
  getId(): string;
  setId(value: string): PhotoId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhotoId.AsObject;
  static toObject(includeInstance: boolean, msg: PhotoId): PhotoId.AsObject;
  static serializeBinaryToWriter(message: PhotoId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhotoId;
  static deserializeBinaryFromReader(message: PhotoId, reader: jspb.BinaryReader): PhotoId;
}

export namespace PhotoId {
  export type AsObject = {
    id: string,
  }
}

export class Level extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): Level;

  getName(): string;
  setName(value: string): Level;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Level.AsObject;
  static toObject(includeInstance: boolean, msg: Level): Level.AsObject;
  static serializeBinaryToWriter(message: Level, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Level;
  static deserializeBinaryFromReader(message: Level, reader: jspb.BinaryReader): Level;
}

export namespace Level {
  export type AsObject = {
    number: number,
    name: string,
  }
}

export class Pose extends jspb.Message {
  getLatLngPair(): google_type_latlng_pb.LatLng | undefined;
  setLatLngPair(value?: google_type_latlng_pb.LatLng): Pose;
  hasLatLngPair(): boolean;
  clearLatLngPair(): Pose;

  getAltitude(): number;
  setAltitude(value: number): Pose;

  getHeading(): number;
  setHeading(value: number): Pose;

  getPitch(): number;
  setPitch(value: number): Pose;

  getRoll(): number;
  setRoll(value: number): Pose;

  getLevel(): Level | undefined;
  setLevel(value?: Level): Pose;
  hasLevel(): boolean;
  clearLevel(): Pose;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pose.AsObject;
  static toObject(includeInstance: boolean, msg: Pose): Pose.AsObject;
  static serializeBinaryToWriter(message: Pose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pose;
  static deserializeBinaryFromReader(message: Pose, reader: jspb.BinaryReader): Pose;
}

export namespace Pose {
  export type AsObject = {
    latLngPair?: google_type_latlng_pb.LatLng.AsObject,
    altitude: number,
    heading: number,
    pitch: number,
    roll: number,
    level?: Level.AsObject,
  }
}

export class Place extends jspb.Message {
  getPlaceId(): string;
  setPlaceId(value: string): Place;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Place.AsObject;
  static toObject(includeInstance: boolean, msg: Place): Place.AsObject;
  static serializeBinaryToWriter(message: Place, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Place;
  static deserializeBinaryFromReader(message: Place, reader: jspb.BinaryReader): Place;
}

export namespace Place {
  export type AsObject = {
    placeId: string,
  }
}

export class Connection extends jspb.Message {
  getTarget(): PhotoId | undefined;
  setTarget(value?: PhotoId): Connection;
  hasTarget(): boolean;
  clearTarget(): Connection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connection.AsObject;
  static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
  static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connection;
  static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
}

export namespace Connection {
  export type AsObject = {
    target?: PhotoId.AsObject,
  }
}

export class Photo extends jspb.Message {
  getPhotoId(): PhotoId | undefined;
  setPhotoId(value?: PhotoId): Photo;
  hasPhotoId(): boolean;
  clearPhotoId(): Photo;

  getUploadReference(): UploadRef | undefined;
  setUploadReference(value?: UploadRef): Photo;
  hasUploadReference(): boolean;
  clearUploadReference(): Photo;

  getDownloadUrl(): string;
  setDownloadUrl(value: string): Photo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): Photo;

  getShareLink(): string;
  setShareLink(value: string): Photo;

  getPose(): Pose | undefined;
  setPose(value?: Pose): Photo;
  hasPose(): boolean;
  clearPose(): Photo;

  getConnectionsList(): Array<Connection>;
  setConnectionsList(value: Array<Connection>): Photo;
  clearConnectionsList(): Photo;
  addConnections(value?: Connection, index?: number): Connection;

  getCaptureTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCaptureTime(value?: google_protobuf_timestamp_pb.Timestamp): Photo;
  hasCaptureTime(): boolean;
  clearCaptureTime(): Photo;

  getPlacesList(): Array<Place>;
  setPlacesList(value: Array<Place>): Photo;
  clearPlacesList(): Photo;
  addPlaces(value?: Place, index?: number): Place;

  getViewCount(): number;
  setViewCount(value: number): Photo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Photo.AsObject;
  static toObject(includeInstance: boolean, msg: Photo): Photo.AsObject;
  static serializeBinaryToWriter(message: Photo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Photo;
  static deserializeBinaryFromReader(message: Photo, reader: jspb.BinaryReader): Photo;
}

export namespace Photo {
  export type AsObject = {
    photoId?: PhotoId.AsObject,
    uploadReference?: UploadRef.AsObject,
    downloadUrl: string,
    thumbnailUrl: string,
    shareLink: string,
    pose?: Pose.AsObject,
    connectionsList: Array<Connection.AsObject>,
    captureTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    placesList: Array<Place.AsObject>,
    viewCount: number,
  }
}

