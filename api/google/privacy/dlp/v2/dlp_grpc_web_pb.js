/**
 * @fileoverview gRPC-Web generated client stub for google.privacy.dlp.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_privacy_dlp_v2_storage_pb = require('../../../../google/privacy/dlp/v2/storage_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')

var google_type_date_pb = require('../../../../google/type/date_pb.js')

var google_type_dayofweek_pb = require('../../../../google/type/dayofweek_pb.js')

var google_type_timeofday_pb = require('../../../../google/type/timeofday_pb.js')
const proto = {};
proto.google = {};
proto.google.privacy = {};
proto.google.privacy.dlp = {};
proto.google.privacy.dlp.v2 = require('./dlp_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.privacy.dlp.v2.DlpServiceClient =
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
proto.google.privacy.dlp.v2.DlpServicePromiseClient =
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
 *   !proto.google.privacy.dlp.v2.InspectContentRequest,
 *   !proto.google.privacy.dlp.v2.InspectContentResponse>}
 */
const methodDescriptor_DlpService_InspectContent = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/InspectContent',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.InspectContentRequest,
  proto.google.privacy.dlp.v2.InspectContentResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.InspectContentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.InspectContentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.InspectContentRequest,
 *   !proto.google.privacy.dlp.v2.InspectContentResponse>}
 */
const methodInfo_DlpService_InspectContent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.InspectContentResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.InspectContentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.InspectContentResponse.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.InspectContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.InspectContentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.InspectContentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.inspectContent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/InspectContent',
      request,
      metadata || {},
      methodDescriptor_DlpService_InspectContent,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.InspectContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.InspectContentResponse>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.inspectContent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/InspectContent',
      request,
      metadata || {},
      methodDescriptor_DlpService_InspectContent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.RedactImageRequest,
 *   !proto.google.privacy.dlp.v2.RedactImageResponse>}
 */
const methodDescriptor_DlpService_RedactImage = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/RedactImage',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.RedactImageRequest,
  proto.google.privacy.dlp.v2.RedactImageResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.RedactImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.RedactImageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.RedactImageRequest,
 *   !proto.google.privacy.dlp.v2.RedactImageResponse>}
 */
const methodInfo_DlpService_RedactImage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.RedactImageResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.RedactImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.RedactImageResponse.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.RedactImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.RedactImageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.RedactImageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.redactImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/RedactImage',
      request,
      metadata || {},
      methodDescriptor_DlpService_RedactImage,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.RedactImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.RedactImageResponse>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.redactImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/RedactImage',
      request,
      metadata || {},
      methodDescriptor_DlpService_RedactImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.DeidentifyContentRequest,
 *   !proto.google.privacy.dlp.v2.DeidentifyContentResponse>}
 */
const methodDescriptor_DlpService_DeidentifyContent = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/DeidentifyContent',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.DeidentifyContentRequest,
  proto.google.privacy.dlp.v2.DeidentifyContentResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeidentifyContentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DeidentifyContentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.DeidentifyContentRequest,
 *   !proto.google.privacy.dlp.v2.DeidentifyContentResponse>}
 */
const methodInfo_DlpService_DeidentifyContent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.DeidentifyContentResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeidentifyContentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DeidentifyContentResponse.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.DeidentifyContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.DeidentifyContentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.DeidentifyContentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.deidentifyContent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeidentifyContent',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeidentifyContent,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.DeidentifyContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.DeidentifyContentResponse>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.deidentifyContent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeidentifyContent',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeidentifyContent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.ReidentifyContentRequest,
 *   !proto.google.privacy.dlp.v2.ReidentifyContentResponse>}
 */
const methodDescriptor_DlpService_ReidentifyContent = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/ReidentifyContent',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.ReidentifyContentRequest,
  proto.google.privacy.dlp.v2.ReidentifyContentResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ReidentifyContentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ReidentifyContentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.ReidentifyContentRequest,
 *   !proto.google.privacy.dlp.v2.ReidentifyContentResponse>}
 */
const methodInfo_DlpService_ReidentifyContent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.ReidentifyContentResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ReidentifyContentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ReidentifyContentResponse.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.ReidentifyContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.ReidentifyContentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.ReidentifyContentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.reidentifyContent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ReidentifyContent',
      request,
      metadata || {},
      methodDescriptor_DlpService_ReidentifyContent,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.ReidentifyContentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.ReidentifyContentResponse>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.reidentifyContent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ReidentifyContent',
      request,
      metadata || {},
      methodDescriptor_DlpService_ReidentifyContent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.ListInfoTypesRequest,
 *   !proto.google.privacy.dlp.v2.ListInfoTypesResponse>}
 */
const methodDescriptor_DlpService_ListInfoTypes = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/ListInfoTypes',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.ListInfoTypesRequest,
  proto.google.privacy.dlp.v2.ListInfoTypesResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListInfoTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListInfoTypesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.ListInfoTypesRequest,
 *   !proto.google.privacy.dlp.v2.ListInfoTypesResponse>}
 */
const methodInfo_DlpService_ListInfoTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.ListInfoTypesResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListInfoTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListInfoTypesResponse.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.ListInfoTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.ListInfoTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.ListInfoTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.listInfoTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListInfoTypes',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListInfoTypes,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.ListInfoTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.ListInfoTypesResponse>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.listInfoTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListInfoTypes',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListInfoTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.CreateInspectTemplateRequest,
 *   !proto.google.privacy.dlp.v2.InspectTemplate>}
 */
const methodDescriptor_DlpService_CreateInspectTemplate = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/CreateInspectTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.CreateInspectTemplateRequest,
  proto.google.privacy.dlp.v2.InspectTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.CreateInspectTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.InspectTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.CreateInspectTemplateRequest,
 *   !proto.google.privacy.dlp.v2.InspectTemplate>}
 */
const methodInfo_DlpService_CreateInspectTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.InspectTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.CreateInspectTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.InspectTemplate.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.CreateInspectTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.InspectTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.InspectTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.createInspectTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CreateInspectTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_CreateInspectTemplate,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.CreateInspectTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.InspectTemplate>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.createInspectTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CreateInspectTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_CreateInspectTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.UpdateInspectTemplateRequest,
 *   !proto.google.privacy.dlp.v2.InspectTemplate>}
 */
const methodDescriptor_DlpService_UpdateInspectTemplate = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/UpdateInspectTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.UpdateInspectTemplateRequest,
  proto.google.privacy.dlp.v2.InspectTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.UpdateInspectTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.InspectTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.UpdateInspectTemplateRequest,
 *   !proto.google.privacy.dlp.v2.InspectTemplate>}
 */
const methodInfo_DlpService_UpdateInspectTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.InspectTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.UpdateInspectTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.InspectTemplate.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.UpdateInspectTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.InspectTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.InspectTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.updateInspectTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/UpdateInspectTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_UpdateInspectTemplate,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.UpdateInspectTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.InspectTemplate>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.updateInspectTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/UpdateInspectTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_UpdateInspectTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.GetInspectTemplateRequest,
 *   !proto.google.privacy.dlp.v2.InspectTemplate>}
 */
const methodDescriptor_DlpService_GetInspectTemplate = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/GetInspectTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.GetInspectTemplateRequest,
  proto.google.privacy.dlp.v2.InspectTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.GetInspectTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.InspectTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.GetInspectTemplateRequest,
 *   !proto.google.privacy.dlp.v2.InspectTemplate>}
 */
const methodInfo_DlpService_GetInspectTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.InspectTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.GetInspectTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.InspectTemplate.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.GetInspectTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.InspectTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.InspectTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.getInspectTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/GetInspectTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_GetInspectTemplate,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.GetInspectTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.InspectTemplate>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.getInspectTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/GetInspectTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_GetInspectTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.ListInspectTemplatesRequest,
 *   !proto.google.privacy.dlp.v2.ListInspectTemplatesResponse>}
 */
const methodDescriptor_DlpService_ListInspectTemplates = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/ListInspectTemplates',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.ListInspectTemplatesRequest,
  proto.google.privacy.dlp.v2.ListInspectTemplatesResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListInspectTemplatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListInspectTemplatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.ListInspectTemplatesRequest,
 *   !proto.google.privacy.dlp.v2.ListInspectTemplatesResponse>}
 */
const methodInfo_DlpService_ListInspectTemplates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.ListInspectTemplatesResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListInspectTemplatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListInspectTemplatesResponse.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.ListInspectTemplatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.ListInspectTemplatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.ListInspectTemplatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.listInspectTemplates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListInspectTemplates',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListInspectTemplates,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.ListInspectTemplatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.ListInspectTemplatesResponse>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.listInspectTemplates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListInspectTemplates',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListInspectTemplates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.DeleteInspectTemplateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DlpService_DeleteInspectTemplate = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/DeleteInspectTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.DeleteInspectTemplateRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeleteInspectTemplateRequest} request
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
 *   !proto.google.privacy.dlp.v2.DeleteInspectTemplateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DlpService_DeleteInspectTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeleteInspectTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.DeleteInspectTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.deleteInspectTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeleteInspectTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeleteInspectTemplate,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.DeleteInspectTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.deleteInspectTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeleteInspectTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeleteInspectTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.CreateDeidentifyTemplateRequest,
 *   !proto.google.privacy.dlp.v2.DeidentifyTemplate>}
 */
const methodDescriptor_DlpService_CreateDeidentifyTemplate = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/CreateDeidentifyTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.CreateDeidentifyTemplateRequest,
  proto.google.privacy.dlp.v2.DeidentifyTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.CreateDeidentifyTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DeidentifyTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.CreateDeidentifyTemplateRequest,
 *   !proto.google.privacy.dlp.v2.DeidentifyTemplate>}
 */
const methodInfo_DlpService_CreateDeidentifyTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.DeidentifyTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.CreateDeidentifyTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DeidentifyTemplate.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.CreateDeidentifyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.DeidentifyTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.DeidentifyTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.createDeidentifyTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CreateDeidentifyTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_CreateDeidentifyTemplate,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.CreateDeidentifyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.DeidentifyTemplate>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.createDeidentifyTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CreateDeidentifyTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_CreateDeidentifyTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.UpdateDeidentifyTemplateRequest,
 *   !proto.google.privacy.dlp.v2.DeidentifyTemplate>}
 */
const methodDescriptor_DlpService_UpdateDeidentifyTemplate = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/UpdateDeidentifyTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.UpdateDeidentifyTemplateRequest,
  proto.google.privacy.dlp.v2.DeidentifyTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.UpdateDeidentifyTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DeidentifyTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.UpdateDeidentifyTemplateRequest,
 *   !proto.google.privacy.dlp.v2.DeidentifyTemplate>}
 */
const methodInfo_DlpService_UpdateDeidentifyTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.DeidentifyTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.UpdateDeidentifyTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DeidentifyTemplate.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.UpdateDeidentifyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.DeidentifyTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.DeidentifyTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.updateDeidentifyTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/UpdateDeidentifyTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_UpdateDeidentifyTemplate,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.UpdateDeidentifyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.DeidentifyTemplate>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.updateDeidentifyTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/UpdateDeidentifyTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_UpdateDeidentifyTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.GetDeidentifyTemplateRequest,
 *   !proto.google.privacy.dlp.v2.DeidentifyTemplate>}
 */
const methodDescriptor_DlpService_GetDeidentifyTemplate = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/GetDeidentifyTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.GetDeidentifyTemplateRequest,
  proto.google.privacy.dlp.v2.DeidentifyTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.GetDeidentifyTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DeidentifyTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.GetDeidentifyTemplateRequest,
 *   !proto.google.privacy.dlp.v2.DeidentifyTemplate>}
 */
const methodInfo_DlpService_GetDeidentifyTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.DeidentifyTemplate,
  /**
   * @param {!proto.google.privacy.dlp.v2.GetDeidentifyTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DeidentifyTemplate.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.GetDeidentifyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.DeidentifyTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.DeidentifyTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.getDeidentifyTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/GetDeidentifyTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_GetDeidentifyTemplate,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.GetDeidentifyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.DeidentifyTemplate>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.getDeidentifyTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/GetDeidentifyTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_GetDeidentifyTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.ListDeidentifyTemplatesRequest,
 *   !proto.google.privacy.dlp.v2.ListDeidentifyTemplatesResponse>}
 */
const methodDescriptor_DlpService_ListDeidentifyTemplates = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/ListDeidentifyTemplates',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.ListDeidentifyTemplatesRequest,
  proto.google.privacy.dlp.v2.ListDeidentifyTemplatesResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListDeidentifyTemplatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListDeidentifyTemplatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.ListDeidentifyTemplatesRequest,
 *   !proto.google.privacy.dlp.v2.ListDeidentifyTemplatesResponse>}
 */
const methodInfo_DlpService_ListDeidentifyTemplates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.ListDeidentifyTemplatesResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListDeidentifyTemplatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListDeidentifyTemplatesResponse.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.ListDeidentifyTemplatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.ListDeidentifyTemplatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.ListDeidentifyTemplatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.listDeidentifyTemplates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListDeidentifyTemplates',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListDeidentifyTemplates,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.ListDeidentifyTemplatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.ListDeidentifyTemplatesResponse>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.listDeidentifyTemplates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListDeidentifyTemplates',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListDeidentifyTemplates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.DeleteDeidentifyTemplateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DlpService_DeleteDeidentifyTemplate = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/DeleteDeidentifyTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.DeleteDeidentifyTemplateRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeleteDeidentifyTemplateRequest} request
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
 *   !proto.google.privacy.dlp.v2.DeleteDeidentifyTemplateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DlpService_DeleteDeidentifyTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeleteDeidentifyTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.DeleteDeidentifyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.deleteDeidentifyTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeleteDeidentifyTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeleteDeidentifyTemplate,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.DeleteDeidentifyTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.deleteDeidentifyTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeleteDeidentifyTemplate',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeleteDeidentifyTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.CreateJobTriggerRequest,
 *   !proto.google.privacy.dlp.v2.JobTrigger>}
 */
const methodDescriptor_DlpService_CreateJobTrigger = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/CreateJobTrigger',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.CreateJobTriggerRequest,
  proto.google.privacy.dlp.v2.JobTrigger,
  /**
   * @param {!proto.google.privacy.dlp.v2.CreateJobTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.JobTrigger.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.CreateJobTriggerRequest,
 *   !proto.google.privacy.dlp.v2.JobTrigger>}
 */
const methodInfo_DlpService_CreateJobTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.JobTrigger,
  /**
   * @param {!proto.google.privacy.dlp.v2.CreateJobTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.JobTrigger.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.CreateJobTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.JobTrigger)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.JobTrigger>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.createJobTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CreateJobTrigger',
      request,
      metadata || {},
      methodDescriptor_DlpService_CreateJobTrigger,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.CreateJobTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.JobTrigger>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.createJobTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CreateJobTrigger',
      request,
      metadata || {},
      methodDescriptor_DlpService_CreateJobTrigger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.UpdateJobTriggerRequest,
 *   !proto.google.privacy.dlp.v2.JobTrigger>}
 */
const methodDescriptor_DlpService_UpdateJobTrigger = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/UpdateJobTrigger',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.UpdateJobTriggerRequest,
  proto.google.privacy.dlp.v2.JobTrigger,
  /**
   * @param {!proto.google.privacy.dlp.v2.UpdateJobTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.JobTrigger.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.UpdateJobTriggerRequest,
 *   !proto.google.privacy.dlp.v2.JobTrigger>}
 */
const methodInfo_DlpService_UpdateJobTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.JobTrigger,
  /**
   * @param {!proto.google.privacy.dlp.v2.UpdateJobTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.JobTrigger.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.UpdateJobTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.JobTrigger)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.JobTrigger>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.updateJobTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/UpdateJobTrigger',
      request,
      metadata || {},
      methodDescriptor_DlpService_UpdateJobTrigger,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.UpdateJobTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.JobTrigger>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.updateJobTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/UpdateJobTrigger',
      request,
      metadata || {},
      methodDescriptor_DlpService_UpdateJobTrigger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.GetJobTriggerRequest,
 *   !proto.google.privacy.dlp.v2.JobTrigger>}
 */
const methodDescriptor_DlpService_GetJobTrigger = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/GetJobTrigger',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.GetJobTriggerRequest,
  proto.google.privacy.dlp.v2.JobTrigger,
  /**
   * @param {!proto.google.privacy.dlp.v2.GetJobTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.JobTrigger.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.GetJobTriggerRequest,
 *   !proto.google.privacy.dlp.v2.JobTrigger>}
 */
const methodInfo_DlpService_GetJobTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.JobTrigger,
  /**
   * @param {!proto.google.privacy.dlp.v2.GetJobTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.JobTrigger.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.GetJobTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.JobTrigger)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.JobTrigger>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.getJobTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/GetJobTrigger',
      request,
      metadata || {},
      methodDescriptor_DlpService_GetJobTrigger,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.GetJobTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.JobTrigger>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.getJobTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/GetJobTrigger',
      request,
      metadata || {},
      methodDescriptor_DlpService_GetJobTrigger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.ListJobTriggersRequest,
 *   !proto.google.privacy.dlp.v2.ListJobTriggersResponse>}
 */
const methodDescriptor_DlpService_ListJobTriggers = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/ListJobTriggers',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.ListJobTriggersRequest,
  proto.google.privacy.dlp.v2.ListJobTriggersResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListJobTriggersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListJobTriggersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.ListJobTriggersRequest,
 *   !proto.google.privacy.dlp.v2.ListJobTriggersResponse>}
 */
const methodInfo_DlpService_ListJobTriggers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.ListJobTriggersResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListJobTriggersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListJobTriggersResponse.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.ListJobTriggersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.ListJobTriggersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.ListJobTriggersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.listJobTriggers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListJobTriggers',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListJobTriggers,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.ListJobTriggersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.ListJobTriggersResponse>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.listJobTriggers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListJobTriggers',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListJobTriggers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.DeleteJobTriggerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DlpService_DeleteJobTrigger = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/DeleteJobTrigger',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.DeleteJobTriggerRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeleteJobTriggerRequest} request
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
 *   !proto.google.privacy.dlp.v2.DeleteJobTriggerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DlpService_DeleteJobTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeleteJobTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.DeleteJobTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.deleteJobTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeleteJobTrigger',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeleteJobTrigger,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.DeleteJobTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.deleteJobTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeleteJobTrigger',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeleteJobTrigger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.CreateDlpJobRequest,
 *   !proto.google.privacy.dlp.v2.DlpJob>}
 */
const methodDescriptor_DlpService_CreateDlpJob = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/CreateDlpJob',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.CreateDlpJobRequest,
  proto.google.privacy.dlp.v2.DlpJob,
  /**
   * @param {!proto.google.privacy.dlp.v2.CreateDlpJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DlpJob.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.CreateDlpJobRequest,
 *   !proto.google.privacy.dlp.v2.DlpJob>}
 */
const methodInfo_DlpService_CreateDlpJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.DlpJob,
  /**
   * @param {!proto.google.privacy.dlp.v2.CreateDlpJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DlpJob.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.CreateDlpJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.DlpJob)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.DlpJob>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.createDlpJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CreateDlpJob',
      request,
      metadata || {},
      methodDescriptor_DlpService_CreateDlpJob,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.CreateDlpJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.DlpJob>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.createDlpJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CreateDlpJob',
      request,
      metadata || {},
      methodDescriptor_DlpService_CreateDlpJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.ListDlpJobsRequest,
 *   !proto.google.privacy.dlp.v2.ListDlpJobsResponse>}
 */
const methodDescriptor_DlpService_ListDlpJobs = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/ListDlpJobs',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.ListDlpJobsRequest,
  proto.google.privacy.dlp.v2.ListDlpJobsResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListDlpJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListDlpJobsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.ListDlpJobsRequest,
 *   !proto.google.privacy.dlp.v2.ListDlpJobsResponse>}
 */
const methodInfo_DlpService_ListDlpJobs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.ListDlpJobsResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListDlpJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListDlpJobsResponse.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.ListDlpJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.ListDlpJobsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.ListDlpJobsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.listDlpJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListDlpJobs',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListDlpJobs,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.ListDlpJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.ListDlpJobsResponse>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.listDlpJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListDlpJobs',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListDlpJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.GetDlpJobRequest,
 *   !proto.google.privacy.dlp.v2.DlpJob>}
 */
const methodDescriptor_DlpService_GetDlpJob = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/GetDlpJob',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.GetDlpJobRequest,
  proto.google.privacy.dlp.v2.DlpJob,
  /**
   * @param {!proto.google.privacy.dlp.v2.GetDlpJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DlpJob.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.GetDlpJobRequest,
 *   !proto.google.privacy.dlp.v2.DlpJob>}
 */
const methodInfo_DlpService_GetDlpJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.DlpJob,
  /**
   * @param {!proto.google.privacy.dlp.v2.GetDlpJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.DlpJob.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.GetDlpJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.DlpJob)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.DlpJob>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.getDlpJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/GetDlpJob',
      request,
      metadata || {},
      methodDescriptor_DlpService_GetDlpJob,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.GetDlpJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.DlpJob>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.getDlpJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/GetDlpJob',
      request,
      metadata || {},
      methodDescriptor_DlpService_GetDlpJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.DeleteDlpJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DlpService_DeleteDlpJob = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/DeleteDlpJob',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.DeleteDlpJobRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeleteDlpJobRequest} request
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
 *   !proto.google.privacy.dlp.v2.DeleteDlpJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DlpService_DeleteDlpJob = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeleteDlpJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.DeleteDlpJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.deleteDlpJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeleteDlpJob',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeleteDlpJob,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.DeleteDlpJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.deleteDlpJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeleteDlpJob',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeleteDlpJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.CancelDlpJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DlpService_CancelDlpJob = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/CancelDlpJob',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.CancelDlpJobRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.CancelDlpJobRequest} request
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
 *   !proto.google.privacy.dlp.v2.CancelDlpJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DlpService_CancelDlpJob = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.CancelDlpJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.CancelDlpJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.cancelDlpJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CancelDlpJob',
      request,
      metadata || {},
      methodDescriptor_DlpService_CancelDlpJob,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.CancelDlpJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.cancelDlpJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CancelDlpJob',
      request,
      metadata || {},
      methodDescriptor_DlpService_CancelDlpJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.CreateStoredInfoTypeRequest,
 *   !proto.google.privacy.dlp.v2.StoredInfoType>}
 */
const methodDescriptor_DlpService_CreateStoredInfoType = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/CreateStoredInfoType',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.CreateStoredInfoTypeRequest,
  proto.google.privacy.dlp.v2.StoredInfoType,
  /**
   * @param {!proto.google.privacy.dlp.v2.CreateStoredInfoTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.StoredInfoType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.CreateStoredInfoTypeRequest,
 *   !proto.google.privacy.dlp.v2.StoredInfoType>}
 */
const methodInfo_DlpService_CreateStoredInfoType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.StoredInfoType,
  /**
   * @param {!proto.google.privacy.dlp.v2.CreateStoredInfoTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.StoredInfoType.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.CreateStoredInfoTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.StoredInfoType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.StoredInfoType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.createStoredInfoType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CreateStoredInfoType',
      request,
      metadata || {},
      methodDescriptor_DlpService_CreateStoredInfoType,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.CreateStoredInfoTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.StoredInfoType>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.createStoredInfoType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/CreateStoredInfoType',
      request,
      metadata || {},
      methodDescriptor_DlpService_CreateStoredInfoType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.UpdateStoredInfoTypeRequest,
 *   !proto.google.privacy.dlp.v2.StoredInfoType>}
 */
const methodDescriptor_DlpService_UpdateStoredInfoType = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/UpdateStoredInfoType',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.UpdateStoredInfoTypeRequest,
  proto.google.privacy.dlp.v2.StoredInfoType,
  /**
   * @param {!proto.google.privacy.dlp.v2.UpdateStoredInfoTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.StoredInfoType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.UpdateStoredInfoTypeRequest,
 *   !proto.google.privacy.dlp.v2.StoredInfoType>}
 */
const methodInfo_DlpService_UpdateStoredInfoType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.StoredInfoType,
  /**
   * @param {!proto.google.privacy.dlp.v2.UpdateStoredInfoTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.StoredInfoType.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.UpdateStoredInfoTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.StoredInfoType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.StoredInfoType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.updateStoredInfoType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/UpdateStoredInfoType',
      request,
      metadata || {},
      methodDescriptor_DlpService_UpdateStoredInfoType,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.UpdateStoredInfoTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.StoredInfoType>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.updateStoredInfoType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/UpdateStoredInfoType',
      request,
      metadata || {},
      methodDescriptor_DlpService_UpdateStoredInfoType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.GetStoredInfoTypeRequest,
 *   !proto.google.privacy.dlp.v2.StoredInfoType>}
 */
const methodDescriptor_DlpService_GetStoredInfoType = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/GetStoredInfoType',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.GetStoredInfoTypeRequest,
  proto.google.privacy.dlp.v2.StoredInfoType,
  /**
   * @param {!proto.google.privacy.dlp.v2.GetStoredInfoTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.StoredInfoType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.GetStoredInfoTypeRequest,
 *   !proto.google.privacy.dlp.v2.StoredInfoType>}
 */
const methodInfo_DlpService_GetStoredInfoType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.StoredInfoType,
  /**
   * @param {!proto.google.privacy.dlp.v2.GetStoredInfoTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.StoredInfoType.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.GetStoredInfoTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.StoredInfoType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.StoredInfoType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.getStoredInfoType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/GetStoredInfoType',
      request,
      metadata || {},
      methodDescriptor_DlpService_GetStoredInfoType,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.GetStoredInfoTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.StoredInfoType>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.getStoredInfoType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/GetStoredInfoType',
      request,
      metadata || {},
      methodDescriptor_DlpService_GetStoredInfoType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.ListStoredInfoTypesRequest,
 *   !proto.google.privacy.dlp.v2.ListStoredInfoTypesResponse>}
 */
const methodDescriptor_DlpService_ListStoredInfoTypes = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/ListStoredInfoTypes',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.ListStoredInfoTypesRequest,
  proto.google.privacy.dlp.v2.ListStoredInfoTypesResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListStoredInfoTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListStoredInfoTypesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.privacy.dlp.v2.ListStoredInfoTypesRequest,
 *   !proto.google.privacy.dlp.v2.ListStoredInfoTypesResponse>}
 */
const methodInfo_DlpService_ListStoredInfoTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.privacy.dlp.v2.ListStoredInfoTypesResponse,
  /**
   * @param {!proto.google.privacy.dlp.v2.ListStoredInfoTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.privacy.dlp.v2.ListStoredInfoTypesResponse.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.ListStoredInfoTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.privacy.dlp.v2.ListStoredInfoTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.privacy.dlp.v2.ListStoredInfoTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.listStoredInfoTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListStoredInfoTypes',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListStoredInfoTypes,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.ListStoredInfoTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.privacy.dlp.v2.ListStoredInfoTypesResponse>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.listStoredInfoTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/ListStoredInfoTypes',
      request,
      metadata || {},
      methodDescriptor_DlpService_ListStoredInfoTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.privacy.dlp.v2.DeleteStoredInfoTypeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DlpService_DeleteStoredInfoType = new grpc.web.MethodDescriptor(
  '/google.privacy.dlp.v2.DlpService/DeleteStoredInfoType',
  grpc.web.MethodType.UNARY,
  proto.google.privacy.dlp.v2.DeleteStoredInfoTypeRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeleteStoredInfoTypeRequest} request
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
 *   !proto.google.privacy.dlp.v2.DeleteStoredInfoTypeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DlpService_DeleteStoredInfoType = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.privacy.dlp.v2.DeleteStoredInfoTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.privacy.dlp.v2.DeleteStoredInfoTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.privacy.dlp.v2.DlpServiceClient.prototype.deleteStoredInfoType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeleteStoredInfoType',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeleteStoredInfoType,
      callback);
};


/**
 * @param {!proto.google.privacy.dlp.v2.DeleteStoredInfoTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.privacy.dlp.v2.DlpServicePromiseClient.prototype.deleteStoredInfoType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.privacy.dlp.v2.DlpService/DeleteStoredInfoType',
      request,
      metadata || {},
      methodDescriptor_DlpService_DeleteStoredInfoType);
};


module.exports = proto.google.privacy.dlp.v2;

