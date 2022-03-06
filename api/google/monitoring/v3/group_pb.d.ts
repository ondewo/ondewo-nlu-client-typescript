import * as jspb from 'google-protobuf'



export class Group extends jspb.Message {
  getName(): string;
  setName(value: string): Group;

  getDisplayName(): string;
  setDisplayName(value: string): Group;

  getParentName(): string;
  setParentName(value: string): Group;

  getFilter(): string;
  setFilter(value: string): Group;

  getIsCluster(): boolean;
  setIsCluster(value: boolean): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    name: string,
    displayName: string,
    parentName: string,
    filter: string,
    isCluster: boolean,
  }
}

