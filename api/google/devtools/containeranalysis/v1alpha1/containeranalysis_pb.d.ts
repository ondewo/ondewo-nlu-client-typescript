import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb from '../../../../google/devtools/containeranalysis/v1alpha1/bill_of_materials_pb';
import * as google_devtools_containeranalysis_v1alpha1_image_basis_pb from '../../../../google/devtools/containeranalysis/v1alpha1/image_basis_pb';
import * as google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb from '../../../../google/devtools/containeranalysis/v1alpha1/package_vulnerability_pb';
import * as google_devtools_containeranalysis_v1alpha1_provenance_pb from '../../../../google/devtools/containeranalysis/v1alpha1/provenance_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class Occurrence extends jspb.Message {
  getName(): string;
  setName(value: string): Occurrence;

  getResourceUrl(): string;
  setResourceUrl(value: string): Occurrence;

  getResource(): Resource | undefined;
  setResource(value?: Resource): Occurrence;
  hasResource(): boolean;
  clearResource(): Occurrence;

  getNoteName(): string;
  setNoteName(value: string): Occurrence;

  getKind(): Note.Kind;
  setKind(value: Note.Kind): Occurrence;

  getVulnerabilityDetails(): google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails | undefined;
  setVulnerabilityDetails(value?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails): Occurrence;
  hasVulnerabilityDetails(): boolean;
  clearVulnerabilityDetails(): Occurrence;

  getBuildDetails(): BuildDetails | undefined;
  setBuildDetails(value?: BuildDetails): Occurrence;
  hasBuildDetails(): boolean;
  clearBuildDetails(): Occurrence;

  getDerivedImage(): google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived | undefined;
  setDerivedImage(value?: google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived): Occurrence;
  hasDerivedImage(): boolean;
  clearDerivedImage(): Occurrence;

  getInstallation(): google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation | undefined;
  setInstallation(value?: google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation): Occurrence;
  hasInstallation(): boolean;
  clearInstallation(): Occurrence;

  getDeployment(): Deployable.Deployment | undefined;
  setDeployment(value?: Deployable.Deployment): Occurrence;
  hasDeployment(): boolean;
  clearDeployment(): Occurrence;

  getDiscovered(): Discovery.Discovered | undefined;
  setDiscovered(value?: Discovery.Discovered): Occurrence;
  hasDiscovered(): boolean;
  clearDiscovered(): Occurrence;

  getAttestation(): AttestationAuthority.Attestation | undefined;
  setAttestation(value?: AttestationAuthority.Attestation): Occurrence;
  hasAttestation(): boolean;
  clearAttestation(): Occurrence;

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
    resourceUrl: string,
    resource?: Resource.AsObject,
    noteName: string,
    kind: Note.Kind,
    vulnerabilityDetails?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails.AsObject,
    buildDetails?: BuildDetails.AsObject,
    derivedImage?: google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived.AsObject,
    installation?: google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation.AsObject,
    deployment?: Deployable.Deployment.AsObject,
    discovered?: Discovery.Discovered.AsObject,
    attestation?: AttestationAuthority.Attestation.AsObject,
    remediation: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum DetailsCase { 
    DETAILS_NOT_SET = 0,
    VULNERABILITY_DETAILS = 8,
    BUILD_DETAILS = 7,
    DERIVED_IMAGE = 11,
    INSTALLATION = 12,
    DEPLOYMENT = 14,
    DISCOVERED = 15,
    ATTESTATION = 16,
  }
}

export class Resource extends jspb.Message {
  getName(): string;
  setName(value: string): Resource;

  getUri(): string;
  setUri(value: string): Resource;

  getContentHash(): google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash | undefined;
  setContentHash(value?: google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash): Resource;
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
    contentHash?: google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash.AsObject,
  }
}

export class Note extends jspb.Message {
  getName(): string;
  setName(value: string): Note;

  getShortDescription(): string;
  setShortDescription(value: string): Note;

  getLongDescription(): string;
  setLongDescription(value: string): Note;

  getKind(): Note.Kind;
  setKind(value: Note.Kind): Note;

  getVulnerabilityType(): google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType | undefined;
  setVulnerabilityType(value?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType): Note;
  hasVulnerabilityType(): boolean;
  clearVulnerabilityType(): Note;

  getBuildType(): BuildType | undefined;
  setBuildType(value?: BuildType): Note;
  hasBuildType(): boolean;
  clearBuildType(): Note;

  getBaseImage(): google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis | undefined;
  setBaseImage(value?: google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis): Note;
  hasBaseImage(): boolean;
  clearBaseImage(): Note;

  getPackage(): google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package | undefined;
  setPackage(value?: google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package): Note;
  hasPackage(): boolean;
  clearPackage(): Note;

  getDeployable(): Deployable | undefined;
  setDeployable(value?: Deployable): Note;
  hasDeployable(): boolean;
  clearDeployable(): Note;

  getDiscovery(): Discovery | undefined;
  setDiscovery(value?: Discovery): Note;
  hasDiscovery(): boolean;
  clearDiscovery(): Note;

  getAttestationAuthority(): AttestationAuthority | undefined;
  setAttestationAuthority(value?: AttestationAuthority): Note;
  hasAttestationAuthority(): boolean;
  clearAttestationAuthority(): Note;

  getRelatedUrlList(): Array<Note.RelatedUrl>;
  setRelatedUrlList(value: Array<Note.RelatedUrl>): Note;
  clearRelatedUrlList(): Note;
  addRelatedUrl(value?: Note.RelatedUrl, index?: number): Note.RelatedUrl;

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

  getNoteTypeCase(): Note.NoteTypeCase;

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
    kind: Note.Kind,
    vulnerabilityType?: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.AsObject,
    buildType?: BuildType.AsObject,
    baseImage?: google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis.AsObject,
    pb_package?: google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package.AsObject,
    deployable?: Deployable.AsObject,
    discovery?: Discovery.AsObject,
    attestationAuthority?: AttestationAuthority.AsObject,
    relatedUrlList: Array<Note.RelatedUrl.AsObject>,
    expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class RelatedUrl extends jspb.Message {
    getUrl(): string;
    setUrl(value: string): RelatedUrl;

    getLabel(): string;
    setLabel(value: string): RelatedUrl;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelatedUrl.AsObject;
    static toObject(includeInstance: boolean, msg: RelatedUrl): RelatedUrl.AsObject;
    static serializeBinaryToWriter(message: RelatedUrl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelatedUrl;
    static deserializeBinaryFromReader(message: RelatedUrl, reader: jspb.BinaryReader): RelatedUrl;
  }

  export namespace RelatedUrl {
    export type AsObject = {
      url: string,
      label: string,
    }
  }


  export enum Kind { 
    KIND_UNSPECIFIED = 0,
    PACKAGE_VULNERABILITY = 2,
    BUILD_DETAILS = 3,
    IMAGE_BASIS = 4,
    PACKAGE_MANAGER = 5,
    DEPLOYABLE = 6,
    DISCOVERY = 7,
    ATTESTATION_AUTHORITY = 8,
  }

  export enum NoteTypeCase { 
    NOTE_TYPE_NOT_SET = 0,
    VULNERABILITY_TYPE = 6,
    BUILD_TYPE = 8,
    BASE_IMAGE = 13,
    PACKAGE = 14,
    DEPLOYABLE = 17,
    DISCOVERY = 18,
    ATTESTATION_AUTHORITY = 19,
  }
}

export class Deployable extends jspb.Message {
  getResourceUriList(): Array<string>;
  setResourceUriList(value: Array<string>): Deployable;
  clearResourceUriList(): Deployable;
  addResourceUri(value: string, index?: number): Deployable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployable.AsObject;
  static toObject(includeInstance: boolean, msg: Deployable): Deployable.AsObject;
  static serializeBinaryToWriter(message: Deployable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployable;
  static deserializeBinaryFromReader(message: Deployable, reader: jspb.BinaryReader): Deployable;
}

export namespace Deployable {
  export type AsObject = {
    resourceUriList: Array<string>,
  }

  export class Deployment extends jspb.Message {
    getUserEmail(): string;
    setUserEmail(value: string): Deployment;

    getDeployTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeployTime(value?: google_protobuf_timestamp_pb.Timestamp): Deployment;
    hasDeployTime(): boolean;
    clearDeployTime(): Deployment;

    getUndeployTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUndeployTime(value?: google_protobuf_timestamp_pb.Timestamp): Deployment;
    hasUndeployTime(): boolean;
    clearUndeployTime(): Deployment;

    getConfig(): string;
    setConfig(value: string): Deployment;

    getAddress(): string;
    setAddress(value: string): Deployment;

    getResourceUriList(): Array<string>;
    setResourceUriList(value: Array<string>): Deployment;
    clearResourceUriList(): Deployment;
    addResourceUri(value: string, index?: number): Deployment;

    getPlatform(): Deployable.Deployment.Platform;
    setPlatform(value: Deployable.Deployment.Platform): Deployment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Deployment.AsObject;
    static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
    static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Deployment;
    static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
  }

  export namespace Deployment {
    export type AsObject = {
      userEmail: string,
      deployTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      undeployTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      config: string,
      address: string,
      resourceUriList: Array<string>,
      platform: Deployable.Deployment.Platform,
    }

    export enum Platform { 
      PLATFORM_UNSPECIFIED = 0,
      GKE = 1,
      FLEX = 2,
      CUSTOM = 3,
    }
  }

}

export class Discovery extends jspb.Message {
  getAnalysisKind(): Note.Kind;
  setAnalysisKind(value: Note.Kind): Discovery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Discovery.AsObject;
  static toObject(includeInstance: boolean, msg: Discovery): Discovery.AsObject;
  static serializeBinaryToWriter(message: Discovery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discovery;
  static deserializeBinaryFromReader(message: Discovery, reader: jspb.BinaryReader): Discovery;
}

export namespace Discovery {
  export type AsObject = {
    analysisKind: Note.Kind,
  }

  export class Discovered extends jspb.Message {
    getOperation(): google_longrunning_operations_pb.Operation | undefined;
    setOperation(value?: google_longrunning_operations_pb.Operation): Discovered;
    hasOperation(): boolean;
    clearOperation(): Discovered;

    getAnalysisStatus(): Discovery.Discovered.AnalysisStatus;
    setAnalysisStatus(value: Discovery.Discovered.AnalysisStatus): Discovered;

    getAnalysisStatusError(): google_rpc_status_pb.Status | undefined;
    setAnalysisStatusError(value?: google_rpc_status_pb.Status): Discovered;
    hasAnalysisStatusError(): boolean;
    clearAnalysisStatusError(): Discovered;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Discovered.AsObject;
    static toObject(includeInstance: boolean, msg: Discovered): Discovered.AsObject;
    static serializeBinaryToWriter(message: Discovered, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Discovered;
    static deserializeBinaryFromReader(message: Discovered, reader: jspb.BinaryReader): Discovered;
  }

  export namespace Discovered {
    export type AsObject = {
      operation?: google_longrunning_operations_pb.Operation.AsObject,
      analysisStatus: Discovery.Discovered.AnalysisStatus,
      analysisStatusError?: google_rpc_status_pb.Status.AsObject,
    }

    export enum AnalysisStatus { 
      ANALYSIS_STATUS_UNSPECIFIED = 0,
      PENDING = 1,
      SCANNING = 2,
      FINISHED_SUCCESS = 3,
      FINISHED_FAILED = 4,
      UNSUPPORTED_RESOURCE = 5,
    }
  }

}

export class BuildType extends jspb.Message {
  getBuilderVersion(): string;
  setBuilderVersion(value: string): BuildType;

  getSignature(): BuildSignature | undefined;
  setSignature(value?: BuildSignature): BuildType;
  hasSignature(): boolean;
  clearSignature(): BuildType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildType.AsObject;
  static toObject(includeInstance: boolean, msg: BuildType): BuildType.AsObject;
  static serializeBinaryToWriter(message: BuildType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildType;
  static deserializeBinaryFromReader(message: BuildType, reader: jspb.BinaryReader): BuildType;
}

export namespace BuildType {
  export type AsObject = {
    builderVersion: string,
    signature?: BuildSignature.AsObject,
  }
}

export class BuildSignature extends jspb.Message {
  getPublicKey(): string;
  setPublicKey(value: string): BuildSignature;

  getSignature(): string;
  setSignature(value: string): BuildSignature;

  getKeyId(): string;
  setKeyId(value: string): BuildSignature;

  getKeyType(): BuildSignature.KeyType;
  setKeyType(value: BuildSignature.KeyType): BuildSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildSignature.AsObject;
  static toObject(includeInstance: boolean, msg: BuildSignature): BuildSignature.AsObject;
  static serializeBinaryToWriter(message: BuildSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildSignature;
  static deserializeBinaryFromReader(message: BuildSignature, reader: jspb.BinaryReader): BuildSignature;
}

export namespace BuildSignature {
  export type AsObject = {
    publicKey: string,
    signature: string,
    keyId: string,
    keyType: BuildSignature.KeyType,
  }

  export enum KeyType { 
    KEY_TYPE_UNSPECIFIED = 0,
    PGP_ASCII_ARMORED = 1,
    PKIX_PEM = 2,
  }
}

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

export class AttestationAuthority extends jspb.Message {
  getHint(): AttestationAuthority.AttestationAuthorityHint | undefined;
  setHint(value?: AttestationAuthority.AttestationAuthorityHint): AttestationAuthority;
  hasHint(): boolean;
  clearHint(): AttestationAuthority;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttestationAuthority.AsObject;
  static toObject(includeInstance: boolean, msg: AttestationAuthority): AttestationAuthority.AsObject;
  static serializeBinaryToWriter(message: AttestationAuthority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttestationAuthority;
  static deserializeBinaryFromReader(message: AttestationAuthority, reader: jspb.BinaryReader): AttestationAuthority;
}

export namespace AttestationAuthority {
  export type AsObject = {
    hint?: AttestationAuthority.AttestationAuthorityHint.AsObject,
  }

  export class AttestationAuthorityHint extends jspb.Message {
    getHumanReadableName(): string;
    setHumanReadableName(value: string): AttestationAuthorityHint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttestationAuthorityHint.AsObject;
    static toObject(includeInstance: boolean, msg: AttestationAuthorityHint): AttestationAuthorityHint.AsObject;
    static serializeBinaryToWriter(message: AttestationAuthorityHint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttestationAuthorityHint;
    static deserializeBinaryFromReader(message: AttestationAuthorityHint, reader: jspb.BinaryReader): AttestationAuthorityHint;
  }

  export namespace AttestationAuthorityHint {
    export type AsObject = {
      humanReadableName: string,
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

}

export class BuildDetails extends jspb.Message {
  getProvenance(): google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance | undefined;
  setProvenance(value?: google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance): BuildDetails;
  hasProvenance(): boolean;
  clearProvenance(): BuildDetails;

  getProvenanceBytes(): string;
  setProvenanceBytes(value: string): BuildDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildDetails.AsObject;
  static toObject(includeInstance: boolean, msg: BuildDetails): BuildDetails.AsObject;
  static serializeBinaryToWriter(message: BuildDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildDetails;
  static deserializeBinaryFromReader(message: BuildDetails, reader: jspb.BinaryReader): BuildDetails;
}

export namespace BuildDetails {
  export type AsObject = {
    provenance?: google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance.AsObject,
    provenanceBytes: string,
  }
}

export class ScanConfig extends jspb.Message {
  getName(): string;
  setName(value: string): ScanConfig;

  getDescription(): string;
  setDescription(value: string): ScanConfig;

  getEnabled(): boolean;
  setEnabled(value: boolean): ScanConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ScanConfig): ScanConfig.AsObject;
  static serializeBinaryToWriter(message: ScanConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanConfig;
  static deserializeBinaryFromReader(message: ScanConfig, reader: jspb.BinaryReader): ScanConfig;
}

export namespace ScanConfig {
  export type AsObject = {
    name: string,
    description: string,
    enabled: boolean,
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
  getName(): string;
  setName(value: string): ListOccurrencesRequest;

  getParent(): string;
  setParent(value: string): ListOccurrencesRequest;

  getFilter(): string;
  setFilter(value: string): ListOccurrencesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListOccurrencesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListOccurrencesRequest;

  getKind(): Note.Kind;
  setKind(value: Note.Kind): ListOccurrencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOccurrencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOccurrencesRequest): ListOccurrencesRequest.AsObject;
  static serializeBinaryToWriter(message: ListOccurrencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOccurrencesRequest;
  static deserializeBinaryFromReader(message: ListOccurrencesRequest, reader: jspb.BinaryReader): ListOccurrencesRequest;
}

export namespace ListOccurrencesRequest {
  export type AsObject = {
    name: string,
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
    kind: Note.Kind,
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
  getName(): string;
  setName(value: string): CreateOccurrenceRequest;

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
    name: string,
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
  getName(): string;
  setName(value: string): ListNotesRequest;

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
    name: string,
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
  getName(): string;
  setName(value: string): CreateNoteRequest;

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
    name: string,
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

export class CreateOperationRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateOperationRequest;

  getOperationId(): string;
  setOperationId(value: string): CreateOperationRequest;

  getOperation(): google_longrunning_operations_pb.Operation | undefined;
  setOperation(value?: google_longrunning_operations_pb.Operation): CreateOperationRequest;
  hasOperation(): boolean;
  clearOperation(): CreateOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOperationRequest): CreateOperationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOperationRequest;
  static deserializeBinaryFromReader(message: CreateOperationRequest, reader: jspb.BinaryReader): CreateOperationRequest;
}

export namespace CreateOperationRequest {
  export type AsObject = {
    parent: string,
    operationId: string,
    operation?: google_longrunning_operations_pb.Operation.AsObject,
  }
}

export class UpdateOperationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateOperationRequest;

  getOperation(): google_longrunning_operations_pb.Operation | undefined;
  setOperation(value?: google_longrunning_operations_pb.Operation): UpdateOperationRequest;
  hasOperation(): boolean;
  clearOperation(): UpdateOperationRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateOperationRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOperationRequest): UpdateOperationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOperationRequest;
  static deserializeBinaryFromReader(message: UpdateOperationRequest, reader: jspb.BinaryReader): UpdateOperationRequest;
}

export namespace UpdateOperationRequest {
  export type AsObject = {
    name: string,
    operation?: google_longrunning_operations_pb.Operation.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class OperationMetadata extends jspb.Message {
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
  hasCreateTime(): boolean;
  clearCreateTime(): OperationMetadata;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
  hasEndTime(): boolean;
  clearEndTime(): OperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
  static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadata;
  static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
  export type AsObject = {
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetVulnzOccurrencesSummaryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): GetVulnzOccurrencesSummaryRequest;

  getFilter(): string;
  setFilter(value: string): GetVulnzOccurrencesSummaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVulnzOccurrencesSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVulnzOccurrencesSummaryRequest): GetVulnzOccurrencesSummaryRequest.AsObject;
  static serializeBinaryToWriter(message: GetVulnzOccurrencesSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVulnzOccurrencesSummaryRequest;
  static deserializeBinaryFromReader(message: GetVulnzOccurrencesSummaryRequest, reader: jspb.BinaryReader): GetVulnzOccurrencesSummaryRequest;
}

export namespace GetVulnzOccurrencesSummaryRequest {
  export type AsObject = {
    parent: string,
    filter: string,
  }
}

export class GetVulnzOccurrencesSummaryResponse extends jspb.Message {
  getCountsList(): Array<GetVulnzOccurrencesSummaryResponse.SeverityCount>;
  setCountsList(value: Array<GetVulnzOccurrencesSummaryResponse.SeverityCount>): GetVulnzOccurrencesSummaryResponse;
  clearCountsList(): GetVulnzOccurrencesSummaryResponse;
  addCounts(value?: GetVulnzOccurrencesSummaryResponse.SeverityCount, index?: number): GetVulnzOccurrencesSummaryResponse.SeverityCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVulnzOccurrencesSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVulnzOccurrencesSummaryResponse): GetVulnzOccurrencesSummaryResponse.AsObject;
  static serializeBinaryToWriter(message: GetVulnzOccurrencesSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVulnzOccurrencesSummaryResponse;
  static deserializeBinaryFromReader(message: GetVulnzOccurrencesSummaryResponse, reader: jspb.BinaryReader): GetVulnzOccurrencesSummaryResponse;
}

export namespace GetVulnzOccurrencesSummaryResponse {
  export type AsObject = {
    countsList: Array<GetVulnzOccurrencesSummaryResponse.SeverityCount.AsObject>,
  }

  export class SeverityCount extends jspb.Message {
    getSeverity(): google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Severity;
    setSeverity(value: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Severity): SeverityCount;

    getCount(): number;
    setCount(value: number): SeverityCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SeverityCount.AsObject;
    static toObject(includeInstance: boolean, msg: SeverityCount): SeverityCount.AsObject;
    static serializeBinaryToWriter(message: SeverityCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SeverityCount;
    static deserializeBinaryFromReader(message: SeverityCount, reader: jspb.BinaryReader): SeverityCount;
  }

  export namespace SeverityCount {
    export type AsObject = {
      severity: google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.Severity,
      count: number,
    }
  }

}

export class GetScanConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetScanConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScanConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScanConfigRequest): GetScanConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetScanConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScanConfigRequest;
  static deserializeBinaryFromReader(message: GetScanConfigRequest, reader: jspb.BinaryReader): GetScanConfigRequest;
}

export namespace GetScanConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListScanConfigsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListScanConfigsRequest;

  getFilter(): string;
  setFilter(value: string): ListScanConfigsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListScanConfigsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListScanConfigsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScanConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListScanConfigsRequest): ListScanConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: ListScanConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScanConfigsRequest;
  static deserializeBinaryFromReader(message: ListScanConfigsRequest, reader: jspb.BinaryReader): ListScanConfigsRequest;
}

export namespace ListScanConfigsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListScanConfigsResponse extends jspb.Message {
  getScanConfigsList(): Array<ScanConfig>;
  setScanConfigsList(value: Array<ScanConfig>): ListScanConfigsResponse;
  clearScanConfigsList(): ListScanConfigsResponse;
  addScanConfigs(value?: ScanConfig, index?: number): ScanConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListScanConfigsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScanConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListScanConfigsResponse): ListScanConfigsResponse.AsObject;
  static serializeBinaryToWriter(message: ListScanConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScanConfigsResponse;
  static deserializeBinaryFromReader(message: ListScanConfigsResponse, reader: jspb.BinaryReader): ListScanConfigsResponse;
}

export namespace ListScanConfigsResponse {
  export type AsObject = {
    scanConfigsList: Array<ScanConfig.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateScanConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateScanConfigRequest;

  getScanConfig(): ScanConfig | undefined;
  setScanConfig(value?: ScanConfig): UpdateScanConfigRequest;
  hasScanConfig(): boolean;
  clearScanConfig(): UpdateScanConfigRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateScanConfigRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateScanConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScanConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScanConfigRequest): UpdateScanConfigRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateScanConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScanConfigRequest;
  static deserializeBinaryFromReader(message: UpdateScanConfigRequest, reader: jspb.BinaryReader): UpdateScanConfigRequest;
}

export namespace UpdateScanConfigRequest {
  export type AsObject = {
    name: string,
    scanConfig?: ScanConfig.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

