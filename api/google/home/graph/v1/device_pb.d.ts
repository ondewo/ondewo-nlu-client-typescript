import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class Device extends jspb.Message {
  getId(): string;
  setId(value: string): Device;

  getType(): string;
  setType(value: string): Device;

  getTraitsList(): Array<string>;
  setTraitsList(value: Array<string>): Device;
  clearTraitsList(): Device;
  addTraits(value: string, index?: number): Device;

  getName(): DeviceNames | undefined;
  setName(value?: DeviceNames): Device;
  hasName(): boolean;
  clearName(): Device;

  getWillReportState(): boolean;
  setWillReportState(value: boolean): Device;

  getRoomHint(): string;
  setRoomHint(value: string): Device;

  getStructureHint(): string;
  setStructureHint(value: string): Device;

  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): Device;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): Device;

  getAttributes(): google_protobuf_struct_pb.Struct | undefined;
  setAttributes(value?: google_protobuf_struct_pb.Struct): Device;
  hasAttributes(): boolean;
  clearAttributes(): Device;

  getCustomData(): string;
  setCustomData(value: string): Device;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    id: string,
    type: string,
    traitsList: Array<string>,
    name?: DeviceNames.AsObject,
    willReportState: boolean,
    roomHint: string,
    structureHint: string,
    deviceInfo?: DeviceInfo.AsObject,
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
    customData: string,
  }
}

export class DeviceNames extends jspb.Message {
  getName(): string;
  setName(value: string): DeviceNames;

  getNicknamesList(): Array<string>;
  setNicknamesList(value: Array<string>): DeviceNames;
  clearNicknamesList(): DeviceNames;
  addNicknames(value: string, index?: number): DeviceNames;

  getDefaultNamesList(): Array<string>;
  setDefaultNamesList(value: Array<string>): DeviceNames;
  clearDefaultNamesList(): DeviceNames;
  addDefaultNames(value: string, index?: number): DeviceNames;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceNames.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceNames): DeviceNames.AsObject;
  static serializeBinaryToWriter(message: DeviceNames, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceNames;
  static deserializeBinaryFromReader(message: DeviceNames, reader: jspb.BinaryReader): DeviceNames;
}

export namespace DeviceNames {
  export type AsObject = {
    name: string,
    nicknamesList: Array<string>,
    defaultNamesList: Array<string>,
  }
}

export class DeviceInfo extends jspb.Message {
  getManufacturer(): string;
  setManufacturer(value: string): DeviceInfo;

  getModel(): string;
  setModel(value: string): DeviceInfo;

  getHwVersion(): string;
  setHwVersion(value: string): DeviceInfo;

  getSwVersion(): string;
  setSwVersion(value: string): DeviceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    manufacturer: string,
    model: string,
    hwVersion: string,
    swVersion: string,
  }
}

