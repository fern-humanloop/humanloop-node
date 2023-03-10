/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const FineTunedModelResponse: core.serialization.ObjectSchema<
    serializers.FineTunedModelResponse.Raw,
    HumanloopApi.FineTunedModelResponse
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    status: core.serialization.string(),
    modelName: core.serialization.property("model_name", core.serialization.string().optional()),
    dataSnapshot: core.serialization.property(
        "data_snapshot",
        core.serialization.lazyObject(async () => (await import("../../..")).DataSnapshot)
    ),
    providerId: core.serialization.property("provider_id", core.serialization.string().optional()),
    config: core.serialization.lazyObject(async () => (await import("../../..")).FineTuneConfig),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    updatedAt: core.serialization.property("updated_at", core.serialization.string()),
});

export declare namespace FineTunedModelResponse {
    interface Raw {
        id: string;
        name: string;
        status: string;
        model_name?: string | null;
        data_snapshot: serializers.DataSnapshot.Raw;
        provider_id?: string | null;
        config: serializers.FineTuneConfig.Raw;
        created_at: string;
        updated_at: string;
    }
}
