import * as grpcWeb from 'grpc-web';

import * as google_bytestream_bytestream_pb from '../../google/bytestream/bytestream_pb';


export class ByteStreamClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  read(
    request: google_bytestream_bytestream_pb.ReadRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bytestream_bytestream_pb.ReadResponse>;

  queryWriteStatus(
    request: google_bytestream_bytestream_pb.QueryWriteStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_bytestream_bytestream_pb.QueryWriteStatusResponse) => void
  ): grpcWeb.ClientReadableStream<google_bytestream_bytestream_pb.QueryWriteStatusResponse>;

}

export class ByteStreamPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  read(
    request: google_bytestream_bytestream_pb.ReadRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_bytestream_bytestream_pb.ReadResponse>;

  queryWriteStatus(
    request: google_bytestream_bytestream_pb.QueryWriteStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_bytestream_bytestream_pb.QueryWriteStatusResponse>;

}

