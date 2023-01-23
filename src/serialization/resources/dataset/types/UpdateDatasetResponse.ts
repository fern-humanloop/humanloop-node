/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const UpdateDatasetResponse: core.serialization.ObjectSchema<
    serializers.UpdateDatasetResponse.Raw,
    HumanloopApi.UpdateDatasetResponse
> = core.serialization.object({
    id: core.serialization.number(),
    attempted: core.serialization.number(),
    succeeded: core.serialization.number(),
    processing: core.serialization.number(),
    msg: core.serialization.string(),
    fields: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Field)),
});

export declare namespace UpdateDatasetResponse {
    interface Raw {
        id: number;
        attempted: number;
        succeeded: number;
        processing: number;
        msg: string;
        fields: serializers.Field.Raw[];
    }
}
