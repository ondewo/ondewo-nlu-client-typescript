/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.remoteworkers.v1test2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.remoteworkers = {};
proto.google.devtools.remoteworkers.v1test2 = require('./tasks_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.remoteworkers.v1test2.TasksClient =
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
proto.google.devtools.remoteworkers.v1test2.TasksPromiseClient =
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
 *   !proto.google.devtools.remoteworkers.v1test2.GetTaskRequest,
 *   !proto.google.devtools.remoteworkers.v1test2.Task>}
 */
const methodDescriptor_Tasks_GetTask = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteworkers.v1test2.Tasks/GetTask',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteworkers.v1test2.GetTaskRequest,
  proto.google.devtools.remoteworkers.v1test2.Task,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.GetTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteworkers.v1test2.Task.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.remoteworkers.v1test2.GetTaskRequest,
 *   !proto.google.devtools.remoteworkers.v1test2.Task>}
 */
const methodInfo_Tasks_GetTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.remoteworkers.v1test2.Task,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.GetTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteworkers.v1test2.Task.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.GetTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.remoteworkers.v1test2.Task)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.remoteworkers.v1test2.Task>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteworkers.v1test2.TasksClient.prototype.getTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Tasks/GetTask',
      request,
      metadata || {},
      methodDescriptor_Tasks_GetTask,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.GetTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.remoteworkers.v1test2.Task>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteworkers.v1test2.TasksPromiseClient.prototype.getTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Tasks/GetTask',
      request,
      metadata || {},
      methodDescriptor_Tasks_GetTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.remoteworkers.v1test2.UpdateTaskResultRequest,
 *   !proto.google.devtools.remoteworkers.v1test2.TaskResult>}
 */
const methodDescriptor_Tasks_UpdateTaskResult = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteworkers.v1test2.Tasks/UpdateTaskResult',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteworkers.v1test2.UpdateTaskResultRequest,
  proto.google.devtools.remoteworkers.v1test2.TaskResult,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.UpdateTaskResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteworkers.v1test2.TaskResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.remoteworkers.v1test2.UpdateTaskResultRequest,
 *   !proto.google.devtools.remoteworkers.v1test2.TaskResult>}
 */
const methodInfo_Tasks_UpdateTaskResult = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.remoteworkers.v1test2.TaskResult,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.UpdateTaskResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteworkers.v1test2.TaskResult.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.UpdateTaskResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.remoteworkers.v1test2.TaskResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.remoteworkers.v1test2.TaskResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteworkers.v1test2.TasksClient.prototype.updateTaskResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Tasks/UpdateTaskResult',
      request,
      metadata || {},
      methodDescriptor_Tasks_UpdateTaskResult,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.UpdateTaskResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.remoteworkers.v1test2.TaskResult>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteworkers.v1test2.TasksPromiseClient.prototype.updateTaskResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Tasks/UpdateTaskResult',
      request,
      metadata || {},
      methodDescriptor_Tasks_UpdateTaskResult);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.remoteworkers.v1test2.AddTaskLogRequest,
 *   !proto.google.devtools.remoteworkers.v1test2.AddTaskLogResponse>}
 */
const methodDescriptor_Tasks_AddTaskLog = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteworkers.v1test2.Tasks/AddTaskLog',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteworkers.v1test2.AddTaskLogRequest,
  proto.google.devtools.remoteworkers.v1test2.AddTaskLogResponse,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.AddTaskLogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteworkers.v1test2.AddTaskLogResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.remoteworkers.v1test2.AddTaskLogRequest,
 *   !proto.google.devtools.remoteworkers.v1test2.AddTaskLogResponse>}
 */
const methodInfo_Tasks_AddTaskLog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.remoteworkers.v1test2.AddTaskLogResponse,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.AddTaskLogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteworkers.v1test2.AddTaskLogResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.AddTaskLogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.remoteworkers.v1test2.AddTaskLogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.remoteworkers.v1test2.AddTaskLogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteworkers.v1test2.TasksClient.prototype.addTaskLog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Tasks/AddTaskLog',
      request,
      metadata || {},
      methodDescriptor_Tasks_AddTaskLog,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.AddTaskLogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.remoteworkers.v1test2.AddTaskLogResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteworkers.v1test2.TasksPromiseClient.prototype.addTaskLog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Tasks/AddTaskLog',
      request,
      metadata || {},
      methodDescriptor_Tasks_AddTaskLog);
};


module.exports = proto.google.devtools.remoteworkers.v1test2;

