import * as jspb from 'google-protobuf'

import * as google_devtools_resultstore_v2_common_pb from '../../../../google/devtools/resultstore/v2/common_pb';


export class Configuration extends jspb.Message {
  getName(): string;
  setName(value: string): Configuration;

  getId(): Configuration.Id | undefined;
  setId(value?: Configuration.Id): Configuration;
  hasId(): boolean;
  clearId(): Configuration;

  getStatusAttributes(): google_devtools_resultstore_v2_common_pb.StatusAttributes | undefined;
  setStatusAttributes(value?: google_devtools_resultstore_v2_common_pb.StatusAttributes): Configuration;
  hasStatusAttributes(): boolean;
  clearStatusAttributes(): Configuration;

  getConfigurationAttributes(): ConfigurationAttributes | undefined;
  setConfigurationAttributes(value?: ConfigurationAttributes): Configuration;
  hasConfigurationAttributes(): boolean;
  clearConfigurationAttributes(): Configuration;

  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): Configuration;
  clearPropertiesList(): Configuration;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Configuration.AsObject;
  static toObject(includeInstance: boolean, msg: Configuration): Configuration.AsObject;
  static serializeBinaryToWriter(message: Configuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Configuration;
  static deserializeBinaryFromReader(message: Configuration, reader: jspb.BinaryReader): Configuration;
}

export namespace Configuration {
  export type AsObject = {
    name: string,
    id?: Configuration.Id.AsObject,
    statusAttributes?: google_devtools_resultstore_v2_common_pb.StatusAttributes.AsObject,
    configurationAttributes?: ConfigurationAttributes.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
  }

  export class Id extends jspb.Message {
    getInvocationId(): string;
    setInvocationId(value: string): Id;

    getConfigurationId(): string;
    setConfigurationId(value: string): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      invocationId: string,
      configurationId: string,
    }
  }

}

export class ConfigurationAttributes extends jspb.Message {
  getCpu(): string;
  setCpu(value: string): ConfigurationAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigurationAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigurationAttributes): ConfigurationAttributes.AsObject;
  static serializeBinaryToWriter(message: ConfigurationAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigurationAttributes;
  static deserializeBinaryFromReader(message: ConfigurationAttributes, reader: jspb.BinaryReader): ConfigurationAttributes;
}

export namespace ConfigurationAttributes {
  export type AsObject = {
    cpu: string,
  }
}

