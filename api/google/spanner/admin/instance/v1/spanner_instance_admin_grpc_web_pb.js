/**
 * @fileoverview gRPC-Web generated client stub for google.spanner.admin.instance.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_iam_v1_iam_policy_pb = require('../../../../../google/iam/v1/iam_policy_pb.js')

var google_iam_v1_policy_pb = require('../../../../../google/iam/v1/policy_pb.js')

var google_longrunning_operations_pb = require('../../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.spanner = {};
proto.google.spanner.admin = {};
proto.google.spanner.admin.instance = {};
proto.google.spanner.admin.instance.v1 = require('./spanner_instance_admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient =
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
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient =
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
 *   !proto.google.spanner.admin.instance.v1.ListInstanceConfigsRequest,
 *   !proto.google.spanner.admin.instance.v1.ListInstanceConfigsResponse>}
 */
const methodDescriptor_InstanceAdmin_ListInstanceConfigs = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.instance.v1.InstanceAdmin/ListInstanceConfigs',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.instance.v1.ListInstanceConfigsRequest,
  proto.google.spanner.admin.instance.v1.ListInstanceConfigsResponse,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.ListInstanceConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.instance.v1.ListInstanceConfigsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.admin.instance.v1.ListInstanceConfigsRequest,
 *   !proto.google.spanner.admin.instance.v1.ListInstanceConfigsResponse>}
 */
const methodInfo_InstanceAdmin_ListInstanceConfigs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.admin.instance.v1.ListInstanceConfigsResponse,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.ListInstanceConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.instance.v1.ListInstanceConfigsResponse.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.instance.v1.ListInstanceConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.admin.instance.v1.ListInstanceConfigsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.admin.instance.v1.ListInstanceConfigsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient.prototype.listInstanceConfigs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/ListInstanceConfigs',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_ListInstanceConfigs,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.instance.v1.ListInstanceConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.admin.instance.v1.ListInstanceConfigsResponse>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient.prototype.listInstanceConfigs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/ListInstanceConfigs',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_ListInstanceConfigs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.instance.v1.GetInstanceConfigRequest,
 *   !proto.google.spanner.admin.instance.v1.InstanceConfig>}
 */
const methodDescriptor_InstanceAdmin_GetInstanceConfig = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.instance.v1.InstanceAdmin/GetInstanceConfig',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.instance.v1.GetInstanceConfigRequest,
  proto.google.spanner.admin.instance.v1.InstanceConfig,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.GetInstanceConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.instance.v1.InstanceConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.admin.instance.v1.GetInstanceConfigRequest,
 *   !proto.google.spanner.admin.instance.v1.InstanceConfig>}
 */
const methodInfo_InstanceAdmin_GetInstanceConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.admin.instance.v1.InstanceConfig,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.GetInstanceConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.instance.v1.InstanceConfig.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.instance.v1.GetInstanceConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.admin.instance.v1.InstanceConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.admin.instance.v1.InstanceConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient.prototype.getInstanceConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/GetInstanceConfig',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_GetInstanceConfig,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.instance.v1.GetInstanceConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.admin.instance.v1.InstanceConfig>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient.prototype.getInstanceConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/GetInstanceConfig',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_GetInstanceConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.instance.v1.ListInstancesRequest,
 *   !proto.google.spanner.admin.instance.v1.ListInstancesResponse>}
 */
const methodDescriptor_InstanceAdmin_ListInstances = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.instance.v1.InstanceAdmin/ListInstances',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.instance.v1.ListInstancesRequest,
  proto.google.spanner.admin.instance.v1.ListInstancesResponse,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.ListInstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.instance.v1.ListInstancesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.admin.instance.v1.ListInstancesRequest,
 *   !proto.google.spanner.admin.instance.v1.ListInstancesResponse>}
 */
const methodInfo_InstanceAdmin_ListInstances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.admin.instance.v1.ListInstancesResponse,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.ListInstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.instance.v1.ListInstancesResponse.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.instance.v1.ListInstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.admin.instance.v1.ListInstancesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.admin.instance.v1.ListInstancesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient.prototype.listInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/ListInstances',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_ListInstances,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.instance.v1.ListInstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.admin.instance.v1.ListInstancesResponse>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient.prototype.listInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/ListInstances',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_ListInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.instance.v1.GetInstanceRequest,
 *   !proto.google.spanner.admin.instance.v1.Instance>}
 */
const methodDescriptor_InstanceAdmin_GetInstance = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.instance.v1.InstanceAdmin/GetInstance',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.instance.v1.GetInstanceRequest,
  proto.google.spanner.admin.instance.v1.Instance,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.GetInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.instance.v1.Instance.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.admin.instance.v1.GetInstanceRequest,
 *   !proto.google.spanner.admin.instance.v1.Instance>}
 */
const methodInfo_InstanceAdmin_GetInstance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.admin.instance.v1.Instance,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.GetInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.instance.v1.Instance.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.instance.v1.GetInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.admin.instance.v1.Instance)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.admin.instance.v1.Instance>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient.prototype.getInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/GetInstance',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_GetInstance,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.instance.v1.GetInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.admin.instance.v1.Instance>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient.prototype.getInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/GetInstance',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_GetInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.instance.v1.CreateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_InstanceAdmin_CreateInstance = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.instance.v1.InstanceAdmin/CreateInstance',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.instance.v1.CreateInstanceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.CreateInstanceRequest} request
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
 *   !proto.google.spanner.admin.instance.v1.CreateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_InstanceAdmin_CreateInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.CreateInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.instance.v1.CreateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient.prototype.createInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/CreateInstance',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_CreateInstance,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.instance.v1.CreateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient.prototype.createInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/CreateInstance',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_CreateInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.instance.v1.UpdateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_InstanceAdmin_UpdateInstance = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.instance.v1.InstanceAdmin/UpdateInstance',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.instance.v1.UpdateInstanceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.UpdateInstanceRequest} request
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
 *   !proto.google.spanner.admin.instance.v1.UpdateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_InstanceAdmin_UpdateInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.UpdateInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.instance.v1.UpdateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient.prototype.updateInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/UpdateInstance',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_UpdateInstance,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.instance.v1.UpdateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient.prototype.updateInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/UpdateInstance',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_UpdateInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.instance.v1.DeleteInstanceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_InstanceAdmin_DeleteInstance = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.instance.v1.InstanceAdmin/DeleteInstance',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.instance.v1.DeleteInstanceRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.DeleteInstanceRequest} request
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
 *   !proto.google.spanner.admin.instance.v1.DeleteInstanceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_InstanceAdmin_DeleteInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.spanner.admin.instance.v1.DeleteInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.instance.v1.DeleteInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient.prototype.deleteInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/DeleteInstance',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_DeleteInstance,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.instance.v1.DeleteInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient.prototype.deleteInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/DeleteInstance',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_DeleteInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_InstanceAdmin_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.instance.v1.InstanceAdmin/SetIamPolicy',
  grpc.web.MethodType.UNARY,
  google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.SetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodInfo_InstanceAdmin_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.SetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @param {!proto.google.iam.v1.SetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.v1.Policy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v1.Policy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_SetIamPolicy,
      callback);
};


/**
 * @param {!proto.google.iam.v1.SetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v1.Policy>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_InstanceAdmin_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.instance.v1.InstanceAdmin/GetIamPolicy',
  grpc.web.MethodType.UNARY,
  google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.GetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodInfo_InstanceAdmin_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.GetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @param {!proto.google.iam.v1.GetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.v1.Policy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v1.Policy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_GetIamPolicy,
      callback);
};


/**
 * @param {!proto.google.iam.v1.GetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v1.Policy>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_InstanceAdmin_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.instance.v1.InstanceAdmin/TestIamPermissions',
  grpc.web.MethodType.UNARY,
  google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
  /**
   * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodInfo_InstanceAdmin_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
  /**
   * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.v1.TestIamPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v1.TestIamPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.instance.v1.InstanceAdminClient.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_TestIamPermissions,
      callback);
};


/**
 * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v1.TestIamPermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.instance.v1.InstanceAdminPromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.instance.v1.InstanceAdmin/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_InstanceAdmin_TestIamPermissions);
};


module.exports = proto.google.spanner.admin.instance.v1;

