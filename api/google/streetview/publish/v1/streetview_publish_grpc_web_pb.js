/**
 * @fileoverview gRPC-Web generated client stub for google.streetview.publish.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_streetview_publish_v1_resources_pb = require('../../../../google/streetview/publish/v1/resources_pb.js')

var google_streetview_publish_v1_rpcmessages_pb = require('../../../../google/streetview/publish/v1/rpcmessages_pb.js')
const proto = {};
proto.google = {};
proto.google.streetview = {};
proto.google.streetview.publish = {};
proto.google.streetview.publish.v1 = require('./streetview_publish_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.streetview.publish.v1.StreetViewPublishServiceClient =
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
proto.google.streetview.publish.v1.StreetViewPublishServicePromiseClient =
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
 *   !proto.google.protobuf.Empty,
 *   !proto.google.streetview.publish.v1.UploadRef>}
 */
const methodDescriptor_StreetViewPublishService_StartUpload = new grpc.web.MethodDescriptor(
  '/google.streetview.publish.v1.StreetViewPublishService/StartUpload',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_streetview_publish_v1_resources_pb.UploadRef,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_resources_pb.UploadRef.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.streetview.publish.v1.UploadRef>}
 */
const methodInfo_StreetViewPublishService_StartUpload = new grpc.web.AbstractClientBase.MethodInfo(
  google_streetview_publish_v1_resources_pb.UploadRef,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_resources_pb.UploadRef.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.streetview.publish.v1.UploadRef)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.streetview.publish.v1.UploadRef>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.streetview.publish.v1.StreetViewPublishServiceClient.prototype.startUpload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/StartUpload',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_StartUpload,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.streetview.publish.v1.UploadRef>}
 *     Promise that resolves to the response
 */
proto.google.streetview.publish.v1.StreetViewPublishServicePromiseClient.prototype.startUpload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/StartUpload',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_StartUpload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.streetview.publish.v1.CreatePhotoRequest,
 *   !proto.google.streetview.publish.v1.Photo>}
 */
const methodDescriptor_StreetViewPublishService_CreatePhoto = new grpc.web.MethodDescriptor(
  '/google.streetview.publish.v1.StreetViewPublishService/CreatePhoto',
  grpc.web.MethodType.UNARY,
  google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest,
  google_streetview_publish_v1_resources_pb.Photo,
  /**
   * @param {!proto.google.streetview.publish.v1.CreatePhotoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_resources_pb.Photo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.streetview.publish.v1.CreatePhotoRequest,
 *   !proto.google.streetview.publish.v1.Photo>}
 */
const methodInfo_StreetViewPublishService_CreatePhoto = new grpc.web.AbstractClientBase.MethodInfo(
  google_streetview_publish_v1_resources_pb.Photo,
  /**
   * @param {!proto.google.streetview.publish.v1.CreatePhotoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_resources_pb.Photo.deserializeBinary
);


/**
 * @param {!proto.google.streetview.publish.v1.CreatePhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.streetview.publish.v1.Photo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.streetview.publish.v1.Photo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.streetview.publish.v1.StreetViewPublishServiceClient.prototype.createPhoto =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/CreatePhoto',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_CreatePhoto,
      callback);
};


/**
 * @param {!proto.google.streetview.publish.v1.CreatePhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.streetview.publish.v1.Photo>}
 *     Promise that resolves to the response
 */
proto.google.streetview.publish.v1.StreetViewPublishServicePromiseClient.prototype.createPhoto =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/CreatePhoto',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_CreatePhoto);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.streetview.publish.v1.GetPhotoRequest,
 *   !proto.google.streetview.publish.v1.Photo>}
 */
const methodDescriptor_StreetViewPublishService_GetPhoto = new grpc.web.MethodDescriptor(
  '/google.streetview.publish.v1.StreetViewPublishService/GetPhoto',
  grpc.web.MethodType.UNARY,
  google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest,
  google_streetview_publish_v1_resources_pb.Photo,
  /**
   * @param {!proto.google.streetview.publish.v1.GetPhotoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_resources_pb.Photo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.streetview.publish.v1.GetPhotoRequest,
 *   !proto.google.streetview.publish.v1.Photo>}
 */
const methodInfo_StreetViewPublishService_GetPhoto = new grpc.web.AbstractClientBase.MethodInfo(
  google_streetview_publish_v1_resources_pb.Photo,
  /**
   * @param {!proto.google.streetview.publish.v1.GetPhotoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_resources_pb.Photo.deserializeBinary
);


/**
 * @param {!proto.google.streetview.publish.v1.GetPhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.streetview.publish.v1.Photo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.streetview.publish.v1.Photo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.streetview.publish.v1.StreetViewPublishServiceClient.prototype.getPhoto =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/GetPhoto',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_GetPhoto,
      callback);
};


/**
 * @param {!proto.google.streetview.publish.v1.GetPhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.streetview.publish.v1.Photo>}
 *     Promise that resolves to the response
 */
proto.google.streetview.publish.v1.StreetViewPublishServicePromiseClient.prototype.getPhoto =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/GetPhoto',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_GetPhoto);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.streetview.publish.v1.BatchGetPhotosRequest,
 *   !proto.google.streetview.publish.v1.BatchGetPhotosResponse>}
 */
const methodDescriptor_StreetViewPublishService_BatchGetPhotos = new grpc.web.MethodDescriptor(
  '/google.streetview.publish.v1.StreetViewPublishService/BatchGetPhotos',
  grpc.web.MethodType.UNARY,
  google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest,
  google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse,
  /**
   * @param {!proto.google.streetview.publish.v1.BatchGetPhotosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.streetview.publish.v1.BatchGetPhotosRequest,
 *   !proto.google.streetview.publish.v1.BatchGetPhotosResponse>}
 */
const methodInfo_StreetViewPublishService_BatchGetPhotos = new grpc.web.AbstractClientBase.MethodInfo(
  google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse,
  /**
   * @param {!proto.google.streetview.publish.v1.BatchGetPhotosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse.deserializeBinary
);


/**
 * @param {!proto.google.streetview.publish.v1.BatchGetPhotosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.streetview.publish.v1.BatchGetPhotosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.streetview.publish.v1.BatchGetPhotosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.streetview.publish.v1.StreetViewPublishServiceClient.prototype.batchGetPhotos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/BatchGetPhotos',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_BatchGetPhotos,
      callback);
};


/**
 * @param {!proto.google.streetview.publish.v1.BatchGetPhotosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.streetview.publish.v1.BatchGetPhotosResponse>}
 *     Promise that resolves to the response
 */
proto.google.streetview.publish.v1.StreetViewPublishServicePromiseClient.prototype.batchGetPhotos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/BatchGetPhotos',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_BatchGetPhotos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.streetview.publish.v1.ListPhotosRequest,
 *   !proto.google.streetview.publish.v1.ListPhotosResponse>}
 */
const methodDescriptor_StreetViewPublishService_ListPhotos = new grpc.web.MethodDescriptor(
  '/google.streetview.publish.v1.StreetViewPublishService/ListPhotos',
  grpc.web.MethodType.UNARY,
  google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest,
  google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse,
  /**
   * @param {!proto.google.streetview.publish.v1.ListPhotosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.streetview.publish.v1.ListPhotosRequest,
 *   !proto.google.streetview.publish.v1.ListPhotosResponse>}
 */
const methodInfo_StreetViewPublishService_ListPhotos = new grpc.web.AbstractClientBase.MethodInfo(
  google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse,
  /**
   * @param {!proto.google.streetview.publish.v1.ListPhotosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse.deserializeBinary
);


/**
 * @param {!proto.google.streetview.publish.v1.ListPhotosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.streetview.publish.v1.ListPhotosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.streetview.publish.v1.ListPhotosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.streetview.publish.v1.StreetViewPublishServiceClient.prototype.listPhotos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/ListPhotos',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_ListPhotos,
      callback);
};


/**
 * @param {!proto.google.streetview.publish.v1.ListPhotosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.streetview.publish.v1.ListPhotosResponse>}
 *     Promise that resolves to the response
 */
proto.google.streetview.publish.v1.StreetViewPublishServicePromiseClient.prototype.listPhotos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/ListPhotos',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_ListPhotos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.streetview.publish.v1.UpdatePhotoRequest,
 *   !proto.google.streetview.publish.v1.Photo>}
 */
const methodDescriptor_StreetViewPublishService_UpdatePhoto = new grpc.web.MethodDescriptor(
  '/google.streetview.publish.v1.StreetViewPublishService/UpdatePhoto',
  grpc.web.MethodType.UNARY,
  google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest,
  google_streetview_publish_v1_resources_pb.Photo,
  /**
   * @param {!proto.google.streetview.publish.v1.UpdatePhotoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_resources_pb.Photo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.streetview.publish.v1.UpdatePhotoRequest,
 *   !proto.google.streetview.publish.v1.Photo>}
 */
const methodInfo_StreetViewPublishService_UpdatePhoto = new grpc.web.AbstractClientBase.MethodInfo(
  google_streetview_publish_v1_resources_pb.Photo,
  /**
   * @param {!proto.google.streetview.publish.v1.UpdatePhotoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_resources_pb.Photo.deserializeBinary
);


/**
 * @param {!proto.google.streetview.publish.v1.UpdatePhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.streetview.publish.v1.Photo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.streetview.publish.v1.Photo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.streetview.publish.v1.StreetViewPublishServiceClient.prototype.updatePhoto =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/UpdatePhoto',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_UpdatePhoto,
      callback);
};


/**
 * @param {!proto.google.streetview.publish.v1.UpdatePhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.streetview.publish.v1.Photo>}
 *     Promise that resolves to the response
 */
proto.google.streetview.publish.v1.StreetViewPublishServicePromiseClient.prototype.updatePhoto =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/UpdatePhoto',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_UpdatePhoto);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.streetview.publish.v1.BatchUpdatePhotosRequest,
 *   !proto.google.streetview.publish.v1.BatchUpdatePhotosResponse>}
 */
const methodDescriptor_StreetViewPublishService_BatchUpdatePhotos = new grpc.web.MethodDescriptor(
  '/google.streetview.publish.v1.StreetViewPublishService/BatchUpdatePhotos',
  grpc.web.MethodType.UNARY,
  google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest,
  google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse,
  /**
   * @param {!proto.google.streetview.publish.v1.BatchUpdatePhotosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.streetview.publish.v1.BatchUpdatePhotosRequest,
 *   !proto.google.streetview.publish.v1.BatchUpdatePhotosResponse>}
 */
const methodInfo_StreetViewPublishService_BatchUpdatePhotos = new grpc.web.AbstractClientBase.MethodInfo(
  google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse,
  /**
   * @param {!proto.google.streetview.publish.v1.BatchUpdatePhotosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse.deserializeBinary
);


/**
 * @param {!proto.google.streetview.publish.v1.BatchUpdatePhotosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.streetview.publish.v1.BatchUpdatePhotosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.streetview.publish.v1.BatchUpdatePhotosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.streetview.publish.v1.StreetViewPublishServiceClient.prototype.batchUpdatePhotos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/BatchUpdatePhotos',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_BatchUpdatePhotos,
      callback);
};


/**
 * @param {!proto.google.streetview.publish.v1.BatchUpdatePhotosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.streetview.publish.v1.BatchUpdatePhotosResponse>}
 *     Promise that resolves to the response
 */
proto.google.streetview.publish.v1.StreetViewPublishServicePromiseClient.prototype.batchUpdatePhotos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/BatchUpdatePhotos',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_BatchUpdatePhotos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.streetview.publish.v1.DeletePhotoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_StreetViewPublishService_DeletePhoto = new grpc.web.MethodDescriptor(
  '/google.streetview.publish.v1.StreetViewPublishService/DeletePhoto',
  grpc.web.MethodType.UNARY,
  google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.streetview.publish.v1.DeletePhotoRequest} request
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
 *   !proto.google.streetview.publish.v1.DeletePhotoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_StreetViewPublishService_DeletePhoto = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.streetview.publish.v1.DeletePhotoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.streetview.publish.v1.DeletePhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.streetview.publish.v1.StreetViewPublishServiceClient.prototype.deletePhoto =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/DeletePhoto',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_DeletePhoto,
      callback);
};


/**
 * @param {!proto.google.streetview.publish.v1.DeletePhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.streetview.publish.v1.StreetViewPublishServicePromiseClient.prototype.deletePhoto =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/DeletePhoto',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_DeletePhoto);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.streetview.publish.v1.BatchDeletePhotosRequest,
 *   !proto.google.streetview.publish.v1.BatchDeletePhotosResponse>}
 */
const methodDescriptor_StreetViewPublishService_BatchDeletePhotos = new grpc.web.MethodDescriptor(
  '/google.streetview.publish.v1.StreetViewPublishService/BatchDeletePhotos',
  grpc.web.MethodType.UNARY,
  google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest,
  google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse,
  /**
   * @param {!proto.google.streetview.publish.v1.BatchDeletePhotosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.streetview.publish.v1.BatchDeletePhotosRequest,
 *   !proto.google.streetview.publish.v1.BatchDeletePhotosResponse>}
 */
const methodInfo_StreetViewPublishService_BatchDeletePhotos = new grpc.web.AbstractClientBase.MethodInfo(
  google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse,
  /**
   * @param {!proto.google.streetview.publish.v1.BatchDeletePhotosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse.deserializeBinary
);


/**
 * @param {!proto.google.streetview.publish.v1.BatchDeletePhotosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.streetview.publish.v1.BatchDeletePhotosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.streetview.publish.v1.BatchDeletePhotosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.streetview.publish.v1.StreetViewPublishServiceClient.prototype.batchDeletePhotos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/BatchDeletePhotos',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_BatchDeletePhotos,
      callback);
};


/**
 * @param {!proto.google.streetview.publish.v1.BatchDeletePhotosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.streetview.publish.v1.BatchDeletePhotosResponse>}
 *     Promise that resolves to the response
 */
proto.google.streetview.publish.v1.StreetViewPublishServicePromiseClient.prototype.batchDeletePhotos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.streetview.publish.v1.StreetViewPublishService/BatchDeletePhotos',
      request,
      metadata || {},
      methodDescriptor_StreetViewPublishService_BatchDeletePhotos);
};


module.exports = proto.google.streetview.publish.v1;

