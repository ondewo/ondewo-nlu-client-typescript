import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_resources_google_ads_field_pb from '../../../../../google/ads/googleads/v0/resources/google_ads_field_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';


export class GetGoogleAdsFieldRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetGoogleAdsFieldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGoogleAdsFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGoogleAdsFieldRequest): GetGoogleAdsFieldRequest.AsObject;
  static serializeBinaryToWriter(message: GetGoogleAdsFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGoogleAdsFieldRequest;
  static deserializeBinaryFromReader(message: GetGoogleAdsFieldRequest, reader: jspb.BinaryReader): GetGoogleAdsFieldRequest;
}

export namespace GetGoogleAdsFieldRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class SearchGoogleAdsFieldsRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchGoogleAdsFieldsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchGoogleAdsFieldsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchGoogleAdsFieldsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoogleAdsFieldsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoogleAdsFieldsRequest): SearchGoogleAdsFieldsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchGoogleAdsFieldsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoogleAdsFieldsRequest;
  static deserializeBinaryFromReader(message: SearchGoogleAdsFieldsRequest, reader: jspb.BinaryReader): SearchGoogleAdsFieldsRequest;
}

export namespace SearchGoogleAdsFieldsRequest {
  export type AsObject = {
    query: string,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchGoogleAdsFieldsResponse extends jspb.Message {
  getResultsList(): Array<google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField>;
  setResultsList(value: Array<google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField>): SearchGoogleAdsFieldsResponse;
  clearResultsList(): SearchGoogleAdsFieldsResponse;
  addResults(value?: google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField, index?: number): google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchGoogleAdsFieldsResponse;

  getTotalResultsCount(): number;
  setTotalResultsCount(value: number): SearchGoogleAdsFieldsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoogleAdsFieldsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoogleAdsFieldsResponse): SearchGoogleAdsFieldsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchGoogleAdsFieldsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoogleAdsFieldsResponse;
  static deserializeBinaryFromReader(message: SearchGoogleAdsFieldsResponse, reader: jspb.BinaryReader): SearchGoogleAdsFieldsResponse;
}

export namespace SearchGoogleAdsFieldsResponse {
  export type AsObject = {
    resultsList: Array<google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField.AsObject>,
    nextPageToken: string,
    totalResultsCount: number,
  }
}

