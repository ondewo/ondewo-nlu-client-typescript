/**
 * @fileoverview gRPC-Web generated client stub for google.firestore.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_firestore_v1beta1_common_pb = require('../../../google/firestore/v1beta1/common_pb.js')

var google_firestore_v1beta1_document_pb = require('../../../google/firestore/v1beta1/document_pb.js')

var google_firestore_v1beta1_query_pb = require('../../../google/firestore/v1beta1/query_pb.js')

var google_firestore_v1beta1_write_pb = require('../../../google/firestore/v1beta1/write_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.firestore = {};
proto.google.firestore.v1beta1 = require('./firestore_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.firestore.v1beta1.FirestoreClient =
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
proto.google.firestore.v1beta1.FirestorePromiseClient =
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
 *   !proto.google.firestore.v1beta1.GetDocumentRequest,
 *   !proto.google.firestore.v1beta1.Document>}
 */
const methodDescriptor_Firestore_GetDocument = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/GetDocument',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.v1beta1.GetDocumentRequest,
  google_firestore_v1beta1_document_pb.Document,
  /**
   * @param {!proto.google.firestore.v1beta1.GetDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_firestore_v1beta1_document_pb.Document.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.GetDocumentRequest,
 *   !proto.google.firestore.v1beta1.Document>}
 */
const methodInfo_Firestore_GetDocument = new grpc.web.AbstractClientBase.MethodInfo(
  google_firestore_v1beta1_document_pb.Document,
  /**
   * @param {!proto.google.firestore.v1beta1.GetDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_firestore_v1beta1_document_pb.Document.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.v1beta1.Document)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.Document>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.getDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/GetDocument',
      request,
      metadata || {},
      methodDescriptor_Firestore_GetDocument,
      callback);
};


/**
 * @param {!proto.google.firestore.v1beta1.GetDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.v1beta1.Document>}
 *     Promise that resolves to the response
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.getDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/GetDocument',
      request,
      metadata || {},
      methodDescriptor_Firestore_GetDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.v1beta1.ListDocumentsRequest,
 *   !proto.google.firestore.v1beta1.ListDocumentsResponse>}
 */
const methodDescriptor_Firestore_ListDocuments = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/ListDocuments',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.v1beta1.ListDocumentsRequest,
  proto.google.firestore.v1beta1.ListDocumentsResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.ListDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.ListDocumentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.ListDocumentsRequest,
 *   !proto.google.firestore.v1beta1.ListDocumentsResponse>}
 */
const methodInfo_Firestore_ListDocuments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.firestore.v1beta1.ListDocumentsResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.ListDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.ListDocumentsResponse.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.ListDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.v1beta1.ListDocumentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.ListDocumentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.listDocuments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/ListDocuments',
      request,
      metadata || {},
      methodDescriptor_Firestore_ListDocuments,
      callback);
};


/**
 * @param {!proto.google.firestore.v1beta1.ListDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.v1beta1.ListDocumentsResponse>}
 *     Promise that resolves to the response
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.listDocuments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/ListDocuments',
      request,
      metadata || {},
      methodDescriptor_Firestore_ListDocuments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.v1beta1.CreateDocumentRequest,
 *   !proto.google.firestore.v1beta1.Document>}
 */
const methodDescriptor_Firestore_CreateDocument = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/CreateDocument',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.v1beta1.CreateDocumentRequest,
  google_firestore_v1beta1_document_pb.Document,
  /**
   * @param {!proto.google.firestore.v1beta1.CreateDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_firestore_v1beta1_document_pb.Document.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.CreateDocumentRequest,
 *   !proto.google.firestore.v1beta1.Document>}
 */
const methodInfo_Firestore_CreateDocument = new grpc.web.AbstractClientBase.MethodInfo(
  google_firestore_v1beta1_document_pb.Document,
  /**
   * @param {!proto.google.firestore.v1beta1.CreateDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_firestore_v1beta1_document_pb.Document.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.CreateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.v1beta1.Document)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.Document>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.createDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/CreateDocument',
      request,
      metadata || {},
      methodDescriptor_Firestore_CreateDocument,
      callback);
};


/**
 * @param {!proto.google.firestore.v1beta1.CreateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.v1beta1.Document>}
 *     Promise that resolves to the response
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.createDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/CreateDocument',
      request,
      metadata || {},
      methodDescriptor_Firestore_CreateDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.v1beta1.UpdateDocumentRequest,
 *   !proto.google.firestore.v1beta1.Document>}
 */
const methodDescriptor_Firestore_UpdateDocument = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/UpdateDocument',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.v1beta1.UpdateDocumentRequest,
  google_firestore_v1beta1_document_pb.Document,
  /**
   * @param {!proto.google.firestore.v1beta1.UpdateDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_firestore_v1beta1_document_pb.Document.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.UpdateDocumentRequest,
 *   !proto.google.firestore.v1beta1.Document>}
 */
const methodInfo_Firestore_UpdateDocument = new grpc.web.AbstractClientBase.MethodInfo(
  google_firestore_v1beta1_document_pb.Document,
  /**
   * @param {!proto.google.firestore.v1beta1.UpdateDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_firestore_v1beta1_document_pb.Document.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.UpdateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.v1beta1.Document)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.Document>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.updateDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/UpdateDocument',
      request,
      metadata || {},
      methodDescriptor_Firestore_UpdateDocument,
      callback);
};


/**
 * @param {!proto.google.firestore.v1beta1.UpdateDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.v1beta1.Document>}
 *     Promise that resolves to the response
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.updateDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/UpdateDocument',
      request,
      metadata || {},
      methodDescriptor_Firestore_UpdateDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.v1beta1.DeleteDocumentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Firestore_DeleteDocument = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/DeleteDocument',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.v1beta1.DeleteDocumentRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.firestore.v1beta1.DeleteDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.DeleteDocumentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Firestore_DeleteDocument = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.firestore.v1beta1.DeleteDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.DeleteDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.deleteDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/DeleteDocument',
      request,
      metadata || {},
      methodDescriptor_Firestore_DeleteDocument,
      callback);
};


/**
 * @param {!proto.google.firestore.v1beta1.DeleteDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.deleteDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/DeleteDocument',
      request,
      metadata || {},
      methodDescriptor_Firestore_DeleteDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.v1beta1.BatchGetDocumentsRequest,
 *   !proto.google.firestore.v1beta1.BatchGetDocumentsResponse>}
 */
const methodDescriptor_Firestore_BatchGetDocuments = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/BatchGetDocuments',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.firestore.v1beta1.BatchGetDocumentsRequest,
  proto.google.firestore.v1beta1.BatchGetDocumentsResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.BatchGetDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.BatchGetDocumentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.BatchGetDocumentsRequest,
 *   !proto.google.firestore.v1beta1.BatchGetDocumentsResponse>}
 */
const methodInfo_Firestore_BatchGetDocuments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.firestore.v1beta1.BatchGetDocumentsResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.BatchGetDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.BatchGetDocumentsResponse.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.BatchGetDocumentsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.BatchGetDocumentsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.batchGetDocuments =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/BatchGetDocuments',
      request,
      metadata || {},
      methodDescriptor_Firestore_BatchGetDocuments);
};


/**
 * @param {!proto.google.firestore.v1beta1.BatchGetDocumentsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.BatchGetDocumentsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.batchGetDocuments =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/BatchGetDocuments',
      request,
      metadata || {},
      methodDescriptor_Firestore_BatchGetDocuments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.v1beta1.BeginTransactionRequest,
 *   !proto.google.firestore.v1beta1.BeginTransactionResponse>}
 */
const methodDescriptor_Firestore_BeginTransaction = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/BeginTransaction',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.v1beta1.BeginTransactionRequest,
  proto.google.firestore.v1beta1.BeginTransactionResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.BeginTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.BeginTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.BeginTransactionRequest,
 *   !proto.google.firestore.v1beta1.BeginTransactionResponse>}
 */
const methodInfo_Firestore_BeginTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.firestore.v1beta1.BeginTransactionResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.BeginTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.BeginTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.BeginTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.v1beta1.BeginTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.BeginTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.beginTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/BeginTransaction',
      request,
      metadata || {},
      methodDescriptor_Firestore_BeginTransaction,
      callback);
};


/**
 * @param {!proto.google.firestore.v1beta1.BeginTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.v1beta1.BeginTransactionResponse>}
 *     Promise that resolves to the response
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.beginTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/BeginTransaction',
      request,
      metadata || {},
      methodDescriptor_Firestore_BeginTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.v1beta1.CommitRequest,
 *   !proto.google.firestore.v1beta1.CommitResponse>}
 */
const methodDescriptor_Firestore_Commit = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/Commit',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.v1beta1.CommitRequest,
  proto.google.firestore.v1beta1.CommitResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.CommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.CommitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.CommitRequest,
 *   !proto.google.firestore.v1beta1.CommitResponse>}
 */
const methodInfo_Firestore_Commit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.firestore.v1beta1.CommitResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.CommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.CommitResponse.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.CommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.v1beta1.CommitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.CommitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.commit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/Commit',
      request,
      metadata || {},
      methodDescriptor_Firestore_Commit,
      callback);
};


/**
 * @param {!proto.google.firestore.v1beta1.CommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.v1beta1.CommitResponse>}
 *     Promise that resolves to the response
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.commit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/Commit',
      request,
      metadata || {},
      methodDescriptor_Firestore_Commit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.v1beta1.RollbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Firestore_Rollback = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/Rollback',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.v1beta1.RollbackRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.firestore.v1beta1.RollbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.RollbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Firestore_Rollback = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.firestore.v1beta1.RollbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.RollbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.rollback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/Rollback',
      request,
      metadata || {},
      methodDescriptor_Firestore_Rollback,
      callback);
};


/**
 * @param {!proto.google.firestore.v1beta1.RollbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.rollback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/Rollback',
      request,
      metadata || {},
      methodDescriptor_Firestore_Rollback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.v1beta1.RunQueryRequest,
 *   !proto.google.firestore.v1beta1.RunQueryResponse>}
 */
const methodDescriptor_Firestore_RunQuery = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/RunQuery',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.firestore.v1beta1.RunQueryRequest,
  proto.google.firestore.v1beta1.RunQueryResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.RunQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.RunQueryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.RunQueryRequest,
 *   !proto.google.firestore.v1beta1.RunQueryResponse>}
 */
const methodInfo_Firestore_RunQuery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.firestore.v1beta1.RunQueryResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.RunQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.RunQueryResponse.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.RunQueryRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.RunQueryResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.runQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/RunQuery',
      request,
      metadata || {},
      methodDescriptor_Firestore_RunQuery);
};


/**
 * @param {!proto.google.firestore.v1beta1.RunQueryRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.RunQueryResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.runQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/RunQuery',
      request,
      metadata || {},
      methodDescriptor_Firestore_RunQuery);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.v1beta1.ListCollectionIdsRequest,
 *   !proto.google.firestore.v1beta1.ListCollectionIdsResponse>}
 */
const methodDescriptor_Firestore_ListCollectionIds = new grpc.web.MethodDescriptor(
  '/google.firestore.v1beta1.Firestore/ListCollectionIds',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.v1beta1.ListCollectionIdsRequest,
  proto.google.firestore.v1beta1.ListCollectionIdsResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.ListCollectionIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.ListCollectionIdsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.v1beta1.ListCollectionIdsRequest,
 *   !proto.google.firestore.v1beta1.ListCollectionIdsResponse>}
 */
const methodInfo_Firestore_ListCollectionIds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.firestore.v1beta1.ListCollectionIdsResponse,
  /**
   * @param {!proto.google.firestore.v1beta1.ListCollectionIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.v1beta1.ListCollectionIdsResponse.deserializeBinary
);


/**
 * @param {!proto.google.firestore.v1beta1.ListCollectionIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.v1beta1.ListCollectionIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.v1beta1.ListCollectionIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.v1beta1.FirestoreClient.prototype.listCollectionIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/ListCollectionIds',
      request,
      metadata || {},
      methodDescriptor_Firestore_ListCollectionIds,
      callback);
};


/**
 * @param {!proto.google.firestore.v1beta1.ListCollectionIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.v1beta1.ListCollectionIdsResponse>}
 *     Promise that resolves to the response
 */
proto.google.firestore.v1beta1.FirestorePromiseClient.prototype.listCollectionIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.v1beta1.Firestore/ListCollectionIds',
      request,
      metadata || {},
      methodDescriptor_Firestore_ListCollectionIds);
};


module.exports = proto.google.firestore.v1beta1;

