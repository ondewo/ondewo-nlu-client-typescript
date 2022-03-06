import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';


export class AssistRequest extends jspb.Message {
  getConfig(): AssistConfig | undefined;
  setConfig(value?: AssistConfig): AssistRequest;
  hasConfig(): boolean;
  clearConfig(): AssistRequest;

  getAudioIn(): Uint8Array | string;
  getAudioIn_asU8(): Uint8Array;
  getAudioIn_asB64(): string;
  setAudioIn(value: Uint8Array | string): AssistRequest;

  getTypeCase(): AssistRequest.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssistRequest): AssistRequest.AsObject;
  static serializeBinaryToWriter(message: AssistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistRequest;
  static deserializeBinaryFromReader(message: AssistRequest, reader: jspb.BinaryReader): AssistRequest;
}

export namespace AssistRequest {
  export type AsObject = {
    config?: AssistConfig.AsObject,
    audioIn: Uint8Array | string,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    CONFIG = 1,
    AUDIO_IN = 2,
  }
}

export class AssistResponse extends jspb.Message {
  getEventType(): AssistResponse.EventType;
  setEventType(value: AssistResponse.EventType): AssistResponse;

  getAudioOut(): AudioOut | undefined;
  setAudioOut(value?: AudioOut): AssistResponse;
  hasAudioOut(): boolean;
  clearAudioOut(): AssistResponse;

  getScreenOut(): ScreenOut | undefined;
  setScreenOut(value?: ScreenOut): AssistResponse;
  hasScreenOut(): boolean;
  clearScreenOut(): AssistResponse;

  getDeviceAction(): DeviceAction | undefined;
  setDeviceAction(value?: DeviceAction): AssistResponse;
  hasDeviceAction(): boolean;
  clearDeviceAction(): AssistResponse;

  getSpeechResultsList(): Array<SpeechRecognitionResult>;
  setSpeechResultsList(value: Array<SpeechRecognitionResult>): AssistResponse;
  clearSpeechResultsList(): AssistResponse;
  addSpeechResults(value?: SpeechRecognitionResult, index?: number): SpeechRecognitionResult;

  getDialogStateOut(): DialogStateOut | undefined;
  setDialogStateOut(value?: DialogStateOut): AssistResponse;
  hasDialogStateOut(): boolean;
  clearDialogStateOut(): AssistResponse;

  getDebugInfo(): DebugInfo | undefined;
  setDebugInfo(value?: DebugInfo): AssistResponse;
  hasDebugInfo(): boolean;
  clearDebugInfo(): AssistResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssistResponse): AssistResponse.AsObject;
  static serializeBinaryToWriter(message: AssistResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistResponse;
  static deserializeBinaryFromReader(message: AssistResponse, reader: jspb.BinaryReader): AssistResponse;
}

export namespace AssistResponse {
  export type AsObject = {
    eventType: AssistResponse.EventType,
    audioOut?: AudioOut.AsObject,
    screenOut?: ScreenOut.AsObject,
    deviceAction?: DeviceAction.AsObject,
    speechResultsList: Array<SpeechRecognitionResult.AsObject>,
    dialogStateOut?: DialogStateOut.AsObject,
    debugInfo?: DebugInfo.AsObject,
  }

  export enum EventType { 
    EVENT_TYPE_UNSPECIFIED = 0,
    END_OF_UTTERANCE = 1,
  }
}

export class DebugInfo extends jspb.Message {
  getAogAgentToAssistantJson(): string;
  setAogAgentToAssistantJson(value: string): DebugInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebugInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DebugInfo): DebugInfo.AsObject;
  static serializeBinaryToWriter(message: DebugInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebugInfo;
  static deserializeBinaryFromReader(message: DebugInfo, reader: jspb.BinaryReader): DebugInfo;
}

export namespace DebugInfo {
  export type AsObject = {
    aogAgentToAssistantJson: string,
  }
}

export class AssistConfig extends jspb.Message {
  getAudioInConfig(): AudioInConfig | undefined;
  setAudioInConfig(value?: AudioInConfig): AssistConfig;
  hasAudioInConfig(): boolean;
  clearAudioInConfig(): AssistConfig;

  getTextQuery(): string;
  setTextQuery(value: string): AssistConfig;

  getAudioOutConfig(): AudioOutConfig | undefined;
  setAudioOutConfig(value?: AudioOutConfig): AssistConfig;
  hasAudioOutConfig(): boolean;
  clearAudioOutConfig(): AssistConfig;

  getScreenOutConfig(): ScreenOutConfig | undefined;
  setScreenOutConfig(value?: ScreenOutConfig): AssistConfig;
  hasScreenOutConfig(): boolean;
  clearScreenOutConfig(): AssistConfig;

  getDialogStateIn(): DialogStateIn | undefined;
  setDialogStateIn(value?: DialogStateIn): AssistConfig;
  hasDialogStateIn(): boolean;
  clearDialogStateIn(): AssistConfig;

  getDeviceConfig(): DeviceConfig | undefined;
  setDeviceConfig(value?: DeviceConfig): AssistConfig;
  hasDeviceConfig(): boolean;
  clearDeviceConfig(): AssistConfig;

  getDebugConfig(): DebugConfig | undefined;
  setDebugConfig(value?: DebugConfig): AssistConfig;
  hasDebugConfig(): boolean;
  clearDebugConfig(): AssistConfig;

  getTypeCase(): AssistConfig.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AssistConfig): AssistConfig.AsObject;
  static serializeBinaryToWriter(message: AssistConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistConfig;
  static deserializeBinaryFromReader(message: AssistConfig, reader: jspb.BinaryReader): AssistConfig;
}

export namespace AssistConfig {
  export type AsObject = {
    audioInConfig?: AudioInConfig.AsObject,
    textQuery: string,
    audioOutConfig?: AudioOutConfig.AsObject,
    screenOutConfig?: ScreenOutConfig.AsObject,
    dialogStateIn?: DialogStateIn.AsObject,
    deviceConfig?: DeviceConfig.AsObject,
    debugConfig?: DebugConfig.AsObject,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    AUDIO_IN_CONFIG = 1,
    TEXT_QUERY = 6,
  }
}

export class AudioInConfig extends jspb.Message {
  getEncoding(): AudioInConfig.Encoding;
  setEncoding(value: AudioInConfig.Encoding): AudioInConfig;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): AudioInConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioInConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioInConfig): AudioInConfig.AsObject;
  static serializeBinaryToWriter(message: AudioInConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioInConfig;
  static deserializeBinaryFromReader(message: AudioInConfig, reader: jspb.BinaryReader): AudioInConfig;
}

export namespace AudioInConfig {
  export type AsObject = {
    encoding: AudioInConfig.Encoding,
    sampleRateHertz: number,
  }

  export enum Encoding { 
    ENCODING_UNSPECIFIED = 0,
    LINEAR16 = 1,
    FLAC = 2,
  }
}

export class AudioOutConfig extends jspb.Message {
  getEncoding(): AudioOutConfig.Encoding;
  setEncoding(value: AudioOutConfig.Encoding): AudioOutConfig;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): AudioOutConfig;

  getVolumePercentage(): number;
  setVolumePercentage(value: number): AudioOutConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioOutConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioOutConfig): AudioOutConfig.AsObject;
  static serializeBinaryToWriter(message: AudioOutConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioOutConfig;
  static deserializeBinaryFromReader(message: AudioOutConfig, reader: jspb.BinaryReader): AudioOutConfig;
}

export namespace AudioOutConfig {
  export type AsObject = {
    encoding: AudioOutConfig.Encoding,
    sampleRateHertz: number,
    volumePercentage: number,
  }

  export enum Encoding { 
    ENCODING_UNSPECIFIED = 0,
    LINEAR16 = 1,
    MP3 = 2,
    OPUS_IN_OGG = 3,
  }
}

export class ScreenOutConfig extends jspb.Message {
  getScreenMode(): ScreenOutConfig.ScreenMode;
  setScreenMode(value: ScreenOutConfig.ScreenMode): ScreenOutConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenOutConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenOutConfig): ScreenOutConfig.AsObject;
  static serializeBinaryToWriter(message: ScreenOutConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenOutConfig;
  static deserializeBinaryFromReader(message: ScreenOutConfig, reader: jspb.BinaryReader): ScreenOutConfig;
}

export namespace ScreenOutConfig {
  export type AsObject = {
    screenMode: ScreenOutConfig.ScreenMode,
  }

  export enum ScreenMode { 
    SCREEN_MODE_UNSPECIFIED = 0,
    OFF = 1,
    PLAYING = 3,
  }
}

export class DialogStateIn extends jspb.Message {
  getConversationState(): Uint8Array | string;
  getConversationState_asU8(): Uint8Array;
  getConversationState_asB64(): string;
  setConversationState(value: Uint8Array | string): DialogStateIn;

  getLanguageCode(): string;
  setLanguageCode(value: string): DialogStateIn;

  getDeviceLocation(): DeviceLocation | undefined;
  setDeviceLocation(value?: DeviceLocation): DialogStateIn;
  hasDeviceLocation(): boolean;
  clearDeviceLocation(): DialogStateIn;

  getIsNewConversation(): boolean;
  setIsNewConversation(value: boolean): DialogStateIn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialogStateIn.AsObject;
  static toObject(includeInstance: boolean, msg: DialogStateIn): DialogStateIn.AsObject;
  static serializeBinaryToWriter(message: DialogStateIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialogStateIn;
  static deserializeBinaryFromReader(message: DialogStateIn, reader: jspb.BinaryReader): DialogStateIn;
}

export namespace DialogStateIn {
  export type AsObject = {
    conversationState: Uint8Array | string,
    languageCode: string,
    deviceLocation?: DeviceLocation.AsObject,
    isNewConversation: boolean,
  }
}

export class DeviceConfig extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): DeviceConfig;

  getDeviceModelId(): string;
  setDeviceModelId(value: string): DeviceConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceConfig): DeviceConfig.AsObject;
  static serializeBinaryToWriter(message: DeviceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceConfig;
  static deserializeBinaryFromReader(message: DeviceConfig, reader: jspb.BinaryReader): DeviceConfig;
}

export namespace DeviceConfig {
  export type AsObject = {
    deviceId: string,
    deviceModelId: string,
  }
}

export class AudioOut extends jspb.Message {
  getAudioData(): Uint8Array | string;
  getAudioData_asU8(): Uint8Array;
  getAudioData_asB64(): string;
  setAudioData(value: Uint8Array | string): AudioOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioOut.AsObject;
  static toObject(includeInstance: boolean, msg: AudioOut): AudioOut.AsObject;
  static serializeBinaryToWriter(message: AudioOut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioOut;
  static deserializeBinaryFromReader(message: AudioOut, reader: jspb.BinaryReader): AudioOut;
}

export namespace AudioOut {
  export type AsObject = {
    audioData: Uint8Array | string,
  }
}

export class ScreenOut extends jspb.Message {
  getFormat(): ScreenOut.Format;
  setFormat(value: ScreenOut.Format): ScreenOut;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ScreenOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenOut.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenOut): ScreenOut.AsObject;
  static serializeBinaryToWriter(message: ScreenOut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenOut;
  static deserializeBinaryFromReader(message: ScreenOut, reader: jspb.BinaryReader): ScreenOut;
}

export namespace ScreenOut {
  export type AsObject = {
    format: ScreenOut.Format,
    data: Uint8Array | string,
  }

  export enum Format { 
    FORMAT_UNSPECIFIED = 0,
    HTML = 1,
  }
}

export class DeviceAction extends jspb.Message {
  getDeviceRequestJson(): string;
  setDeviceRequestJson(value: string): DeviceAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceAction.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceAction): DeviceAction.AsObject;
  static serializeBinaryToWriter(message: DeviceAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceAction;
  static deserializeBinaryFromReader(message: DeviceAction, reader: jspb.BinaryReader): DeviceAction;
}

export namespace DeviceAction {
  export type AsObject = {
    deviceRequestJson: string,
  }
}

export class SpeechRecognitionResult extends jspb.Message {
  getTranscript(): string;
  setTranscript(value: string): SpeechRecognitionResult;

  getStability(): number;
  setStability(value: number): SpeechRecognitionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechRecognitionResult.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechRecognitionResult): SpeechRecognitionResult.AsObject;
  static serializeBinaryToWriter(message: SpeechRecognitionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechRecognitionResult;
  static deserializeBinaryFromReader(message: SpeechRecognitionResult, reader: jspb.BinaryReader): SpeechRecognitionResult;
}

export namespace SpeechRecognitionResult {
  export type AsObject = {
    transcript: string,
    stability: number,
  }
}

export class DialogStateOut extends jspb.Message {
  getSupplementalDisplayText(): string;
  setSupplementalDisplayText(value: string): DialogStateOut;

  getConversationState(): Uint8Array | string;
  getConversationState_asU8(): Uint8Array;
  getConversationState_asB64(): string;
  setConversationState(value: Uint8Array | string): DialogStateOut;

  getMicrophoneMode(): DialogStateOut.MicrophoneMode;
  setMicrophoneMode(value: DialogStateOut.MicrophoneMode): DialogStateOut;

  getVolumePercentage(): number;
  setVolumePercentage(value: number): DialogStateOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialogStateOut.AsObject;
  static toObject(includeInstance: boolean, msg: DialogStateOut): DialogStateOut.AsObject;
  static serializeBinaryToWriter(message: DialogStateOut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialogStateOut;
  static deserializeBinaryFromReader(message: DialogStateOut, reader: jspb.BinaryReader): DialogStateOut;
}

export namespace DialogStateOut {
  export type AsObject = {
    supplementalDisplayText: string,
    conversationState: Uint8Array | string,
    microphoneMode: DialogStateOut.MicrophoneMode,
    volumePercentage: number,
  }

  export enum MicrophoneMode { 
    MICROPHONE_MODE_UNSPECIFIED = 0,
    CLOSE_MICROPHONE = 1,
    DIALOG_FOLLOW_ON = 2,
  }
}

export class DebugConfig extends jspb.Message {
  getReturnDebugInfo(): boolean;
  setReturnDebugInfo(value: boolean): DebugConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebugConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DebugConfig): DebugConfig.AsObject;
  static serializeBinaryToWriter(message: DebugConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebugConfig;
  static deserializeBinaryFromReader(message: DebugConfig, reader: jspb.BinaryReader): DebugConfig;
}

export namespace DebugConfig {
  export type AsObject = {
    returnDebugInfo: boolean,
  }
}

export class DeviceLocation extends jspb.Message {
  getCoordinates(): google_type_latlng_pb.LatLng | undefined;
  setCoordinates(value?: google_type_latlng_pb.LatLng): DeviceLocation;
  hasCoordinates(): boolean;
  clearCoordinates(): DeviceLocation;

  getTypeCase(): DeviceLocation.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceLocation): DeviceLocation.AsObject;
  static serializeBinaryToWriter(message: DeviceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceLocation;
  static deserializeBinaryFromReader(message: DeviceLocation, reader: jspb.BinaryReader): DeviceLocation;
}

export namespace DeviceLocation {
  export type AsObject = {
    coordinates?: google_type_latlng_pb.LatLng.AsObject,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    COORDINATES = 1,
  }
}

