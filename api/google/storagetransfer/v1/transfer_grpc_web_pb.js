/**
 * @fileoverview gRPC-Web generated client stub for google.storagetransfer.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_storagetransfer_v1_transfer_types_pb = require('../../../google/storagetransfer/v1/transfer_types_pb.js')
const proto = {};
proto.google = {};
proto.google.storagetransfer = {};
proto.google.storagetransfer.v1 = require('./transfer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.storagetransfer.v1.StorageTransferServiceClient =
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
proto.google.storagetransfer.v1.StorageTransferServicePromiseClient =
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
 *   !proto.google.storagetransfer.v1.GetGoogleServiceAccountRequest,
 *   !proto.google.storagetransfer.v1.GoogleServiceAccount>}
 */
const methodDescriptor_StorageTransferService_GetGoogleServiceAccount = new grpc.web.MethodDescriptor(
  '/google.storagetransfer.v1.StorageTransferService/GetGoogleServiceAccount',
  grpc.web.MethodType.UNARY,
  proto.google.storagetransfer.v1.GetGoogleServiceAccountRequest,
  google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount,
  /**
   * @param {!proto.google.storagetransfer.v1.GetGoogleServiceAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.storagetransfer.v1.GetGoogleServiceAccountRequest,
 *   !proto.google.storagetransfer.v1.GoogleServiceAccount>}
 */
const methodInfo_StorageTransferService_GetGoogleServiceAccount = new grpc.web.AbstractClientBase.MethodInfo(
  google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount,
  /**
   * @param {!proto.google.storagetransfer.v1.GetGoogleServiceAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount.deserializeBinary
);


/**
 * @param {!proto.google.storagetransfer.v1.GetGoogleServiceAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.storagetransfer.v1.GoogleServiceAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.storagetransfer.v1.GoogleServiceAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.storagetransfer.v1.StorageTransferServiceClient.prototype.getGoogleServiceAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/GetGoogleServiceAccount',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_GetGoogleServiceAccount,
      callback);
};


/**
 * @param {!proto.google.storagetransfer.v1.GetGoogleServiceAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.storagetransfer.v1.GoogleServiceAccount>}
 *     Promise that resolves to the response
 */
proto.google.storagetransfer.v1.StorageTransferServicePromiseClient.prototype.getGoogleServiceAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/GetGoogleServiceAccount',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_GetGoogleServiceAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.storagetransfer.v1.CreateTransferJobRequest,
 *   !proto.google.storagetransfer.v1.TransferJob>}
 */
const methodDescriptor_StorageTransferService_CreateTransferJob = new grpc.web.MethodDescriptor(
  '/google.storagetransfer.v1.StorageTransferService/CreateTransferJob',
  grpc.web.MethodType.UNARY,
  proto.google.storagetransfer.v1.CreateTransferJobRequest,
  google_storagetransfer_v1_transfer_types_pb.TransferJob,
  /**
   * @param {!proto.google.storagetransfer.v1.CreateTransferJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_storagetransfer_v1_transfer_types_pb.TransferJob.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.storagetransfer.v1.CreateTransferJobRequest,
 *   !proto.google.storagetransfer.v1.TransferJob>}
 */
const methodInfo_StorageTransferService_CreateTransferJob = new grpc.web.AbstractClientBase.MethodInfo(
  google_storagetransfer_v1_transfer_types_pb.TransferJob,
  /**
   * @param {!proto.google.storagetransfer.v1.CreateTransferJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_storagetransfer_v1_transfer_types_pb.TransferJob.deserializeBinary
);


/**
 * @param {!proto.google.storagetransfer.v1.CreateTransferJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.storagetransfer.v1.TransferJob)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.storagetransfer.v1.TransferJob>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.storagetransfer.v1.StorageTransferServiceClient.prototype.createTransferJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/CreateTransferJob',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_CreateTransferJob,
      callback);
};


/**
 * @param {!proto.google.storagetransfer.v1.CreateTransferJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.storagetransfer.v1.TransferJob>}
 *     Promise that resolves to the response
 */
proto.google.storagetransfer.v1.StorageTransferServicePromiseClient.prototype.createTransferJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/CreateTransferJob',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_CreateTransferJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.storagetransfer.v1.UpdateTransferJobRequest,
 *   !proto.google.storagetransfer.v1.TransferJob>}
 */
const methodDescriptor_StorageTransferService_UpdateTransferJob = new grpc.web.MethodDescriptor(
  '/google.storagetransfer.v1.StorageTransferService/UpdateTransferJob',
  grpc.web.MethodType.UNARY,
  proto.google.storagetransfer.v1.UpdateTransferJobRequest,
  google_storagetransfer_v1_transfer_types_pb.TransferJob,
  /**
   * @param {!proto.google.storagetransfer.v1.UpdateTransferJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_storagetransfer_v1_transfer_types_pb.TransferJob.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.storagetransfer.v1.UpdateTransferJobRequest,
 *   !proto.google.storagetransfer.v1.TransferJob>}
 */
const methodInfo_StorageTransferService_UpdateTransferJob = new grpc.web.AbstractClientBase.MethodInfo(
  google_storagetransfer_v1_transfer_types_pb.TransferJob,
  /**
   * @param {!proto.google.storagetransfer.v1.UpdateTransferJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_storagetransfer_v1_transfer_types_pb.TransferJob.deserializeBinary
);


/**
 * @param {!proto.google.storagetransfer.v1.UpdateTransferJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.storagetransfer.v1.TransferJob)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.storagetransfer.v1.TransferJob>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.storagetransfer.v1.StorageTransferServiceClient.prototype.updateTransferJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/UpdateTransferJob',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_UpdateTransferJob,
      callback);
};


/**
 * @param {!proto.google.storagetransfer.v1.UpdateTransferJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.storagetransfer.v1.TransferJob>}
 *     Promise that resolves to the response
 */
proto.google.storagetransfer.v1.StorageTransferServicePromiseClient.prototype.updateTransferJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/UpdateTransferJob',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_UpdateTransferJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.storagetransfer.v1.GetTransferJobRequest,
 *   !proto.google.storagetransfer.v1.TransferJob>}
 */
const methodDescriptor_StorageTransferService_GetTransferJob = new grpc.web.MethodDescriptor(
  '/google.storagetransfer.v1.StorageTransferService/GetTransferJob',
  grpc.web.MethodType.UNARY,
  proto.google.storagetransfer.v1.GetTransferJobRequest,
  google_storagetransfer_v1_transfer_types_pb.TransferJob,
  /**
   * @param {!proto.google.storagetransfer.v1.GetTransferJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_storagetransfer_v1_transfer_types_pb.TransferJob.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.storagetransfer.v1.GetTransferJobRequest,
 *   !proto.google.storagetransfer.v1.TransferJob>}
 */
const methodInfo_StorageTransferService_GetTransferJob = new grpc.web.AbstractClientBase.MethodInfo(
  google_storagetransfer_v1_transfer_types_pb.TransferJob,
  /**
   * @param {!proto.google.storagetransfer.v1.GetTransferJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_storagetransfer_v1_transfer_types_pb.TransferJob.deserializeBinary
);


/**
 * @param {!proto.google.storagetransfer.v1.GetTransferJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.storagetransfer.v1.TransferJob)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.storagetransfer.v1.TransferJob>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.storagetransfer.v1.StorageTransferServiceClient.prototype.getTransferJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/GetTransferJob',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_GetTransferJob,
      callback);
};


/**
 * @param {!proto.google.storagetransfer.v1.GetTransferJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.storagetransfer.v1.TransferJob>}
 *     Promise that resolves to the response
 */
proto.google.storagetransfer.v1.StorageTransferServicePromiseClient.prototype.getTransferJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/GetTransferJob',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_GetTransferJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.storagetransfer.v1.ListTransferJobsRequest,
 *   !proto.google.storagetransfer.v1.ListTransferJobsResponse>}
 */
const methodDescriptor_StorageTransferService_ListTransferJobs = new grpc.web.MethodDescriptor(
  '/google.storagetransfer.v1.StorageTransferService/ListTransferJobs',
  grpc.web.MethodType.UNARY,
  proto.google.storagetransfer.v1.ListTransferJobsRequest,
  proto.google.storagetransfer.v1.ListTransferJobsResponse,
  /**
   * @param {!proto.google.storagetransfer.v1.ListTransferJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.storagetransfer.v1.ListTransferJobsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.storagetransfer.v1.ListTransferJobsRequest,
 *   !proto.google.storagetransfer.v1.ListTransferJobsResponse>}
 */
const methodInfo_StorageTransferService_ListTransferJobs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.storagetransfer.v1.ListTransferJobsResponse,
  /**
   * @param {!proto.google.storagetransfer.v1.ListTransferJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.storagetransfer.v1.ListTransferJobsResponse.deserializeBinary
);


/**
 * @param {!proto.google.storagetransfer.v1.ListTransferJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.storagetransfer.v1.ListTransferJobsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.storagetransfer.v1.ListTransferJobsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.storagetransfer.v1.StorageTransferServiceClient.prototype.listTransferJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/ListTransferJobs',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_ListTransferJobs,
      callback);
};


/**
 * @param {!proto.google.storagetransfer.v1.ListTransferJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.storagetransfer.v1.ListTransferJobsResponse>}
 *     Promise that resolves to the response
 */
proto.google.storagetransfer.v1.StorageTransferServicePromiseClient.prototype.listTransferJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/ListTransferJobs',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_ListTransferJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.storagetransfer.v1.PauseTransferOperationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_StorageTransferService_PauseTransferOperation = new grpc.web.MethodDescriptor(
  '/google.storagetransfer.v1.StorageTransferService/PauseTransferOperation',
  grpc.web.MethodType.UNARY,
  proto.google.storagetransfer.v1.PauseTransferOperationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.storagetransfer.v1.PauseTransferOperationRequest} request
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
 *   !proto.google.storagetransfer.v1.PauseTransferOperationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_StorageTransferService_PauseTransferOperation = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.storagetransfer.v1.PauseTransferOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.storagetransfer.v1.PauseTransferOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.storagetransfer.v1.StorageTransferServiceClient.prototype.pauseTransferOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/PauseTransferOperation',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_PauseTransferOperation,
      callback);
};


/**
 * @param {!proto.google.storagetransfer.v1.PauseTransferOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.storagetransfer.v1.StorageTransferServicePromiseClient.prototype.pauseTransferOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/PauseTransferOperation',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_PauseTransferOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.storagetransfer.v1.ResumeTransferOperationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_StorageTransferService_ResumeTransferOperation = new grpc.web.MethodDescriptor(
  '/google.storagetransfer.v1.StorageTransferService/ResumeTransferOperation',
  grpc.web.MethodType.UNARY,
  proto.google.storagetransfer.v1.ResumeTransferOperationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.storagetransfer.v1.ResumeTransferOperationRequest} request
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
 *   !proto.google.storagetransfer.v1.ResumeTransferOperationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_StorageTransferService_ResumeTransferOperation = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.storagetransfer.v1.ResumeTransferOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.storagetransfer.v1.ResumeTransferOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.storagetransfer.v1.StorageTransferServiceClient.prototype.resumeTransferOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/ResumeTransferOperation',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_ResumeTransferOperation,
      callback);
};


/**
 * @param {!proto.google.storagetransfer.v1.ResumeTransferOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.storagetransfer.v1.StorageTransferServicePromiseClient.prototype.resumeTransferOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.storagetransfer.v1.StorageTransferService/ResumeTransferOperation',
      request,
      metadata || {},
      methodDescriptor_StorageTransferService_ResumeTransferOperation);
};


module.exports = proto.google.storagetransfer.v1;

