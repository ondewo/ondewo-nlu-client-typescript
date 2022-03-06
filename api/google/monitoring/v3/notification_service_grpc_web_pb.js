/**
 * @fileoverview gRPC-Web generated client stub for google.monitoring.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_monitoring_v3_notification_pb = require('../../../google/monitoring/v3/notification_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.monitoring = {};
proto.google.monitoring.v3 = require('./notification_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.monitoring.v3.NotificationChannelServiceClient =
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
proto.google.monitoring.v3.NotificationChannelServicePromiseClient =
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
 *   !proto.google.monitoring.v3.ListNotificationChannelDescriptorsRequest,
 *   !proto.google.monitoring.v3.ListNotificationChannelDescriptorsResponse>}
 */
const methodDescriptor_NotificationChannelService_ListNotificationChannelDescriptors = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.NotificationChannelService/ListNotificationChannelDescriptors',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.ListNotificationChannelDescriptorsRequest,
  proto.google.monitoring.v3.ListNotificationChannelDescriptorsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListNotificationChannelDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListNotificationChannelDescriptorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.ListNotificationChannelDescriptorsRequest,
 *   !proto.google.monitoring.v3.ListNotificationChannelDescriptorsResponse>}
 */
const methodInfo_NotificationChannelService_ListNotificationChannelDescriptors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.ListNotificationChannelDescriptorsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListNotificationChannelDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListNotificationChannelDescriptorsResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.ListNotificationChannelDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.ListNotificationChannelDescriptorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.ListNotificationChannelDescriptorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.NotificationChannelServiceClient.prototype.listNotificationChannelDescriptors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/ListNotificationChannelDescriptors',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_ListNotificationChannelDescriptors,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.ListNotificationChannelDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.ListNotificationChannelDescriptorsResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.NotificationChannelServicePromiseClient.prototype.listNotificationChannelDescriptors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/ListNotificationChannelDescriptors',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_ListNotificationChannelDescriptors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.GetNotificationChannelDescriptorRequest,
 *   !proto.google.monitoring.v3.NotificationChannelDescriptor>}
 */
const methodDescriptor_NotificationChannelService_GetNotificationChannelDescriptor = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.NotificationChannelService/GetNotificationChannelDescriptor',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.GetNotificationChannelDescriptorRequest,
  google_monitoring_v3_notification_pb.NotificationChannelDescriptor,
  /**
   * @param {!proto.google.monitoring.v3.GetNotificationChannelDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_notification_pb.NotificationChannelDescriptor.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.GetNotificationChannelDescriptorRequest,
 *   !proto.google.monitoring.v3.NotificationChannelDescriptor>}
 */
const methodInfo_NotificationChannelService_GetNotificationChannelDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_notification_pb.NotificationChannelDescriptor,
  /**
   * @param {!proto.google.monitoring.v3.GetNotificationChannelDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_notification_pb.NotificationChannelDescriptor.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.GetNotificationChannelDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.NotificationChannelDescriptor)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.NotificationChannelDescriptor>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.NotificationChannelServiceClient.prototype.getNotificationChannelDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/GetNotificationChannelDescriptor',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_GetNotificationChannelDescriptor,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.GetNotificationChannelDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.NotificationChannelDescriptor>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.NotificationChannelServicePromiseClient.prototype.getNotificationChannelDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/GetNotificationChannelDescriptor',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_GetNotificationChannelDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.ListNotificationChannelsRequest,
 *   !proto.google.monitoring.v3.ListNotificationChannelsResponse>}
 */
const methodDescriptor_NotificationChannelService_ListNotificationChannels = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.NotificationChannelService/ListNotificationChannels',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.ListNotificationChannelsRequest,
  proto.google.monitoring.v3.ListNotificationChannelsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListNotificationChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListNotificationChannelsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.ListNotificationChannelsRequest,
 *   !proto.google.monitoring.v3.ListNotificationChannelsResponse>}
 */
const methodInfo_NotificationChannelService_ListNotificationChannels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.ListNotificationChannelsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListNotificationChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListNotificationChannelsResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.ListNotificationChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.ListNotificationChannelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.ListNotificationChannelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.NotificationChannelServiceClient.prototype.listNotificationChannels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/ListNotificationChannels',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_ListNotificationChannels,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.ListNotificationChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.ListNotificationChannelsResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.NotificationChannelServicePromiseClient.prototype.listNotificationChannels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/ListNotificationChannels',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_ListNotificationChannels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.GetNotificationChannelRequest,
 *   !proto.google.monitoring.v3.NotificationChannel>}
 */
const methodDescriptor_NotificationChannelService_GetNotificationChannel = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.NotificationChannelService/GetNotificationChannel',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.GetNotificationChannelRequest,
  google_monitoring_v3_notification_pb.NotificationChannel,
  /**
   * @param {!proto.google.monitoring.v3.GetNotificationChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.GetNotificationChannelRequest,
 *   !proto.google.monitoring.v3.NotificationChannel>}
 */
const methodInfo_NotificationChannelService_GetNotificationChannel = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_notification_pb.NotificationChannel,
  /**
   * @param {!proto.google.monitoring.v3.GetNotificationChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.GetNotificationChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.NotificationChannel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.NotificationChannel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.NotificationChannelServiceClient.prototype.getNotificationChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/GetNotificationChannel',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_GetNotificationChannel,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.GetNotificationChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.NotificationChannel>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.NotificationChannelServicePromiseClient.prototype.getNotificationChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/GetNotificationChannel',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_GetNotificationChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.CreateNotificationChannelRequest,
 *   !proto.google.monitoring.v3.NotificationChannel>}
 */
const methodDescriptor_NotificationChannelService_CreateNotificationChannel = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.NotificationChannelService/CreateNotificationChannel',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.CreateNotificationChannelRequest,
  google_monitoring_v3_notification_pb.NotificationChannel,
  /**
   * @param {!proto.google.monitoring.v3.CreateNotificationChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.CreateNotificationChannelRequest,
 *   !proto.google.monitoring.v3.NotificationChannel>}
 */
const methodInfo_NotificationChannelService_CreateNotificationChannel = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_notification_pb.NotificationChannel,
  /**
   * @param {!proto.google.monitoring.v3.CreateNotificationChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.CreateNotificationChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.NotificationChannel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.NotificationChannel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.NotificationChannelServiceClient.prototype.createNotificationChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/CreateNotificationChannel',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_CreateNotificationChannel,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.CreateNotificationChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.NotificationChannel>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.NotificationChannelServicePromiseClient.prototype.createNotificationChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/CreateNotificationChannel',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_CreateNotificationChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.UpdateNotificationChannelRequest,
 *   !proto.google.monitoring.v3.NotificationChannel>}
 */
const methodDescriptor_NotificationChannelService_UpdateNotificationChannel = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.NotificationChannelService/UpdateNotificationChannel',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.UpdateNotificationChannelRequest,
  google_monitoring_v3_notification_pb.NotificationChannel,
  /**
   * @param {!proto.google.monitoring.v3.UpdateNotificationChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.UpdateNotificationChannelRequest,
 *   !proto.google.monitoring.v3.NotificationChannel>}
 */
const methodInfo_NotificationChannelService_UpdateNotificationChannel = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_notification_pb.NotificationChannel,
  /**
   * @param {!proto.google.monitoring.v3.UpdateNotificationChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.UpdateNotificationChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.NotificationChannel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.NotificationChannel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.NotificationChannelServiceClient.prototype.updateNotificationChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/UpdateNotificationChannel',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_UpdateNotificationChannel,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.UpdateNotificationChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.NotificationChannel>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.NotificationChannelServicePromiseClient.prototype.updateNotificationChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/UpdateNotificationChannel',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_UpdateNotificationChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.DeleteNotificationChannelRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_NotificationChannelService_DeleteNotificationChannel = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.NotificationChannelService/DeleteNotificationChannel',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.DeleteNotificationChannelRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.DeleteNotificationChannelRequest} request
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
 *   !proto.google.monitoring.v3.DeleteNotificationChannelRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_NotificationChannelService_DeleteNotificationChannel = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.DeleteNotificationChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.DeleteNotificationChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.NotificationChannelServiceClient.prototype.deleteNotificationChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/DeleteNotificationChannel',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_DeleteNotificationChannel,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.DeleteNotificationChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.NotificationChannelServicePromiseClient.prototype.deleteNotificationChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/DeleteNotificationChannel',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_DeleteNotificationChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.SendNotificationChannelVerificationCodeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_NotificationChannelService_SendNotificationChannelVerificationCode = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.NotificationChannelService/SendNotificationChannelVerificationCode',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.SendNotificationChannelVerificationCodeRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.SendNotificationChannelVerificationCodeRequest} request
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
 *   !proto.google.monitoring.v3.SendNotificationChannelVerificationCodeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_NotificationChannelService_SendNotificationChannelVerificationCode = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.SendNotificationChannelVerificationCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.SendNotificationChannelVerificationCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.NotificationChannelServiceClient.prototype.sendNotificationChannelVerificationCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/SendNotificationChannelVerificationCode',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_SendNotificationChannelVerificationCode,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.SendNotificationChannelVerificationCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.NotificationChannelServicePromiseClient.prototype.sendNotificationChannelVerificationCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/SendNotificationChannelVerificationCode',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_SendNotificationChannelVerificationCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.GetNotificationChannelVerificationCodeRequest,
 *   !proto.google.monitoring.v3.GetNotificationChannelVerificationCodeResponse>}
 */
const methodDescriptor_NotificationChannelService_GetNotificationChannelVerificationCode = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.NotificationChannelService/GetNotificationChannelVerificationCode',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.GetNotificationChannelVerificationCodeRequest,
  proto.google.monitoring.v3.GetNotificationChannelVerificationCodeResponse,
  /**
   * @param {!proto.google.monitoring.v3.GetNotificationChannelVerificationCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.GetNotificationChannelVerificationCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.GetNotificationChannelVerificationCodeRequest,
 *   !proto.google.monitoring.v3.GetNotificationChannelVerificationCodeResponse>}
 */
const methodInfo_NotificationChannelService_GetNotificationChannelVerificationCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.GetNotificationChannelVerificationCodeResponse,
  /**
   * @param {!proto.google.monitoring.v3.GetNotificationChannelVerificationCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.GetNotificationChannelVerificationCodeResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.GetNotificationChannelVerificationCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.GetNotificationChannelVerificationCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.GetNotificationChannelVerificationCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.NotificationChannelServiceClient.prototype.getNotificationChannelVerificationCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/GetNotificationChannelVerificationCode',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_GetNotificationChannelVerificationCode,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.GetNotificationChannelVerificationCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.GetNotificationChannelVerificationCodeResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.NotificationChannelServicePromiseClient.prototype.getNotificationChannelVerificationCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/GetNotificationChannelVerificationCode',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_GetNotificationChannelVerificationCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.VerifyNotificationChannelRequest,
 *   !proto.google.monitoring.v3.NotificationChannel>}
 */
const methodDescriptor_NotificationChannelService_VerifyNotificationChannel = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.NotificationChannelService/VerifyNotificationChannel',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.VerifyNotificationChannelRequest,
  google_monitoring_v3_notification_pb.NotificationChannel,
  /**
   * @param {!proto.google.monitoring.v3.VerifyNotificationChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.VerifyNotificationChannelRequest,
 *   !proto.google.monitoring.v3.NotificationChannel>}
 */
const methodInfo_NotificationChannelService_VerifyNotificationChannel = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_notification_pb.NotificationChannel,
  /**
   * @param {!proto.google.monitoring.v3.VerifyNotificationChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.VerifyNotificationChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.NotificationChannel)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.NotificationChannel>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.NotificationChannelServiceClient.prototype.verifyNotificationChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/VerifyNotificationChannel',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_VerifyNotificationChannel,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.VerifyNotificationChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.NotificationChannel>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.NotificationChannelServicePromiseClient.prototype.verifyNotificationChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.NotificationChannelService/VerifyNotificationChannel',
      request,
      metadata || {},
      methodDescriptor_NotificationChannelService_VerifyNotificationChannel);
};


module.exports = proto.google.monitoring.v3;

