import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Instance extends jspb.Message {
  getName(): string;
  setName(value: string): Instance;

  getId(): string;
  setId(value: string): Instance;

  getAppEngineRelease(): string;
  setAppEngineRelease(value: string): Instance;

  getAvailability(): Instance.Availability;
  setAvailability(value: Instance.Availability): Instance;

  getVmName(): string;
  setVmName(value: string): Instance;

  getVmZoneName(): string;
  setVmZoneName(value: string): Instance;

  getVmId(): string;
  setVmId(value: string): Instance;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Instance;
  hasStartTime(): boolean;
  clearStartTime(): Instance;

  getRequests(): number;
  setRequests(value: number): Instance;

  getErrors(): number;
  setErrors(value: number): Instance;

  getQps(): number;
  setQps(value: number): Instance;

  getAverageLatency(): number;
  setAverageLatency(value: number): Instance;

  getMemoryUsage(): number;
  setMemoryUsage(value: number): Instance;

  getVmStatus(): string;
  setVmStatus(value: string): Instance;

  getVmDebugEnabled(): boolean;
  setVmDebugEnabled(value: boolean): Instance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instance.AsObject;
  static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
  static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instance;
  static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
  export type AsObject = {
    name: string,
    id: string,
    appEngineRelease: string,
    availability: Instance.Availability,
    vmName: string,
    vmZoneName: string,
    vmId: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requests: number,
    errors: number,
    qps: number,
    averageLatency: number,
    memoryUsage: number,
    vmStatus: string,
    vmDebugEnabled: boolean,
  }

  export enum Availability { 
    UNSPECIFIED = 0,
    RESIDENT = 1,
    DYNAMIC = 2,
  }
}

