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

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dialogflow = {};
proto.google.cloud.dialogflow.v2 = require('./context_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dialogflow.v2.ContextsClient =
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
proto.google.cloud.dialogflow.v2.ContextsPromiseClient =
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
 *   !proto.google.cloud.dialogflow.v2.ListContextsRequest,
 *   !proto.google.cloud.dialogflow.v2.ListContextsResponse>}
 */
const methodDescriptor_Contexts_ListContexts = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Contexts/ListContexts',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.ListContextsRequest,
  proto.google.cloud.dialogflow.v2.ListContextsResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.ListContextsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.ListContextsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.ListContextsRequest,
 *   !proto.google.cloud.dialogflow.v2.ListContextsResponse>}
 */
const methodInfo_Contexts_ListContexts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.ListContextsResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.ListContextsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.ListContextsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.ListContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.ListContextsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.ListContextsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.ContextsClient.prototype.listContexts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/ListContexts',
      request,
      metadata || {},
      methodDescriptor_Contexts_ListContexts,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.ListContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.ListContextsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.ContextsPromiseClient.prototype.listContexts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/ListContexts',
      request,
      metadata || {},
      methodDescriptor_Contexts_ListContexts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.GetContextRequest,
 *   !proto.google.cloud.dialogflow.v2.Context>}
 */
const methodDescriptor_Contexts_GetContext = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Contexts/GetContext',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.GetContextRequest,
  proto.google.cloud.dialogflow.v2.Context,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.GetContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Context.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.GetContextRequest,
 *   !proto.google.cloud.dialogflow.v2.Context>}
 */
const methodInfo_Contexts_GetContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.Context,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.GetContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Context.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.GetContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.Context)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.Context>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.ContextsClient.prototype.getContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/GetContext',
      request,
      metadata || {},
      methodDescriptor_Contexts_GetContext,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.GetContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.Context>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.ContextsPromiseClient.prototype.getContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/GetContext',
      request,
      metadata || {},
      methodDescriptor_Contexts_GetContext);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.CreateContextRequest,
 *   !proto.google.cloud.dialogflow.v2.Context>}
 */
const methodDescriptor_Contexts_CreateContext = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Contexts/CreateContext',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.CreateContextRequest,
  proto.google.cloud.dialogflow.v2.Context,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.CreateContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Context.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.CreateContextRequest,
 *   !proto.google.cloud.dialogflow.v2.Context>}
 */
const methodInfo_Contexts_CreateContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.Context,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.CreateContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Context.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.CreateContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.Context)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.Context>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.ContextsClient.prototype.createContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/CreateContext',
      request,
      metadata || {},
      methodDescriptor_Contexts_CreateContext,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.CreateContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.Context>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.ContextsPromiseClient.prototype.createContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/CreateContext',
      request,
      metadata || {},
      methodDescriptor_Contexts_CreateContext);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.UpdateContextRequest,
 *   !proto.google.cloud.dialogflow.v2.Context>}
 */
const methodDescriptor_Contexts_UpdateContext = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Contexts/UpdateContext',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.UpdateContextRequest,
  proto.google.cloud.dialogflow.v2.Context,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.UpdateContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Context.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.UpdateContextRequest,
 *   !proto.google.cloud.dialogflow.v2.Context>}
 */
const methodInfo_Contexts_UpdateContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.Context,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.UpdateContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Context.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.UpdateContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.Context)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.Context>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.ContextsClient.prototype.updateContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/UpdateContext',
      request,
      metadata || {},
      methodDescriptor_Contexts_UpdateContext,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.UpdateContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.Context>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.ContextsPromiseClient.prototype.updateContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/UpdateContext',
      request,
      metadata || {},
      methodDescriptor_Contexts_UpdateContext);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.DeleteContextRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Contexts_DeleteContext = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Contexts/DeleteContext',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.DeleteContextRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DeleteContextRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.DeleteContextRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Contexts_DeleteContext = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DeleteContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.DeleteContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.ContextsClient.prototype.deleteContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/DeleteContext',
      request,
      metadata || {},
      methodDescriptor_Contexts_DeleteContext,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.DeleteContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.ContextsPromiseClient.prototype.deleteContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/DeleteContext',
      request,
      metadata || {},
      methodDescriptor_Contexts_DeleteContext);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.DeleteAllContextsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Contexts_DeleteAllContexts = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Contexts/DeleteAllContexts',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.DeleteAllContextsRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DeleteAllContextsRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.DeleteAllContextsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Contexts_DeleteAllContexts = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DeleteAllContextsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.DeleteAllContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.ContextsClient.prototype.deleteAllContexts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/DeleteAllContexts',
      request,
      metadata || {},
      methodDescriptor_Contexts_DeleteAllContexts,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.DeleteAllContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.ContextsPromiseClient.prototype.deleteAllContexts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Contexts/DeleteAllContexts',
      request,
      metadata || {},
      methodDescriptor_Contexts_DeleteAllContexts);
};


module.exports = proto.google.cloud.dialogflow.v2;

