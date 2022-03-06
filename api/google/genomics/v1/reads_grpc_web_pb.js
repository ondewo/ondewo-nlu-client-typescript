/**
 * @fileoverview gRPC-Web generated client stub for google.genomics.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_genomics_v1_range_pb = require('../../../google/genomics/v1/range_pb.js')

var google_genomics_v1_readalignment_pb = require('../../../google/genomics/v1/readalignment_pb.js')

var google_genomics_v1_readgroupset_pb = require('../../../google/genomics/v1/readgroupset_pb.js')

var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.genomics = {};
proto.google.genomics.v1 = require('./reads_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.genomics.v1.StreamingReadServiceClient =
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
proto.google.genomics.v1.StreamingReadServicePromiseClient =
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
 *   !proto.google.genomics.v1.StreamReadsRequest,
 *   !proto.google.genomics.v1.StreamReadsResponse>}
 */
const methodDescriptor_StreamingReadService_StreamReads = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.StreamingReadService/StreamReads',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.genomics.v1.StreamReadsRequest,
  proto.google.genomics.v1.StreamReadsResponse,
  /**
   * @param {!proto.google.genomics.v1.StreamReadsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.StreamReadsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.StreamReadsRequest,
 *   !proto.google.genomics.v1.StreamReadsResponse>}
 */
const methodInfo_StreamingReadService_StreamReads = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.StreamReadsResponse,
  /**
   * @param {!proto.google.genomics.v1.StreamReadsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.StreamReadsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.StreamReadsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.StreamReadsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.StreamingReadServiceClient.prototype.streamReads =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.genomics.v1.StreamingReadService/StreamReads',
      request,
      metadata || {},
      methodDescriptor_StreamingReadService_StreamReads);
};


/**
 * @param {!proto.google.genomics.v1.StreamReadsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.StreamReadsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.StreamingReadServicePromiseClient.prototype.streamReads =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.genomics.v1.StreamingReadService/StreamReads',
      request,
      metadata || {},
      methodDescriptor_StreamingReadService_StreamReads);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.genomics.v1.ReadServiceV1Client =
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
proto.google.genomics.v1.ReadServiceV1PromiseClient =
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
 *   !proto.google.genomics.v1.ImportReadGroupSetsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ReadServiceV1_ImportReadGroupSets = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReadServiceV1/ImportReadGroupSets',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.ImportReadGroupSetsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.genomics.v1.ImportReadGroupSetsRequest} request
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
 *   !proto.google.genomics.v1.ImportReadGroupSetsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ReadServiceV1_ImportReadGroupSets = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.genomics.v1.ImportReadGroupSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.ImportReadGroupSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReadServiceV1Client.prototype.importReadGroupSets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/ImportReadGroupSets',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_ImportReadGroupSets,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.ImportReadGroupSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReadServiceV1PromiseClient.prototype.importReadGroupSets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/ImportReadGroupSets',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_ImportReadGroupSets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.ExportReadGroupSetRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ReadServiceV1_ExportReadGroupSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReadServiceV1/ExportReadGroupSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.ExportReadGroupSetRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.genomics.v1.ExportReadGroupSetRequest} request
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
 *   !proto.google.genomics.v1.ExportReadGroupSetRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ReadServiceV1_ExportReadGroupSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.genomics.v1.ExportReadGroupSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.ExportReadGroupSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReadServiceV1Client.prototype.exportReadGroupSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/ExportReadGroupSet',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_ExportReadGroupSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.ExportReadGroupSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReadServiceV1PromiseClient.prototype.exportReadGroupSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/ExportReadGroupSet',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_ExportReadGroupSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.SearchReadGroupSetsRequest,
 *   !proto.google.genomics.v1.SearchReadGroupSetsResponse>}
 */
const methodDescriptor_ReadServiceV1_SearchReadGroupSets = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReadServiceV1/SearchReadGroupSets',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.SearchReadGroupSetsRequest,
  proto.google.genomics.v1.SearchReadGroupSetsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchReadGroupSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchReadGroupSetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.SearchReadGroupSetsRequest,
 *   !proto.google.genomics.v1.SearchReadGroupSetsResponse>}
 */
const methodInfo_ReadServiceV1_SearchReadGroupSets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.SearchReadGroupSetsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchReadGroupSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchReadGroupSetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.SearchReadGroupSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.SearchReadGroupSetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.SearchReadGroupSetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReadServiceV1Client.prototype.searchReadGroupSets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/SearchReadGroupSets',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_SearchReadGroupSets,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.SearchReadGroupSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.SearchReadGroupSetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReadServiceV1PromiseClient.prototype.searchReadGroupSets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/SearchReadGroupSets',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_SearchReadGroupSets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.UpdateReadGroupSetRequest,
 *   !proto.google.genomics.v1.ReadGroupSet>}
 */
const methodDescriptor_ReadServiceV1_UpdateReadGroupSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReadServiceV1/UpdateReadGroupSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.UpdateReadGroupSetRequest,
  google_genomics_v1_readgroupset_pb.ReadGroupSet,
  /**
   * @param {!proto.google.genomics.v1.UpdateReadGroupSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_genomics_v1_readgroupset_pb.ReadGroupSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.UpdateReadGroupSetRequest,
 *   !proto.google.genomics.v1.ReadGroupSet>}
 */
const methodInfo_ReadServiceV1_UpdateReadGroupSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_genomics_v1_readgroupset_pb.ReadGroupSet,
  /**
   * @param {!proto.google.genomics.v1.UpdateReadGroupSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_genomics_v1_readgroupset_pb.ReadGroupSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.UpdateReadGroupSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.ReadGroupSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.ReadGroupSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReadServiceV1Client.prototype.updateReadGroupSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/UpdateReadGroupSet',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_UpdateReadGroupSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.UpdateReadGroupSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.ReadGroupSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReadServiceV1PromiseClient.prototype.updateReadGroupSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/UpdateReadGroupSet',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_UpdateReadGroupSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.DeleteReadGroupSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ReadServiceV1_DeleteReadGroupSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReadServiceV1/DeleteReadGroupSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.DeleteReadGroupSetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteReadGroupSetRequest} request
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
 *   !proto.google.genomics.v1.DeleteReadGroupSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ReadServiceV1_DeleteReadGroupSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteReadGroupSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.DeleteReadGroupSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReadServiceV1Client.prototype.deleteReadGroupSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/DeleteReadGroupSet',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_DeleteReadGroupSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.DeleteReadGroupSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReadServiceV1PromiseClient.prototype.deleteReadGroupSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/DeleteReadGroupSet',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_DeleteReadGroupSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.GetReadGroupSetRequest,
 *   !proto.google.genomics.v1.ReadGroupSet>}
 */
const methodDescriptor_ReadServiceV1_GetReadGroupSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReadServiceV1/GetReadGroupSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.GetReadGroupSetRequest,
  google_genomics_v1_readgroupset_pb.ReadGroupSet,
  /**
   * @param {!proto.google.genomics.v1.GetReadGroupSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_genomics_v1_readgroupset_pb.ReadGroupSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.GetReadGroupSetRequest,
 *   !proto.google.genomics.v1.ReadGroupSet>}
 */
const methodInfo_ReadServiceV1_GetReadGroupSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_genomics_v1_readgroupset_pb.ReadGroupSet,
  /**
   * @param {!proto.google.genomics.v1.GetReadGroupSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_genomics_v1_readgroupset_pb.ReadGroupSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.GetReadGroupSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.ReadGroupSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.ReadGroupSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReadServiceV1Client.prototype.getReadGroupSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/GetReadGroupSet',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_GetReadGroupSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.GetReadGroupSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.ReadGroupSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReadServiceV1PromiseClient.prototype.getReadGroupSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/GetReadGroupSet',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_GetReadGroupSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.ListCoverageBucketsRequest,
 *   !proto.google.genomics.v1.ListCoverageBucketsResponse>}
 */
const methodDescriptor_ReadServiceV1_ListCoverageBuckets = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReadServiceV1/ListCoverageBuckets',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.ListCoverageBucketsRequest,
  proto.google.genomics.v1.ListCoverageBucketsResponse,
  /**
   * @param {!proto.google.genomics.v1.ListCoverageBucketsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.ListCoverageBucketsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.ListCoverageBucketsRequest,
 *   !proto.google.genomics.v1.ListCoverageBucketsResponse>}
 */
const methodInfo_ReadServiceV1_ListCoverageBuckets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.ListCoverageBucketsResponse,
  /**
   * @param {!proto.google.genomics.v1.ListCoverageBucketsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.ListCoverageBucketsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.ListCoverageBucketsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.ListCoverageBucketsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.ListCoverageBucketsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReadServiceV1Client.prototype.listCoverageBuckets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/ListCoverageBuckets',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_ListCoverageBuckets,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.ListCoverageBucketsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.ListCoverageBucketsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReadServiceV1PromiseClient.prototype.listCoverageBuckets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/ListCoverageBuckets',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_ListCoverageBuckets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.SearchReadsRequest,
 *   !proto.google.genomics.v1.SearchReadsResponse>}
 */
const methodDescriptor_ReadServiceV1_SearchReads = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReadServiceV1/SearchReads',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.SearchReadsRequest,
  proto.google.genomics.v1.SearchReadsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchReadsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchReadsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.SearchReadsRequest,
 *   !proto.google.genomics.v1.SearchReadsResponse>}
 */
const methodInfo_ReadServiceV1_SearchReads = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.SearchReadsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchReadsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchReadsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.SearchReadsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.SearchReadsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.SearchReadsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReadServiceV1Client.prototype.searchReads =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/SearchReads',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_SearchReads,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.SearchReadsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.SearchReadsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReadServiceV1PromiseClient.prototype.searchReads =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReadServiceV1/SearchReads',
      request,
      metadata || {},
      methodDescriptor_ReadServiceV1_SearchReads);
};


module.exports = proto.google.genomics.v1;

