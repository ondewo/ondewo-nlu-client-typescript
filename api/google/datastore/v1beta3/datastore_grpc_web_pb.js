/**
 * @fileoverview gRPC-Web generated client stub for google.datastore.v1beta3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_datastore_v1beta3_entity_pb = require('../../../google/datastore/v1beta3/entity_pb.js')

var google_datastore_v1beta3_query_pb = require('../../../google/datastore/v1beta3/query_pb.js')
const proto = {};
proto.google = {};
proto.google.datastore = {};
proto.google.datastore.v1beta3 = require('./datastore_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.datastore.v1beta3.DatastoreClient =
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
proto.google.datastore.v1beta3.DatastorePromiseClient =
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
 *   !proto.google.datastore.v1beta3.LookupRequest,
 *   !proto.google.datastore.v1beta3.LookupResponse>}
 */
const methodDescriptor_Datastore_Lookup = new grpc.web.MethodDescriptor(
  '/google.datastore.v1beta3.Datastore/Lookup',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1beta3.LookupRequest,
  proto.google.datastore.v1beta3.LookupResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.LookupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.LookupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1beta3.LookupRequest,
 *   !proto.google.datastore.v1beta3.LookupResponse>}
 */
const methodInfo_Datastore_Lookup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1beta3.LookupResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.LookupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.LookupResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1beta3.LookupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1beta3.LookupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1beta3.LookupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1beta3.DatastoreClient.prototype.lookup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/Lookup',
      request,
      metadata || {},
      methodDescriptor_Datastore_Lookup,
      callback);
};


/**
 * @param {!proto.google.datastore.v1beta3.LookupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1beta3.LookupResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1beta3.DatastorePromiseClient.prototype.lookup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/Lookup',
      request,
      metadata || {},
      methodDescriptor_Datastore_Lookup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1beta3.RunQueryRequest,
 *   !proto.google.datastore.v1beta3.RunQueryResponse>}
 */
const methodDescriptor_Datastore_RunQuery = new grpc.web.MethodDescriptor(
  '/google.datastore.v1beta3.Datastore/RunQuery',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1beta3.RunQueryRequest,
  proto.google.datastore.v1beta3.RunQueryResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.RunQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.RunQueryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1beta3.RunQueryRequest,
 *   !proto.google.datastore.v1beta3.RunQueryResponse>}
 */
const methodInfo_Datastore_RunQuery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1beta3.RunQueryResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.RunQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.RunQueryResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1beta3.RunQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1beta3.RunQueryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1beta3.RunQueryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1beta3.DatastoreClient.prototype.runQuery =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/RunQuery',
      request,
      metadata || {},
      methodDescriptor_Datastore_RunQuery,
      callback);
};


/**
 * @param {!proto.google.datastore.v1beta3.RunQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1beta3.RunQueryResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1beta3.DatastorePromiseClient.prototype.runQuery =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/RunQuery',
      request,
      metadata || {},
      methodDescriptor_Datastore_RunQuery);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1beta3.BeginTransactionRequest,
 *   !proto.google.datastore.v1beta3.BeginTransactionResponse>}
 */
const methodDescriptor_Datastore_BeginTransaction = new grpc.web.MethodDescriptor(
  '/google.datastore.v1beta3.Datastore/BeginTransaction',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1beta3.BeginTransactionRequest,
  proto.google.datastore.v1beta3.BeginTransactionResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.BeginTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.BeginTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1beta3.BeginTransactionRequest,
 *   !proto.google.datastore.v1beta3.BeginTransactionResponse>}
 */
const methodInfo_Datastore_BeginTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1beta3.BeginTransactionResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.BeginTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.BeginTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1beta3.BeginTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1beta3.BeginTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1beta3.BeginTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1beta3.DatastoreClient.prototype.beginTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/BeginTransaction',
      request,
      metadata || {},
      methodDescriptor_Datastore_BeginTransaction,
      callback);
};


/**
 * @param {!proto.google.datastore.v1beta3.BeginTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1beta3.BeginTransactionResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1beta3.DatastorePromiseClient.prototype.beginTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/BeginTransaction',
      request,
      metadata || {},
      methodDescriptor_Datastore_BeginTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1beta3.CommitRequest,
 *   !proto.google.datastore.v1beta3.CommitResponse>}
 */
const methodDescriptor_Datastore_Commit = new grpc.web.MethodDescriptor(
  '/google.datastore.v1beta3.Datastore/Commit',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1beta3.CommitRequest,
  proto.google.datastore.v1beta3.CommitResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.CommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.CommitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1beta3.CommitRequest,
 *   !proto.google.datastore.v1beta3.CommitResponse>}
 */
const methodInfo_Datastore_Commit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1beta3.CommitResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.CommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.CommitResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1beta3.CommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1beta3.CommitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1beta3.CommitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1beta3.DatastoreClient.prototype.commit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/Commit',
      request,
      metadata || {},
      methodDescriptor_Datastore_Commit,
      callback);
};


/**
 * @param {!proto.google.datastore.v1beta3.CommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1beta3.CommitResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1beta3.DatastorePromiseClient.prototype.commit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/Commit',
      request,
      metadata || {},
      methodDescriptor_Datastore_Commit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1beta3.RollbackRequest,
 *   !proto.google.datastore.v1beta3.RollbackResponse>}
 */
const methodDescriptor_Datastore_Rollback = new grpc.web.MethodDescriptor(
  '/google.datastore.v1beta3.Datastore/Rollback',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1beta3.RollbackRequest,
  proto.google.datastore.v1beta3.RollbackResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.RollbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.RollbackResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1beta3.RollbackRequest,
 *   !proto.google.datastore.v1beta3.RollbackResponse>}
 */
const methodInfo_Datastore_Rollback = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1beta3.RollbackResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.RollbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.RollbackResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1beta3.RollbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1beta3.RollbackResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1beta3.RollbackResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1beta3.DatastoreClient.prototype.rollback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/Rollback',
      request,
      metadata || {},
      methodDescriptor_Datastore_Rollback,
      callback);
};


/**
 * @param {!proto.google.datastore.v1beta3.RollbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1beta3.RollbackResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1beta3.DatastorePromiseClient.prototype.rollback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/Rollback',
      request,
      metadata || {},
      methodDescriptor_Datastore_Rollback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1beta3.AllocateIdsRequest,
 *   !proto.google.datastore.v1beta3.AllocateIdsResponse>}
 */
const methodDescriptor_Datastore_AllocateIds = new grpc.web.MethodDescriptor(
  '/google.datastore.v1beta3.Datastore/AllocateIds',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1beta3.AllocateIdsRequest,
  proto.google.datastore.v1beta3.AllocateIdsResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.AllocateIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.AllocateIdsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1beta3.AllocateIdsRequest,
 *   !proto.google.datastore.v1beta3.AllocateIdsResponse>}
 */
const methodInfo_Datastore_AllocateIds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1beta3.AllocateIdsResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.AllocateIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.AllocateIdsResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1beta3.AllocateIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1beta3.AllocateIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1beta3.AllocateIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1beta3.DatastoreClient.prototype.allocateIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/AllocateIds',
      request,
      metadata || {},
      methodDescriptor_Datastore_AllocateIds,
      callback);
};


/**
 * @param {!proto.google.datastore.v1beta3.AllocateIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1beta3.AllocateIdsResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1beta3.DatastorePromiseClient.prototype.allocateIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/AllocateIds',
      request,
      metadata || {},
      methodDescriptor_Datastore_AllocateIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.datastore.v1beta3.ReserveIdsRequest,
 *   !proto.google.datastore.v1beta3.ReserveIdsResponse>}
 */
const methodDescriptor_Datastore_ReserveIds = new grpc.web.MethodDescriptor(
  '/google.datastore.v1beta3.Datastore/ReserveIds',
  grpc.web.MethodType.UNARY,
  proto.google.datastore.v1beta3.ReserveIdsRequest,
  proto.google.datastore.v1beta3.ReserveIdsResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.ReserveIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.ReserveIdsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.datastore.v1beta3.ReserveIdsRequest,
 *   !proto.google.datastore.v1beta3.ReserveIdsResponse>}
 */
const methodInfo_Datastore_ReserveIds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.datastore.v1beta3.ReserveIdsResponse,
  /**
   * @param {!proto.google.datastore.v1beta3.ReserveIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.datastore.v1beta3.ReserveIdsResponse.deserializeBinary
);


/**
 * @param {!proto.google.datastore.v1beta3.ReserveIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.datastore.v1beta3.ReserveIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.datastore.v1beta3.ReserveIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.datastore.v1beta3.DatastoreClient.prototype.reserveIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/ReserveIds',
      request,
      metadata || {},
      methodDescriptor_Datastore_ReserveIds,
      callback);
};


/**
 * @param {!proto.google.datastore.v1beta3.ReserveIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.datastore.v1beta3.ReserveIdsResponse>}
 *     Promise that resolves to the response
 */
proto.google.datastore.v1beta3.DatastorePromiseClient.prototype.reserveIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.datastore.v1beta3.Datastore/ReserveIds',
      request,
      metadata || {},
      methodDescriptor_Datastore_ReserveIds);
};


module.exports = proto.google.datastore.v1beta3;

