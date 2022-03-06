import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_websecurityscanner_v1alpha_crawled_url_pb from '../../../../google/cloud/websecurityscanner/v1alpha/crawled_url_pb';
import * as google_cloud_websecurityscanner_v1alpha_finding_pb from '../../../../google/cloud/websecurityscanner/v1alpha/finding_pb';
import * as google_cloud_websecurityscanner_v1alpha_finding_type_stats_pb from '../../../../google/cloud/websecurityscanner/v1alpha/finding_type_stats_pb';
import * as google_cloud_websecurityscanner_v1alpha_scan_config_pb from '../../../../google/cloud/websecurityscanner/v1alpha/scan_config_pb';
import * as google_cloud_websecurityscanner_v1alpha_scan_run_pb from '../../../../google/cloud/websecurityscanner/v1alpha/scan_run_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class CreateScanConfigRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateScanConfigRequest;

  getScanConfig(): google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig | undefined;
  setScanConfig(value?: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig): CreateScanConfigRequest;
  hasScanConfig(): boolean;
  clearScanConfig(): CreateScanConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScanConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScanConfigRequest): CreateScanConfigRequest.AsObject;
  static serializeBinaryToWriter(message: CreateScanConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScanConfigRequest;
  static deserializeBinaryFromReader(message: CreateScanConfigRequest, reader: jspb.BinaryReader): CreateScanConfigRequest;
}

export namespace CreateScanConfigRequest {
  export type AsObject = {
    parent: string,
    scanConfig?: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.AsObject,
  }
}

export class DeleteScanConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteScanConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScanConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScanConfigRequest): DeleteScanConfigRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteScanConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScanConfigRequest;
  static deserializeBinaryFromReader(message: DeleteScanConfigRequest, reader: jspb.BinaryReader): DeleteScanConfigRequest;
}

export namespace DeleteScanConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetScanConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetScanConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScanConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScanConfigRequest): GetScanConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetScanConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScanConfigRequest;
  static deserializeBinaryFromReader(message: GetScanConfigRequest, reader: jspb.BinaryReader): GetScanConfigRequest;
}

export namespace GetScanConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListScanConfigsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListScanConfigsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListScanConfigsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListScanConfigsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScanConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListScanConfigsRequest): ListScanConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: ListScanConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScanConfigsRequest;
  static deserializeBinaryFromReader(message: ListScanConfigsRequest, reader: jspb.BinaryReader): ListScanConfigsRequest;
}

export namespace ListScanConfigsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class UpdateScanConfigRequest extends jspb.Message {
  getScanConfig(): google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig | undefined;
  setScanConfig(value?: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig): UpdateScanConfigRequest;
  hasScanConfig(): boolean;
  clearScanConfig(): UpdateScanConfigRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateScanConfigRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateScanConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScanConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScanConfigRequest): UpdateScanConfigRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateScanConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScanConfigRequest;
  static deserializeBinaryFromReader(message: UpdateScanConfigRequest, reader: jspb.BinaryReader): UpdateScanConfigRequest;
}

export namespace UpdateScanConfigRequest {
  export type AsObject = {
    scanConfig?: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListScanConfigsResponse extends jspb.Message {
  getScanConfigsList(): Array<google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig>;
  setScanConfigsList(value: Array<google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig>): ListScanConfigsResponse;
  clearScanConfigsList(): ListScanConfigsResponse;
  addScanConfigs(value?: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig, index?: number): google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListScanConfigsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScanConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListScanConfigsResponse): ListScanConfigsResponse.AsObject;
  static serializeBinaryToWriter(message: ListScanConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScanConfigsResponse;
  static deserializeBinaryFromReader(message: ListScanConfigsResponse, reader: jspb.BinaryReader): ListScanConfigsResponse;
}

export namespace ListScanConfigsResponse {
  export type AsObject = {
    scanConfigsList: Array<google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.AsObject>,
    nextPageToken: string,
  }
}

export class StartScanRunRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StartScanRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartScanRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartScanRunRequest): StartScanRunRequest.AsObject;
  static serializeBinaryToWriter(message: StartScanRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartScanRunRequest;
  static deserializeBinaryFromReader(message: StartScanRunRequest, reader: jspb.BinaryReader): StartScanRunRequest;
}

export namespace StartScanRunRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetScanRunRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetScanRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScanRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScanRunRequest): GetScanRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetScanRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScanRunRequest;
  static deserializeBinaryFromReader(message: GetScanRunRequest, reader: jspb.BinaryReader): GetScanRunRequest;
}

export namespace GetScanRunRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListScanRunsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListScanRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListScanRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListScanRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScanRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListScanRunsRequest): ListScanRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListScanRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScanRunsRequest;
  static deserializeBinaryFromReader(message: ListScanRunsRequest, reader: jspb.BinaryReader): ListScanRunsRequest;
}

export namespace ListScanRunsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListScanRunsResponse extends jspb.Message {
  getScanRunsList(): Array<google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun>;
  setScanRunsList(value: Array<google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun>): ListScanRunsResponse;
  clearScanRunsList(): ListScanRunsResponse;
  addScanRuns(value?: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun, index?: number): google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListScanRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScanRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListScanRunsResponse): ListScanRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListScanRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScanRunsResponse;
  static deserializeBinaryFromReader(message: ListScanRunsResponse, reader: jspb.BinaryReader): ListScanRunsResponse;
}

export namespace ListScanRunsResponse {
  export type AsObject = {
    scanRunsList: Array<google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.AsObject>,
    nextPageToken: string,
  }
}

export class StopScanRunRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StopScanRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopScanRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopScanRunRequest): StopScanRunRequest.AsObject;
  static serializeBinaryToWriter(message: StopScanRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopScanRunRequest;
  static deserializeBinaryFromReader(message: StopScanRunRequest, reader: jspb.BinaryReader): StopScanRunRequest;
}

export namespace StopScanRunRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListCrawledUrlsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListCrawledUrlsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCrawledUrlsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCrawledUrlsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCrawledUrlsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCrawledUrlsRequest): ListCrawledUrlsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCrawledUrlsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCrawledUrlsRequest;
  static deserializeBinaryFromReader(message: ListCrawledUrlsRequest, reader: jspb.BinaryReader): ListCrawledUrlsRequest;
}

export namespace ListCrawledUrlsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListCrawledUrlsResponse extends jspb.Message {
  getCrawledUrlsList(): Array<google_cloud_websecurityscanner_v1alpha_crawled_url_pb.CrawledUrl>;
  setCrawledUrlsList(value: Array<google_cloud_websecurityscanner_v1alpha_crawled_url_pb.CrawledUrl>): ListCrawledUrlsResponse;
  clearCrawledUrlsList(): ListCrawledUrlsResponse;
  addCrawledUrls(value?: google_cloud_websecurityscanner_v1alpha_crawled_url_pb.CrawledUrl, index?: number): google_cloud_websecurityscanner_v1alpha_crawled_url_pb.CrawledUrl;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCrawledUrlsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCrawledUrlsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCrawledUrlsResponse): ListCrawledUrlsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCrawledUrlsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCrawledUrlsResponse;
  static deserializeBinaryFromReader(message: ListCrawledUrlsResponse, reader: jspb.BinaryReader): ListCrawledUrlsResponse;
}

export namespace ListCrawledUrlsResponse {
  export type AsObject = {
    crawledUrlsList: Array<google_cloud_websecurityscanner_v1alpha_crawled_url_pb.CrawledUrl.AsObject>,
    nextPageToken: string,
  }
}

export class GetFindingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetFindingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFindingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFindingRequest): GetFindingRequest.AsObject;
  static serializeBinaryToWriter(message: GetFindingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFindingRequest;
  static deserializeBinaryFromReader(message: GetFindingRequest, reader: jspb.BinaryReader): GetFindingRequest;
}

export namespace GetFindingRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListFindingsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListFindingsRequest;

  getFilter(): string;
  setFilter(value: string): ListFindingsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFindingsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFindingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFindingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFindingsRequest): ListFindingsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFindingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFindingsRequest;
  static deserializeBinaryFromReader(message: ListFindingsRequest, reader: jspb.BinaryReader): ListFindingsRequest;
}

export namespace ListFindingsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListFindingsResponse extends jspb.Message {
  getFindingsList(): Array<google_cloud_websecurityscanner_v1alpha_finding_pb.Finding>;
  setFindingsList(value: Array<google_cloud_websecurityscanner_v1alpha_finding_pb.Finding>): ListFindingsResponse;
  clearFindingsList(): ListFindingsResponse;
  addFindings(value?: google_cloud_websecurityscanner_v1alpha_finding_pb.Finding, index?: number): google_cloud_websecurityscanner_v1alpha_finding_pb.Finding;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFindingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFindingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFindingsResponse): ListFindingsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFindingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFindingsResponse;
  static deserializeBinaryFromReader(message: ListFindingsResponse, reader: jspb.BinaryReader): ListFindingsResponse;
}

export namespace ListFindingsResponse {
  export type AsObject = {
    findingsList: Array<google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.AsObject>,
    nextPageToken: string,
  }
}

export class ListFindingTypeStatsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListFindingTypeStatsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFindingTypeStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFindingTypeStatsRequest): ListFindingTypeStatsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFindingTypeStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFindingTypeStatsRequest;
  static deserializeBinaryFromReader(message: ListFindingTypeStatsRequest, reader: jspb.BinaryReader): ListFindingTypeStatsRequest;
}

export namespace ListFindingTypeStatsRequest {
  export type AsObject = {
    parent: string,
  }
}

export class ListFindingTypeStatsResponse extends jspb.Message {
  getFindingTypeStatsList(): Array<google_cloud_websecurityscanner_v1alpha_finding_type_stats_pb.FindingTypeStats>;
  setFindingTypeStatsList(value: Array<google_cloud_websecurityscanner_v1alpha_finding_type_stats_pb.FindingTypeStats>): ListFindingTypeStatsResponse;
  clearFindingTypeStatsList(): ListFindingTypeStatsResponse;
  addFindingTypeStats(value?: google_cloud_websecurityscanner_v1alpha_finding_type_stats_pb.FindingTypeStats, index?: number): google_cloud_websecurityscanner_v1alpha_finding_type_stats_pb.FindingTypeStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFindingTypeStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFindingTypeStatsResponse): ListFindingTypeStatsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFindingTypeStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFindingTypeStatsResponse;
  static deserializeBinaryFromReader(message: ListFindingTypeStatsResponse, reader: jspb.BinaryReader): ListFindingTypeStatsResponse;
}

export namespace ListFindingTypeStatsResponse {
  export type AsObject = {
    findingTypeStatsList: Array<google_cloud_websecurityscanner_v1alpha_finding_type_stats_pb.FindingTypeStats.AsObject>,
  }
}

