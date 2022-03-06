import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Repo extends jspb.Message {
  getName(): string;
  setName(value: string): Repo;

  getSize(): number;
  setSize(value: number): Repo;

  getUrl(): string;
  setUrl(value: string): Repo;

  getMirrorConfig(): MirrorConfig | undefined;
  setMirrorConfig(value?: MirrorConfig): Repo;
  hasMirrorConfig(): boolean;
  clearMirrorConfig(): Repo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Repo.AsObject;
  static toObject(includeInstance: boolean, msg: Repo): Repo.AsObject;
  static serializeBinaryToWriter(message: Repo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Repo;
  static deserializeBinaryFromReader(message: Repo, reader: jspb.BinaryReader): Repo;
}

export namespace Repo {
  export type AsObject = {
    name: string,
    size: number,
    url: string,
    mirrorConfig?: MirrorConfig.AsObject,
  }
}

export class MirrorConfig extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): MirrorConfig;

  getWebhookId(): string;
  setWebhookId(value: string): MirrorConfig;

  getDeployKeyId(): string;
  setDeployKeyId(value: string): MirrorConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MirrorConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MirrorConfig): MirrorConfig.AsObject;
  static serializeBinaryToWriter(message: MirrorConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MirrorConfig;
  static deserializeBinaryFromReader(message: MirrorConfig, reader: jspb.BinaryReader): MirrorConfig;
}

export namespace MirrorConfig {
  export type AsObject = {
    url: string,
    webhookId: string,
    deployKeyId: string,
  }
}

export class GetRepoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetRepoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRepoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRepoRequest): GetRepoRequest.AsObject;
  static serializeBinaryToWriter(message: GetRepoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRepoRequest;
  static deserializeBinaryFromReader(message: GetRepoRequest, reader: jspb.BinaryReader): GetRepoRequest;
}

export namespace GetRepoRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListReposRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListReposRequest;

  getPageSize(): number;
  setPageSize(value: number): ListReposRequest;

  getPageToken(): string;
  setPageToken(value: string): ListReposRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReposRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReposRequest): ListReposRequest.AsObject;
  static serializeBinaryToWriter(message: ListReposRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReposRequest;
  static deserializeBinaryFromReader(message: ListReposRequest, reader: jspb.BinaryReader): ListReposRequest;
}

export namespace ListReposRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListReposResponse extends jspb.Message {
  getReposList(): Array<Repo>;
  setReposList(value: Array<Repo>): ListReposResponse;
  clearReposList(): ListReposResponse;
  addRepos(value?: Repo, index?: number): Repo;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListReposResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReposResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReposResponse): ListReposResponse.AsObject;
  static serializeBinaryToWriter(message: ListReposResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReposResponse;
  static deserializeBinaryFromReader(message: ListReposResponse, reader: jspb.BinaryReader): ListReposResponse;
}

export namespace ListReposResponse {
  export type AsObject = {
    reposList: Array<Repo.AsObject>,
    nextPageToken: string,
  }
}

export class CreateRepoRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateRepoRequest;

  getRepo(): Repo | undefined;
  setRepo(value?: Repo): CreateRepoRequest;
  hasRepo(): boolean;
  clearRepo(): CreateRepoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRepoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRepoRequest): CreateRepoRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRepoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRepoRequest;
  static deserializeBinaryFromReader(message: CreateRepoRequest, reader: jspb.BinaryReader): CreateRepoRequest;
}

export namespace CreateRepoRequest {
  export type AsObject = {
    parent: string,
    repo?: Repo.AsObject,
  }
}

export class DeleteRepoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteRepoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRepoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRepoRequest): DeleteRepoRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRepoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRepoRequest;
  static deserializeBinaryFromReader(message: DeleteRepoRequest, reader: jspb.BinaryReader): DeleteRepoRequest;
}

export namespace DeleteRepoRequest {
  export type AsObject = {
    name: string,
  }
}

