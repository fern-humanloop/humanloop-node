/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.metrics.getSampleLogs.Response.Raw, unknown[]> =
    core.serialization.list(core.serialization.unknown());

export declare namespace Response {
    type Raw = unknown[];
}