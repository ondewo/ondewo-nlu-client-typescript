import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class ListLocationsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListLocationsRequest;

  getFilter(): string;
  setFilter(value: string): ListLocationsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLocationsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLocationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocationsRequest): ListLocationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocationsRequest;
  static deserializeBinaryFromReader(message: ListLocationsRequest, reader: jspb.BinaryReader): ListLocationsRequest;
}

export namespace ListLocationsRequest {
  export type AsObject = {
    name: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListLocationsResponse extends jspb.Message {
  getLocationsList(): Array<Location>;
  setLocationsList(value: Array<Location>): ListLocationsResponse;
  clearLocationsList(): ListLocationsResponse;
  addLocations(value?: Location, index?: number): Location;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLocationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocationsResponse): ListLocationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLocationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocationsResponse;
  static deserializeBinaryFromReader(message: ListLocationsResponse, reader: jspb.BinaryReader): ListLocationsResponse;
}

export namespace ListLocationsResponse {
  export type AsObject = {
    locationsList: Array<Location.AsObject>,
    nextPageToken: string,
  }
}

export class GetLocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationRequest): GetLocationRequest.AsObject;
  static serializeBinaryToWriter(message: GetLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationRequest;
  static deserializeBinaryFromReader(message: GetLocationRequest, reader: jspb.BinaryReader): GetLocationRequest;
}

export namespace GetLocationRequest {
  export type AsObject = {
    name: string,
  }
}

export class Location extends jspb.Message {
  getName(): string;
  setName(value: string): Location;

  getLocationId(): string;
  setLocationId(value: string): Location;

  getDisplayName(): string;
  setDisplayName(value: string): Location;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Location;

  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): Location;
  hasMetadata(): boolean;
  clearMetadata(): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    name: string,
    locationId: string,
    displayName: string,
    labelsMap: Array<[string, string]>,
    metadata?: google_protobuf_any_pb.Any.AsObject,
  }
}

