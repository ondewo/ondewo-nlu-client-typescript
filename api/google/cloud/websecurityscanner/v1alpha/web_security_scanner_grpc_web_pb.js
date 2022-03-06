/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.websecurityscanner.v1alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_websecurityscanner_v1alpha_crawled_url_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/crawled_url_pb.js')

var google_cloud_websecurityscanner_v1alpha_finding_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/finding_pb.js')

var google_cloud_websecurityscanner_v1alpha_finding_type_stats_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/finding_type_stats_pb.js')

var google_cloud_websecurityscanner_v1alpha_scan_config_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/scan_config_pb.js')

var google_cloud_websecurityscanner_v1alpha_scan_run_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/scan_run_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.websecurityscanner = {};
proto.google.cloud.websecurityscanner.v1alpha = require('./web_security_scanner_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient =
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
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient =
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
 *   !proto.google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>}
 */
const methodDescriptor_WebSecurityScanner_CreateScanConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/CreateScanConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest,
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>}
 */
const methodInfo_WebSecurityScanner_CreateScanConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ScanConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.createScanConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/CreateScanConfig',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_CreateScanConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.createScanConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/CreateScanConfig',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_CreateScanConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_WebSecurityScanner_DeleteScanConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/DeleteScanConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest} request
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
 *   !proto.google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_WebSecurityScanner_DeleteScanConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.deleteScanConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/DeleteScanConfig',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_DeleteScanConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.deleteScanConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/DeleteScanConfig',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_DeleteScanConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>}
 */
const methodDescriptor_WebSecurityScanner_GetScanConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetScanConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest,
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>}
 */
const methodInfo_WebSecurityScanner_GetScanConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ScanConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.getScanConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetScanConfig',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_GetScanConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.getScanConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetScanConfig',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_GetScanConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse>}
 */
const methodDescriptor_WebSecurityScanner_ListScanConfigs = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListScanConfigs',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest,
  proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse>}
 */
const methodInfo_WebSecurityScanner_ListScanConfigs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.listScanConfigs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListScanConfigs',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_ListScanConfigs,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.listScanConfigs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListScanConfigs',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_ListScanConfigs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>}
 */
const methodDescriptor_WebSecurityScanner_UpdateScanConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/UpdateScanConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest,
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>}
 */
const methodInfo_WebSecurityScanner_UpdateScanConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ScanConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.updateScanConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/UpdateScanConfig',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_UpdateScanConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ScanConfig>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.updateScanConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/UpdateScanConfig',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_UpdateScanConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.StartScanRunRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanRun>}
 */
const methodDescriptor_WebSecurityScanner_StartScanRun = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/StartScanRun',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.StartScanRunRequest,
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.StartScanRunRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.StartScanRunRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanRun>}
 */
const methodInfo_WebSecurityScanner_StartScanRun = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.StartScanRunRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.StartScanRunRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ScanRun)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ScanRun>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.startScanRun =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/StartScanRun',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_StartScanRun,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.StartScanRunRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ScanRun>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.startScanRun =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/StartScanRun',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_StartScanRun);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.GetScanRunRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanRun>}
 */
const methodDescriptor_WebSecurityScanner_GetScanRun = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetScanRun',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.GetScanRunRequest,
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetScanRunRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.GetScanRunRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanRun>}
 */
const methodInfo_WebSecurityScanner_GetScanRun = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetScanRunRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetScanRunRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ScanRun)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ScanRun>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.getScanRun =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetScanRun',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_GetScanRun,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetScanRunRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ScanRun>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.getScanRun =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetScanRun',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_GetScanRun);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse>}
 */
const methodDescriptor_WebSecurityScanner_ListScanRuns = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListScanRuns',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest,
  proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse>}
 */
const methodInfo_WebSecurityScanner_ListScanRuns = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.listScanRuns =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListScanRuns',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_ListScanRuns,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.listScanRuns =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListScanRuns',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_ListScanRuns);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.StopScanRunRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanRun>}
 */
const methodDescriptor_WebSecurityScanner_StopScanRun = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/StopScanRun',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.StopScanRunRequest,
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.StopScanRunRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.StopScanRunRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ScanRun>}
 */
const methodInfo_WebSecurityScanner_StopScanRun = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.StopScanRunRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.StopScanRunRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ScanRun)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ScanRun>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.stopScanRun =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/StopScanRun',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_StopScanRun,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.StopScanRunRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ScanRun>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.stopScanRun =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/StopScanRun',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_StopScanRun);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse>}
 */
const methodDescriptor_WebSecurityScanner_ListCrawledUrls = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListCrawledUrls',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest,
  proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse>}
 */
const methodInfo_WebSecurityScanner_ListCrawledUrls = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.listCrawledUrls =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListCrawledUrls',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_ListCrawledUrls,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.listCrawledUrls =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListCrawledUrls',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_ListCrawledUrls);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.GetFindingRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.Finding>}
 */
const methodDescriptor_WebSecurityScanner_GetFinding = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetFinding',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.GetFindingRequest,
  google_cloud_websecurityscanner_v1alpha_finding_pb.Finding,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetFindingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.GetFindingRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.Finding>}
 */
const methodInfo_WebSecurityScanner_GetFinding = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_websecurityscanner_v1alpha_finding_pb.Finding,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetFindingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetFindingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.Finding)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.Finding>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.getFinding =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetFinding',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_GetFinding,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.GetFindingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.Finding>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.getFinding =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetFinding',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_GetFinding);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListFindingsRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListFindingsResponse>}
 */
const methodDescriptor_WebSecurityScanner_ListFindings = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListFindings',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.ListFindingsRequest,
  proto.google.cloud.websecurityscanner.v1alpha.ListFindingsResponse,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListFindingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.websecurityscanner.v1alpha.ListFindingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListFindingsRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListFindingsResponse>}
 */
const methodInfo_WebSecurityScanner_ListFindings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.websecurityscanner.v1alpha.ListFindingsResponse,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListFindingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.websecurityscanner.v1alpha.ListFindingsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListFindingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ListFindingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ListFindingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.listFindings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListFindings',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_ListFindings,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListFindingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ListFindingsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.listFindings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListFindings',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_ListFindings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse>}
 */
const methodDescriptor_WebSecurityScanner_ListFindingTypeStats = new grpc.web.MethodDescriptor(
  '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListFindingTypeStats',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest,
  proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest,
 *   !proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse>}
 */
const methodInfo_WebSecurityScanner_ListFindingTypeStats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse,
  /**
   * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerClient.prototype.listFindingTypeStats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListFindingTypeStats',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_ListFindingTypeStats,
      callback);
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.websecurityscanner.v1alpha.WebSecurityScannerPromiseClient.prototype.listFindingTypeStats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListFindingTypeStats',
      request,
      metadata || {},
      methodDescriptor_WebSecurityScanner_ListFindingTypeStats);
};


module.exports = proto.google.cloud.websecurityscanner.v1alpha;

