/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.dataset.updateDetails.Request.Raw,
    HumanloopApi.UpdateDatasetDetailsRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
});

export declare namespace Request {
    interface Raw {
        name?: string | null;
        description?: string | null;
    }
}

export const Response: core.serialization.Schema<serializers.dataset.updateDetails.Response.Raw, HumanloopApi.Dataset> =
    core.serialization.lazyObject(async () => (await import("../../..")).Dataset);

export declare namespace Response {
    type Raw = serializers.Dataset.Raw;
}