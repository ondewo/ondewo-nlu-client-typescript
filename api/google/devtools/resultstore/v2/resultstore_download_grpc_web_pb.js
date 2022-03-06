/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.resultstore.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_devtools_resultstore_v2_action_pb = require('../../../../google/devtools/resultstore/v2/action_pb.js')

var google_devtools_resultstore_v2_common_pb = require('../../../../google/devtools/resultstore/v2/common_pb.js')

var google_devtools_resultstore_v2_configuration_pb = require('../../../../google/devtools/resultstore/v2/configuration_pb.js')

var google_devtools_resultstore_v2_configured_target_pb = require('../../../../google/devtools/resultstore/v2/configured_target_pb.js')

var google_devtools_resultstore_v2_file_set_pb = require('../../../../google/devtools/resultstore/v2/file_set_pb.js')

var google_devtools_resultstore_v2_invocation_pb = require('../../../../google/devtools/resultstore/v2/invocation_pb.js')

var google_devtools_resultstore_v2_target_pb = require('../../../../google/devtools/resultstore/v2/target_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.resultstore = {};
proto.google.devtools.resultstore.v2 = require('./resultstore_download_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient =
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
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient =
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
 *   !proto.google.devtools.resultstore.v2.GetInvocationRequest,
 *   !proto.google.devtools.resultstore.v2.Invocation>}
 */
const methodDescriptor_ResultStoreDownload_GetInvocation = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/GetInvocation',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.GetInvocationRequest,
  google_devtools_resultstore_v2_invocation_pb.Invocation,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetInvocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.GetInvocationRequest,
 *   !proto.google.devtools.resultstore.v2.Invocation>}
 */
const methodInfo_ResultStoreDownload_GetInvocation = new grpc.web.AbstractClientBase.MethodInfo(
  google_devtools_resultstore_v2_invocation_pb.Invocation,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetInvocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_invocation_pb.Invocation.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.GetInvocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.Invocation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.Invocation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.getInvocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetInvocation',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetInvocation,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.GetInvocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.Invocation>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.getInvocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetInvocation',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetInvocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.SearchInvocationsRequest,
 *   !proto.google.devtools.resultstore.v2.SearchInvocationsResponse>}
 */
const methodDescriptor_ResultStoreDownload_SearchInvocations = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/SearchInvocations',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.SearchInvocationsRequest,
  proto.google.devtools.resultstore.v2.SearchInvocationsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.SearchInvocationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.SearchInvocationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.SearchInvocationsRequest,
 *   !proto.google.devtools.resultstore.v2.SearchInvocationsResponse>}
 */
const methodInfo_ResultStoreDownload_SearchInvocations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.resultstore.v2.SearchInvocationsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.SearchInvocationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.SearchInvocationsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.SearchInvocationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.SearchInvocationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.SearchInvocationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.searchInvocations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/SearchInvocations',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_SearchInvocations,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.SearchInvocationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.SearchInvocationsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.searchInvocations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/SearchInvocations',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_SearchInvocations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.GetConfigurationRequest,
 *   !proto.google.devtools.resultstore.v2.Configuration>}
 */
const methodDescriptor_ResultStoreDownload_GetConfiguration = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/GetConfiguration',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.GetConfigurationRequest,
  google_devtools_resultstore_v2_configuration_pb.Configuration,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetConfigurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_configuration_pb.Configuration.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.GetConfigurationRequest,
 *   !proto.google.devtools.resultstore.v2.Configuration>}
 */
const methodInfo_ResultStoreDownload_GetConfiguration = new grpc.web.AbstractClientBase.MethodInfo(
  google_devtools_resultstore_v2_configuration_pb.Configuration,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetConfigurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_configuration_pb.Configuration.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.GetConfigurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.Configuration)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.Configuration>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.getConfiguration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetConfiguration',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetConfiguration,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.GetConfigurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.Configuration>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.getConfiguration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetConfiguration',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetConfiguration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.ListConfigurationsRequest,
 *   !proto.google.devtools.resultstore.v2.ListConfigurationsResponse>}
 */
const methodDescriptor_ResultStoreDownload_ListConfigurations = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/ListConfigurations',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.ListConfigurationsRequest,
  proto.google.devtools.resultstore.v2.ListConfigurationsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.ListConfigurationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.ListConfigurationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.ListConfigurationsRequest,
 *   !proto.google.devtools.resultstore.v2.ListConfigurationsResponse>}
 */
const methodInfo_ResultStoreDownload_ListConfigurations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.resultstore.v2.ListConfigurationsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.ListConfigurationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.ListConfigurationsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.ListConfigurationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.ListConfigurationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.ListConfigurationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.listConfigurations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/ListConfigurations',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_ListConfigurations,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.ListConfigurationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.ListConfigurationsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.listConfigurations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/ListConfigurations',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_ListConfigurations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.GetTargetRequest,
 *   !proto.google.devtools.resultstore.v2.Target>}
 */
const methodDescriptor_ResultStoreDownload_GetTarget = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/GetTarget',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.GetTargetRequest,
  google_devtools_resultstore_v2_target_pb.Target,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetTargetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_target_pb.Target.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.GetTargetRequest,
 *   !proto.google.devtools.resultstore.v2.Target>}
 */
const methodInfo_ResultStoreDownload_GetTarget = new grpc.web.AbstractClientBase.MethodInfo(
  google_devtools_resultstore_v2_target_pb.Target,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetTargetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_target_pb.Target.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.GetTargetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.Target)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.Target>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.getTarget =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetTarget',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetTarget,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.GetTargetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.Target>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.getTarget =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetTarget',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetTarget);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.ListTargetsRequest,
 *   !proto.google.devtools.resultstore.v2.ListTargetsResponse>}
 */
const methodDescriptor_ResultStoreDownload_ListTargets = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/ListTargets',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.ListTargetsRequest,
  proto.google.devtools.resultstore.v2.ListTargetsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.ListTargetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.ListTargetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.ListTargetsRequest,
 *   !proto.google.devtools.resultstore.v2.ListTargetsResponse>}
 */
const methodInfo_ResultStoreDownload_ListTargets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.resultstore.v2.ListTargetsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.ListTargetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.ListTargetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.ListTargetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.ListTargetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.ListTargetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.listTargets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/ListTargets',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_ListTargets,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.ListTargetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.ListTargetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.listTargets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/ListTargets',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_ListTargets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.GetConfiguredTargetRequest,
 *   !proto.google.devtools.resultstore.v2.ConfiguredTarget>}
 */
const methodDescriptor_ResultStoreDownload_GetConfiguredTarget = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/GetConfiguredTarget',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.GetConfiguredTargetRequest,
  google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetConfiguredTargetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.GetConfiguredTargetRequest,
 *   !proto.google.devtools.resultstore.v2.ConfiguredTarget>}
 */
const methodInfo_ResultStoreDownload_GetConfiguredTarget = new grpc.web.AbstractClientBase.MethodInfo(
  google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetConfiguredTargetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.GetConfiguredTargetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.ConfiguredTarget)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.ConfiguredTarget>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.getConfiguredTarget =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetConfiguredTarget',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetConfiguredTarget,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.GetConfiguredTargetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.ConfiguredTarget>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.getConfiguredTarget =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetConfiguredTarget',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetConfiguredTarget);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.ListConfiguredTargetsRequest,
 *   !proto.google.devtools.resultstore.v2.ListConfiguredTargetsResponse>}
 */
const methodDescriptor_ResultStoreDownload_ListConfiguredTargets = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/ListConfiguredTargets',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.ListConfiguredTargetsRequest,
  proto.google.devtools.resultstore.v2.ListConfiguredTargetsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.ListConfiguredTargetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.ListConfiguredTargetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.ListConfiguredTargetsRequest,
 *   !proto.google.devtools.resultstore.v2.ListConfiguredTargetsResponse>}
 */
const methodInfo_ResultStoreDownload_ListConfiguredTargets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.resultstore.v2.ListConfiguredTargetsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.ListConfiguredTargetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.ListConfiguredTargetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.ListConfiguredTargetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.ListConfiguredTargetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.ListConfiguredTargetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.listConfiguredTargets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/ListConfiguredTargets',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_ListConfiguredTargets,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.ListConfiguredTargetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.ListConfiguredTargetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.listConfiguredTargets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/ListConfiguredTargets',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_ListConfiguredTargets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.GetActionRequest,
 *   !proto.google.devtools.resultstore.v2.Action>}
 */
const methodDescriptor_ResultStoreDownload_GetAction = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/GetAction',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.GetActionRequest,
  google_devtools_resultstore_v2_action_pb.Action,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetActionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_action_pb.Action.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.GetActionRequest,
 *   !proto.google.devtools.resultstore.v2.Action>}
 */
const methodInfo_ResultStoreDownload_GetAction = new grpc.web.AbstractClientBase.MethodInfo(
  google_devtools_resultstore_v2_action_pb.Action,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetActionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_action_pb.Action.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.GetActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.Action)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.Action>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.getAction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetAction',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetAction,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.GetActionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.Action>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.getAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetAction',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetAction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.ListActionsRequest,
 *   !proto.google.devtools.resultstore.v2.ListActionsResponse>}
 */
const methodDescriptor_ResultStoreDownload_ListActions = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/ListActions',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.ListActionsRequest,
  proto.google.devtools.resultstore.v2.ListActionsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.ListActionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.ListActionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.ListActionsRequest,
 *   !proto.google.devtools.resultstore.v2.ListActionsResponse>}
 */
const methodInfo_ResultStoreDownload_ListActions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.resultstore.v2.ListActionsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.ListActionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.ListActionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.ListActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.ListActionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.ListActionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.listActions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/ListActions',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_ListActions,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.ListActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.ListActionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.listActions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/ListActions',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_ListActions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.GetFileSetRequest,
 *   !proto.google.devtools.resultstore.v2.FileSet>}
 */
const methodDescriptor_ResultStoreDownload_GetFileSet = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/GetFileSet',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.GetFileSetRequest,
  google_devtools_resultstore_v2_file_set_pb.FileSet,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetFileSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.GetFileSetRequest,
 *   !proto.google.devtools.resultstore.v2.FileSet>}
 */
const methodInfo_ResultStoreDownload_GetFileSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_devtools_resultstore_v2_file_set_pb.FileSet,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetFileSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_resultstore_v2_file_set_pb.FileSet.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.GetFileSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.FileSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.FileSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.getFileSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetFileSet',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetFileSet,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.GetFileSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.FileSet>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.getFileSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/GetFileSet',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_GetFileSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.ListFileSetsRequest,
 *   !proto.google.devtools.resultstore.v2.ListFileSetsResponse>}
 */
const methodDescriptor_ResultStoreDownload_ListFileSets = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreDownload/ListFileSets',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.ListFileSetsRequest,
  proto.google.devtools.resultstore.v2.ListFileSetsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.ListFileSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.ListFileSetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.ListFileSetsRequest,
 *   !proto.google.devtools.resultstore.v2.ListFileSetsResponse>}
 */
const methodInfo_ResultStoreDownload_ListFileSets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.resultstore.v2.ListFileSetsResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.ListFileSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.ListFileSetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.ListFileSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.ListFileSetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.ListFileSetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadClient.prototype.listFileSets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/ListFileSets',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_ListFileSets,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.ListFileSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.ListFileSetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreDownloadPromiseClient.prototype.listFileSets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreDownload/ListFileSets',
      request,
      metadata || {},
      methodDescriptor_ResultStoreDownload_ListFileSets);
};


module.exports = proto.google.devtools.resultstore.v2;

