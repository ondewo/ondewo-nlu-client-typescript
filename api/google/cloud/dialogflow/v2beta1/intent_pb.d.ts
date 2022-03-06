import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_dialogflow_v2beta1_context_pb from '../../../../google/cloud/dialogflow/v2beta1/context_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class Intent extends jspb.Message {
  getName(): string;
  setName(value: string): Intent;

  getDisplayName(): string;
  setDisplayName(value: string): Intent;

  getWebhookState(): Intent.WebhookState;
  setWebhookState(value: Intent.WebhookState): Intent;

  getPriority(): number;
  setPriority(value: number): Intent;

  getIsFallback(): boolean;
  setIsFallback(value: boolean): Intent;

  getMlEnabled(): boolean;
  setMlEnabled(value: boolean): Intent;

  getMlDisabled(): boolean;
  setMlDisabled(value: boolean): Intent;

  getEndInteraction(): boolean;
  setEndInteraction(value: boolean): Intent;

  getInputContextNamesList(): Array<string>;
  setInputContextNamesList(value: Array<string>): Intent;
  clearInputContextNamesList(): Intent;
  addInputContextNames(value: string, index?: number): Intent;

  getEventsList(): Array<string>;
  setEventsList(value: Array<string>): Intent;
  clearEventsList(): Intent;
  addEvents(value: string, index?: number): Intent;

  getTrainingPhrasesList(): Array<Intent.TrainingPhrase>;
  setTrainingPhrasesList(value: Array<Intent.TrainingPhrase>): Intent;
  clearTrainingPhrasesList(): Intent;
  addTrainingPhrases(value?: Intent.TrainingPhrase, index?: number): Intent.TrainingPhrase;

  getAction(): string;
  setAction(value: string): Intent;

  getOutputContextsList(): Array<google_cloud_dialogflow_v2beta1_context_pb.Context>;
  setOutputContextsList(value: Array<google_cloud_dialogflow_v2beta1_context_pb.Context>): Intent;
  clearOutputContextsList(): Intent;
  addOutputContexts(value?: google_cloud_dialogflow_v2beta1_context_pb.Context, index?: number): google_cloud_dialogflow_v2beta1_context_pb.Context;

  getResetContexts(): boolean;
  setResetContexts(value: boolean): Intent;

  getParametersList(): Array<Intent.Parameter>;
  setParametersList(value: Array<Intent.Parameter>): Intent;
  clearParametersList(): Intent;
  addParameters(value?: Intent.Parameter, index?: number): Intent.Parameter;

  getMessagesList(): Array<Intent.Message>;
  setMessagesList(value: Array<Intent.Message>): Intent;
  clearMessagesList(): Intent;
  addMessages(value?: Intent.Message, index?: number): Intent.Message;

  getDefaultResponsePlatformsList(): Array<Intent.Message.Platform>;
  setDefaultResponsePlatformsList(value: Array<Intent.Message.Platform>): Intent;
  clearDefaultResponsePlatformsList(): Intent;
  addDefaultResponsePlatforms(value: Intent.Message.Platform, index?: number): Intent;

  getRootFollowupIntentName(): string;
  setRootFollowupIntentName(value: string): Intent;

  getParentFollowupIntentName(): string;
  setParentFollowupIntentName(value: string): Intent;

  getFollowupIntentInfoList(): Array<Intent.FollowupIntentInfo>;
  setFollowupIntentInfoList(value: Array<Intent.FollowupIntentInfo>): Intent;
  clearFollowupIntentInfoList(): Intent;
  addFollowupIntentInfo(value?: Intent.FollowupIntentInfo, index?: number): Intent.FollowupIntentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Intent.AsObject;
  static toObject(includeInstance: boolean, msg: Intent): Intent.AsObject;
  static serializeBinaryToWriter(message: Intent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Intent;
  static deserializeBinaryFromReader(message: Intent, reader: jspb.BinaryReader): Intent;
}

export namespace Intent {
  export type AsObject = {
    name: string,
    displayName: string,
    webhookState: Intent.WebhookState,
    priority: number,
    isFallback: boolean,
    mlEnabled: boolean,
    mlDisabled: boolean,
    endInteraction: boolean,
    inputContextNamesList: Array<string>,
    eventsList: Array<string>,
    trainingPhrasesList: Array<Intent.TrainingPhrase.AsObject>,
    action: string,
    outputContextsList: Array<google_cloud_dialogflow_v2beta1_context_pb.Context.AsObject>,
    resetContexts: boolean,
    parametersList: Array<Intent.Parameter.AsObject>,
    messagesList: Array<Intent.Message.AsObject>,
    defaultResponsePlatformsList: Array<Intent.Message.Platform>,
    rootFollowupIntentName: string,
    parentFollowupIntentName: string,
    followupIntentInfoList: Array<Intent.FollowupIntentInfo.AsObject>,
  }

  export class TrainingPhrase extends jspb.Message {
    getName(): string;
    setName(value: string): TrainingPhrase;

    getType(): Intent.TrainingPhrase.Type;
    setType(value: Intent.TrainingPhrase.Type): TrainingPhrase;

    getPartsList(): Array<Intent.TrainingPhrase.Part>;
    setPartsList(value: Array<Intent.TrainingPhrase.Part>): TrainingPhrase;
    clearPartsList(): TrainingPhrase;
    addParts(value?: Intent.TrainingPhrase.Part, index?: number): Intent.TrainingPhrase.Part;

    getTimesAddedCount(): number;
    setTimesAddedCount(value: number): TrainingPhrase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainingPhrase.AsObject;
    static toObject(includeInstance: boolean, msg: TrainingPhrase): TrainingPhrase.AsObject;
    static serializeBinaryToWriter(message: TrainingPhrase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainingPhrase;
    static deserializeBinaryFromReader(message: TrainingPhrase, reader: jspb.BinaryReader): TrainingPhrase;
  }

  export namespace TrainingPhrase {
    export type AsObject = {
      name: string,
      type: Intent.TrainingPhrase.Type,
      partsList: Array<Intent.TrainingPhrase.Part.AsObject>,
      timesAddedCount: number,
    }

    export class Part extends jspb.Message {
      getText(): string;
      setText(value: string): Part;

      getEntityType(): string;
      setEntityType(value: string): Part;

      getAlias(): string;
      setAlias(value: string): Part;

      getUserDefined(): boolean;
      setUserDefined(value: boolean): Part;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Part.AsObject;
      static toObject(includeInstance: boolean, msg: Part): Part.AsObject;
      static serializeBinaryToWriter(message: Part, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Part;
      static deserializeBinaryFromReader(message: Part, reader: jspb.BinaryReader): Part;
    }

    export namespace Part {
      export type AsObject = {
        text: string,
        entityType: string,
        alias: string,
        userDefined: boolean,
      }
    }


    export enum Type { 
      TYPE_UNSPECIFIED = 0,
      EXAMPLE = 1,
      TEMPLATE = 2,
    }
  }


  export class Parameter extends jspb.Message {
    getName(): string;
    setName(value: string): Parameter;

    getDisplayName(): string;
    setDisplayName(value: string): Parameter;

    getValue(): string;
    setValue(value: string): Parameter;

    getDefaultValue(): string;
    setDefaultValue(value: string): Parameter;

    getEntityTypeDisplayName(): string;
    setEntityTypeDisplayName(value: string): Parameter;

    getMandatory(): boolean;
    setMandatory(value: boolean): Parameter;

    getPromptsList(): Array<string>;
    setPromptsList(value: Array<string>): Parameter;
    clearPromptsList(): Parameter;
    addPrompts(value: string, index?: number): Parameter;

    getIsList(): boolean;
    setIsList(value: boolean): Parameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Parameter.AsObject;
    static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
    static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Parameter;
    static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
  }

  export namespace Parameter {
    export type AsObject = {
      name: string,
      displayName: string,
      value: string,
      defaultValue: string,
      entityTypeDisplayName: string,
      mandatory: boolean,
      promptsList: Array<string>,
      isList: boolean,
    }
  }


  export class Message extends jspb.Message {
    getText(): Intent.Message.Text | undefined;
    setText(value?: Intent.Message.Text): Message;
    hasText(): boolean;
    clearText(): Message;

    getImage(): Intent.Message.Image | undefined;
    setImage(value?: Intent.Message.Image): Message;
    hasImage(): boolean;
    clearImage(): Message;

    getQuickReplies(): Intent.Message.QuickReplies | undefined;
    setQuickReplies(value?: Intent.Message.QuickReplies): Message;
    hasQuickReplies(): boolean;
    clearQuickReplies(): Message;

    getCard(): Intent.Message.Card | undefined;
    setCard(value?: Intent.Message.Card): Message;
    hasCard(): boolean;
    clearCard(): Message;

    getPayload(): google_protobuf_struct_pb.Struct | undefined;
    setPayload(value?: google_protobuf_struct_pb.Struct): Message;
    hasPayload(): boolean;
    clearPayload(): Message;

    getSimpleResponses(): Intent.Message.SimpleResponses | undefined;
    setSimpleResponses(value?: Intent.Message.SimpleResponses): Message;
    hasSimpleResponses(): boolean;
    clearSimpleResponses(): Message;

    getBasicCard(): Intent.Message.BasicCard | undefined;
    setBasicCard(value?: Intent.Message.BasicCard): Message;
    hasBasicCard(): boolean;
    clearBasicCard(): Message;

    getSuggestions(): Intent.Message.Suggestions | undefined;
    setSuggestions(value?: Intent.Message.Suggestions): Message;
    hasSuggestions(): boolean;
    clearSuggestions(): Message;

    getLinkOutSuggestion(): Intent.Message.LinkOutSuggestion | undefined;
    setLinkOutSuggestion(value?: Intent.Message.LinkOutSuggestion): Message;
    hasLinkOutSuggestion(): boolean;
    clearLinkOutSuggestion(): Message;

    getListSelect(): Intent.Message.ListSelect | undefined;
    setListSelect(value?: Intent.Message.ListSelect): Message;
    hasListSelect(): boolean;
    clearListSelect(): Message;

    getCarouselSelect(): Intent.Message.CarouselSelect | undefined;
    setCarouselSelect(value?: Intent.Message.CarouselSelect): Message;
    hasCarouselSelect(): boolean;
    clearCarouselSelect(): Message;

    getTelephonyPlayAudio(): Intent.Message.TelephonyPlayAudio | undefined;
    setTelephonyPlayAudio(value?: Intent.Message.TelephonyPlayAudio): Message;
    hasTelephonyPlayAudio(): boolean;
    clearTelephonyPlayAudio(): Message;

    getTelephonySynthesizeSpeech(): Intent.Message.TelephonySynthesizeSpeech | undefined;
    setTelephonySynthesizeSpeech(value?: Intent.Message.TelephonySynthesizeSpeech): Message;
    hasTelephonySynthesizeSpeech(): boolean;
    clearTelephonySynthesizeSpeech(): Message;

    getTelephonyTransferCall(): Intent.Message.TelephonyTransferCall | undefined;
    setTelephonyTransferCall(value?: Intent.Message.TelephonyTransferCall): Message;
    hasTelephonyTransferCall(): boolean;
    clearTelephonyTransferCall(): Message;

    getPlatform(): Intent.Message.Platform;
    setPlatform(value: Intent.Message.Platform): Message;

    getMessageCase(): Message.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
  }

  export namespace Message {
    export type AsObject = {
      text?: Intent.Message.Text.AsObject,
      image?: Intent.Message.Image.AsObject,
      quickReplies?: Intent.Message.QuickReplies.AsObject,
      card?: Intent.Message.Card.AsObject,
      payload?: google_protobuf_struct_pb.Struct.AsObject,
      simpleResponses?: Intent.Message.SimpleResponses.AsObject,
      basicCard?: Intent.Message.BasicCard.AsObject,
      suggestions?: Intent.Message.Suggestions.AsObject,
      linkOutSuggestion?: Intent.Message.LinkOutSuggestion.AsObject,
      listSelect?: Intent.Message.ListSelect.AsObject,
      carouselSelect?: Intent.Message.CarouselSelect.AsObject,
      telephonyPlayAudio?: Intent.Message.TelephonyPlayAudio.AsObject,
      telephonySynthesizeSpeech?: Intent.Message.TelephonySynthesizeSpeech.AsObject,
      telephonyTransferCall?: Intent.Message.TelephonyTransferCall.AsObject,
      platform: Intent.Message.Platform,
    }

    export class Text extends jspb.Message {
      getTextList(): Array<string>;
      setTextList(value: Array<string>): Text;
      clearTextList(): Text;
      addText(value: string, index?: number): Text;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Text.AsObject;
      static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
      static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Text;
      static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
    }

    export namespace Text {
      export type AsObject = {
        textList: Array<string>,
      }
    }


    export class Image extends jspb.Message {
      getImageUri(): string;
      setImageUri(value: string): Image;

      getAccessibilityText(): string;
      setAccessibilityText(value: string): Image;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Image.AsObject;
      static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
      static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Image;
      static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
    }

    export namespace Image {
      export type AsObject = {
        imageUri: string,
        accessibilityText: string,
      }
    }


    export class QuickReplies extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): QuickReplies;

      getQuickRepliesList(): Array<string>;
      setQuickRepliesList(value: Array<string>): QuickReplies;
      clearQuickRepliesList(): QuickReplies;
      addQuickReplies(value: string, index?: number): QuickReplies;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): QuickReplies.AsObject;
      static toObject(includeInstance: boolean, msg: QuickReplies): QuickReplies.AsObject;
      static serializeBinaryToWriter(message: QuickReplies, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): QuickReplies;
      static deserializeBinaryFromReader(message: QuickReplies, reader: jspb.BinaryReader): QuickReplies;
    }

    export namespace QuickReplies {
      export type AsObject = {
        title: string,
        quickRepliesList: Array<string>,
      }
    }


    export class Card extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): Card;

      getSubtitle(): string;
      setSubtitle(value: string): Card;

      getImageUri(): string;
      setImageUri(value: string): Card;

      getButtonsList(): Array<Intent.Message.Card.Button>;
      setButtonsList(value: Array<Intent.Message.Card.Button>): Card;
      clearButtonsList(): Card;
      addButtons(value?: Intent.Message.Card.Button, index?: number): Intent.Message.Card.Button;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Card.AsObject;
      static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
      static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Card;
      static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
    }

    export namespace Card {
      export type AsObject = {
        title: string,
        subtitle: string,
        imageUri: string,
        buttonsList: Array<Intent.Message.Card.Button.AsObject>,
      }

      export class Button extends jspb.Message {
        getText(): string;
        setText(value: string): Button;

        getPostback(): string;
        setPostback(value: string): Button;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Button.AsObject;
        static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
        static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Button;
        static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
      }

      export namespace Button {
        export type AsObject = {
          text: string,
          postback: string,
        }
      }

    }


    export class SimpleResponse extends jspb.Message {
      getTextToSpeech(): string;
      setTextToSpeech(value: string): SimpleResponse;

      getSsml(): string;
      setSsml(value: string): SimpleResponse;

      getDisplayText(): string;
      setDisplayText(value: string): SimpleResponse;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SimpleResponse.AsObject;
      static toObject(includeInstance: boolean, msg: SimpleResponse): SimpleResponse.AsObject;
      static serializeBinaryToWriter(message: SimpleResponse, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SimpleResponse;
      static deserializeBinaryFromReader(message: SimpleResponse, reader: jspb.BinaryReader): SimpleResponse;
    }

    export namespace SimpleResponse {
      export type AsObject = {
        textToSpeech: string,
        ssml: string,
        displayText: string,
      }
    }


    export class SimpleResponses extends jspb.Message {
      getSimpleResponsesList(): Array<Intent.Message.SimpleResponse>;
      setSimpleResponsesList(value: Array<Intent.Message.SimpleResponse>): SimpleResponses;
      clearSimpleResponsesList(): SimpleResponses;
      addSimpleResponses(value?: Intent.Message.SimpleResponse, index?: number): Intent.Message.SimpleResponse;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SimpleResponses.AsObject;
      static toObject(includeInstance: boolean, msg: SimpleResponses): SimpleResponses.AsObject;
      static serializeBinaryToWriter(message: SimpleResponses, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SimpleResponses;
      static deserializeBinaryFromReader(message: SimpleResponses, reader: jspb.BinaryReader): SimpleResponses;
    }

    export namespace SimpleResponses {
      export type AsObject = {
        simpleResponsesList: Array<Intent.Message.SimpleResponse.AsObject>,
      }
    }


    export class BasicCard extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): BasicCard;

      getSubtitle(): string;
      setSubtitle(value: string): BasicCard;

      getFormattedText(): string;
      setFormattedText(value: string): BasicCard;

      getImage(): Intent.Message.Image | undefined;
      setImage(value?: Intent.Message.Image): BasicCard;
      hasImage(): boolean;
      clearImage(): BasicCard;

      getButtonsList(): Array<Intent.Message.BasicCard.Button>;
      setButtonsList(value: Array<Intent.Message.BasicCard.Button>): BasicCard;
      clearButtonsList(): BasicCard;
      addButtons(value?: Intent.Message.BasicCard.Button, index?: number): Intent.Message.BasicCard.Button;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BasicCard.AsObject;
      static toObject(includeInstance: boolean, msg: BasicCard): BasicCard.AsObject;
      static serializeBinaryToWriter(message: BasicCard, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BasicCard;
      static deserializeBinaryFromReader(message: BasicCard, reader: jspb.BinaryReader): BasicCard;
    }

    export namespace BasicCard {
      export type AsObject = {
        title: string,
        subtitle: string,
        formattedText: string,
        image?: Intent.Message.Image.AsObject,
        buttonsList: Array<Intent.Message.BasicCard.Button.AsObject>,
      }

      export class Button extends jspb.Message {
        getTitle(): string;
        setTitle(value: string): Button;

        getOpenUriAction(): Intent.Message.BasicCard.Button.OpenUriAction | undefined;
        setOpenUriAction(value?: Intent.Message.BasicCard.Button.OpenUriAction): Button;
        hasOpenUriAction(): boolean;
        clearOpenUriAction(): Button;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Button.AsObject;
        static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
        static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Button;
        static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
      }

      export namespace Button {
        export type AsObject = {
          title: string,
          openUriAction?: Intent.Message.BasicCard.Button.OpenUriAction.AsObject,
        }

        export class OpenUriAction extends jspb.Message {
          getUri(): string;
          setUri(value: string): OpenUriAction;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): OpenUriAction.AsObject;
          static toObject(includeInstance: boolean, msg: OpenUriAction): OpenUriAction.AsObject;
          static serializeBinaryToWriter(message: OpenUriAction, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): OpenUriAction;
          static deserializeBinaryFromReader(message: OpenUriAction, reader: jspb.BinaryReader): OpenUriAction;
        }

        export namespace OpenUriAction {
          export type AsObject = {
            uri: string,
          }
        }

      }

    }


    export class Suggestion extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): Suggestion;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Suggestion.AsObject;
      static toObject(includeInstance: boolean, msg: Suggestion): Suggestion.AsObject;
      static serializeBinaryToWriter(message: Suggestion, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Suggestion;
      static deserializeBinaryFromReader(message: Suggestion, reader: jspb.BinaryReader): Suggestion;
    }

    export namespace Suggestion {
      export type AsObject = {
        title: string,
      }
    }


    export class Suggestions extends jspb.Message {
      getSuggestionsList(): Array<Intent.Message.Suggestion>;
      setSuggestionsList(value: Array<Intent.Message.Suggestion>): Suggestions;
      clearSuggestionsList(): Suggestions;
      addSuggestions(value?: Intent.Message.Suggestion, index?: number): Intent.Message.Suggestion;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Suggestions.AsObject;
      static toObject(includeInstance: boolean, msg: Suggestions): Suggestions.AsObject;
      static serializeBinaryToWriter(message: Suggestions, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Suggestions;
      static deserializeBinaryFromReader(message: Suggestions, reader: jspb.BinaryReader): Suggestions;
    }

    export namespace Suggestions {
      export type AsObject = {
        suggestionsList: Array<Intent.Message.Suggestion.AsObject>,
      }
    }


    export class LinkOutSuggestion extends jspb.Message {
      getDestinationName(): string;
      setDestinationName(value: string): LinkOutSuggestion;

      getUri(): string;
      setUri(value: string): LinkOutSuggestion;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LinkOutSuggestion.AsObject;
      static toObject(includeInstance: boolean, msg: LinkOutSuggestion): LinkOutSuggestion.AsObject;
      static serializeBinaryToWriter(message: LinkOutSuggestion, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LinkOutSuggestion;
      static deserializeBinaryFromReader(message: LinkOutSuggestion, reader: jspb.BinaryReader): LinkOutSuggestion;
    }

    export namespace LinkOutSuggestion {
      export type AsObject = {
        destinationName: string,
        uri: string,
      }
    }


    export class ListSelect extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): ListSelect;

      getItemsList(): Array<Intent.Message.ListSelect.Item>;
      setItemsList(value: Array<Intent.Message.ListSelect.Item>): ListSelect;
      clearItemsList(): ListSelect;
      addItems(value?: Intent.Message.ListSelect.Item, index?: number): Intent.Message.ListSelect.Item;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ListSelect.AsObject;
      static toObject(includeInstance: boolean, msg: ListSelect): ListSelect.AsObject;
      static serializeBinaryToWriter(message: ListSelect, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ListSelect;
      static deserializeBinaryFromReader(message: ListSelect, reader: jspb.BinaryReader): ListSelect;
    }

    export namespace ListSelect {
      export type AsObject = {
        title: string,
        itemsList: Array<Intent.Message.ListSelect.Item.AsObject>,
      }

      export class Item extends jspb.Message {
        getInfo(): Intent.Message.SelectItemInfo | undefined;
        setInfo(value?: Intent.Message.SelectItemInfo): Item;
        hasInfo(): boolean;
        clearInfo(): Item;

        getTitle(): string;
        setTitle(value: string): Item;

        getDescription(): string;
        setDescription(value: string): Item;

        getImage(): Intent.Message.Image | undefined;
        setImage(value?: Intent.Message.Image): Item;
        hasImage(): boolean;
        clearImage(): Item;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Item.AsObject;
        static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
        static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Item;
        static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
      }

      export namespace Item {
        export type AsObject = {
          info?: Intent.Message.SelectItemInfo.AsObject,
          title: string,
          description: string,
          image?: Intent.Message.Image.AsObject,
        }
      }

    }


    export class CarouselSelect extends jspb.Message {
      getItemsList(): Array<Intent.Message.CarouselSelect.Item>;
      setItemsList(value: Array<Intent.Message.CarouselSelect.Item>): CarouselSelect;
      clearItemsList(): CarouselSelect;
      addItems(value?: Intent.Message.CarouselSelect.Item, index?: number): Intent.Message.CarouselSelect.Item;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CarouselSelect.AsObject;
      static toObject(includeInstance: boolean, msg: CarouselSelect): CarouselSelect.AsObject;
      static serializeBinaryToWriter(message: CarouselSelect, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CarouselSelect;
      static deserializeBinaryFromReader(message: CarouselSelect, reader: jspb.BinaryReader): CarouselSelect;
    }

    export namespace CarouselSelect {
      export type AsObject = {
        itemsList: Array<Intent.Message.CarouselSelect.Item.AsObject>,
      }

      export class Item extends jspb.Message {
        getInfo(): Intent.Message.SelectItemInfo | undefined;
        setInfo(value?: Intent.Message.SelectItemInfo): Item;
        hasInfo(): boolean;
        clearInfo(): Item;

        getTitle(): string;
        setTitle(value: string): Item;

        getDescription(): string;
        setDescription(value: string): Item;

        getImage(): Intent.Message.Image | undefined;
        setImage(value?: Intent.Message.Image): Item;
        hasImage(): boolean;
        clearImage(): Item;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Item.AsObject;
        static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
        static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Item;
        static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
      }

      export namespace Item {
        export type AsObject = {
          info?: Intent.Message.SelectItemInfo.AsObject,
          title: string,
          description: string,
          image?: Intent.Message.Image.AsObject,
        }
      }

    }


    export class SelectItemInfo extends jspb.Message {
      getKey(): string;
      setKey(value: string): SelectItemInfo;

      getSynonymsList(): Array<string>;
      setSynonymsList(value: Array<string>): SelectItemInfo;
      clearSynonymsList(): SelectItemInfo;
      addSynonyms(value: string, index?: number): SelectItemInfo;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SelectItemInfo.AsObject;
      static toObject(includeInstance: boolean, msg: SelectItemInfo): SelectItemInfo.AsObject;
      static serializeBinaryToWriter(message: SelectItemInfo, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SelectItemInfo;
      static deserializeBinaryFromReader(message: SelectItemInfo, reader: jspb.BinaryReader): SelectItemInfo;
    }

    export namespace SelectItemInfo {
      export type AsObject = {
        key: string,
        synonymsList: Array<string>,
      }
    }


    export class TelephonyPlayAudio extends jspb.Message {
      getAudioUri(): string;
      setAudioUri(value: string): TelephonyPlayAudio;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TelephonyPlayAudio.AsObject;
      static toObject(includeInstance: boolean, msg: TelephonyPlayAudio): TelephonyPlayAudio.AsObject;
      static serializeBinaryToWriter(message: TelephonyPlayAudio, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TelephonyPlayAudio;
      static deserializeBinaryFromReader(message: TelephonyPlayAudio, reader: jspb.BinaryReader): TelephonyPlayAudio;
    }

    export namespace TelephonyPlayAudio {
      export type AsObject = {
        audioUri: string,
      }
    }


    export class TelephonySynthesizeSpeech extends jspb.Message {
      getText(): string;
      setText(value: string): TelephonySynthesizeSpeech;

      getSsml(): string;
      setSsml(value: string): TelephonySynthesizeSpeech;

      getSourceCase(): TelephonySynthesizeSpeech.SourceCase;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TelephonySynthesizeSpeech.AsObject;
      static toObject(includeInstance: boolean, msg: TelephonySynthesizeSpeech): TelephonySynthesizeSpeech.AsObject;
      static serializeBinaryToWriter(message: TelephonySynthesizeSpeech, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TelephonySynthesizeSpeech;
      static deserializeBinaryFromReader(message: TelephonySynthesizeSpeech, reader: jspb.BinaryReader): TelephonySynthesizeSpeech;
    }

    export namespace TelephonySynthesizeSpeech {
      export type AsObject = {
        text: string,
        ssml: string,
      }

      export enum SourceCase { 
        SOURCE_NOT_SET = 0,
        TEXT = 1,
        SSML = 2,
      }
    }


    export class TelephonyTransferCall extends jspb.Message {
      getPhoneNumber(): string;
      setPhoneNumber(value: string): TelephonyTransferCall;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TelephonyTransferCall.AsObject;
      static toObject(includeInstance: boolean, msg: TelephonyTransferCall): TelephonyTransferCall.AsObject;
      static serializeBinaryToWriter(message: TelephonyTransferCall, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TelephonyTransferCall;
      static deserializeBinaryFromReader(message: TelephonyTransferCall, reader: jspb.BinaryReader): TelephonyTransferCall;
    }

    export namespace TelephonyTransferCall {
      export type AsObject = {
        phoneNumber: string,
      }
    }


    export enum Platform { 
      PLATFORM_UNSPECIFIED = 0,
      FACEBOOK = 1,
      SLACK = 2,
      TELEGRAM = 3,
      KIK = 4,
      SKYPE = 5,
      LINE = 6,
      VIBER = 7,
      ACTIONS_ON_GOOGLE = 8,
      TELEPHONY = 10,
    }

    export enum MessageCase { 
      MESSAGE_NOT_SET = 0,
      TEXT = 1,
      IMAGE = 2,
      QUICK_REPLIES = 3,
      CARD = 4,
      PAYLOAD = 5,
      SIMPLE_RESPONSES = 7,
      BASIC_CARD = 8,
      SUGGESTIONS = 9,
      LINK_OUT_SUGGESTION = 10,
      LIST_SELECT = 11,
      CAROUSEL_SELECT = 12,
      TELEPHONY_PLAY_AUDIO = 13,
      TELEPHONY_SYNTHESIZE_SPEECH = 14,
      TELEPHONY_TRANSFER_CALL = 15,
    }
  }


  export class FollowupIntentInfo extends jspb.Message {
    getFollowupIntentName(): string;
    setFollowupIntentName(value: string): FollowupIntentInfo;

    getParentFollowupIntentName(): string;
    setParentFollowupIntentName(value: string): FollowupIntentInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowupIntentInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FollowupIntentInfo): FollowupIntentInfo.AsObject;
    static serializeBinaryToWriter(message: FollowupIntentInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowupIntentInfo;
    static deserializeBinaryFromReader(message: FollowupIntentInfo, reader: jspb.BinaryReader): FollowupIntentInfo;
  }

  export namespace FollowupIntentInfo {
    export type AsObject = {
      followupIntentName: string,
      parentFollowupIntentName: string,
    }
  }


  export enum WebhookState { 
    WEBHOOK_STATE_UNSPECIFIED = 0,
    WEBHOOK_STATE_ENABLED = 1,
    WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = 2,
  }
}

export class ListIntentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListIntentsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListIntentsRequest;

  getIntentView(): IntentView;
  setIntentView(value: IntentView): ListIntentsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListIntentsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListIntentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntentsRequest): ListIntentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListIntentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntentsRequest;
  static deserializeBinaryFromReader(message: ListIntentsRequest, reader: jspb.BinaryReader): ListIntentsRequest;
}

export namespace ListIntentsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    intentView: IntentView,
    pageSize: number,
    pageToken: string,
  }
}

export class ListIntentsResponse extends jspb.Message {
  getIntentsList(): Array<Intent>;
  setIntentsList(value: Array<Intent>): ListIntentsResponse;
  clearIntentsList(): ListIntentsResponse;
  addIntents(value?: Intent, index?: number): Intent;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListIntentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntentsResponse): ListIntentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListIntentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntentsResponse;
  static deserializeBinaryFromReader(message: ListIntentsResponse, reader: jspb.BinaryReader): ListIntentsResponse;
}

export namespace ListIntentsResponse {
  export type AsObject = {
    intentsList: Array<Intent.AsObject>,
    nextPageToken: string,
  }
}

export class GetIntentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetIntentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetIntentRequest;

  getIntentView(): IntentView;
  setIntentView(value: IntentView): GetIntentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntentRequest): GetIntentRequest.AsObject;
  static serializeBinaryToWriter(message: GetIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntentRequest;
  static deserializeBinaryFromReader(message: GetIntentRequest, reader: jspb.BinaryReader): GetIntentRequest;
}

export namespace GetIntentRequest {
  export type AsObject = {
    name: string,
    languageCode: string,
    intentView: IntentView,
  }
}

export class CreateIntentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateIntentRequest;

  getIntent(): Intent | undefined;
  setIntent(value?: Intent): CreateIntentRequest;
  hasIntent(): boolean;
  clearIntent(): CreateIntentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateIntentRequest;

  getIntentView(): IntentView;
  setIntentView(value: IntentView): CreateIntentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIntentRequest): CreateIntentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIntentRequest;
  static deserializeBinaryFromReader(message: CreateIntentRequest, reader: jspb.BinaryReader): CreateIntentRequest;
}

export namespace CreateIntentRequest {
  export type AsObject = {
    parent: string,
    intent?: Intent.AsObject,
    languageCode: string,
    intentView: IntentView,
  }
}

export class UpdateIntentRequest extends jspb.Message {
  getIntent(): Intent | undefined;
  setIntent(value?: Intent): UpdateIntentRequest;
  hasIntent(): boolean;
  clearIntent(): UpdateIntentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateIntentRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateIntentRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateIntentRequest;

  getIntentView(): IntentView;
  setIntentView(value: IntentView): UpdateIntentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateIntentRequest): UpdateIntentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateIntentRequest;
  static deserializeBinaryFromReader(message: UpdateIntentRequest, reader: jspb.BinaryReader): UpdateIntentRequest;
}

export namespace UpdateIntentRequest {
  export type AsObject = {
    intent?: Intent.AsObject,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    intentView: IntentView,
  }
}

export class DeleteIntentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteIntentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIntentRequest): DeleteIntentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIntentRequest;
  static deserializeBinaryFromReader(message: DeleteIntentRequest, reader: jspb.BinaryReader): DeleteIntentRequest;
}

export namespace DeleteIntentRequest {
  export type AsObject = {
    name: string,
  }
}

export class BatchUpdateIntentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchUpdateIntentsRequest;

  getIntentBatchUri(): string;
  setIntentBatchUri(value: string): BatchUpdateIntentsRequest;

  getIntentBatchInline(): IntentBatch | undefined;
  setIntentBatchInline(value?: IntentBatch): BatchUpdateIntentsRequest;
  hasIntentBatchInline(): boolean;
  clearIntentBatchInline(): BatchUpdateIntentsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): BatchUpdateIntentsRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): BatchUpdateIntentsRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): BatchUpdateIntentsRequest;

  getIntentView(): IntentView;
  setIntentView(value: IntentView): BatchUpdateIntentsRequest;

  getIntentBatchCase(): BatchUpdateIntentsRequest.IntentBatchCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateIntentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateIntentsRequest): BatchUpdateIntentsRequest.AsObject;
  static serializeBinaryToWriter(message: BatchUpdateIntentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateIntentsRequest;
  static deserializeBinaryFromReader(message: BatchUpdateIntentsRequest, reader: jspb.BinaryReader): BatchUpdateIntentsRequest;
}

export namespace BatchUpdateIntentsRequest {
  export type AsObject = {
    parent: string,
    intentBatchUri: string,
    intentBatchInline?: IntentBatch.AsObject,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    intentView: IntentView,
  }

  export enum IntentBatchCase { 
    INTENT_BATCH_NOT_SET = 0,
    INTENT_BATCH_URI = 2,
    INTENT_BATCH_INLINE = 3,
  }
}

export class BatchUpdateIntentsResponse extends jspb.Message {
  getIntentsList(): Array<Intent>;
  setIntentsList(value: Array<Intent>): BatchUpdateIntentsResponse;
  clearIntentsList(): BatchUpdateIntentsResponse;
  addIntents(value?: Intent, index?: number): Intent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateIntentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateIntentsResponse): BatchUpdateIntentsResponse.AsObject;
  static serializeBinaryToWriter(message: BatchUpdateIntentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateIntentsResponse;
  static deserializeBinaryFromReader(message: BatchUpdateIntentsResponse, reader: jspb.BinaryReader): BatchUpdateIntentsResponse;
}

export namespace BatchUpdateIntentsResponse {
  export type AsObject = {
    intentsList: Array<Intent.AsObject>,
  }
}

export class BatchDeleteIntentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchDeleteIntentsRequest;

  getIntentsList(): Array<Intent>;
  setIntentsList(value: Array<Intent>): BatchDeleteIntentsRequest;
  clearIntentsList(): BatchDeleteIntentsRequest;
  addIntents(value?: Intent, index?: number): Intent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchDeleteIntentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchDeleteIntentsRequest): BatchDeleteIntentsRequest.AsObject;
  static serializeBinaryToWriter(message: BatchDeleteIntentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchDeleteIntentsRequest;
  static deserializeBinaryFromReader(message: BatchDeleteIntentsRequest, reader: jspb.BinaryReader): BatchDeleteIntentsRequest;
}

export namespace BatchDeleteIntentsRequest {
  export type AsObject = {
    parent: string,
    intentsList: Array<Intent.AsObject>,
  }
}

export class IntentBatch extends jspb.Message {
  getIntentsList(): Array<Intent>;
  setIntentsList(value: Array<Intent>): IntentBatch;
  clearIntentsList(): IntentBatch;
  addIntents(value?: Intent, index?: number): Intent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntentBatch.AsObject;
  static toObject(includeInstance: boolean, msg: IntentBatch): IntentBatch.AsObject;
  static serializeBinaryToWriter(message: IntentBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntentBatch;
  static deserializeBinaryFromReader(message: IntentBatch, reader: jspb.BinaryReader): IntentBatch;
}

export namespace IntentBatch {
  export type AsObject = {
    intentsList: Array<Intent.AsObject>,
  }
}

export enum IntentView { 
  INTENT_VIEW_UNSPECIFIED = 0,
  INTENT_VIEW_FULL = 1,
}
