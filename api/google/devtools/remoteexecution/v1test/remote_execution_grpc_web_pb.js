/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.remoteexecution.v1test
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

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.remoteexecution = {};
proto.google.devtools.remoteexecution.v1test = require('./remote_execution_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.remoteexecution.v1test.ExecutionClient =
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
proto.google.devtools.remoteexecution.v1test.ExecutionPromiseClient =
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
 *   !proto.google.devtools.remoteexecution.v1test.ExecuteRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Execution_Execute = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteexecution.v1test.Execution/Execute',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteexecution.v1test.ExecuteRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.ExecuteRequest} request
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
 *   !proto.google.devtools.remoteexecution.v1test.ExecuteRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Execution_Execute = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.ExecuteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.ExecuteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteexecution.v1test.ExecutionClient.prototype.execute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.Execution/Execute',
      request,
      metadata || {},
      methodDescriptor_Execution_Execute,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.ExecuteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteexecution.v1test.ExecutionPromiseClient.prototype.execute =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.Execution/Execute',
      request,
      metadata || {},
      methodDescriptor_Execution_Execute);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.remoteexecution.v1test.ActionCacheClient =
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
proto.google.devtools.remoteexecution.v1test.ActionCachePromiseClient =
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
 *   !proto.google.devtools.remoteexecution.v1test.GetActionResultRequest,
 *   !proto.google.devtools.remoteexecution.v1test.ActionResult>}
 */
const methodDescriptor_ActionCache_GetActionResult = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteexecution.v1test.ActionCache/GetActionResult',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteexecution.v1test.GetActionResultRequest,
  proto.google.devtools.remoteexecution.v1test.ActionResult,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.GetActionResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteexecution.v1test.ActionResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.remoteexecution.v1test.GetActionResultRequest,
 *   !proto.google.devtools.remoteexecution.v1test.ActionResult>}
 */
const methodInfo_ActionCache_GetActionResult = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.remoteexecution.v1test.ActionResult,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.GetActionResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteexecution.v1test.ActionResult.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.GetActionResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.remoteexecution.v1test.ActionResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.remoteexecution.v1test.ActionResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteexecution.v1test.ActionCacheClient.prototype.getActionResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.ActionCache/GetActionResult',
      request,
      metadata || {},
      methodDescriptor_ActionCache_GetActionResult,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.GetActionResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.remoteexecution.v1test.ActionResult>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteexecution.v1test.ActionCachePromiseClient.prototype.getActionResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.ActionCache/GetActionResult',
      request,
      metadata || {},
      methodDescriptor_ActionCache_GetActionResult);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.remoteexecution.v1test.UpdateActionResultRequest,
 *   !proto.google.devtools.remoteexecution.v1test.ActionResult>}
 */
const methodDescriptor_ActionCache_UpdateActionResult = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteexecution.v1test.ActionCache/UpdateActionResult',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteexecution.v1test.UpdateActionResultRequest,
  proto.google.devtools.remoteexecution.v1test.ActionResult,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.UpdateActionResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteexecution.v1test.ActionResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.remoteexecution.v1test.UpdateActionResultRequest,
 *   !proto.google.devtools.remoteexecution.v1test.ActionResult>}
 */
const methodInfo_ActionCache_UpdateActionResult = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.remoteexecution.v1test.ActionResult,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.UpdateActionResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteexecution.v1test.ActionResult.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.UpdateActionResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.remoteexecution.v1test.ActionResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.remoteexecution.v1test.ActionResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteexecution.v1test.ActionCacheClient.prototype.updateActionResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.ActionCache/UpdateActionResult',
      request,
      metadata || {},
      methodDescriptor_ActionCache_UpdateActionResult,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.UpdateActionResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.remoteexecution.v1test.ActionResult>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteexecution.v1test.ActionCachePromiseClient.prototype.updateActionResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.ActionCache/UpdateActionResult',
      request,
      metadata || {},
      methodDescriptor_ActionCache_UpdateActionResult);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.remoteexecution.v1test.ContentAddressableStorageClient =
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
proto.google.devtools.remoteexecution.v1test.ContentAddressableStoragePromiseClient =
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
 *   !proto.google.devtools.remoteexecution.v1test.FindMissingBlobsRequest,
 *   !proto.google.devtools.remoteexecution.v1test.FindMissingBlobsResponse>}
 */
const methodDescriptor_ContentAddressableStorage_FindMissingBlobs = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteexecution.v1test.ContentAddressableStorage/FindMissingBlobs',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteexecution.v1test.FindMissingBlobsRequest,
  proto.google.devtools.remoteexecution.v1test.FindMissingBlobsResponse,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.FindMissingBlobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteexecution.v1test.FindMissingBlobsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.remoteexecution.v1test.FindMissingBlobsRequest,
 *   !proto.google.devtools.remoteexecution.v1test.FindMissingBlobsResponse>}
 */
const methodInfo_ContentAddressableStorage_FindMissingBlobs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.remoteexecution.v1test.FindMissingBlobsResponse,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.FindMissingBlobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteexecution.v1test.FindMissingBlobsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.FindMissingBlobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.remoteexecution.v1test.FindMissingBlobsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.remoteexecution.v1test.FindMissingBlobsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteexecution.v1test.ContentAddressableStorageClient.prototype.findMissingBlobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.ContentAddressableStorage/FindMissingBlobs',
      request,
      metadata || {},
      methodDescriptor_ContentAddressableStorage_FindMissingBlobs,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.FindMissingBlobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.remoteexecution.v1test.FindMissingBlobsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteexecution.v1test.ContentAddressableStoragePromiseClient.prototype.findMissingBlobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.ContentAddressableStorage/FindMissingBlobs',
      request,
      metadata || {},
      methodDescriptor_ContentAddressableStorage_FindMissingBlobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsRequest,
 *   !proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsResponse>}
 */
const methodDescriptor_ContentAddressableStorage_BatchUpdateBlobs = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteexecution.v1test.ContentAddressableStorage/BatchUpdateBlobs',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsRequest,
  proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsResponse,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsRequest,
 *   !proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsResponse>}
 */
const methodInfo_ContentAddressableStorage_BatchUpdateBlobs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsResponse,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteexecution.v1test.ContentAddressableStorageClient.prototype.batchUpdateBlobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.ContentAddressableStorage/BatchUpdateBlobs',
      request,
      metadata || {},
      methodDescriptor_ContentAddressableStorage_BatchUpdateBlobs,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.remoteexecution.v1test.BatchUpdateBlobsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteexecution.v1test.ContentAddressableStoragePromiseClient.prototype.batchUpdateBlobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.ContentAddressableStorage/BatchUpdateBlobs',
      request,
      metadata || {},
      methodDescriptor_ContentAddressableStorage_BatchUpdateBlobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.remoteexecution.v1test.GetTreeRequest,
 *   !proto.google.devtools.remoteexecution.v1test.GetTreeResponse>}
 */
const methodDescriptor_ContentAddressableStorage_GetTree = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteexecution.v1test.ContentAddressableStorage/GetTree',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteexecution.v1test.GetTreeRequest,
  proto.google.devtools.remoteexecution.v1test.GetTreeResponse,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.GetTreeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteexecution.v1test.GetTreeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.remoteexecution.v1test.GetTreeRequest,
 *   !proto.google.devtools.remoteexecution.v1test.GetTreeResponse>}
 */
const methodInfo_ContentAddressableStorage_GetTree = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.remoteexecution.v1test.GetTreeResponse,
  /**
   * @param {!proto.google.devtools.remoteexecution.v1test.GetTreeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteexecution.v1test.GetTreeResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.GetTreeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.remoteexecution.v1test.GetTreeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.remoteexecution.v1test.GetTreeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteexecution.v1test.ContentAddressableStorageClient.prototype.getTree =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.ContentAddressableStorage/GetTree',
      request,
      metadata || {},
      methodDescriptor_ContentAddressableStorage_GetTree,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteexecution.v1test.GetTreeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.remoteexecution.v1test.GetTreeResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteexecution.v1test.ContentAddressableStoragePromiseClient.prototype.getTree =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteexecution.v1test.ContentAddressableStorage/GetTree',
      request,
      metadata || {},
      methodDescriptor_ContentAddressableStorage_GetTree);
};


module.exports = proto.google.devtools.remoteexecution.v1test;

