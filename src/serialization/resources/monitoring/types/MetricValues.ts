/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const MetricValues: core.serialization.ObjectSchema<serializers.MetricValues.Raw, HumanloopApi.MetricValues> =
    core.serialization.object({
        metricId: core.serialization.property("metric_id", core.serialization.string()),
        metricName: core.serialization.property("metric_name", core.serialization.string()),
        metricValue: core.serialization.property("metric_value", core.serialization.number()),
    });

export declare namespace MetricValues {
    interface Raw {
        metric_id: string;
        metric_name: string;
        metric_value: number;
    }
}