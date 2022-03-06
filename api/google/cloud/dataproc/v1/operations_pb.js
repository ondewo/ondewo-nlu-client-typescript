// source: google/cloud/dataproc/v1/operations.proto
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
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.cloud.dataproc.v1.ClusterOperationMetadata', null, global);
goog.exportSymbol('proto.google.cloud.dataproc.v1.ClusterOperationStatus', null, global);
goog.exportSymbol('proto.google.cloud.dataproc.v1.ClusterOperationStatus.State', null, global);
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
proto.google.cloud.dataproc.v1.ClusterOperationStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dataproc.v1.ClusterOperationStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dataproc.v1.ClusterOperationStatus.displayName = 'proto.google.cloud.dataproc.v1.ClusterOperationStatus';
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
proto.google.cloud.dataproc.v1.ClusterOperationMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dataproc.v1.ClusterOperationMetadata.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dataproc.v1.ClusterOperationMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dataproc.v1.ClusterOperationMetadata.displayName = 'proto.google.cloud.dataproc.v1.ClusterOperationMetadata';
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
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dataproc.v1.ClusterOperationStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dataproc.v1.ClusterOperationStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    innerState: jspb.Message.getFieldWithDefault(msg, 2, ""),
    details: jspb.Message.getFieldWithDefault(msg, 3, ""),
    stateStartTime: (f = msg.getStateStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationStatus}
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dataproc.v1.ClusterOperationStatus;
  return proto.google.cloud.dataproc.v1.ClusterOperationStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dataproc.v1.ClusterOperationStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationStatus}
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.cloud.dataproc.v1.ClusterOperationStatus.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInnerState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStateStartTime(value);
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
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dataproc.v1.ClusterOperationStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dataproc.v1.ClusterOperationStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInnerState();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStateStartTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.State = {
  UNKNOWN: 0,
  PENDING: 1,
  RUNNING: 2,
  DONE: 3
};

/**
 * optional State state = 1;
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationStatus.State}
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.getState = function() {
  return /** @type {!proto.google.cloud.dataproc.v1.ClusterOperationStatus.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.cloud.dataproc.v1.ClusterOperationStatus.State} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationStatus} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string inner_state = 2;
 * @return {string}
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.getInnerState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationStatus} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.setInnerState = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationStatus} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp state_start_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.getStateStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationStatus} returns this
*/
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.setStateStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationStatus} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.clearStateStartTime = function() {
  return this.setStateStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dataproc.v1.ClusterOperationStatus.prototype.hasStateStartTime = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.repeatedFields_ = [10,14];



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
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dataproc.v1.ClusterOperationMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    clusterUuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    status: (f = msg.getStatus()) && proto.google.cloud.dataproc.v1.ClusterOperationStatus.toObject(includeInstance, f),
    statusHistoryList: jspb.Message.toObjectList(msg.getStatusHistoryList(),
    proto.google.cloud.dataproc.v1.ClusterOperationStatus.toObject, includeInstance),
    operationType: jspb.Message.getFieldWithDefault(msg, 11, ""),
    description: jspb.Message.getFieldWithDefault(msg, 12, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    warningsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f
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
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dataproc.v1.ClusterOperationMetadata;
  return proto.google.cloud.dataproc.v1.ClusterOperationMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterUuid(value);
      break;
    case 9:
      var value = new proto.google.cloud.dataproc.v1.ClusterOperationStatus;
      reader.readMessage(value,proto.google.cloud.dataproc.v1.ClusterOperationStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 10:
      var value = new proto.google.cloud.dataproc.v1.ClusterOperationStatus;
      reader.readMessage(value,proto.google.cloud.dataproc.v1.ClusterOperationStatus.deserializeBinaryFromReader);
      msg.addStatusHistory(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationType(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 13:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addWarnings(value);
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
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dataproc.v1.ClusterOperationMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getClusterUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.cloud.dataproc.v1.ClusterOperationStatus.serializeBinaryToWriter
    );
  }
  f = message.getStatusHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.google.cloud.dataproc.v1.ClusterOperationStatus.serializeBinaryToWriter
    );
  }
  f = message.getOperationType();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getWarningsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
};


/**
 * optional string cluster_name = 7;
 * @return {string}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string cluster_uuid = 8;
 * @return {string}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.getClusterUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.setClusterUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional ClusterOperationStatus status = 9;
 * @return {?proto.google.cloud.dataproc.v1.ClusterOperationStatus}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.getStatus = function() {
  return /** @type{?proto.google.cloud.dataproc.v1.ClusterOperationStatus} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dataproc.v1.ClusterOperationStatus, 9));
};


/**
 * @param {?proto.google.cloud.dataproc.v1.ClusterOperationStatus|undefined} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
*/
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated ClusterOperationStatus status_history = 10;
 * @return {!Array<!proto.google.cloud.dataproc.v1.ClusterOperationStatus>}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.getStatusHistoryList = function() {
  return /** @type{!Array<!proto.google.cloud.dataproc.v1.ClusterOperationStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dataproc.v1.ClusterOperationStatus, 10));
};


/**
 * @param {!Array<!proto.google.cloud.dataproc.v1.ClusterOperationStatus>} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
*/
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.setStatusHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.cloud.dataproc.v1.ClusterOperationStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationStatus}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.addStatusHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.cloud.dataproc.v1.ClusterOperationStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.clearStatusHistoryList = function() {
  return this.setStatusHistoryList([]);
};


/**
 * optional string operation_type = 11;
 * @return {string}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.getOperationType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.setOperationType = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string description = 12;
 * @return {string}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * map<string, string> labels = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * repeated string warnings = 14;
 * @return {!Array<string>}
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.getWarningsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.setWarningsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.addWarnings = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.cloud.dataproc.v1.ClusterOperationMetadata} returns this
 */
proto.google.cloud.dataproc.v1.ClusterOperationMetadata.prototype.clearWarningsList = function() {
  return this.setWarningsList([]);
};


goog.object.extend(exports, proto.google.cloud.dataproc.v1);
