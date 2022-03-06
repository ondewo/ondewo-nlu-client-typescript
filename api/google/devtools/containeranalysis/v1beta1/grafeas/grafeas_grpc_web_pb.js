/**
 * @fileoverview gRPC-Web generated client stub for grafeas.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_devtools_containeranalysis_v1beta1_attestation_attestation_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/attestation/attestation_pb.js')

var google_devtools_containeranalysis_v1beta1_build_build_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/build/build_pb.js')

var google_devtools_containeranalysis_v1beta1_common_common_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/common/common_pb.js')

var google_devtools_containeranalysis_v1beta1_deployment_deployment_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/deployment/deployment_pb.js')

var google_devtools_containeranalysis_v1beta1_discovery_discovery_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/discovery/discovery_pb.js')

var google_devtools_containeranalysis_v1beta1_image_image_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/image/image_pb.js')

var google_devtools_containeranalysis_v1beta1_package_package_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/package/package_pb.js')

var google_devtools_containeranalysis_v1beta1_provenance_provenance_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/provenance/provenance_pb.js')

var google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/vulnerability/vulnerability_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.grafeas = {};
proto.grafeas.v1beta1 = require('./grafeas_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client =
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
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient =
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
 *   !proto.grafeas.v1beta1.GetOccurrenceRequest,
 *   !proto.grafeas.v1beta1.Occurrence>}
 */
const methodDescriptor_GrafeasV1Beta1_GetOccurrence = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/GetOccurrence',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.GetOccurrenceRequest,
  proto.grafeas.v1beta1.Occurrence,
  /**
   * @param {!proto.grafeas.v1beta1.GetOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Occurrence.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.GetOccurrenceRequest,
 *   !proto.grafeas.v1beta1.Occurrence>}
 */
const methodInfo_GrafeasV1Beta1_GetOccurrence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.Occurrence,
  /**
   * @param {!proto.grafeas.v1beta1.GetOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Occurrence.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.GetOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.Occurrence)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.Occurrence>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.getOccurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/GetOccurrence',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_GetOccurrence,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.GetOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.Occurrence>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.getOccurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/GetOccurrence',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_GetOccurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.ListOccurrencesRequest,
 *   !proto.grafeas.v1beta1.ListOccurrencesResponse>}
 */
const methodDescriptor_GrafeasV1Beta1_ListOccurrences = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/ListOccurrences',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.ListOccurrencesRequest,
  proto.grafeas.v1beta1.ListOccurrencesResponse,
  /**
   * @param {!proto.grafeas.v1beta1.ListOccurrencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.ListOccurrencesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.ListOccurrencesRequest,
 *   !proto.grafeas.v1beta1.ListOccurrencesResponse>}
 */
const methodInfo_GrafeasV1Beta1_ListOccurrences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.ListOccurrencesResponse,
  /**
   * @param {!proto.grafeas.v1beta1.ListOccurrencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.ListOccurrencesResponse.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.ListOccurrencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.ListOccurrencesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.ListOccurrencesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.listOccurrences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/ListOccurrences',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_ListOccurrences,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.ListOccurrencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.ListOccurrencesResponse>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.listOccurrences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/ListOccurrences',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_ListOccurrences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.DeleteOccurrenceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_GrafeasV1Beta1_DeleteOccurrence = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/DeleteOccurrence',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.DeleteOccurrenceRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.grafeas.v1beta1.DeleteOccurrenceRequest} request
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
 *   !proto.grafeas.v1beta1.DeleteOccurrenceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_GrafeasV1Beta1_DeleteOccurrence = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.grafeas.v1beta1.DeleteOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.DeleteOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.deleteOccurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/DeleteOccurrence',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_DeleteOccurrence,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.DeleteOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.deleteOccurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/DeleteOccurrence',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_DeleteOccurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.CreateOccurrenceRequest,
 *   !proto.grafeas.v1beta1.Occurrence>}
 */
const methodDescriptor_GrafeasV1Beta1_CreateOccurrence = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/CreateOccurrence',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.CreateOccurrenceRequest,
  proto.grafeas.v1beta1.Occurrence,
  /**
   * @param {!proto.grafeas.v1beta1.CreateOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Occurrence.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.CreateOccurrenceRequest,
 *   !proto.grafeas.v1beta1.Occurrence>}
 */
const methodInfo_GrafeasV1Beta1_CreateOccurrence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.Occurrence,
  /**
   * @param {!proto.grafeas.v1beta1.CreateOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Occurrence.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.CreateOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.Occurrence)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.Occurrence>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.createOccurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/CreateOccurrence',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_CreateOccurrence,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.CreateOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.Occurrence>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.createOccurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/CreateOccurrence',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_CreateOccurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.BatchCreateOccurrencesRequest,
 *   !proto.grafeas.v1beta1.BatchCreateOccurrencesResponse>}
 */
const methodDescriptor_GrafeasV1Beta1_BatchCreateOccurrences = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/BatchCreateOccurrences',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.BatchCreateOccurrencesRequest,
  proto.grafeas.v1beta1.BatchCreateOccurrencesResponse,
  /**
   * @param {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.BatchCreateOccurrencesRequest,
 *   !proto.grafeas.v1beta1.BatchCreateOccurrencesResponse>}
 */
const methodInfo_GrafeasV1Beta1_BatchCreateOccurrences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.BatchCreateOccurrencesResponse,
  /**
   * @param {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.BatchCreateOccurrencesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.BatchCreateOccurrencesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.batchCreateOccurrences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/BatchCreateOccurrences',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_BatchCreateOccurrences,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.BatchCreateOccurrencesResponse>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.batchCreateOccurrences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/BatchCreateOccurrences',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_BatchCreateOccurrences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.UpdateOccurrenceRequest,
 *   !proto.grafeas.v1beta1.Occurrence>}
 */
const methodDescriptor_GrafeasV1Beta1_UpdateOccurrence = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/UpdateOccurrence',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.UpdateOccurrenceRequest,
  proto.grafeas.v1beta1.Occurrence,
  /**
   * @param {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Occurrence.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.UpdateOccurrenceRequest,
 *   !proto.grafeas.v1beta1.Occurrence>}
 */
const methodInfo_GrafeasV1Beta1_UpdateOccurrence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.Occurrence,
  /**
   * @param {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Occurrence.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.Occurrence)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.Occurrence>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.updateOccurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/UpdateOccurrence',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_UpdateOccurrence,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.Occurrence>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.updateOccurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/UpdateOccurrence',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_UpdateOccurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.GetOccurrenceNoteRequest,
 *   !proto.grafeas.v1beta1.Note>}
 */
const methodDescriptor_GrafeasV1Beta1_GetOccurrenceNote = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/GetOccurrenceNote',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.GetOccurrenceNoteRequest,
  proto.grafeas.v1beta1.Note,
  /**
   * @param {!proto.grafeas.v1beta1.GetOccurrenceNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Note.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.GetOccurrenceNoteRequest,
 *   !proto.grafeas.v1beta1.Note>}
 */
const methodInfo_GrafeasV1Beta1_GetOccurrenceNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.Note,
  /**
   * @param {!proto.grafeas.v1beta1.GetOccurrenceNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Note.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.GetOccurrenceNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.Note)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.Note>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.getOccurrenceNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/GetOccurrenceNote',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_GetOccurrenceNote,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.GetOccurrenceNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.Note>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.getOccurrenceNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/GetOccurrenceNote',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_GetOccurrenceNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.GetNoteRequest,
 *   !proto.grafeas.v1beta1.Note>}
 */
const methodDescriptor_GrafeasV1Beta1_GetNote = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/GetNote',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.GetNoteRequest,
  proto.grafeas.v1beta1.Note,
  /**
   * @param {!proto.grafeas.v1beta1.GetNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Note.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.GetNoteRequest,
 *   !proto.grafeas.v1beta1.Note>}
 */
const methodInfo_GrafeasV1Beta1_GetNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.Note,
  /**
   * @param {!proto.grafeas.v1beta1.GetNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Note.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.GetNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.Note)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.Note>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.getNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/GetNote',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_GetNote,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.GetNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.Note>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.getNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/GetNote',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_GetNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.ListNotesRequest,
 *   !proto.grafeas.v1beta1.ListNotesResponse>}
 */
const methodDescriptor_GrafeasV1Beta1_ListNotes = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/ListNotes',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.ListNotesRequest,
  proto.grafeas.v1beta1.ListNotesResponse,
  /**
   * @param {!proto.grafeas.v1beta1.ListNotesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.ListNotesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.ListNotesRequest,
 *   !proto.grafeas.v1beta1.ListNotesResponse>}
 */
const methodInfo_GrafeasV1Beta1_ListNotes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.ListNotesResponse,
  /**
   * @param {!proto.grafeas.v1beta1.ListNotesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.ListNotesResponse.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.ListNotesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.ListNotesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.ListNotesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.listNotes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/ListNotes',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_ListNotes,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.ListNotesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.ListNotesResponse>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.listNotes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/ListNotes',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_ListNotes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.DeleteNoteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_GrafeasV1Beta1_DeleteNote = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/DeleteNote',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.DeleteNoteRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.grafeas.v1beta1.DeleteNoteRequest} request
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
 *   !proto.grafeas.v1beta1.DeleteNoteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_GrafeasV1Beta1_DeleteNote = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.grafeas.v1beta1.DeleteNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.DeleteNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.deleteNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/DeleteNote',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_DeleteNote,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.DeleteNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.deleteNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/DeleteNote',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_DeleteNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.CreateNoteRequest,
 *   !proto.grafeas.v1beta1.Note>}
 */
const methodDescriptor_GrafeasV1Beta1_CreateNote = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/CreateNote',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.CreateNoteRequest,
  proto.grafeas.v1beta1.Note,
  /**
   * @param {!proto.grafeas.v1beta1.CreateNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Note.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.CreateNoteRequest,
 *   !proto.grafeas.v1beta1.Note>}
 */
const methodInfo_GrafeasV1Beta1_CreateNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.Note,
  /**
   * @param {!proto.grafeas.v1beta1.CreateNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Note.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.CreateNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.Note)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.Note>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.createNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/CreateNote',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_CreateNote,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.CreateNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.Note>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.createNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/CreateNote',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_CreateNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.BatchCreateNotesRequest,
 *   !proto.grafeas.v1beta1.BatchCreateNotesResponse>}
 */
const methodDescriptor_GrafeasV1Beta1_BatchCreateNotes = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/BatchCreateNotes',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.BatchCreateNotesRequest,
  proto.grafeas.v1beta1.BatchCreateNotesResponse,
  /**
   * @param {!proto.grafeas.v1beta1.BatchCreateNotesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.BatchCreateNotesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.BatchCreateNotesRequest,
 *   !proto.grafeas.v1beta1.BatchCreateNotesResponse>}
 */
const methodInfo_GrafeasV1Beta1_BatchCreateNotes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.BatchCreateNotesResponse,
  /**
   * @param {!proto.grafeas.v1beta1.BatchCreateNotesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.BatchCreateNotesResponse.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.BatchCreateNotesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.BatchCreateNotesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.BatchCreateNotesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.batchCreateNotes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/BatchCreateNotes',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_BatchCreateNotes,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.BatchCreateNotesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.BatchCreateNotesResponse>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.batchCreateNotes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/BatchCreateNotes',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_BatchCreateNotes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.UpdateNoteRequest,
 *   !proto.grafeas.v1beta1.Note>}
 */
const methodDescriptor_GrafeasV1Beta1_UpdateNote = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/UpdateNote',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.UpdateNoteRequest,
  proto.grafeas.v1beta1.Note,
  /**
   * @param {!proto.grafeas.v1beta1.UpdateNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Note.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.UpdateNoteRequest,
 *   !proto.grafeas.v1beta1.Note>}
 */
const methodInfo_GrafeasV1Beta1_UpdateNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.Note,
  /**
   * @param {!proto.grafeas.v1beta1.UpdateNoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.Note.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.UpdateNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.Note)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.Note>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.updateNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/UpdateNote',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_UpdateNote,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.UpdateNoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.Note>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.updateNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/UpdateNote',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_UpdateNote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.ListNoteOccurrencesRequest,
 *   !proto.grafeas.v1beta1.ListNoteOccurrencesResponse>}
 */
const methodDescriptor_GrafeasV1Beta1_ListNoteOccurrences = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/ListNoteOccurrences',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.ListNoteOccurrencesRequest,
  proto.grafeas.v1beta1.ListNoteOccurrencesResponse,
  /**
   * @param {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.ListNoteOccurrencesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.ListNoteOccurrencesRequest,
 *   !proto.grafeas.v1beta1.ListNoteOccurrencesResponse>}
 */
const methodInfo_GrafeasV1Beta1_ListNoteOccurrences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.ListNoteOccurrencesResponse,
  /**
   * @param {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.ListNoteOccurrencesResponse.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.ListNoteOccurrencesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.ListNoteOccurrencesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.listNoteOccurrences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/ListNoteOccurrences',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_ListNoteOccurrences,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.ListNoteOccurrencesResponse>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.listNoteOccurrences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/ListNoteOccurrences',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_ListNoteOccurrences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest,
 *   !proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary>}
 */
const methodDescriptor_GrafeasV1Beta1_GetVulnerabilityOccurrencesSummary = new grpc.web.MethodDescriptor(
  '/grafeas.v1beta1.GrafeasV1Beta1/GetVulnerabilityOccurrencesSummary',
  grpc.web.MethodType.UNARY,
  proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest,
  proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary,
  /**
   * @param {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest,
 *   !proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary>}
 */
const methodInfo_GrafeasV1Beta1_GetVulnerabilityOccurrencesSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary,
  /**
   * @param {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.deserializeBinary
);


/**
 * @param {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grafeas.v1beta1.GrafeasV1Beta1Client.prototype.getVulnerabilityOccurrencesSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/GetVulnerabilityOccurrencesSummary',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_GetVulnerabilityOccurrencesSummary,
      callback);
};


/**
 * @param {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary>}
 *     Promise that resolves to the response
 */
proto.grafeas.v1beta1.GrafeasV1Beta1PromiseClient.prototype.getVulnerabilityOccurrencesSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grafeas.v1beta1.GrafeasV1Beta1/GetVulnerabilityOccurrencesSummary',
      request,
      metadata || {},
      methodDescriptor_GrafeasV1Beta1_GetVulnerabilityOccurrencesSummary);
};


module.exports = proto.grafeas.v1beta1;

