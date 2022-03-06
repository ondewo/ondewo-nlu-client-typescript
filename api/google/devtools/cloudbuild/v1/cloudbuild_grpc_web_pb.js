/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.cloudbuild.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_api_httpbody_pb = require('../../../../google/api/httpbody_pb.js')

var google_cloud_audit_audit_log_pb = require('../../../../google/cloud/audit/audit_log_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.cloudbuild = {};
proto.google.devtools.cloudbuild.v1 = require('./cloudbuild_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient =
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
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient =
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
 *   !proto.google.devtools.cloudbuild.v1.CreateBuildRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_CloudBuild_CreateBuild = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/CreateBuild',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.CreateBuildRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest} request
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
 *   !proto.google.devtools.cloudbuild.v1.CreateBuildRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_CloudBuild_CreateBuild = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.createBuild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/CreateBuild',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_CreateBuild,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.createBuild =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/CreateBuild',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_CreateBuild);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudbuild.v1.GetBuildRequest,
 *   !proto.google.devtools.cloudbuild.v1.Build>}
 */
const methodDescriptor_CloudBuild_GetBuild = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/GetBuild',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.GetBuildRequest,
  proto.google.devtools.cloudbuild.v1.Build,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.GetBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.Build.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudbuild.v1.GetBuildRequest,
 *   !proto.google.devtools.cloudbuild.v1.Build>}
 */
const methodInfo_CloudBuild_GetBuild = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudbuild.v1.Build,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.GetBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.Build.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.GetBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudbuild.v1.Build)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudbuild.v1.Build>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.getBuild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/GetBuild',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_GetBuild,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.GetBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudbuild.v1.Build>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.getBuild =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/GetBuild',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_GetBuild);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudbuild.v1.ListBuildsRequest,
 *   !proto.google.devtools.cloudbuild.v1.ListBuildsResponse>}
 */
const methodDescriptor_CloudBuild_ListBuilds = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/ListBuilds',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.ListBuildsRequest,
  proto.google.devtools.cloudbuild.v1.ListBuildsResponse,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.ListBuildsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudbuild.v1.ListBuildsRequest,
 *   !proto.google.devtools.cloudbuild.v1.ListBuildsResponse>}
 */
const methodInfo_CloudBuild_ListBuilds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudbuild.v1.ListBuildsResponse,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.ListBuildsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudbuild.v1.ListBuildsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudbuild.v1.ListBuildsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.listBuilds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/ListBuilds',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_ListBuilds,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudbuild.v1.ListBuildsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.listBuilds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/ListBuilds',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_ListBuilds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudbuild.v1.CancelBuildRequest,
 *   !proto.google.devtools.cloudbuild.v1.Build>}
 */
const methodDescriptor_CloudBuild_CancelBuild = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/CancelBuild',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.CancelBuildRequest,
  proto.google.devtools.cloudbuild.v1.Build,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.Build.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudbuild.v1.CancelBuildRequest,
 *   !proto.google.devtools.cloudbuild.v1.Build>}
 */
const methodInfo_CloudBuild_CancelBuild = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudbuild.v1.Build,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.Build.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudbuild.v1.Build)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudbuild.v1.Build>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.cancelBuild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/CancelBuild',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_CancelBuild,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudbuild.v1.Build>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.cancelBuild =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/CancelBuild',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_CancelBuild);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudbuild.v1.RetryBuildRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_CloudBuild_RetryBuild = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/RetryBuild',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.RetryBuildRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest} request
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
 *   !proto.google.devtools.cloudbuild.v1.RetryBuildRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_CloudBuild_RetryBuild = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.retryBuild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/RetryBuild',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_RetryBuild,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.retryBuild =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/RetryBuild',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_RetryBuild);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest,
 *   !proto.google.devtools.cloudbuild.v1.BuildTrigger>}
 */
const methodDescriptor_CloudBuild_CreateBuildTrigger = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/CreateBuildTrigger',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest,
  proto.google.devtools.cloudbuild.v1.BuildTrigger,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest,
 *   !proto.google.devtools.cloudbuild.v1.BuildTrigger>}
 */
const methodInfo_CloudBuild_CreateBuildTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudbuild.v1.BuildTrigger,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudbuild.v1.BuildTrigger)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudbuild.v1.BuildTrigger>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.createBuildTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/CreateBuildTrigger',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_CreateBuildTrigger,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudbuild.v1.BuildTrigger>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.createBuildTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/CreateBuildTrigger',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_CreateBuildTrigger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest,
 *   !proto.google.devtools.cloudbuild.v1.BuildTrigger>}
 */
const methodDescriptor_CloudBuild_GetBuildTrigger = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/GetBuildTrigger',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest,
  proto.google.devtools.cloudbuild.v1.BuildTrigger,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest,
 *   !proto.google.devtools.cloudbuild.v1.BuildTrigger>}
 */
const methodInfo_CloudBuild_GetBuildTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudbuild.v1.BuildTrigger,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudbuild.v1.BuildTrigger)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudbuild.v1.BuildTrigger>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.getBuildTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/GetBuildTrigger',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_GetBuildTrigger,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudbuild.v1.BuildTrigger>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.getBuildTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/GetBuildTrigger',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_GetBuildTrigger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest,
 *   !proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse>}
 */
const methodDescriptor_CloudBuild_ListBuildTriggers = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/ListBuildTriggers',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest,
  proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest,
 *   !proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse>}
 */
const methodInfo_CloudBuild_ListBuildTriggers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.listBuildTriggers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/ListBuildTriggers',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_ListBuildTriggers,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.listBuildTriggers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/ListBuildTriggers',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_ListBuildTriggers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CloudBuild_DeleteBuildTrigger = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/DeleteBuildTrigger',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest} request
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
 *   !proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CloudBuild_DeleteBuildTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.deleteBuildTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/DeleteBuildTrigger',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_DeleteBuildTrigger,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.deleteBuildTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/DeleteBuildTrigger',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_DeleteBuildTrigger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest,
 *   !proto.google.devtools.cloudbuild.v1.BuildTrigger>}
 */
const methodDescriptor_CloudBuild_UpdateBuildTrigger = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/UpdateBuildTrigger',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest,
  proto.google.devtools.cloudbuild.v1.BuildTrigger,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest,
 *   !proto.google.devtools.cloudbuild.v1.BuildTrigger>}
 */
const methodInfo_CloudBuild_UpdateBuildTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudbuild.v1.BuildTrigger,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudbuild.v1.BuildTrigger)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudbuild.v1.BuildTrigger>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.updateBuildTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/UpdateBuildTrigger',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_UpdateBuildTrigger,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudbuild.v1.BuildTrigger>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.updateBuildTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/UpdateBuildTrigger',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_UpdateBuildTrigger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_CloudBuild_RunBuildTrigger = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudbuild.v1.CloudBuild/RunBuildTrigger',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} request
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
 *   !proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_CloudBuild_RunBuildTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudbuild.v1.CloudBuildClient.prototype.runBuildTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/RunBuildTrigger',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_RunBuildTrigger,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudbuild.v1.CloudBuildPromiseClient.prototype.runBuildTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudbuild.v1.CloudBuild/RunBuildTrigger',
      request,
      metadata || {},
      methodDescriptor_CloudBuild_RunBuildTrigger);
};


module.exports = proto.google.devtools.cloudbuild.v1;

