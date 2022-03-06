/**
 * @fileoverview gRPC-Web generated client stub for google.datastore.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_datastore_v1_entity_pb = require('../../../google/datastore/v1/entity_pb.js')

var google_datastore_v1_query_pb = require('../../../google/datastore/v1/query_pb.js')
const proto = {};
proto.google = {};
proto.google.datastore = {};
proto.google.datastore.v1 = require('./datastore_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.datastore.v1.DatastoreClient =
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
proto.google.datastore.v1.DatastorePromiseClient =
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
 *   !proto.google.datastore.v1.LookupRequest,
 *   !proto.google.datastore.v1.LookupResponse>}
 */
const methodDescriptor_Datastore_Lookup = new grpc.web.MethodDescriptor(
  '/google.datastore.v1.Datastore/Lookup',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1.LookupRequest,
  proto.google.datastore.v1.LookupResponse,
  /**
   * @param {!proto.google.datastore.v1.LookupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.LookupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1.LookupRequest,
 *   !proto.google.datastore.v1.LookupResponse>}
 */
const methodInfo_Datastore_Lookup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1.LookupResponse,
  /**
   * @param {!proto.google.datastore.v1.LookupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.LookupResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1.LookupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1.LookupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1.LookupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1.DatastoreClient.prototype.lookup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1.Datastore/Lookup',
      request,
      metadata || {},
      methodDescriptor_Datastore_Lookup,
      callback);
};


/**
 * @param {!proto.google.datastore.v1.LookupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1.LookupResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1.DatastorePromiseClient.prototype.lookup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1.Datastore/Lookup',
      request,
      metadata || {},
      methodDescriptor_Datastore_Lookup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1.RunQueryRequest,
 *   !proto.google.datastore.v1.RunQueryResponse>}
 */
const methodDescriptor_Datastore_RunQuery = new grpc.web.MethodDescriptor(
  '/google.datastore.v1.Datastore/RunQuery',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1.RunQueryRequest,
  proto.google.datastore.v1.RunQueryResponse,
  /**
   * @param {!proto.google.datastore.v1.RunQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.RunQueryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1.RunQueryRequest,
 *   !proto.google.datastore.v1.RunQueryResponse>}
 */
const methodInfo_Datastore_RunQuery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1.RunQueryResponse,
  /**
   * @param {!proto.google.datastore.v1.RunQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.RunQueryResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1.RunQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1.RunQueryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1.RunQueryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1.DatastoreClient.prototype.runQuery =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1.Datastore/RunQuery',
      request,
      metadata || {},
      methodDescriptor_Datastore_RunQuery,
      callback);
};


/**
 * @param {!proto.google.datastore.v1.RunQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1.RunQueryResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1.DatastorePromiseClient.prototype.runQuery =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1.Datastore/RunQuery',
      request,
      metadata || {},
      methodDescriptor_Datastore_RunQuery);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1.BeginTransactionRequest,
 *   !proto.google.datastore.v1.BeginTransactionResponse>}
 */
const methodDescriptor_Datastore_BeginTransaction = new grpc.web.MethodDescriptor(
  '/google.datastore.v1.Datastore/BeginTransaction',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1.BeginTransactionRequest,
  proto.google.datastore.v1.BeginTransactionResponse,
  /**
   * @param {!proto.google.datastore.v1.BeginTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.BeginTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1.BeginTransactionRequest,
 *   !proto.google.datastore.v1.BeginTransactionResponse>}
 */
const methodInfo_Datastore_BeginTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1.BeginTransactionResponse,
  /**
   * @param {!proto.google.datastore.v1.BeginTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.BeginTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1.BeginTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1.BeginTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1.BeginTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1.DatastoreClient.prototype.beginTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1.Datastore/BeginTransaction',
      request,
      metadata || {},
      methodDescriptor_Datastore_BeginTransaction,
      callback);
};


/**
 * @param {!proto.google.datastore.v1.BeginTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1.BeginTransactionResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1.DatastorePromiseClient.prototype.beginTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1.Datastore/BeginTransaction',
      request,
      metadata || {},
      methodDescriptor_Datastore_BeginTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1.CommitRequest,
 *   !proto.google.datastore.v1.CommitResponse>}
 */
const methodDescriptor_Datastore_Commit = new grpc.web.MethodDescriptor(
  '/google.datastore.v1.Datastore/Commit',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1.CommitRequest,
  proto.google.datastore.v1.CommitResponse,
  /**
   * @param {!proto.google.datastore.v1.CommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.CommitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1.CommitRequest,
 *   !proto.google.datastore.v1.CommitResponse>}
 */
const methodInfo_Datastore_Commit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1.CommitResponse,
  /**
   * @param {!proto.google.datastore.v1.CommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.CommitResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1.CommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1.CommitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1.CommitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1.DatastoreClient.prototype.commit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1.Datastore/Commit',
      request,
      metadata || {},
      methodDescriptor_Datastore_Commit,
      callback);
};


/**
 * @param {!proto.google.datastore.v1.CommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1.CommitResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1.DatastorePromiseClient.prototype.commit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1.Datastore/Commit',
      request,
      metadata || {},
      methodDescriptor_Datastore_Commit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1.RollbackRequest,
 *   !proto.google.datastore.v1.RollbackResponse>}
 */
const methodDescriptor_Datastore_Rollback = new grpc.web.MethodDescriptor(
  '/google.datastore.v1.Datastore/Rollback',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1.RollbackRequest,
  proto.google.datastore.v1.RollbackResponse,
  /**
   * @param {!proto.google.datastore.v1.RollbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.RollbackResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1.RollbackRequest,
 *   !proto.google.datastore.v1.RollbackResponse>}
 */
const methodInfo_Datastore_Rollback = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1.RollbackResponse,
  /**
   * @param {!proto.google.datastore.v1.RollbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.RollbackResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1.RollbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1.RollbackResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1.RollbackResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1.DatastoreClient.prototype.rollback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1.Datastore/Rollback',
      request,
      metadata || {},
      methodDescriptor_Datastore_Rollback,
      callback);
};


/**
 * @param {!proto.google.datastore.v1.RollbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1.RollbackResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1.DatastorePromiseClient.prototype.rollback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1.Datastore/Rollback',
      request,
      metadata || {},
      methodDescriptor_Datastore_Rollback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1.AllocateIdsRequest,
 *   !proto.google.datastore.v1.AllocateIdsResponse>}
 */
const methodDescriptor_Datastore_AllocateIds = new grpc.web.MethodDescriptor(
  '/google.datastore.v1.Datastore/AllocateIds',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1.AllocateIdsRequest,
  proto.google.datastore.v1.AllocateIdsResponse,
  /**
   * @param {!proto.google.datastore.v1.AllocateIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.AllocateIdsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1.AllocateIdsRequest,
 *   !proto.google.datastore.v1.AllocateIdsResponse>}
 */
const methodInfo_Datastore_AllocateIds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1.AllocateIdsResponse,
  /**
   * @param {!proto.google.datastore.v1.AllocateIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.AllocateIdsResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1.AllocateIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1.AllocateIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1.AllocateIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1.DatastoreClient.prototype.allocateIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1.Datastore/AllocateIds',
      request,
      metadata || {},
      methodDescriptor_Datastore_AllocateIds,
      callback);
};


/**
 * @param {!proto.google.datastore.v1.AllocateIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1.AllocateIdsResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1.DatastorePromiseClient.prototype.allocateIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1.Datastore/AllocateIds',
      request,
      metadata || {},
      methodDescriptor_Datastore_AllocateIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1.ReserveIdsRequest,
 *   !proto.google.datastore.v1.ReserveIdsResponse>}
 */
const methodDescriptor_Datastore_ReserveIds = new grpc.web.MethodDescriptor(
  '/google.datastore.v1.Datastore/ReserveIds',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1.ReserveIdsRequest,
  proto.google.datastore.v1.ReserveIdsResponse,
  /**
   * @param {!proto.google.datastore.v1.ReserveIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.ReserveIdsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1.ReserveIdsRequest,
 *   !proto.google.datastore.v1.ReserveIdsResponse>}
 */
const methodInfo_Datastore_ReserveIds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1.ReserveIdsResponse,
  /**
   * @param {!proto.google.datastore.v1.ReserveIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1.ReserveIdsResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1.ReserveIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1.ReserveIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1.ReserveIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1.DatastoreClient.prototype.reserveIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1.Datastore/ReserveIds',
      request,
      metadata || {},
      methodDescriptor_Datastore_ReserveIds,
      callback);
};


/**
 * @param {!proto.google.datastore.v1.ReserveIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1.ReserveIdsResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1.DatastorePromiseClient.prototype.reserveIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1.Datastore/ReserveIds',
      request,
      metadata || {},
      methodDescriptor_Datastore_ReserveIds);
};


module.exports = proto.google.datastore.v1;

