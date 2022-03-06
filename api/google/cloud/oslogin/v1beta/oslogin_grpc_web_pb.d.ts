import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_cloud_oslogin_common_common_pb from '../../../../google/cloud/oslogin/common/common_pb';
import * as google_cloud_oslogin_v1beta_oslogin_pb from '../../../../google/cloud/oslogin/v1beta/oslogin_pb';


export class OsLoginServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  deletePosixAccount(
    request: google_cloud_oslogin_v1beta_oslogin_pb.DeletePosixAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteSshPublicKey(
    request: google_cloud_oslogin_v1beta_oslogin_pb.DeleteSshPublicKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getLoginProfile(
    request: google_cloud_oslogin_v1beta_oslogin_pb.GetLoginProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_oslogin_v1beta_oslogin_pb.LoginProfile) => void
  ): grpcWeb.ClientReadableStream<google_cloud_oslogin_v1beta_oslogin_pb.LoginProfile>;

  getSshPublicKey(
    request: google_cloud_oslogin_v1beta_oslogin_pb.GetSshPublicKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_oslogin_common_common_pb.SshPublicKey) => void
  ): grpcWeb.ClientReadableStream<google_cloud_oslogin_common_common_pb.SshPublicKey>;

  importSshPublicKey(
    request: google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyResponse>;

  updateSshPublicKey(
    request: google_cloud_oslogin_v1beta_oslogin_pb.UpdateSshPublicKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_oslogin_common_common_pb.SshPublicKey) => void
  ): grpcWeb.ClientReadableStream<google_cloud_oslogin_common_common_pb.SshPublicKey>;

}

export class OsLoginServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  deletePosixAccount(
    request: google_cloud_oslogin_v1beta_oslogin_pb.DeletePosixAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteSshPublicKey(
    request: google_cloud_oslogin_v1beta_oslogin_pb.DeleteSshPublicKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getLoginProfile(
    request: google_cloud_oslogin_v1beta_oslogin_pb.GetLoginProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_oslogin_v1beta_oslogin_pb.LoginProfile>;

  getSshPublicKey(
    request: google_cloud_oslogin_v1beta_oslogin_pb.GetSshPublicKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_oslogin_common_common_pb.SshPublicKey>;

  importSshPublicKey(
    request: google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyResponse>;

  updateSshPublicKey(
    request: google_cloud_oslogin_v1beta_oslogin_pb.UpdateSshPublicKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_oslogin_common_common_pb.SshPublicKey>;

}

