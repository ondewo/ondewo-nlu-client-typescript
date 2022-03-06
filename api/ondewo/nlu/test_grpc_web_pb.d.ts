import * as grpcWeb from 'grpc-web';

import * as ondewo_nlu_test_pb from '../../ondewo/nlu/test_pb';


export class SimpleServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  recieveTest(
    request: ondewo_nlu_test_pb.Test,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_test_pb.Test) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_test_pb.Test>;

  sendTest(
    request: ondewo_nlu_test_pb.Test,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_test_pb.Test) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_test_pb.Test>;

}

export class NewSimpleServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  newRecieveTest(
    request: ondewo_nlu_test_pb.NewTest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_test_pb.NewTest) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_test_pb.NewTest>;

  newSendTest(
    request: ondewo_nlu_test_pb.NewTest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_test_pb.NewTest) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_test_pb.NewTest>;

}

export class SimpleServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  recieveTest(
    request: ondewo_nlu_test_pb.Test,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_test_pb.Test>;

  sendTest(
    request: ondewo_nlu_test_pb.Test,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_test_pb.Test>;

}

export class NewSimpleServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  newRecieveTest(
    request: ondewo_nlu_test_pb.NewTest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_test_pb.NewTest>;

  newSendTest(
    request: ondewo_nlu_test_pb.NewTest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_test_pb.NewTest>;

}

