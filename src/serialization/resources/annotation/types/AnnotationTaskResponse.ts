/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HumanloopApi } from "@fern-api/humanloop";
import * as core from "../../../../core";

export const AnnotationTaskResponse: core.serialization.ObjectSchema<
    serializers.AnnotationTaskResponse.Raw,
    HumanloopApi.AnnotationTaskResponse
> = core.serialization.object({
    id: core.serialization.number(),
    url: core.serialization.string().optional(),
});

export declare namespace AnnotationTaskResponse {
    interface Raw {
        id: number;
        url?: string | null;
    }
}
