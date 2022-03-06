/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dataproc.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dataproc = {};
proto.google.cloud.dataproc.v1 = require('./jobs_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dataproc.v1.JobControllerClient =
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
proto.google.cloud.dataproc.v1.JobControllerPromiseClient =
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
 *   !proto.google.cloud.dataproc.v1.SubmitJobRequest,
 *   !proto.google.cloud.dataproc.v1.Job>}
 */
const methodDescriptor_JobController_SubmitJob = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1.JobController/SubmitJob',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1.SubmitJobRequest,
  proto.google.cloud.dataproc.v1.Job,
  /**
   * @param {!proto.google.cloud.dataproc.v1.SubmitJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1.Job.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1.SubmitJobRequest,
 *   !proto.google.cloud.dataproc.v1.Job>}
 */
const methodInfo_JobController_SubmitJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1.Job,
  /**
   * @param {!proto.google.cloud.dataproc.v1.SubmitJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1.Job.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1.SubmitJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1.Job)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1.Job>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1.JobControllerClient.prototype.submitJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/SubmitJob',
      request,
      metadata || {},
      methodDescriptor_JobController_SubmitJob,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1.SubmitJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1.Job>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1.JobControllerPromiseClient.prototype.submitJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/SubmitJob',
      request,
      metadata || {},
      methodDescriptor_JobController_SubmitJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1.GetJobRequest,
 *   !proto.google.cloud.dataproc.v1.Job>}
 */
const methodDescriptor_JobController_GetJob = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1.JobController/GetJob',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1.GetJobRequest,
  proto.google.cloud.dataproc.v1.Job,
  /**
   * @param {!proto.google.cloud.dataproc.v1.GetJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1.Job.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1.GetJobRequest,
 *   !proto.google.cloud.dataproc.v1.Job>}
 */
const methodInfo_JobController_GetJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1.Job,
  /**
   * @param {!proto.google.cloud.dataproc.v1.GetJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1.Job.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1.GetJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1.Job)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1.Job>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1.JobControllerClient.prototype.getJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/GetJob',
      request,
      metadata || {},
      methodDescriptor_JobController_GetJob,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1.GetJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1.Job>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1.JobControllerPromiseClient.prototype.getJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/GetJob',
      request,
      metadata || {},
      methodDescriptor_JobController_GetJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1.ListJobsRequest,
 *   !proto.google.cloud.dataproc.v1.ListJobsResponse>}
 */
const methodDescriptor_JobController_ListJobs = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1.JobController/ListJobs',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1.ListJobsRequest,
  proto.google.cloud.dataproc.v1.ListJobsResponse,
  /**
   * @param {!proto.google.cloud.dataproc.v1.ListJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1.ListJobsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1.ListJobsRequest,
 *   !proto.google.cloud.dataproc.v1.ListJobsResponse>}
 */
const methodInfo_JobController_ListJobs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1.ListJobsResponse,
  /**
   * @param {!proto.google.cloud.dataproc.v1.ListJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1.ListJobsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1.ListJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1.ListJobsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1.ListJobsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1.JobControllerClient.prototype.listJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/ListJobs',
      request,
      metadata || {},
      methodDescriptor_JobController_ListJobs,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1.ListJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1.ListJobsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1.JobControllerPromiseClient.prototype.listJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/ListJobs',
      request,
      metadata || {},
      methodDescriptor_JobController_ListJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1.UpdateJobRequest,
 *   !proto.google.cloud.dataproc.v1.Job>}
 */
const methodDescriptor_JobController_UpdateJob = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1.JobController/UpdateJob',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1.UpdateJobRequest,
  proto.google.cloud.dataproc.v1.Job,
  /**
   * @param {!proto.google.cloud.dataproc.v1.UpdateJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1.Job.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1.UpdateJobRequest,
 *   !proto.google.cloud.dataproc.v1.Job>}
 */
const methodInfo_JobController_UpdateJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1.Job,
  /**
   * @param {!proto.google.cloud.dataproc.v1.UpdateJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1.Job.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1.UpdateJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1.Job)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1.Job>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1.JobControllerClient.prototype.updateJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/UpdateJob',
      request,
      metadata || {},
      methodDescriptor_JobController_UpdateJob,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1.UpdateJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1.Job>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1.JobControllerPromiseClient.prototype.updateJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/UpdateJob',
      request,
      metadata || {},
      methodDescriptor_JobController_UpdateJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1.CancelJobRequest,
 *   !proto.google.cloud.dataproc.v1.Job>}
 */
const methodDescriptor_JobController_CancelJob = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1.JobController/CancelJob',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1.CancelJobRequest,
  proto.google.cloud.dataproc.v1.Job,
  /**
   * @param {!proto.google.cloud.dataproc.v1.CancelJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1.Job.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1.CancelJobRequest,
 *   !proto.google.cloud.dataproc.v1.Job>}
 */
const methodInfo_JobController_CancelJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1.Job,
  /**
   * @param {!proto.google.cloud.dataproc.v1.CancelJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1.Job.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1.CancelJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1.Job)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1.Job>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1.JobControllerClient.prototype.cancelJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/CancelJob',
      request,
      metadata || {},
      methodDescriptor_JobController_CancelJob,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1.CancelJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1.Job>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1.JobControllerPromiseClient.prototype.cancelJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/CancelJob',
      request,
      metadata || {},
      methodDescriptor_JobController_CancelJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1.DeleteJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_JobController_DeleteJob = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1.JobController/DeleteJob',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1.DeleteJobRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dataproc.v1.DeleteJobRequest} request
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
 *   !proto.google.cloud.dataproc.v1.DeleteJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_JobController_DeleteJob = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dataproc.v1.DeleteJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1.DeleteJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1.JobControllerClient.prototype.deleteJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/DeleteJob',
      request,
      metadata || {},
      methodDescriptor_JobController_DeleteJob,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1.DeleteJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1.JobControllerPromiseClient.prototype.deleteJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1.JobController/DeleteJob',
      request,
      metadata || {},
      methodDescriptor_JobController_DeleteJob);
};


module.exports = proto.google.cloud.dataproc.v1;

