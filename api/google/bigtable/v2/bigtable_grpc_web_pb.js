/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_bigtable_v2_data_pb = require('../../../google/bigtable/v2/data_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_rpc_status_pb = require('../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.bigtable = {};
proto.google.bigtable.v2 = require('./bigtable_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.bigtable.v2.BigtableClient =
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
proto.google.bigtable.v2.BigtablePromiseClient =
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
 *   !proto.google.bigtable.v2.ReadRowsRequest,
 *   !proto.google.bigtable.v2.ReadRowsResponse>}
 */
const methodDescriptor_Bigtable_ReadRows = new grpc.web.MethodDescriptor(
  '/google.bigtable.v2.Bigtable/ReadRows',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.bigtable.v2.ReadRowsRequest,
  proto.google.bigtable.v2.ReadRowsResponse,
  /**
   * @param {!proto.google.bigtable.v2.ReadRowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.ReadRowsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v2.ReadRowsRequest,
 *   !proto.google.bigtable.v2.ReadRowsResponse>}
 */
const methodInfo_Bigtable_ReadRows = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.v2.ReadRowsResponse,
  /**
   * @param {!proto.google.bigtable.v2.ReadRowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.ReadRowsResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v2.ReadRowsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v2.ReadRowsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v2.BigtableClient.prototype.readRows =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bigtable.v2.Bigtable/ReadRows',
      request,
      metadata || {},
      methodDescriptor_Bigtable_ReadRows);
};


/**
 * @param {!proto.google.bigtable.v2.ReadRowsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v2.ReadRowsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v2.BigtablePromiseClient.prototype.readRows =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bigtable.v2.Bigtable/ReadRows',
      request,
      metadata || {},
      methodDescriptor_Bigtable_ReadRows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.v2.SampleRowKeysRequest,
 *   !proto.google.bigtable.v2.SampleRowKeysResponse>}
 */
const methodDescriptor_Bigtable_SampleRowKeys = new grpc.web.MethodDescriptor(
  '/google.bigtable.v2.Bigtable/SampleRowKeys',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.bigtable.v2.SampleRowKeysRequest,
  proto.google.bigtable.v2.SampleRowKeysResponse,
  /**
   * @param {!proto.google.bigtable.v2.SampleRowKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.SampleRowKeysResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v2.SampleRowKeysRequest,
 *   !proto.google.bigtable.v2.SampleRowKeysResponse>}
 */
const methodInfo_Bigtable_SampleRowKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.v2.SampleRowKeysResponse,
  /**
   * @param {!proto.google.bigtable.v2.SampleRowKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.SampleRowKeysResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v2.SampleRowKeysRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v2.SampleRowKeysResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v2.BigtableClient.prototype.sampleRowKeys =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bigtable.v2.Bigtable/SampleRowKeys',
      request,
      metadata || {},
      methodDescriptor_Bigtable_SampleRowKeys);
};


/**
 * @param {!proto.google.bigtable.v2.SampleRowKeysRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v2.SampleRowKeysResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v2.BigtablePromiseClient.prototype.sampleRowKeys =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bigtable.v2.Bigtable/SampleRowKeys',
      request,
      metadata || {},
      methodDescriptor_Bigtable_SampleRowKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.v2.MutateRowRequest,
 *   !proto.google.bigtable.v2.MutateRowResponse>}
 */
const methodDescriptor_Bigtable_MutateRow = new grpc.web.MethodDescriptor(
  '/google.bigtable.v2.Bigtable/MutateRow',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.v2.MutateRowRequest,
  proto.google.bigtable.v2.MutateRowResponse,
  /**
   * @param {!proto.google.bigtable.v2.MutateRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.MutateRowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v2.MutateRowRequest,
 *   !proto.google.bigtable.v2.MutateRowResponse>}
 */
const methodInfo_Bigtable_MutateRow = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.v2.MutateRowResponse,
  /**
   * @param {!proto.google.bigtable.v2.MutateRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.MutateRowResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v2.MutateRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.v2.MutateRowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v2.MutateRowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v2.BigtableClient.prototype.mutateRow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.v2.Bigtable/MutateRow',
      request,
      metadata || {},
      methodDescriptor_Bigtable_MutateRow,
      callback);
};


/**
 * @param {!proto.google.bigtable.v2.MutateRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.v2.MutateRowResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.v2.BigtablePromiseClient.prototype.mutateRow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.v2.Bigtable/MutateRow',
      request,
      metadata || {},
      methodDescriptor_Bigtable_MutateRow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.v2.MutateRowsRequest,
 *   !proto.google.bigtable.v2.MutateRowsResponse>}
 */
const methodDescriptor_Bigtable_MutateRows = new grpc.web.MethodDescriptor(
  '/google.bigtable.v2.Bigtable/MutateRows',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.bigtable.v2.MutateRowsRequest,
  proto.google.bigtable.v2.MutateRowsResponse,
  /**
   * @param {!proto.google.bigtable.v2.MutateRowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.MutateRowsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v2.MutateRowsRequest,
 *   !proto.google.bigtable.v2.MutateRowsResponse>}
 */
const methodInfo_Bigtable_MutateRows = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.v2.MutateRowsResponse,
  /**
   * @param {!proto.google.bigtable.v2.MutateRowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.MutateRowsResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v2.MutateRowsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v2.MutateRowsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v2.BigtableClient.prototype.mutateRows =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bigtable.v2.Bigtable/MutateRows',
      request,
      metadata || {},
      methodDescriptor_Bigtable_MutateRows);
};


/**
 * @param {!proto.google.bigtable.v2.MutateRowsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v2.MutateRowsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v2.BigtablePromiseClient.prototype.mutateRows =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.bigtable.v2.Bigtable/MutateRows',
      request,
      metadata || {},
      methodDescriptor_Bigtable_MutateRows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.v2.CheckAndMutateRowRequest,
 *   !proto.google.bigtable.v2.CheckAndMutateRowResponse>}
 */
const methodDescriptor_Bigtable_CheckAndMutateRow = new grpc.web.MethodDescriptor(
  '/google.bigtable.v2.Bigtable/CheckAndMutateRow',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.v2.CheckAndMutateRowRequest,
  proto.google.bigtable.v2.CheckAndMutateRowResponse,
  /**
   * @param {!proto.google.bigtable.v2.CheckAndMutateRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.CheckAndMutateRowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v2.CheckAndMutateRowRequest,
 *   !proto.google.bigtable.v2.CheckAndMutateRowResponse>}
 */
const methodInfo_Bigtable_CheckAndMutateRow = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.v2.CheckAndMutateRowResponse,
  /**
   * @param {!proto.google.bigtable.v2.CheckAndMutateRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.CheckAndMutateRowResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v2.CheckAndMutateRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.v2.CheckAndMutateRowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v2.CheckAndMutateRowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v2.BigtableClient.prototype.checkAndMutateRow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.v2.Bigtable/CheckAndMutateRow',
      request,
      metadata || {},
      methodDescriptor_Bigtable_CheckAndMutateRow,
      callback);
};


/**
 * @param {!proto.google.bigtable.v2.CheckAndMutateRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.v2.CheckAndMutateRowResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.v2.BigtablePromiseClient.prototype.checkAndMutateRow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.v2.Bigtable/CheckAndMutateRow',
      request,
      metadata || {},
      methodDescriptor_Bigtable_CheckAndMutateRow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.v2.ReadModifyWriteRowRequest,
 *   !proto.google.bigtable.v2.ReadModifyWriteRowResponse>}
 */
const methodDescriptor_Bigtable_ReadModifyWriteRow = new grpc.web.MethodDescriptor(
  '/google.bigtable.v2.Bigtable/ReadModifyWriteRow',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.v2.ReadModifyWriteRowRequest,
  proto.google.bigtable.v2.ReadModifyWriteRowResponse,
  /**
   * @param {!proto.google.bigtable.v2.ReadModifyWriteRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.ReadModifyWriteRowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.v2.ReadModifyWriteRowRequest,
 *   !proto.google.bigtable.v2.ReadModifyWriteRowResponse>}
 */
const methodInfo_Bigtable_ReadModifyWriteRow = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.v2.ReadModifyWriteRowResponse,
  /**
   * @param {!proto.google.bigtable.v2.ReadModifyWriteRowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.v2.ReadModifyWriteRowResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.v2.ReadModifyWriteRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.v2.ReadModifyWriteRowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.v2.ReadModifyWriteRowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.v2.BigtableClient.prototype.readModifyWriteRow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.v2.Bigtable/ReadModifyWriteRow',
      request,
      metadata || {},
      methodDescriptor_Bigtable_ReadModifyWriteRow,
      callback);
};


/**
 * @param {!proto.google.bigtable.v2.ReadModifyWriteRowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.v2.ReadModifyWriteRowResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.v2.BigtablePromiseClient.prototype.readModifyWriteRow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.v2.Bigtable/ReadModifyWriteRow',
      request,
      metadata || {},
      methodDescriptor_Bigtable_ReadModifyWriteRow);
};


module.exports = proto.google.bigtable.v2;

