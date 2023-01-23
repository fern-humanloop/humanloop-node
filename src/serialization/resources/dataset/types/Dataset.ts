/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const Dataset: core.serialization.ObjectSchema<serializers.Dataset.Raw, HumanloopApi.Dataset> =
    core.serialization.object({
        id: core.serialization.number(),
        name: core.serialization.string(),
        count: core.serialization.number(),
        data: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Data))
            .optional(),
        description: core.serialization.string().optional(),
        public: core.serialization.boolean().optional(),
        fields: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Field))
            .optional(),
        fieldNames: core.serialization.property(
            "field_names",
            core.serialization.list(core.serialization.string()).optional()
        ),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
        statusCounts: core.serialization.property(
            "status_counts",
            core.serialization.record(core.serialization.string(), core.serialization.number()).optional()
        ),
        active: core.serialization.boolean(),
    });

export declare namespace Dataset {
    interface Raw {
        id: number;
        name: string;
        count: number;
        data?: serializers.Data.Raw[] | null;
        description?: string | null;
        public?: boolean | null;
        fields?: serializers.Field.Raw[] | null;
        field_names?: string[] | null;
        created_at?: string | null;
        updated_at?: string | null;
        status_counts?: Record<string, number> | null;
        active: boolean;
    }
}
