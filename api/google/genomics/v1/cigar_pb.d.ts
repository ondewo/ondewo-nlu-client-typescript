import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';


export class CigarUnit extends jspb.Message {
  getOperation(): CigarUnit.Operation;
  setOperation(value: CigarUnit.Operation): CigarUnit;

  getOperationLength(): number;
  setOperationLength(value: number): CigarUnit;

  getReferenceSequence(): string;
  setReferenceSequence(value: string): CigarUnit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CigarUnit.AsObject;
  static toObject(includeInstance: boolean, msg: CigarUnit): CigarUnit.AsObject;
  static serializeBinaryToWriter(message: CigarUnit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CigarUnit;
  static deserializeBinaryFromReader(message: CigarUnit, reader: jspb.BinaryReader): CigarUnit;
}

export namespace CigarUnit {
  export type AsObject = {
    operation: CigarUnit.Operation,
    operationLength: number,
    referenceSequence: string,
  }

  export enum Operation { 
    OPERATION_UNSPECIFIED = 0,
    ALIGNMENT_MATCH = 1,
    INSERT = 2,
    DELETE = 3,
    SKIP = 4,
    CLIP_SOFT = 5,
    CLIP_HARD = 6,
    PAD = 7,
    SEQUENCE_MATCH = 8,
    SEQUENCE_MISMATCH = 9,
  }
}

