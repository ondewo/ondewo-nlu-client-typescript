import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class LoggingConfig extends jspb.Message {
  getDriverLogLevelsMap(): jspb.Map<string, LoggingConfig.Level>;
  clearDriverLogLevelsMap(): LoggingConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoggingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LoggingConfig): LoggingConfig.AsObject;
  static serializeBinaryToWriter(message: LoggingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoggingConfig;
  static deserializeBinaryFromReader(message: LoggingConfig, reader: jspb.BinaryReader): LoggingConfig;
}

export namespace LoggingConfig {
  export type AsObject = {
    driverLogLevelsMap: Array<[string, LoggingConfig.Level]>,
  }

  export enum Level { 
    LEVEL_UNSPECIFIED = 0,
    ALL = 1,
    TRACE = 2,
    DEBUG = 3,
    INFO = 4,
    WARN = 5,
    ERROR = 6,
    FATAL = 7,
    OFF = 8,
  }
}

export class HadoopJob extends jspb.Message {
  getMainJarFileUri(): string;
  setMainJarFileUri(value: string): HadoopJob;

  getMainClass(): string;
  setMainClass(value: string): HadoopJob;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): HadoopJob;
  clearArgsList(): HadoopJob;
  addArgs(value: string, index?: number): HadoopJob;

  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): HadoopJob;
  clearJarFileUrisList(): HadoopJob;
  addJarFileUris(value: string, index?: number): HadoopJob;

  getFileUrisList(): Array<string>;
  setFileUrisList(value: Array<string>): HadoopJob;
  clearFileUrisList(): HadoopJob;
  addFileUris(value: string, index?: number): HadoopJob;

  getArchiveUrisList(): Array<string>;
  setArchiveUrisList(value: Array<string>): HadoopJob;
  clearArchiveUrisList(): HadoopJob;
  addArchiveUris(value: string, index?: number): HadoopJob;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): HadoopJob;

  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): HadoopJob;
  hasLoggingConfig(): boolean;
  clearLoggingConfig(): HadoopJob;

  getDriverCase(): HadoopJob.DriverCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HadoopJob.AsObject;
  static toObject(includeInstance: boolean, msg: HadoopJob): HadoopJob.AsObject;
  static serializeBinaryToWriter(message: HadoopJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HadoopJob;
  static deserializeBinaryFromReader(message: HadoopJob, reader: jspb.BinaryReader): HadoopJob;
}

export namespace HadoopJob {
  export type AsObject = {
    mainJarFileUri: string,
    mainClass: string,
    argsList: Array<string>,
    jarFileUrisList: Array<string>,
    fileUrisList: Array<string>,
    archiveUrisList: Array<string>,
    propertiesMap: Array<[string, string]>,
    loggingConfig?: LoggingConfig.AsObject,
  }

  export enum DriverCase { 
    DRIVER_NOT_SET = 0,
    MAIN_JAR_FILE_URI = 1,
    MAIN_CLASS = 2,
  }
}

export class SparkJob extends jspb.Message {
  getMainJarFileUri(): string;
  setMainJarFileUri(value: string): SparkJob;

  getMainClass(): string;
  setMainClass(value: string): SparkJob;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): SparkJob;
  clearArgsList(): SparkJob;
  addArgs(value: string, index?: number): SparkJob;

  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): SparkJob;
  clearJarFileUrisList(): SparkJob;
  addJarFileUris(value: string, index?: number): SparkJob;

  getFileUrisList(): Array<string>;
  setFileUrisList(value: Array<string>): SparkJob;
  clearFileUrisList(): SparkJob;
  addFileUris(value: string, index?: number): SparkJob;

  getArchiveUrisList(): Array<string>;
  setArchiveUrisList(value: Array<string>): SparkJob;
  clearArchiveUrisList(): SparkJob;
  addArchiveUris(value: string, index?: number): SparkJob;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): SparkJob;

  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): SparkJob;
  hasLoggingConfig(): boolean;
  clearLoggingConfig(): SparkJob;

  getDriverCase(): SparkJob.DriverCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparkJob.AsObject;
  static toObject(includeInstance: boolean, msg: SparkJob): SparkJob.AsObject;
  static serializeBinaryToWriter(message: SparkJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparkJob;
  static deserializeBinaryFromReader(message: SparkJob, reader: jspb.BinaryReader): SparkJob;
}

export namespace SparkJob {
  export type AsObject = {
    mainJarFileUri: string,
    mainClass: string,
    argsList: Array<string>,
    jarFileUrisList: Array<string>,
    fileUrisList: Array<string>,
    archiveUrisList: Array<string>,
    propertiesMap: Array<[string, string]>,
    loggingConfig?: LoggingConfig.AsObject,
  }

  export enum DriverCase { 
    DRIVER_NOT_SET = 0,
    MAIN_JAR_FILE_URI = 1,
    MAIN_CLASS = 2,
  }
}

export class PySparkJob extends jspb.Message {
  getMainPythonFileUri(): string;
  setMainPythonFileUri(value: string): PySparkJob;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): PySparkJob;
  clearArgsList(): PySparkJob;
  addArgs(value: string, index?: number): PySparkJob;

  getPythonFileUrisList(): Array<string>;
  setPythonFileUrisList(value: Array<string>): PySparkJob;
  clearPythonFileUrisList(): PySparkJob;
  addPythonFileUris(value: string, index?: number): PySparkJob;

  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): PySparkJob;
  clearJarFileUrisList(): PySparkJob;
  addJarFileUris(value: string, index?: number): PySparkJob;

  getFileUrisList(): Array<string>;
  setFileUrisList(value: Array<string>): PySparkJob;
  clearFileUrisList(): PySparkJob;
  addFileUris(value: string, index?: number): PySparkJob;

  getArchiveUrisList(): Array<string>;
  setArchiveUrisList(value: Array<string>): PySparkJob;
  clearArchiveUrisList(): PySparkJob;
  addArchiveUris(value: string, index?: number): PySparkJob;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): PySparkJob;

  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): PySparkJob;
  hasLoggingConfig(): boolean;
  clearLoggingConfig(): PySparkJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PySparkJob.AsObject;
  static toObject(includeInstance: boolean, msg: PySparkJob): PySparkJob.AsObject;
  static serializeBinaryToWriter(message: PySparkJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PySparkJob;
  static deserializeBinaryFromReader(message: PySparkJob, reader: jspb.BinaryReader): PySparkJob;
}

export namespace PySparkJob {
  export type AsObject = {
    mainPythonFileUri: string,
    argsList: Array<string>,
    pythonFileUrisList: Array<string>,
    jarFileUrisList: Array<string>,
    fileUrisList: Array<string>,
    archiveUrisList: Array<string>,
    propertiesMap: Array<[string, string]>,
    loggingConfig?: LoggingConfig.AsObject,
  }
}

export class QueryList extends jspb.Message {
  getQueriesList(): Array<string>;
  setQueriesList(value: Array<string>): QueryList;
  clearQueriesList(): QueryList;
  addQueries(value: string, index?: number): QueryList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryList.AsObject;
  static toObject(includeInstance: boolean, msg: QueryList): QueryList.AsObject;
  static serializeBinaryToWriter(message: QueryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryList;
  static deserializeBinaryFromReader(message: QueryList, reader: jspb.BinaryReader): QueryList;
}

export namespace QueryList {
  export type AsObject = {
    queriesList: Array<string>,
  }
}

export class HiveJob extends jspb.Message {
  getQueryFileUri(): string;
  setQueryFileUri(value: string): HiveJob;

  getQueryList(): QueryList | undefined;
  setQueryList(value?: QueryList): HiveJob;
  hasQueryList(): boolean;
  clearQueryList(): HiveJob;

  getContinueOnFailure(): boolean;
  setContinueOnFailure(value: boolean): HiveJob;

  getScriptVariablesMap(): jspb.Map<string, string>;
  clearScriptVariablesMap(): HiveJob;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): HiveJob;

  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): HiveJob;
  clearJarFileUrisList(): HiveJob;
  addJarFileUris(value: string, index?: number): HiveJob;

  getQueriesCase(): HiveJob.QueriesCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HiveJob.AsObject;
  static toObject(includeInstance: boolean, msg: HiveJob): HiveJob.AsObject;
  static serializeBinaryToWriter(message: HiveJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HiveJob;
  static deserializeBinaryFromReader(message: HiveJob, reader: jspb.BinaryReader): HiveJob;
}

export namespace HiveJob {
  export type AsObject = {
    queryFileUri: string,
    queryList?: QueryList.AsObject,
    continueOnFailure: boolean,
    scriptVariablesMap: Array<[string, string]>,
    propertiesMap: Array<[string, string]>,
    jarFileUrisList: Array<string>,
  }

  export enum QueriesCase { 
    QUERIES_NOT_SET = 0,
    QUERY_FILE_URI = 1,
    QUERY_LIST = 2,
  }
}

export class SparkSqlJob extends jspb.Message {
  getQueryFileUri(): string;
  setQueryFileUri(value: string): SparkSqlJob;

  getQueryList(): QueryList | undefined;
  setQueryList(value?: QueryList): SparkSqlJob;
  hasQueryList(): boolean;
  clearQueryList(): SparkSqlJob;

  getScriptVariablesMap(): jspb.Map<string, string>;
  clearScriptVariablesMap(): SparkSqlJob;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): SparkSqlJob;

  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): SparkSqlJob;
  clearJarFileUrisList(): SparkSqlJob;
  addJarFileUris(value: string, index?: number): SparkSqlJob;

  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): SparkSqlJob;
  hasLoggingConfig(): boolean;
  clearLoggingConfig(): SparkSqlJob;

  getQueriesCase(): SparkSqlJob.QueriesCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparkSqlJob.AsObject;
  static toObject(includeInstance: boolean, msg: SparkSqlJob): SparkSqlJob.AsObject;
  static serializeBinaryToWriter(message: SparkSqlJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparkSqlJob;
  static deserializeBinaryFromReader(message: SparkSqlJob, reader: jspb.BinaryReader): SparkSqlJob;
}

export namespace SparkSqlJob {
  export type AsObject = {
    queryFileUri: string,
    queryList?: QueryList.AsObject,
    scriptVariablesMap: Array<[string, string]>,
    propertiesMap: Array<[string, string]>,
    jarFileUrisList: Array<string>,
    loggingConfig?: LoggingConfig.AsObject,
  }

  export enum QueriesCase { 
    QUERIES_NOT_SET = 0,
    QUERY_FILE_URI = 1,
    QUERY_LIST = 2,
  }
}

export class PigJob extends jspb.Message {
  getQueryFileUri(): string;
  setQueryFileUri(value: string): PigJob;

  getQueryList(): QueryList | undefined;
  setQueryList(value?: QueryList): PigJob;
  hasQueryList(): boolean;
  clearQueryList(): PigJob;

  getContinueOnFailure(): boolean;
  setContinueOnFailure(value: boolean): PigJob;

  getScriptVariablesMap(): jspb.Map<string, string>;
  clearScriptVariablesMap(): PigJob;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): PigJob;

  getJarFileUrisList(): Array<string>;
  setJarFileUrisList(value: Array<string>): PigJob;
  clearJarFileUrisList(): PigJob;
  addJarFileUris(value: string, index?: number): PigJob;

  getLoggingConfig(): LoggingConfig | undefined;
  setLoggingConfig(value?: LoggingConfig): PigJob;
  hasLoggingConfig(): boolean;
  clearLoggingConfig(): PigJob;

  getQueriesCase(): PigJob.QueriesCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PigJob.AsObject;
  static toObject(includeInstance: boolean, msg: PigJob): PigJob.AsObject;
  static serializeBinaryToWriter(message: PigJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PigJob;
  static deserializeBinaryFromReader(message: PigJob, reader: jspb.BinaryReader): PigJob;
}

export namespace PigJob {
  export type AsObject = {
    queryFileUri: string,
    queryList?: QueryList.AsObject,
    continueOnFailure: boolean,
    scriptVariablesMap: Array<[string, string]>,
    propertiesMap: Array<[string, string]>,
    jarFileUrisList: Array<string>,
    loggingConfig?: LoggingConfig.AsObject,
  }

  export enum QueriesCase { 
    QUERIES_NOT_SET = 0,
    QUERY_FILE_URI = 1,
    QUERY_LIST = 2,
  }
}

export class JobPlacement extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): JobPlacement;

  getClusterUuid(): string;
  setClusterUuid(value: string): JobPlacement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobPlacement.AsObject;
  static toObject(includeInstance: boolean, msg: JobPlacement): JobPlacement.AsObject;
  static serializeBinaryToWriter(message: JobPlacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobPlacement;
  static deserializeBinaryFromReader(message: JobPlacement, reader: jspb.BinaryReader): JobPlacement;
}

export namespace JobPlacement {
  export type AsObject = {
    clusterName: string,
    clusterUuid: string,
  }
}

export class JobStatus extends jspb.Message {
  getState(): JobStatus.State;
  setState(value: JobStatus.State): JobStatus;

  getDetails(): string;
  setDetails(value: string): JobStatus;

  getStateStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateStartTime(value?: google_protobuf_timestamp_pb.Timestamp): JobStatus;
  hasStateStartTime(): boolean;
  clearStateStartTime(): JobStatus;

  getSubstate(): JobStatus.Substate;
  setSubstate(value: JobStatus.Substate): JobStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobStatus.AsObject;
  static toObject(includeInstance: boolean, msg: JobStatus): JobStatus.AsObject;
  static serializeBinaryToWriter(message: JobStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobStatus;
  static deserializeBinaryFromReader(message: JobStatus, reader: jspb.BinaryReader): JobStatus;
}

export namespace JobStatus {
  export type AsObject = {
    state: JobStatus.State,
    details: string,
    stateStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    substate: JobStatus.Substate,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    PENDING = 1,
    SETUP_DONE = 8,
    RUNNING = 2,
    CANCEL_PENDING = 3,
    CANCEL_STARTED = 7,
    CANCELLED = 4,
    DONE = 5,
    ERROR = 6,
    ATTEMPT_FAILURE = 9,
  }

  export enum Substate { 
    UNSPECIFIED = 0,
    SUBMITTED = 1,
    QUEUED = 2,
    STALE_STATUS = 3,
  }
}

export class JobReference extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): JobReference;

  getJobId(): string;
  setJobId(value: string): JobReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobReference.AsObject;
  static toObject(includeInstance: boolean, msg: JobReference): JobReference.AsObject;
  static serializeBinaryToWriter(message: JobReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobReference;
  static deserializeBinaryFromReader(message: JobReference, reader: jspb.BinaryReader): JobReference;
}

export namespace JobReference {
  export type AsObject = {
    projectId: string,
    jobId: string,
  }
}

export class YarnApplication extends jspb.Message {
  getName(): string;
  setName(value: string): YarnApplication;

  getState(): YarnApplication.State;
  setState(value: YarnApplication.State): YarnApplication;

  getProgress(): number;
  setProgress(value: number): YarnApplication;

  getTrackingUrl(): string;
  setTrackingUrl(value: string): YarnApplication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YarnApplication.AsObject;
  static toObject(includeInstance: boolean, msg: YarnApplication): YarnApplication.AsObject;
  static serializeBinaryToWriter(message: YarnApplication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YarnApplication;
  static deserializeBinaryFromReader(message: YarnApplication, reader: jspb.BinaryReader): YarnApplication;
}

export namespace YarnApplication {
  export type AsObject = {
    name: string,
    state: YarnApplication.State,
    progress: number,
    trackingUrl: string,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    NEW = 1,
    NEW_SAVING = 2,
    SUBMITTED = 3,
    ACCEPTED = 4,
    RUNNING = 5,
    FINISHED = 6,
    FAILED = 7,
    KILLED = 8,
  }
}

export class Job extends jspb.Message {
  getReference(): JobReference | undefined;
  setReference(value?: JobReference): Job;
  hasReference(): boolean;
  clearReference(): Job;

  getPlacement(): JobPlacement | undefined;
  setPlacement(value?: JobPlacement): Job;
  hasPlacement(): boolean;
  clearPlacement(): Job;

  getHadoopJob(): HadoopJob | undefined;
  setHadoopJob(value?: HadoopJob): Job;
  hasHadoopJob(): boolean;
  clearHadoopJob(): Job;

  getSparkJob(): SparkJob | undefined;
  setSparkJob(value?: SparkJob): Job;
  hasSparkJob(): boolean;
  clearSparkJob(): Job;

  getPysparkJob(): PySparkJob | undefined;
  setPysparkJob(value?: PySparkJob): Job;
  hasPysparkJob(): boolean;
  clearPysparkJob(): Job;

  getHiveJob(): HiveJob | undefined;
  setHiveJob(value?: HiveJob): Job;
  hasHiveJob(): boolean;
  clearHiveJob(): Job;

  getPigJob(): PigJob | undefined;
  setPigJob(value?: PigJob): Job;
  hasPigJob(): boolean;
  clearPigJob(): Job;

  getSparkSqlJob(): SparkSqlJob | undefined;
  setSparkSqlJob(value?: SparkSqlJob): Job;
  hasSparkSqlJob(): boolean;
  clearSparkSqlJob(): Job;

  getStatus(): JobStatus | undefined;
  setStatus(value?: JobStatus): Job;
  hasStatus(): boolean;
  clearStatus(): Job;

  getStatusHistoryList(): Array<JobStatus>;
  setStatusHistoryList(value: Array<JobStatus>): Job;
  clearStatusHistoryList(): Job;
  addStatusHistory(value?: JobStatus, index?: number): JobStatus;

  getYarnApplicationsList(): Array<YarnApplication>;
  setYarnApplicationsList(value: Array<YarnApplication>): Job;
  clearYarnApplicationsList(): Job;
  addYarnApplications(value?: YarnApplication, index?: number): YarnApplication;

  getDriverOutputResourceUri(): string;
  setDriverOutputResourceUri(value: string): Job;

  getDriverControlFilesUri(): string;
  setDriverControlFilesUri(value: string): Job;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Job;

  getScheduling(): JobScheduling | undefined;
  setScheduling(value?: JobScheduling): Job;
  hasScheduling(): boolean;
  clearScheduling(): Job;

  getTypeJobCase(): Job.TypeJobCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    reference?: JobReference.AsObject,
    placement?: JobPlacement.AsObject,
    hadoopJob?: HadoopJob.AsObject,
    sparkJob?: SparkJob.AsObject,
    pysparkJob?: PySparkJob.AsObject,
    hiveJob?: HiveJob.AsObject,
    pigJob?: PigJob.AsObject,
    sparkSqlJob?: SparkSqlJob.AsObject,
    status?: JobStatus.AsObject,
    statusHistoryList: Array<JobStatus.AsObject>,
    yarnApplicationsList: Array<YarnApplication.AsObject>,
    driverOutputResourceUri: string,
    driverControlFilesUri: string,
    labelsMap: Array<[string, string]>,
    scheduling?: JobScheduling.AsObject,
  }

  export enum TypeJobCase { 
    TYPE_JOB_NOT_SET = 0,
    HADOOP_JOB = 3,
    SPARK_JOB = 4,
    PYSPARK_JOB = 5,
    HIVE_JOB = 6,
    PIG_JOB = 7,
    SPARK_SQL_JOB = 12,
  }
}

export class JobScheduling extends jspb.Message {
  getMaxFailuresPerHour(): number;
  setMaxFailuresPerHour(value: number): JobScheduling;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobScheduling.AsObject;
  static toObject(includeInstance: boolean, msg: JobScheduling): JobScheduling.AsObject;
  static serializeBinaryToWriter(message: JobScheduling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobScheduling;
  static deserializeBinaryFromReader(message: JobScheduling, reader: jspb.BinaryReader): JobScheduling;
}

export namespace JobScheduling {
  export type AsObject = {
    maxFailuresPerHour: number,
  }
}

export class SubmitJobRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SubmitJobRequest;

  getRegion(): string;
  setRegion(value: string): SubmitJobRequest;

  getJob(): Job | undefined;
  setJob(value?: Job): SubmitJobRequest;
  hasJob(): boolean;
  clearJob(): SubmitJobRequest;

  getRequestId(): string;
  setRequestId(value: string): SubmitJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitJobRequest): SubmitJobRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitJobRequest;
  static deserializeBinaryFromReader(message: SubmitJobRequest, reader: jspb.BinaryReader): SubmitJobRequest;
}

export namespace SubmitJobRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    job?: Job.AsObject,
    requestId: string,
  }
}

export class GetJobRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetJobRequest;

  getRegion(): string;
  setRegion(value: string): GetJobRequest;

  getJobId(): string;
  setJobId(value: string): GetJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobRequest;
  static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    jobId: string,
  }
}

export class ListJobsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListJobsRequest;

  getRegion(): string;
  setRegion(value: string): ListJobsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListJobsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListJobsRequest;

  getClusterName(): string;
  setClusterName(value: string): ListJobsRequest;

  getJobStateMatcher(): ListJobsRequest.JobStateMatcher;
  setJobStateMatcher(value: ListJobsRequest.JobStateMatcher): ListJobsRequest;

  getFilter(): string;
  setFilter(value: string): ListJobsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
  static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
  static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    pageSize: number,
    pageToken: string,
    clusterName: string,
    jobStateMatcher: ListJobsRequest.JobStateMatcher,
    filter: string,
  }

  export enum JobStateMatcher { 
    ALL = 0,
    ACTIVE = 1,
    NON_ACTIVE = 2,
  }
}

export class UpdateJobRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UpdateJobRequest;

  getRegion(): string;
  setRegion(value: string): UpdateJobRequest;

  getJobId(): string;
  setJobId(value: string): UpdateJobRequest;

  getJob(): Job | undefined;
  setJob(value?: Job): UpdateJobRequest;
  hasJob(): boolean;
  clearJob(): UpdateJobRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateJobRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobRequest): UpdateJobRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJobRequest;
  static deserializeBinaryFromReader(message: UpdateJobRequest, reader: jspb.BinaryReader): UpdateJobRequest;
}

export namespace UpdateJobRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    jobId: string,
    job?: Job.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListJobsResponse extends jspb.Message {
  getJobsList(): Array<Job>;
  setJobsList(value: Array<Job>): ListJobsResponse;
  clearJobsList(): ListJobsResponse;
  addJobs(value?: Job, index?: number): Job;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListJobsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    jobsList: Array<Job.AsObject>,
    nextPageToken: string,
  }
}

export class CancelJobRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CancelJobRequest;

  getRegion(): string;
  setRegion(value: string): CancelJobRequest;

  getJobId(): string;
  setJobId(value: string): CancelJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelJobRequest): CancelJobRequest.AsObject;
  static serializeBinaryToWriter(message: CancelJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelJobRequest;
  static deserializeBinaryFromReader(message: CancelJobRequest, reader: jspb.BinaryReader): CancelJobRequest;
}

export namespace CancelJobRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    jobId: string,
  }
}

export class DeleteJobRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeleteJobRequest;

  getRegion(): string;
  setRegion(value: string): DeleteJobRequest;

  getJobId(): string;
  setJobId(value: string): DeleteJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteJobRequest): DeleteJobRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteJobRequest;
  static deserializeBinaryFromReader(message: DeleteJobRequest, reader: jspb.BinaryReader): DeleteJobRequest;
}

export namespace DeleteJobRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    jobId: string,
  }
}

