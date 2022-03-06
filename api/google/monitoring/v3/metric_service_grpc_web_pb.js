/**
 * @fileoverview gRPC-Web generated client stub for google.monitoring.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_api_metric_pb = require('../../../google/api/metric_pb.js')

var google_api_monitored_resource_pb = require('../../../google/api/monitored_resource_pb.js')

var google_monitoring_v3_common_pb = require('../../../google/monitoring/v3/common_pb.js')

var google_monitoring_v3_metric_pb = require('../../../google/monitoring/v3/metric_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_rpc_status_pb = require('../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.monitoring = {};
proto.google.monitoring.v3 = require('./metric_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.monitoring.v3.MetricServiceClient =
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
proto.google.monitoring.v3.MetricServicePromiseClient =
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
 *   !proto.google.monitoring.v3.ListMonitoredResourceDescriptorsRequest,
 *   !proto.google.monitoring.v3.ListMonitoredResourceDescriptorsResponse>}
 */
const methodDescriptor_MetricService_ListMonitoredResourceDescriptors = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.MetricService/ListMonitoredResourceDescriptors',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.ListMonitoredResourceDescriptorsRequest,
  proto.google.monitoring.v3.ListMonitoredResourceDescriptorsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListMonitoredResourceDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListMonitoredResourceDescriptorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.ListMonitoredResourceDescriptorsRequest,
 *   !proto.google.monitoring.v3.ListMonitoredResourceDescriptorsResponse>}
 */
const methodInfo_MetricService_ListMonitoredResourceDescriptors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.ListMonitoredResourceDescriptorsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListMonitoredResourceDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListMonitoredResourceDescriptorsResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.ListMonitoredResourceDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.ListMonitoredResourceDescriptorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.ListMonitoredResourceDescriptorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.MetricServiceClient.prototype.listMonitoredResourceDescriptors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/ListMonitoredResourceDescriptors',
      request,
      metadata || {},
      methodDescriptor_MetricService_ListMonitoredResourceDescriptors,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.ListMonitoredResourceDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.ListMonitoredResourceDescriptorsResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.MetricServicePromiseClient.prototype.listMonitoredResourceDescriptors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/ListMonitoredResourceDescriptors',
      request,
      metadata || {},
      methodDescriptor_MetricService_ListMonitoredResourceDescriptors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.GetMonitoredResourceDescriptorRequest,
 *   !proto.google.api.MonitoredResourceDescriptor>}
 */
const methodDescriptor_MetricService_GetMonitoredResourceDescriptor = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.MetricService/GetMonitoredResourceDescriptor',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.GetMonitoredResourceDescriptorRequest,
  google_api_monitored_resource_pb.MonitoredResourceDescriptor,
  /**
   * @param {!proto.google.monitoring.v3.GetMonitoredResourceDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_monitored_resource_pb.MonitoredResourceDescriptor.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.GetMonitoredResourceDescriptorRequest,
 *   !proto.google.api.MonitoredResourceDescriptor>}
 */
const methodInfo_MetricService_GetMonitoredResourceDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  google_api_monitored_resource_pb.MonitoredResourceDescriptor,
  /**
   * @param {!proto.google.monitoring.v3.GetMonitoredResourceDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_monitored_resource_pb.MonitoredResourceDescriptor.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.GetMonitoredResourceDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.api.MonitoredResourceDescriptor)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.api.MonitoredResourceDescriptor>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.MetricServiceClient.prototype.getMonitoredResourceDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/GetMonitoredResourceDescriptor',
      request,
      metadata || {},
      methodDescriptor_MetricService_GetMonitoredResourceDescriptor,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.GetMonitoredResourceDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.api.MonitoredResourceDescriptor>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.MetricServicePromiseClient.prototype.getMonitoredResourceDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/GetMonitoredResourceDescriptor',
      request,
      metadata || {},
      methodDescriptor_MetricService_GetMonitoredResourceDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.ListMetricDescriptorsRequest,
 *   !proto.google.monitoring.v3.ListMetricDescriptorsResponse>}
 */
const methodDescriptor_MetricService_ListMetricDescriptors = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.MetricService/ListMetricDescriptors',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.ListMetricDescriptorsRequest,
  proto.google.monitoring.v3.ListMetricDescriptorsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListMetricDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListMetricDescriptorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.ListMetricDescriptorsRequest,
 *   !proto.google.monitoring.v3.ListMetricDescriptorsResponse>}
 */
const methodInfo_MetricService_ListMetricDescriptors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.ListMetricDescriptorsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListMetricDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListMetricDescriptorsResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.ListMetricDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.ListMetricDescriptorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.ListMetricDescriptorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.MetricServiceClient.prototype.listMetricDescriptors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/ListMetricDescriptors',
      request,
      metadata || {},
      methodDescriptor_MetricService_ListMetricDescriptors,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.ListMetricDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.ListMetricDescriptorsResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.MetricServicePromiseClient.prototype.listMetricDescriptors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/ListMetricDescriptors',
      request,
      metadata || {},
      methodDescriptor_MetricService_ListMetricDescriptors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.GetMetricDescriptorRequest,
 *   !proto.google.api.MetricDescriptor>}
 */
const methodDescriptor_MetricService_GetMetricDescriptor = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.MetricService/GetMetricDescriptor',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.GetMetricDescriptorRequest,
  google_api_metric_pb.MetricDescriptor,
  /**
   * @param {!proto.google.monitoring.v3.GetMetricDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_metric_pb.MetricDescriptor.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.GetMetricDescriptorRequest,
 *   !proto.google.api.MetricDescriptor>}
 */
const methodInfo_MetricService_GetMetricDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  google_api_metric_pb.MetricDescriptor,
  /**
   * @param {!proto.google.monitoring.v3.GetMetricDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_metric_pb.MetricDescriptor.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.GetMetricDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.api.MetricDescriptor)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.api.MetricDescriptor>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.MetricServiceClient.prototype.getMetricDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/GetMetricDescriptor',
      request,
      metadata || {},
      methodDescriptor_MetricService_GetMetricDescriptor,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.GetMetricDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.api.MetricDescriptor>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.MetricServicePromiseClient.prototype.getMetricDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/GetMetricDescriptor',
      request,
      metadata || {},
      methodDescriptor_MetricService_GetMetricDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.CreateMetricDescriptorRequest,
 *   !proto.google.api.MetricDescriptor>}
 */
const methodDescriptor_MetricService_CreateMetricDescriptor = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.MetricService/CreateMetricDescriptor',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.CreateMetricDescriptorRequest,
  google_api_metric_pb.MetricDescriptor,
  /**
   * @param {!proto.google.monitoring.v3.CreateMetricDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_metric_pb.MetricDescriptor.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.CreateMetricDescriptorRequest,
 *   !proto.google.api.MetricDescriptor>}
 */
const methodInfo_MetricService_CreateMetricDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  google_api_metric_pb.MetricDescriptor,
  /**
   * @param {!proto.google.monitoring.v3.CreateMetricDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_metric_pb.MetricDescriptor.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.CreateMetricDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.api.MetricDescriptor)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.api.MetricDescriptor>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.MetricServiceClient.prototype.createMetricDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/CreateMetricDescriptor',
      request,
      metadata || {},
      methodDescriptor_MetricService_CreateMetricDescriptor,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.CreateMetricDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.api.MetricDescriptor>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.MetricServicePromiseClient.prototype.createMetricDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/CreateMetricDescriptor',
      request,
      metadata || {},
      methodDescriptor_MetricService_CreateMetricDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.DeleteMetricDescriptorRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_MetricService_DeleteMetricDescriptor = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.MetricService/DeleteMetricDescriptor',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.DeleteMetricDescriptorRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.DeleteMetricDescriptorRequest} request
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
 *   !proto.google.monitoring.v3.DeleteMetricDescriptorRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_MetricService_DeleteMetricDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.DeleteMetricDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.DeleteMetricDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.MetricServiceClient.prototype.deleteMetricDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/DeleteMetricDescriptor',
      request,
      metadata || {},
      methodDescriptor_MetricService_DeleteMetricDescriptor,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.DeleteMetricDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.MetricServicePromiseClient.prototype.deleteMetricDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/DeleteMetricDescriptor',
      request,
      metadata || {},
      methodDescriptor_MetricService_DeleteMetricDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.ListTimeSeriesRequest,
 *   !proto.google.monitoring.v3.ListTimeSeriesResponse>}
 */
const methodDescriptor_MetricService_ListTimeSeries = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.MetricService/ListTimeSeries',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.ListTimeSeriesRequest,
  proto.google.monitoring.v3.ListTimeSeriesResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListTimeSeriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListTimeSeriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.ListTimeSeriesRequest,
 *   !proto.google.monitoring.v3.ListTimeSeriesResponse>}
 */
const methodInfo_MetricService_ListTimeSeries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.ListTimeSeriesResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListTimeSeriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListTimeSeriesResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.ListTimeSeriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.ListTimeSeriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.ListTimeSeriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.MetricServiceClient.prototype.listTimeSeries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/ListTimeSeries',
      request,
      metadata || {},
      methodDescriptor_MetricService_ListTimeSeries,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.ListTimeSeriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.ListTimeSeriesResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.MetricServicePromiseClient.prototype.listTimeSeries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/ListTimeSeries',
      request,
      metadata || {},
      methodDescriptor_MetricService_ListTimeSeries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.CreateTimeSeriesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_MetricService_CreateTimeSeries = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.MetricService/CreateTimeSeries',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.CreateTimeSeriesRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.CreateTimeSeriesRequest} request
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
 *   !proto.google.monitoring.v3.CreateTimeSeriesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_MetricService_CreateTimeSeries = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.CreateTimeSeriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.CreateTimeSeriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.MetricServiceClient.prototype.createTimeSeries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/CreateTimeSeries',
      request,
      metadata || {},
      methodDescriptor_MetricService_CreateTimeSeries,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.CreateTimeSeriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.MetricServicePromiseClient.prototype.createTimeSeries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.MetricService/CreateTimeSeries',
      request,
      metadata || {},
      methodDescriptor_MetricService_CreateTimeSeries);
};


module.exports = proto.google.monitoring.v3;

