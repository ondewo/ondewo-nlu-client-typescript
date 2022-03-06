import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class NodeConfig extends jspb.Message {
  getMachineType(): string;
  setMachineType(value: string): NodeConfig;

  getDiskSizeGb(): number;
  setDiskSizeGb(value: number): NodeConfig;

  getOauthScopesList(): Array<string>;
  setOauthScopesList(value: Array<string>): NodeConfig;
  clearOauthScopesList(): NodeConfig;
  addOauthScopes(value: string, index?: number): NodeConfig;

  getServiceAccount(): string;
  setServiceAccount(value: string): NodeConfig;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): NodeConfig;

  getImageType(): string;
  setImageType(value: string): NodeConfig;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): NodeConfig;

  getLocalSsdCount(): number;
  setLocalSsdCount(value: number): NodeConfig;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): NodeConfig;
  clearTagsList(): NodeConfig;
  addTags(value: string, index?: number): NodeConfig;

  getPreemptible(): boolean;
  setPreemptible(value: boolean): NodeConfig;

  getAcceleratorsList(): Array<AcceleratorConfig>;
  setAcceleratorsList(value: Array<AcceleratorConfig>): NodeConfig;
  clearAcceleratorsList(): NodeConfig;
  addAccelerators(value?: AcceleratorConfig, index?: number): AcceleratorConfig;

  getMinCpuPlatform(): string;
  setMinCpuPlatform(value: string): NodeConfig;

  getTaintsList(): Array<NodeTaint>;
  setTaintsList(value: Array<NodeTaint>): NodeConfig;
  clearTaintsList(): NodeConfig;
  addTaints(value?: NodeTaint, index?: number): NodeTaint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NodeConfig): NodeConfig.AsObject;
  static serializeBinaryToWriter(message: NodeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeConfig;
  static deserializeBinaryFromReader(message: NodeConfig, reader: jspb.BinaryReader): NodeConfig;
}

export namespace NodeConfig {
  export type AsObject = {
    machineType: string,
    diskSizeGb: number,
    oauthScopesList: Array<string>,
    serviceAccount: string,
    metadataMap: Array<[string, string]>,
    imageType: string,
    labelsMap: Array<[string, string]>,
    localSsdCount: number,
    tagsList: Array<string>,
    preemptible: boolean,
    acceleratorsList: Array<AcceleratorConfig.AsObject>,
    minCpuPlatform: string,
    taintsList: Array<NodeTaint.AsObject>,
  }
}

export class NodeTaint extends jspb.Message {
  getKey(): string;
  setKey(value: string): NodeTaint;

  getValue(): string;
  setValue(value: string): NodeTaint;

  getEffect(): NodeTaint.Effect;
  setEffect(value: NodeTaint.Effect): NodeTaint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeTaint.AsObject;
  static toObject(includeInstance: boolean, msg: NodeTaint): NodeTaint.AsObject;
  static serializeBinaryToWriter(message: NodeTaint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeTaint;
  static deserializeBinaryFromReader(message: NodeTaint, reader: jspb.BinaryReader): NodeTaint;
}

export namespace NodeTaint {
  export type AsObject = {
    key: string,
    value: string,
    effect: NodeTaint.Effect,
  }

  export enum Effect { 
    EFFECT_UNSPECIFIED = 0,
    NO_SCHEDULE = 1,
    PREFER_NO_SCHEDULE = 2,
    NO_EXECUTE = 3,
  }
}

export class MasterAuth extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): MasterAuth;

  getPassword(): string;
  setPassword(value: string): MasterAuth;

  getClientCertificateConfig(): ClientCertificateConfig | undefined;
  setClientCertificateConfig(value?: ClientCertificateConfig): MasterAuth;
  hasClientCertificateConfig(): boolean;
  clearClientCertificateConfig(): MasterAuth;

  getClusterCaCertificate(): string;
  setClusterCaCertificate(value: string): MasterAuth;

  getClientCertificate(): string;
  setClientCertificate(value: string): MasterAuth;

  getClientKey(): string;
  setClientKey(value: string): MasterAuth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasterAuth.AsObject;
  static toObject(includeInstance: boolean, msg: MasterAuth): MasterAuth.AsObject;
  static serializeBinaryToWriter(message: MasterAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasterAuth;
  static deserializeBinaryFromReader(message: MasterAuth, reader: jspb.BinaryReader): MasterAuth;
}

export namespace MasterAuth {
  export type AsObject = {
    username: string,
    password: string,
    clientCertificateConfig?: ClientCertificateConfig.AsObject,
    clusterCaCertificate: string,
    clientCertificate: string,
    clientKey: string,
  }
}

export class ClientCertificateConfig extends jspb.Message {
  getIssueClientCertificate(): boolean;
  setIssueClientCertificate(value: boolean): ClientCertificateConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientCertificateConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ClientCertificateConfig): ClientCertificateConfig.AsObject;
  static serializeBinaryToWriter(message: ClientCertificateConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientCertificateConfig;
  static deserializeBinaryFromReader(message: ClientCertificateConfig, reader: jspb.BinaryReader): ClientCertificateConfig;
}

export namespace ClientCertificateConfig {
  export type AsObject = {
    issueClientCertificate: boolean,
  }
}

export class AddonsConfig extends jspb.Message {
  getHttpLoadBalancing(): HttpLoadBalancing | undefined;
  setHttpLoadBalancing(value?: HttpLoadBalancing): AddonsConfig;
  hasHttpLoadBalancing(): boolean;
  clearHttpLoadBalancing(): AddonsConfig;

  getHorizontalPodAutoscaling(): HorizontalPodAutoscaling | undefined;
  setHorizontalPodAutoscaling(value?: HorizontalPodAutoscaling): AddonsConfig;
  hasHorizontalPodAutoscaling(): boolean;
  clearHorizontalPodAutoscaling(): AddonsConfig;

  getKubernetesDashboard(): KubernetesDashboard | undefined;
  setKubernetesDashboard(value?: KubernetesDashboard): AddonsConfig;
  hasKubernetesDashboard(): boolean;
  clearKubernetesDashboard(): AddonsConfig;

  getNetworkPolicyConfig(): NetworkPolicyConfig | undefined;
  setNetworkPolicyConfig(value?: NetworkPolicyConfig): AddonsConfig;
  hasNetworkPolicyConfig(): boolean;
  clearNetworkPolicyConfig(): AddonsConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddonsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AddonsConfig): AddonsConfig.AsObject;
  static serializeBinaryToWriter(message: AddonsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddonsConfig;
  static deserializeBinaryFromReader(message: AddonsConfig, reader: jspb.BinaryReader): AddonsConfig;
}

export namespace AddonsConfig {
  export type AsObject = {
    httpLoadBalancing?: HttpLoadBalancing.AsObject,
    horizontalPodAutoscaling?: HorizontalPodAutoscaling.AsObject,
    kubernetesDashboard?: KubernetesDashboard.AsObject,
    networkPolicyConfig?: NetworkPolicyConfig.AsObject,
  }
}

export class HttpLoadBalancing extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): HttpLoadBalancing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpLoadBalancing.AsObject;
  static toObject(includeInstance: boolean, msg: HttpLoadBalancing): HttpLoadBalancing.AsObject;
  static serializeBinaryToWriter(message: HttpLoadBalancing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpLoadBalancing;
  static deserializeBinaryFromReader(message: HttpLoadBalancing, reader: jspb.BinaryReader): HttpLoadBalancing;
}

export namespace HttpLoadBalancing {
  export type AsObject = {
    disabled: boolean,
  }
}

export class HorizontalPodAutoscaling extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): HorizontalPodAutoscaling;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HorizontalPodAutoscaling.AsObject;
  static toObject(includeInstance: boolean, msg: HorizontalPodAutoscaling): HorizontalPodAutoscaling.AsObject;
  static serializeBinaryToWriter(message: HorizontalPodAutoscaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HorizontalPodAutoscaling;
  static deserializeBinaryFromReader(message: HorizontalPodAutoscaling, reader: jspb.BinaryReader): HorizontalPodAutoscaling;
}

export namespace HorizontalPodAutoscaling {
  export type AsObject = {
    disabled: boolean,
  }
}

export class KubernetesDashboard extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): KubernetesDashboard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KubernetesDashboard.AsObject;
  static toObject(includeInstance: boolean, msg: KubernetesDashboard): KubernetesDashboard.AsObject;
  static serializeBinaryToWriter(message: KubernetesDashboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KubernetesDashboard;
  static deserializeBinaryFromReader(message: KubernetesDashboard, reader: jspb.BinaryReader): KubernetesDashboard;
}

export namespace KubernetesDashboard {
  export type AsObject = {
    disabled: boolean,
  }
}

export class NetworkPolicyConfig extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): NetworkPolicyConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkPolicyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkPolicyConfig): NetworkPolicyConfig.AsObject;
  static serializeBinaryToWriter(message: NetworkPolicyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkPolicyConfig;
  static deserializeBinaryFromReader(message: NetworkPolicyConfig, reader: jspb.BinaryReader): NetworkPolicyConfig;
}

export namespace NetworkPolicyConfig {
  export type AsObject = {
    disabled: boolean,
  }
}

export class MasterAuthorizedNetworksConfig extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): MasterAuthorizedNetworksConfig;

  getCidrBlocksList(): Array<MasterAuthorizedNetworksConfig.CidrBlock>;
  setCidrBlocksList(value: Array<MasterAuthorizedNetworksConfig.CidrBlock>): MasterAuthorizedNetworksConfig;
  clearCidrBlocksList(): MasterAuthorizedNetworksConfig;
  addCidrBlocks(value?: MasterAuthorizedNetworksConfig.CidrBlock, index?: number): MasterAuthorizedNetworksConfig.CidrBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasterAuthorizedNetworksConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MasterAuthorizedNetworksConfig): MasterAuthorizedNetworksConfig.AsObject;
  static serializeBinaryToWriter(message: MasterAuthorizedNetworksConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasterAuthorizedNetworksConfig;
  static deserializeBinaryFromReader(message: MasterAuthorizedNetworksConfig, reader: jspb.BinaryReader): MasterAuthorizedNetworksConfig;
}

export namespace MasterAuthorizedNetworksConfig {
  export type AsObject = {
    enabled: boolean,
    cidrBlocksList: Array<MasterAuthorizedNetworksConfig.CidrBlock.AsObject>,
  }

  export class CidrBlock extends jspb.Message {
    getDisplayName(): string;
    setDisplayName(value: string): CidrBlock;

    getCidrBlock(): string;
    setCidrBlock(value: string): CidrBlock;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CidrBlock.AsObject;
    static toObject(includeInstance: boolean, msg: CidrBlock): CidrBlock.AsObject;
    static serializeBinaryToWriter(message: CidrBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CidrBlock;
    static deserializeBinaryFromReader(message: CidrBlock, reader: jspb.BinaryReader): CidrBlock;
  }

  export namespace CidrBlock {
    export type AsObject = {
      displayName: string,
      cidrBlock: string,
    }
  }

}

export class NetworkPolicy extends jspb.Message {
  getProvider(): NetworkPolicy.Provider;
  setProvider(value: NetworkPolicy.Provider): NetworkPolicy;

  getEnabled(): boolean;
  setEnabled(value: boolean): NetworkPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkPolicy): NetworkPolicy.AsObject;
  static serializeBinaryToWriter(message: NetworkPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkPolicy;
  static deserializeBinaryFromReader(message: NetworkPolicy, reader: jspb.BinaryReader): NetworkPolicy;
}

export namespace NetworkPolicy {
  export type AsObject = {
    provider: NetworkPolicy.Provider,
    enabled: boolean,
  }

  export enum Provider { 
    PROVIDER_UNSPECIFIED = 0,
    CALICO = 1,
  }
}

export class IPAllocationPolicy extends jspb.Message {
  getUseIpAliases(): boolean;
  setUseIpAliases(value: boolean): IPAllocationPolicy;

  getCreateSubnetwork(): boolean;
  setCreateSubnetwork(value: boolean): IPAllocationPolicy;

  getSubnetworkName(): string;
  setSubnetworkName(value: string): IPAllocationPolicy;

  getClusterIpv4Cidr(): string;
  setClusterIpv4Cidr(value: string): IPAllocationPolicy;

  getNodeIpv4Cidr(): string;
  setNodeIpv4Cidr(value: string): IPAllocationPolicy;

  getServicesIpv4Cidr(): string;
  setServicesIpv4Cidr(value: string): IPAllocationPolicy;

  getClusterSecondaryRangeName(): string;
  setClusterSecondaryRangeName(value: string): IPAllocationPolicy;

  getServicesSecondaryRangeName(): string;
  setServicesSecondaryRangeName(value: string): IPAllocationPolicy;

  getClusterIpv4CidrBlock(): string;
  setClusterIpv4CidrBlock(value: string): IPAllocationPolicy;

  getNodeIpv4CidrBlock(): string;
  setNodeIpv4CidrBlock(value: string): IPAllocationPolicy;

  getServicesIpv4CidrBlock(): string;
  setServicesIpv4CidrBlock(value: string): IPAllocationPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPAllocationPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: IPAllocationPolicy): IPAllocationPolicy.AsObject;
  static serializeBinaryToWriter(message: IPAllocationPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPAllocationPolicy;
  static deserializeBinaryFromReader(message: IPAllocationPolicy, reader: jspb.BinaryReader): IPAllocationPolicy;
}

export namespace IPAllocationPolicy {
  export type AsObject = {
    useIpAliases: boolean,
    createSubnetwork: boolean,
    subnetworkName: string,
    clusterIpv4Cidr: string,
    nodeIpv4Cidr: string,
    servicesIpv4Cidr: string,
    clusterSecondaryRangeName: string,
    servicesSecondaryRangeName: string,
    clusterIpv4CidrBlock: string,
    nodeIpv4CidrBlock: string,
    servicesIpv4CidrBlock: string,
  }
}

export class PodSecurityPolicyConfig extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): PodSecurityPolicyConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodSecurityPolicyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PodSecurityPolicyConfig): PodSecurityPolicyConfig.AsObject;
  static serializeBinaryToWriter(message: PodSecurityPolicyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodSecurityPolicyConfig;
  static deserializeBinaryFromReader(message: PodSecurityPolicyConfig, reader: jspb.BinaryReader): PodSecurityPolicyConfig;
}

export namespace PodSecurityPolicyConfig {
  export type AsObject = {
    enabled: boolean,
  }
}

export class Cluster extends jspb.Message {
  getName(): string;
  setName(value: string): Cluster;

  getDescription(): string;
  setDescription(value: string): Cluster;

  getInitialNodeCount(): number;
  setInitialNodeCount(value: number): Cluster;

  getNodeConfig(): NodeConfig | undefined;
  setNodeConfig(value?: NodeConfig): Cluster;
  hasNodeConfig(): boolean;
  clearNodeConfig(): Cluster;

  getMasterAuth(): MasterAuth | undefined;
  setMasterAuth(value?: MasterAuth): Cluster;
  hasMasterAuth(): boolean;
  clearMasterAuth(): Cluster;

  getLoggingService(): string;
  setLoggingService(value: string): Cluster;

  getMonitoringService(): string;
  setMonitoringService(value: string): Cluster;

  getNetwork(): string;
  setNetwork(value: string): Cluster;

  getClusterIpv4Cidr(): string;
  setClusterIpv4Cidr(value: string): Cluster;

  getAddonsConfig(): AddonsConfig | undefined;
  setAddonsConfig(value?: AddonsConfig): Cluster;
  hasAddonsConfig(): boolean;
  clearAddonsConfig(): Cluster;

  getSubnetwork(): string;
  setSubnetwork(value: string): Cluster;

  getNodePoolsList(): Array<NodePool>;
  setNodePoolsList(value: Array<NodePool>): Cluster;
  clearNodePoolsList(): Cluster;
  addNodePools(value?: NodePool, index?: number): NodePool;

  getLocationsList(): Array<string>;
  setLocationsList(value: Array<string>): Cluster;
  clearLocationsList(): Cluster;
  addLocations(value: string, index?: number): Cluster;

  getEnableKubernetesAlpha(): boolean;
  setEnableKubernetesAlpha(value: boolean): Cluster;

  getNetworkPolicy(): NetworkPolicy | undefined;
  setNetworkPolicy(value?: NetworkPolicy): Cluster;
  hasNetworkPolicy(): boolean;
  clearNetworkPolicy(): Cluster;

  getIpAllocationPolicy(): IPAllocationPolicy | undefined;
  setIpAllocationPolicy(value?: IPAllocationPolicy): Cluster;
  hasIpAllocationPolicy(): boolean;
  clearIpAllocationPolicy(): Cluster;

  getMasterAuthorizedNetworksConfig(): MasterAuthorizedNetworksConfig | undefined;
  setMasterAuthorizedNetworksConfig(value?: MasterAuthorizedNetworksConfig): Cluster;
  hasMasterAuthorizedNetworksConfig(): boolean;
  clearMasterAuthorizedNetworksConfig(): Cluster;

  getMaintenancePolicy(): MaintenancePolicy | undefined;
  setMaintenancePolicy(value?: MaintenancePolicy): Cluster;
  hasMaintenancePolicy(): boolean;
  clearMaintenancePolicy(): Cluster;

  getPodSecurityPolicyConfig(): PodSecurityPolicyConfig | undefined;
  setPodSecurityPolicyConfig(value?: PodSecurityPolicyConfig): Cluster;
  hasPodSecurityPolicyConfig(): boolean;
  clearPodSecurityPolicyConfig(): Cluster;

  getSelfLink(): string;
  setSelfLink(value: string): Cluster;

  getZone(): string;
  setZone(value: string): Cluster;

  getEndpoint(): string;
  setEndpoint(value: string): Cluster;

  getInitialClusterVersion(): string;
  setInitialClusterVersion(value: string): Cluster;

  getCurrentMasterVersion(): string;
  setCurrentMasterVersion(value: string): Cluster;

  getCurrentNodeVersion(): string;
  setCurrentNodeVersion(value: string): Cluster;

  getCreateTime(): string;
  setCreateTime(value: string): Cluster;

  getStatus(): Cluster.Status;
  setStatus(value: Cluster.Status): Cluster;

  getStatusMessage(): string;
  setStatusMessage(value: string): Cluster;

  getNodeIpv4CidrSize(): number;
  setNodeIpv4CidrSize(value: number): Cluster;

  getServicesIpv4Cidr(): string;
  setServicesIpv4Cidr(value: string): Cluster;

  getInstanceGroupUrlsList(): Array<string>;
  setInstanceGroupUrlsList(value: Array<string>): Cluster;
  clearInstanceGroupUrlsList(): Cluster;
  addInstanceGroupUrls(value: string, index?: number): Cluster;

  getCurrentNodeCount(): number;
  setCurrentNodeCount(value: number): Cluster;

  getExpireTime(): string;
  setExpireTime(value: string): Cluster;

  getLocation(): string;
  setLocation(value: string): Cluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cluster.AsObject;
  static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
  static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cluster;
  static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
  export type AsObject = {
    name: string,
    description: string,
    initialNodeCount: number,
    nodeConfig?: NodeConfig.AsObject,
    masterAuth?: MasterAuth.AsObject,
    loggingService: string,
    monitoringService: string,
    network: string,
    clusterIpv4Cidr: string,
    addonsConfig?: AddonsConfig.AsObject,
    subnetwork: string,
    nodePoolsList: Array<NodePool.AsObject>,
    locationsList: Array<string>,
    enableKubernetesAlpha: boolean,
    networkPolicy?: NetworkPolicy.AsObject,
    ipAllocationPolicy?: IPAllocationPolicy.AsObject,
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig.AsObject,
    maintenancePolicy?: MaintenancePolicy.AsObject,
    podSecurityPolicyConfig?: PodSecurityPolicyConfig.AsObject,
    selfLink: string,
    zone: string,
    endpoint: string,
    initialClusterVersion: string,
    currentMasterVersion: string,
    currentNodeVersion: string,
    createTime: string,
    status: Cluster.Status,
    statusMessage: string,
    nodeIpv4CidrSize: number,
    servicesIpv4Cidr: string,
    instanceGroupUrlsList: Array<string>,
    currentNodeCount: number,
    expireTime: string,
    location: string,
  }

  export enum Status { 
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    RUNNING = 2,
    RECONCILING = 3,
    STOPPING = 4,
    ERROR = 5,
  }
}

export class ClusterUpdate extends jspb.Message {
  getDesiredNodeVersion(): string;
  setDesiredNodeVersion(value: string): ClusterUpdate;

  getDesiredMonitoringService(): string;
  setDesiredMonitoringService(value: string): ClusterUpdate;

  getDesiredAddonsConfig(): AddonsConfig | undefined;
  setDesiredAddonsConfig(value?: AddonsConfig): ClusterUpdate;
  hasDesiredAddonsConfig(): boolean;
  clearDesiredAddonsConfig(): ClusterUpdate;

  getDesiredNodePoolId(): string;
  setDesiredNodePoolId(value: string): ClusterUpdate;

  getDesiredImageType(): string;
  setDesiredImageType(value: string): ClusterUpdate;

  getDesiredNodePoolAutoscaling(): NodePoolAutoscaling | undefined;
  setDesiredNodePoolAutoscaling(value?: NodePoolAutoscaling): ClusterUpdate;
  hasDesiredNodePoolAutoscaling(): boolean;
  clearDesiredNodePoolAutoscaling(): ClusterUpdate;

  getDesiredLocationsList(): Array<string>;
  setDesiredLocationsList(value: Array<string>): ClusterUpdate;
  clearDesiredLocationsList(): ClusterUpdate;
  addDesiredLocations(value: string, index?: number): ClusterUpdate;

  getDesiredMasterAuthorizedNetworksConfig(): MasterAuthorizedNetworksConfig | undefined;
  setDesiredMasterAuthorizedNetworksConfig(value?: MasterAuthorizedNetworksConfig): ClusterUpdate;
  hasDesiredMasterAuthorizedNetworksConfig(): boolean;
  clearDesiredMasterAuthorizedNetworksConfig(): ClusterUpdate;

  getDesiredPodSecurityPolicyConfig(): PodSecurityPolicyConfig | undefined;
  setDesiredPodSecurityPolicyConfig(value?: PodSecurityPolicyConfig): ClusterUpdate;
  hasDesiredPodSecurityPolicyConfig(): boolean;
  clearDesiredPodSecurityPolicyConfig(): ClusterUpdate;

  getDesiredMasterVersion(): string;
  setDesiredMasterVersion(value: string): ClusterUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterUpdate): ClusterUpdate.AsObject;
  static serializeBinaryToWriter(message: ClusterUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterUpdate;
  static deserializeBinaryFromReader(message: ClusterUpdate, reader: jspb.BinaryReader): ClusterUpdate;
}

export namespace ClusterUpdate {
  export type AsObject = {
    desiredNodeVersion: string,
    desiredMonitoringService: string,
    desiredAddonsConfig?: AddonsConfig.AsObject,
    desiredNodePoolId: string,
    desiredImageType: string,
    desiredNodePoolAutoscaling?: NodePoolAutoscaling.AsObject,
    desiredLocationsList: Array<string>,
    desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig.AsObject,
    desiredPodSecurityPolicyConfig?: PodSecurityPolicyConfig.AsObject,
    desiredMasterVersion: string,
  }
}

export class Operation extends jspb.Message {
  getName(): string;
  setName(value: string): Operation;

  getZone(): string;
  setZone(value: string): Operation;

  getOperationType(): Operation.Type;
  setOperationType(value: Operation.Type): Operation;

  getStatus(): Operation.Status;
  setStatus(value: Operation.Status): Operation;

  getDetail(): string;
  setDetail(value: string): Operation;

  getStatusMessage(): string;
  setStatusMessage(value: string): Operation;

  getSelfLink(): string;
  setSelfLink(value: string): Operation;

  getTargetLink(): string;
  setTargetLink(value: string): Operation;

  getLocation(): string;
  setLocation(value: string): Operation;

  getStartTime(): string;
  setStartTime(value: string): Operation;

  getEndTime(): string;
  setEndTime(value: string): Operation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    name: string,
    zone: string,
    operationType: Operation.Type,
    status: Operation.Status,
    detail: string,
    statusMessage: string,
    selfLink: string,
    targetLink: string,
    location: string,
    startTime: string,
    endTime: string,
  }

  export enum Status { 
    STATUS_UNSPECIFIED = 0,
    PENDING = 1,
    RUNNING = 2,
    DONE = 3,
    ABORTING = 4,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    CREATE_CLUSTER = 1,
    DELETE_CLUSTER = 2,
    UPGRADE_MASTER = 3,
    UPGRADE_NODES = 4,
    REPAIR_CLUSTER = 5,
    UPDATE_CLUSTER = 6,
    CREATE_NODE_POOL = 7,
    DELETE_NODE_POOL = 8,
    SET_NODE_POOL_MANAGEMENT = 9,
    AUTO_REPAIR_NODES = 10,
    AUTO_UPGRADE_NODES = 11,
    SET_LABELS = 12,
    SET_MASTER_AUTH = 13,
    SET_NODE_POOL_SIZE = 14,
    SET_NETWORK_POLICY = 15,
    SET_MAINTENANCE_POLICY = 16,
  }
}

export class CreateClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CreateClusterRequest;

  getZone(): string;
  setZone(value: string): CreateClusterRequest;

  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): CreateClusterRequest;
  hasCluster(): boolean;
  clearCluster(): CreateClusterRequest;

  getParent(): string;
  setParent(value: string): CreateClusterRequest;

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
    zone: string,
    cluster?: Cluster.AsObject,
    parent: string,
  }
}

export class GetClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetClusterRequest;

  getZone(): string;
  setZone(value: string): GetClusterRequest;

  getClusterId(): string;
  setClusterId(value: string): GetClusterRequest;

  getName(): string;
  setName(value: string): GetClusterRequest;

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
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class UpdateClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UpdateClusterRequest;

  getZone(): string;
  setZone(value: string): UpdateClusterRequest;

  getClusterId(): string;
  setClusterId(value: string): UpdateClusterRequest;

  getUpdate(): ClusterUpdate | undefined;
  setUpdate(value?: ClusterUpdate): UpdateClusterRequest;
  hasUpdate(): boolean;
  clearUpdate(): UpdateClusterRequest;

  getName(): string;
  setName(value: string): UpdateClusterRequest;

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
    zone: string,
    clusterId: string,
    update?: ClusterUpdate.AsObject,
    name: string,
  }
}

export class UpdateNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UpdateNodePoolRequest;

  getZone(): string;
  setZone(value: string): UpdateNodePoolRequest;

  getClusterId(): string;
  setClusterId(value: string): UpdateNodePoolRequest;

  getNodePoolId(): string;
  setNodePoolId(value: string): UpdateNodePoolRequest;

  getNodeVersion(): string;
  setNodeVersion(value: string): UpdateNodePoolRequest;

  getImageType(): string;
  setImageType(value: string): UpdateNodePoolRequest;

  getName(): string;
  setName(value: string): UpdateNodePoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNodePoolRequest): UpdateNodePoolRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNodePoolRequest;
  static deserializeBinaryFromReader(message: UpdateNodePoolRequest, reader: jspb.BinaryReader): UpdateNodePoolRequest;
}

export namespace UpdateNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    nodeVersion: string,
    imageType: string,
    name: string,
  }
}

export class SetNodePoolAutoscalingRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetNodePoolAutoscalingRequest;

  getZone(): string;
  setZone(value: string): SetNodePoolAutoscalingRequest;

  getClusterId(): string;
  setClusterId(value: string): SetNodePoolAutoscalingRequest;

  getNodePoolId(): string;
  setNodePoolId(value: string): SetNodePoolAutoscalingRequest;

  getAutoscaling(): NodePoolAutoscaling | undefined;
  setAutoscaling(value?: NodePoolAutoscaling): SetNodePoolAutoscalingRequest;
  hasAutoscaling(): boolean;
  clearAutoscaling(): SetNodePoolAutoscalingRequest;

  getName(): string;
  setName(value: string): SetNodePoolAutoscalingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNodePoolAutoscalingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNodePoolAutoscalingRequest): SetNodePoolAutoscalingRequest.AsObject;
  static serializeBinaryToWriter(message: SetNodePoolAutoscalingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNodePoolAutoscalingRequest;
  static deserializeBinaryFromReader(message: SetNodePoolAutoscalingRequest, reader: jspb.BinaryReader): SetNodePoolAutoscalingRequest;
}

export namespace SetNodePoolAutoscalingRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    autoscaling?: NodePoolAutoscaling.AsObject,
    name: string,
  }
}

export class SetLoggingServiceRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetLoggingServiceRequest;

  getZone(): string;
  setZone(value: string): SetLoggingServiceRequest;

  getClusterId(): string;
  setClusterId(value: string): SetLoggingServiceRequest;

  getLoggingService(): string;
  setLoggingService(value: string): SetLoggingServiceRequest;

  getName(): string;
  setName(value: string): SetLoggingServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLoggingServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLoggingServiceRequest): SetLoggingServiceRequest.AsObject;
  static serializeBinaryToWriter(message: SetLoggingServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLoggingServiceRequest;
  static deserializeBinaryFromReader(message: SetLoggingServiceRequest, reader: jspb.BinaryReader): SetLoggingServiceRequest;
}

export namespace SetLoggingServiceRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    loggingService: string,
    name: string,
  }
}

export class SetMonitoringServiceRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetMonitoringServiceRequest;

  getZone(): string;
  setZone(value: string): SetMonitoringServiceRequest;

  getClusterId(): string;
  setClusterId(value: string): SetMonitoringServiceRequest;

  getMonitoringService(): string;
  setMonitoringService(value: string): SetMonitoringServiceRequest;

  getName(): string;
  setName(value: string): SetMonitoringServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMonitoringServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMonitoringServiceRequest): SetMonitoringServiceRequest.AsObject;
  static serializeBinaryToWriter(message: SetMonitoringServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMonitoringServiceRequest;
  static deserializeBinaryFromReader(message: SetMonitoringServiceRequest, reader: jspb.BinaryReader): SetMonitoringServiceRequest;
}

export namespace SetMonitoringServiceRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    monitoringService: string,
    name: string,
  }
}

export class SetAddonsConfigRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetAddonsConfigRequest;

  getZone(): string;
  setZone(value: string): SetAddonsConfigRequest;

  getClusterId(): string;
  setClusterId(value: string): SetAddonsConfigRequest;

  getAddonsConfig(): AddonsConfig | undefined;
  setAddonsConfig(value?: AddonsConfig): SetAddonsConfigRequest;
  hasAddonsConfig(): boolean;
  clearAddonsConfig(): SetAddonsConfigRequest;

  getName(): string;
  setName(value: string): SetAddonsConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAddonsConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAddonsConfigRequest): SetAddonsConfigRequest.AsObject;
  static serializeBinaryToWriter(message: SetAddonsConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAddonsConfigRequest;
  static deserializeBinaryFromReader(message: SetAddonsConfigRequest, reader: jspb.BinaryReader): SetAddonsConfigRequest;
}

export namespace SetAddonsConfigRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    addonsConfig?: AddonsConfig.AsObject,
    name: string,
  }
}

export class SetLocationsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetLocationsRequest;

  getZone(): string;
  setZone(value: string): SetLocationsRequest;

  getClusterId(): string;
  setClusterId(value: string): SetLocationsRequest;

  getLocationsList(): Array<string>;
  setLocationsList(value: Array<string>): SetLocationsRequest;
  clearLocationsList(): SetLocationsRequest;
  addLocations(value: string, index?: number): SetLocationsRequest;

  getName(): string;
  setName(value: string): SetLocationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLocationsRequest): SetLocationsRequest.AsObject;
  static serializeBinaryToWriter(message: SetLocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLocationsRequest;
  static deserializeBinaryFromReader(message: SetLocationsRequest, reader: jspb.BinaryReader): SetLocationsRequest;
}

export namespace SetLocationsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    locationsList: Array<string>,
    name: string,
  }
}

export class UpdateMasterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UpdateMasterRequest;

  getZone(): string;
  setZone(value: string): UpdateMasterRequest;

  getClusterId(): string;
  setClusterId(value: string): UpdateMasterRequest;

  getMasterVersion(): string;
  setMasterVersion(value: string): UpdateMasterRequest;

  getName(): string;
  setName(value: string): UpdateMasterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMasterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMasterRequest): UpdateMasterRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMasterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMasterRequest;
  static deserializeBinaryFromReader(message: UpdateMasterRequest, reader: jspb.BinaryReader): UpdateMasterRequest;
}

export namespace UpdateMasterRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    masterVersion: string,
    name: string,
  }
}

export class SetMasterAuthRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetMasterAuthRequest;

  getZone(): string;
  setZone(value: string): SetMasterAuthRequest;

  getClusterId(): string;
  setClusterId(value: string): SetMasterAuthRequest;

  getAction(): SetMasterAuthRequest.Action;
  setAction(value: SetMasterAuthRequest.Action): SetMasterAuthRequest;

  getUpdate(): MasterAuth | undefined;
  setUpdate(value?: MasterAuth): SetMasterAuthRequest;
  hasUpdate(): boolean;
  clearUpdate(): SetMasterAuthRequest;

  getName(): string;
  setName(value: string): SetMasterAuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMasterAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMasterAuthRequest): SetMasterAuthRequest.AsObject;
  static serializeBinaryToWriter(message: SetMasterAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMasterAuthRequest;
  static deserializeBinaryFromReader(message: SetMasterAuthRequest, reader: jspb.BinaryReader): SetMasterAuthRequest;
}

export namespace SetMasterAuthRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    action: SetMasterAuthRequest.Action,
    update?: MasterAuth.AsObject,
    name: string,
  }

  export enum Action { 
    UNKNOWN = 0,
    SET_PASSWORD = 1,
    GENERATE_PASSWORD = 2,
    SET_USERNAME = 3,
  }
}

export class DeleteClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeleteClusterRequest;

  getZone(): string;
  setZone(value: string): DeleteClusterRequest;

  getClusterId(): string;
  setClusterId(value: string): DeleteClusterRequest;

  getName(): string;
  setName(value: string): DeleteClusterRequest;

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
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class ListClustersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListClustersRequest;

  getZone(): string;
  setZone(value: string): ListClustersRequest;

  getParent(): string;
  setParent(value: string): ListClustersRequest;

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
    zone: string,
    parent: string,
  }
}

export class ListClustersResponse extends jspb.Message {
  getClustersList(): Array<Cluster>;
  setClustersList(value: Array<Cluster>): ListClustersResponse;
  clearClustersList(): ListClustersResponse;
  addClusters(value?: Cluster, index?: number): Cluster;

  getMissingZonesList(): Array<string>;
  setMissingZonesList(value: Array<string>): ListClustersResponse;
  clearMissingZonesList(): ListClustersResponse;
  addMissingZones(value: string, index?: number): ListClustersResponse;

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
    missingZonesList: Array<string>,
  }
}

export class GetOperationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetOperationRequest;

  getZone(): string;
  setZone(value: string): GetOperationRequest;

  getOperationId(): string;
  setOperationId(value: string): GetOperationRequest;

  getName(): string;
  setName(value: string): GetOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperationRequest): GetOperationRequest.AsObject;
  static serializeBinaryToWriter(message: GetOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperationRequest;
  static deserializeBinaryFromReader(message: GetOperationRequest, reader: jspb.BinaryReader): GetOperationRequest;
}

export namespace GetOperationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    operationId: string,
    name: string,
  }
}

export class ListOperationsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListOperationsRequest;

  getZone(): string;
  setZone(value: string): ListOperationsRequest;

  getParent(): string;
  setParent(value: string): ListOperationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOperationsRequest): ListOperationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOperationsRequest;
  static deserializeBinaryFromReader(message: ListOperationsRequest, reader: jspb.BinaryReader): ListOperationsRequest;
}

export namespace ListOperationsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    parent: string,
  }
}

export class CancelOperationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CancelOperationRequest;

  getZone(): string;
  setZone(value: string): CancelOperationRequest;

  getOperationId(): string;
  setOperationId(value: string): CancelOperationRequest;

  getName(): string;
  setName(value: string): CancelOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOperationRequest): CancelOperationRequest.AsObject;
  static serializeBinaryToWriter(message: CancelOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOperationRequest;
  static deserializeBinaryFromReader(message: CancelOperationRequest, reader: jspb.BinaryReader): CancelOperationRequest;
}

export namespace CancelOperationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    operationId: string,
    name: string,
  }
}

export class ListOperationsResponse extends jspb.Message {
  getOperationsList(): Array<Operation>;
  setOperationsList(value: Array<Operation>): ListOperationsResponse;
  clearOperationsList(): ListOperationsResponse;
  addOperations(value?: Operation, index?: number): Operation;

  getMissingZonesList(): Array<string>;
  setMissingZonesList(value: Array<string>): ListOperationsResponse;
  clearMissingZonesList(): ListOperationsResponse;
  addMissingZones(value: string, index?: number): ListOperationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOperationsResponse): ListOperationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOperationsResponse;
  static deserializeBinaryFromReader(message: ListOperationsResponse, reader: jspb.BinaryReader): ListOperationsResponse;
}

export namespace ListOperationsResponse {
  export type AsObject = {
    operationsList: Array<Operation.AsObject>,
    missingZonesList: Array<string>,
  }
}

export class GetServerConfigRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetServerConfigRequest;

  getZone(): string;
  setZone(value: string): GetServerConfigRequest;

  getName(): string;
  setName(value: string): GetServerConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerConfigRequest): GetServerConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetServerConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerConfigRequest;
  static deserializeBinaryFromReader(message: GetServerConfigRequest, reader: jspb.BinaryReader): GetServerConfigRequest;
}

export namespace GetServerConfigRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    name: string,
  }
}

export class ServerConfig extends jspb.Message {
  getDefaultClusterVersion(): string;
  setDefaultClusterVersion(value: string): ServerConfig;

  getValidNodeVersionsList(): Array<string>;
  setValidNodeVersionsList(value: Array<string>): ServerConfig;
  clearValidNodeVersionsList(): ServerConfig;
  addValidNodeVersions(value: string, index?: number): ServerConfig;

  getDefaultImageType(): string;
  setDefaultImageType(value: string): ServerConfig;

  getValidImageTypesList(): Array<string>;
  setValidImageTypesList(value: Array<string>): ServerConfig;
  clearValidImageTypesList(): ServerConfig;
  addValidImageTypes(value: string, index?: number): ServerConfig;

  getValidMasterVersionsList(): Array<string>;
  setValidMasterVersionsList(value: Array<string>): ServerConfig;
  clearValidMasterVersionsList(): ServerConfig;
  addValidMasterVersions(value: string, index?: number): ServerConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ServerConfig): ServerConfig.AsObject;
  static serializeBinaryToWriter(message: ServerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerConfig;
  static deserializeBinaryFromReader(message: ServerConfig, reader: jspb.BinaryReader): ServerConfig;
}

export namespace ServerConfig {
  export type AsObject = {
    defaultClusterVersion: string,
    validNodeVersionsList: Array<string>,
    defaultImageType: string,
    validImageTypesList: Array<string>,
    validMasterVersionsList: Array<string>,
  }
}

export class CreateNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CreateNodePoolRequest;

  getZone(): string;
  setZone(value: string): CreateNodePoolRequest;

  getClusterId(): string;
  setClusterId(value: string): CreateNodePoolRequest;

  getNodePool(): NodePool | undefined;
  setNodePool(value?: NodePool): CreateNodePoolRequest;
  hasNodePool(): boolean;
  clearNodePool(): CreateNodePoolRequest;

  getParent(): string;
  setParent(value: string): CreateNodePoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNodePoolRequest): CreateNodePoolRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNodePoolRequest;
  static deserializeBinaryFromReader(message: CreateNodePoolRequest, reader: jspb.BinaryReader): CreateNodePoolRequest;
}

export namespace CreateNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePool?: NodePool.AsObject,
    parent: string,
  }
}

export class DeleteNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeleteNodePoolRequest;

  getZone(): string;
  setZone(value: string): DeleteNodePoolRequest;

  getClusterId(): string;
  setClusterId(value: string): DeleteNodePoolRequest;

  getNodePoolId(): string;
  setNodePoolId(value: string): DeleteNodePoolRequest;

  getName(): string;
  setName(value: string): DeleteNodePoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNodePoolRequest): DeleteNodePoolRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNodePoolRequest;
  static deserializeBinaryFromReader(message: DeleteNodePoolRequest, reader: jspb.BinaryReader): DeleteNodePoolRequest;
}

export namespace DeleteNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    name: string,
  }
}

export class ListNodePoolsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListNodePoolsRequest;

  getZone(): string;
  setZone(value: string): ListNodePoolsRequest;

  getClusterId(): string;
  setClusterId(value: string): ListNodePoolsRequest;

  getParent(): string;
  setParent(value: string): ListNodePoolsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNodePoolsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNodePoolsRequest): ListNodePoolsRequest.AsObject;
  static serializeBinaryToWriter(message: ListNodePoolsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNodePoolsRequest;
  static deserializeBinaryFromReader(message: ListNodePoolsRequest, reader: jspb.BinaryReader): ListNodePoolsRequest;
}

export namespace ListNodePoolsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    parent: string,
  }
}

export class GetNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetNodePoolRequest;

  getZone(): string;
  setZone(value: string): GetNodePoolRequest;

  getClusterId(): string;
  setClusterId(value: string): GetNodePoolRequest;

  getNodePoolId(): string;
  setNodePoolId(value: string): GetNodePoolRequest;

  getName(): string;
  setName(value: string): GetNodePoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodePoolRequest): GetNodePoolRequest.AsObject;
  static serializeBinaryToWriter(message: GetNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodePoolRequest;
  static deserializeBinaryFromReader(message: GetNodePoolRequest, reader: jspb.BinaryReader): GetNodePoolRequest;
}

export namespace GetNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    name: string,
  }
}

export class NodePool extends jspb.Message {
  getName(): string;
  setName(value: string): NodePool;

  getConfig(): NodeConfig | undefined;
  setConfig(value?: NodeConfig): NodePool;
  hasConfig(): boolean;
  clearConfig(): NodePool;

  getInitialNodeCount(): number;
  setInitialNodeCount(value: number): NodePool;

  getAutoscaling(): NodePoolAutoscaling | undefined;
  setAutoscaling(value?: NodePoolAutoscaling): NodePool;
  hasAutoscaling(): boolean;
  clearAutoscaling(): NodePool;

  getManagement(): NodeManagement | undefined;
  setManagement(value?: NodeManagement): NodePool;
  hasManagement(): boolean;
  clearManagement(): NodePool;

  getSelfLink(): string;
  setSelfLink(value: string): NodePool;

  getVersion(): string;
  setVersion(value: string): NodePool;

  getInstanceGroupUrlsList(): Array<string>;
  setInstanceGroupUrlsList(value: Array<string>): NodePool;
  clearInstanceGroupUrlsList(): NodePool;
  addInstanceGroupUrls(value: string, index?: number): NodePool;

  getStatus(): NodePool.Status;
  setStatus(value: NodePool.Status): NodePool;

  getStatusMessage(): string;
  setStatusMessage(value: string): NodePool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodePool.AsObject;
  static toObject(includeInstance: boolean, msg: NodePool): NodePool.AsObject;
  static serializeBinaryToWriter(message: NodePool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodePool;
  static deserializeBinaryFromReader(message: NodePool, reader: jspb.BinaryReader): NodePool;
}

export namespace NodePool {
  export type AsObject = {
    name: string,
    config?: NodeConfig.AsObject,
    initialNodeCount: number,
    autoscaling?: NodePoolAutoscaling.AsObject,
    management?: NodeManagement.AsObject,
    selfLink: string,
    version: string,
    instanceGroupUrlsList: Array<string>,
    status: NodePool.Status,
    statusMessage: string,
  }

  export enum Status { 
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    RUNNING = 2,
    RUNNING_WITH_ERROR = 3,
    RECONCILING = 4,
    STOPPING = 5,
    ERROR = 6,
  }
}

export class NodeManagement extends jspb.Message {
  getAutoUpgrade(): boolean;
  setAutoUpgrade(value: boolean): NodeManagement;

  getAutoRepair(): boolean;
  setAutoRepair(value: boolean): NodeManagement;

  getUpgradeOptions(): AutoUpgradeOptions | undefined;
  setUpgradeOptions(value?: AutoUpgradeOptions): NodeManagement;
  hasUpgradeOptions(): boolean;
  clearUpgradeOptions(): NodeManagement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeManagement.AsObject;
  static toObject(includeInstance: boolean, msg: NodeManagement): NodeManagement.AsObject;
  static serializeBinaryToWriter(message: NodeManagement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeManagement;
  static deserializeBinaryFromReader(message: NodeManagement, reader: jspb.BinaryReader): NodeManagement;
}

export namespace NodeManagement {
  export type AsObject = {
    autoUpgrade: boolean,
    autoRepair: boolean,
    upgradeOptions?: AutoUpgradeOptions.AsObject,
  }
}

export class AutoUpgradeOptions extends jspb.Message {
  getAutoUpgradeStartTime(): string;
  setAutoUpgradeStartTime(value: string): AutoUpgradeOptions;

  getDescription(): string;
  setDescription(value: string): AutoUpgradeOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoUpgradeOptions.AsObject;
  static toObject(includeInstance: boolean, msg: AutoUpgradeOptions): AutoUpgradeOptions.AsObject;
  static serializeBinaryToWriter(message: AutoUpgradeOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoUpgradeOptions;
  static deserializeBinaryFromReader(message: AutoUpgradeOptions, reader: jspb.BinaryReader): AutoUpgradeOptions;
}

export namespace AutoUpgradeOptions {
  export type AsObject = {
    autoUpgradeStartTime: string,
    description: string,
  }
}

export class MaintenancePolicy extends jspb.Message {
  getWindow(): MaintenanceWindow | undefined;
  setWindow(value?: MaintenanceWindow): MaintenancePolicy;
  hasWindow(): boolean;
  clearWindow(): MaintenancePolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaintenancePolicy.AsObject;
  static toObject(includeInstance: boolean, msg: MaintenancePolicy): MaintenancePolicy.AsObject;
  static serializeBinaryToWriter(message: MaintenancePolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaintenancePolicy;
  static deserializeBinaryFromReader(message: MaintenancePolicy, reader: jspb.BinaryReader): MaintenancePolicy;
}

export namespace MaintenancePolicy {
  export type AsObject = {
    window?: MaintenanceWindow.AsObject,
  }
}

export class MaintenanceWindow extends jspb.Message {
  getDailyMaintenanceWindow(): DailyMaintenanceWindow | undefined;
  setDailyMaintenanceWindow(value?: DailyMaintenanceWindow): MaintenanceWindow;
  hasDailyMaintenanceWindow(): boolean;
  clearDailyMaintenanceWindow(): MaintenanceWindow;

  getPolicyCase(): MaintenanceWindow.PolicyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaintenanceWindow.AsObject;
  static toObject(includeInstance: boolean, msg: MaintenanceWindow): MaintenanceWindow.AsObject;
  static serializeBinaryToWriter(message: MaintenanceWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaintenanceWindow;
  static deserializeBinaryFromReader(message: MaintenanceWindow, reader: jspb.BinaryReader): MaintenanceWindow;
}

export namespace MaintenanceWindow {
  export type AsObject = {
    dailyMaintenanceWindow?: DailyMaintenanceWindow.AsObject,
  }

  export enum PolicyCase { 
    POLICY_NOT_SET = 0,
    DAILY_MAINTENANCE_WINDOW = 2,
  }
}

export class DailyMaintenanceWindow extends jspb.Message {
  getStartTime(): string;
  setStartTime(value: string): DailyMaintenanceWindow;

  getDuration(): string;
  setDuration(value: string): DailyMaintenanceWindow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DailyMaintenanceWindow.AsObject;
  static toObject(includeInstance: boolean, msg: DailyMaintenanceWindow): DailyMaintenanceWindow.AsObject;
  static serializeBinaryToWriter(message: DailyMaintenanceWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DailyMaintenanceWindow;
  static deserializeBinaryFromReader(message: DailyMaintenanceWindow, reader: jspb.BinaryReader): DailyMaintenanceWindow;
}

export namespace DailyMaintenanceWindow {
  export type AsObject = {
    startTime: string,
    duration: string,
  }
}

export class SetNodePoolManagementRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetNodePoolManagementRequest;

  getZone(): string;
  setZone(value: string): SetNodePoolManagementRequest;

  getClusterId(): string;
  setClusterId(value: string): SetNodePoolManagementRequest;

  getNodePoolId(): string;
  setNodePoolId(value: string): SetNodePoolManagementRequest;

  getManagement(): NodeManagement | undefined;
  setManagement(value?: NodeManagement): SetNodePoolManagementRequest;
  hasManagement(): boolean;
  clearManagement(): SetNodePoolManagementRequest;

  getName(): string;
  setName(value: string): SetNodePoolManagementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNodePoolManagementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNodePoolManagementRequest): SetNodePoolManagementRequest.AsObject;
  static serializeBinaryToWriter(message: SetNodePoolManagementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNodePoolManagementRequest;
  static deserializeBinaryFromReader(message: SetNodePoolManagementRequest, reader: jspb.BinaryReader): SetNodePoolManagementRequest;
}

export namespace SetNodePoolManagementRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    management?: NodeManagement.AsObject,
    name: string,
  }
}

export class SetNodePoolSizeRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetNodePoolSizeRequest;

  getZone(): string;
  setZone(value: string): SetNodePoolSizeRequest;

  getClusterId(): string;
  setClusterId(value: string): SetNodePoolSizeRequest;

  getNodePoolId(): string;
  setNodePoolId(value: string): SetNodePoolSizeRequest;

  getNodeCount(): number;
  setNodeCount(value: number): SetNodePoolSizeRequest;

  getName(): string;
  setName(value: string): SetNodePoolSizeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNodePoolSizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNodePoolSizeRequest): SetNodePoolSizeRequest.AsObject;
  static serializeBinaryToWriter(message: SetNodePoolSizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNodePoolSizeRequest;
  static deserializeBinaryFromReader(message: SetNodePoolSizeRequest, reader: jspb.BinaryReader): SetNodePoolSizeRequest;
}

export namespace SetNodePoolSizeRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    nodeCount: number,
    name: string,
  }
}

export class RollbackNodePoolUpgradeRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): RollbackNodePoolUpgradeRequest;

  getZone(): string;
  setZone(value: string): RollbackNodePoolUpgradeRequest;

  getClusterId(): string;
  setClusterId(value: string): RollbackNodePoolUpgradeRequest;

  getNodePoolId(): string;
  setNodePoolId(value: string): RollbackNodePoolUpgradeRequest;

  getName(): string;
  setName(value: string): RollbackNodePoolUpgradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollbackNodePoolUpgradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RollbackNodePoolUpgradeRequest): RollbackNodePoolUpgradeRequest.AsObject;
  static serializeBinaryToWriter(message: RollbackNodePoolUpgradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollbackNodePoolUpgradeRequest;
  static deserializeBinaryFromReader(message: RollbackNodePoolUpgradeRequest, reader: jspb.BinaryReader): RollbackNodePoolUpgradeRequest;
}

export namespace RollbackNodePoolUpgradeRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    name: string,
  }
}

export class ListNodePoolsResponse extends jspb.Message {
  getNodePoolsList(): Array<NodePool>;
  setNodePoolsList(value: Array<NodePool>): ListNodePoolsResponse;
  clearNodePoolsList(): ListNodePoolsResponse;
  addNodePools(value?: NodePool, index?: number): NodePool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNodePoolsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNodePoolsResponse): ListNodePoolsResponse.AsObject;
  static serializeBinaryToWriter(message: ListNodePoolsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNodePoolsResponse;
  static deserializeBinaryFromReader(message: ListNodePoolsResponse, reader: jspb.BinaryReader): ListNodePoolsResponse;
}

export namespace ListNodePoolsResponse {
  export type AsObject = {
    nodePoolsList: Array<NodePool.AsObject>,
  }
}

export class NodePoolAutoscaling extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): NodePoolAutoscaling;

  getMinNodeCount(): number;
  setMinNodeCount(value: number): NodePoolAutoscaling;

  getMaxNodeCount(): number;
  setMaxNodeCount(value: number): NodePoolAutoscaling;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodePoolAutoscaling.AsObject;
  static toObject(includeInstance: boolean, msg: NodePoolAutoscaling): NodePoolAutoscaling.AsObject;
  static serializeBinaryToWriter(message: NodePoolAutoscaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodePoolAutoscaling;
  static deserializeBinaryFromReader(message: NodePoolAutoscaling, reader: jspb.BinaryReader): NodePoolAutoscaling;
}

export namespace NodePoolAutoscaling {
  export type AsObject = {
    enabled: boolean,
    minNodeCount: number,
    maxNodeCount: number,
  }
}

export class SetLabelsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetLabelsRequest;

  getZone(): string;
  setZone(value: string): SetLabelsRequest;

  getClusterId(): string;
  setClusterId(value: string): SetLabelsRequest;

  getResourceLabelsMap(): jspb.Map<string, string>;
  clearResourceLabelsMap(): SetLabelsRequest;

  getLabelFingerprint(): string;
  setLabelFingerprint(value: string): SetLabelsRequest;

  getName(): string;
  setName(value: string): SetLabelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLabelsRequest): SetLabelsRequest.AsObject;
  static serializeBinaryToWriter(message: SetLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLabelsRequest;
  static deserializeBinaryFromReader(message: SetLabelsRequest, reader: jspb.BinaryReader): SetLabelsRequest;
}

export namespace SetLabelsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    resourceLabelsMap: Array<[string, string]>,
    labelFingerprint: string,
    name: string,
  }
}

export class SetLegacyAbacRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetLegacyAbacRequest;

  getZone(): string;
  setZone(value: string): SetLegacyAbacRequest;

  getClusterId(): string;
  setClusterId(value: string): SetLegacyAbacRequest;

  getEnabled(): boolean;
  setEnabled(value: boolean): SetLegacyAbacRequest;

  getName(): string;
  setName(value: string): SetLegacyAbacRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLegacyAbacRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLegacyAbacRequest): SetLegacyAbacRequest.AsObject;
  static serializeBinaryToWriter(message: SetLegacyAbacRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLegacyAbacRequest;
  static deserializeBinaryFromReader(message: SetLegacyAbacRequest, reader: jspb.BinaryReader): SetLegacyAbacRequest;
}

export namespace SetLegacyAbacRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    enabled: boolean,
    name: string,
  }
}

export class StartIPRotationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): StartIPRotationRequest;

  getZone(): string;
  setZone(value: string): StartIPRotationRequest;

  getClusterId(): string;
  setClusterId(value: string): StartIPRotationRequest;

  getName(): string;
  setName(value: string): StartIPRotationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartIPRotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartIPRotationRequest): StartIPRotationRequest.AsObject;
  static serializeBinaryToWriter(message: StartIPRotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartIPRotationRequest;
  static deserializeBinaryFromReader(message: StartIPRotationRequest, reader: jspb.BinaryReader): StartIPRotationRequest;
}

export namespace StartIPRotationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class CompleteIPRotationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CompleteIPRotationRequest;

  getZone(): string;
  setZone(value: string): CompleteIPRotationRequest;

  getClusterId(): string;
  setClusterId(value: string): CompleteIPRotationRequest;

  getName(): string;
  setName(value: string): CompleteIPRotationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteIPRotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteIPRotationRequest): CompleteIPRotationRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteIPRotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteIPRotationRequest;
  static deserializeBinaryFromReader(message: CompleteIPRotationRequest, reader: jspb.BinaryReader): CompleteIPRotationRequest;
}

export namespace CompleteIPRotationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class AcceleratorConfig extends jspb.Message {
  getAcceleratorCount(): number;
  setAcceleratorCount(value: number): AcceleratorConfig;

  getAcceleratorType(): string;
  setAcceleratorType(value: string): AcceleratorConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceleratorConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AcceleratorConfig): AcceleratorConfig.AsObject;
  static serializeBinaryToWriter(message: AcceleratorConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceleratorConfig;
  static deserializeBinaryFromReader(message: AcceleratorConfig, reader: jspb.BinaryReader): AcceleratorConfig;
}

export namespace AcceleratorConfig {
  export type AsObject = {
    acceleratorCount: number,
    acceleratorType: string,
  }
}

export class SetNetworkPolicyRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetNetworkPolicyRequest;

  getZone(): string;
  setZone(value: string): SetNetworkPolicyRequest;

  getClusterId(): string;
  setClusterId(value: string): SetNetworkPolicyRequest;

  getNetworkPolicy(): NetworkPolicy | undefined;
  setNetworkPolicy(value?: NetworkPolicy): SetNetworkPolicyRequest;
  hasNetworkPolicy(): boolean;
  clearNetworkPolicy(): SetNetworkPolicyRequest;

  getName(): string;
  setName(value: string): SetNetworkPolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNetworkPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNetworkPolicyRequest): SetNetworkPolicyRequest.AsObject;
  static serializeBinaryToWriter(message: SetNetworkPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNetworkPolicyRequest;
  static deserializeBinaryFromReader(message: SetNetworkPolicyRequest, reader: jspb.BinaryReader): SetNetworkPolicyRequest;
}

export namespace SetNetworkPolicyRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    networkPolicy?: NetworkPolicy.AsObject,
    name: string,
  }
}

export class SetMaintenancePolicyRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): SetMaintenancePolicyRequest;

  getZone(): string;
  setZone(value: string): SetMaintenancePolicyRequest;

  getClusterId(): string;
  setClusterId(value: string): SetMaintenancePolicyRequest;

  getMaintenancePolicy(): MaintenancePolicy | undefined;
  setMaintenancePolicy(value?: MaintenancePolicy): SetMaintenancePolicyRequest;
  hasMaintenancePolicy(): boolean;
  clearMaintenancePolicy(): SetMaintenancePolicyRequest;

  getName(): string;
  setName(value: string): SetMaintenancePolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMaintenancePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMaintenancePolicyRequest): SetMaintenancePolicyRequest.AsObject;
  static serializeBinaryToWriter(message: SetMaintenancePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMaintenancePolicyRequest;
  static deserializeBinaryFromReader(message: SetMaintenancePolicyRequest, reader: jspb.BinaryReader): SetMaintenancePolicyRequest;
}

export namespace SetMaintenancePolicyRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    maintenancePolicy?: MaintenancePolicy.AsObject,
    name: string,
  }
}

