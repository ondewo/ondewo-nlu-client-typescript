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

var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.google = {};
proto.google.genomics = {};
proto.google.genomics.v1 = require('./variants_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.genomics.v1.StreamingVariantServiceClient =
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
proto.google.genomics.v1.StreamingVariantServicePromiseClient =
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
 *   !proto.google.genomics.v1.StreamVariantsRequest,
 *   !proto.google.genomics.v1.StreamVariantsResponse>}
 */
const methodDescriptor_StreamingVariantService_StreamVariants = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.StreamingVariantService/StreamVariants',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.genomics.v1.StreamVariantsRequest,
  proto.google.genomics.v1.StreamVariantsResponse,
  /**
   * @param {!proto.google.genomics.v1.StreamVariantsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.StreamVariantsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.StreamVariantsRequest,
 *   !proto.google.genomics.v1.StreamVariantsResponse>}
 */
const methodInfo_StreamingVariantService_StreamVariants = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.StreamVariantsResponse,
  /**
   * @param {!proto.google.genomics.v1.StreamVariantsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.StreamVariantsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.StreamVariantsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.StreamVariantsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.StreamingVariantServiceClient.prototype.streamVariants =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.genomics.v1.StreamingVariantService/StreamVariants',
      request,
      metadata || {},
      methodDescriptor_StreamingVariantService_StreamVariants);
};


/**
 * @param {!proto.google.genomics.v1.StreamVariantsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.StreamVariantsResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.StreamingVariantServicePromiseClient.prototype.streamVariants =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.genomics.v1.StreamingVariantService/StreamVariants',
      request,
      metadata || {},
      methodDescriptor_StreamingVariantService_StreamVariants);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.genomics.v1.VariantServiceV1Client =
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
proto.google.genomics.v1.VariantServiceV1PromiseClient =
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
 *   !proto.google.genomics.v1.ImportVariantsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_VariantServiceV1_ImportVariants = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/ImportVariants',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.ImportVariantsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.genomics.v1.ImportVariantsRequest} request
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
 *   !proto.google.genomics.v1.ImportVariantsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_VariantServiceV1_ImportVariants = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.genomics.v1.ImportVariantsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.ImportVariantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.importVariants =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/ImportVariants',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_ImportVariants,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.ImportVariantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.importVariants =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/ImportVariants',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_ImportVariants);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.CreateVariantSetRequest,
 *   !proto.google.genomics.v1.VariantSet>}
 */
const methodDescriptor_VariantServiceV1_CreateVariantSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/CreateVariantSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.CreateVariantSetRequest,
  proto.google.genomics.v1.VariantSet,
  /**
   * @param {!proto.google.genomics.v1.CreateVariantSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.VariantSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.CreateVariantSetRequest,
 *   !proto.google.genomics.v1.VariantSet>}
 */
const methodInfo_VariantServiceV1_CreateVariantSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.VariantSet,
  /**
   * @param {!proto.google.genomics.v1.CreateVariantSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.VariantSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.CreateVariantSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.VariantSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.VariantSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.createVariantSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/CreateVariantSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_CreateVariantSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.CreateVariantSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.VariantSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.createVariantSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/CreateVariantSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_CreateVariantSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.ExportVariantSetRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_VariantServiceV1_ExportVariantSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/ExportVariantSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.ExportVariantSetRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.genomics.v1.ExportVariantSetRequest} request
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
 *   !proto.google.genomics.v1.ExportVariantSetRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_VariantServiceV1_ExportVariantSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.genomics.v1.ExportVariantSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.ExportVariantSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.exportVariantSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/ExportVariantSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_ExportVariantSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.ExportVariantSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.exportVariantSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/ExportVariantSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_ExportVariantSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.GetVariantSetRequest,
 *   !proto.google.genomics.v1.VariantSet>}
 */
const methodDescriptor_VariantServiceV1_GetVariantSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/GetVariantSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.GetVariantSetRequest,
  proto.google.genomics.v1.VariantSet,
  /**
   * @param {!proto.google.genomics.v1.GetVariantSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.VariantSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.GetVariantSetRequest,
 *   !proto.google.genomics.v1.VariantSet>}
 */
const methodInfo_VariantServiceV1_GetVariantSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.VariantSet,
  /**
   * @param {!proto.google.genomics.v1.GetVariantSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.VariantSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.GetVariantSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.VariantSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.VariantSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.getVariantSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/GetVariantSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_GetVariantSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.GetVariantSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.VariantSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.getVariantSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/GetVariantSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_GetVariantSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.SearchVariantSetsRequest,
 *   !proto.google.genomics.v1.SearchVariantSetsResponse>}
 */
const methodDescriptor_VariantServiceV1_SearchVariantSets = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/SearchVariantSets',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.SearchVariantSetsRequest,
  proto.google.genomics.v1.SearchVariantSetsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchVariantSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchVariantSetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.SearchVariantSetsRequest,
 *   !proto.google.genomics.v1.SearchVariantSetsResponse>}
 */
const methodInfo_VariantServiceV1_SearchVariantSets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.SearchVariantSetsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchVariantSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchVariantSetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.SearchVariantSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.SearchVariantSetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.SearchVariantSetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.searchVariantSets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/SearchVariantSets',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_SearchVariantSets,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.SearchVariantSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.SearchVariantSetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.searchVariantSets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/SearchVariantSets',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_SearchVariantSets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.DeleteVariantSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VariantServiceV1_DeleteVariantSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/DeleteVariantSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.DeleteVariantSetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteVariantSetRequest} request
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
 *   !proto.google.genomics.v1.DeleteVariantSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_VariantServiceV1_DeleteVariantSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteVariantSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.DeleteVariantSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.deleteVariantSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/DeleteVariantSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_DeleteVariantSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.DeleteVariantSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.deleteVariantSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/DeleteVariantSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_DeleteVariantSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.UpdateVariantSetRequest,
 *   !proto.google.genomics.v1.VariantSet>}
 */
const methodDescriptor_VariantServiceV1_UpdateVariantSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/UpdateVariantSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.UpdateVariantSetRequest,
  proto.google.genomics.v1.VariantSet,
  /**
   * @param {!proto.google.genomics.v1.UpdateVariantSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.VariantSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.UpdateVariantSetRequest,
 *   !proto.google.genomics.v1.VariantSet>}
 */
const methodInfo_VariantServiceV1_UpdateVariantSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.VariantSet,
  /**
   * @param {!proto.google.genomics.v1.UpdateVariantSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.VariantSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.UpdateVariantSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.VariantSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.VariantSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.updateVariantSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/UpdateVariantSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_UpdateVariantSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.UpdateVariantSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.VariantSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.updateVariantSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/UpdateVariantSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_UpdateVariantSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.SearchVariantsRequest,
 *   !proto.google.genomics.v1.SearchVariantsResponse>}
 */
const methodDescriptor_VariantServiceV1_SearchVariants = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/SearchVariants',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.SearchVariantsRequest,
  proto.google.genomics.v1.SearchVariantsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchVariantsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchVariantsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.SearchVariantsRequest,
 *   !proto.google.genomics.v1.SearchVariantsResponse>}
 */
const methodInfo_VariantServiceV1_SearchVariants = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.SearchVariantsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchVariantsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchVariantsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.SearchVariantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.SearchVariantsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.SearchVariantsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.searchVariants =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/SearchVariants',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_SearchVariants,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.SearchVariantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.SearchVariantsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.searchVariants =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/SearchVariants',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_SearchVariants);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.CreateVariantRequest,
 *   !proto.google.genomics.v1.Variant>}
 */
const methodDescriptor_VariantServiceV1_CreateVariant = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/CreateVariant',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.CreateVariantRequest,
  proto.google.genomics.v1.Variant,
  /**
   * @param {!proto.google.genomics.v1.CreateVariantRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Variant.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.CreateVariantRequest,
 *   !proto.google.genomics.v1.Variant>}
 */
const methodInfo_VariantServiceV1_CreateVariant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Variant,
  /**
   * @param {!proto.google.genomics.v1.CreateVariantRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Variant.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.CreateVariantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Variant)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Variant>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.createVariant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/CreateVariant',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_CreateVariant,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.CreateVariantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Variant>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.createVariant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/CreateVariant',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_CreateVariant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.UpdateVariantRequest,
 *   !proto.google.genomics.v1.Variant>}
 */
const methodDescriptor_VariantServiceV1_UpdateVariant = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/UpdateVariant',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.UpdateVariantRequest,
  proto.google.genomics.v1.Variant,
  /**
   * @param {!proto.google.genomics.v1.UpdateVariantRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Variant.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.UpdateVariantRequest,
 *   !proto.google.genomics.v1.Variant>}
 */
const methodInfo_VariantServiceV1_UpdateVariant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Variant,
  /**
   * @param {!proto.google.genomics.v1.UpdateVariantRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Variant.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.UpdateVariantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Variant)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Variant>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.updateVariant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/UpdateVariant',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_UpdateVariant,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.UpdateVariantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Variant>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.updateVariant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/UpdateVariant',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_UpdateVariant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.DeleteVariantRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VariantServiceV1_DeleteVariant = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/DeleteVariant',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.DeleteVariantRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteVariantRequest} request
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
 *   !proto.google.genomics.v1.DeleteVariantRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_VariantServiceV1_DeleteVariant = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteVariantRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.DeleteVariantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.deleteVariant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/DeleteVariant',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_DeleteVariant,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.DeleteVariantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.deleteVariant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/DeleteVariant',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_DeleteVariant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.GetVariantRequest,
 *   !proto.google.genomics.v1.Variant>}
 */
const methodDescriptor_VariantServiceV1_GetVariant = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/GetVariant',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.GetVariantRequest,
  proto.google.genomics.v1.Variant,
  /**
   * @param {!proto.google.genomics.v1.GetVariantRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Variant.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.GetVariantRequest,
 *   !proto.google.genomics.v1.Variant>}
 */
const methodInfo_VariantServiceV1_GetVariant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Variant,
  /**
   * @param {!proto.google.genomics.v1.GetVariantRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Variant.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.GetVariantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Variant)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Variant>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.getVariant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/GetVariant',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_GetVariant,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.GetVariantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Variant>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.getVariant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/GetVariant',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_GetVariant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.MergeVariantsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VariantServiceV1_MergeVariants = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/MergeVariants',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.MergeVariantsRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.MergeVariantsRequest} request
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
 *   !proto.google.genomics.v1.MergeVariantsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_VariantServiceV1_MergeVariants = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.MergeVariantsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.MergeVariantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.mergeVariants =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/MergeVariants',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_MergeVariants,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.MergeVariantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.mergeVariants =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/MergeVariants',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_MergeVariants);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.SearchCallSetsRequest,
 *   !proto.google.genomics.v1.SearchCallSetsResponse>}
 */
const methodDescriptor_VariantServiceV1_SearchCallSets = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/SearchCallSets',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.SearchCallSetsRequest,
  proto.google.genomics.v1.SearchCallSetsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchCallSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchCallSetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.SearchCallSetsRequest,
 *   !proto.google.genomics.v1.SearchCallSetsResponse>}
 */
const methodInfo_VariantServiceV1_SearchCallSets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.SearchCallSetsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchCallSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchCallSetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.SearchCallSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.SearchCallSetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.SearchCallSetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.searchCallSets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/SearchCallSets',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_SearchCallSets,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.SearchCallSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.SearchCallSetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.searchCallSets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/SearchCallSets',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_SearchCallSets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.CreateCallSetRequest,
 *   !proto.google.genomics.v1.CallSet>}
 */
const methodDescriptor_VariantServiceV1_CreateCallSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/CreateCallSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.CreateCallSetRequest,
  proto.google.genomics.v1.CallSet,
  /**
   * @param {!proto.google.genomics.v1.CreateCallSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.CallSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.CreateCallSetRequest,
 *   !proto.google.genomics.v1.CallSet>}
 */
const methodInfo_VariantServiceV1_CreateCallSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.CallSet,
  /**
   * @param {!proto.google.genomics.v1.CreateCallSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.CallSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.CreateCallSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.CallSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.CallSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.createCallSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/CreateCallSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_CreateCallSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.CreateCallSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.CallSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.createCallSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/CreateCallSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_CreateCallSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.UpdateCallSetRequest,
 *   !proto.google.genomics.v1.CallSet>}
 */
const methodDescriptor_VariantServiceV1_UpdateCallSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/UpdateCallSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.UpdateCallSetRequest,
  proto.google.genomics.v1.CallSet,
  /**
   * @param {!proto.google.genomics.v1.UpdateCallSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.CallSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.UpdateCallSetRequest,
 *   !proto.google.genomics.v1.CallSet>}
 */
const methodInfo_VariantServiceV1_UpdateCallSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.CallSet,
  /**
   * @param {!proto.google.genomics.v1.UpdateCallSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.CallSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.UpdateCallSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.CallSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.CallSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.updateCallSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/UpdateCallSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_UpdateCallSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.UpdateCallSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.CallSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.updateCallSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/UpdateCallSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_UpdateCallSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.DeleteCallSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VariantServiceV1_DeleteCallSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/DeleteCallSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.DeleteCallSetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteCallSetRequest} request
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
 *   !proto.google.genomics.v1.DeleteCallSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_VariantServiceV1_DeleteCallSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteCallSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.DeleteCallSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.deleteCallSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/DeleteCallSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_DeleteCallSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.DeleteCallSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.deleteCallSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/DeleteCallSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_DeleteCallSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.GetCallSetRequest,
 *   !proto.google.genomics.v1.CallSet>}
 */
const methodDescriptor_VariantServiceV1_GetCallSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.VariantServiceV1/GetCallSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.GetCallSetRequest,
  proto.google.genomics.v1.CallSet,
  /**
   * @param {!proto.google.genomics.v1.GetCallSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.CallSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.GetCallSetRequest,
 *   !proto.google.genomics.v1.CallSet>}
 */
const methodInfo_VariantServiceV1_GetCallSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.CallSet,
  /**
   * @param {!proto.google.genomics.v1.GetCallSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.CallSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.GetCallSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.CallSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.CallSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.VariantServiceV1Client.prototype.getCallSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/GetCallSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_GetCallSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.GetCallSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.CallSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.VariantServiceV1PromiseClient.prototype.getCallSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.VariantServiceV1/GetCallSet',
      request,
      metadata || {},
      methodDescriptor_VariantServiceV1_GetCallSet);
};


module.exports = proto.google.genomics.v1;

