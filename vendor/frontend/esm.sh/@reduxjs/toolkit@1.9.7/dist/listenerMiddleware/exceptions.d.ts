import type { SerializedError } from 'https://esm.sh/@reduxjs/toolkit@1.9.7/dist/index.d.ts';
export declare const taskCancelled: "task-cancelled";
export declare const taskCompleted: "task-completed";
export declare const listenerCancelled: "listener-cancelled";
export declare const listenerCompleted: "listener-completed";
export declare class TaskAbortError implements SerializedError {
    code: string | undefined;
    name: string;
    message: string;
    constructor(code: string | undefined);
}
