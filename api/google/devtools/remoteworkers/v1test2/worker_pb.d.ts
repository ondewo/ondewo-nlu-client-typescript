import * as jspb from 'google-protobuf'



export class Worker extends jspb.Message {
  getDevicesList(): Array<Device>;
  setDevicesList(value: Array<Device>): Worker;
  clearDevicesList(): Worker;
  addDevices(value?: Device, index?: number): Device;

  getPropertiesList(): Array<Worker.Property>;
  setPropertiesList(value: Array<Worker.Property>): Worker;
  clearPropertiesList(): Worker;
  addProperties(value?: Worker.Property, index?: number): Worker.Property;

  getConfigsList(): Array<Worker.Config>;
  setConfigsList(value: Array<Worker.Config>): Worker;
  clearConfigsList(): Worker;
  addConfigs(value?: Worker.Config, index?: number): Worker.Config;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Worker.AsObject;
  static toObject(includeInstance: boolean, msg: Worker): Worker.AsObject;
  static serializeBinaryToWriter(message: Worker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Worker;
  static deserializeBinaryFromReader(message: Worker, reader: jspb.BinaryReader): Worker;
}

export namespace Worker {
  export type AsObject = {
    devicesList: Array<Device.AsObject>,
    propertiesList: Array<Worker.Property.AsObject>,
    configsList: Array<Worker.Config.AsObject>,
  }

  export class Property extends jspb.Message {
    getKey(): string;
    setKey(value: string): Property;

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
      key: string,
      value: string,
    }
  }


  export class Config extends jspb.Message {
    getKey(): string;
    setKey(value: string): Config;

    getValue(): string;
    setValue(value: string): Config;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      key: string,
      value: string,
    }
  }

}

export class Device extends jspb.Message {
  getHandle(): string;
  setHandle(value: string): Device;

  getPropertiesList(): Array<Device.Property>;
  setPropertiesList(value: Array<Device.Property>): Device;
  clearPropertiesList(): Device;
  addProperties(value?: Device.Property, index?: number): Device.Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    handle: string,
    propertiesList: Array<Device.Property.AsObject>,
  }

  export class Property extends jspb.Message {
    getKey(): string;
    setKey(value: string): Property;

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
      key: string,
      value: string,
    }
  }

}

