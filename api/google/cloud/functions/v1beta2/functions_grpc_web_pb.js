/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.functions.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_api_auth_pb = require('../../../../google/api/auth_pb.js')

var google_cloud_functions_v1beta2_operations_pb = require('../../../../google/cloud/functions/v1beta2/operations_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.functions = {};
proto.google.cloud.functions.v1beta2 = require('./functions_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServiceClient =
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
proto.google.cloud.functions.v1beta2.CloudFunctionsServicePromiseClient =
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
 *   !proto.google.cloud.functions.v1beta2.ListFunctionsRequest,
 *   !proto.google.cloud.functions.v1beta2.ListFunctionsResponse>}
 */
const methodDescriptor_CloudFunctionsService_ListFunctions = new grpc.web.MethodDescriptor(
  '/google.cloud.functions.v1beta2.CloudFunctionsService/ListFunctions',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.functions.v1beta2.ListFunctionsRequest,
  proto.google.cloud.functions.v1beta2.ListFunctionsResponse,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.ListFunctionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.functions.v1beta2.ListFunctionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.functions.v1beta2.ListFunctionsRequest,
 *   !proto.google.cloud.functions.v1beta2.ListFunctionsResponse>}
 */
const methodInfo_CloudFunctionsService_ListFunctions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.functions.v1beta2.ListFunctionsResponse,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.ListFunctionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.functions.v1beta2.ListFunctionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.functions.v1beta2.ListFunctionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.functions.v1beta2.ListFunctionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.functions.v1beta2.ListFunctionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServiceClient.prototype.listFunctions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/ListFunctions',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_ListFunctions,
      callback);
};


/**
 * @param {!proto.google.cloud.functions.v1beta2.ListFunctionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.functions.v1beta2.ListFunctionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServicePromiseClient.prototype.listFunctions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/ListFunctions',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_ListFunctions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.functions.v1beta2.GetFunctionRequest,
 *   !proto.google.cloud.functions.v1beta2.CloudFunction>}
 */
const methodDescriptor_CloudFunctionsService_GetFunction = new grpc.web.MethodDescriptor(
  '/google.cloud.functions.v1beta2.CloudFunctionsService/GetFunction',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.functions.v1beta2.GetFunctionRequest,
  proto.google.cloud.functions.v1beta2.CloudFunction,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.GetFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.functions.v1beta2.CloudFunction.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.functions.v1beta2.GetFunctionRequest,
 *   !proto.google.cloud.functions.v1beta2.CloudFunction>}
 */
const methodInfo_CloudFunctionsService_GetFunction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.functions.v1beta2.CloudFunction,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.GetFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.functions.v1beta2.CloudFunction.deserializeBinary
);


/**
 * @param {!proto.google.cloud.functions.v1beta2.GetFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.functions.v1beta2.CloudFunction)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.functions.v1beta2.CloudFunction>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServiceClient.prototype.getFunction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/GetFunction',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_GetFunction,
      callback);
};


/**
 * @param {!proto.google.cloud.functions.v1beta2.GetFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.functions.v1beta2.CloudFunction>}
 *     Promise that resolves to the response
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServicePromiseClient.prototype.getFunction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/GetFunction',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_GetFunction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.functions.v1beta2.CreateFunctionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_CloudFunctionsService_CreateFunction = new grpc.web.MethodDescriptor(
  '/google.cloud.functions.v1beta2.CloudFunctionsService/CreateFunction',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.functions.v1beta2.CreateFunctionRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.CreateFunctionRequest} request
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
 *   !proto.google.cloud.functions.v1beta2.CreateFunctionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_CloudFunctionsService_CreateFunction = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.CreateFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.functions.v1beta2.CreateFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServiceClient.prototype.createFunction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/CreateFunction',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_CreateFunction,
      callback);
};


/**
 * @param {!proto.google.cloud.functions.v1beta2.CreateFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServicePromiseClient.prototype.createFunction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/CreateFunction',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_CreateFunction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.functions.v1beta2.UpdateFunctionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_CloudFunctionsService_UpdateFunction = new grpc.web.MethodDescriptor(
  '/google.cloud.functions.v1beta2.CloudFunctionsService/UpdateFunction',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.functions.v1beta2.UpdateFunctionRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.UpdateFunctionRequest} request
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
 *   !proto.google.cloud.functions.v1beta2.UpdateFunctionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_CloudFunctionsService_UpdateFunction = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.UpdateFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.functions.v1beta2.UpdateFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServiceClient.prototype.updateFunction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/UpdateFunction',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_UpdateFunction,
      callback);
};


/**
 * @param {!proto.google.cloud.functions.v1beta2.UpdateFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServicePromiseClient.prototype.updateFunction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/UpdateFunction',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_UpdateFunction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.functions.v1beta2.DeleteFunctionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_CloudFunctionsService_DeleteFunction = new grpc.web.MethodDescriptor(
  '/google.cloud.functions.v1beta2.CloudFunctionsService/DeleteFunction',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.functions.v1beta2.DeleteFunctionRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.DeleteFunctionRequest} request
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
 *   !proto.google.cloud.functions.v1beta2.DeleteFunctionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_CloudFunctionsService_DeleteFunction = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.DeleteFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.functions.v1beta2.DeleteFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServiceClient.prototype.deleteFunction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/DeleteFunction',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_DeleteFunction,
      callback);
};


/**
 * @param {!proto.google.cloud.functions.v1beta2.DeleteFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServicePromiseClient.prototype.deleteFunction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/DeleteFunction',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_DeleteFunction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.functions.v1beta2.CallFunctionRequest,
 *   !proto.google.cloud.functions.v1beta2.CallFunctionResponse>}
 */
const methodDescriptor_CloudFunctionsService_CallFunction = new grpc.web.MethodDescriptor(
  '/google.cloud.functions.v1beta2.CloudFunctionsService/CallFunction',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.functions.v1beta2.CallFunctionRequest,
  proto.google.cloud.functions.v1beta2.CallFunctionResponse,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.CallFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.functions.v1beta2.CallFunctionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.functions.v1beta2.CallFunctionRequest,
 *   !proto.google.cloud.functions.v1beta2.CallFunctionResponse>}
 */
const methodInfo_CloudFunctionsService_CallFunction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.functions.v1beta2.CallFunctionResponse,
  /**
   * @param {!proto.google.cloud.functions.v1beta2.CallFunctionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.functions.v1beta2.CallFunctionResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.functions.v1beta2.CallFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.functions.v1beta2.CallFunctionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.functions.v1beta2.CallFunctionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServiceClient.prototype.callFunction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/CallFunction',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_CallFunction,
      callback);
};


/**
 * @param {!proto.google.cloud.functions.v1beta2.CallFunctionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.functions.v1beta2.CallFunctionResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.functions.v1beta2.CloudFunctionsServicePromiseClient.prototype.callFunction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.functions.v1beta2.CloudFunctionsService/CallFunction',
      request,
      metadata || {},
      methodDescriptor_CloudFunctionsService_CallFunction);
};


module.exports = proto.google.cloud.functions.v1beta2;

