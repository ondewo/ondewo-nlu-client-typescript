import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class WebDetection extends jspb.Message {
  getWebEntitiesList(): Array<WebDetection.WebEntity>;
  setWebEntitiesList(value: Array<WebDetection.WebEntity>): WebDetection;
  clearWebEntitiesList(): WebDetection;
  addWebEntities(value?: WebDetection.WebEntity, index?: number): WebDetection.WebEntity;

  getFullMatchingImagesList(): Array<WebDetection.WebImage>;
  setFullMatchingImagesList(value: Array<WebDetection.WebImage>): WebDetection;
  clearFullMatchingImagesList(): WebDetection;
  addFullMatchingImages(value?: WebDetection.WebImage, index?: number): WebDetection.WebImage;

  getPartialMatchingImagesList(): Array<WebDetection.WebImage>;
  setPartialMatchingImagesList(value: Array<WebDetection.WebImage>): WebDetection;
  clearPartialMatchingImagesList(): WebDetection;
  addPartialMatchingImages(value?: WebDetection.WebImage, index?: number): WebDetection.WebImage;

  getPagesWithMatchingImagesList(): Array<WebDetection.WebPage>;
  setPagesWithMatchingImagesList(value: Array<WebDetection.WebPage>): WebDetection;
  clearPagesWithMatchingImagesList(): WebDetection;
  addPagesWithMatchingImages(value?: WebDetection.WebPage, index?: number): WebDetection.WebPage;

  getVisuallySimilarImagesList(): Array<WebDetection.WebImage>;
  setVisuallySimilarImagesList(value: Array<WebDetection.WebImage>): WebDetection;
  clearVisuallySimilarImagesList(): WebDetection;
  addVisuallySimilarImages(value?: WebDetection.WebImage, index?: number): WebDetection.WebImage;

  getBestGuessLabelsList(): Array<WebDetection.WebLabel>;
  setBestGuessLabelsList(value: Array<WebDetection.WebLabel>): WebDetection;
  clearBestGuessLabelsList(): WebDetection;
  addBestGuessLabels(value?: WebDetection.WebLabel, index?: number): WebDetection.WebLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebDetection.AsObject;
  static toObject(includeInstance: boolean, msg: WebDetection): WebDetection.AsObject;
  static serializeBinaryToWriter(message: WebDetection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebDetection;
  static deserializeBinaryFromReader(message: WebDetection, reader: jspb.BinaryReader): WebDetection;
}

export namespace WebDetection {
  export type AsObject = {
    webEntitiesList: Array<WebDetection.WebEntity.AsObject>,
    fullMatchingImagesList: Array<WebDetection.WebImage.AsObject>,
    partialMatchingImagesList: Array<WebDetection.WebImage.AsObject>,
    pagesWithMatchingImagesList: Array<WebDetection.WebPage.AsObject>,
    visuallySimilarImagesList: Array<WebDetection.WebImage.AsObject>,
    bestGuessLabelsList: Array<WebDetection.WebLabel.AsObject>,
  }

  export class WebEntity extends jspb.Message {
    getEntityId(): string;
    setEntityId(value: string): WebEntity;

    getScore(): number;
    setScore(value: number): WebEntity;

    getDescription(): string;
    setDescription(value: string): WebEntity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebEntity.AsObject;
    static toObject(includeInstance: boolean, msg: WebEntity): WebEntity.AsObject;
    static serializeBinaryToWriter(message: WebEntity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebEntity;
    static deserializeBinaryFromReader(message: WebEntity, reader: jspb.BinaryReader): WebEntity;
  }

  export namespace WebEntity {
    export type AsObject = {
      entityId: string,
      score: number,
      description: string,
    }
  }


  export class WebImage extends jspb.Message {
    getUrl(): string;
    setUrl(value: string): WebImage;

    getScore(): number;
    setScore(value: number): WebImage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebImage.AsObject;
    static toObject(includeInstance: boolean, msg: WebImage): WebImage.AsObject;
    static serializeBinaryToWriter(message: WebImage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebImage;
    static deserializeBinaryFromReader(message: WebImage, reader: jspb.BinaryReader): WebImage;
  }

  export namespace WebImage {
    export type AsObject = {
      url: string,
      score: number,
    }
  }


  export class WebPage extends jspb.Message {
    getUrl(): string;
    setUrl(value: string): WebPage;

    getScore(): number;
    setScore(value: number): WebPage;

    getPageTitle(): string;
    setPageTitle(value: string): WebPage;

    getFullMatchingImagesList(): Array<WebDetection.WebImage>;
    setFullMatchingImagesList(value: Array<WebDetection.WebImage>): WebPage;
    clearFullMatchingImagesList(): WebPage;
    addFullMatchingImages(value?: WebDetection.WebImage, index?: number): WebDetection.WebImage;

    getPartialMatchingImagesList(): Array<WebDetection.WebImage>;
    setPartialMatchingImagesList(value: Array<WebDetection.WebImage>): WebPage;
    clearPartialMatchingImagesList(): WebPage;
    addPartialMatchingImages(value?: WebDetection.WebImage, index?: number): WebDetection.WebImage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebPage.AsObject;
    static toObject(includeInstance: boolean, msg: WebPage): WebPage.AsObject;
    static serializeBinaryToWriter(message: WebPage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebPage;
    static deserializeBinaryFromReader(message: WebPage, reader: jspb.BinaryReader): WebPage;
  }

  export namespace WebPage {
    export type AsObject = {
      url: string,
      score: number,
      pageTitle: string,
      fullMatchingImagesList: Array<WebDetection.WebImage.AsObject>,
      partialMatchingImagesList: Array<WebDetection.WebImage.AsObject>,
    }
  }


  export class WebLabel extends jspb.Message {
    getLabel(): string;
    setLabel(value: string): WebLabel;

    getLanguageCode(): string;
    setLanguageCode(value: string): WebLabel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebLabel.AsObject;
    static toObject(includeInstance: boolean, msg: WebLabel): WebLabel.AsObject;
    static serializeBinaryToWriter(message: WebLabel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebLabel;
    static deserializeBinaryFromReader(message: WebLabel, reader: jspb.BinaryReader): WebLabel;
  }

  export namespace WebLabel {
    export type AsObject = {
      label: string,
      languageCode: string,
    }
  }

}

