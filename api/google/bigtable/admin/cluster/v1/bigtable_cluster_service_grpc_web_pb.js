/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.admin.cluster.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb = require('../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_data_pb.js')

var google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb = require('../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_service_messages_pb.js')

var google_longrunning_operations_pb = require('../../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.google = {};
proto.google.bigtable = {};
proto.google.bigtable.admin = {};
proto.google.bigtable.admin.cluster = {};
proto.google.bigtable.admin.cluster.v1 = require('./bigtable_cluster_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServiceClient =
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
proto.google.bigtable.admin.cluster.v1.BigtableClusterServicePromiseClient =
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
 *   !proto.google.bigtable.admin.cluster.v1.ListZonesRequest,
 *   !proto.google.bigtable.admin.cluster.v1.ListZonesResponse>}
 */
const methodDescriptor_BigtableClusterService_ListZones = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.cluster.v1.BigtableClusterService/ListZones',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest,
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.ListZonesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.cluster.v1.ListZonesRequest,
 *   !proto.google.bigtable.admin.cluster.v1.ListZonesResponse>}
 */
const methodInfo_BigtableClusterService_ListZones = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.ListZonesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.ListZonesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.cluster.v1.ListZonesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.cluster.v1.ListZonesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServiceClient.prototype.listZones =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/ListZones',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_ListZones,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.ListZonesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.cluster.v1.ListZonesResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServicePromiseClient.prototype.listZones =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/ListZones',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_ListZones);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.cluster.v1.GetClusterRequest,
 *   !proto.google.bigtable.admin.cluster.v1.Cluster>}
 */
const methodDescriptor_BigtableClusterService_GetCluster = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.cluster.v1.BigtableClusterService/GetCluster',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest,
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.GetClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.cluster.v1.GetClusterRequest,
 *   !proto.google.bigtable.admin.cluster.v1.Cluster>}
 */
const methodInfo_BigtableClusterService_GetCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.GetClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.GetClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.cluster.v1.Cluster)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.cluster.v1.Cluster>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServiceClient.prototype.getCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/GetCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_GetCluster,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.GetClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.cluster.v1.Cluster>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServicePromiseClient.prototype.getCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/GetCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_GetCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.cluster.v1.ListClustersRequest,
 *   !proto.google.bigtable.admin.cluster.v1.ListClustersResponse>}
 */
const methodDescriptor_BigtableClusterService_ListClusters = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.cluster.v1.BigtableClusterService/ListClusters',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest,
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.cluster.v1.ListClustersRequest,
 *   !proto.google.bigtable.admin.cluster.v1.ListClustersResponse>}
 */
const methodInfo_BigtableClusterService_ListClusters = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.cluster.v1.ListClustersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.cluster.v1.ListClustersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServiceClient.prototype.listClusters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/ListClusters',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_ListClusters,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.cluster.v1.ListClustersResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServicePromiseClient.prototype.listClusters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/ListClusters',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_ListClusters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.cluster.v1.CreateClusterRequest,
 *   !proto.google.bigtable.admin.cluster.v1.Cluster>}
 */
const methodDescriptor_BigtableClusterService_CreateCluster = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.cluster.v1.BigtableClusterService/CreateCluster',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest,
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.CreateClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.cluster.v1.CreateClusterRequest,
 *   !proto.google.bigtable.admin.cluster.v1.Cluster>}
 */
const methodInfo_BigtableClusterService_CreateCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.CreateClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.CreateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.cluster.v1.Cluster)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.cluster.v1.Cluster>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServiceClient.prototype.createCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/CreateCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_CreateCluster,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.CreateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.cluster.v1.Cluster>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServicePromiseClient.prototype.createCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/CreateCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_CreateCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.cluster.v1.Cluster,
 *   !proto.google.bigtable.admin.cluster.v1.Cluster>}
 */
const methodDescriptor_BigtableClusterService_UpdateCluster = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.cluster.v1.BigtableClusterService/UpdateCluster',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.Cluster} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.cluster.v1.Cluster,
 *   !proto.google.bigtable.admin.cluster.v1.Cluster>}
 */
const methodInfo_BigtableClusterService_UpdateCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.Cluster} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.Cluster} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.cluster.v1.Cluster)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.cluster.v1.Cluster>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServiceClient.prototype.updateCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/UpdateCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_UpdateCluster,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.Cluster} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.cluster.v1.Cluster>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServicePromiseClient.prototype.updateCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/UpdateCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_UpdateCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.cluster.v1.DeleteClusterRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableClusterService_DeleteCluster = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.cluster.v1.BigtableClusterService/DeleteCluster',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.DeleteClusterRequest} request
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
 *   !proto.google.bigtable.admin.cluster.v1.DeleteClusterRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableClusterService_DeleteCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.DeleteClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.DeleteClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServiceClient.prototype.deleteCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/DeleteCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_DeleteCluster,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.DeleteClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServicePromiseClient.prototype.deleteCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/DeleteCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_DeleteCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.cluster.v1.UndeleteClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_BigtableClusterService_UndeleteCluster = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.cluster.v1.BigtableClusterService/UndeleteCluster',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.UndeleteClusterRequest} request
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
 *   !proto.google.bigtable.admin.cluster.v1.UndeleteClusterRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_BigtableClusterService_UndeleteCluster = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.cluster.v1.UndeleteClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.UndeleteClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServiceClient.prototype.undeleteCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/UndeleteCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_UndeleteCluster,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.cluster.v1.UndeleteClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.cluster.v1.BigtableClusterServicePromiseClient.prototype.undeleteCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.cluster.v1.BigtableClusterService/UndeleteCluster',
      request,
      metadata || {},
      methodDescriptor_BigtableClusterService_UndeleteCluster);
};


module.exports = proto.google.bigtable.admin.cluster.v1;

