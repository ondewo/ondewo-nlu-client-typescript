/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.oslogin.v1beta
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_oslogin_common_common_pb = require('../../../../google/cloud/oslogin/common/common_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.oslogin = {};
proto.google.cloud.oslogin.v1beta = require('./oslogin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.oslogin.v1beta.OsLoginServiceClient =
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
proto.google.cloud.oslogin.v1beta.OsLoginServicePromiseClient =
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
 *   !proto.google.cloud.oslogin.v1beta.DeletePosixAccountRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_OsLoginService_DeletePosixAccount = new grpc.web.MethodDescriptor(
  '/google.cloud.oslogin.v1beta.OsLoginService/DeletePosixAccount',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.oslogin.v1beta.DeletePosixAccountRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.DeletePosixAccountRequest} request
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
 *   !proto.google.cloud.oslogin.v1beta.DeletePosixAccountRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_OsLoginService_DeletePosixAccount = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.DeletePosixAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.oslogin.v1beta.DeletePosixAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.oslogin.v1beta.OsLoginServiceClient.prototype.deletePosixAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/DeletePosixAccount',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_DeletePosixAccount,
      callback);
};


/**
 * @param {!proto.google.cloud.oslogin.v1beta.DeletePosixAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.oslogin.v1beta.OsLoginServicePromiseClient.prototype.deletePosixAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/DeletePosixAccount',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_DeletePosixAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_OsLoginService_DeleteSshPublicKey = new grpc.web.MethodDescriptor(
  '/google.cloud.oslogin.v1beta.OsLoginService/DeleteSshPublicKey',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest} request
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
 *   !proto.google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_OsLoginService_DeleteSshPublicKey = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.oslogin.v1beta.OsLoginServiceClient.prototype.deleteSshPublicKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/DeleteSshPublicKey',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_DeleteSshPublicKey,
      callback);
};


/**
 * @param {!proto.google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.oslogin.v1beta.OsLoginServicePromiseClient.prototype.deleteSshPublicKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/DeleteSshPublicKey',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_DeleteSshPublicKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.oslogin.v1beta.GetLoginProfileRequest,
 *   !proto.google.cloud.oslogin.v1beta.LoginProfile>}
 */
const methodDescriptor_OsLoginService_GetLoginProfile = new grpc.web.MethodDescriptor(
  '/google.cloud.oslogin.v1beta.OsLoginService/GetLoginProfile',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.oslogin.v1beta.GetLoginProfileRequest,
  proto.google.cloud.oslogin.v1beta.LoginProfile,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.GetLoginProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.oslogin.v1beta.LoginProfile.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.oslogin.v1beta.GetLoginProfileRequest,
 *   !proto.google.cloud.oslogin.v1beta.LoginProfile>}
 */
const methodInfo_OsLoginService_GetLoginProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.oslogin.v1beta.LoginProfile,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.GetLoginProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.oslogin.v1beta.LoginProfile.deserializeBinary
);


/**
 * @param {!proto.google.cloud.oslogin.v1beta.GetLoginProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.oslogin.v1beta.LoginProfile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.oslogin.v1beta.LoginProfile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.oslogin.v1beta.OsLoginServiceClient.prototype.getLoginProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/GetLoginProfile',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_GetLoginProfile,
      callback);
};


/**
 * @param {!proto.google.cloud.oslogin.v1beta.GetLoginProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.oslogin.v1beta.LoginProfile>}
 *     Promise that resolves to the response
 */
proto.google.cloud.oslogin.v1beta.OsLoginServicePromiseClient.prototype.getLoginProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/GetLoginProfile',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_GetLoginProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.oslogin.v1beta.GetSshPublicKeyRequest,
 *   !proto.google.cloud.oslogin.common.SshPublicKey>}
 */
const methodDescriptor_OsLoginService_GetSshPublicKey = new grpc.web.MethodDescriptor(
  '/google.cloud.oslogin.v1beta.OsLoginService/GetSshPublicKey',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.oslogin.v1beta.GetSshPublicKeyRequest,
  google_cloud_oslogin_common_common_pb.SshPublicKey,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.GetSshPublicKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_oslogin_common_common_pb.SshPublicKey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.oslogin.v1beta.GetSshPublicKeyRequest,
 *   !proto.google.cloud.oslogin.common.SshPublicKey>}
 */
const methodInfo_OsLoginService_GetSshPublicKey = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_oslogin_common_common_pb.SshPublicKey,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.GetSshPublicKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_oslogin_common_common_pb.SshPublicKey.deserializeBinary
);


/**
 * @param {!proto.google.cloud.oslogin.v1beta.GetSshPublicKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.oslogin.common.SshPublicKey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.oslogin.common.SshPublicKey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.oslogin.v1beta.OsLoginServiceClient.prototype.getSshPublicKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/GetSshPublicKey',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_GetSshPublicKey,
      callback);
};


/**
 * @param {!proto.google.cloud.oslogin.v1beta.GetSshPublicKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.oslogin.common.SshPublicKey>}
 *     Promise that resolves to the response
 */
proto.google.cloud.oslogin.v1beta.OsLoginServicePromiseClient.prototype.getSshPublicKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/GetSshPublicKey',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_GetSshPublicKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest,
 *   !proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse>}
 */
const methodDescriptor_OsLoginService_ImportSshPublicKey = new grpc.web.MethodDescriptor(
  '/google.cloud.oslogin.v1beta.OsLoginService/ImportSshPublicKey',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest,
  proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest,
 *   !proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse>}
 */
const methodInfo_OsLoginService_ImportSshPublicKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.oslogin.v1beta.OsLoginServiceClient.prototype.importSshPublicKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/ImportSshPublicKey',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_ImportSshPublicKey,
      callback);
};


/**
 * @param {!proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.oslogin.v1beta.OsLoginServicePromiseClient.prototype.importSshPublicKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/ImportSshPublicKey',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_ImportSshPublicKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest,
 *   !proto.google.cloud.oslogin.common.SshPublicKey>}
 */
const methodDescriptor_OsLoginService_UpdateSshPublicKey = new grpc.web.MethodDescriptor(
  '/google.cloud.oslogin.v1beta.OsLoginService/UpdateSshPublicKey',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest,
  google_cloud_oslogin_common_common_pb.SshPublicKey,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_oslogin_common_common_pb.SshPublicKey.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest,
 *   !proto.google.cloud.oslogin.common.SshPublicKey>}
 */
const methodInfo_OsLoginService_UpdateSshPublicKey = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_oslogin_common_common_pb.SshPublicKey,
  /**
   * @param {!proto.google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_oslogin_common_common_pb.SshPublicKey.deserializeBinary
);


/**
 * @param {!proto.google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.oslogin.common.SshPublicKey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.oslogin.common.SshPublicKey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.oslogin.v1beta.OsLoginServiceClient.prototype.updateSshPublicKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/UpdateSshPublicKey',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_UpdateSshPublicKey,
      callback);
};


/**
 * @param {!proto.google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.oslogin.common.SshPublicKey>}
 *     Promise that resolves to the response
 */
proto.google.cloud.oslogin.v1beta.OsLoginServicePromiseClient.prototype.updateSshPublicKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.oslogin.v1beta.OsLoginService/UpdateSshPublicKey',
      request,
      metadata || {},
      methodDescriptor_OsLoginService_UpdateSshPublicKey);
};


module.exports = proto.google.cloud.oslogin.v1beta;

