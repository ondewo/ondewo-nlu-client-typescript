import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_code_pb from '../../../google/rpc/code_pb';


export class ComputeEngine extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): ComputeEngine;

  getZone(): string;
  setZone(value: string): ComputeEngine;

  getMachineType(): string;
  setMachineType(value: string): ComputeEngine;

  getDiskNamesList(): Array<string>;
  setDiskNamesList(value: Array<string>): ComputeEngine;
  clearDiskNamesList(): ComputeEngine;
  addDiskNames(value: string, index?: number): ComputeEngine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputeEngine.AsObject;
  static toObject(includeInstance: boolean, msg: ComputeEngine): ComputeEngine.AsObject;
  static serializeBinaryToWriter(message: ComputeEngine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputeEngine;
  static deserializeBinaryFromReader(message: ComputeEngine, reader: jspb.BinaryReader): ComputeEngine;
}

export namespace ComputeEngine {
  export type AsObject = {
    instanceName: string,
    zone: string,
    machineType: string,
    diskNamesList: Array<string>,
  }
}

export class RuntimeMetadata extends jspb.Message {
  getComputeEngine(): ComputeEngine | undefined;
  setComputeEngine(value?: ComputeEngine): RuntimeMetadata;
  hasComputeEngine(): boolean;
  clearComputeEngine(): RuntimeMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuntimeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RuntimeMetadata): RuntimeMetadata.AsObject;
  static serializeBinaryToWriter(message: RuntimeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuntimeMetadata;
  static deserializeBinaryFromReader(message: RuntimeMetadata, reader: jspb.BinaryReader): RuntimeMetadata;
}

export namespace RuntimeMetadata {
  export type AsObject = {
    computeEngine?: ComputeEngine.AsObject,
  }
}

export class Pipeline extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): Pipeline;

  getName(): string;
  setName(value: string): Pipeline;

  getDescription(): string;
  setDescription(value: string): Pipeline;

  getInputParametersList(): Array<PipelineParameter>;
  setInputParametersList(value: Array<PipelineParameter>): Pipeline;
  clearInputParametersList(): Pipeline;
  addInputParameters(value?: PipelineParameter, index?: number): PipelineParameter;

  getOutputParametersList(): Array<PipelineParameter>;
  setOutputParametersList(value: Array<PipelineParameter>): Pipeline;
  clearOutputParametersList(): Pipeline;
  addOutputParameters(value?: PipelineParameter, index?: number): PipelineParameter;

  getDocker(): DockerExecutor | undefined;
  setDocker(value?: DockerExecutor): Pipeline;
  hasDocker(): boolean;
  clearDocker(): Pipeline;

  getResources(): PipelineResources | undefined;
  setResources(value?: PipelineResources): Pipeline;
  hasResources(): boolean;
  clearResources(): Pipeline;

  getPipelineId(): string;
  setPipelineId(value: string): Pipeline;

  getExecutorCase(): Pipeline.ExecutorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pipeline.AsObject;
  static toObject(includeInstance: boolean, msg: Pipeline): Pipeline.AsObject;
  static serializeBinaryToWriter(message: Pipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pipeline;
  static deserializeBinaryFromReader(message: Pipeline, reader: jspb.BinaryReader): Pipeline;
}

export namespace Pipeline {
  export type AsObject = {
    projectId: string,
    name: string,
    description: string,
    inputParametersList: Array<PipelineParameter.AsObject>,
    outputParametersList: Array<PipelineParameter.AsObject>,
    docker?: DockerExecutor.AsObject,
    resources?: PipelineResources.AsObject,
    pipelineId: string,
  }

  export enum ExecutorCase { 
    EXECUTOR_NOT_SET = 0,
    DOCKER = 5,
  }
}

export class CreatePipelineRequest extends jspb.Message {
  getPipeline(): Pipeline | undefined;
  setPipeline(value?: Pipeline): CreatePipelineRequest;
  hasPipeline(): boolean;
  clearPipeline(): CreatePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePipelineRequest): CreatePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePipelineRequest;
  static deserializeBinaryFromReader(message: CreatePipelineRequest, reader: jspb.BinaryReader): CreatePipelineRequest;
}

export namespace CreatePipelineRequest {
  export type AsObject = {
    pipeline?: Pipeline.AsObject,
  }
}

export class RunPipelineArgs extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): RunPipelineArgs;

  getInputsMap(): jspb.Map<string, string>;
  clearInputsMap(): RunPipelineArgs;

  getOutputsMap(): jspb.Map<string, string>;
  clearOutputsMap(): RunPipelineArgs;

  getServiceAccount(): ServiceAccount | undefined;
  setServiceAccount(value?: ServiceAccount): RunPipelineArgs;
  hasServiceAccount(): boolean;
  clearServiceAccount(): RunPipelineArgs;

  getClientId(): string;
  setClientId(value: string): RunPipelineArgs;

  getResources(): PipelineResources | undefined;
  setResources(value?: PipelineResources): RunPipelineArgs;
  hasResources(): boolean;
  clearResources(): RunPipelineArgs;

  getLogging(): LoggingOptions | undefined;
  setLogging(value?: LoggingOptions): RunPipelineArgs;
  hasLogging(): boolean;
  clearLogging(): RunPipelineArgs;

  getKeepVmAliveOnFailureDuration(): google_protobuf_duration_pb.Duration | undefined;
  setKeepVmAliveOnFailureDuration(value?: google_protobuf_duration_pb.Duration): RunPipelineArgs;
  hasKeepVmAliveOnFailureDuration(): boolean;
  clearKeepVmAliveOnFailureDuration(): RunPipelineArgs;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): RunPipelineArgs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPipelineArgs.AsObject;
  static toObject(includeInstance: boolean, msg: RunPipelineArgs): RunPipelineArgs.AsObject;
  static serializeBinaryToWriter(message: RunPipelineArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPipelineArgs;
  static deserializeBinaryFromReader(message: RunPipelineArgs, reader: jspb.BinaryReader): RunPipelineArgs;
}

export namespace RunPipelineArgs {
  export type AsObject = {
    projectId: string,
    inputsMap: Array<[string, string]>,
    outputsMap: Array<[string, string]>,
    serviceAccount?: ServiceAccount.AsObject,
    clientId: string,
    resources?: PipelineResources.AsObject,
    logging?: LoggingOptions.AsObject,
    keepVmAliveOnFailureDuration?: google_protobuf_duration_pb.Duration.AsObject,
    labelsMap: Array<[string, string]>,
  }
}

export class RunPipelineRequest extends jspb.Message {
  getPipelineId(): string;
  setPipelineId(value: string): RunPipelineRequest;

  getEphemeralPipeline(): Pipeline | undefined;
  setEphemeralPipeline(value?: Pipeline): RunPipelineRequest;
  hasEphemeralPipeline(): boolean;
  clearEphemeralPipeline(): RunPipelineRequest;

  getPipelineArgs(): RunPipelineArgs | undefined;
  setPipelineArgs(value?: RunPipelineArgs): RunPipelineRequest;
  hasPipelineArgs(): boolean;
  clearPipelineArgs(): RunPipelineRequest;

  getPipelineCase(): RunPipelineRequest.PipelineCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunPipelineRequest): RunPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: RunPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPipelineRequest;
  static deserializeBinaryFromReader(message: RunPipelineRequest, reader: jspb.BinaryReader): RunPipelineRequest;
}

export namespace RunPipelineRequest {
  export type AsObject = {
    pipelineId: string,
    ephemeralPipeline?: Pipeline.AsObject,
    pipelineArgs?: RunPipelineArgs.AsObject,
  }

  export enum PipelineCase { 
    PIPELINE_NOT_SET = 0,
    PIPELINE_ID = 1,
    EPHEMERAL_PIPELINE = 2,
  }
}

export class GetPipelineRequest extends jspb.Message {
  getPipelineId(): string;
  setPipelineId(value: string): GetPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPipelineRequest): GetPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPipelineRequest;
  static deserializeBinaryFromReader(message: GetPipelineRequest, reader: jspb.BinaryReader): GetPipelineRequest;
}

export namespace GetPipelineRequest {
  export type AsObject = {
    pipelineId: string,
  }
}

export class ListPipelinesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListPipelinesRequest;

  getNamePrefix(): string;
  setNamePrefix(value: string): ListPipelinesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPipelinesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPipelinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPipelinesRequest): ListPipelinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPipelinesRequest;
  static deserializeBinaryFromReader(message: ListPipelinesRequest, reader: jspb.BinaryReader): ListPipelinesRequest;
}

export namespace ListPipelinesRequest {
  export type AsObject = {
    projectId: string,
    namePrefix: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListPipelinesResponse extends jspb.Message {
  getPipelinesList(): Array<Pipeline>;
  setPipelinesList(value: Array<Pipeline>): ListPipelinesResponse;
  clearPipelinesList(): ListPipelinesResponse;
  addPipelines(value?: Pipeline, index?: number): Pipeline;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPipelinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPipelinesResponse): ListPipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPipelinesResponse;
  static deserializeBinaryFromReader(message: ListPipelinesResponse, reader: jspb.BinaryReader): ListPipelinesResponse;
}

export namespace ListPipelinesResponse {
  export type AsObject = {
    pipelinesList: Array<Pipeline.AsObject>,
    nextPageToken: string,
  }
}

export class DeletePipelineRequest extends jspb.Message {
  getPipelineId(): string;
  setPipelineId(value: string): DeletePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePipelineRequest): DeletePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePipelineRequest;
  static deserializeBinaryFromReader(message: DeletePipelineRequest, reader: jspb.BinaryReader): DeletePipelineRequest;
}

export namespace DeletePipelineRequest {
  export type AsObject = {
    pipelineId: string,
  }
}

export class GetControllerConfigRequest extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): GetControllerConfigRequest;

  getValidationToken(): number;
  setValidationToken(value: number): GetControllerConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetControllerConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetControllerConfigRequest): GetControllerConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetControllerConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetControllerConfigRequest;
  static deserializeBinaryFromReader(message: GetControllerConfigRequest, reader: jspb.BinaryReader): GetControllerConfigRequest;
}

export namespace GetControllerConfigRequest {
  export type AsObject = {
    operationId: string,
    validationToken: number,
  }
}

export class ControllerConfig extends jspb.Message {
  getImage(): string;
  setImage(value: string): ControllerConfig;

  getCmd(): string;
  setCmd(value: string): ControllerConfig;

  getGcsLogPath(): string;
  setGcsLogPath(value: string): ControllerConfig;

  getMachineType(): string;
  setMachineType(value: string): ControllerConfig;

  getVarsMap(): jspb.Map<string, string>;
  clearVarsMap(): ControllerConfig;

  getDisksMap(): jspb.Map<string, string>;
  clearDisksMap(): ControllerConfig;

  getGcsSourcesMap(): jspb.Map<string, ControllerConfig.RepeatedString>;
  clearGcsSourcesMap(): ControllerConfig;

  getGcsSinksMap(): jspb.Map<string, ControllerConfig.RepeatedString>;
  clearGcsSinksMap(): ControllerConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControllerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ControllerConfig): ControllerConfig.AsObject;
  static serializeBinaryToWriter(message: ControllerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControllerConfig;
  static deserializeBinaryFromReader(message: ControllerConfig, reader: jspb.BinaryReader): ControllerConfig;
}

export namespace ControllerConfig {
  export type AsObject = {
    image: string,
    cmd: string,
    gcsLogPath: string,
    machineType: string,
    varsMap: Array<[string, string]>,
    disksMap: Array<[string, string]>,
    gcsSourcesMap: Array<[string, ControllerConfig.RepeatedString.AsObject]>,
    gcsSinksMap: Array<[string, ControllerConfig.RepeatedString.AsObject]>,
  }

  export class RepeatedString extends jspb.Message {
    getValuesList(): Array<string>;
    setValuesList(value: Array<string>): RepeatedString;
    clearValuesList(): RepeatedString;
    addValues(value: string, index?: number): RepeatedString;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepeatedString.AsObject;
    static toObject(includeInstance: boolean, msg: RepeatedString): RepeatedString.AsObject;
    static serializeBinaryToWriter(message: RepeatedString, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepeatedString;
    static deserializeBinaryFromReader(message: RepeatedString, reader: jspb.BinaryReader): RepeatedString;
  }

  export namespace RepeatedString {
    export type AsObject = {
      valuesList: Array<string>,
    }
  }

}

export class TimestampEvent extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): TimestampEvent;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TimestampEvent;
  hasTimestamp(): boolean;
  clearTimestamp(): TimestampEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampEvent): TimestampEvent.AsObject;
  static serializeBinaryToWriter(message: TimestampEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampEvent;
  static deserializeBinaryFromReader(message: TimestampEvent, reader: jspb.BinaryReader): TimestampEvent;
}

export namespace TimestampEvent {
  export type AsObject = {
    description: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SetOperationStatusRequest extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): SetOperationStatusRequest;

  getTimestampEventsList(): Array<TimestampEvent>;
  setTimestampEventsList(value: Array<TimestampEvent>): SetOperationStatusRequest;
  clearTimestampEventsList(): SetOperationStatusRequest;
  addTimestampEvents(value?: TimestampEvent, index?: number): TimestampEvent;

  getErrorCode(): google_rpc_code_pb.Code;
  setErrorCode(value: google_rpc_code_pb.Code): SetOperationStatusRequest;

  getErrorMessage(): string;
  setErrorMessage(value: string): SetOperationStatusRequest;

  getValidationToken(): number;
  setValidationToken(value: number): SetOperationStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOperationStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetOperationStatusRequest): SetOperationStatusRequest.AsObject;
  static serializeBinaryToWriter(message: SetOperationStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOperationStatusRequest;
  static deserializeBinaryFromReader(message: SetOperationStatusRequest, reader: jspb.BinaryReader): SetOperationStatusRequest;
}

export namespace SetOperationStatusRequest {
  export type AsObject = {
    operationId: string,
    timestampEventsList: Array<TimestampEvent.AsObject>,
    errorCode: google_rpc_code_pb.Code,
    errorMessage: string,
    validationToken: number,
  }
}

export class ServiceAccount extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ServiceAccount;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): ServiceAccount;
  clearScopesList(): ServiceAccount;
  addScopes(value: string, index?: number): ServiceAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAccount): ServiceAccount.AsObject;
  static serializeBinaryToWriter(message: ServiceAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAccount;
  static deserializeBinaryFromReader(message: ServiceAccount, reader: jspb.BinaryReader): ServiceAccount;
}

export namespace ServiceAccount {
  export type AsObject = {
    email: string,
    scopesList: Array<string>,
  }
}

export class LoggingOptions extends jspb.Message {
  getGcsPath(): string;
  setGcsPath(value: string): LoggingOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoggingOptions.AsObject;
  static toObject(includeInstance: boolean, msg: LoggingOptions): LoggingOptions.AsObject;
  static serializeBinaryToWriter(message: LoggingOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoggingOptions;
  static deserializeBinaryFromReader(message: LoggingOptions, reader: jspb.BinaryReader): LoggingOptions;
}

export namespace LoggingOptions {
  export type AsObject = {
    gcsPath: string,
  }
}

export class PipelineResources extends jspb.Message {
  getMinimumCpuCores(): number;
  setMinimumCpuCores(value: number): PipelineResources;

  getPreemptible(): boolean;
  setPreemptible(value: boolean): PipelineResources;

  getMinimumRamGb(): number;
  setMinimumRamGb(value: number): PipelineResources;

  getDisksList(): Array<PipelineResources.Disk>;
  setDisksList(value: Array<PipelineResources.Disk>): PipelineResources;
  clearDisksList(): PipelineResources;
  addDisks(value?: PipelineResources.Disk, index?: number): PipelineResources.Disk;

  getZonesList(): Array<string>;
  setZonesList(value: Array<string>): PipelineResources;
  clearZonesList(): PipelineResources;
  addZones(value: string, index?: number): PipelineResources;

  getBootDiskSizeGb(): number;
  setBootDiskSizeGb(value: number): PipelineResources;

  getNoAddress(): boolean;
  setNoAddress(value: boolean): PipelineResources;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipelineResources.AsObject;
  static toObject(includeInstance: boolean, msg: PipelineResources): PipelineResources.AsObject;
  static serializeBinaryToWriter(message: PipelineResources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipelineResources;
  static deserializeBinaryFromReader(message: PipelineResources, reader: jspb.BinaryReader): PipelineResources;
}

export namespace PipelineResources {
  export type AsObject = {
    minimumCpuCores: number,
    preemptible: boolean,
    minimumRamGb: number,
    disksList: Array<PipelineResources.Disk.AsObject>,
    zonesList: Array<string>,
    bootDiskSizeGb: number,
    noAddress: boolean,
  }

  export class Disk extends jspb.Message {
    getName(): string;
    setName(value: string): Disk;

    getType(): PipelineResources.Disk.Type;
    setType(value: PipelineResources.Disk.Type): Disk;

    getSizeGb(): number;
    setSizeGb(value: number): Disk;

    getSource(): string;
    setSource(value: string): Disk;

    getAutoDelete(): boolean;
    setAutoDelete(value: boolean): Disk;

    getMountPoint(): string;
    setMountPoint(value: string): Disk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Disk.AsObject;
    static toObject(includeInstance: boolean, msg: Disk): Disk.AsObject;
    static serializeBinaryToWriter(message: Disk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Disk;
    static deserializeBinaryFromReader(message: Disk, reader: jspb.BinaryReader): Disk;
  }

  export namespace Disk {
    export type AsObject = {
      name: string,
      type: PipelineResources.Disk.Type,
      sizeGb: number,
      source: string,
      autoDelete: boolean,
      mountPoint: string,
    }

    export enum Type { 
      TYPE_UNSPECIFIED = 0,
      PERSISTENT_HDD = 1,
      PERSISTENT_SSD = 2,
      LOCAL_SSD = 3,
    }
  }

}

export class PipelineParameter extends jspb.Message {
  getName(): string;
  setName(value: string): PipelineParameter;

  getDescription(): string;
  setDescription(value: string): PipelineParameter;

  getDefaultValue(): string;
  setDefaultValue(value: string): PipelineParameter;

  getLocalCopy(): PipelineParameter.LocalCopy | undefined;
  setLocalCopy(value?: PipelineParameter.LocalCopy): PipelineParameter;
  hasLocalCopy(): boolean;
  clearLocalCopy(): PipelineParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipelineParameter.AsObject;
  static toObject(includeInstance: boolean, msg: PipelineParameter): PipelineParameter.AsObject;
  static serializeBinaryToWriter(message: PipelineParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipelineParameter;
  static deserializeBinaryFromReader(message: PipelineParameter, reader: jspb.BinaryReader): PipelineParameter;
}

export namespace PipelineParameter {
  export type AsObject = {
    name: string,
    description: string,
    defaultValue: string,
    localCopy?: PipelineParameter.LocalCopy.AsObject,
  }

  export class LocalCopy extends jspb.Message {
    getPath(): string;
    setPath(value: string): LocalCopy;

    getDisk(): string;
    setDisk(value: string): LocalCopy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocalCopy.AsObject;
    static toObject(includeInstance: boolean, msg: LocalCopy): LocalCopy.AsObject;
    static serializeBinaryToWriter(message: LocalCopy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocalCopy;
    static deserializeBinaryFromReader(message: LocalCopy, reader: jspb.BinaryReader): LocalCopy;
  }

  export namespace LocalCopy {
    export type AsObject = {
      path: string,
      disk: string,
    }
  }

}

export class DockerExecutor extends jspb.Message {
  getImageName(): string;
  setImageName(value: string): DockerExecutor;

  getCmd(): string;
  setCmd(value: string): DockerExecutor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DockerExecutor.AsObject;
  static toObject(includeInstance: boolean, msg: DockerExecutor): DockerExecutor.AsObject;
  static serializeBinaryToWriter(message: DockerExecutor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DockerExecutor;
  static deserializeBinaryFromReader(message: DockerExecutor, reader: jspb.BinaryReader): DockerExecutor;
}

export namespace DockerExecutor {
  export type AsObject = {
    imageName: string,
    cmd: string,
  }
}

