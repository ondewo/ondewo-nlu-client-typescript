import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';


export class Policy extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): Policy;

  getBindingsList(): Array<Binding>;
  setBindingsList(value: Array<Binding>): Policy;
  clearBindingsList(): Policy;
  addBindings(value?: Binding, index?: number): Binding;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): Policy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Policy.AsObject;
  static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
  static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Policy;
  static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
  export type AsObject = {
    version: number,
    bindingsList: Array<Binding.AsObject>,
    etag: Uint8Array | string,
  }
}

export class Binding extends jspb.Message {
  getRole(): string;
  setRole(value: string): Binding;

  getMembersList(): Array<string>;
  setMembersList(value: Array<string>): Binding;
  clearMembersList(): Binding;
  addMembers(value: string, index?: number): Binding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Binding.AsObject;
  static toObject(includeInstance: boolean, msg: Binding): Binding.AsObject;
  static serializeBinaryToWriter(message: Binding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Binding;
  static deserializeBinaryFromReader(message: Binding, reader: jspb.BinaryReader): Binding;
}

export namespace Binding {
  export type AsObject = {
    role: string,
    membersList: Array<string>,
  }
}

export class PolicyDelta extends jspb.Message {
  getBindingDeltasList(): Array<BindingDelta>;
  setBindingDeltasList(value: Array<BindingDelta>): PolicyDelta;
  clearBindingDeltasList(): PolicyDelta;
  addBindingDeltas(value?: BindingDelta, index?: number): BindingDelta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyDelta.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyDelta): PolicyDelta.AsObject;
  static serializeBinaryToWriter(message: PolicyDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyDelta;
  static deserializeBinaryFromReader(message: PolicyDelta, reader: jspb.BinaryReader): PolicyDelta;
}

export namespace PolicyDelta {
  export type AsObject = {
    bindingDeltasList: Array<BindingDelta.AsObject>,
  }
}

export class BindingDelta extends jspb.Message {
  getAction(): BindingDelta.Action;
  setAction(value: BindingDelta.Action): BindingDelta;

  getRole(): string;
  setRole(value: string): BindingDelta;

  getMember(): string;
  setMember(value: string): BindingDelta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindingDelta.AsObject;
  static toObject(includeInstance: boolean, msg: BindingDelta): BindingDelta.AsObject;
  static serializeBinaryToWriter(message: BindingDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindingDelta;
  static deserializeBinaryFromReader(message: BindingDelta, reader: jspb.BinaryReader): BindingDelta;
}

export namespace BindingDelta {
  export type AsObject = {
    action: BindingDelta.Action,
    role: string,
    member: string,
  }

  export enum Action { 
    ACTION_UNSPECIFIED = 0,
    ADD = 1,
    REMOVE = 2,
  }
}

