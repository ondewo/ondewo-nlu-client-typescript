import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class ReadGroup extends jspb.Message {
  getId(): string;
  setId(value: string): ReadGroup;

  getDatasetId(): string;
  setDatasetId(value: string): ReadGroup;

  getName(): string;
  setName(value: string): ReadGroup;

  getDescription(): string;
  setDescription(value: string): ReadGroup;

  getSampleId(): string;
  setSampleId(value: string): ReadGroup;

  getExperiment(): ReadGroup.Experiment | undefined;
  setExperiment(value?: ReadGroup.Experiment): ReadGroup;
  hasExperiment(): boolean;
  clearExperiment(): ReadGroup;

  getPredictedInsertSize(): number;
  setPredictedInsertSize(value: number): ReadGroup;

  getProgramsList(): Array<ReadGroup.Program>;
  setProgramsList(value: Array<ReadGroup.Program>): ReadGroup;
  clearProgramsList(): ReadGroup;
  addPrograms(value?: ReadGroup.Program, index?: number): ReadGroup.Program;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): ReadGroup;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): ReadGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ReadGroup): ReadGroup.AsObject;
  static serializeBinaryToWriter(message: ReadGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadGroup;
  static deserializeBinaryFromReader(message: ReadGroup, reader: jspb.BinaryReader): ReadGroup;
}

export namespace ReadGroup {
  export type AsObject = {
    id: string,
    datasetId: string,
    name: string,
    description: string,
    sampleId: string,
    experiment?: ReadGroup.Experiment.AsObject,
    predictedInsertSize: number,
    programsList: Array<ReadGroup.Program.AsObject>,
    referenceSetId: string,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }

  export class Experiment extends jspb.Message {
    getLibraryId(): string;
    setLibraryId(value: string): Experiment;

    getPlatformUnit(): string;
    setPlatformUnit(value: string): Experiment;

    getSequencingCenter(): string;
    setSequencingCenter(value: string): Experiment;

    getInstrumentModel(): string;
    setInstrumentModel(value: string): Experiment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Experiment.AsObject;
    static toObject(includeInstance: boolean, msg: Experiment): Experiment.AsObject;
    static serializeBinaryToWriter(message: Experiment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Experiment;
    static deserializeBinaryFromReader(message: Experiment, reader: jspb.BinaryReader): Experiment;
  }

  export namespace Experiment {
    export type AsObject = {
      libraryId: string,
      platformUnit: string,
      sequencingCenter: string,
      instrumentModel: string,
    }
  }


  export class Program extends jspb.Message {
    getCommandLine(): string;
    setCommandLine(value: string): Program;

    getId(): string;
    setId(value: string): Program;

    getName(): string;
    setName(value: string): Program;

    getPrevProgramId(): string;
    setPrevProgramId(value: string): Program;

    getVersion(): string;
    setVersion(value: string): Program;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Program.AsObject;
    static toObject(includeInstance: boolean, msg: Program): Program.AsObject;
    static serializeBinaryToWriter(message: Program, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Program;
    static deserializeBinaryFromReader(message: Program, reader: jspb.BinaryReader): Program;
  }

  export namespace Program {
    export type AsObject = {
      commandLine: string,
      id: string,
      name: string,
      prevProgramId: string,
      version: string,
    }
  }

}

