/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.clouderrorreporting.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_devtools_clouderrorreporting_v1beta1_common_pb = require('../../../../google/devtools/clouderrorreporting/v1beta1/common_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.clouderrorreporting = {};
proto.google.devtools.clouderrorreporting.v1beta1 = require('./error_group_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroupServiceClient =
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
proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroupServicePromiseClient =
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
 *   !proto.google.devtools.clouderrorreporting.v1beta1.GetGroupRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroup>}
 */
const methodDescriptor_ErrorGroupService_GetGroup = new grpc.web.MethodDescriptor(
  '/google.devtools.clouderrorreporting.v1beta1.ErrorGroupService/GetGroup',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouderrorreporting.v1beta1.GetGroupRequest,
  google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.GetGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouderrorreporting.v1beta1.GetGroupRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroup>}
 */
const methodInfo_ErrorGroupService_GetGroup = new grpc.web.AbstractClientBase.MethodInfo(
  google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.GetGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.GetGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroup)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroup>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroupServiceClient.prototype.getGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ErrorGroupService/GetGroup',
      request,
      metadata || {},
      methodDescriptor_ErrorGroupService_GetGroup,
      callback);
};


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.GetGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroup>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroupServicePromiseClient.prototype.getGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ErrorGroupService/GetGroup',
      request,
      metadata || {},
      methodDescriptor_ErrorGroupService_GetGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.clouderrorreporting.v1beta1.UpdateGroupRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroup>}
 */
const methodDescriptor_ErrorGroupService_UpdateGroup = new grpc.web.MethodDescriptor(
  '/google.devtools.clouderrorreporting.v1beta1.ErrorGroupService/UpdateGroup',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouderrorreporting.v1beta1.UpdateGroupRequest,
  google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.UpdateGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouderrorreporting.v1beta1.UpdateGroupRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroup>}
 */
const methodInfo_ErrorGroupService_UpdateGroup = new grpc.web.AbstractClientBase.MethodInfo(
  google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.UpdateGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.UpdateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroup)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroup>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroupServiceClient.prototype.updateGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ErrorGroupService/UpdateGroup',
      request,
      metadata || {},
      methodDescriptor_ErrorGroupService_UpdateGroup,
      callback);
};


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.UpdateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroup>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorGroupServicePromiseClient.prototype.updateGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ErrorGroupService/UpdateGroup',
      request,
      metadata || {},
      methodDescriptor_ErrorGroupService_UpdateGroup);
};


module.exports = proto.google.devtools.clouderrorreporting.v1beta1;

