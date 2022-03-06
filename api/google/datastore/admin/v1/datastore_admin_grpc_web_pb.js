/**
 * @fileoverview gRPC-Web generated client stub for google.datastore.admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_datastore_admin_v1_index_pb = require('../../../../google/datastore/admin/v1/index_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.datastore = {};
proto.google.datastore.admin = {};
proto.google.datastore.admin.v1 = require('./datastore_admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.datastore.admin.v1.DatastoreAdminClient =
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
proto.google.datastore.admin.v1.DatastoreAdminPromiseClient =
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
 *   !proto.google.datastore.admin.v1.ExportEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_DatastoreAdmin_ExportEntities = new grpc.web.MethodDescriptor(
  '/google.datastore.admin.v1.DatastoreAdmin/ExportEntities',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.admin.v1.ExportEntitiesRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.datastore.admin.v1.ExportEntitiesRequest} request
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
 *   !proto.google.datastore.admin.v1.ExportEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_DatastoreAdmin_ExportEntities = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.datastore.admin.v1.ExportEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.datastore.admin.v1.ExportEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.admin.v1.DatastoreAdminClient.prototype.exportEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.admin.v1.DatastoreAdmin/ExportEntities',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_ExportEntities,
      callback);
};


/**
 * @param {!proto.google.datastore.admin.v1.ExportEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.datastore.admin.v1.DatastoreAdminPromiseClient.prototype.exportEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.admin.v1.DatastoreAdmin/ExportEntities',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_ExportEntities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.admin.v1.ImportEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_DatastoreAdmin_ImportEntities = new grpc.web.MethodDescriptor(
  '/google.datastore.admin.v1.DatastoreAdmin/ImportEntities',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.admin.v1.ImportEntitiesRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.datastore.admin.v1.ImportEntitiesRequest} request
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
 *   !proto.google.datastore.admin.v1.ImportEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_DatastoreAdmin_ImportEntities = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.datastore.admin.v1.ImportEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.datastore.admin.v1.ImportEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.admin.v1.DatastoreAdminClient.prototype.importEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.admin.v1.DatastoreAdmin/ImportEntities',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_ImportEntities,
      callback);
};


/**
 * @param {!proto.google.datastore.admin.v1.ImportEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.datastore.admin.v1.DatastoreAdminPromiseClient.prototype.importEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.admin.v1.DatastoreAdmin/ImportEntities',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_ImportEntities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.admin.v1.GetIndexRequest,
 *   !proto.google.datastore.admin.v1.Index>}
 */
const methodDescriptor_DatastoreAdmin_GetIndex = new grpc.web.MethodDescriptor(
  '/google.datastore.admin.v1.DatastoreAdmin/GetIndex',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.admin.v1.GetIndexRequest,
  google_datastore_admin_v1_index_pb.Index,
  /**
   * @param {!proto.google.datastore.admin.v1.GetIndexRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_datastore_admin_v1_index_pb.Index.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.admin.v1.GetIndexRequest,
 *   !proto.google.datastore.admin.v1.Index>}
 */
const methodInfo_DatastoreAdmin_GetIndex = new grpc.web.AbstractClientBase.MethodInfo(
  google_datastore_admin_v1_index_pb.Index,
  /**
   * @param {!proto.google.datastore.admin.v1.GetIndexRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_datastore_admin_v1_index_pb.Index.deserializeBinary
);


/**
 * @param {!proto.google.datastore.admin.v1.GetIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.admin.v1.Index)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.admin.v1.Index>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.admin.v1.DatastoreAdminClient.prototype.getIndex =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.admin.v1.DatastoreAdmin/GetIndex',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_GetIndex,
      callback);
};


/**
 * @param {!proto.google.datastore.admin.v1.GetIndexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.admin.v1.Index>}
 *     Promise that resolves to the response
 */
proto.google.datastore.admin.v1.DatastoreAdminPromiseClient.prototype.getIndex =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.admin.v1.DatastoreAdmin/GetIndex',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_GetIndex);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.admin.v1.ListIndexesRequest,
 *   !proto.google.datastore.admin.v1.ListIndexesResponse>}
 */
const methodDescriptor_DatastoreAdmin_ListIndexes = new grpc.web.MethodDescriptor(
  '/google.datastore.admin.v1.DatastoreAdmin/ListIndexes',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.admin.v1.ListIndexesRequest,
  proto.google.datastore.admin.v1.ListIndexesResponse,
  /**
   * @param {!proto.google.datastore.admin.v1.ListIndexesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.admin.v1.ListIndexesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.admin.v1.ListIndexesRequest,
 *   !proto.google.datastore.admin.v1.ListIndexesResponse>}
 */
const methodInfo_DatastoreAdmin_ListIndexes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.admin.v1.ListIndexesResponse,
  /**
   * @param {!proto.google.datastore.admin.v1.ListIndexesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.admin.v1.ListIndexesResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.admin.v1.ListIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.admin.v1.ListIndexesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.admin.v1.ListIndexesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.admin.v1.DatastoreAdminClient.prototype.listIndexes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.admin.v1.DatastoreAdmin/ListIndexes',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_ListIndexes,
      callback);
};


/**
 * @param {!proto.google.datastore.admin.v1.ListIndexesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.admin.v1.ListIndexesResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.admin.v1.DatastoreAdminPromiseClient.prototype.listIndexes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.admin.v1.DatastoreAdmin/ListIndexes',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_ListIndexes);
};


module.exports = proto.google.datastore.admin.v1;

