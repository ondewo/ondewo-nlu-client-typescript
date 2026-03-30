import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb'; // proto import: "ondewo/nlu/operations.proto"
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
    request: ondewo_nlu_rag_pb.RagDeleteRequest,
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
               response: ondewo_nlu_rag_pb.RagDocumentList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDocumentList>;

  ragDeleteDocuments(
    request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragRetrieval(
    request: ondewo_nlu_rag_pb.RagRetrievalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagRetrievalResponse>;

  ragGetKnowledgeGraph(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse>;

  ragDeleteKnowledgeGraph(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragConstructKnowledgeGraph(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse>;

  ragKnowledgeGraphStatus(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagTaskStatus) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagTaskStatus>;

  ragConstructRaptor(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagConstructRaptorResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagConstructRaptorResponse>;

  ragRaptorStatus(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagTaskStatus) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagTaskStatus>;

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

  ragCreateChatAssistant(
    request: ondewo_nlu_rag_pb.RagCreateChatAssistantRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagChatAssistant) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatAssistant>;

  ragUpdateChatAssistant(
    request: ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  ragDeleteChatAssistants(
    request: ondewo_nlu_rag_pb.RagDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListChatAssistants(
    request: ondewo_nlu_rag_pb.RagListChatAssistantsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagChatAssistantList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatAssistantList>;

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

  ragCreateChatSession(
    request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagChatSession) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatSession>;

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

  ragDeleteChatSessions(
    request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListAgentSessions(
    request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagAgentSessionList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentSessionList>;

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

  ragAgentCompletion(
    request: ondewo_nlu_rag_pb.RagAgentCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;

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

  ragCreateCrawler(
    request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagCrawler) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagCrawler>;

  ragGetCrawler(
    request: ondewo_nlu_rag_pb.RagGetCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagCrawler) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagCrawler>;

  ragListCrawlers(
    request: ondewo_nlu_rag_pb.RagListCrawlersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagListCrawlersResponse>;

  ragUpdateCrawler(
    request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagCrawler) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagCrawler>;

  ragDeleteCrawler(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDeleteCrawlerResponse>;

  ragStartCrawler(
    request: ondewo_nlu_rag_pb.RagStartCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  ragStopCrawler(
    request: ondewo_nlu_rag_pb.RagStopCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagStopCrawlerResponse>;

  ragGetCrawlerRun(
    request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  ragListCrawlerRuns(
    request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagListCrawlerRunsResponse>;

  ragDeleteCrawlerRuns(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse>;

  ragGetCrawlerResult(
    request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagCrawlerResult) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagCrawlerResult>;

  ragGetCrawlerResults(
    request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse>;

  ragAddCrawlerResultsToDatasets(
    request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  ragRemoveCrawlerResultsFromDatasets(
    request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  ragGetCrawlerAttachedDatasets(
    request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse>;

  ragDeleteCrawlers(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDeleteCrawlersResponse>;

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
    request: ondewo_nlu_rag_pb.RagDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListDatasets(
    request: ondewo_nlu_rag_pb.RagListDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDatasetList>;

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
  ): Promise<ondewo_nlu_rag_pb.RagDocumentList>;

  ragDeleteDocuments(
    request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragRetrieval(
    request: ondewo_nlu_rag_pb.RagRetrievalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagRetrievalResponse>;

  ragGetKnowledgeGraph(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagGetKnowledgeGraphResponse>;

  ragDeleteKnowledgeGraph(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragConstructKnowledgeGraph(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagConstructKnowledgeGraphResponse>;

  ragKnowledgeGraphStatus(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagTaskStatus>;

  ragConstructRaptor(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagConstructRaptorResponse>;

  ragRaptorStatus(
    request: ondewo_nlu_rag_pb.RagDatasetIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagTaskStatus>;

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

  ragCreateChatAssistant(
    request: ondewo_nlu_rag_pb.RagCreateChatAssistantRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagChatAssistant>;

  ragUpdateChatAssistant(
    request: ondewo_nlu_rag_pb.RagUpdateChatAssistantRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragDeleteChatAssistants(
    request: ondewo_nlu_rag_pb.RagDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListChatAssistants(
    request: ondewo_nlu_rag_pb.RagListChatAssistantsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagChatAssistantList>;

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

  ragCreateChatSession(
    request: ondewo_nlu_rag_pb.RagCreateChatSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagChatSession>;

  ragUpdateChatSession(
    request: ondewo_nlu_rag_pb.RagUpdateChatSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  ragListChatSessions(
    request: ondewo_nlu_rag_pb.RagListChatSessionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagChatSessionList>;

  ragDeleteChatSessions(
    request: ondewo_nlu_rag_pb.RagDeleteChatSessionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListAgentSessions(
    request: ondewo_nlu_rag_pb.RagListAgentSessionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagAgentSessionList>;

  ragDeleteAgentSessions(
    request: ondewo_nlu_rag_pb.RagDeleteAgentSessionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragChatCompletion(
    request: ondewo_nlu_rag_pb.RagChatCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagChatCompletionResponse>;

  ragAgentCompletion(
    request: ondewo_nlu_rag_pb.RagAgentCompletionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAgentCompletionResponse>;

  ragAsk(
    request: ondewo_nlu_rag_pb.RagAskRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagAskResponse>;

  ragRelatedQuestions(
    request: ondewo_nlu_rag_pb.RagRelatedQuestionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagRelatedQuestionsResponse>;

  ragCreateCrawler(
    request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagCrawler>;

  ragGetCrawler(
    request: ondewo_nlu_rag_pb.RagGetCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagCrawler>;

  ragListCrawlers(
    request: ondewo_nlu_rag_pb.RagListCrawlersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagListCrawlersResponse>;

  ragUpdateCrawler(
    request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagCrawler>;

  ragDeleteCrawler(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDeleteCrawlerResponse>;

  ragStartCrawler(
    request: ondewo_nlu_rag_pb.RagStartCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  ragStopCrawler(
    request: ondewo_nlu_rag_pb.RagStopCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagStopCrawlerResponse>;

  ragGetCrawlerRun(
    request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  ragListCrawlerRuns(
    request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagListCrawlerRunsResponse>;

  ragDeleteCrawlerRuns(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse>;

  ragGetCrawlerResult(
    request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagCrawlerResult>;

  ragGetCrawlerResults(
    request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse>;

  ragAddCrawlerResultsToDatasets(
    request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  ragRemoveCrawlerResultsFromDatasets(
    request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  ragGetCrawlerAttachedDatasets(
    request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse>;

  ragDeleteCrawlers(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDeleteCrawlersResponse>;

}

