import * as grpcWeb from 'grpc-web';

import * as google_devtools_clouderrorreporting_v1beta1_common_pb from '../../../../google/devtools/clouderrorreporting/v1beta1/common_pb';
import * as google_devtools_clouderrorreporting_v1beta1_error_group_service_pb from '../../../../google/devtools/clouderrorreporting/v1beta1/error_group_service_pb';


export class ErrorGroupServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGroup(
    request: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.GetGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>;

  updateGroup(
    request: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup) => void
  ): grpcWeb.ClientReadableStream<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>;

}

export class ErrorGroupServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGroup(
    request: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.GetGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>;

  updateGroup(
    request: google_devtools_clouderrorreporting_v1beta1_error_group_service_pb.UpdateGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup>;

}

