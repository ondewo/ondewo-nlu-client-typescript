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

var google_cloud_dialogflow_v2_context_pb = require('../../../../google/cloud/dialogflow/v2/context_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dialogflow = {};
proto.google.cloud.dialogflow.v2 = require('./intent_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dialogflow.v2.IntentsClient =
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
proto.google.cloud.dialogflow.v2.IntentsPromiseClient =
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
 *   !proto.google.cloud.dialogflow.v2.ListIntentsRequest,
 *   !proto.google.cloud.dialogflow.v2.ListIntentsResponse>}
 */
const methodDescriptor_Intents_ListIntents = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Intents/ListIntents',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.ListIntentsRequest,
  proto.google.cloud.dialogflow.v2.ListIntentsResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.ListIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.ListIntentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.ListIntentsRequest,
 *   !proto.google.cloud.dialogflow.v2.ListIntentsResponse>}
 */
const methodInfo_Intents_ListIntents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.ListIntentsResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.ListIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.ListIntentsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.ListIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.ListIntentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.ListIntentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.IntentsClient.prototype.listIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/ListIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_ListIntents,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.ListIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.ListIntentsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.IntentsPromiseClient.prototype.listIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/ListIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_ListIntents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.GetIntentRequest,
 *   !proto.google.cloud.dialogflow.v2.Intent>}
 */
const methodDescriptor_Intents_GetIntent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Intents/GetIntent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.GetIntentRequest,
  proto.google.cloud.dialogflow.v2.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.GetIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Intent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.GetIntentRequest,
 *   !proto.google.cloud.dialogflow.v2.Intent>}
 */
const methodInfo_Intents_GetIntent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.GetIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Intent.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.GetIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.IntentsClient.prototype.getIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/GetIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_GetIntent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.GetIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.Intent>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.IntentsPromiseClient.prototype.getIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/GetIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_GetIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.CreateIntentRequest,
 *   !proto.google.cloud.dialogflow.v2.Intent>}
 */
const methodDescriptor_Intents_CreateIntent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Intents/CreateIntent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.CreateIntentRequest,
  proto.google.cloud.dialogflow.v2.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.CreateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Intent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.CreateIntentRequest,
 *   !proto.google.cloud.dialogflow.v2.Intent>}
 */
const methodInfo_Intents_CreateIntent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.CreateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Intent.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.CreateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.IntentsClient.prototype.createIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/CreateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_CreateIntent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.CreateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.Intent>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.IntentsPromiseClient.prototype.createIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/CreateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_CreateIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.UpdateIntentRequest,
 *   !proto.google.cloud.dialogflow.v2.Intent>}
 */
const methodDescriptor_Intents_UpdateIntent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Intents/UpdateIntent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.UpdateIntentRequest,
  proto.google.cloud.dialogflow.v2.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.UpdateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Intent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.UpdateIntentRequest,
 *   !proto.google.cloud.dialogflow.v2.Intent>}
 */
const methodInfo_Intents_UpdateIntent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.UpdateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.Intent.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.UpdateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.IntentsClient.prototype.updateIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/UpdateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_UpdateIntent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.UpdateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.Intent>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.IntentsPromiseClient.prototype.updateIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/UpdateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_UpdateIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.DeleteIntentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Intents_DeleteIntent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Intents/DeleteIntent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.DeleteIntentRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DeleteIntentRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.DeleteIntentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Intents_DeleteIntent = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DeleteIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.DeleteIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.IntentsClient.prototype.deleteIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/DeleteIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_DeleteIntent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.DeleteIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.IntentsPromiseClient.prototype.deleteIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/DeleteIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_DeleteIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Intents_BatchUpdateIntents = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Intents/BatchUpdateIntents',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Intents_BatchUpdateIntents = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.IntentsClient.prototype.batchUpdateIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/BatchUpdateIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateIntents,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.IntentsPromiseClient.prototype.batchUpdateIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/BatchUpdateIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateIntents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Intents_BatchDeleteIntents = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Intents/BatchDeleteIntents',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Intents_BatchDeleteIntents = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.IntentsClient.prototype.batchDeleteIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/BatchDeleteIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteIntents,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.IntentsPromiseClient.prototype.batchDeleteIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Intents/BatchDeleteIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteIntents);
};


module.exports = proto.google.cloud.dialogflow.v2;

