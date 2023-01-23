/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const ModelConfigMetrics: core.serialization.ObjectSchema<
    serializers.ModelConfigMetrics.Raw,
    HumanloopApi.ModelConfigMetrics
> = core.serialization.object({
    modelConfigId: core.serialization.property("model_config_id", core.serialization.string()),
    metricId: core.serialization.property("metric_id", core.serialization.string()),
    average: core.serialization.number(),
});

export declare namespace ModelConfigMetrics {
    interface Raw {
        model_config_id: string;
        metric_id: string;
        average: number;
    }
}
