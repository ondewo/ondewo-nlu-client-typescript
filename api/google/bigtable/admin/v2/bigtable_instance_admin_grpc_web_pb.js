/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.admin.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_bigtable_admin_v2_instance_pb = require('../../../../google/bigtable/admin/v2/instance_pb.js')

var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js')

var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.bigtable = {};
proto.google.bigtable.admin = {};
proto.google.bigtable.admin.v2 = require('./bigtable_instance_admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient =
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
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient =
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
 *   !proto.google.bigtable.admin.v2.CreateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_BigtableInstanceAdmin_CreateInstance = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateInstance',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.CreateInstanceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.CreateInstanceRequest} request
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
 *   !proto.google.bigtable.admin.v2.CreateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_BigtableInstanceAdmin_CreateInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.CreateInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.CreateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.createInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateInstance',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_CreateInstance,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.CreateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.createInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateInstance',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_CreateInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.GetInstanceRequest,
 *   !proto.google.bigtable.admin.v2.Instance>}
 */
const methodDescriptor_BigtableInstanceAdmin_GetInstance = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetInstance',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.GetInstanceRequest,
  google_bigtable_admin_v2_instance_pb.Instance,
  /**
   * @param {!proto.google.bigtable.admin.v2.GetInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_instance_pb.Instance.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.GetInstanceRequest,
 *   !proto.google.bigtable.admin.v2.Instance>}
 */
const methodInfo_BigtableInstanceAdmin_GetInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_v2_instance_pb.Instance,
  /**
   * @param {!proto.google.bigtable.admin.v2.GetInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_instance_pb.Instance.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.GetInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.Instance)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.Instance>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.getInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetInstance',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_GetInstance,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.GetInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.Instance>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.getInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetInstance',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_GetInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.ListInstancesRequest,
 *   !proto.google.bigtable.admin.v2.ListInstancesResponse>}
 */
const methodDescriptor_BigtableInstanceAdmin_ListInstances = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListInstances',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.ListInstancesRequest,
  proto.google.bigtable.admin.v2.ListInstancesResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.ListInstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.ListInstancesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.ListInstancesRequest,
 *   !proto.google.bigtable.admin.v2.ListInstancesResponse>}
 */
const methodInfo_BigtableInstanceAdmin_ListInstances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.admin.v2.ListInstancesResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.ListInstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.ListInstancesResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.ListInstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.ListInstancesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.ListInstancesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.listInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListInstances',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_ListInstances,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.ListInstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.ListInstancesResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.listInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListInstances',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_ListInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.Instance,
 *   !proto.google.bigtable.admin.v2.Instance>}
 */
const methodDescriptor_BigtableInstanceAdmin_UpdateInstance = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateInstance',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_v2_instance_pb.Instance,
  google_bigtable_admin_v2_instance_pb.Instance,
  /**
   * @param {!proto.google.bigtable.admin.v2.Instance} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_instance_pb.Instance.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.Instance,
 *   !proto.google.bigtable.admin.v2.Instance>}
 */
const methodInfo_BigtableInstanceAdmin_UpdateInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_v2_instance_pb.Instance,
  /**
   * @param {!proto.google.bigtable.admin.v2.Instance} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_instance_pb.Instance.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.Instance} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.Instance)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.Instance>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.updateInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateInstance',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_UpdateInstance,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.Instance} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.Instance>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.updateInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateInstance',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_UpdateInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.PartialUpdateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_BigtableInstanceAdmin_PartialUpdateInstance = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/PartialUpdateInstance',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.PartialUpdateInstanceRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.PartialUpdateInstanceRequest} request
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
 *   !proto.google.bigtable.admin.v2.PartialUpdateInstanceRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_BigtableInstanceAdmin_PartialUpdateInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.PartialUpdateInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.PartialUpdateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.partialUpdateInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/PartialUpdateInstance',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_PartialUpdateInstance,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.PartialUpdateInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.partialUpdateInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/PartialUpdateInstance',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_PartialUpdateInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.DeleteInstanceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableInstanceAdmin_DeleteInstance = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteInstance',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.DeleteInstanceRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DeleteInstanceRequest} request
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
 *   !proto.google.bigtable.admin.v2.DeleteInstanceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableInstanceAdmin_DeleteInstance = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DeleteInstanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.DeleteInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.deleteInstance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteInstance',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_DeleteInstance,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.DeleteInstanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.deleteInstance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteInstance',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_DeleteInstance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.CreateClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_BigtableInstanceAdmin_CreateCluster = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateCluster',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.CreateClusterRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.CreateClusterRequest} request
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
 *   !proto.google.bigtable.admin.v2.CreateClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_BigtableInstanceAdmin_CreateCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.CreateClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.CreateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.createCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_CreateCluster,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.CreateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.createCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_CreateCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.GetClusterRequest,
 *   !proto.google.bigtable.admin.v2.Cluster>}
 */
const methodDescriptor_BigtableInstanceAdmin_GetCluster = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetCluster',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.GetClusterRequest,
  google_bigtable_admin_v2_instance_pb.Cluster,
  /**
   * @param {!proto.google.bigtable.admin.v2.GetClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_instance_pb.Cluster.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.GetClusterRequest,
 *   !proto.google.bigtable.admin.v2.Cluster>}
 */
const methodInfo_BigtableInstanceAdmin_GetCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_v2_instance_pb.Cluster,
  /**
   * @param {!proto.google.bigtable.admin.v2.GetClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_instance_pb.Cluster.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.GetClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.Cluster)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.Cluster>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.getCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_GetCluster,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.GetClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.Cluster>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.getCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_GetCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.ListClustersRequest,
 *   !proto.google.bigtable.admin.v2.ListClustersResponse>}
 */
const methodDescriptor_BigtableInstanceAdmin_ListClusters = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListClusters',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.ListClustersRequest,
  proto.google.bigtable.admin.v2.ListClustersResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.ListClustersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.ListClustersRequest,
 *   !proto.google.bigtable.admin.v2.ListClustersResponse>}
 */
const methodInfo_BigtableInstanceAdmin_ListClusters = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.admin.v2.ListClustersResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.ListClustersResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.ListClustersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.ListClustersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.listClusters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListClusters',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_ListClusters,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.ListClustersResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.listClusters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListClusters',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_ListClusters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.Cluster,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_BigtableInstanceAdmin_UpdateCluster = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateCluster',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_v2_instance_pb.Cluster,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.Cluster} request
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
 *   !proto.google.bigtable.admin.v2.Cluster,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_BigtableInstanceAdmin_UpdateCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.Cluster} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.Cluster} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.updateCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_UpdateCluster,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.Cluster} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.updateCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_UpdateCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.DeleteClusterRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableInstanceAdmin_DeleteCluster = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteCluster',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.DeleteClusterRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DeleteClusterRequest} request
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
 *   !proto.google.bigtable.admin.v2.DeleteClusterRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableInstanceAdmin_DeleteCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DeleteClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.DeleteClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.deleteCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_DeleteCluster,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.DeleteClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.deleteCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_DeleteCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.CreateAppProfileRequest,
 *   !proto.google.bigtable.admin.v2.AppProfile>}
 */
const methodDescriptor_BigtableInstanceAdmin_CreateAppProfile = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateAppProfile',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.CreateAppProfileRequest,
  google_bigtable_admin_v2_instance_pb.AppProfile,
  /**
   * @param {!proto.google.bigtable.admin.v2.CreateAppProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_instance_pb.AppProfile.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.CreateAppProfileRequest,
 *   !proto.google.bigtable.admin.v2.AppProfile>}
 */
const methodInfo_BigtableInstanceAdmin_CreateAppProfile = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_v2_instance_pb.AppProfile,
  /**
   * @param {!proto.google.bigtable.admin.v2.CreateAppProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_instance_pb.AppProfile.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.CreateAppProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.AppProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.AppProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.createAppProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateAppProfile',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_CreateAppProfile,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.CreateAppProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.AppProfile>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.createAppProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateAppProfile',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_CreateAppProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.GetAppProfileRequest,
 *   !proto.google.bigtable.admin.v2.AppProfile>}
 */
const methodDescriptor_BigtableInstanceAdmin_GetAppProfile = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetAppProfile',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.GetAppProfileRequest,
  google_bigtable_admin_v2_instance_pb.AppProfile,
  /**
   * @param {!proto.google.bigtable.admin.v2.GetAppProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_instance_pb.AppProfile.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.GetAppProfileRequest,
 *   !proto.google.bigtable.admin.v2.AppProfile>}
 */
const methodInfo_BigtableInstanceAdmin_GetAppProfile = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_v2_instance_pb.AppProfile,
  /**
   * @param {!proto.google.bigtable.admin.v2.GetAppProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_instance_pb.AppProfile.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.GetAppProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.AppProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.AppProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.getAppProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetAppProfile',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_GetAppProfile,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.GetAppProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.AppProfile>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.getAppProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetAppProfile',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_GetAppProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.ListAppProfilesRequest,
 *   !proto.google.bigtable.admin.v2.ListAppProfilesResponse>}
 */
const methodDescriptor_BigtableInstanceAdmin_ListAppProfiles = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListAppProfiles',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.ListAppProfilesRequest,
  proto.google.bigtable.admin.v2.ListAppProfilesResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.ListAppProfilesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.ListAppProfilesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.ListAppProfilesRequest,
 *   !proto.google.bigtable.admin.v2.ListAppProfilesResponse>}
 */
const methodInfo_BigtableInstanceAdmin_ListAppProfiles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.admin.v2.ListAppProfilesResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.ListAppProfilesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.ListAppProfilesResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.ListAppProfilesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.ListAppProfilesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.ListAppProfilesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.listAppProfiles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListAppProfiles',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_ListAppProfiles,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.ListAppProfilesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.ListAppProfilesResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.listAppProfiles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListAppProfiles',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_ListAppProfiles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.UpdateAppProfileRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_BigtableInstanceAdmin_UpdateAppProfile = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateAppProfile',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.UpdateAppProfileRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.UpdateAppProfileRequest} request
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
 *   !proto.google.bigtable.admin.v2.UpdateAppProfileRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_BigtableInstanceAdmin_UpdateAppProfile = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.UpdateAppProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.UpdateAppProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.updateAppProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateAppProfile',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_UpdateAppProfile,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.UpdateAppProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.updateAppProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateAppProfile',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_UpdateAppProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.DeleteAppProfileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableInstanceAdmin_DeleteAppProfile = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteAppProfile',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.DeleteAppProfileRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DeleteAppProfileRequest} request
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
 *   !proto.google.bigtable.admin.v2.DeleteAppProfileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableInstanceAdmin_DeleteAppProfile = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DeleteAppProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.DeleteAppProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.deleteAppProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteAppProfile',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_DeleteAppProfile,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.DeleteAppProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.deleteAppProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteAppProfile',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_DeleteAppProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_BigtableInstanceAdmin_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetIamPolicy',
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
const methodInfo_BigtableInstanceAdmin_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_GetIamPolicy,
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
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_BigtableInstanceAdmin_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/SetIamPolicy',
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
const methodInfo_BigtableInstanceAdmin_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_SetIamPolicy,
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
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_BigtableInstanceAdmin_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableInstanceAdmin/TestIamPermissions',
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
const methodInfo_BigtableInstanceAdmin_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.bigtable.admin.v2.BigtableInstanceAdminClient.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_TestIamPermissions,
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
proto.google.bigtable.admin.v2.BigtableInstanceAdminPromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableInstanceAdmin/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_BigtableInstanceAdmin_TestIamPermissions);
};


module.exports = proto.google.bigtable.admin.v2;

