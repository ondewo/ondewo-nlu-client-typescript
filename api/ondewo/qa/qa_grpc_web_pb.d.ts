import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_qa_qa_pb from '../../ondewo/qa/qa_pb';

export class QAClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	getAnswer(
		request: ondewo_qa_qa_pb.GetAnswerRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_qa_qa_pb.GetAnswerResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_qa_qa_pb.GetAnswerResponse>;

	runScraper(
		request: ondewo_qa_qa_pb.RunScraperRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_qa_qa_pb.RunScraperResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_qa_qa_pb.RunScraperResponse>;

	updateDatabase(
		request: ondewo_qa_qa_pb.UpdateDatabaseRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_qa_qa_pb.UpdateDatabaseResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_qa_qa_pb.UpdateDatabaseResponse>;

	runTraining(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_qa_qa_pb.RunTrainingResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_qa_qa_pb.RunTrainingResponse>;

	getServerState(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_qa_qa_pb.GetServerStateResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_qa_qa_pb.GetServerStateResponse>;

	listProjectIds(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_qa_qa_pb.ListProjectIdsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_qa_qa_pb.ListProjectIdsResponse>;

	getProjectConfig(
		request: ondewo_qa_qa_pb.GetProjectConfigRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_qa_qa_pb.GetProjectConfigResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_qa_qa_pb.GetProjectConfigResponse>;
}

export class QAPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	getAnswer(
		request: ondewo_qa_qa_pb.GetAnswerRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_qa_qa_pb.GetAnswerResponse>;

	runScraper(
		request: ondewo_qa_qa_pb.RunScraperRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_qa_qa_pb.RunScraperResponse>;

	updateDatabase(
		request: ondewo_qa_qa_pb.UpdateDatabaseRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_qa_qa_pb.UpdateDatabaseResponse>;

	runTraining(
		request: google_protobuf_empty_pb.Empty,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_qa_qa_pb.RunTrainingResponse>;

	getServerState(
		request: google_protobuf_empty_pb.Empty,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_qa_qa_pb.GetServerStateResponse>;

	listProjectIds(
		request: google_protobuf_empty_pb.Empty,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_qa_qa_pb.ListProjectIdsResponse>;

	getProjectConfig(
		request: ondewo_qa_qa_pb.GetProjectConfigRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_qa_qa_pb.GetProjectConfigResponse>;
}
