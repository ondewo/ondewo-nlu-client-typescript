import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_dataproc_v1_operations_pb from '../../../../google/cloud/dataproc/v1/operations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Cluster extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): Cluster;

  getClusterName(): string;
  setClusterName(value: string): Cluster;

  getConfig(): ClusterConfig | undefined;
  setConfig(value?: ClusterConfig): Cluster;
  hasConfig(): boolean;
  clearConfig(): Cluster;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Cluster;

  getStatus(): ClusterStatus | undefined;
  setStatus(value?: ClusterStatus): Cluster;
  hasStatus(): boolean;
  clearStatus(): Cluster;

  getStatusHistoryList(): Array<ClusterStatus>;
  setStatusHistoryList(value: Array<ClusterStatus>): Cluster;
  clearStatusHistoryList(): Cluster;
  addStatusHistory(value?: ClusterStatus, index?: number): ClusterStatus;

  getClusterUuid(): string;
  setClusterUuid(value: string): Cluster;

  getMetrics(): ClusterMetrics | undefined;
  setMetrics(value?: ClusterMetrics): Cluster;
  hasMetrics(): boolean;
  clearMetrics(): Cluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cluster.AsObject;
  static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
  static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cluster;
  static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
  export type AsObject = {
    projectId: string,
    clusterName: string,
    config?: ClusterConfig.AsObject,
    labelsMap: Array<[string, string]>,
    status?: ClusterStatus.AsObject,
    statusHistoryList: Array<ClusterStatus.AsObject>,
    clusterUuid: string,
    metrics?: ClusterMetrics.AsObject,
  }
}

export class ClusterConfig extends jspb.Message {
  getConfigBucket(): string;
  setConfigBucket(value: string): ClusterConfig;

  getGceClusterConfig(): GceClusterConfig | undefined;
  setGceClusterConfig(value?: GceClusterConfig): ClusterConfig;
  hasGceClusterConfig(): boolean;
  clearGceClusterConfig(): ClusterConfig;

  getMasterConfig(): InstanceGroupConfig | undefined;
  setMasterConfig(value?: InstanceGroupConfig): ClusterConfig;
  hasMasterConfig(): boolean;
  clearMasterConfig(): ClusterConfig;

  getWorkerConfig(): InstanceGroupConfig | undefined;
  setWorkerConfig(value?: InstanceGroupConfig): ClusterConfig;
  hasWorkerConfig(): boolean;
  clearWorkerConfig(): ClusterConfig;

  getSecondaryWorkerConfig(): InstanceGroupConfig | undefined;
  setSecondaryWorkerConfig(value?: InstanceGroupConfig): ClusterConfig;
  hasSecondaryWorkerConfig(): boolean;
  clearSecondaryWorkerConfig(): ClusterConfig;

  getSoftwareConfig(): SoftwareConfig | undefined;
  setSoftwareConfig(value?: SoftwareConfig): ClusterConfig;
  hasSoftwareConfig(): boolean;
  clearSoftwareConfig(): ClusterConfig;

  getInitializationActionsList(): Array<NodeInitializationAction>;
  setInitializationActionsList(value: Array<NodeInitializationAction>): ClusterConfig;
  clearInitializationActionsList(): ClusterConfig;
  addInitializationActions(value?: NodeInitializationAction, index?: number): NodeInitializationAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterConfig): ClusterConfig.AsObject;
  static serializeBinaryToWriter(message: ClusterConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterConfig;
  static deserializeBinaryFromReader(message: ClusterConfig, reader: jspb.BinaryReader): ClusterConfig;
}

export namespace ClusterConfig {
  export type AsObject = {
    configBucket: string,
    gceClusterConfig?: GceClusterConfig.AsObject,
    masterConfig?: InstanceGroupConfig.AsObject,
    workerConfig?: InstanceGroupConfig.AsObject,
    secondaryWorkerConfig?: InstanceGroupConfig.AsObject,
    softwareConfig?: SoftwareConfig.AsObject,
    initializationActionsList: Array<NodeInitializationAction.AsObject>,
  }
}

export class GceClusterConfig extends jspb.Message {
  getZoneUri(): string;
  setZoneUri(value: string): GceClusterConfig;

  getNetworkUri(): string;
  setNetworkUri(value: string): GceClusterConfig;

  getSubnetworkUri(): string;
  setSubnetworkUri(value: string): GceClusterConfig;

  getInternalIpOnly(): boolean;
  setInternalIpOnly(value: boolean): GceClusterConfig;

  getServiceAccount(): string;
  setServiceAccount(value: string): GceClusterConfig;

  getServiceAccountScopesList(): Array<string>;
  setServiceAccountScopesList(value: Array<string>): GceClusterConfig;
  clearServiceAccountScopesList(): GceClusterConfig;
  addServiceAccountScopes(value: string, index?: number): GceClusterConfig;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): GceClusterConfig;
  clearTagsList(): GceClusterConfig;
  addTags(value: string, index?: number): GceClusterConfig;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): GceClusterConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GceClusterConfig.AsObject;
  static toObject(includeInstance: boolean, msg: GceClusterConfig): GceClusterConfig.AsObject;
  static serializeBinaryToWriter(message: GceClusterConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GceClusterConfig;
  static deserializeBinaryFromReader(message: GceClusterConfig, reader: jspb.BinaryReader): GceClusterConfig;
}

export namespace GceClusterConfig {
  export type AsObject = {
    zoneUri: string,
    networkUri: string,
    subnetworkUri: string,
    internalIpOnly: boolean,
    serviceAccount: string,
    serviceAccountScopesList: Array<string>,
    tagsList: Array<string>,
    metadataMap: Array<[string, string]>,
  }
}

export class InstanceGroupConfig extends jspb.Message {
  getNumInstances(): number;
  setNumInstances(value: number): InstanceGroupConfig;

  getInstanceNamesList(): Array<string>;
  setInstanceNamesList(value: Array<string>): InstanceGroupConfig;
  clearInstanceNamesList(): InstanceGroupConfig;
  addInstanceNames(value: string, index?: number): InstanceGroupConfig;

  getImageUri(): string;
  setImageUri(value: string): InstanceGroupConfig;

  getMachineTypeUri(): string;
  setMachineTypeUri(value: string): InstanceGroupConfig;

  getDiskConfig(): DiskConfig | undefined;
  setDiskConfig(value?: DiskConfig): InstanceGroupConfig;
  hasDiskConfig(): boolean;
  clearDiskConfig(): InstanceGroupConfig;

  getIsPreemptible(): boolean;
  setIsPreemptible(value: boolean): InstanceGroupConfig;

  getManagedGroupConfig(): ManagedGroupConfig | undefined;
  setManagedGroupConfig(value?: ManagedGroupConfig): InstanceGroupConfig;
  hasManagedGroupConfig(): boolean;
  clearManagedGroupConfig(): InstanceGroupConfig;

  getAcceleratorsList(): Array<AcceleratorConfig>;
  setAcceleratorsList(value: Array<AcceleratorConfig>): InstanceGroupConfig;
  clearAcceleratorsList(): InstanceGroupConfig;
  addAccelerators(value?: AcceleratorConfig, index?: number): AcceleratorConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceGroupConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceGroupConfig): InstanceGroupConfig.AsObject;
  static serializeBinaryToWriter(message: InstanceGroupConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceGroupConfig;
  static deserializeBinaryFromReader(message: InstanceGroupConfig, reader: jspb.BinaryReader): InstanceGroupConfig;
}

export namespace InstanceGroupConfig {
  export type AsObject = {
    numInstances: number,
    instanceNamesList: Array<string>,
    imageUri: string,
    machineTypeUri: string,
    diskConfig?: DiskConfig.AsObject,
    isPreemptible: boolean,
    managedGroupConfig?: ManagedGroupConfig.AsObject,
    acceleratorsList: Array<AcceleratorConfig.AsObject>,
  }
}

export class ManagedGroupConfig extends jspb.Message {
  getInstanceTemplateName(): string;
  setInstanceTemplateName(value: string): ManagedGroupConfig;

  getInstanceGroupManagerName(): string;
  setInstanceGroupManagerName(value: string): ManagedGroupConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedGroupConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedGroupConfig): ManagedGroupConfig.AsObject;
  static serializeBinaryToWriter(message: ManagedGroupConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedGroupConfig;
  static deserializeBinaryFromReader(message: ManagedGroupConfig, reader: jspb.BinaryReader): ManagedGroupConfig;
}

export namespace ManagedGroupConfig {
  export type AsObject = {
    instanceTemplateName: string,
    instanceGroupManagerName: string,
  }
}

export class AcceleratorConfig extends jspb.Message {
  getAcceleratorTypeUri(): string;
  setAcceleratorTypeUri(value: string): AcceleratorConfig;

  getAcceleratorCount(): number;
  setAcceleratorCount(value: number): AcceleratorConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceleratorConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AcceleratorConfig): AcceleratorConfig.AsObject;
  static serializeBinaryToWriter(message: AcceleratorConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceleratorConfig;
  static deserializeBinaryFromReader(message: AcceleratorConfig, reader: jspb.BinaryReader): AcceleratorConfig;
}

export namespace AcceleratorConfig {
  export type AsObject = {
    acceleratorTypeUri: string,
    acceleratorCount: number,
  }
}

export class DiskConfig extends jspb.Message {
  getBootDiskSizeGb(): number;
  setBootDiskSizeGb(value: number): DiskConfig;

  getNumLocalSsds(): number;
  setNumLocalSsds(value: number): DiskConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiskConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DiskConfig): DiskConfig.AsObject;
  static serializeBinaryToWriter(message: DiskConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiskConfig;
  static deserializeBinaryFromReader(message: DiskConfig, reader: jspb.BinaryReader): DiskConfig;
}

export namespace DiskConfig {
  export type AsObject = {
    bootDiskSizeGb: number,
    numLocalSsds: number,
  }
}

export class NodeInitializationAction extends jspb.Message {
  getExecutableFile(): string;
  setExecutableFile(value: string): NodeInitializationAction;

  getExecutionTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setExecutionTimeout(value?: google_protobuf_duration_pb.Duration): NodeInitializationAction;
  hasExecutionTimeout(): boolean;
  clearExecutionTimeout(): NodeInitializationAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInitializationAction.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInitializationAction): NodeInitializationAction.AsObject;
  static serializeBinaryToWriter(message: NodeInitializationAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInitializationAction;
  static deserializeBinaryFromReader(message: NodeInitializationAction, reader: jspb.BinaryReader): NodeInitializationAction;
}

export namespace NodeInitializationAction {
  export type AsObject = {
    executableFile: string,
    executionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ClusterStatus extends jspb.Message {
  getState(): ClusterStatus.State;
  setState(value: ClusterStatus.State): ClusterStatus;

  getDetail(): string;
  setDetail(value: string): ClusterStatus;

  getStateStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ClusterStatus;
  hasStateStartTime(): boolean;
  clearStateStartTime(): ClusterStatus;

  getSubstate(): ClusterStatus.Substate;
  setSubstate(value: ClusterStatus.Substate): ClusterStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterStatus): ClusterStatus.AsObject;
  static serializeBinaryToWriter(message: ClusterStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterStatus;
  static deserializeBinaryFromReader(message: ClusterStatus, reader: jspb.BinaryReader): ClusterStatus;
}

export namespace ClusterStatus {
  export type AsObject = {
    state: ClusterStatus.State,
    detail: string,
    stateStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    substate: ClusterStatus.Substate,
  }

  export enum State { 
    UNKNOWN = 0,
    CREATING = 1,
    RUNNING = 2,
    ERROR = 3,
    DELETING = 4,
    UPDATING = 5,
  }

  export enum Substate { 
    UNSPECIFIED = 0,
    UNHEALTHY = 1,
    STALE_STATUS = 2,
  }
}

export class SoftwareConfig extends jspb.Message {
  getImageVersion(): string;
  setImageVersion(value: string): SoftwareConfig;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): SoftwareConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoftwareConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SoftwareConfig): SoftwareConfig.AsObject;
  static serializeBinaryToWriter(message: SoftwareConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoftwareConfig;
  static deserializeBinaryFromReader(message: SoftwareConfig, reader: jspb.BinaryReader): SoftwareConfig;
}

export namespace SoftwareConfig {
  export type AsObject = {
    imageVersion: string,
    propertiesMap: Array<[string, string]>,
  }
}

export class ClusterMetrics extends jspb.Message {
  getHdfsMetricsMap(): jspb.Map<string, number>;
  clearHdfsMetricsMap(): ClusterMetrics;

  getYarnMetricsMap(): jspb.Map<string, number>;
  clearYarnMetricsMap(): ClusterMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterMetrics): ClusterMetrics.AsObject;
  static serializeBinaryToWriter(message: ClusterMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterMetrics;
  static deserializeBinaryFromReader(message: ClusterMetrics, reader: jspb.BinaryReader): ClusterMetrics;
}

export namespace ClusterMetrics {
  export type AsObject = {
    hdfsMetricsMap: Array<[string, number]>,
    yarnMetricsMap: Array<[string, number]>,
  }
}

export class CreateClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CreateClusterRequest;

  getRegion(): string;
  setRegion(value: string): CreateClusterRequest;

  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): CreateClusterRequest;
  hasCluster(): boolean;
  clearCluster(): CreateClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClusterRequest): CreateClusterRequest.AsObject;
  static serializeBinaryToWriter(message: CreateClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClusterRequest;
  static deserializeBinaryFromReader(message: CreateClusterRequest, reader: jspb.BinaryReader): CreateClusterRequest;
}

export namespace CreateClusterRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    cluster?: Cluster.AsObject,
  }
}

export class UpdateClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UpdateClusterRequest;

  getRegion(): string;
  setRegion(value: string): UpdateClusterRequest;

  getClusterName(): string;
  setClusterName(value: string): UpdateClusterRequest;

  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): UpdateClusterRequest;
  hasCluster(): boolean;
  clearCluster(): UpdateClusterRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateClusterRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClusterRequest): UpdateClusterRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClusterRequest;
  static deserializeBinaryFromReader(message: UpdateClusterRequest, reader: jspb.BinaryReader): UpdateClusterRequest;
}

export namespace UpdateClusterRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    clusterName: string,
    cluster?: Cluster.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeleteClusterRequest;

  getRegion(): string;
  setRegion(value: string): DeleteClusterRequest;

  getClusterName(): string;
  setClusterName(value: string): DeleteClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClusterRequest): DeleteClusterRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClusterRequest;
  static deserializeBinaryFromReader(message: DeleteClusterRequest, reader: jspb.BinaryReader): DeleteClusterRequest;
}

export namespace DeleteClusterRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    clusterName: string,
  }
}

export class GetClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetClusterRequest;

  getRegion(): string;
  setRegion(value: string): GetClusterRequest;

  getClusterName(): string;
  setClusterName(value: string): GetClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClusterRequest): GetClusterRequest.AsObject;
  static serializeBinaryToWriter(message: GetClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClusterRequest;
  static deserializeBinaryFromReader(message: GetClusterRequest, reader: jspb.BinaryReader): GetClusterRequest;
}

export namespace GetClusterRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    clusterName: string,
  }
}

export class ListClustersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListClustersRequest;

  getRegion(): string;
  setRegion(value: string): ListClustersRequest;

  getFilter(): string;
  setFilter(value: string): ListClustersRequest;

  getPageSize(): number;
  setPageSize(value: number): ListClustersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListClustersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersRequest): ListClustersRequest.AsObject;
  static serializeBinaryToWriter(message: ListClustersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersRequest;
  static deserializeBinaryFromReader(message: ListClustersRequest, reader: jspb.BinaryReader): ListClustersRequest;
}

export namespace ListClustersRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListClustersResponse extends jspb.Message {
  getClustersList(): Array<Cluster>;
  setClustersList(value: Array<Cluster>): ListClustersResponse;
  clearClustersList(): ListClustersResponse;
  addClusters(value?: Cluster, index?: number): Cluster;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListClustersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersResponse): ListClustersResponse.AsObject;
  static serializeBinaryToWriter(message: ListClustersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersResponse;
  static deserializeBinaryFromReader(message: ListClustersResponse, reader: jspb.BinaryReader): ListClustersResponse;
}

export namespace ListClustersResponse {
  export type AsObject = {
    clustersList: Array<Cluster.AsObject>,
    nextPageToken: string,
  }
}

export class DiagnoseClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DiagnoseClusterRequest;

  getRegion(): string;
  setRegion(value: string): DiagnoseClusterRequest;

  getClusterName(): string;
  setClusterName(value: string): DiagnoseClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnoseClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnoseClusterRequest): DiagnoseClusterRequest.AsObject;
  static serializeBinaryToWriter(message: DiagnoseClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnoseClusterRequest;
  static deserializeBinaryFromReader(message: DiagnoseClusterRequest, reader: jspb.BinaryReader): DiagnoseClusterRequest;
}

export namespace DiagnoseClusterRequest {
  export type AsObject = {
    projectId: string,
    region: string,
    clusterName: string,
  }
}

export class DiagnoseClusterResults extends jspb.Message {
  getOutputUri(): string;
  setOutputUri(value: string): DiagnoseClusterResults;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnoseClusterResults.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnoseClusterResults): DiagnoseClusterResults.AsObject;
  static serializeBinaryToWriter(message: DiagnoseClusterResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnoseClusterResults;
  static deserializeBinaryFromReader(message: DiagnoseClusterResults, reader: jspb.BinaryReader): DiagnoseClusterResults;
}

export namespace DiagnoseClusterResults {
  export type AsObject = {
    outputUri: string,
  }
}

