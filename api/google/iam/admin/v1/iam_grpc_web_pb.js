/**
 * @fileoverview gRPC-Web generated client stub for google.iam.admin.v1
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

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.iam = {};
proto.google.iam.admin = {};
proto.google.iam.admin.v1 = require('./iam_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.iam.admin.v1.IAMClient =
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
proto.google.iam.admin.v1.IAMPromiseClient =
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
 *   !proto.google.iam.admin.v1.ListServiceAccountsRequest,
 *   !proto.google.iam.admin.v1.ListServiceAccountsResponse>}
 */
const methodDescriptor_IAM_ListServiceAccounts = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/ListServiceAccounts',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.ListServiceAccountsRequest,
  proto.google.iam.admin.v1.ListServiceAccountsResponse,
  /**
   * @param {!proto.google.iam.admin.v1.ListServiceAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ListServiceAccountsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.ListServiceAccountsRequest,
 *   !proto.google.iam.admin.v1.ListServiceAccountsResponse>}
 */
const methodInfo_IAM_ListServiceAccounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.ListServiceAccountsResponse,
  /**
   * @param {!proto.google.iam.admin.v1.ListServiceAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ListServiceAccountsResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.ListServiceAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.ListServiceAccountsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.ListServiceAccountsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.listServiceAccounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/ListServiceAccounts',
      request,
      metadata || {},
      methodDescriptor_IAM_ListServiceAccounts,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.ListServiceAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.ListServiceAccountsResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.listServiceAccounts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/ListServiceAccounts',
      request,
      metadata || {},
      methodDescriptor_IAM_ListServiceAccounts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.GetServiceAccountRequest,
 *   !proto.google.iam.admin.v1.ServiceAccount>}
 */
const methodDescriptor_IAM_GetServiceAccount = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/GetServiceAccount',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.GetServiceAccountRequest,
  proto.google.iam.admin.v1.ServiceAccount,
  /**
   * @param {!proto.google.iam.admin.v1.GetServiceAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ServiceAccount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.GetServiceAccountRequest,
 *   !proto.google.iam.admin.v1.ServiceAccount>}
 */
const methodInfo_IAM_GetServiceAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.ServiceAccount,
  /**
   * @param {!proto.google.iam.admin.v1.GetServiceAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ServiceAccount.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.GetServiceAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.ServiceAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.ServiceAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.getServiceAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/GetServiceAccount',
      request,
      metadata || {},
      methodDescriptor_IAM_GetServiceAccount,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.GetServiceAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.ServiceAccount>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.getServiceAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/GetServiceAccount',
      request,
      metadata || {},
      methodDescriptor_IAM_GetServiceAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.CreateServiceAccountRequest,
 *   !proto.google.iam.admin.v1.ServiceAccount>}
 */
const methodDescriptor_IAM_CreateServiceAccount = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/CreateServiceAccount',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.CreateServiceAccountRequest,
  proto.google.iam.admin.v1.ServiceAccount,
  /**
   * @param {!proto.google.iam.admin.v1.CreateServiceAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ServiceAccount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.CreateServiceAccountRequest,
 *   !proto.google.iam.admin.v1.ServiceAccount>}
 */
const methodInfo_IAM_CreateServiceAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.ServiceAccount,
  /**
   * @param {!proto.google.iam.admin.v1.CreateServiceAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ServiceAccount.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.CreateServiceAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.ServiceAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.ServiceAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.createServiceAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/CreateServiceAccount',
      request,
      metadata || {},
      methodDescriptor_IAM_CreateServiceAccount,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.CreateServiceAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.ServiceAccount>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.createServiceAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/CreateServiceAccount',
      request,
      metadata || {},
      methodDescriptor_IAM_CreateServiceAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.ServiceAccount,
 *   !proto.google.iam.admin.v1.ServiceAccount>}
 */
const methodDescriptor_IAM_UpdateServiceAccount = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/UpdateServiceAccount',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.ServiceAccount,
  proto.google.iam.admin.v1.ServiceAccount,
  /**
   * @param {!proto.google.iam.admin.v1.ServiceAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ServiceAccount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.ServiceAccount,
 *   !proto.google.iam.admin.v1.ServiceAccount>}
 */
const methodInfo_IAM_UpdateServiceAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.ServiceAccount,
  /**
   * @param {!proto.google.iam.admin.v1.ServiceAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ServiceAccount.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.ServiceAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.ServiceAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.ServiceAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.updateServiceAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/UpdateServiceAccount',
      request,
      metadata || {},
      methodDescriptor_IAM_UpdateServiceAccount,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.ServiceAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.ServiceAccount>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.updateServiceAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/UpdateServiceAccount',
      request,
      metadata || {},
      methodDescriptor_IAM_UpdateServiceAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.DeleteServiceAccountRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_IAM_DeleteServiceAccount = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/DeleteServiceAccount',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.DeleteServiceAccountRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.iam.admin.v1.DeleteServiceAccountRequest} request
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
 *   !proto.google.iam.admin.v1.DeleteServiceAccountRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_IAM_DeleteServiceAccount = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.iam.admin.v1.DeleteServiceAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.DeleteServiceAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.deleteServiceAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/DeleteServiceAccount',
      request,
      metadata || {},
      methodDescriptor_IAM_DeleteServiceAccount,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.DeleteServiceAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.deleteServiceAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/DeleteServiceAccount',
      request,
      metadata || {},
      methodDescriptor_IAM_DeleteServiceAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.ListServiceAccountKeysRequest,
 *   !proto.google.iam.admin.v1.ListServiceAccountKeysResponse>}
 */
const methodDescriptor_IAM_ListServiceAccountKeys = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/ListServiceAccountKeys',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.ListServiceAccountKeysRequest,
  proto.google.iam.admin.v1.ListServiceAccountKeysResponse,
  /**
   * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ListServiceAccountKeysResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.ListServiceAccountKeysRequest,
 *   !proto.google.iam.admin.v1.ListServiceAccountKeysResponse>}
 */
const methodInfo_IAM_ListServiceAccountKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.ListServiceAccountKeysResponse,
  /**
   * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ListServiceAccountKeysResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.ListServiceAccountKeysResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.ListServiceAccountKeysResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.listServiceAccountKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/ListServiceAccountKeys',
      request,
      metadata || {},
      methodDescriptor_IAM_ListServiceAccountKeys,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.ListServiceAccountKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.ListServiceAccountKeysResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.listServiceAccountKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/ListServiceAccountKeys',
      request,
      metadata || {},
      methodDescriptor_IAM_ListServiceAccountKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.GetServiceAccountKeyRequest,
 *   !proto.google.iam.admin.v1.ServiceAccountKey>}
 */
const methodDescriptor_IAM_GetServiceAccountKey = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/GetServiceAccountKey',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.GetServiceAccountKeyRequest,
  proto.google.iam.admin.v1.ServiceAccountKey,
  /**
   * @param {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ServiceAccountKey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.GetServiceAccountKeyRequest,
 *   !proto.google.iam.admin.v1.ServiceAccountKey>}
 */
const methodInfo_IAM_GetServiceAccountKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.ServiceAccountKey,
  /**
   * @param {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ServiceAccountKey.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.ServiceAccountKey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.ServiceAccountKey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.getServiceAccountKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/GetServiceAccountKey',
      request,
      metadata || {},
      methodDescriptor_IAM_GetServiceAccountKey,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.GetServiceAccountKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.ServiceAccountKey>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.getServiceAccountKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/GetServiceAccountKey',
      request,
      metadata || {},
      methodDescriptor_IAM_GetServiceAccountKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.CreateServiceAccountKeyRequest,
 *   !proto.google.iam.admin.v1.ServiceAccountKey>}
 */
const methodDescriptor_IAM_CreateServiceAccountKey = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/CreateServiceAccountKey',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.CreateServiceAccountKeyRequest,
  proto.google.iam.admin.v1.ServiceAccountKey,
  /**
   * @param {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ServiceAccountKey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.CreateServiceAccountKeyRequest,
 *   !proto.google.iam.admin.v1.ServiceAccountKey>}
 */
const methodInfo_IAM_CreateServiceAccountKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.ServiceAccountKey,
  /**
   * @param {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ServiceAccountKey.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.ServiceAccountKey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.ServiceAccountKey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.createServiceAccountKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/CreateServiceAccountKey',
      request,
      metadata || {},
      methodDescriptor_IAM_CreateServiceAccountKey,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.CreateServiceAccountKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.ServiceAccountKey>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.createServiceAccountKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/CreateServiceAccountKey',
      request,
      metadata || {},
      methodDescriptor_IAM_CreateServiceAccountKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_IAM_DeleteServiceAccountKey = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/DeleteServiceAccountKey',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest} request
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
 *   !proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_IAM_DeleteServiceAccountKey = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.deleteServiceAccountKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/DeleteServiceAccountKey',
      request,
      metadata || {},
      methodDescriptor_IAM_DeleteServiceAccountKey,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.DeleteServiceAccountKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.deleteServiceAccountKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/DeleteServiceAccountKey',
      request,
      metadata || {},
      methodDescriptor_IAM_DeleteServiceAccountKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.SignBlobRequest,
 *   !proto.google.iam.admin.v1.SignBlobResponse>}
 */
const methodDescriptor_IAM_SignBlob = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/SignBlob',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.SignBlobRequest,
  proto.google.iam.admin.v1.SignBlobResponse,
  /**
   * @param {!proto.google.iam.admin.v1.SignBlobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.SignBlobResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.SignBlobRequest,
 *   !proto.google.iam.admin.v1.SignBlobResponse>}
 */
const methodInfo_IAM_SignBlob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.SignBlobResponse,
  /**
   * @param {!proto.google.iam.admin.v1.SignBlobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.SignBlobResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.SignBlobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.SignBlobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.SignBlobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.signBlob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/SignBlob',
      request,
      metadata || {},
      methodDescriptor_IAM_SignBlob,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.SignBlobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.SignBlobResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.signBlob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/SignBlob',
      request,
      metadata || {},
      methodDescriptor_IAM_SignBlob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.SignJwtRequest,
 *   !proto.google.iam.admin.v1.SignJwtResponse>}
 */
const methodDescriptor_IAM_SignJwt = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/SignJwt',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.SignJwtRequest,
  proto.google.iam.admin.v1.SignJwtResponse,
  /**
   * @param {!proto.google.iam.admin.v1.SignJwtRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.SignJwtResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.SignJwtRequest,
 *   !proto.google.iam.admin.v1.SignJwtResponse>}
 */
const methodInfo_IAM_SignJwt = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.SignJwtResponse,
  /**
   * @param {!proto.google.iam.admin.v1.SignJwtRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.SignJwtResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.SignJwtRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.SignJwtResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.SignJwtResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.signJwt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/SignJwt',
      request,
      metadata || {},
      methodDescriptor_IAM_SignJwt,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.SignJwtRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.SignJwtResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.signJwt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/SignJwt',
      request,
      metadata || {},
      methodDescriptor_IAM_SignJwt);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_IAM_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/GetIamPolicy',
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
const methodInfo_IAM_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.iam.admin.v1.IAMClient.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_IAM_GetIamPolicy,
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
proto.google.iam.admin.v1.IAMPromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_IAM_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_IAM_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/SetIamPolicy',
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
const methodInfo_IAM_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.iam.admin.v1.IAMClient.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_IAM_SetIamPolicy,
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
proto.google.iam.admin.v1.IAMPromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_IAM_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_IAM_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/TestIamPermissions',
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
const methodInfo_IAM_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.iam.admin.v1.IAMClient.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_IAM_TestIamPermissions,
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
proto.google.iam.admin.v1.IAMPromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_IAM_TestIamPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.QueryGrantableRolesRequest,
 *   !proto.google.iam.admin.v1.QueryGrantableRolesResponse>}
 */
const methodDescriptor_IAM_QueryGrantableRoles = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/QueryGrantableRoles',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.QueryGrantableRolesRequest,
  proto.google.iam.admin.v1.QueryGrantableRolesResponse,
  /**
   * @param {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.QueryGrantableRolesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.QueryGrantableRolesRequest,
 *   !proto.google.iam.admin.v1.QueryGrantableRolesResponse>}
 */
const methodInfo_IAM_QueryGrantableRoles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.QueryGrantableRolesResponse,
  /**
   * @param {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.QueryGrantableRolesResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.QueryGrantableRolesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.QueryGrantableRolesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.queryGrantableRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/QueryGrantableRoles',
      request,
      metadata || {},
      methodDescriptor_IAM_QueryGrantableRoles,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.QueryGrantableRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.QueryGrantableRolesResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.queryGrantableRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/QueryGrantableRoles',
      request,
      metadata || {},
      methodDescriptor_IAM_QueryGrantableRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.ListRolesRequest,
 *   !proto.google.iam.admin.v1.ListRolesResponse>}
 */
const methodDescriptor_IAM_ListRoles = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/ListRoles',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.ListRolesRequest,
  proto.google.iam.admin.v1.ListRolesResponse,
  /**
   * @param {!proto.google.iam.admin.v1.ListRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ListRolesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.ListRolesRequest,
 *   !proto.google.iam.admin.v1.ListRolesResponse>}
 */
const methodInfo_IAM_ListRoles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.ListRolesResponse,
  /**
   * @param {!proto.google.iam.admin.v1.ListRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.ListRolesResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.ListRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.ListRolesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.ListRolesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.listRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/ListRoles',
      request,
      metadata || {},
      methodDescriptor_IAM_ListRoles,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.ListRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.ListRolesResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.listRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/ListRoles',
      request,
      metadata || {},
      methodDescriptor_IAM_ListRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.GetRoleRequest,
 *   !proto.google.iam.admin.v1.Role>}
 */
const methodDescriptor_IAM_GetRole = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/GetRole',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.GetRoleRequest,
  proto.google.iam.admin.v1.Role,
  /**
   * @param {!proto.google.iam.admin.v1.GetRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.Role.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.GetRoleRequest,
 *   !proto.google.iam.admin.v1.Role>}
 */
const methodInfo_IAM_GetRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.Role,
  /**
   * @param {!proto.google.iam.admin.v1.GetRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.Role.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.GetRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.Role)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.Role>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.getRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/GetRole',
      request,
      metadata || {},
      methodDescriptor_IAM_GetRole,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.GetRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.Role>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.getRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/GetRole',
      request,
      metadata || {},
      methodDescriptor_IAM_GetRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.CreateRoleRequest,
 *   !proto.google.iam.admin.v1.Role>}
 */
const methodDescriptor_IAM_CreateRole = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/CreateRole',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.CreateRoleRequest,
  proto.google.iam.admin.v1.Role,
  /**
   * @param {!proto.google.iam.admin.v1.CreateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.Role.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.CreateRoleRequest,
 *   !proto.google.iam.admin.v1.Role>}
 */
const methodInfo_IAM_CreateRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.Role,
  /**
   * @param {!proto.google.iam.admin.v1.CreateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.Role.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.CreateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.Role)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.Role>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.createRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/CreateRole',
      request,
      metadata || {},
      methodDescriptor_IAM_CreateRole,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.CreateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.Role>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.createRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/CreateRole',
      request,
      metadata || {},
      methodDescriptor_IAM_CreateRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.UpdateRoleRequest,
 *   !proto.google.iam.admin.v1.Role>}
 */
const methodDescriptor_IAM_UpdateRole = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/UpdateRole',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.UpdateRoleRequest,
  proto.google.iam.admin.v1.Role,
  /**
   * @param {!proto.google.iam.admin.v1.UpdateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.Role.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.UpdateRoleRequest,
 *   !proto.google.iam.admin.v1.Role>}
 */
const methodInfo_IAM_UpdateRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.Role,
  /**
   * @param {!proto.google.iam.admin.v1.UpdateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.Role.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.UpdateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.Role)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.Role>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.updateRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/UpdateRole',
      request,
      metadata || {},
      methodDescriptor_IAM_UpdateRole,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.UpdateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.Role>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.updateRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/UpdateRole',
      request,
      metadata || {},
      methodDescriptor_IAM_UpdateRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.DeleteRoleRequest,
 *   !proto.google.iam.admin.v1.Role>}
 */
const methodDescriptor_IAM_DeleteRole = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/DeleteRole',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.DeleteRoleRequest,
  proto.google.iam.admin.v1.Role,
  /**
   * @param {!proto.google.iam.admin.v1.DeleteRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.Role.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.DeleteRoleRequest,
 *   !proto.google.iam.admin.v1.Role>}
 */
const methodInfo_IAM_DeleteRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.Role,
  /**
   * @param {!proto.google.iam.admin.v1.DeleteRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.Role.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.DeleteRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.Role)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.Role>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.deleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_IAM_DeleteRole,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.DeleteRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.Role>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.deleteRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_IAM_DeleteRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.UndeleteRoleRequest,
 *   !proto.google.iam.admin.v1.Role>}
 */
const methodDescriptor_IAM_UndeleteRole = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/UndeleteRole',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.UndeleteRoleRequest,
  proto.google.iam.admin.v1.Role,
  /**
   * @param {!proto.google.iam.admin.v1.UndeleteRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.Role.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.UndeleteRoleRequest,
 *   !proto.google.iam.admin.v1.Role>}
 */
const methodInfo_IAM_UndeleteRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.Role,
  /**
   * @param {!proto.google.iam.admin.v1.UndeleteRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.Role.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.UndeleteRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.Role)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.Role>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.undeleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/UndeleteRole',
      request,
      metadata || {},
      methodDescriptor_IAM_UndeleteRole,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.UndeleteRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.Role>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.undeleteRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/UndeleteRole',
      request,
      metadata || {},
      methodDescriptor_IAM_UndeleteRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.admin.v1.QueryTestablePermissionsRequest,
 *   !proto.google.iam.admin.v1.QueryTestablePermissionsResponse>}
 */
const methodDescriptor_IAM_QueryTestablePermissions = new grpc.web.MethodDescriptor(
  '/google.iam.admin.v1.IAM/QueryTestablePermissions',
  grpc.web.MethodType.UNARY,
  proto.google.iam.admin.v1.QueryTestablePermissionsRequest,
  proto.google.iam.admin.v1.QueryTestablePermissionsResponse,
  /**
   * @param {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.QueryTestablePermissionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.admin.v1.QueryTestablePermissionsRequest,
 *   !proto.google.iam.admin.v1.QueryTestablePermissionsResponse>}
 */
const methodInfo_IAM_QueryTestablePermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.iam.admin.v1.QueryTestablePermissionsResponse,
  /**
   * @param {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.iam.admin.v1.QueryTestablePermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.admin.v1.QueryTestablePermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.admin.v1.QueryTestablePermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.admin.v1.IAMClient.prototype.queryTestablePermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/QueryTestablePermissions',
      request,
      metadata || {},
      methodDescriptor_IAM_QueryTestablePermissions,
      callback);
};


/**
 * @param {!proto.google.iam.admin.v1.QueryTestablePermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.admin.v1.QueryTestablePermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.admin.v1.IAMPromiseClient.prototype.queryTestablePermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.admin.v1.IAM/QueryTestablePermissions',
      request,
      metadata || {},
      methodDescriptor_IAM_QueryTestablePermissions);
};


module.exports = proto.google.iam.admin.v1;

