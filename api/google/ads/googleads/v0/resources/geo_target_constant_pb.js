// source: google/ads/googleads/v0/resources/geo_target_constant.proto
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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.google.ads.googleads.v0.resources.GeoTargetConstant', null, global);
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
proto.google.ads.googleads.v0.resources.GeoTargetConstant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v0.resources.GeoTargetConstant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v0.resources.GeoTargetConstant.displayName = 'proto.google.ads.googleads.v0.resources.GeoTargetConstant';
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
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.resources.GeoTargetConstant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    countryCode: (f = msg.getCountryCode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    targetType: (f = msg.getTargetType()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.resources.GeoTargetConstant;
  return proto.google.ads.googleads.v0.resources.GeoTargetConstant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCountryCode(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTargetType(value);
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
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.resources.GeoTargetConstant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCountryCode();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getTargetType();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} returns this
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value id = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} returns this
*/
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} returns this
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue name = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} returns this
*/
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} returns this
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.hasName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue country_code = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.getCountryCode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} returns this
*/
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.setCountryCode = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} returns this
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.clearCountryCode = function() {
  return this.setCountryCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.hasCountryCode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.StringValue target_type = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.getTargetType = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} returns this
*/
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.setTargetType = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.GeoTargetConstant} returns this
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.clearTargetType = function() {
  return this.setTargetType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.GeoTargetConstant.prototype.hasTargetType = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v0.resources);