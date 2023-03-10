/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.monitoring.getLogs.Response.Raw, HumanloopApi.LogsPage> =
    core.serialization.lazyObject(async () => (await import("../../..")).LogsPage);

export declare namespace Response {
    type Raw = serializers.LogsPage.Raw;
}
