// source: ondewo/nlu/webhook.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
goog.object.extend(proto, ondewo_nlu_context_pb);
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
goog.object.extend(proto, ondewo_nlu_intent_pb);
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');
goog.object.extend(proto, ondewo_nlu_session_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.ondewo.nlu.OriginalDetectIntentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.PingRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.PingResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.WebhookRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.WebhookResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.PingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.PingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.PingRequest.displayName = 'proto.ondewo.nlu.PingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.WebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.WebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.WebhookRequest.displayName = 'proto.ondewo.nlu.WebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.WebhookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.WebhookResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.WebhookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.WebhookResponse.displayName = 'proto.ondewo.nlu.WebhookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.OriginalDetectIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.OriginalDetectIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.OriginalDetectIntentRequest.displayName = 'proto.ondewo.nlu.OriginalDetectIntentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.PingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.PingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.PingResponse.displayName = 'proto.ondewo.nlu.PingResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.PingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.PingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.PingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.PingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    session: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.PingRequest}
 */
proto.ondewo.nlu.PingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.PingRequest;
  return proto.ondewo.nlu.PingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.PingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.PingRequest}
 */
proto.ondewo.nlu.PingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.PingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.PingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.PingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.PingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string session = 1;
 * @return {string}
 */
proto.ondewo.nlu.PingRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.PingRequest} returns this
 */
proto.ondewo.nlu.PingRequest.prototype.setSession = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.WebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.WebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.WebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.WebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    session: jspb.Message.getFieldWithDefault(msg, 4, ""),
    responseId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    queryResult: (f = msg.getQueryResult()) && ondewo_nlu_session_pb.QueryResult.toObject(includeInstance, f),
    originalDetectIntentRequest: (f = msg.getOriginalDetectIntentRequest()) && proto.ondewo.nlu.OriginalDetectIntentRequest.toObject(includeInstance, f),
    headers: (f = msg.getHeaders()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.WebhookRequest}
 */
proto.ondewo.nlu.WebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.WebhookRequest;
  return proto.ondewo.nlu.WebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.WebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.WebhookRequest}
 */
proto.ondewo.nlu.WebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseId(value);
      break;
    case 2:
      var value = new ondewo_nlu_session_pb.QueryResult;
      reader.readMessage(value,ondewo_nlu_session_pb.QueryResult.deserializeBinaryFromReader);
      msg.setQueryResult(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.OriginalDetectIntentRequest;
      reader.readMessage(value,proto.ondewo.nlu.OriginalDetectIntentRequest.deserializeBinaryFromReader);
      msg.setOriginalDetectIntentRequest(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setHeaders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.WebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.WebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.WebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.WebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getResponseId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueryResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ondewo_nlu_session_pb.QueryResult.serializeBinaryToWriter
    );
  }
  f = message.getOriginalDetectIntentRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.OriginalDetectIntentRequest.serializeBinaryToWriter
    );
  }
  f = message.getHeaders();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string session = 4;
 * @return {string}
 */
proto.ondewo.nlu.WebhookRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.WebhookRequest} returns this
 */
proto.ondewo.nlu.WebhookRequest.prototype.setSession = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string response_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.WebhookRequest.prototype.getResponseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.WebhookRequest} returns this
 */
proto.ondewo.nlu.WebhookRequest.prototype.setResponseId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional QueryResult query_result = 2;
 * @return {?proto.ondewo.nlu.QueryResult}
 */
proto.ondewo.nlu.WebhookRequest.prototype.getQueryResult = function() {
  return /** @type{?proto.ondewo.nlu.QueryResult} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_session_pb.QueryResult, 2));
};


/**
 * @param {?proto.ondewo.nlu.QueryResult|undefined} value
 * @return {!proto.ondewo.nlu.WebhookRequest} returns this
*/
proto.ondewo.nlu.WebhookRequest.prototype.setQueryResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.WebhookRequest} returns this
 */
proto.ondewo.nlu.WebhookRequest.prototype.clearQueryResult = function() {
  return this.setQueryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.WebhookRequest.prototype.hasQueryResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OriginalDetectIntentRequest original_detect_intent_request = 3;
 * @return {?proto.ondewo.nlu.OriginalDetectIntentRequest}
 */
proto.ondewo.nlu.WebhookRequest.prototype.getOriginalDetectIntentRequest = function() {
  return /** @type{?proto.ondewo.nlu.OriginalDetectIntentRequest} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.OriginalDetectIntentRequest, 3));
};


/**
 * @param {?proto.ondewo.nlu.OriginalDetectIntentRequest|undefined} value
 * @return {!proto.ondewo.nlu.WebhookRequest} returns this
*/
proto.ondewo.nlu.WebhookRequest.prototype.setOriginalDetectIntentRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.WebhookRequest} returns this
 */
proto.ondewo.nlu.WebhookRequest.prototype.clearOriginalDetectIntentRequest = function() {
  return this.setOriginalDetectIntentRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.WebhookRequest.prototype.hasOriginalDetectIntentRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct headers = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.WebhookRequest.prototype.getHeaders = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.WebhookRequest} returns this
*/
proto.ondewo.nlu.WebhookRequest.prototype.setHeaders = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.WebhookRequest} returns this
 */
proto.ondewo.nlu.WebhookRequest.prototype.clearHeaders = function() {
  return this.setHeaders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.WebhookRequest.prototype.hasHeaders = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.WebhookResponse.repeatedFields_ = [2,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.WebhookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.WebhookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.WebhookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.WebhookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fulfillmentText: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fulfillmentMessagesList: jspb.Message.toObjectList(msg.getFulfillmentMessagesList(),
    ondewo_nlu_intent_pb.Intent.Message.toObject, includeInstance),
    source: jspb.Message.getFieldWithDefault(msg, 3, ""),
    payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    outputContextsList: jspb.Message.toObjectList(msg.getOutputContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance),
    followupEventInput: (f = msg.getFollowupEventInput()) && ondewo_nlu_session_pb.EventInput.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.WebhookResponse}
 */
proto.ondewo.nlu.WebhookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.WebhookResponse;
  return proto.ondewo.nlu.WebhookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.WebhookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.WebhookResponse}
 */
proto.ondewo.nlu.WebhookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFulfillmentText(value);
      break;
    case 2:
      var value = new ondewo_nlu_intent_pb.Intent.Message;
      reader.readMessage(value,ondewo_nlu_intent_pb.Intent.Message.deserializeBinaryFromReader);
      msg.addFulfillmentMessages(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 5:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addOutputContexts(value);
      break;
    case 6:
      var value = new ondewo_nlu_session_pb.EventInput;
      reader.readMessage(value,ondewo_nlu_session_pb.EventInput.deserializeBinaryFromReader);
      msg.setFollowupEventInput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.WebhookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.WebhookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.WebhookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.WebhookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFulfillmentText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFulfillmentMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      ondewo_nlu_intent_pb.Intent.Message.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOutputContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getFollowupEventInput();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      ondewo_nlu_session_pb.EventInput.serializeBinaryToWriter
    );
  }
};


/**
 * optional string fulfillment_text = 1;
 * @return {string}
 */
proto.ondewo.nlu.WebhookResponse.prototype.getFulfillmentText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.WebhookResponse} returns this
 */
proto.ondewo.nlu.WebhookResponse.prototype.setFulfillmentText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Intent.Message fulfillment_messages = 2;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message>}
 */
proto.ondewo.nlu.WebhookResponse.prototype.getFulfillmentMessagesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_intent_pb.Intent.Message, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message>} value
 * @return {!proto.ondewo.nlu.WebhookResponse} returns this
*/
proto.ondewo.nlu.WebhookResponse.prototype.setFulfillmentMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message}
 */
proto.ondewo.nlu.WebhookResponse.prototype.addFulfillmentMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.Intent.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.WebhookResponse} returns this
 */
proto.ondewo.nlu.WebhookResponse.prototype.clearFulfillmentMessagesList = function() {
  return this.setFulfillmentMessagesList([]);
};


/**
 * optional string source = 3;
 * @return {string}
 */
proto.ondewo.nlu.WebhookResponse.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.WebhookResponse} returns this
 */
proto.ondewo.nlu.WebhookResponse.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Struct payload = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.WebhookResponse.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.WebhookResponse} returns this
*/
proto.ondewo.nlu.WebhookResponse.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.WebhookResponse} returns this
 */
proto.ondewo.nlu.WebhookResponse.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.WebhookResponse.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Context output_contexts = 5;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.WebhookResponse.prototype.getOutputContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 5));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.WebhookResponse} returns this
*/
proto.ondewo.nlu.WebhookResponse.prototype.setOutputContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.WebhookResponse.prototype.addOutputContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.WebhookResponse} returns this
 */
proto.ondewo.nlu.WebhookResponse.prototype.clearOutputContextsList = function() {
  return this.setOutputContextsList([]);
};


/**
 * optional EventInput followup_event_input = 6;
 * @return {?proto.ondewo.nlu.EventInput}
 */
proto.ondewo.nlu.WebhookResponse.prototype.getFollowupEventInput = function() {
  return /** @type{?proto.ondewo.nlu.EventInput} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_session_pb.EventInput, 6));
};


/**
 * @param {?proto.ondewo.nlu.EventInput|undefined} value
 * @return {!proto.ondewo.nlu.WebhookResponse} returns this
*/
proto.ondewo.nlu.WebhookResponse.prototype.setFollowupEventInput = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.WebhookResponse} returns this
 */
proto.ondewo.nlu.WebhookResponse.prototype.clearFollowupEventInput = function() {
  return this.setFollowupEventInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.WebhookResponse.prototype.hasFollowupEventInput = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.OriginalDetectIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.OriginalDetectIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.OriginalDetectIntentRequest}
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.OriginalDetectIntentRequest;
  return proto.ondewo.nlu.OriginalDetectIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.OriginalDetectIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.OriginalDetectIntentRequest}
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.OriginalDetectIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.OriginalDetectIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string source = 1;
 * @return {string}
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.OriginalDetectIntentRequest} returns this
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct payload = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.OriginalDetectIntentRequest} returns this
*/
proto.ondewo.nlu.OriginalDetectIntentRequest.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.OriginalDetectIntentRequest} returns this
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.OriginalDetectIntentRequest.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.PingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.PingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.PingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.PingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isReachable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.PingResponse}
 */
proto.ondewo.nlu.PingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.PingResponse;
  return proto.ondewo.nlu.PingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.PingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.PingResponse}
 */
proto.ondewo.nlu.PingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReachable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.PingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.PingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.PingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.PingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsReachable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_reachable = 1;
 * @return {boolean}
 */
proto.ondewo.nlu.PingResponse.prototype.getIsReachable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.PingResponse} returns this
 */
proto.ondewo.nlu.PingResponse.prototype.setIsReachable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.ondewo.nlu);