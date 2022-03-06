import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_genomics_v1_range_pb from '../../../google/genomics/v1/range_pb';
import * as google_genomics_v1_readalignment_pb from '../../../google/genomics/v1/readalignment_pb';
import * as google_genomics_v1_readgroupset_pb from '../../../google/genomics/v1/readgroupset_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class SearchReadGroupSetsRequest extends jspb.Message {
  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): SearchReadGroupSetsRequest;
  clearDatasetIdsList(): SearchReadGroupSetsRequest;
  addDatasetIds(value: string, index?: number): SearchReadGroupSetsRequest;

  getName(): string;
  setName(value: string): SearchReadGroupSetsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchReadGroupSetsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchReadGroupSetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReadGroupSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReadGroupSetsRequest): SearchReadGroupSetsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchReadGroupSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReadGroupSetsRequest;
  static deserializeBinaryFromReader(message: SearchReadGroupSetsRequest, reader: jspb.BinaryReader): SearchReadGroupSetsRequest;
}

export namespace SearchReadGroupSetsRequest {
  export type AsObject = {
    datasetIdsList: Array<string>,
    name: string,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchReadGroupSetsResponse extends jspb.Message {
  getReadGroupSetsList(): Array<google_genomics_v1_readgroupset_pb.ReadGroupSet>;
  setReadGroupSetsList(value: Array<google_genomics_v1_readgroupset_pb.ReadGroupSet>): SearchReadGroupSetsResponse;
  clearReadGroupSetsList(): SearchReadGroupSetsResponse;
  addReadGroupSets(value?: google_genomics_v1_readgroupset_pb.ReadGroupSet, index?: number): google_genomics_v1_readgroupset_pb.ReadGroupSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchReadGroupSetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReadGroupSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReadGroupSetsResponse): SearchReadGroupSetsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchReadGroupSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReadGroupSetsResponse;
  static deserializeBinaryFromReader(message: SearchReadGroupSetsResponse, reader: jspb.BinaryReader): SearchReadGroupSetsResponse;
}

export namespace SearchReadGroupSetsResponse {
  export type AsObject = {
    readGroupSetsList: Array<google_genomics_v1_readgroupset_pb.ReadGroupSet.AsObject>,
    nextPageToken: string,
  }
}

export class ImportReadGroupSetsRequest extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): ImportReadGroupSetsRequest;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): ImportReadGroupSetsRequest;

  getSourceUrisList(): Array<string>;
  setSourceUrisList(value: Array<string>): ImportReadGroupSetsRequest;
  clearSourceUrisList(): ImportReadGroupSetsRequest;
  addSourceUris(value: string, index?: number): ImportReadGroupSetsRequest;

  getPartitionStrategy(): ImportReadGroupSetsRequest.PartitionStrategy;
  setPartitionStrategy(value: ImportReadGroupSetsRequest.PartitionStrategy): ImportReadGroupSetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportReadGroupSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportReadGroupSetsRequest): ImportReadGroupSetsRequest.AsObject;
  static serializeBinaryToWriter(message: ImportReadGroupSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportReadGroupSetsRequest;
  static deserializeBinaryFromReader(message: ImportReadGroupSetsRequest, reader: jspb.BinaryReader): ImportReadGroupSetsRequest;
}

export namespace ImportReadGroupSetsRequest {
  export type AsObject = {
    datasetId: string,
    referenceSetId: string,
    sourceUrisList: Array<string>,
    partitionStrategy: ImportReadGroupSetsRequest.PartitionStrategy,
  }

  export enum PartitionStrategy { 
    PARTITION_STRATEGY_UNSPECIFIED = 0,
    PER_FILE_PER_SAMPLE = 1,
    MERGE_ALL = 2,
  }
}

export class ImportReadGroupSetsResponse extends jspb.Message {
  getReadGroupSetIdsList(): Array<string>;
  setReadGroupSetIdsList(value: Array<string>): ImportReadGroupSetsResponse;
  clearReadGroupSetIdsList(): ImportReadGroupSetsResponse;
  addReadGroupSetIds(value: string, index?: number): ImportReadGroupSetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportReadGroupSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportReadGroupSetsResponse): ImportReadGroupSetsResponse.AsObject;
  static serializeBinaryToWriter(message: ImportReadGroupSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportReadGroupSetsResponse;
  static deserializeBinaryFromReader(message: ImportReadGroupSetsResponse, reader: jspb.BinaryReader): ImportReadGroupSetsResponse;
}

export namespace ImportReadGroupSetsResponse {
  export type AsObject = {
    readGroupSetIdsList: Array<string>,
  }
}

export class ExportReadGroupSetRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ExportReadGroupSetRequest;

  getExportUri(): string;
  setExportUri(value: string): ExportReadGroupSetRequest;

  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): ExportReadGroupSetRequest;

  getReferenceNamesList(): Array<string>;
  setReferenceNamesList(value: Array<string>): ExportReadGroupSetRequest;
  clearReferenceNamesList(): ExportReadGroupSetRequest;
  addReferenceNames(value: string, index?: number): ExportReadGroupSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportReadGroupSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportReadGroupSetRequest): ExportReadGroupSetRequest.AsObject;
  static serializeBinaryToWriter(message: ExportReadGroupSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportReadGroupSetRequest;
  static deserializeBinaryFromReader(message: ExportReadGroupSetRequest, reader: jspb.BinaryReader): ExportReadGroupSetRequest;
}

export namespace ExportReadGroupSetRequest {
  export type AsObject = {
    projectId: string,
    exportUri: string,
    readGroupSetId: string,
    referenceNamesList: Array<string>,
  }
}

export class UpdateReadGroupSetRequest extends jspb.Message {
  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): UpdateReadGroupSetRequest;

  getReadGroupSet(): google_genomics_v1_readgroupset_pb.ReadGroupSet | undefined;
  setReadGroupSet(value?: google_genomics_v1_readgroupset_pb.ReadGroupSet): UpdateReadGroupSetRequest;
  hasReadGroupSet(): boolean;
  clearReadGroupSet(): UpdateReadGroupSetRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateReadGroupSetRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateReadGroupSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReadGroupSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReadGroupSetRequest): UpdateReadGroupSetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateReadGroupSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReadGroupSetRequest;
  static deserializeBinaryFromReader(message: UpdateReadGroupSetRequest, reader: jspb.BinaryReader): UpdateReadGroupSetRequest;
}

export namespace UpdateReadGroupSetRequest {
  export type AsObject = {
    readGroupSetId: string,
    readGroupSet?: google_genomics_v1_readgroupset_pb.ReadGroupSet.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteReadGroupSetRequest extends jspb.Message {
  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): DeleteReadGroupSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReadGroupSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReadGroupSetRequest): DeleteReadGroupSetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteReadGroupSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReadGroupSetRequest;
  static deserializeBinaryFromReader(message: DeleteReadGroupSetRequest, reader: jspb.BinaryReader): DeleteReadGroupSetRequest;
}

export namespace DeleteReadGroupSetRequest {
  export type AsObject = {
    readGroupSetId: string,
  }
}

export class GetReadGroupSetRequest extends jspb.Message {
  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): GetReadGroupSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReadGroupSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReadGroupSetRequest): GetReadGroupSetRequest.AsObject;
  static serializeBinaryToWriter(message: GetReadGroupSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReadGroupSetRequest;
  static deserializeBinaryFromReader(message: GetReadGroupSetRequest, reader: jspb.BinaryReader): GetReadGroupSetRequest;
}

export namespace GetReadGroupSetRequest {
  export type AsObject = {
    readGroupSetId: string,
  }
}

export class ListCoverageBucketsRequest extends jspb.Message {
  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): ListCoverageBucketsRequest;

  getReferenceName(): string;
  setReferenceName(value: string): ListCoverageBucketsRequest;

  getStart(): number;
  setStart(value: number): ListCoverageBucketsRequest;

  getEnd(): number;
  setEnd(value: number): ListCoverageBucketsRequest;

  getTargetBucketWidth(): number;
  setTargetBucketWidth(value: number): ListCoverageBucketsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCoverageBucketsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCoverageBucketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCoverageBucketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCoverageBucketsRequest): ListCoverageBucketsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCoverageBucketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCoverageBucketsRequest;
  static deserializeBinaryFromReader(message: ListCoverageBucketsRequest, reader: jspb.BinaryReader): ListCoverageBucketsRequest;
}

export namespace ListCoverageBucketsRequest {
  export type AsObject = {
    readGroupSetId: string,
    referenceName: string,
    start: number,
    end: number,
    targetBucketWidth: number,
    pageToken: string,
    pageSize: number,
  }
}

export class CoverageBucket extends jspb.Message {
  getRange(): google_genomics_v1_range_pb.Range | undefined;
  setRange(value?: google_genomics_v1_range_pb.Range): CoverageBucket;
  hasRange(): boolean;
  clearRange(): CoverageBucket;

  getMeanCoverage(): number;
  setMeanCoverage(value: number): CoverageBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoverageBucket.AsObject;
  static toObject(includeInstance: boolean, msg: CoverageBucket): CoverageBucket.AsObject;
  static serializeBinaryToWriter(message: CoverageBucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoverageBucket;
  static deserializeBinaryFromReader(message: CoverageBucket, reader: jspb.BinaryReader): CoverageBucket;
}

export namespace CoverageBucket {
  export type AsObject = {
    range?: google_genomics_v1_range_pb.Range.AsObject,
    meanCoverage: number,
  }
}

export class ListCoverageBucketsResponse extends jspb.Message {
  getBucketWidth(): number;
  setBucketWidth(value: number): ListCoverageBucketsResponse;

  getCoverageBucketsList(): Array<CoverageBucket>;
  setCoverageBucketsList(value: Array<CoverageBucket>): ListCoverageBucketsResponse;
  clearCoverageBucketsList(): ListCoverageBucketsResponse;
  addCoverageBuckets(value?: CoverageBucket, index?: number): CoverageBucket;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCoverageBucketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCoverageBucketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCoverageBucketsResponse): ListCoverageBucketsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCoverageBucketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCoverageBucketsResponse;
  static deserializeBinaryFromReader(message: ListCoverageBucketsResponse, reader: jspb.BinaryReader): ListCoverageBucketsResponse;
}

export namespace ListCoverageBucketsResponse {
  export type AsObject = {
    bucketWidth: number,
    coverageBucketsList: Array<CoverageBucket.AsObject>,
    nextPageToken: string,
  }
}

export class SearchReadsRequest extends jspb.Message {
  getReadGroupSetIdsList(): Array<string>;
  setReadGroupSetIdsList(value: Array<string>): SearchReadsRequest;
  clearReadGroupSetIdsList(): SearchReadsRequest;
  addReadGroupSetIds(value: string, index?: number): SearchReadsRequest;

  getReadGroupIdsList(): Array<string>;
  setReadGroupIdsList(value: Array<string>): SearchReadsRequest;
  clearReadGroupIdsList(): SearchReadsRequest;
  addReadGroupIds(value: string, index?: number): SearchReadsRequest;

  getReferenceName(): string;
  setReferenceName(value: string): SearchReadsRequest;

  getStart(): number;
  setStart(value: number): SearchReadsRequest;

  getEnd(): number;
  setEnd(value: number): SearchReadsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchReadsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchReadsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReadsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReadsRequest): SearchReadsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchReadsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReadsRequest;
  static deserializeBinaryFromReader(message: SearchReadsRequest, reader: jspb.BinaryReader): SearchReadsRequest;
}

export namespace SearchReadsRequest {
  export type AsObject = {
    readGroupSetIdsList: Array<string>,
    readGroupIdsList: Array<string>,
    referenceName: string,
    start: number,
    end: number,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchReadsResponse extends jspb.Message {
  getAlignmentsList(): Array<google_genomics_v1_readalignment_pb.Read>;
  setAlignmentsList(value: Array<google_genomics_v1_readalignment_pb.Read>): SearchReadsResponse;
  clearAlignmentsList(): SearchReadsResponse;
  addAlignments(value?: google_genomics_v1_readalignment_pb.Read, index?: number): google_genomics_v1_readalignment_pb.Read;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchReadsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReadsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReadsResponse): SearchReadsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchReadsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReadsResponse;
  static deserializeBinaryFromReader(message: SearchReadsResponse, reader: jspb.BinaryReader): SearchReadsResponse;
}

export namespace SearchReadsResponse {
  export type AsObject = {
    alignmentsList: Array<google_genomics_v1_readalignment_pb.Read.AsObject>,
    nextPageToken: string,
  }
}

export class StreamReadsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): StreamReadsRequest;

  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): StreamReadsRequest;

  getReferenceName(): string;
  setReferenceName(value: string): StreamReadsRequest;

  getStart(): number;
  setStart(value: number): StreamReadsRequest;

  getEnd(): number;
  setEnd(value: number): StreamReadsRequest;

  getShard(): number;
  setShard(value: number): StreamReadsRequest;

  getTotalShards(): number;
  setTotalShards(value: number): StreamReadsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamReadsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamReadsRequest): StreamReadsRequest.AsObject;
  static serializeBinaryToWriter(message: StreamReadsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamReadsRequest;
  static deserializeBinaryFromReader(message: StreamReadsRequest, reader: jspb.BinaryReader): StreamReadsRequest;
}

export namespace StreamReadsRequest {
  export type AsObject = {
    projectId: string,
    readGroupSetId: string,
    referenceName: string,
    start: number,
    end: number,
    shard: number,
    totalShards: number,
  }
}

export class StreamReadsResponse extends jspb.Message {
  getAlignmentsList(): Array<google_genomics_v1_readalignment_pb.Read>;
  setAlignmentsList(value: Array<google_genomics_v1_readalignment_pb.Read>): StreamReadsResponse;
  clearAlignmentsList(): StreamReadsResponse;
  addAlignments(value?: google_genomics_v1_readalignment_pb.Read, index?: number): google_genomics_v1_readalignment_pb.Read;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamReadsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamReadsResponse): StreamReadsResponse.AsObject;
  static serializeBinaryToWriter(message: StreamReadsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamReadsResponse;
  static deserializeBinaryFromReader(message: StreamReadsResponse, reader: jspb.BinaryReader): StreamReadsResponse;
}

export namespace StreamReadsResponse {
  export type AsObject = {
    alignmentsList: Array<google_genomics_v1_readalignment_pb.Read.AsObject>,
  }
}

