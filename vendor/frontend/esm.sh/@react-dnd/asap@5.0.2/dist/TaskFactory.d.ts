import type { Task } from './types.d.ts';
export declare class TaskFactory {
    private onError;
    private freeTasks;
    constructor(onError: (err: any) => void);
    create(task: () => void): Task;
}
