import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_monitoring_v3_common_pb from '../../../google/monitoring/v3/common_pb';
import * as google_monitoring_v3_mutation_record_pb from '../../../google/monitoring/v3/mutation_record_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class AlertPolicy extends jspb.Message {
  getName(): string;
  setName(value: string): AlertPolicy;

  getDisplayName(): string;
  setDisplayName(value: string): AlertPolicy;

  getDocumentation(): AlertPolicy.Documentation | undefined;
  setDocumentation(value?: AlertPolicy.Documentation): AlertPolicy;
  hasDocumentation(): boolean;
  clearDocumentation(): AlertPolicy;

  getUserLabelsMap(): jspb.Map<string, string>;
  clearUserLabelsMap(): AlertPolicy;

  getConditionsList(): Array<AlertPolicy.Condition>;
  setConditionsList(value: Array<AlertPolicy.Condition>): AlertPolicy;
  clearConditionsList(): AlertPolicy;
  addConditions(value?: AlertPolicy.Condition, index?: number): AlertPolicy.Condition;

  getCombiner(): AlertPolicy.ConditionCombinerType;
  setCombiner(value: AlertPolicy.ConditionCombinerType): AlertPolicy;

  getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): AlertPolicy;
  hasEnabled(): boolean;
  clearEnabled(): AlertPolicy;

  getNotificationChannelsList(): Array<string>;
  setNotificationChannelsList(value: Array<string>): AlertPolicy;
  clearNotificationChannelsList(): AlertPolicy;
  addNotificationChannels(value: string, index?: number): AlertPolicy;

  getCreationRecord(): google_monitoring_v3_mutation_record_pb.MutationRecord | undefined;
  setCreationRecord(value?: google_monitoring_v3_mutation_record_pb.MutationRecord): AlertPolicy;
  hasCreationRecord(): boolean;
  clearCreationRecord(): AlertPolicy;

  getMutationRecord(): google_monitoring_v3_mutation_record_pb.MutationRecord | undefined;
  setMutationRecord(value?: google_monitoring_v3_mutation_record_pb.MutationRecord): AlertPolicy;
  hasMutationRecord(): boolean;
  clearMutationRecord(): AlertPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: AlertPolicy): AlertPolicy.AsObject;
  static serializeBinaryToWriter(message: AlertPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertPolicy;
  static deserializeBinaryFromReader(message: AlertPolicy, reader: jspb.BinaryReader): AlertPolicy;
}

export namespace AlertPolicy {
  export type AsObject = {
    name: string,
    displayName: string,
    documentation?: AlertPolicy.Documentation.AsObject,
    userLabelsMap: Array<[string, string]>,
    conditionsList: Array<AlertPolicy.Condition.AsObject>,
    combiner: AlertPolicy.ConditionCombinerType,
    enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    notificationChannelsList: Array<string>,
    creationRecord?: google_monitoring_v3_mutation_record_pb.MutationRecord.AsObject,
    mutationRecord?: google_monitoring_v3_mutation_record_pb.MutationRecord.AsObject,
  }

  export class Documentation extends jspb.Message {
    getContent(): string;
    setContent(value: string): Documentation;

    getMimeType(): string;
    setMimeType(value: string): Documentation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Documentation.AsObject;
    static toObject(includeInstance: boolean, msg: Documentation): Documentation.AsObject;
    static serializeBinaryToWriter(message: Documentation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Documentation;
    static deserializeBinaryFromReader(message: Documentation, reader: jspb.BinaryReader): Documentation;
  }

  export namespace Documentation {
    export type AsObject = {
      content: string,
      mimeType: string,
    }
  }


  export class Condition extends jspb.Message {
    getName(): string;
    setName(value: string): Condition;

    getDisplayName(): string;
    setDisplayName(value: string): Condition;

    getConditionThreshold(): AlertPolicy.Condition.MetricThreshold | undefined;
    setConditionThreshold(value?: AlertPolicy.Condition.MetricThreshold): Condition;
    hasConditionThreshold(): boolean;
    clearConditionThreshold(): Condition;

    getConditionAbsent(): AlertPolicy.Condition.MetricAbsence | undefined;
    setConditionAbsent(value?: AlertPolicy.Condition.MetricAbsence): Condition;
    hasConditionAbsent(): boolean;
    clearConditionAbsent(): Condition;

    getConditionCase(): Condition.ConditionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condition.AsObject;
    static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
    static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condition;
    static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
  }

  export namespace Condition {
    export type AsObject = {
      name: string,
      displayName: string,
      conditionThreshold?: AlertPolicy.Condition.MetricThreshold.AsObject,
      conditionAbsent?: AlertPolicy.Condition.MetricAbsence.AsObject,
    }

    export class Trigger extends jspb.Message {
      getCount(): number;
      setCount(value: number): Trigger;

      getPercent(): number;
      setPercent(value: number): Trigger;

      getTypeCase(): Trigger.TypeCase;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Trigger.AsObject;
      static toObject(includeInstance: boolean, msg: Trigger): Trigger.AsObject;
      static serializeBinaryToWriter(message: Trigger, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Trigger;
      static deserializeBinaryFromReader(message: Trigger, reader: jspb.BinaryReader): Trigger;
    }

    export namespace Trigger {
      export type AsObject = {
        count: number,
        percent: number,
      }

      export enum TypeCase { 
        TYPE_NOT_SET = 0,
        COUNT = 1,
        PERCENT = 2,
      }
    }


    export class MetricThreshold extends jspb.Message {
      getFilter(): string;
      setFilter(value: string): MetricThreshold;

      getAggregationsList(): Array<google_monitoring_v3_common_pb.Aggregation>;
      setAggregationsList(value: Array<google_monitoring_v3_common_pb.Aggregation>): MetricThreshold;
      clearAggregationsList(): MetricThreshold;
      addAggregations(value?: google_monitoring_v3_common_pb.Aggregation, index?: number): google_monitoring_v3_common_pb.Aggregation;

      getDenominatorFilter(): string;
      setDenominatorFilter(value: string): MetricThreshold;

      getDenominatorAggregationsList(): Array<google_monitoring_v3_common_pb.Aggregation>;
      setDenominatorAggregationsList(value: Array<google_monitoring_v3_common_pb.Aggregation>): MetricThreshold;
      clearDenominatorAggregationsList(): MetricThreshold;
      addDenominatorAggregations(value?: google_monitoring_v3_common_pb.Aggregation, index?: number): google_monitoring_v3_common_pb.Aggregation;

      getComparison(): google_monitoring_v3_common_pb.ComparisonType;
      setComparison(value: google_monitoring_v3_common_pb.ComparisonType): MetricThreshold;

      getThresholdValue(): number;
      setThresholdValue(value: number): MetricThreshold;

      getDuration(): google_protobuf_duration_pb.Duration | undefined;
      setDuration(value?: google_protobuf_duration_pb.Duration): MetricThreshold;
      hasDuration(): boolean;
      clearDuration(): MetricThreshold;

      getTrigger(): AlertPolicy.Condition.Trigger | undefined;
      setTrigger(value?: AlertPolicy.Condition.Trigger): MetricThreshold;
      hasTrigger(): boolean;
      clearTrigger(): MetricThreshold;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MetricThreshold.AsObject;
      static toObject(includeInstance: boolean, msg: MetricThreshold): MetricThreshold.AsObject;
      static serializeBinaryToWriter(message: MetricThreshold, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MetricThreshold;
      static deserializeBinaryFromReader(message: MetricThreshold, reader: jspb.BinaryReader): MetricThreshold;
    }

    export namespace MetricThreshold {
      export type AsObject = {
        filter: string,
        aggregationsList: Array<google_monitoring_v3_common_pb.Aggregation.AsObject>,
        denominatorFilter: string,
        denominatorAggregationsList: Array<google_monitoring_v3_common_pb.Aggregation.AsObject>,
        comparison: google_monitoring_v3_common_pb.ComparisonType,
        thresholdValue: number,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
        trigger?: AlertPolicy.Condition.Trigger.AsObject,
      }
    }


    export class MetricAbsence extends jspb.Message {
      getFilter(): string;
      setFilter(value: string): MetricAbsence;

      getAggregationsList(): Array<google_monitoring_v3_common_pb.Aggregation>;
      setAggregationsList(value: Array<google_monitoring_v3_common_pb.Aggregation>): MetricAbsence;
      clearAggregationsList(): MetricAbsence;
      addAggregations(value?: google_monitoring_v3_common_pb.Aggregation, index?: number): google_monitoring_v3_common_pb.Aggregation;

      getDuration(): google_protobuf_duration_pb.Duration | undefined;
      setDuration(value?: google_protobuf_duration_pb.Duration): MetricAbsence;
      hasDuration(): boolean;
      clearDuration(): MetricAbsence;

      getTrigger(): AlertPolicy.Condition.Trigger | undefined;
      setTrigger(value?: AlertPolicy.Condition.Trigger): MetricAbsence;
      hasTrigger(): boolean;
      clearTrigger(): MetricAbsence;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MetricAbsence.AsObject;
      static toObject(includeInstance: boolean, msg: MetricAbsence): MetricAbsence.AsObject;
      static serializeBinaryToWriter(message: MetricAbsence, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MetricAbsence;
      static deserializeBinaryFromReader(message: MetricAbsence, reader: jspb.BinaryReader): MetricAbsence;
    }

    export namespace MetricAbsence {
      export type AsObject = {
        filter: string,
        aggregationsList: Array<google_monitoring_v3_common_pb.Aggregation.AsObject>,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
        trigger?: AlertPolicy.Condition.Trigger.AsObject,
      }
    }


    export enum ConditionCase { 
      CONDITION_NOT_SET = 0,
      CONDITION_THRESHOLD = 1,
      CONDITION_ABSENT = 2,
    }
  }


  export enum ConditionCombinerType { 
    COMBINE_UNSPECIFIED = 0,
    AND = 1,
    OR = 2,
    AND_WITH_MATCHING_RESOURCE = 3,
  }
}

