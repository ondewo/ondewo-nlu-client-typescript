import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';


export class AuditData extends jspb.Message {
  getTableInsertRequest(): TableInsertRequest | undefined;
  setTableInsertRequest(value?: TableInsertRequest): AuditData;
  hasTableInsertRequest(): boolean;
  clearTableInsertRequest(): AuditData;

  getTableUpdateRequest(): TableUpdateRequest | undefined;
  setTableUpdateRequest(value?: TableUpdateRequest): AuditData;
  hasTableUpdateRequest(): boolean;
  clearTableUpdateRequest(): AuditData;

  getDatasetListRequest(): DatasetListRequest | undefined;
  setDatasetListRequest(value?: DatasetListRequest): AuditData;
  hasDatasetListRequest(): boolean;
  clearDatasetListRequest(): AuditData;

  getDatasetInsertRequest(): DatasetInsertRequest | undefined;
  setDatasetInsertRequest(value?: DatasetInsertRequest): AuditData;
  hasDatasetInsertRequest(): boolean;
  clearDatasetInsertRequest(): AuditData;

  getDatasetUpdateRequest(): DatasetUpdateRequest | undefined;
  setDatasetUpdateRequest(value?: DatasetUpdateRequest): AuditData;
  hasDatasetUpdateRequest(): boolean;
  clearDatasetUpdateRequest(): AuditData;

  getJobInsertRequest(): JobInsertRequest | undefined;
  setJobInsertRequest(value?: JobInsertRequest): AuditData;
  hasJobInsertRequest(): boolean;
  clearJobInsertRequest(): AuditData;

  getJobQueryRequest(): JobQueryRequest | undefined;
  setJobQueryRequest(value?: JobQueryRequest): AuditData;
  hasJobQueryRequest(): boolean;
  clearJobQueryRequest(): AuditData;

  getJobGetQueryResultsRequest(): JobGetQueryResultsRequest | undefined;
  setJobGetQueryResultsRequest(value?: JobGetQueryResultsRequest): AuditData;
  hasJobGetQueryResultsRequest(): boolean;
  clearJobGetQueryResultsRequest(): AuditData;

  getTableDataListRequest(): TableDataListRequest | undefined;
  setTableDataListRequest(value?: TableDataListRequest): AuditData;
  hasTableDataListRequest(): boolean;
  clearTableDataListRequest(): AuditData;

  getTableInsertResponse(): TableInsertResponse | undefined;
  setTableInsertResponse(value?: TableInsertResponse): AuditData;
  hasTableInsertResponse(): boolean;
  clearTableInsertResponse(): AuditData;

  getTableUpdateResponse(): TableUpdateResponse | undefined;
  setTableUpdateResponse(value?: TableUpdateResponse): AuditData;
  hasTableUpdateResponse(): boolean;
  clearTableUpdateResponse(): AuditData;

  getDatasetInsertResponse(): DatasetInsertResponse | undefined;
  setDatasetInsertResponse(value?: DatasetInsertResponse): AuditData;
  hasDatasetInsertResponse(): boolean;
  clearDatasetInsertResponse(): AuditData;

  getDatasetUpdateResponse(): DatasetUpdateResponse | undefined;
  setDatasetUpdateResponse(value?: DatasetUpdateResponse): AuditData;
  hasDatasetUpdateResponse(): boolean;
  clearDatasetUpdateResponse(): AuditData;

  getJobInsertResponse(): JobInsertResponse | undefined;
  setJobInsertResponse(value?: JobInsertResponse): AuditData;
  hasJobInsertResponse(): boolean;
  clearJobInsertResponse(): AuditData;

  getJobQueryResponse(): JobQueryResponse | undefined;
  setJobQueryResponse(value?: JobQueryResponse): AuditData;
  hasJobQueryResponse(): boolean;
  clearJobQueryResponse(): AuditData;

  getJobGetQueryResultsResponse(): JobGetQueryResultsResponse | undefined;
  setJobGetQueryResultsResponse(value?: JobGetQueryResultsResponse): AuditData;
  hasJobGetQueryResultsResponse(): boolean;
  clearJobGetQueryResultsResponse(): AuditData;

  getJobQueryDoneResponse(): JobQueryDoneResponse | undefined;
  setJobQueryDoneResponse(value?: JobQueryDoneResponse): AuditData;
  hasJobQueryDoneResponse(): boolean;
  clearJobQueryDoneResponse(): AuditData;

  getJobCompletedEvent(): JobCompletedEvent | undefined;
  setJobCompletedEvent(value?: JobCompletedEvent): AuditData;
  hasJobCompletedEvent(): boolean;
  clearJobCompletedEvent(): AuditData;

  getRequestCase(): AuditData.RequestCase;

  getResponseCase(): AuditData.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditData.AsObject;
  static toObject(includeInstance: boolean, msg: AuditData): AuditData.AsObject;
  static serializeBinaryToWriter(message: AuditData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditData;
  static deserializeBinaryFromReader(message: AuditData, reader: jspb.BinaryReader): AuditData;
}

export namespace AuditData {
  export type AsObject = {
    tableInsertRequest?: TableInsertRequest.AsObject,
    tableUpdateRequest?: TableUpdateRequest.AsObject,
    datasetListRequest?: DatasetListRequest.AsObject,
    datasetInsertRequest?: DatasetInsertRequest.AsObject,
    datasetUpdateRequest?: DatasetUpdateRequest.AsObject,
    jobInsertRequest?: JobInsertRequest.AsObject,
    jobQueryRequest?: JobQueryRequest.AsObject,
    jobGetQueryResultsRequest?: JobGetQueryResultsRequest.AsObject,
    tableDataListRequest?: TableDataListRequest.AsObject,
    tableInsertResponse?: TableInsertResponse.AsObject,
    tableUpdateResponse?: TableUpdateResponse.AsObject,
    datasetInsertResponse?: DatasetInsertResponse.AsObject,
    datasetUpdateResponse?: DatasetUpdateResponse.AsObject,
    jobInsertResponse?: JobInsertResponse.AsObject,
    jobQueryResponse?: JobQueryResponse.AsObject,
    jobGetQueryResultsResponse?: JobGetQueryResultsResponse.AsObject,
    jobQueryDoneResponse?: JobQueryDoneResponse.AsObject,
    jobCompletedEvent?: JobCompletedEvent.AsObject,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    TABLE_INSERT_REQUEST = 1,
    TABLE_UPDATE_REQUEST = 16,
    DATASET_LIST_REQUEST = 2,
    DATASET_INSERT_REQUEST = 3,
    DATASET_UPDATE_REQUEST = 4,
    JOB_INSERT_REQUEST = 5,
    JOB_QUERY_REQUEST = 6,
    JOB_GET_QUERY_RESULTS_REQUEST = 7,
    TABLE_DATA_LIST_REQUEST = 8,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    TABLE_INSERT_RESPONSE = 9,
    TABLE_UPDATE_RESPONSE = 10,
    DATASET_INSERT_RESPONSE = 11,
    DATASET_UPDATE_RESPONSE = 12,
    JOB_INSERT_RESPONSE = 18,
    JOB_QUERY_RESPONSE = 13,
    JOB_GET_QUERY_RESULTS_RESPONSE = 14,
    JOB_QUERY_DONE_RESPONSE = 15,
  }
}

export class TableInsertRequest extends jspb.Message {
  getResource(): Table | undefined;
  setResource(value?: Table): TableInsertRequest;
  hasResource(): boolean;
  clearResource(): TableInsertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableInsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TableInsertRequest): TableInsertRequest.AsObject;
  static serializeBinaryToWriter(message: TableInsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableInsertRequest;
  static deserializeBinaryFromReader(message: TableInsertRequest, reader: jspb.BinaryReader): TableInsertRequest;
}

export namespace TableInsertRequest {
  export type AsObject = {
    resource?: Table.AsObject,
  }
}

export class TableUpdateRequest extends jspb.Message {
  getResource(): Table | undefined;
  setResource(value?: Table): TableUpdateRequest;
  hasResource(): boolean;
  clearResource(): TableUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TableUpdateRequest): TableUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: TableUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableUpdateRequest;
  static deserializeBinaryFromReader(message: TableUpdateRequest, reader: jspb.BinaryReader): TableUpdateRequest;
}

export namespace TableUpdateRequest {
  export type AsObject = {
    resource?: Table.AsObject,
  }
}

export class TableInsertResponse extends jspb.Message {
  getResource(): Table | undefined;
  setResource(value?: Table): TableInsertResponse;
  hasResource(): boolean;
  clearResource(): TableInsertResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableInsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TableInsertResponse): TableInsertResponse.AsObject;
  static serializeBinaryToWriter(message: TableInsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableInsertResponse;
  static deserializeBinaryFromReader(message: TableInsertResponse, reader: jspb.BinaryReader): TableInsertResponse;
}

export namespace TableInsertResponse {
  export type AsObject = {
    resource?: Table.AsObject,
  }
}

export class TableUpdateResponse extends jspb.Message {
  getResource(): Table | undefined;
  setResource(value?: Table): TableUpdateResponse;
  hasResource(): boolean;
  clearResource(): TableUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TableUpdateResponse): TableUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: TableUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableUpdateResponse;
  static deserializeBinaryFromReader(message: TableUpdateResponse, reader: jspb.BinaryReader): TableUpdateResponse;
}

export namespace TableUpdateResponse {
  export type AsObject = {
    resource?: Table.AsObject,
  }
}

export class DatasetListRequest extends jspb.Message {
  getListAll(): boolean;
  setListAll(value: boolean): DatasetListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetListRequest): DatasetListRequest.AsObject;
  static serializeBinaryToWriter(message: DatasetListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetListRequest;
  static deserializeBinaryFromReader(message: DatasetListRequest, reader: jspb.BinaryReader): DatasetListRequest;
}

export namespace DatasetListRequest {
  export type AsObject = {
    listAll: boolean,
  }
}

export class DatasetInsertRequest extends jspb.Message {
  getResource(): Dataset | undefined;
  setResource(value?: Dataset): DatasetInsertRequest;
  hasResource(): boolean;
  clearResource(): DatasetInsertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetInsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetInsertRequest): DatasetInsertRequest.AsObject;
  static serializeBinaryToWriter(message: DatasetInsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetInsertRequest;
  static deserializeBinaryFromReader(message: DatasetInsertRequest, reader: jspb.BinaryReader): DatasetInsertRequest;
}

export namespace DatasetInsertRequest {
  export type AsObject = {
    resource?: Dataset.AsObject,
  }
}

export class DatasetInsertResponse extends jspb.Message {
  getResource(): Dataset | undefined;
  setResource(value?: Dataset): DatasetInsertResponse;
  hasResource(): boolean;
  clearResource(): DatasetInsertResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetInsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetInsertResponse): DatasetInsertResponse.AsObject;
  static serializeBinaryToWriter(message: DatasetInsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetInsertResponse;
  static deserializeBinaryFromReader(message: DatasetInsertResponse, reader: jspb.BinaryReader): DatasetInsertResponse;
}

export namespace DatasetInsertResponse {
  export type AsObject = {
    resource?: Dataset.AsObject,
  }
}

export class DatasetUpdateRequest extends jspb.Message {
  getResource(): Dataset | undefined;
  setResource(value?: Dataset): DatasetUpdateRequest;
  hasResource(): boolean;
  clearResource(): DatasetUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetUpdateRequest): DatasetUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: DatasetUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetUpdateRequest;
  static deserializeBinaryFromReader(message: DatasetUpdateRequest, reader: jspb.BinaryReader): DatasetUpdateRequest;
}

export namespace DatasetUpdateRequest {
  export type AsObject = {
    resource?: Dataset.AsObject,
  }
}

export class DatasetUpdateResponse extends jspb.Message {
  getResource(): Dataset | undefined;
  setResource(value?: Dataset): DatasetUpdateResponse;
  hasResource(): boolean;
  clearResource(): DatasetUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetUpdateResponse): DatasetUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: DatasetUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetUpdateResponse;
  static deserializeBinaryFromReader(message: DatasetUpdateResponse, reader: jspb.BinaryReader): DatasetUpdateResponse;
}

export namespace DatasetUpdateResponse {
  export type AsObject = {
    resource?: Dataset.AsObject,
  }
}

export class JobInsertRequest extends jspb.Message {
  getResource(): Job | undefined;
  setResource(value?: Job): JobInsertRequest;
  hasResource(): boolean;
  clearResource(): JobInsertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobInsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JobInsertRequest): JobInsertRequest.AsObject;
  static serializeBinaryToWriter(message: JobInsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobInsertRequest;
  static deserializeBinaryFromReader(message: JobInsertRequest, reader: jspb.BinaryReader): JobInsertRequest;
}

export namespace JobInsertRequest {
  export type AsObject = {
    resource?: Job.AsObject,
  }
}

export class JobInsertResponse extends jspb.Message {
  getResource(): Job | undefined;
  setResource(value?: Job): JobInsertResponse;
  hasResource(): boolean;
  clearResource(): JobInsertResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobInsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobInsertResponse): JobInsertResponse.AsObject;
  static serializeBinaryToWriter(message: JobInsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobInsertResponse;
  static deserializeBinaryFromReader(message: JobInsertResponse, reader: jspb.BinaryReader): JobInsertResponse;
}

export namespace JobInsertResponse {
  export type AsObject = {
    resource?: Job.AsObject,
  }
}

export class JobQueryRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): JobQueryRequest;

  getMaxResults(): number;
  setMaxResults(value: number): JobQueryRequest;

  getDefaultDataset(): DatasetName | undefined;
  setDefaultDataset(value?: DatasetName): JobQueryRequest;
  hasDefaultDataset(): boolean;
  clearDefaultDataset(): JobQueryRequest;

  getProjectId(): string;
  setProjectId(value: string): JobQueryRequest;

  getDryRun(): boolean;
  setDryRun(value: boolean): JobQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JobQueryRequest): JobQueryRequest.AsObject;
  static serializeBinaryToWriter(message: JobQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobQueryRequest;
  static deserializeBinaryFromReader(message: JobQueryRequest, reader: jspb.BinaryReader): JobQueryRequest;
}

export namespace JobQueryRequest {
  export type AsObject = {
    query: string,
    maxResults: number,
    defaultDataset?: DatasetName.AsObject,
    projectId: string,
    dryRun: boolean,
  }
}

export class JobQueryResponse extends jspb.Message {
  getTotalResults(): number;
  setTotalResults(value: number): JobQueryResponse;

  getJob(): Job | undefined;
  setJob(value?: Job): JobQueryResponse;
  hasJob(): boolean;
  clearJob(): JobQueryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobQueryResponse): JobQueryResponse.AsObject;
  static serializeBinaryToWriter(message: JobQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobQueryResponse;
  static deserializeBinaryFromReader(message: JobQueryResponse, reader: jspb.BinaryReader): JobQueryResponse;
}

export namespace JobQueryResponse {
  export type AsObject = {
    totalResults: number,
    job?: Job.AsObject,
  }
}

export class JobGetQueryResultsRequest extends jspb.Message {
  getMaxResults(): number;
  setMaxResults(value: number): JobGetQueryResultsRequest;

  getStartRow(): number;
  setStartRow(value: number): JobGetQueryResultsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobGetQueryResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JobGetQueryResultsRequest): JobGetQueryResultsRequest.AsObject;
  static serializeBinaryToWriter(message: JobGetQueryResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobGetQueryResultsRequest;
  static deserializeBinaryFromReader(message: JobGetQueryResultsRequest, reader: jspb.BinaryReader): JobGetQueryResultsRequest;
}

export namespace JobGetQueryResultsRequest {
  export type AsObject = {
    maxResults: number,
    startRow: number,
  }
}

export class JobGetQueryResultsResponse extends jspb.Message {
  getTotalResults(): number;
  setTotalResults(value: number): JobGetQueryResultsResponse;

  getJob(): Job | undefined;
  setJob(value?: Job): JobGetQueryResultsResponse;
  hasJob(): boolean;
  clearJob(): JobGetQueryResultsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobGetQueryResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobGetQueryResultsResponse): JobGetQueryResultsResponse.AsObject;
  static serializeBinaryToWriter(message: JobGetQueryResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobGetQueryResultsResponse;
  static deserializeBinaryFromReader(message: JobGetQueryResultsResponse, reader: jspb.BinaryReader): JobGetQueryResultsResponse;
}

export namespace JobGetQueryResultsResponse {
  export type AsObject = {
    totalResults: number,
    job?: Job.AsObject,
  }
}

export class JobQueryDoneResponse extends jspb.Message {
  getJob(): Job | undefined;
  setJob(value?: Job): JobQueryDoneResponse;
  hasJob(): boolean;
  clearJob(): JobQueryDoneResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobQueryDoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobQueryDoneResponse): JobQueryDoneResponse.AsObject;
  static serializeBinaryToWriter(message: JobQueryDoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobQueryDoneResponse;
  static deserializeBinaryFromReader(message: JobQueryDoneResponse, reader: jspb.BinaryReader): JobQueryDoneResponse;
}

export namespace JobQueryDoneResponse {
  export type AsObject = {
    job?: Job.AsObject,
  }
}

export class JobCompletedEvent extends jspb.Message {
  getEventName(): string;
  setEventName(value: string): JobCompletedEvent;

  getJob(): Job | undefined;
  setJob(value?: Job): JobCompletedEvent;
  hasJob(): boolean;
  clearJob(): JobCompletedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobCompletedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: JobCompletedEvent): JobCompletedEvent.AsObject;
  static serializeBinaryToWriter(message: JobCompletedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobCompletedEvent;
  static deserializeBinaryFromReader(message: JobCompletedEvent, reader: jspb.BinaryReader): JobCompletedEvent;
}

export namespace JobCompletedEvent {
  export type AsObject = {
    eventName: string,
    job?: Job.AsObject,
  }
}

export class TableDataListRequest extends jspb.Message {
  getStartRow(): number;
  setStartRow(value: number): TableDataListRequest;

  getMaxResults(): number;
  setMaxResults(value: number): TableDataListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableDataListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TableDataListRequest): TableDataListRequest.AsObject;
  static serializeBinaryToWriter(message: TableDataListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableDataListRequest;
  static deserializeBinaryFromReader(message: TableDataListRequest, reader: jspb.BinaryReader): TableDataListRequest;
}

export namespace TableDataListRequest {
  export type AsObject = {
    startRow: number,
    maxResults: number,
  }
}

export class Table extends jspb.Message {
  getTableName(): TableName | undefined;
  setTableName(value?: TableName): Table;
  hasTableName(): boolean;
  clearTableName(): Table;

  getInfo(): TableInfo | undefined;
  setInfo(value?: TableInfo): Table;
  hasInfo(): boolean;
  clearInfo(): Table;

  getSchemaJson(): string;
  setSchemaJson(value: string): Table;

  getView(): TableViewDefinition | undefined;
  setView(value?: TableViewDefinition): Table;
  hasView(): boolean;
  clearView(): Table;

  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): Table;
  hasExpireTime(): boolean;
  clearExpireTime(): Table;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Table;
  hasCreateTime(): boolean;
  clearCreateTime(): Table;

  getTruncateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTruncateTime(value?: google_protobuf_timestamp_pb.Timestamp): Table;
  hasTruncateTime(): boolean;
  clearTruncateTime(): Table;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Table.AsObject;
  static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
  static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Table;
  static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
  export type AsObject = {
    tableName?: TableName.AsObject,
    info?: TableInfo.AsObject,
    schemaJson: string,
    view?: TableViewDefinition.AsObject,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    truncateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TableInfo extends jspb.Message {
  getFriendlyName(): string;
  setFriendlyName(value: string): TableInfo;

  getDescription(): string;
  setDescription(value: string): TableInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TableInfo): TableInfo.AsObject;
  static serializeBinaryToWriter(message: TableInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableInfo;
  static deserializeBinaryFromReader(message: TableInfo, reader: jspb.BinaryReader): TableInfo;
}

export namespace TableInfo {
  export type AsObject = {
    friendlyName: string,
    description: string,
  }
}

export class TableViewDefinition extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): TableViewDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableViewDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: TableViewDefinition): TableViewDefinition.AsObject;
  static serializeBinaryToWriter(message: TableViewDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableViewDefinition;
  static deserializeBinaryFromReader(message: TableViewDefinition, reader: jspb.BinaryReader): TableViewDefinition;
}

export namespace TableViewDefinition {
  export type AsObject = {
    query: string,
  }
}

export class Dataset extends jspb.Message {
  getDatasetName(): DatasetName | undefined;
  setDatasetName(value?: DatasetName): Dataset;
  hasDatasetName(): boolean;
  clearDatasetName(): Dataset;

  getInfo(): DatasetInfo | undefined;
  setInfo(value?: DatasetInfo): Dataset;
  hasInfo(): boolean;
  clearInfo(): Dataset;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Dataset;
  hasCreateTime(): boolean;
  clearCreateTime(): Dataset;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Dataset;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Dataset;

  getAcl(): BigQueryAcl | undefined;
  setAcl(value?: BigQueryAcl): Dataset;
  hasAcl(): boolean;
  clearAcl(): Dataset;

  getDefaultTableExpireDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDefaultTableExpireDuration(value?: google_protobuf_duration_pb.Duration): Dataset;
  hasDefaultTableExpireDuration(): boolean;
  clearDefaultTableExpireDuration(): Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    datasetName?: DatasetName.AsObject,
    info?: DatasetInfo.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    acl?: BigQueryAcl.AsObject,
    defaultTableExpireDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class DatasetInfo extends jspb.Message {
  getFriendlyName(): string;
  setFriendlyName(value: string): DatasetInfo;

  getDescription(): string;
  setDescription(value: string): DatasetInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetInfo): DatasetInfo.AsObject;
  static serializeBinaryToWriter(message: DatasetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetInfo;
  static deserializeBinaryFromReader(message: DatasetInfo, reader: jspb.BinaryReader): DatasetInfo;
}

export namespace DatasetInfo {
  export type AsObject = {
    friendlyName: string,
    description: string,
  }
}

export class BigQueryAcl extends jspb.Message {
  getEntriesList(): Array<BigQueryAcl.Entry>;
  setEntriesList(value: Array<BigQueryAcl.Entry>): BigQueryAcl;
  clearEntriesList(): BigQueryAcl;
  addEntries(value?: BigQueryAcl.Entry, index?: number): BigQueryAcl.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryAcl.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryAcl): BigQueryAcl.AsObject;
  static serializeBinaryToWriter(message: BigQueryAcl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryAcl;
  static deserializeBinaryFromReader(message: BigQueryAcl, reader: jspb.BinaryReader): BigQueryAcl;
}

export namespace BigQueryAcl {
  export type AsObject = {
    entriesList: Array<BigQueryAcl.Entry.AsObject>,
  }

  export class Entry extends jspb.Message {
    getRole(): string;
    setRole(value: string): Entry;

    getGroupEmail(): string;
    setGroupEmail(value: string): Entry;

    getUserEmail(): string;
    setUserEmail(value: string): Entry;

    getDomain(): string;
    setDomain(value: string): Entry;

    getSpecialGroup(): string;
    setSpecialGroup(value: string): Entry;

    getViewName(): TableName | undefined;
    setViewName(value?: TableName): Entry;
    hasViewName(): boolean;
    clearViewName(): Entry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      role: string,
      groupEmail: string,
      userEmail: string,
      domain: string,
      specialGroup: string,
      viewName?: TableName.AsObject,
    }
  }

}

export class Job extends jspb.Message {
  getJobName(): JobName | undefined;
  setJobName(value?: JobName): Job;
  hasJobName(): boolean;
  clearJobName(): Job;

  getJobConfiguration(): JobConfiguration | undefined;
  setJobConfiguration(value?: JobConfiguration): Job;
  hasJobConfiguration(): boolean;
  clearJobConfiguration(): Job;

  getJobStatus(): JobStatus | undefined;
  setJobStatus(value?: JobStatus): Job;
  hasJobStatus(): boolean;
  clearJobStatus(): Job;

  getJobStatistics(): JobStatistics | undefined;
  setJobStatistics(value?: JobStatistics): Job;
  hasJobStatistics(): boolean;
  clearJobStatistics(): Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    jobName?: JobName.AsObject,
    jobConfiguration?: JobConfiguration.AsObject,
    jobStatus?: JobStatus.AsObject,
    jobStatistics?: JobStatistics.AsObject,
  }
}

export class JobConfiguration extends jspb.Message {
  getQuery(): JobConfiguration.Query | undefined;
  setQuery(value?: JobConfiguration.Query): JobConfiguration;
  hasQuery(): boolean;
  clearQuery(): JobConfiguration;

  getLoad(): JobConfiguration.Load | undefined;
  setLoad(value?: JobConfiguration.Load): JobConfiguration;
  hasLoad(): boolean;
  clearLoad(): JobConfiguration;

  getExtract(): JobConfiguration.Extract | undefined;
  setExtract(value?: JobConfiguration.Extract): JobConfiguration;
  hasExtract(): boolean;
  clearExtract(): JobConfiguration;

  getTableCopy(): JobConfiguration.TableCopy | undefined;
  setTableCopy(value?: JobConfiguration.TableCopy): JobConfiguration;
  hasTableCopy(): boolean;
  clearTableCopy(): JobConfiguration;

  getDryRun(): boolean;
  setDryRun(value: boolean): JobConfiguration;

  getConfigurationCase(): JobConfiguration.ConfigurationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: JobConfiguration): JobConfiguration.AsObject;
  static serializeBinaryToWriter(message: JobConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobConfiguration;
  static deserializeBinaryFromReader(message: JobConfiguration, reader: jspb.BinaryReader): JobConfiguration;
}

export namespace JobConfiguration {
  export type AsObject = {
    query?: JobConfiguration.Query.AsObject,
    load?: JobConfiguration.Load.AsObject,
    extract?: JobConfiguration.Extract.AsObject,
    tableCopy?: JobConfiguration.TableCopy.AsObject,
    dryRun: boolean,
  }

  export class Query extends jspb.Message {
    getQuery(): string;
    setQuery(value: string): Query;

    getDestinationTable(): TableName | undefined;
    setDestinationTable(value?: TableName): Query;
    hasDestinationTable(): boolean;
    clearDestinationTable(): Query;

    getCreateDisposition(): string;
    setCreateDisposition(value: string): Query;

    getWriteDisposition(): string;
    setWriteDisposition(value: string): Query;

    getDefaultDataset(): DatasetName | undefined;
    setDefaultDataset(value?: DatasetName): Query;
    hasDefaultDataset(): boolean;
    clearDefaultDataset(): Query;

    getTableDefinitionsList(): Array<TableDefinition>;
    setTableDefinitionsList(value: Array<TableDefinition>): Query;
    clearTableDefinitionsList(): Query;
    addTableDefinitions(value?: TableDefinition, index?: number): TableDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
  }

  export namespace Query {
    export type AsObject = {
      query: string,
      destinationTable?: TableName.AsObject,
      createDisposition: string,
      writeDisposition: string,
      defaultDataset?: DatasetName.AsObject,
      tableDefinitionsList: Array<TableDefinition.AsObject>,
    }
  }


  export class Load extends jspb.Message {
    getSourceUrisList(): Array<string>;
    setSourceUrisList(value: Array<string>): Load;
    clearSourceUrisList(): Load;
    addSourceUris(value: string, index?: number): Load;

    getSchemaJson(): string;
    setSchemaJson(value: string): Load;

    getDestinationTable(): TableName | undefined;
    setDestinationTable(value?: TableName): Load;
    hasDestinationTable(): boolean;
    clearDestinationTable(): Load;

    getCreateDisposition(): string;
    setCreateDisposition(value: string): Load;

    getWriteDisposition(): string;
    setWriteDisposition(value: string): Load;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Load.AsObject;
    static toObject(includeInstance: boolean, msg: Load): Load.AsObject;
    static serializeBinaryToWriter(message: Load, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Load;
    static deserializeBinaryFromReader(message: Load, reader: jspb.BinaryReader): Load;
  }

  export namespace Load {
    export type AsObject = {
      sourceUrisList: Array<string>,
      schemaJson: string,
      destinationTable?: TableName.AsObject,
      createDisposition: string,
      writeDisposition: string,
    }
  }


  export class Extract extends jspb.Message {
    getDestinationUrisList(): Array<string>;
    setDestinationUrisList(value: Array<string>): Extract;
    clearDestinationUrisList(): Extract;
    addDestinationUris(value: string, index?: number): Extract;

    getSourceTable(): TableName | undefined;
    setSourceTable(value?: TableName): Extract;
    hasSourceTable(): boolean;
    clearSourceTable(): Extract;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Extract.AsObject;
    static toObject(includeInstance: boolean, msg: Extract): Extract.AsObject;
    static serializeBinaryToWriter(message: Extract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Extract;
    static deserializeBinaryFromReader(message: Extract, reader: jspb.BinaryReader): Extract;
  }

  export namespace Extract {
    export type AsObject = {
      destinationUrisList: Array<string>,
      sourceTable?: TableName.AsObject,
    }
  }


  export class TableCopy extends jspb.Message {
    getSourceTablesList(): Array<TableName>;
    setSourceTablesList(value: Array<TableName>): TableCopy;
    clearSourceTablesList(): TableCopy;
    addSourceTables(value?: TableName, index?: number): TableName;

    getDestinationTable(): TableName | undefined;
    setDestinationTable(value?: TableName): TableCopy;
    hasDestinationTable(): boolean;
    clearDestinationTable(): TableCopy;

    getCreateDisposition(): string;
    setCreateDisposition(value: string): TableCopy;

    getWriteDisposition(): string;
    setWriteDisposition(value: string): TableCopy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableCopy.AsObject;
    static toObject(includeInstance: boolean, msg: TableCopy): TableCopy.AsObject;
    static serializeBinaryToWriter(message: TableCopy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableCopy;
    static deserializeBinaryFromReader(message: TableCopy, reader: jspb.BinaryReader): TableCopy;
  }

  export namespace TableCopy {
    export type AsObject = {
      sourceTablesList: Array<TableName.AsObject>,
      destinationTable?: TableName.AsObject,
      createDisposition: string,
      writeDisposition: string,
    }
  }


  export enum ConfigurationCase { 
    CONFIGURATION_NOT_SET = 0,
    QUERY = 5,
    LOAD = 6,
    EXTRACT = 7,
    TABLE_COPY = 8,
  }
}

export class TableDefinition extends jspb.Message {
  getName(): string;
  setName(value: string): TableDefinition;

  getSourceUrisList(): Array<string>;
  setSourceUrisList(value: Array<string>): TableDefinition;
  clearSourceUrisList(): TableDefinition;
  addSourceUris(value: string, index?: number): TableDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: TableDefinition): TableDefinition.AsObject;
  static serializeBinaryToWriter(message: TableDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableDefinition;
  static deserializeBinaryFromReader(message: TableDefinition, reader: jspb.BinaryReader): TableDefinition;
}

export namespace TableDefinition {
  export type AsObject = {
    name: string,
    sourceUrisList: Array<string>,
  }
}

export class JobStatus extends jspb.Message {
  getState(): string;
  setState(value: string): JobStatus;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): JobStatus;
  hasError(): boolean;
  clearError(): JobStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobStatus.AsObject;
  static toObject(includeInstance: boolean, msg: JobStatus): JobStatus.AsObject;
  static serializeBinaryToWriter(message: JobStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobStatus;
  static deserializeBinaryFromReader(message: JobStatus, reader: jspb.BinaryReader): JobStatus;
}

export namespace JobStatus {
  export type AsObject = {
    state: string,
    error?: google_rpc_status_pb.Status.AsObject,
  }
}

export class JobStatistics extends jspb.Message {
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): JobStatistics;
  hasCreateTime(): boolean;
  clearCreateTime(): JobStatistics;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): JobStatistics;
  hasStartTime(): boolean;
  clearStartTime(): JobStatistics;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): JobStatistics;
  hasEndTime(): boolean;
  clearEndTime(): JobStatistics;

  getTotalProcessedBytes(): number;
  setTotalProcessedBytes(value: number): JobStatistics;

  getTotalBilledBytes(): number;
  setTotalBilledBytes(value: number): JobStatistics;

  getBillingTier(): number;
  setBillingTier(value: number): JobStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: JobStatistics): JobStatistics.AsObject;
  static serializeBinaryToWriter(message: JobStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobStatistics;
  static deserializeBinaryFromReader(message: JobStatistics, reader: jspb.BinaryReader): JobStatistics;
}

export namespace JobStatistics {
  export type AsObject = {
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalProcessedBytes: number,
    totalBilledBytes: number,
    billingTier: number,
  }
}

export class DatasetName extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DatasetName;

  getDatasetId(): string;
  setDatasetId(value: string): DatasetName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetName.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetName): DatasetName.AsObject;
  static serializeBinaryToWriter(message: DatasetName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetName;
  static deserializeBinaryFromReader(message: DatasetName, reader: jspb.BinaryReader): DatasetName;
}

export namespace DatasetName {
  export type AsObject = {
    projectId: string,
    datasetId: string,
  }
}

export class TableName extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): TableName;

  getDatasetId(): string;
  setDatasetId(value: string): TableName;

  getTableId(): string;
  setTableId(value: string): TableName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableName.AsObject;
  static toObject(includeInstance: boolean, msg: TableName): TableName.AsObject;
  static serializeBinaryToWriter(message: TableName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableName;
  static deserializeBinaryFromReader(message: TableName, reader: jspb.BinaryReader): TableName;
}

export namespace TableName {
  export type AsObject = {
    projectId: string,
    datasetId: string,
    tableId: string,
  }
}

export class JobName extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): JobName;

  getJobId(): string;
  setJobId(value: string): JobName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobName.AsObject;
  static toObject(includeInstance: boolean, msg: JobName): JobName.AsObject;
  static serializeBinaryToWriter(message: JobName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobName;
  static deserializeBinaryFromReader(message: JobName, reader: jspb.BinaryReader): JobName;
}

export namespace JobName {
  export type AsObject = {
    projectId: string,
    jobId: string,
  }
}

