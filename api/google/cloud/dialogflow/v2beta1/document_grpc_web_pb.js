/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dialogflow = {};
proto.google.cloud.dialogflow.v2beta1 = require('./document_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dialogflow.v2beta1.DocumentsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dialogflow.v2beta1.DocumentsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.ListDocumentsRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.ListDocumentsResponse>}
 */
const methodDescriptor_Documents_ListDocuments = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Documents/ListDocuments',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.ListDocumentsRequest,
  proto.google.cloud.dialogflow.v2beta1.ListDocumentsResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.ListDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.ListDocumentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.ListDocumentsRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.ListDocumentsResponse>}
 */
const methodInfo_Documents_ListDocuments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.ListDocumentsResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.ListDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.ListDocumentsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.ListDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.ListDocumentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.ListDocumentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.DocumentsClient.prototype.listDocuments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Documents/ListDocuments',
      request,
      metadata || {},
      methodDescriptor_Documents_ListDocuments,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.ListDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.ListDocumentsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.DocumentsPromiseClient.prototype.listDocuments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Documents/ListDocuments',
      request,
      metadata || {},
      methodDescriptor_Documents_ListDocuments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.GetDocumentRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.Document>}
 */
const methodDescriptor_Documents_GetDocument = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Documents/GetDocument',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.GetDocumentRequest,
  proto.google.cloud.dialogflow.v2beta1.Document,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.GetDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.Document.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.GetDocumentRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.Document>}
 */
const methodInfo_Documents_GetDocument = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.Document,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.GetDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.Document.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.Document)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.Document>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.DocumentsClient.prototype.getDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Documents/GetDocument',
      request,
      metadata || {},
      methodDescriptor_Documents_GetDocument,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.Document>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.DocumentsPromiseClient.prototype.getDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Documents/GetDocument',
      request,
      metadata || {},
      methodDescriptor_Documents_GetDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.CreateDocumentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Documents_CreateDocument = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Documents/CreateDocument',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.CreateDocumentRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.CreateDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.CreateDocumentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Documents_CreateDocument = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.CreateDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.CreateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.DocumentsClient.prototype.createDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Documents/CreateDocument',
      request,
      metadata || {},
      methodDescriptor_Documents_CreateDocument,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.CreateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.DocumentsPromiseClient.prototype.createDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Documents/CreateDocument',
      request,
      metadata || {},
      methodDescriptor_Documents_CreateDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.DeleteDocumentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Documents_DeleteDocument = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Documents/DeleteDocument',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.DeleteDocumentRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.DeleteDocumentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Documents_DeleteDocument = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.DocumentsClient.prototype.deleteDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Documents/DeleteDocument',
      request,
      metadata || {},
      methodDescriptor_Documents_DeleteDocument,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.DocumentsPromiseClient.prototype.deleteDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Documents/DeleteDocument',
      request,
      metadata || {},
      methodDescriptor_Documents_DeleteDocument);
};


module.exports = proto.google.cloud.dialogflow.v2beta1;

