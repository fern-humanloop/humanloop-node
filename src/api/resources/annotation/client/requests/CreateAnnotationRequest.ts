/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateAnnotationRequest {
    taskId: number;
    externalId?: string;
    labelId?: string;
    start?: number;
    end?: number;
    text?: string;
    strength?: number;
}