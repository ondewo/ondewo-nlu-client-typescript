/**
 * @fileoverview gRPC-Web generated client stub for google.example.library.v1
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
const proto = {};
proto.google = {};
proto.google.example = {};
proto.google.example.library = {};
proto.google.example.library.v1 = require('./library_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.example.library.v1.LibraryServiceClient =
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
proto.google.example.library.v1.LibraryServicePromiseClient =
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
 *   !proto.google.example.library.v1.CreateShelfRequest,
 *   !proto.google.example.library.v1.Shelf>}
 */
const methodDescriptor_LibraryService_CreateShelf = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/CreateShelf',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.CreateShelfRequest,
  proto.google.example.library.v1.Shelf,
  /**
   * @param {!proto.google.example.library.v1.CreateShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Shelf.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.example.library.v1.CreateShelfRequest,
 *   !proto.google.example.library.v1.Shelf>}
 */
const methodInfo_LibraryService_CreateShelf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.example.library.v1.Shelf,
  /**
   * @param {!proto.google.example.library.v1.CreateShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Shelf.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.CreateShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.example.library.v1.Shelf)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.example.library.v1.Shelf>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.createShelf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/CreateShelf',
      request,
      metadata || {},
      methodDescriptor_LibraryService_CreateShelf,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.CreateShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.example.library.v1.Shelf>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.createShelf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/CreateShelf',
      request,
      metadata || {},
      methodDescriptor_LibraryService_CreateShelf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.example.library.v1.GetShelfRequest,
 *   !proto.google.example.library.v1.Shelf>}
 */
const methodDescriptor_LibraryService_GetShelf = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/GetShelf',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.GetShelfRequest,
  proto.google.example.library.v1.Shelf,
  /**
   * @param {!proto.google.example.library.v1.GetShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Shelf.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.example.library.v1.GetShelfRequest,
 *   !proto.google.example.library.v1.Shelf>}
 */
const methodInfo_LibraryService_GetShelf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.example.library.v1.Shelf,
  /**
   * @param {!proto.google.example.library.v1.GetShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Shelf.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.GetShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.example.library.v1.Shelf)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.example.library.v1.Shelf>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.getShelf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/GetShelf',
      request,
      metadata || {},
      methodDescriptor_LibraryService_GetShelf,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.GetShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.example.library.v1.Shelf>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.getShelf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/GetShelf',
      request,
      metadata || {},
      methodDescriptor_LibraryService_GetShelf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.example.library.v1.ListShelvesRequest,
 *   !proto.google.example.library.v1.ListShelvesResponse>}
 */
const methodDescriptor_LibraryService_ListShelves = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/ListShelves',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.ListShelvesRequest,
  proto.google.example.library.v1.ListShelvesResponse,
  /**
   * @param {!proto.google.example.library.v1.ListShelvesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.ListShelvesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.example.library.v1.ListShelvesRequest,
 *   !proto.google.example.library.v1.ListShelvesResponse>}
 */
const methodInfo_LibraryService_ListShelves = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.example.library.v1.ListShelvesResponse,
  /**
   * @param {!proto.google.example.library.v1.ListShelvesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.ListShelvesResponse.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.ListShelvesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.example.library.v1.ListShelvesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.example.library.v1.ListShelvesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.listShelves =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/ListShelves',
      request,
      metadata || {},
      methodDescriptor_LibraryService_ListShelves,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.ListShelvesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.example.library.v1.ListShelvesResponse>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.listShelves =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/ListShelves',
      request,
      metadata || {},
      methodDescriptor_LibraryService_ListShelves);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.example.library.v1.DeleteShelfRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_LibraryService_DeleteShelf = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/DeleteShelf',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.DeleteShelfRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.example.library.v1.DeleteShelfRequest} request
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
 *   !proto.google.example.library.v1.DeleteShelfRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_LibraryService_DeleteShelf = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.example.library.v1.DeleteShelfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.DeleteShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.deleteShelf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/DeleteShelf',
      request,
      metadata || {},
      methodDescriptor_LibraryService_DeleteShelf,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.DeleteShelfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.deleteShelf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/DeleteShelf',
      request,
      metadata || {},
      methodDescriptor_LibraryService_DeleteShelf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.example.library.v1.MergeShelvesRequest,
 *   !proto.google.example.library.v1.Shelf>}
 */
const methodDescriptor_LibraryService_MergeShelves = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/MergeShelves',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.MergeShelvesRequest,
  proto.google.example.library.v1.Shelf,
  /**
   * @param {!proto.google.example.library.v1.MergeShelvesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Shelf.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.example.library.v1.MergeShelvesRequest,
 *   !proto.google.example.library.v1.Shelf>}
 */
const methodInfo_LibraryService_MergeShelves = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.example.library.v1.Shelf,
  /**
   * @param {!proto.google.example.library.v1.MergeShelvesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Shelf.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.MergeShelvesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.example.library.v1.Shelf)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.example.library.v1.Shelf>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.mergeShelves =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/MergeShelves',
      request,
      metadata || {},
      methodDescriptor_LibraryService_MergeShelves,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.MergeShelvesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.example.library.v1.Shelf>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.mergeShelves =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/MergeShelves',
      request,
      metadata || {},
      methodDescriptor_LibraryService_MergeShelves);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.example.library.v1.CreateBookRequest,
 *   !proto.google.example.library.v1.Book>}
 */
const methodDescriptor_LibraryService_CreateBook = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/CreateBook',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.CreateBookRequest,
  proto.google.example.library.v1.Book,
  /**
   * @param {!proto.google.example.library.v1.CreateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.example.library.v1.CreateBookRequest,
 *   !proto.google.example.library.v1.Book>}
 */
const methodInfo_LibraryService_CreateBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.example.library.v1.Book,
  /**
   * @param {!proto.google.example.library.v1.CreateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Book.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.CreateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.example.library.v1.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.example.library.v1.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.createBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/CreateBook',
      request,
      metadata || {},
      methodDescriptor_LibraryService_CreateBook,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.CreateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.example.library.v1.Book>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.createBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/CreateBook',
      request,
      metadata || {},
      methodDescriptor_LibraryService_CreateBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.example.library.v1.GetBookRequest,
 *   !proto.google.example.library.v1.Book>}
 */
const methodDescriptor_LibraryService_GetBook = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/GetBook',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.GetBookRequest,
  proto.google.example.library.v1.Book,
  /**
   * @param {!proto.google.example.library.v1.GetBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.example.library.v1.GetBookRequest,
 *   !proto.google.example.library.v1.Book>}
 */
const methodInfo_LibraryService_GetBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.example.library.v1.Book,
  /**
   * @param {!proto.google.example.library.v1.GetBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Book.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.example.library.v1.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.example.library.v1.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.getBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/GetBook',
      request,
      metadata || {},
      methodDescriptor_LibraryService_GetBook,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.example.library.v1.Book>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.getBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/GetBook',
      request,
      metadata || {},
      methodDescriptor_LibraryService_GetBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.example.library.v1.ListBooksRequest,
 *   !proto.google.example.library.v1.ListBooksResponse>}
 */
const methodDescriptor_LibraryService_ListBooks = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/ListBooks',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.ListBooksRequest,
  proto.google.example.library.v1.ListBooksResponse,
  /**
   * @param {!proto.google.example.library.v1.ListBooksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.ListBooksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.example.library.v1.ListBooksRequest,
 *   !proto.google.example.library.v1.ListBooksResponse>}
 */
const methodInfo_LibraryService_ListBooks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.example.library.v1.ListBooksResponse,
  /**
   * @param {!proto.google.example.library.v1.ListBooksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.ListBooksResponse.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.ListBooksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.example.library.v1.ListBooksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.example.library.v1.ListBooksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.listBooks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/ListBooks',
      request,
      metadata || {},
      methodDescriptor_LibraryService_ListBooks,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.ListBooksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.example.library.v1.ListBooksResponse>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.listBooks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/ListBooks',
      request,
      metadata || {},
      methodDescriptor_LibraryService_ListBooks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.example.library.v1.DeleteBookRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_LibraryService_DeleteBook = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/DeleteBook',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.DeleteBookRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.example.library.v1.DeleteBookRequest} request
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
 *   !proto.google.example.library.v1.DeleteBookRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_LibraryService_DeleteBook = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.example.library.v1.DeleteBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.deleteBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/DeleteBook',
      request,
      metadata || {},
      methodDescriptor_LibraryService_DeleteBook,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.deleteBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/DeleteBook',
      request,
      metadata || {},
      methodDescriptor_LibraryService_DeleteBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.example.library.v1.UpdateBookRequest,
 *   !proto.google.example.library.v1.Book>}
 */
const methodDescriptor_LibraryService_UpdateBook = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/UpdateBook',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.UpdateBookRequest,
  proto.google.example.library.v1.Book,
  /**
   * @param {!proto.google.example.library.v1.UpdateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.example.library.v1.UpdateBookRequest,
 *   !proto.google.example.library.v1.Book>}
 */
const methodInfo_LibraryService_UpdateBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.example.library.v1.Book,
  /**
   * @param {!proto.google.example.library.v1.UpdateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Book.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.UpdateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.example.library.v1.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.example.library.v1.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.updateBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/UpdateBook',
      request,
      metadata || {},
      methodDescriptor_LibraryService_UpdateBook,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.UpdateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.example.library.v1.Book>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.updateBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/UpdateBook',
      request,
      metadata || {},
      methodDescriptor_LibraryService_UpdateBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.example.library.v1.MoveBookRequest,
 *   !proto.google.example.library.v1.Book>}
 */
const methodDescriptor_LibraryService_MoveBook = new grpc.web.MethodDescriptor(
  '/google.example.library.v1.LibraryService/MoveBook',
  grpc.web.MethodType.UNARY,
  proto.google.example.library.v1.MoveBookRequest,
  proto.google.example.library.v1.Book,
  /**
   * @param {!proto.google.example.library.v1.MoveBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.example.library.v1.MoveBookRequest,
 *   !proto.google.example.library.v1.Book>}
 */
const methodInfo_LibraryService_MoveBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.example.library.v1.Book,
  /**
   * @param {!proto.google.example.library.v1.MoveBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.example.library.v1.Book.deserializeBinary
);


/**
 * @param {!proto.google.example.library.v1.MoveBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.example.library.v1.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.example.library.v1.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.example.library.v1.LibraryServiceClient.prototype.moveBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/MoveBook',
      request,
      metadata || {},
      methodDescriptor_LibraryService_MoveBook,
      callback);
};


/**
 * @param {!proto.google.example.library.v1.MoveBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.example.library.v1.Book>}
 *     Promise that resolves to the response
 */
proto.google.example.library.v1.LibraryServicePromiseClient.prototype.moveBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.example.library.v1.LibraryService/MoveBook',
      request,
      metadata || {},
      methodDescriptor_LibraryService_MoveBook);
};


module.exports = proto.google.example.library.v1;

