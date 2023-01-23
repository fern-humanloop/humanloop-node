/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.model.updateMultiple.Request.Raw,
    HumanloopApi.UpdateFineTunedModelsRequest
> = core.serialization.object({
    providerApiKeys: core.serialization.property(
        "provider_api_keys",
        core.serialization.record(core.serialization.string(), core.serialization.string())
    ),
});

export declare namespace Request {
    interface Raw {
        provider_api_keys: Record<string, string>;
    }
}

export const Response: core.serialization.Schema<
    serializers.model.updateMultiple.Response.Raw,
    HumanloopApi.UpdateFineTunedModelsResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).UpdateFineTunedModelsResponse);

export declare namespace Response {
    type Raw = serializers.UpdateFineTunedModelsResponse.Raw;
}