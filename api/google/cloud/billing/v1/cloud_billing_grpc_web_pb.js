/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.billing.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.billing = {};
proto.google.cloud.billing.v1 = require('./cloud_billing_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.billing.v1.CloudBillingClient =
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
proto.google.cloud.billing.v1.CloudBillingPromiseClient =
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
 *   !proto.google.cloud.billing.v1.GetBillingAccountRequest,
 *   !proto.google.cloud.billing.v1.BillingAccount>}
 */
const methodDescriptor_CloudBilling_GetBillingAccount = new grpc.web.MethodDescriptor(
  '/google.cloud.billing.v1.CloudBilling/GetBillingAccount',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.billing.v1.GetBillingAccountRequest,
  proto.google.cloud.billing.v1.BillingAccount,
  /**
   * @param {!proto.google.cloud.billing.v1.GetBillingAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.billing.v1.BillingAccount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.billing.v1.GetBillingAccountRequest,
 *   !proto.google.cloud.billing.v1.BillingAccount>}
 */
const methodInfo_CloudBilling_GetBillingAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.billing.v1.BillingAccount,
  /**
   * @param {!proto.google.cloud.billing.v1.GetBillingAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.billing.v1.BillingAccount.deserializeBinary
);


/**
 * @param {!proto.google.cloud.billing.v1.GetBillingAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.billing.v1.BillingAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.billing.v1.BillingAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.billing.v1.CloudBillingClient.prototype.getBillingAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.billing.v1.CloudBilling/GetBillingAccount',
      request,
      metadata || {},
      methodDescriptor_CloudBilling_GetBillingAccount,
      callback);
};


/**
 * @param {!proto.google.cloud.billing.v1.GetBillingAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.billing.v1.BillingAccount>}
 *     Promise that resolves to the response
 */
proto.google.cloud.billing.v1.CloudBillingPromiseClient.prototype.getBillingAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.billing.v1.CloudBilling/GetBillingAccount',
      request,
      metadata || {},
      methodDescriptor_CloudBilling_GetBillingAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.billing.v1.ListBillingAccountsRequest,
 *   !proto.google.cloud.billing.v1.ListBillingAccountsResponse>}
 */
const methodDescriptor_CloudBilling_ListBillingAccounts = new grpc.web.MethodDescriptor(
  '/google.cloud.billing.v1.CloudBilling/ListBillingAccounts',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.billing.v1.ListBillingAccountsRequest,
  proto.google.cloud.billing.v1.ListBillingAccountsResponse,
  /**
   * @param {!proto.google.cloud.billing.v1.ListBillingAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.billing.v1.ListBillingAccountsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.billing.v1.ListBillingAccountsRequest,
 *   !proto.google.cloud.billing.v1.ListBillingAccountsResponse>}
 */
const methodInfo_CloudBilling_ListBillingAccounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.billing.v1.ListBillingAccountsResponse,
  /**
   * @param {!proto.google.cloud.billing.v1.ListBillingAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.billing.v1.ListBillingAccountsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.billing.v1.ListBillingAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.billing.v1.ListBillingAccountsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.billing.v1.ListBillingAccountsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.billing.v1.CloudBillingClient.prototype.listBillingAccounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.billing.v1.CloudBilling/ListBillingAccounts',
      request,
      metadata || {},
      methodDescriptor_CloudBilling_ListBillingAccounts,
      callback);
};


/**
 * @param {!proto.google.cloud.billing.v1.ListBillingAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.billing.v1.ListBillingAccountsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.billing.v1.CloudBillingPromiseClient.prototype.listBillingAccounts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.billing.v1.CloudBilling/ListBillingAccounts',
      request,
      metadata || {},
      methodDescriptor_CloudBilling_ListBillingAccounts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.billing.v1.ListProjectBillingInfoRequest,
 *   !proto.google.cloud.billing.v1.ListProjectBillingInfoResponse>}
 */
const methodDescriptor_CloudBilling_ListProjectBillingInfo = new grpc.web.MethodDescriptor(
  '/google.cloud.billing.v1.CloudBilling/ListProjectBillingInfo',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.billing.v1.ListProjectBillingInfoRequest,
  proto.google.cloud.billing.v1.ListProjectBillingInfoResponse,
  /**
   * @param {!proto.google.cloud.billing.v1.ListProjectBillingInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.billing.v1.ListProjectBillingInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.billing.v1.ListProjectBillingInfoRequest,
 *   !proto.google.cloud.billing.v1.ListProjectBillingInfoResponse>}
 */
const methodInfo_CloudBilling_ListProjectBillingInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.billing.v1.ListProjectBillingInfoResponse,
  /**
   * @param {!proto.google.cloud.billing.v1.ListProjectBillingInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.billing.v1.ListProjectBillingInfoResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.billing.v1.ListProjectBillingInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.billing.v1.ListProjectBillingInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.billing.v1.ListProjectBillingInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.billing.v1.CloudBillingClient.prototype.listProjectBillingInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.billing.v1.CloudBilling/ListProjectBillingInfo',
      request,
      metadata || {},
      methodDescriptor_CloudBilling_ListProjectBillingInfo,
      callback);
};


/**
 * @param {!proto.google.cloud.billing.v1.ListProjectBillingInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.billing.v1.ListProjectBillingInfoResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.billing.v1.CloudBillingPromiseClient.prototype.listProjectBillingInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.billing.v1.CloudBilling/ListProjectBillingInfo',
      request,
      metadata || {},
      methodDescriptor_CloudBilling_ListProjectBillingInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.billing.v1.GetProjectBillingInfoRequest,
 *   !proto.google.cloud.billing.v1.ProjectBillingInfo>}
 */
const methodDescriptor_CloudBilling_GetProjectBillingInfo = new grpc.web.MethodDescriptor(
  '/google.cloud.billing.v1.CloudBilling/GetProjectBillingInfo',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.billing.v1.GetProjectBillingInfoRequest,
  proto.google.cloud.billing.v1.ProjectBillingInfo,
  /**
   * @param {!proto.google.cloud.billing.v1.GetProjectBillingInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.billing.v1.ProjectBillingInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.billing.v1.GetProjectBillingInfoRequest,
 *   !proto.google.cloud.billing.v1.ProjectBillingInfo>}
 */
const methodInfo_CloudBilling_GetProjectBillingInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.billing.v1.ProjectBillingInfo,
  /**
   * @param {!proto.google.cloud.billing.v1.GetProjectBillingInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.billing.v1.ProjectBillingInfo.deserializeBinary
);


/**
 * @param {!proto.google.cloud.billing.v1.GetProjectBillingInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.billing.v1.ProjectBillingInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.billing.v1.ProjectBillingInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.billing.v1.CloudBillingClient.prototype.getProjectBillingInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.billing.v1.CloudBilling/GetProjectBillingInfo',
      request,
      metadata || {},
      methodDescriptor_CloudBilling_GetProjectBillingInfo,
      callback);
};


/**
 * @param {!proto.google.cloud.billing.v1.GetProjectBillingInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.billing.v1.ProjectBillingInfo>}
 *     Promise that resolves to the response
 */
proto.google.cloud.billing.v1.CloudBillingPromiseClient.prototype.getProjectBillingInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.billing.v1.CloudBilling/GetProjectBillingInfo',
      request,
      metadata || {},
      methodDescriptor_CloudBilling_GetProjectBillingInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.billing.v1.UpdateProjectBillingInfoRequest,
 *   !proto.google.cloud.billing.v1.ProjectBillingInfo>}
 */
const methodDescriptor_CloudBilling_UpdateProjectBillingInfo = new grpc.web.MethodDescriptor(
  '/google.cloud.billing.v1.CloudBilling/UpdateProjectBillingInfo',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.billing.v1.UpdateProjectBillingInfoRequest,
  proto.google.cloud.billing.v1.ProjectBillingInfo,
  /**
   * @param {!proto.google.cloud.billing.v1.UpdateProjectBillingInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.billing.v1.ProjectBillingInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.billing.v1.UpdateProjectBillingInfoRequest,
 *   !proto.google.cloud.billing.v1.ProjectBillingInfo>}
 */
const methodInfo_CloudBilling_UpdateProjectBillingInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.billing.v1.ProjectBillingInfo,
  /**
   * @param {!proto.google.cloud.billing.v1.UpdateProjectBillingInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.billing.v1.ProjectBillingInfo.deserializeBinary
);


/**
 * @param {!proto.google.cloud.billing.v1.UpdateProjectBillingInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.billing.v1.ProjectBillingInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.billing.v1.ProjectBillingInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.billing.v1.CloudBillingClient.prototype.updateProjectBillingInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.billing.v1.CloudBilling/UpdateProjectBillingInfo',
      request,
      metadata || {},
      methodDescriptor_CloudBilling_UpdateProjectBillingInfo,
      callback);
};


/**
 * @param {!proto.google.cloud.billing.v1.UpdateProjectBillingInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.billing.v1.ProjectBillingInfo>}
 *     Promise that resolves to the response
 */
proto.google.cloud.billing.v1.CloudBillingPromiseClient.prototype.updateProjectBillingInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.billing.v1.CloudBilling/UpdateProjectBillingInfo',
      request,
      metadata || {},
      methodDescriptor_CloudBilling_UpdateProjectBillingInfo);
};


module.exports = proto.google.cloud.billing.v1;

