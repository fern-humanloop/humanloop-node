/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const CreateFieldRequest: core.serialization.ObjectSchema<
    serializers.CreateFieldRequest.Raw,
    HumanloopApi.CreateFieldRequest
> = core.serialization.object({
    name: core.serialization.string(),
    dataType: core.serialization.property(
        "data_type",
        core.serialization.lazy(async () => (await import("../../..")).DataType)
    ),
    displayName: core.serialization.property("display_name", core.serialization.string()),
    required: core.serialization.boolean(),
    distinctValues: core.serialization.property(
        "distinct_values",
        core.serialization.list(core.serialization.string()).optional()
    ),
    default: core.serialization.unknown(),
    meta: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace CreateFieldRequest {
    interface Raw {
        name: string;
        data_type: serializers.DataType.Raw;
        display_name: string;
        required: boolean;
        distinct_values?: string[] | null;
        default?: unknown;
        meta: Record<string, unknown>;
    }
}
