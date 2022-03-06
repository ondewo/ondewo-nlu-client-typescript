/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_dialogflow_v2beta1_context_pb = require('../../../../google/cloud/dialogflow/v2beta1/context_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dialogflow = {};
proto.google.cloud.dialogflow.v2beta1 = require('./intent_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dialogflow.v2beta1.IntentsClient =
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
proto.google.cloud.dialogflow.v2beta1.IntentsPromiseClient =
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
 *   !proto.google.cloud.dialogflow.v2beta1.ListIntentsRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.ListIntentsResponse>}
 */
const methodDescriptor_Intents_ListIntents = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Intents/ListIntents',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.ListIntentsRequest,
  proto.google.cloud.dialogflow.v2beta1.ListIntentsResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.ListIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.ListIntentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.ListIntentsRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.ListIntentsResponse>}
 */
const methodInfo_Intents_ListIntents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.ListIntentsResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.ListIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.ListIntentsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.ListIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.ListIntentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.ListIntentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.IntentsClient.prototype.listIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/ListIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_ListIntents,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.ListIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.ListIntentsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.IntentsPromiseClient.prototype.listIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/ListIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_ListIntents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.GetIntentRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.Intent>}
 */
const methodDescriptor_Intents_GetIntent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Intents/GetIntent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.GetIntentRequest,
  proto.google.cloud.dialogflow.v2beta1.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.GetIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.Intent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.GetIntentRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.Intent>}
 */
const methodInfo_Intents_GetIntent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.GetIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.Intent.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.GetIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.IntentsClient.prototype.getIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/GetIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_GetIntent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.GetIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.Intent>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.IntentsPromiseClient.prototype.getIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/GetIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_GetIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.CreateIntentRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.Intent>}
 */
const methodDescriptor_Intents_CreateIntent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Intents/CreateIntent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.CreateIntentRequest,
  proto.google.cloud.dialogflow.v2beta1.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.CreateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.Intent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.CreateIntentRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.Intent>}
 */
const methodInfo_Intents_CreateIntent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.CreateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.Intent.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.CreateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.IntentsClient.prototype.createIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/CreateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_CreateIntent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.CreateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.Intent>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.IntentsPromiseClient.prototype.createIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/CreateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_CreateIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.UpdateIntentRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.Intent>}
 */
const methodDescriptor_Intents_UpdateIntent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Intents/UpdateIntent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.UpdateIntentRequest,
  proto.google.cloud.dialogflow.v2beta1.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.UpdateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.Intent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.UpdateIntentRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.Intent>}
 */
const methodInfo_Intents_UpdateIntent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.Intent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.UpdateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.Intent.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.UpdateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.IntentsClient.prototype.updateIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/UpdateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_UpdateIntent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.UpdateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.Intent>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.IntentsPromiseClient.prototype.updateIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/UpdateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_UpdateIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.DeleteIntentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Intents_DeleteIntent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Intents/DeleteIntent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.DeleteIntentRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteIntentRequest} request
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
 *   !proto.google.cloud.dialogflow.v2beta1.DeleteIntentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Intents_DeleteIntent = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.IntentsClient.prototype.deleteIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/DeleteIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_DeleteIntent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.IntentsPromiseClient.prototype.deleteIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/DeleteIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_DeleteIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.BatchUpdateIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Intents_BatchUpdateIntents = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Intents/BatchUpdateIntents',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.BatchUpdateIntentsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.BatchUpdateIntentsRequest} request
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
 *   !proto.google.cloud.dialogflow.v2beta1.BatchUpdateIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Intents_BatchUpdateIntents = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.BatchUpdateIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.BatchUpdateIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.IntentsClient.prototype.batchUpdateIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/BatchUpdateIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateIntents,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.BatchUpdateIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.IntentsPromiseClient.prototype.batchUpdateIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/BatchUpdateIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateIntents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.BatchDeleteIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Intents_BatchDeleteIntents = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Intents/BatchDeleteIntents',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.BatchDeleteIntentsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.BatchDeleteIntentsRequest} request
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
 *   !proto.google.cloud.dialogflow.v2beta1.BatchDeleteIntentsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Intents_BatchDeleteIntents = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.BatchDeleteIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.BatchDeleteIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.IntentsClient.prototype.batchDeleteIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/BatchDeleteIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteIntents,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.BatchDeleteIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.IntentsPromiseClient.prototype.batchDeleteIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Intents/BatchDeleteIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteIntents);
};


module.exports = proto.google.cloud.dialogflow.v2beta1;

