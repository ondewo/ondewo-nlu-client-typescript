import * as jspb from 'google-protobuf'



export class PgpSignedAttestation extends jspb.Message {
  getSignature(): string;
  setSignature(value: string): PgpSignedAttestation;

  getContentType(): PgpSignedAttestation.ContentType;
  setContentType(value: PgpSignedAttestation.ContentType): PgpSignedAttestation;

  getPgpKeyId(): string;
  setPgpKeyId(value: string): PgpSignedAttestation;

  getKeyIdCase(): PgpSignedAttestation.KeyIdCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PgpSignedAttestation.AsObject;
  static toObject(includeInstance: boolean, msg: PgpSignedAttestation): PgpSignedAttestation.AsObject;
  static serializeBinaryToWriter(message: PgpSignedAttestation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PgpSignedAttestation;
  static deserializeBinaryFromReader(message: PgpSignedAttestation, reader: jspb.BinaryReader): PgpSignedAttestation;
}

export namespace PgpSignedAttestation {
  export type AsObject = {
    signature: string,
    contentType: PgpSignedAttestation.ContentType,
    pgpKeyId: string,
  }

  export enum ContentType { 
    CONTENT_TYPE_UNSPECIFIED = 0,
    SIMPLE_SIGNING_JSON = 1,
  }

  export enum KeyIdCase { 
    KEY_ID_NOT_SET = 0,
    PGP_KEY_ID = 2,
  }
}

export class Authority extends jspb.Message {
  getHint(): Authority.Hint | undefined;
  setHint(value?: Authority.Hint): Authority;
  hasHint(): boolean;
  clearHint(): Authority;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authority.AsObject;
  static toObject(includeInstance: boolean, msg: Authority): Authority.AsObject;
  static serializeBinaryToWriter(message: Authority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authority;
  static deserializeBinaryFromReader(message: Authority, reader: jspb.BinaryReader): Authority;
}

export namespace Authority {
  export type AsObject = {
    hint?: Authority.Hint.AsObject,
  }

  export class Hint extends jspb.Message {
    getHumanReadableName(): string;
    setHumanReadableName(value: string): Hint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hint.AsObject;
    static toObject(includeInstance: boolean, msg: Hint): Hint.AsObject;
    static serializeBinaryToWriter(message: Hint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hint;
    static deserializeBinaryFromReader(message: Hint, reader: jspb.BinaryReader): Hint;
  }

  export namespace Hint {
    export type AsObject = {
      humanReadableName: string,
    }
  }

}

export class Details extends jspb.Message {
  getAttestation(): Attestation | undefined;
  setAttestation(value?: Attestation): Details;
  hasAttestation(): boolean;
  clearAttestation(): Details;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    attestation?: Attestation.AsObject,
  }
}

export class Attestation extends jspb.Message {
  getPgpSignedAttestation(): PgpSignedAttestation | undefined;
  setPgpSignedAttestation(value?: PgpSignedAttestation): Attestation;
  hasPgpSignedAttestation(): boolean;
  clearPgpSignedAttestation(): Attestation;

  getSignatureCase(): Attestation.SignatureCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attestation.AsObject;
  static toObject(includeInstance: boolean, msg: Attestation): Attestation.AsObject;
  static serializeBinaryToWriter(message: Attestation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attestation;
  static deserializeBinaryFromReader(message: Attestation, reader: jspb.BinaryReader): Attestation;
}

export namespace Attestation {
  export type AsObject = {
    pgpSignedAttestation?: PgpSignedAttestation.AsObject,
  }

  export enum SignatureCase { 
    SIGNATURE_NOT_SET = 0,
    PGP_SIGNED_ATTESTATION = 1,
  }
}

