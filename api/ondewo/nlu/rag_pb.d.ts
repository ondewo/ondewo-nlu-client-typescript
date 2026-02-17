import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"


export class RagPagination extends jspb.Message {
  getPage(): number;
  setPage(value: number): RagPagination;

  getPageSize(): number;
  setPageSize(value: number): RagPagination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagPagination.AsObject;
  static toObject(includeInstance: boolean, msg: RagPagination): RagPagination.AsObject;
  static serializeBinaryToWriter(message: RagPagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagPagination;
  static deserializeBinaryFromReader(message: RagPagination, reader: jspb.BinaryReader): RagPagination;
}

export namespace RagPagination {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class RagFileMetadata extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): RagFileMetadata;

  getContentType(): string;
  setContentType(value: string): RagFileMetadata;

  getSize(): number;
  setSize(value: number): RagFileMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagFileMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RagFileMetadata): RagFileMetadata.AsObject;
  static serializeBinaryToWriter(message: RagFileMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagFileMetadata;
  static deserializeBinaryFromReader(message: RagFileMetadata, reader: jspb.BinaryReader): RagFileMetadata;
}

export namespace RagFileMetadata {
  export type AsObject = {
    fileName: string,
    contentType: string,
    size: number,
  }
}

export class RagFileChunk extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): RagFileChunk;

  getMetadata(): RagFileMetadata | undefined;
  setMetadata(value?: RagFileMetadata): RagFileChunk;
  hasMetadata(): boolean;
  clearMetadata(): RagFileChunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagFileChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RagFileChunk): RagFileChunk.AsObject;
  static serializeBinaryToWriter(message: RagFileChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagFileChunk;
  static deserializeBinaryFromReader(message: RagFileChunk, reader: jspb.BinaryReader): RagFileChunk;
}

export namespace RagFileChunk {
  export type AsObject = {
    data: Uint8Array | string,
    metadata?: RagFileMetadata.AsObject,
  }
}

export class RagUploadChunk extends jspb.Message {
  getFileIndex(): number;
  setFileIndex(value: number): RagUploadChunk;
  hasFileIndex(): boolean;
  clearFileIndex(): RagUploadChunk;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): RagUploadChunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUploadChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RagUploadChunk): RagUploadChunk.AsObject;
  static serializeBinaryToWriter(message: RagUploadChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUploadChunk;
  static deserializeBinaryFromReader(message: RagUploadChunk, reader: jspb.BinaryReader): RagUploadChunk;
}

export namespace RagUploadChunk {
  export type AsObject = {
    fileIndex?: number,
    data: Uint8Array | string,
  }

  export enum FileIndexCase { 
    _FILE_INDEX_NOT_SET = 0,
    FILE_INDEX = 1,
  }
}

export class RagPartialSuccess extends jspb.Message {
  getSuccessCount(): number;
  setSuccessCount(value: number): RagPartialSuccess;

  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): RagPartialSuccess;
  clearErrorsList(): RagPartialSuccess;
  addErrors(value: string, index?: number): RagPartialSuccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagPartialSuccess.AsObject;
  static toObject(includeInstance: boolean, msg: RagPartialSuccess): RagPartialSuccess.AsObject;
  static serializeBinaryToWriter(message: RagPartialSuccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagPartialSuccess;
  static deserializeBinaryFromReader(message: RagPartialSuccess, reader: jspb.BinaryReader): RagPartialSuccess;
}

export namespace RagPartialSuccess {
  export type AsObject = {
    successCount: number,
    errorsList: Array<string>,
  }
}

export class RagDataset extends jspb.Message {
  getId(): string;
  setId(value: string): RagDataset;

  getName(): string;
  setName(value: string): RagDataset;

  getDescription(): string;
  setDescription(value: string): RagDataset;

  getAvatar(): string;
  setAvatar(value: string): RagDataset;

  getLanguage(): string;
  setLanguage(value: string): RagDataset;

  getPermission(): RagPermission;
  setPermission(value: RagPermission): RagDataset;

  getDocumentCount(): number;
  setDocumentCount(value: number): RagDataset;

  getChunkCount(): number;
  setChunkCount(value: number): RagDataset;

  getChunkMethod(): RagChunkMethod;
  setChunkMethod(value: RagChunkMethod): RagDataset;

  getParserConfig(): RagParserConfig | undefined;
  setParserConfig(value?: RagParserConfig): RagDataset;
  hasParserConfig(): boolean;
  clearParserConfig(): RagDataset;

  getEmbeddingModel(): string;
  setEmbeddingModel(value: string): RagDataset;

  getCreateTime(): number;
  setCreateTime(value: number): RagDataset;

  getCreateDate(): string;
  setCreateDate(value: string): RagDataset;

  getUpdateTime(): number;
  setUpdateTime(value: number): RagDataset;

  getUpdateDate(): string;
  setUpdateDate(value: string): RagDataset;

  getTokenCount(): number;
  setTokenCount(value: number): RagDataset;

  getSimilarityThreshold(): number;
  setSimilarityThreshold(value: number): RagDataset;

  getVectorSimilarityWeight(): number;
  setVectorSimilarityWeight(value: number): RagDataset;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagDataset;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDataset.AsObject;
  static toObject(includeInstance: boolean, msg: RagDataset): RagDataset.AsObject;
  static serializeBinaryToWriter(message: RagDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDataset;
  static deserializeBinaryFromReader(message: RagDataset, reader: jspb.BinaryReader): RagDataset;
}

export namespace RagDataset {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    avatar: string,
    language: string,
    permission: RagPermission,
    documentCount: number,
    chunkCount: number,
    chunkMethod: RagChunkMethod,
    parserConfig?: RagParserConfig.AsObject,
    embeddingModel: string,
    createTime: number,
    createDate: string,
    updateTime: number,
    updateDate: string,
    tokenCount: number,
    similarityThreshold: number,
    vectorSimilarityWeight: number,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagCreateDatasetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagCreateDatasetRequest;

  getName(): string;
  setName(value: string): RagCreateDatasetRequest;

  getDescription(): string;
  setDescription(value: string): RagCreateDatasetRequest;

  getAvatar(): string;
  setAvatar(value: string): RagCreateDatasetRequest;

  getPermission(): RagPermission;
  setPermission(value: RagPermission): RagCreateDatasetRequest;

  getChunkMethod(): RagChunkMethod;
  setChunkMethod(value: RagChunkMethod): RagCreateDatasetRequest;

  getParserConfig(): RagParserConfig | undefined;
  setParserConfig(value?: RagParserConfig): RagCreateDatasetRequest;
  hasParserConfig(): boolean;
  clearParserConfig(): RagCreateDatasetRequest;

  getEmbeddingModel(): string;
  setEmbeddingModel(value: string): RagCreateDatasetRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateDatasetRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagCreateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCreateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagCreateDatasetRequest): RagCreateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: RagCreateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCreateDatasetRequest;
  static deserializeBinaryFromReader(message: RagCreateDatasetRequest, reader: jspb.BinaryReader): RagCreateDatasetRequest;
}

export namespace RagCreateDatasetRequest {
  export type AsObject = {
    parent: string,
    name: string,
    description: string,
    avatar: string,
    permission: RagPermission,
    chunkMethod: RagChunkMethod,
    parserConfig?: RagParserConfig.AsObject,
    embeddingModel: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagParserConfig extends jspb.Message {
  getAutoKeyword(): number;
  setAutoKeyword(value: number): RagParserConfig;

  getAutoQuestions(): number;
  setAutoQuestions(value: number): RagParserConfig;

  getChunkTokenNum(): number;
  setChunkTokenNum(value: number): RagParserConfig;

  getDelimiter(): string;
  setDelimiter(value: string): RagParserConfig;

  getHtml4excel(): boolean;
  setHtml4excel(value: boolean): RagParserConfig;

  getLayoutRecognize(): string;
  setLayoutRecognize(value: string): RagParserConfig;

  getTagKbIdsList(): Array<string>;
  setTagKbIdsList(value: Array<string>): RagParserConfig;
  clearTagKbIdsList(): RagParserConfig;
  addTagKbIds(value: string, index?: number): RagParserConfig;

  getTaskPageSize(): number;
  setTaskPageSize(value: number): RagParserConfig;

  getRaptor(): google_protobuf_struct_pb.Struct | undefined;
  setRaptor(value?: google_protobuf_struct_pb.Struct): RagParserConfig;
  hasRaptor(): boolean;
  clearRaptor(): RagParserConfig;

  getGraphrag(): google_protobuf_struct_pb.Struct | undefined;
  setGraphrag(value?: google_protobuf_struct_pb.Struct): RagParserConfig;
  hasGraphrag(): boolean;
  clearGraphrag(): RagParserConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagParserConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagParserConfig): RagParserConfig.AsObject;
  static serializeBinaryToWriter(message: RagParserConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagParserConfig;
  static deserializeBinaryFromReader(message: RagParserConfig, reader: jspb.BinaryReader): RagParserConfig;
}

export namespace RagParserConfig {
  export type AsObject = {
    autoKeyword: number,
    autoQuestions: number,
    chunkTokenNum: number,
    delimiter: string,
    html4excel: boolean,
    layoutRecognize: string,
    tagKbIdsList: Array<string>,
    taskPageSize: number,
    raptor?: google_protobuf_struct_pb.Struct.AsObject,
    graphrag?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagUpdateDatasetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUpdateDatasetRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagUpdateDatasetRequest;

  getName(): string;
  setName(value: string): RagUpdateDatasetRequest;

  getDescription(): string;
  setDescription(value: string): RagUpdateDatasetRequest;

  getAvatar(): string;
  setAvatar(value: string): RagUpdateDatasetRequest;

  getPermission(): RagPermission;
  setPermission(value: RagPermission): RagUpdateDatasetRequest;

  getChunkMethod(): RagChunkMethod;
  setChunkMethod(value: RagChunkMethod): RagUpdateDatasetRequest;

  getParserConfig(): RagParserConfig | undefined;
  setParserConfig(value?: RagParserConfig): RagUpdateDatasetRequest;
  hasParserConfig(): boolean;
  clearParserConfig(): RagUpdateDatasetRequest;

  getEmbeddingModel(): string;
  setEmbeddingModel(value: string): RagUpdateDatasetRequest;

  getPagerank(): number;
  setPagerank(value: number): RagUpdateDatasetRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateDatasetRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagUpdateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUpdateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUpdateDatasetRequest): RagUpdateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: RagUpdateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUpdateDatasetRequest;
  static deserializeBinaryFromReader(message: RagUpdateDatasetRequest, reader: jspb.BinaryReader): RagUpdateDatasetRequest;
}

export namespace RagUpdateDatasetRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    name: string,
    description: string,
    avatar: string,
    permission: RagPermission,
    chunkMethod: RagChunkMethod,
    parserConfig?: RagParserConfig.AsObject,
    embeddingModel: string,
    pagerank: number,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagDeleteDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteDatasetsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RagDeleteDatasetsRequest;
  clearIdsList(): RagDeleteDatasetsRequest;
  addIds(value: string, index?: number): RagDeleteDatasetsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): RagDeleteDatasetsRequest;
  hasDeleteAll(): boolean;
  clearDeleteAll(): RagDeleteDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteDatasetsRequest): RagDeleteDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteDatasetsRequest;
  static deserializeBinaryFromReader(message: RagDeleteDatasetsRequest, reader: jspb.BinaryReader): RagDeleteDatasetsRequest;
}

export namespace RagDeleteDatasetsRequest {
  export type AsObject = {
    parent: string,
    idsList: Array<string>,
    deleteAll?: boolean,
  }

  export enum DeleteAllCase { 
    _DELETE_ALL_NOT_SET = 0,
    DELETE_ALL = 3,
  }
}

export class RagListDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListDatasetsRequest;

  getPagination(): RagPagination | undefined;
  setPagination(value?: RagPagination): RagListDatasetsRequest;
  hasPagination(): boolean;
  clearPagination(): RagListDatasetsRequest;

  getId(): string;
  setId(value: string): RagListDatasetsRequest;

  getName(): string;
  setName(value: string): RagListDatasetsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListDatasetsRequest;

  getDesc(): boolean;
  setDesc(value: boolean): RagListDatasetsRequest;
  hasDesc(): boolean;
  clearDesc(): RagListDatasetsRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListDatasetsRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagListDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListDatasetsRequest): RagListDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: RagListDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListDatasetsRequest;
  static deserializeBinaryFromReader(message: RagListDatasetsRequest, reader: jspb.BinaryReader): RagListDatasetsRequest;
}

export namespace RagListDatasetsRequest {
  export type AsObject = {
    parent: string,
    pagination?: RagPagination.AsObject,
    id: string,
    name: string,
    orderby: string,
    desc?: boolean,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum DescCase { 
    _DESC_NOT_SET = 0,
    DESC = 6,
  }
}

export class RagDatasetList extends jspb.Message {
  getDatasetsList(): Array<RagDataset>;
  setDatasetsList(value: Array<RagDataset>): RagDatasetList;
  clearDatasetsList(): RagDatasetList;
  addDatasets(value?: RagDataset, index?: number): RagDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDatasetList.AsObject;
  static toObject(includeInstance: boolean, msg: RagDatasetList): RagDatasetList.AsObject;
  static serializeBinaryToWriter(message: RagDatasetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDatasetList;
  static deserializeBinaryFromReader(message: RagDatasetList, reader: jspb.BinaryReader): RagDatasetList;
}

export namespace RagDatasetList {
  export type AsObject = {
    datasetsList: Array<RagDataset.AsObject>,
  }
}

export class RagGetKnowledgeGraphRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagGetKnowledgeGraphRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagGetKnowledgeGraphRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetKnowledgeGraphRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetKnowledgeGraphRequest): RagGetKnowledgeGraphRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetKnowledgeGraphRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetKnowledgeGraphRequest;
  static deserializeBinaryFromReader(message: RagGetKnowledgeGraphRequest, reader: jspb.BinaryReader): RagGetKnowledgeGraphRequest;
}

export namespace RagGetKnowledgeGraphRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
  }
}

export class RagGetKnowledgeGraphResponse extends jspb.Message {
  getGraph(): google_protobuf_struct_pb.Struct | undefined;
  setGraph(value?: google_protobuf_struct_pb.Struct): RagGetKnowledgeGraphResponse;
  hasGraph(): boolean;
  clearGraph(): RagGetKnowledgeGraphResponse;

  getMindMap(): google_protobuf_struct_pb.Struct | undefined;
  setMindMap(value?: google_protobuf_struct_pb.Struct): RagGetKnowledgeGraphResponse;
  hasMindMap(): boolean;
  clearMindMap(): RagGetKnowledgeGraphResponse;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagGetKnowledgeGraphResponse;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagGetKnowledgeGraphResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetKnowledgeGraphResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetKnowledgeGraphResponse): RagGetKnowledgeGraphResponse.AsObject;
  static serializeBinaryToWriter(message: RagGetKnowledgeGraphResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetKnowledgeGraphResponse;
  static deserializeBinaryFromReader(message: RagGetKnowledgeGraphResponse, reader: jspb.BinaryReader): RagGetKnowledgeGraphResponse;
}

export namespace RagGetKnowledgeGraphResponse {
  export type AsObject = {
    graph?: google_protobuf_struct_pb.Struct.AsObject,
    mindMap?: google_protobuf_struct_pb.Struct.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagDeleteKnowledgeGraphRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteKnowledgeGraphRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagDeleteKnowledgeGraphRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteKnowledgeGraphRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteKnowledgeGraphRequest): RagDeleteKnowledgeGraphRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteKnowledgeGraphRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteKnowledgeGraphRequest;
  static deserializeBinaryFromReader(message: RagDeleteKnowledgeGraphRequest, reader: jspb.BinaryReader): RagDeleteKnowledgeGraphRequest;
}

export namespace RagDeleteKnowledgeGraphRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
  }
}

export class RagDocument extends jspb.Message {
  getId(): string;
  setId(value: string): RagDocument;

  getDatasetId(): string;
  setDatasetId(value: string): RagDocument;

  getName(): string;
  setName(value: string): RagDocument;

  getType(): string;
  setType(value: string): RagDocument;

  getSize(): number;
  setSize(value: number): RagDocument;

  getChunkCount(): number;
  setChunkCount(value: number): RagDocument;

  getTokenCount(): number;
  setTokenCount(value: number): RagDocument;

  getChunkMethod(): RagChunkMethod;
  setChunkMethod(value: RagChunkMethod): RagDocument;

  getParserConfig(): RagParserConfig | undefined;
  setParserConfig(value?: RagParserConfig): RagDocument;
  hasParserConfig(): boolean;
  clearParserConfig(): RagDocument;

  getSourceType(): string;
  setSourceType(value: string): RagDocument;

  getRun(): RagDocumentStatus;
  setRun(value: RagDocumentStatus): RagDocument;

  getProgress(): number;
  setProgress(value: number): RagDocument;

  getProgressMsg(): string;
  setProgressMsg(value: string): RagDocument;

  getProcessDuration(): number;
  setProcessDuration(value: number): RagDocument;

  getCreateTime(): number;
  setCreateTime(value: number): RagDocument;

  getCreateDate(): string;
  setCreateDate(value: string): RagDocument;

  getUpdateTime(): number;
  setUpdateTime(value: number): RagDocument;

  getUpdateDate(): string;
  setUpdateDate(value: string): RagDocument;

  getMetaFields(): google_protobuf_struct_pb.Struct | undefined;
  setMetaFields(value?: google_protobuf_struct_pb.Struct): RagDocument;
  hasMetaFields(): boolean;
  clearMetaFields(): RagDocument;

  getThumbnail(): string;
  setThumbnail(value: string): RagDocument;

  getLocation(): string;
  setLocation(value: string): RagDocument;

  getProcessBeginAt(): string;
  setProcessBeginAt(value: string): RagDocument;

  getSuffix(): string;
  setSuffix(value: string): RagDocument;

  getStatus(): string;
  setStatus(value: string): RagDocument;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagDocument;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagDocument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDocument.AsObject;
  static toObject(includeInstance: boolean, msg: RagDocument): RagDocument.AsObject;
  static serializeBinaryToWriter(message: RagDocument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDocument;
  static deserializeBinaryFromReader(message: RagDocument, reader: jspb.BinaryReader): RagDocument;
}

export namespace RagDocument {
  export type AsObject = {
    id: string,
    datasetId: string,
    name: string,
    type: string,
    size: number,
    chunkCount: number,
    tokenCount: number,
    chunkMethod: RagChunkMethod,
    parserConfig?: RagParserConfig.AsObject,
    sourceType: string,
    run: RagDocumentStatus,
    progress: number,
    progressMsg: string,
    processDuration: number,
    createTime: number,
    createDate: string,
    updateTime: number,
    updateDate: string,
    metaFields?: google_protobuf_struct_pb.Struct.AsObject,
    thumbnail: string,
    location: string,
    processBeginAt: string,
    suffix: string,
    status: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagUploadDocumentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUploadDocumentsRequest;

  getMetadata(): RagUploadDocumentsRequest.RagMetadata | undefined;
  setMetadata(value?: RagUploadDocumentsRequest.RagMetadata): RagUploadDocumentsRequest;
  hasMetadata(): boolean;
  clearMetadata(): RagUploadDocumentsRequest;

  getChunk(): RagUploadChunk | undefined;
  setChunk(value?: RagUploadChunk): RagUploadDocumentsRequest;
  hasChunk(): boolean;
  clearChunk(): RagUploadDocumentsRequest;

  getPayloadCase(): RagUploadDocumentsRequest.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUploadDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUploadDocumentsRequest): RagUploadDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: RagUploadDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUploadDocumentsRequest;
  static deserializeBinaryFromReader(message: RagUploadDocumentsRequest, reader: jspb.BinaryReader): RagUploadDocumentsRequest;
}

export namespace RagUploadDocumentsRequest {
  export type AsObject = {
    parent: string,
    metadata?: RagUploadDocumentsRequest.RagMetadata.AsObject,
    chunk?: RagUploadChunk.AsObject,
  }

  export class RagMetadata extends jspb.Message {
    getDatasetId(): string;
    setDatasetId(value: string): RagMetadata;

    getFilesList(): Array<RagFileMetadata>;
    setFilesList(value: Array<RagFileMetadata>): RagMetadata;
    clearFilesList(): RagMetadata;
    addFiles(value?: RagFileMetadata, index?: number): RagFileMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RagMetadata): RagMetadata.AsObject;
    static serializeBinaryToWriter(message: RagMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagMetadata;
    static deserializeBinaryFromReader(message: RagMetadata, reader: jspb.BinaryReader): RagMetadata;
  }

  export namespace RagMetadata {
    export type AsObject = {
      datasetId: string,
      filesList: Array<RagFileMetadata.AsObject>,
    }
  }


  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    METADATA = 2,
    CHUNK = 3,
  }
}

export class RagDocumentList extends jspb.Message {
  getDocumentsList(): Array<RagDocument>;
  setDocumentsList(value: Array<RagDocument>): RagDocumentList;
  clearDocumentsList(): RagDocumentList;
  addDocuments(value?: RagDocument, index?: number): RagDocument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDocumentList.AsObject;
  static toObject(includeInstance: boolean, msg: RagDocumentList): RagDocumentList.AsObject;
  static serializeBinaryToWriter(message: RagDocumentList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDocumentList;
  static deserializeBinaryFromReader(message: RagDocumentList, reader: jspb.BinaryReader): RagDocumentList;
}

export namespace RagDocumentList {
  export type AsObject = {
    documentsList: Array<RagDocument.AsObject>,
  }
}

export class RagUpdateDocumentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUpdateDocumentRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagUpdateDocumentRequest;

  getDocumentId(): string;
  setDocumentId(value: string): RagUpdateDocumentRequest;

  getName(): string;
  setName(value: string): RagUpdateDocumentRequest;

  getChunkMethod(): RagChunkMethod;
  setChunkMethod(value: RagChunkMethod): RagUpdateDocumentRequest;

  getParserConfig(): RagParserConfig | undefined;
  setParserConfig(value?: RagParserConfig): RagUpdateDocumentRequest;
  hasParserConfig(): boolean;
  clearParserConfig(): RagUpdateDocumentRequest;

  getEnabled(): boolean;
  setEnabled(value: boolean): RagUpdateDocumentRequest;
  hasEnabled(): boolean;
  clearEnabled(): RagUpdateDocumentRequest;

  getMetaFields(): google_protobuf_struct_pb.Struct | undefined;
  setMetaFields(value?: google_protobuf_struct_pb.Struct): RagUpdateDocumentRequest;
  hasMetaFields(): boolean;
  clearMetaFields(): RagUpdateDocumentRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateDocumentRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagUpdateDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUpdateDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUpdateDocumentRequest): RagUpdateDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: RagUpdateDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUpdateDocumentRequest;
  static deserializeBinaryFromReader(message: RagUpdateDocumentRequest, reader: jspb.BinaryReader): RagUpdateDocumentRequest;
}

export namespace RagUpdateDocumentRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    documentId: string,
    name: string,
    chunkMethod: RagChunkMethod,
    parserConfig?: RagParserConfig.AsObject,
    enabled?: boolean,
    metaFields?: google_protobuf_struct_pb.Struct.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum EnabledCase { 
    _ENABLED_NOT_SET = 0,
    ENABLED = 7,
  }
}

export class RagDownloadDocumentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDownloadDocumentRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagDownloadDocumentRequest;

  getDocumentId(): string;
  setDocumentId(value: string): RagDownloadDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDownloadDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDownloadDocumentRequest): RagDownloadDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: RagDownloadDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDownloadDocumentRequest;
  static deserializeBinaryFromReader(message: RagDownloadDocumentRequest, reader: jspb.BinaryReader): RagDownloadDocumentRequest;
}

export namespace RagDownloadDocumentRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    documentId: string,
  }
}

export class RagListDocumentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListDocumentsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagListDocumentsRequest;

  getPagination(): RagPagination | undefined;
  setPagination(value?: RagPagination): RagListDocumentsRequest;
  hasPagination(): boolean;
  clearPagination(): RagListDocumentsRequest;

  getId(): string;
  setId(value: string): RagListDocumentsRequest;

  getName(): string;
  setName(value: string): RagListDocumentsRequest;

  getKeywords(): string;
  setKeywords(value: string): RagListDocumentsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListDocumentsRequest;

  getDesc(): boolean;
  setDesc(value: boolean): RagListDocumentsRequest;
  hasDesc(): boolean;
  clearDesc(): RagListDocumentsRequest;

  getCreateTimeFrom(): number;
  setCreateTimeFrom(value: number): RagListDocumentsRequest;

  getCreateTimeTo(): number;
  setCreateTimeTo(value: number): RagListDocumentsRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListDocumentsRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagListDocumentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListDocumentsRequest): RagListDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: RagListDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListDocumentsRequest;
  static deserializeBinaryFromReader(message: RagListDocumentsRequest, reader: jspb.BinaryReader): RagListDocumentsRequest;
}

export namespace RagListDocumentsRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    pagination?: RagPagination.AsObject,
    id: string,
    name: string,
    keywords: string,
    orderby: string,
    desc?: boolean,
    createTimeFrom: number,
    createTimeTo: number,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum DescCase { 
    _DESC_NOT_SET = 0,
    DESC = 8,
  }
}

export class RagListDocumentsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): RagListDocumentsResponse;

  getDocsList(): Array<RagDocument>;
  setDocsList(value: Array<RagDocument>): RagListDocumentsResponse;
  clearDocsList(): RagListDocumentsResponse;
  addDocs(value?: RagDocument, index?: number): RagDocument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagListDocumentsResponse): RagListDocumentsResponse.AsObject;
  static serializeBinaryToWriter(message: RagListDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListDocumentsResponse;
  static deserializeBinaryFromReader(message: RagListDocumentsResponse, reader: jspb.BinaryReader): RagListDocumentsResponse;
}

export namespace RagListDocumentsResponse {
  export type AsObject = {
    total: number,
    docsList: Array<RagDocument.AsObject>,
  }
}

export class RagDeleteDocumentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteDocumentsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagDeleteDocumentsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RagDeleteDocumentsRequest;
  clearIdsList(): RagDeleteDocumentsRequest;
  addIds(value: string, index?: number): RagDeleteDocumentsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): RagDeleteDocumentsRequest;
  hasDeleteAll(): boolean;
  clearDeleteAll(): RagDeleteDocumentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteDocumentsRequest): RagDeleteDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteDocumentsRequest;
  static deserializeBinaryFromReader(message: RagDeleteDocumentsRequest, reader: jspb.BinaryReader): RagDeleteDocumentsRequest;
}

export namespace RagDeleteDocumentsRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    idsList: Array<string>,
    deleteAll?: boolean,
  }

  export enum DeleteAllCase { 
    _DELETE_ALL_NOT_SET = 0,
    DELETE_ALL = 4,
  }
}

export class RagChunk extends jspb.Message {
  getId(): string;
  setId(value: string): RagChunk;

  getDatasetId(): string;
  setDatasetId(value: string): RagChunk;

  getDocumentId(): string;
  setDocumentId(value: string): RagChunk;

  getContent(): string;
  setContent(value: string): RagChunk;

  getDocnmKwd(): string;
  setDocnmKwd(value: string): RagChunk;

  getImportantKeywordsList(): Array<string>;
  setImportantKeywordsList(value: Array<string>): RagChunk;
  clearImportantKeywordsList(): RagChunk;
  addImportantKeywords(value: string, index?: number): RagChunk;

  getQuestionsList(): Array<string>;
  setQuestionsList(value: Array<string>): RagChunk;
  clearQuestionsList(): RagChunk;
  addQuestions(value: string, index?: number): RagChunk;

  getImageId(): string;
  setImageId(value: string): RagChunk;

  getAvailable(): boolean;
  setAvailable(value: boolean): RagChunk;
  hasAvailable(): boolean;
  clearAvailable(): RagChunk;

  getPositionsList(): Array<google_protobuf_struct_pb.ListValue>;
  setPositionsList(value: Array<google_protobuf_struct_pb.ListValue>): RagChunk;
  clearPositionsList(): RagChunk;
  addPositions(value?: google_protobuf_struct_pb.ListValue, index?: number): google_protobuf_struct_pb.ListValue;

  getCreateTime(): string;
  setCreateTime(value: string): RagChunk;

  getCreateTimestamp(): number;
  setCreateTimestamp(value: number): RagChunk;

  getDocumentKeyword(): string;
  setDocumentKeyword(value: string): RagChunk;

  getSimilarity(): number;
  setSimilarity(value: number): RagChunk;

  getVector(): google_protobuf_struct_pb.Struct | undefined;
  setVector(value?: google_protobuf_struct_pb.Struct): RagChunk;
  hasVector(): boolean;
  clearVector(): RagChunk;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChunk;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagChunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RagChunk): RagChunk.AsObject;
  static serializeBinaryToWriter(message: RagChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChunk;
  static deserializeBinaryFromReader(message: RagChunk, reader: jspb.BinaryReader): RagChunk;
}

export namespace RagChunk {
  export type AsObject = {
    id: string,
    datasetId: string,
    documentId: string,
    content: string,
    docnmKwd: string,
    importantKeywordsList: Array<string>,
    questionsList: Array<string>,
    imageId: string,
    available?: boolean,
    positionsList: Array<google_protobuf_struct_pb.ListValue.AsObject>,
    createTime: string,
    createTimestamp: number,
    documentKeyword: string,
    similarity: number,
    vector?: google_protobuf_struct_pb.Struct.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum AvailableCase { 
    _AVAILABLE_NOT_SET = 0,
    AVAILABLE = 9,
  }
}

export class RagParseDocumentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagParseDocumentsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagParseDocumentsRequest;

  getDocumentIdsList(): Array<string>;
  setDocumentIdsList(value: Array<string>): RagParseDocumentsRequest;
  clearDocumentIdsList(): RagParseDocumentsRequest;
  addDocumentIds(value: string, index?: number): RagParseDocumentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagParseDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagParseDocumentsRequest): RagParseDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: RagParseDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagParseDocumentsRequest;
  static deserializeBinaryFromReader(message: RagParseDocumentsRequest, reader: jspb.BinaryReader): RagParseDocumentsRequest;
}

export namespace RagParseDocumentsRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    documentIdsList: Array<string>,
  }
}

export class RagStopParsingRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagStopParsingRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagStopParsingRequest;

  getDocumentIdsList(): Array<string>;
  setDocumentIdsList(value: Array<string>): RagStopParsingRequest;
  clearDocumentIdsList(): RagStopParsingRequest;
  addDocumentIds(value: string, index?: number): RagStopParsingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagStopParsingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagStopParsingRequest): RagStopParsingRequest.AsObject;
  static serializeBinaryToWriter(message: RagStopParsingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagStopParsingRequest;
  static deserializeBinaryFromReader(message: RagStopParsingRequest, reader: jspb.BinaryReader): RagStopParsingRequest;
}

export namespace RagStopParsingRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    documentIdsList: Array<string>,
  }
}

export class RagListChunksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListChunksRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagListChunksRequest;

  getDocumentId(): string;
  setDocumentId(value: string): RagListChunksRequest;

  getPagination(): RagPagination | undefined;
  setPagination(value?: RagPagination): RagListChunksRequest;
  hasPagination(): boolean;
  clearPagination(): RagListChunksRequest;

  getKeywords(): string;
  setKeywords(value: string): RagListChunksRequest;

  getId(): string;
  setId(value: string): RagListChunksRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListChunksRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagListChunksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListChunksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListChunksRequest): RagListChunksRequest.AsObject;
  static serializeBinaryToWriter(message: RagListChunksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListChunksRequest;
  static deserializeBinaryFromReader(message: RagListChunksRequest, reader: jspb.BinaryReader): RagListChunksRequest;
}

export namespace RagListChunksRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    documentId: string,
    pagination?: RagPagination.AsObject,
    keywords: string,
    id: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagListChunksResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): RagListChunksResponse;

  getChunksList(): Array<RagChunk>;
  setChunksList(value: Array<RagChunk>): RagListChunksResponse;
  clearChunksList(): RagListChunksResponse;
  addChunks(value?: RagChunk, index?: number): RagChunk;

  getDoc(): RagDocument | undefined;
  setDoc(value?: RagDocument): RagListChunksResponse;
  hasDoc(): boolean;
  clearDoc(): RagListChunksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListChunksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagListChunksResponse): RagListChunksResponse.AsObject;
  static serializeBinaryToWriter(message: RagListChunksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListChunksResponse;
  static deserializeBinaryFromReader(message: RagListChunksResponse, reader: jspb.BinaryReader): RagListChunksResponse;
}

export namespace RagListChunksResponse {
  export type AsObject = {
    total: number,
    chunksList: Array<RagChunk.AsObject>,
    doc?: RagDocument.AsObject,
  }
}

export class RagAddChunkRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagAddChunkRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagAddChunkRequest;

  getDocumentId(): string;
  setDocumentId(value: string): RagAddChunkRequest;

  getContent(): string;
  setContent(value: string): RagAddChunkRequest;

  getImportantKeywordsList(): Array<string>;
  setImportantKeywordsList(value: Array<string>): RagAddChunkRequest;
  clearImportantKeywordsList(): RagAddChunkRequest;
  addImportantKeywords(value: string, index?: number): RagAddChunkRequest;

  getQuestionsList(): Array<string>;
  setQuestionsList(value: Array<string>): RagAddChunkRequest;
  clearQuestionsList(): RagAddChunkRequest;
  addQuestions(value: string, index?: number): RagAddChunkRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAddChunkRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagAddChunkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAddChunkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagAddChunkRequest): RagAddChunkRequest.AsObject;
  static serializeBinaryToWriter(message: RagAddChunkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAddChunkRequest;
  static deserializeBinaryFromReader(message: RagAddChunkRequest, reader: jspb.BinaryReader): RagAddChunkRequest;
}

export namespace RagAddChunkRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    documentId: string,
    content: string,
    importantKeywordsList: Array<string>,
    questionsList: Array<string>,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagAddChunkResponse extends jspb.Message {
  getChunk(): RagChunk | undefined;
  setChunk(value?: RagChunk): RagAddChunkResponse;
  hasChunk(): boolean;
  clearChunk(): RagAddChunkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAddChunkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagAddChunkResponse): RagAddChunkResponse.AsObject;
  static serializeBinaryToWriter(message: RagAddChunkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAddChunkResponse;
  static deserializeBinaryFromReader(message: RagAddChunkResponse, reader: jspb.BinaryReader): RagAddChunkResponse;
}

export namespace RagAddChunkResponse {
  export type AsObject = {
    chunk?: RagChunk.AsObject,
  }
}

export class RagRemoveChunksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagRemoveChunksRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagRemoveChunksRequest;

  getDocumentId(): string;
  setDocumentId(value: string): RagRemoveChunksRequest;

  getChunkIdsList(): Array<string>;
  setChunkIdsList(value: Array<string>): RagRemoveChunksRequest;
  clearChunkIdsList(): RagRemoveChunksRequest;
  addChunkIds(value: string, index?: number): RagRemoveChunksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagRemoveChunksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagRemoveChunksRequest): RagRemoveChunksRequest.AsObject;
  static serializeBinaryToWriter(message: RagRemoveChunksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagRemoveChunksRequest;
  static deserializeBinaryFromReader(message: RagRemoveChunksRequest, reader: jspb.BinaryReader): RagRemoveChunksRequest;
}

export namespace RagRemoveChunksRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    documentId: string,
    chunkIdsList: Array<string>,
  }
}

export class RagUpdateChunkRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUpdateChunkRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagUpdateChunkRequest;

  getDocumentId(): string;
  setDocumentId(value: string): RagUpdateChunkRequest;

  getChunkId(): string;
  setChunkId(value: string): RagUpdateChunkRequest;

  getContent(): string;
  setContent(value: string): RagUpdateChunkRequest;

  getImportantKeywordsList(): Array<string>;
  setImportantKeywordsList(value: Array<string>): RagUpdateChunkRequest;
  clearImportantKeywordsList(): RagUpdateChunkRequest;
  addImportantKeywords(value: string, index?: number): RagUpdateChunkRequest;

  getQuestionsList(): Array<string>;
  setQuestionsList(value: Array<string>): RagUpdateChunkRequest;
  clearQuestionsList(): RagUpdateChunkRequest;
  addQuestions(value: string, index?: number): RagUpdateChunkRequest;

  getAvailable(): boolean;
  setAvailable(value: boolean): RagUpdateChunkRequest;
  hasAvailable(): boolean;
  clearAvailable(): RagUpdateChunkRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateChunkRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagUpdateChunkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUpdateChunkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUpdateChunkRequest): RagUpdateChunkRequest.AsObject;
  static serializeBinaryToWriter(message: RagUpdateChunkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUpdateChunkRequest;
  static deserializeBinaryFromReader(message: RagUpdateChunkRequest, reader: jspb.BinaryReader): RagUpdateChunkRequest;
}

export namespace RagUpdateChunkRequest {
  export type AsObject = {
    parent: string,
    datasetId: string,
    documentId: string,
    chunkId: string,
    content: string,
    importantKeywordsList: Array<string>,
    questionsList: Array<string>,
    available?: boolean,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum AvailableCase { 
    _AVAILABLE_NOT_SET = 0,
    AVAILABLE = 8,
  }
}

export class RagRetrievalRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagRetrievalRequest;

  getPagination(): RagPagination | undefined;
  setPagination(value?: RagPagination): RagRetrievalRequest;
  hasPagination(): boolean;
  clearPagination(): RagRetrievalRequest;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): RagRetrievalRequest;
  clearDatasetIdsList(): RagRetrievalRequest;
  addDatasetIds(value: string, index?: number): RagRetrievalRequest;

  getQuestion(): string;
  setQuestion(value: string): RagRetrievalRequest;

  getDocumentIdsList(): Array<string>;
  setDocumentIdsList(value: Array<string>): RagRetrievalRequest;
  clearDocumentIdsList(): RagRetrievalRequest;
  addDocumentIds(value: string, index?: number): RagRetrievalRequest;

  getSimilarityThreshold(): number;
  setSimilarityThreshold(value: number): RagRetrievalRequest;

  getVectorSimilarityWeight(): number;
  setVectorSimilarityWeight(value: number): RagRetrievalRequest;

  getTopK(): number;
  setTopK(value: number): RagRetrievalRequest;

  getHighlight(): boolean;
  setHighlight(value: boolean): RagRetrievalRequest;
  hasHighlight(): boolean;
  clearHighlight(): RagRetrievalRequest;

  getMetadataCondition(): google_protobuf_struct_pb.Struct | undefined;
  setMetadataCondition(value?: google_protobuf_struct_pb.Struct): RagRetrievalRequest;
  hasMetadataCondition(): boolean;
  clearMetadataCondition(): RagRetrievalRequest;

  getUseKg(): boolean;
  setUseKg(value: boolean): RagRetrievalRequest;
  hasUseKg(): boolean;
  clearUseKg(): RagRetrievalRequest;

  getCrossLanguagesList(): Array<string>;
  setCrossLanguagesList(value: Array<string>): RagRetrievalRequest;
  clearCrossLanguagesList(): RagRetrievalRequest;
  addCrossLanguages(value: string, index?: number): RagRetrievalRequest;

  getKeyword(): boolean;
  setKeyword(value: boolean): RagRetrievalRequest;
  hasKeyword(): boolean;
  clearKeyword(): RagRetrievalRequest;

  getRerankId(): string;
  setRerankId(value: string): RagRetrievalRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagRetrievalRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagRetrievalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagRetrievalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagRetrievalRequest): RagRetrievalRequest.AsObject;
  static serializeBinaryToWriter(message: RagRetrievalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagRetrievalRequest;
  static deserializeBinaryFromReader(message: RagRetrievalRequest, reader: jspb.BinaryReader): RagRetrievalRequest;
}

export namespace RagRetrievalRequest {
  export type AsObject = {
    parent: string,
    pagination?: RagPagination.AsObject,
    datasetIdsList: Array<string>,
    question: string,
    documentIdsList: Array<string>,
    similarityThreshold: number,
    vectorSimilarityWeight: number,
    topK: number,
    highlight?: boolean,
    metadataCondition?: google_protobuf_struct_pb.Struct.AsObject,
    useKg?: boolean,
    crossLanguagesList: Array<string>,
    keyword?: boolean,
    rerankId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum HighlightCase { 
    _HIGHLIGHT_NOT_SET = 0,
    HIGHLIGHT = 9,
  }

  export enum UseKgCase { 
    _USE_KG_NOT_SET = 0,
    USE_KG = 11,
  }

  export enum KeywordCase { 
    _KEYWORD_NOT_SET = 0,
    KEYWORD = 13,
  }
}

export class RagRetrievalResponse extends jspb.Message {
  getChunksList(): Array<RagChunk>;
  setChunksList(value: Array<RagChunk>): RagRetrievalResponse;
  clearChunksList(): RagRetrievalResponse;
  addChunks(value?: RagChunk, index?: number): RagChunk;

  getDocAggsList(): Array<google_protobuf_struct_pb.Struct>;
  setDocAggsList(value: Array<google_protobuf_struct_pb.Struct>): RagRetrievalResponse;
  clearDocAggsList(): RagRetrievalResponse;
  addDocAggs(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  getTotal(): number;
  setTotal(value: number): RagRetrievalResponse;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagRetrievalResponse;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagRetrievalResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagRetrievalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagRetrievalResponse): RagRetrievalResponse.AsObject;
  static serializeBinaryToWriter(message: RagRetrievalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagRetrievalResponse;
  static deserializeBinaryFromReader(message: RagRetrievalResponse, reader: jspb.BinaryReader): RagRetrievalResponse;
}

export namespace RagRetrievalResponse {
  export type AsObject = {
    chunksList: Array<RagChunk.AsObject>,
    docAggsList: Array<google_protobuf_struct_pb.Struct.AsObject>,
    total: number,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagChat extends jspb.Message {
  getId(): string;
  setId(value: string): RagChat;

  getName(): string;
  setName(value: string): RagChat;

  getDescription(): string;
  setDescription(value: string): RagChat;

  getAvatar(): string;
  setAvatar(value: string): RagChat;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): RagChat;
  clearDatasetIdsList(): RagChat;
  addDatasetIds(value: string, index?: number): RagChat;

  getDatasetsList(): Array<RagDataset>;
  setDatasetsList(value: Array<RagDataset>): RagChat;
  clearDatasetsList(): RagChat;
  addDatasets(value?: RagDataset, index?: number): RagDataset;

  getLlm(): RagLLMSetting | undefined;
  setLlm(value?: RagLLMSetting): RagChat;
  hasLlm(): boolean;
  clearLlm(): RagChat;

  getPrompt(): RagPromptConfig | undefined;
  setPrompt(value?: RagPromptConfig): RagChat;
  hasPrompt(): boolean;
  clearPrompt(): RagChat;

  getCreateTime(): number;
  setCreateTime(value: number): RagChat;

  getCreateDate(): string;
  setCreateDate(value: string): RagChat;

  getUpdateTime(): number;
  setUpdateTime(value: number): RagChat;

  getUpdateDate(): string;
  setUpdateDate(value: string): RagChat;

  getDoRefer(): string;
  setDoRefer(value: string): RagChat;

  getLanguage(): string;
  setLanguage(value: string): RagChat;

  getPromptType(): string;
  setPromptType(value: string): RagChat;

  getStatus(): string;
  setStatus(value: string): RagChat;

  getTenantId(): string;
  setTenantId(value: string): RagChat;

  getTopK(): number;
  setTopK(value: number): RagChat;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChat;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagChat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChat.AsObject;
  static toObject(includeInstance: boolean, msg: RagChat): RagChat.AsObject;
  static serializeBinaryToWriter(message: RagChat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChat;
  static deserializeBinaryFromReader(message: RagChat, reader: jspb.BinaryReader): RagChat;
}

export namespace RagChat {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    avatar: string,
    datasetIdsList: Array<string>,
    datasetsList: Array<RagDataset.AsObject>,
    llm?: RagLLMSetting.AsObject,
    prompt?: RagPromptConfig.AsObject,
    createTime: number,
    createDate: string,
    updateTime: number,
    updateDate: string,
    doRefer: string,
    language: string,
    promptType: string,
    status: string,
    tenantId: string,
    topK: number,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagLLMSetting extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): RagLLMSetting;

  getTemperature(): number;
  setTemperature(value: number): RagLLMSetting;

  getTopP(): number;
  setTopP(value: number): RagLLMSetting;

  getFrequencyPenalty(): number;
  setFrequencyPenalty(value: number): RagLLMSetting;

  getPresencePenalty(): number;
  setPresencePenalty(value: number): RagLLMSetting;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagLLMSetting;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagLLMSetting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagLLMSetting.AsObject;
  static toObject(includeInstance: boolean, msg: RagLLMSetting): RagLLMSetting.AsObject;
  static serializeBinaryToWriter(message: RagLLMSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagLLMSetting;
  static deserializeBinaryFromReader(message: RagLLMSetting, reader: jspb.BinaryReader): RagLLMSetting;
}

export namespace RagLLMSetting {
  export type AsObject = {
    modelName: string,
    temperature: number,
    topP: number,
    frequencyPenalty: number,
    presencePenalty: number,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagPromptConfig extends jspb.Message {
  getPrompt(): string;
  setPrompt(value: string): RagPromptConfig;

  getVariablesList(): Array<RagPromptVariable>;
  setVariablesList(value: Array<RagPromptVariable>): RagPromptConfig;
  clearVariablesList(): RagPromptConfig;
  addVariables(value?: RagPromptVariable, index?: number): RagPromptVariable;

  getOpener(): string;
  setOpener(value: string): RagPromptConfig;

  getShowQuote(): boolean;
  setShowQuote(value: boolean): RagPromptConfig;
  hasShowQuote(): boolean;
  clearShowQuote(): RagPromptConfig;

  getEmptyResponse(): string;
  setEmptyResponse(value: string): RagPromptConfig;

  getTts(): boolean;
  setTts(value: boolean): RagPromptConfig;
  hasTts(): boolean;
  clearTts(): RagPromptConfig;

  getRefineMultiturn(): boolean;
  setRefineMultiturn(value: boolean): RagPromptConfig;
  hasRefineMultiturn(): boolean;
  clearRefineMultiturn(): RagPromptConfig;

  getSimilarityThreshold(): number;
  setSimilarityThreshold(value: number): RagPromptConfig;

  getKeywordsSimilarityWeight(): number;
  setKeywordsSimilarityWeight(value: number): RagPromptConfig;

  getTopN(): number;
  setTopN(value: number): RagPromptConfig;

  getTopK(): number;
  setTopK(value: number): RagPromptConfig;

  getRerankModel(): string;
  setRerankModel(value: string): RagPromptConfig;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagPromptConfig;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagPromptConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagPromptConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagPromptConfig): RagPromptConfig.AsObject;
  static serializeBinaryToWriter(message: RagPromptConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagPromptConfig;
  static deserializeBinaryFromReader(message: RagPromptConfig, reader: jspb.BinaryReader): RagPromptConfig;
}

export namespace RagPromptConfig {
  export type AsObject = {
    prompt: string,
    variablesList: Array<RagPromptVariable.AsObject>,
    opener: string,
    showQuote?: boolean,
    emptyResponse: string,
    tts?: boolean,
    refineMultiturn?: boolean,
    similarityThreshold: number,
    keywordsSimilarityWeight: number,
    topN: number,
    topK: number,
    rerankModel: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum ShowQuoteCase { 
    _SHOW_QUOTE_NOT_SET = 0,
    SHOW_QUOTE = 4,
  }

  export enum TtsCase { 
    _TTS_NOT_SET = 0,
    TTS = 6,
  }

  export enum RefineMultiturnCase { 
    _REFINE_MULTITURN_NOT_SET = 0,
    REFINE_MULTITURN = 7,
  }
}

export class RagPromptVariable extends jspb.Message {
  getKey(): string;
  setKey(value: string): RagPromptVariable;

  getOptional(): boolean;
  setOptional(value: boolean): RagPromptVariable;
  hasOptional(): boolean;
  clearOptional(): RagPromptVariable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagPromptVariable.AsObject;
  static toObject(includeInstance: boolean, msg: RagPromptVariable): RagPromptVariable.AsObject;
  static serializeBinaryToWriter(message: RagPromptVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagPromptVariable;
  static deserializeBinaryFromReader(message: RagPromptVariable, reader: jspb.BinaryReader): RagPromptVariable;
}

export namespace RagPromptVariable {
  export type AsObject = {
    key: string,
    optional?: boolean,
  }

  export enum OptionalCase { 
    _OPTIONAL_NOT_SET = 0,
    OPTIONAL = 2,
  }
}

export class RagCreateChatRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagCreateChatRequest;

  getName(): string;
  setName(value: string): RagCreateChatRequest;

  getDescription(): string;
  setDescription(value: string): RagCreateChatRequest;

  getAvatar(): string;
  setAvatar(value: string): RagCreateChatRequest;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): RagCreateChatRequest;
  clearDatasetIdsList(): RagCreateChatRequest;
  addDatasetIds(value: string, index?: number): RagCreateChatRequest;

  getLlm(): RagLLMSetting | undefined;
  setLlm(value?: RagLLMSetting): RagCreateChatRequest;
  hasLlm(): boolean;
  clearLlm(): RagCreateChatRequest;

  getPrompt(): RagPromptConfig | undefined;
  setPrompt(value?: RagPromptConfig): RagCreateChatRequest;
  hasPrompt(): boolean;
  clearPrompt(): RagCreateChatRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateChatRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagCreateChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCreateChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagCreateChatRequest): RagCreateChatRequest.AsObject;
  static serializeBinaryToWriter(message: RagCreateChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCreateChatRequest;
  static deserializeBinaryFromReader(message: RagCreateChatRequest, reader: jspb.BinaryReader): RagCreateChatRequest;
}

export namespace RagCreateChatRequest {
  export type AsObject = {
    parent: string,
    name: string,
    description: string,
    avatar: string,
    datasetIdsList: Array<string>,
    llm?: RagLLMSetting.AsObject,
    prompt?: RagPromptConfig.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagUpdateChatRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUpdateChatRequest;

  getChatId(): string;
  setChatId(value: string): RagUpdateChatRequest;

  getName(): string;
  setName(value: string): RagUpdateChatRequest;

  getDescription(): string;
  setDescription(value: string): RagUpdateChatRequest;

  getAvatar(): string;
  setAvatar(value: string): RagUpdateChatRequest;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): RagUpdateChatRequest;
  clearDatasetIdsList(): RagUpdateChatRequest;
  addDatasetIds(value: string, index?: number): RagUpdateChatRequest;

  getLlm(): RagLLMSetting | undefined;
  setLlm(value?: RagLLMSetting): RagUpdateChatRequest;
  hasLlm(): boolean;
  clearLlm(): RagUpdateChatRequest;

  getPrompt(): RagPromptConfig | undefined;
  setPrompt(value?: RagPromptConfig): RagUpdateChatRequest;
  hasPrompt(): boolean;
  clearPrompt(): RagUpdateChatRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateChatRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagUpdateChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUpdateChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUpdateChatRequest): RagUpdateChatRequest.AsObject;
  static serializeBinaryToWriter(message: RagUpdateChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUpdateChatRequest;
  static deserializeBinaryFromReader(message: RagUpdateChatRequest, reader: jspb.BinaryReader): RagUpdateChatRequest;
}

export namespace RagUpdateChatRequest {
  export type AsObject = {
    parent: string,
    chatId: string,
    name: string,
    description: string,
    avatar: string,
    datasetIdsList: Array<string>,
    llm?: RagLLMSetting.AsObject,
    prompt?: RagPromptConfig.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagDeleteChatsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteChatsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RagDeleteChatsRequest;
  clearIdsList(): RagDeleteChatsRequest;
  addIds(value: string, index?: number): RagDeleteChatsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): RagDeleteChatsRequest;
  hasDeleteAll(): boolean;
  clearDeleteAll(): RagDeleteChatsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteChatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteChatsRequest): RagDeleteChatsRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteChatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteChatsRequest;
  static deserializeBinaryFromReader(message: RagDeleteChatsRequest, reader: jspb.BinaryReader): RagDeleteChatsRequest;
}

export namespace RagDeleteChatsRequest {
  export type AsObject = {
    parent: string,
    idsList: Array<string>,
    deleteAll?: boolean,
  }

  export enum DeleteAllCase { 
    _DELETE_ALL_NOT_SET = 0,
    DELETE_ALL = 3,
  }
}

export class RagListChatsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListChatsRequest;

  getPagination(): RagPagination | undefined;
  setPagination(value?: RagPagination): RagListChatsRequest;
  hasPagination(): boolean;
  clearPagination(): RagListChatsRequest;

  getId(): string;
  setId(value: string): RagListChatsRequest;

  getName(): string;
  setName(value: string): RagListChatsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListChatsRequest;

  getDesc(): boolean;
  setDesc(value: boolean): RagListChatsRequest;
  hasDesc(): boolean;
  clearDesc(): RagListChatsRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListChatsRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagListChatsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListChatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListChatsRequest): RagListChatsRequest.AsObject;
  static serializeBinaryToWriter(message: RagListChatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListChatsRequest;
  static deserializeBinaryFromReader(message: RagListChatsRequest, reader: jspb.BinaryReader): RagListChatsRequest;
}

export namespace RagListChatsRequest {
  export type AsObject = {
    parent: string,
    pagination?: RagPagination.AsObject,
    id: string,
    name: string,
    orderby: string,
    desc?: boolean,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum DescCase { 
    _DESC_NOT_SET = 0,
    DESC = 6,
  }
}

export class RagChatList extends jspb.Message {
  getChatsList(): Array<RagChat>;
  setChatsList(value: Array<RagChat>): RagChatList;
  clearChatsList(): RagChatList;
  addChats(value?: RagChat, index?: number): RagChat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChatList.AsObject;
  static toObject(includeInstance: boolean, msg: RagChatList): RagChatList.AsObject;
  static serializeBinaryToWriter(message: RagChatList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChatList;
  static deserializeBinaryFromReader(message: RagChatList, reader: jspb.BinaryReader): RagChatList;
}

export namespace RagChatList {
  export type AsObject = {
    chatsList: Array<RagChat.AsObject>,
  }
}

export class RagChatSession extends jspb.Message {
  getId(): string;
  setId(value: string): RagChatSession;

  getChatId(): string;
  setChatId(value: string): RagChatSession;

  getName(): string;
  setName(value: string): RagChatSession;

  getMessagesList(): Array<RagMessage>;
  setMessagesList(value: Array<RagMessage>): RagChatSession;
  clearMessagesList(): RagChatSession;
  addMessages(value?: RagMessage, index?: number): RagMessage;

  getCreateTime(): number;
  setCreateTime(value: number): RagChatSession;

  getCreateDate(): string;
  setCreateDate(value: string): RagChatSession;

  getUpdateTime(): number;
  setUpdateTime(value: number): RagChatSession;

  getUpdateDate(): string;
  setUpdateDate(value: string): RagChatSession;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChatSession;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagChatSession;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChatSession.AsObject;
  static toObject(includeInstance: boolean, msg: RagChatSession): RagChatSession.AsObject;
  static serializeBinaryToWriter(message: RagChatSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChatSession;
  static deserializeBinaryFromReader(message: RagChatSession, reader: jspb.BinaryReader): RagChatSession;
}

export namespace RagChatSession {
  export type AsObject = {
    id: string,
    chatId: string,
    name: string,
    messagesList: Array<RagMessage.AsObject>,
    createTime: number,
    createDate: string,
    updateTime: number,
    updateDate: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagMessage extends jspb.Message {
  getRole(): RagMessageRole;
  setRole(value: RagMessageRole): RagMessage;

  getContent(): string;
  setContent(value: string): RagMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RagMessage): RagMessage.AsObject;
  static serializeBinaryToWriter(message: RagMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagMessage;
  static deserializeBinaryFromReader(message: RagMessage, reader: jspb.BinaryReader): RagMessage;
}

export namespace RagMessage {
  export type AsObject = {
    role: RagMessageRole,
    content: string,
  }
}

export class RagCreateChatSessionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagCreateChatSessionRequest;

  getChatId(): string;
  setChatId(value: string): RagCreateChatSessionRequest;

  getName(): string;
  setName(value: string): RagCreateChatSessionRequest;

  getUserId(): string;
  setUserId(value: string): RagCreateChatSessionRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateChatSessionRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagCreateChatSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCreateChatSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagCreateChatSessionRequest): RagCreateChatSessionRequest.AsObject;
  static serializeBinaryToWriter(message: RagCreateChatSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCreateChatSessionRequest;
  static deserializeBinaryFromReader(message: RagCreateChatSessionRequest, reader: jspb.BinaryReader): RagCreateChatSessionRequest;
}

export namespace RagCreateChatSessionRequest {
  export type AsObject = {
    parent: string,
    chatId: string,
    name: string,
    userId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagAgentSession extends jspb.Message {
  getId(): string;
  setId(value: string): RagAgentSession;

  getAgentId(): string;
  setAgentId(value: string): RagAgentSession;

  getUserId(): string;
  setUserId(value: string): RagAgentSession;

  getMessageList(): Array<RagMessage>;
  setMessageList(value: Array<RagMessage>): RagAgentSession;
  clearMessageList(): RagAgentSession;
  addMessage(value?: RagMessage, index?: number): RagMessage;

  getSource(): string;
  setSource(value: string): RagAgentSession;

  getDsl(): google_protobuf_struct_pb.Struct | undefined;
  setDsl(value?: google_protobuf_struct_pb.Struct): RagAgentSession;
  hasDsl(): boolean;
  clearDsl(): RagAgentSession;

  getCreateTime(): number;
  setCreateTime(value: number): RagAgentSession;

  getCreateDate(): string;
  setCreateDate(value: string): RagAgentSession;

  getUpdateTime(): number;
  setUpdateTime(value: number): RagAgentSession;

  getUpdateDate(): string;
  setUpdateDate(value: string): RagAgentSession;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgentSession;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagAgentSession;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAgentSession.AsObject;
  static toObject(includeInstance: boolean, msg: RagAgentSession): RagAgentSession.AsObject;
  static serializeBinaryToWriter(message: RagAgentSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAgentSession;
  static deserializeBinaryFromReader(message: RagAgentSession, reader: jspb.BinaryReader): RagAgentSession;
}

export namespace RagAgentSession {
  export type AsObject = {
    id: string,
    agentId: string,
    userId: string,
    messageList: Array<RagMessage.AsObject>,
    source: string,
    dsl?: google_protobuf_struct_pb.Struct.AsObject,
    createTime: number,
    createDate: string,
    updateTime: number,
    updateDate: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagCreateAgentSessionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagCreateAgentSessionRequest;

  getAgentId(): string;
  setAgentId(value: string): RagCreateAgentSessionRequest;

  getUserId(): string;
  setUserId(value: string): RagCreateAgentSessionRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateAgentSessionRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagCreateAgentSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCreateAgentSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagCreateAgentSessionRequest): RagCreateAgentSessionRequest.AsObject;
  static serializeBinaryToWriter(message: RagCreateAgentSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCreateAgentSessionRequest;
  static deserializeBinaryFromReader(message: RagCreateAgentSessionRequest, reader: jspb.BinaryReader): RagCreateAgentSessionRequest;
}

export namespace RagCreateAgentSessionRequest {
  export type AsObject = {
    parent: string,
    agentId: string,
    userId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagUpdateChatSessionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUpdateChatSessionRequest;

  getChatId(): string;
  setChatId(value: string): RagUpdateChatSessionRequest;

  getSessionId(): string;
  setSessionId(value: string): RagUpdateChatSessionRequest;

  getName(): string;
  setName(value: string): RagUpdateChatSessionRequest;

  getUserId(): string;
  setUserId(value: string): RagUpdateChatSessionRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateChatSessionRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagUpdateChatSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUpdateChatSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUpdateChatSessionRequest): RagUpdateChatSessionRequest.AsObject;
  static serializeBinaryToWriter(message: RagUpdateChatSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUpdateChatSessionRequest;
  static deserializeBinaryFromReader(message: RagUpdateChatSessionRequest, reader: jspb.BinaryReader): RagUpdateChatSessionRequest;
}

export namespace RagUpdateChatSessionRequest {
  export type AsObject = {
    parent: string,
    chatId: string,
    sessionId: string,
    name: string,
    userId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagListChatSessionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListChatSessionsRequest;

  getChatId(): string;
  setChatId(value: string): RagListChatSessionsRequest;

  getPagination(): RagPagination | undefined;
  setPagination(value?: RagPagination): RagListChatSessionsRequest;
  hasPagination(): boolean;
  clearPagination(): RagListChatSessionsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListChatSessionsRequest;

  getDesc(): boolean;
  setDesc(value: boolean): RagListChatSessionsRequest;
  hasDesc(): boolean;
  clearDesc(): RagListChatSessionsRequest;

  getName(): string;
  setName(value: string): RagListChatSessionsRequest;

  getId(): string;
  setId(value: string): RagListChatSessionsRequest;

  getUserId(): string;
  setUserId(value: string): RagListChatSessionsRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListChatSessionsRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagListChatSessionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListChatSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListChatSessionsRequest): RagListChatSessionsRequest.AsObject;
  static serializeBinaryToWriter(message: RagListChatSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListChatSessionsRequest;
  static deserializeBinaryFromReader(message: RagListChatSessionsRequest, reader: jspb.BinaryReader): RagListChatSessionsRequest;
}

export namespace RagListChatSessionsRequest {
  export type AsObject = {
    parent: string,
    chatId: string,
    pagination?: RagPagination.AsObject,
    orderby: string,
    desc?: boolean,
    name: string,
    id: string,
    userId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum DescCase { 
    _DESC_NOT_SET = 0,
    DESC = 5,
  }
}

export class RagChatSessionList extends jspb.Message {
  getChatSessionsList(): Array<RagChatSession>;
  setChatSessionsList(value: Array<RagChatSession>): RagChatSessionList;
  clearChatSessionsList(): RagChatSessionList;
  addChatSessions(value?: RagChatSession, index?: number): RagChatSession;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChatSessionList.AsObject;
  static toObject(includeInstance: boolean, msg: RagChatSessionList): RagChatSessionList.AsObject;
  static serializeBinaryToWriter(message: RagChatSessionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChatSessionList;
  static deserializeBinaryFromReader(message: RagChatSessionList, reader: jspb.BinaryReader): RagChatSessionList;
}

export namespace RagChatSessionList {
  export type AsObject = {
    chatSessionsList: Array<RagChatSession.AsObject>,
  }
}

export class RagListAgentSessionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListAgentSessionsRequest;

  getAgentId(): string;
  setAgentId(value: string): RagListAgentSessionsRequest;

  getPagination(): RagPagination | undefined;
  setPagination(value?: RagPagination): RagListAgentSessionsRequest;
  hasPagination(): boolean;
  clearPagination(): RagListAgentSessionsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListAgentSessionsRequest;

  getDesc(): boolean;
  setDesc(value: boolean): RagListAgentSessionsRequest;
  hasDesc(): boolean;
  clearDesc(): RagListAgentSessionsRequest;

  getId(): string;
  setId(value: string): RagListAgentSessionsRequest;

  getUserId(): string;
  setUserId(value: string): RagListAgentSessionsRequest;

  getDsl(): boolean;
  setDsl(value: boolean): RagListAgentSessionsRequest;
  hasDsl(): boolean;
  clearDsl(): RagListAgentSessionsRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListAgentSessionsRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagListAgentSessionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListAgentSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListAgentSessionsRequest): RagListAgentSessionsRequest.AsObject;
  static serializeBinaryToWriter(message: RagListAgentSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListAgentSessionsRequest;
  static deserializeBinaryFromReader(message: RagListAgentSessionsRequest, reader: jspb.BinaryReader): RagListAgentSessionsRequest;
}

export namespace RagListAgentSessionsRequest {
  export type AsObject = {
    parent: string,
    agentId: string,
    pagination?: RagPagination.AsObject,
    orderby: string,
    desc?: boolean,
    id: string,
    userId: string,
    dsl?: boolean,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum DescCase { 
    _DESC_NOT_SET = 0,
    DESC = 5,
  }

  export enum DslCase { 
    _DSL_NOT_SET = 0,
    DSL = 8,
  }
}

export class RagAgentSessionList extends jspb.Message {
  getAgentSessionsList(): Array<RagAgentSession>;
  setAgentSessionsList(value: Array<RagAgentSession>): RagAgentSessionList;
  clearAgentSessionsList(): RagAgentSessionList;
  addAgentSessions(value?: RagAgentSession, index?: number): RagAgentSession;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAgentSessionList.AsObject;
  static toObject(includeInstance: boolean, msg: RagAgentSessionList): RagAgentSessionList.AsObject;
  static serializeBinaryToWriter(message: RagAgentSessionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAgentSessionList;
  static deserializeBinaryFromReader(message: RagAgentSessionList, reader: jspb.BinaryReader): RagAgentSessionList;
}

export namespace RagAgentSessionList {
  export type AsObject = {
    agentSessionsList: Array<RagAgentSession.AsObject>,
  }
}

export class RagDeleteChatSessionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteChatSessionsRequest;

  getChatId(): string;
  setChatId(value: string): RagDeleteChatSessionsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RagDeleteChatSessionsRequest;
  clearIdsList(): RagDeleteChatSessionsRequest;
  addIds(value: string, index?: number): RagDeleteChatSessionsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): RagDeleteChatSessionsRequest;
  hasDeleteAll(): boolean;
  clearDeleteAll(): RagDeleteChatSessionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteChatSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteChatSessionsRequest): RagDeleteChatSessionsRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteChatSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteChatSessionsRequest;
  static deserializeBinaryFromReader(message: RagDeleteChatSessionsRequest, reader: jspb.BinaryReader): RagDeleteChatSessionsRequest;
}

export namespace RagDeleteChatSessionsRequest {
  export type AsObject = {
    parent: string,
    chatId: string,
    idsList: Array<string>,
    deleteAll?: boolean,
  }

  export enum DeleteAllCase { 
    _DELETE_ALL_NOT_SET = 0,
    DELETE_ALL = 4,
  }
}

export class RagDeleteAgentSessionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteAgentSessionsRequest;

  getAgentId(): string;
  setAgentId(value: string): RagDeleteAgentSessionsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RagDeleteAgentSessionsRequest;
  clearIdsList(): RagDeleteAgentSessionsRequest;
  addIds(value: string, index?: number): RagDeleteAgentSessionsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): RagDeleteAgentSessionsRequest;
  hasDeleteAll(): boolean;
  clearDeleteAll(): RagDeleteAgentSessionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteAgentSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteAgentSessionsRequest): RagDeleteAgentSessionsRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteAgentSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteAgentSessionsRequest;
  static deserializeBinaryFromReader(message: RagDeleteAgentSessionsRequest, reader: jspb.BinaryReader): RagDeleteAgentSessionsRequest;
}

export namespace RagDeleteAgentSessionsRequest {
  export type AsObject = {
    parent: string,
    agentId: string,
    idsList: Array<string>,
    deleteAll?: boolean,
  }

  export enum DeleteAllCase { 
    _DELETE_ALL_NOT_SET = 0,
    DELETE_ALL = 4,
  }
}

export class RagChatCompletionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagChatCompletionRequest;

  getChatId(): string;
  setChatId(value: string): RagChatCompletionRequest;

  getSessionId(): string;
  setSessionId(value: string): RagChatCompletionRequest;

  getQuestion(): string;
  setQuestion(value: string): RagChatCompletionRequest;

  getStream(): boolean;
  setStream(value: boolean): RagChatCompletionRequest;
  hasStream(): boolean;
  clearStream(): RagChatCompletionRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChatCompletionRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagChatCompletionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChatCompletionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagChatCompletionRequest): RagChatCompletionRequest.AsObject;
  static serializeBinaryToWriter(message: RagChatCompletionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChatCompletionRequest;
  static deserializeBinaryFromReader(message: RagChatCompletionRequest, reader: jspb.BinaryReader): RagChatCompletionRequest;
}

export namespace RagChatCompletionRequest {
  export type AsObject = {
    parent: string,
    chatId: string,
    sessionId: string,
    question: string,
    stream?: boolean,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum StreamCase { 
    _STREAM_NOT_SET = 0,
    STREAM = 5,
  }
}

export class RagChatCompletionResponse extends jspb.Message {
  getAnswer(): string;
  setAnswer(value: string): RagChatCompletionResponse;

  getReference(): google_protobuf_struct_pb.Struct | undefined;
  setReference(value?: google_protobuf_struct_pb.Struct): RagChatCompletionResponse;
  hasReference(): boolean;
  clearReference(): RagChatCompletionResponse;

  getAudioBinary(): string;
  setAudioBinary(value: string): RagChatCompletionResponse;

  getId(): string;
  setId(value: string): RagChatCompletionResponse;

  getSessionId(): string;
  setSessionId(value: string): RagChatCompletionResponse;

  getPrompt(): string;
  setPrompt(value: string): RagChatCompletionResponse;

  getCreatedAt(): number;
  setCreatedAt(value: number): RagChatCompletionResponse;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChatCompletionResponse;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagChatCompletionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChatCompletionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagChatCompletionResponse): RagChatCompletionResponse.AsObject;
  static serializeBinaryToWriter(message: RagChatCompletionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChatCompletionResponse;
  static deserializeBinaryFromReader(message: RagChatCompletionResponse, reader: jspb.BinaryReader): RagChatCompletionResponse;
}

export namespace RagChatCompletionResponse {
  export type AsObject = {
    answer: string,
    reference?: google_protobuf_struct_pb.Struct.AsObject,
    audioBinary: string,
    id: string,
    sessionId: string,
    prompt: string,
    createdAt: number,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagOpenAiChatCompletionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagOpenAiChatCompletionRequest;

  getChatId(): string;
  setChatId(value: string): RagOpenAiChatCompletionRequest;

  getModel(): string;
  setModel(value: string): RagOpenAiChatCompletionRequest;

  getMessagesList(): Array<RagMessage>;
  setMessagesList(value: Array<RagMessage>): RagOpenAiChatCompletionRequest;
  clearMessagesList(): RagOpenAiChatCompletionRequest;
  addMessages(value?: RagMessage, index?: number): RagMessage;

  getStream(): boolean;
  setStream(value: boolean): RagOpenAiChatCompletionRequest;
  hasStream(): boolean;
  clearStream(): RagOpenAiChatCompletionRequest;

  getReference(): boolean;
  setReference(value: boolean): RagOpenAiChatCompletionRequest;
  hasReference(): boolean;
  clearReference(): RagOpenAiChatCompletionRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiChatCompletionRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagOpenAiChatCompletionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagOpenAiChatCompletionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagOpenAiChatCompletionRequest): RagOpenAiChatCompletionRequest.AsObject;
  static serializeBinaryToWriter(message: RagOpenAiChatCompletionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagOpenAiChatCompletionRequest;
  static deserializeBinaryFromReader(message: RagOpenAiChatCompletionRequest, reader: jspb.BinaryReader): RagOpenAiChatCompletionRequest;
}

export namespace RagOpenAiChatCompletionRequest {
  export type AsObject = {
    parent: string,
    chatId: string,
    model: string,
    messagesList: Array<RagMessage.AsObject>,
    stream?: boolean,
    reference?: boolean,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum StreamCase { 
    _STREAM_NOT_SET = 0,
    STREAM = 5,
  }

  export enum ReferenceCase { 
    _REFERENCE_NOT_SET = 0,
    REFERENCE = 6,
  }
}

export class RagOpenAiChatCompletionResponse extends jspb.Message {
  getId(): string;
  setId(value: string): RagOpenAiChatCompletionResponse;

  getObject(): string;
  setObject(value: string): RagOpenAiChatCompletionResponse;

  getCreated(): number;
  setCreated(value: number): RagOpenAiChatCompletionResponse;

  getModel(): string;
  setModel(value: string): RagOpenAiChatCompletionResponse;

  getSystemFingerprint(): string;
  setSystemFingerprint(value: string): RagOpenAiChatCompletionResponse;

  getChoicesList(): Array<RagOpenAiChatChoice>;
  setChoicesList(value: Array<RagOpenAiChatChoice>): RagOpenAiChatCompletionResponse;
  clearChoicesList(): RagOpenAiChatCompletionResponse;
  addChoices(value?: RagOpenAiChatChoice, index?: number): RagOpenAiChatChoice;

  getUsage(): RagOpenAiChatUsage | undefined;
  setUsage(value?: RagOpenAiChatUsage): RagOpenAiChatCompletionResponse;
  hasUsage(): boolean;
  clearUsage(): RagOpenAiChatCompletionResponse;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiChatCompletionResponse;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagOpenAiChatCompletionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagOpenAiChatCompletionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagOpenAiChatCompletionResponse): RagOpenAiChatCompletionResponse.AsObject;
  static serializeBinaryToWriter(message: RagOpenAiChatCompletionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagOpenAiChatCompletionResponse;
  static deserializeBinaryFromReader(message: RagOpenAiChatCompletionResponse, reader: jspb.BinaryReader): RagOpenAiChatCompletionResponse;
}

export namespace RagOpenAiChatCompletionResponse {
  export type AsObject = {
    id: string,
    object: string,
    created: number,
    model: string,
    systemFingerprint: string,
    choicesList: Array<RagOpenAiChatChoice.AsObject>,
    usage?: RagOpenAiChatUsage.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagOpenAiChatChoice extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): RagOpenAiChatChoice;

  getMessage(): RagOpenAiChatContent | undefined;
  setMessage(value?: RagOpenAiChatContent): RagOpenAiChatChoice;
  hasMessage(): boolean;
  clearMessage(): RagOpenAiChatChoice;

  getDelta(): RagOpenAiChatContent | undefined;
  setDelta(value?: RagOpenAiChatContent): RagOpenAiChatChoice;
  hasDelta(): boolean;
  clearDelta(): RagOpenAiChatChoice;

  getFinishReason(): string;
  setFinishReason(value: string): RagOpenAiChatChoice;

  getLogprobs(): google_protobuf_struct_pb.Value | undefined;
  setLogprobs(value?: google_protobuf_struct_pb.Value): RagOpenAiChatChoice;
  hasLogprobs(): boolean;
  clearLogprobs(): RagOpenAiChatChoice;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiChatChoice;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagOpenAiChatChoice;

  getContentCase(): RagOpenAiChatChoice.ContentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagOpenAiChatChoice.AsObject;
  static toObject(includeInstance: boolean, msg: RagOpenAiChatChoice): RagOpenAiChatChoice.AsObject;
  static serializeBinaryToWriter(message: RagOpenAiChatChoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagOpenAiChatChoice;
  static deserializeBinaryFromReader(message: RagOpenAiChatChoice, reader: jspb.BinaryReader): RagOpenAiChatChoice;
}

export namespace RagOpenAiChatChoice {
  export type AsObject = {
    index: number,
    message?: RagOpenAiChatContent.AsObject,
    delta?: RagOpenAiChatContent.AsObject,
    finishReason: string,
    logprobs?: google_protobuf_struct_pb.Value.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum ContentCase { 
    CONTENT_NOT_SET = 0,
    MESSAGE = 2,
    DELTA = 3,
  }
}

export class RagOpenAiChatContent extends jspb.Message {
  getRole(): string;
  setRole(value: string): RagOpenAiChatContent;

  getContent(): string;
  setContent(value: string): RagOpenAiChatContent;

  getReasoningContent(): string;
  setReasoningContent(value: string): RagOpenAiChatContent;

  getFunctionCall(): google_protobuf_struct_pb.Value | undefined;
  setFunctionCall(value?: google_protobuf_struct_pb.Value): RagOpenAiChatContent;
  hasFunctionCall(): boolean;
  clearFunctionCall(): RagOpenAiChatContent;

  getToolCalls(): google_protobuf_struct_pb.Value | undefined;
  setToolCalls(value?: google_protobuf_struct_pb.Value): RagOpenAiChatContent;
  hasToolCalls(): boolean;
  clearToolCalls(): RagOpenAiChatContent;

  getReference(): google_protobuf_struct_pb.Value | undefined;
  setReference(value?: google_protobuf_struct_pb.Value): RagOpenAiChatContent;
  hasReference(): boolean;
  clearReference(): RagOpenAiChatContent;

  getFinalContent(): string;
  setFinalContent(value: string): RagOpenAiChatContent;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiChatContent;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagOpenAiChatContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagOpenAiChatContent.AsObject;
  static toObject(includeInstance: boolean, msg: RagOpenAiChatContent): RagOpenAiChatContent.AsObject;
  static serializeBinaryToWriter(message: RagOpenAiChatContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagOpenAiChatContent;
  static deserializeBinaryFromReader(message: RagOpenAiChatContent, reader: jspb.BinaryReader): RagOpenAiChatContent;
}

export namespace RagOpenAiChatContent {
  export type AsObject = {
    role: string,
    content: string,
    reasoningContent: string,
    functionCall?: google_protobuf_struct_pb.Value.AsObject,
    toolCalls?: google_protobuf_struct_pb.Value.AsObject,
    reference?: google_protobuf_struct_pb.Value.AsObject,
    finalContent: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagOpenAiChatUsage extends jspb.Message {
  getPromptTokens(): number;
  setPromptTokens(value: number): RagOpenAiChatUsage;

  getCompletionTokens(): number;
  setCompletionTokens(value: number): RagOpenAiChatUsage;

  getTotalTokens(): number;
  setTotalTokens(value: number): RagOpenAiChatUsage;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiChatUsage;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagOpenAiChatUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagOpenAiChatUsage.AsObject;
  static toObject(includeInstance: boolean, msg: RagOpenAiChatUsage): RagOpenAiChatUsage.AsObject;
  static serializeBinaryToWriter(message: RagOpenAiChatUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagOpenAiChatUsage;
  static deserializeBinaryFromReader(message: RagOpenAiChatUsage, reader: jspb.BinaryReader): RagOpenAiChatUsage;
}

export namespace RagOpenAiChatUsage {
  export type AsObject = {
    promptTokens: number,
    completionTokens: number,
    totalTokens: number,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagAgentCompletionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagAgentCompletionRequest;

  getAgentId(): string;
  setAgentId(value: string): RagAgentCompletionRequest;

  getSessionId(): string;
  setSessionId(value: string): RagAgentCompletionRequest;

  getQuestion(): string;
  setQuestion(value: string): RagAgentCompletionRequest;

  getStream(): boolean;
  setStream(value: boolean): RagAgentCompletionRequest;
  hasStream(): boolean;
  clearStream(): RagAgentCompletionRequest;

  getFilesList(): Array<RagFile>;
  setFilesList(value: Array<RagFile>): RagAgentCompletionRequest;
  clearFilesList(): RagAgentCompletionRequest;
  addFiles(value?: RagFile, index?: number): RagFile;

  getInputs(): google_protobuf_struct_pb.Struct | undefined;
  setInputs(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionRequest;
  hasInputs(): boolean;
  clearInputs(): RagAgentCompletionRequest;

  getUserId(): string;
  setUserId(value: string): RagAgentCompletionRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagAgentCompletionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAgentCompletionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagAgentCompletionRequest): RagAgentCompletionRequest.AsObject;
  static serializeBinaryToWriter(message: RagAgentCompletionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAgentCompletionRequest;
  static deserializeBinaryFromReader(message: RagAgentCompletionRequest, reader: jspb.BinaryReader): RagAgentCompletionRequest;
}

export namespace RagAgentCompletionRequest {
  export type AsObject = {
    parent: string,
    agentId: string,
    sessionId: string,
    question: string,
    stream?: boolean,
    filesList: Array<RagFile.AsObject>,
    inputs?: google_protobuf_struct_pb.Struct.AsObject,
    userId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum StreamCase { 
    _STREAM_NOT_SET = 0,
    STREAM = 5,
  }
}

export class RagAgentCompletionResponse extends jspb.Message {
  getEvent(): RagAgentEventType;
  setEvent(value: RagAgentEventType): RagAgentCompletionResponse;

  getMessageId(): string;
  setMessageId(value: string): RagAgentCompletionResponse;

  getCreatedAt(): number;
  setCreatedAt(value: number): RagAgentCompletionResponse;

  getTaskId(): string;
  setTaskId(value: string): RagAgentCompletionResponse;

  getData(): RagAgentCompletionData | undefined;
  setData(value?: RagAgentCompletionData): RagAgentCompletionResponse;
  hasData(): boolean;
  clearData(): RagAgentCompletionResponse;

  getSessionId(): string;
  setSessionId(value: string): RagAgentCompletionResponse;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionResponse;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagAgentCompletionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAgentCompletionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagAgentCompletionResponse): RagAgentCompletionResponse.AsObject;
  static serializeBinaryToWriter(message: RagAgentCompletionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAgentCompletionResponse;
  static deserializeBinaryFromReader(message: RagAgentCompletionResponse, reader: jspb.BinaryReader): RagAgentCompletionResponse;
}

export namespace RagAgentCompletionResponse {
  export type AsObject = {
    event: RagAgentEventType,
    messageId: string,
    createdAt: number,
    taskId: string,
    data?: RagAgentCompletionData.AsObject,
    sessionId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagAgentCompletionData extends jspb.Message {
  getContent(): string;
  setContent(value: string): RagAgentCompletionData;

  getInputs(): google_protobuf_struct_pb.Struct | undefined;
  setInputs(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionData;
  hasInputs(): boolean;
  clearInputs(): RagAgentCompletionData;

  getOutputs(): google_protobuf_struct_pb.Struct | undefined;
  setOutputs(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionData;
  hasOutputs(): boolean;
  clearOutputs(): RagAgentCompletionData;

  getReference(): google_protobuf_struct_pb.Struct | undefined;
  setReference(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionData;
  hasReference(): boolean;
  clearReference(): RagAgentCompletionData;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgentCompletionData;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagAgentCompletionData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAgentCompletionData.AsObject;
  static toObject(includeInstance: boolean, msg: RagAgentCompletionData): RagAgentCompletionData.AsObject;
  static serializeBinaryToWriter(message: RagAgentCompletionData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAgentCompletionData;
  static deserializeBinaryFromReader(message: RagAgentCompletionData, reader: jspb.BinaryReader): RagAgentCompletionData;
}

export namespace RagAgentCompletionData {
  export type AsObject = {
    content: string,
    inputs?: google_protobuf_struct_pb.Struct.AsObject,
    outputs?: google_protobuf_struct_pb.Struct.AsObject,
    reference?: google_protobuf_struct_pb.Struct.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagOpenAiAgentCompletionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagOpenAiAgentCompletionRequest;

  getAgentId(): string;
  setAgentId(value: string): RagOpenAiAgentCompletionRequest;

  getModel(): string;
  setModel(value: string): RagOpenAiAgentCompletionRequest;

  getMessagesList(): Array<RagMessage>;
  setMessagesList(value: Array<RagMessage>): RagOpenAiAgentCompletionRequest;
  clearMessagesList(): RagOpenAiAgentCompletionRequest;
  addMessages(value?: RagMessage, index?: number): RagMessage;

  getStream(): boolean;
  setStream(value: boolean): RagOpenAiAgentCompletionRequest;
  hasStream(): boolean;
  clearStream(): RagOpenAiAgentCompletionRequest;

  getSessionId(): string;
  setSessionId(value: string): RagOpenAiAgentCompletionRequest;

  getId(): string;
  setId(value: string): RagOpenAiAgentCompletionRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagOpenAiAgentCompletionRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagOpenAiAgentCompletionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagOpenAiAgentCompletionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagOpenAiAgentCompletionRequest): RagOpenAiAgentCompletionRequest.AsObject;
  static serializeBinaryToWriter(message: RagOpenAiAgentCompletionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagOpenAiAgentCompletionRequest;
  static deserializeBinaryFromReader(message: RagOpenAiAgentCompletionRequest, reader: jspb.BinaryReader): RagOpenAiAgentCompletionRequest;
}

export namespace RagOpenAiAgentCompletionRequest {
  export type AsObject = {
    parent: string,
    agentId: string,
    model: string,
    messagesList: Array<RagMessage.AsObject>,
    stream?: boolean,
    sessionId: string,
    id: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum StreamCase { 
    _STREAM_NOT_SET = 0,
    STREAM = 5,
  }
}

export class RagAgent extends jspb.Message {
  getId(): string;
  setId(value: string): RagAgent;

  getTitle(): string;
  setTitle(value: string): RagAgent;

  getDescription(): string;
  setDescription(value: string): RagAgent;

  getAvatar(): string;
  setAvatar(value: string): RagAgent;

  getDsl(): google_protobuf_struct_pb.Struct | undefined;
  setDsl(value?: google_protobuf_struct_pb.Struct): RagAgent;
  hasDsl(): boolean;
  clearDsl(): RagAgent;

  getCreateTime(): number;
  setCreateTime(value: number): RagAgent;

  getCreateDate(): string;
  setCreateDate(value: string): RagAgent;

  getUpdateTime(): number;
  setUpdateTime(value: number): RagAgent;

  getUpdateDate(): string;
  setUpdateDate(value: string): RagAgent;

  getUserId(): string;
  setUserId(value: string): RagAgent;

  getCanvasType(): string;
  setCanvasType(value: string): RagAgent;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgent;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAgent.AsObject;
  static toObject(includeInstance: boolean, msg: RagAgent): RagAgent.AsObject;
  static serializeBinaryToWriter(message: RagAgent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAgent;
  static deserializeBinaryFromReader(message: RagAgent, reader: jspb.BinaryReader): RagAgent;
}

export namespace RagAgent {
  export type AsObject = {
    id: string,
    title: string,
    description: string,
    avatar: string,
    dsl?: google_protobuf_struct_pb.Struct.AsObject,
    createTime: number,
    createDate: string,
    updateTime: number,
    updateDate: string,
    userId: string,
    canvasType: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagCreateAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagCreateAgentRequest;

  getTitle(): string;
  setTitle(value: string): RagCreateAgentRequest;

  getDescription(): string;
  setDescription(value: string): RagCreateAgentRequest;

  getDsl(): google_protobuf_struct_pb.Struct | undefined;
  setDsl(value?: google_protobuf_struct_pb.Struct): RagCreateAgentRequest;
  hasDsl(): boolean;
  clearDsl(): RagCreateAgentRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateAgentRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagCreateAgentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCreateAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagCreateAgentRequest): RagCreateAgentRequest.AsObject;
  static serializeBinaryToWriter(message: RagCreateAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCreateAgentRequest;
  static deserializeBinaryFromReader(message: RagCreateAgentRequest, reader: jspb.BinaryReader): RagCreateAgentRequest;
}

export namespace RagCreateAgentRequest {
  export type AsObject = {
    parent: string,
    title: string,
    description: string,
    dsl?: google_protobuf_struct_pb.Struct.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagUpdateAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUpdateAgentRequest;

  getAgentId(): string;
  setAgentId(value: string): RagUpdateAgentRequest;

  getTitle(): string;
  setTitle(value: string): RagUpdateAgentRequest;

  getDescription(): string;
  setDescription(value: string): RagUpdateAgentRequest;

  getDsl(): google_protobuf_struct_pb.Struct | undefined;
  setDsl(value?: google_protobuf_struct_pb.Struct): RagUpdateAgentRequest;
  hasDsl(): boolean;
  clearDsl(): RagUpdateAgentRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagUpdateAgentRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagUpdateAgentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUpdateAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUpdateAgentRequest): RagUpdateAgentRequest.AsObject;
  static serializeBinaryToWriter(message: RagUpdateAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUpdateAgentRequest;
  static deserializeBinaryFromReader(message: RagUpdateAgentRequest, reader: jspb.BinaryReader): RagUpdateAgentRequest;
}

export namespace RagUpdateAgentRequest {
  export type AsObject = {
    parent: string,
    agentId: string,
    title: string,
    description: string,
    dsl?: google_protobuf_struct_pb.Struct.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagDeleteAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteAgentRequest;

  getAgentId(): string;
  setAgentId(value: string): RagDeleteAgentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteAgentRequest): RagDeleteAgentRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteAgentRequest;
  static deserializeBinaryFromReader(message: RagDeleteAgentRequest, reader: jspb.BinaryReader): RagDeleteAgentRequest;
}

export namespace RagDeleteAgentRequest {
  export type AsObject = {
    parent: string,
    agentId: string,
  }
}

export class RagListAgentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListAgentsRequest;

  getPagination(): RagPagination | undefined;
  setPagination(value?: RagPagination): RagListAgentsRequest;
  hasPagination(): boolean;
  clearPagination(): RagListAgentsRequest;

  getTitle(): string;
  setTitle(value: string): RagListAgentsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListAgentsRequest;

  getDesc(): boolean;
  setDesc(value: boolean): RagListAgentsRequest;
  hasDesc(): boolean;
  clearDesc(): RagListAgentsRequest;

  getId(): string;
  setId(value: string): RagListAgentsRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListAgentsRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagListAgentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListAgentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListAgentsRequest): RagListAgentsRequest.AsObject;
  static serializeBinaryToWriter(message: RagListAgentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListAgentsRequest;
  static deserializeBinaryFromReader(message: RagListAgentsRequest, reader: jspb.BinaryReader): RagListAgentsRequest;
}

export namespace RagListAgentsRequest {
  export type AsObject = {
    parent: string,
    pagination?: RagPagination.AsObject,
    title: string,
    orderby: string,
    desc?: boolean,
    id: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum DescCase { 
    _DESC_NOT_SET = 0,
    DESC = 5,
  }
}

export class RagAgentList extends jspb.Message {
  getAgentsList(): Array<RagAgent>;
  setAgentsList(value: Array<RagAgent>): RagAgentList;
  clearAgentsList(): RagAgentList;
  addAgents(value?: RagAgent, index?: number): RagAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAgentList.AsObject;
  static toObject(includeInstance: boolean, msg: RagAgentList): RagAgentList.AsObject;
  static serializeBinaryToWriter(message: RagAgentList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAgentList;
  static deserializeBinaryFromReader(message: RagAgentList, reader: jspb.BinaryReader): RagAgentList;
}

export namespace RagAgentList {
  export type AsObject = {
    agentsList: Array<RagAgent.AsObject>,
  }
}

export class RagFile extends jspb.Message {
  getId(): string;
  setId(value: string): RagFile;

  getName(): string;
  setName(value: string): RagFile;

  getType(): string;
  setType(value: string): RagFile;

  getSize(): number;
  setSize(value: number): RagFile;

  getParentId(): string;
  setParentId(value: string): RagFile;

  getCreateTime(): number;
  setCreateTime(value: number): RagFile;

  getCreateDate(): string;
  setCreateDate(value: string): RagFile;

  getUpdateTime(): number;
  setUpdateTime(value: number): RagFile;

  getUpdateDate(): string;
  setUpdateDate(value: string): RagFile;

  getLocation(): string;
  setLocation(value: string): RagFile;

  getSourceType(): string;
  setSourceType(value: string): RagFile;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagFile;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagFile.AsObject;
  static toObject(includeInstance: boolean, msg: RagFile): RagFile.AsObject;
  static serializeBinaryToWriter(message: RagFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagFile;
  static deserializeBinaryFromReader(message: RagFile, reader: jspb.BinaryReader): RagFile;
}

export namespace RagFile {
  export type AsObject = {
    id: string,
    name: string,
    type: string,
    size: number,
    parentId: string,
    createTime: number,
    createDate: string,
    updateTime: number,
    updateDate: string,
    location: string,
    sourceType: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagUploadFilesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUploadFilesRequest;

  getMetadata(): RagUploadFilesRequest.RagMetadata | undefined;
  setMetadata(value?: RagUploadFilesRequest.RagMetadata): RagUploadFilesRequest;
  hasMetadata(): boolean;
  clearMetadata(): RagUploadFilesRequest;

  getChunk(): RagUploadChunk | undefined;
  setChunk(value?: RagUploadChunk): RagUploadFilesRequest;
  hasChunk(): boolean;
  clearChunk(): RagUploadFilesRequest;

  getPayloadCase(): RagUploadFilesRequest.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUploadFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUploadFilesRequest): RagUploadFilesRequest.AsObject;
  static serializeBinaryToWriter(message: RagUploadFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUploadFilesRequest;
  static deserializeBinaryFromReader(message: RagUploadFilesRequest, reader: jspb.BinaryReader): RagUploadFilesRequest;
}

export namespace RagUploadFilesRequest {
  export type AsObject = {
    parent: string,
    metadata?: RagUploadFilesRequest.RagMetadata.AsObject,
    chunk?: RagUploadChunk.AsObject,
  }

  export class RagMetadata extends jspb.Message {
    getParentId(): string;
    setParentId(value: string): RagMetadata;

    getFilesList(): Array<RagFileMetadata>;
    setFilesList(value: Array<RagFileMetadata>): RagMetadata;
    clearFilesList(): RagMetadata;
    addFiles(value?: RagFileMetadata, index?: number): RagFileMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RagMetadata): RagMetadata.AsObject;
    static serializeBinaryToWriter(message: RagMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagMetadata;
    static deserializeBinaryFromReader(message: RagMetadata, reader: jspb.BinaryReader): RagMetadata;
  }

  export namespace RagMetadata {
    export type AsObject = {
      parentId: string,
      filesList: Array<RagFileMetadata.AsObject>,
    }
  }


  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    METADATA = 2,
    CHUNK = 3,
  }
}

export class RagFileList extends jspb.Message {
  getFilesList(): Array<RagFile>;
  setFilesList(value: Array<RagFile>): RagFileList;
  clearFilesList(): RagFileList;
  addFiles(value?: RagFile, index?: number): RagFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagFileList.AsObject;
  static toObject(includeInstance: boolean, msg: RagFileList): RagFileList.AsObject;
  static serializeBinaryToWriter(message: RagFileList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagFileList;
  static deserializeBinaryFromReader(message: RagFileList, reader: jspb.BinaryReader): RagFileList;
}

export namespace RagFileList {
  export type AsObject = {
    filesList: Array<RagFile.AsObject>,
  }
}

export class RagCreateFileRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagCreateFileRequest;

  getName(): string;
  setName(value: string): RagCreateFileRequest;

  getParentId(): string;
  setParentId(value: string): RagCreateFileRequest;

  getType(): string;
  setType(value: string): RagCreateFileRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagCreateFileRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagCreateFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCreateFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagCreateFileRequest): RagCreateFileRequest.AsObject;
  static serializeBinaryToWriter(message: RagCreateFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCreateFileRequest;
  static deserializeBinaryFromReader(message: RagCreateFileRequest, reader: jspb.BinaryReader): RagCreateFileRequest;
}

export namespace RagCreateFileRequest {
  export type AsObject = {
    parent: string,
    name: string,
    parentId: string,
    type: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagListFilesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListFilesRequest;

  getParentId(): string;
  setParentId(value: string): RagListFilesRequest;

  getPagination(): RagPagination | undefined;
  setPagination(value?: RagPagination): RagListFilesRequest;
  hasPagination(): boolean;
  clearPagination(): RagListFilesRequest;

  getKeywords(): string;
  setKeywords(value: string): RagListFilesRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListFilesRequest;

  getDesc(): boolean;
  setDesc(value: boolean): RagListFilesRequest;
  hasDesc(): boolean;
  clearDesc(): RagListFilesRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagListFilesRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagListFilesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListFilesRequest): RagListFilesRequest.AsObject;
  static serializeBinaryToWriter(message: RagListFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListFilesRequest;
  static deserializeBinaryFromReader(message: RagListFilesRequest, reader: jspb.BinaryReader): RagListFilesRequest;
}

export namespace RagListFilesRequest {
  export type AsObject = {
    parent: string,
    parentId: string,
    pagination?: RagPagination.AsObject,
    keywords: string,
    orderby: string,
    desc?: boolean,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum DescCase { 
    _DESC_NOT_SET = 0,
    DESC = 6,
  }
}

export class RagListFilesResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): RagListFilesResponse;

  getFilesList(): Array<RagFile>;
  setFilesList(value: Array<RagFile>): RagListFilesResponse;
  clearFilesList(): RagListFilesResponse;
  addFiles(value?: RagFile, index?: number): RagFile;

  getParentFolder(): RagFile | undefined;
  setParentFolder(value?: RagFile): RagListFilesResponse;
  hasParentFolder(): boolean;
  clearParentFolder(): RagListFilesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagListFilesResponse): RagListFilesResponse.AsObject;
  static serializeBinaryToWriter(message: RagListFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListFilesResponse;
  static deserializeBinaryFromReader(message: RagListFilesResponse, reader: jspb.BinaryReader): RagListFilesResponse;
}

export namespace RagListFilesResponse {
  export type AsObject = {
    total: number,
    filesList: Array<RagFile.AsObject>,
    parentFolder?: RagFile.AsObject,
  }
}

export class RagGetRootFolderResponse extends jspb.Message {
  getRootFolder(): RagFile | undefined;
  setRootFolder(value?: RagFile): RagGetRootFolderResponse;
  hasRootFolder(): boolean;
  clearRootFolder(): RagGetRootFolderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetRootFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetRootFolderResponse): RagGetRootFolderResponse.AsObject;
  static serializeBinaryToWriter(message: RagGetRootFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetRootFolderResponse;
  static deserializeBinaryFromReader(message: RagGetRootFolderResponse, reader: jspb.BinaryReader): RagGetRootFolderResponse;
}

export namespace RagGetRootFolderResponse {
  export type AsObject = {
    rootFolder?: RagFile.AsObject,
  }
}

export class RagGetParentFolderResponse extends jspb.Message {
  getParentFolder(): RagFile | undefined;
  setParentFolder(value?: RagFile): RagGetParentFolderResponse;
  hasParentFolder(): boolean;
  clearParentFolder(): RagGetParentFolderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetParentFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetParentFolderResponse): RagGetParentFolderResponse.AsObject;
  static serializeBinaryToWriter(message: RagGetParentFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetParentFolderResponse;
  static deserializeBinaryFromReader(message: RagGetParentFolderResponse, reader: jspb.BinaryReader): RagGetParentFolderResponse;
}

export namespace RagGetParentFolderResponse {
  export type AsObject = {
    parentFolder?: RagFile.AsObject,
  }
}

export class RagGetAllParentFoldersResponse extends jspb.Message {
  getParentFoldersList(): Array<RagFile>;
  setParentFoldersList(value: Array<RagFile>): RagGetAllParentFoldersResponse;
  clearParentFoldersList(): RagGetAllParentFoldersResponse;
  addParentFolders(value?: RagFile, index?: number): RagFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetAllParentFoldersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetAllParentFoldersResponse): RagGetAllParentFoldersResponse.AsObject;
  static serializeBinaryToWriter(message: RagGetAllParentFoldersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetAllParentFoldersResponse;
  static deserializeBinaryFromReader(message: RagGetAllParentFoldersResponse, reader: jspb.BinaryReader): RagGetAllParentFoldersResponse;
}

export namespace RagGetAllParentFoldersResponse {
  export type AsObject = {
    parentFoldersList: Array<RagFile.AsObject>,
  }
}

export class RagGetRootFolderRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagGetRootFolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetRootFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetRootFolderRequest): RagGetRootFolderRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetRootFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetRootFolderRequest;
  static deserializeBinaryFromReader(message: RagGetRootFolderRequest, reader: jspb.BinaryReader): RagGetRootFolderRequest;
}

export namespace RagGetRootFolderRequest {
  export type AsObject = {
    parent: string,
  }
}

export class RagGetParentFolderRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagGetParentFolderRequest;

  getFileId(): string;
  setFileId(value: string): RagGetParentFolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetParentFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetParentFolderRequest): RagGetParentFolderRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetParentFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetParentFolderRequest;
  static deserializeBinaryFromReader(message: RagGetParentFolderRequest, reader: jspb.BinaryReader): RagGetParentFolderRequest;
}

export namespace RagGetParentFolderRequest {
  export type AsObject = {
    parent: string,
    fileId: string,
  }
}

export class RagGetAllParentFoldersRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagGetAllParentFoldersRequest;

  getFileId(): string;
  setFileId(value: string): RagGetAllParentFoldersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetAllParentFoldersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetAllParentFoldersRequest): RagGetAllParentFoldersRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetAllParentFoldersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetAllParentFoldersRequest;
  static deserializeBinaryFromReader(message: RagGetAllParentFoldersRequest, reader: jspb.BinaryReader): RagGetAllParentFoldersRequest;
}

export namespace RagGetAllParentFoldersRequest {
  export type AsObject = {
    parent: string,
    fileId: string,
  }
}

export class RagGetFileRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagGetFileRequest;

  getFileId(): string;
  setFileId(value: string): RagGetFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetFileRequest): RagGetFileRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetFileRequest;
  static deserializeBinaryFromReader(message: RagGetFileRequest, reader: jspb.BinaryReader): RagGetFileRequest;
}

export namespace RagGetFileRequest {
  export type AsObject = {
    parent: string,
    fileId: string,
  }
}

export class RagFileID extends jspb.Message {
  getFileId(): string;
  setFileId(value: string): RagFileID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagFileID.AsObject;
  static toObject(includeInstance: boolean, msg: RagFileID): RagFileID.AsObject;
  static serializeBinaryToWriter(message: RagFileID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagFileID;
  static deserializeBinaryFromReader(message: RagFileID, reader: jspb.BinaryReader): RagFileID;
}

export namespace RagFileID {
  export type AsObject = {
    fileId: string,
  }
}

export class RagDeleteFilesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteFilesRequest;

  getFileIdsList(): Array<string>;
  setFileIdsList(value: Array<string>): RagDeleteFilesRequest;
  clearFileIdsList(): RagDeleteFilesRequest;
  addFileIds(value: string, index?: number): RagDeleteFilesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteFilesRequest): RagDeleteFilesRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteFilesRequest;
  static deserializeBinaryFromReader(message: RagDeleteFilesRequest, reader: jspb.BinaryReader): RagDeleteFilesRequest;
}

export namespace RagDeleteFilesRequest {
  export type AsObject = {
    parent: string,
    fileIdsList: Array<string>,
  }
}

export class RagRenameFileRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagRenameFileRequest;

  getFileId(): string;
  setFileId(value: string): RagRenameFileRequest;

  getName(): string;
  setName(value: string): RagRenameFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagRenameFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagRenameFileRequest): RagRenameFileRequest.AsObject;
  static serializeBinaryToWriter(message: RagRenameFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagRenameFileRequest;
  static deserializeBinaryFromReader(message: RagRenameFileRequest, reader: jspb.BinaryReader): RagRenameFileRequest;
}

export namespace RagRenameFileRequest {
  export type AsObject = {
    parent: string,
    fileId: string,
    name: string,
  }
}

export class RagMoveFileRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagMoveFileRequest;

  getSrcFileIdsList(): Array<string>;
  setSrcFileIdsList(value: Array<string>): RagMoveFileRequest;
  clearSrcFileIdsList(): RagMoveFileRequest;
  addSrcFileIds(value: string, index?: number): RagMoveFileRequest;

  getDestFileId(): string;
  setDestFileId(value: string): RagMoveFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagMoveFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagMoveFileRequest): RagMoveFileRequest.AsObject;
  static serializeBinaryToWriter(message: RagMoveFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagMoveFileRequest;
  static deserializeBinaryFromReader(message: RagMoveFileRequest, reader: jspb.BinaryReader): RagMoveFileRequest;
}

export namespace RagMoveFileRequest {
  export type AsObject = {
    parent: string,
    srcFileIdsList: Array<string>,
    destFileId: string,
  }
}

export class RagFileToDocumentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagFileToDocumentRequest;

  getFileIdsList(): Array<string>;
  setFileIdsList(value: Array<string>): RagFileToDocumentRequest;
  clearFileIdsList(): RagFileToDocumentRequest;
  addFileIds(value: string, index?: number): RagFileToDocumentRequest;

  getKbIdsList(): Array<string>;
  setKbIdsList(value: Array<string>): RagFileToDocumentRequest;
  clearKbIdsList(): RagFileToDocumentRequest;
  addKbIds(value: string, index?: number): RagFileToDocumentRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagFileToDocumentRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagFileToDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagFileToDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagFileToDocumentRequest): RagFileToDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: RagFileToDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagFileToDocumentRequest;
  static deserializeBinaryFromReader(message: RagFileToDocumentRequest, reader: jspb.BinaryReader): RagFileToDocumentRequest;
}

export namespace RagFileToDocumentRequest {
  export type AsObject = {
    parent: string,
    fileIdsList: Array<string>,
    kbIdsList: Array<string>,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagFileToDocument extends jspb.Message {
  getId(): string;
  setId(value: string): RagFileToDocument;

  getFileId(): string;
  setFileId(value: string): RagFileToDocument;

  getDocumentId(): string;
  setDocumentId(value: string): RagFileToDocument;

  getCreateTime(): number;
  setCreateTime(value: number): RagFileToDocument;

  getCreateDate(): string;
  setCreateDate(value: string): RagFileToDocument;

  getUpdateTime(): number;
  setUpdateTime(value: number): RagFileToDocument;

  getUpdateDate(): string;
  setUpdateDate(value: string): RagFileToDocument;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagFileToDocument;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagFileToDocument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagFileToDocument.AsObject;
  static toObject(includeInstance: boolean, msg: RagFileToDocument): RagFileToDocument.AsObject;
  static serializeBinaryToWriter(message: RagFileToDocument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagFileToDocument;
  static deserializeBinaryFromReader(message: RagFileToDocument, reader: jspb.BinaryReader): RagFileToDocument;
}

export namespace RagFileToDocument {
  export type AsObject = {
    id: string,
    fileId: string,
    documentId: string,
    createTime: number,
    createDate: string,
    updateTime: number,
    updateDate: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagFileToDocumentList extends jspb.Message {
  getFilestodocumentsList(): Array<RagFileToDocument>;
  setFilestodocumentsList(value: Array<RagFileToDocument>): RagFileToDocumentList;
  clearFilestodocumentsList(): RagFileToDocumentList;
  addFilestodocuments(value?: RagFileToDocument, index?: number): RagFileToDocument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagFileToDocumentList.AsObject;
  static toObject(includeInstance: boolean, msg: RagFileToDocumentList): RagFileToDocumentList.AsObject;
  static serializeBinaryToWriter(message: RagFileToDocumentList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagFileToDocumentList;
  static deserializeBinaryFromReader(message: RagFileToDocumentList, reader: jspb.BinaryReader): RagFileToDocumentList;
}

export namespace RagFileToDocumentList {
  export type AsObject = {
    filestodocumentsList: Array<RagFileToDocument.AsObject>,
  }
}

export class RagDifyRetrievalRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDifyRetrievalRequest;

  getKnowledgeId(): string;
  setKnowledgeId(value: string): RagDifyRetrievalRequest;

  getQuery(): string;
  setQuery(value: string): RagDifyRetrievalRequest;

  getRetrievalSetting(): RagDifyRetrievalSetting | undefined;
  setRetrievalSetting(value?: RagDifyRetrievalSetting): RagDifyRetrievalRequest;
  hasRetrievalSetting(): boolean;
  clearRetrievalSetting(): RagDifyRetrievalRequest;

  getMetadataCondition(): google_protobuf_struct_pb.Struct | undefined;
  setMetadataCondition(value?: google_protobuf_struct_pb.Struct): RagDifyRetrievalRequest;
  hasMetadataCondition(): boolean;
  clearMetadataCondition(): RagDifyRetrievalRequest;

  getUseKg(): boolean;
  setUseKg(value: boolean): RagDifyRetrievalRequest;
  hasUseKg(): boolean;
  clearUseKg(): RagDifyRetrievalRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagDifyRetrievalRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagDifyRetrievalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDifyRetrievalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDifyRetrievalRequest): RagDifyRetrievalRequest.AsObject;
  static serializeBinaryToWriter(message: RagDifyRetrievalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDifyRetrievalRequest;
  static deserializeBinaryFromReader(message: RagDifyRetrievalRequest, reader: jspb.BinaryReader): RagDifyRetrievalRequest;
}

export namespace RagDifyRetrievalRequest {
  export type AsObject = {
    parent: string,
    knowledgeId: string,
    query: string,
    retrievalSetting?: RagDifyRetrievalSetting.AsObject,
    metadataCondition?: google_protobuf_struct_pb.Struct.AsObject,
    useKg?: boolean,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum UseKgCase { 
    _USE_KG_NOT_SET = 0,
    USE_KG = 6,
  }
}

export class RagDifyRetrievalSetting extends jspb.Message {
  getScoreThreshold(): number;
  setScoreThreshold(value: number): RagDifyRetrievalSetting;

  getTopK(): number;
  setTopK(value: number): RagDifyRetrievalSetting;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagDifyRetrievalSetting;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagDifyRetrievalSetting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDifyRetrievalSetting.AsObject;
  static toObject(includeInstance: boolean, msg: RagDifyRetrievalSetting): RagDifyRetrievalSetting.AsObject;
  static serializeBinaryToWriter(message: RagDifyRetrievalSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDifyRetrievalSetting;
  static deserializeBinaryFromReader(message: RagDifyRetrievalSetting, reader: jspb.BinaryReader): RagDifyRetrievalSetting;
}

export namespace RagDifyRetrievalSetting {
  export type AsObject = {
    scoreThreshold: number,
    topK: number,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagDifyRecordList extends jspb.Message {
  getRecordsList(): Array<RagDifyRecord>;
  setRecordsList(value: Array<RagDifyRecord>): RagDifyRecordList;
  clearRecordsList(): RagDifyRecordList;
  addRecords(value?: RagDifyRecord, index?: number): RagDifyRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDifyRecordList.AsObject;
  static toObject(includeInstance: boolean, msg: RagDifyRecordList): RagDifyRecordList.AsObject;
  static serializeBinaryToWriter(message: RagDifyRecordList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDifyRecordList;
  static deserializeBinaryFromReader(message: RagDifyRecordList, reader: jspb.BinaryReader): RagDifyRecordList;
}

export namespace RagDifyRecordList {
  export type AsObject = {
    recordsList: Array<RagDifyRecord.AsObject>,
  }
}

export class RagDifyRecord extends jspb.Message {
  getContent(): string;
  setContent(value: string): RagDifyRecord;

  getScore(): number;
  setScore(value: number): RagDifyRecord;

  getTitle(): string;
  setTitle(value: string): RagDifyRecord;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): RagDifyRecord;
  hasMetadata(): boolean;
  clearMetadata(): RagDifyRecord;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagDifyRecord;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagDifyRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDifyRecord.AsObject;
  static toObject(includeInstance: boolean, msg: RagDifyRecord): RagDifyRecord.AsObject;
  static serializeBinaryToWriter(message: RagDifyRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDifyRecord;
  static deserializeBinaryFromReader(message: RagDifyRecord, reader: jspb.BinaryReader): RagDifyRecord;
}

export namespace RagDifyRecord {
  export type AsObject = {
    content: string,
    score: number,
    title: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagAskRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagAskRequest;

  getQuestion(): string;
  setQuestion(value: string): RagAskRequest;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): RagAskRequest;
  clearDatasetIdsList(): RagAskRequest;
  addDatasetIds(value: string, index?: number): RagAskRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAskRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagAskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagAskRequest): RagAskRequest.AsObject;
  static serializeBinaryToWriter(message: RagAskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAskRequest;
  static deserializeBinaryFromReader(message: RagAskRequest, reader: jspb.BinaryReader): RagAskRequest;
}

export namespace RagAskRequest {
  export type AsObject = {
    parent: string,
    question: string,
    datasetIdsList: Array<string>,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagAskResponse extends jspb.Message {
  getAnswer(): string;
  setAnswer(value: string): RagAskResponse;

  getReference(): google_protobuf_struct_pb.Struct | undefined;
  setReference(value?: google_protobuf_struct_pb.Struct): RagAskResponse;
  hasReference(): boolean;
  clearReference(): RagAskResponse;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAskResponse;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagAskResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagAskResponse): RagAskResponse.AsObject;
  static serializeBinaryToWriter(message: RagAskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAskResponse;
  static deserializeBinaryFromReader(message: RagAskResponse, reader: jspb.BinaryReader): RagAskResponse;
}

export namespace RagAskResponse {
  export type AsObject = {
    answer: string,
    reference?: google_protobuf_struct_pb.Struct.AsObject,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagRelatedQuestionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagRelatedQuestionsRequest;

  getQuestion(): string;
  setQuestion(value: string): RagRelatedQuestionsRequest;

  getIndustry(): string;
  setIndustry(value: string): RagRelatedQuestionsRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagRelatedQuestionsRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagRelatedQuestionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagRelatedQuestionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagRelatedQuestionsRequest): RagRelatedQuestionsRequest.AsObject;
  static serializeBinaryToWriter(message: RagRelatedQuestionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagRelatedQuestionsRequest;
  static deserializeBinaryFromReader(message: RagRelatedQuestionsRequest, reader: jspb.BinaryReader): RagRelatedQuestionsRequest;
}

export namespace RagRelatedQuestionsRequest {
  export type AsObject = {
    parent: string,
    question: string,
    industry: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagRelatedQuestionsResponse extends jspb.Message {
  getQuestionsList(): Array<string>;
  setQuestionsList(value: Array<string>): RagRelatedQuestionsResponse;
  clearQuestionsList(): RagRelatedQuestionsResponse;
  addQuestions(value: string, index?: number): RagRelatedQuestionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagRelatedQuestionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagRelatedQuestionsResponse): RagRelatedQuestionsResponse.AsObject;
  static serializeBinaryToWriter(message: RagRelatedQuestionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagRelatedQuestionsResponse;
  static deserializeBinaryFromReader(message: RagRelatedQuestionsResponse, reader: jspb.BinaryReader): RagRelatedQuestionsResponse;
}

export namespace RagRelatedQuestionsResponse {
  export type AsObject = {
    questionsList: Array<string>,
  }
}

export class RagChatbotCompletionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagChatbotCompletionRequest;

  getDialogId(): string;
  setDialogId(value: string): RagChatbotCompletionRequest;

  getQuestion(): string;
  setQuestion(value: string): RagChatbotCompletionRequest;

  getStream(): boolean;
  setStream(value: boolean): RagChatbotCompletionRequest;
  hasStream(): boolean;
  clearStream(): RagChatbotCompletionRequest;

  getSessionId(): string;
  setSessionId(value: string): RagChatbotCompletionRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagChatbotCompletionRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagChatbotCompletionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChatbotCompletionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagChatbotCompletionRequest): RagChatbotCompletionRequest.AsObject;
  static serializeBinaryToWriter(message: RagChatbotCompletionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChatbotCompletionRequest;
  static deserializeBinaryFromReader(message: RagChatbotCompletionRequest, reader: jspb.BinaryReader): RagChatbotCompletionRequest;
}

export namespace RagChatbotCompletionRequest {
  export type AsObject = {
    parent: string,
    dialogId: string,
    question: string,
    stream?: boolean,
    sessionId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum StreamCase { 
    _STREAM_NOT_SET = 0,
    STREAM = 4,
  }
}

export class RagChatbotInfoRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagChatbotInfoRequest;

  getDialogId(): string;
  setDialogId(value: string): RagChatbotInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChatbotInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagChatbotInfoRequest): RagChatbotInfoRequest.AsObject;
  static serializeBinaryToWriter(message: RagChatbotInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChatbotInfoRequest;
  static deserializeBinaryFromReader(message: RagChatbotInfoRequest, reader: jspb.BinaryReader): RagChatbotInfoRequest;
}

export namespace RagChatbotInfoRequest {
  export type AsObject = {
    parent: string,
    dialogId: string,
  }
}

export class RagChatbotInfoResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): RagChatbotInfoResponse;

  getAvatar(): string;
  setAvatar(value: string): RagChatbotInfoResponse;

  getPrologue(): string;
  setPrologue(value: string): RagChatbotInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChatbotInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagChatbotInfoResponse): RagChatbotInfoResponse.AsObject;
  static serializeBinaryToWriter(message: RagChatbotInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChatbotInfoResponse;
  static deserializeBinaryFromReader(message: RagChatbotInfoResponse, reader: jspb.BinaryReader): RagChatbotInfoResponse;
}

export namespace RagChatbotInfoResponse {
  export type AsObject = {
    title: string,
    avatar: string,
    prologue: string,
  }
}

export class RagAgentbotCompletionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagAgentbotCompletionRequest;

  getAgentId(): string;
  setAgentId(value: string): RagAgentbotCompletionRequest;

  getQuestion(): string;
  setQuestion(value: string): RagAgentbotCompletionRequest;

  getStream(): boolean;
  setStream(value: boolean): RagAgentbotCompletionRequest;
  hasStream(): boolean;
  clearStream(): RagAgentbotCompletionRequest;

  getSessionId(): string;
  setSessionId(value: string): RagAgentbotCompletionRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagAgentbotCompletionRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagAgentbotCompletionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAgentbotCompletionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagAgentbotCompletionRequest): RagAgentbotCompletionRequest.AsObject;
  static serializeBinaryToWriter(message: RagAgentbotCompletionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAgentbotCompletionRequest;
  static deserializeBinaryFromReader(message: RagAgentbotCompletionRequest, reader: jspb.BinaryReader): RagAgentbotCompletionRequest;
}

export namespace RagAgentbotCompletionRequest {
  export type AsObject = {
    parent: string,
    agentId: string,
    question: string,
    stream?: boolean,
    sessionId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum StreamCase { 
    _STREAM_NOT_SET = 0,
    STREAM = 4,
  }
}

export class RagAgentbotInputsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagAgentbotInputsRequest;

  getAgentId(): string;
  setAgentId(value: string): RagAgentbotInputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAgentbotInputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagAgentbotInputsRequest): RagAgentbotInputsRequest.AsObject;
  static serializeBinaryToWriter(message: RagAgentbotInputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAgentbotInputsRequest;
  static deserializeBinaryFromReader(message: RagAgentbotInputsRequest, reader: jspb.BinaryReader): RagAgentbotInputsRequest;
}

export namespace RagAgentbotInputsRequest {
  export type AsObject = {
    parent: string,
    agentId: string,
  }
}

export class RagAgentbotInputsResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): RagAgentbotInputsResponse;

  getAvatar(): string;
  setAvatar(value: string): RagAgentbotInputsResponse;

  getInputsList(): Array<google_protobuf_struct_pb.Struct>;
  setInputsList(value: Array<google_protobuf_struct_pb.Struct>): RagAgentbotInputsResponse;
  clearInputsList(): RagAgentbotInputsResponse;
  addInputs(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  getPrologue(): string;
  setPrologue(value: string): RagAgentbotInputsResponse;

  getMode(): string;
  setMode(value: string): RagAgentbotInputsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAgentbotInputsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagAgentbotInputsResponse): RagAgentbotInputsResponse.AsObject;
  static serializeBinaryToWriter(message: RagAgentbotInputsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAgentbotInputsResponse;
  static deserializeBinaryFromReader(message: RagAgentbotInputsResponse, reader: jspb.BinaryReader): RagAgentbotInputsResponse;
}

export namespace RagAgentbotInputsResponse {
  export type AsObject = {
    title: string,
    avatar: string,
    inputsList: Array<google_protobuf_struct_pb.Struct.AsObject>,
    prologue: string,
    mode: string,
  }
}

export class RagSearchbotAskRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagSearchbotAskRequest;

  getQuestion(): string;
  setQuestion(value: string): RagSearchbotAskRequest;

  getKbIdsList(): Array<string>;
  setKbIdsList(value: Array<string>): RagSearchbotAskRequest;
  clearKbIdsList(): RagSearchbotAskRequest;
  addKbIds(value: string, index?: number): RagSearchbotAskRequest;

  getSearchId(): string;
  setSearchId(value: string): RagSearchbotAskRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotAskRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagSearchbotAskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagSearchbotAskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagSearchbotAskRequest): RagSearchbotAskRequest.AsObject;
  static serializeBinaryToWriter(message: RagSearchbotAskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagSearchbotAskRequest;
  static deserializeBinaryFromReader(message: RagSearchbotAskRequest, reader: jspb.BinaryReader): RagSearchbotAskRequest;
}

export namespace RagSearchbotAskRequest {
  export type AsObject = {
    parent: string,
    question: string,
    kbIdsList: Array<string>,
    searchId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagSearchbotRetrievalRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagSearchbotRetrievalRequest;

  getKbIdList(): Array<string>;
  setKbIdList(value: Array<string>): RagSearchbotRetrievalRequest;
  clearKbIdList(): RagSearchbotRetrievalRequest;
  addKbId(value: string, index?: number): RagSearchbotRetrievalRequest;

  getQuestion(): string;
  setQuestion(value: string): RagSearchbotRetrievalRequest;

  getPage(): number;
  setPage(value: number): RagSearchbotRetrievalRequest;

  getSize(): number;
  setSize(value: number): RagSearchbotRetrievalRequest;

  getDocIdsList(): Array<string>;
  setDocIdsList(value: Array<string>): RagSearchbotRetrievalRequest;
  clearDocIdsList(): RagSearchbotRetrievalRequest;
  addDocIds(value: string, index?: number): RagSearchbotRetrievalRequest;

  getSimilarityThreshold(): number;
  setSimilarityThreshold(value: number): RagSearchbotRetrievalRequest;

  getVectorSimilarityWeight(): number;
  setVectorSimilarityWeight(value: number): RagSearchbotRetrievalRequest;

  getUseKg(): boolean;
  setUseKg(value: boolean): RagSearchbotRetrievalRequest;
  hasUseKg(): boolean;
  clearUseKg(): RagSearchbotRetrievalRequest;

  getTopK(): number;
  setTopK(value: number): RagSearchbotRetrievalRequest;

  getCrossLanguagesList(): Array<string>;
  setCrossLanguagesList(value: Array<string>): RagSearchbotRetrievalRequest;
  clearCrossLanguagesList(): RagSearchbotRetrievalRequest;
  addCrossLanguages(value: string, index?: number): RagSearchbotRetrievalRequest;

  getKeyword(): boolean;
  setKeyword(value: boolean): RagSearchbotRetrievalRequest;
  hasKeyword(): boolean;
  clearKeyword(): RagSearchbotRetrievalRequest;

  getRerankId(): string;
  setRerankId(value: string): RagSearchbotRetrievalRequest;

  getSearchId(): string;
  setSearchId(value: string): RagSearchbotRetrievalRequest;

  getHighlight(): boolean;
  setHighlight(value: boolean): RagSearchbotRetrievalRequest;
  hasHighlight(): boolean;
  clearHighlight(): RagSearchbotRetrievalRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotRetrievalRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagSearchbotRetrievalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagSearchbotRetrievalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagSearchbotRetrievalRequest): RagSearchbotRetrievalRequest.AsObject;
  static serializeBinaryToWriter(message: RagSearchbotRetrievalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagSearchbotRetrievalRequest;
  static deserializeBinaryFromReader(message: RagSearchbotRetrievalRequest, reader: jspb.BinaryReader): RagSearchbotRetrievalRequest;
}

export namespace RagSearchbotRetrievalRequest {
  export type AsObject = {
    parent: string,
    kbIdList: Array<string>,
    question: string,
    page: number,
    size: number,
    docIdsList: Array<string>,
    similarityThreshold: number,
    vectorSimilarityWeight: number,
    useKg?: boolean,
    topK: number,
    crossLanguagesList: Array<string>,
    keyword?: boolean,
    rerankId: string,
    searchId: string,
    highlight?: boolean,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum UseKgCase { 
    _USE_KG_NOT_SET = 0,
    USE_KG = 9,
  }

  export enum KeywordCase { 
    _KEYWORD_NOT_SET = 0,
    KEYWORD = 12,
  }

  export enum HighlightCase { 
    _HIGHLIGHT_NOT_SET = 0,
    HIGHLIGHT = 15,
  }
}

export class RagSearchbotRetrievalResponse extends jspb.Message {
  getChunksList(): Array<RagChunk>;
  setChunksList(value: Array<RagChunk>): RagSearchbotRetrievalResponse;
  clearChunksList(): RagSearchbotRetrievalResponse;
  addChunks(value?: RagChunk, index?: number): RagChunk;

  getDocAggsList(): Array<google_protobuf_struct_pb.Struct>;
  setDocAggsList(value: Array<google_protobuf_struct_pb.Struct>): RagSearchbotRetrievalResponse;
  clearDocAggsList(): RagSearchbotRetrievalResponse;
  addDocAggs(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  getTotal(): number;
  setTotal(value: number): RagSearchbotRetrievalResponse;

  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): RagSearchbotRetrievalResponse;
  clearLabelsList(): RagSearchbotRetrievalResponse;
  addLabels(value: string, index?: number): RagSearchbotRetrievalResponse;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotRetrievalResponse;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagSearchbotRetrievalResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagSearchbotRetrievalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagSearchbotRetrievalResponse): RagSearchbotRetrievalResponse.AsObject;
  static serializeBinaryToWriter(message: RagSearchbotRetrievalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagSearchbotRetrievalResponse;
  static deserializeBinaryFromReader(message: RagSearchbotRetrievalResponse, reader: jspb.BinaryReader): RagSearchbotRetrievalResponse;
}

export namespace RagSearchbotRetrievalResponse {
  export type AsObject = {
    chunksList: Array<RagChunk.AsObject>,
    docAggsList: Array<google_protobuf_struct_pb.Struct.AsObject>,
    total: number,
    labelsList: Array<string>,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagSearchbotRelatedQuestionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagSearchbotRelatedQuestionsRequest;

  getQuestion(): string;
  setQuestion(value: string): RagSearchbotRelatedQuestionsRequest;

  getSearchId(): string;
  setSearchId(value: string): RagSearchbotRelatedQuestionsRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotRelatedQuestionsRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagSearchbotRelatedQuestionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagSearchbotRelatedQuestionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagSearchbotRelatedQuestionsRequest): RagSearchbotRelatedQuestionsRequest.AsObject;
  static serializeBinaryToWriter(message: RagSearchbotRelatedQuestionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagSearchbotRelatedQuestionsRequest;
  static deserializeBinaryFromReader(message: RagSearchbotRelatedQuestionsRequest, reader: jspb.BinaryReader): RagSearchbotRelatedQuestionsRequest;
}

export namespace RagSearchbotRelatedQuestionsRequest {
  export type AsObject = {
    parent: string,
    question: string,
    searchId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagSearchbotDetailRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagSearchbotDetailRequest;

  getSearchId(): string;
  setSearchId(value: string): RagSearchbotDetailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagSearchbotDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagSearchbotDetailRequest): RagSearchbotDetailRequest.AsObject;
  static serializeBinaryToWriter(message: RagSearchbotDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagSearchbotDetailRequest;
  static deserializeBinaryFromReader(message: RagSearchbotDetailRequest, reader: jspb.BinaryReader): RagSearchbotDetailRequest;
}

export namespace RagSearchbotDetailRequest {
  export type AsObject = {
    parent: string,
    searchId: string,
  }
}

export class RagSearchbotDetailResponse extends jspb.Message {
  getId(): string;
  setId(value: string): RagSearchbotDetailResponse;

  getAvatar(): string;
  setAvatar(value: string): RagSearchbotDetailResponse;

  getTenantId(): string;
  setTenantId(value: string): RagSearchbotDetailResponse;

  getName(): string;
  setName(value: string): RagSearchbotDetailResponse;

  getDescription(): string;
  setDescription(value: string): RagSearchbotDetailResponse;

  getCreateBy(): string;
  setCreateBy(value: string): RagSearchbotDetailResponse;

  getSearchConfig(): google_protobuf_struct_pb.Struct | undefined;
  setSearchConfig(value?: google_protobuf_struct_pb.Struct): RagSearchbotDetailResponse;
  hasSearchConfig(): boolean;
  clearSearchConfig(): RagSearchbotDetailResponse;

  getUpdateTime(): number;
  setUpdateTime(value: number): RagSearchbotDetailResponse;

  getNickname(): string;
  setNickname(value: string): RagSearchbotDetailResponse;

  getTenantAvatar(): string;
  setTenantAvatar(value: string): RagSearchbotDetailResponse;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotDetailResponse;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagSearchbotDetailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagSearchbotDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagSearchbotDetailResponse): RagSearchbotDetailResponse.AsObject;
  static serializeBinaryToWriter(message: RagSearchbotDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagSearchbotDetailResponse;
  static deserializeBinaryFromReader(message: RagSearchbotDetailResponse, reader: jspb.BinaryReader): RagSearchbotDetailResponse;
}

export namespace RagSearchbotDetailResponse {
  export type AsObject = {
    id: string,
    avatar: string,
    tenantId: string,
    name: string,
    description: string,
    createBy: string,
    searchConfig?: google_protobuf_struct_pb.Struct.AsObject,
    updateTime: number,
    nickname: string,
    tenantAvatar: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagSearchbotMindmapRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagSearchbotMindmapRequest;

  getQuestion(): string;
  setQuestion(value: string): RagSearchbotMindmapRequest;

  getKbIdsList(): Array<string>;
  setKbIdsList(value: Array<string>): RagSearchbotMindmapRequest;
  clearKbIdsList(): RagSearchbotMindmapRequest;
  addKbIds(value: string, index?: number): RagSearchbotMindmapRequest;

  getSearchId(): string;
  setSearchId(value: string): RagSearchbotMindmapRequest;

  getAdditionalFields(): google_protobuf_struct_pb.Struct | undefined;
  setAdditionalFields(value?: google_protobuf_struct_pb.Struct): RagSearchbotMindmapRequest;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): RagSearchbotMindmapRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagSearchbotMindmapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagSearchbotMindmapRequest): RagSearchbotMindmapRequest.AsObject;
  static serializeBinaryToWriter(message: RagSearchbotMindmapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagSearchbotMindmapRequest;
  static deserializeBinaryFromReader(message: RagSearchbotMindmapRequest, reader: jspb.BinaryReader): RagSearchbotMindmapRequest;
}

export namespace RagSearchbotMindmapRequest {
  export type AsObject = {
    parent: string,
    question: string,
    kbIdsList: Array<string>,
    searchId: string,
    additionalFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RagSearchbotMindmapResponse extends jspb.Message {
  getMindmap(): google_protobuf_struct_pb.Struct | undefined;
  setMindmap(value?: google_protobuf_struct_pb.Struct): RagSearchbotMindmapResponse;
  hasMindmap(): boolean;
  clearMindmap(): RagSearchbotMindmapResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagSearchbotMindmapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagSearchbotMindmapResponse): RagSearchbotMindmapResponse.AsObject;
  static serializeBinaryToWriter(message: RagSearchbotMindmapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagSearchbotMindmapResponse;
  static deserializeBinaryFromReader(message: RagSearchbotMindmapResponse, reader: jspb.BinaryReader): RagSearchbotMindmapResponse;
}

export namespace RagSearchbotMindmapResponse {
  export type AsObject = {
    mindmap?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export enum RagPermission { 
  ME = 0,
  TEAM = 1,
}
export enum RagChunkMethod { 
  NAIVE = 0,
  BOOK = 1,
  EMAIL = 2,
  LAWS = 3,
  MANUAL = 4,
  ONE = 5,
  PAPER = 6,
  PICTURE = 7,
  PRESENTATION = 8,
  QA = 9,
  TABLE = 10,
  TAG = 11,
}
export enum RagDocumentStatus { 
  UNSTART = 0,
  RUNNING = 1,
  CANCEL = 2,
  DONE = 3,
  FAIL = 4,
}
export enum RagMessageRole { 
  USER = 0,
  ASSISTANT = 1,
  SYSTEM = 2,
}
export enum RagAgentEventType { 
  MESSAGE = 0,
  MESSAGE_END = 1,
}
