import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_dialogflow_v2beta1_document_pb from '../../../../google/cloud/dialogflow/v2beta1/document_pb';


export class DocumentsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listDocuments(
    request: google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsResponse>;

  getDocument(
    request: google_cloud_dialogflow_v2beta1_document_pb.GetDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_document_pb.Document) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_document_pb.Document>;

  createDocument(
    request: google_cloud_dialogflow_v2beta1_document_pb.CreateDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteDocument(
    request: google_cloud_dialogflow_v2beta1_document_pb.DeleteDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class DocumentsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listDocuments(
    request: google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_document_pb.ListDocumentsResponse>;

  getDocument(
    request: google_cloud_dialogflow_v2beta1_document_pb.GetDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_document_pb.Document>;

  createDocument(
    request: google_cloud_dialogflow_v2beta1_document_pb.CreateDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteDocument(
    request: google_cloud_dialogflow_v2beta1_document_pb.DeleteDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

