import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Request extends jspb.Message {
  getTarget(): string;
  setTarget(value: string): Request;

  getResumeMarker(): Uint8Array | string;
  getResumeMarker_asU8(): Uint8Array;
  getResumeMarker_asB64(): string;
  setResumeMarker(value: Uint8Array | string): Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    target: string,
    resumeMarker: Uint8Array | string,
  }
}

export class ChangeBatch extends jspb.Message {
  getChangesList(): Array<Change>;
  setChangesList(value: Array<Change>): ChangeBatch;
  clearChangesList(): ChangeBatch;
  addChanges(value?: Change, index?: number): Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeBatch.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeBatch): ChangeBatch.AsObject;
  static serializeBinaryToWriter(message: ChangeBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeBatch;
  static deserializeBinaryFromReader(message: ChangeBatch, reader: jspb.BinaryReader): ChangeBatch;
}

export namespace ChangeBatch {
  export type AsObject = {
    changesList: Array<Change.AsObject>,
  }
}

export class Change extends jspb.Message {
  getElement(): string;
  setElement(value: string): Change;

  getState(): Change.State;
  setState(value: Change.State): Change;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): Change;
  hasData(): boolean;
  clearData(): Change;

  getResumeMarker(): Uint8Array | string;
  getResumeMarker_asU8(): Uint8Array;
  getResumeMarker_asB64(): string;
  setResumeMarker(value: Uint8Array | string): Change;

  getContinued(): boolean;
  setContinued(value: boolean): Change;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Change.AsObject;
  static toObject(includeInstance: boolean, msg: Change): Change.AsObject;
  static serializeBinaryToWriter(message: Change, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Change;
  static deserializeBinaryFromReader(message: Change, reader: jspb.BinaryReader): Change;
}

export namespace Change {
  export type AsObject = {
    element: string,
    state: Change.State,
    data?: google_protobuf_any_pb.Any.AsObject,
    resumeMarker: Uint8Array | string,
    continued: boolean,
  }

  export enum State { 
    EXISTS = 0,
    DOES_NOT_EXIST = 1,
    INITIAL_STATE_SKIPPED = 2,
    ERROR = 3,
  }
}

