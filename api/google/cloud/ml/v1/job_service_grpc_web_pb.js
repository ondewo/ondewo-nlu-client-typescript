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

var google_api_auth_pb = require('../../../../google/api/auth_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.ml = {};
proto.google.cloud.ml.v1 = require('./job_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.ml.v1.JobServiceClient =
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
proto.google.cloud.ml.v1.JobServicePromiseClient =
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
 *   !proto.google.cloud.ml.v1.CreateJobRequest,
 *   !proto.google.cloud.ml.v1.Job>}
 */
const methodDescriptor_JobService_CreateJob = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.JobService/CreateJob',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.CreateJobRequest,
  proto.google.cloud.ml.v1.Job,
  /**
   * @param {!proto.google.cloud.ml.v1.CreateJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Job.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.CreateJobRequest,
 *   !proto.google.cloud.ml.v1.Job>}
 */
const methodInfo_JobService_CreateJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.ml.v1.Job,
  /**
   * @param {!proto.google.cloud.ml.v1.CreateJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Job.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.CreateJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.ml.v1.Job)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.ml.v1.Job>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.JobServiceClient.prototype.createJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.JobService/CreateJob',
      request,
      metadata || {},
      methodDescriptor_JobService_CreateJob,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.CreateJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.ml.v1.Job>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.JobServicePromiseClient.prototype.createJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.JobService/CreateJob',
      request,
      metadata || {},
      methodDescriptor_JobService_CreateJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.ListJobsRequest,
 *   !proto.google.cloud.ml.v1.ListJobsResponse>}
 */
const methodDescriptor_JobService_ListJobs = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.JobService/ListJobs',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.ListJobsRequest,
  proto.google.cloud.ml.v1.ListJobsResponse,
  /**
   * @param {!proto.google.cloud.ml.v1.ListJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.ListJobsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.ListJobsRequest,
 *   !proto.google.cloud.ml.v1.ListJobsResponse>}
 */
const methodInfo_JobService_ListJobs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.ml.v1.ListJobsResponse,
  /**
   * @param {!proto.google.cloud.ml.v1.ListJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.ListJobsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.ListJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.ml.v1.ListJobsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.ml.v1.ListJobsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.JobServiceClient.prototype.listJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.JobService/ListJobs',
      request,
      metadata || {},
      methodDescriptor_JobService_ListJobs,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.ListJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.ml.v1.ListJobsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.JobServicePromiseClient.prototype.listJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.JobService/ListJobs',
      request,
      metadata || {},
      methodDescriptor_JobService_ListJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.GetJobRequest,
 *   !proto.google.cloud.ml.v1.Job>}
 */
const methodDescriptor_JobService_GetJob = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.JobService/GetJob',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.GetJobRequest,
  proto.google.cloud.ml.v1.Job,
  /**
   * @param {!proto.google.cloud.ml.v1.GetJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Job.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.GetJobRequest,
 *   !proto.google.cloud.ml.v1.Job>}
 */
const methodInfo_JobService_GetJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.ml.v1.Job,
  /**
   * @param {!proto.google.cloud.ml.v1.GetJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Job.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.GetJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.ml.v1.Job)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.ml.v1.Job>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.JobServiceClient.prototype.getJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.JobService/GetJob',
      request,
      metadata || {},
      methodDescriptor_JobService_GetJob,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.GetJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.ml.v1.Job>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.JobServicePromiseClient.prototype.getJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.JobService/GetJob',
      request,
      metadata || {},
      methodDescriptor_JobService_GetJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.CancelJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_JobService_CancelJob = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.JobService/CancelJob',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.CancelJobRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.ml.v1.CancelJobRequest} request
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
 *   !proto.google.cloud.ml.v1.CancelJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_JobService_CancelJob = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.ml.v1.CancelJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.CancelJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.JobServiceClient.prototype.cancelJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.JobService/CancelJob',
      request,
      metadata || {},
      methodDescriptor_JobService_CancelJob,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.CancelJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.JobServicePromiseClient.prototype.cancelJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.JobService/CancelJob',
      request,
      metadata || {},
      methodDescriptor_JobService_CancelJob);
};


module.exports = proto.google.cloud.ml.v1;

