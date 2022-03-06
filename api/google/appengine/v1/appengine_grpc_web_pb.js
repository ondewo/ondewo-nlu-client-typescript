/**
 * @fileoverview gRPC-Web generated client stub for google.appengine.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_appengine_v1_application_pb = require('../../../google/appengine/v1/application_pb.js')

var google_appengine_v1_instance_pb = require('../../../google/appengine/v1/instance_pb.js')

var google_appengine_v1_service_pb = require('../../../google/appengine/v1/service_pb.js')

var google_appengine_v1_version_pb = require('../../../google/appengine/v1/version_pb.js')

var google_iam_v1_iam_policy_pb = require('../../../google/iam/v1/iam_policy_pb.js')

var google_iam_v1_policy_pb = require('../../../google/iam/v1/policy_pb.js')

var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.appengine = {};
proto.google.appengine.v1 = require('./appengine_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.appengine.v1.InstancesClient =
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
proto.google.appengine.v1.InstancesPromiseClient =
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
 *   !proto.google.appengine.v1.ListInstancesRequest,
 *   !proto.google.appengine.v1.ListInstancesResponse>}
 */
const methodDescriptor_Instances_ListInstances = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Instances/ListInstances',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.ListInstancesRequest,
  proto.google.appengine.v1.ListInstancesResponse,
  /**
   * @param {!proto.google.appengine.v1.ListInstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.appengine.v1.ListInstancesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.appengine.v1.ListInstancesRequest,
 *   !proto.google.appengine.v1.ListInstancesResponse>}
 */
const methodInfo_Instances_ListInstances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.appengine.v1.ListInstancesResponse,
  /**
   * @param {!proto.google.appengine.v1.ListInstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.appengine.v1.ListInstancesResponse.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.ListInstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.appengine.v1.ListInstancesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.appengine.v1.ListInstancesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.InstancesClient.prototype.listInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Instances/ListInstances',
      request,
      metadata || {},
      methodDescriptor_Instances_ListInstances,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.ListInstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.appengine.v1.ListInstancesResponse>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.InstancesPromiseClient.prototype.listInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Instances/ListInstances',
      request,
      metadata || {},
      methodDescriptor_Instances_ListInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.GetInstanceRequest,
 *   !proto.google.appengine.v1.Instance>}
 */
const methodDescriptor_Instances_GetInstance = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Instances/GetInstance',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.GetInstanceRequest,
  google_appengine_v1_instance_pb.Instance,
  /**
   * @param {!proto.google.appengine.v1.GetInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_appengine_v1_instance_pb.Instance.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.appengine.v1.GetInstanceRequest,
 *   !proto.google.appengine.v1.Instance>}
 */
const methodInfo_Instances_GetInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_appengine_v1_instance_pb.Instance,
  /**
   * @param {!proto.google.appengine.v1.GetInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_appengine_v1_instance_pb.Instance.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.GetInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.appengine.v1.Instance)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.appengine.v1.Instance>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.InstancesClient.prototype.getInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Instances/GetInstance',
      request,
      metadata || {},
      methodDescriptor_Instances_GetInstance,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.GetInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.appengine.v1.Instance>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.InstancesPromiseClient.prototype.getInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Instances/GetInstance',
      request,
      metadata || {},
      methodDescriptor_Instances_GetInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.DeleteInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Instances_DeleteInstance = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Instances/DeleteInstance',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.DeleteInstanceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.DeleteInstanceRequest} request
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
 *   !proto.google.appengine.v1.DeleteInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Instances_DeleteInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.DeleteInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.DeleteInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.InstancesClient.prototype.deleteInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Instances/DeleteInstance',
      request,
      metadata || {},
      methodDescriptor_Instances_DeleteInstance,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.DeleteInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.InstancesPromiseClient.prototype.deleteInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Instances/DeleteInstance',
      request,
      metadata || {},
      methodDescriptor_Instances_DeleteInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.DebugInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Instances_DebugInstance = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Instances/DebugInstance',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.DebugInstanceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.DebugInstanceRequest} request
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
 *   !proto.google.appengine.v1.DebugInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Instances_DebugInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.DebugInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.DebugInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.InstancesClient.prototype.debugInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Instances/DebugInstance',
      request,
      metadata || {},
      methodDescriptor_Instances_DebugInstance,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.DebugInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.InstancesPromiseClient.prototype.debugInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Instances/DebugInstance',
      request,
      metadata || {},
      methodDescriptor_Instances_DebugInstance);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.appengine.v1.VersionsClient =
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
proto.google.appengine.v1.VersionsPromiseClient =
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
 *   !proto.google.appengine.v1.ListVersionsRequest,
 *   !proto.google.appengine.v1.ListVersionsResponse>}
 */
const methodDescriptor_Versions_ListVersions = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Versions/ListVersions',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.ListVersionsRequest,
  proto.google.appengine.v1.ListVersionsResponse,
  /**
   * @param {!proto.google.appengine.v1.ListVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.appengine.v1.ListVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.appengine.v1.ListVersionsRequest,
 *   !proto.google.appengine.v1.ListVersionsResponse>}
 */
const methodInfo_Versions_ListVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.appengine.v1.ListVersionsResponse,
  /**
   * @param {!proto.google.appengine.v1.ListVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.appengine.v1.ListVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.ListVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.appengine.v1.ListVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.appengine.v1.ListVersionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.VersionsClient.prototype.listVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Versions/ListVersions',
      request,
      metadata || {},
      methodDescriptor_Versions_ListVersions,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.ListVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.appengine.v1.ListVersionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.VersionsPromiseClient.prototype.listVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Versions/ListVersions',
      request,
      metadata || {},
      methodDescriptor_Versions_ListVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.GetVersionRequest,
 *   !proto.google.appengine.v1.Version>}
 */
const methodDescriptor_Versions_GetVersion = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Versions/GetVersion',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.GetVersionRequest,
  google_appengine_v1_version_pb.Version,
  /**
   * @param {!proto.google.appengine.v1.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_appengine_v1_version_pb.Version.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.appengine.v1.GetVersionRequest,
 *   !proto.google.appengine.v1.Version>}
 */
const methodInfo_Versions_GetVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_appengine_v1_version_pb.Version,
  /**
   * @param {!proto.google.appengine.v1.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_appengine_v1_version_pb.Version.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.appengine.v1.Version)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.appengine.v1.Version>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.VersionsClient.prototype.getVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Versions/GetVersion',
      request,
      metadata || {},
      methodDescriptor_Versions_GetVersion,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.appengine.v1.Version>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.VersionsPromiseClient.prototype.getVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Versions/GetVersion',
      request,
      metadata || {},
      methodDescriptor_Versions_GetVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.CreateVersionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Versions_CreateVersion = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Versions/CreateVersion',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.CreateVersionRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.CreateVersionRequest} request
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
 *   !proto.google.appengine.v1.CreateVersionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Versions_CreateVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.CreateVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.CreateVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.VersionsClient.prototype.createVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Versions/CreateVersion',
      request,
      metadata || {},
      methodDescriptor_Versions_CreateVersion,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.CreateVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.VersionsPromiseClient.prototype.createVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Versions/CreateVersion',
      request,
      metadata || {},
      methodDescriptor_Versions_CreateVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.UpdateVersionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Versions_UpdateVersion = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Versions/UpdateVersion',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.UpdateVersionRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.UpdateVersionRequest} request
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
 *   !proto.google.appengine.v1.UpdateVersionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Versions_UpdateVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.UpdateVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.UpdateVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.VersionsClient.prototype.updateVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Versions/UpdateVersion',
      request,
      metadata || {},
      methodDescriptor_Versions_UpdateVersion,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.UpdateVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.VersionsPromiseClient.prototype.updateVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Versions/UpdateVersion',
      request,
      metadata || {},
      methodDescriptor_Versions_UpdateVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.DeleteVersionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Versions_DeleteVersion = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Versions/DeleteVersion',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.DeleteVersionRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.DeleteVersionRequest} request
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
 *   !proto.google.appengine.v1.DeleteVersionRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Versions_DeleteVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.DeleteVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.DeleteVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.VersionsClient.prototype.deleteVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Versions/DeleteVersion',
      request,
      metadata || {},
      methodDescriptor_Versions_DeleteVersion,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.DeleteVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.VersionsPromiseClient.prototype.deleteVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Versions/DeleteVersion',
      request,
      metadata || {},
      methodDescriptor_Versions_DeleteVersion);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.appengine.v1.ServicesClient =
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
proto.google.appengine.v1.ServicesPromiseClient =
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
 *   !proto.google.appengine.v1.ListServicesRequest,
 *   !proto.google.appengine.v1.ListServicesResponse>}
 */
const methodDescriptor_Services_ListServices = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Services/ListServices',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.ListServicesRequest,
  proto.google.appengine.v1.ListServicesResponse,
  /**
   * @param {!proto.google.appengine.v1.ListServicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.appengine.v1.ListServicesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.appengine.v1.ListServicesRequest,
 *   !proto.google.appengine.v1.ListServicesResponse>}
 */
const methodInfo_Services_ListServices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.appengine.v1.ListServicesResponse,
  /**
   * @param {!proto.google.appengine.v1.ListServicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.appengine.v1.ListServicesResponse.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.ListServicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.appengine.v1.ListServicesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.appengine.v1.ListServicesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.ServicesClient.prototype.listServices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Services/ListServices',
      request,
      metadata || {},
      methodDescriptor_Services_ListServices,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.ListServicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.appengine.v1.ListServicesResponse>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.ServicesPromiseClient.prototype.listServices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Services/ListServices',
      request,
      metadata || {},
      methodDescriptor_Services_ListServices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.GetServiceRequest,
 *   !proto.google.appengine.v1.Service>}
 */
const methodDescriptor_Services_GetService = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Services/GetService',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.GetServiceRequest,
  google_appengine_v1_service_pb.Service,
  /**
   * @param {!proto.google.appengine.v1.GetServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_appengine_v1_service_pb.Service.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.appengine.v1.GetServiceRequest,
 *   !proto.google.appengine.v1.Service>}
 */
const methodInfo_Services_GetService = new grpc.web.AbstractClientBase.MethodInfo(
  google_appengine_v1_service_pb.Service,
  /**
   * @param {!proto.google.appengine.v1.GetServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_appengine_v1_service_pb.Service.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.GetServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.appengine.v1.Service)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.appengine.v1.Service>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.ServicesClient.prototype.getService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Services/GetService',
      request,
      metadata || {},
      methodDescriptor_Services_GetService,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.GetServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.appengine.v1.Service>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.ServicesPromiseClient.prototype.getService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Services/GetService',
      request,
      metadata || {},
      methodDescriptor_Services_GetService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.UpdateServiceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Services_UpdateService = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Services/UpdateService',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.UpdateServiceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.UpdateServiceRequest} request
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
 *   !proto.google.appengine.v1.UpdateServiceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Services_UpdateService = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.UpdateServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.UpdateServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.ServicesClient.prototype.updateService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Services/UpdateService',
      request,
      metadata || {},
      methodDescriptor_Services_UpdateService,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.UpdateServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.ServicesPromiseClient.prototype.updateService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Services/UpdateService',
      request,
      metadata || {},
      methodDescriptor_Services_UpdateService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.DeleteServiceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Services_DeleteService = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Services/DeleteService',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.DeleteServiceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.DeleteServiceRequest} request
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
 *   !proto.google.appengine.v1.DeleteServiceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Services_DeleteService = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.DeleteServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.DeleteServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.ServicesClient.prototype.deleteService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Services/DeleteService',
      request,
      metadata || {},
      methodDescriptor_Services_DeleteService,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.DeleteServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.ServicesPromiseClient.prototype.deleteService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Services/DeleteService',
      request,
      metadata || {},
      methodDescriptor_Services_DeleteService);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.appengine.v1.ApplicationsClient =
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
proto.google.appengine.v1.ApplicationsPromiseClient =
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
 *   !proto.google.appengine.v1.GetApplicationRequest,
 *   !proto.google.appengine.v1.Application>}
 */
const methodDescriptor_Applications_GetApplication = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Applications/GetApplication',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.GetApplicationRequest,
  google_appengine_v1_application_pb.Application,
  /**
   * @param {!proto.google.appengine.v1.GetApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_appengine_v1_application_pb.Application.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.appengine.v1.GetApplicationRequest,
 *   !proto.google.appengine.v1.Application>}
 */
const methodInfo_Applications_GetApplication = new grpc.web.AbstractClientBase.MethodInfo(
  google_appengine_v1_application_pb.Application,
  /**
   * @param {!proto.google.appengine.v1.GetApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_appengine_v1_application_pb.Application.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.GetApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.appengine.v1.Application)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.appengine.v1.Application>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.ApplicationsClient.prototype.getApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Applications/GetApplication',
      request,
      metadata || {},
      methodDescriptor_Applications_GetApplication,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.GetApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.appengine.v1.Application>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.ApplicationsPromiseClient.prototype.getApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Applications/GetApplication',
      request,
      metadata || {},
      methodDescriptor_Applications_GetApplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.appengine.v1.RepairApplicationRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Applications_RepairApplication = new grpc.web.MethodDescriptor(
  '/google.appengine.v1.Applications/RepairApplication',
  grpc.web.MethodType.UNARY,
  proto.google.appengine.v1.RepairApplicationRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.RepairApplicationRequest} request
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
 *   !proto.google.appengine.v1.RepairApplicationRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Applications_RepairApplication = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.appengine.v1.RepairApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.appengine.v1.RepairApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.appengine.v1.ApplicationsClient.prototype.repairApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.appengine.v1.Applications/RepairApplication',
      request,
      metadata || {},
      methodDescriptor_Applications_RepairApplication,
      callback);
};


/**
 * @param {!proto.google.appengine.v1.RepairApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.appengine.v1.ApplicationsPromiseClient.prototype.repairApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.appengine.v1.Applications/RepairApplication',
      request,
      metadata || {},
      methodDescriptor_Applications_RepairApplication);
};


module.exports = proto.google.appengine.v1;

