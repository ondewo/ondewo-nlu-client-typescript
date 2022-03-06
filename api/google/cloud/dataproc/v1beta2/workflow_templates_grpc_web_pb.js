/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dataproc.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_dataproc_v1beta2_clusters_pb = require('../../../../google/cloud/dataproc/v1beta2/clusters_pb.js')

var google_cloud_dataproc_v1beta2_jobs_pb = require('../../../../google/cloud/dataproc/v1beta2/jobs_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dataproc = {};
proto.google.cloud.dataproc.v1beta2 = require('./workflow_templates_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServiceClient =
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
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServicePromiseClient =
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
 *   !proto.google.cloud.dataproc.v1beta2.CreateWorkflowTemplateRequest,
 *   !proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>}
 */
const methodDescriptor_WorkflowTemplateService_CreateWorkflowTemplate = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/CreateWorkflowTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.CreateWorkflowTemplateRequest,
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.CreateWorkflowTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1beta2.CreateWorkflowTemplateRequest,
 *   !proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>}
 */
const methodInfo_WorkflowTemplateService_CreateWorkflowTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.CreateWorkflowTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.CreateWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1beta2.WorkflowTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServiceClient.prototype.createWorkflowTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/CreateWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_CreateWorkflowTemplate,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.CreateWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServicePromiseClient.prototype.createWorkflowTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/CreateWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_CreateWorkflowTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.GetWorkflowTemplateRequest,
 *   !proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>}
 */
const methodDescriptor_WorkflowTemplateService_GetWorkflowTemplate = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/GetWorkflowTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.GetWorkflowTemplateRequest,
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.GetWorkflowTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1beta2.GetWorkflowTemplateRequest,
 *   !proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>}
 */
const methodInfo_WorkflowTemplateService_GetWorkflowTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.GetWorkflowTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.GetWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1beta2.WorkflowTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServiceClient.prototype.getWorkflowTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/GetWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_GetWorkflowTemplate,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.GetWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServicePromiseClient.prototype.getWorkflowTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/GetWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_GetWorkflowTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.InstantiateWorkflowTemplateRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_WorkflowTemplateService_InstantiateWorkflowTemplate = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/InstantiateWorkflowTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.InstantiateWorkflowTemplateRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.InstantiateWorkflowTemplateRequest} request
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
 *   !proto.google.cloud.dataproc.v1beta2.InstantiateWorkflowTemplateRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_WorkflowTemplateService_InstantiateWorkflowTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.InstantiateWorkflowTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.InstantiateWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServiceClient.prototype.instantiateWorkflowTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/InstantiateWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_InstantiateWorkflowTemplate,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.InstantiateWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServicePromiseClient.prototype.instantiateWorkflowTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/InstantiateWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_InstantiateWorkflowTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.InstantiateInlineWorkflowTemplateRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_WorkflowTemplateService_InstantiateInlineWorkflowTemplate = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/InstantiateInlineWorkflowTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.InstantiateInlineWorkflowTemplateRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.InstantiateInlineWorkflowTemplateRequest} request
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
 *   !proto.google.cloud.dataproc.v1beta2.InstantiateInlineWorkflowTemplateRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_WorkflowTemplateService_InstantiateInlineWorkflowTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.InstantiateInlineWorkflowTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.InstantiateInlineWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServiceClient.prototype.instantiateInlineWorkflowTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/InstantiateInlineWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_InstantiateInlineWorkflowTemplate,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.InstantiateInlineWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServicePromiseClient.prototype.instantiateInlineWorkflowTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/InstantiateInlineWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_InstantiateInlineWorkflowTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.UpdateWorkflowTemplateRequest,
 *   !proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>}
 */
const methodDescriptor_WorkflowTemplateService_UpdateWorkflowTemplate = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/UpdateWorkflowTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.UpdateWorkflowTemplateRequest,
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.UpdateWorkflowTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1beta2.UpdateWorkflowTemplateRequest,
 *   !proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>}
 */
const methodInfo_WorkflowTemplateService_UpdateWorkflowTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.UpdateWorkflowTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.WorkflowTemplate.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.UpdateWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1beta2.WorkflowTemplate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServiceClient.prototype.updateWorkflowTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/UpdateWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_UpdateWorkflowTemplate,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.UpdateWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1beta2.WorkflowTemplate>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServicePromiseClient.prototype.updateWorkflowTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/UpdateWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_UpdateWorkflowTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesRequest,
 *   !proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse>}
 */
const methodDescriptor_WorkflowTemplateService_ListWorkflowTemplates = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/ListWorkflowTemplates',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesRequest,
  proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesRequest,
 *   !proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse>}
 */
const methodInfo_WorkflowTemplateService_ListWorkflowTemplates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServiceClient.prototype.listWorkflowTemplates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/ListWorkflowTemplates',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_ListWorkflowTemplates,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServicePromiseClient.prototype.listWorkflowTemplates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/ListWorkflowTemplates',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_ListWorkflowTemplates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dataproc.v1beta2.DeleteWorkflowTemplateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_WorkflowTemplateService_DeleteWorkflowTemplate = new grpc.web.MethodDescriptor(
  '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/DeleteWorkflowTemplate',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dataproc.v1beta2.DeleteWorkflowTemplateRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.DeleteWorkflowTemplateRequest} request
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
 *   !proto.google.cloud.dataproc.v1beta2.DeleteWorkflowTemplateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_WorkflowTemplateService_DeleteWorkflowTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dataproc.v1beta2.DeleteWorkflowTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.DeleteWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServiceClient.prototype.deleteWorkflowTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/DeleteWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_DeleteWorkflowTemplate,
      callback);
};


/**
 * @param {!proto.google.cloud.dataproc.v1beta2.DeleteWorkflowTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dataproc.v1beta2.WorkflowTemplateServicePromiseClient.prototype.deleteWorkflowTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/DeleteWorkflowTemplate',
      request,
      metadata || {},
      methodDescriptor_WorkflowTemplateService_DeleteWorkflowTemplate);
};


module.exports = proto.google.cloud.dataproc.v1beta2;

