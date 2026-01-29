import type { Middleware } from 'https://esm.sh/redux@4.2.1/index.d.ts';
export interface ActionCreatorInvariantMiddlewareOptions {
    /**
     * The function to identify whether a value is an action creator.
     * The default checks for a function with a static type property and match method.
     */
    isActionCreator?: (action: unknown) => action is Function & {
        type?: unknown;
    };
}
export declare function getMessage(type?: unknown): string;
export declare function createActionCreatorInvariantMiddleware(options?: ActionCreatorInvariantMiddlewareOptions): Middleware;
