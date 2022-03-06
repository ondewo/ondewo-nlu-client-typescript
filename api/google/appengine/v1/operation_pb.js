// source: google/appengine/v1/operation.proto
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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.appengine.v1.OperationMetadataV1', null, global);
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
proto.google.appengine.v1.OperationMetadataV1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.appengine.v1.OperationMetadataV1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.appengine.v1.OperationMetadataV1.displayName = 'proto.google.appengine.v1.OperationMetadataV1';
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
proto.google.appengine.v1.OperationMetadataV1.prototype.toObject = function(opt_includeInstance) {
  return proto.google.appengine.v1.OperationMetadataV1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.appengine.v1.OperationMetadataV1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.appengine.v1.OperationMetadataV1.toObject = function(includeInstance, msg) {
  var f, obj = {
    method: jspb.Message.getFieldWithDefault(msg, 1, ""),
    insertTime: (f = msg.getInsertTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 4, ""),
    target: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.appengine.v1.OperationMetadataV1}
 */
proto.google.appengine.v1.OperationMetadataV1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.appengine.v1.OperationMetadataV1;
  return proto.google.appengine.v1.OperationMetadataV1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.appengine.v1.OperationMetadataV1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.appengine.v1.OperationMetadataV1}
 */
proto.google.appengine.v1.OperationMetadataV1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setInsertTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
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
proto.google.appengine.v1.OperationMetadataV1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.appengine.v1.OperationMetadataV1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.appengine.v1.OperationMetadataV1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.appengine.v1.OperationMetadataV1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInsertTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string method = 1;
 * @return {string}
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.appengine.v1.OperationMetadataV1} returns this
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp insert_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.getInsertTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.appengine.v1.OperationMetadataV1} returns this
*/
proto.google.appengine.v1.OperationMetadataV1.prototype.setInsertTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.appengine.v1.OperationMetadataV1} returns this
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.clearInsertTime = function() {
  return this.setInsertTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.hasInsertTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.appengine.v1.OperationMetadataV1} returns this
*/
proto.google.appengine.v1.OperationMetadataV1.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.appengine.v1.OperationMetadataV1} returns this
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string user = 4;
 * @return {string}
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.appengine.v1.OperationMetadataV1} returns this
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string target = 5;
 * @return {string}
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.appengine.v1.OperationMetadataV1} returns this
 */
proto.google.appengine.v1.OperationMetadataV1.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.google.appengine.v1);
