import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_genomics_v1_cigar_pb from '../../../google/genomics/v1/cigar_pb';
import * as google_genomics_v1_position_pb from '../../../google/genomics/v1/position_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class LinearAlignment extends jspb.Message {
  getPosition(): google_genomics_v1_position_pb.Position | undefined;
  setPosition(value?: google_genomics_v1_position_pb.Position): LinearAlignment;
  hasPosition(): boolean;
  clearPosition(): LinearAlignment;

  getMappingQuality(): number;
  setMappingQuality(value: number): LinearAlignment;

  getCigarList(): Array<google_genomics_v1_cigar_pb.CigarUnit>;
  setCigarList(value: Array<google_genomics_v1_cigar_pb.CigarUnit>): LinearAlignment;
  clearCigarList(): LinearAlignment;
  addCigar(value?: google_genomics_v1_cigar_pb.CigarUnit, index?: number): google_genomics_v1_cigar_pb.CigarUnit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinearAlignment.AsObject;
  static toObject(includeInstance: boolean, msg: LinearAlignment): LinearAlignment.AsObject;
  static serializeBinaryToWriter(message: LinearAlignment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinearAlignment;
  static deserializeBinaryFromReader(message: LinearAlignment, reader: jspb.BinaryReader): LinearAlignment;
}

export namespace LinearAlignment {
  export type AsObject = {
    position?: google_genomics_v1_position_pb.Position.AsObject,
    mappingQuality: number,
    cigarList: Array<google_genomics_v1_cigar_pb.CigarUnit.AsObject>,
  }
}

export class Read extends jspb.Message {
  getId(): string;
  setId(value: string): Read;

  getReadGroupId(): string;
  setReadGroupId(value: string): Read;

  getReadGroupSetId(): string;
  setReadGroupSetId(value: string): Read;

  getFragmentName(): string;
  setFragmentName(value: string): Read;

  getProperPlacement(): boolean;
  setProperPlacement(value: boolean): Read;

  getDuplicateFragment(): boolean;
  setDuplicateFragment(value: boolean): Read;

  getFragmentLength(): number;
  setFragmentLength(value: number): Read;

  getReadNumber(): number;
  setReadNumber(value: number): Read;

  getNumberReads(): number;
  setNumberReads(value: number): Read;

  getFailedVendorQualityChecks(): boolean;
  setFailedVendorQualityChecks(value: boolean): Read;

  getAlignment(): LinearAlignment | undefined;
  setAlignment(value?: LinearAlignment): Read;
  hasAlignment(): boolean;
  clearAlignment(): Read;

  getSecondaryAlignment(): boolean;
  setSecondaryAlignment(value: boolean): Read;

  getSupplementaryAlignment(): boolean;
  setSupplementaryAlignment(value: boolean): Read;

  getAlignedSequence(): string;
  setAlignedSequence(value: string): Read;

  getAlignedQualityList(): Array<number>;
  setAlignedQualityList(value: Array<number>): Read;
  clearAlignedQualityList(): Read;
  addAlignedQuality(value: number, index?: number): Read;

  getNextMatePosition(): google_genomics_v1_position_pb.Position | undefined;
  setNextMatePosition(value?: google_genomics_v1_position_pb.Position): Read;
  hasNextMatePosition(): boolean;
  clearNextMatePosition(): Read;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): Read;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Read.AsObject;
  static toObject(includeInstance: boolean, msg: Read): Read.AsObject;
  static serializeBinaryToWriter(message: Read, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Read;
  static deserializeBinaryFromReader(message: Read, reader: jspb.BinaryReader): Read;
}

export namespace Read {
  export type AsObject = {
    id: string,
    readGroupId: string,
    readGroupSetId: string,
    fragmentName: string,
    properPlacement: boolean,
    duplicateFragment: boolean,
    fragmentLength: number,
    readNumber: number,
    numberReads: number,
    failedVendorQualityChecks: boolean,
    alignment?: LinearAlignment.AsObject,
    secondaryAlignment: boolean,
    supplementaryAlignment: boolean,
    alignedSequence: string,
    alignedQualityList: Array<number>,
    nextMatePosition?: google_genomics_v1_position_pb.Position.AsObject,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }
}

