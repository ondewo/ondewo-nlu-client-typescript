import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_auth_pb from '../../../../google/api/auth_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TrainingInput extends jspb.Message {
  getScaleTier(): TrainingInput.ScaleTier;
  setScaleTier(value: TrainingInput.ScaleTier): TrainingInput;

  getMasterType(): string;
  setMasterType(value: string): TrainingInput;

  getWorkerType(): string;
  setWorkerType(value: string): TrainingInput;

  getParameterServerType(): string;
  setParameterServerType(value: string): TrainingInput;

  getWorkerCount(): number;
  setWorkerCount(value: number): TrainingInput;

  getParameterServerCount(): number;
  setParameterServerCount(value: number): TrainingInput;

  getPackageUrisList(): Array<string>;
  setPackageUrisList(value: Array<string>): TrainingInput;
  clearPackageUrisList(): TrainingInput;
  addPackageUris(value: string, index?: number): TrainingInput;

  getPythonModule(): string;
  setPythonModule(value: string): TrainingInput;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): TrainingInput;
  clearArgsList(): TrainingInput;
  addArgs(value: string, index?: number): TrainingInput;

  getHyperparameters(): HyperparameterSpec | undefined;
  setHyperparameters(value?: HyperparameterSpec): TrainingInput;
  hasHyperparameters(): boolean;
  clearHyperparameters(): TrainingInput;

  getRegion(): string;
  setRegion(value: string): TrainingInput;

  getJobDir(): string;
  setJobDir(value: string): TrainingInput;

  getRuntimeVersion(): string;
  setRuntimeVersion(value: string): TrainingInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingInput.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingInput): TrainingInput.AsObject;
  static serializeBinaryToWriter(message: TrainingInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingInput;
  static deserializeBinaryFromReader(message: TrainingInput, reader: jspb.BinaryReader): TrainingInput;
}

export namespace TrainingInput {
  export type AsObject = {
    scaleTier: TrainingInput.ScaleTier,
    masterType: string,
    workerType: string,
    parameterServerType: string,
    workerCount: number,
    parameterServerCount: number,
    packageUrisList: Array<string>,
    pythonModule: string,
    argsList: Array<string>,
    hyperparameters?: HyperparameterSpec.AsObject,
    region: string,
    jobDir: string,
    runtimeVersion: string,
  }

  export enum ScaleTier { 
    BASIC = 0,
    STANDARD_1 = 1,
    PREMIUM_1 = 3,
    BASIC_GPU = 6,
    CUSTOM = 5,
  }
}

export class HyperparameterSpec extends jspb.Message {
  getGoal(): HyperparameterSpec.GoalType;
  setGoal(value: HyperparameterSpec.GoalType): HyperparameterSpec;

  getParamsList(): Array<ParameterSpec>;
  setParamsList(value: Array<ParameterSpec>): HyperparameterSpec;
  clearParamsList(): HyperparameterSpec;
  addParams(value?: ParameterSpec, index?: number): ParameterSpec;

  getMaxTrials(): number;
  setMaxTrials(value: number): HyperparameterSpec;

  getMaxParallelTrials(): number;
  setMaxParallelTrials(value: number): HyperparameterSpec;

  getHyperparameterMetricTag(): string;
  setHyperparameterMetricTag(value: string): HyperparameterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperparameterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: HyperparameterSpec): HyperparameterSpec.AsObject;
  static serializeBinaryToWriter(message: HyperparameterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperparameterSpec;
  static deserializeBinaryFromReader(message: HyperparameterSpec, reader: jspb.BinaryReader): HyperparameterSpec;
}

export namespace HyperparameterSpec {
  export type AsObject = {
    goal: HyperparameterSpec.GoalType,
    paramsList: Array<ParameterSpec.AsObject>,
    maxTrials: number,
    maxParallelTrials: number,
    hyperparameterMetricTag: string,
  }

  export enum GoalType { 
    GOAL_TYPE_UNSPECIFIED = 0,
    MAXIMIZE = 1,
    MINIMIZE = 2,
  }
}

export class ParameterSpec extends jspb.Message {
  getParameterName(): string;
  setParameterName(value: string): ParameterSpec;

  getType(): ParameterSpec.ParameterType;
  setType(value: ParameterSpec.ParameterType): ParameterSpec;

  getMinValue(): number;
  setMinValue(value: number): ParameterSpec;

  getMaxValue(): number;
  setMaxValue(value: number): ParameterSpec;

  getCategoricalValuesList(): Array<string>;
  setCategoricalValuesList(value: Array<string>): ParameterSpec;
  clearCategoricalValuesList(): ParameterSpec;
  addCategoricalValues(value: string, index?: number): ParameterSpec;

  getDiscreteValuesList(): Array<number>;
  setDiscreteValuesList(value: Array<number>): ParameterSpec;
  clearDiscreteValuesList(): ParameterSpec;
  addDiscreteValues(value: number, index?: number): ParameterSpec;

  getScaleType(): ParameterSpec.ScaleType;
  setScaleType(value: ParameterSpec.ScaleType): ParameterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterSpec): ParameterSpec.AsObject;
  static serializeBinaryToWriter(message: ParameterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterSpec;
  static deserializeBinaryFromReader(message: ParameterSpec, reader: jspb.BinaryReader): ParameterSpec;
}

export namespace ParameterSpec {
  export type AsObject = {
    parameterName: string,
    type: ParameterSpec.ParameterType,
    minValue: number,
    maxValue: number,
    categoricalValuesList: Array<string>,
    discreteValuesList: Array<number>,
    scaleType: ParameterSpec.ScaleType,
  }

  export enum ParameterType { 
    PARAMETER_TYPE_UNSPECIFIED = 0,
    DOUBLE = 1,
    INTEGER = 2,
    CATEGORICAL = 3,
    DISCRETE = 4,
  }

  export enum ScaleType { 
    NONE = 0,
    UNIT_LINEAR_SCALE = 1,
    UNIT_LOG_SCALE = 2,
    UNIT_REVERSE_LOG_SCALE = 3,
  }
}

export class HyperparameterOutput extends jspb.Message {
  getTrialId(): string;
  setTrialId(value: string): HyperparameterOutput;

  getHyperparametersMap(): jspb.Map<string, string>;
  clearHyperparametersMap(): HyperparameterOutput;

  getFinalMetric(): HyperparameterOutput.HyperparameterMetric | undefined;
  setFinalMetric(value?: HyperparameterOutput.HyperparameterMetric): HyperparameterOutput;
  hasFinalMetric(): boolean;
  clearFinalMetric(): HyperparameterOutput;

  getAllMetricsList(): Array<HyperparameterOutput.HyperparameterMetric>;
  setAllMetricsList(value: Array<HyperparameterOutput.HyperparameterMetric>): HyperparameterOutput;
  clearAllMetricsList(): HyperparameterOutput;
  addAllMetrics(value?: HyperparameterOutput.HyperparameterMetric, index?: number): HyperparameterOutput.HyperparameterMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperparameterOutput.AsObject;
  static toObject(includeInstance: boolean, msg: HyperparameterOutput): HyperparameterOutput.AsObject;
  static serializeBinaryToWriter(message: HyperparameterOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperparameterOutput;
  static deserializeBinaryFromReader(message: HyperparameterOutput, reader: jspb.BinaryReader): HyperparameterOutput;
}

export namespace HyperparameterOutput {
  export type AsObject = {
    trialId: string,
    hyperparametersMap: Array<[string, string]>,
    finalMetric?: HyperparameterOutput.HyperparameterMetric.AsObject,
    allMetricsList: Array<HyperparameterOutput.HyperparameterMetric.AsObject>,
  }

  export class HyperparameterMetric extends jspb.Message {
    getTrainingStep(): number;
    setTrainingStep(value: number): HyperparameterMetric;

    getObjectiveValue(): number;
    setObjectiveValue(value: number): HyperparameterMetric;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HyperparameterMetric.AsObject;
    static toObject(includeInstance: boolean, msg: HyperparameterMetric): HyperparameterMetric.AsObject;
    static serializeBinaryToWriter(message: HyperparameterMetric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HyperparameterMetric;
    static deserializeBinaryFromReader(message: HyperparameterMetric, reader: jspb.BinaryReader): HyperparameterMetric;
  }

  export namespace HyperparameterMetric {
    export type AsObject = {
      trainingStep: number,
      objectiveValue: number,
    }
  }

}

export class TrainingOutput extends jspb.Message {
  getCompletedTrialCount(): number;
  setCompletedTrialCount(value: number): TrainingOutput;

  getTrialsList(): Array<HyperparameterOutput>;
  setTrialsList(value: Array<HyperparameterOutput>): TrainingOutput;
  clearTrialsList(): TrainingOutput;
  addTrials(value?: HyperparameterOutput, index?: number): HyperparameterOutput;

  getConsumedMlUnits(): number;
  setConsumedMlUnits(value: number): TrainingOutput;

  getIsHyperparameterTuningJob(): boolean;
  setIsHyperparameterTuningJob(value: boolean): TrainingOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingOutput.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingOutput): TrainingOutput.AsObject;
  static serializeBinaryToWriter(message: TrainingOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingOutput;
  static deserializeBinaryFromReader(message: TrainingOutput, reader: jspb.BinaryReader): TrainingOutput;
}

export namespace TrainingOutput {
  export type AsObject = {
    completedTrialCount: number,
    trialsList: Array<HyperparameterOutput.AsObject>,
    consumedMlUnits: number,
    isHyperparameterTuningJob: boolean,
  }
}

export class PredictionInput extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): PredictionInput;

  getVersionName(): string;
  setVersionName(value: string): PredictionInput;

  getUri(): string;
  setUri(value: string): PredictionInput;

  getDataFormat(): PredictionInput.DataFormat;
  setDataFormat(value: PredictionInput.DataFormat): PredictionInput;

  getInputPathsList(): Array<string>;
  setInputPathsList(value: Array<string>): PredictionInput;
  clearInputPathsList(): PredictionInput;
  addInputPaths(value: string, index?: number): PredictionInput;

  getOutputPath(): string;
  setOutputPath(value: string): PredictionInput;

  getMaxWorkerCount(): number;
  setMaxWorkerCount(value: number): PredictionInput;

  getRegion(): string;
  setRegion(value: string): PredictionInput;

  getRuntimeVersion(): string;
  setRuntimeVersion(value: string): PredictionInput;

  getModelVersionCase(): PredictionInput.ModelVersionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionInput.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionInput): PredictionInput.AsObject;
  static serializeBinaryToWriter(message: PredictionInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionInput;
  static deserializeBinaryFromReader(message: PredictionInput, reader: jspb.BinaryReader): PredictionInput;
}

export namespace PredictionInput {
  export type AsObject = {
    modelName: string,
    versionName: string,
    uri: string,
    dataFormat: PredictionInput.DataFormat,
    inputPathsList: Array<string>,
    outputPath: string,
    maxWorkerCount: number,
    region: string,
    runtimeVersion: string,
  }

  export enum DataFormat { 
    DATA_FORMAT_UNSPECIFIED = 0,
    TEXT = 1,
    TF_RECORD = 2,
    TF_RECORD_GZIP = 3,
  }

  export enum ModelVersionCase { 
    MODEL_VERSION_NOT_SET = 0,
    MODEL_NAME = 1,
    VERSION_NAME = 2,
    URI = 9,
  }
}

export class PredictionOutput extends jspb.Message {
  getOutputPath(): string;
  setOutputPath(value: string): PredictionOutput;

  getPredictionCount(): number;
  setPredictionCount(value: number): PredictionOutput;

  getErrorCount(): number;
  setErrorCount(value: number): PredictionOutput;

  getNodeHours(): number;
  setNodeHours(value: number): PredictionOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionOutput.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionOutput): PredictionOutput.AsObject;
  static serializeBinaryToWriter(message: PredictionOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionOutput;
  static deserializeBinaryFromReader(message: PredictionOutput, reader: jspb.BinaryReader): PredictionOutput;
}

export namespace PredictionOutput {
  export type AsObject = {
    outputPath: string,
    predictionCount: number,
    errorCount: number,
    nodeHours: number,
  }
}

export class Job extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): Job;

  getTrainingInput(): TrainingInput | undefined;
  setTrainingInput(value?: TrainingInput): Job;
  hasTrainingInput(): boolean;
  clearTrainingInput(): Job;

  getPredictionInput(): PredictionInput | undefined;
  setPredictionInput(value?: PredictionInput): Job;
  hasPredictionInput(): boolean;
  clearPredictionInput(): Job;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Job;
  hasCreateTime(): boolean;
  clearCreateTime(): Job;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Job;
  hasStartTime(): boolean;
  clearStartTime(): Job;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Job;
  hasEndTime(): boolean;
  clearEndTime(): Job;

  getState(): Job.State;
  setState(value: Job.State): Job;

  getErrorMessage(): string;
  setErrorMessage(value: string): Job;

  getTrainingOutput(): TrainingOutput | undefined;
  setTrainingOutput(value?: TrainingOutput): Job;
  hasTrainingOutput(): boolean;
  clearTrainingOutput(): Job;

  getPredictionOutput(): PredictionOutput | undefined;
  setPredictionOutput(value?: PredictionOutput): Job;
  hasPredictionOutput(): boolean;
  clearPredictionOutput(): Job;

  getInputCase(): Job.InputCase;

  getOutputCase(): Job.OutputCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    jobId: string,
    trainingInput?: TrainingInput.AsObject,
    predictionInput?: PredictionInput.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: Job.State,
    errorMessage: string,
    trainingOutput?: TrainingOutput.AsObject,
    predictionOutput?: PredictionOutput.AsObject,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    QUEUED = 1,
    PREPARING = 2,
    RUNNING = 3,
    SUCCEEDED = 4,
    FAILED = 5,
    CANCELLING = 6,
    CANCELLED = 7,
  }

  export enum InputCase { 
    INPUT_NOT_SET = 0,
    TRAINING_INPUT = 2,
    PREDICTION_INPUT = 3,
  }

  export enum OutputCase { 
    OUTPUT_NOT_SET = 0,
    TRAINING_OUTPUT = 9,
    PREDICTION_OUTPUT = 10,
  }
}

export class CreateJobRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateJobRequest;

  getJob(): Job | undefined;
  setJob(value?: Job): CreateJobRequest;
  hasJob(): boolean;
  clearJob(): CreateJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobRequest): CreateJobRequest.AsObject;
  static serializeBinaryToWriter(message: CreateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobRequest;
  static deserializeBinaryFromReader(message: CreateJobRequest, reader: jspb.BinaryReader): CreateJobRequest;
}

export namespace CreateJobRequest {
  export type AsObject = {
    parent: string,
    job?: Job.AsObject,
  }
}

export class ListJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListJobsRequest;

  getFilter(): string;
  setFilter(value: string): ListJobsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListJobsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListJobsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
  static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
  static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListJobsResponse extends jspb.Message {
  getJobsList(): Array<Job>;
  setJobsList(value: Array<Job>): ListJobsResponse;
  clearJobsList(): ListJobsResponse;
  addJobs(value?: Job, index?: number): Job;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListJobsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    jobsList: Array<Job.AsObject>,
    nextPageToken: string,
  }
}

export class GetJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobRequest;
  static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class CancelJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CancelJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelJobRequest): CancelJobRequest.AsObject;
  static serializeBinaryToWriter(message: CancelJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelJobRequest;
  static deserializeBinaryFromReader(message: CancelJobRequest, reader: jspb.BinaryReader): CancelJobRequest;
}

export namespace CancelJobRequest {
  export type AsObject = {
    name: string,
  }
}

