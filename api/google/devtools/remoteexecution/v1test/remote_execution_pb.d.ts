import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class Action extends jspb.Message {
  getCommandDigest(): Digest | undefined;
  setCommandDigest(value?: Digest): Action;
  hasCommandDigest(): boolean;
  clearCommandDigest(): Action;

  getInputRootDigest(): Digest | undefined;
  setInputRootDigest(value?: Digest): Action;
  hasInputRootDigest(): boolean;
  clearInputRootDigest(): Action;

  getOutputFilesList(): Array<string>;
  setOutputFilesList(value: Array<string>): Action;
  clearOutputFilesList(): Action;
  addOutputFiles(value: string, index?: number): Action;

  getOutputDirectoriesList(): Array<string>;
  setOutputDirectoriesList(value: Array<string>): Action;
  clearOutputDirectoriesList(): Action;
  addOutputDirectories(value: string, index?: number): Action;

  getPlatform(): Platform | undefined;
  setPlatform(value?: Platform): Action;
  hasPlatform(): boolean;
  clearPlatform(): Action;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): Action;
  hasTimeout(): boolean;
  clearTimeout(): Action;

  getDoNotCache(): boolean;
  setDoNotCache(value: boolean): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    commandDigest?: Digest.AsObject,
    inputRootDigest?: Digest.AsObject,
    outputFilesList: Array<string>,
    outputDirectoriesList: Array<string>,
    platform?: Platform.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    doNotCache: boolean,
  }
}

export class Command extends jspb.Message {
  getArgumentsList(): Array<string>;
  setArgumentsList(value: Array<string>): Command;
  clearArgumentsList(): Command;
  addArguments(value: string, index?: number): Command;

  getEnvironmentVariablesList(): Array<Command.EnvironmentVariable>;
  setEnvironmentVariablesList(value: Array<Command.EnvironmentVariable>): Command;
  clearEnvironmentVariablesList(): Command;
  addEnvironmentVariables(value?: Command.EnvironmentVariable, index?: number): Command.EnvironmentVariable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    argumentsList: Array<string>,
    environmentVariablesList: Array<Command.EnvironmentVariable.AsObject>,
  }

  export class EnvironmentVariable extends jspb.Message {
    getName(): string;
    setName(value: string): EnvironmentVariable;

    getValue(): string;
    setValue(value: string): EnvironmentVariable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnvironmentVariable.AsObject;
    static toObject(includeInstance: boolean, msg: EnvironmentVariable): EnvironmentVariable.AsObject;
    static serializeBinaryToWriter(message: EnvironmentVariable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnvironmentVariable;
    static deserializeBinaryFromReader(message: EnvironmentVariable, reader: jspb.BinaryReader): EnvironmentVariable;
  }

  export namespace EnvironmentVariable {
    export type AsObject = {
      name: string,
      value: string,
    }
  }

}

export class Platform extends jspb.Message {
  getPropertiesList(): Array<Platform.Property>;
  setPropertiesList(value: Array<Platform.Property>): Platform;
  clearPropertiesList(): Platform;
  addProperties(value?: Platform.Property, index?: number): Platform.Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Platform.AsObject;
  static toObject(includeInstance: boolean, msg: Platform): Platform.AsObject;
  static serializeBinaryToWriter(message: Platform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Platform;
  static deserializeBinaryFromReader(message: Platform, reader: jspb.BinaryReader): Platform;
}

export namespace Platform {
  export type AsObject = {
    propertiesList: Array<Platform.Property.AsObject>,
  }

  export class Property extends jspb.Message {
    getName(): string;
    setName(value: string): Property;

    getValue(): string;
    setValue(value: string): Property;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Property.AsObject;
    static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
    static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Property;
    static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
  }

  export namespace Property {
    export type AsObject = {
      name: string,
      value: string,
    }
  }

}

export class Directory extends jspb.Message {
  getFilesList(): Array<FileNode>;
  setFilesList(value: Array<FileNode>): Directory;
  clearFilesList(): Directory;
  addFiles(value?: FileNode, index?: number): FileNode;

  getDirectoriesList(): Array<DirectoryNode>;
  setDirectoriesList(value: Array<DirectoryNode>): Directory;
  clearDirectoriesList(): Directory;
  addDirectories(value?: DirectoryNode, index?: number): DirectoryNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Directory.AsObject;
  static toObject(includeInstance: boolean, msg: Directory): Directory.AsObject;
  static serializeBinaryToWriter(message: Directory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Directory;
  static deserializeBinaryFromReader(message: Directory, reader: jspb.BinaryReader): Directory;
}

export namespace Directory {
  export type AsObject = {
    filesList: Array<FileNode.AsObject>,
    directoriesList: Array<DirectoryNode.AsObject>,
  }
}

export class FileNode extends jspb.Message {
  getName(): string;
  setName(value: string): FileNode;

  getDigest(): Digest | undefined;
  setDigest(value?: Digest): FileNode;
  hasDigest(): boolean;
  clearDigest(): FileNode;

  getIsExecutable(): boolean;
  setIsExecutable(value: boolean): FileNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileNode.AsObject;
  static toObject(includeInstance: boolean, msg: FileNode): FileNode.AsObject;
  static serializeBinaryToWriter(message: FileNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileNode;
  static deserializeBinaryFromReader(message: FileNode, reader: jspb.BinaryReader): FileNode;
}

export namespace FileNode {
  export type AsObject = {
    name: string,
    digest?: Digest.AsObject,
    isExecutable: boolean,
  }
}

export class DirectoryNode extends jspb.Message {
  getName(): string;
  setName(value: string): DirectoryNode;

  getDigest(): Digest | undefined;
  setDigest(value?: Digest): DirectoryNode;
  hasDigest(): boolean;
  clearDigest(): DirectoryNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectoryNode.AsObject;
  static toObject(includeInstance: boolean, msg: DirectoryNode): DirectoryNode.AsObject;
  static serializeBinaryToWriter(message: DirectoryNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectoryNode;
  static deserializeBinaryFromReader(message: DirectoryNode, reader: jspb.BinaryReader): DirectoryNode;
}

export namespace DirectoryNode {
  export type AsObject = {
    name: string,
    digest?: Digest.AsObject,
  }
}

export class Digest extends jspb.Message {
  getHash(): string;
  setHash(value: string): Digest;

  getSizeBytes(): number;
  setSizeBytes(value: number): Digest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Digest.AsObject;
  static toObject(includeInstance: boolean, msg: Digest): Digest.AsObject;
  static serializeBinaryToWriter(message: Digest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Digest;
  static deserializeBinaryFromReader(message: Digest, reader: jspb.BinaryReader): Digest;
}

export namespace Digest {
  export type AsObject = {
    hash: string,
    sizeBytes: number,
  }
}

export class ActionResult extends jspb.Message {
  getOutputFilesList(): Array<OutputFile>;
  setOutputFilesList(value: Array<OutputFile>): ActionResult;
  clearOutputFilesList(): ActionResult;
  addOutputFiles(value?: OutputFile, index?: number): OutputFile;

  getOutputDirectoriesList(): Array<OutputDirectory>;
  setOutputDirectoriesList(value: Array<OutputDirectory>): ActionResult;
  clearOutputDirectoriesList(): ActionResult;
  addOutputDirectories(value?: OutputDirectory, index?: number): OutputDirectory;

  getExitCode(): number;
  setExitCode(value: number): ActionResult;

  getStdoutRaw(): Uint8Array | string;
  getStdoutRaw_asU8(): Uint8Array;
  getStdoutRaw_asB64(): string;
  setStdoutRaw(value: Uint8Array | string): ActionResult;

  getStdoutDigest(): Digest | undefined;
  setStdoutDigest(value?: Digest): ActionResult;
  hasStdoutDigest(): boolean;
  clearStdoutDigest(): ActionResult;

  getStderrRaw(): Uint8Array | string;
  getStderrRaw_asU8(): Uint8Array;
  getStderrRaw_asB64(): string;
  setStderrRaw(value: Uint8Array | string): ActionResult;

  getStderrDigest(): Digest | undefined;
  setStderrDigest(value?: Digest): ActionResult;
  hasStderrDigest(): boolean;
  clearStderrDigest(): ActionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionResult.AsObject;
  static toObject(includeInstance: boolean, msg: ActionResult): ActionResult.AsObject;
  static serializeBinaryToWriter(message: ActionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionResult;
  static deserializeBinaryFromReader(message: ActionResult, reader: jspb.BinaryReader): ActionResult;
}

export namespace ActionResult {
  export type AsObject = {
    outputFilesList: Array<OutputFile.AsObject>,
    outputDirectoriesList: Array<OutputDirectory.AsObject>,
    exitCode: number,
    stdoutRaw: Uint8Array | string,
    stdoutDigest?: Digest.AsObject,
    stderrRaw: Uint8Array | string,
    stderrDigest?: Digest.AsObject,
  }
}

export class OutputFile extends jspb.Message {
  getPath(): string;
  setPath(value: string): OutputFile;

  getDigest(): Digest | undefined;
  setDigest(value?: Digest): OutputFile;
  hasDigest(): boolean;
  clearDigest(): OutputFile;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): OutputFile;

  getIsExecutable(): boolean;
  setIsExecutable(value: boolean): OutputFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputFile.AsObject;
  static toObject(includeInstance: boolean, msg: OutputFile): OutputFile.AsObject;
  static serializeBinaryToWriter(message: OutputFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputFile;
  static deserializeBinaryFromReader(message: OutputFile, reader: jspb.BinaryReader): OutputFile;
}

export namespace OutputFile {
  export type AsObject = {
    path: string,
    digest?: Digest.AsObject,
    content: Uint8Array | string,
    isExecutable: boolean,
  }
}

export class Tree extends jspb.Message {
  getRoot(): Directory | undefined;
  setRoot(value?: Directory): Tree;
  hasRoot(): boolean;
  clearRoot(): Tree;

  getChildrenList(): Array<Directory>;
  setChildrenList(value: Array<Directory>): Tree;
  clearChildrenList(): Tree;
  addChildren(value?: Directory, index?: number): Directory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tree.AsObject;
  static toObject(includeInstance: boolean, msg: Tree): Tree.AsObject;
  static serializeBinaryToWriter(message: Tree, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tree;
  static deserializeBinaryFromReader(message: Tree, reader: jspb.BinaryReader): Tree;
}

export namespace Tree {
  export type AsObject = {
    root?: Directory.AsObject,
    childrenList: Array<Directory.AsObject>,
  }
}

export class OutputDirectory extends jspb.Message {
  getPath(): string;
  setPath(value: string): OutputDirectory;

  getDigest(): Digest | undefined;
  setDigest(value?: Digest): OutputDirectory;
  hasDigest(): boolean;
  clearDigest(): OutputDirectory;

  getTreeDigest(): Digest | undefined;
  setTreeDigest(value?: Digest): OutputDirectory;
  hasTreeDigest(): boolean;
  clearTreeDigest(): OutputDirectory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputDirectory.AsObject;
  static toObject(includeInstance: boolean, msg: OutputDirectory): OutputDirectory.AsObject;
  static serializeBinaryToWriter(message: OutputDirectory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputDirectory;
  static deserializeBinaryFromReader(message: OutputDirectory, reader: jspb.BinaryReader): OutputDirectory;
}

export namespace OutputDirectory {
  export type AsObject = {
    path: string,
    digest?: Digest.AsObject,
    treeDigest?: Digest.AsObject,
  }
}

export class ExecuteRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): ExecuteRequest;

  getAction(): Action | undefined;
  setAction(value?: Action): ExecuteRequest;
  hasAction(): boolean;
  clearAction(): ExecuteRequest;

  getSkipCacheLookup(): boolean;
  setSkipCacheLookup(value: boolean): ExecuteRequest;

  getTotalInputFileCount(): number;
  setTotalInputFileCount(value: number): ExecuteRequest;

  getTotalInputFileBytes(): number;
  setTotalInputFileBytes(value: number): ExecuteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRequest): ExecuteRequest.AsObject;
  static serializeBinaryToWriter(message: ExecuteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRequest;
  static deserializeBinaryFromReader(message: ExecuteRequest, reader: jspb.BinaryReader): ExecuteRequest;
}

export namespace ExecuteRequest {
  export type AsObject = {
    instanceName: string,
    action?: Action.AsObject,
    skipCacheLookup: boolean,
    totalInputFileCount: number,
    totalInputFileBytes: number,
  }
}

export class LogFile extends jspb.Message {
  getDigest(): Digest | undefined;
  setDigest(value?: Digest): LogFile;
  hasDigest(): boolean;
  clearDigest(): LogFile;

  getHumanReadable(): boolean;
  setHumanReadable(value: boolean): LogFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogFile.AsObject;
  static toObject(includeInstance: boolean, msg: LogFile): LogFile.AsObject;
  static serializeBinaryToWriter(message: LogFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogFile;
  static deserializeBinaryFromReader(message: LogFile, reader: jspb.BinaryReader): LogFile;
}

export namespace LogFile {
  export type AsObject = {
    digest?: Digest.AsObject,
    humanReadable: boolean,
  }
}

export class ExecuteResponse extends jspb.Message {
  getResult(): ActionResult | undefined;
  setResult(value?: ActionResult): ExecuteResponse;
  hasResult(): boolean;
  clearResult(): ExecuteResponse;

  getCachedResult(): boolean;
  setCachedResult(value: boolean): ExecuteResponse;

  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): ExecuteResponse;
  hasStatus(): boolean;
  clearStatus(): ExecuteResponse;

  getServerLogsMap(): jspb.Map<string, LogFile>;
  clearServerLogsMap(): ExecuteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteResponse): ExecuteResponse.AsObject;
  static serializeBinaryToWriter(message: ExecuteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteResponse;
  static deserializeBinaryFromReader(message: ExecuteResponse, reader: jspb.BinaryReader): ExecuteResponse;
}

export namespace ExecuteResponse {
  export type AsObject = {
    result?: ActionResult.AsObject,
    cachedResult: boolean,
    status?: google_rpc_status_pb.Status.AsObject,
    serverLogsMap: Array<[string, LogFile.AsObject]>,
  }
}

export class ExecuteOperationMetadata extends jspb.Message {
  getStage(): ExecuteOperationMetadata.Stage;
  setStage(value: ExecuteOperationMetadata.Stage): ExecuteOperationMetadata;

  getActionDigest(): Digest | undefined;
  setActionDigest(value?: Digest): ExecuteOperationMetadata;
  hasActionDigest(): boolean;
  clearActionDigest(): ExecuteOperationMetadata;

  getStdoutStreamName(): string;
  setStdoutStreamName(value: string): ExecuteOperationMetadata;

  getStderrStreamName(): string;
  setStderrStreamName(value: string): ExecuteOperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteOperationMetadata): ExecuteOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: ExecuteOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteOperationMetadata;
  static deserializeBinaryFromReader(message: ExecuteOperationMetadata, reader: jspb.BinaryReader): ExecuteOperationMetadata;
}

export namespace ExecuteOperationMetadata {
  export type AsObject = {
    stage: ExecuteOperationMetadata.Stage,
    actionDigest?: Digest.AsObject,
    stdoutStreamName: string,
    stderrStreamName: string,
  }

  export enum Stage { 
    UNKNOWN = 0,
    CACHE_CHECK = 1,
    QUEUED = 2,
    EXECUTING = 3,
    COMPLETED = 4,
  }
}

export class GetActionResultRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): GetActionResultRequest;

  getActionDigest(): Digest | undefined;
  setActionDigest(value?: Digest): GetActionResultRequest;
  hasActionDigest(): boolean;
  clearActionDigest(): GetActionResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionResultRequest): GetActionResultRequest.AsObject;
  static serializeBinaryToWriter(message: GetActionResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionResultRequest;
  static deserializeBinaryFromReader(message: GetActionResultRequest, reader: jspb.BinaryReader): GetActionResultRequest;
}

export namespace GetActionResultRequest {
  export type AsObject = {
    instanceName: string,
    actionDigest?: Digest.AsObject,
  }
}

export class UpdateActionResultRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): UpdateActionResultRequest;

  getActionDigest(): Digest | undefined;
  setActionDigest(value?: Digest): UpdateActionResultRequest;
  hasActionDigest(): boolean;
  clearActionDigest(): UpdateActionResultRequest;

  getActionResult(): ActionResult | undefined;
  setActionResult(value?: ActionResult): UpdateActionResultRequest;
  hasActionResult(): boolean;
  clearActionResult(): UpdateActionResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActionResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActionResultRequest): UpdateActionResultRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateActionResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActionResultRequest;
  static deserializeBinaryFromReader(message: UpdateActionResultRequest, reader: jspb.BinaryReader): UpdateActionResultRequest;
}

export namespace UpdateActionResultRequest {
  export type AsObject = {
    instanceName: string,
    actionDigest?: Digest.AsObject,
    actionResult?: ActionResult.AsObject,
  }
}

export class FindMissingBlobsRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): FindMissingBlobsRequest;

  getBlobDigestsList(): Array<Digest>;
  setBlobDigestsList(value: Array<Digest>): FindMissingBlobsRequest;
  clearBlobDigestsList(): FindMissingBlobsRequest;
  addBlobDigests(value?: Digest, index?: number): Digest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindMissingBlobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindMissingBlobsRequest): FindMissingBlobsRequest.AsObject;
  static serializeBinaryToWriter(message: FindMissingBlobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindMissingBlobsRequest;
  static deserializeBinaryFromReader(message: FindMissingBlobsRequest, reader: jspb.BinaryReader): FindMissingBlobsRequest;
}

export namespace FindMissingBlobsRequest {
  export type AsObject = {
    instanceName: string,
    blobDigestsList: Array<Digest.AsObject>,
  }
}

export class FindMissingBlobsResponse extends jspb.Message {
  getMissingBlobDigestsList(): Array<Digest>;
  setMissingBlobDigestsList(value: Array<Digest>): FindMissingBlobsResponse;
  clearMissingBlobDigestsList(): FindMissingBlobsResponse;
  addMissingBlobDigests(value?: Digest, index?: number): Digest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindMissingBlobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindMissingBlobsResponse): FindMissingBlobsResponse.AsObject;
  static serializeBinaryToWriter(message: FindMissingBlobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindMissingBlobsResponse;
  static deserializeBinaryFromReader(message: FindMissingBlobsResponse, reader: jspb.BinaryReader): FindMissingBlobsResponse;
}

export namespace FindMissingBlobsResponse {
  export type AsObject = {
    missingBlobDigestsList: Array<Digest.AsObject>,
  }
}

export class UpdateBlobRequest extends jspb.Message {
  getContentDigest(): Digest | undefined;
  setContentDigest(value?: Digest): UpdateBlobRequest;
  hasContentDigest(): boolean;
  clearContentDigest(): UpdateBlobRequest;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): UpdateBlobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlobRequest): UpdateBlobRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBlobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlobRequest;
  static deserializeBinaryFromReader(message: UpdateBlobRequest, reader: jspb.BinaryReader): UpdateBlobRequest;
}

export namespace UpdateBlobRequest {
  export type AsObject = {
    contentDigest?: Digest.AsObject,
    data: Uint8Array | string,
  }
}

export class BatchUpdateBlobsRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): BatchUpdateBlobsRequest;

  getRequestsList(): Array<UpdateBlobRequest>;
  setRequestsList(value: Array<UpdateBlobRequest>): BatchUpdateBlobsRequest;
  clearRequestsList(): BatchUpdateBlobsRequest;
  addRequests(value?: UpdateBlobRequest, index?: number): UpdateBlobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateBlobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateBlobsRequest): BatchUpdateBlobsRequest.AsObject;
  static serializeBinaryToWriter(message: BatchUpdateBlobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateBlobsRequest;
  static deserializeBinaryFromReader(message: BatchUpdateBlobsRequest, reader: jspb.BinaryReader): BatchUpdateBlobsRequest;
}

export namespace BatchUpdateBlobsRequest {
  export type AsObject = {
    instanceName: string,
    requestsList: Array<UpdateBlobRequest.AsObject>,
  }
}

export class BatchUpdateBlobsResponse extends jspb.Message {
  getResponsesList(): Array<BatchUpdateBlobsResponse.Response>;
  setResponsesList(value: Array<BatchUpdateBlobsResponse.Response>): BatchUpdateBlobsResponse;
  clearResponsesList(): BatchUpdateBlobsResponse;
  addResponses(value?: BatchUpdateBlobsResponse.Response, index?: number): BatchUpdateBlobsResponse.Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateBlobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateBlobsResponse): BatchUpdateBlobsResponse.AsObject;
  static serializeBinaryToWriter(message: BatchUpdateBlobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateBlobsResponse;
  static deserializeBinaryFromReader(message: BatchUpdateBlobsResponse, reader: jspb.BinaryReader): BatchUpdateBlobsResponse;
}

export namespace BatchUpdateBlobsResponse {
  export type AsObject = {
    responsesList: Array<BatchUpdateBlobsResponse.Response.AsObject>,
  }

  export class Response extends jspb.Message {
    getBlobDigest(): Digest | undefined;
    setBlobDigest(value?: Digest): Response;
    hasBlobDigest(): boolean;
    clearBlobDigest(): Response;

    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): Response;
    hasStatus(): boolean;
    clearStatus(): Response;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      blobDigest?: Digest.AsObject,
      status?: google_rpc_status_pb.Status.AsObject,
    }
  }

}

export class GetTreeRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): GetTreeRequest;

  getRootDigest(): Digest | undefined;
  setRootDigest(value?: Digest): GetTreeRequest;
  hasRootDigest(): boolean;
  clearRootDigest(): GetTreeRequest;

  getPageSize(): number;
  setPageSize(value: number): GetTreeRequest;

  getPageToken(): string;
  setPageToken(value: string): GetTreeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTreeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTreeRequest): GetTreeRequest.AsObject;
  static serializeBinaryToWriter(message: GetTreeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTreeRequest;
  static deserializeBinaryFromReader(message: GetTreeRequest, reader: jspb.BinaryReader): GetTreeRequest;
}

export namespace GetTreeRequest {
  export type AsObject = {
    instanceName: string,
    rootDigest?: Digest.AsObject,
    pageSize: number,
    pageToken: string,
  }
}

export class GetTreeResponse extends jspb.Message {
  getDirectoriesList(): Array<Directory>;
  setDirectoriesList(value: Array<Directory>): GetTreeResponse;
  clearDirectoriesList(): GetTreeResponse;
  addDirectories(value?: Directory, index?: number): Directory;

  getNextPageToken(): string;
  setNextPageToken(value: string): GetTreeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTreeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTreeResponse): GetTreeResponse.AsObject;
  static serializeBinaryToWriter(message: GetTreeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTreeResponse;
  static deserializeBinaryFromReader(message: GetTreeResponse, reader: jspb.BinaryReader): GetTreeResponse;
}

export namespace GetTreeResponse {
  export type AsObject = {
    directoriesList: Array<Directory.AsObject>,
    nextPageToken: string,
  }
}

export class ToolDetails extends jspb.Message {
  getToolName(): string;
  setToolName(value: string): ToolDetails;

  getToolVersion(): string;
  setToolVersion(value: string): ToolDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ToolDetails): ToolDetails.AsObject;
  static serializeBinaryToWriter(message: ToolDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolDetails;
  static deserializeBinaryFromReader(message: ToolDetails, reader: jspb.BinaryReader): ToolDetails;
}

export namespace ToolDetails {
  export type AsObject = {
    toolName: string,
    toolVersion: string,
  }
}

export class RequestMetadata extends jspb.Message {
  getToolDetails(): ToolDetails | undefined;
  setToolDetails(value?: ToolDetails): RequestMetadata;
  hasToolDetails(): boolean;
  clearToolDetails(): RequestMetadata;

  getActionId(): string;
  setActionId(value: string): RequestMetadata;

  getToolInvocationId(): string;
  setToolInvocationId(value: string): RequestMetadata;

  getCorrelatedInvocationsId(): string;
  setCorrelatedInvocationsId(value: string): RequestMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RequestMetadata): RequestMetadata.AsObject;
  static serializeBinaryToWriter(message: RequestMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestMetadata;
  static deserializeBinaryFromReader(message: RequestMetadata, reader: jspb.BinaryReader): RequestMetadata;
}

export namespace RequestMetadata {
  export type AsObject = {
    toolDetails?: ToolDetails.AsObject,
    actionId: string,
    toolInvocationId: string,
    correlatedInvocationsId: string,
  }
}

