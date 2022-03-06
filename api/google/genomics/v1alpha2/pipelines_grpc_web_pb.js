/**
 * @fileoverview gRPC-Web generated client stub for google.genomics.v1alpha2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_code_pb = require('../../../google/rpc/code_pb.js')
const proto = {};
proto.google = {};
proto.google.genomics = {};
proto.google.genomics.v1alpha2 = require('./pipelines_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2Client =
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
proto.google.genomics.v1alpha2.PipelinesV1Alpha2PromiseClient =
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
 *   !proto.google.genomics.v1alpha2.CreatePipelineRequest,
 *   !proto.google.genomics.v1alpha2.Pipeline>}
 */
const methodDescriptor_PipelinesV1Alpha2_CreatePipeline = new grpc.web.MethodDescriptor(
  '/google.genomics.v1alpha2.PipelinesV1Alpha2/CreatePipeline',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1alpha2.CreatePipelineRequest,
  proto.google.genomics.v1alpha2.Pipeline,
  /**
   * @param {!proto.google.genomics.v1alpha2.CreatePipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1alpha2.Pipeline.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1alpha2.CreatePipelineRequest,
 *   !proto.google.genomics.v1alpha2.Pipeline>}
 */
const methodInfo_PipelinesV1Alpha2_CreatePipeline = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1alpha2.Pipeline,
  /**
   * @param {!proto.google.genomics.v1alpha2.CreatePipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1alpha2.Pipeline.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1alpha2.CreatePipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1alpha2.Pipeline)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1alpha2.Pipeline>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2Client.prototype.createPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/CreatePipeline',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_CreatePipeline,
      callback);
};


/**
 * @param {!proto.google.genomics.v1alpha2.CreatePipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1alpha2.Pipeline>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2PromiseClient.prototype.createPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/CreatePipeline',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_CreatePipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1alpha2.RunPipelineRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_PipelinesV1Alpha2_RunPipeline = new grpc.web.MethodDescriptor(
  '/google.genomics.v1alpha2.PipelinesV1Alpha2/RunPipeline',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1alpha2.RunPipelineRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.genomics.v1alpha2.RunPipelineRequest} request
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
 *   !proto.google.genomics.v1alpha2.RunPipelineRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_PipelinesV1Alpha2_RunPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.genomics.v1alpha2.RunPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1alpha2.RunPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2Client.prototype.runPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/RunPipeline',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_RunPipeline,
      callback);
};


/**
 * @param {!proto.google.genomics.v1alpha2.RunPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2PromiseClient.prototype.runPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/RunPipeline',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_RunPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1alpha2.GetPipelineRequest,
 *   !proto.google.genomics.v1alpha2.Pipeline>}
 */
const methodDescriptor_PipelinesV1Alpha2_GetPipeline = new grpc.web.MethodDescriptor(
  '/google.genomics.v1alpha2.PipelinesV1Alpha2/GetPipeline',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1alpha2.GetPipelineRequest,
  proto.google.genomics.v1alpha2.Pipeline,
  /**
   * @param {!proto.google.genomics.v1alpha2.GetPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1alpha2.Pipeline.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1alpha2.GetPipelineRequest,
 *   !proto.google.genomics.v1alpha2.Pipeline>}
 */
const methodInfo_PipelinesV1Alpha2_GetPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1alpha2.Pipeline,
  /**
   * @param {!proto.google.genomics.v1alpha2.GetPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1alpha2.Pipeline.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1alpha2.GetPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1alpha2.Pipeline)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1alpha2.Pipeline>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2Client.prototype.getPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/GetPipeline',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_GetPipeline,
      callback);
};


/**
 * @param {!proto.google.genomics.v1alpha2.GetPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1alpha2.Pipeline>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2PromiseClient.prototype.getPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/GetPipeline',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_GetPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1alpha2.ListPipelinesRequest,
 *   !proto.google.genomics.v1alpha2.ListPipelinesResponse>}
 */
const methodDescriptor_PipelinesV1Alpha2_ListPipelines = new grpc.web.MethodDescriptor(
  '/google.genomics.v1alpha2.PipelinesV1Alpha2/ListPipelines',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1alpha2.ListPipelinesRequest,
  proto.google.genomics.v1alpha2.ListPipelinesResponse,
  /**
   * @param {!proto.google.genomics.v1alpha2.ListPipelinesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1alpha2.ListPipelinesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1alpha2.ListPipelinesRequest,
 *   !proto.google.genomics.v1alpha2.ListPipelinesResponse>}
 */
const methodInfo_PipelinesV1Alpha2_ListPipelines = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1alpha2.ListPipelinesResponse,
  /**
   * @param {!proto.google.genomics.v1alpha2.ListPipelinesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1alpha2.ListPipelinesResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1alpha2.ListPipelinesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1alpha2.ListPipelinesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1alpha2.ListPipelinesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2Client.prototype.listPipelines =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/ListPipelines',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_ListPipelines,
      callback);
};


/**
 * @param {!proto.google.genomics.v1alpha2.ListPipelinesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1alpha2.ListPipelinesResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2PromiseClient.prototype.listPipelines =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/ListPipelines',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_ListPipelines);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1alpha2.DeletePipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PipelinesV1Alpha2_DeletePipeline = new grpc.web.MethodDescriptor(
  '/google.genomics.v1alpha2.PipelinesV1Alpha2/DeletePipeline',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1alpha2.DeletePipelineRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1alpha2.DeletePipelineRequest} request
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
 *   !proto.google.genomics.v1alpha2.DeletePipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PipelinesV1Alpha2_DeletePipeline = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1alpha2.DeletePipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1alpha2.DeletePipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2Client.prototype.deletePipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/DeletePipeline',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_DeletePipeline,
      callback);
};


/**
 * @param {!proto.google.genomics.v1alpha2.DeletePipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2PromiseClient.prototype.deletePipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/DeletePipeline',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_DeletePipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1alpha2.GetControllerConfigRequest,
 *   !proto.google.genomics.v1alpha2.ControllerConfig>}
 */
const methodDescriptor_PipelinesV1Alpha2_GetControllerConfig = new grpc.web.MethodDescriptor(
  '/google.genomics.v1alpha2.PipelinesV1Alpha2/GetControllerConfig',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1alpha2.GetControllerConfigRequest,
  proto.google.genomics.v1alpha2.ControllerConfig,
  /**
   * @param {!proto.google.genomics.v1alpha2.GetControllerConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1alpha2.ControllerConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1alpha2.GetControllerConfigRequest,
 *   !proto.google.genomics.v1alpha2.ControllerConfig>}
 */
const methodInfo_PipelinesV1Alpha2_GetControllerConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1alpha2.ControllerConfig,
  /**
   * @param {!proto.google.genomics.v1alpha2.GetControllerConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1alpha2.ControllerConfig.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1alpha2.GetControllerConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1alpha2.ControllerConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1alpha2.ControllerConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2Client.prototype.getControllerConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/GetControllerConfig',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_GetControllerConfig,
      callback);
};


/**
 * @param {!proto.google.genomics.v1alpha2.GetControllerConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1alpha2.ControllerConfig>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2PromiseClient.prototype.getControllerConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/GetControllerConfig',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_GetControllerConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1alpha2.SetOperationStatusRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PipelinesV1Alpha2_SetOperationStatus = new grpc.web.MethodDescriptor(
  '/google.genomics.v1alpha2.PipelinesV1Alpha2/SetOperationStatus',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1alpha2.SetOperationStatusRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1alpha2.SetOperationStatusRequest} request
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
 *   !proto.google.genomics.v1alpha2.SetOperationStatusRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PipelinesV1Alpha2_SetOperationStatus = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1alpha2.SetOperationStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1alpha2.SetOperationStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2Client.prototype.setOperationStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/SetOperationStatus',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_SetOperationStatus,
      callback);
};


/**
 * @param {!proto.google.genomics.v1alpha2.SetOperationStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1alpha2.PipelinesV1Alpha2PromiseClient.prototype.setOperationStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1alpha2.PipelinesV1Alpha2/SetOperationStatus',
      request,
      metadata || {},
      methodDescriptor_PipelinesV1Alpha2_SetOperationStatus);
};


module.exports = proto.google.genomics.v1alpha2;

