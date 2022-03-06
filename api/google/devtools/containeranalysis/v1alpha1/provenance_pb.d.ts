import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_containeranalysis_v1alpha1_source_context_pb from '../../../../google/devtools/containeranalysis/v1alpha1/source_context_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class BuildProvenance extends jspb.Message {
  getId(): string;
  setId(value: string): BuildProvenance;

  getProjectId(): string;
  setProjectId(value: string): BuildProvenance;

  getCommandsList(): Array<Command>;
  setCommandsList(value: Array<Command>): BuildProvenance;
  clearCommandsList(): BuildProvenance;
  addCommands(value?: Command, index?: number): Command;

  getBuiltArtifactsList(): Array<Artifact>;
  setBuiltArtifactsList(value: Array<Artifact>): BuildProvenance;
  clearBuiltArtifactsList(): BuildProvenance;
  addBuiltArtifacts(value?: Artifact, index?: number): Artifact;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): BuildProvenance;
  hasCreateTime(): boolean;
  clearCreateTime(): BuildProvenance;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): BuildProvenance;
  hasStartTime(): boolean;
  clearStartTime(): BuildProvenance;

  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): BuildProvenance;
  hasFinishTime(): boolean;
  clearFinishTime(): BuildProvenance;

  getCreator(): string;
  setCreator(value: string): BuildProvenance;

  getLogsBucket(): string;
  setLogsBucket(value: string): BuildProvenance;

  getSourceProvenance(): Source | undefined;
  setSourceProvenance(value?: Source): BuildProvenance;
  hasSourceProvenance(): boolean;
  clearSourceProvenance(): BuildProvenance;

  getTriggerId(): string;
  setTriggerId(value: string): BuildProvenance;

  getBuildOptionsMap(): jspb.Map<string, string>;
  clearBuildOptionsMap(): BuildProvenance;

  getBuilderVersion(): string;
  setBuilderVersion(value: string): BuildProvenance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildProvenance.AsObject;
  static toObject(includeInstance: boolean, msg: BuildProvenance): BuildProvenance.AsObject;
  static serializeBinaryToWriter(message: BuildProvenance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildProvenance;
  static deserializeBinaryFromReader(message: BuildProvenance, reader: jspb.BinaryReader): BuildProvenance;
}

export namespace BuildProvenance {
  export type AsObject = {
    id: string,
    projectId: string,
    commandsList: Array<Command.AsObject>,
    builtArtifactsList: Array<Artifact.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creator: string,
    logsBucket: string,
    sourceProvenance?: Source.AsObject,
    triggerId: string,
    buildOptionsMap: Array<[string, string]>,
    builderVersion: string,
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

  getArtifactStorageSource(): StorageSource | undefined;
  setArtifactStorageSource(value?: StorageSource): Source;
  hasArtifactStorageSource(): boolean;
  clearArtifactStorageSource(): Source;

  getFileHashesMap(): jspb.Map<string, FileHashes>;
  clearFileHashesMap(): Source;

  getContext(): google_devtools_containeranalysis_v1alpha1_source_context_pb.SourceContext | undefined;
  setContext(value?: google_devtools_containeranalysis_v1alpha1_source_context_pb.SourceContext): Source;
  hasContext(): boolean;
  clearContext(): Source;

  getAdditionalContextsList(): Array<google_devtools_containeranalysis_v1alpha1_source_context_pb.SourceContext>;
  setAdditionalContextsList(value: Array<google_devtools_containeranalysis_v1alpha1_source_context_pb.SourceContext>): Source;
  clearAdditionalContextsList(): Source;
  addAdditionalContexts(value?: google_devtools_containeranalysis_v1alpha1_source_context_pb.SourceContext, index?: number): google_devtools_containeranalysis_v1alpha1_source_context_pb.SourceContext;

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
    artifactStorageSource?: StorageSource.AsObject,
    fileHashesMap: Array<[string, FileHashes.AsObject]>,
    context?: google_devtools_containeranalysis_v1alpha1_source_context_pb.SourceContext.AsObject,
    additionalContextsList: Array<google_devtools_containeranalysis_v1alpha1_source_context_pb.SourceContext.AsObject>,
  }

  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    STORAGE_SOURCE = 1,
    REPO_SOURCE = 2,
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
  }

  export enum RevisionCase { 
    REVISION_NOT_SET = 0,
    BRANCH_NAME = 3,
    TAG_NAME = 4,
    COMMIT_SHA = 5,
  }
}

export class Command extends jspb.Message {
  getName(): string;
  setName(value: string): Command;

  getEnvList(): Array<string>;
  setEnvList(value: Array<string>): Command;
  clearEnvList(): Command;
  addEnv(value: string, index?: number): Command;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): Command;
  clearArgsList(): Command;
  addArgs(value: string, index?: number): Command;

  getDir(): string;
  setDir(value: string): Command;

  getId(): string;
  setId(value: string): Command;

  getWaitForList(): Array<string>;
  setWaitForList(value: Array<string>): Command;
  clearWaitForList(): Command;
  addWaitFor(value: string, index?: number): Command;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    name: string,
    envList: Array<string>,
    argsList: Array<string>,
    dir: string,
    id: string,
    waitForList: Array<string>,
  }
}

export class Artifact extends jspb.Message {
  getName(): string;
  setName(value: string): Artifact;

  getChecksum(): string;
  setChecksum(value: string): Artifact;

  getId(): string;
  setId(value: string): Artifact;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): Artifact;
  clearNamesList(): Artifact;
  addNames(value: string, index?: number): Artifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifact.AsObject;
  static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
  static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifact;
  static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
  export type AsObject = {
    name: string,
    checksum: string,
    id: string,
    namesList: Array<string>,
  }
}

