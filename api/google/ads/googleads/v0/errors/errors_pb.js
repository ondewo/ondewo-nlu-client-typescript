// source: google/ads/googleads/v0/errors/errors.proto
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

var google_ads_googleads_v0_common_policy_pb = require('../../../../../google/ads/googleads/v0/common/policy_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_common_policy_pb);
var google_ads_googleads_v0_common_value_pb = require('../../../../../google/ads/googleads/v0/common/value_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_common_value_pb);
var google_ads_googleads_v0_errors_ad_customizer_error_pb = require('../../../../../google/ads/googleads/v0/errors/ad_customizer_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_ad_customizer_error_pb);
var google_ads_googleads_v0_errors_ad_error_pb = require('../../../../../google/ads/googleads/v0/errors/ad_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_ad_error_pb);
var google_ads_googleads_v0_errors_ad_group_ad_error_pb = require('../../../../../google/ads/googleads/v0/errors/ad_group_ad_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_ad_group_ad_error_pb);
var google_ads_googleads_v0_errors_ad_group_bid_modifier_error_pb = require('../../../../../google/ads/googleads/v0/errors/ad_group_bid_modifier_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_ad_group_bid_modifier_error_pb);
var google_ads_googleads_v0_errors_ad_group_criterion_error_pb = require('../../../../../google/ads/googleads/v0/errors/ad_group_criterion_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_ad_group_criterion_error_pb);
var google_ads_googleads_v0_errors_ad_group_error_pb = require('../../../../../google/ads/googleads/v0/errors/ad_group_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_ad_group_error_pb);
var google_ads_googleads_v0_errors_ad_sharing_error_pb = require('../../../../../google/ads/googleads/v0/errors/ad_sharing_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_ad_sharing_error_pb);
var google_ads_googleads_v0_errors_adx_error_pb = require('../../../../../google/ads/googleads/v0/errors/adx_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_adx_error_pb);
var google_ads_googleads_v0_errors_authentication_error_pb = require('../../../../../google/ads/googleads/v0/errors/authentication_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_authentication_error_pb);
var google_ads_googleads_v0_errors_authorization_error_pb = require('../../../../../google/ads/googleads/v0/errors/authorization_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_authorization_error_pb);
var google_ads_googleads_v0_errors_bidding_error_pb = require('../../../../../google/ads/googleads/v0/errors/bidding_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_bidding_error_pb);
var google_ads_googleads_v0_errors_bidding_strategy_error_pb = require('../../../../../google/ads/googleads/v0/errors/bidding_strategy_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_bidding_strategy_error_pb);
var google_ads_googleads_v0_errors_campaign_budget_error_pb = require('../../../../../google/ads/googleads/v0/errors/campaign_budget_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_campaign_budget_error_pb);
var google_ads_googleads_v0_errors_campaign_criterion_error_pb = require('../../../../../google/ads/googleads/v0/errors/campaign_criterion_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_campaign_criterion_error_pb);
var google_ads_googleads_v0_errors_campaign_error_pb = require('../../../../../google/ads/googleads/v0/errors/campaign_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_campaign_error_pb);
var google_ads_googleads_v0_errors_collection_size_error_pb = require('../../../../../google/ads/googleads/v0/errors/collection_size_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_collection_size_error_pb);
var google_ads_googleads_v0_errors_context_error_pb = require('../../../../../google/ads/googleads/v0/errors/context_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_context_error_pb);
var google_ads_googleads_v0_errors_criterion_error_pb = require('../../../../../google/ads/googleads/v0/errors/criterion_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_criterion_error_pb);
var google_ads_googleads_v0_errors_date_error_pb = require('../../../../../google/ads/googleads/v0/errors/date_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_date_error_pb);
var google_ads_googleads_v0_errors_date_range_error_pb = require('../../../../../google/ads/googleads/v0/errors/date_range_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_date_range_error_pb);
var google_ads_googleads_v0_errors_distinct_error_pb = require('../../../../../google/ads/googleads/v0/errors/distinct_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_distinct_error_pb);
var google_ads_googleads_v0_errors_feed_attribute_reference_error_pb = require('../../../../../google/ads/googleads/v0/errors/feed_attribute_reference_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_feed_attribute_reference_error_pb);
var google_ads_googleads_v0_errors_field_error_pb = require('../../../../../google/ads/googleads/v0/errors/field_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_field_error_pb);
var google_ads_googleads_v0_errors_field_mask_error_pb = require('../../../../../google/ads/googleads/v0/errors/field_mask_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_field_mask_error_pb);
var google_ads_googleads_v0_errors_function_error_pb = require('../../../../../google/ads/googleads/v0/errors/function_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_function_error_pb);
var google_ads_googleads_v0_errors_function_parsing_error_pb = require('../../../../../google/ads/googleads/v0/errors/function_parsing_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_function_parsing_error_pb);
var google_ads_googleads_v0_errors_id_error_pb = require('../../../../../google/ads/googleads/v0/errors/id_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_id_error_pb);
var google_ads_googleads_v0_errors_image_error_pb = require('../../../../../google/ads/googleads/v0/errors/image_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_image_error_pb);
var google_ads_googleads_v0_errors_internal_error_pb = require('../../../../../google/ads/googleads/v0/errors/internal_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_internal_error_pb);
var google_ads_googleads_v0_errors_list_operation_error_pb = require('../../../../../google/ads/googleads/v0/errors/list_operation_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_list_operation_error_pb);
var google_ads_googleads_v0_errors_media_bundle_error_pb = require('../../../../../google/ads/googleads/v0/errors/media_bundle_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_media_bundle_error_pb);
var google_ads_googleads_v0_errors_media_error_pb = require('../../../../../google/ads/googleads/v0/errors/media_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_media_error_pb);
var google_ads_googleads_v0_errors_multiplier_error_pb = require('../../../../../google/ads/googleads/v0/errors/multiplier_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_multiplier_error_pb);
var google_ads_googleads_v0_errors_mutate_error_pb = require('../../../../../google/ads/googleads/v0/errors/mutate_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_mutate_error_pb);
var google_ads_googleads_v0_errors_new_resource_creation_error_pb = require('../../../../../google/ads/googleads/v0/errors/new_resource_creation_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_new_resource_creation_error_pb);
var google_ads_googleads_v0_errors_not_empty_error_pb = require('../../../../../google/ads/googleads/v0/errors/not_empty_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_not_empty_error_pb);
var google_ads_googleads_v0_errors_null_error_pb = require('../../../../../google/ads/googleads/v0/errors/null_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_null_error_pb);
var google_ads_googleads_v0_errors_operation_access_denied_error_pb = require('../../../../../google/ads/googleads/v0/errors/operation_access_denied_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_operation_access_denied_error_pb);
var google_ads_googleads_v0_errors_operator_error_pb = require('../../../../../google/ads/googleads/v0/errors/operator_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_operator_error_pb);
var google_ads_googleads_v0_errors_query_error_pb = require('../../../../../google/ads/googleads/v0/errors/query_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_query_error_pb);
var google_ads_googleads_v0_errors_quota_error_pb = require('../../../../../google/ads/googleads/v0/errors/quota_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_quota_error_pb);
var google_ads_googleads_v0_errors_range_error_pb = require('../../../../../google/ads/googleads/v0/errors/range_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_range_error_pb);
var google_ads_googleads_v0_errors_recommendation_error_pb = require('../../../../../google/ads/googleads/v0/errors/recommendation_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_recommendation_error_pb);
var google_ads_googleads_v0_errors_region_code_error_pb = require('../../../../../google/ads/googleads/v0/errors/region_code_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_region_code_error_pb);
var google_ads_googleads_v0_errors_request_error_pb = require('../../../../../google/ads/googleads/v0/errors/request_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_request_error_pb);
var google_ads_googleads_v0_errors_resource_access_denied_error_pb = require('../../../../../google/ads/googleads/v0/errors/resource_access_denied_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_resource_access_denied_error_pb);
var google_ads_googleads_v0_errors_resource_count_limit_exceeded_error_pb = require('../../../../../google/ads/googleads/v0/errors/resource_count_limit_exceeded_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_resource_count_limit_exceeded_error_pb);
var google_ads_googleads_v0_errors_setting_error_pb = require('../../../../../google/ads/googleads/v0/errors/setting_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_setting_error_pb);
var google_ads_googleads_v0_errors_string_format_error_pb = require('../../../../../google/ads/googleads/v0/errors/string_format_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_string_format_error_pb);
var google_ads_googleads_v0_errors_string_length_error_pb = require('../../../../../google/ads/googleads/v0/errors/string_length_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_string_length_error_pb);
var google_ads_googleads_v0_errors_url_field_error_pb = require('../../../../../google/ads/googleads/v0/errors/url_field_error_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_errors_url_field_error_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.google.ads.googleads.v0.errors.ErrorCode', null, global);
goog.exportSymbol('proto.google.ads.googleads.v0.errors.ErrorCode.ErrorCodeCase', null, global);
goog.exportSymbol('proto.google.ads.googleads.v0.errors.ErrorDetails', null, global);
goog.exportSymbol('proto.google.ads.googleads.v0.errors.ErrorLocation', null, global);
goog.exportSymbol('proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement', null, global);
goog.exportSymbol('proto.google.ads.googleads.v0.errors.GoogleAdsError', null, global);
goog.exportSymbol('proto.google.ads.googleads.v0.errors.GoogleAdsFailure', null, global);
goog.exportSymbol('proto.google.ads.googleads.v0.errors.PolicyViolationDetails', null, global);
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
proto.google.ads.googleads.v0.errors.GoogleAdsFailure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v0.errors.GoogleAdsFailure.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v0.errors.GoogleAdsFailure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v0.errors.GoogleAdsFailure.displayName = 'proto.google.ads.googleads.v0.errors.GoogleAdsFailure';
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
proto.google.ads.googleads.v0.errors.GoogleAdsError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v0.errors.GoogleAdsError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v0.errors.GoogleAdsError.displayName = 'proto.google.ads.googleads.v0.errors.GoogleAdsError';
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
proto.google.ads.googleads.v0.errors.ErrorCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v0.errors.ErrorCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v0.errors.ErrorCode.displayName = 'proto.google.ads.googleads.v0.errors.ErrorCode';
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
proto.google.ads.googleads.v0.errors.ErrorLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v0.errors.ErrorLocation.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v0.errors.ErrorLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v0.errors.ErrorLocation.displayName = 'proto.google.ads.googleads.v0.errors.ErrorLocation';
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
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.displayName = 'proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement';
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
proto.google.ads.googleads.v0.errors.ErrorDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v0.errors.ErrorDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v0.errors.ErrorDetails.displayName = 'proto.google.ads.googleads.v0.errors.ErrorDetails';
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
proto.google.ads.googleads.v0.errors.PolicyViolationDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v0.errors.PolicyViolationDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v0.errors.PolicyViolationDetails.displayName = 'proto.google.ads.googleads.v0.errors.PolicyViolationDetails';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.repeatedFields_ = [1];



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
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.errors.GoogleAdsFailure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.errors.GoogleAdsFailure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.google.ads.googleads.v0.errors.GoogleAdsError.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsFailure}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.errors.GoogleAdsFailure;
  return proto.google.ads.googleads.v0.errors.GoogleAdsFailure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.errors.GoogleAdsFailure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsFailure}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.ads.googleads.v0.errors.GoogleAdsError;
      reader.readMessage(value,proto.google.ads.googleads.v0.errors.GoogleAdsError.deserializeBinaryFromReader);
      msg.addErrors(value);
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
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.errors.GoogleAdsFailure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.errors.GoogleAdsFailure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.ads.googleads.v0.errors.GoogleAdsError.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GoogleAdsError errors = 1;
 * @return {!Array<!proto.google.ads.googleads.v0.errors.GoogleAdsError>}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v0.errors.GoogleAdsError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v0.errors.GoogleAdsError, 1));
};


/**
 * @param {!Array<!proto.google.ads.googleads.v0.errors.GoogleAdsError>} value
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsFailure} returns this
*/
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.GoogleAdsError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.ads.googleads.v0.errors.GoogleAdsError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsFailure} returns this
 */
proto.google.ads.googleads.v0.errors.GoogleAdsFailure.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
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
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.errors.GoogleAdsError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.errors.GoogleAdsError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorCode: (f = msg.getErrorCode()) && proto.google.ads.googleads.v0.errors.ErrorCode.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    trigger: (f = msg.getTrigger()) && google_ads_googleads_v0_common_value_pb.Value.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.google.ads.googleads.v0.errors.ErrorLocation.toObject(includeInstance, f),
    details: (f = msg.getDetails()) && proto.google.ads.googleads.v0.errors.ErrorDetails.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.errors.GoogleAdsError;
  return proto.google.ads.googleads.v0.errors.GoogleAdsError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.errors.GoogleAdsError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.ads.googleads.v0.errors.ErrorCode;
      reader.readMessage(value,proto.google.ads.googleads.v0.errors.ErrorCode.deserializeBinaryFromReader);
      msg.setErrorCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new google_ads_googleads_v0_common_value_pb.Value;
      reader.readMessage(value,google_ads_googleads_v0_common_value_pb.Value.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 4:
      var value = new proto.google.ads.googleads.v0.errors.ErrorLocation;
      reader.readMessage(value,proto.google.ads.googleads.v0.errors.ErrorLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 5:
      var value = new proto.google.ads.googleads.v0.errors.ErrorDetails;
      reader.readMessage(value,proto.google.ads.googleads.v0.errors.ErrorDetails.deserializeBinaryFromReader);
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
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.errors.GoogleAdsError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.errors.GoogleAdsError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorCode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.ads.googleads.v0.errors.ErrorCode.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_ads_googleads_v0_common_value_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.ads.googleads.v0.errors.ErrorLocation.serializeBinaryToWriter
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.ads.googleads.v0.errors.ErrorDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrorCode error_code = 1;
 * @return {?proto.google.ads.googleads.v0.errors.ErrorCode}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.getErrorCode = function() {
  return /** @type{?proto.google.ads.googleads.v0.errors.ErrorCode} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v0.errors.ErrorCode, 1));
};


/**
 * @param {?proto.google.ads.googleads.v0.errors.ErrorCode|undefined} value
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError} returns this
*/
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.setErrorCode = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError} returns this
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.clearErrorCode = function() {
  return this.setErrorCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.hasErrorCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError} returns this
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.ads.googleads.v0.common.Value trigger = 3;
 * @return {?proto.google.ads.googleads.v0.common.Value}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.getTrigger = function() {
  return /** @type{?proto.google.ads.googleads.v0.common.Value} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v0_common_value_pb.Value, 3));
};


/**
 * @param {?proto.google.ads.googleads.v0.common.Value|undefined} value
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError} returns this
*/
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError} returns this
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ErrorLocation location = 4;
 * @return {?proto.google.ads.googleads.v0.errors.ErrorLocation}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.getLocation = function() {
  return /** @type{?proto.google.ads.googleads.v0.errors.ErrorLocation} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v0.errors.ErrorLocation, 4));
};


/**
 * @param {?proto.google.ads.googleads.v0.errors.ErrorLocation|undefined} value
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError} returns this
*/
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError} returns this
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ErrorDetails details = 5;
 * @return {?proto.google.ads.googleads.v0.errors.ErrorDetails}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.getDetails = function() {
  return /** @type{?proto.google.ads.googleads.v0.errors.ErrorDetails} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v0.errors.ErrorDetails, 5));
};


/**
 * @param {?proto.google.ads.googleads.v0.errors.ErrorDetails|undefined} value
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError} returns this
*/
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.GoogleAdsError} returns this
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.GoogleAdsError.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_ = [[1,2,3,4,5,7,8,9,10,11,12,13,14,15,17,18,19,21,24,25,26,29,31,32,33,34,35,36,37,38,39,40,42,43,44,45,46,47,48,49,58,51,52,53,54,55,56,57,59,60,61]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.ErrorCodeCase = {
  ERROR_CODE_NOT_SET: 0,
  REQUEST_ERROR: 1,
  BIDDING_STRATEGY_ERROR: 2,
  URL_FIELD_ERROR: 3,
  LIST_OPERATION_ERROR: 4,
  QUERY_ERROR: 5,
  MUTATE_ERROR: 7,
  FIELD_MASK_ERROR: 8,
  AUTHORIZATION_ERROR: 9,
  INTERNAL_ERROR: 10,
  QUOTA_ERROR: 11,
  AD_ERROR: 12,
  AD_GROUP_ERROR: 13,
  CAMPAIGN_BUDGET_ERROR: 14,
  CAMPAIGN_ERROR: 15,
  AUTHENTICATION_ERROR: 17,
  AD_GROUP_CRITERION_ERROR: 18,
  AD_CUSTOMIZER_ERROR: 19,
  AD_GROUP_AD_ERROR: 21,
  AD_SHARING_ERROR: 24,
  ADX_ERROR: 25,
  BIDDING_ERROR: 26,
  CAMPAIGN_CRITERION_ERROR: 29,
  COLLECTION_SIZE_ERROR: 31,
  CRITERION_ERROR: 32,
  DATE_ERROR: 33,
  DATE_RANGE_ERROR: 34,
  DISTINCT_ERROR: 35,
  FEED_ATTRIBUTE_REFERENCE_ERROR: 36,
  FUNCTION_ERROR: 37,
  FUNCTION_PARSING_ERROR: 38,
  ID_ERROR: 39,
  IMAGE_ERROR: 40,
  MEDIA_BUNDLE_ERROR: 42,
  MEDIA_ERROR: 43,
  MULTIPLIER_ERROR: 44,
  NEW_RESOURCE_CREATION_ERROR: 45,
  NOT_EMPTY_ERROR: 46,
  NULL_ERROR: 47,
  OPERATOR_ERROR: 48,
  RANGE_ERROR: 49,
  RECOMMENDATION_ERROR: 58,
  REGION_CODE_ERROR: 51,
  SETTING_ERROR: 52,
  STRING_FORMAT_ERROR: 53,
  STRING_LENGTH_ERROR: 54,
  OPERATION_ACCESS_DENIED_ERROR: 55,
  RESOURCE_ACCESS_DENIED_ERROR: 56,
  RESOURCE_COUNT_LIMIT_EXCEEDED_ERROR: 57,
  AD_GROUP_BID_MODIFIER_ERROR: 59,
  CONTEXT_ERROR: 60,
  FIELD_ERROR: 61
};

/**
 * @return {proto.google.ads.googleads.v0.errors.ErrorCode.ErrorCodeCase}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getErrorCodeCase = function() {
  return /** @type {proto.google.ads.googleads.v0.errors.ErrorCode.ErrorCodeCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0]));
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
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.errors.ErrorCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.errors.ErrorCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.ErrorCode.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestError: jspb.Message.getFieldWithDefault(msg, 1, 0),
    biddingStrategyError: jspb.Message.getFieldWithDefault(msg, 2, 0),
    urlFieldError: jspb.Message.getFieldWithDefault(msg, 3, 0),
    listOperationError: jspb.Message.getFieldWithDefault(msg, 4, 0),
    queryError: jspb.Message.getFieldWithDefault(msg, 5, 0),
    mutateError: jspb.Message.getFieldWithDefault(msg, 7, 0),
    fieldMaskError: jspb.Message.getFieldWithDefault(msg, 8, 0),
    authorizationError: jspb.Message.getFieldWithDefault(msg, 9, 0),
    internalError: jspb.Message.getFieldWithDefault(msg, 10, 0),
    quotaError: jspb.Message.getFieldWithDefault(msg, 11, 0),
    adError: jspb.Message.getFieldWithDefault(msg, 12, 0),
    adGroupError: jspb.Message.getFieldWithDefault(msg, 13, 0),
    campaignBudgetError: jspb.Message.getFieldWithDefault(msg, 14, 0),
    campaignError: jspb.Message.getFieldWithDefault(msg, 15, 0),
    authenticationError: jspb.Message.getFieldWithDefault(msg, 17, 0),
    adGroupCriterionError: jspb.Message.getFieldWithDefault(msg, 18, 0),
    adCustomizerError: jspb.Message.getFieldWithDefault(msg, 19, 0),
    adGroupAdError: jspb.Message.getFieldWithDefault(msg, 21, 0),
    adSharingError: jspb.Message.getFieldWithDefault(msg, 24, 0),
    adxError: jspb.Message.getFieldWithDefault(msg, 25, 0),
    biddingError: jspb.Message.getFieldWithDefault(msg, 26, 0),
    campaignCriterionError: jspb.Message.getFieldWithDefault(msg, 29, 0),
    collectionSizeError: jspb.Message.getFieldWithDefault(msg, 31, 0),
    criterionError: jspb.Message.getFieldWithDefault(msg, 32, 0),
    dateError: jspb.Message.getFieldWithDefault(msg, 33, 0),
    dateRangeError: jspb.Message.getFieldWithDefault(msg, 34, 0),
    distinctError: jspb.Message.getFieldWithDefault(msg, 35, 0),
    feedAttributeReferenceError: jspb.Message.getFieldWithDefault(msg, 36, 0),
    functionError: jspb.Message.getFieldWithDefault(msg, 37, 0),
    functionParsingError: jspb.Message.getFieldWithDefault(msg, 38, 0),
    idError: jspb.Message.getFieldWithDefault(msg, 39, 0),
    imageError: jspb.Message.getFieldWithDefault(msg, 40, 0),
    mediaBundleError: jspb.Message.getFieldWithDefault(msg, 42, 0),
    mediaError: jspb.Message.getFieldWithDefault(msg, 43, 0),
    multiplierError: jspb.Message.getFieldWithDefault(msg, 44, 0),
    newResourceCreationError: jspb.Message.getFieldWithDefault(msg, 45, 0),
    notEmptyError: jspb.Message.getFieldWithDefault(msg, 46, 0),
    nullError: jspb.Message.getFieldWithDefault(msg, 47, 0),
    operatorError: jspb.Message.getFieldWithDefault(msg, 48, 0),
    rangeError: jspb.Message.getFieldWithDefault(msg, 49, 0),
    recommendationError: jspb.Message.getFieldWithDefault(msg, 58, 0),
    regionCodeError: jspb.Message.getFieldWithDefault(msg, 51, 0),
    settingError: jspb.Message.getFieldWithDefault(msg, 52, 0),
    stringFormatError: jspb.Message.getFieldWithDefault(msg, 53, 0),
    stringLengthError: jspb.Message.getFieldWithDefault(msg, 54, 0),
    operationAccessDeniedError: jspb.Message.getFieldWithDefault(msg, 55, 0),
    resourceAccessDeniedError: jspb.Message.getFieldWithDefault(msg, 56, 0),
    resourceCountLimitExceededError: jspb.Message.getFieldWithDefault(msg, 57, 0),
    adGroupBidModifierError: jspb.Message.getFieldWithDefault(msg, 59, 0),
    contextError: jspb.Message.getFieldWithDefault(msg, 60, 0),
    fieldError: jspb.Message.getFieldWithDefault(msg, 61, 0)
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
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.errors.ErrorCode;
  return proto.google.ads.googleads.v0.errors.ErrorCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.errors.ErrorCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.RequestErrorEnum.RequestError} */ (reader.readEnum());
      msg.setRequestError(value);
      break;
    case 2:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.BiddingStrategyErrorEnum.BiddingStrategyError} */ (reader.readEnum());
      msg.setBiddingStrategyError(value);
      break;
    case 3:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.UrlFieldErrorEnum.UrlFieldError} */ (reader.readEnum());
      msg.setUrlFieldError(value);
      break;
    case 4:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.ListOperationErrorEnum.ListOperationError} */ (reader.readEnum());
      msg.setListOperationError(value);
      break;
    case 5:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.QueryErrorEnum.QueryError} */ (reader.readEnum());
      msg.setQueryError(value);
      break;
    case 7:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.MutateErrorEnum.MutateError} */ (reader.readEnum());
      msg.setMutateError(value);
      break;
    case 8:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.FieldMaskErrorEnum.FieldMaskError} */ (reader.readEnum());
      msg.setFieldMaskError(value);
      break;
    case 9:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.AuthorizationErrorEnum.AuthorizationError} */ (reader.readEnum());
      msg.setAuthorizationError(value);
      break;
    case 10:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.InternalErrorEnum.InternalError} */ (reader.readEnum());
      msg.setInternalError(value);
      break;
    case 11:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.QuotaErrorEnum.QuotaError} */ (reader.readEnum());
      msg.setQuotaError(value);
      break;
    case 12:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.AdErrorEnum.AdError} */ (reader.readEnum());
      msg.setAdError(value);
      break;
    case 13:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.AdGroupErrorEnum.AdGroupError} */ (reader.readEnum());
      msg.setAdGroupError(value);
      break;
    case 14:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.CampaignBudgetErrorEnum.CampaignBudgetError} */ (reader.readEnum());
      msg.setCampaignBudgetError(value);
      break;
    case 15:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.CampaignErrorEnum.CampaignError} */ (reader.readEnum());
      msg.setCampaignError(value);
      break;
    case 17:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.AuthenticationErrorEnum.AuthenticationError} */ (reader.readEnum());
      msg.setAuthenticationError(value);
      break;
    case 18:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.AdGroupCriterionErrorEnum.AdGroupCriterionError} */ (reader.readEnum());
      msg.setAdGroupCriterionError(value);
      break;
    case 19:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.AdCustomizerErrorEnum.AdCustomizerError} */ (reader.readEnum());
      msg.setAdCustomizerError(value);
      break;
    case 21:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.AdGroupAdErrorEnum.AdGroupAdError} */ (reader.readEnum());
      msg.setAdGroupAdError(value);
      break;
    case 24:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.AdSharingErrorEnum.AdSharingError} */ (reader.readEnum());
      msg.setAdSharingError(value);
      break;
    case 25:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.AdxErrorEnum.AdxError} */ (reader.readEnum());
      msg.setAdxError(value);
      break;
    case 26:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.BiddingErrorEnum.BiddingError} */ (reader.readEnum());
      msg.setBiddingError(value);
      break;
    case 29:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.CampaignCriterionErrorEnum.CampaignCriterionError} */ (reader.readEnum());
      msg.setCampaignCriterionError(value);
      break;
    case 31:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.CollectionSizeErrorEnum.CollectionSizeError} */ (reader.readEnum());
      msg.setCollectionSizeError(value);
      break;
    case 32:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.CriterionErrorEnum.CriterionError} */ (reader.readEnum());
      msg.setCriterionError(value);
      break;
    case 33:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.DateErrorEnum.DateError} */ (reader.readEnum());
      msg.setDateError(value);
      break;
    case 34:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.DateRangeErrorEnum.DateRangeError} */ (reader.readEnum());
      msg.setDateRangeError(value);
      break;
    case 35:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.DistinctErrorEnum.DistinctError} */ (reader.readEnum());
      msg.setDistinctError(value);
      break;
    case 36:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError} */ (reader.readEnum());
      msg.setFeedAttributeReferenceError(value);
      break;
    case 37:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.FunctionErrorEnum.FunctionError} */ (reader.readEnum());
      msg.setFunctionError(value);
      break;
    case 38:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.FunctionParsingErrorEnum.FunctionParsingError} */ (reader.readEnum());
      msg.setFunctionParsingError(value);
      break;
    case 39:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.IdErrorEnum.IdError} */ (reader.readEnum());
      msg.setIdError(value);
      break;
    case 40:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.ImageErrorEnum.ImageError} */ (reader.readEnum());
      msg.setImageError(value);
      break;
    case 42:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.MediaBundleErrorEnum.MediaBundleError} */ (reader.readEnum());
      msg.setMediaBundleError(value);
      break;
    case 43:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.MediaErrorEnum.MediaError} */ (reader.readEnum());
      msg.setMediaError(value);
      break;
    case 44:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.MultiplierErrorEnum.MultiplierError} */ (reader.readEnum());
      msg.setMultiplierError(value);
      break;
    case 45:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.NewResourceCreationErrorEnum.NewResourceCreationError} */ (reader.readEnum());
      msg.setNewResourceCreationError(value);
      break;
    case 46:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.NotEmptyErrorEnum.NotEmptyError} */ (reader.readEnum());
      msg.setNotEmptyError(value);
      break;
    case 47:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.NullErrorEnum.NullError} */ (reader.readEnum());
      msg.setNullError(value);
      break;
    case 48:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.OperatorErrorEnum.OperatorError} */ (reader.readEnum());
      msg.setOperatorError(value);
      break;
    case 49:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.RangeErrorEnum.RangeError} */ (reader.readEnum());
      msg.setRangeError(value);
      break;
    case 58:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.RecommendationErrorEnum.RecommendationError} */ (reader.readEnum());
      msg.setRecommendationError(value);
      break;
    case 51:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.RegionCodeErrorEnum.RegionCodeError} */ (reader.readEnum());
      msg.setRegionCodeError(value);
      break;
    case 52:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.SettingErrorEnum.SettingError} */ (reader.readEnum());
      msg.setSettingError(value);
      break;
    case 53:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.StringFormatErrorEnum.StringFormatError} */ (reader.readEnum());
      msg.setStringFormatError(value);
      break;
    case 54:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.StringLengthErrorEnum.StringLengthError} */ (reader.readEnum());
      msg.setStringLengthError(value);
      break;
    case 55:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.OperationAccessDeniedErrorEnum.OperationAccessDeniedError} */ (reader.readEnum());
      msg.setOperationAccessDeniedError(value);
      break;
    case 56:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError} */ (reader.readEnum());
      msg.setResourceAccessDeniedError(value);
      break;
    case 57:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError} */ (reader.readEnum());
      msg.setResourceCountLimitExceededError(value);
      break;
    case 59:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.AdGroupBidModifierErrorEnum.AdGroupBidModifierError} */ (reader.readEnum());
      msg.setAdGroupBidModifierError(value);
      break;
    case 60:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.ContextErrorEnum.ContextError} */ (reader.readEnum());
      msg.setContextError(value);
      break;
    case 61:
      var value = /** @type {!proto.google.ads.googleads.v0.errors.FieldErrorEnum.FieldError} */ (reader.readEnum());
      msg.setFieldError(value);
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
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.errors.ErrorCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.errors.ErrorCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.ErrorCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.google.ads.googleads.v0.errors.RequestErrorEnum.RequestError} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.BiddingStrategyErrorEnum.BiddingStrategyError} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.UrlFieldErrorEnum.UrlFieldError} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.ListOperationErrorEnum.ListOperationError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.QueryErrorEnum.QueryError} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.MutateErrorEnum.MutateError} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.FieldMaskErrorEnum.FieldMaskError} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.AuthorizationErrorEnum.AuthorizationError} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.InternalErrorEnum.InternalError} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.QuotaErrorEnum.QuotaError} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.AdErrorEnum.AdError} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.AdGroupErrorEnum.AdGroupError} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.CampaignBudgetErrorEnum.CampaignBudgetError} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.CampaignErrorEnum.CampaignError} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.AuthenticationErrorEnum.AuthenticationError} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.AdGroupCriterionErrorEnum.AdGroupCriterionError} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeEnum(
      18,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.AdCustomizerErrorEnum.AdCustomizerError} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.AdGroupAdErrorEnum.AdGroupAdError} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.AdSharingErrorEnum.AdSharingError} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeEnum(
      24,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.AdxErrorEnum.AdxError} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeEnum(
      25,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.BiddingErrorEnum.BiddingError} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.CampaignCriterionErrorEnum.CampaignCriterionError} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeEnum(
      29,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.CollectionSizeErrorEnum.CollectionSizeError} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeEnum(
      31,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.CriterionErrorEnum.CriterionError} */ (jspb.Message.getField(message, 32));
  if (f != null) {
    writer.writeEnum(
      32,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.DateErrorEnum.DateError} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeEnum(
      33,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.DateRangeErrorEnum.DateRangeError} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeEnum(
      34,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.DistinctErrorEnum.DistinctError} */ (jspb.Message.getField(message, 35));
  if (f != null) {
    writer.writeEnum(
      35,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError} */ (jspb.Message.getField(message, 36));
  if (f != null) {
    writer.writeEnum(
      36,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.FunctionErrorEnum.FunctionError} */ (jspb.Message.getField(message, 37));
  if (f != null) {
    writer.writeEnum(
      37,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.FunctionParsingErrorEnum.FunctionParsingError} */ (jspb.Message.getField(message, 38));
  if (f != null) {
    writer.writeEnum(
      38,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.IdErrorEnum.IdError} */ (jspb.Message.getField(message, 39));
  if (f != null) {
    writer.writeEnum(
      39,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.ImageErrorEnum.ImageError} */ (jspb.Message.getField(message, 40));
  if (f != null) {
    writer.writeEnum(
      40,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.MediaBundleErrorEnum.MediaBundleError} */ (jspb.Message.getField(message, 42));
  if (f != null) {
    writer.writeEnum(
      42,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.MediaErrorEnum.MediaError} */ (jspb.Message.getField(message, 43));
  if (f != null) {
    writer.writeEnum(
      43,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.MultiplierErrorEnum.MultiplierError} */ (jspb.Message.getField(message, 44));
  if (f != null) {
    writer.writeEnum(
      44,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.NewResourceCreationErrorEnum.NewResourceCreationError} */ (jspb.Message.getField(message, 45));
  if (f != null) {
    writer.writeEnum(
      45,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.NotEmptyErrorEnum.NotEmptyError} */ (jspb.Message.getField(message, 46));
  if (f != null) {
    writer.writeEnum(
      46,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.NullErrorEnum.NullError} */ (jspb.Message.getField(message, 47));
  if (f != null) {
    writer.writeEnum(
      47,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.OperatorErrorEnum.OperatorError} */ (jspb.Message.getField(message, 48));
  if (f != null) {
    writer.writeEnum(
      48,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.RangeErrorEnum.RangeError} */ (jspb.Message.getField(message, 49));
  if (f != null) {
    writer.writeEnum(
      49,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.RecommendationErrorEnum.RecommendationError} */ (jspb.Message.getField(message, 58));
  if (f != null) {
    writer.writeEnum(
      58,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.RegionCodeErrorEnum.RegionCodeError} */ (jspb.Message.getField(message, 51));
  if (f != null) {
    writer.writeEnum(
      51,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.SettingErrorEnum.SettingError} */ (jspb.Message.getField(message, 52));
  if (f != null) {
    writer.writeEnum(
      52,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.StringFormatErrorEnum.StringFormatError} */ (jspb.Message.getField(message, 53));
  if (f != null) {
    writer.writeEnum(
      53,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.StringLengthErrorEnum.StringLengthError} */ (jspb.Message.getField(message, 54));
  if (f != null) {
    writer.writeEnum(
      54,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.OperationAccessDeniedErrorEnum.OperationAccessDeniedError} */ (jspb.Message.getField(message, 55));
  if (f != null) {
    writer.writeEnum(
      55,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError} */ (jspb.Message.getField(message, 56));
  if (f != null) {
    writer.writeEnum(
      56,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError} */ (jspb.Message.getField(message, 57));
  if (f != null) {
    writer.writeEnum(
      57,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.AdGroupBidModifierErrorEnum.AdGroupBidModifierError} */ (jspb.Message.getField(message, 59));
  if (f != null) {
    writer.writeEnum(
      59,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.ContextErrorEnum.ContextError} */ (jspb.Message.getField(message, 60));
  if (f != null) {
    writer.writeEnum(
      60,
      f
    );
  }
  f = /** @type {!proto.google.ads.googleads.v0.errors.FieldErrorEnum.FieldError} */ (jspb.Message.getField(message, 61));
  if (f != null) {
    writer.writeEnum(
      61,
      f
    );
  }
};


/**
 * optional RequestErrorEnum.RequestError request_error = 1;
 * @return {!proto.google.ads.googleads.v0.errors.RequestErrorEnum.RequestError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getRequestError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.RequestErrorEnum.RequestError} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.RequestErrorEnum.RequestError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setRequestError = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearRequestError = function() {
  return jspb.Message.setOneofField(this, 1, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasRequestError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BiddingStrategyErrorEnum.BiddingStrategyError bidding_strategy_error = 2;
 * @return {!proto.google.ads.googleads.v0.errors.BiddingStrategyErrorEnum.BiddingStrategyError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getBiddingStrategyError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.BiddingStrategyErrorEnum.BiddingStrategyError} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.BiddingStrategyErrorEnum.BiddingStrategyError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setBiddingStrategyError = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearBiddingStrategyError = function() {
  return jspb.Message.setOneofField(this, 2, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasBiddingStrategyError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UrlFieldErrorEnum.UrlFieldError url_field_error = 3;
 * @return {!proto.google.ads.googleads.v0.errors.UrlFieldErrorEnum.UrlFieldError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getUrlFieldError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.UrlFieldErrorEnum.UrlFieldError} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.UrlFieldErrorEnum.UrlFieldError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setUrlFieldError = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearUrlFieldError = function() {
  return jspb.Message.setOneofField(this, 3, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasUrlFieldError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ListOperationErrorEnum.ListOperationError list_operation_error = 4;
 * @return {!proto.google.ads.googleads.v0.errors.ListOperationErrorEnum.ListOperationError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getListOperationError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.ListOperationErrorEnum.ListOperationError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.ListOperationErrorEnum.ListOperationError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setListOperationError = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearListOperationError = function() {
  return jspb.Message.setOneofField(this, 4, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasListOperationError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional QueryErrorEnum.QueryError query_error = 5;
 * @return {!proto.google.ads.googleads.v0.errors.QueryErrorEnum.QueryError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getQueryError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.QueryErrorEnum.QueryError} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.QueryErrorEnum.QueryError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setQueryError = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearQueryError = function() {
  return jspb.Message.setOneofField(this, 5, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasQueryError = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MutateErrorEnum.MutateError mutate_error = 7;
 * @return {!proto.google.ads.googleads.v0.errors.MutateErrorEnum.MutateError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getMutateError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.MutateErrorEnum.MutateError} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.MutateErrorEnum.MutateError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setMutateError = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearMutateError = function() {
  return jspb.Message.setOneofField(this, 7, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasMutateError = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional FieldMaskErrorEnum.FieldMaskError field_mask_error = 8;
 * @return {!proto.google.ads.googleads.v0.errors.FieldMaskErrorEnum.FieldMaskError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getFieldMaskError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.FieldMaskErrorEnum.FieldMaskError} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.FieldMaskErrorEnum.FieldMaskError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setFieldMaskError = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearFieldMaskError = function() {
  return jspb.Message.setOneofField(this, 8, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasFieldMaskError = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AuthorizationErrorEnum.AuthorizationError authorization_error = 9;
 * @return {!proto.google.ads.googleads.v0.errors.AuthorizationErrorEnum.AuthorizationError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getAuthorizationError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.AuthorizationErrorEnum.AuthorizationError} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.AuthorizationErrorEnum.AuthorizationError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setAuthorizationError = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearAuthorizationError = function() {
  return jspb.Message.setOneofField(this, 9, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasAuthorizationError = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional InternalErrorEnum.InternalError internal_error = 10;
 * @return {!proto.google.ads.googleads.v0.errors.InternalErrorEnum.InternalError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getInternalError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.InternalErrorEnum.InternalError} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.InternalErrorEnum.InternalError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setInternalError = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearInternalError = function() {
  return jspb.Message.setOneofField(this, 10, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasInternalError = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional QuotaErrorEnum.QuotaError quota_error = 11;
 * @return {!proto.google.ads.googleads.v0.errors.QuotaErrorEnum.QuotaError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getQuotaError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.QuotaErrorEnum.QuotaError} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.QuotaErrorEnum.QuotaError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setQuotaError = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearQuotaError = function() {
  return jspb.Message.setOneofField(this, 11, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasQuotaError = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional AdErrorEnum.AdError ad_error = 12;
 * @return {!proto.google.ads.googleads.v0.errors.AdErrorEnum.AdError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getAdError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.AdErrorEnum.AdError} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.AdErrorEnum.AdError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setAdError = function(value) {
  return jspb.Message.setOneofField(this, 12, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearAdError = function() {
  return jspb.Message.setOneofField(this, 12, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasAdError = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional AdGroupErrorEnum.AdGroupError ad_group_error = 13;
 * @return {!proto.google.ads.googleads.v0.errors.AdGroupErrorEnum.AdGroupError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getAdGroupError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.AdGroupErrorEnum.AdGroupError} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.AdGroupErrorEnum.AdGroupError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setAdGroupError = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearAdGroupError = function() {
  return jspb.Message.setOneofField(this, 13, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasAdGroupError = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CampaignBudgetErrorEnum.CampaignBudgetError campaign_budget_error = 14;
 * @return {!proto.google.ads.googleads.v0.errors.CampaignBudgetErrorEnum.CampaignBudgetError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getCampaignBudgetError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.CampaignBudgetErrorEnum.CampaignBudgetError} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.CampaignBudgetErrorEnum.CampaignBudgetError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setCampaignBudgetError = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearCampaignBudgetError = function() {
  return jspb.Message.setOneofField(this, 14, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasCampaignBudgetError = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CampaignErrorEnum.CampaignError campaign_error = 15;
 * @return {!proto.google.ads.googleads.v0.errors.CampaignErrorEnum.CampaignError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getCampaignError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.CampaignErrorEnum.CampaignError} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.CampaignErrorEnum.CampaignError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setCampaignError = function(value) {
  return jspb.Message.setOneofField(this, 15, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearCampaignError = function() {
  return jspb.Message.setOneofField(this, 15, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasCampaignError = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional AuthenticationErrorEnum.AuthenticationError authentication_error = 17;
 * @return {!proto.google.ads.googleads.v0.errors.AuthenticationErrorEnum.AuthenticationError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getAuthenticationError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.AuthenticationErrorEnum.AuthenticationError} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.AuthenticationErrorEnum.AuthenticationError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setAuthenticationError = function(value) {
  return jspb.Message.setOneofField(this, 17, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearAuthenticationError = function() {
  return jspb.Message.setOneofField(this, 17, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasAuthenticationError = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional AdGroupCriterionErrorEnum.AdGroupCriterionError ad_group_criterion_error = 18;
 * @return {!proto.google.ads.googleads.v0.errors.AdGroupCriterionErrorEnum.AdGroupCriterionError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getAdGroupCriterionError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.AdGroupCriterionErrorEnum.AdGroupCriterionError} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.AdGroupCriterionErrorEnum.AdGroupCriterionError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setAdGroupCriterionError = function(value) {
  return jspb.Message.setOneofField(this, 18, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearAdGroupCriterionError = function() {
  return jspb.Message.setOneofField(this, 18, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasAdGroupCriterionError = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional AdCustomizerErrorEnum.AdCustomizerError ad_customizer_error = 19;
 * @return {!proto.google.ads.googleads.v0.errors.AdCustomizerErrorEnum.AdCustomizerError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getAdCustomizerError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.AdCustomizerErrorEnum.AdCustomizerError} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.AdCustomizerErrorEnum.AdCustomizerError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setAdCustomizerError = function(value) {
  return jspb.Message.setOneofField(this, 19, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearAdCustomizerError = function() {
  return jspb.Message.setOneofField(this, 19, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasAdCustomizerError = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional AdGroupAdErrorEnum.AdGroupAdError ad_group_ad_error = 21;
 * @return {!proto.google.ads.googleads.v0.errors.AdGroupAdErrorEnum.AdGroupAdError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getAdGroupAdError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.AdGroupAdErrorEnum.AdGroupAdError} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.AdGroupAdErrorEnum.AdGroupAdError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setAdGroupAdError = function(value) {
  return jspb.Message.setOneofField(this, 21, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearAdGroupAdError = function() {
  return jspb.Message.setOneofField(this, 21, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasAdGroupAdError = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional AdSharingErrorEnum.AdSharingError ad_sharing_error = 24;
 * @return {!proto.google.ads.googleads.v0.errors.AdSharingErrorEnum.AdSharingError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getAdSharingError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.AdSharingErrorEnum.AdSharingError} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.AdSharingErrorEnum.AdSharingError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setAdSharingError = function(value) {
  return jspb.Message.setOneofField(this, 24, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearAdSharingError = function() {
  return jspb.Message.setOneofField(this, 24, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasAdSharingError = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional AdxErrorEnum.AdxError adx_error = 25;
 * @return {!proto.google.ads.googleads.v0.errors.AdxErrorEnum.AdxError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getAdxError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.AdxErrorEnum.AdxError} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.AdxErrorEnum.AdxError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setAdxError = function(value) {
  return jspb.Message.setOneofField(this, 25, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearAdxError = function() {
  return jspb.Message.setOneofField(this, 25, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasAdxError = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional BiddingErrorEnum.BiddingError bidding_error = 26;
 * @return {!proto.google.ads.googleads.v0.errors.BiddingErrorEnum.BiddingError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getBiddingError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.BiddingErrorEnum.BiddingError} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.BiddingErrorEnum.BiddingError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setBiddingError = function(value) {
  return jspb.Message.setOneofField(this, 26, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearBiddingError = function() {
  return jspb.Message.setOneofField(this, 26, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasBiddingError = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional CampaignCriterionErrorEnum.CampaignCriterionError campaign_criterion_error = 29;
 * @return {!proto.google.ads.googleads.v0.errors.CampaignCriterionErrorEnum.CampaignCriterionError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getCampaignCriterionError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.CampaignCriterionErrorEnum.CampaignCriterionError} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.CampaignCriterionErrorEnum.CampaignCriterionError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setCampaignCriterionError = function(value) {
  return jspb.Message.setOneofField(this, 29, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearCampaignCriterionError = function() {
  return jspb.Message.setOneofField(this, 29, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasCampaignCriterionError = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional CollectionSizeErrorEnum.CollectionSizeError collection_size_error = 31;
 * @return {!proto.google.ads.googleads.v0.errors.CollectionSizeErrorEnum.CollectionSizeError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getCollectionSizeError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.CollectionSizeErrorEnum.CollectionSizeError} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.CollectionSizeErrorEnum.CollectionSizeError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setCollectionSizeError = function(value) {
  return jspb.Message.setOneofField(this, 31, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearCollectionSizeError = function() {
  return jspb.Message.setOneofField(this, 31, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasCollectionSizeError = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional CriterionErrorEnum.CriterionError criterion_error = 32;
 * @return {!proto.google.ads.googleads.v0.errors.CriterionErrorEnum.CriterionError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getCriterionError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.CriterionErrorEnum.CriterionError} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.CriterionErrorEnum.CriterionError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setCriterionError = function(value) {
  return jspb.Message.setOneofField(this, 32, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearCriterionError = function() {
  return jspb.Message.setOneofField(this, 32, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasCriterionError = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional DateErrorEnum.DateError date_error = 33;
 * @return {!proto.google.ads.googleads.v0.errors.DateErrorEnum.DateError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getDateError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.DateErrorEnum.DateError} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.DateErrorEnum.DateError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setDateError = function(value) {
  return jspb.Message.setOneofField(this, 33, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearDateError = function() {
  return jspb.Message.setOneofField(this, 33, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasDateError = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional DateRangeErrorEnum.DateRangeError date_range_error = 34;
 * @return {!proto.google.ads.googleads.v0.errors.DateRangeErrorEnum.DateRangeError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getDateRangeError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.DateRangeErrorEnum.DateRangeError} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.DateRangeErrorEnum.DateRangeError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setDateRangeError = function(value) {
  return jspb.Message.setOneofField(this, 34, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearDateRangeError = function() {
  return jspb.Message.setOneofField(this, 34, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasDateRangeError = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional DistinctErrorEnum.DistinctError distinct_error = 35;
 * @return {!proto.google.ads.googleads.v0.errors.DistinctErrorEnum.DistinctError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getDistinctError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.DistinctErrorEnum.DistinctError} */ (jspb.Message.getFieldWithDefault(this, 35, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.DistinctErrorEnum.DistinctError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setDistinctError = function(value) {
  return jspb.Message.setOneofField(this, 35, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearDistinctError = function() {
  return jspb.Message.setOneofField(this, 35, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasDistinctError = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError feed_attribute_reference_error = 36;
 * @return {!proto.google.ads.googleads.v0.errors.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getFeedAttributeReferenceError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setFeedAttributeReferenceError = function(value) {
  return jspb.Message.setOneofField(this, 36, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearFeedAttributeReferenceError = function() {
  return jspb.Message.setOneofField(this, 36, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasFeedAttributeReferenceError = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional FunctionErrorEnum.FunctionError function_error = 37;
 * @return {!proto.google.ads.googleads.v0.errors.FunctionErrorEnum.FunctionError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getFunctionError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.FunctionErrorEnum.FunctionError} */ (jspb.Message.getFieldWithDefault(this, 37, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.FunctionErrorEnum.FunctionError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setFunctionError = function(value) {
  return jspb.Message.setOneofField(this, 37, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearFunctionError = function() {
  return jspb.Message.setOneofField(this, 37, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasFunctionError = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional FunctionParsingErrorEnum.FunctionParsingError function_parsing_error = 38;
 * @return {!proto.google.ads.googleads.v0.errors.FunctionParsingErrorEnum.FunctionParsingError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getFunctionParsingError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.FunctionParsingErrorEnum.FunctionParsingError} */ (jspb.Message.getFieldWithDefault(this, 38, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.FunctionParsingErrorEnum.FunctionParsingError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setFunctionParsingError = function(value) {
  return jspb.Message.setOneofField(this, 38, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearFunctionParsingError = function() {
  return jspb.Message.setOneofField(this, 38, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasFunctionParsingError = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional IdErrorEnum.IdError id_error = 39;
 * @return {!proto.google.ads.googleads.v0.errors.IdErrorEnum.IdError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getIdError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.IdErrorEnum.IdError} */ (jspb.Message.getFieldWithDefault(this, 39, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.IdErrorEnum.IdError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setIdError = function(value) {
  return jspb.Message.setOneofField(this, 39, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearIdError = function() {
  return jspb.Message.setOneofField(this, 39, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasIdError = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional ImageErrorEnum.ImageError image_error = 40;
 * @return {!proto.google.ads.googleads.v0.errors.ImageErrorEnum.ImageError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getImageError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.ImageErrorEnum.ImageError} */ (jspb.Message.getFieldWithDefault(this, 40, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.ImageErrorEnum.ImageError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setImageError = function(value) {
  return jspb.Message.setOneofField(this, 40, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearImageError = function() {
  return jspb.Message.setOneofField(this, 40, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasImageError = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional MediaBundleErrorEnum.MediaBundleError media_bundle_error = 42;
 * @return {!proto.google.ads.googleads.v0.errors.MediaBundleErrorEnum.MediaBundleError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getMediaBundleError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.MediaBundleErrorEnum.MediaBundleError} */ (jspb.Message.getFieldWithDefault(this, 42, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.MediaBundleErrorEnum.MediaBundleError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setMediaBundleError = function(value) {
  return jspb.Message.setOneofField(this, 42, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearMediaBundleError = function() {
  return jspb.Message.setOneofField(this, 42, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasMediaBundleError = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional MediaErrorEnum.MediaError media_error = 43;
 * @return {!proto.google.ads.googleads.v0.errors.MediaErrorEnum.MediaError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getMediaError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.MediaErrorEnum.MediaError} */ (jspb.Message.getFieldWithDefault(this, 43, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.MediaErrorEnum.MediaError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setMediaError = function(value) {
  return jspb.Message.setOneofField(this, 43, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearMediaError = function() {
  return jspb.Message.setOneofField(this, 43, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasMediaError = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional MultiplierErrorEnum.MultiplierError multiplier_error = 44;
 * @return {!proto.google.ads.googleads.v0.errors.MultiplierErrorEnum.MultiplierError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getMultiplierError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.MultiplierErrorEnum.MultiplierError} */ (jspb.Message.getFieldWithDefault(this, 44, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.MultiplierErrorEnum.MultiplierError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setMultiplierError = function(value) {
  return jspb.Message.setOneofField(this, 44, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearMultiplierError = function() {
  return jspb.Message.setOneofField(this, 44, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasMultiplierError = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional NewResourceCreationErrorEnum.NewResourceCreationError new_resource_creation_error = 45;
 * @return {!proto.google.ads.googleads.v0.errors.NewResourceCreationErrorEnum.NewResourceCreationError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getNewResourceCreationError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.NewResourceCreationErrorEnum.NewResourceCreationError} */ (jspb.Message.getFieldWithDefault(this, 45, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.NewResourceCreationErrorEnum.NewResourceCreationError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setNewResourceCreationError = function(value) {
  return jspb.Message.setOneofField(this, 45, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearNewResourceCreationError = function() {
  return jspb.Message.setOneofField(this, 45, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasNewResourceCreationError = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional NotEmptyErrorEnum.NotEmptyError not_empty_error = 46;
 * @return {!proto.google.ads.googleads.v0.errors.NotEmptyErrorEnum.NotEmptyError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getNotEmptyError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.NotEmptyErrorEnum.NotEmptyError} */ (jspb.Message.getFieldWithDefault(this, 46, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.NotEmptyErrorEnum.NotEmptyError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setNotEmptyError = function(value) {
  return jspb.Message.setOneofField(this, 46, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearNotEmptyError = function() {
  return jspb.Message.setOneofField(this, 46, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasNotEmptyError = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional NullErrorEnum.NullError null_error = 47;
 * @return {!proto.google.ads.googleads.v0.errors.NullErrorEnum.NullError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getNullError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.NullErrorEnum.NullError} */ (jspb.Message.getFieldWithDefault(this, 47, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.NullErrorEnum.NullError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setNullError = function(value) {
  return jspb.Message.setOneofField(this, 47, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearNullError = function() {
  return jspb.Message.setOneofField(this, 47, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasNullError = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional OperatorErrorEnum.OperatorError operator_error = 48;
 * @return {!proto.google.ads.googleads.v0.errors.OperatorErrorEnum.OperatorError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getOperatorError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.OperatorErrorEnum.OperatorError} */ (jspb.Message.getFieldWithDefault(this, 48, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.OperatorErrorEnum.OperatorError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setOperatorError = function(value) {
  return jspb.Message.setOneofField(this, 48, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearOperatorError = function() {
  return jspb.Message.setOneofField(this, 48, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasOperatorError = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional RangeErrorEnum.RangeError range_error = 49;
 * @return {!proto.google.ads.googleads.v0.errors.RangeErrorEnum.RangeError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getRangeError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.RangeErrorEnum.RangeError} */ (jspb.Message.getFieldWithDefault(this, 49, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.RangeErrorEnum.RangeError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setRangeError = function(value) {
  return jspb.Message.setOneofField(this, 49, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearRangeError = function() {
  return jspb.Message.setOneofField(this, 49, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasRangeError = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional RecommendationErrorEnum.RecommendationError recommendation_error = 58;
 * @return {!proto.google.ads.googleads.v0.errors.RecommendationErrorEnum.RecommendationError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getRecommendationError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.RecommendationErrorEnum.RecommendationError} */ (jspb.Message.getFieldWithDefault(this, 58, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.RecommendationErrorEnum.RecommendationError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setRecommendationError = function(value) {
  return jspb.Message.setOneofField(this, 58, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearRecommendationError = function() {
  return jspb.Message.setOneofField(this, 58, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasRecommendationError = function() {
  return jspb.Message.getField(this, 58) != null;
};


/**
 * optional RegionCodeErrorEnum.RegionCodeError region_code_error = 51;
 * @return {!proto.google.ads.googleads.v0.errors.RegionCodeErrorEnum.RegionCodeError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getRegionCodeError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.RegionCodeErrorEnum.RegionCodeError} */ (jspb.Message.getFieldWithDefault(this, 51, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.RegionCodeErrorEnum.RegionCodeError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setRegionCodeError = function(value) {
  return jspb.Message.setOneofField(this, 51, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearRegionCodeError = function() {
  return jspb.Message.setOneofField(this, 51, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasRegionCodeError = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional SettingErrorEnum.SettingError setting_error = 52;
 * @return {!proto.google.ads.googleads.v0.errors.SettingErrorEnum.SettingError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getSettingError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.SettingErrorEnum.SettingError} */ (jspb.Message.getFieldWithDefault(this, 52, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.SettingErrorEnum.SettingError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setSettingError = function(value) {
  return jspb.Message.setOneofField(this, 52, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearSettingError = function() {
  return jspb.Message.setOneofField(this, 52, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasSettingError = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional StringFormatErrorEnum.StringFormatError string_format_error = 53;
 * @return {!proto.google.ads.googleads.v0.errors.StringFormatErrorEnum.StringFormatError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getStringFormatError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.StringFormatErrorEnum.StringFormatError} */ (jspb.Message.getFieldWithDefault(this, 53, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.StringFormatErrorEnum.StringFormatError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setStringFormatError = function(value) {
  return jspb.Message.setOneofField(this, 53, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearStringFormatError = function() {
  return jspb.Message.setOneofField(this, 53, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasStringFormatError = function() {
  return jspb.Message.getField(this, 53) != null;
};


/**
 * optional StringLengthErrorEnum.StringLengthError string_length_error = 54;
 * @return {!proto.google.ads.googleads.v0.errors.StringLengthErrorEnum.StringLengthError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getStringLengthError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.StringLengthErrorEnum.StringLengthError} */ (jspb.Message.getFieldWithDefault(this, 54, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.StringLengthErrorEnum.StringLengthError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setStringLengthError = function(value) {
  return jspb.Message.setOneofField(this, 54, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearStringLengthError = function() {
  return jspb.Message.setOneofField(this, 54, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasStringLengthError = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional OperationAccessDeniedErrorEnum.OperationAccessDeniedError operation_access_denied_error = 55;
 * @return {!proto.google.ads.googleads.v0.errors.OperationAccessDeniedErrorEnum.OperationAccessDeniedError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getOperationAccessDeniedError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.OperationAccessDeniedErrorEnum.OperationAccessDeniedError} */ (jspb.Message.getFieldWithDefault(this, 55, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.OperationAccessDeniedErrorEnum.OperationAccessDeniedError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setOperationAccessDeniedError = function(value) {
  return jspb.Message.setOneofField(this, 55, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearOperationAccessDeniedError = function() {
  return jspb.Message.setOneofField(this, 55, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasOperationAccessDeniedError = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError resource_access_denied_error = 56;
 * @return {!proto.google.ads.googleads.v0.errors.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getResourceAccessDeniedError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError} */ (jspb.Message.getFieldWithDefault(this, 56, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setResourceAccessDeniedError = function(value) {
  return jspb.Message.setOneofField(this, 56, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearResourceAccessDeniedError = function() {
  return jspb.Message.setOneofField(this, 56, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasResourceAccessDeniedError = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError resource_count_limit_exceeded_error = 57;
 * @return {!proto.google.ads.googleads.v0.errors.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getResourceCountLimitExceededError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError} */ (jspb.Message.getFieldWithDefault(this, 57, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setResourceCountLimitExceededError = function(value) {
  return jspb.Message.setOneofField(this, 57, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearResourceCountLimitExceededError = function() {
  return jspb.Message.setOneofField(this, 57, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasResourceCountLimitExceededError = function() {
  return jspb.Message.getField(this, 57) != null;
};


/**
 * optional AdGroupBidModifierErrorEnum.AdGroupBidModifierError ad_group_bid_modifier_error = 59;
 * @return {!proto.google.ads.googleads.v0.errors.AdGroupBidModifierErrorEnum.AdGroupBidModifierError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getAdGroupBidModifierError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.AdGroupBidModifierErrorEnum.AdGroupBidModifierError} */ (jspb.Message.getFieldWithDefault(this, 59, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.AdGroupBidModifierErrorEnum.AdGroupBidModifierError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setAdGroupBidModifierError = function(value) {
  return jspb.Message.setOneofField(this, 59, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearAdGroupBidModifierError = function() {
  return jspb.Message.setOneofField(this, 59, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasAdGroupBidModifierError = function() {
  return jspb.Message.getField(this, 59) != null;
};


/**
 * optional ContextErrorEnum.ContextError context_error = 60;
 * @return {!proto.google.ads.googleads.v0.errors.ContextErrorEnum.ContextError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getContextError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.ContextErrorEnum.ContextError} */ (jspb.Message.getFieldWithDefault(this, 60, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.ContextErrorEnum.ContextError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setContextError = function(value) {
  return jspb.Message.setOneofField(this, 60, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearContextError = function() {
  return jspb.Message.setOneofField(this, 60, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasContextError = function() {
  return jspb.Message.getField(this, 60) != null;
};


/**
 * optional FieldErrorEnum.FieldError field_error = 61;
 * @return {!proto.google.ads.googleads.v0.errors.FieldErrorEnum.FieldError}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.getFieldError = function() {
  return /** @type {!proto.google.ads.googleads.v0.errors.FieldErrorEnum.FieldError} */ (jspb.Message.getFieldWithDefault(this, 61, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.FieldErrorEnum.FieldError} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.setFieldError = function(value) {
  return jspb.Message.setOneofField(this, 61, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorCode} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.clearFieldError = function() {
  return jspb.Message.setOneofField(this, 61, proto.google.ads.googleads.v0.errors.ErrorCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorCode.prototype.hasFieldError = function() {
  return jspb.Message.getField(this, 61) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.repeatedFields_ = [2];



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
proto.google.ads.googleads.v0.errors.ErrorLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.errors.ErrorLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.errors.ErrorLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationIndex: (f = msg.getOperationIndex()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    fieldPathElementsList: jspb.Message.toObjectList(msg.getFieldPathElementsList(),
    proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.errors.ErrorLocation;
  return proto.google.ads.googleads.v0.errors.ErrorLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.errors.ErrorLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setOperationIndex(value);
      break;
    case 2:
      var value = new proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement;
      reader.readMessage(value,proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.deserializeBinaryFromReader);
      msg.addFieldPathElements(value);
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
proto.google.ads.googleads.v0.errors.ErrorLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.errors.ErrorLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.errors.ErrorLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationIndex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getFieldPathElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.serializeBinaryToWriter
    );
  }
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
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    index: (f = msg.getIndex()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement;
  return proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldName(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setIndex(value);
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
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string field_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.prototype.getFieldName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.prototype.setFieldName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value index = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.prototype.getIndex = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement} returns this
*/
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.prototype.setIndex = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.prototype.clearIndex = function() {
  return this.setIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int64Value operation_index = 1;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.prototype.getOperationIndex = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation} returns this
*/
proto.google.ads.googleads.v0.errors.ErrorLocation.prototype.setOperationIndex = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.prototype.clearOperationIndex = function() {
  return this.setOperationIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.prototype.hasOperationIndex = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated FieldPathElement field_path_elements = 2;
 * @return {!Array<!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement>}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.prototype.getFieldPathElementsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement, 2));
};


/**
 * @param {!Array<!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement>} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation} returns this
*/
proto.google.ads.googleads.v0.errors.ErrorLocation.prototype.setFieldPathElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement}
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.prototype.addFieldPathElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v0.errors.ErrorLocation.FieldPathElement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorLocation} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorLocation.prototype.clearFieldPathElementsList = function() {
  return this.setFieldPathElementsList([]);
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
proto.google.ads.googleads.v0.errors.ErrorDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.errors.ErrorDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.errors.ErrorDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.ErrorDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    unpublishedErrorCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    policyViolationDetails: (f = msg.getPolicyViolationDetails()) && proto.google.ads.googleads.v0.errors.PolicyViolationDetails.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v0.errors.ErrorDetails}
 */
proto.google.ads.googleads.v0.errors.ErrorDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.errors.ErrorDetails;
  return proto.google.ads.googleads.v0.errors.ErrorDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.errors.ErrorDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorDetails}
 */
proto.google.ads.googleads.v0.errors.ErrorDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnpublishedErrorCode(value);
      break;
    case 2:
      var value = new proto.google.ads.googleads.v0.errors.PolicyViolationDetails;
      reader.readMessage(value,proto.google.ads.googleads.v0.errors.PolicyViolationDetails.deserializeBinaryFromReader);
      msg.setPolicyViolationDetails(value);
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
proto.google.ads.googleads.v0.errors.ErrorDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.errors.ErrorDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.errors.ErrorDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.ErrorDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnpublishedErrorCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPolicyViolationDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.ads.googleads.v0.errors.PolicyViolationDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional string unpublished_error_code = 1;
 * @return {string}
 */
proto.google.ads.googleads.v0.errors.ErrorDetails.prototype.getUnpublishedErrorCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorDetails} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorDetails.prototype.setUnpublishedErrorCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PolicyViolationDetails policy_violation_details = 2;
 * @return {?proto.google.ads.googleads.v0.errors.PolicyViolationDetails}
 */
proto.google.ads.googleads.v0.errors.ErrorDetails.prototype.getPolicyViolationDetails = function() {
  return /** @type{?proto.google.ads.googleads.v0.errors.PolicyViolationDetails} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v0.errors.PolicyViolationDetails, 2));
};


/**
 * @param {?proto.google.ads.googleads.v0.errors.PolicyViolationDetails|undefined} value
 * @return {!proto.google.ads.googleads.v0.errors.ErrorDetails} returns this
*/
proto.google.ads.googleads.v0.errors.ErrorDetails.prototype.setPolicyViolationDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.ErrorDetails} returns this
 */
proto.google.ads.googleads.v0.errors.ErrorDetails.prototype.clearPolicyViolationDetails = function() {
  return this.setPolicyViolationDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.ErrorDetails.prototype.hasPolicyViolationDetails = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.errors.PolicyViolationDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.errors.PolicyViolationDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    externalPolicyDescription: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: (f = msg.getKey()) && google_ads_googleads_v0_common_policy_pb.PolicyViolationKey.toObject(includeInstance, f),
    externalPolicyName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isExemptible: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.google.ads.googleads.v0.errors.PolicyViolationDetails}
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.errors.PolicyViolationDetails;
  return proto.google.ads.googleads.v0.errors.PolicyViolationDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.errors.PolicyViolationDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.errors.PolicyViolationDetails}
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalPolicyDescription(value);
      break;
    case 4:
      var value = new google_ads_googleads_v0_common_policy_pb.PolicyViolationKey;
      reader.readMessage(value,google_ads_googleads_v0_common_policy_pb.PolicyViolationKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalPolicyName(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExemptible(value);
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
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.errors.PolicyViolationDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.errors.PolicyViolationDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExternalPolicyDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_ads_googleads_v0_common_policy_pb.PolicyViolationKey.serializeBinaryToWriter
    );
  }
  f = message.getExternalPolicyName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsExemptible();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string external_policy_description = 2;
 * @return {string}
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.getExternalPolicyDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v0.errors.PolicyViolationDetails} returns this
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.setExternalPolicyDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.ads.googleads.v0.common.PolicyViolationKey key = 4;
 * @return {?proto.google.ads.googleads.v0.common.PolicyViolationKey}
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.getKey = function() {
  return /** @type{?proto.google.ads.googleads.v0.common.PolicyViolationKey} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v0_common_policy_pb.PolicyViolationKey, 4));
};


/**
 * @param {?proto.google.ads.googleads.v0.common.PolicyViolationKey|undefined} value
 * @return {!proto.google.ads.googleads.v0.errors.PolicyViolationDetails} returns this
*/
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.errors.PolicyViolationDetails} returns this
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.hasKey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string external_policy_name = 5;
 * @return {string}
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.getExternalPolicyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v0.errors.PolicyViolationDetails} returns this
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.setExternalPolicyName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_exemptible = 6;
 * @return {boolean}
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.getIsExemptible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.ads.googleads.v0.errors.PolicyViolationDetails} returns this
 */
proto.google.ads.googleads.v0.errors.PolicyViolationDetails.prototype.setIsExemptible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v0.errors);
