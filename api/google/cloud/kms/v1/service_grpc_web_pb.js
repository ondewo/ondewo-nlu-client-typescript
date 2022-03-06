/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.kms.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_kms_v1_resources_pb = require('../../../../google/cloud/kms/v1/resources_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.kms = {};
proto.google.cloud.kms.v1 = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient =
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
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient =
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
 *   !proto.google.cloud.kms.v1.ListKeyRingsRequest,
 *   !proto.google.cloud.kms.v1.ListKeyRingsResponse>}
 */
const methodDescriptor_KeyManagementService_ListKeyRings = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/ListKeyRings',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.ListKeyRingsRequest,
  proto.google.cloud.kms.v1.ListKeyRingsResponse,
  /**
   * @param {!proto.google.cloud.kms.v1.ListKeyRingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.kms.v1.ListKeyRingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.ListKeyRingsRequest,
 *   !proto.google.cloud.kms.v1.ListKeyRingsResponse>}
 */
const methodInfo_KeyManagementService_ListKeyRings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.kms.v1.ListKeyRingsResponse,
  /**
   * @param {!proto.google.cloud.kms.v1.ListKeyRingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.kms.v1.ListKeyRingsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.ListKeyRingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.ListKeyRingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.ListKeyRingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.listKeyRings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/ListKeyRings',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_ListKeyRings,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.ListKeyRingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.ListKeyRingsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.listKeyRings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/ListKeyRings',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_ListKeyRings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.ListCryptoKeysRequest,
 *   !proto.google.cloud.kms.v1.ListCryptoKeysResponse>}
 */
const methodDescriptor_KeyManagementService_ListCryptoKeys = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/ListCryptoKeys',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.ListCryptoKeysRequest,
  proto.google.cloud.kms.v1.ListCryptoKeysResponse,
  /**
   * @param {!proto.google.cloud.kms.v1.ListCryptoKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.kms.v1.ListCryptoKeysResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.ListCryptoKeysRequest,
 *   !proto.google.cloud.kms.v1.ListCryptoKeysResponse>}
 */
const methodInfo_KeyManagementService_ListCryptoKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.kms.v1.ListCryptoKeysResponse,
  /**
   * @param {!proto.google.cloud.kms.v1.ListCryptoKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.kms.v1.ListCryptoKeysResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.ListCryptoKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.ListCryptoKeysResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.ListCryptoKeysResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.listCryptoKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/ListCryptoKeys',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_ListCryptoKeys,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.ListCryptoKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.ListCryptoKeysResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.listCryptoKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/ListCryptoKeys',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_ListCryptoKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.ListCryptoKeyVersionsRequest,
 *   !proto.google.cloud.kms.v1.ListCryptoKeyVersionsResponse>}
 */
const methodDescriptor_KeyManagementService_ListCryptoKeyVersions = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/ListCryptoKeyVersions',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.ListCryptoKeyVersionsRequest,
  proto.google.cloud.kms.v1.ListCryptoKeyVersionsResponse,
  /**
   * @param {!proto.google.cloud.kms.v1.ListCryptoKeyVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.kms.v1.ListCryptoKeyVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.ListCryptoKeyVersionsRequest,
 *   !proto.google.cloud.kms.v1.ListCryptoKeyVersionsResponse>}
 */
const methodInfo_KeyManagementService_ListCryptoKeyVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.kms.v1.ListCryptoKeyVersionsResponse,
  /**
   * @param {!proto.google.cloud.kms.v1.ListCryptoKeyVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.kms.v1.ListCryptoKeyVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.ListCryptoKeyVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.ListCryptoKeyVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.ListCryptoKeyVersionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.listCryptoKeyVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/ListCryptoKeyVersions',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_ListCryptoKeyVersions,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.ListCryptoKeyVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.ListCryptoKeyVersionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.listCryptoKeyVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/ListCryptoKeyVersions',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_ListCryptoKeyVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.GetKeyRingRequest,
 *   !proto.google.cloud.kms.v1.KeyRing>}
 */
const methodDescriptor_KeyManagementService_GetKeyRing = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/GetKeyRing',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.GetKeyRingRequest,
  google_cloud_kms_v1_resources_pb.KeyRing,
  /**
   * @param {!proto.google.cloud.kms.v1.GetKeyRingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.KeyRing.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.GetKeyRingRequest,
 *   !proto.google.cloud.kms.v1.KeyRing>}
 */
const methodInfo_KeyManagementService_GetKeyRing = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.KeyRing,
  /**
   * @param {!proto.google.cloud.kms.v1.GetKeyRingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.KeyRing.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.GetKeyRingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.KeyRing)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.KeyRing>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.getKeyRing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/GetKeyRing',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_GetKeyRing,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.GetKeyRingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.KeyRing>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.getKeyRing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/GetKeyRing',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_GetKeyRing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.GetCryptoKeyRequest,
 *   !proto.google.cloud.kms.v1.CryptoKey>}
 */
const methodDescriptor_KeyManagementService_GetCryptoKey = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/GetCryptoKey',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.GetCryptoKeyRequest,
  google_cloud_kms_v1_resources_pb.CryptoKey,
  /**
   * @param {!proto.google.cloud.kms.v1.GetCryptoKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.GetCryptoKeyRequest,
 *   !proto.google.cloud.kms.v1.CryptoKey>}
 */
const methodInfo_KeyManagementService_GetCryptoKey = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.CryptoKey,
  /**
   * @param {!proto.google.cloud.kms.v1.GetCryptoKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.GetCryptoKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.CryptoKey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.CryptoKey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.getCryptoKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/GetCryptoKey',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_GetCryptoKey,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.GetCryptoKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.CryptoKey>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.getCryptoKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/GetCryptoKey',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_GetCryptoKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.GetCryptoKeyVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKeyVersion>}
 */
const methodDescriptor_KeyManagementService_GetCryptoKeyVersion = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/GetCryptoKeyVersion',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.GetCryptoKeyVersionRequest,
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
  /**
   * @param {!proto.google.cloud.kms.v1.GetCryptoKeyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.GetCryptoKeyVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKeyVersion>}
 */
const methodInfo_KeyManagementService_GetCryptoKeyVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
  /**
   * @param {!proto.google.cloud.kms.v1.GetCryptoKeyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.GetCryptoKeyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.CryptoKeyVersion)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.CryptoKeyVersion>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.getCryptoKeyVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/GetCryptoKeyVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_GetCryptoKeyVersion,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.GetCryptoKeyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.CryptoKeyVersion>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.getCryptoKeyVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/GetCryptoKeyVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_GetCryptoKeyVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.CreateKeyRingRequest,
 *   !proto.google.cloud.kms.v1.KeyRing>}
 */
const methodDescriptor_KeyManagementService_CreateKeyRing = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/CreateKeyRing',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.CreateKeyRingRequest,
  google_cloud_kms_v1_resources_pb.KeyRing,
  /**
   * @param {!proto.google.cloud.kms.v1.CreateKeyRingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.KeyRing.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.CreateKeyRingRequest,
 *   !proto.google.cloud.kms.v1.KeyRing>}
 */
const methodInfo_KeyManagementService_CreateKeyRing = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.KeyRing,
  /**
   * @param {!proto.google.cloud.kms.v1.CreateKeyRingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.KeyRing.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.CreateKeyRingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.KeyRing)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.KeyRing>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.createKeyRing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/CreateKeyRing',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_CreateKeyRing,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.CreateKeyRingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.KeyRing>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.createKeyRing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/CreateKeyRing',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_CreateKeyRing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.CreateCryptoKeyRequest,
 *   !proto.google.cloud.kms.v1.CryptoKey>}
 */
const methodDescriptor_KeyManagementService_CreateCryptoKey = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/CreateCryptoKey',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.CreateCryptoKeyRequest,
  google_cloud_kms_v1_resources_pb.CryptoKey,
  /**
   * @param {!proto.google.cloud.kms.v1.CreateCryptoKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.CreateCryptoKeyRequest,
 *   !proto.google.cloud.kms.v1.CryptoKey>}
 */
const methodInfo_KeyManagementService_CreateCryptoKey = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.CryptoKey,
  /**
   * @param {!proto.google.cloud.kms.v1.CreateCryptoKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.CreateCryptoKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.CryptoKey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.CryptoKey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.createCryptoKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/CreateCryptoKey',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_CreateCryptoKey,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.CreateCryptoKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.CryptoKey>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.createCryptoKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/CreateCryptoKey',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_CreateCryptoKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.CreateCryptoKeyVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKeyVersion>}
 */
const methodDescriptor_KeyManagementService_CreateCryptoKeyVersion = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/CreateCryptoKeyVersion',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.CreateCryptoKeyVersionRequest,
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
  /**
   * @param {!proto.google.cloud.kms.v1.CreateCryptoKeyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.CreateCryptoKeyVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKeyVersion>}
 */
const methodInfo_KeyManagementService_CreateCryptoKeyVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
  /**
   * @param {!proto.google.cloud.kms.v1.CreateCryptoKeyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.CreateCryptoKeyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.CryptoKeyVersion)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.CryptoKeyVersion>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.createCryptoKeyVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/CreateCryptoKeyVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_CreateCryptoKeyVersion,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.CreateCryptoKeyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.CryptoKeyVersion>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.createCryptoKeyVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/CreateCryptoKeyVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_CreateCryptoKeyVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.UpdateCryptoKeyRequest,
 *   !proto.google.cloud.kms.v1.CryptoKey>}
 */
const methodDescriptor_KeyManagementService_UpdateCryptoKey = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKey',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.UpdateCryptoKeyRequest,
  google_cloud_kms_v1_resources_pb.CryptoKey,
  /**
   * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.UpdateCryptoKeyRequest,
 *   !proto.google.cloud.kms.v1.CryptoKey>}
 */
const methodInfo_KeyManagementService_UpdateCryptoKey = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.CryptoKey,
  /**
   * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.CryptoKey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.CryptoKey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.updateCryptoKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKey',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_UpdateCryptoKey,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.CryptoKey>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.updateCryptoKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKey',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_UpdateCryptoKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.UpdateCryptoKeyVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKeyVersion>}
 */
const methodDescriptor_KeyManagementService_UpdateCryptoKeyVersion = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKeyVersion',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.UpdateCryptoKeyVersionRequest,
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
  /**
   * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.UpdateCryptoKeyVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKeyVersion>}
 */
const methodInfo_KeyManagementService_UpdateCryptoKeyVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
  /**
   * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.CryptoKeyVersion)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.CryptoKeyVersion>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.updateCryptoKeyVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKeyVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_UpdateCryptoKeyVersion,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.CryptoKeyVersion>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.updateCryptoKeyVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKeyVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_UpdateCryptoKeyVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.EncryptRequest,
 *   !proto.google.cloud.kms.v1.EncryptResponse>}
 */
const methodDescriptor_KeyManagementService_Encrypt = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/Encrypt',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.EncryptRequest,
  proto.google.cloud.kms.v1.EncryptResponse,
  /**
   * @param {!proto.google.cloud.kms.v1.EncryptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.kms.v1.EncryptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.EncryptRequest,
 *   !proto.google.cloud.kms.v1.EncryptResponse>}
 */
const methodInfo_KeyManagementService_Encrypt = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.kms.v1.EncryptResponse,
  /**
   * @param {!proto.google.cloud.kms.v1.EncryptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.kms.v1.EncryptResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.EncryptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.EncryptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.EncryptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.encrypt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/Encrypt',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_Encrypt,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.EncryptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.EncryptResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.encrypt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/Encrypt',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_Encrypt);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.DecryptRequest,
 *   !proto.google.cloud.kms.v1.DecryptResponse>}
 */
const methodDescriptor_KeyManagementService_Decrypt = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/Decrypt',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.DecryptRequest,
  proto.google.cloud.kms.v1.DecryptResponse,
  /**
   * @param {!proto.google.cloud.kms.v1.DecryptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.kms.v1.DecryptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.DecryptRequest,
 *   !proto.google.cloud.kms.v1.DecryptResponse>}
 */
const methodInfo_KeyManagementService_Decrypt = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.kms.v1.DecryptResponse,
  /**
   * @param {!proto.google.cloud.kms.v1.DecryptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.kms.v1.DecryptResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.DecryptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.DecryptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.DecryptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.decrypt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/Decrypt',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_Decrypt,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.DecryptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.DecryptResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.decrypt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/Decrypt',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_Decrypt);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKey>}
 */
const methodDescriptor_KeyManagementService_UpdateCryptoKeyPrimaryVersion = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKeyPrimaryVersion',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest,
  google_cloud_kms_v1_resources_pb.CryptoKey,
  /**
   * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKey>}
 */
const methodInfo_KeyManagementService_UpdateCryptoKeyPrimaryVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.CryptoKey,
  /**
   * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.CryptoKey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.CryptoKey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.updateCryptoKeyPrimaryVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKeyPrimaryVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_UpdateCryptoKeyPrimaryVersion,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.CryptoKey>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.updateCryptoKeyPrimaryVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKeyPrimaryVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_UpdateCryptoKeyPrimaryVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.DestroyCryptoKeyVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKeyVersion>}
 */
const methodDescriptor_KeyManagementService_DestroyCryptoKeyVersion = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/DestroyCryptoKeyVersion',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.DestroyCryptoKeyVersionRequest,
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
  /**
   * @param {!proto.google.cloud.kms.v1.DestroyCryptoKeyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.DestroyCryptoKeyVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKeyVersion>}
 */
const methodInfo_KeyManagementService_DestroyCryptoKeyVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
  /**
   * @param {!proto.google.cloud.kms.v1.DestroyCryptoKeyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.DestroyCryptoKeyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.CryptoKeyVersion)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.CryptoKeyVersion>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.destroyCryptoKeyVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/DestroyCryptoKeyVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_DestroyCryptoKeyVersion,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.DestroyCryptoKeyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.CryptoKeyVersion>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.destroyCryptoKeyVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/DestroyCryptoKeyVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_DestroyCryptoKeyVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.kms.v1.RestoreCryptoKeyVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKeyVersion>}
 */
const methodDescriptor_KeyManagementService_RestoreCryptoKeyVersion = new grpc.web.MethodDescriptor(
  '/google.cloud.kms.v1.KeyManagementService/RestoreCryptoKeyVersion',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.kms.v1.RestoreCryptoKeyVersionRequest,
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
  /**
   * @param {!proto.google.cloud.kms.v1.RestoreCryptoKeyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.kms.v1.RestoreCryptoKeyVersionRequest,
 *   !proto.google.cloud.kms.v1.CryptoKeyVersion>}
 */
const methodInfo_KeyManagementService_RestoreCryptoKeyVersion = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
  /**
   * @param {!proto.google.cloud.kms.v1.RestoreCryptoKeyVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
);


/**
 * @param {!proto.google.cloud.kms.v1.RestoreCryptoKeyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.kms.v1.CryptoKeyVersion)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.kms.v1.CryptoKeyVersion>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.kms.v1.KeyManagementServiceClient.prototype.restoreCryptoKeyVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/RestoreCryptoKeyVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_RestoreCryptoKeyVersion,
      callback);
};


/**
 * @param {!proto.google.cloud.kms.v1.RestoreCryptoKeyVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.kms.v1.CryptoKeyVersion>}
 *     Promise that resolves to the response
 */
proto.google.cloud.kms.v1.KeyManagementServicePromiseClient.prototype.restoreCryptoKeyVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.kms.v1.KeyManagementService/RestoreCryptoKeyVersion',
      request,
      metadata || {},
      methodDescriptor_KeyManagementService_RestoreCryptoKeyVersion);
};


module.exports = proto.google.cloud.kms.v1;

