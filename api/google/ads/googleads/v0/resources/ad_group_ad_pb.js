// source: google/ads/googleads/v0/resources/ad_group_ad.proto
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

var google_ads_googleads_v0_common_ad_pb = require('../../../../../google/ads/googleads/v0/common/ad_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_common_ad_pb);
var google_ads_googleads_v0_enums_ad_group_ad_status_pb = require('../../../../../google/ads/googleads/v0/enums/ad_group_ad_status_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_enums_ad_group_ad_status_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.google.ads.googleads.v0.resources.AdGroupAd', null, global);
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
proto.google.ads.googleads.v0.resources.AdGroupAd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v0.resources.AdGroupAd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v0.resources.AdGroupAd.displayName = 'proto.google.ads.googleads.v0.resources.AdGroupAd';
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
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.resources.AdGroupAd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.resources.AdGroupAd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    adGroup: (f = msg.getAdGroup()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    ad: (f = msg.getAd()) && google_ads_googleads_v0_common_ad_pb.Ad.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupAd}
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.resources.AdGroupAd;
  return proto.google.ads.googleads.v0.resources.AdGroupAd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.resources.AdGroupAd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupAd}
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.google.ads.googleads.v0.enums.AdGroupAdStatusEnum.AdGroupAdStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAdGroup(value);
      break;
    case 5:
      var value = new google_ads_googleads_v0_common_ad_pb.Ad;
      reader.readMessage(value,google_ads_googleads_v0_common_ad_pb.Ad.deserializeBinaryFromReader);
      msg.setAd(value);
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
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.resources.AdGroupAd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.resources.AdGroupAd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAdGroup();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAd();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_ads_googleads_v0_common_ad_pb.Ad.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupAd} returns this
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.ads.googleads.v0.enums.AdGroupAdStatusEnum.AdGroupAdStatus status = 3;
 * @return {!proto.google.ads.googleads.v0.enums.AdGroupAdStatusEnum.AdGroupAdStatus}
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.getStatus = function() {
  return /** @type {!proto.google.ads.googleads.v0.enums.AdGroupAdStatusEnum.AdGroupAdStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.enums.AdGroupAdStatusEnum.AdGroupAdStatus} value
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupAd} returns this
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.StringValue ad_group = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.getAdGroup = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupAd} returns this
*/
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.setAdGroup = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupAd} returns this
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.clearAdGroup = function() {
  return this.setAdGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.hasAdGroup = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.ads.googleads.v0.common.Ad ad = 5;
 * @return {?proto.google.ads.googleads.v0.common.Ad}
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.getAd = function() {
  return /** @type{?proto.google.ads.googleads.v0.common.Ad} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v0_common_ad_pb.Ad, 5));
};


/**
 * @param {?proto.google.ads.googleads.v0.common.Ad|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupAd} returns this
*/
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.setAd = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupAd} returns this
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.clearAd = function() {
  return this.setAd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupAd.prototype.hasAd = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v0.resources);