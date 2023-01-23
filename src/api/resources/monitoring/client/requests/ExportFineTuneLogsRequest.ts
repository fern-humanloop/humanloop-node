/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { HumanloopApi } from "@fern-api/humanloop";

export interface ExportFineTuneLogsRequest {
    projectId: string;
    search?: string;
    metadataSearch?: string;
    startDate?: string;
    endDate?: string;
    body: HumanloopApi.FineTuneFormatting;
}
