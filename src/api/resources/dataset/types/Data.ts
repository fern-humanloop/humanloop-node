/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HumanloopApi } from "@fern-api/humanloop";

export interface Data {
    id: number;
    datasetId?: number;
    source: string;
    createdAt?: string;
    updatedAt?: string;
    processingStatus: HumanloopApi.DataProcessingStatus;
}
