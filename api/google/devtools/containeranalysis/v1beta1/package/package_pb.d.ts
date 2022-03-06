import * as jspb from 'google-protobuf'



export class Distribution extends jspb.Message {
  getCpeUri(): string;
  setCpeUri(value: string): Distribution;

  getArchitecture(): Architecture;
  setArchitecture(value: Architecture): Distribution;

  getLatestVersion(): Version | undefined;
  setLatestVersion(value?: Version): Distribution;
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
    architecture: Architecture,
    latestVersion?: Version.AsObject,
    maintainer: string,
    url: string,
    description: string,
  }
}

export class Location extends jspb.Message {
  getCpeUri(): string;
  setCpeUri(value: string): Location;

  getVersion(): Version | undefined;
  setVersion(value?: Version): Location;
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
    version?: Version.AsObject,
    path: string,
  }
}

export class Package extends jspb.Message {
  getName(): string;
  setName(value: string): Package;

  getDistributionList(): Array<Distribution>;
  setDistributionList(value: Array<Distribution>): Package;
  clearDistributionList(): Package;
  addDistribution(value?: Distribution, index?: number): Distribution;

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
    distributionList: Array<Distribution.AsObject>,
  }
}

export class Details extends jspb.Message {
  getInstallation(): Installation | undefined;
  setInstallation(value?: Installation): Details;
  hasInstallation(): boolean;
  clearInstallation(): Details;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    installation?: Installation.AsObject,
  }
}

export class Installation extends jspb.Message {
  getName(): string;
  setName(value: string): Installation;

  getLocationList(): Array<Location>;
  setLocationList(value: Array<Location>): Installation;
  clearLocationList(): Installation;
  addLocation(value?: Location, index?: number): Location;

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
    locationList: Array<Location.AsObject>,
  }
}

export class Version extends jspb.Message {
  getEpoch(): number;
  setEpoch(value: number): Version;

  getName(): string;
  setName(value: string): Version;

  getRevision(): string;
  setRevision(value: string): Version;

  getKind(): Version.VersionKind;
  setKind(value: Version.VersionKind): Version;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    epoch: number,
    name: string,
    revision: string,
    kind: Version.VersionKind,
  }

  export enum VersionKind { 
    VERSION_KIND_UNSPECIFIED = 0,
    NORMAL = 1,
    MINIMUM = 2,
    MAXIMUM = 3,
  }
}

export enum Architecture { 
  ARCHITECTURE_UNSPECIFIED = 0,
  X86 = 1,
  X64 = 2,
}
