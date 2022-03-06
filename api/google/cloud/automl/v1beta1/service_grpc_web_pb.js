/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.automl.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_automl_v1beta1_annotation_payload_pb = require('../../../../google/cloud/automl/v1beta1/annotation_payload_pb.js')

var google_cloud_automl_v1beta1_dataset_pb = require('../../../../google/cloud/automl/v1beta1/dataset_pb.js')

var google_cloud_automl_v1beta1_io_pb = require('../../../../google/cloud/automl/v1beta1/io_pb.js')

var google_cloud_automl_v1beta1_model_pb = require('../../../../google/cloud/automl/v1beta1/model_pb.js')

var google_cloud_automl_v1beta1_model_evaluation_pb = require('../../../../google/cloud/automl/v1beta1/model_evaluation_pb.js')

var google_cloud_automl_v1beta1_operations_pb = require('../../../../google/cloud/automl/v1beta1/operations_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.automl = {};
proto.google.cloud.automl.v1beta1 = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.automl.v1beta1.AutoMlClient =
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
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient =
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
 *   !proto.google.cloud.automl.v1beta1.CreateDatasetRequest,
 *   !proto.google.cloud.automl.v1beta1.Dataset>}
 */
const methodDescriptor_AutoMl_CreateDataset = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/CreateDataset',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.CreateDatasetRequest,
  google_cloud_automl_v1beta1_dataset_pb.Dataset,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.CreateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.automl.v1beta1.CreateDatasetRequest,
 *   !proto.google.cloud.automl.v1beta1.Dataset>}
 */
const methodInfo_AutoMl_CreateDataset = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_automl_v1beta1_dataset_pb.Dataset,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.CreateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.CreateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.automl.v1beta1.Dataset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.automl.v1beta1.Dataset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.createDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/CreateDataset',
      request,
      metadata || {},
      methodDescriptor_AutoMl_CreateDataset,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.CreateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.automl.v1beta1.Dataset>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.createDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/CreateDataset',
      request,
      metadata || {},
      methodDescriptor_AutoMl_CreateDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.GetDatasetRequest,
 *   !proto.google.cloud.automl.v1beta1.Dataset>}
 */
const methodDescriptor_AutoMl_GetDataset = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/GetDataset',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.GetDatasetRequest,
  google_cloud_automl_v1beta1_dataset_pb.Dataset,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.GetDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.automl.v1beta1.GetDatasetRequest,
 *   !proto.google.cloud.automl.v1beta1.Dataset>}
 */
const methodInfo_AutoMl_GetDataset = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_automl_v1beta1_dataset_pb.Dataset,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.GetDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_automl_v1beta1_dataset_pb.Dataset.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.GetDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.automl.v1beta1.Dataset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.automl.v1beta1.Dataset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.getDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/GetDataset',
      request,
      metadata || {},
      methodDescriptor_AutoMl_GetDataset,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.GetDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.automl.v1beta1.Dataset>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.getDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/GetDataset',
      request,
      metadata || {},
      methodDescriptor_AutoMl_GetDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.ListDatasetsRequest,
 *   !proto.google.cloud.automl.v1beta1.ListDatasetsResponse>}
 */
const methodDescriptor_AutoMl_ListDatasets = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/ListDatasets',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.ListDatasetsRequest,
  proto.google.cloud.automl.v1beta1.ListDatasetsResponse,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.ListDatasetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.automl.v1beta1.ListDatasetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.automl.v1beta1.ListDatasetsRequest,
 *   !proto.google.cloud.automl.v1beta1.ListDatasetsResponse>}
 */
const methodInfo_AutoMl_ListDatasets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.automl.v1beta1.ListDatasetsResponse,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.ListDatasetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.automl.v1beta1.ListDatasetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.ListDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.automl.v1beta1.ListDatasetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.automl.v1beta1.ListDatasetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.listDatasets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/ListDatasets',
      request,
      metadata || {},
      methodDescriptor_AutoMl_ListDatasets,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.ListDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.automl.v1beta1.ListDatasetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.listDatasets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/ListDatasets',
      request,
      metadata || {},
      methodDescriptor_AutoMl_ListDatasets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.DeleteDatasetRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_AutoMl_DeleteDataset = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/DeleteDataset',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.DeleteDatasetRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.DeleteDatasetRequest} request
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
 *   !proto.google.cloud.automl.v1beta1.DeleteDatasetRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_AutoMl_DeleteDataset = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.DeleteDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.DeleteDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.deleteDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/DeleteDataset',
      request,
      metadata || {},
      methodDescriptor_AutoMl_DeleteDataset,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.DeleteDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.deleteDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/DeleteDataset',
      request,
      metadata || {},
      methodDescriptor_AutoMl_DeleteDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.ImportDataRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_AutoMl_ImportData = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/ImportData',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.ImportDataRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.ImportDataRequest} request
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
 *   !proto.google.cloud.automl.v1beta1.ImportDataRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_AutoMl_ImportData = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.ImportDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.ImportDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.importData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/ImportData',
      request,
      metadata || {},
      methodDescriptor_AutoMl_ImportData,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.ImportDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.importData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/ImportData',
      request,
      metadata || {},
      methodDescriptor_AutoMl_ImportData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.ExportDataRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_AutoMl_ExportData = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/ExportData',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.ExportDataRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.ExportDataRequest} request
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
 *   !proto.google.cloud.automl.v1beta1.ExportDataRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_AutoMl_ExportData = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.ExportDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.ExportDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.exportData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/ExportData',
      request,
      metadata || {},
      methodDescriptor_AutoMl_ExportData,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.ExportDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.exportData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/ExportData',
      request,
      metadata || {},
      methodDescriptor_AutoMl_ExportData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.CreateModelRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_AutoMl_CreateModel = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/CreateModel',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.CreateModelRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.CreateModelRequest} request
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
 *   !proto.google.cloud.automl.v1beta1.CreateModelRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_AutoMl_CreateModel = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.CreateModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.CreateModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.createModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/CreateModel',
      request,
      metadata || {},
      methodDescriptor_AutoMl_CreateModel,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.CreateModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.createModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/CreateModel',
      request,
      metadata || {},
      methodDescriptor_AutoMl_CreateModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.GetModelRequest,
 *   !proto.google.cloud.automl.v1beta1.Model>}
 */
const methodDescriptor_AutoMl_GetModel = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/GetModel',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.GetModelRequest,
  google_cloud_automl_v1beta1_model_pb.Model,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.GetModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_automl_v1beta1_model_pb.Model.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.automl.v1beta1.GetModelRequest,
 *   !proto.google.cloud.automl.v1beta1.Model>}
 */
const methodInfo_AutoMl_GetModel = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_automl_v1beta1_model_pb.Model,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.GetModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_automl_v1beta1_model_pb.Model.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.GetModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.automl.v1beta1.Model)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.automl.v1beta1.Model>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.getModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/GetModel',
      request,
      metadata || {},
      methodDescriptor_AutoMl_GetModel,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.GetModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.automl.v1beta1.Model>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.getModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/GetModel',
      request,
      metadata || {},
      methodDescriptor_AutoMl_GetModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.ListModelsRequest,
 *   !proto.google.cloud.automl.v1beta1.ListModelsResponse>}
 */
const methodDescriptor_AutoMl_ListModels = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/ListModels',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.ListModelsRequest,
  proto.google.cloud.automl.v1beta1.ListModelsResponse,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.ListModelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.automl.v1beta1.ListModelsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.automl.v1beta1.ListModelsRequest,
 *   !proto.google.cloud.automl.v1beta1.ListModelsResponse>}
 */
const methodInfo_AutoMl_ListModels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.automl.v1beta1.ListModelsResponse,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.ListModelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.automl.v1beta1.ListModelsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.ListModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.automl.v1beta1.ListModelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.automl.v1beta1.ListModelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.listModels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/ListModels',
      request,
      metadata || {},
      methodDescriptor_AutoMl_ListModels,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.ListModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.automl.v1beta1.ListModelsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.listModels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/ListModels',
      request,
      metadata || {},
      methodDescriptor_AutoMl_ListModels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.DeleteModelRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_AutoMl_DeleteModel = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/DeleteModel',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.DeleteModelRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.DeleteModelRequest} request
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
 *   !proto.google.cloud.automl.v1beta1.DeleteModelRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_AutoMl_DeleteModel = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.DeleteModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.DeleteModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.deleteModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/DeleteModel',
      request,
      metadata || {},
      methodDescriptor_AutoMl_DeleteModel,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.DeleteModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.deleteModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/DeleteModel',
      request,
      metadata || {},
      methodDescriptor_AutoMl_DeleteModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.DeployModelRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_AutoMl_DeployModel = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/DeployModel',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.DeployModelRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.DeployModelRequest} request
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
 *   !proto.google.cloud.automl.v1beta1.DeployModelRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_AutoMl_DeployModel = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.DeployModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.DeployModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.deployModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/DeployModel',
      request,
      metadata || {},
      methodDescriptor_AutoMl_DeployModel,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.DeployModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.deployModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/DeployModel',
      request,
      metadata || {},
      methodDescriptor_AutoMl_DeployModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.UndeployModelRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_AutoMl_UndeployModel = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/UndeployModel',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.UndeployModelRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.UndeployModelRequest} request
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
 *   !proto.google.cloud.automl.v1beta1.UndeployModelRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_AutoMl_UndeployModel = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.UndeployModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.UndeployModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.undeployModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/UndeployModel',
      request,
      metadata || {},
      methodDescriptor_AutoMl_UndeployModel,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.UndeployModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.undeployModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/UndeployModel',
      request,
      metadata || {},
      methodDescriptor_AutoMl_UndeployModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest,
 *   !proto.google.cloud.automl.v1beta1.ModelEvaluation>}
 */
const methodDescriptor_AutoMl_GetModelEvaluation = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/GetModelEvaluation',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest,
  google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest,
 *   !proto.google.cloud.automl.v1beta1.ModelEvaluation>}
 */
const methodInfo_AutoMl_GetModelEvaluation = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.automl.v1beta1.ModelEvaluation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.automl.v1beta1.ModelEvaluation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.getModelEvaluation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/GetModelEvaluation',
      request,
      metadata || {},
      methodDescriptor_AutoMl_GetModelEvaluation,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.GetModelEvaluationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.automl.v1beta1.ModelEvaluation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.getModelEvaluation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/GetModelEvaluation',
      request,
      metadata || {},
      methodDescriptor_AutoMl_GetModelEvaluation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest,
 *   !proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse>}
 */
const methodDescriptor_AutoMl_ListModelEvaluations = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.AutoMl/ListModelEvaluations',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest,
  proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest,
 *   !proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse>}
 */
const methodInfo_AutoMl_ListModelEvaluations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.AutoMlClient.prototype.listModelEvaluations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/ListModelEvaluations',
      request,
      metadata || {},
      methodDescriptor_AutoMl_ListModelEvaluations,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.ListModelEvaluationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.automl.v1beta1.ListModelEvaluationsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.AutoMlPromiseClient.prototype.listModelEvaluations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.AutoMl/ListModelEvaluations',
      request,
      metadata || {},
      methodDescriptor_AutoMl_ListModelEvaluations);
};


module.exports = proto.google.cloud.automl.v1beta1;

