import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb from '../../../../google/devtools/containeranalysis/v1alpha1/package_vulnerability_pb';


export class PackageManager extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageManager.AsObject;
  static toObject(includeInstance: boolean, msg: PackageManager): PackageManager.AsObject;
  static serializeBinaryToWriter(message: PackageManager, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageManager;
  static deserializeBinaryFromReader(message: PackageManager, reader: jspb.BinaryReader): PackageManager;
}

export namespace PackageManager {
  export type AsObject = {
  }

  export class Distribution extends jspb.Message {
    getCpeUri(): string;
    setCpeUri(value: string): Distribution;

    getArchitecture(): PackageManager.Architecture;
    setArchitecture(value: PackageManager.Architecture): Distribution;

    getLatestVersion(): google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version | undefined;
    setLatestVersion(value?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version): Distribution;
    hasLatestVersion(): boolean;
    clearLatestVersion(): Distribution;

    getMaintainer(): string;
    setMaintainer(value: string): Distribution;

    getUrl(): string;
    setUrl(value: string): Distribution;

    getDescription(): string;
    setDescription(value: string): Distribution;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Distribution.AsObject;
    static toObject(includeInstance: boolean, msg: Distribution): Distribution.AsObject;
    static serializeBinaryToWriter(message: Distribution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Distribution;
    static deserializeBinaryFromReader(message: Distribution, reader: jspb.BinaryReader): Distribution;
  }

  export namespace Distribution {
    export type AsObject = {
      cpeUri: string,
      architecture: PackageManager.Architecture,
      latestVersion?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version.AsObject,
      maintainer: string,
      url: string,
      description: string,
    }
  }


  export class Location extends jspb.Message {
    getCpeUri(): string;
    setCpeUri(value: string): Location;

    getVersion(): google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version | undefined;
    setVersion(value?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version): Location;
    hasVersion(): boolean;
    clearVersion(): Location;

    getPath(): string;
    setPath(value: string): Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
  }

  export namespace Location {
    export type AsObject = {
      cpeUri: string,
      version?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Version.AsObject,
      path: string,
    }
  }


  export class Package extends jspb.Message {
    getName(): string;
    setName(value: string): Package;

    getDistributionList(): Array<PackageManager.Distribution>;
    setDistributionList(value: Array<PackageManager.Distribution>): Package;
    clearDistributionList(): Package;
    addDistribution(value?: PackageManager.Distribution, index?: number): PackageManager.Distribution;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Package.AsObject;
    static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
    static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Package;
    static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
  }

  export namespace Package {
    export type AsObject = {
      name: string,
      distributionList: Array<PackageManager.Distribution.AsObject>,
    }
  }


  export class Installation extends jspb.Message {
    getName(): string;
    setName(value: string): Installation;

    getLocationList(): Array<PackageManager.Location>;
    setLocationList(value: Array<PackageManager.Location>): Installation;
    clearLocationList(): Installation;
    addLocation(value?: PackageManager.Location, index?: number): PackageManager.Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Installation.AsObject;
    static toObject(includeInstance: boolean, msg: Installation): Installation.AsObject;
    static serializeBinaryToWriter(message: Installation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Installation;
    static deserializeBinaryFromReader(message: Installation, reader: jspb.BinaryReader): Installation;
  }

  export namespace Installation {
    export type AsObject = {
      name: string,
      locationList: Array<PackageManager.Location.AsObject>,
    }
  }


  export enum Architecture { 
    ARCHITECTURE_UNSPECIFIED = 0,
    X86 = 1,
    X64 = 2,
  }
}

