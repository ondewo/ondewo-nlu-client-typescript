import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as ondewo_nlu_rag_pb from '../../ondewo/nlu/rag_pb'; // proto import: "ondewo/nlu/rag.proto"


export class RagsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ragCreateDataset(
    request: ondewo_nlu_rag_pb.RagCreateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDataset) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDataset>;

  ragUpdateDataset(
    request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDataset) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDataset>;

  ragDeleteDatasets(
    request: ondewo_nlu_rag_pb.RagDeleteDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListDatasets(
    request: ondewo_nlu_rag_pb.RagListDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDatasetList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDatasetList>;

  ragGetKnowledgeGraph(
    request: ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse>;

  ragDeleteKnowledgeGraph(
    request: ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragUpdateDocument(
    request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDocument) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDocument>;

  ragDownloadDocument(
    request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;

  ragListDocuments(
    request: ondewo_nlu_rag_pb.RagListDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagListDocumentsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagListDocumentsResponse>;

  ragDeleteDocuments(
    request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragParseDocuments(
    request: ondewo_nlu_rag_pb.RagParseDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragStopParsing(
    request: ondewo_nlu_rag_pb.RagStopParsingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListChunks(
    request: ondewo_nlu_rag_pb.RagListChunksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagListChunksResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagListChunksResponse>;

  ragAddChunk(
    request: ondewo_nlu_rag_pb.RagAddChunkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagAddChunkResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAddChunkResponse>;

  ragRemoveChunks(
    request: ondewo_nlu_rag_pb.RagRemoveChunksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragUpdateChunk(
    request: ondewo_nlu_rag_pb.RagUpdateChunkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragRetrieval(
    request: ondewo_nlu_rag_pb.RagRetrievalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagRetrievalResponse>;

  ragCreateChat(
    request: ondewo_nlu_rag_pb.RagCreateChatRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagChat) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChat>;

  ragUpdateChat(
    request: ondewo_nlu_rag_pb.RagUpdateChatRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragDeleteChats(
    request: ondewo_nlu_rag_pb.RagDeleteChatsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListChats(
    request: ondewo_nlu_rag_pb.RagListChatsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagChatList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatList>;

  ragCreateChatSession(
    request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagChatSession) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatSession>;

  ragCreateAgentSession(
    request: ondewo_nlu_rag_pb.RagCreateAgentSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagAgentSession) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentSession>;

  ragUpdateChatSession(
    request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragListChatSessions(
    request: ondewo_nlu_rag_pb.RagListChatSessionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagChatSessionList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatSessionList>;

  ragListAgentSessions(
    request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagAgentSessionList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentSessionList>;

  ragDeleteChatSessions(
    request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragDeleteAgentSessions(
    request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragChatCompletion(
    request: ondewo_nlu_rag_pb.RagChatCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;

  ragOpenAiChatCompletion(
    request: ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;

  ragAgentCompletion(
    request: ondewo_nlu_rag_pb.RagAgentCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;

  ragOpenAiAgentCompletion(
    request: ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;

  ragCreateAgent(
    request: ondewo_nlu_rag_pb.RagCreateAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragUpdateAgent(
    request: ondewo_nlu_rag_pb.RagUpdateAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragDeleteAgent(
    request: ondewo_nlu_rag_pb.RagDeleteAgentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragListAgents(
    request: ondewo_nlu_rag_pb.RagListAgentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagAgentList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentList>;

  ragCreateFile(
    request: ondewo_nlu_rag_pb.RagCreateFileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagFile) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagFile>;

  ragListFiles(
    request: ondewo_nlu_rag_pb.RagListFilesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagListFilesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagListFilesResponse>;

  ragGetRootFolder(
    request: ondewo_nlu_rag_pb.RagGetRootFolderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagGetRootFolderResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagGetRootFolderResponse>;

  ragGetParentFolder(
    request: ondewo_nlu_rag_pb.RagGetParentFolderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagGetParentFolderResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagGetParentFolderResponse>;

  ragGetAllParentFolders(
    request: ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse>;

  ragDeleteFiles(
    request: ondewo_nlu_rag_pb.RagDeleteFilesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragRenameFile(
    request: ondewo_nlu_rag_pb.RagRenameFileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragGetFile(
    request: ondewo_nlu_rag_pb.RagGetFileRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;

  ragMoveFile(
    request: ondewo_nlu_rag_pb.RagMoveFileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragFileToDocument(
    request: ondewo_nlu_rag_pb.RagFileToDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagFileToDocumentList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagFileToDocumentList>;

  ragDifyRetrieval(
    request: ondewo_nlu_rag_pb.RagDifyRetrievalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDifyRecordList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDifyRecordList>;

  ragAsk(
    request: ondewo_nlu_rag_pb.RagAskRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;

  ragRelatedQuestions(
    request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;

  ragChatbotCompletion(
    request: ondewo_nlu_rag_pb.RagChatbotCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;

  ragChatbotInfo(
    request: ondewo_nlu_rag_pb.RagChatbotInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagChatbotInfoResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatbotInfoResponse>;

  ragAgentbotCompletion(
    request: ondewo_nlu_rag_pb.RagAgentbotCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;

  ragAgentbotInputs(
    request: ondewo_nlu_rag_pb.RagAgentbotInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagAgentbotInputsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentbotInputsResponse>;

  ragSearchbotAsk(
    request: ondewo_nlu_rag_pb.RagSearchbotAskRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;

  ragSearchbotRetrieval(
    request: ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse>;

  ragSearchbotRelatedQuestions(
    request: ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagRelatedQuestionsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;

  ragSearchbotDetail(
    request: ondewo_nlu_rag_pb.RagSearchbotDetailRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagSearchbotDetailResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagSearchbotDetailResponse>;

  ragSearchbotMindmap(
    request: ondewo_nlu_rag_pb.RagSearchbotMindmapRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_struct_pb.Struct) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_struct_pb.Struct>;

}

export class RagsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ragCreateDataset(
    request: ondewo_nlu_rag_pb.RagCreateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDataset>;

  ragUpdateDataset(
    request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDataset>;

  ragDeleteDatasets(
    request: ondewo_nlu_rag_pb.RagDeleteDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListDatasets(
    request: ondewo_nlu_rag_pb.RagListDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDatasetList>;

  ragGetKnowledgeGraph(
    request: ondewo_nlu_rag_pb.RagGetKnowledgeGraphRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse>;

  ragDeleteKnowledgeGraph(
    request: ondewo_nlu_rag_pb.RagDeleteKnowledgeGraphRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragUpdateDocument(
    request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDocument>;

  ragDownloadDocument(
    request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;

  ragListDocuments(
    request: ondewo_nlu_rag_pb.RagListDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagListDocumentsResponse>;

  ragDeleteDocuments(
    request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragParseDocuments(
    request: ondewo_nlu_rag_pb.RagParseDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragStopParsing(
    request: ondewo_nlu_rag_pb.RagStopParsingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListChunks(
    request: ondewo_nlu_rag_pb.RagListChunksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagListChunksResponse>;

  ragAddChunk(
    request: ondewo_nlu_rag_pb.RagAddChunkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagAddChunkResponse>;

  ragRemoveChunks(
    request: ondewo_nlu_rag_pb.RagRemoveChunksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragUpdateChunk(
    request: ondewo_nlu_rag_pb.RagUpdateChunkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragRetrieval(
    request: ondewo_nlu_rag_pb.RagRetrievalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagRetrievalResponse>;

  ragCreateChat(
    request: ondewo_nlu_rag_pb.RagCreateChatRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagChat>;

  ragUpdateChat(
    request: ondewo_nlu_rag_pb.RagUpdateChatRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragDeleteChats(
    request: ondewo_nlu_rag_pb.RagDeleteChatsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListChats(
    request: ondewo_nlu_rag_pb.RagListChatsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagChatList>;

  ragCreateChatSession(
    request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagChatSession>;

  ragCreateAgentSession(
    request: ondewo_nlu_rag_pb.RagCreateAgentSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagAgentSession>;

  ragUpdateChatSession(
    request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragListChatSessions(
    request: ondewo_nlu_rag_pb.RagListChatSessionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagChatSessionList>;

  ragListAgentSessions(
    request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagAgentSessionList>;

  ragDeleteChatSessions(
    request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragDeleteAgentSessions(
    request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragChatCompletion(
    request: ondewo_nlu_rag_pb.RagChatCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;

  ragOpenAiChatCompletion(
    request: ondewo_nlu_rag_pb.RagOpenAiChatCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;

  ragAgentCompletion(
    request: ondewo_nlu_rag_pb.RagAgentCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;

  ragOpenAiAgentCompletion(
    request: ondewo_nlu_rag_pb.RagOpenAiAgentCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagOpenAiChatCompletionResponse>;

  ragCreateAgent(
    request: ondewo_nlu_rag_pb.RagCreateAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragUpdateAgent(
    request: ondewo_nlu_rag_pb.RagUpdateAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragDeleteAgent(
    request: ondewo_nlu_rag_pb.RagDeleteAgentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragListAgents(
    request: ondewo_nlu_rag_pb.RagListAgentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagAgentList>;

  ragCreateFile(
    request: ondewo_nlu_rag_pb.RagCreateFileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagFile>;

  ragListFiles(
    request: ondewo_nlu_rag_pb.RagListFilesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagListFilesResponse>;

  ragGetRootFolder(
    request: ondewo_nlu_rag_pb.RagGetRootFolderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagGetRootFolderResponse>;

  ragGetParentFolder(
    request: ondewo_nlu_rag_pb.RagGetParentFolderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagGetParentFolderResponse>;

  ragGetAllParentFolders(
    request: ondewo_nlu_rag_pb.RagGetAllParentFoldersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagGetAllParentFoldersResponse>;

  ragDeleteFiles(
    request: ondewo_nlu_rag_pb.RagDeleteFilesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragRenameFile(
    request: ondewo_nlu_rag_pb.RagRenameFileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragGetFile(
    request: ondewo_nlu_rag_pb.RagGetFileRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;

  ragMoveFile(
    request: ondewo_nlu_rag_pb.RagMoveFileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragFileToDocument(
    request: ondewo_nlu_rag_pb.RagFileToDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagFileToDocumentList>;

  ragDifyRetrieval(
    request: ondewo_nlu_rag_pb.RagDifyRetrievalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDifyRecordList>;

  ragAsk(
    request: ondewo_nlu_rag_pb.RagAskRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;

  ragRelatedQuestions(
    request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;

  ragChatbotCompletion(
    request: ondewo_nlu_rag_pb.RagChatbotCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;

  ragChatbotInfo(
    request: ondewo_nlu_rag_pb.RagChatbotInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagChatbotInfoResponse>;

  ragAgentbotCompletion(
    request: ondewo_nlu_rag_pb.RagAgentbotCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;

  ragAgentbotInputs(
    request: ondewo_nlu_rag_pb.RagAgentbotInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagAgentbotInputsResponse>;

  ragSearchbotAsk(
    request: ondewo_nlu_rag_pb.RagSearchbotAskRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;

  ragSearchbotRetrieval(
    request: ondewo_nlu_rag_pb.RagSearchbotRetrievalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagSearchbotRetrievalResponse>;

  ragSearchbotRelatedQuestions(
    request: ondewo_nlu_rag_pb.RagSearchbotRelatedQuestionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;

  ragSearchbotDetail(
    request: ondewo_nlu_rag_pb.RagSearchbotDetailRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagSearchbotDetailResponse>;

  ragSearchbotMindmap(
    request: ondewo_nlu_rag_pb.RagSearchbotMindmapRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_struct_pb.Struct>;

}

