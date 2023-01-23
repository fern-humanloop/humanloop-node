/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HumanloopApi } from "@fern-api/humanloop";

export interface Log {
    id: string;
    source?: string;
    modelConfig?: HumanloopApi.ProjectModelConfig;
    output: string;
    feedback?: HumanloopApi.Feedback[];
    metricValues?: HumanloopApi.MetricValues[];
    dataSnapshots?: HumanloopApi.LogDataSnapshot[];
    providerLatency?: number;
    createdAt: string;
    updatedAt: string;
}
