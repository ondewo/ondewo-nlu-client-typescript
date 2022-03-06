import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_appengine_v1_app_yaml_pb from '../../../google/appengine/v1/app_yaml_pb';
import * as google_appengine_v1_deploy_pb from '../../../google/appengine/v1/deploy_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Version extends jspb.Message {
  getName(): string;
  setName(value: string): Version;

  getId(): string;
  setId(value: string): Version;

  getAutomaticScaling(): AutomaticScaling | undefined;
  setAutomaticScaling(value?: AutomaticScaling): Version;
  hasAutomaticScaling(): boolean;
  clearAutomaticScaling(): Version;

  getBasicScaling(): BasicScaling | undefined;
  setBasicScaling(value?: BasicScaling): Version;
  hasBasicScaling(): boolean;
  clearBasicScaling(): Version;

  getManualScaling(): ManualScaling | undefined;
  setManualScaling(value?: ManualScaling): Version;
  hasManualScaling(): boolean;
  clearManualScaling(): Version;

  getInboundServicesList(): Array<InboundServiceType>;
  setInboundServicesList(value: Array<InboundServiceType>): Version;
  clearInboundServicesList(): Version;
  addInboundServices(value: InboundServiceType, index?: number): Version;

  getInstanceClass(): string;
  setInstanceClass(value: string): Version;

  getNetwork(): Network | undefined;
  setNetwork(value?: Network): Version;
  hasNetwork(): boolean;
  clearNetwork(): Version;

  getResources(): Resources | undefined;
  setResources(value?: Resources): Version;
  hasResources(): boolean;
  clearResources(): Version;

  getRuntime(): string;
  setRuntime(value: string): Version;

  getThreadsafe(): boolean;
  setThreadsafe(value: boolean): Version;

  getVm(): boolean;
  setVm(value: boolean): Version;

  getBetaSettingsMap(): jspb.Map<string, string>;
  clearBetaSettingsMap(): Version;

  getEnv(): string;
  setEnv(value: string): Version;

  getServingStatus(): ServingStatus;
  setServingStatus(value: ServingStatus): Version;

  getCreatedBy(): string;
  setCreatedBy(value: string): Version;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Version;
  hasCreateTime(): boolean;
  clearCreateTime(): Version;

  getDiskUsageBytes(): number;
  setDiskUsageBytes(value: number): Version;

  getHandlersList(): Array<google_appengine_v1_app_yaml_pb.UrlMap>;
  setHandlersList(value: Array<google_appengine_v1_app_yaml_pb.UrlMap>): Version;
  clearHandlersList(): Version;
  addHandlers(value?: google_appengine_v1_app_yaml_pb.UrlMap, index?: number): google_appengine_v1_app_yaml_pb.UrlMap;

  getErrorHandlersList(): Array<google_appengine_v1_app_yaml_pb.ErrorHandler>;
  setErrorHandlersList(value: Array<google_appengine_v1_app_yaml_pb.ErrorHandler>): Version;
  clearErrorHandlersList(): Version;
  addErrorHandlers(value?: google_appengine_v1_app_yaml_pb.ErrorHandler, index?: number): google_appengine_v1_app_yaml_pb.ErrorHandler;

  getLibrariesList(): Array<google_appengine_v1_app_yaml_pb.Library>;
  setLibrariesList(value: Array<google_appengine_v1_app_yaml_pb.Library>): Version;
  clearLibrariesList(): Version;
  addLibraries(value?: google_appengine_v1_app_yaml_pb.Library, index?: number): google_appengine_v1_app_yaml_pb.Library;

  getApiConfig(): google_appengine_v1_app_yaml_pb.ApiConfigHandler | undefined;
  setApiConfig(value?: google_appengine_v1_app_yaml_pb.ApiConfigHandler): Version;
  hasApiConfig(): boolean;
  clearApiConfig(): Version;

  getEnvVariablesMap(): jspb.Map<string, string>;
  clearEnvVariablesMap(): Version;

  getDefaultExpiration(): google_protobuf_duration_pb.Duration | undefined;
  setDefaultExpiration(value?: google_protobuf_duration_pb.Duration): Version;
  hasDefaultExpiration(): boolean;
  clearDefaultExpiration(): Version;

  getHealthCheck(): google_appengine_v1_app_yaml_pb.HealthCheck | undefined;
  setHealthCheck(value?: google_appengine_v1_app_yaml_pb.HealthCheck): Version;
  hasHealthCheck(): boolean;
  clearHealthCheck(): Version;

  getNobuildFilesRegex(): string;
  setNobuildFilesRegex(value: string): Version;

  getDeployment(): google_appengine_v1_deploy_pb.Deployment | undefined;
  setDeployment(value?: google_appengine_v1_deploy_pb.Deployment): Version;
  hasDeployment(): boolean;
  clearDeployment(): Version;

  getVersionUrl(): string;
  setVersionUrl(value: string): Version;

  getScalingCase(): Version.ScalingCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    name: string,
    id: string,
    automaticScaling?: AutomaticScaling.AsObject,
    basicScaling?: BasicScaling.AsObject,
    manualScaling?: ManualScaling.AsObject,
    inboundServicesList: Array<InboundServiceType>,
    instanceClass: string,
    network?: Network.AsObject,
    resources?: Resources.AsObject,
    runtime: string,
    threadsafe: boolean,
    vm: boolean,
    betaSettingsMap: Array<[string, string]>,
    env: string,
    servingStatus: ServingStatus,
    createdBy: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    diskUsageBytes: number,
    handlersList: Array<google_appengine_v1_app_yaml_pb.UrlMap.AsObject>,
    errorHandlersList: Array<google_appengine_v1_app_yaml_pb.ErrorHandler.AsObject>,
    librariesList: Array<google_appengine_v1_app_yaml_pb.Library.AsObject>,
    apiConfig?: google_appengine_v1_app_yaml_pb.ApiConfigHandler.AsObject,
    envVariablesMap: Array<[string, string]>,
    defaultExpiration?: google_protobuf_duration_pb.Duration.AsObject,
    healthCheck?: google_appengine_v1_app_yaml_pb.HealthCheck.AsObject,
    nobuildFilesRegex: string,
    deployment?: google_appengine_v1_deploy_pb.Deployment.AsObject,
    versionUrl: string,
  }

  export enum ScalingCase { 
    SCALING_NOT_SET = 0,
    AUTOMATIC_SCALING = 3,
    BASIC_SCALING = 4,
    MANUAL_SCALING = 5,
  }
}

export class AutomaticScaling extends jspb.Message {
  getCoolDownPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setCoolDownPeriod(value?: google_protobuf_duration_pb.Duration): AutomaticScaling;
  hasCoolDownPeriod(): boolean;
  clearCoolDownPeriod(): AutomaticScaling;

  getCpuUtilization(): CpuUtilization | undefined;
  setCpuUtilization(value?: CpuUtilization): AutomaticScaling;
  hasCpuUtilization(): boolean;
  clearCpuUtilization(): AutomaticScaling;

  getMaxConcurrentRequests(): number;
  setMaxConcurrentRequests(value: number): AutomaticScaling;

  getMaxIdleInstances(): number;
  setMaxIdleInstances(value: number): AutomaticScaling;

  getMaxTotalInstances(): number;
  setMaxTotalInstances(value: number): AutomaticScaling;

  getMaxPendingLatency(): google_protobuf_duration_pb.Duration | undefined;
  setMaxPendingLatency(value?: google_protobuf_duration_pb.Duration): AutomaticScaling;
  hasMaxPendingLatency(): boolean;
  clearMaxPendingLatency(): AutomaticScaling;

  getMinIdleInstances(): number;
  setMinIdleInstances(value: number): AutomaticScaling;

  getMinTotalInstances(): number;
  setMinTotalInstances(value: number): AutomaticScaling;

  getMinPendingLatency(): google_protobuf_duration_pb.Duration | undefined;
  setMinPendingLatency(value?: google_protobuf_duration_pb.Duration): AutomaticScaling;
  hasMinPendingLatency(): boolean;
  clearMinPendingLatency(): AutomaticScaling;

  getRequestUtilization(): RequestUtilization | undefined;
  setRequestUtilization(value?: RequestUtilization): AutomaticScaling;
  hasRequestUtilization(): boolean;
  clearRequestUtilization(): AutomaticScaling;

  getDiskUtilization(): DiskUtilization | undefined;
  setDiskUtilization(value?: DiskUtilization): AutomaticScaling;
  hasDiskUtilization(): boolean;
  clearDiskUtilization(): AutomaticScaling;

  getNetworkUtilization(): NetworkUtilization | undefined;
  setNetworkUtilization(value?: NetworkUtilization): AutomaticScaling;
  hasNetworkUtilization(): boolean;
  clearNetworkUtilization(): AutomaticScaling;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutomaticScaling.AsObject;
  static toObject(includeInstance: boolean, msg: AutomaticScaling): AutomaticScaling.AsObject;
  static serializeBinaryToWriter(message: AutomaticScaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutomaticScaling;
  static deserializeBinaryFromReader(message: AutomaticScaling, reader: jspb.BinaryReader): AutomaticScaling;
}

export namespace AutomaticScaling {
  export type AsObject = {
    coolDownPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    cpuUtilization?: CpuUtilization.AsObject,
    maxConcurrentRequests: number,
    maxIdleInstances: number,
    maxTotalInstances: number,
    maxPendingLatency?: google_protobuf_duration_pb.Duration.AsObject,
    minIdleInstances: number,
    minTotalInstances: number,
    minPendingLatency?: google_protobuf_duration_pb.Duration.AsObject,
    requestUtilization?: RequestUtilization.AsObject,
    diskUtilization?: DiskUtilization.AsObject,
    networkUtilization?: NetworkUtilization.AsObject,
  }
}

export class BasicScaling extends jspb.Message {
  getIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setIdleTimeout(value?: google_protobuf_duration_pb.Duration): BasicScaling;
  hasIdleTimeout(): boolean;
  clearIdleTimeout(): BasicScaling;

  getMaxInstances(): number;
  setMaxInstances(value: number): BasicScaling;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicScaling.AsObject;
  static toObject(includeInstance: boolean, msg: BasicScaling): BasicScaling.AsObject;
  static serializeBinaryToWriter(message: BasicScaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicScaling;
  static deserializeBinaryFromReader(message: BasicScaling, reader: jspb.BinaryReader): BasicScaling;
}

export namespace BasicScaling {
  export type AsObject = {
    idleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    maxInstances: number,
  }
}

export class ManualScaling extends jspb.Message {
  getInstances(): number;
  setInstances(value: number): ManualScaling;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualScaling.AsObject;
  static toObject(includeInstance: boolean, msg: ManualScaling): ManualScaling.AsObject;
  static serializeBinaryToWriter(message: ManualScaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualScaling;
  static deserializeBinaryFromReader(message: ManualScaling, reader: jspb.BinaryReader): ManualScaling;
}

export namespace ManualScaling {
  export type AsObject = {
    instances: number,
  }
}

export class CpuUtilization extends jspb.Message {
  getAggregationWindowLength(): google_protobuf_duration_pb.Duration | undefined;
  setAggregationWindowLength(value?: google_protobuf_duration_pb.Duration): CpuUtilization;
  hasAggregationWindowLength(): boolean;
  clearAggregationWindowLength(): CpuUtilization;

  getTargetUtilization(): number;
  setTargetUtilization(value: number): CpuUtilization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CpuUtilization.AsObject;
  static toObject(includeInstance: boolean, msg: CpuUtilization): CpuUtilization.AsObject;
  static serializeBinaryToWriter(message: CpuUtilization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CpuUtilization;
  static deserializeBinaryFromReader(message: CpuUtilization, reader: jspb.BinaryReader): CpuUtilization;
}

export namespace CpuUtilization {
  export type AsObject = {
    aggregationWindowLength?: google_protobuf_duration_pb.Duration.AsObject,
    targetUtilization: number,
  }
}

export class RequestUtilization extends jspb.Message {
  getTargetRequestCountPerSecond(): number;
  setTargetRequestCountPerSecond(value: number): RequestUtilization;

  getTargetConcurrentRequests(): number;
  setTargetConcurrentRequests(value: number): RequestUtilization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUtilization.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUtilization): RequestUtilization.AsObject;
  static serializeBinaryToWriter(message: RequestUtilization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUtilization;
  static deserializeBinaryFromReader(message: RequestUtilization, reader: jspb.BinaryReader): RequestUtilization;
}

export namespace RequestUtilization {
  export type AsObject = {
    targetRequestCountPerSecond: number,
    targetConcurrentRequests: number,
  }
}

export class DiskUtilization extends jspb.Message {
  getTargetWriteBytesPerSecond(): number;
  setTargetWriteBytesPerSecond(value: number): DiskUtilization;

  getTargetWriteOpsPerSecond(): number;
  setTargetWriteOpsPerSecond(value: number): DiskUtilization;

  getTargetReadBytesPerSecond(): number;
  setTargetReadBytesPerSecond(value: number): DiskUtilization;

  getTargetReadOpsPerSecond(): number;
  setTargetReadOpsPerSecond(value: number): DiskUtilization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiskUtilization.AsObject;
  static toObject(includeInstance: boolean, msg: DiskUtilization): DiskUtilization.AsObject;
  static serializeBinaryToWriter(message: DiskUtilization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiskUtilization;
  static deserializeBinaryFromReader(message: DiskUtilization, reader: jspb.BinaryReader): DiskUtilization;
}

export namespace DiskUtilization {
  export type AsObject = {
    targetWriteBytesPerSecond: number,
    targetWriteOpsPerSecond: number,
    targetReadBytesPerSecond: number,
    targetReadOpsPerSecond: number,
  }
}

export class NetworkUtilization extends jspb.Message {
  getTargetSentBytesPerSecond(): number;
  setTargetSentBytesPerSecond(value: number): NetworkUtilization;

  getTargetSentPacketsPerSecond(): number;
  setTargetSentPacketsPerSecond(value: number): NetworkUtilization;

  getTargetReceivedBytesPerSecond(): number;
  setTargetReceivedBytesPerSecond(value: number): NetworkUtilization;

  getTargetReceivedPacketsPerSecond(): number;
  setTargetReceivedPacketsPerSecond(value: number): NetworkUtilization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkUtilization.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkUtilization): NetworkUtilization.AsObject;
  static serializeBinaryToWriter(message: NetworkUtilization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkUtilization;
  static deserializeBinaryFromReader(message: NetworkUtilization, reader: jspb.BinaryReader): NetworkUtilization;
}

export namespace NetworkUtilization {
  export type AsObject = {
    targetSentBytesPerSecond: number,
    targetSentPacketsPerSecond: number,
    targetReceivedBytesPerSecond: number,
    targetReceivedPacketsPerSecond: number,
  }
}

export class Network extends jspb.Message {
  getForwardedPortsList(): Array<string>;
  setForwardedPortsList(value: Array<string>): Network;
  clearForwardedPortsList(): Network;
  addForwardedPorts(value: string, index?: number): Network;

  getInstanceTag(): string;
  setInstanceTag(value: string): Network;

  getName(): string;
  setName(value: string): Network;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Network.AsObject;
  static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
  static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Network;
  static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
  export type AsObject = {
    forwardedPortsList: Array<string>,
    instanceTag: string,
    name: string,
  }
}

export class Resources extends jspb.Message {
  getCpu(): number;
  setCpu(value: number): Resources;

  getDiskGb(): number;
  setDiskGb(value: number): Resources;

  getMemoryGb(): number;
  setMemoryGb(value: number): Resources;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resources.AsObject;
  static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
  static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resources;
  static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
}

export namespace Resources {
  export type AsObject = {
    cpu: number,
    diskGb: number,
    memoryGb: number,
  }
}

export enum InboundServiceType { 
  INBOUND_SERVICE_UNSPECIFIED = 0,
  INBOUND_SERVICE_MAIL = 1,
  INBOUND_SERVICE_MAIL_BOUNCE = 2,
  INBOUND_SERVICE_XMPP_ERROR = 3,
  INBOUND_SERVICE_XMPP_MESSAGE = 4,
  INBOUND_SERVICE_XMPP_SUBSCRIBE = 5,
  INBOUND_SERVICE_XMPP_PRESENCE = 6,
  INBOUND_SERVICE_CHANNEL_PRESENCE = 7,
  INBOUND_SERVICE_WARMUP = 9,
}
export enum ServingStatus { 
  SERVING_STATUS_UNSPECIFIED = 0,
  SERVING = 1,
  STOPPED = 2,
}
