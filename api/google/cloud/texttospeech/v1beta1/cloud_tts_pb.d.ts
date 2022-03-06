import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class ListVoicesRequest extends jspb.Message {
  getLanguageCode(): string;
  setLanguageCode(value: string): ListVoicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVoicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVoicesRequest): ListVoicesRequest.AsObject;
  static serializeBinaryToWriter(message: ListVoicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVoicesRequest;
  static deserializeBinaryFromReader(message: ListVoicesRequest, reader: jspb.BinaryReader): ListVoicesRequest;
}

export namespace ListVoicesRequest {
  export type AsObject = {
    languageCode: string,
  }
}

export class ListVoicesResponse extends jspb.Message {
  getVoicesList(): Array<Voice>;
  setVoicesList(value: Array<Voice>): ListVoicesResponse;
  clearVoicesList(): ListVoicesResponse;
  addVoices(value?: Voice, index?: number): Voice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVoicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVoicesResponse): ListVoicesResponse.AsObject;
  static serializeBinaryToWriter(message: ListVoicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVoicesResponse;
  static deserializeBinaryFromReader(message: ListVoicesResponse, reader: jspb.BinaryReader): ListVoicesResponse;
}

export namespace ListVoicesResponse {
  export type AsObject = {
    voicesList: Array<Voice.AsObject>,
  }
}

export class Voice extends jspb.Message {
  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): Voice;
  clearLanguageCodesList(): Voice;
  addLanguageCodes(value: string, index?: number): Voice;

  getName(): string;
  setName(value: string): Voice;

  getSsmlGender(): SsmlVoiceGender;
  setSsmlGender(value: SsmlVoiceGender): Voice;

  getNaturalSampleRateHertz(): number;
  setNaturalSampleRateHertz(value: number): Voice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Voice.AsObject;
  static toObject(includeInstance: boolean, msg: Voice): Voice.AsObject;
  static serializeBinaryToWriter(message: Voice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Voice;
  static deserializeBinaryFromReader(message: Voice, reader: jspb.BinaryReader): Voice;
}

export namespace Voice {
  export type AsObject = {
    languageCodesList: Array<string>,
    name: string,
    ssmlGender: SsmlVoiceGender,
    naturalSampleRateHertz: number,
  }
}

export class SynthesizeSpeechRequest extends jspb.Message {
  getInput(): SynthesisInput | undefined;
  setInput(value?: SynthesisInput): SynthesizeSpeechRequest;
  hasInput(): boolean;
  clearInput(): SynthesizeSpeechRequest;

  getVoice(): VoiceSelectionParams | undefined;
  setVoice(value?: VoiceSelectionParams): SynthesizeSpeechRequest;
  hasVoice(): boolean;
  clearVoice(): SynthesizeSpeechRequest;

  getAudioConfig(): AudioConfig | undefined;
  setAudioConfig(value?: AudioConfig): SynthesizeSpeechRequest;
  hasAudioConfig(): boolean;
  clearAudioConfig(): SynthesizeSpeechRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynthesizeSpeechRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SynthesizeSpeechRequest): SynthesizeSpeechRequest.AsObject;
  static serializeBinaryToWriter(message: SynthesizeSpeechRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynthesizeSpeechRequest;
  static deserializeBinaryFromReader(message: SynthesizeSpeechRequest, reader: jspb.BinaryReader): SynthesizeSpeechRequest;
}

export namespace SynthesizeSpeechRequest {
  export type AsObject = {
    input?: SynthesisInput.AsObject,
    voice?: VoiceSelectionParams.AsObject,
    audioConfig?: AudioConfig.AsObject,
  }
}

export class SynthesisInput extends jspb.Message {
  getText(): string;
  setText(value: string): SynthesisInput;

  getSsml(): string;
  setSsml(value: string): SynthesisInput;

  getInputSourceCase(): SynthesisInput.InputSourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynthesisInput.AsObject;
  static toObject(includeInstance: boolean, msg: SynthesisInput): SynthesisInput.AsObject;
  static serializeBinaryToWriter(message: SynthesisInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynthesisInput;
  static deserializeBinaryFromReader(message: SynthesisInput, reader: jspb.BinaryReader): SynthesisInput;
}

export namespace SynthesisInput {
  export type AsObject = {
    text: string,
    ssml: string,
  }

  export enum InputSourceCase { 
    INPUT_SOURCE_NOT_SET = 0,
    TEXT = 1,
    SSML = 2,
  }
}

export class VoiceSelectionParams extends jspb.Message {
  getLanguageCode(): string;
  setLanguageCode(value: string): VoiceSelectionParams;

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
    languageCode: string,
    name: string,
    ssmlGender: SsmlVoiceGender,
  }
}

export class AudioConfig extends jspb.Message {
  getAudioEncoding(): AudioEncoding;
  setAudioEncoding(value: AudioEncoding): AudioConfig;

  getSpeakingRate(): number;
  setSpeakingRate(value: number): AudioConfig;

  getPitch(): number;
  setPitch(value: number): AudioConfig;

  getVolumeGainDb(): number;
  setVolumeGainDb(value: number): AudioConfig;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): AudioConfig;

  getEffectsProfileIdList(): Array<string>;
  setEffectsProfileIdList(value: Array<string>): AudioConfig;
  clearEffectsProfileIdList(): AudioConfig;
  addEffectsProfileId(value: string, index?: number): AudioConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioConfig): AudioConfig.AsObject;
  static serializeBinaryToWriter(message: AudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioConfig;
  static deserializeBinaryFromReader(message: AudioConfig, reader: jspb.BinaryReader): AudioConfig;
}

export namespace AudioConfig {
  export type AsObject = {
    audioEncoding: AudioEncoding,
    speakingRate: number,
    pitch: number,
    volumeGainDb: number,
    sampleRateHertz: number,
    effectsProfileIdList: Array<string>,
  }
}

export class SynthesizeSpeechResponse extends jspb.Message {
  getAudioContent(): Uint8Array | string;
  getAudioContent_asU8(): Uint8Array;
  getAudioContent_asB64(): string;
  setAudioContent(value: Uint8Array | string): SynthesizeSpeechResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynthesizeSpeechResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SynthesizeSpeechResponse): SynthesizeSpeechResponse.AsObject;
  static serializeBinaryToWriter(message: SynthesizeSpeechResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynthesizeSpeechResponse;
  static deserializeBinaryFromReader(message: SynthesizeSpeechResponse, reader: jspb.BinaryReader): SynthesizeSpeechResponse;
}

export namespace SynthesizeSpeechResponse {
  export type AsObject = {
    audioContent: Uint8Array | string,
  }
}

export enum SsmlVoiceGender { 
  SSML_VOICE_GENDER_UNSPECIFIED = 0,
  MALE = 1,
  FEMALE = 2,
  NEUTRAL = 3,
}
export enum AudioEncoding { 
  AUDIO_ENCODING_UNSPECIFIED = 0,
  LINEAR16 = 1,
  MP3 = 2,
  OGG_OPUS = 3,
}
