import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_code_pb from '../../../google/rpc/code_pb';
import * as google_type_date_pb from '../../../google/type/date_pb';
import * as google_type_timeofday_pb from '../../../google/type/timeofday_pb';


export class GoogleServiceAccount extends jspb.Message {
  getAccountEmail(): string;
  setAccountEmail(value: string): GoogleServiceAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleServiceAccount.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleServiceAccount): GoogleServiceAccount.AsObject;
  static serializeBinaryToWriter(message: GoogleServiceAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleServiceAccount;
  static deserializeBinaryFromReader(message: GoogleServiceAccount, reader: jspb.BinaryReader): GoogleServiceAccount;
}

export namespace GoogleServiceAccount {
  export type AsObject = {
    accountEmail: string,
  }
}

export class AwsAccessKey extends jspb.Message {
  getAccessKeyId(): string;
  setAccessKeyId(value: string): AwsAccessKey;

  getSecretAccessKey(): string;
  setSecretAccessKey(value: string): AwsAccessKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AwsAccessKey.AsObject;
  static toObject(includeInstance: boolean, msg: AwsAccessKey): AwsAccessKey.AsObject;
  static serializeBinaryToWriter(message: AwsAccessKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AwsAccessKey;
  static deserializeBinaryFromReader(message: AwsAccessKey, reader: jspb.BinaryReader): AwsAccessKey;
}

export namespace AwsAccessKey {
  export type AsObject = {
    accessKeyId: string,
    secretAccessKey: string,
  }
}

export class ObjectConditions extends jspb.Message {
  getMinTimeElapsedSinceLastModification(): google_protobuf_duration_pb.Duration | undefined;
  setMinTimeElapsedSinceLastModification(value?: google_protobuf_duration_pb.Duration): ObjectConditions;
  hasMinTimeElapsedSinceLastModification(): boolean;
  clearMinTimeElapsedSinceLastModification(): ObjectConditions;

  getMaxTimeElapsedSinceLastModification(): google_protobuf_duration_pb.Duration | undefined;
  setMaxTimeElapsedSinceLastModification(value?: google_protobuf_duration_pb.Duration): ObjectConditions;
  hasMaxTimeElapsedSinceLastModification(): boolean;
  clearMaxTimeElapsedSinceLastModification(): ObjectConditions;

  getIncludePrefixesList(): Array<string>;
  setIncludePrefixesList(value: Array<string>): ObjectConditions;
  clearIncludePrefixesList(): ObjectConditions;
  addIncludePrefixes(value: string, index?: number): ObjectConditions;

  getExcludePrefixesList(): Array<string>;
  setExcludePrefixesList(value: Array<string>): ObjectConditions;
  clearExcludePrefixesList(): ObjectConditions;
  addExcludePrefixes(value: string, index?: number): ObjectConditions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectConditions.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectConditions): ObjectConditions.AsObject;
  static serializeBinaryToWriter(message: ObjectConditions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectConditions;
  static deserializeBinaryFromReader(message: ObjectConditions, reader: jspb.BinaryReader): ObjectConditions;
}

export namespace ObjectConditions {
  export type AsObject = {
    minTimeElapsedSinceLastModification?: google_protobuf_duration_pb.Duration.AsObject,
    maxTimeElapsedSinceLastModification?: google_protobuf_duration_pb.Duration.AsObject,
    includePrefixesList: Array<string>,
    excludePrefixesList: Array<string>,
  }
}

export class GcsData extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): GcsData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsData.AsObject;
  static toObject(includeInstance: boolean, msg: GcsData): GcsData.AsObject;
  static serializeBinaryToWriter(message: GcsData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsData;
  static deserializeBinaryFromReader(message: GcsData, reader: jspb.BinaryReader): GcsData;
}

export namespace GcsData {
  export type AsObject = {
    bucketName: string,
  }
}

export class AwsS3Data extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): AwsS3Data;

  getAwsAccessKey(): AwsAccessKey | undefined;
  setAwsAccessKey(value?: AwsAccessKey): AwsS3Data;
  hasAwsAccessKey(): boolean;
  clearAwsAccessKey(): AwsS3Data;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AwsS3Data.AsObject;
  static toObject(includeInstance: boolean, msg: AwsS3Data): AwsS3Data.AsObject;
  static serializeBinaryToWriter(message: AwsS3Data, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AwsS3Data;
  static deserializeBinaryFromReader(message: AwsS3Data, reader: jspb.BinaryReader): AwsS3Data;
}

export namespace AwsS3Data {
  export type AsObject = {
    bucketName: string,
    awsAccessKey?: AwsAccessKey.AsObject,
  }
}

export class HttpData extends jspb.Message {
  getListUrl(): string;
  setListUrl(value: string): HttpData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpData.AsObject;
  static toObject(includeInstance: boolean, msg: HttpData): HttpData.AsObject;
  static serializeBinaryToWriter(message: HttpData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpData;
  static deserializeBinaryFromReader(message: HttpData, reader: jspb.BinaryReader): HttpData;
}

export namespace HttpData {
  export type AsObject = {
    listUrl: string,
  }
}

export class TransferOptions extends jspb.Message {
  getOverwriteObjectsAlreadyExistingInSink(): boolean;
  setOverwriteObjectsAlreadyExistingInSink(value: boolean): TransferOptions;

  getDeleteObjectsUniqueInSink(): boolean;
  setDeleteObjectsUniqueInSink(value: boolean): TransferOptions;

  getDeleteObjectsFromSourceAfterTransfer(): boolean;
  setDeleteObjectsFromSourceAfterTransfer(value: boolean): TransferOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferOptions.AsObject;
  static toObject(includeInstance: boolean, msg: TransferOptions): TransferOptions.AsObject;
  static serializeBinaryToWriter(message: TransferOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferOptions;
  static deserializeBinaryFromReader(message: TransferOptions, reader: jspb.BinaryReader): TransferOptions;
}

export namespace TransferOptions {
  export type AsObject = {
    overwriteObjectsAlreadyExistingInSink: boolean,
    deleteObjectsUniqueInSink: boolean,
    deleteObjectsFromSourceAfterTransfer: boolean,
  }
}

export class TransferSpec extends jspb.Message {
  getGcsDataSource(): GcsData | undefined;
  setGcsDataSource(value?: GcsData): TransferSpec;
  hasGcsDataSource(): boolean;
  clearGcsDataSource(): TransferSpec;

  getAwsS3DataSource(): AwsS3Data | undefined;
  setAwsS3DataSource(value?: AwsS3Data): TransferSpec;
  hasAwsS3DataSource(): boolean;
  clearAwsS3DataSource(): TransferSpec;

  getHttpDataSource(): HttpData | undefined;
  setHttpDataSource(value?: HttpData): TransferSpec;
  hasHttpDataSource(): boolean;
  clearHttpDataSource(): TransferSpec;

  getGcsDataSink(): GcsData | undefined;
  setGcsDataSink(value?: GcsData): TransferSpec;
  hasGcsDataSink(): boolean;
  clearGcsDataSink(): TransferSpec;

  getObjectConditions(): ObjectConditions | undefined;
  setObjectConditions(value?: ObjectConditions): TransferSpec;
  hasObjectConditions(): boolean;
  clearObjectConditions(): TransferSpec;

  getTransferOptions(): TransferOptions | undefined;
  setTransferOptions(value?: TransferOptions): TransferSpec;
  hasTransferOptions(): boolean;
  clearTransferOptions(): TransferSpec;

  getDataSourceCase(): TransferSpec.DataSourceCase;

  getDataSinkCase(): TransferSpec.DataSinkCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TransferSpec): TransferSpec.AsObject;
  static serializeBinaryToWriter(message: TransferSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferSpec;
  static deserializeBinaryFromReader(message: TransferSpec, reader: jspb.BinaryReader): TransferSpec;
}

export namespace TransferSpec {
  export type AsObject = {
    gcsDataSource?: GcsData.AsObject,
    awsS3DataSource?: AwsS3Data.AsObject,
    httpDataSource?: HttpData.AsObject,
    gcsDataSink?: GcsData.AsObject,
    objectConditions?: ObjectConditions.AsObject,
    transferOptions?: TransferOptions.AsObject,
  }

  export enum DataSourceCase { 
    DATA_SOURCE_NOT_SET = 0,
    GCS_DATA_SOURCE = 1,
    AWS_S3_DATA_SOURCE = 2,
    HTTP_DATA_SOURCE = 3,
  }

  export enum DataSinkCase { 
    DATA_SINK_NOT_SET = 0,
    GCS_DATA_SINK = 4,
  }
}

export class Schedule extends jspb.Message {
  getScheduleStartDate(): google_type_date_pb.Date | undefined;
  setScheduleStartDate(value?: google_type_date_pb.Date): Schedule;
  hasScheduleStartDate(): boolean;
  clearScheduleStartDate(): Schedule;

  getScheduleEndDate(): google_type_date_pb.Date | undefined;
  setScheduleEndDate(value?: google_type_date_pb.Date): Schedule;
  hasScheduleEndDate(): boolean;
  clearScheduleEndDate(): Schedule;

  getStartTimeOfDay(): google_type_timeofday_pb.TimeOfDay | undefined;
  setStartTimeOfDay(value?: google_type_timeofday_pb.TimeOfDay): Schedule;
  hasStartTimeOfDay(): boolean;
  clearStartTimeOfDay(): Schedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schedule.AsObject;
  static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
  static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schedule;
  static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
}

export namespace Schedule {
  export type AsObject = {
    scheduleStartDate?: google_type_date_pb.Date.AsObject,
    scheduleEndDate?: google_type_date_pb.Date.AsObject,
    startTimeOfDay?: google_type_timeofday_pb.TimeOfDay.AsObject,
  }
}

export class TransferJob extends jspb.Message {
  getName(): string;
  setName(value: string): TransferJob;

  getDescription(): string;
  setDescription(value: string): TransferJob;

  getProjectId(): string;
  setProjectId(value: string): TransferJob;

  getTransferSpec(): TransferSpec | undefined;
  setTransferSpec(value?: TransferSpec): TransferJob;
  hasTransferSpec(): boolean;
  clearTransferSpec(): TransferJob;

  getSchedule(): Schedule | undefined;
  setSchedule(value?: Schedule): TransferJob;
  hasSchedule(): boolean;
  clearSchedule(): TransferJob;

  getStatus(): TransferJob.Status;
  setStatus(value: TransferJob.Status): TransferJob;

  getCreationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferJob;
  hasCreationTime(): boolean;
  clearCreationTime(): TransferJob;

  getLastModificationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModificationTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferJob;
  hasLastModificationTime(): boolean;
  clearLastModificationTime(): TransferJob;

  getDeletionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferJob;
  hasDeletionTime(): boolean;
  clearDeletionTime(): TransferJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferJob.AsObject;
  static toObject(includeInstance: boolean, msg: TransferJob): TransferJob.AsObject;
  static serializeBinaryToWriter(message: TransferJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferJob;
  static deserializeBinaryFromReader(message: TransferJob, reader: jspb.BinaryReader): TransferJob;
}

export namespace TransferJob {
  export type AsObject = {
    name: string,
    description: string,
    projectId: string,
    transferSpec?: TransferSpec.AsObject,
    schedule?: Schedule.AsObject,
    status: TransferJob.Status,
    creationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModificationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum Status { 
    STATUS_UNSPECIFIED = 0,
    ENABLED = 1,
    DISABLED = 2,
    DELETED = 3,
  }
}

export class ErrorLogEntry extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): ErrorLogEntry;

  getErrorDetailsList(): Array<string>;
  setErrorDetailsList(value: Array<string>): ErrorLogEntry;
  clearErrorDetailsList(): ErrorLogEntry;
  addErrorDetails(value: string, index?: number): ErrorLogEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorLogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorLogEntry): ErrorLogEntry.AsObject;
  static serializeBinaryToWriter(message: ErrorLogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorLogEntry;
  static deserializeBinaryFromReader(message: ErrorLogEntry, reader: jspb.BinaryReader): ErrorLogEntry;
}

export namespace ErrorLogEntry {
  export type AsObject = {
    url: string,
    errorDetailsList: Array<string>,
  }
}

export class ErrorSummary extends jspb.Message {
  getErrorCode(): google_rpc_code_pb.Code;
  setErrorCode(value: google_rpc_code_pb.Code): ErrorSummary;

  getErrorCount(): number;
  setErrorCount(value: number): ErrorSummary;

  getErrorLogEntriesList(): Array<ErrorLogEntry>;
  setErrorLogEntriesList(value: Array<ErrorLogEntry>): ErrorSummary;
  clearErrorLogEntriesList(): ErrorSummary;
  addErrorLogEntries(value?: ErrorLogEntry, index?: number): ErrorLogEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorSummary): ErrorSummary.AsObject;
  static serializeBinaryToWriter(message: ErrorSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorSummary;
  static deserializeBinaryFromReader(message: ErrorSummary, reader: jspb.BinaryReader): ErrorSummary;
}

export namespace ErrorSummary {
  export type AsObject = {
    errorCode: google_rpc_code_pb.Code,
    errorCount: number,
    errorLogEntriesList: Array<ErrorLogEntry.AsObject>,
  }
}

export class TransferCounters extends jspb.Message {
  getObjectsFoundFromSource(): number;
  setObjectsFoundFromSource(value: number): TransferCounters;

  getBytesFoundFromSource(): number;
  setBytesFoundFromSource(value: number): TransferCounters;

  getObjectsFoundOnlyFromSink(): number;
  setObjectsFoundOnlyFromSink(value: number): TransferCounters;

  getBytesFoundOnlyFromSink(): number;
  setBytesFoundOnlyFromSink(value: number): TransferCounters;

  getObjectsFromSourceSkippedBySync(): number;
  setObjectsFromSourceSkippedBySync(value: number): TransferCounters;

  getBytesFromSourceSkippedBySync(): number;
  setBytesFromSourceSkippedBySync(value: number): TransferCounters;

  getObjectsCopiedToSink(): number;
  setObjectsCopiedToSink(value: number): TransferCounters;

  getBytesCopiedToSink(): number;
  setBytesCopiedToSink(value: number): TransferCounters;

  getObjectsDeletedFromSource(): number;
  setObjectsDeletedFromSource(value: number): TransferCounters;

  getBytesDeletedFromSource(): number;
  setBytesDeletedFromSource(value: number): TransferCounters;

  getObjectsDeletedFromSink(): number;
  setObjectsDeletedFromSink(value: number): TransferCounters;

  getBytesDeletedFromSink(): number;
  setBytesDeletedFromSink(value: number): TransferCounters;

  getObjectsFromSourceFailed(): number;
  setObjectsFromSourceFailed(value: number): TransferCounters;

  getBytesFromSourceFailed(): number;
  setBytesFromSourceFailed(value: number): TransferCounters;

  getObjectsFailedToDeleteFromSink(): number;
  setObjectsFailedToDeleteFromSink(value: number): TransferCounters;

  getBytesFailedToDeleteFromSink(): number;
  setBytesFailedToDeleteFromSink(value: number): TransferCounters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCounters.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCounters): TransferCounters.AsObject;
  static serializeBinaryToWriter(message: TransferCounters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCounters;
  static deserializeBinaryFromReader(message: TransferCounters, reader: jspb.BinaryReader): TransferCounters;
}

export namespace TransferCounters {
  export type AsObject = {
    objectsFoundFromSource: number,
    bytesFoundFromSource: number,
    objectsFoundOnlyFromSink: number,
    bytesFoundOnlyFromSink: number,
    objectsFromSourceSkippedBySync: number,
    bytesFromSourceSkippedBySync: number,
    objectsCopiedToSink: number,
    bytesCopiedToSink: number,
    objectsDeletedFromSource: number,
    bytesDeletedFromSource: number,
    objectsDeletedFromSink: number,
    bytesDeletedFromSink: number,
    objectsFromSourceFailed: number,
    bytesFromSourceFailed: number,
    objectsFailedToDeleteFromSink: number,
    bytesFailedToDeleteFromSink: number,
  }
}

export class TransferOperation extends jspb.Message {
  getName(): string;
  setName(value: string): TransferOperation;

  getProjectId(): string;
  setProjectId(value: string): TransferOperation;

  getTransferSpec(): TransferSpec | undefined;
  setTransferSpec(value?: TransferSpec): TransferOperation;
  hasTransferSpec(): boolean;
  clearTransferSpec(): TransferOperation;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferOperation;
  hasStartTime(): boolean;
  clearStartTime(): TransferOperation;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferOperation;
  hasEndTime(): boolean;
  clearEndTime(): TransferOperation;

  getStatus(): TransferOperation.Status;
  setStatus(value: TransferOperation.Status): TransferOperation;

  getCounters(): TransferCounters | undefined;
  setCounters(value?: TransferCounters): TransferOperation;
  hasCounters(): boolean;
  clearCounters(): TransferOperation;

  getErrorBreakdownsList(): Array<ErrorSummary>;
  setErrorBreakdownsList(value: Array<ErrorSummary>): TransferOperation;
  clearErrorBreakdownsList(): TransferOperation;
  addErrorBreakdowns(value?: ErrorSummary, index?: number): ErrorSummary;

  getTransferJobName(): string;
  setTransferJobName(value: string): TransferOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferOperation.AsObject;
  static toObject(includeInstance: boolean, msg: TransferOperation): TransferOperation.AsObject;
  static serializeBinaryToWriter(message: TransferOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferOperation;
  static deserializeBinaryFromReader(message: TransferOperation, reader: jspb.BinaryReader): TransferOperation;
}

export namespace TransferOperation {
  export type AsObject = {
    name: string,
    projectId: string,
    transferSpec?: TransferSpec.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: TransferOperation.Status,
    counters?: TransferCounters.AsObject,
    errorBreakdownsList: Array<ErrorSummary.AsObject>,
    transferJobName: string,
  }

  export enum Status { 
    STATUS_UNSPECIFIED = 0,
    IN_PROGRESS = 1,
    PAUSED = 2,
    SUCCESS = 3,
    FAILED = 4,
    ABORTED = 5,
  }
}

