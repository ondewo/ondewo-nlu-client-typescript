import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_source_v1_source_context_pb from '../../../../google/devtools/source/v1/source_context_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class FormatMessage extends jspb.Message {
  getFormat(): string;
  setFormat(value: string): FormatMessage;

  getParametersList(): Array<string>;
  setParametersList(value: Array<string>): FormatMessage;
  clearParametersList(): FormatMessage;
  addParameters(value: string, index?: number): FormatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: FormatMessage): FormatMessage.AsObject;
  static serializeBinaryToWriter(message: FormatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormatMessage;
  static deserializeBinaryFromReader(message: FormatMessage, reader: jspb.BinaryReader): FormatMessage;
}

export namespace FormatMessage {
  export type AsObject = {
    format: string,
    parametersList: Array<string>,
  }
}

export class StatusMessage extends jspb.Message {
  getIsError(): boolean;
  setIsError(value: boolean): StatusMessage;

  getRefersTo(): StatusMessage.Reference;
  setRefersTo(value: StatusMessage.Reference): StatusMessage;

  getDescription(): FormatMessage | undefined;
  setDescription(value?: FormatMessage): StatusMessage;
  hasDescription(): boolean;
  clearDescription(): StatusMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusMessage.AsObject;
  static toObject(includeInstance: boolean, msg: StatusMessage): StatusMessage.AsObject;
  static serializeBinaryToWriter(message: StatusMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusMessage;
  static deserializeBinaryFromReader(message: StatusMessage, reader: jspb.BinaryReader): StatusMessage;
}

export namespace StatusMessage {
  export type AsObject = {
    isError: boolean,
    refersTo: StatusMessage.Reference,
    description?: FormatMessage.AsObject,
  }

  export enum Reference { 
    UNSPECIFIED = 0,
    BREAKPOINT_SOURCE_LOCATION = 3,
    BREAKPOINT_CONDITION = 4,
    BREAKPOINT_EXPRESSION = 7,
    BREAKPOINT_AGE = 8,
    VARIABLE_NAME = 5,
    VARIABLE_VALUE = 6,
  }
}

export class SourceLocation extends jspb.Message {
  getPath(): string;
  setPath(value: string): SourceLocation;

  getLine(): number;
  setLine(value: number): SourceLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: SourceLocation): SourceLocation.AsObject;
  static serializeBinaryToWriter(message: SourceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceLocation;
  static deserializeBinaryFromReader(message: SourceLocation, reader: jspb.BinaryReader): SourceLocation;
}

export namespace SourceLocation {
  export type AsObject = {
    path: string,
    line: number,
  }
}

export class Variable extends jspb.Message {
  getName(): string;
  setName(value: string): Variable;

  getValue(): string;
  setValue(value: string): Variable;

  getType(): string;
  setType(value: string): Variable;

  getMembersList(): Array<Variable>;
  setMembersList(value: Array<Variable>): Variable;
  clearMembersList(): Variable;
  addMembers(value?: Variable, index?: number): Variable;

  getVarTableIndex(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setVarTableIndex(value?: google_protobuf_wrappers_pb.Int32Value): Variable;
  hasVarTableIndex(): boolean;
  clearVarTableIndex(): Variable;

  getStatus(): StatusMessage | undefined;
  setStatus(value?: StatusMessage): Variable;
  hasStatus(): boolean;
  clearStatus(): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variable.AsObject;
  static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
  static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variable;
  static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
  export type AsObject = {
    name: string,
    value: string,
    type: string,
    membersList: Array<Variable.AsObject>,
    varTableIndex?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    status?: StatusMessage.AsObject,
  }
}

export class StackFrame extends jspb.Message {
  getFunction(): string;
  setFunction(value: string): StackFrame;

  getLocation(): SourceLocation | undefined;
  setLocation(value?: SourceLocation): StackFrame;
  hasLocation(): boolean;
  clearLocation(): StackFrame;

  getArgumentsList(): Array<Variable>;
  setArgumentsList(value: Array<Variable>): StackFrame;
  clearArgumentsList(): StackFrame;
  addArguments(value?: Variable, index?: number): Variable;

  getLocalsList(): Array<Variable>;
  setLocalsList(value: Array<Variable>): StackFrame;
  clearLocalsList(): StackFrame;
  addLocals(value?: Variable, index?: number): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StackFrame.AsObject;
  static toObject(includeInstance: boolean, msg: StackFrame): StackFrame.AsObject;
  static serializeBinaryToWriter(message: StackFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StackFrame;
  static deserializeBinaryFromReader(message: StackFrame, reader: jspb.BinaryReader): StackFrame;
}

export namespace StackFrame {
  export type AsObject = {
    pb_function: string,
    location?: SourceLocation.AsObject,
    argumentsList: Array<Variable.AsObject>,
    localsList: Array<Variable.AsObject>,
  }
}

export class Breakpoint extends jspb.Message {
  getId(): string;
  setId(value: string): Breakpoint;

  getAction(): Breakpoint.Action;
  setAction(value: Breakpoint.Action): Breakpoint;

  getLocation(): SourceLocation | undefined;
  setLocation(value?: SourceLocation): Breakpoint;
  hasLocation(): boolean;
  clearLocation(): Breakpoint;

  getCondition(): string;
  setCondition(value: string): Breakpoint;

  getExpressionsList(): Array<string>;
  setExpressionsList(value: Array<string>): Breakpoint;
  clearExpressionsList(): Breakpoint;
  addExpressions(value: string, index?: number): Breakpoint;

  getLogMessageFormat(): string;
  setLogMessageFormat(value: string): Breakpoint;

  getLogLevel(): Breakpoint.LogLevel;
  setLogLevel(value: Breakpoint.LogLevel): Breakpoint;

  getIsFinalState(): boolean;
  setIsFinalState(value: boolean): Breakpoint;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Breakpoint;
  hasCreateTime(): boolean;
  clearCreateTime(): Breakpoint;

  getFinalTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinalTime(value?: google_protobuf_timestamp_pb.Timestamp): Breakpoint;
  hasFinalTime(): boolean;
  clearFinalTime(): Breakpoint;

  getUserEmail(): string;
  setUserEmail(value: string): Breakpoint;

  getStatus(): StatusMessage | undefined;
  setStatus(value?: StatusMessage): Breakpoint;
  hasStatus(): boolean;
  clearStatus(): Breakpoint;

  getStackFramesList(): Array<StackFrame>;
  setStackFramesList(value: Array<StackFrame>): Breakpoint;
  clearStackFramesList(): Breakpoint;
  addStackFrames(value?: StackFrame, index?: number): StackFrame;

  getEvaluatedExpressionsList(): Array<Variable>;
  setEvaluatedExpressionsList(value: Array<Variable>): Breakpoint;
  clearEvaluatedExpressionsList(): Breakpoint;
  addEvaluatedExpressions(value?: Variable, index?: number): Variable;

  getVariableTableList(): Array<Variable>;
  setVariableTableList(value: Array<Variable>): Breakpoint;
  clearVariableTableList(): Breakpoint;
  addVariableTable(value?: Variable, index?: number): Variable;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Breakpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Breakpoint.AsObject;
  static toObject(includeInstance: boolean, msg: Breakpoint): Breakpoint.AsObject;
  static serializeBinaryToWriter(message: Breakpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Breakpoint;
  static deserializeBinaryFromReader(message: Breakpoint, reader: jspb.BinaryReader): Breakpoint;
}

export namespace Breakpoint {
  export type AsObject = {
    id: string,
    action: Breakpoint.Action,
    location?: SourceLocation.AsObject,
    condition: string,
    expressionsList: Array<string>,
    logMessageFormat: string,
    logLevel: Breakpoint.LogLevel,
    isFinalState: boolean,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finalTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userEmail: string,
    status?: StatusMessage.AsObject,
    stackFramesList: Array<StackFrame.AsObject>,
    evaluatedExpressionsList: Array<Variable.AsObject>,
    variableTableList: Array<Variable.AsObject>,
    labelsMap: Array<[string, string]>,
  }

  export enum Action { 
    CAPTURE = 0,
    LOG = 1,
  }

  export enum LogLevel { 
    INFO = 0,
    WARNING = 1,
    ERROR = 2,
  }
}

export class Debuggee extends jspb.Message {
  getId(): string;
  setId(value: string): Debuggee;

  getProject(): string;
  setProject(value: string): Debuggee;

  getUniquifier(): string;
  setUniquifier(value: string): Debuggee;

  getDescription(): string;
  setDescription(value: string): Debuggee;

  getIsInactive(): boolean;
  setIsInactive(value: boolean): Debuggee;

  getAgentVersion(): string;
  setAgentVersion(value: string): Debuggee;

  getIsDisabled(): boolean;
  setIsDisabled(value: boolean): Debuggee;

  getStatus(): StatusMessage | undefined;
  setStatus(value?: StatusMessage): Debuggee;
  hasStatus(): boolean;
  clearStatus(): Debuggee;

  getSourceContextsList(): Array<google_devtools_source_v1_source_context_pb.SourceContext>;
  setSourceContextsList(value: Array<google_devtools_source_v1_source_context_pb.SourceContext>): Debuggee;
  clearSourceContextsList(): Debuggee;
  addSourceContexts(value?: google_devtools_source_v1_source_context_pb.SourceContext, index?: number): google_devtools_source_v1_source_context_pb.SourceContext;

  getExtSourceContextsList(): Array<google_devtools_source_v1_source_context_pb.ExtendedSourceContext>;
  setExtSourceContextsList(value: Array<google_devtools_source_v1_source_context_pb.ExtendedSourceContext>): Debuggee;
  clearExtSourceContextsList(): Debuggee;
  addExtSourceContexts(value?: google_devtools_source_v1_source_context_pb.ExtendedSourceContext, index?: number): google_devtools_source_v1_source_context_pb.ExtendedSourceContext;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Debuggee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Debuggee.AsObject;
  static toObject(includeInstance: boolean, msg: Debuggee): Debuggee.AsObject;
  static serializeBinaryToWriter(message: Debuggee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Debuggee;
  static deserializeBinaryFromReader(message: Debuggee, reader: jspb.BinaryReader): Debuggee;
}

export namespace Debuggee {
  export type AsObject = {
    id: string,
    project: string,
    uniquifier: string,
    description: string,
    isInactive: boolean,
    agentVersion: string,
    isDisabled: boolean,
    status?: StatusMessage.AsObject,
    sourceContextsList: Array<google_devtools_source_v1_source_context_pb.SourceContext.AsObject>,
    extSourceContextsList: Array<google_devtools_source_v1_source_context_pb.ExtendedSourceContext.AsObject>,
    labelsMap: Array<[string, string]>,
  }
}

