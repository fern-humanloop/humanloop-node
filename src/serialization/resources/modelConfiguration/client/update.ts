/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.modelConfiguration.update.Request.Raw,
    HumanloopApi.UpdateModelConfigResponse
> = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
});

export declare namespace Request {
    interface Raw {
        display_name?: string | null;
        description?: string | null;
    }
}

export const Response: core.serialization.Schema<
    serializers.modelConfiguration.update.Response.Raw,
    HumanloopApi.ProjectModelConfig
> = core.serialization.lazyObject(async () => (await import("../../..")).ProjectModelConfig);

export declare namespace Response {
    type Raw = serializers.ProjectModelConfig.Raw;
}