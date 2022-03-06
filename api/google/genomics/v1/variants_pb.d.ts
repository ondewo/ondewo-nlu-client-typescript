import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class VariantSetMetadata extends jspb.Message {
  getKey(): string;
  setKey(value: string): VariantSetMetadata;

  getValue(): string;
  setValue(value: string): VariantSetMetadata;

  getId(): string;
  setId(value: string): VariantSetMetadata;

  getType(): VariantSetMetadata.Type;
  setType(value: VariantSetMetadata.Type): VariantSetMetadata;

  getNumber(): string;
  setNumber(value: string): VariantSetMetadata;

  getDescription(): string;
  setDescription(value: string): VariantSetMetadata;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): VariantSetMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariantSetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: VariantSetMetadata): VariantSetMetadata.AsObject;
  static serializeBinaryToWriter(message: VariantSetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariantSetMetadata;
  static deserializeBinaryFromReader(message: VariantSetMetadata, reader: jspb.BinaryReader): VariantSetMetadata;
}

export namespace VariantSetMetadata {
  export type AsObject = {
    key: string,
    value: string,
    id: string,
    type: VariantSetMetadata.Type,
    number: string,
    description: string,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    INTEGER = 1,
    FLOAT = 2,
    FLAG = 3,
    CHARACTER = 4,
    STRING = 5,
  }
}

export class VariantSet extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): VariantSet;

  getId(): string;
  setId(value: string): VariantSet;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): VariantSet;

  getReferenceBoundsList(): Array<ReferenceBound>;
  setReferenceBoundsList(value: Array<ReferenceBound>): VariantSet;
  clearReferenceBoundsList(): VariantSet;
  addReferenceBounds(value?: ReferenceBound, index?: number): ReferenceBound;

  getMetadataList(): Array<VariantSetMetadata>;
  setMetadataList(value: Array<VariantSetMetadata>): VariantSet;
  clearMetadataList(): VariantSet;
  addMetadata(value?: VariantSetMetadata, index?: number): VariantSetMetadata;

  getName(): string;
  setName(value: string): VariantSet;

  getDescription(): string;
  setDescription(value: string): VariantSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariantSet.AsObject;
  static toObject(includeInstance: boolean, msg: VariantSet): VariantSet.AsObject;
  static serializeBinaryToWriter(message: VariantSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariantSet;
  static deserializeBinaryFromReader(message: VariantSet, reader: jspb.BinaryReader): VariantSet;
}

export namespace VariantSet {
  export type AsObject = {
    datasetId: string,
    id: string,
    referenceSetId: string,
    referenceBoundsList: Array<ReferenceBound.AsObject>,
    metadataList: Array<VariantSetMetadata.AsObject>,
    name: string,
    description: string,
  }
}

export class Variant extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): Variant;

  getId(): string;
  setId(value: string): Variant;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): Variant;
  clearNamesList(): Variant;
  addNames(value: string, index?: number): Variant;

  getCreated(): number;
  setCreated(value: number): Variant;

  getReferenceName(): string;
  setReferenceName(value: string): Variant;

  getStart(): number;
  setStart(value: number): Variant;

  getEnd(): number;
  setEnd(value: number): Variant;

  getReferenceBases(): string;
  setReferenceBases(value: string): Variant;

  getAlternateBasesList(): Array<string>;
  setAlternateBasesList(value: Array<string>): Variant;
  clearAlternateBasesList(): Variant;
  addAlternateBases(value: string, index?: number): Variant;

  getQuality(): number;
  setQuality(value: number): Variant;

  getFilterList(): Array<string>;
  setFilterList(value: Array<string>): Variant;
  clearFilterList(): Variant;
  addFilter(value: string, index?: number): Variant;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): Variant;

  getCallsList(): Array<VariantCall>;
  setCallsList(value: Array<VariantCall>): Variant;
  clearCallsList(): Variant;
  addCalls(value?: VariantCall, index?: number): VariantCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variant.AsObject;
  static toObject(includeInstance: boolean, msg: Variant): Variant.AsObject;
  static serializeBinaryToWriter(message: Variant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variant;
  static deserializeBinaryFromReader(message: Variant, reader: jspb.BinaryReader): Variant;
}

export namespace Variant {
  export type AsObject = {
    variantSetId: string,
    id: string,
    namesList: Array<string>,
    created: number,
    referenceName: string,
    start: number,
    end: number,
    referenceBases: string,
    alternateBasesList: Array<string>,
    quality: number,
    filterList: Array<string>,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
    callsList: Array<VariantCall.AsObject>,
  }
}

export class VariantCall extends jspb.Message {
  getCallSetId(): string;
  setCallSetId(value: string): VariantCall;

  getCallSetName(): string;
  setCallSetName(value: string): VariantCall;

  getGenotypeList(): Array<number>;
  setGenotypeList(value: Array<number>): VariantCall;
  clearGenotypeList(): VariantCall;
  addGenotype(value: number, index?: number): VariantCall;

  getPhaseset(): string;
  setPhaseset(value: string): VariantCall;

  getGenotypeLikelihoodList(): Array<number>;
  setGenotypeLikelihoodList(value: Array<number>): VariantCall;
  clearGenotypeLikelihoodList(): VariantCall;
  addGenotypeLikelihood(value: number, index?: number): VariantCall;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): VariantCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariantCall.AsObject;
  static toObject(includeInstance: boolean, msg: VariantCall): VariantCall.AsObject;
  static serializeBinaryToWriter(message: VariantCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariantCall;
  static deserializeBinaryFromReader(message: VariantCall, reader: jspb.BinaryReader): VariantCall;
}

export namespace VariantCall {
  export type AsObject = {
    callSetId: string,
    callSetName: string,
    genotypeList: Array<number>,
    phaseset: string,
    genotypeLikelihoodList: Array<number>,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }
}

export class CallSet extends jspb.Message {
  getId(): string;
  setId(value: string): CallSet;

  getName(): string;
  setName(value: string): CallSet;

  getSampleId(): string;
  setSampleId(value: string): CallSet;

  getVariantSetIdsList(): Array<string>;
  setVariantSetIdsList(value: Array<string>): CallSet;
  clearVariantSetIdsList(): CallSet;
  addVariantSetIds(value: string, index?: number): CallSet;

  getCreated(): number;
  setCreated(value: number): CallSet;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): CallSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallSet.AsObject;
  static toObject(includeInstance: boolean, msg: CallSet): CallSet.AsObject;
  static serializeBinaryToWriter(message: CallSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallSet;
  static deserializeBinaryFromReader(message: CallSet, reader: jspb.BinaryReader): CallSet;
}

export namespace CallSet {
  export type AsObject = {
    id: string,
    name: string,
    sampleId: string,
    variantSetIdsList: Array<string>,
    created: number,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }
}

export class ReferenceBound extends jspb.Message {
  getReferenceName(): string;
  setReferenceName(value: string): ReferenceBound;

  getUpperBound(): number;
  setUpperBound(value: number): ReferenceBound;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceBound.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceBound): ReferenceBound.AsObject;
  static serializeBinaryToWriter(message: ReferenceBound, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceBound;
  static deserializeBinaryFromReader(message: ReferenceBound, reader: jspb.BinaryReader): ReferenceBound;
}

export namespace ReferenceBound {
  export type AsObject = {
    referenceName: string,
    upperBound: number,
  }
}

export class ImportVariantsRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): ImportVariantsRequest;

  getSourceUrisList(): Array<string>;
  setSourceUrisList(value: Array<string>): ImportVariantsRequest;
  clearSourceUrisList(): ImportVariantsRequest;
  addSourceUris(value: string, index?: number): ImportVariantsRequest;

  getFormat(): ImportVariantsRequest.Format;
  setFormat(value: ImportVariantsRequest.Format): ImportVariantsRequest;

  getNormalizeReferenceNames(): boolean;
  setNormalizeReferenceNames(value: boolean): ImportVariantsRequest;

  getInfoMergeConfigMap(): jspb.Map<string, InfoMergeOperation>;
  clearInfoMergeConfigMap(): ImportVariantsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportVariantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportVariantsRequest): ImportVariantsRequest.AsObject;
  static serializeBinaryToWriter(message: ImportVariantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportVariantsRequest;
  static deserializeBinaryFromReader(message: ImportVariantsRequest, reader: jspb.BinaryReader): ImportVariantsRequest;
}

export namespace ImportVariantsRequest {
  export type AsObject = {
    variantSetId: string,
    sourceUrisList: Array<string>,
    format: ImportVariantsRequest.Format,
    normalizeReferenceNames: boolean,
    infoMergeConfigMap: Array<[string, InfoMergeOperation]>,
  }

  export enum Format { 
    FORMAT_UNSPECIFIED = 0,
    FORMAT_VCF = 1,
    FORMAT_COMPLETE_GENOMICS = 2,
  }
}

export class ImportVariantsResponse extends jspb.Message {
  getCallSetIdsList(): Array<string>;
  setCallSetIdsList(value: Array<string>): ImportVariantsResponse;
  clearCallSetIdsList(): ImportVariantsResponse;
  addCallSetIds(value: string, index?: number): ImportVariantsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportVariantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportVariantsResponse): ImportVariantsResponse.AsObject;
  static serializeBinaryToWriter(message: ImportVariantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportVariantsResponse;
  static deserializeBinaryFromReader(message: ImportVariantsResponse, reader: jspb.BinaryReader): ImportVariantsResponse;
}

export namespace ImportVariantsResponse {
  export type AsObject = {
    callSetIdsList: Array<string>,
  }
}

export class CreateVariantSetRequest extends jspb.Message {
  getVariantSet(): VariantSet | undefined;
  setVariantSet(value?: VariantSet): CreateVariantSetRequest;
  hasVariantSet(): boolean;
  clearVariantSet(): CreateVariantSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVariantSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVariantSetRequest): CreateVariantSetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVariantSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVariantSetRequest;
  static deserializeBinaryFromReader(message: CreateVariantSetRequest, reader: jspb.BinaryReader): CreateVariantSetRequest;
}

export namespace CreateVariantSetRequest {
  export type AsObject = {
    variantSet?: VariantSet.AsObject,
  }
}

export class ExportVariantSetRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): ExportVariantSetRequest;

  getCallSetIdsList(): Array<string>;
  setCallSetIdsList(value: Array<string>): ExportVariantSetRequest;
  clearCallSetIdsList(): ExportVariantSetRequest;
  addCallSetIds(value: string, index?: number): ExportVariantSetRequest;

  getProjectId(): string;
  setProjectId(value: string): ExportVariantSetRequest;

  getFormat(): ExportVariantSetRequest.Format;
  setFormat(value: ExportVariantSetRequest.Format): ExportVariantSetRequest;

  getBigqueryDataset(): string;
  setBigqueryDataset(value: string): ExportVariantSetRequest;

  getBigqueryTable(): string;
  setBigqueryTable(value: string): ExportVariantSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportVariantSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportVariantSetRequest): ExportVariantSetRequest.AsObject;
  static serializeBinaryToWriter(message: ExportVariantSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportVariantSetRequest;
  static deserializeBinaryFromReader(message: ExportVariantSetRequest, reader: jspb.BinaryReader): ExportVariantSetRequest;
}

export namespace ExportVariantSetRequest {
  export type AsObject = {
    variantSetId: string,
    callSetIdsList: Array<string>,
    projectId: string,
    format: ExportVariantSetRequest.Format,
    bigqueryDataset: string,
    bigqueryTable: string,
  }

  export enum Format { 
    FORMAT_UNSPECIFIED = 0,
    FORMAT_BIGQUERY = 1,
  }
}

export class GetVariantSetRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): GetVariantSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVariantSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVariantSetRequest): GetVariantSetRequest.AsObject;
  static serializeBinaryToWriter(message: GetVariantSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVariantSetRequest;
  static deserializeBinaryFromReader(message: GetVariantSetRequest, reader: jspb.BinaryReader): GetVariantSetRequest;
}

export namespace GetVariantSetRequest {
  export type AsObject = {
    variantSetId: string,
  }
}

export class SearchVariantSetsRequest extends jspb.Message {
  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): SearchVariantSetsRequest;
  clearDatasetIdsList(): SearchVariantSetsRequest;
  addDatasetIds(value: string, index?: number): SearchVariantSetsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchVariantSetsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchVariantSetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVariantSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVariantSetsRequest): SearchVariantSetsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchVariantSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVariantSetsRequest;
  static deserializeBinaryFromReader(message: SearchVariantSetsRequest, reader: jspb.BinaryReader): SearchVariantSetsRequest;
}

export namespace SearchVariantSetsRequest {
  export type AsObject = {
    datasetIdsList: Array<string>,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchVariantSetsResponse extends jspb.Message {
  getVariantSetsList(): Array<VariantSet>;
  setVariantSetsList(value: Array<VariantSet>): SearchVariantSetsResponse;
  clearVariantSetsList(): SearchVariantSetsResponse;
  addVariantSets(value?: VariantSet, index?: number): VariantSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchVariantSetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVariantSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVariantSetsResponse): SearchVariantSetsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchVariantSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVariantSetsResponse;
  static deserializeBinaryFromReader(message: SearchVariantSetsResponse, reader: jspb.BinaryReader): SearchVariantSetsResponse;
}

export namespace SearchVariantSetsResponse {
  export type AsObject = {
    variantSetsList: Array<VariantSet.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteVariantSetRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): DeleteVariantSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVariantSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVariantSetRequest): DeleteVariantSetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVariantSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVariantSetRequest;
  static deserializeBinaryFromReader(message: DeleteVariantSetRequest, reader: jspb.BinaryReader): DeleteVariantSetRequest;
}

export namespace DeleteVariantSetRequest {
  export type AsObject = {
    variantSetId: string,
  }
}

export class UpdateVariantSetRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): UpdateVariantSetRequest;

  getVariantSet(): VariantSet | undefined;
  setVariantSet(value?: VariantSet): UpdateVariantSetRequest;
  hasVariantSet(): boolean;
  clearVariantSet(): UpdateVariantSetRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateVariantSetRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateVariantSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVariantSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVariantSetRequest): UpdateVariantSetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVariantSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVariantSetRequest;
  static deserializeBinaryFromReader(message: UpdateVariantSetRequest, reader: jspb.BinaryReader): UpdateVariantSetRequest;
}

export namespace UpdateVariantSetRequest {
  export type AsObject = {
    variantSetId: string,
    variantSet?: VariantSet.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class SearchVariantsRequest extends jspb.Message {
  getVariantSetIdsList(): Array<string>;
  setVariantSetIdsList(value: Array<string>): SearchVariantsRequest;
  clearVariantSetIdsList(): SearchVariantsRequest;
  addVariantSetIds(value: string, index?: number): SearchVariantsRequest;

  getVariantName(): string;
  setVariantName(value: string): SearchVariantsRequest;

  getCallSetIdsList(): Array<string>;
  setCallSetIdsList(value: Array<string>): SearchVariantsRequest;
  clearCallSetIdsList(): SearchVariantsRequest;
  addCallSetIds(value: string, index?: number): SearchVariantsRequest;

  getReferenceName(): string;
  setReferenceName(value: string): SearchVariantsRequest;

  getStart(): number;
  setStart(value: number): SearchVariantsRequest;

  getEnd(): number;
  setEnd(value: number): SearchVariantsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchVariantsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchVariantsRequest;

  getMaxCalls(): number;
  setMaxCalls(value: number): SearchVariantsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVariantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVariantsRequest): SearchVariantsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchVariantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVariantsRequest;
  static deserializeBinaryFromReader(message: SearchVariantsRequest, reader: jspb.BinaryReader): SearchVariantsRequest;
}

export namespace SearchVariantsRequest {
  export type AsObject = {
    variantSetIdsList: Array<string>,
    variantName: string,
    callSetIdsList: Array<string>,
    referenceName: string,
    start: number,
    end: number,
    pageToken: string,
    pageSize: number,
    maxCalls: number,
  }
}

export class SearchVariantsResponse extends jspb.Message {
  getVariantsList(): Array<Variant>;
  setVariantsList(value: Array<Variant>): SearchVariantsResponse;
  clearVariantsList(): SearchVariantsResponse;
  addVariants(value?: Variant, index?: number): Variant;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchVariantsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVariantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVariantsResponse): SearchVariantsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchVariantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVariantsResponse;
  static deserializeBinaryFromReader(message: SearchVariantsResponse, reader: jspb.BinaryReader): SearchVariantsResponse;
}

export namespace SearchVariantsResponse {
  export type AsObject = {
    variantsList: Array<Variant.AsObject>,
    nextPageToken: string,
  }
}

export class CreateVariantRequest extends jspb.Message {
  getVariant(): Variant | undefined;
  setVariant(value?: Variant): CreateVariantRequest;
  hasVariant(): boolean;
  clearVariant(): CreateVariantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVariantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVariantRequest): CreateVariantRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVariantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVariantRequest;
  static deserializeBinaryFromReader(message: CreateVariantRequest, reader: jspb.BinaryReader): CreateVariantRequest;
}

export namespace CreateVariantRequest {
  export type AsObject = {
    variant?: Variant.AsObject,
  }
}

export class UpdateVariantRequest extends jspb.Message {
  getVariantId(): string;
  setVariantId(value: string): UpdateVariantRequest;

  getVariant(): Variant | undefined;
  setVariant(value?: Variant): UpdateVariantRequest;
  hasVariant(): boolean;
  clearVariant(): UpdateVariantRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateVariantRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateVariantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVariantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVariantRequest): UpdateVariantRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVariantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVariantRequest;
  static deserializeBinaryFromReader(message: UpdateVariantRequest, reader: jspb.BinaryReader): UpdateVariantRequest;
}

export namespace UpdateVariantRequest {
  export type AsObject = {
    variantId: string,
    variant?: Variant.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteVariantRequest extends jspb.Message {
  getVariantId(): string;
  setVariantId(value: string): DeleteVariantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVariantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVariantRequest): DeleteVariantRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVariantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVariantRequest;
  static deserializeBinaryFromReader(message: DeleteVariantRequest, reader: jspb.BinaryReader): DeleteVariantRequest;
}

export namespace DeleteVariantRequest {
  export type AsObject = {
    variantId: string,
  }
}

export class GetVariantRequest extends jspb.Message {
  getVariantId(): string;
  setVariantId(value: string): GetVariantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVariantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVariantRequest): GetVariantRequest.AsObject;
  static serializeBinaryToWriter(message: GetVariantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVariantRequest;
  static deserializeBinaryFromReader(message: GetVariantRequest, reader: jspb.BinaryReader): GetVariantRequest;
}

export namespace GetVariantRequest {
  export type AsObject = {
    variantId: string,
  }
}

export class MergeVariantsRequest extends jspb.Message {
  getVariantSetId(): string;
  setVariantSetId(value: string): MergeVariantsRequest;

  getVariantsList(): Array<Variant>;
  setVariantsList(value: Array<Variant>): MergeVariantsRequest;
  clearVariantsList(): MergeVariantsRequest;
  addVariants(value?: Variant, index?: number): Variant;

  getInfoMergeConfigMap(): jspb.Map<string, InfoMergeOperation>;
  clearInfoMergeConfigMap(): MergeVariantsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeVariantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeVariantsRequest): MergeVariantsRequest.AsObject;
  static serializeBinaryToWriter(message: MergeVariantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeVariantsRequest;
  static deserializeBinaryFromReader(message: MergeVariantsRequest, reader: jspb.BinaryReader): MergeVariantsRequest;
}

export namespace MergeVariantsRequest {
  export type AsObject = {
    variantSetId: string,
    variantsList: Array<Variant.AsObject>,
    infoMergeConfigMap: Array<[string, InfoMergeOperation]>,
  }
}

export class SearchCallSetsRequest extends jspb.Message {
  getVariantSetIdsList(): Array<string>;
  setVariantSetIdsList(value: Array<string>): SearchCallSetsRequest;
  clearVariantSetIdsList(): SearchCallSetsRequest;
  addVariantSetIds(value: string, index?: number): SearchCallSetsRequest;

  getName(): string;
  setName(value: string): SearchCallSetsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchCallSetsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchCallSetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCallSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCallSetsRequest): SearchCallSetsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchCallSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCallSetsRequest;
  static deserializeBinaryFromReader(message: SearchCallSetsRequest, reader: jspb.BinaryReader): SearchCallSetsRequest;
}

export namespace SearchCallSetsRequest {
  export type AsObject = {
    variantSetIdsList: Array<string>,
    name: string,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchCallSetsResponse extends jspb.Message {
  getCallSetsList(): Array<CallSet>;
  setCallSetsList(value: Array<CallSet>): SearchCallSetsResponse;
  clearCallSetsList(): SearchCallSetsResponse;
  addCallSets(value?: CallSet, index?: number): CallSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchCallSetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCallSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCallSetsResponse): SearchCallSetsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchCallSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCallSetsResponse;
  static deserializeBinaryFromReader(message: SearchCallSetsResponse, reader: jspb.BinaryReader): SearchCallSetsResponse;
}

export namespace SearchCallSetsResponse {
  export type AsObject = {
    callSetsList: Array<CallSet.AsObject>,
    nextPageToken: string,
  }
}

export class CreateCallSetRequest extends jspb.Message {
  getCallSet(): CallSet | undefined;
  setCallSet(value?: CallSet): CreateCallSetRequest;
  hasCallSet(): boolean;
  clearCallSet(): CreateCallSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCallSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCallSetRequest): CreateCallSetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCallSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCallSetRequest;
  static deserializeBinaryFromReader(message: CreateCallSetRequest, reader: jspb.BinaryReader): CreateCallSetRequest;
}

export namespace CreateCallSetRequest {
  export type AsObject = {
    callSet?: CallSet.AsObject,
  }
}

export class UpdateCallSetRequest extends jspb.Message {
  getCallSetId(): string;
  setCallSetId(value: string): UpdateCallSetRequest;

  getCallSet(): CallSet | undefined;
  setCallSet(value?: CallSet): UpdateCallSetRequest;
  hasCallSet(): boolean;
  clearCallSet(): UpdateCallSetRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCallSetRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateCallSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCallSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCallSetRequest): UpdateCallSetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCallSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCallSetRequest;
  static deserializeBinaryFromReader(message: UpdateCallSetRequest, reader: jspb.BinaryReader): UpdateCallSetRequest;
}

export namespace UpdateCallSetRequest {
  export type AsObject = {
    callSetId: string,
    callSet?: CallSet.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteCallSetRequest extends jspb.Message {
  getCallSetId(): string;
  setCallSetId(value: string): DeleteCallSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCallSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCallSetRequest): DeleteCallSetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCallSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCallSetRequest;
  static deserializeBinaryFromReader(message: DeleteCallSetRequest, reader: jspb.BinaryReader): DeleteCallSetRequest;
}

export namespace DeleteCallSetRequest {
  export type AsObject = {
    callSetId: string,
  }
}

export class GetCallSetRequest extends jspb.Message {
  getCallSetId(): string;
  setCallSetId(value: string): GetCallSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallSetRequest): GetCallSetRequest.AsObject;
  static serializeBinaryToWriter(message: GetCallSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallSetRequest;
  static deserializeBinaryFromReader(message: GetCallSetRequest, reader: jspb.BinaryReader): GetCallSetRequest;
}

export namespace GetCallSetRequest {
  export type AsObject = {
    callSetId: string,
  }
}

export class StreamVariantsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): StreamVariantsRequest;

  getVariantSetId(): string;
  setVariantSetId(value: string): StreamVariantsRequest;

  getCallSetIdsList(): Array<string>;
  setCallSetIdsList(value: Array<string>): StreamVariantsRequest;
  clearCallSetIdsList(): StreamVariantsRequest;
  addCallSetIds(value: string, index?: number): StreamVariantsRequest;

  getReferenceName(): string;
  setReferenceName(value: string): StreamVariantsRequest;

  getStart(): number;
  setStart(value: number): StreamVariantsRequest;

  getEnd(): number;
  setEnd(value: number): StreamVariantsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamVariantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamVariantsRequest): StreamVariantsRequest.AsObject;
  static serializeBinaryToWriter(message: StreamVariantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamVariantsRequest;
  static deserializeBinaryFromReader(message: StreamVariantsRequest, reader: jspb.BinaryReader): StreamVariantsRequest;
}

export namespace StreamVariantsRequest {
  export type AsObject = {
    projectId: string,
    variantSetId: string,
    callSetIdsList: Array<string>,
    referenceName: string,
    start: number,
    end: number,
  }
}

export class StreamVariantsResponse extends jspb.Message {
  getVariantsList(): Array<Variant>;
  setVariantsList(value: Array<Variant>): StreamVariantsResponse;
  clearVariantsList(): StreamVariantsResponse;
  addVariants(value?: Variant, index?: number): Variant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamVariantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamVariantsResponse): StreamVariantsResponse.AsObject;
  static serializeBinaryToWriter(message: StreamVariantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamVariantsResponse;
  static deserializeBinaryFromReader(message: StreamVariantsResponse, reader: jspb.BinaryReader): StreamVariantsResponse;
}

export namespace StreamVariantsResponse {
  export type AsObject = {
    variantsList: Array<Variant.AsObject>,
  }
}

export enum InfoMergeOperation { 
  INFO_MERGE_OPERATION_UNSPECIFIED = 0,
  IGNORE_NEW = 1,
  MOVE_TO_CALLS = 2,
}
