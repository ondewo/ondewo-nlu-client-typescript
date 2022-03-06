import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class VoiceSelectionParams extends jspb.Message {
  getName(): string;
  setName(value: string): VoiceSelectionParams;

  getSsmlGender(): SsmlVoiceGender;
  setSsmlGender(value: SsmlVoiceGender): VoiceSelectionParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceSelectionParams.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceSelectionParams): VoiceSelectionParams.AsObject;
  static serializeBinaryToWriter(message: VoiceSelectionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceSelectionParams;
  static deserializeBinaryFromReader(message: VoiceSelectionParams, reader: jspb.BinaryReader): VoiceSelectionParams;
}

export namespace VoiceSelectionParams {
  export type AsObject = {
    name: string,
    ssmlGender: SsmlVoiceGender,
  }
}

export class SynthesizeSpeechConfig extends jspb.Message {
  getSpeakingRate(): number;
  setSpeakingRate(value: number): SynthesizeSpeechConfig;

  getPitch(): number;
  setPitch(value: number): SynthesizeSpeechConfig;

  getVolumeGainDb(): number;
  setVolumeGainDb(value: number): SynthesizeSpeechConfig;

  getEffectsProfileIdList(): Array<string>;
  setEffectsProfileIdList(value: Array<string>): SynthesizeSpeechConfig;
  clearEffectsProfileIdList(): SynthesizeSpeechConfig;
  addEffectsProfileId(value: string, index?: number): SynthesizeSpeechConfig;

  getVoice(): VoiceSelectionParams | undefined;
  setVoice(value?: VoiceSelectionParams): SynthesizeSpeechConfig;
  hasVoice(): boolean;
  clearVoice(): SynthesizeSpeechConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynthesizeSpeechConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SynthesizeSpeechConfig): SynthesizeSpeechConfig.AsObject;
  static serializeBinaryToWriter(message: SynthesizeSpeechConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynthesizeSpeechConfig;
  static deserializeBinaryFromReader(message: SynthesizeSpeechConfig, reader: jspb.BinaryReader): SynthesizeSpeechConfig;
}

export namespace SynthesizeSpeechConfig {
  export type AsObject = {
    speakingRate: number,
    pitch: number,
    volumeGainDb: number,
    effectsProfileIdList: Array<string>,
    voice?: VoiceSelectionParams.AsObject,
  }
}

export class OutputAudioConfig extends jspb.Message {
  getAudioEncoding(): OutputAudioEncoding;
  setAudioEncoding(value: OutputAudioEncoding): OutputAudioConfig;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): OutputAudioConfig;

  getSynthesizeSpeechConfig(): SynthesizeSpeechConfig | undefined;
  setSynthesizeSpeechConfig(value?: SynthesizeSpeechConfig): OutputAudioConfig;
  hasSynthesizeSpeechConfig(): boolean;
  clearSynthesizeSpeechConfig(): OutputAudioConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputAudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OutputAudioConfig): OutputAudioConfig.AsObject;
  static serializeBinaryToWriter(message: OutputAudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputAudioConfig;
  static deserializeBinaryFromReader(message: OutputAudioConfig, reader: jspb.BinaryReader): OutputAudioConfig;
}

export namespace OutputAudioConfig {
  export type AsObject = {
    audioEncoding: OutputAudioEncoding,
    sampleRateHertz: number,
    synthesizeSpeechConfig?: SynthesizeSpeechConfig.AsObject,
  }
}

export enum SsmlVoiceGender { 
  SSML_VOICE_GENDER_UNSPECIFIED = 0,
  SSML_VOICE_GENDER_MALE = 1,
  SSML_VOICE_GENDER_FEMALE = 2,
  SSML_VOICE_GENDER_NEUTRAL = 3,
}
export enum OutputAudioEncoding { 
  OUTPUT_AUDIO_ENCODING_UNSPECIFIED = 0,
  OUTPUT_AUDIO_ENCODING_LINEAR_16 = 1,
  OUTPUT_AUDIO_ENCODING_MP3 = 2,
  OUTPUT_AUDIO_ENCODING_OGG_OPUS = 3,
}
