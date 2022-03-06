/**
 * @fileoverview gRPC-Web generated client stub for google.container.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.google = {};
proto.google.container = {};
proto.google.container.v1 = require('./cluster_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.container.v1.ClusterManagerClient =
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
proto.google.container.v1.ClusterManagerPromiseClient =
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
 *   !proto.google.container.v1.ListClustersRequest,
 *   !proto.google.container.v1.ListClustersResponse>}
 */
const methodDescriptor_ClusterManager_ListClusters = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/ListClusters',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.ListClustersRequest,
  proto.google.container.v1.ListClustersResponse,
  /**
   * @param {!proto.google.container.v1.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.ListClustersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.ListClustersRequest,
 *   !proto.google.container.v1.ListClustersResponse>}
 */
const methodInfo_ClusterManager_ListClusters = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.ListClustersResponse,
  /**
   * @param {!proto.google.container.v1.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.ListClustersResponse.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.ListClustersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.ListClustersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.listClusters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/ListClusters',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_ListClusters,
      callback);
};


/**
 * @param {!proto.google.container.v1.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.ListClustersResponse>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.listClusters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/ListClusters',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_ListClusters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.GetClusterRequest,
 *   !proto.google.container.v1.Cluster>}
 */
const methodDescriptor_ClusterManager_GetCluster = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/GetCluster',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.GetClusterRequest,
  proto.google.container.v1.Cluster,
  /**
   * @param {!proto.google.container.v1.GetClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Cluster.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.GetClusterRequest,
 *   !proto.google.container.v1.Cluster>}
 */
const methodInfo_ClusterManager_GetCluster = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Cluster,
  /**
   * @param {!proto.google.container.v1.GetClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Cluster.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.GetClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Cluster)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Cluster>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.getCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/GetCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_GetCluster,
      callback);
};


/**
 * @param {!proto.google.container.v1.GetClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Cluster>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.getCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/GetCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_GetCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.CreateClusterRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_CreateCluster = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/CreateCluster',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.CreateClusterRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.CreateClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.CreateClusterRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_CreateCluster = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.CreateClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.CreateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.createCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/CreateCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_CreateCluster,
      callback);
};


/**
 * @param {!proto.google.container.v1.CreateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.createCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/CreateCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_CreateCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.UpdateClusterRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_UpdateCluster = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/UpdateCluster',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.UpdateClusterRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.UpdateClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.UpdateClusterRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_UpdateCluster = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.UpdateClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.UpdateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.updateCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/UpdateCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_UpdateCluster,
      callback);
};


/**
 * @param {!proto.google.container.v1.UpdateClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.updateCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/UpdateCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_UpdateCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.UpdateNodePoolRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_UpdateNodePool = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/UpdateNodePool',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.UpdateNodePoolRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.UpdateNodePoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.UpdateNodePoolRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_UpdateNodePool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.UpdateNodePoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.UpdateNodePoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.updateNodePool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/UpdateNodePool',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_UpdateNodePool,
      callback);
};


/**
 * @param {!proto.google.container.v1.UpdateNodePoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.updateNodePool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/UpdateNodePool',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_UpdateNodePool);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetNodePoolAutoscalingRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetNodePoolAutoscaling = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetNodePoolAutoscaling',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetNodePoolAutoscalingRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetNodePoolAutoscalingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetNodePoolAutoscalingRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetNodePoolAutoscaling = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetNodePoolAutoscalingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetNodePoolAutoscalingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setNodePoolAutoscaling =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetNodePoolAutoscaling',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetNodePoolAutoscaling,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetNodePoolAutoscalingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setNodePoolAutoscaling =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetNodePoolAutoscaling',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetNodePoolAutoscaling);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetLoggingServiceRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetLoggingService = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetLoggingService',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetLoggingServiceRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetLoggingServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetLoggingServiceRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetLoggingService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetLoggingServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetLoggingServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setLoggingService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetLoggingService',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetLoggingService,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetLoggingServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setLoggingService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetLoggingService',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetLoggingService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetMonitoringServiceRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetMonitoringService = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetMonitoringService',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetMonitoringServiceRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetMonitoringServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetMonitoringServiceRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetMonitoringService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetMonitoringServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetMonitoringServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setMonitoringService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetMonitoringService',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetMonitoringService,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetMonitoringServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setMonitoringService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetMonitoringService',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetMonitoringService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetAddonsConfigRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetAddonsConfig = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetAddonsConfig',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetAddonsConfigRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetAddonsConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetAddonsConfigRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetAddonsConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetAddonsConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetAddonsConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setAddonsConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetAddonsConfig',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetAddonsConfig,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetAddonsConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setAddonsConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetAddonsConfig',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetAddonsConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetLocationsRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetLocations = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetLocations',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetLocationsRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetLocationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetLocationsRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetLocations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetLocationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetLocationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setLocations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetLocations',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetLocations,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetLocationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setLocations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetLocations',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetLocations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.UpdateMasterRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_UpdateMaster = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/UpdateMaster',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.UpdateMasterRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.UpdateMasterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.UpdateMasterRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_UpdateMaster = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.UpdateMasterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.UpdateMasterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.updateMaster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/UpdateMaster',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_UpdateMaster,
      callback);
};


/**
 * @param {!proto.google.container.v1.UpdateMasterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.updateMaster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/UpdateMaster',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_UpdateMaster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetMasterAuthRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetMasterAuth = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetMasterAuth',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetMasterAuthRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetMasterAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetMasterAuthRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetMasterAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetMasterAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetMasterAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setMasterAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetMasterAuth',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetMasterAuth,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetMasterAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setMasterAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetMasterAuth',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetMasterAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.DeleteClusterRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_DeleteCluster = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/DeleteCluster',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.DeleteClusterRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.DeleteClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.DeleteClusterRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_DeleteCluster = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.DeleteClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.DeleteClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.deleteCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/DeleteCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_DeleteCluster,
      callback);
};


/**
 * @param {!proto.google.container.v1.DeleteClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.deleteCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/DeleteCluster',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_DeleteCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.ListOperationsRequest,
 *   !proto.google.container.v1.ListOperationsResponse>}
 */
const methodDescriptor_ClusterManager_ListOperations = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/ListOperations',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.ListOperationsRequest,
  proto.google.container.v1.ListOperationsResponse,
  /**
   * @param {!proto.google.container.v1.ListOperationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.ListOperationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.ListOperationsRequest,
 *   !proto.google.container.v1.ListOperationsResponse>}
 */
const methodInfo_ClusterManager_ListOperations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.ListOperationsResponse,
  /**
   * @param {!proto.google.container.v1.ListOperationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.ListOperationsResponse.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.ListOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.ListOperationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.ListOperationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.listOperations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/ListOperations',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_ListOperations,
      callback);
};


/**
 * @param {!proto.google.container.v1.ListOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.ListOperationsResponse>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.listOperations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/ListOperations',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_ListOperations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.GetOperationRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_GetOperation = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/GetOperation',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.GetOperationRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.GetOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.GetOperationRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_GetOperation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.GetOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.GetOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.getOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/GetOperation',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_GetOperation,
      callback);
};


/**
 * @param {!proto.google.container.v1.GetOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.getOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/GetOperation',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_GetOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.CancelOperationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ClusterManager_CancelOperation = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/CancelOperation',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.CancelOperationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.container.v1.CancelOperationRequest} request
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
 *   !proto.google.container.v1.CancelOperationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ClusterManager_CancelOperation = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.container.v1.CancelOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.CancelOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.cancelOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/CancelOperation',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_CancelOperation,
      callback);
};


/**
 * @param {!proto.google.container.v1.CancelOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.cancelOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/CancelOperation',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_CancelOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.GetServerConfigRequest,
 *   !proto.google.container.v1.ServerConfig>}
 */
const methodDescriptor_ClusterManager_GetServerConfig = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/GetServerConfig',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.GetServerConfigRequest,
  proto.google.container.v1.ServerConfig,
  /**
   * @param {!proto.google.container.v1.GetServerConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.ServerConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.GetServerConfigRequest,
 *   !proto.google.container.v1.ServerConfig>}
 */
const methodInfo_ClusterManager_GetServerConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.ServerConfig,
  /**
   * @param {!proto.google.container.v1.GetServerConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.ServerConfig.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.GetServerConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.ServerConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.ServerConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.getServerConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/GetServerConfig',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_GetServerConfig,
      callback);
};


/**
 * @param {!proto.google.container.v1.GetServerConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.ServerConfig>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.getServerConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/GetServerConfig',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_GetServerConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.ListNodePoolsRequest,
 *   !proto.google.container.v1.ListNodePoolsResponse>}
 */
const methodDescriptor_ClusterManager_ListNodePools = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/ListNodePools',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.ListNodePoolsRequest,
  proto.google.container.v1.ListNodePoolsResponse,
  /**
   * @param {!proto.google.container.v1.ListNodePoolsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.ListNodePoolsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.ListNodePoolsRequest,
 *   !proto.google.container.v1.ListNodePoolsResponse>}
 */
const methodInfo_ClusterManager_ListNodePools = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.ListNodePoolsResponse,
  /**
   * @param {!proto.google.container.v1.ListNodePoolsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.ListNodePoolsResponse.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.ListNodePoolsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.ListNodePoolsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.ListNodePoolsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.listNodePools =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/ListNodePools',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_ListNodePools,
      callback);
};


/**
 * @param {!proto.google.container.v1.ListNodePoolsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.ListNodePoolsResponse>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.listNodePools =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/ListNodePools',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_ListNodePools);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.GetNodePoolRequest,
 *   !proto.google.container.v1.NodePool>}
 */
const methodDescriptor_ClusterManager_GetNodePool = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/GetNodePool',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.GetNodePoolRequest,
  proto.google.container.v1.NodePool,
  /**
   * @param {!proto.google.container.v1.GetNodePoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.NodePool.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.GetNodePoolRequest,
 *   !proto.google.container.v1.NodePool>}
 */
const methodInfo_ClusterManager_GetNodePool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.NodePool,
  /**
   * @param {!proto.google.container.v1.GetNodePoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.NodePool.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.GetNodePoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.NodePool)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.NodePool>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.getNodePool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/GetNodePool',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_GetNodePool,
      callback);
};


/**
 * @param {!proto.google.container.v1.GetNodePoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.NodePool>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.getNodePool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/GetNodePool',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_GetNodePool);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.CreateNodePoolRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_CreateNodePool = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/CreateNodePool',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.CreateNodePoolRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.CreateNodePoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.CreateNodePoolRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_CreateNodePool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.CreateNodePoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.CreateNodePoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.createNodePool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/CreateNodePool',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_CreateNodePool,
      callback);
};


/**
 * @param {!proto.google.container.v1.CreateNodePoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.createNodePool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/CreateNodePool',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_CreateNodePool);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.DeleteNodePoolRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_DeleteNodePool = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/DeleteNodePool',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.DeleteNodePoolRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.DeleteNodePoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.DeleteNodePoolRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_DeleteNodePool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.DeleteNodePoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.DeleteNodePoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.deleteNodePool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/DeleteNodePool',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_DeleteNodePool,
      callback);
};


/**
 * @param {!proto.google.container.v1.DeleteNodePoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.deleteNodePool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/DeleteNodePool',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_DeleteNodePool);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.RollbackNodePoolUpgradeRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_RollbackNodePoolUpgrade = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/RollbackNodePoolUpgrade',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.RollbackNodePoolUpgradeRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.RollbackNodePoolUpgradeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.RollbackNodePoolUpgradeRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_RollbackNodePoolUpgrade = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.RollbackNodePoolUpgradeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.RollbackNodePoolUpgradeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.rollbackNodePoolUpgrade =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/RollbackNodePoolUpgrade',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_RollbackNodePoolUpgrade,
      callback);
};


/**
 * @param {!proto.google.container.v1.RollbackNodePoolUpgradeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.rollbackNodePoolUpgrade =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/RollbackNodePoolUpgrade',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_RollbackNodePoolUpgrade);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetNodePoolManagementRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetNodePoolManagement = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetNodePoolManagement',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetNodePoolManagementRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetNodePoolManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetNodePoolManagementRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetNodePoolManagement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetNodePoolManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetNodePoolManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setNodePoolManagement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetNodePoolManagement',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetNodePoolManagement,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetNodePoolManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setNodePoolManagement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetNodePoolManagement',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetNodePoolManagement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetLabelsRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetLabels = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetLabels',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetLabelsRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetLabelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetLabelsRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetLabels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetLabelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setLabels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetLabels',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetLabels,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setLabels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetLabels',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetLabels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetLegacyAbacRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetLegacyAbac = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetLegacyAbac',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetLegacyAbacRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetLegacyAbacRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetLegacyAbacRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetLegacyAbac = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetLegacyAbacRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetLegacyAbacRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setLegacyAbac =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetLegacyAbac',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetLegacyAbac,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetLegacyAbacRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setLegacyAbac =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetLegacyAbac',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetLegacyAbac);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.StartIPRotationRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_StartIPRotation = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/StartIPRotation',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.StartIPRotationRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.StartIPRotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.StartIPRotationRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_StartIPRotation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.StartIPRotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.StartIPRotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.startIPRotation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/StartIPRotation',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_StartIPRotation,
      callback);
};


/**
 * @param {!proto.google.container.v1.StartIPRotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.startIPRotation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/StartIPRotation',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_StartIPRotation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.CompleteIPRotationRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_CompleteIPRotation = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/CompleteIPRotation',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.CompleteIPRotationRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.CompleteIPRotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.CompleteIPRotationRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_CompleteIPRotation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.CompleteIPRotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.CompleteIPRotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.completeIPRotation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/CompleteIPRotation',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_CompleteIPRotation,
      callback);
};


/**
 * @param {!proto.google.container.v1.CompleteIPRotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.completeIPRotation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/CompleteIPRotation',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_CompleteIPRotation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetNodePoolSizeRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetNodePoolSize = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetNodePoolSize',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetNodePoolSizeRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetNodePoolSizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetNodePoolSizeRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetNodePoolSize = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetNodePoolSizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetNodePoolSizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setNodePoolSize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetNodePoolSize',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetNodePoolSize,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetNodePoolSizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setNodePoolSize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetNodePoolSize',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetNodePoolSize);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetNetworkPolicyRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetNetworkPolicy = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetNetworkPolicy',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetNetworkPolicyRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetNetworkPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetNetworkPolicyRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetNetworkPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetNetworkPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetNetworkPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setNetworkPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetNetworkPolicy',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetNetworkPolicy,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetNetworkPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setNetworkPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetNetworkPolicy',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetNetworkPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.container.v1.SetMaintenancePolicyRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodDescriptor_ClusterManager_SetMaintenancePolicy = new grpc.web.MethodDescriptor(
  '/google.container.v1.ClusterManager/SetMaintenancePolicy',
  grpc.web.MethodType.UNARY,
  proto.google.container.v1.SetMaintenancePolicyRequest,
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetMaintenancePolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.container.v1.SetMaintenancePolicyRequest,
 *   !proto.google.container.v1.Operation>}
 */
const methodInfo_ClusterManager_SetMaintenancePolicy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.container.v1.Operation,
  /**
   * @param {!proto.google.container.v1.SetMaintenancePolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.container.v1.Operation.deserializeBinary
);


/**
 * @param {!proto.google.container.v1.SetMaintenancePolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.container.v1.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.container.v1.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.container.v1.ClusterManagerClient.prototype.setMaintenancePolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetMaintenancePolicy',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetMaintenancePolicy,
      callback);
};


/**
 * @param {!proto.google.container.v1.SetMaintenancePolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.container.v1.Operation>}
 *     Promise that resolves to the response
 */
proto.google.container.v1.ClusterManagerPromiseClient.prototype.setMaintenancePolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.container.v1.ClusterManager/SetMaintenancePolicy',
      request,
      metadata || {},
      methodDescriptor_ClusterManager_SetMaintenancePolicy);
};


module.exports = proto.google.container.v1;

