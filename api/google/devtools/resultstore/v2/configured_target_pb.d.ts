import * as jspb from 'google-protobuf'

import * as google_devtools_resultstore_v2_common_pb from '../../../../google/devtools/resultstore/v2/common_pb';
import * as google_devtools_resultstore_v2_coverage_summary_pb from '../../../../google/devtools/resultstore/v2/coverage_summary_pb';
import * as google_devtools_resultstore_v2_file_pb from '../../../../google/devtools/resultstore/v2/file_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class ConfiguredTarget extends jspb.Message {
  getName(): string;
  setName(value: string): ConfiguredTarget;

  getId(): ConfiguredTarget.Id | undefined;
  setId(value?: ConfiguredTarget.Id): ConfiguredTarget;
  hasId(): boolean;
  clearId(): ConfiguredTarget;

  getStatusAttributes(): google_devtools_resultstore_v2_common_pb.StatusAttributes | undefined;
  setStatusAttributes(value?: google_devtools_resultstore_v2_common_pb.StatusAttributes): ConfiguredTarget;
  hasStatusAttributes(): boolean;
  clearStatusAttributes(): ConfiguredTarget;

  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): ConfiguredTarget;
  hasTiming(): boolean;
  clearTiming(): ConfiguredTarget;

  getTestAttributes(): ConfiguredTestAttributes | undefined;
  setTestAttributes(value?: ConfiguredTestAttributes): ConfiguredTarget;
  hasTestAttributes(): boolean;
  clearTestAttributes(): ConfiguredTarget;

  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): ConfiguredTarget;
  clearPropertiesList(): ConfiguredTarget;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): ConfiguredTarget;
  clearFilesList(): ConfiguredTarget;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  getCoverageSummariesList(): Array<google_devtools_resultstore_v2_coverage_summary_pb.LanguageCoverageSummary>;
  setCoverageSummariesList(value: Array<google_devtools_resultstore_v2_coverage_summary_pb.LanguageCoverageSummary>): ConfiguredTarget;
  clearCoverageSummariesList(): ConfiguredTarget;
  addCoverageSummaries(value?: google_devtools_resultstore_v2_coverage_summary_pb.LanguageCoverageSummary, index?: number): google_devtools_resultstore_v2_coverage_summary_pb.LanguageCoverageSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfiguredTarget.AsObject;
  static toObject(includeInstance: boolean, msg: ConfiguredTarget): ConfiguredTarget.AsObject;
  static serializeBinaryToWriter(message: ConfiguredTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfiguredTarget;
  static deserializeBinaryFromReader(message: ConfiguredTarget, reader: jspb.BinaryReader): ConfiguredTarget;
}

export namespace ConfiguredTarget {
  export type AsObject = {
    name: string,
    id?: ConfiguredTarget.Id.AsObject,
    statusAttributes?: google_devtools_resultstore_v2_common_pb.StatusAttributes.AsObject,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    testAttributes?: ConfiguredTestAttributes.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
    coverageSummariesList: Array<google_devtools_resultstore_v2_coverage_summary_pb.LanguageCoverageSummary.AsObject>,
  }

  export class Id extends jspb.Message {
    getInvocationId(): string;
    setInvocationId(value: string): Id;

    getTargetId(): string;
    setTargetId(value: string): Id;

    getConfigurationId(): string;
    setConfigurationId(value: string): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      invocationId: string,
      targetId: string,
      configurationId: string,
    }
  }

}

export class ConfiguredTestAttributes extends jspb.Message {
  getTotalRunCount(): number;
  setTotalRunCount(value: number): ConfiguredTestAttributes;

  getTotalShardCount(): number;
  setTotalShardCount(value: number): ConfiguredTestAttributes;

  getTimeoutDuration(): google_protobuf_duration_pb.Duration | undefined;
  setTimeoutDuration(value?: google_protobuf_duration_pb.Duration): ConfiguredTestAttributes;
  hasTimeoutDuration(): boolean;
  clearTimeoutDuration(): ConfiguredTestAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfiguredTestAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ConfiguredTestAttributes): ConfiguredTestAttributes.AsObject;
  static serializeBinaryToWriter(message: ConfiguredTestAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfiguredTestAttributes;
  static deserializeBinaryFromReader(message: ConfiguredTestAttributes, reader: jspb.BinaryReader): ConfiguredTestAttributes;
}

export namespace ConfiguredTestAttributes {
  export type AsObject = {
    totalRunCount: number,
    totalShardCount: number,
    timeoutDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

