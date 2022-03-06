/**
 * @fileoverview gRPC-Web generated client stub for google.logging.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.logging = {};
proto.google.logging.v2 = require('./logging_config_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.logging.v2.ConfigServiceV2Client =
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
proto.google.logging.v2.ConfigServiceV2PromiseClient =
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
 *   !proto.google.logging.v2.ListSinksRequest,
 *   !proto.google.logging.v2.ListSinksResponse>}
 */
const methodDescriptor_ConfigServiceV2_ListSinks = new grpc.web.MethodDescriptor(
  '/google.logging.v2.ConfigServiceV2/ListSinks',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.ListSinksRequest,
  proto.google.logging.v2.ListSinksResponse,
  /**
   * @param {!proto.google.logging.v2.ListSinksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListSinksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.ListSinksRequest,
 *   !proto.google.logging.v2.ListSinksResponse>}
 */
const methodInfo_ConfigServiceV2_ListSinks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.ListSinksResponse,
  /**
   * @param {!proto.google.logging.v2.ListSinksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListSinksResponse.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.ListSinksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.ListSinksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.ListSinksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.ConfigServiceV2Client.prototype.listSinks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/ListSinks',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_ListSinks,
      callback);
};


/**
 * @param {!proto.google.logging.v2.ListSinksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.ListSinksResponse>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.ConfigServiceV2PromiseClient.prototype.listSinks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/ListSinks',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_ListSinks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.GetSinkRequest,
 *   !proto.google.logging.v2.LogSink>}
 */
const methodDescriptor_ConfigServiceV2_GetSink = new grpc.web.MethodDescriptor(
  '/google.logging.v2.ConfigServiceV2/GetSink',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.GetSinkRequest,
  proto.google.logging.v2.LogSink,
  /**
   * @param {!proto.google.logging.v2.GetSinkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogSink.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.GetSinkRequest,
 *   !proto.google.logging.v2.LogSink>}
 */
const methodInfo_ConfigServiceV2_GetSink = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.LogSink,
  /**
   * @param {!proto.google.logging.v2.GetSinkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogSink.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.GetSinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.LogSink)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.LogSink>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.ConfigServiceV2Client.prototype.getSink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/GetSink',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_GetSink,
      callback);
};


/**
 * @param {!proto.google.logging.v2.GetSinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.LogSink>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.ConfigServiceV2PromiseClient.prototype.getSink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/GetSink',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_GetSink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.CreateSinkRequest,
 *   !proto.google.logging.v2.LogSink>}
 */
const methodDescriptor_ConfigServiceV2_CreateSink = new grpc.web.MethodDescriptor(
  '/google.logging.v2.ConfigServiceV2/CreateSink',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.CreateSinkRequest,
  proto.google.logging.v2.LogSink,
  /**
   * @param {!proto.google.logging.v2.CreateSinkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogSink.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.CreateSinkRequest,
 *   !proto.google.logging.v2.LogSink>}
 */
const methodInfo_ConfigServiceV2_CreateSink = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.LogSink,
  /**
   * @param {!proto.google.logging.v2.CreateSinkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogSink.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.CreateSinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.LogSink)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.LogSink>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.ConfigServiceV2Client.prototype.createSink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/CreateSink',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_CreateSink,
      callback);
};


/**
 * @param {!proto.google.logging.v2.CreateSinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.LogSink>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.ConfigServiceV2PromiseClient.prototype.createSink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/CreateSink',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_CreateSink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.UpdateSinkRequest,
 *   !proto.google.logging.v2.LogSink>}
 */
const methodDescriptor_ConfigServiceV2_UpdateSink = new grpc.web.MethodDescriptor(
  '/google.logging.v2.ConfigServiceV2/UpdateSink',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.UpdateSinkRequest,
  proto.google.logging.v2.LogSink,
  /**
   * @param {!proto.google.logging.v2.UpdateSinkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogSink.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.UpdateSinkRequest,
 *   !proto.google.logging.v2.LogSink>}
 */
const methodInfo_ConfigServiceV2_UpdateSink = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.LogSink,
  /**
   * @param {!proto.google.logging.v2.UpdateSinkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogSink.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.UpdateSinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.LogSink)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.LogSink>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.ConfigServiceV2Client.prototype.updateSink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/UpdateSink',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_UpdateSink,
      callback);
};


/**
 * @param {!proto.google.logging.v2.UpdateSinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.LogSink>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.ConfigServiceV2PromiseClient.prototype.updateSink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/UpdateSink',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_UpdateSink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.DeleteSinkRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ConfigServiceV2_DeleteSink = new grpc.web.MethodDescriptor(
  '/google.logging.v2.ConfigServiceV2/DeleteSink',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.DeleteSinkRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.logging.v2.DeleteSinkRequest} request
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
 *   !proto.google.logging.v2.DeleteSinkRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ConfigServiceV2_DeleteSink = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.logging.v2.DeleteSinkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.DeleteSinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.ConfigServiceV2Client.prototype.deleteSink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/DeleteSink',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_DeleteSink,
      callback);
};


/**
 * @param {!proto.google.logging.v2.DeleteSinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.ConfigServiceV2PromiseClient.prototype.deleteSink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/DeleteSink',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_DeleteSink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.ListExclusionsRequest,
 *   !proto.google.logging.v2.ListExclusionsResponse>}
 */
const methodDescriptor_ConfigServiceV2_ListExclusions = new grpc.web.MethodDescriptor(
  '/google.logging.v2.ConfigServiceV2/ListExclusions',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.ListExclusionsRequest,
  proto.google.logging.v2.ListExclusionsResponse,
  /**
   * @param {!proto.google.logging.v2.ListExclusionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListExclusionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.ListExclusionsRequest,
 *   !proto.google.logging.v2.ListExclusionsResponse>}
 */
const methodInfo_ConfigServiceV2_ListExclusions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.ListExclusionsResponse,
  /**
   * @param {!proto.google.logging.v2.ListExclusionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListExclusionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.ListExclusionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.ListExclusionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.ListExclusionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.ConfigServiceV2Client.prototype.listExclusions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/ListExclusions',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_ListExclusions,
      callback);
};


/**
 * @param {!proto.google.logging.v2.ListExclusionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.ListExclusionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.ConfigServiceV2PromiseClient.prototype.listExclusions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/ListExclusions',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_ListExclusions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.GetExclusionRequest,
 *   !proto.google.logging.v2.LogExclusion>}
 */
const methodDescriptor_ConfigServiceV2_GetExclusion = new grpc.web.MethodDescriptor(
  '/google.logging.v2.ConfigServiceV2/GetExclusion',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.GetExclusionRequest,
  proto.google.logging.v2.LogExclusion,
  /**
   * @param {!proto.google.logging.v2.GetExclusionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogExclusion.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.GetExclusionRequest,
 *   !proto.google.logging.v2.LogExclusion>}
 */
const methodInfo_ConfigServiceV2_GetExclusion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.LogExclusion,
  /**
   * @param {!proto.google.logging.v2.GetExclusionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogExclusion.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.GetExclusionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.LogExclusion)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.LogExclusion>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.ConfigServiceV2Client.prototype.getExclusion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/GetExclusion',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_GetExclusion,
      callback);
};


/**
 * @param {!proto.google.logging.v2.GetExclusionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.LogExclusion>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.ConfigServiceV2PromiseClient.prototype.getExclusion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/GetExclusion',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_GetExclusion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.CreateExclusionRequest,
 *   !proto.google.logging.v2.LogExclusion>}
 */
const methodDescriptor_ConfigServiceV2_CreateExclusion = new grpc.web.MethodDescriptor(
  '/google.logging.v2.ConfigServiceV2/CreateExclusion',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.CreateExclusionRequest,
  proto.google.logging.v2.LogExclusion,
  /**
   * @param {!proto.google.logging.v2.CreateExclusionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogExclusion.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.CreateExclusionRequest,
 *   !proto.google.logging.v2.LogExclusion>}
 */
const methodInfo_ConfigServiceV2_CreateExclusion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.LogExclusion,
  /**
   * @param {!proto.google.logging.v2.CreateExclusionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogExclusion.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.CreateExclusionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.LogExclusion)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.LogExclusion>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.ConfigServiceV2Client.prototype.createExclusion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/CreateExclusion',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_CreateExclusion,
      callback);
};


/**
 * @param {!proto.google.logging.v2.CreateExclusionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.LogExclusion>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.ConfigServiceV2PromiseClient.prototype.createExclusion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/CreateExclusion',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_CreateExclusion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.UpdateExclusionRequest,
 *   !proto.google.logging.v2.LogExclusion>}
 */
const methodDescriptor_ConfigServiceV2_UpdateExclusion = new grpc.web.MethodDescriptor(
  '/google.logging.v2.ConfigServiceV2/UpdateExclusion',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.UpdateExclusionRequest,
  proto.google.logging.v2.LogExclusion,
  /**
   * @param {!proto.google.logging.v2.UpdateExclusionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogExclusion.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.UpdateExclusionRequest,
 *   !proto.google.logging.v2.LogExclusion>}
 */
const methodInfo_ConfigServiceV2_UpdateExclusion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.LogExclusion,
  /**
   * @param {!proto.google.logging.v2.UpdateExclusionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogExclusion.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.UpdateExclusionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.LogExclusion)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.LogExclusion>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.ConfigServiceV2Client.prototype.updateExclusion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/UpdateExclusion',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_UpdateExclusion,
      callback);
};


/**
 * @param {!proto.google.logging.v2.UpdateExclusionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.LogExclusion>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.ConfigServiceV2PromiseClient.prototype.updateExclusion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/UpdateExclusion',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_UpdateExclusion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.DeleteExclusionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ConfigServiceV2_DeleteExclusion = new grpc.web.MethodDescriptor(
  '/google.logging.v2.ConfigServiceV2/DeleteExclusion',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.DeleteExclusionRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.logging.v2.DeleteExclusionRequest} request
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
 *   !proto.google.logging.v2.DeleteExclusionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ConfigServiceV2_DeleteExclusion = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.logging.v2.DeleteExclusionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.DeleteExclusionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.ConfigServiceV2Client.prototype.deleteExclusion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/DeleteExclusion',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_DeleteExclusion,
      callback);
};


/**
 * @param {!proto.google.logging.v2.DeleteExclusionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.ConfigServiceV2PromiseClient.prototype.deleteExclusion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.ConfigServiceV2/DeleteExclusion',
      request,
      metadata || {},
      methodDescriptor_ConfigServiceV2_DeleteExclusion);
};


module.exports = proto.google.logging.v2;

