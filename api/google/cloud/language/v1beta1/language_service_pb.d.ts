import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class Document extends jspb.Message {
  getType(): Document.Type;
  setType(value: Document.Type): Document;

  getContent(): string;
  setContent(value: string): Document;

  getGcsContentUri(): string;
  setGcsContentUri(value: string): Document;

  getLanguage(): string;
  setLanguage(value: string): Document;

  getSourceCase(): Document.SourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    type: Document.Type,
    content: string,
    gcsContentUri: string,
    language: string,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    PLAIN_TEXT = 1,
    HTML = 2,
  }

  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    CONTENT = 2,
    GCS_CONTENT_URI = 3,
  }
}

export class Sentence extends jspb.Message {
  getText(): TextSpan | undefined;
  setText(value?: TextSpan): Sentence;
  hasText(): boolean;
  clearText(): Sentence;

  getSentiment(): Sentiment | undefined;
  setSentiment(value?: Sentiment): Sentence;
  hasSentiment(): boolean;
  clearSentiment(): Sentence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sentence.AsObject;
  static toObject(includeInstance: boolean, msg: Sentence): Sentence.AsObject;
  static serializeBinaryToWriter(message: Sentence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sentence;
  static deserializeBinaryFromReader(message: Sentence, reader: jspb.BinaryReader): Sentence;
}

export namespace Sentence {
  export type AsObject = {
    text?: TextSpan.AsObject,
    sentiment?: Sentiment.AsObject,
  }
}

export class Entity extends jspb.Message {
  getName(): string;
  setName(value: string): Entity;

  getType(): Entity.Type;
  setType(value: Entity.Type): Entity;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): Entity;

  getSalience(): number;
  setSalience(value: number): Entity;

  getMentionsList(): Array<EntityMention>;
  setMentionsList(value: Array<EntityMention>): Entity;
  clearMentionsList(): Entity;
  addMentions(value?: EntityMention, index?: number): EntityMention;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    name: string,
    type: Entity.Type,
    metadataMap: Array<[string, string]>,
    salience: number,
    mentionsList: Array<EntityMention.AsObject>,
  }

  export enum Type { 
    UNKNOWN = 0,
    PERSON = 1,
    LOCATION = 2,
    ORGANIZATION = 3,
    EVENT = 4,
    WORK_OF_ART = 5,
    CONSUMER_GOOD = 6,
    OTHER = 7,
  }
}

export class Token extends jspb.Message {
  getText(): TextSpan | undefined;
  setText(value?: TextSpan): Token;
  hasText(): boolean;
  clearText(): Token;

  getPartOfSpeech(): PartOfSpeech | undefined;
  setPartOfSpeech(value?: PartOfSpeech): Token;
  hasPartOfSpeech(): boolean;
  clearPartOfSpeech(): Token;

  getDependencyEdge(): DependencyEdge | undefined;
  setDependencyEdge(value?: DependencyEdge): Token;
  hasDependencyEdge(): boolean;
  clearDependencyEdge(): Token;

  getLemma(): string;
  setLemma(value: string): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    text?: TextSpan.AsObject,
    partOfSpeech?: PartOfSpeech.AsObject,
    dependencyEdge?: DependencyEdge.AsObject,
    lemma: string,
  }
}

export class Sentiment extends jspb.Message {
  getPolarity(): number;
  setPolarity(value: number): Sentiment;

  getMagnitude(): number;
  setMagnitude(value: number): Sentiment;

  getScore(): number;
  setScore(value: number): Sentiment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sentiment.AsObject;
  static toObject(includeInstance: boolean, msg: Sentiment): Sentiment.AsObject;
  static serializeBinaryToWriter(message: Sentiment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sentiment;
  static deserializeBinaryFromReader(message: Sentiment, reader: jspb.BinaryReader): Sentiment;
}

export namespace Sentiment {
  export type AsObject = {
    polarity: number,
    magnitude: number,
    score: number,
  }
}

export class PartOfSpeech extends jspb.Message {
  getTag(): PartOfSpeech.Tag;
  setTag(value: PartOfSpeech.Tag): PartOfSpeech;

  getAspect(): PartOfSpeech.Aspect;
  setAspect(value: PartOfSpeech.Aspect): PartOfSpeech;

  getCase(): PartOfSpeech.Case;
  setCase(value: PartOfSpeech.Case): PartOfSpeech;

  getForm(): PartOfSpeech.Form;
  setForm(value: PartOfSpeech.Form): PartOfSpeech;

  getGender(): PartOfSpeech.Gender;
  setGender(value: PartOfSpeech.Gender): PartOfSpeech;

  getMood(): PartOfSpeech.Mood;
  setMood(value: PartOfSpeech.Mood): PartOfSpeech;

  getNumber(): PartOfSpeech.Number;
  setNumber(value: PartOfSpeech.Number): PartOfSpeech;

  getPerson(): PartOfSpeech.Person;
  setPerson(value: PartOfSpeech.Person): PartOfSpeech;

  getProper(): PartOfSpeech.Proper;
  setProper(value: PartOfSpeech.Proper): PartOfSpeech;

  getReciprocity(): PartOfSpeech.Reciprocity;
  setReciprocity(value: PartOfSpeech.Reciprocity): PartOfSpeech;

  getTense(): PartOfSpeech.Tense;
  setTense(value: PartOfSpeech.Tense): PartOfSpeech;

  getVoice(): PartOfSpeech.Voice;
  setVoice(value: PartOfSpeech.Voice): PartOfSpeech;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartOfSpeech.AsObject;
  static toObject(includeInstance: boolean, msg: PartOfSpeech): PartOfSpeech.AsObject;
  static serializeBinaryToWriter(message: PartOfSpeech, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartOfSpeech;
  static deserializeBinaryFromReader(message: PartOfSpeech, reader: jspb.BinaryReader): PartOfSpeech;
}

export namespace PartOfSpeech {
  export type AsObject = {
    tag: PartOfSpeech.Tag,
    aspect: PartOfSpeech.Aspect,
    pb_case: PartOfSpeech.Case,
    form: PartOfSpeech.Form,
    gender: PartOfSpeech.Gender,
    mood: PartOfSpeech.Mood,
    number: PartOfSpeech.Number,
    person: PartOfSpeech.Person,
    proper: PartOfSpeech.Proper,
    reciprocity: PartOfSpeech.Reciprocity,
    tense: PartOfSpeech.Tense,
    voice: PartOfSpeech.Voice,
  }

  export enum Tag { 
    UNKNOWN = 0,
    ADJ = 1,
    ADP = 2,
    ADV = 3,
    CONJ = 4,
    DET = 5,
    NOUN = 6,
    NUM = 7,
    PRON = 8,
    PRT = 9,
    PUNCT = 10,
    VERB = 11,
    X = 12,
    AFFIX = 13,
  }

  export enum Aspect { 
    ASPECT_UNKNOWN = 0,
    PERFECTIVE = 1,
    IMPERFECTIVE = 2,
    PROGRESSIVE = 3,
  }

  export enum Case { 
    CASE_UNKNOWN = 0,
    ACCUSATIVE = 1,
    ADVERBIAL = 2,
    COMPLEMENTIVE = 3,
    DATIVE = 4,
    GENITIVE = 5,
    INSTRUMENTAL = 6,
    LOCATIVE = 7,
    NOMINATIVE = 8,
    OBLIQUE = 9,
    PARTITIVE = 10,
    PREPOSITIONAL = 11,
    REFLEXIVE_CASE = 12,
    RELATIVE_CASE = 13,
    VOCATIVE = 14,
  }

  export enum Form { 
    FORM_UNKNOWN = 0,
    ADNOMIAL = 1,
    AUXILIARY = 2,
    COMPLEMENTIZER = 3,
    FINAL_ENDING = 4,
    GERUND = 5,
    REALIS = 6,
    IRREALIS = 7,
    SHORT = 8,
    LONG = 9,
    ORDER = 10,
    SPECIFIC = 11,
  }

  export enum Gender { 
    GENDER_UNKNOWN = 0,
    FEMININE = 1,
    MASCULINE = 2,
    NEUTER = 3,
  }

  export enum Mood { 
    MOOD_UNKNOWN = 0,
    CONDITIONAL_MOOD = 1,
    IMPERATIVE = 2,
    INDICATIVE = 3,
    INTERROGATIVE = 4,
    JUSSIVE = 5,
    SUBJUNCTIVE = 6,
  }

  export enum Number { 
    NUMBER_UNKNOWN = 0,
    SINGULAR = 1,
    PLURAL = 2,
    DUAL = 3,
  }

  export enum Person { 
    PERSON_UNKNOWN = 0,
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
    REFLEXIVE_PERSON = 4,
  }

  export enum Proper { 
    PROPER_UNKNOWN = 0,
    PROPER = 1,
    NOT_PROPER = 2,
  }

  export enum Reciprocity { 
    RECIPROCITY_UNKNOWN = 0,
    RECIPROCAL = 1,
    NON_RECIPROCAL = 2,
  }

  export enum Tense { 
    TENSE_UNKNOWN = 0,
    CONDITIONAL_TENSE = 1,
    FUTURE = 2,
    PAST = 3,
    PRESENT = 4,
    IMPERFECT = 5,
    PLUPERFECT = 6,
  }

  export enum Voice { 
    VOICE_UNKNOWN = 0,
    ACTIVE = 1,
    CAUSATIVE = 2,
    PASSIVE = 3,
  }
}

export class DependencyEdge extends jspb.Message {
  getHeadTokenIndex(): number;
  setHeadTokenIndex(value: number): DependencyEdge;

  getLabel(): DependencyEdge.Label;
  setLabel(value: DependencyEdge.Label): DependencyEdge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DependencyEdge.AsObject;
  static toObject(includeInstance: boolean, msg: DependencyEdge): DependencyEdge.AsObject;
  static serializeBinaryToWriter(message: DependencyEdge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DependencyEdge;
  static deserializeBinaryFromReader(message: DependencyEdge, reader: jspb.BinaryReader): DependencyEdge;
}

export namespace DependencyEdge {
  export type AsObject = {
    headTokenIndex: number,
    label: DependencyEdge.Label,
  }

  export enum Label { 
    UNKNOWN = 0,
    ABBREV = 1,
    ACOMP = 2,
    ADVCL = 3,
    ADVMOD = 4,
    AMOD = 5,
    APPOS = 6,
    ATTR = 7,
    AUX = 8,
    AUXPASS = 9,
    CC = 10,
    CCOMP = 11,
    CONJ = 12,
    CSUBJ = 13,
    CSUBJPASS = 14,
    DEP = 15,
    DET = 16,
    DISCOURSE = 17,
    DOBJ = 18,
    EXPL = 19,
    GOESWITH = 20,
    IOBJ = 21,
    MARK = 22,
    MWE = 23,
    MWV = 24,
    NEG = 25,
    NN = 26,
    NPADVMOD = 27,
    NSUBJ = 28,
    NSUBJPASS = 29,
    NUM = 30,
    NUMBER = 31,
    P = 32,
    PARATAXIS = 33,
    PARTMOD = 34,
    PCOMP = 35,
    POBJ = 36,
    POSS = 37,
    POSTNEG = 38,
    PRECOMP = 39,
    PRECONJ = 40,
    PREDET = 41,
    PREF = 42,
    PREP = 43,
    PRONL = 44,
    PRT = 45,
    PS = 46,
    QUANTMOD = 47,
    RCMOD = 48,
    RCMODREL = 49,
    RDROP = 50,
    REF = 51,
    REMNANT = 52,
    REPARANDUM = 53,
    ROOT = 54,
    SNUM = 55,
    SUFF = 56,
    TMOD = 57,
    TOPIC = 58,
    VMOD = 59,
    VOCATIVE = 60,
    XCOMP = 61,
    SUFFIX = 62,
    TITLE = 63,
    ADVPHMOD = 64,
    AUXCAUS = 65,
    AUXVV = 66,
    DTMOD = 67,
    FOREIGN = 68,
    KW = 69,
    LIST = 70,
    NOMC = 71,
    NOMCSUBJ = 72,
    NOMCSUBJPASS = 73,
    NUMC = 74,
    COP = 75,
    DISLOCATED = 76,
  }
}

export class EntityMention extends jspb.Message {
  getText(): TextSpan | undefined;
  setText(value?: TextSpan): EntityMention;
  hasText(): boolean;
  clearText(): EntityMention;

  getType(): EntityMention.Type;
  setType(value: EntityMention.Type): EntityMention;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityMention.AsObject;
  static toObject(includeInstance: boolean, msg: EntityMention): EntityMention.AsObject;
  static serializeBinaryToWriter(message: EntityMention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityMention;
  static deserializeBinaryFromReader(message: EntityMention, reader: jspb.BinaryReader): EntityMention;
}

export namespace EntityMention {
  export type AsObject = {
    text?: TextSpan.AsObject,
    type: EntityMention.Type,
  }

  export enum Type { 
    TYPE_UNKNOWN = 0,
    PROPER = 1,
    COMMON = 2,
  }
}

export class TextSpan extends jspb.Message {
  getContent(): string;
  setContent(value: string): TextSpan;

  getBeginOffset(): number;
  setBeginOffset(value: number): TextSpan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSpan.AsObject;
  static toObject(includeInstance: boolean, msg: TextSpan): TextSpan.AsObject;
  static serializeBinaryToWriter(message: TextSpan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSpan;
  static deserializeBinaryFromReader(message: TextSpan, reader: jspb.BinaryReader): TextSpan;
}

export namespace TextSpan {
  export type AsObject = {
    content: string,
    beginOffset: number,
  }
}

export class AnalyzeSentimentRequest extends jspb.Message {
  getDocument(): Document | undefined;
  setDocument(value?: Document): AnalyzeSentimentRequest;
  hasDocument(): boolean;
  clearDocument(): AnalyzeSentimentRequest;

  getEncodingType(): EncodingType;
  setEncodingType(value: EncodingType): AnalyzeSentimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyzeSentimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyzeSentimentRequest): AnalyzeSentimentRequest.AsObject;
  static serializeBinaryToWriter(message: AnalyzeSentimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyzeSentimentRequest;
  static deserializeBinaryFromReader(message: AnalyzeSentimentRequest, reader: jspb.BinaryReader): AnalyzeSentimentRequest;
}

export namespace AnalyzeSentimentRequest {
  export type AsObject = {
    document?: Document.AsObject,
    encodingType: EncodingType,
  }
}

export class AnalyzeSentimentResponse extends jspb.Message {
  getDocumentSentiment(): Sentiment | undefined;
  setDocumentSentiment(value?: Sentiment): AnalyzeSentimentResponse;
  hasDocumentSentiment(): boolean;
  clearDocumentSentiment(): AnalyzeSentimentResponse;

  getLanguage(): string;
  setLanguage(value: string): AnalyzeSentimentResponse;

  getSentencesList(): Array<Sentence>;
  setSentencesList(value: Array<Sentence>): AnalyzeSentimentResponse;
  clearSentencesList(): AnalyzeSentimentResponse;
  addSentences(value?: Sentence, index?: number): Sentence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyzeSentimentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyzeSentimentResponse): AnalyzeSentimentResponse.AsObject;
  static serializeBinaryToWriter(message: AnalyzeSentimentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyzeSentimentResponse;
  static deserializeBinaryFromReader(message: AnalyzeSentimentResponse, reader: jspb.BinaryReader): AnalyzeSentimentResponse;
}

export namespace AnalyzeSentimentResponse {
  export type AsObject = {
    documentSentiment?: Sentiment.AsObject,
    language: string,
    sentencesList: Array<Sentence.AsObject>,
  }
}

export class AnalyzeEntitiesRequest extends jspb.Message {
  getDocument(): Document | undefined;
  setDocument(value?: Document): AnalyzeEntitiesRequest;
  hasDocument(): boolean;
  clearDocument(): AnalyzeEntitiesRequest;

  getEncodingType(): EncodingType;
  setEncodingType(value: EncodingType): AnalyzeEntitiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyzeEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyzeEntitiesRequest): AnalyzeEntitiesRequest.AsObject;
  static serializeBinaryToWriter(message: AnalyzeEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyzeEntitiesRequest;
  static deserializeBinaryFromReader(message: AnalyzeEntitiesRequest, reader: jspb.BinaryReader): AnalyzeEntitiesRequest;
}

export namespace AnalyzeEntitiesRequest {
  export type AsObject = {
    document?: Document.AsObject,
    encodingType: EncodingType,
  }
}

export class AnalyzeEntitiesResponse extends jspb.Message {
  getEntitiesList(): Array<Entity>;
  setEntitiesList(value: Array<Entity>): AnalyzeEntitiesResponse;
  clearEntitiesList(): AnalyzeEntitiesResponse;
  addEntities(value?: Entity, index?: number): Entity;

  getLanguage(): string;
  setLanguage(value: string): AnalyzeEntitiesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyzeEntitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyzeEntitiesResponse): AnalyzeEntitiesResponse.AsObject;
  static serializeBinaryToWriter(message: AnalyzeEntitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyzeEntitiesResponse;
  static deserializeBinaryFromReader(message: AnalyzeEntitiesResponse, reader: jspb.BinaryReader): AnalyzeEntitiesResponse;
}

export namespace AnalyzeEntitiesResponse {
  export type AsObject = {
    entitiesList: Array<Entity.AsObject>,
    language: string,
  }
}

export class AnalyzeSyntaxRequest extends jspb.Message {
  getDocument(): Document | undefined;
  setDocument(value?: Document): AnalyzeSyntaxRequest;
  hasDocument(): boolean;
  clearDocument(): AnalyzeSyntaxRequest;

  getEncodingType(): EncodingType;
  setEncodingType(value: EncodingType): AnalyzeSyntaxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyzeSyntaxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyzeSyntaxRequest): AnalyzeSyntaxRequest.AsObject;
  static serializeBinaryToWriter(message: AnalyzeSyntaxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyzeSyntaxRequest;
  static deserializeBinaryFromReader(message: AnalyzeSyntaxRequest, reader: jspb.BinaryReader): AnalyzeSyntaxRequest;
}

export namespace AnalyzeSyntaxRequest {
  export type AsObject = {
    document?: Document.AsObject,
    encodingType: EncodingType,
  }
}

export class AnalyzeSyntaxResponse extends jspb.Message {
  getSentencesList(): Array<Sentence>;
  setSentencesList(value: Array<Sentence>): AnalyzeSyntaxResponse;
  clearSentencesList(): AnalyzeSyntaxResponse;
  addSentences(value?: Sentence, index?: number): Sentence;

  getTokensList(): Array<Token>;
  setTokensList(value: Array<Token>): AnalyzeSyntaxResponse;
  clearTokensList(): AnalyzeSyntaxResponse;
  addTokens(value?: Token, index?: number): Token;

  getLanguage(): string;
  setLanguage(value: string): AnalyzeSyntaxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyzeSyntaxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyzeSyntaxResponse): AnalyzeSyntaxResponse.AsObject;
  static serializeBinaryToWriter(message: AnalyzeSyntaxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyzeSyntaxResponse;
  static deserializeBinaryFromReader(message: AnalyzeSyntaxResponse, reader: jspb.BinaryReader): AnalyzeSyntaxResponse;
}

export namespace AnalyzeSyntaxResponse {
  export type AsObject = {
    sentencesList: Array<Sentence.AsObject>,
    tokensList: Array<Token.AsObject>,
    language: string,
  }
}

export class AnnotateTextRequest extends jspb.Message {
  getDocument(): Document | undefined;
  setDocument(value?: Document): AnnotateTextRequest;
  hasDocument(): boolean;
  clearDocument(): AnnotateTextRequest;

  getFeatures(): AnnotateTextRequest.Features | undefined;
  setFeatures(value?: AnnotateTextRequest.Features): AnnotateTextRequest;
  hasFeatures(): boolean;
  clearFeatures(): AnnotateTextRequest;

  getEncodingType(): EncodingType;
  setEncodingType(value: EncodingType): AnnotateTextRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateTextRequest): AnnotateTextRequest.AsObject;
  static serializeBinaryToWriter(message: AnnotateTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateTextRequest;
  static deserializeBinaryFromReader(message: AnnotateTextRequest, reader: jspb.BinaryReader): AnnotateTextRequest;
}

export namespace AnnotateTextRequest {
  export type AsObject = {
    document?: Document.AsObject,
    features?: AnnotateTextRequest.Features.AsObject,
    encodingType: EncodingType,
  }

  export class Features extends jspb.Message {
    getExtractSyntax(): boolean;
    setExtractSyntax(value: boolean): Features;

    getExtractEntities(): boolean;
    setExtractEntities(value: boolean): Features;

    getExtractDocumentSentiment(): boolean;
    setExtractDocumentSentiment(value: boolean): Features;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Features.AsObject;
    static toObject(includeInstance: boolean, msg: Features): Features.AsObject;
    static serializeBinaryToWriter(message: Features, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Features;
    static deserializeBinaryFromReader(message: Features, reader: jspb.BinaryReader): Features;
  }

  export namespace Features {
    export type AsObject = {
      extractSyntax: boolean,
      extractEntities: boolean,
      extractDocumentSentiment: boolean,
    }
  }

}

export class AnnotateTextResponse extends jspb.Message {
  getSentencesList(): Array<Sentence>;
  setSentencesList(value: Array<Sentence>): AnnotateTextResponse;
  clearSentencesList(): AnnotateTextResponse;
  addSentences(value?: Sentence, index?: number): Sentence;

  getTokensList(): Array<Token>;
  setTokensList(value: Array<Token>): AnnotateTextResponse;
  clearTokensList(): AnnotateTextResponse;
  addTokens(value?: Token, index?: number): Token;

  getEntitiesList(): Array<Entity>;
  setEntitiesList(value: Array<Entity>): AnnotateTextResponse;
  clearEntitiesList(): AnnotateTextResponse;
  addEntities(value?: Entity, index?: number): Entity;

  getDocumentSentiment(): Sentiment | undefined;
  setDocumentSentiment(value?: Sentiment): AnnotateTextResponse;
  hasDocumentSentiment(): boolean;
  clearDocumentSentiment(): AnnotateTextResponse;

  getLanguage(): string;
  setLanguage(value: string): AnnotateTextResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateTextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateTextResponse): AnnotateTextResponse.AsObject;
  static serializeBinaryToWriter(message: AnnotateTextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateTextResponse;
  static deserializeBinaryFromReader(message: AnnotateTextResponse, reader: jspb.BinaryReader): AnnotateTextResponse;
}

export namespace AnnotateTextResponse {
  export type AsObject = {
    sentencesList: Array<Sentence.AsObject>,
    tokensList: Array<Token.AsObject>,
    entitiesList: Array<Entity.AsObject>,
    documentSentiment?: Sentiment.AsObject,
    language: string,
  }
}

export enum EncodingType { 
  NONE = 0,
  UTF8 = 1,
  UTF16 = 2,
  UTF32 = 3,
}
