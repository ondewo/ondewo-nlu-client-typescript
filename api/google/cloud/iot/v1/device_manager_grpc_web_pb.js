/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.iot.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_iot_v1_resources_pb = require('../../../../google/cloud/iot/v1/resources_pb.js')

var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js')

var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.iot = {};
proto.google.cloud.iot.v1 = require('./device_manager_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.iot.v1.DeviceManagerClient =
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
proto.google.cloud.iot.v1.DeviceManagerPromiseClient =
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
 *   !proto.google.cloud.iot.v1.CreateDeviceRegistryRequest,
 *   !proto.google.cloud.iot.v1.DeviceRegistry>}
 */
const methodDescriptor_DeviceManager_CreateDeviceRegistry = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/CreateDeviceRegistry',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.CreateDeviceRegistryRequest,
  google_cloud_iot_v1_resources_pb.DeviceRegistry,
  /**
   * @param {!proto.google.cloud.iot.v1.CreateDeviceRegistryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.DeviceRegistry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.CreateDeviceRegistryRequest,
 *   !proto.google.cloud.iot.v1.DeviceRegistry>}
 */
const methodInfo_DeviceManager_CreateDeviceRegistry = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_iot_v1_resources_pb.DeviceRegistry,
  /**
   * @param {!proto.google.cloud.iot.v1.CreateDeviceRegistryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.DeviceRegistry.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.CreateDeviceRegistryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.DeviceRegistry)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.DeviceRegistry>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.createDeviceRegistry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/CreateDeviceRegistry',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_CreateDeviceRegistry,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.CreateDeviceRegistryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.DeviceRegistry>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.createDeviceRegistry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/CreateDeviceRegistry',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_CreateDeviceRegistry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.GetDeviceRegistryRequest,
 *   !proto.google.cloud.iot.v1.DeviceRegistry>}
 */
const methodDescriptor_DeviceManager_GetDeviceRegistry = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/GetDeviceRegistry',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.GetDeviceRegistryRequest,
  google_cloud_iot_v1_resources_pb.DeviceRegistry,
  /**
   * @param {!proto.google.cloud.iot.v1.GetDeviceRegistryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.DeviceRegistry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.GetDeviceRegistryRequest,
 *   !proto.google.cloud.iot.v1.DeviceRegistry>}
 */
const methodInfo_DeviceManager_GetDeviceRegistry = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_iot_v1_resources_pb.DeviceRegistry,
  /**
   * @param {!proto.google.cloud.iot.v1.GetDeviceRegistryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.DeviceRegistry.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.GetDeviceRegistryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.DeviceRegistry)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.DeviceRegistry>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.getDeviceRegistry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/GetDeviceRegistry',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_GetDeviceRegistry,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.GetDeviceRegistryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.DeviceRegistry>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.getDeviceRegistry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/GetDeviceRegistry',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_GetDeviceRegistry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.UpdateDeviceRegistryRequest,
 *   !proto.google.cloud.iot.v1.DeviceRegistry>}
 */
const methodDescriptor_DeviceManager_UpdateDeviceRegistry = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/UpdateDeviceRegistry',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.UpdateDeviceRegistryRequest,
  google_cloud_iot_v1_resources_pb.DeviceRegistry,
  /**
   * @param {!proto.google.cloud.iot.v1.UpdateDeviceRegistryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.DeviceRegistry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.UpdateDeviceRegistryRequest,
 *   !proto.google.cloud.iot.v1.DeviceRegistry>}
 */
const methodInfo_DeviceManager_UpdateDeviceRegistry = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_iot_v1_resources_pb.DeviceRegistry,
  /**
   * @param {!proto.google.cloud.iot.v1.UpdateDeviceRegistryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.DeviceRegistry.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.UpdateDeviceRegistryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.DeviceRegistry)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.DeviceRegistry>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.updateDeviceRegistry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/UpdateDeviceRegistry',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_UpdateDeviceRegistry,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.UpdateDeviceRegistryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.DeviceRegistry>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.updateDeviceRegistry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/UpdateDeviceRegistry',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_UpdateDeviceRegistry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.DeleteDeviceRegistryRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DeviceManager_DeleteDeviceRegistry = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/DeleteDeviceRegistry',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.DeleteDeviceRegistryRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.iot.v1.DeleteDeviceRegistryRequest} request
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
 *   !proto.google.cloud.iot.v1.DeleteDeviceRegistryRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeviceManager_DeleteDeviceRegistry = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.iot.v1.DeleteDeviceRegistryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.DeleteDeviceRegistryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.deleteDeviceRegistry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/DeleteDeviceRegistry',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_DeleteDeviceRegistry,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.DeleteDeviceRegistryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.deleteDeviceRegistry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/DeleteDeviceRegistry',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_DeleteDeviceRegistry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.ListDeviceRegistriesRequest,
 *   !proto.google.cloud.iot.v1.ListDeviceRegistriesResponse>}
 */
const methodDescriptor_DeviceManager_ListDeviceRegistries = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/ListDeviceRegistries',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.ListDeviceRegistriesRequest,
  proto.google.cloud.iot.v1.ListDeviceRegistriesResponse,
  /**
   * @param {!proto.google.cloud.iot.v1.ListDeviceRegistriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.iot.v1.ListDeviceRegistriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.ListDeviceRegistriesRequest,
 *   !proto.google.cloud.iot.v1.ListDeviceRegistriesResponse>}
 */
const methodInfo_DeviceManager_ListDeviceRegistries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.iot.v1.ListDeviceRegistriesResponse,
  /**
   * @param {!proto.google.cloud.iot.v1.ListDeviceRegistriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.iot.v1.ListDeviceRegistriesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.ListDeviceRegistriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.ListDeviceRegistriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.ListDeviceRegistriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.listDeviceRegistries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/ListDeviceRegistries',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_ListDeviceRegistries,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.ListDeviceRegistriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.ListDeviceRegistriesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.listDeviceRegistries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/ListDeviceRegistries',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_ListDeviceRegistries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.CreateDeviceRequest,
 *   !proto.google.cloud.iot.v1.Device>}
 */
const methodDescriptor_DeviceManager_CreateDevice = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/CreateDevice',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.CreateDeviceRequest,
  google_cloud_iot_v1_resources_pb.Device,
  /**
   * @param {!proto.google.cloud.iot.v1.CreateDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.Device.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.CreateDeviceRequest,
 *   !proto.google.cloud.iot.v1.Device>}
 */
const methodInfo_DeviceManager_CreateDevice = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_iot_v1_resources_pb.Device,
  /**
   * @param {!proto.google.cloud.iot.v1.CreateDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.Device.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.CreateDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.Device)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.Device>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.createDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/CreateDevice',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_CreateDevice,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.CreateDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.Device>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.createDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/CreateDevice',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_CreateDevice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.GetDeviceRequest,
 *   !proto.google.cloud.iot.v1.Device>}
 */
const methodDescriptor_DeviceManager_GetDevice = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/GetDevice',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.GetDeviceRequest,
  google_cloud_iot_v1_resources_pb.Device,
  /**
   * @param {!proto.google.cloud.iot.v1.GetDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.Device.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.GetDeviceRequest,
 *   !proto.google.cloud.iot.v1.Device>}
 */
const methodInfo_DeviceManager_GetDevice = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_iot_v1_resources_pb.Device,
  /**
   * @param {!proto.google.cloud.iot.v1.GetDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.Device.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.GetDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.Device)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.Device>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.getDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/GetDevice',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_GetDevice,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.GetDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.Device>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.getDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/GetDevice',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_GetDevice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.UpdateDeviceRequest,
 *   !proto.google.cloud.iot.v1.Device>}
 */
const methodDescriptor_DeviceManager_UpdateDevice = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/UpdateDevice',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.UpdateDeviceRequest,
  google_cloud_iot_v1_resources_pb.Device,
  /**
   * @param {!proto.google.cloud.iot.v1.UpdateDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.Device.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.UpdateDeviceRequest,
 *   !proto.google.cloud.iot.v1.Device>}
 */
const methodInfo_DeviceManager_UpdateDevice = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_iot_v1_resources_pb.Device,
  /**
   * @param {!proto.google.cloud.iot.v1.UpdateDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.Device.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.UpdateDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.Device)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.Device>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.updateDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/UpdateDevice',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_UpdateDevice,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.UpdateDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.Device>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.updateDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/UpdateDevice',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_UpdateDevice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.DeleteDeviceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DeviceManager_DeleteDevice = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/DeleteDevice',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.DeleteDeviceRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.iot.v1.DeleteDeviceRequest} request
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
 *   !proto.google.cloud.iot.v1.DeleteDeviceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeviceManager_DeleteDevice = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.iot.v1.DeleteDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.DeleteDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.deleteDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/DeleteDevice',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_DeleteDevice,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.DeleteDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.deleteDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/DeleteDevice',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_DeleteDevice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.ListDevicesRequest,
 *   !proto.google.cloud.iot.v1.ListDevicesResponse>}
 */
const methodDescriptor_DeviceManager_ListDevices = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/ListDevices',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.ListDevicesRequest,
  proto.google.cloud.iot.v1.ListDevicesResponse,
  /**
   * @param {!proto.google.cloud.iot.v1.ListDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.iot.v1.ListDevicesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.ListDevicesRequest,
 *   !proto.google.cloud.iot.v1.ListDevicesResponse>}
 */
const methodInfo_DeviceManager_ListDevices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.iot.v1.ListDevicesResponse,
  /**
   * @param {!proto.google.cloud.iot.v1.ListDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.iot.v1.ListDevicesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.ListDevicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.ListDevicesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.ListDevicesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.listDevices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/ListDevices',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_ListDevices,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.ListDevicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.ListDevicesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.listDevices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/ListDevices',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_ListDevices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.ModifyCloudToDeviceConfigRequest,
 *   !proto.google.cloud.iot.v1.DeviceConfig>}
 */
const methodDescriptor_DeviceManager_ModifyCloudToDeviceConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/ModifyCloudToDeviceConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.ModifyCloudToDeviceConfigRequest,
  google_cloud_iot_v1_resources_pb.DeviceConfig,
  /**
   * @param {!proto.google.cloud.iot.v1.ModifyCloudToDeviceConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.DeviceConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.ModifyCloudToDeviceConfigRequest,
 *   !proto.google.cloud.iot.v1.DeviceConfig>}
 */
const methodInfo_DeviceManager_ModifyCloudToDeviceConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_iot_v1_resources_pb.DeviceConfig,
  /**
   * @param {!proto.google.cloud.iot.v1.ModifyCloudToDeviceConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_iot_v1_resources_pb.DeviceConfig.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.ModifyCloudToDeviceConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.DeviceConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.DeviceConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.modifyCloudToDeviceConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/ModifyCloudToDeviceConfig',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_ModifyCloudToDeviceConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.ModifyCloudToDeviceConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.DeviceConfig>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.modifyCloudToDeviceConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/ModifyCloudToDeviceConfig',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_ModifyCloudToDeviceConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.ListDeviceConfigVersionsRequest,
 *   !proto.google.cloud.iot.v1.ListDeviceConfigVersionsResponse>}
 */
const methodDescriptor_DeviceManager_ListDeviceConfigVersions = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/ListDeviceConfigVersions',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.ListDeviceConfigVersionsRequest,
  proto.google.cloud.iot.v1.ListDeviceConfigVersionsResponse,
  /**
   * @param {!proto.google.cloud.iot.v1.ListDeviceConfigVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.iot.v1.ListDeviceConfigVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.ListDeviceConfigVersionsRequest,
 *   !proto.google.cloud.iot.v1.ListDeviceConfigVersionsResponse>}
 */
const methodInfo_DeviceManager_ListDeviceConfigVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.iot.v1.ListDeviceConfigVersionsResponse,
  /**
   * @param {!proto.google.cloud.iot.v1.ListDeviceConfigVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.iot.v1.ListDeviceConfigVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.ListDeviceConfigVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.ListDeviceConfigVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.ListDeviceConfigVersionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.listDeviceConfigVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/ListDeviceConfigVersions',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_ListDeviceConfigVersions,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.ListDeviceConfigVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.ListDeviceConfigVersionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.listDeviceConfigVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/ListDeviceConfigVersions',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_ListDeviceConfigVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.iot.v1.ListDeviceStatesRequest,
 *   !proto.google.cloud.iot.v1.ListDeviceStatesResponse>}
 */
const methodDescriptor_DeviceManager_ListDeviceStates = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/ListDeviceStates',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.iot.v1.ListDeviceStatesRequest,
  proto.google.cloud.iot.v1.ListDeviceStatesResponse,
  /**
   * @param {!proto.google.cloud.iot.v1.ListDeviceStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.iot.v1.ListDeviceStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.iot.v1.ListDeviceStatesRequest,
 *   !proto.google.cloud.iot.v1.ListDeviceStatesResponse>}
 */
const methodInfo_DeviceManager_ListDeviceStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.iot.v1.ListDeviceStatesResponse,
  /**
   * @param {!proto.google.cloud.iot.v1.ListDeviceStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.iot.v1.ListDeviceStatesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.iot.v1.ListDeviceStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.iot.v1.ListDeviceStatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.iot.v1.ListDeviceStatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.listDeviceStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/ListDeviceStates',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_ListDeviceStates,
      callback);
};


/**
 * @param {!proto.google.cloud.iot.v1.ListDeviceStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.iot.v1.ListDeviceStatesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.listDeviceStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/ListDeviceStates',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_ListDeviceStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_DeviceManager_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/SetIamPolicy',
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
const methodInfo_DeviceManager_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_SetIamPolicy,
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
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_DeviceManager_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/GetIamPolicy',
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
const methodInfo_DeviceManager_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_GetIamPolicy,
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
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_DeviceManager_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.cloud.iot.v1.DeviceManager/TestIamPermissions',
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
const methodInfo_DeviceManager_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.cloud.iot.v1.DeviceManagerClient.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_TestIamPermissions,
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
proto.google.cloud.iot.v1.DeviceManagerPromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.iot.v1.DeviceManager/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_DeviceManager_TestIamPermissions);
};


module.exports = proto.google.cloud.iot.v1;

