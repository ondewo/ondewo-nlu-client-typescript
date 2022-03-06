/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.cloudprofiler.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.cloudprofiler = {};
proto.google.devtools.cloudprofiler.v2 = require('./profiler_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.cloudprofiler.v2.ProfilerServiceClient =
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
proto.google.devtools.cloudprofiler.v2.ProfilerServicePromiseClient =
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
 *   !proto.google.devtools.cloudprofiler.v2.CreateProfileRequest,
 *   !proto.google.devtools.cloudprofiler.v2.Profile>}
 */
const methodDescriptor_ProfilerService_CreateProfile = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudprofiler.v2.ProfilerService/CreateProfile',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudprofiler.v2.CreateProfileRequest,
  proto.google.devtools.cloudprofiler.v2.Profile,
  /**
   * @param {!proto.google.devtools.cloudprofiler.v2.CreateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudprofiler.v2.Profile.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudprofiler.v2.CreateProfileRequest,
 *   !proto.google.devtools.cloudprofiler.v2.Profile>}
 */
const methodInfo_ProfilerService_CreateProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudprofiler.v2.Profile,
  /**
   * @param {!proto.google.devtools.cloudprofiler.v2.CreateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudprofiler.v2.Profile.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudprofiler.v2.CreateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudprofiler.v2.Profile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudprofiler.v2.Profile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudprofiler.v2.ProfilerServiceClient.prototype.createProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudprofiler.v2.ProfilerService/CreateProfile',
      request,
      metadata || {},
      methodDescriptor_ProfilerService_CreateProfile,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudprofiler.v2.CreateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudprofiler.v2.Profile>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudprofiler.v2.ProfilerServicePromiseClient.prototype.createProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudprofiler.v2.ProfilerService/CreateProfile',
      request,
      metadata || {},
      methodDescriptor_ProfilerService_CreateProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest,
 *   !proto.google.devtools.cloudprofiler.v2.Profile>}
 */
const methodDescriptor_ProfilerService_CreateOfflineProfile = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudprofiler.v2.ProfilerService/CreateOfflineProfile',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest,
  proto.google.devtools.cloudprofiler.v2.Profile,
  /**
   * @param {!proto.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudprofiler.v2.Profile.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest,
 *   !proto.google.devtools.cloudprofiler.v2.Profile>}
 */
const methodInfo_ProfilerService_CreateOfflineProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudprofiler.v2.Profile,
  /**
   * @param {!proto.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudprofiler.v2.Profile.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudprofiler.v2.Profile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudprofiler.v2.Profile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudprofiler.v2.ProfilerServiceClient.prototype.createOfflineProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudprofiler.v2.ProfilerService/CreateOfflineProfile',
      request,
      metadata || {},
      methodDescriptor_ProfilerService_CreateOfflineProfile,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudprofiler.v2.Profile>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudprofiler.v2.ProfilerServicePromiseClient.prototype.createOfflineProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudprofiler.v2.ProfilerService/CreateOfflineProfile',
      request,
      metadata || {},
      methodDescriptor_ProfilerService_CreateOfflineProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudprofiler.v2.UpdateProfileRequest,
 *   !proto.google.devtools.cloudprofiler.v2.Profile>}
 */
const methodDescriptor_ProfilerService_UpdateProfile = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudprofiler.v2.ProfilerService/UpdateProfile',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudprofiler.v2.UpdateProfileRequest,
  proto.google.devtools.cloudprofiler.v2.Profile,
  /**
   * @param {!proto.google.devtools.cloudprofiler.v2.UpdateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudprofiler.v2.Profile.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudprofiler.v2.UpdateProfileRequest,
 *   !proto.google.devtools.cloudprofiler.v2.Profile>}
 */
const methodInfo_ProfilerService_UpdateProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudprofiler.v2.Profile,
  /**
   * @param {!proto.google.devtools.cloudprofiler.v2.UpdateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudprofiler.v2.Profile.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudprofiler.v2.UpdateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudprofiler.v2.Profile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudprofiler.v2.Profile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudprofiler.v2.ProfilerServiceClient.prototype.updateProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudprofiler.v2.ProfilerService/UpdateProfile',
      request,
      metadata || {},
      methodDescriptor_ProfilerService_UpdateProfile,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudprofiler.v2.UpdateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudprofiler.v2.Profile>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudprofiler.v2.ProfilerServicePromiseClient.prototype.updateProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudprofiler.v2.ProfilerService/UpdateProfile',
      request,
      metadata || {},
      methodDescriptor_ProfilerService_UpdateProfile);
};


module.exports = proto.google.devtools.cloudprofiler.v2;

