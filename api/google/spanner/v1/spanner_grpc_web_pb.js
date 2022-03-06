/**
 * @fileoverview gRPC-Web generated client stub for google.spanner.v1
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

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_spanner_v1_keys_pb = require('../../../google/spanner/v1/keys_pb.js')

var google_spanner_v1_mutation_pb = require('../../../google/spanner/v1/mutation_pb.js')

var google_spanner_v1_result_set_pb = require('../../../google/spanner/v1/result_set_pb.js')

var google_spanner_v1_transaction_pb = require('../../../google/spanner/v1/transaction_pb.js')

var google_spanner_v1_type_pb = require('../../../google/spanner/v1/type_pb.js')
const proto = {};
proto.google = {};
proto.google.spanner = {};
proto.google.spanner.v1 = require('./spanner_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.spanner.v1.SpannerClient =
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
proto.google.spanner.v1.SpannerPromiseClient =
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
 *   !proto.google.spanner.v1.CreateSessionRequest,
 *   !proto.google.spanner.v1.Session>}
 */
const methodDescriptor_Spanner_CreateSession = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/CreateSession',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.CreateSessionRequest,
  proto.google.spanner.v1.Session,
  /**
   * @param {!proto.google.spanner.v1.CreateSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.Session.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.CreateSessionRequest,
 *   !proto.google.spanner.v1.Session>}
 */
const methodInfo_Spanner_CreateSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.v1.Session,
  /**
   * @param {!proto.google.spanner.v1.CreateSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.Session.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.CreateSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.v1.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.createSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/CreateSession',
      request,
      metadata || {},
      methodDescriptor_Spanner_CreateSession,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.CreateSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.v1.Session>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.createSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/CreateSession',
      request,
      metadata || {},
      methodDescriptor_Spanner_CreateSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.GetSessionRequest,
 *   !proto.google.spanner.v1.Session>}
 */
const methodDescriptor_Spanner_GetSession = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/GetSession',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.GetSessionRequest,
  proto.google.spanner.v1.Session,
  /**
   * @param {!proto.google.spanner.v1.GetSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.Session.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.GetSessionRequest,
 *   !proto.google.spanner.v1.Session>}
 */
const methodInfo_Spanner_GetSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.v1.Session,
  /**
   * @param {!proto.google.spanner.v1.GetSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.Session.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.GetSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.v1.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.getSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/GetSession',
      request,
      metadata || {},
      methodDescriptor_Spanner_GetSession,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.GetSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.v1.Session>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.getSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/GetSession',
      request,
      metadata || {},
      methodDescriptor_Spanner_GetSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.ListSessionsRequest,
 *   !proto.google.spanner.v1.ListSessionsResponse>}
 */
const methodDescriptor_Spanner_ListSessions = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/ListSessions',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.ListSessionsRequest,
  proto.google.spanner.v1.ListSessionsResponse,
  /**
   * @param {!proto.google.spanner.v1.ListSessionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.ListSessionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.ListSessionsRequest,
 *   !proto.google.spanner.v1.ListSessionsResponse>}
 */
const methodInfo_Spanner_ListSessions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.v1.ListSessionsResponse,
  /**
   * @param {!proto.google.spanner.v1.ListSessionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.ListSessionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.ListSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.v1.ListSessionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.ListSessionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.listSessions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/ListSessions',
      request,
      metadata || {},
      methodDescriptor_Spanner_ListSessions,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.ListSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.v1.ListSessionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.listSessions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/ListSessions',
      request,
      metadata || {},
      methodDescriptor_Spanner_ListSessions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.DeleteSessionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Spanner_DeleteSession = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/DeleteSession',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.DeleteSessionRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.spanner.v1.DeleteSessionRequest} request
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
 *   !proto.google.spanner.v1.DeleteSessionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Spanner_DeleteSession = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.spanner.v1.DeleteSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.DeleteSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.deleteSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/DeleteSession',
      request,
      metadata || {},
      methodDescriptor_Spanner_DeleteSession,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.DeleteSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.deleteSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/DeleteSession',
      request,
      metadata || {},
      methodDescriptor_Spanner_DeleteSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.ExecuteSqlRequest,
 *   !proto.google.spanner.v1.ResultSet>}
 */
const methodDescriptor_Spanner_ExecuteSql = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/ExecuteSql',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.ExecuteSqlRequest,
  google_spanner_v1_result_set_pb.ResultSet,
  /**
   * @param {!proto.google.spanner.v1.ExecuteSqlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_spanner_v1_result_set_pb.ResultSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.ExecuteSqlRequest,
 *   !proto.google.spanner.v1.ResultSet>}
 */
const methodInfo_Spanner_ExecuteSql = new grpc.web.AbstractClientBase.MethodInfo(
  google_spanner_v1_result_set_pb.ResultSet,
  /**
   * @param {!proto.google.spanner.v1.ExecuteSqlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_spanner_v1_result_set_pb.ResultSet.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.ExecuteSqlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.v1.ResultSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.ResultSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.executeSql =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/ExecuteSql',
      request,
      metadata || {},
      methodDescriptor_Spanner_ExecuteSql,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.ExecuteSqlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.v1.ResultSet>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.executeSql =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/ExecuteSql',
      request,
      metadata || {},
      methodDescriptor_Spanner_ExecuteSql);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.ExecuteSqlRequest,
 *   !proto.google.spanner.v1.PartialResultSet>}
 */
const methodDescriptor_Spanner_ExecuteStreamingSql = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/ExecuteStreamingSql',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.spanner.v1.ExecuteSqlRequest,
  google_spanner_v1_result_set_pb.PartialResultSet,
  /**
   * @param {!proto.google.spanner.v1.ExecuteSqlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_spanner_v1_result_set_pb.PartialResultSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.ExecuteSqlRequest,
 *   !proto.google.spanner.v1.PartialResultSet>}
 */
const methodInfo_Spanner_ExecuteStreamingSql = new grpc.web.AbstractClientBase.MethodInfo(
  google_spanner_v1_result_set_pb.PartialResultSet,
  /**
   * @param {!proto.google.spanner.v1.ExecuteSqlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_spanner_v1_result_set_pb.PartialResultSet.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.ExecuteSqlRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.PartialResultSet>}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.executeStreamingSql =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.spanner.v1.Spanner/ExecuteStreamingSql',
      request,
      metadata || {},
      methodDescriptor_Spanner_ExecuteStreamingSql);
};


/**
 * @param {!proto.google.spanner.v1.ExecuteSqlRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.PartialResultSet>}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.executeStreamingSql =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.spanner.v1.Spanner/ExecuteStreamingSql',
      request,
      metadata || {},
      methodDescriptor_Spanner_ExecuteStreamingSql);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.ReadRequest,
 *   !proto.google.spanner.v1.ResultSet>}
 */
const methodDescriptor_Spanner_Read = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/Read',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.ReadRequest,
  google_spanner_v1_result_set_pb.ResultSet,
  /**
   * @param {!proto.google.spanner.v1.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_spanner_v1_result_set_pb.ResultSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.ReadRequest,
 *   !proto.google.spanner.v1.ResultSet>}
 */
const methodInfo_Spanner_Read = new grpc.web.AbstractClientBase.MethodInfo(
  google_spanner_v1_result_set_pb.ResultSet,
  /**
   * @param {!proto.google.spanner.v1.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_spanner_v1_result_set_pb.ResultSet.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.ReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.v1.ResultSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.ResultSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.read =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/Read',
      request,
      metadata || {},
      methodDescriptor_Spanner_Read,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.ReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.v1.ResultSet>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/Read',
      request,
      metadata || {},
      methodDescriptor_Spanner_Read);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.ReadRequest,
 *   !proto.google.spanner.v1.PartialResultSet>}
 */
const methodDescriptor_Spanner_StreamingRead = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/StreamingRead',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.spanner.v1.ReadRequest,
  google_spanner_v1_result_set_pb.PartialResultSet,
  /**
   * @param {!proto.google.spanner.v1.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_spanner_v1_result_set_pb.PartialResultSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.ReadRequest,
 *   !proto.google.spanner.v1.PartialResultSet>}
 */
const methodInfo_Spanner_StreamingRead = new grpc.web.AbstractClientBase.MethodInfo(
  google_spanner_v1_result_set_pb.PartialResultSet,
  /**
   * @param {!proto.google.spanner.v1.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_spanner_v1_result_set_pb.PartialResultSet.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.ReadRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.PartialResultSet>}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.streamingRead =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.spanner.v1.Spanner/StreamingRead',
      request,
      metadata || {},
      methodDescriptor_Spanner_StreamingRead);
};


/**
 * @param {!proto.google.spanner.v1.ReadRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.PartialResultSet>}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.streamingRead =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.spanner.v1.Spanner/StreamingRead',
      request,
      metadata || {},
      methodDescriptor_Spanner_StreamingRead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.BeginTransactionRequest,
 *   !proto.google.spanner.v1.Transaction>}
 */
const methodDescriptor_Spanner_BeginTransaction = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/BeginTransaction',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.BeginTransactionRequest,
  google_spanner_v1_transaction_pb.Transaction,
  /**
   * @param {!proto.google.spanner.v1.BeginTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_spanner_v1_transaction_pb.Transaction.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.BeginTransactionRequest,
 *   !proto.google.spanner.v1.Transaction>}
 */
const methodInfo_Spanner_BeginTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  google_spanner_v1_transaction_pb.Transaction,
  /**
   * @param {!proto.google.spanner.v1.BeginTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_spanner_v1_transaction_pb.Transaction.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.BeginTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.v1.Transaction)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.Transaction>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.beginTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/BeginTransaction',
      request,
      metadata || {},
      methodDescriptor_Spanner_BeginTransaction,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.BeginTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.v1.Transaction>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.beginTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/BeginTransaction',
      request,
      metadata || {},
      methodDescriptor_Spanner_BeginTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.CommitRequest,
 *   !proto.google.spanner.v1.CommitResponse>}
 */
const methodDescriptor_Spanner_Commit = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/Commit',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.CommitRequest,
  proto.google.spanner.v1.CommitResponse,
  /**
   * @param {!proto.google.spanner.v1.CommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.CommitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.CommitRequest,
 *   !proto.google.spanner.v1.CommitResponse>}
 */
const methodInfo_Spanner_Commit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.v1.CommitResponse,
  /**
   * @param {!proto.google.spanner.v1.CommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.CommitResponse.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.CommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.v1.CommitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.CommitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.commit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/Commit',
      request,
      metadata || {},
      methodDescriptor_Spanner_Commit,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.CommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.v1.CommitResponse>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.commit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/Commit',
      request,
      metadata || {},
      methodDescriptor_Spanner_Commit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.RollbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Spanner_Rollback = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/Rollback',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.RollbackRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.spanner.v1.RollbackRequest} request
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
 *   !proto.google.spanner.v1.RollbackRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Spanner_Rollback = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.spanner.v1.RollbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.RollbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.rollback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/Rollback',
      request,
      metadata || {},
      methodDescriptor_Spanner_Rollback,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.RollbackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.rollback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/Rollback',
      request,
      metadata || {},
      methodDescriptor_Spanner_Rollback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.PartitionQueryRequest,
 *   !proto.google.spanner.v1.PartitionResponse>}
 */
const methodDescriptor_Spanner_PartitionQuery = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/PartitionQuery',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.PartitionQueryRequest,
  proto.google.spanner.v1.PartitionResponse,
  /**
   * @param {!proto.google.spanner.v1.PartitionQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.PartitionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.PartitionQueryRequest,
 *   !proto.google.spanner.v1.PartitionResponse>}
 */
const methodInfo_Spanner_PartitionQuery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.v1.PartitionResponse,
  /**
   * @param {!proto.google.spanner.v1.PartitionQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.PartitionResponse.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.PartitionQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.v1.PartitionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.PartitionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.partitionQuery =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/PartitionQuery',
      request,
      metadata || {},
      methodDescriptor_Spanner_PartitionQuery,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.PartitionQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.v1.PartitionResponse>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.partitionQuery =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/PartitionQuery',
      request,
      metadata || {},
      methodDescriptor_Spanner_PartitionQuery);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.v1.PartitionReadRequest,
 *   !proto.google.spanner.v1.PartitionResponse>}
 */
const methodDescriptor_Spanner_PartitionRead = new grpc.web.MethodDescriptor(
  '/google.spanner.v1.Spanner/PartitionRead',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.v1.PartitionReadRequest,
  proto.google.spanner.v1.PartitionResponse,
  /**
   * @param {!proto.google.spanner.v1.PartitionReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.PartitionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.v1.PartitionReadRequest,
 *   !proto.google.spanner.v1.PartitionResponse>}
 */
const methodInfo_Spanner_PartitionRead = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.v1.PartitionResponse,
  /**
   * @param {!proto.google.spanner.v1.PartitionReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.v1.PartitionResponse.deserializeBinary
);


/**
 * @param {!proto.google.spanner.v1.PartitionReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.v1.PartitionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.v1.PartitionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.v1.SpannerClient.prototype.partitionRead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.v1.Spanner/PartitionRead',
      request,
      metadata || {},
      methodDescriptor_Spanner_PartitionRead,
      callback);
};


/**
 * @param {!proto.google.spanner.v1.PartitionReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.v1.PartitionResponse>}
 *     Promise that resolves to the response
 */
proto.google.spanner.v1.SpannerPromiseClient.prototype.partitionRead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.v1.Spanner/PartitionRead',
      request,
      metadata || {},
      methodDescriptor_Spanner_PartitionRead);
};


module.exports = proto.google.spanner.v1;

