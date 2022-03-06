import * as grpcWeb from 'grpc-web';

import * as google_devtools_resultstore_v2_resultstore_file_download_pb from '../../../../google/devtools/resultstore/v2/resultstore_file_download_pb';


export class ResultStoreFileDownloadClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getFile(
    request: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileResponse>;

  getFileTail(
    request: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailResponse>;

}

export class ResultStoreFileDownloadPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getFile(
    request: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileResponse>;

  getFileTail(
    request: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailResponse>;

}

