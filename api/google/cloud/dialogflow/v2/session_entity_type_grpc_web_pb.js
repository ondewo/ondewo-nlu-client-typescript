/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_dialogflow_v2_entity_type_pb = require('../../../../google/cloud/dialogflow/v2/entity_type_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dialogflow = {};
proto.google.cloud.dialogflow.v2 = require('./session_entity_type_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesClient =
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
proto.google.cloud.dialogflow.v2.SessionEntityTypesPromiseClient =
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
 *   !proto.google.cloud.dialogflow.v2.ListSessionEntityTypesRequest,
 *   !proto.google.cloud.dialogflow.v2.ListSessionEntityTypesResponse>}
 */
const methodDescriptor_SessionEntityTypes_ListSessionEntityTypes = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.SessionEntityTypes/ListSessionEntityTypes',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.ListSessionEntityTypesRequest,
  proto.google.cloud.dialogflow.v2.ListSessionEntityTypesResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.ListSessionEntityTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.ListSessionEntityTypesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.ListSessionEntityTypesRequest,
 *   !proto.google.cloud.dialogflow.v2.ListSessionEntityTypesResponse>}
 */
const methodInfo_SessionEntityTypes_ListSessionEntityTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.ListSessionEntityTypesResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.ListSessionEntityTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.ListSessionEntityTypesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.ListSessionEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.ListSessionEntityTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.ListSessionEntityTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesClient.prototype.listSessionEntityTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.SessionEntityTypes/ListSessionEntityTypes',
      request,
      metadata || {},
      methodDescriptor_SessionEntityTypes_ListSessionEntityTypes,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.ListSessionEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.ListSessionEntityTypesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesPromiseClient.prototype.listSessionEntityTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.SessionEntityTypes/ListSessionEntityTypes',
      request,
      metadata || {},
      methodDescriptor_SessionEntityTypes_ListSessionEntityTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.GetSessionEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.SessionEntityType>}
 */
const methodDescriptor_SessionEntityTypes_GetSessionEntityType = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.SessionEntityTypes/GetSessionEntityType',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.GetSessionEntityTypeRequest,
  proto.google.cloud.dialogflow.v2.SessionEntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.GetSessionEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.SessionEntityType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.GetSessionEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.SessionEntityType>}
 */
const methodInfo_SessionEntityTypes_GetSessionEntityType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.SessionEntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.GetSessionEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.SessionEntityType.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.GetSessionEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.SessionEntityType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.SessionEntityType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesClient.prototype.getSessionEntityType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.SessionEntityTypes/GetSessionEntityType',
      request,
      metadata || {},
      methodDescriptor_SessionEntityTypes_GetSessionEntityType,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.GetSessionEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.SessionEntityType>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesPromiseClient.prototype.getSessionEntityType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.SessionEntityTypes/GetSessionEntityType',
      request,
      metadata || {},
      methodDescriptor_SessionEntityTypes_GetSessionEntityType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.CreateSessionEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.SessionEntityType>}
 */
const methodDescriptor_SessionEntityTypes_CreateSessionEntityType = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.SessionEntityTypes/CreateSessionEntityType',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.CreateSessionEntityTypeRequest,
  proto.google.cloud.dialogflow.v2.SessionEntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.CreateSessionEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.SessionEntityType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.CreateSessionEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.SessionEntityType>}
 */
const methodInfo_SessionEntityTypes_CreateSessionEntityType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.SessionEntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.CreateSessionEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.SessionEntityType.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.CreateSessionEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.SessionEntityType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.SessionEntityType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesClient.prototype.createSessionEntityType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.SessionEntityTypes/CreateSessionEntityType',
      request,
      metadata || {},
      methodDescriptor_SessionEntityTypes_CreateSessionEntityType,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.CreateSessionEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.SessionEntityType>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesPromiseClient.prototype.createSessionEntityType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.SessionEntityTypes/CreateSessionEntityType',
      request,
      metadata || {},
      methodDescriptor_SessionEntityTypes_CreateSessionEntityType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.UpdateSessionEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.SessionEntityType>}
 */
const methodDescriptor_SessionEntityTypes_UpdateSessionEntityType = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.SessionEntityTypes/UpdateSessionEntityType',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.UpdateSessionEntityTypeRequest,
  proto.google.cloud.dialogflow.v2.SessionEntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.UpdateSessionEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.SessionEntityType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.UpdateSessionEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.SessionEntityType>}
 */
const methodInfo_SessionEntityTypes_UpdateSessionEntityType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.SessionEntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.UpdateSessionEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.SessionEntityType.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.UpdateSessionEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.SessionEntityType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.SessionEntityType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesClient.prototype.updateSessionEntityType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.SessionEntityTypes/UpdateSessionEntityType',
      request,
      metadata || {},
      methodDescriptor_SessionEntityTypes_UpdateSessionEntityType,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.UpdateSessionEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.SessionEntityType>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesPromiseClient.prototype.updateSessionEntityType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.SessionEntityTypes/UpdateSessionEntityType',
      request,
      metadata || {},
      methodDescriptor_SessionEntityTypes_UpdateSessionEntityType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.DeleteSessionEntityTypeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_SessionEntityTypes_DeleteSessionEntityType = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.SessionEntityTypes/DeleteSessionEntityType',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.DeleteSessionEntityTypeRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DeleteSessionEntityTypeRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.DeleteSessionEntityTypeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_SessionEntityTypes_DeleteSessionEntityType = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DeleteSessionEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.DeleteSessionEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesClient.prototype.deleteSessionEntityType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.SessionEntityTypes/DeleteSessionEntityType',
      request,
      metadata || {},
      methodDescriptor_SessionEntityTypes_DeleteSessionEntityType,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.DeleteSessionEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.SessionEntityTypesPromiseClient.prototype.deleteSessionEntityType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.SessionEntityTypes/DeleteSessionEntityType',
      request,
      metadata || {},
      methodDescriptor_SessionEntityTypes_DeleteSessionEntityType);
};


module.exports = proto.google.cloud.dialogflow.v2;

