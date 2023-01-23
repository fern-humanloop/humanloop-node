/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<serializers.label.update.Request.Raw, HumanloopApi.UpdateLabelRequest> =
    core.serialization.lazyObject(async () => (await import("../../..")).UpdateLabelRequest);

export declare namespace Request {
    type Raw = serializers.UpdateLabelRequest.Raw;
}

export const Response: core.serialization.Schema<serializers.label.update.Response.Raw, HumanloopApi.Label[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Label));

export declare namespace Response {
    type Raw = serializers.Label.Raw[];
}
