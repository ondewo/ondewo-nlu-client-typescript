/**
 * @fileoverview gRPC-Web generated client stub for ondewo.nlu
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js')

var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js')

var google_longrunning_operations_pb = require('../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./intent_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.IntentsClient =
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
proto.ondewo.nlu.IntentsPromiseClient =
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
 *   !proto.ondewo.nlu.ListIntentsRequest,
 *   !proto.ondewo.nlu.ListIntentsResponse>}
 */
const methodDescriptor_Intents_ListIntents = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/ListIntents',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListIntentsRequest,
  proto.ondewo.nlu.ListIntentsResponse,
  /**
   * @param {!proto.ondewo.nlu.ListIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListIntentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.ListIntentsRequest,
 *   !proto.ondewo.nlu.ListIntentsResponse>}
 */
const methodInfo_Intents_ListIntents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.ListIntentsResponse,
  /**
   * @param {!proto.ondewo.nlu.ListIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListIntentsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.ListIntentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListIntentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.listIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_ListIntents,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListIntentsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.listIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_ListIntents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetIntentRequest,
 *   !proto.ondewo.nlu.Intent>}
 */
const methodDescriptor_Intents_GetIntent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/GetIntent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetIntentRequest,
  proto.ondewo.nlu.Intent,
  /**
   * @param {!proto.ondewo.nlu.GetIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Intent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.GetIntentRequest,
 *   !proto.ondewo.nlu.Intent>}
 */
const methodInfo_Intents_GetIntent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.Intent,
  /**
   * @param {!proto.ondewo.nlu.GetIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Intent.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.getIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/GetIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_GetIntent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Intent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.getIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/GetIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_GetIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CreateIntentRequest,
 *   !proto.ondewo.nlu.Intent>}
 */
const methodDescriptor_Intents_CreateIntent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/CreateIntent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.CreateIntentRequest,
  proto.ondewo.nlu.Intent,
  /**
   * @param {!proto.ondewo.nlu.CreateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Intent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.CreateIntentRequest,
 *   !proto.ondewo.nlu.Intent>}
 */
const methodInfo_Intents_CreateIntent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.Intent,
  /**
   * @param {!proto.ondewo.nlu.CreateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Intent.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.CreateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.createIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/CreateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_CreateIntent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.CreateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Intent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.createIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/CreateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_CreateIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.UpdateIntentRequest,
 *   !proto.ondewo.nlu.Intent>}
 */
const methodDescriptor_Intents_UpdateIntent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/UpdateIntent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.UpdateIntentRequest,
  proto.ondewo.nlu.Intent,
  /**
   * @param {!proto.ondewo.nlu.UpdateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Intent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.UpdateIntentRequest,
 *   !proto.ondewo.nlu.Intent>}
 */
const methodInfo_Intents_UpdateIntent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.Intent,
  /**
   * @param {!proto.ondewo.nlu.UpdateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Intent.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.UpdateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.updateIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/UpdateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_UpdateIntent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.UpdateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Intent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.updateIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/UpdateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_UpdateIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteIntentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Intents_DeleteIntent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/DeleteIntent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.DeleteIntentRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.DeleteIntentRequest} request
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
 *   !proto.ondewo.nlu.DeleteIntentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Intents_DeleteIntent = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.DeleteIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.DeleteIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.deleteIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/DeleteIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_DeleteIntent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.DeleteIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.deleteIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/DeleteIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_DeleteIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchUpdateIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Intents_BatchUpdateIntents = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchUpdateIntents',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchUpdateIntentsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.BatchUpdateIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.BatchUpdateIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Intents_BatchUpdateIntents = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.BatchUpdateIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchUpdateIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchUpdateIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchUpdateIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateIntents,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchUpdateIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchUpdateIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchUpdateIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateIntents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchDeleteIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Intents_BatchDeleteIntents = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchDeleteIntents',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchDeleteIntentsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.BatchDeleteIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.BatchDeleteIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Intents_BatchDeleteIntents = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.BatchDeleteIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchDeleteIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchDeleteIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchDeleteIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteIntents,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchDeleteIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchDeleteIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchDeleteIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteIntents);
};


module.exports = proto.ondewo.nlu;

