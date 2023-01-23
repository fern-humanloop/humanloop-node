/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.modelConfiguration.getAll.Response.Raw,
    HumanloopApi.ProjectModelConfig[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).ProjectModelConfig));

export declare namespace Response {
    type Raw = serializers.ProjectModelConfig.Raw[];
}
