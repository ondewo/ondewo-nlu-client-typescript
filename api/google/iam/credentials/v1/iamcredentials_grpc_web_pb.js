/**
 * @fileoverview gRPC-Web generated client stub for google.iam.credentials.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_iam_credentials_v1_common_pb = require('../../../../google/iam/credentials/v1/common_pb.js')
const proto = {};
proto.google = {};
proto.google.iam = {};
proto.google.iam.credentials = {};
proto.google.iam.credentials.v1 = require('./iamcredentials_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.iam.credentials.v1.IAMCredentialsClient =
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
proto.google.iam.credentials.v1.IAMCredentialsPromiseClient =
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
 *   !proto.google.iam.credentials.v1.GenerateAccessTokenRequest,
 *   !proto.google.iam.credentials.v1.GenerateAccessTokenResponse>}
 */
const methodDescriptor_IAMCredentials_GenerateAccessToken = new grpc.web.MethodDescriptor(
  '/google.iam.credentials.v1.IAMCredentials/GenerateAccessToken',
  grpc.web.MethodType.UNARY,
  google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest,
  google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse,
  /**
   * @param {!proto.google.iam.credentials.v1.GenerateAccessTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.credentials.v1.GenerateAccessTokenRequest,
 *   !proto.google.iam.credentials.v1.GenerateAccessTokenResponse>}
 */
const methodInfo_IAMCredentials_GenerateAccessToken = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse,
  /**
   * @param {!proto.google.iam.credentials.v1.GenerateAccessTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.credentials.v1.GenerateAccessTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.credentials.v1.GenerateAccessTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.credentials.v1.GenerateAccessTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.credentials.v1.IAMCredentialsClient.prototype.generateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.credentials.v1.IAMCredentials/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_IAMCredentials_GenerateAccessToken,
      callback);
};


/**
 * @param {!proto.google.iam.credentials.v1.GenerateAccessTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.credentials.v1.GenerateAccessTokenResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.credentials.v1.IAMCredentialsPromiseClient.prototype.generateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.credentials.v1.IAMCredentials/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_IAMCredentials_GenerateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.credentials.v1.GenerateIdTokenRequest,
 *   !proto.google.iam.credentials.v1.GenerateIdTokenResponse>}
 */
const methodDescriptor_IAMCredentials_GenerateIdToken = new grpc.web.MethodDescriptor(
  '/google.iam.credentials.v1.IAMCredentials/GenerateIdToken',
  grpc.web.MethodType.UNARY,
  google_iam_credentials_v1_common_pb.GenerateIdTokenRequest,
  google_iam_credentials_v1_common_pb.GenerateIdTokenResponse,
  /**
   * @param {!proto.google.iam.credentials.v1.GenerateIdTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_credentials_v1_common_pb.GenerateIdTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.credentials.v1.GenerateIdTokenRequest,
 *   !proto.google.iam.credentials.v1.GenerateIdTokenResponse>}
 */
const methodInfo_IAMCredentials_GenerateIdToken = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_credentials_v1_common_pb.GenerateIdTokenResponse,
  /**
   * @param {!proto.google.iam.credentials.v1.GenerateIdTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_credentials_v1_common_pb.GenerateIdTokenResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.credentials.v1.GenerateIdTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.credentials.v1.GenerateIdTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.credentials.v1.GenerateIdTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.credentials.v1.IAMCredentialsClient.prototype.generateIdToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.credentials.v1.IAMCredentials/GenerateIdToken',
      request,
      metadata || {},
      methodDescriptor_IAMCredentials_GenerateIdToken,
      callback);
};


/**
 * @param {!proto.google.iam.credentials.v1.GenerateIdTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.credentials.v1.GenerateIdTokenResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.credentials.v1.IAMCredentialsPromiseClient.prototype.generateIdToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.credentials.v1.IAMCredentials/GenerateIdToken',
      request,
      metadata || {},
      methodDescriptor_IAMCredentials_GenerateIdToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.credentials.v1.SignBlobRequest,
 *   !proto.google.iam.credentials.v1.SignBlobResponse>}
 */
const methodDescriptor_IAMCredentials_SignBlob = new grpc.web.MethodDescriptor(
  '/google.iam.credentials.v1.IAMCredentials/SignBlob',
  grpc.web.MethodType.UNARY,
  google_iam_credentials_v1_common_pb.SignBlobRequest,
  google_iam_credentials_v1_common_pb.SignBlobResponse,
  /**
   * @param {!proto.google.iam.credentials.v1.SignBlobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_credentials_v1_common_pb.SignBlobResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.credentials.v1.SignBlobRequest,
 *   !proto.google.iam.credentials.v1.SignBlobResponse>}
 */
const methodInfo_IAMCredentials_SignBlob = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_credentials_v1_common_pb.SignBlobResponse,
  /**
   * @param {!proto.google.iam.credentials.v1.SignBlobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_credentials_v1_common_pb.SignBlobResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.credentials.v1.SignBlobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.credentials.v1.SignBlobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.credentials.v1.SignBlobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.credentials.v1.IAMCredentialsClient.prototype.signBlob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.credentials.v1.IAMCredentials/SignBlob',
      request,
      metadata || {},
      methodDescriptor_IAMCredentials_SignBlob,
      callback);
};


/**
 * @param {!proto.google.iam.credentials.v1.SignBlobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.credentials.v1.SignBlobResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.credentials.v1.IAMCredentialsPromiseClient.prototype.signBlob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.credentials.v1.IAMCredentials/SignBlob',
      request,
      metadata || {},
      methodDescriptor_IAMCredentials_SignBlob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.credentials.v1.SignJwtRequest,
 *   !proto.google.iam.credentials.v1.SignJwtResponse>}
 */
const methodDescriptor_IAMCredentials_SignJwt = new grpc.web.MethodDescriptor(
  '/google.iam.credentials.v1.IAMCredentials/SignJwt',
  grpc.web.MethodType.UNARY,
  google_iam_credentials_v1_common_pb.SignJwtRequest,
  google_iam_credentials_v1_common_pb.SignJwtResponse,
  /**
   * @param {!proto.google.iam.credentials.v1.SignJwtRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_credentials_v1_common_pb.SignJwtResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.credentials.v1.SignJwtRequest,
 *   !proto.google.iam.credentials.v1.SignJwtResponse>}
 */
const methodInfo_IAMCredentials_SignJwt = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_credentials_v1_common_pb.SignJwtResponse,
  /**
   * @param {!proto.google.iam.credentials.v1.SignJwtRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_credentials_v1_common_pb.SignJwtResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.credentials.v1.SignJwtRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.credentials.v1.SignJwtResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.credentials.v1.SignJwtResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.iam.credentials.v1.IAMCredentialsClient.prototype.signJwt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.iam.credentials.v1.IAMCredentials/SignJwt',
      request,
      metadata || {},
      methodDescriptor_IAMCredentials_SignJwt,
      callback);
};


/**
 * @param {!proto.google.iam.credentials.v1.SignJwtRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.credentials.v1.SignJwtResponse>}
 *     Promise that resolves to the response
 */
proto.google.iam.credentials.v1.IAMCredentialsPromiseClient.prototype.signJwt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.iam.credentials.v1.IAMCredentials/SignJwt',
      request,
      metadata || {},
      methodDescriptor_IAMCredentials_SignJwt);
};


module.exports = proto.google.iam.credentials.v1;

