import * as grpcWeb from 'grpc-web';

import * as google_devtools_cloudprofiler_v2_profiler_pb from '../../../../google/devtools/cloudprofiler/v2/profiler_pb';


export class ProfilerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProfile(
    request: google_devtools_cloudprofiler_v2_profiler_pb.CreateProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudprofiler_v2_profiler_pb.Profile) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudprofiler_v2_profiler_pb.Profile>;

  createOfflineProfile(
    request: google_devtools_cloudprofiler_v2_profiler_pb.CreateOfflineProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudprofiler_v2_profiler_pb.Profile) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudprofiler_v2_profiler_pb.Profile>;

  updateProfile(
    request: google_devtools_cloudprofiler_v2_profiler_pb.UpdateProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudprofiler_v2_profiler_pb.Profile) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudprofiler_v2_profiler_pb.Profile>;

}

export class ProfilerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProfile(
    request: google_devtools_cloudprofiler_v2_profiler_pb.CreateProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudprofiler_v2_profiler_pb.Profile>;

  createOfflineProfile(
    request: google_devtools_cloudprofiler_v2_profiler_pb.CreateOfflineProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudprofiler_v2_profiler_pb.Profile>;

  updateProfile(
    request: google_devtools_cloudprofiler_v2_profiler_pb.UpdateProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudprofiler_v2_profiler_pb.Profile>;

}

