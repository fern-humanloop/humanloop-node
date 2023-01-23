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
     * Get all labels for an existing project output definition
     */
    public async getAll(id: number): Promise<HumanloopApi.Label[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HumanloopApiEnvironment.Production,
                `/outputs/${id}/labels/`
            ),
            method: "GET",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.apiKey),
            },
        });
        if (_response.ok) {
            return await serializers.label.getAll.Response.parse(
                _response.body as serializers.label.getAll.Response.Raw
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
     * Update the data on an array of labels based on id
     */
    public async updateMultiple(id: number, request: HumanloopApi.UpdateLabelRequest[]): Promise<HumanloopApi.Label[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HumanloopApiEnvironment.Production,
                `/outputs/${id}/labels/`
            ),
            method: "PUT",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.label.updateMultiple.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.label.updateMultiple.Response.parse(
                _response.body as serializers.label.updateMultiple.Response.Raw
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
     * Add a label or list of labels to an existing project's output definition
     */
    public async add(id: number): Promise<HumanloopApi.Label[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HumanloopApiEnvironment.Production,
                `/outputs/${id}/labels/`
            ),
            method: "POST",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.apiKey),
            },
        });
        if (_response.ok) {
            return await serializers.label.add.Response.parse(_response.body as serializers.label.add.Response.Raw);
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

    public async deleteMultiple(id: number, request: HumanloopApi.UpdateLabelRequest[]): Promise<HumanloopApi.Label[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HumanloopApiEnvironment.Production,
                `/outputs/${id}/labels/`
            ),
            method: "DELETE",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.label.deleteMultiple.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.label.deleteMultiple.Response.parse(
                _response.body as serializers.label.deleteMultiple.Response.Raw
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
     * Update any of the data for an existing label with label_id
     */
    public async update(
        id: number,
        labelId: string,
        request: HumanloopApi.UpdateLabelRequest
    ): Promise<HumanloopApi.Label[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HumanloopApiEnvironment.Production,
                `/outputs/${id}/labels//${labelId}`
            ),
            method: "PUT",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.label.update.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.label.update.Response.parse(
                _response.body as serializers.label.update.Response.Raw
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

    public async delete(id: number, labelId: string): Promise<HumanloopApi.Label[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.HumanloopApiEnvironment.Production,
                `/outputs/${id}/labels//${labelId}`
            ),
            method: "DELETE",
            headers: {
                "X-API-KEY": await core.Supplier.get(this.options.apiKey),
            },
        });
        if (_response.ok) {
            return await serializers.label.delete.Response.parse(
                _response.body as serializers.label.delete.Response.Raw
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
