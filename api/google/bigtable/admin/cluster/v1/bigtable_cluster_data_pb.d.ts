import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Zone extends jspb.Message {
  getName(): string;
  setName(value: string): Zone;

  getDisplayName(): string;
  setDisplayName(value: string): Zone;

  getStatus(): Zone.Status;
  setStatus(value: Zone.Status): Zone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Zone.AsObject;
  static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
  static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Zone;
  static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
}

export namespace Zone {
  export type AsObject = {
    name: string,
    displayName: string,
    status: Zone.Status,
  }

  export enum Status { 
    UNKNOWN = 0,
    OK = 1,
    PLANNED_MAINTENANCE = 2,
    EMERGENCY_MAINENANCE = 3,
  }
}

export class Cluster extends jspb.Message {
  getName(): string;
  setName(value: string): Cluster;

  getCurrentOperation(): google_longrunning_operations_pb.Operation | undefined;
  setCurrentOperation(value?: google_longrunning_operations_pb.Operation): Cluster;
  hasCurrentOperation(): boolean;
  clearCurrentOperation(): Cluster;

  getDisplayName(): string;
  setDisplayName(value: string): Cluster;

  getServeNodes(): number;
  setServeNodes(value: number): Cluster;

  getDefaultStorageType(): StorageType;
  setDefaultStorageType(value: StorageType): Cluster;

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
    currentOperation?: google_longrunning_operations_pb.Operation.AsObject,
    displayName: string,
    serveNodes: number,
    defaultStorageType: StorageType,
  }
}

export enum StorageType { 
  STORAGE_UNSPECIFIED = 0,
  STORAGE_SSD = 1,
  STORAGE_HDD = 2,
}
