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

var google_monitoring_v3_alert_pb = require('../../../google/monitoring/v3/alert_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.monitoring = {};
proto.google.monitoring.v3 = require('./alert_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.monitoring.v3.AlertPolicyServiceClient =
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
proto.google.monitoring.v3.AlertPolicyServicePromiseClient =
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
 *   !proto.google.monitoring.v3.ListAlertPoliciesRequest,
 *   !proto.google.monitoring.v3.ListAlertPoliciesResponse>}
 */
const methodDescriptor_AlertPolicyService_ListAlertPolicies = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.AlertPolicyService/ListAlertPolicies',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.ListAlertPoliciesRequest,
  proto.google.monitoring.v3.ListAlertPoliciesResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListAlertPoliciesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListAlertPoliciesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.ListAlertPoliciesRequest,
 *   !proto.google.monitoring.v3.ListAlertPoliciesResponse>}
 */
const methodInfo_AlertPolicyService_ListAlertPolicies = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.ListAlertPoliciesResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListAlertPoliciesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListAlertPoliciesResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.ListAlertPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.ListAlertPoliciesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.ListAlertPoliciesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.AlertPolicyServiceClient.prototype.listAlertPolicies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.AlertPolicyService/ListAlertPolicies',
      request,
      metadata || {},
      methodDescriptor_AlertPolicyService_ListAlertPolicies,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.ListAlertPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.ListAlertPoliciesResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.AlertPolicyServicePromiseClient.prototype.listAlertPolicies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.AlertPolicyService/ListAlertPolicies',
      request,
      metadata || {},
      methodDescriptor_AlertPolicyService_ListAlertPolicies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.GetAlertPolicyRequest,
 *   !proto.google.monitoring.v3.AlertPolicy>}
 */
const methodDescriptor_AlertPolicyService_GetAlertPolicy = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.AlertPolicyService/GetAlertPolicy',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.GetAlertPolicyRequest,
  google_monitoring_v3_alert_pb.AlertPolicy,
  /**
   * @param {!proto.google.monitoring.v3.GetAlertPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_alert_pb.AlertPolicy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.GetAlertPolicyRequest,
 *   !proto.google.monitoring.v3.AlertPolicy>}
 */
const methodInfo_AlertPolicyService_GetAlertPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_alert_pb.AlertPolicy,
  /**
   * @param {!proto.google.monitoring.v3.GetAlertPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_alert_pb.AlertPolicy.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.GetAlertPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.AlertPolicy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.AlertPolicy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.AlertPolicyServiceClient.prototype.getAlertPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.AlertPolicyService/GetAlertPolicy',
      request,
      metadata || {},
      methodDescriptor_AlertPolicyService_GetAlertPolicy,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.GetAlertPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.AlertPolicy>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.AlertPolicyServicePromiseClient.prototype.getAlertPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.AlertPolicyService/GetAlertPolicy',
      request,
      metadata || {},
      methodDescriptor_AlertPolicyService_GetAlertPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.CreateAlertPolicyRequest,
 *   !proto.google.monitoring.v3.AlertPolicy>}
 */
const methodDescriptor_AlertPolicyService_CreateAlertPolicy = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.AlertPolicyService/CreateAlertPolicy',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.CreateAlertPolicyRequest,
  google_monitoring_v3_alert_pb.AlertPolicy,
  /**
   * @param {!proto.google.monitoring.v3.CreateAlertPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_alert_pb.AlertPolicy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.CreateAlertPolicyRequest,
 *   !proto.google.monitoring.v3.AlertPolicy>}
 */
const methodInfo_AlertPolicyService_CreateAlertPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_alert_pb.AlertPolicy,
  /**
   * @param {!proto.google.monitoring.v3.CreateAlertPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_alert_pb.AlertPolicy.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.CreateAlertPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.AlertPolicy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.AlertPolicy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.AlertPolicyServiceClient.prototype.createAlertPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.AlertPolicyService/CreateAlertPolicy',
      request,
      metadata || {},
      methodDescriptor_AlertPolicyService_CreateAlertPolicy,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.CreateAlertPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.AlertPolicy>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.AlertPolicyServicePromiseClient.prototype.createAlertPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.AlertPolicyService/CreateAlertPolicy',
      request,
      metadata || {},
      methodDescriptor_AlertPolicyService_CreateAlertPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.DeleteAlertPolicyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AlertPolicyService_DeleteAlertPolicy = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.AlertPolicyService/DeleteAlertPolicy',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.DeleteAlertPolicyRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.DeleteAlertPolicyRequest} request
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
 *   !proto.google.monitoring.v3.DeleteAlertPolicyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AlertPolicyService_DeleteAlertPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.DeleteAlertPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.DeleteAlertPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.AlertPolicyServiceClient.prototype.deleteAlertPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.AlertPolicyService/DeleteAlertPolicy',
      request,
      metadata || {},
      methodDescriptor_AlertPolicyService_DeleteAlertPolicy,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.DeleteAlertPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.AlertPolicyServicePromiseClient.prototype.deleteAlertPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.AlertPolicyService/DeleteAlertPolicy',
      request,
      metadata || {},
      methodDescriptor_AlertPolicyService_DeleteAlertPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.UpdateAlertPolicyRequest,
 *   !proto.google.monitoring.v3.AlertPolicy>}
 */
const methodDescriptor_AlertPolicyService_UpdateAlertPolicy = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.AlertPolicyService/UpdateAlertPolicy',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.UpdateAlertPolicyRequest,
  google_monitoring_v3_alert_pb.AlertPolicy,
  /**
   * @param {!proto.google.monitoring.v3.UpdateAlertPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_alert_pb.AlertPolicy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.UpdateAlertPolicyRequest,
 *   !proto.google.monitoring.v3.AlertPolicy>}
 */
const methodInfo_AlertPolicyService_UpdateAlertPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_alert_pb.AlertPolicy,
  /**
   * @param {!proto.google.monitoring.v3.UpdateAlertPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_alert_pb.AlertPolicy.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.UpdateAlertPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.AlertPolicy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.AlertPolicy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.AlertPolicyServiceClient.prototype.updateAlertPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.AlertPolicyService/UpdateAlertPolicy',
      request,
      metadata || {},
      methodDescriptor_AlertPolicyService_UpdateAlertPolicy,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.UpdateAlertPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.AlertPolicy>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.AlertPolicyServicePromiseClient.prototype.updateAlertPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.AlertPolicyService/UpdateAlertPolicy',
      request,
      metadata || {},
      methodDescriptor_AlertPolicyService_UpdateAlertPolicy);
};


module.exports = proto.google.monitoring.v3;

