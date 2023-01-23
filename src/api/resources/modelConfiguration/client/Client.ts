/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { HumanloopApi } from "@fern-api/humanloop";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.HumanloopApiEnvironment | string;
        apiKey?: core.Supplier<string>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Get an array of model_configs associated to your project
     */
    public async getAll(projectId: string): Promise<HumanloopApi.ProjectModelConfig[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HumanloopApiEnvironment.Production,
                `/projects/${projectId}/model-configs/`
            ),
            method: "GET",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.apiKey),
            },
        });
        if (_response.ok) {
            return await serializers.modelConfiguration.getAll.Response.parse(
                _response.body as serializers.modelConfiguration.getAll.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumanloopApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumanloopApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumanloopApiTimeoutError();
            case "unknown":
                throw new errors.HumanloopApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a model configuration from your project.
     */
    public async delete(projectId: string, modelConfigId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HumanloopApiEnvironment.Production,
                `/projects/${projectId}/model-configs//${modelConfigId}`
            ),
            method: "DELETE",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.apiKey),
            },
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumanloopApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumanloopApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumanloopApiTimeoutError();
            case "unknown":
                throw new errors.HumanloopApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update a model configuration within your project
     */
    public async update(
        projectId: string,
        modelConfigId: string,
        request?: HumanloopApi.UpdateModelConfigResponse
    ): Promise<HumanloopApi.ProjectModelConfig> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HumanloopApiEnvironment.Production,
                `/projects/${projectId}/model-configs//${modelConfigId}`
            ),
            method: "PATCH",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.modelConfiguration.update.Request.json({
                displayName: request?.displayName,
                description: request?.description,
            }),
        });
        if (_response.ok) {
            return await serializers.modelConfiguration.update.Response.parse(
                _response.body as serializers.modelConfiguration.update.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumanloopApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumanloopApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumanloopApiTimeoutError();
            case "unknown":
                throw new errors.HumanloopApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
