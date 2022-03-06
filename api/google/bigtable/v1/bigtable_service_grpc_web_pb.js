/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_bigtable_v1_bigtable_data_pb = require('../../../google/bigtable/v1/bigtable_data_pb.js')

var google_bigtable_v1_bigtable_service_messages_pb = require('../../../google/bigtable/v1/bigtable_service_messages_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.google = {};
proto.google.bigtable = {};
proto.google.bigtable.v1 = require('./bigtable_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.bigtable.v1.BigtableServiceClient =
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
proto.google.bigtable.v1.BigtableServicePromiseClient =
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
 *   !proto.google.bigtable.v1.ReadRowsRequest,
 *   !proto.google.bigtable.v1.ReadRowsResponse>}
 */
const methodDescriptor_BigtableService_ReadRows = new grpc.web.MethodDescriptor(
  '/google.bigtable.v1.BigtableService/ReadRows',
  grpc.web.MethodType.SERVER_STREAMING,
  google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest,
  google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse,
  /**
   * @param {!proto.google.bigtable.v1.ReadRowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v1.ReadRowsRequest,
 *   !proto.google.bigtable.v1.ReadRowsResponse>}
 */
const methodInfo_BigtableService_ReadRows = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse,
  /**
   * @param {!proto.google.bigtable.v1.ReadRowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v1.ReadRowsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v1.ReadRowsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v1.BigtableServiceClient.prototype.readRows =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bigtable.v1.BigtableService/ReadRows',
      request,
      metadata || {},
      methodDescriptor_BigtableService_ReadRows);
};


/**
 * @param {!proto.google.bigtable.v1.ReadRowsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v1.ReadRowsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v1.BigtableServicePromiseClient.prototype.readRows =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bigtable.v1.BigtableService/ReadRows',
      request,
      metadata || {},
      methodDescriptor_BigtableService_ReadRows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.v1.SampleRowKeysRequest,
 *   !proto.google.bigtable.v1.SampleRowKeysResponse>}
 */
const methodDescriptor_BigtableService_SampleRowKeys = new grpc.web.MethodDescriptor(
  '/google.bigtable.v1.BigtableService/SampleRowKeys',
  grpc.web.MethodType.SERVER_STREAMING,
  google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest,
  google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse,
  /**
   * @param {!proto.google.bigtable.v1.SampleRowKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v1.SampleRowKeysRequest,
 *   !proto.google.bigtable.v1.SampleRowKeysResponse>}
 */
const methodInfo_BigtableService_SampleRowKeys = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse,
  /**
   * @param {!proto.google.bigtable.v1.SampleRowKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v1.SampleRowKeysRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v1.SampleRowKeysResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v1.BigtableServiceClient.prototype.sampleRowKeys =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bigtable.v1.BigtableService/SampleRowKeys',
      request,
      metadata || {},
      methodDescriptor_BigtableService_SampleRowKeys);
};


/**
 * @param {!proto.google.bigtable.v1.SampleRowKeysRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v1.SampleRowKeysResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v1.BigtableServicePromiseClient.prototype.sampleRowKeys =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bigtable.v1.BigtableService/SampleRowKeys',
      request,
      metadata || {},
      methodDescriptor_BigtableService_SampleRowKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.v1.MutateRowRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableService_MutateRow = new grpc.web.MethodDescriptor(
  '/google.bigtable.v1.BigtableService/MutateRow',
  grpc.web.MethodType.UNARY,
  google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.v1.MutateRowRequest} request
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
 *   !proto.google.bigtable.v1.MutateRowRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableService_MutateRow = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.v1.MutateRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v1.MutateRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v1.BigtableServiceClient.prototype.mutateRow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.v1.BigtableService/MutateRow',
      request,
      metadata || {},
      methodDescriptor_BigtableService_MutateRow,
      callback);
};


/**
 * @param {!proto.google.bigtable.v1.MutateRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.v1.BigtableServicePromiseClient.prototype.mutateRow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.v1.BigtableService/MutateRow',
      request,
      metadata || {},
      methodDescriptor_BigtableService_MutateRow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.v1.MutateRowsRequest,
 *   !proto.google.bigtable.v1.MutateRowsResponse>}
 */
const methodDescriptor_BigtableService_MutateRows = new grpc.web.MethodDescriptor(
  '/google.bigtable.v1.BigtableService/MutateRows',
  grpc.web.MethodType.UNARY,
  google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest,
  google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse,
  /**
   * @param {!proto.google.bigtable.v1.MutateRowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v1.MutateRowsRequest,
 *   !proto.google.bigtable.v1.MutateRowsResponse>}
 */
const methodInfo_BigtableService_MutateRows = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse,
  /**
   * @param {!proto.google.bigtable.v1.MutateRowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v1.MutateRowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.v1.MutateRowsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v1.MutateRowsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v1.BigtableServiceClient.prototype.mutateRows =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.v1.BigtableService/MutateRows',
      request,
      metadata || {},
      methodDescriptor_BigtableService_MutateRows,
      callback);
};


/**
 * @param {!proto.google.bigtable.v1.MutateRowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.v1.MutateRowsResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.v1.BigtableServicePromiseClient.prototype.mutateRows =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.v1.BigtableService/MutateRows',
      request,
      metadata || {},
      methodDescriptor_BigtableService_MutateRows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.v1.CheckAndMutateRowRequest,
 *   !proto.google.bigtable.v1.CheckAndMutateRowResponse>}
 */
const methodDescriptor_BigtableService_CheckAndMutateRow = new grpc.web.MethodDescriptor(
  '/google.bigtable.v1.BigtableService/CheckAndMutateRow',
  grpc.web.MethodType.UNARY,
  google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest,
  google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse,
  /**
   * @param {!proto.google.bigtable.v1.CheckAndMutateRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v1.CheckAndMutateRowRequest,
 *   !proto.google.bigtable.v1.CheckAndMutateRowResponse>}
 */
const methodInfo_BigtableService_CheckAndMutateRow = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse,
  /**
   * @param {!proto.google.bigtable.v1.CheckAndMutateRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v1.CheckAndMutateRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.v1.CheckAndMutateRowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v1.CheckAndMutateRowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v1.BigtableServiceClient.prototype.checkAndMutateRow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.v1.BigtableService/CheckAndMutateRow',
      request,
      metadata || {},
      methodDescriptor_BigtableService_CheckAndMutateRow,
      callback);
};


/**
 * @param {!proto.google.bigtable.v1.CheckAndMutateRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.v1.CheckAndMutateRowResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.v1.BigtableServicePromiseClient.prototype.checkAndMutateRow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.v1.BigtableService/CheckAndMutateRow',
      request,
      metadata || {},
      methodDescriptor_BigtableService_CheckAndMutateRow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.v1.ReadModifyWriteRowRequest,
 *   !proto.google.bigtable.v1.Row>}
 */
const methodDescriptor_BigtableService_ReadModifyWriteRow = new grpc.web.MethodDescriptor(
  '/google.bigtable.v1.BigtableService/ReadModifyWriteRow',
  grpc.web.MethodType.UNARY,
  google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest,
  google_bigtable_v1_bigtable_data_pb.Row,
  /**
   * @param {!proto.google.bigtable.v1.ReadModifyWriteRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_v1_bigtable_data_pb.Row.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v1.ReadModifyWriteRowRequest,
 *   !proto.google.bigtable.v1.Row>}
 */
const methodInfo_BigtableService_ReadModifyWriteRow = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_v1_bigtable_data_pb.Row,
  /**
   * @param {!proto.google.bigtable.v1.ReadModifyWriteRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_v1_bigtable_data_pb.Row.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v1.ReadModifyWriteRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.v1.Row)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v1.Row>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v1.BigtableServiceClient.prototype.readModifyWriteRow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.v1.BigtableService/ReadModifyWriteRow',
      request,
      metadata || {},
      methodDescriptor_BigtableService_ReadModifyWriteRow,
      callback);
};


/**
 * @param {!proto.google.bigtable.v1.ReadModifyWriteRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.v1.Row>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.v1.BigtableServicePromiseClient.prototype.readModifyWriteRow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.v1.BigtableService/ReadModifyWriteRow',
      request,
      metadata || {},
      methodDescriptor_BigtableService_ReadModifyWriteRow);
};


module.exports = proto.google.bigtable.v1;

