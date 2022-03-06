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

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dialogflow = {};
proto.google.cloud.dialogflow.v2beta1 = require('./agent_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dialogflow.v2beta1.AgentsClient =
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
proto.google.cloud.dialogflow.v2beta1.AgentsPromiseClient =
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
 *   !proto.google.cloud.dialogflow.v2beta1.GetAgentRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.Agent>}
 */
const methodDescriptor_Agents_GetAgent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Agents/GetAgent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.GetAgentRequest,
  proto.google.cloud.dialogflow.v2beta1.Agent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.GetAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.Agent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.GetAgentRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.Agent>}
 */
const methodInfo_Agents_GetAgent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.Agent,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.GetAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.Agent.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.GetAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.Agent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.Agent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.AgentsClient.prototype.getAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/GetAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_GetAgent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.GetAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.Agent>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.AgentsPromiseClient.prototype.getAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/GetAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_GetAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.SearchAgentsRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.SearchAgentsResponse>}
 */
const methodDescriptor_Agents_SearchAgents = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Agents/SearchAgents',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.SearchAgentsRequest,
  proto.google.cloud.dialogflow.v2beta1.SearchAgentsResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.SearchAgentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.SearchAgentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.SearchAgentsRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.SearchAgentsResponse>}
 */
const methodInfo_Agents_SearchAgents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.SearchAgentsResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.SearchAgentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.SearchAgentsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.SearchAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.SearchAgentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.SearchAgentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.AgentsClient.prototype.searchAgents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/SearchAgents',
      request,
      metadata || {},
      methodDescriptor_Agents_SearchAgents,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.SearchAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.SearchAgentsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.AgentsPromiseClient.prototype.searchAgents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/SearchAgents',
      request,
      metadata || {},
      methodDescriptor_Agents_SearchAgents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.TrainAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Agents_TrainAgent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Agents/TrainAgent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.TrainAgentRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.TrainAgentRequest} request
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
 *   !proto.google.cloud.dialogflow.v2beta1.TrainAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Agents_TrainAgent = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.TrainAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.TrainAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.AgentsClient.prototype.trainAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/TrainAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_TrainAgent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.TrainAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.AgentsPromiseClient.prototype.trainAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/TrainAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_TrainAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.ExportAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Agents_ExportAgent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Agents/ExportAgent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.ExportAgentRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.ExportAgentRequest} request
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
 *   !proto.google.cloud.dialogflow.v2beta1.ExportAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Agents_ExportAgent = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.ExportAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.ExportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.AgentsClient.prototype.exportAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/ExportAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_ExportAgent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.ExportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.AgentsPromiseClient.prototype.exportAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/ExportAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_ExportAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.ImportAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Agents_ImportAgent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Agents/ImportAgent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.ImportAgentRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.ImportAgentRequest} request
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
 *   !proto.google.cloud.dialogflow.v2beta1.ImportAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Agents_ImportAgent = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.ImportAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.ImportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.AgentsClient.prototype.importAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/ImportAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_ImportAgent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.ImportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.AgentsPromiseClient.prototype.importAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/ImportAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_ImportAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.RestoreAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Agents_RestoreAgent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.Agents/RestoreAgent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.RestoreAgentRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.RestoreAgentRequest} request
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
 *   !proto.google.cloud.dialogflow.v2beta1.RestoreAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Agents_RestoreAgent = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.RestoreAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.RestoreAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.AgentsClient.prototype.restoreAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/RestoreAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_RestoreAgent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.RestoreAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.AgentsPromiseClient.prototype.restoreAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.Agents/RestoreAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_RestoreAgent);
};


module.exports = proto.google.cloud.dialogflow.v2beta1;

