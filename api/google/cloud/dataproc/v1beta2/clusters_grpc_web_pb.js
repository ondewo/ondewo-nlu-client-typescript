/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dataproc.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_dataproc_v1beta2_shared_pb = require('../../../../google/cloud/dataproc/v1beta2/shared_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dataproc = {};
proto.google.cloud.dataproc.v1beta2 = require('./clusters_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerClient =
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
proto.google.cloud.dataproc.v1beta2.ClusterControllerPromiseClient =
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
 *   !proto.google.cloud.dataproc.v1beta2.CreateClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ClusterController_CreateCluster = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.ClusterController/CreateCluster',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.CreateClusterRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.CreateClusterRequest} request
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
 *   !proto.google.cloud.dataproc.v1beta2.CreateClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ClusterController_CreateCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.CreateClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.CreateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerClient.prototype.createCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/CreateCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterController_CreateCluster,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.CreateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerPromiseClient.prototype.createCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/CreateCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterController_CreateCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.UpdateClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ClusterController_UpdateCluster = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.ClusterController/UpdateCluster',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.UpdateClusterRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.UpdateClusterRequest} request
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
 *   !proto.google.cloud.dataproc.v1beta2.UpdateClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ClusterController_UpdateCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.UpdateClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.UpdateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerClient.prototype.updateCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/UpdateCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterController_UpdateCluster,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.UpdateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerPromiseClient.prototype.updateCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/UpdateCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterController_UpdateCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.DeleteClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ClusterController_DeleteCluster = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.ClusterController/DeleteCluster',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.DeleteClusterRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.DeleteClusterRequest} request
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
 *   !proto.google.cloud.dataproc.v1beta2.DeleteClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ClusterController_DeleteCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.DeleteClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.DeleteClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerClient.prototype.deleteCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/DeleteCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterController_DeleteCluster,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.DeleteClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerPromiseClient.prototype.deleteCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/DeleteCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterController_DeleteCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.GetClusterRequest,
 *   !proto.google.cloud.dataproc.v1beta2.Cluster>}
 */
const methodDescriptor_ClusterController_GetCluster = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.ClusterController/GetCluster',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.GetClusterRequest,
  proto.google.cloud.dataproc.v1beta2.Cluster,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.GetClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.Cluster.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1beta2.GetClusterRequest,
 *   !proto.google.cloud.dataproc.v1beta2.Cluster>}
 */
const methodInfo_ClusterController_GetCluster = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1beta2.Cluster,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.GetClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.Cluster.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.GetClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1beta2.Cluster)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1beta2.Cluster>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerClient.prototype.getCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/GetCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterController_GetCluster,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.GetClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1beta2.Cluster>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerPromiseClient.prototype.getCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/GetCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterController_GetCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.ListClustersRequest,
 *   !proto.google.cloud.dataproc.v1beta2.ListClustersResponse>}
 */
const methodDescriptor_ClusterController_ListClusters = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.ClusterController/ListClusters',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.ListClustersRequest,
  proto.google.cloud.dataproc.v1beta2.ListClustersResponse,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.ListClustersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1beta2.ListClustersRequest,
 *   !proto.google.cloud.dataproc.v1beta2.ListClustersResponse>}
 */
const methodInfo_ClusterController_ListClusters = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1beta2.ListClustersResponse,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.ListClustersResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1beta2.ListClustersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1beta2.ListClustersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerClient.prototype.listClusters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/ListClusters',
      request,
      metadata || {},
      methodDescriptor_ClusterController_ListClusters,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1beta2.ListClustersResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerPromiseClient.prototype.listClusters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/ListClusters',
      request,
      metadata || {},
      methodDescriptor_ClusterController_ListClusters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.DiagnoseClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ClusterController_DiagnoseCluster = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.ClusterController/DiagnoseCluster',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.DiagnoseClusterRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.DiagnoseClusterRequest} request
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
 *   !proto.google.cloud.dataproc.v1beta2.DiagnoseClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ClusterController_DiagnoseCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.DiagnoseClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.DiagnoseClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerClient.prototype.diagnoseCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/DiagnoseCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterController_DiagnoseCluster,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.DiagnoseClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.ClusterControllerPromiseClient.prototype.diagnoseCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.ClusterController/DiagnoseCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterController_DiagnoseCluster);
};


module.exports = proto.google.cloud.dataproc.v1beta2;

