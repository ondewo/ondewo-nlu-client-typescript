/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.redis.v1
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

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.redis = {};
proto.google.cloud.redis.v1 = require('./cloud_redis_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.redis.v1.CloudRedisClient =
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
proto.google.cloud.redis.v1.CloudRedisPromiseClient =
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
 *   !proto.google.cloud.redis.v1.ListInstancesRequest,
 *   !proto.google.cloud.redis.v1.ListInstancesResponse>}
 */
const methodDescriptor_CloudRedis_ListInstances = new grpc.web.MethodDescriptor(
  '/google.cloud.redis.v1.CloudRedis/ListInstances',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.redis.v1.ListInstancesRequest,
  proto.google.cloud.redis.v1.ListInstancesResponse,
  /**
   * @param {!proto.google.cloud.redis.v1.ListInstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.redis.v1.ListInstancesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.redis.v1.ListInstancesRequest,
 *   !proto.google.cloud.redis.v1.ListInstancesResponse>}
 */
const methodInfo_CloudRedis_ListInstances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.redis.v1.ListInstancesResponse,
  /**
   * @param {!proto.google.cloud.redis.v1.ListInstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.redis.v1.ListInstancesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.redis.v1.ListInstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.redis.v1.ListInstancesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.redis.v1.ListInstancesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.redis.v1.CloudRedisClient.prototype.listInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.redis.v1.CloudRedis/ListInstances',
      request,
      metadata || {},
      methodDescriptor_CloudRedis_ListInstances,
      callback);
};


/**
 * @param {!proto.google.cloud.redis.v1.ListInstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.redis.v1.ListInstancesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.redis.v1.CloudRedisPromiseClient.prototype.listInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.redis.v1.CloudRedis/ListInstances',
      request,
      metadata || {},
      methodDescriptor_CloudRedis_ListInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.redis.v1.GetInstanceRequest,
 *   !proto.google.cloud.redis.v1.Instance>}
 */
const methodDescriptor_CloudRedis_GetInstance = new grpc.web.MethodDescriptor(
  '/google.cloud.redis.v1.CloudRedis/GetInstance',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.redis.v1.GetInstanceRequest,
  proto.google.cloud.redis.v1.Instance,
  /**
   * @param {!proto.google.cloud.redis.v1.GetInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.redis.v1.Instance.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.redis.v1.GetInstanceRequest,
 *   !proto.google.cloud.redis.v1.Instance>}
 */
const methodInfo_CloudRedis_GetInstance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.redis.v1.Instance,
  /**
   * @param {!proto.google.cloud.redis.v1.GetInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.redis.v1.Instance.deserializeBinary
);


/**
 * @param {!proto.google.cloud.redis.v1.GetInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.redis.v1.Instance)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.redis.v1.Instance>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.redis.v1.CloudRedisClient.prototype.getInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.redis.v1.CloudRedis/GetInstance',
      request,
      metadata || {},
      methodDescriptor_CloudRedis_GetInstance,
      callback);
};


/**
 * @param {!proto.google.cloud.redis.v1.GetInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.redis.v1.Instance>}
 *     Promise that resolves to the response
 */
proto.google.cloud.redis.v1.CloudRedisPromiseClient.prototype.getInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.redis.v1.CloudRedis/GetInstance',
      request,
      metadata || {},
      methodDescriptor_CloudRedis_GetInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.redis.v1.CreateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_CloudRedis_CreateInstance = new grpc.web.MethodDescriptor(
  '/google.cloud.redis.v1.CloudRedis/CreateInstance',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.redis.v1.CreateInstanceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.redis.v1.CreateInstanceRequest} request
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
 *   !proto.google.cloud.redis.v1.CreateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_CloudRedis_CreateInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.redis.v1.CreateInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.redis.v1.CreateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.redis.v1.CloudRedisClient.prototype.createInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.redis.v1.CloudRedis/CreateInstance',
      request,
      metadata || {},
      methodDescriptor_CloudRedis_CreateInstance,
      callback);
};


/**
 * @param {!proto.google.cloud.redis.v1.CreateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.redis.v1.CloudRedisPromiseClient.prototype.createInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.redis.v1.CloudRedis/CreateInstance',
      request,
      metadata || {},
      methodDescriptor_CloudRedis_CreateInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.redis.v1.UpdateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_CloudRedis_UpdateInstance = new grpc.web.MethodDescriptor(
  '/google.cloud.redis.v1.CloudRedis/UpdateInstance',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.redis.v1.UpdateInstanceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.redis.v1.UpdateInstanceRequest} request
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
 *   !proto.google.cloud.redis.v1.UpdateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_CloudRedis_UpdateInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.redis.v1.UpdateInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.redis.v1.UpdateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.redis.v1.CloudRedisClient.prototype.updateInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.redis.v1.CloudRedis/UpdateInstance',
      request,
      metadata || {},
      methodDescriptor_CloudRedis_UpdateInstance,
      callback);
};


/**
 * @param {!proto.google.cloud.redis.v1.UpdateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.redis.v1.CloudRedisPromiseClient.prototype.updateInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.redis.v1.CloudRedis/UpdateInstance',
      request,
      metadata || {},
      methodDescriptor_CloudRedis_UpdateInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.redis.v1.DeleteInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_CloudRedis_DeleteInstance = new grpc.web.MethodDescriptor(
  '/google.cloud.redis.v1.CloudRedis/DeleteInstance',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.redis.v1.DeleteInstanceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.redis.v1.DeleteInstanceRequest} request
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
 *   !proto.google.cloud.redis.v1.DeleteInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_CloudRedis_DeleteInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.redis.v1.DeleteInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.redis.v1.DeleteInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.redis.v1.CloudRedisClient.prototype.deleteInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.redis.v1.CloudRedis/DeleteInstance',
      request,
      metadata || {},
      methodDescriptor_CloudRedis_DeleteInstance,
      callback);
};


/**
 * @param {!proto.google.cloud.redis.v1.DeleteInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.redis.v1.CloudRedisPromiseClient.prototype.deleteInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.redis.v1.CloudRedis/DeleteInstance',
      request,
      metadata || {},
      methodDescriptor_CloudRedis_DeleteInstance);
};


module.exports = proto.google.cloud.redis.v1;

