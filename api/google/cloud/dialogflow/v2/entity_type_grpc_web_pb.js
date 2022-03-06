/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dialogflow = {};
proto.google.cloud.dialogflow.v2 = require('./entity_type_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient =
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
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient =
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
 *   !proto.google.cloud.dialogflow.v2.ListEntityTypesRequest,
 *   !proto.google.cloud.dialogflow.v2.ListEntityTypesResponse>}
 */
const methodDescriptor_EntityTypes_ListEntityTypes = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.EntityTypes/ListEntityTypes',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.ListEntityTypesRequest,
  proto.google.cloud.dialogflow.v2.ListEntityTypesResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.ListEntityTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.ListEntityTypesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.ListEntityTypesRequest,
 *   !proto.google.cloud.dialogflow.v2.ListEntityTypesResponse>}
 */
const methodInfo_EntityTypes_ListEntityTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.ListEntityTypesResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.ListEntityTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.ListEntityTypesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.ListEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.ListEntityTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.ListEntityTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient.prototype.listEntityTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/ListEntityTypes',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_ListEntityTypes,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.ListEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.ListEntityTypesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient.prototype.listEntityTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/ListEntityTypes',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_ListEntityTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.GetEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.EntityType>}
 */
const methodDescriptor_EntityTypes_GetEntityType = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.EntityTypes/GetEntityType',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.GetEntityTypeRequest,
  proto.google.cloud.dialogflow.v2.EntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.GetEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.EntityType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.GetEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.EntityType>}
 */
const methodInfo_EntityTypes_GetEntityType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.EntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.GetEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.EntityType.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.GetEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.EntityType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.EntityType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient.prototype.getEntityType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/GetEntityType',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_GetEntityType,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.GetEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.EntityType>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient.prototype.getEntityType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/GetEntityType',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_GetEntityType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.CreateEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.EntityType>}
 */
const methodDescriptor_EntityTypes_CreateEntityType = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.EntityTypes/CreateEntityType',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.CreateEntityTypeRequest,
  proto.google.cloud.dialogflow.v2.EntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.CreateEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.EntityType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.CreateEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.EntityType>}
 */
const methodInfo_EntityTypes_CreateEntityType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.EntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.CreateEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.EntityType.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.CreateEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.EntityType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.EntityType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient.prototype.createEntityType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/CreateEntityType',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_CreateEntityType,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.CreateEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.EntityType>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient.prototype.createEntityType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/CreateEntityType',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_CreateEntityType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.UpdateEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.EntityType>}
 */
const methodDescriptor_EntityTypes_UpdateEntityType = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.EntityTypes/UpdateEntityType',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.UpdateEntityTypeRequest,
  proto.google.cloud.dialogflow.v2.EntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.UpdateEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.EntityType.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.UpdateEntityTypeRequest,
 *   !proto.google.cloud.dialogflow.v2.EntityType>}
 */
const methodInfo_EntityTypes_UpdateEntityType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.EntityType,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.UpdateEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.EntityType.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.UpdateEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.EntityType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.EntityType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient.prototype.updateEntityType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/UpdateEntityType',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_UpdateEntityType,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.UpdateEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.EntityType>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient.prototype.updateEntityType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/UpdateEntityType',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_UpdateEntityType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.DeleteEntityTypeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_EntityTypes_DeleteEntityType = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.EntityTypes/DeleteEntityType',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.DeleteEntityTypeRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DeleteEntityTypeRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.DeleteEntityTypeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_EntityTypes_DeleteEntityType = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DeleteEntityTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.DeleteEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient.prototype.deleteEntityType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/DeleteEntityType',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_DeleteEntityType,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.DeleteEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient.prototype.deleteEntityType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/DeleteEntityType',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_DeleteEntityType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.BatchUpdateEntityTypesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_EntityTypes_BatchUpdateEntityTypes = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.EntityTypes/BatchUpdateEntityTypes',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.BatchUpdateEntityTypesRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateEntityTypesRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.BatchUpdateEntityTypesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_EntityTypes_BatchUpdateEntityTypes = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateEntityTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient.prototype.batchUpdateEntityTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/BatchUpdateEntityTypes',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_BatchUpdateEntityTypes,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient.prototype.batchUpdateEntityTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/BatchUpdateEntityTypes',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_BatchUpdateEntityTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.BatchDeleteEntityTypesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_EntityTypes_BatchDeleteEntityTypes = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.EntityTypes/BatchDeleteEntityTypes',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.BatchDeleteEntityTypesRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteEntityTypesRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.BatchDeleteEntityTypesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_EntityTypes_BatchDeleteEntityTypes = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteEntityTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient.prototype.batchDeleteEntityTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/BatchDeleteEntityTypes',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_BatchDeleteEntityTypes,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient.prototype.batchDeleteEntityTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/BatchDeleteEntityTypes',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_BatchDeleteEntityTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.BatchCreateEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_EntityTypes_BatchCreateEntities = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.EntityTypes/BatchCreateEntities',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.BatchCreateEntitiesRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchCreateEntitiesRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.BatchCreateEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_EntityTypes_BatchCreateEntities = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchCreateEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchCreateEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient.prototype.batchCreateEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/BatchCreateEntities',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_BatchCreateEntities,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchCreateEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient.prototype.batchCreateEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/BatchCreateEntities',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_BatchCreateEntities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.BatchUpdateEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_EntityTypes_BatchUpdateEntities = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.EntityTypes/BatchUpdateEntities',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.BatchUpdateEntitiesRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateEntitiesRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.BatchUpdateEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_EntityTypes_BatchUpdateEntities = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient.prototype.batchUpdateEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/BatchUpdateEntities',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_BatchUpdateEntities,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient.prototype.batchUpdateEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/BatchUpdateEntities',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_BatchUpdateEntities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2.BatchDeleteEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_EntityTypes_BatchDeleteEntities = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.EntityTypes/BatchDeleteEntities',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.BatchDeleteEntitiesRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteEntitiesRequest} request
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
 *   !proto.google.cloud.dialogflow.v2.BatchDeleteEntitiesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_EntityTypes_BatchDeleteEntities = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.EntityTypesClient.prototype.batchDeleteEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/BatchDeleteEntities',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_BatchDeleteEntities,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.EntityTypesPromiseClient.prototype.batchDeleteEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.EntityTypes/BatchDeleteEntities',
      request,
      metadata || {},
      methodDescriptor_EntityTypes_BatchDeleteEntities);
};


module.exports = proto.google.cloud.dialogflow.v2;

