import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_devtools_containeranalysis_v1beta1_attestation_attestation_pb from '../../../../../google/devtools/containeranalysis/v1beta1/attestation/attestation_pb';
import * as google_devtools_containeranalysis_v1beta1_build_build_pb from '../../../../../google/devtools/containeranalysis/v1beta1/build/build_pb';
import * as google_devtools_containeranalysis_v1beta1_common_common_pb from '../../../../../google/devtools/containeranalysis/v1beta1/common/common_pb';
import * as google_devtools_containeranalysis_v1beta1_deployment_deployment_pb from '../../../../../google/devtools/containeranalysis/v1beta1/deployment/deployment_pb';
import * as google_devtools_containeranalysis_v1beta1_discovery_discovery_pb from '../../../../../google/devtools/containeranalysis/v1beta1/discovery/discovery_pb';
import * as google_devtools_containeranalysis_v1beta1_image_image_pb from '../../../../../google/devtools/containeranalysis/v1beta1/image/image_pb';
import * as google_devtools_containeranalysis_v1beta1_package_package_pb from '../../../../../google/devtools/containeranalysis/v1beta1/package/package_pb';
import * as google_devtools_containeranalysis_v1beta1_provenance_provenance_pb from '../../../../../google/devtools/containeranalysis/v1beta1/provenance/provenance_pb';
import * as google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb from '../../../../../google/devtools/containeranalysis/v1beta1/vulnerability/vulnerability_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Occurrence extends jspb.Message {
  getName(): string;
  setName(value: string): Occurrence;

  getResource(): Resource | undefined;
  setResource(value?: Resource): Occurrence;
  hasResource(): boolean;
  clearResource(): Occurrence;

  getNoteName(): string;
  setNoteName(value: string): Occurrence;

  getKind(): google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind;
  setKind(value: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind): Occurrence;

  getRemediation(): string;
  setRemediation(value: string): Occurrence;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Occurrence;
  hasCreateTime(): boolean;
  clearCreateTime(): Occurrence;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Occurrence;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Occurrence;

  getVulnerability(): google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details | undefined;
  setVulnerability(value?: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details): Occurrence;
  hasVulnerability(): boolean;
  clearVulnerability(): Occurrence;

  getBuild(): google_devtools_containeranalysis_v1beta1_build_build_pb.Details | undefined;
  setBuild(value?: google_devtools_containeranalysis_v1beta1_build_build_pb.Details): Occurrence;
  hasBuild(): boolean;
  clearBuild(): Occurrence;

  getDerivedImage(): google_devtools_containeranalysis_v1beta1_image_image_pb.Details | undefined;
  setDerivedImage(value?: google_devtools_containeranalysis_v1beta1_image_image_pb.Details): Occurrence;
  hasDerivedImage(): boolean;
  clearDerivedImage(): Occurrence;

  getInstallation(): google_devtools_containeranalysis_v1beta1_package_package_pb.Details | undefined;
  setInstallation(value?: google_devtools_containeranalysis_v1beta1_package_package_pb.Details): Occurrence;
  hasInstallation(): boolean;
  clearInstallation(): Occurrence;

  getDeployment(): google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details | undefined;
  setDeployment(value?: google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details): Occurrence;
  hasDeployment(): boolean;
  clearDeployment(): Occurrence;

  getDiscovered(): google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details | undefined;
  setDiscovered(value?: google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details): Occurrence;
  hasDiscovered(): boolean;
  clearDiscovered(): Occurrence;

  getAttestation(): google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details | undefined;
  setAttestation(value?: google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details): Occurrence;
  hasAttestation(): boolean;
  clearAttestation(): Occurrence;

  getDetailsCase(): Occurrence.DetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Occurrence.AsObject;
  static toObject(includeInstance: boolean, msg: Occurrence): Occurrence.AsObject;
  static serializeBinaryToWriter(message: Occurrence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Occurrence;
  static deserializeBinaryFromReader(message: Occurrence, reader: jspb.BinaryReader): Occurrence;
}

export namespace Occurrence {
  export type AsObject = {
    name: string,
    resource?: Resource.AsObject,
    noteName: string,
    kind: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind,
    remediation: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    vulnerability?: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details.AsObject,
    build?: google_devtools_containeranalysis_v1beta1_build_build_pb.Details.AsObject,
    derivedImage?: google_devtools_containeranalysis_v1beta1_image_image_pb.Details.AsObject,
    installation?: google_devtools_containeranalysis_v1beta1_package_package_pb.Details.AsObject,
    deployment?: google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details.AsObject,
    discovered?: google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details.AsObject,
    attestation?: google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details.AsObject,
  }

  export enum DetailsCase { 
    DETAILS_NOT_SET = 0,
    VULNERABILITY = 8,
    BUILD = 9,
    DERIVED_IMAGE = 10,
    INSTALLATION = 11,
    DEPLOYMENT = 12,
    DISCOVERED = 13,
    ATTESTATION = 14,
  }
}

export class Resource extends jspb.Message {
  getName(): string;
  setName(value: string): Resource;

  getUri(): string;
  setUri(value: string): Resource;

  getContentHash(): google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash | undefined;
  setContentHash(value?: google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash): Resource;
  hasContentHash(): boolean;
  clearContentHash(): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    name: string,
    uri: string,
    contentHash?: google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash.AsObject,
  }
}

export class Note extends jspb.Message {
  getName(): string;
  setName(value: string): Note;

  getShortDescription(): string;
  setShortDescription(value: string): Note;

  getLongDescription(): string;
  setLongDescription(value: string): Note;

  getKind(): google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind;
  setKind(value: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind): Note;

  getRelatedUrlList(): Array<google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl>;
  setRelatedUrlList(value: Array<google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl>): Note;
  clearRelatedUrlList(): Note;
  addRelatedUrl(value?: google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl, index?: number): google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl;

  getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): Note;
  hasExpirationTime(): boolean;
  clearExpirationTime(): Note;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Note;
  hasCreateTime(): boolean;
  clearCreateTime(): Note;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Note;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Note;

  getRelatedNoteNamesList(): Array<string>;
  setRelatedNoteNamesList(value: Array<string>): Note;
  clearRelatedNoteNamesList(): Note;
  addRelatedNoteNames(value: string, index?: number): Note;

  getVulnerability(): google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability | undefined;
  setVulnerability(value?: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability): Note;
  hasVulnerability(): boolean;
  clearVulnerability(): Note;

  getBuild(): google_devtools_containeranalysis_v1beta1_build_build_pb.Build | undefined;
  setBuild(value?: google_devtools_containeranalysis_v1beta1_build_build_pb.Build): Note;
  hasBuild(): boolean;
  clearBuild(): Note;

  getBaseImage(): google_devtools_containeranalysis_v1beta1_image_image_pb.Basis | undefined;
  setBaseImage(value?: google_devtools_containeranalysis_v1beta1_image_image_pb.Basis): Note;
  hasBaseImage(): boolean;
  clearBaseImage(): Note;

  getPackage(): google_devtools_containeranalysis_v1beta1_package_package_pb.Package | undefined;
  setPackage(value?: google_devtools_containeranalysis_v1beta1_package_package_pb.Package): Note;
  hasPackage(): boolean;
  clearPackage(): Note;

  getDeployable(): google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable | undefined;
  setDeployable(value?: google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable): Note;
  hasDeployable(): boolean;
  clearDeployable(): Note;

  getDiscovery(): google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery | undefined;
  setDiscovery(value?: google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery): Note;
  hasDiscovery(): boolean;
  clearDiscovery(): Note;

  getAttestationAuthority(): google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority | undefined;
  setAttestationAuthority(value?: google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority): Note;
  hasAttestationAuthority(): boolean;
  clearAttestationAuthority(): Note;

  getTypeCase(): Note.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Note.AsObject;
  static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
  static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Note;
  static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
}

export namespace Note {
  export type AsObject = {
    name: string,
    shortDescription: string,
    longDescription: string,
    kind: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind,
    relatedUrlList: Array<google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl.AsObject>,
    expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    relatedNoteNamesList: Array<string>,
    vulnerability?: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability.AsObject,
    build?: google_devtools_containeranalysis_v1beta1_build_build_pb.Build.AsObject,
    baseImage?: google_devtools_containeranalysis_v1beta1_image_image_pb.Basis.AsObject,
    pb_package?: google_devtools_containeranalysis_v1beta1_package_package_pb.Package.AsObject,
    deployable?: google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable.AsObject,
    discovery?: google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery.AsObject,
    attestationAuthority?: google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority.AsObject,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    VULNERABILITY = 10,
    BUILD = 11,
    BASE_IMAGE = 12,
    PACKAGE = 13,
    DEPLOYABLE = 14,
    DISCOVERY = 15,
    ATTESTATION_AUTHORITY = 16,
  }
}

export class GetOccurrenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetOccurrenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOccurrenceRequest): GetOccurrenceRequest.AsObject;
  static serializeBinaryToWriter(message: GetOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOccurrenceRequest;
  static deserializeBinaryFromReader(message: GetOccurrenceRequest, reader: jspb.BinaryReader): GetOccurrenceRequest;
}

export namespace GetOccurrenceRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListOccurrencesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListOccurrencesRequest;

  getFilter(): string;
  setFilter(value: string): ListOccurrencesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListOccurrencesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListOccurrencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOccurrencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOccurrencesRequest): ListOccurrencesRequest.AsObject;
  static serializeBinaryToWriter(message: ListOccurrencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOccurrencesRequest;
  static deserializeBinaryFromReader(message: ListOccurrencesRequest, reader: jspb.BinaryReader): ListOccurrencesRequest;
}

export namespace ListOccurrencesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListOccurrencesResponse extends jspb.Message {
  getOccurrencesList(): Array<Occurrence>;
  setOccurrencesList(value: Array<Occurrence>): ListOccurrencesResponse;
  clearOccurrencesList(): ListOccurrencesResponse;
  addOccurrences(value?: Occurrence, index?: number): Occurrence;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListOccurrencesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOccurrencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOccurrencesResponse): ListOccurrencesResponse.AsObject;
  static serializeBinaryToWriter(message: ListOccurrencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOccurrencesResponse;
  static deserializeBinaryFromReader(message: ListOccurrencesResponse, reader: jspb.BinaryReader): ListOccurrencesResponse;
}

export namespace ListOccurrencesResponse {
  export type AsObject = {
    occurrencesList: Array<Occurrence.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteOccurrenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteOccurrenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOccurrenceRequest): DeleteOccurrenceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOccurrenceRequest;
  static deserializeBinaryFromReader(message: DeleteOccurrenceRequest, reader: jspb.BinaryReader): DeleteOccurrenceRequest;
}

export namespace DeleteOccurrenceRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateOccurrenceRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateOccurrenceRequest;

  getOccurrence(): Occurrence | undefined;
  setOccurrence(value?: Occurrence): CreateOccurrenceRequest;
  hasOccurrence(): boolean;
  clearOccurrence(): CreateOccurrenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOccurrenceRequest): CreateOccurrenceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOccurrenceRequest;
  static deserializeBinaryFromReader(message: CreateOccurrenceRequest, reader: jspb.BinaryReader): CreateOccurrenceRequest;
}

export namespace CreateOccurrenceRequest {
  export type AsObject = {
    parent: string,
    occurrence?: Occurrence.AsObject,
  }
}

export class UpdateOccurrenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateOccurrenceRequest;

  getOccurrence(): Occurrence | undefined;
  setOccurrence(value?: Occurrence): UpdateOccurrenceRequest;
  hasOccurrence(): boolean;
  clearOccurrence(): UpdateOccurrenceRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateOccurrenceRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateOccurrenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOccurrenceRequest): UpdateOccurrenceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOccurrenceRequest;
  static deserializeBinaryFromReader(message: UpdateOccurrenceRequest, reader: jspb.BinaryReader): UpdateOccurrenceRequest;
}

export namespace UpdateOccurrenceRequest {
  export type AsObject = {
    name: string,
    occurrence?: Occurrence.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetNoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNoteRequest): GetNoteRequest.AsObject;
  static serializeBinaryToWriter(message: GetNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNoteRequest;
  static deserializeBinaryFromReader(message: GetNoteRequest, reader: jspb.BinaryReader): GetNoteRequest;
}

export namespace GetNoteRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetOccurrenceNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetOccurrenceNoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOccurrenceNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOccurrenceNoteRequest): GetOccurrenceNoteRequest.AsObject;
  static serializeBinaryToWriter(message: GetOccurrenceNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOccurrenceNoteRequest;
  static deserializeBinaryFromReader(message: GetOccurrenceNoteRequest, reader: jspb.BinaryReader): GetOccurrenceNoteRequest;
}

export namespace GetOccurrenceNoteRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListNotesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListNotesRequest;

  getFilter(): string;
  setFilter(value: string): ListNotesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNotesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotesRequest): ListNotesRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotesRequest;
  static deserializeBinaryFromReader(message: ListNotesRequest, reader: jspb.BinaryReader): ListNotesRequest;
}

export namespace ListNotesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotesResponse extends jspb.Message {
  getNotesList(): Array<Note>;
  setNotesList(value: Array<Note>): ListNotesResponse;
  clearNotesList(): ListNotesResponse;
  addNotes(value?: Note, index?: number): Note;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListNotesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotesResponse): ListNotesResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotesResponse;
  static deserializeBinaryFromReader(message: ListNotesResponse, reader: jspb.BinaryReader): ListNotesResponse;
}

export namespace ListNotesResponse {
  export type AsObject = {
    notesList: Array<Note.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteNoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNoteRequest): DeleteNoteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNoteRequest;
  static deserializeBinaryFromReader(message: DeleteNoteRequest, reader: jspb.BinaryReader): DeleteNoteRequest;
}

export namespace DeleteNoteRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateNoteRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateNoteRequest;

  getNoteId(): string;
  setNoteId(value: string): CreateNoteRequest;

  getNote(): Note | undefined;
  setNote(value?: Note): CreateNoteRequest;
  hasNote(): boolean;
  clearNote(): CreateNoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNoteRequest): CreateNoteRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNoteRequest;
  static deserializeBinaryFromReader(message: CreateNoteRequest, reader: jspb.BinaryReader): CreateNoteRequest;
}

export namespace CreateNoteRequest {
  export type AsObject = {
    parent: string,
    noteId: string,
    note?: Note.AsObject,
  }
}

export class UpdateNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateNoteRequest;

  getNote(): Note | undefined;
  setNote(value?: Note): UpdateNoteRequest;
  hasNote(): boolean;
  clearNote(): UpdateNoteRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateNoteRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateNoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNoteRequest): UpdateNoteRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNoteRequest;
  static deserializeBinaryFromReader(message: UpdateNoteRequest, reader: jspb.BinaryReader): UpdateNoteRequest;
}

export namespace UpdateNoteRequest {
  export type AsObject = {
    name: string,
    note?: Note.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListNoteOccurrencesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListNoteOccurrencesRequest;

  getFilter(): string;
  setFilter(value: string): ListNoteOccurrencesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNoteOccurrencesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNoteOccurrencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNoteOccurrencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNoteOccurrencesRequest): ListNoteOccurrencesRequest.AsObject;
  static serializeBinaryToWriter(message: ListNoteOccurrencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNoteOccurrencesRequest;
  static deserializeBinaryFromReader(message: ListNoteOccurrencesRequest, reader: jspb.BinaryReader): ListNoteOccurrencesRequest;
}

export namespace ListNoteOccurrencesRequest {
  export type AsObject = {
    name: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNoteOccurrencesResponse extends jspb.Message {
  getOccurrencesList(): Array<Occurrence>;
  setOccurrencesList(value: Array<Occurrence>): ListNoteOccurrencesResponse;
  clearOccurrencesList(): ListNoteOccurrencesResponse;
  addOccurrences(value?: Occurrence, index?: number): Occurrence;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListNoteOccurrencesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNoteOccurrencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNoteOccurrencesResponse): ListNoteOccurrencesResponse.AsObject;
  static serializeBinaryToWriter(message: ListNoteOccurrencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNoteOccurrencesResponse;
  static deserializeBinaryFromReader(message: ListNoteOccurrencesResponse, reader: jspb.BinaryReader): ListNoteOccurrencesResponse;
}

export namespace ListNoteOccurrencesResponse {
  export type AsObject = {
    occurrencesList: Array<Occurrence.AsObject>,
    nextPageToken: string,
  }
}

export class BatchCreateNotesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchCreateNotesRequest;

  getNotesMap(): jspb.Map<string, Note>;
  clearNotesMap(): BatchCreateNotesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateNotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateNotesRequest): BatchCreateNotesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateNotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateNotesRequest;
  static deserializeBinaryFromReader(message: BatchCreateNotesRequest, reader: jspb.BinaryReader): BatchCreateNotesRequest;
}

export namespace BatchCreateNotesRequest {
  export type AsObject = {
    parent: string,
    notesMap: Array<[string, Note.AsObject]>,
  }
}

export class BatchCreateNotesResponse extends jspb.Message {
  getNotesList(): Array<Note>;
  setNotesList(value: Array<Note>): BatchCreateNotesResponse;
  clearNotesList(): BatchCreateNotesResponse;
  addNotes(value?: Note, index?: number): Note;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateNotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateNotesResponse): BatchCreateNotesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateNotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateNotesResponse;
  static deserializeBinaryFromReader(message: BatchCreateNotesResponse, reader: jspb.BinaryReader): BatchCreateNotesResponse;
}

export namespace BatchCreateNotesResponse {
  export type AsObject = {
    notesList: Array<Note.AsObject>,
  }
}

export class BatchCreateOccurrencesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchCreateOccurrencesRequest;

  getOccurrencesList(): Array<Occurrence>;
  setOccurrencesList(value: Array<Occurrence>): BatchCreateOccurrencesRequest;
  clearOccurrencesList(): BatchCreateOccurrencesRequest;
  addOccurrences(value?: Occurrence, index?: number): Occurrence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateOccurrencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateOccurrencesRequest): BatchCreateOccurrencesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateOccurrencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateOccurrencesRequest;
  static deserializeBinaryFromReader(message: BatchCreateOccurrencesRequest, reader: jspb.BinaryReader): BatchCreateOccurrencesRequest;
}

export namespace BatchCreateOccurrencesRequest {
  export type AsObject = {
    parent: string,
    occurrencesList: Array<Occurrence.AsObject>,
  }
}

export class BatchCreateOccurrencesResponse extends jspb.Message {
  getOccurrencesList(): Array<Occurrence>;
  setOccurrencesList(value: Array<Occurrence>): BatchCreateOccurrencesResponse;
  clearOccurrencesList(): BatchCreateOccurrencesResponse;
  addOccurrences(value?: Occurrence, index?: number): Occurrence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateOccurrencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateOccurrencesResponse): BatchCreateOccurrencesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateOccurrencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateOccurrencesResponse;
  static deserializeBinaryFromReader(message: BatchCreateOccurrencesResponse, reader: jspb.BinaryReader): BatchCreateOccurrencesResponse;
}

export namespace BatchCreateOccurrencesResponse {
  export type AsObject = {
    occurrencesList: Array<Occurrence.AsObject>,
  }
}

export class GetVulnerabilityOccurrencesSummaryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): GetVulnerabilityOccurrencesSummaryRequest;

  getFilter(): string;
  setFilter(value: string): GetVulnerabilityOccurrencesSummaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVulnerabilityOccurrencesSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVulnerabilityOccurrencesSummaryRequest): GetVulnerabilityOccurrencesSummaryRequest.AsObject;
  static serializeBinaryToWriter(message: GetVulnerabilityOccurrencesSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVulnerabilityOccurrencesSummaryRequest;
  static deserializeBinaryFromReader(message: GetVulnerabilityOccurrencesSummaryRequest, reader: jspb.BinaryReader): GetVulnerabilityOccurrencesSummaryRequest;
}

export namespace GetVulnerabilityOccurrencesSummaryRequest {
  export type AsObject = {
    parent: string,
    filter: string,
  }
}

export class VulnerabilityOccurrencesSummary extends jspb.Message {
  getCountsList(): Array<VulnerabilityOccurrencesSummary.FixableTotalByDigest>;
  setCountsList(value: Array<VulnerabilityOccurrencesSummary.FixableTotalByDigest>): VulnerabilityOccurrencesSummary;
  clearCountsList(): VulnerabilityOccurrencesSummary;
  addCounts(value?: VulnerabilityOccurrencesSummary.FixableTotalByDigest, index?: number): VulnerabilityOccurrencesSummary.FixableTotalByDigest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VulnerabilityOccurrencesSummary.AsObject;
  static toObject(includeInstance: boolean, msg: VulnerabilityOccurrencesSummary): VulnerabilityOccurrencesSummary.AsObject;
  static serializeBinaryToWriter(message: VulnerabilityOccurrencesSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VulnerabilityOccurrencesSummary;
  static deserializeBinaryFromReader(message: VulnerabilityOccurrencesSummary, reader: jspb.BinaryReader): VulnerabilityOccurrencesSummary;
}

export namespace VulnerabilityOccurrencesSummary {
  export type AsObject = {
    countsList: Array<VulnerabilityOccurrencesSummary.FixableTotalByDigest.AsObject>,
  }

  export class FixableTotalByDigest extends jspb.Message {
    getResource(): Resource | undefined;
    setResource(value?: Resource): FixableTotalByDigest;
    hasResource(): boolean;
    clearResource(): FixableTotalByDigest;

    getSeverity(): google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Severity;
    setSeverity(value: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Severity): FixableTotalByDigest;

    getFixableCount(): number;
    setFixableCount(value: number): FixableTotalByDigest;

    getTotalCount(): number;
    setTotalCount(value: number): FixableTotalByDigest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FixableTotalByDigest.AsObject;
    static toObject(includeInstance: boolean, msg: FixableTotalByDigest): FixableTotalByDigest.AsObject;
    static serializeBinaryToWriter(message: FixableTotalByDigest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FixableTotalByDigest;
    static deserializeBinaryFromReader(message: FixableTotalByDigest, reader: jspb.BinaryReader): FixableTotalByDigest;
  }

  export namespace FixableTotalByDigest {
    export type AsObject = {
      resource?: Resource.AsObject,
      severity: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Severity,
      fixableCount: number,
      totalCount: number,
    }
  }

}

