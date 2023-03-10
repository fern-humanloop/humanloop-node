/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.model.fineTune.Request.Raw,
    HumanloopApi.FineTuneModelRequest
> = core.serialization.object({
    name: core.serialization.string(),
    dataSnapshot: core.serialization.property("data_snapshot", core.serialization.string()),
    config: core.serialization.lazyObject(async () => (await import("../../..")).FineTuneConfig),
    providerApiKeys: core.serialization.property(
        "provider_api_keys",
        core.serialization.lazyObject(async () => (await import("../../..")).ProviderApiKeys)
    ),
});

export declare namespace Request {
    interface Raw {
        name: string;
        data_snapshot: string;
        config: serializers.FineTuneConfig.Raw;
        provider_api_keys: serializers.ProviderApiKeys.Raw;
    }
}

export const Response: core.serialization.Schema<
    serializers.model.fineTune.Response.Raw,
    HumanloopApi.FineTunedModelResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).FineTunedModelResponse);

export declare namespace Response {
    type Raw = serializers.FineTunedModelResponse.Raw;
}
