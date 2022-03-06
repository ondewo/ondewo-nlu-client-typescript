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

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.ml = {};
proto.google.cloud.ml.v1 = require('./model_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.ml.v1.ModelServiceClient =
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
proto.google.cloud.ml.v1.ModelServicePromiseClient =
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
 *   !proto.google.cloud.ml.v1.CreateModelRequest,
 *   !proto.google.cloud.ml.v1.Model>}
 */
const methodDescriptor_ModelService_CreateModel = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.ModelService/CreateModel',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.CreateModelRequest,
  proto.google.cloud.ml.v1.Model,
  /**
   * @param {!proto.google.cloud.ml.v1.CreateModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Model.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.CreateModelRequest,
 *   !proto.google.cloud.ml.v1.Model>}
 */
const methodInfo_ModelService_CreateModel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.ml.v1.Model,
  /**
   * @param {!proto.google.cloud.ml.v1.CreateModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Model.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.CreateModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.ml.v1.Model)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.ml.v1.Model>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.ModelServiceClient.prototype.createModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/CreateModel',
      request,
      metadata || {},
      methodDescriptor_ModelService_CreateModel,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.CreateModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.ml.v1.Model>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.ModelServicePromiseClient.prototype.createModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/CreateModel',
      request,
      metadata || {},
      methodDescriptor_ModelService_CreateModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.ListModelsRequest,
 *   !proto.google.cloud.ml.v1.ListModelsResponse>}
 */
const methodDescriptor_ModelService_ListModels = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.ModelService/ListModels',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.ListModelsRequest,
  proto.google.cloud.ml.v1.ListModelsResponse,
  /**
   * @param {!proto.google.cloud.ml.v1.ListModelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.ListModelsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.ListModelsRequest,
 *   !proto.google.cloud.ml.v1.ListModelsResponse>}
 */
const methodInfo_ModelService_ListModels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.ml.v1.ListModelsResponse,
  /**
   * @param {!proto.google.cloud.ml.v1.ListModelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.ListModelsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.ListModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.ml.v1.ListModelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.ml.v1.ListModelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.ModelServiceClient.prototype.listModels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/ListModels',
      request,
      metadata || {},
      methodDescriptor_ModelService_ListModels,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.ListModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.ml.v1.ListModelsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.ModelServicePromiseClient.prototype.listModels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/ListModels',
      request,
      metadata || {},
      methodDescriptor_ModelService_ListModels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.GetModelRequest,
 *   !proto.google.cloud.ml.v1.Model>}
 */
const methodDescriptor_ModelService_GetModel = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.ModelService/GetModel',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.GetModelRequest,
  proto.google.cloud.ml.v1.Model,
  /**
   * @param {!proto.google.cloud.ml.v1.GetModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Model.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.GetModelRequest,
 *   !proto.google.cloud.ml.v1.Model>}
 */
const methodInfo_ModelService_GetModel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.ml.v1.Model,
  /**
   * @param {!proto.google.cloud.ml.v1.GetModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Model.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.GetModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.ml.v1.Model)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.ml.v1.Model>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.ModelServiceClient.prototype.getModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/GetModel',
      request,
      metadata || {},
      methodDescriptor_ModelService_GetModel,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.GetModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.ml.v1.Model>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.ModelServicePromiseClient.prototype.getModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/GetModel',
      request,
      metadata || {},
      methodDescriptor_ModelService_GetModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.DeleteModelRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ModelService_DeleteModel = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.ModelService/DeleteModel',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.DeleteModelRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.ml.v1.DeleteModelRequest} request
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
 *   !proto.google.cloud.ml.v1.DeleteModelRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ModelService_DeleteModel = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.ml.v1.DeleteModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.DeleteModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.ModelServiceClient.prototype.deleteModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/DeleteModel',
      request,
      metadata || {},
      methodDescriptor_ModelService_DeleteModel,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.DeleteModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.ModelServicePromiseClient.prototype.deleteModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/DeleteModel',
      request,
      metadata || {},
      methodDescriptor_ModelService_DeleteModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.CreateVersionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ModelService_CreateVersion = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.ModelService/CreateVersion',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.CreateVersionRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.ml.v1.CreateVersionRequest} request
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
 *   !proto.google.cloud.ml.v1.CreateVersionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ModelService_CreateVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.ml.v1.CreateVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.CreateVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.ModelServiceClient.prototype.createVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/CreateVersion',
      request,
      metadata || {},
      methodDescriptor_ModelService_CreateVersion,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.CreateVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.ModelServicePromiseClient.prototype.createVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/CreateVersion',
      request,
      metadata || {},
      methodDescriptor_ModelService_CreateVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.ListVersionsRequest,
 *   !proto.google.cloud.ml.v1.ListVersionsResponse>}
 */
const methodDescriptor_ModelService_ListVersions = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.ModelService/ListVersions',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.ListVersionsRequest,
  proto.google.cloud.ml.v1.ListVersionsResponse,
  /**
   * @param {!proto.google.cloud.ml.v1.ListVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.ListVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.ListVersionsRequest,
 *   !proto.google.cloud.ml.v1.ListVersionsResponse>}
 */
const methodInfo_ModelService_ListVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.ml.v1.ListVersionsResponse,
  /**
   * @param {!proto.google.cloud.ml.v1.ListVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.ListVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.ListVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.ml.v1.ListVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.ml.v1.ListVersionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.ModelServiceClient.prototype.listVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/ListVersions',
      request,
      metadata || {},
      methodDescriptor_ModelService_ListVersions,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.ListVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.ml.v1.ListVersionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.ModelServicePromiseClient.prototype.listVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/ListVersions',
      request,
      metadata || {},
      methodDescriptor_ModelService_ListVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.GetVersionRequest,
 *   !proto.google.cloud.ml.v1.Version>}
 */
const methodDescriptor_ModelService_GetVersion = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.ModelService/GetVersion',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.GetVersionRequest,
  proto.google.cloud.ml.v1.Version,
  /**
   * @param {!proto.google.cloud.ml.v1.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Version.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.GetVersionRequest,
 *   !proto.google.cloud.ml.v1.Version>}
 */
const methodInfo_ModelService_GetVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.ml.v1.Version,
  /**
   * @param {!proto.google.cloud.ml.v1.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Version.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.ml.v1.Version)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.ml.v1.Version>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.ModelServiceClient.prototype.getVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/GetVersion',
      request,
      metadata || {},
      methodDescriptor_ModelService_GetVersion,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.ml.v1.Version>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.ModelServicePromiseClient.prototype.getVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/GetVersion',
      request,
      metadata || {},
      methodDescriptor_ModelService_GetVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.DeleteVersionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ModelService_DeleteVersion = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.ModelService/DeleteVersion',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.DeleteVersionRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.ml.v1.DeleteVersionRequest} request
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
 *   !proto.google.cloud.ml.v1.DeleteVersionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ModelService_DeleteVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.ml.v1.DeleteVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.DeleteVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.ModelServiceClient.prototype.deleteVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/DeleteVersion',
      request,
      metadata || {},
      methodDescriptor_ModelService_DeleteVersion,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.DeleteVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.ModelServicePromiseClient.prototype.deleteVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/DeleteVersion',
      request,
      metadata || {},
      methodDescriptor_ModelService_DeleteVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.ml.v1.SetDefaultVersionRequest,
 *   !proto.google.cloud.ml.v1.Version>}
 */
const methodDescriptor_ModelService_SetDefaultVersion = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.ModelService/SetDefaultVersion',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.SetDefaultVersionRequest,
  proto.google.cloud.ml.v1.Version,
  /**
   * @param {!proto.google.cloud.ml.v1.SetDefaultVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Version.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.SetDefaultVersionRequest,
 *   !proto.google.cloud.ml.v1.Version>}
 */
const methodInfo_ModelService_SetDefaultVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.ml.v1.Version,
  /**
   * @param {!proto.google.cloud.ml.v1.SetDefaultVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.ml.v1.Version.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.SetDefaultVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.ml.v1.Version)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.ml.v1.Version>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.ModelServiceClient.prototype.setDefaultVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/SetDefaultVersion',
      request,
      metadata || {},
      methodDescriptor_ModelService_SetDefaultVersion,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.SetDefaultVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.ml.v1.Version>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.ModelServicePromiseClient.prototype.setDefaultVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.ModelService/SetDefaultVersion',
      request,
      metadata || {},
      methodDescriptor_ModelService_SetDefaultVersion);
};


module.exports = proto.google.cloud.ml.v1;

