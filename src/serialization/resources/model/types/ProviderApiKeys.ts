/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const ProviderApiKeys: core.serialization.ObjectSchema<
    serializers.ProviderApiKeys.Raw,
    HumanloopApi.ProviderApiKeys
> = core.serialization.object({
    openai: core.serialization.string().optional(),
    ai21: core.serialization.string().optional(),
    mock: core.serialization.string().optional(),
    anthropic: core.serialization.string().optional(),
});

export declare namespace ProviderApiKeys {
    interface Raw {
        openai?: string | null;
        ai21?: string | null;
        mock?: string | null;
        anthropic?: string | null;
    }
}