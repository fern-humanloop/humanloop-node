/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const Field: core.serialization.ObjectSchema<serializers.Field.Raw, HumanloopApi.Field> =
    core.serialization.object({
        id: core.serialization.number(),
        datasetId: core.serialization.property("dataset_id", core.serialization.number()),
        name: core.serialization.string(),
        displayName: core.serialization.property("display_name", core.serialization.string()),
        dataType: core.serialization.property(
            "data_type",
            core.serialization.lazy(async () => (await import("../../..")).DataType)
        ),
        required: core.serialization.boolean(),
        count: core.serialization.number().optional(),
        nullCount: core.serialization.property("null_count", core.serialization.number().optional()),
        valueCounts: core.serialization.property(
            "value_counts",
            core.serialization.record(core.serialization.string(), core.serialization.number()).optional()
        ),
        latestCountsIncrease: core.serialization.property(
            "latest_counts_increase",
            core.serialization.record(core.serialization.string(), core.serialization.number()).optional()
        ),
        distinctValues: core.serialization.property(
            "distinct_values",
            core.serialization.list(core.serialization.string()).optional()
        ),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
    });

export declare namespace Field {
    interface Raw {
        id: number;
        dataset_id: number;
        name: string;
        display_name: string;
        data_type: serializers.DataType.Raw;
        required: boolean;
        count?: number | null;
        null_count?: number | null;
        value_counts?: Record<string, number> | null;
        latest_counts_increase?: Record<string, number> | null;
        distinct_values?: string[] | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
