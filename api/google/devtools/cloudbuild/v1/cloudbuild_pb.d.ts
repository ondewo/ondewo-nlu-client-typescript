import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_httpbody_pb from '../../../../google/api/httpbody_pb';
import * as google_cloud_audit_audit_log_pb from '../../../../google/cloud/audit/audit_log_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class RetryBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): RetryBuildRequest;

  getId(): string;
  setId(value: string): RetryBuildRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetryBuildRequest): RetryBuildRequest.AsObject;
  static serializeBinaryToWriter(message: RetryBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryBuildRequest;
  static deserializeBinaryFromReader(message: RetryBuildRequest, reader: jspb.BinaryReader): RetryBuildRequest;
}

export namespace RetryBuildRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class RunBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): RunBuildTriggerRequest;

  getTriggerId(): string;
  setTriggerId(value: string): RunBuildTriggerRequest;

  getSource(): RepoSource | undefined;
  setSource(value?: RepoSource): RunBuildTriggerRequest;
  hasSource(): boolean;
  clearSource(): RunBuildTriggerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunBuildTriggerRequest): RunBuildTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: RunBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunBuildTriggerRequest;
  static deserializeBinaryFromReader(message: RunBuildTriggerRequest, reader: jspb.BinaryReader): RunBuildTriggerRequest;
}

export namespace RunBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
    source?: RepoSource.AsObject,
  }
}

export class StorageSource extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): StorageSource;

  getObject(): string;
  setObject(value: string): StorageSource;

  getGeneration(): number;
  setGeneration(value: number): StorageSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageSource.AsObject;
  static toObject(includeInstance: boolean, msg: StorageSource): StorageSource.AsObject;
  static serializeBinaryToWriter(message: StorageSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageSource;
  static deserializeBinaryFromReader(message: StorageSource, reader: jspb.BinaryReader): StorageSource;
}

export namespace StorageSource {
  export type AsObject = {
    bucket: string,
    object: string,
    generation: number,
  }
}

export class RepoSource extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): RepoSource;

  getRepoName(): string;
  setRepoName(value: string): RepoSource;

  getBranchName(): string;
  setBranchName(value: string): RepoSource;

  getTagName(): string;
  setTagName(value: string): RepoSource;

  getCommitSha(): string;
  setCommitSha(value: string): RepoSource;

  getDir(): string;
  setDir(value: string): RepoSource;

  getRevisionCase(): RepoSource.RevisionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepoSource.AsObject;
  static toObject(includeInstance: boolean, msg: RepoSource): RepoSource.AsObject;
  static serializeBinaryToWriter(message: RepoSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepoSource;
  static deserializeBinaryFromReader(message: RepoSource, reader: jspb.BinaryReader): RepoSource;
}

export namespace RepoSource {
  export type AsObject = {
    projectId: string,
    repoName: string,
    branchName: string,
    tagName: string,
    commitSha: string,
    dir: string,
  }

  export enum RevisionCase { 
    REVISION_NOT_SET = 0,
    BRANCH_NAME = 3,
    TAG_NAME = 4,
    COMMIT_SHA = 5,
  }
}

export class Source extends jspb.Message {
  getStorageSource(): StorageSource | undefined;
  setStorageSource(value?: StorageSource): Source;
  hasStorageSource(): boolean;
  clearStorageSource(): Source;

  getRepoSource(): RepoSource | undefined;
  setRepoSource(value?: RepoSource): Source;
  hasRepoSource(): boolean;
  clearRepoSource(): Source;

  getSourceCase(): Source.SourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Source.AsObject;
  static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
  static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Source;
  static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
  export type AsObject = {
    storageSource?: StorageSource.AsObject,
    repoSource?: RepoSource.AsObject,
  }

  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    STORAGE_SOURCE = 2,
    REPO_SOURCE = 3,
  }
}

export class BuiltImage extends jspb.Message {
  getName(): string;
  setName(value: string): BuiltImage;

  getDigest(): string;
  setDigest(value: string): BuiltImage;

  getPushTiming(): TimeSpan | undefined;
  setPushTiming(value?: TimeSpan): BuiltImage;
  hasPushTiming(): boolean;
  clearPushTiming(): BuiltImage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuiltImage.AsObject;
  static toObject(includeInstance: boolean, msg: BuiltImage): BuiltImage.AsObject;
  static serializeBinaryToWriter(message: BuiltImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuiltImage;
  static deserializeBinaryFromReader(message: BuiltImage, reader: jspb.BinaryReader): BuiltImage;
}

export namespace BuiltImage {
  export type AsObject = {
    name: string,
    digest: string,
    pushTiming?: TimeSpan.AsObject,
  }
}

export class BuildStep extends jspb.Message {
  getName(): string;
  setName(value: string): BuildStep;

  getEnvList(): Array<string>;
  setEnvList(value: Array<string>): BuildStep;
  clearEnvList(): BuildStep;
  addEnv(value: string, index?: number): BuildStep;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): BuildStep;
  clearArgsList(): BuildStep;
  addArgs(value: string, index?: number): BuildStep;

  getDir(): string;
  setDir(value: string): BuildStep;

  getId(): string;
  setId(value: string): BuildStep;

  getWaitForList(): Array<string>;
  setWaitForList(value: Array<string>): BuildStep;
  clearWaitForList(): BuildStep;
  addWaitFor(value: string, index?: number): BuildStep;

  getEntrypoint(): string;
  setEntrypoint(value: string): BuildStep;

  getSecretEnvList(): Array<string>;
  setSecretEnvList(value: Array<string>): BuildStep;
  clearSecretEnvList(): BuildStep;
  addSecretEnv(value: string, index?: number): BuildStep;

  getVolumesList(): Array<Volume>;
  setVolumesList(value: Array<Volume>): BuildStep;
  clearVolumesList(): BuildStep;
  addVolumes(value?: Volume, index?: number): Volume;

  getTiming(): TimeSpan | undefined;
  setTiming(value?: TimeSpan): BuildStep;
  hasTiming(): boolean;
  clearTiming(): BuildStep;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): BuildStep;
  hasTimeout(): boolean;
  clearTimeout(): BuildStep;

  getStatus(): Build.Status;
  setStatus(value: Build.Status): BuildStep;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildStep.AsObject;
  static toObject(includeInstance: boolean, msg: BuildStep): BuildStep.AsObject;
  static serializeBinaryToWriter(message: BuildStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildStep;
  static deserializeBinaryFromReader(message: BuildStep, reader: jspb.BinaryReader): BuildStep;
}

export namespace BuildStep {
  export type AsObject = {
    name: string,
    envList: Array<string>,
    argsList: Array<string>,
    dir: string,
    id: string,
    waitForList: Array<string>,
    entrypoint: string,
    secretEnvList: Array<string>,
    volumesList: Array<Volume.AsObject>,
    timing?: TimeSpan.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    status: Build.Status,
  }
}

export class Volume extends jspb.Message {
  getName(): string;
  setName(value: string): Volume;

  getPath(): string;
  setPath(value: string): Volume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Volume.AsObject;
  static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
  static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Volume;
  static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
}

export namespace Volume {
  export type AsObject = {
    name: string,
    path: string,
  }
}

export class Results extends jspb.Message {
  getImagesList(): Array<BuiltImage>;
  setImagesList(value: Array<BuiltImage>): Results;
  clearImagesList(): Results;
  addImages(value?: BuiltImage, index?: number): BuiltImage;

  getBuildStepImagesList(): Array<string>;
  setBuildStepImagesList(value: Array<string>): Results;
  clearBuildStepImagesList(): Results;
  addBuildStepImages(value: string, index?: number): Results;

  getArtifactManifest(): string;
  setArtifactManifest(value: string): Results;

  getNumArtifacts(): number;
  setNumArtifacts(value: number): Results;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Results.AsObject;
  static toObject(includeInstance: boolean, msg: Results): Results.AsObject;
  static serializeBinaryToWriter(message: Results, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Results;
  static deserializeBinaryFromReader(message: Results, reader: jspb.BinaryReader): Results;
}

export namespace Results {
  export type AsObject = {
    imagesList: Array<BuiltImage.AsObject>,
    buildStepImagesList: Array<string>,
    artifactManifest: string,
    numArtifacts: number,
  }
}

export class ArtifactResult extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): ArtifactResult;

  getFileHashList(): Array<FileHashes>;
  setFileHashList(value: Array<FileHashes>): ArtifactResult;
  clearFileHashList(): ArtifactResult;
  addFileHash(value?: FileHashes, index?: number): FileHashes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtifactResult.AsObject;
  static toObject(includeInstance: boolean, msg: ArtifactResult): ArtifactResult.AsObject;
  static serializeBinaryToWriter(message: ArtifactResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtifactResult;
  static deserializeBinaryFromReader(message: ArtifactResult, reader: jspb.BinaryReader): ArtifactResult;
}

export namespace ArtifactResult {
  export type AsObject = {
    location: string,
    fileHashList: Array<FileHashes.AsObject>,
  }
}

export class Build extends jspb.Message {
  getId(): string;
  setId(value: string): Build;

  getProjectId(): string;
  setProjectId(value: string): Build;

  getStatus(): Build.Status;
  setStatus(value: Build.Status): Build;

  getStatusDetail(): string;
  setStatusDetail(value: string): Build;

  getSource(): Source | undefined;
  setSource(value?: Source): Build;
  hasSource(): boolean;
  clearSource(): Build;

  getStepsList(): Array<BuildStep>;
  setStepsList(value: Array<BuildStep>): Build;
  clearStepsList(): Build;
  addSteps(value?: BuildStep, index?: number): BuildStep;

  getResults(): Results | undefined;
  setResults(value?: Results): Build;
  hasResults(): boolean;
  clearResults(): Build;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Build;
  hasCreateTime(): boolean;
  clearCreateTime(): Build;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Build;
  hasStartTime(): boolean;
  clearStartTime(): Build;

  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): Build;
  hasFinishTime(): boolean;
  clearFinishTime(): Build;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): Build;
  hasTimeout(): boolean;
  clearTimeout(): Build;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): Build;
  clearImagesList(): Build;
  addImages(value: string, index?: number): Build;

  getArtifacts(): Artifacts | undefined;
  setArtifacts(value?: Artifacts): Build;
  hasArtifacts(): boolean;
  clearArtifacts(): Build;

  getLogsBucket(): string;
  setLogsBucket(value: string): Build;

  getSourceProvenance(): SourceProvenance | undefined;
  setSourceProvenance(value?: SourceProvenance): Build;
  hasSourceProvenance(): boolean;
  clearSourceProvenance(): Build;

  getBuildTriggerId(): string;
  setBuildTriggerId(value: string): Build;

  getOptions(): BuildOptions | undefined;
  setOptions(value?: BuildOptions): Build;
  hasOptions(): boolean;
  clearOptions(): Build;

  getLogUrl(): string;
  setLogUrl(value: string): Build;

  getSubstitutionsMap(): jspb.Map<string, string>;
  clearSubstitutionsMap(): Build;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Build;
  clearTagsList(): Build;
  addTags(value: string, index?: number): Build;

  getSecretsList(): Array<Secret>;
  setSecretsList(value: Array<Secret>): Build;
  clearSecretsList(): Build;
  addSecrets(value?: Secret, index?: number): Secret;

  getTimingMap(): jspb.Map<string, TimeSpan>;
  clearTimingMap(): Build;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Build.AsObject;
  static toObject(includeInstance: boolean, msg: Build): Build.AsObject;
  static serializeBinaryToWriter(message: Build, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Build;
  static deserializeBinaryFromReader(message: Build, reader: jspb.BinaryReader): Build;
}

export namespace Build {
  export type AsObject = {
    id: string,
    projectId: string,
    status: Build.Status,
    statusDetail: string,
    source?: Source.AsObject,
    stepsList: Array<BuildStep.AsObject>,
    results?: Results.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    imagesList: Array<string>,
    artifacts?: Artifacts.AsObject,
    logsBucket: string,
    sourceProvenance?: SourceProvenance.AsObject,
    buildTriggerId: string,
    options?: BuildOptions.AsObject,
    logUrl: string,
    substitutionsMap: Array<[string, string]>,
    tagsList: Array<string>,
    secretsList: Array<Secret.AsObject>,
    timingMap: Array<[string, TimeSpan.AsObject]>,
  }

  export enum Status { 
    STATUS_UNKNOWN = 0,
    QUEUED = 1,
    WORKING = 2,
    SUCCESS = 3,
    FAILURE = 4,
    INTERNAL_ERROR = 5,
    TIMEOUT = 6,
    CANCELLED = 7,
  }
}

export class Artifacts extends jspb.Message {
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): Artifacts;
  clearImagesList(): Artifacts;
  addImages(value: string, index?: number): Artifacts;

  getObjects(): Artifacts.ArtifactObjects | undefined;
  setObjects(value?: Artifacts.ArtifactObjects): Artifacts;
  hasObjects(): boolean;
  clearObjects(): Artifacts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifacts.AsObject;
  static toObject(includeInstance: boolean, msg: Artifacts): Artifacts.AsObject;
  static serializeBinaryToWriter(message: Artifacts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifacts;
  static deserializeBinaryFromReader(message: Artifacts, reader: jspb.BinaryReader): Artifacts;
}

export namespace Artifacts {
  export type AsObject = {
    imagesList: Array<string>,
    objects?: Artifacts.ArtifactObjects.AsObject,
  }

  export class ArtifactObjects extends jspb.Message {
    getLocation(): string;
    setLocation(value: string): ArtifactObjects;

    getPathsList(): Array<string>;
    setPathsList(value: Array<string>): ArtifactObjects;
    clearPathsList(): ArtifactObjects;
    addPaths(value: string, index?: number): ArtifactObjects;

    getTiming(): TimeSpan | undefined;
    setTiming(value?: TimeSpan): ArtifactObjects;
    hasTiming(): boolean;
    clearTiming(): ArtifactObjects;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArtifactObjects.AsObject;
    static toObject(includeInstance: boolean, msg: ArtifactObjects): ArtifactObjects.AsObject;
    static serializeBinaryToWriter(message: ArtifactObjects, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArtifactObjects;
    static deserializeBinaryFromReader(message: ArtifactObjects, reader: jspb.BinaryReader): ArtifactObjects;
  }

  export namespace ArtifactObjects {
    export type AsObject = {
      location: string,
      pathsList: Array<string>,
      timing?: TimeSpan.AsObject,
    }
  }

}

export class TimeSpan extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeSpan;
  hasStartTime(): boolean;
  clearStartTime(): TimeSpan;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeSpan;
  hasEndTime(): boolean;
  clearEndTime(): TimeSpan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSpan.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSpan): TimeSpan.AsObject;
  static serializeBinaryToWriter(message: TimeSpan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSpan;
  static deserializeBinaryFromReader(message: TimeSpan, reader: jspb.BinaryReader): TimeSpan;
}

export namespace TimeSpan {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BuildOperationMetadata extends jspb.Message {
  getBuild(): Build | undefined;
  setBuild(value?: Build): BuildOperationMetadata;
  hasBuild(): boolean;
  clearBuild(): BuildOperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: BuildOperationMetadata): BuildOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: BuildOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildOperationMetadata;
  static deserializeBinaryFromReader(message: BuildOperationMetadata, reader: jspb.BinaryReader): BuildOperationMetadata;
}

export namespace BuildOperationMetadata {
  export type AsObject = {
    build?: Build.AsObject,
  }
}

export class SourceProvenance extends jspb.Message {
  getResolvedStorageSource(): StorageSource | undefined;
  setResolvedStorageSource(value?: StorageSource): SourceProvenance;
  hasResolvedStorageSource(): boolean;
  clearResolvedStorageSource(): SourceProvenance;

  getResolvedRepoSource(): RepoSource | undefined;
  setResolvedRepoSource(value?: RepoSource): SourceProvenance;
  hasResolvedRepoSource(): boolean;
  clearResolvedRepoSource(): SourceProvenance;

  getFileHashesMap(): jspb.Map<string, FileHashes>;
  clearFileHashesMap(): SourceProvenance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceProvenance.AsObject;
  static toObject(includeInstance: boolean, msg: SourceProvenance): SourceProvenance.AsObject;
  static serializeBinaryToWriter(message: SourceProvenance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceProvenance;
  static deserializeBinaryFromReader(message: SourceProvenance, reader: jspb.BinaryReader): SourceProvenance;
}

export namespace SourceProvenance {
  export type AsObject = {
    resolvedStorageSource?: StorageSource.AsObject,
    resolvedRepoSource?: RepoSource.AsObject,
    fileHashesMap: Array<[string, FileHashes.AsObject]>,
  }
}

export class FileHashes extends jspb.Message {
  getFileHashList(): Array<Hash>;
  setFileHashList(value: Array<Hash>): FileHashes;
  clearFileHashList(): FileHashes;
  addFileHash(value?: Hash, index?: number): Hash;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileHashes.AsObject;
  static toObject(includeInstance: boolean, msg: FileHashes): FileHashes.AsObject;
  static serializeBinaryToWriter(message: FileHashes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileHashes;
  static deserializeBinaryFromReader(message: FileHashes, reader: jspb.BinaryReader): FileHashes;
}

export namespace FileHashes {
  export type AsObject = {
    fileHashList: Array<Hash.AsObject>,
  }
}

export class Hash extends jspb.Message {
  getType(): Hash.HashType;
  setType(value: Hash.HashType): Hash;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): Hash;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hash.AsObject;
  static toObject(includeInstance: boolean, msg: Hash): Hash.AsObject;
  static serializeBinaryToWriter(message: Hash, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hash;
  static deserializeBinaryFromReader(message: Hash, reader: jspb.BinaryReader): Hash;
}

export namespace Hash {
  export type AsObject = {
    type: Hash.HashType,
    value: Uint8Array | string,
  }

  export enum HashType { 
    NONE = 0,
    SHA256 = 1,
    MD5 = 2,
  }
}

export class Secret extends jspb.Message {
  getKmsKeyName(): string;
  setKmsKeyName(value: string): Secret;

  getSecretEnvMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretEnvMap(): Secret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret.AsObject;
  static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
  static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret;
  static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
  export type AsObject = {
    kmsKeyName: string,
    secretEnvMap: Array<[string, Uint8Array | string]>,
  }
}

export class CreateBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CreateBuildRequest;

  getBuild(): Build | undefined;
  setBuild(value?: Build): CreateBuildRequest;
  hasBuild(): boolean;
  clearBuild(): CreateBuildRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBuildRequest): CreateBuildRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBuildRequest;
  static deserializeBinaryFromReader(message: CreateBuildRequest, reader: jspb.BinaryReader): CreateBuildRequest;
}

export namespace CreateBuildRequest {
  export type AsObject = {
    projectId: string,
    build?: Build.AsObject,
  }
}

export class GetBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetBuildRequest;

  getId(): string;
  setId(value: string): GetBuildRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuildRequest): GetBuildRequest.AsObject;
  static serializeBinaryToWriter(message: GetBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuildRequest;
  static deserializeBinaryFromReader(message: GetBuildRequest, reader: jspb.BinaryReader): GetBuildRequest;
}

export namespace GetBuildRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class ListBuildsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListBuildsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBuildsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBuildsRequest;

  getFilter(): string;
  setFilter(value: string): ListBuildsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildsRequest): ListBuildsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBuildsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildsRequest;
  static deserializeBinaryFromReader(message: ListBuildsRequest, reader: jspb.BinaryReader): ListBuildsRequest;
}

export namespace ListBuildsRequest {
  export type AsObject = {
    projectId: string,
    pageSize: number,
    pageToken: string,
    filter: string,
  }
}

export class ListBuildsResponse extends jspb.Message {
  getBuildsList(): Array<Build>;
  setBuildsList(value: Array<Build>): ListBuildsResponse;
  clearBuildsList(): ListBuildsResponse;
  addBuilds(value?: Build, index?: number): Build;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBuildsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildsResponse): ListBuildsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBuildsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildsResponse;
  static deserializeBinaryFromReader(message: ListBuildsResponse, reader: jspb.BinaryReader): ListBuildsResponse;
}

export namespace ListBuildsResponse {
  export type AsObject = {
    buildsList: Array<Build.AsObject>,
    nextPageToken: string,
  }
}

export class CancelBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CancelBuildRequest;

  getId(): string;
  setId(value: string): CancelBuildRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelBuildRequest): CancelBuildRequest.AsObject;
  static serializeBinaryToWriter(message: CancelBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelBuildRequest;
  static deserializeBinaryFromReader(message: CancelBuildRequest, reader: jspb.BinaryReader): CancelBuildRequest;
}

export namespace CancelBuildRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class BuildTrigger extends jspb.Message {
  getId(): string;
  setId(value: string): BuildTrigger;

  getDescription(): string;
  setDescription(value: string): BuildTrigger;

  getTriggerTemplate(): RepoSource | undefined;
  setTriggerTemplate(value?: RepoSource): BuildTrigger;
  hasTriggerTemplate(): boolean;
  clearTriggerTemplate(): BuildTrigger;

  getBuild(): Build | undefined;
  setBuild(value?: Build): BuildTrigger;
  hasBuild(): boolean;
  clearBuild(): BuildTrigger;

  getFilename(): string;
  setFilename(value: string): BuildTrigger;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): BuildTrigger;
  hasCreateTime(): boolean;
  clearCreateTime(): BuildTrigger;

  getDisabled(): boolean;
  setDisabled(value: boolean): BuildTrigger;

  getSubstitutionsMap(): jspb.Map<string, string>;
  clearSubstitutionsMap(): BuildTrigger;

  getBuildTemplateCase(): BuildTrigger.BuildTemplateCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildTrigger.AsObject;
  static toObject(includeInstance: boolean, msg: BuildTrigger): BuildTrigger.AsObject;
  static serializeBinaryToWriter(message: BuildTrigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildTrigger;
  static deserializeBinaryFromReader(message: BuildTrigger, reader: jspb.BinaryReader): BuildTrigger;
}

export namespace BuildTrigger {
  export type AsObject = {
    id: string,
    description: string,
    triggerTemplate?: RepoSource.AsObject,
    build?: Build.AsObject,
    filename: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    disabled: boolean,
    substitutionsMap: Array<[string, string]>,
  }

  export enum BuildTemplateCase { 
    BUILD_TEMPLATE_NOT_SET = 0,
    BUILD = 4,
    FILENAME = 8,
  }
}

export class CreateBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CreateBuildTriggerRequest;

  getTrigger(): BuildTrigger | undefined;
  setTrigger(value?: BuildTrigger): CreateBuildTriggerRequest;
  hasTrigger(): boolean;
  clearTrigger(): CreateBuildTriggerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBuildTriggerRequest): CreateBuildTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBuildTriggerRequest;
  static deserializeBinaryFromReader(message: CreateBuildTriggerRequest, reader: jspb.BinaryReader): CreateBuildTriggerRequest;
}

export namespace CreateBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    trigger?: BuildTrigger.AsObject,
  }
}

export class GetBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetBuildTriggerRequest;

  getTriggerId(): string;
  setTriggerId(value: string): GetBuildTriggerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuildTriggerRequest): GetBuildTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: GetBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuildTriggerRequest;
  static deserializeBinaryFromReader(message: GetBuildTriggerRequest, reader: jspb.BinaryReader): GetBuildTriggerRequest;
}

export namespace GetBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
  }
}

export class ListBuildTriggersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListBuildTriggersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildTriggersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildTriggersRequest): ListBuildTriggersRequest.AsObject;
  static serializeBinaryToWriter(message: ListBuildTriggersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildTriggersRequest;
  static deserializeBinaryFromReader(message: ListBuildTriggersRequest, reader: jspb.BinaryReader): ListBuildTriggersRequest;
}

export namespace ListBuildTriggersRequest {
  export type AsObject = {
    projectId: string,
  }
}

export class ListBuildTriggersResponse extends jspb.Message {
  getTriggersList(): Array<BuildTrigger>;
  setTriggersList(value: Array<BuildTrigger>): ListBuildTriggersResponse;
  clearTriggersList(): ListBuildTriggersResponse;
  addTriggers(value?: BuildTrigger, index?: number): BuildTrigger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildTriggersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildTriggersResponse): ListBuildTriggersResponse.AsObject;
  static serializeBinaryToWriter(message: ListBuildTriggersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildTriggersResponse;
  static deserializeBinaryFromReader(message: ListBuildTriggersResponse, reader: jspb.BinaryReader): ListBuildTriggersResponse;
}

export namespace ListBuildTriggersResponse {
  export type AsObject = {
    triggersList: Array<BuildTrigger.AsObject>,
  }
}

export class DeleteBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeleteBuildTriggerRequest;

  getTriggerId(): string;
  setTriggerId(value: string): DeleteBuildTriggerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBuildTriggerRequest): DeleteBuildTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBuildTriggerRequest;
  static deserializeBinaryFromReader(message: DeleteBuildTriggerRequest, reader: jspb.BinaryReader): DeleteBuildTriggerRequest;
}

export namespace DeleteBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
  }
}

export class UpdateBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UpdateBuildTriggerRequest;

  getTriggerId(): string;
  setTriggerId(value: string): UpdateBuildTriggerRequest;

  getTrigger(): BuildTrigger | undefined;
  setTrigger(value?: BuildTrigger): UpdateBuildTriggerRequest;
  hasTrigger(): boolean;
  clearTrigger(): UpdateBuildTriggerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBuildTriggerRequest): UpdateBuildTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBuildTriggerRequest;
  static deserializeBinaryFromReader(message: UpdateBuildTriggerRequest, reader: jspb.BinaryReader): UpdateBuildTriggerRequest;
}

export namespace UpdateBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
    trigger?: BuildTrigger.AsObject,
  }
}

export class BuildOptions extends jspb.Message {
  getSourceProvenanceHashList(): Array<Hash.HashType>;
  setSourceProvenanceHashList(value: Array<Hash.HashType>): BuildOptions;
  clearSourceProvenanceHashList(): BuildOptions;
  addSourceProvenanceHash(value: Hash.HashType, index?: number): BuildOptions;

  getRequestedVerifyOption(): BuildOptions.VerifyOption;
  setRequestedVerifyOption(value: BuildOptions.VerifyOption): BuildOptions;

  getMachineType(): BuildOptions.MachineType;
  setMachineType(value: BuildOptions.MachineType): BuildOptions;

  getDiskSizeGb(): number;
  setDiskSizeGb(value: number): BuildOptions;

  getSubstitutionOption(): BuildOptions.SubstitutionOption;
  setSubstitutionOption(value: BuildOptions.SubstitutionOption): BuildOptions;

  getLogStreamingOption(): BuildOptions.LogStreamingOption;
  setLogStreamingOption(value: BuildOptions.LogStreamingOption): BuildOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildOptions.AsObject;
  static toObject(includeInstance: boolean, msg: BuildOptions): BuildOptions.AsObject;
  static serializeBinaryToWriter(message: BuildOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildOptions;
  static deserializeBinaryFromReader(message: BuildOptions, reader: jspb.BinaryReader): BuildOptions;
}

export namespace BuildOptions {
  export type AsObject = {
    sourceProvenanceHashList: Array<Hash.HashType>,
    requestedVerifyOption: BuildOptions.VerifyOption,
    machineType: BuildOptions.MachineType,
    diskSizeGb: number,
    substitutionOption: BuildOptions.SubstitutionOption,
    logStreamingOption: BuildOptions.LogStreamingOption,
  }

  export enum VerifyOption { 
    NOT_VERIFIED = 0,
    VERIFIED = 1,
  }

  export enum MachineType { 
    UNSPECIFIED = 0,
    N1_HIGHCPU_8 = 1,
    N1_HIGHCPU_32 = 2,
  }

  export enum SubstitutionOption { 
    MUST_MATCH = 0,
    ALLOW_LOOSE = 1,
  }

  export enum LogStreamingOption { 
    STREAM_DEFAULT = 0,
    STREAM_ON = 1,
    STREAM_OFF = 2,
  }
}

