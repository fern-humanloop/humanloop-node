/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const UpdateFineTunedModelResponse: core.serialization.ObjectSchema<
    serializers.UpdateFineTunedModelResponse.Raw,
    HumanloopApi.UpdateFineTunedModelResponse
> = core.serialization.object({
    id: core.serialization.string(),
    error: core.serialization.string().optional(),
});

export declare namespace UpdateFineTunedModelResponse {
    interface Raw {
        id: string;
        error?: string | null;
    }
}
