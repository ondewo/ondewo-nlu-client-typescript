import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_io_pb from '../../../../google/cloud/automl/v1beta1/io_pb';


export class Image extends jspb.Message {
  getImageBytes(): Uint8Array | string;
  getImageBytes_asU8(): Uint8Array;
  getImageBytes_asB64(): string;
  setImageBytes(value: Uint8Array | string): Image;

  getInputConfig(): google_cloud_automl_v1beta1_io_pb.InputConfig | undefined;
  setInputConfig(value?: google_cloud_automl_v1beta1_io_pb.InputConfig): Image;
  hasInputConfig(): boolean;
  clearInputConfig(): Image;

  getThumbnailUri(): string;
  setThumbnailUri(value: string): Image;

  getDataCase(): Image.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    imageBytes: Uint8Array | string,
    inputConfig?: google_cloud_automl_v1beta1_io_pb.InputConfig.AsObject,
    thumbnailUri: string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    IMAGE_BYTES = 1,
    INPUT_CONFIG = 6,
  }
}

export class TextSnippet extends jspb.Message {
  getContent(): string;
  setContent(value: string): TextSnippet;

  getMimeType(): string;
  setMimeType(value: string): TextSnippet;

  getContentUri(): string;
  setContentUri(value: string): TextSnippet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSnippet.AsObject;
  static toObject(includeInstance: boolean, msg: TextSnippet): TextSnippet.AsObject;
  static serializeBinaryToWriter(message: TextSnippet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSnippet;
  static deserializeBinaryFromReader(message: TextSnippet, reader: jspb.BinaryReader): TextSnippet;
}

export namespace TextSnippet {
  export type AsObject = {
    content: string,
    mimeType: string,
    contentUri: string,
  }
}

export class ExamplePayload extends jspb.Message {
  getImage(): Image | undefined;
  setImage(value?: Image): ExamplePayload;
  hasImage(): boolean;
  clearImage(): ExamplePayload;

  getTextSnippet(): TextSnippet | undefined;
  setTextSnippet(value?: TextSnippet): ExamplePayload;
  hasTextSnippet(): boolean;
  clearTextSnippet(): ExamplePayload;

  getPayloadCase(): ExamplePayload.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExamplePayload.AsObject;
  static toObject(includeInstance: boolean, msg: ExamplePayload): ExamplePayload.AsObject;
  static serializeBinaryToWriter(message: ExamplePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExamplePayload;
  static deserializeBinaryFromReader(message: ExamplePayload, reader: jspb.BinaryReader): ExamplePayload;
}

export namespace ExamplePayload {
  export type AsObject = {
    image?: Image.AsObject,
    textSnippet?: TextSnippet.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    IMAGE = 1,
    TEXT_SNIPPET = 2,
  }
}

