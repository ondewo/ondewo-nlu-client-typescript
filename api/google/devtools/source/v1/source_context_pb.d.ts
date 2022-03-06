import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class SourceContext extends jspb.Message {
  getCloudRepo(): CloudRepoSourceContext | undefined;
  setCloudRepo(value?: CloudRepoSourceContext): SourceContext;
  hasCloudRepo(): boolean;
  clearCloudRepo(): SourceContext;

  getCloudWorkspace(): CloudWorkspaceSourceContext | undefined;
  setCloudWorkspace(value?: CloudWorkspaceSourceContext): SourceContext;
  hasCloudWorkspace(): boolean;
  clearCloudWorkspace(): SourceContext;

  getGerrit(): GerritSourceContext | undefined;
  setGerrit(value?: GerritSourceContext): SourceContext;
  hasGerrit(): boolean;
  clearGerrit(): SourceContext;

  getGit(): GitSourceContext | undefined;
  setGit(value?: GitSourceContext): SourceContext;
  hasGit(): boolean;
  clearGit(): SourceContext;

  getContextCase(): SourceContext.ContextCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: SourceContext): SourceContext.AsObject;
  static serializeBinaryToWriter(message: SourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceContext;
  static deserializeBinaryFromReader(message: SourceContext, reader: jspb.BinaryReader): SourceContext;
}

export namespace SourceContext {
  export type AsObject = {
    cloudRepo?: CloudRepoSourceContext.AsObject,
    cloudWorkspace?: CloudWorkspaceSourceContext.AsObject,
    gerrit?: GerritSourceContext.AsObject,
    git?: GitSourceContext.AsObject,
  }

  export enum ContextCase { 
    CONTEXT_NOT_SET = 0,
    CLOUD_REPO = 1,
    CLOUD_WORKSPACE = 2,
    GERRIT = 3,
    GIT = 6,
  }
}

export class ExtendedSourceContext extends jspb.Message {
  getContext(): SourceContext | undefined;
  setContext(value?: SourceContext): ExtendedSourceContext;
  hasContext(): boolean;
  clearContext(): ExtendedSourceContext;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ExtendedSourceContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtendedSourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: ExtendedSourceContext): ExtendedSourceContext.AsObject;
  static serializeBinaryToWriter(message: ExtendedSourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtendedSourceContext;
  static deserializeBinaryFromReader(message: ExtendedSourceContext, reader: jspb.BinaryReader): ExtendedSourceContext;
}

export namespace ExtendedSourceContext {
  export type AsObject = {
    context?: SourceContext.AsObject,
    labelsMap: Array<[string, string]>,
  }
}

export class AliasContext extends jspb.Message {
  getKind(): AliasContext.Kind;
  setKind(value: AliasContext.Kind): AliasContext;

  getName(): string;
  setName(value: string): AliasContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AliasContext.AsObject;
  static toObject(includeInstance: boolean, msg: AliasContext): AliasContext.AsObject;
  static serializeBinaryToWriter(message: AliasContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AliasContext;
  static deserializeBinaryFromReader(message: AliasContext, reader: jspb.BinaryReader): AliasContext;
}

export namespace AliasContext {
  export type AsObject = {
    kind: AliasContext.Kind,
    name: string,
  }

  export enum Kind { 
    ANY = 0,
    FIXED = 1,
    MOVABLE = 2,
    OTHER = 4,
  }
}

export class CloudRepoSourceContext extends jspb.Message {
  getRepoId(): RepoId | undefined;
  setRepoId(value?: RepoId): CloudRepoSourceContext;
  hasRepoId(): boolean;
  clearRepoId(): CloudRepoSourceContext;

  getRevisionId(): string;
  setRevisionId(value: string): CloudRepoSourceContext;

  getAliasName(): string;
  setAliasName(value: string): CloudRepoSourceContext;

  getAliasContext(): AliasContext | undefined;
  setAliasContext(value?: AliasContext): CloudRepoSourceContext;
  hasAliasContext(): boolean;
  clearAliasContext(): CloudRepoSourceContext;

  getRevisionCase(): CloudRepoSourceContext.RevisionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudRepoSourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: CloudRepoSourceContext): CloudRepoSourceContext.AsObject;
  static serializeBinaryToWriter(message: CloudRepoSourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudRepoSourceContext;
  static deserializeBinaryFromReader(message: CloudRepoSourceContext, reader: jspb.BinaryReader): CloudRepoSourceContext;
}

export namespace CloudRepoSourceContext {
  export type AsObject = {
    repoId?: RepoId.AsObject,
    revisionId: string,
    aliasName: string,
    aliasContext?: AliasContext.AsObject,
  }

  export enum RevisionCase { 
    REVISION_NOT_SET = 0,
    REVISION_ID = 2,
    ALIAS_NAME = 3,
    ALIAS_CONTEXT = 4,
  }
}

export class CloudWorkspaceSourceContext extends jspb.Message {
  getWorkspaceId(): CloudWorkspaceId | undefined;
  setWorkspaceId(value?: CloudWorkspaceId): CloudWorkspaceSourceContext;
  hasWorkspaceId(): boolean;
  clearWorkspaceId(): CloudWorkspaceSourceContext;

  getSnapshotId(): string;
  setSnapshotId(value: string): CloudWorkspaceSourceContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudWorkspaceSourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: CloudWorkspaceSourceContext): CloudWorkspaceSourceContext.AsObject;
  static serializeBinaryToWriter(message: CloudWorkspaceSourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudWorkspaceSourceContext;
  static deserializeBinaryFromReader(message: CloudWorkspaceSourceContext, reader: jspb.BinaryReader): CloudWorkspaceSourceContext;
}

export namespace CloudWorkspaceSourceContext {
  export type AsObject = {
    workspaceId?: CloudWorkspaceId.AsObject,
    snapshotId: string,
  }
}

export class GerritSourceContext extends jspb.Message {
  getHostUri(): string;
  setHostUri(value: string): GerritSourceContext;

  getGerritProject(): string;
  setGerritProject(value: string): GerritSourceContext;

  getRevisionId(): string;
  setRevisionId(value: string): GerritSourceContext;

  getAliasName(): string;
  setAliasName(value: string): GerritSourceContext;

  getAliasContext(): AliasContext | undefined;
  setAliasContext(value?: AliasContext): GerritSourceContext;
  hasAliasContext(): boolean;
  clearAliasContext(): GerritSourceContext;

  getRevisionCase(): GerritSourceContext.RevisionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GerritSourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: GerritSourceContext): GerritSourceContext.AsObject;
  static serializeBinaryToWriter(message: GerritSourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GerritSourceContext;
  static deserializeBinaryFromReader(message: GerritSourceContext, reader: jspb.BinaryReader): GerritSourceContext;
}

export namespace GerritSourceContext {
  export type AsObject = {
    hostUri: string,
    gerritProject: string,
    revisionId: string,
    aliasName: string,
    aliasContext?: AliasContext.AsObject,
  }

  export enum RevisionCase { 
    REVISION_NOT_SET = 0,
    REVISION_ID = 3,
    ALIAS_NAME = 4,
    ALIAS_CONTEXT = 5,
  }
}

export class GitSourceContext extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): GitSourceContext;

  getRevisionId(): string;
  setRevisionId(value: string): GitSourceContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitSourceContext.AsObject;
  static toObject(includeInstance: boolean, msg: GitSourceContext): GitSourceContext.AsObject;
  static serializeBinaryToWriter(message: GitSourceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitSourceContext;
  static deserializeBinaryFromReader(message: GitSourceContext, reader: jspb.BinaryReader): GitSourceContext;
}

export namespace GitSourceContext {
  export type AsObject = {
    url: string,
    revisionId: string,
  }
}

export class RepoId extends jspb.Message {
  getProjectRepoId(): ProjectRepoId | undefined;
  setProjectRepoId(value?: ProjectRepoId): RepoId;
  hasProjectRepoId(): boolean;
  clearProjectRepoId(): RepoId;

  getUid(): string;
  setUid(value: string): RepoId;

  getIdCase(): RepoId.IdCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepoId.AsObject;
  static toObject(includeInstance: boolean, msg: RepoId): RepoId.AsObject;
  static serializeBinaryToWriter(message: RepoId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepoId;
  static deserializeBinaryFromReader(message: RepoId, reader: jspb.BinaryReader): RepoId;
}

export namespace RepoId {
  export type AsObject = {
    projectRepoId?: ProjectRepoId.AsObject,
    uid: string,
  }

  export enum IdCase { 
    ID_NOT_SET = 0,
    PROJECT_REPO_ID = 1,
    UID = 2,
  }
}

export class ProjectRepoId extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ProjectRepoId;

  getRepoName(): string;
  setRepoName(value: string): ProjectRepoId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectRepoId.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectRepoId): ProjectRepoId.AsObject;
  static serializeBinaryToWriter(message: ProjectRepoId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectRepoId;
  static deserializeBinaryFromReader(message: ProjectRepoId, reader: jspb.BinaryReader): ProjectRepoId;
}

export namespace ProjectRepoId {
  export type AsObject = {
    projectId: string,
    repoName: string,
  }
}

export class CloudWorkspaceId extends jspb.Message {
  getRepoId(): RepoId | undefined;
  setRepoId(value?: RepoId): CloudWorkspaceId;
  hasRepoId(): boolean;
  clearRepoId(): CloudWorkspaceId;

  getName(): string;
  setName(value: string): CloudWorkspaceId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudWorkspaceId.AsObject;
  static toObject(includeInstance: boolean, msg: CloudWorkspaceId): CloudWorkspaceId.AsObject;
  static serializeBinaryToWriter(message: CloudWorkspaceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudWorkspaceId;
  static deserializeBinaryFromReader(message: CloudWorkspaceId, reader: jspb.BinaryReader): CloudWorkspaceId;
}

export namespace CloudWorkspaceId {
  export type AsObject = {
    repoId?: RepoId.AsObject,
    name: string,
  }
}

