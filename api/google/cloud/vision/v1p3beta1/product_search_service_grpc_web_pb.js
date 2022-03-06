/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.vision.v1p3beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_vision_v1p3beta1_geometry_pb = require('../../../../google/cloud/vision/v1p3beta1/geometry_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.vision = {};
proto.google.cloud.vision.v1p3beta1 = require('./product_search_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient =
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
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient =
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
 *   !proto.google.cloud.vision.v1p3beta1.CreateProductSetRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ProductSet>}
 */
const methodDescriptor_ProductSearch_CreateProductSet = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/CreateProductSet',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.CreateProductSetRequest,
  proto.google.cloud.vision.v1p3beta1.ProductSet,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.CreateProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ProductSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.CreateProductSetRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ProductSet>}
 */
const methodInfo_ProductSearch_CreateProductSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.ProductSet,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.CreateProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ProductSet.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.CreateProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.ProductSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.ProductSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.createProductSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/CreateProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_CreateProductSet,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.CreateProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.ProductSet>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.createProductSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/CreateProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_CreateProductSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.ListProductSetsRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ListProductSetsResponse>}
 */
const methodDescriptor_ProductSearch_ListProductSets = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/ListProductSets',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.ListProductSetsRequest,
  proto.google.cloud.vision.v1p3beta1.ListProductSetsResponse,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.ListProductSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ListProductSetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.ListProductSetsRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ListProductSetsResponse>}
 */
const methodInfo_ProductSearch_ListProductSets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.ListProductSetsResponse,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.ListProductSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ListProductSetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.ListProductSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.ListProductSetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.ListProductSetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.listProductSets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/ListProductSets',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_ListProductSets,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.ListProductSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.ListProductSetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.listProductSets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/ListProductSets',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_ListProductSets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.GetProductSetRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ProductSet>}
 */
const methodDescriptor_ProductSearch_GetProductSet = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/GetProductSet',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.GetProductSetRequest,
  proto.google.cloud.vision.v1p3beta1.ProductSet,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.GetProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ProductSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.GetProductSetRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ProductSet>}
 */
const methodInfo_ProductSearch_GetProductSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.ProductSet,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.GetProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ProductSet.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.GetProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.ProductSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.ProductSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.getProductSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/GetProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_GetProductSet,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.GetProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.ProductSet>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.getProductSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/GetProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_GetProductSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.UpdateProductSetRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ProductSet>}
 */
const methodDescriptor_ProductSearch_UpdateProductSet = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/UpdateProductSet',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.UpdateProductSetRequest,
  proto.google.cloud.vision.v1p3beta1.ProductSet,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.UpdateProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ProductSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.UpdateProductSetRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ProductSet>}
 */
const methodInfo_ProductSearch_UpdateProductSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.ProductSet,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.UpdateProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ProductSet.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.UpdateProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.ProductSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.ProductSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.updateProductSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/UpdateProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_UpdateProductSet,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.UpdateProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.ProductSet>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.updateProductSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/UpdateProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_UpdateProductSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.DeleteProductSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ProductSearch_DeleteProductSet = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/DeleteProductSet',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.DeleteProductSetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.DeleteProductSetRequest} request
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
 *   !proto.google.cloud.vision.v1p3beta1.DeleteProductSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ProductSearch_DeleteProductSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.DeleteProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.DeleteProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.deleteProductSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/DeleteProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_DeleteProductSet,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.DeleteProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.deleteProductSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/DeleteProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_DeleteProductSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.CreateProductRequest,
 *   !proto.google.cloud.vision.v1p3beta1.Product>}
 */
const methodDescriptor_ProductSearch_CreateProduct = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/CreateProduct',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.CreateProductRequest,
  proto.google.cloud.vision.v1p3beta1.Product,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.CreateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.CreateProductRequest,
 *   !proto.google.cloud.vision.v1p3beta1.Product>}
 */
const methodInfo_ProductSearch_CreateProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.Product,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.CreateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.Product.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.CreateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.createProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_CreateProduct,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.CreateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.Product>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.createProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_CreateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.ListProductsRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ListProductsResponse>}
 */
const methodDescriptor_ProductSearch_ListProducts = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/ListProducts',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.ListProductsRequest,
  proto.google.cloud.vision.v1p3beta1.ListProductsResponse,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.ListProductsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ListProductsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.ListProductsRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ListProductsResponse>}
 */
const methodInfo_ProductSearch_ListProducts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.ListProductsResponse,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.ListProductsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ListProductsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.ListProductsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.ListProductsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.ListProductsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.listProducts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/ListProducts',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_ListProducts,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.ListProductsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.ListProductsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.listProducts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/ListProducts',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_ListProducts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.GetProductRequest,
 *   !proto.google.cloud.vision.v1p3beta1.Product>}
 */
const methodDescriptor_ProductSearch_GetProduct = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/GetProduct',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.GetProductRequest,
  proto.google.cloud.vision.v1p3beta1.Product,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.GetProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.GetProductRequest,
 *   !proto.google.cloud.vision.v1p3beta1.Product>}
 */
const methodInfo_ProductSearch_GetProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.Product,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.GetProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.Product.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.GetProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.getProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/GetProduct',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_GetProduct,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.GetProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.Product>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.getProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/GetProduct',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_GetProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.UpdateProductRequest,
 *   !proto.google.cloud.vision.v1p3beta1.Product>}
 */
const methodDescriptor_ProductSearch_UpdateProduct = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/UpdateProduct',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.UpdateProductRequest,
  proto.google.cloud.vision.v1p3beta1.Product,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.UpdateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.UpdateProductRequest,
 *   !proto.google.cloud.vision.v1p3beta1.Product>}
 */
const methodInfo_ProductSearch_UpdateProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.Product,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.UpdateProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.Product.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.UpdateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.updateProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_UpdateProduct,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.UpdateProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.Product>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.updateProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_UpdateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.DeleteProductRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ProductSearch_DeleteProduct = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/DeleteProduct',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.DeleteProductRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.DeleteProductRequest} request
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
 *   !proto.google.cloud.vision.v1p3beta1.DeleteProductRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ProductSearch_DeleteProduct = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.DeleteProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.DeleteProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.deleteProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_DeleteProduct,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.DeleteProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.deleteProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_DeleteProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.CreateReferenceImageRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ReferenceImage>}
 */
const methodDescriptor_ProductSearch_CreateReferenceImage = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/CreateReferenceImage',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.CreateReferenceImageRequest,
  proto.google.cloud.vision.v1p3beta1.ReferenceImage,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.CreateReferenceImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ReferenceImage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.CreateReferenceImageRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ReferenceImage>}
 */
const methodInfo_ProductSearch_CreateReferenceImage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.ReferenceImage,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.CreateReferenceImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ReferenceImage.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.CreateReferenceImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.ReferenceImage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.ReferenceImage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.createReferenceImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/CreateReferenceImage',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_CreateReferenceImage,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.CreateReferenceImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.ReferenceImage>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.createReferenceImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/CreateReferenceImage',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_CreateReferenceImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.DeleteReferenceImageRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ProductSearch_DeleteReferenceImage = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/DeleteReferenceImage',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.DeleteReferenceImageRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.DeleteReferenceImageRequest} request
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
 *   !proto.google.cloud.vision.v1p3beta1.DeleteReferenceImageRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ProductSearch_DeleteReferenceImage = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.DeleteReferenceImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.DeleteReferenceImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.deleteReferenceImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/DeleteReferenceImage',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_DeleteReferenceImage,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.DeleteReferenceImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.deleteReferenceImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/DeleteReferenceImage',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_DeleteReferenceImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.ListReferenceImagesRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ListReferenceImagesResponse>}
 */
const methodDescriptor_ProductSearch_ListReferenceImages = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/ListReferenceImages',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.ListReferenceImagesRequest,
  proto.google.cloud.vision.v1p3beta1.ListReferenceImagesResponse,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.ListReferenceImagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ListReferenceImagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.ListReferenceImagesRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ListReferenceImagesResponse>}
 */
const methodInfo_ProductSearch_ListReferenceImages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.ListReferenceImagesResponse,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.ListReferenceImagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ListReferenceImagesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.ListReferenceImagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.ListReferenceImagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.ListReferenceImagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.listReferenceImages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/ListReferenceImages',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_ListReferenceImages,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.ListReferenceImagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.ListReferenceImagesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.listReferenceImages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/ListReferenceImages',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_ListReferenceImages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.GetReferenceImageRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ReferenceImage>}
 */
const methodDescriptor_ProductSearch_GetReferenceImage = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/GetReferenceImage',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.GetReferenceImageRequest,
  proto.google.cloud.vision.v1p3beta1.ReferenceImage,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.GetReferenceImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ReferenceImage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.GetReferenceImageRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ReferenceImage>}
 */
const methodInfo_ProductSearch_GetReferenceImage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.ReferenceImage,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.GetReferenceImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ReferenceImage.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.GetReferenceImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.ReferenceImage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.ReferenceImage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.getReferenceImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/GetReferenceImage',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_GetReferenceImage,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.GetReferenceImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.ReferenceImage>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.getReferenceImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/GetReferenceImage',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_GetReferenceImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.AddProductToProductSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ProductSearch_AddProductToProductSet = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/AddProductToProductSet',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.AddProductToProductSetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.AddProductToProductSetRequest} request
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
 *   !proto.google.cloud.vision.v1p3beta1.AddProductToProductSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ProductSearch_AddProductToProductSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.AddProductToProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.AddProductToProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.addProductToProductSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/AddProductToProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_AddProductToProductSet,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.AddProductToProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.addProductToProductSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/AddProductToProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_AddProductToProductSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.RemoveProductFromProductSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ProductSearch_RemoveProductFromProductSet = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/RemoveProductFromProductSet',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.RemoveProductFromProductSetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.RemoveProductFromProductSetRequest} request
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
 *   !proto.google.cloud.vision.v1p3beta1.RemoveProductFromProductSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ProductSearch_RemoveProductFromProductSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.RemoveProductFromProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.RemoveProductFromProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.removeProductFromProductSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/RemoveProductFromProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_RemoveProductFromProductSet,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.RemoveProductFromProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.removeProductFromProductSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/RemoveProductFromProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_RemoveProductFromProductSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetResponse>}
 */
const methodDescriptor_ProductSearch_ListProductsInProductSet = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/ListProductsInProductSet',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetRequest,
  proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetResponse,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetRequest,
 *   !proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetResponse>}
 */
const methodInfo_ProductSearch_ListProductsInProductSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetResponse,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.listProductsInProductSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/ListProductsInProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_ListProductsInProductSet,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.ListProductsInProductSetResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.listProductsInProductSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/ListProductsInProductSet',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_ListProductsInProductSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.ImportProductSetsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ProductSearch_ImportProductSets = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ProductSearch/ImportProductSets',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.ImportProductSetsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.ImportProductSetsRequest} request
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
 *   !proto.google.cloud.vision.v1p3beta1.ImportProductSetsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ProductSearch_ImportProductSets = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.ImportProductSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.ImportProductSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchClient.prototype.importProductSets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/ImportProductSets',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_ImportProductSets,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.ImportProductSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ProductSearchPromiseClient.prototype.importProductSets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ProductSearch/ImportProductSets',
      request,
      metadata || {},
      methodDescriptor_ProductSearch_ImportProductSets);
};


module.exports = proto.google.cloud.vision.v1p3beta1;

