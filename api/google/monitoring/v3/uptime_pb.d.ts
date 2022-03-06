import * as jspb from 'google-protobuf'

import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class InternalChecker extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): InternalChecker;

  getNetwork(): string;
  setNetwork(value: string): InternalChecker;

  getGcpZone(): string;
  setGcpZone(value: string): InternalChecker;

  getCheckerId(): string;
  setCheckerId(value: string): InternalChecker;

  getDisplayName(): string;
  setDisplayName(value: string): InternalChecker;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalChecker.AsObject;
  static toObject(includeInstance: boolean, msg: InternalChecker): InternalChecker.AsObject;
  static serializeBinaryToWriter(message: InternalChecker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalChecker;
  static deserializeBinaryFromReader(message: InternalChecker, reader: jspb.BinaryReader): InternalChecker;
}

export namespace InternalChecker {
  export type AsObject = {
    projectId: string,
    network: string,
    gcpZone: string,
    checkerId: string,
    displayName: string,
  }
}

export class UptimeCheckConfig extends jspb.Message {
  getName(): string;
  setName(value: string): UptimeCheckConfig;

  getDisplayName(): string;
  setDisplayName(value: string): UptimeCheckConfig;

  getMonitoredResource(): google_api_monitored_resource_pb.MonitoredResource | undefined;
  setMonitoredResource(value?: google_api_monitored_resource_pb.MonitoredResource): UptimeCheckConfig;
  hasMonitoredResource(): boolean;
  clearMonitoredResource(): UptimeCheckConfig;

  getResourceGroup(): UptimeCheckConfig.ResourceGroup | undefined;
  setResourceGroup(value?: UptimeCheckConfig.ResourceGroup): UptimeCheckConfig;
  hasResourceGroup(): boolean;
  clearResourceGroup(): UptimeCheckConfig;

  getHttpCheck(): UptimeCheckConfig.HttpCheck | undefined;
  setHttpCheck(value?: UptimeCheckConfig.HttpCheck): UptimeCheckConfig;
  hasHttpCheck(): boolean;
  clearHttpCheck(): UptimeCheckConfig;

  getTcpCheck(): UptimeCheckConfig.TcpCheck | undefined;
  setTcpCheck(value?: UptimeCheckConfig.TcpCheck): UptimeCheckConfig;
  hasTcpCheck(): boolean;
  clearTcpCheck(): UptimeCheckConfig;

  getPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setPeriod(value?: google_protobuf_duration_pb.Duration): UptimeCheckConfig;
  hasPeriod(): boolean;
  clearPeriod(): UptimeCheckConfig;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): UptimeCheckConfig;
  hasTimeout(): boolean;
  clearTimeout(): UptimeCheckConfig;

  getContentMatchersList(): Array<UptimeCheckConfig.ContentMatcher>;
  setContentMatchersList(value: Array<UptimeCheckConfig.ContentMatcher>): UptimeCheckConfig;
  clearContentMatchersList(): UptimeCheckConfig;
  addContentMatchers(value?: UptimeCheckConfig.ContentMatcher, index?: number): UptimeCheckConfig.ContentMatcher;

  getSelectedRegionsList(): Array<UptimeCheckRegion>;
  setSelectedRegionsList(value: Array<UptimeCheckRegion>): UptimeCheckConfig;
  clearSelectedRegionsList(): UptimeCheckConfig;
  addSelectedRegions(value: UptimeCheckRegion, index?: number): UptimeCheckConfig;

  getIsInternal(): boolean;
  setIsInternal(value: boolean): UptimeCheckConfig;

  getInternalCheckersList(): Array<InternalChecker>;
  setInternalCheckersList(value: Array<InternalChecker>): UptimeCheckConfig;
  clearInternalCheckersList(): UptimeCheckConfig;
  addInternalCheckers(value?: InternalChecker, index?: number): InternalChecker;

  getResourceCase(): UptimeCheckConfig.ResourceCase;

  getCheckRequestTypeCase(): UptimeCheckConfig.CheckRequestTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UptimeCheckConfig.AsObject;
  static toObject(includeInstance: boolean, msg: UptimeCheckConfig): UptimeCheckConfig.AsObject;
  static serializeBinaryToWriter(message: UptimeCheckConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UptimeCheckConfig;
  static deserializeBinaryFromReader(message: UptimeCheckConfig, reader: jspb.BinaryReader): UptimeCheckConfig;
}

export namespace UptimeCheckConfig {
  export type AsObject = {
    name: string,
    displayName: string,
    monitoredResource?: google_api_monitored_resource_pb.MonitoredResource.AsObject,
    resourceGroup?: UptimeCheckConfig.ResourceGroup.AsObject,
    httpCheck?: UptimeCheckConfig.HttpCheck.AsObject,
    tcpCheck?: UptimeCheckConfig.TcpCheck.AsObject,
    period?: google_protobuf_duration_pb.Duration.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    contentMatchersList: Array<UptimeCheckConfig.ContentMatcher.AsObject>,
    selectedRegionsList: Array<UptimeCheckRegion>,
    isInternal: boolean,
    internalCheckersList: Array<InternalChecker.AsObject>,
  }

  export class ResourceGroup extends jspb.Message {
    getGroupId(): string;
    setGroupId(value: string): ResourceGroup;

    getResourceType(): GroupResourceType;
    setResourceType(value: GroupResourceType): ResourceGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceGroup.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceGroup): ResourceGroup.AsObject;
    static serializeBinaryToWriter(message: ResourceGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceGroup;
    static deserializeBinaryFromReader(message: ResourceGroup, reader: jspb.BinaryReader): ResourceGroup;
  }

  export namespace ResourceGroup {
    export type AsObject = {
      groupId: string,
      resourceType: GroupResourceType,
    }
  }


  export class HttpCheck extends jspb.Message {
    getUseSsl(): boolean;
    setUseSsl(value: boolean): HttpCheck;

    getPath(): string;
    setPath(value: string): HttpCheck;

    getPort(): number;
    setPort(value: number): HttpCheck;

    getAuthInfo(): UptimeCheckConfig.HttpCheck.BasicAuthentication | undefined;
    setAuthInfo(value?: UptimeCheckConfig.HttpCheck.BasicAuthentication): HttpCheck;
    hasAuthInfo(): boolean;
    clearAuthInfo(): HttpCheck;

    getMaskHeaders(): boolean;
    setMaskHeaders(value: boolean): HttpCheck;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): HttpCheck;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpCheck.AsObject;
    static toObject(includeInstance: boolean, msg: HttpCheck): HttpCheck.AsObject;
    static serializeBinaryToWriter(message: HttpCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpCheck;
    static deserializeBinaryFromReader(message: HttpCheck, reader: jspb.BinaryReader): HttpCheck;
  }

  export namespace HttpCheck {
    export type AsObject = {
      useSsl: boolean,
      path: string,
      port: number,
      authInfo?: UptimeCheckConfig.HttpCheck.BasicAuthentication.AsObject,
      maskHeaders: boolean,
      headersMap: Array<[string, string]>,
    }

    export class BasicAuthentication extends jspb.Message {
      getUsername(): string;
      setUsername(value: string): BasicAuthentication;

      getPassword(): string;
      setPassword(value: string): BasicAuthentication;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BasicAuthentication.AsObject;
      static toObject(includeInstance: boolean, msg: BasicAuthentication): BasicAuthentication.AsObject;
      static serializeBinaryToWriter(message: BasicAuthentication, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BasicAuthentication;
      static deserializeBinaryFromReader(message: BasicAuthentication, reader: jspb.BinaryReader): BasicAuthentication;
    }

    export namespace BasicAuthentication {
      export type AsObject = {
        username: string,
        password: string,
      }
    }

  }


  export class TcpCheck extends jspb.Message {
    getPort(): number;
    setPort(value: number): TcpCheck;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpCheck.AsObject;
    static toObject(includeInstance: boolean, msg: TcpCheck): TcpCheck.AsObject;
    static serializeBinaryToWriter(message: TcpCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpCheck;
    static deserializeBinaryFromReader(message: TcpCheck, reader: jspb.BinaryReader): TcpCheck;
  }

  export namespace TcpCheck {
    export type AsObject = {
      port: number,
    }
  }


  export class ContentMatcher extends jspb.Message {
    getContent(): string;
    setContent(value: string): ContentMatcher;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: ContentMatcher): ContentMatcher.AsObject;
    static serializeBinaryToWriter(message: ContentMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentMatcher;
    static deserializeBinaryFromReader(message: ContentMatcher, reader: jspb.BinaryReader): ContentMatcher;
  }

  export namespace ContentMatcher {
    export type AsObject = {
      content: string,
    }
  }


  export enum ResourceCase { 
    RESOURCE_NOT_SET = 0,
    MONITORED_RESOURCE = 3,
    RESOURCE_GROUP = 4,
  }

  export enum CheckRequestTypeCase { 
    CHECK_REQUEST_TYPE_NOT_SET = 0,
    HTTP_CHECK = 5,
    TCP_CHECK = 6,
  }
}

export class UptimeCheckIp extends jspb.Message {
  getRegion(): UptimeCheckRegion;
  setRegion(value: UptimeCheckRegion): UptimeCheckIp;

  getLocation(): string;
  setLocation(value: string): UptimeCheckIp;

  getIpAddress(): string;
  setIpAddress(value: string): UptimeCheckIp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UptimeCheckIp.AsObject;
  static toObject(includeInstance: boolean, msg: UptimeCheckIp): UptimeCheckIp.AsObject;
  static serializeBinaryToWriter(message: UptimeCheckIp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UptimeCheckIp;
  static deserializeBinaryFromReader(message: UptimeCheckIp, reader: jspb.BinaryReader): UptimeCheckIp;
}

export namespace UptimeCheckIp {
  export type AsObject = {
    region: UptimeCheckRegion,
    location: string,
    ipAddress: string,
  }
}

export enum UptimeCheckRegion { 
  REGION_UNSPECIFIED = 0,
  USA = 1,
  EUROPE = 2,
  SOUTH_AMERICA = 3,
  ASIA_PACIFIC = 4,
}
export enum GroupResourceType { 
  RESOURCE_TYPE_UNSPECIFIED = 0,
  INSTANCE = 1,
  AWS_ELB_LOAD_BALANCER = 2,
}
