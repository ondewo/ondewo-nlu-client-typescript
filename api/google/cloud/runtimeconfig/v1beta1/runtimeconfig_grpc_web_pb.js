/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.runtimeconfig.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_runtimeconfig_v1beta1_resources_pb = require('../../../../google/cloud/runtimeconfig/v1beta1/resources_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.runtimeconfig = {};
proto.google.cloud.runtimeconfig.v1beta1 = require('./runtimeconfig_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient =
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
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient =
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
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListConfigsRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListConfigsResponse>}
 */
const methodDescriptor_RuntimeConfigManager_ListConfigs = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListConfigs',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.ListConfigsRequest,
  proto.google.cloud.runtimeconfig.v1beta1.ListConfigsResponse,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.runtimeconfig.v1beta1.ListConfigsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListConfigsRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListConfigsResponse>}
 */
const methodInfo_RuntimeConfigManager_ListConfigs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.runtimeconfig.v1beta1.ListConfigsResponse,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.runtimeconfig.v1beta1.ListConfigsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.ListConfigsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.ListConfigsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.listConfigs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListConfigs',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_ListConfigs,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.ListConfigsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.listConfigs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListConfigs',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_ListConfigs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.GetConfigRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>}
 */
const methodDescriptor_RuntimeConfigManager_GetConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.GetConfigRequest,
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.GetConfigRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>}
 */
const methodInfo_RuntimeConfigManager_GetConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.getConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetConfig',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_GetConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.getConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetConfig',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_GetConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.CreateConfigRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>}
 */
const methodDescriptor_RuntimeConfigManager_CreateConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.CreateConfigRequest,
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.CreateConfigRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>}
 */
const methodInfo_RuntimeConfigManager_CreateConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.createConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateConfig',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_CreateConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.createConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateConfig',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_CreateConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.UpdateConfigRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>}
 */
const methodDescriptor_RuntimeConfigManager_UpdateConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/UpdateConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.UpdateConfigRequest,
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.UpdateConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.UpdateConfigRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>}
 */
const methodInfo_RuntimeConfigManager_UpdateConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.UpdateConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.UpdateConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.updateConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/UpdateConfig',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_UpdateConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.UpdateConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfig>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.updateConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/UpdateConfig',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_UpdateConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.DeleteConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_RuntimeConfigManager_DeleteConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.DeleteConfigRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteConfigRequest} request
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
 *   !proto.google.cloud.runtimeconfig.v1beta1.DeleteConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_RuntimeConfigManager_DeleteConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.deleteConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteConfig',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_DeleteConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.deleteConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteConfig',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_DeleteConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListVariablesRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListVariablesResponse>}
 */
const methodDescriptor_RuntimeConfigManager_ListVariables = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListVariables',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.ListVariablesRequest,
  proto.google.cloud.runtimeconfig.v1beta1.ListVariablesResponse,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListVariablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.runtimeconfig.v1beta1.ListVariablesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListVariablesRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListVariablesResponse>}
 */
const methodInfo_RuntimeConfigManager_ListVariables = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.runtimeconfig.v1beta1.ListVariablesResponse,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListVariablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.runtimeconfig.v1beta1.ListVariablesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListVariablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.ListVariablesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.ListVariablesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.listVariables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListVariables',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_ListVariables,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListVariablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.ListVariablesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.listVariables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListVariables',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_ListVariables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.GetVariableRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 */
const methodDescriptor_RuntimeConfigManager_GetVariable = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetVariable',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.GetVariableRequest,
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.GetVariableRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 */
const methodInfo_RuntimeConfigManager_GetVariable = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.Variable)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.Variable>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.getVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetVariable',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_GetVariable,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.getVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetVariable',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_GetVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.WatchVariableRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 */
const methodDescriptor_RuntimeConfigManager_WatchVariable = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/WatchVariable',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.WatchVariableRequest,
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.WatchVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.WatchVariableRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 */
const methodInfo_RuntimeConfigManager_WatchVariable = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.WatchVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.WatchVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.Variable)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.Variable>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.watchVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/WatchVariable',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_WatchVariable,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.WatchVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.watchVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/WatchVariable',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_WatchVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.CreateVariableRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 */
const methodDescriptor_RuntimeConfigManager_CreateVariable = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateVariable',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.CreateVariableRequest,
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.CreateVariableRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 */
const methodInfo_RuntimeConfigManager_CreateVariable = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.Variable)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.Variable>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.createVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateVariable',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_CreateVariable,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.createVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateVariable',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_CreateVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.UpdateVariableRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 */
const methodDescriptor_RuntimeConfigManager_UpdateVariable = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/UpdateVariable',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.UpdateVariableRequest,
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.UpdateVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.UpdateVariableRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 */
const methodInfo_RuntimeConfigManager_UpdateVariable = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.UpdateVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.UpdateVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.Variable)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.Variable>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.updateVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/UpdateVariable',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_UpdateVariable,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.UpdateVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.Variable>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.updateVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/UpdateVariable',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_UpdateVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.DeleteVariableRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_RuntimeConfigManager_DeleteVariable = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteVariable',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.DeleteVariableRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteVariableRequest} request
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
 *   !proto.google.cloud.runtimeconfig.v1beta1.DeleteVariableRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_RuntimeConfigManager_DeleteVariable = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.deleteVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteVariable',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_DeleteVariable,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.deleteVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteVariable',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_DeleteVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListWaitersRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListWaitersResponse>}
 */
const methodDescriptor_RuntimeConfigManager_ListWaiters = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListWaiters',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.ListWaitersRequest,
  proto.google.cloud.runtimeconfig.v1beta1.ListWaitersResponse,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListWaitersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.runtimeconfig.v1beta1.ListWaitersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListWaitersRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.ListWaitersResponse>}
 */
const methodInfo_RuntimeConfigManager_ListWaiters = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.runtimeconfig.v1beta1.ListWaitersResponse,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListWaitersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.runtimeconfig.v1beta1.ListWaitersResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListWaitersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.ListWaitersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.ListWaitersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.listWaiters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListWaiters',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_ListWaiters,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.ListWaitersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.ListWaitersResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.listWaiters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListWaiters',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_ListWaiters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.GetWaiterRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.Waiter>}
 */
const methodDescriptor_RuntimeConfigManager_GetWaiter = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetWaiter',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.GetWaiterRequest,
  google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetWaiterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.runtimeconfig.v1beta1.GetWaiterRequest,
 *   !proto.google.cloud.runtimeconfig.v1beta1.Waiter>}
 */
const methodInfo_RuntimeConfigManager_GetWaiter = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetWaiterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetWaiterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.runtimeconfig.v1beta1.Waiter)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.runtimeconfig.v1beta1.Waiter>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.getWaiter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetWaiter',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_GetWaiter,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.GetWaiterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.runtimeconfig.v1beta1.Waiter>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.getWaiter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetWaiter',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_GetWaiter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.CreateWaiterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_RuntimeConfigManager_CreateWaiter = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateWaiter',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.CreateWaiterRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateWaiterRequest} request
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
 *   !proto.google.cloud.runtimeconfig.v1beta1.CreateWaiterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_RuntimeConfigManager_CreateWaiter = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateWaiterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateWaiterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.createWaiter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateWaiter',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_CreateWaiter,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.CreateWaiterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.createWaiter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateWaiter',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_CreateWaiter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.runtimeconfig.v1beta1.DeleteWaiterRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_RuntimeConfigManager_DeleteWaiter = new grpc.web.MethodDescriptor(
  '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteWaiter',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.runtimeconfig.v1beta1.DeleteWaiterRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteWaiterRequest} request
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
 *   !proto.google.cloud.runtimeconfig.v1beta1.DeleteWaiterRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_RuntimeConfigManager_DeleteWaiter = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteWaiterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteWaiterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerClient.prototype.deleteWaiter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteWaiter',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_DeleteWaiter,
      callback);
};


/**
 * @param {!proto.google.cloud.runtimeconfig.v1beta1.DeleteWaiterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.runtimeconfig.v1beta1.RuntimeConfigManagerPromiseClient.prototype.deleteWaiter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteWaiter',
      request,
      metadata || {},
      methodDescriptor_RuntimeConfigManager_DeleteWaiter);
};


module.exports = proto.google.cloud.runtimeconfig.v1beta1;

