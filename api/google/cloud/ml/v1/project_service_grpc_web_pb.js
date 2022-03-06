/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.ml.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.ml = {};
proto.google.cloud.ml.v1 = require('./project_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.ml.v1.ProjectManagementServiceClient =
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
proto.google.cloud.ml.v1.ProjectManagementServicePromiseClient =
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
 *   !proto.google.cloud.ml.v1.GetConfigRequest,
 *   !proto.google.cloud.ml.v1.GetConfigResponse>}
 */
const methodDescriptor_ProjectManagementService_GetConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.ProjectManagementService/GetConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.GetConfigRequest,
  proto.google.cloud.ml.v1.GetConfigResponse,
  /**
   * @param {!proto.google.cloud.ml.v1.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.GetConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.GetConfigRequest,
 *   !proto.google.cloud.ml.v1.GetConfigResponse>}
 */
const methodInfo_ProjectManagementService_GetConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.ml.v1.GetConfigResponse,
  /**
   * @param {!proto.google.cloud.ml.v1.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.GetConfigResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.ml.v1.GetConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.ml.v1.GetConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.ProjectManagementServiceClient.prototype.getConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.ProjectManagementService/GetConfig',
      request,
      metadata || {},
      methodDescriptor_ProjectManagementService_GetConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.ml.v1.GetConfigResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.ProjectManagementServicePromiseClient.prototype.getConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.ProjectManagementService/GetConfig',
      request,
      metadata || {},
      methodDescriptor_ProjectManagementService_GetConfig);
};


module.exports = proto.google.cloud.ml.v1;

