/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const UpdateFineTunedModelsResponse: core.serialization.ObjectSchema<
    serializers.UpdateFineTunedModelsResponse.Raw,
    HumanloopApi.UpdateFineTunedModelsResponse
> = core.serialization.object({
    updated: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).UpdateFineTunedModelResponse)
    ),
    failed: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).UpdateFineTunedModelResponse)
    ),
});

export declare namespace UpdateFineTunedModelsResponse {
    interface Raw {
        updated: serializers.UpdateFineTunedModelResponse.Raw[];
        failed: serializers.UpdateFineTunedModelResponse.Raw[];
    }
}
