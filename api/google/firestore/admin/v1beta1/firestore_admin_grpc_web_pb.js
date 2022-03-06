/**
 * @fileoverview gRPC-Web generated client stub for google.firestore.admin.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_firestore_admin_v1beta1_index_pb = require('../../../../google/firestore/admin/v1beta1/index_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.firestore = {};
proto.google.firestore.admin = {};
proto.google.firestore.admin.v1beta1 = require('./firestore_admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminClient =
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
proto.google.firestore.admin.v1beta1.FirestoreAdminPromiseClient =
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
 *   !proto.google.firestore.admin.v1beta1.CreateIndexRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_FirestoreAdmin_CreateIndex = new grpc.web.MethodDescriptor(
  '/google.firestore.admin.v1beta1.FirestoreAdmin/CreateIndex',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.admin.v1beta1.CreateIndexRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.CreateIndexRequest} request
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
 *   !proto.google.firestore.admin.v1beta1.CreateIndexRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_FirestoreAdmin_CreateIndex = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.CreateIndexRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.firestore.admin.v1beta1.CreateIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminClient.prototype.createIndex =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/CreateIndex',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_CreateIndex,
      callback);
};


/**
 * @param {!proto.google.firestore.admin.v1beta1.CreateIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminPromiseClient.prototype.createIndex =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/CreateIndex',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_CreateIndex);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.admin.v1beta1.ListIndexesRequest,
 *   !proto.google.firestore.admin.v1beta1.ListIndexesResponse>}
 */
const methodDescriptor_FirestoreAdmin_ListIndexes = new grpc.web.MethodDescriptor(
  '/google.firestore.admin.v1beta1.FirestoreAdmin/ListIndexes',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.admin.v1beta1.ListIndexesRequest,
  proto.google.firestore.admin.v1beta1.ListIndexesResponse,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.ListIndexesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.admin.v1beta1.ListIndexesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.admin.v1beta1.ListIndexesRequest,
 *   !proto.google.firestore.admin.v1beta1.ListIndexesResponse>}
 */
const methodInfo_FirestoreAdmin_ListIndexes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.firestore.admin.v1beta1.ListIndexesResponse,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.ListIndexesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.admin.v1beta1.ListIndexesResponse.deserializeBinary
);


/**
 * @param {!proto.google.firestore.admin.v1beta1.ListIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.admin.v1beta1.ListIndexesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.admin.v1beta1.ListIndexesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminClient.prototype.listIndexes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/ListIndexes',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_ListIndexes,
      callback);
};


/**
 * @param {!proto.google.firestore.admin.v1beta1.ListIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.admin.v1beta1.ListIndexesResponse>}
 *     Promise that resolves to the response
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminPromiseClient.prototype.listIndexes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/ListIndexes',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_ListIndexes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.admin.v1beta1.GetIndexRequest,
 *   !proto.google.firestore.admin.v1beta1.Index>}
 */
const methodDescriptor_FirestoreAdmin_GetIndex = new grpc.web.MethodDescriptor(
  '/google.firestore.admin.v1beta1.FirestoreAdmin/GetIndex',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.admin.v1beta1.GetIndexRequest,
  google_firestore_admin_v1beta1_index_pb.Index,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.GetIndexRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_firestore_admin_v1beta1_index_pb.Index.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.admin.v1beta1.GetIndexRequest,
 *   !proto.google.firestore.admin.v1beta1.Index>}
 */
const methodInfo_FirestoreAdmin_GetIndex = new grpc.web.AbstractClientBase.MethodInfo(
  google_firestore_admin_v1beta1_index_pb.Index,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.GetIndexRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_firestore_admin_v1beta1_index_pb.Index.deserializeBinary
);


/**
 * @param {!proto.google.firestore.admin.v1beta1.GetIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.admin.v1beta1.Index)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.admin.v1beta1.Index>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminClient.prototype.getIndex =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/GetIndex',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_GetIndex,
      callback);
};


/**
 * @param {!proto.google.firestore.admin.v1beta1.GetIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.admin.v1beta1.Index>}
 *     Promise that resolves to the response
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminPromiseClient.prototype.getIndex =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/GetIndex',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_GetIndex);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.admin.v1beta1.DeleteIndexRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_FirestoreAdmin_DeleteIndex = new grpc.web.MethodDescriptor(
  '/google.firestore.admin.v1beta1.FirestoreAdmin/DeleteIndex',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.admin.v1beta1.DeleteIndexRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.DeleteIndexRequest} request
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
 *   !proto.google.firestore.admin.v1beta1.DeleteIndexRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_FirestoreAdmin_DeleteIndex = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.DeleteIndexRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.firestore.admin.v1beta1.DeleteIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminClient.prototype.deleteIndex =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/DeleteIndex',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_DeleteIndex,
      callback);
};


/**
 * @param {!proto.google.firestore.admin.v1beta1.DeleteIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminPromiseClient.prototype.deleteIndex =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/DeleteIndex',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_DeleteIndex);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.admin.v1beta1.ExportDocumentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_FirestoreAdmin_ExportDocuments = new grpc.web.MethodDescriptor(
  '/google.firestore.admin.v1beta1.FirestoreAdmin/ExportDocuments',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.admin.v1beta1.ExportDocumentsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.ExportDocumentsRequest} request
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
 *   !proto.google.firestore.admin.v1beta1.ExportDocumentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_FirestoreAdmin_ExportDocuments = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.ExportDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.firestore.admin.v1beta1.ExportDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminClient.prototype.exportDocuments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/ExportDocuments',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_ExportDocuments,
      callback);
};


/**
 * @param {!proto.google.firestore.admin.v1beta1.ExportDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminPromiseClient.prototype.exportDocuments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/ExportDocuments',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_ExportDocuments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.admin.v1beta1.ImportDocumentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_FirestoreAdmin_ImportDocuments = new grpc.web.MethodDescriptor(
  '/google.firestore.admin.v1beta1.FirestoreAdmin/ImportDocuments',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.admin.v1beta1.ImportDocumentsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.ImportDocumentsRequest} request
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
 *   !proto.google.firestore.admin.v1beta1.ImportDocumentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_FirestoreAdmin_ImportDocuments = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.firestore.admin.v1beta1.ImportDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.firestore.admin.v1beta1.ImportDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminClient.prototype.importDocuments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/ImportDocuments',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_ImportDocuments,
      callback);
};


/**
 * @param {!proto.google.firestore.admin.v1beta1.ImportDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.firestore.admin.v1beta1.FirestoreAdminPromiseClient.prototype.importDocuments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.admin.v1beta1.FirestoreAdmin/ImportDocuments',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_ImportDocuments);
};


module.exports = proto.google.firestore.admin.v1beta1;

