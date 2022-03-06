import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_cloud_iot_v1_resources_pb from '../../../../google/cloud/iot/v1/resources_pb';
import * as google_cloud_iot_v1_device_manager_pb from '../../../../google/cloud/iot/v1/device_manager_pb';


export class DeviceManagerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createDeviceRegistry(
    request: google_cloud_iot_v1_device_manager_pb.CreateDeviceRegistryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.DeviceRegistry) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_resources_pb.DeviceRegistry>;

  getDeviceRegistry(
    request: google_cloud_iot_v1_device_manager_pb.GetDeviceRegistryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.DeviceRegistry) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_resources_pb.DeviceRegistry>;

  updateDeviceRegistry(
    request: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRegistryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.DeviceRegistry) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_resources_pb.DeviceRegistry>;

  deleteDeviceRegistry(
    request: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRegistryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listDeviceRegistries(
    request: google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesResponse>;

  createDevice(
    request: google_cloud_iot_v1_device_manager_pb.CreateDeviceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.Device) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_resources_pb.Device>;

  getDevice(
    request: google_cloud_iot_v1_device_manager_pb.GetDeviceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.Device) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_resources_pb.Device>;

  updateDevice(
    request: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.Device) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_resources_pb.Device>;

  deleteDevice(
    request: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listDevices(
    request: google_cloud_iot_v1_device_manager_pb.ListDevicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_device_manager_pb.ListDevicesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_device_manager_pb.ListDevicesResponse>;

  modifyCloudToDeviceConfig(
    request: google_cloud_iot_v1_device_manager_pb.ModifyCloudToDeviceConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.DeviceConfig) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_resources_pb.DeviceConfig>;

  listDeviceConfigVersions(
    request: google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsResponse>;

  listDeviceStates(
    request: google_cloud_iot_v1_device_manager_pb.ListDeviceStatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_device_manager_pb.ListDeviceStatesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_iot_v1_device_manager_pb.ListDeviceStatesResponse>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

}

export class DeviceManagerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createDeviceRegistry(
    request: google_cloud_iot_v1_device_manager_pb.CreateDeviceRegistryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_resources_pb.DeviceRegistry>;

  getDeviceRegistry(
    request: google_cloud_iot_v1_device_manager_pb.GetDeviceRegistryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_resources_pb.DeviceRegistry>;

  updateDeviceRegistry(
    request: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRegistryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_resources_pb.DeviceRegistry>;

  deleteDeviceRegistry(
    request: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRegistryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listDeviceRegistries(
    request: google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_device_manager_pb.ListDeviceRegistriesResponse>;

  createDevice(
    request: google_cloud_iot_v1_device_manager_pb.CreateDeviceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_resources_pb.Device>;

  getDevice(
    request: google_cloud_iot_v1_device_manager_pb.GetDeviceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_resources_pb.Device>;

  updateDevice(
    request: google_cloud_iot_v1_device_manager_pb.UpdateDeviceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_resources_pb.Device>;

  deleteDevice(
    request: google_cloud_iot_v1_device_manager_pb.DeleteDeviceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listDevices(
    request: google_cloud_iot_v1_device_manager_pb.ListDevicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_device_manager_pb.ListDevicesResponse>;

  modifyCloudToDeviceConfig(
    request: google_cloud_iot_v1_device_manager_pb.ModifyCloudToDeviceConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_resources_pb.DeviceConfig>;

  listDeviceConfigVersions(
    request: google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_device_manager_pb.ListDeviceConfigVersionsResponse>;

  listDeviceStates(
    request: google_cloud_iot_v1_device_manager_pb.ListDeviceStatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_iot_v1_device_manager_pb.ListDeviceStatesResponse>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

}

