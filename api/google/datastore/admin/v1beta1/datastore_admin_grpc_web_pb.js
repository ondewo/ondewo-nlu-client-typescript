/**
 * @fileoverview gRPC-Web generated client stub for google.datastore.admin.v1beta1
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.datastore = {};
proto.google.datastore.admin = {};
proto.google.datastore.admin.v1beta1 = require('./datastore_admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.datastore.admin.v1beta1.DatastoreAdminClient =
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
proto.google.datastore.admin.v1beta1.DatastoreAdminPromiseClient =
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
 *   !proto.google.datastore.admin.v1beta1.ExportEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_DatastoreAdmin_ExportEntities = new grpc.web.MethodDescriptor(
  '/google.datastore.admin.v1beta1.DatastoreAdmin/ExportEntities',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.admin.v1beta1.ExportEntitiesRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.datastore.admin.v1beta1.ExportEntitiesRequest} request
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
 *   !proto.google.datastore.admin.v1beta1.ExportEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_DatastoreAdmin_ExportEntities = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.datastore.admin.v1beta1.ExportEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.datastore.admin.v1beta1.ExportEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.admin.v1beta1.DatastoreAdminClient.prototype.exportEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.admin.v1beta1.DatastoreAdmin/ExportEntities',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_ExportEntities,
      callback);
};


/**
 * @param {!proto.google.datastore.admin.v1beta1.ExportEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.datastore.admin.v1beta1.DatastoreAdminPromiseClient.prototype.exportEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.admin.v1beta1.DatastoreAdmin/ExportEntities',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_ExportEntities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.admin.v1beta1.ImportEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_DatastoreAdmin_ImportEntities = new grpc.web.MethodDescriptor(
  '/google.datastore.admin.v1beta1.DatastoreAdmin/ImportEntities',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.admin.v1beta1.ImportEntitiesRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.datastore.admin.v1beta1.ImportEntitiesRequest} request
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
 *   !proto.google.datastore.admin.v1beta1.ImportEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_DatastoreAdmin_ImportEntities = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.datastore.admin.v1beta1.ImportEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.datastore.admin.v1beta1.ImportEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.admin.v1beta1.DatastoreAdminClient.prototype.importEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.admin.v1beta1.DatastoreAdmin/ImportEntities',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_ImportEntities,
      callback);
};


/**
 * @param {!proto.google.datastore.admin.v1beta1.ImportEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.datastore.admin.v1beta1.DatastoreAdminPromiseClient.prototype.importEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.admin.v1beta1.DatastoreAdmin/ImportEntities',
      request,
      metadata || {},
      methodDescriptor_DatastoreAdmin_ImportEntities);
};


module.exports = proto.google.datastore.admin.v1beta1;

