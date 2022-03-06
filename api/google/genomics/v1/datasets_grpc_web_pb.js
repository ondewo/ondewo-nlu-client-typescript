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

var google_iam_v1_iam_policy_pb = require('../../../google/iam/v1/iam_policy_pb.js')

var google_iam_v1_policy_pb = require('../../../google/iam/v1/policy_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.genomics = {};
proto.google.genomics.v1 = require('./datasets_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.genomics.v1.DatasetServiceV1Client =
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
proto.google.genomics.v1.DatasetServiceV1PromiseClient =
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
 *   !proto.google.genomics.v1.ListDatasetsRequest,
 *   !proto.google.genomics.v1.ListDatasetsResponse>}
 */
const methodDescriptor_DatasetServiceV1_ListDatasets = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.DatasetServiceV1/ListDatasets',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.ListDatasetsRequest,
  proto.google.genomics.v1.ListDatasetsResponse,
  /**
   * @param {!proto.google.genomics.v1.ListDatasetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.ListDatasetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.ListDatasetsRequest,
 *   !proto.google.genomics.v1.ListDatasetsResponse>}
 */
const methodInfo_DatasetServiceV1_ListDatasets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.ListDatasetsResponse,
  /**
   * @param {!proto.google.genomics.v1.ListDatasetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.ListDatasetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.ListDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.ListDatasetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.ListDatasetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.DatasetServiceV1Client.prototype.listDatasets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/ListDatasets',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_ListDatasets,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.ListDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.ListDatasetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.DatasetServiceV1PromiseClient.prototype.listDatasets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/ListDatasets',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_ListDatasets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.CreateDatasetRequest,
 *   !proto.google.genomics.v1.Dataset>}
 */
const methodDescriptor_DatasetServiceV1_CreateDataset = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.DatasetServiceV1/CreateDataset',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.CreateDatasetRequest,
  proto.google.genomics.v1.Dataset,
  /**
   * @param {!proto.google.genomics.v1.CreateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Dataset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.CreateDatasetRequest,
 *   !proto.google.genomics.v1.Dataset>}
 */
const methodInfo_DatasetServiceV1_CreateDataset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Dataset,
  /**
   * @param {!proto.google.genomics.v1.CreateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Dataset.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.CreateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Dataset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Dataset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.DatasetServiceV1Client.prototype.createDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/CreateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_CreateDataset,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.CreateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Dataset>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.DatasetServiceV1PromiseClient.prototype.createDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/CreateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_CreateDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.GetDatasetRequest,
 *   !proto.google.genomics.v1.Dataset>}
 */
const methodDescriptor_DatasetServiceV1_GetDataset = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.DatasetServiceV1/GetDataset',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.GetDatasetRequest,
  proto.google.genomics.v1.Dataset,
  /**
   * @param {!proto.google.genomics.v1.GetDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Dataset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.GetDatasetRequest,
 *   !proto.google.genomics.v1.Dataset>}
 */
const methodInfo_DatasetServiceV1_GetDataset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Dataset,
  /**
   * @param {!proto.google.genomics.v1.GetDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Dataset.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.GetDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Dataset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Dataset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.DatasetServiceV1Client.prototype.getDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/GetDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_GetDataset,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.GetDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Dataset>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.DatasetServiceV1PromiseClient.prototype.getDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/GetDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_GetDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.UpdateDatasetRequest,
 *   !proto.google.genomics.v1.Dataset>}
 */
const methodDescriptor_DatasetServiceV1_UpdateDataset = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.DatasetServiceV1/UpdateDataset',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.UpdateDatasetRequest,
  proto.google.genomics.v1.Dataset,
  /**
   * @param {!proto.google.genomics.v1.UpdateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Dataset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.UpdateDatasetRequest,
 *   !proto.google.genomics.v1.Dataset>}
 */
const methodInfo_DatasetServiceV1_UpdateDataset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Dataset,
  /**
   * @param {!proto.google.genomics.v1.UpdateDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Dataset.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.UpdateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Dataset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Dataset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.DatasetServiceV1Client.prototype.updateDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/UpdateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_UpdateDataset,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.UpdateDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Dataset>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.DatasetServiceV1PromiseClient.prototype.updateDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/UpdateDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_UpdateDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.DeleteDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatasetServiceV1_DeleteDataset = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.DatasetServiceV1/DeleteDataset',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.DeleteDatasetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteDatasetRequest} request
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
 *   !proto.google.genomics.v1.DeleteDatasetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DatasetServiceV1_DeleteDataset = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.DeleteDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.DatasetServiceV1Client.prototype.deleteDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/DeleteDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_DeleteDataset,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.DeleteDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.DatasetServiceV1PromiseClient.prototype.deleteDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/DeleteDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_DeleteDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.UndeleteDatasetRequest,
 *   !proto.google.genomics.v1.Dataset>}
 */
const methodDescriptor_DatasetServiceV1_UndeleteDataset = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.DatasetServiceV1/UndeleteDataset',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.UndeleteDatasetRequest,
  proto.google.genomics.v1.Dataset,
  /**
   * @param {!proto.google.genomics.v1.UndeleteDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Dataset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.UndeleteDatasetRequest,
 *   !proto.google.genomics.v1.Dataset>}
 */
const methodInfo_DatasetServiceV1_UndeleteDataset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Dataset,
  /**
   * @param {!proto.google.genomics.v1.UndeleteDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Dataset.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.UndeleteDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Dataset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Dataset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.DatasetServiceV1Client.prototype.undeleteDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/UndeleteDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_UndeleteDataset,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.UndeleteDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Dataset>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.DatasetServiceV1PromiseClient.prototype.undeleteDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/UndeleteDataset',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_UndeleteDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_DatasetServiceV1_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.DatasetServiceV1/SetIamPolicy',
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
const methodInfo_DatasetServiceV1_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.genomics.v1.DatasetServiceV1Client.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_SetIamPolicy,
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
proto.google.genomics.v1.DatasetServiceV1PromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_DatasetServiceV1_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.DatasetServiceV1/GetIamPolicy',
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
const methodInfo_DatasetServiceV1_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.genomics.v1.DatasetServiceV1Client.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_GetIamPolicy,
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
proto.google.genomics.v1.DatasetServiceV1PromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_DatasetServiceV1_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.DatasetServiceV1/TestIamPermissions',
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
const methodInfo_DatasetServiceV1_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.genomics.v1.DatasetServiceV1Client.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_TestIamPermissions,
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
proto.google.genomics.v1.DatasetServiceV1PromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.DatasetServiceV1/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_DatasetServiceV1_TestIamPermissions);
};


module.exports = proto.google.genomics.v1;

