// source: google/cloud/dialogflow/v2beta1/audio_config.proto
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
goog.exportSymbol('proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2beta1.OutputAudioEncoding', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2beta1.SsmlVoiceGender', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams', null, global);
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
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.displayName = 'proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams';
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
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.displayName = 'proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig';
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
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.displayName = 'proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig';
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
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ssmlGender: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams}
 */
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams;
  return proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams}
 */
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.google.cloud.dialogflow.v2beta1.SsmlVoiceGender} */ (reader.readEnum());
      msg.setSsmlGender(value);
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
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSsmlGender();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams} returns this
 */
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SsmlVoiceGender ssml_gender = 2;
 * @return {!proto.google.cloud.dialogflow.v2beta1.SsmlVoiceGender}
 */
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.prototype.getSsmlGender = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2beta1.SsmlVoiceGender} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.SsmlVoiceGender} value
 * @return {!proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams} returns this
 */
proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.prototype.setSsmlGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.repeatedFields_ = [5];



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
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    speakingRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    pitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    volumeGainDb: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    effectsProfileIdList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    voice: (f = msg.getVoice()) && proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig}
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig;
  return proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig}
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpeakingRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPitch(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeGainDb(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addEffectsProfileId(value);
      break;
    case 4:
      var value = new proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.deserializeBinaryFromReader);
      msg.setVoice(value);
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
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeakingRate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getPitch();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getVolumeGainDb();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getEffectsProfileIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getVoice();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional double speaking_rate = 1;
 * @return {number}
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.getSpeakingRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} returns this
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.setSpeakingRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double pitch = 2;
 * @return {number}
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.getPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} returns this
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.setPitch = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double volume_gain_db = 3;
 * @return {number}
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.getVolumeGainDb = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} returns this
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.setVolumeGainDb = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated string effects_profile_id = 5;
 * @return {!Array<string>}
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.getEffectsProfileIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} returns this
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.setEffectsProfileIdList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} returns this
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.addEffectsProfileId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} returns this
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.clearEffectsProfileIdList = function() {
  return this.setEffectsProfileIdList([]);
};


/**
 * optional VoiceSelectionParams voice = 4;
 * @return {?proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams}
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.getVoice = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams, 4));
};


/**
 * @param {?proto.google.cloud.dialogflow.v2beta1.VoiceSelectionParams|undefined} value
 * @return {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} returns this
*/
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.setVoice = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} returns this
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.clearVoice = function() {
  return this.setVoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.prototype.hasVoice = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    audioEncoding: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sampleRateHertz: jspb.Message.getFieldWithDefault(msg, 2, 0),
    synthesizeSpeechConfig: (f = msg.getSynthesizeSpeechConfig()) && proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig}
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig;
  return proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig}
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.cloud.dialogflow.v2beta1.OutputAudioEncoding} */ (reader.readEnum());
      msg.setAudioEncoding(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSampleRateHertz(value);
      break;
    case 3:
      var value = new proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.deserializeBinaryFromReader);
      msg.setSynthesizeSpeechConfig(value);
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
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioEncoding();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSampleRateHertz();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSynthesizeSpeechConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional OutputAudioEncoding audio_encoding = 1;
 * @return {!proto.google.cloud.dialogflow.v2beta1.OutputAudioEncoding}
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.prototype.getAudioEncoding = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2beta1.OutputAudioEncoding} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.OutputAudioEncoding} value
 * @return {!proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig} returns this
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.prototype.setAudioEncoding = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 sample_rate_hertz = 2;
 * @return {number}
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.prototype.getSampleRateHertz = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig} returns this
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.prototype.setSampleRateHertz = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional SynthesizeSpeechConfig synthesize_speech_config = 3;
 * @return {?proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig}
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.prototype.getSynthesizeSpeechConfig = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig, 3));
};


/**
 * @param {?proto.google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig|undefined} value
 * @return {!proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig} returns this
*/
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.prototype.setSynthesizeSpeechConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig} returns this
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.prototype.clearSynthesizeSpeechConfig = function() {
  return this.setSynthesizeSpeechConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioConfig.prototype.hasSynthesizeSpeechConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2beta1.SsmlVoiceGender = {
  SSML_VOICE_GENDER_UNSPECIFIED: 0,
  SSML_VOICE_GENDER_MALE: 1,
  SSML_VOICE_GENDER_FEMALE: 2,
  SSML_VOICE_GENDER_NEUTRAL: 3
};

/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2beta1.OutputAudioEncoding = {
  OUTPUT_AUDIO_ENCODING_UNSPECIFIED: 0,
  OUTPUT_AUDIO_ENCODING_LINEAR_16: 1,
  OUTPUT_AUDIO_ENCODING_MP3: 2,
  OUTPUT_AUDIO_ENCODING_OGG_OPUS: 3
};

goog.object.extend(exports, proto.google.cloud.dialogflow.v2beta1);
