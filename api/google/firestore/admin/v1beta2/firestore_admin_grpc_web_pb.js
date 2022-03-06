/**
 * @fileoverview gRPC-Web generated client stub for google.firestore.admin.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_firestore_admin_v1beta2_field_pb = require('../../../../google/firestore/admin/v1beta2/field_pb.js')

var google_firestore_admin_v1beta2_index_pb = require('../../../../google/firestore/admin/v1beta2/index_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.firestore = {};
proto.google.firestore.admin = {};
proto.google.firestore.admin.v1beta2 = require('./firestore_admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.firestore.admin.v1beta2.FirestoreAdminClient =
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
proto.google.firestore.admin.v1beta2.FirestoreAdminPromiseClient =
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
 *   !proto.google.firestore.admin.v1beta2.GetFieldRequest,
 *   !proto.google.firestore.admin.v1beta2.Field>}
 */
const methodDescriptor_FirestoreAdmin_GetField = new grpc.web.MethodDescriptor(
  '/google.firestore.admin.v1beta2.FirestoreAdmin/GetField',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.admin.v1beta2.GetFieldRequest,
  google_firestore_admin_v1beta2_field_pb.Field,
  /**
   * @param {!proto.google.firestore.admin.v1beta2.GetFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_firestore_admin_v1beta2_field_pb.Field.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.admin.v1beta2.GetFieldRequest,
 *   !proto.google.firestore.admin.v1beta2.Field>}
 */
const methodInfo_FirestoreAdmin_GetField = new grpc.web.AbstractClientBase.MethodInfo(
  google_firestore_admin_v1beta2_field_pb.Field,
  /**
   * @param {!proto.google.firestore.admin.v1beta2.GetFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_firestore_admin_v1beta2_field_pb.Field.deserializeBinary
);


/**
 * @param {!proto.google.firestore.admin.v1beta2.GetFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.admin.v1beta2.Field)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.admin.v1beta2.Field>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.admin.v1beta2.FirestoreAdminClient.prototype.getField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.admin.v1beta2.FirestoreAdmin/GetField',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_GetField,
      callback);
};


/**
 * @param {!proto.google.firestore.admin.v1beta2.GetFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.admin.v1beta2.Field>}
 *     Promise that resolves to the response
 */
proto.google.firestore.admin.v1beta2.FirestoreAdminPromiseClient.prototype.getField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.admin.v1beta2.FirestoreAdmin/GetField',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_GetField);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.admin.v1beta2.UpdateFieldRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_FirestoreAdmin_UpdateField = new grpc.web.MethodDescriptor(
  '/google.firestore.admin.v1beta2.FirestoreAdmin/UpdateField',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.admin.v1beta2.UpdateFieldRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.firestore.admin.v1beta2.UpdateFieldRequest} request
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
 *   !proto.google.firestore.admin.v1beta2.UpdateFieldRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_FirestoreAdmin_UpdateField = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.firestore.admin.v1beta2.UpdateFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.firestore.admin.v1beta2.UpdateFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.admin.v1beta2.FirestoreAdminClient.prototype.updateField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.admin.v1beta2.FirestoreAdmin/UpdateField',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_UpdateField,
      callback);
};


/**
 * @param {!proto.google.firestore.admin.v1beta2.UpdateFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.firestore.admin.v1beta2.FirestoreAdminPromiseClient.prototype.updateField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.admin.v1beta2.FirestoreAdmin/UpdateField',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_UpdateField);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.firestore.admin.v1beta2.ListFieldsRequest,
 *   !proto.google.firestore.admin.v1beta2.ListFieldsResponse>}
 */
const methodDescriptor_FirestoreAdmin_ListFields = new grpc.web.MethodDescriptor(
  '/google.firestore.admin.v1beta2.FirestoreAdmin/ListFields',
  grpc.web.MethodType.UNARY,
  proto.google.firestore.admin.v1beta2.ListFieldsRequest,
  proto.google.firestore.admin.v1beta2.ListFieldsResponse,
  /**
   * @param {!proto.google.firestore.admin.v1beta2.ListFieldsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.admin.v1beta2.ListFieldsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.firestore.admin.v1beta2.ListFieldsRequest,
 *   !proto.google.firestore.admin.v1beta2.ListFieldsResponse>}
 */
const methodInfo_FirestoreAdmin_ListFields = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.firestore.admin.v1beta2.ListFieldsResponse,
  /**
   * @param {!proto.google.firestore.admin.v1beta2.ListFieldsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.firestore.admin.v1beta2.ListFieldsResponse.deserializeBinary
);


/**
 * @param {!proto.google.firestore.admin.v1beta2.ListFieldsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.firestore.admin.v1beta2.ListFieldsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.firestore.admin.v1beta2.ListFieldsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.firestore.admin.v1beta2.FirestoreAdminClient.prototype.listFields =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.firestore.admin.v1beta2.FirestoreAdmin/ListFields',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_ListFields,
      callback);
};


/**
 * @param {!proto.google.firestore.admin.v1beta2.ListFieldsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.firestore.admin.v1beta2.ListFieldsResponse>}
 *     Promise that resolves to the response
 */
proto.google.firestore.admin.v1beta2.FirestoreAdminPromiseClient.prototype.listFields =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.firestore.admin.v1beta2.FirestoreAdmin/ListFields',
      request,
      metadata || {},
      methodDescriptor_FirestoreAdmin_ListFields);
};


module.exports = proto.google.firestore.admin.v1beta2;

