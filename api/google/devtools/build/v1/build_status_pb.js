// source: google/devtools/build/v1/build_status.proto
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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
goog.exportSymbol('proto.google.devtools.build.v1.BuildStatus', null, global);
goog.exportSymbol('proto.google.devtools.build.v1.BuildStatus.Result', null, global);
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
proto.google.devtools.build.v1.BuildStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.build.v1.BuildStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.build.v1.BuildStatus.displayName = 'proto.google.devtools.build.v1.BuildStatus';
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
proto.google.devtools.build.v1.BuildStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.build.v1.BuildStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.build.v1.BuildStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.build.v1.BuildStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: (f = msg.getDetails()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.build.v1.BuildStatus}
 */
proto.google.devtools.build.v1.BuildStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.build.v1.BuildStatus;
  return proto.google.devtools.build.v1.BuildStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.build.v1.BuildStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.build.v1.BuildStatus}
 */
proto.google.devtools.build.v1.BuildStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.devtools.build.v1.BuildStatus.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.google.devtools.build.v1.BuildStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.build.v1.BuildStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.build.v1.BuildStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.build.v1.BuildStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.build.v1.BuildStatus.Result = {
  UNKNOWN_STATUS: 0,
  COMMAND_SUCCEEDED: 1,
  COMMAND_FAILED: 2,
  USER_ERROR: 3,
  SYSTEM_ERROR: 4,
  RESOURCE_EXHAUSTED: 5,
  INVOCATION_DEADLINE_EXCEEDED: 6,
  REQUEST_DEADLINE_EXCEEDED: 8,
  CANCELLED: 7
};

/**
 * optional Result result = 1;
 * @return {!proto.google.devtools.build.v1.BuildStatus.Result}
 */
proto.google.devtools.build.v1.BuildStatus.prototype.getResult = function() {
  return /** @type {!proto.google.devtools.build.v1.BuildStatus.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.devtools.build.v1.BuildStatus.Result} value
 * @return {!proto.google.devtools.build.v1.BuildStatus} returns this
 */
proto.google.devtools.build.v1.BuildStatus.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Any details = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.google.devtools.build.v1.BuildStatus.prototype.getDetails = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.google.devtools.build.v1.BuildStatus} returns this
*/
proto.google.devtools.build.v1.BuildStatus.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.build.v1.BuildStatus} returns this
 */
proto.google.devtools.build.v1.BuildStatus.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.build.v1.BuildStatus.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.google.devtools.build.v1);
