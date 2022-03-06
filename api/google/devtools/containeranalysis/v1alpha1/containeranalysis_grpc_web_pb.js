/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.containeranalysis.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/bill_of_materials_pb.js')

var google_devtools_containeranalysis_v1alpha1_image_basis_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/image_basis_pb.js')

var google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/package_vulnerability_pb.js')

var google_devtools_containeranalysis_v1alpha1_provenance_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/provenance_pb.js')

var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js')

var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.containeranalysis = {};
proto.google.devtools.containeranalysis.v1alpha1 = require('./containeranalysis_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient =
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
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient =
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
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 */
const methodDescriptor_ContainerAnalysis_GetOccurrence = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetOccurrence',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest,
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 */
const methodInfo_ContainerAnalysis_GetOccurrence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.Occurrence)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.getOccurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetOccurrence',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetOccurrence,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.getOccurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetOccurrence',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetOccurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse>}
 */
const methodDescriptor_ContainerAnalysis_ListOccurrences = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListOccurrences',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest,
  proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse>}
 */
const methodInfo_ContainerAnalysis_ListOccurrences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.listOccurrences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListOccurrences',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_ListOccurrences,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.listOccurrences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListOccurrences',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_ListOccurrences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ContainerAnalysis_DeleteOccurrence = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/DeleteOccurrence',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest} request
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
 *   !proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ContainerAnalysis_DeleteOccurrence = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.deleteOccurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/DeleteOccurrence',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_DeleteOccurrence,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.deleteOccurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/DeleteOccurrence',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_DeleteOccurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 */
const methodDescriptor_ContainerAnalysis_CreateOccurrence = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateOccurrence',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest,
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 */
const methodInfo_ContainerAnalysis_CreateOccurrence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.Occurrence)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.createOccurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateOccurrence',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_CreateOccurrence,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.createOccurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateOccurrence',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_CreateOccurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 */
const methodDescriptor_ContainerAnalysis_UpdateOccurrence = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateOccurrence',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest,
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 */
const methodInfo_ContainerAnalysis_UpdateOccurrence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.Occurrence)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.updateOccurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateOccurrence',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_UpdateOccurrence,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.updateOccurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateOccurrence',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_UpdateOccurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Note>}
 */
const methodDescriptor_ContainerAnalysis_GetOccurrenceNote = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetOccurrenceNote',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest,
  proto.google.devtools.containeranalysis.v1alpha1.Note,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Note>}
 */
const methodInfo_ContainerAnalysis_GetOccurrenceNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.Note,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.Note)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.Note>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.getOccurrenceNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetOccurrenceNote',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetOccurrenceNote,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.Note>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.getOccurrenceNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetOccurrenceNote',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetOccurrenceNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Note>}
 */
const methodDescriptor_ContainerAnalysis_GetNote = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetNote',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest,
  proto.google.devtools.containeranalysis.v1alpha1.Note,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Note>}
 */
const methodInfo_ContainerAnalysis_GetNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.Note,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.Note)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.Note>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.getNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetNote',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetNote,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.Note>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.getNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetNote',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse>}
 */
const methodDescriptor_ContainerAnalysis_ListNotes = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListNotes',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest,
  proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse>}
 */
const methodInfo_ContainerAnalysis_ListNotes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.listNotes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListNotes',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_ListNotes,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.listNotes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListNotes',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_ListNotes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ContainerAnalysis_DeleteNote = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/DeleteNote',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest} request
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
 *   !proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ContainerAnalysis_DeleteNote = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.deleteNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/DeleteNote',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_DeleteNote,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.deleteNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/DeleteNote',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_DeleteNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Note>}
 */
const methodDescriptor_ContainerAnalysis_CreateNote = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateNote',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest,
  proto.google.devtools.containeranalysis.v1alpha1.Note,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Note>}
 */
const methodInfo_ContainerAnalysis_CreateNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.Note,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.Note)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.Note>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.createNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateNote',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_CreateNote,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.Note>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.createNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateNote',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_CreateNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Note>}
 */
const methodDescriptor_ContainerAnalysis_UpdateNote = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateNote',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest,
  proto.google.devtools.containeranalysis.v1alpha1.Note,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.Note>}
 */
const methodInfo_ContainerAnalysis_UpdateNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.Note,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.Note)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.Note>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.updateNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateNote',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_UpdateNote,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.Note>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.updateNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateNote',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_UpdateNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse>}
 */
const methodDescriptor_ContainerAnalysis_ListNoteOccurrences = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListNoteOccurrences',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest,
  proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse>}
 */
const methodInfo_ContainerAnalysis_ListNoteOccurrences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.listNoteOccurrences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListNoteOccurrences',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_ListNoteOccurrences,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.listNoteOccurrences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListNoteOccurrences',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_ListNoteOccurrences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse>}
 */
const methodDescriptor_ContainerAnalysis_GetVulnzOccurrencesSummary = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetVulnzOccurrencesSummary',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest,
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse>}
 */
const methodInfo_ContainerAnalysis_GetVulnzOccurrencesSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.getVulnzOccurrencesSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetVulnzOccurrencesSummary',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetVulnzOccurrencesSummary,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.getVulnzOccurrencesSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetVulnzOccurrencesSummary',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetVulnzOccurrencesSummary);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_ContainerAnalysis_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/SetIamPolicy',
  grpc.web.MethodType.UNARY,
  google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.SetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodInfo_ContainerAnalysis_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.SetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @param {!proto.google.iam.v1.SetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.v1.Policy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v1.Policy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_SetIamPolicy,
      callback);
};


/**
 * @param {!proto.google.iam.v1.SetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v1.Policy>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_ContainerAnalysis_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetIamPolicy',
  grpc.web.MethodType.UNARY,
  google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.GetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodInfo_ContainerAnalysis_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.GetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @param {!proto.google.iam.v1.GetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.v1.Policy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v1.Policy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetIamPolicy,
      callback);
};


/**
 * @param {!proto.google.iam.v1.GetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v1.Policy>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_ContainerAnalysis_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/TestIamPermissions',
  grpc.web.MethodType.UNARY,
  google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
  /**
   * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodInfo_ContainerAnalysis_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
  /**
   * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.v1.TestIamPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v1.TestIamPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_TestIamPermissions,
      callback);
};


/**
 * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v1.TestIamPermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_TestIamPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ContainerAnalysis_CreateOperation = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateOperation',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} request
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
 *   !proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ContainerAnalysis_CreateOperation = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.createOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateOperation',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_CreateOperation,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.createOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateOperation',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_CreateOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ContainerAnalysis_UpdateOperation = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateOperation',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} request
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
 *   !proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ContainerAnalysis_UpdateOperation = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.updateOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateOperation',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_UpdateOperation,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.updateOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateOperation',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_UpdateOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>}
 */
const methodDescriptor_ContainerAnalysis_GetScanConfig = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetScanConfig',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest,
  proto.google.devtools.containeranalysis.v1alpha1.ScanConfig,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>}
 */
const methodInfo_ContainerAnalysis_GetScanConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.ScanConfig,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.ScanConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.getScanConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetScanConfig',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetScanConfig,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.getScanConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetScanConfig',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_GetScanConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse>}
 */
const methodDescriptor_ContainerAnalysis_ListScanConfigs = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListScanConfigs',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest,
  proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse>}
 */
const methodInfo_ContainerAnalysis_ListScanConfigs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.listScanConfigs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListScanConfigs',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_ListScanConfigs,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.listScanConfigs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListScanConfigs',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_ListScanConfigs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>}
 */
const methodDescriptor_ContainerAnalysis_UpdateScanConfig = new grpc.web.MethodDescriptor(
  '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateScanConfig',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest,
  proto.google.devtools.containeranalysis.v1alpha1.ScanConfig,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest,
 *   !proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>}
 */
const methodInfo_ContainerAnalysis_UpdateScanConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.containeranalysis.v1alpha1.ScanConfig,
  /**
   * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.deserializeBinary
);


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.containeranalysis.v1alpha1.ScanConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisClient.prototype.updateScanConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateScanConfig',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_UpdateScanConfig,
      callback);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>}
 *     Promise that resolves to the response
 */
proto.google.devtools.containeranalysis.v1alpha1.ContainerAnalysisPromiseClient.prototype.updateScanConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateScanConfig',
      request,
      metadata || {},
      methodDescriptor_ContainerAnalysis_UpdateScanConfig);
};


module.exports = proto.google.devtools.containeranalysis.v1alpha1;

