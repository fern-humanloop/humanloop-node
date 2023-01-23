/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const DataType: core.serialization.Schema<serializers.DataType.Raw, HumanloopApi.DataType> =
    core.serialization.enum_([
        "text",
        "categorical",
        "multi_categorical",
        "quantitative",
        "character_offsets",
        "url",
        "ordinal_regression",
        "file_pdf",
    ]);

export declare namespace DataType {
    type Raw =
        | "text"
        | "categorical"
        | "multi_categorical"
        | "quantitative"
        | "character_offsets"
        | "url"
        | "ordinal_regression"
        | "file_pdf";
}