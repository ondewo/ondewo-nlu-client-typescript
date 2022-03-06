/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.containeranalysis.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js')

var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.containeranalysis = {};
proto.google.devtools.containeranalysis.v1beta1 = require('./containeranalysis_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client =
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
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1PromiseClient =
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
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_ContainerAnalysisV1Beta1_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/SetIamPolicy',
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
const methodInfo_ContainerAnalysisV1Beta1_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_SetIamPolicy,
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
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1PromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_ContainerAnalysisV1Beta1_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/GetIamPolicy',
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
const methodInfo_ContainerAnalysisV1Beta1_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_GetIamPolicy,
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
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1PromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_ContainerAnalysisV1Beta1_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/TestIamPermissions',
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
const methodInfo_ContainerAnalysisV1Beta1_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_TestIamPermissions,
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
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1PromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_TestIamPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1beta1.GetScanConfigRequest,
 *   !proto.google.devtools.containeranalysis.v1beta1.ScanConfig>}
 */
const methodDescriptor_ContainerAnalysisV1Beta1_GetScanConfig = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/GetScanConfig',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1beta1.GetScanConfigRequest,
  proto.google.devtools.containeranalysis.v1beta1.ScanConfig,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1beta1.GetScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1beta1.ScanConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1beta1.GetScanConfigRequest,
 *   !proto.google.devtools.containeranalysis.v1beta1.ScanConfig>}
 */
const methodInfo_ContainerAnalysisV1Beta1_GetScanConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1beta1.ScanConfig,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1beta1.GetScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1beta1.ScanConfig.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1beta1.GetScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1beta1.ScanConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1beta1.ScanConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client.prototype.getScanConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/GetScanConfig',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_GetScanConfig,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1beta1.GetScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1beta1.ScanConfig>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1PromiseClient.prototype.getScanConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/GetScanConfig',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_GetScanConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsRequest,
 *   !proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse>}
 */
const methodDescriptor_ContainerAnalysisV1Beta1_ListScanConfigs = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/ListScanConfigs',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsRequest,
  proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsRequest,
 *   !proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse>}
 */
const methodInfo_ContainerAnalysisV1Beta1_ListScanConfigs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client.prototype.listScanConfigs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/ListScanConfigs',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_ListScanConfigs,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1PromiseClient.prototype.listScanConfigs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/ListScanConfigs',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_ListScanConfigs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1beta1.UpdateScanConfigRequest,
 *   !proto.google.devtools.containeranalysis.v1beta1.ScanConfig>}
 */
const methodDescriptor_ContainerAnalysisV1Beta1_UpdateScanConfig = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/UpdateScanConfig',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1beta1.UpdateScanConfigRequest,
  proto.google.devtools.containeranalysis.v1beta1.ScanConfig,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1beta1.UpdateScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1beta1.ScanConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1beta1.UpdateScanConfigRequest,
 *   !proto.google.devtools.containeranalysis.v1beta1.ScanConfig>}
 */
const methodInfo_ContainerAnalysisV1Beta1_UpdateScanConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1beta1.ScanConfig,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1beta1.UpdateScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1beta1.ScanConfig.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1beta1.UpdateScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1beta1.ScanConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1beta1.ScanConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client.prototype.updateScanConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/UpdateScanConfig',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_UpdateScanConfig,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1beta1.UpdateScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1beta1.ScanConfig>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1PromiseClient.prototype.updateScanConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1/UpdateScanConfig',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysisV1Beta1_UpdateScanConfig);
};


module.exports = proto.google.devtools.containeranalysis.v1beta1;

