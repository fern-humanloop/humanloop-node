/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const TaskType: core.serialization.Schema<serializers.TaskType.Raw, HumanloopApi.TaskType> =
    core.serialization.enum_([
        "classification",
        "multi_label_classification",
        "sequence_tagging",
        "ordinal_regression",
        "generation",
    ]);

export declare namespace TaskType {
    type Raw =
        | "classification"
        | "multi_label_classification"
        | "sequence_tagging"
        | "ordinal_regression"
        | "generation";
}
