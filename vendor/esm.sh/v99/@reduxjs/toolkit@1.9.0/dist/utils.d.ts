import type { Middleware } from 'https://esm.sh/v99/redux@4.2.0/index.d.ts';
export declare function getTimeMeasureUtils(maxDelay: number, fnName: string): {
    measureTime<T>(fn: () => T): T;
    warnIfExceeded(): void;
};
export declare function delay(ms: number): Promise<unknown>;
/**
 * @public
 */
export declare class MiddlewareArray<Middlewares extends Middleware<any, any>[]> extends Array<Middlewares[number]> {
    constructor(...items: Middlewares);
    static get [Symbol.species](): any;
    concat<AdditionalMiddlewares extends ReadonlyArray<Middleware<any, any>>>(items: AdditionalMiddlewares): MiddlewareArray<[...Middlewares, ...AdditionalMiddlewares]>;
    concat<AdditionalMiddlewares extends ReadonlyArray<Middleware<any, any>>>(...items: AdditionalMiddlewares): MiddlewareArray<[...Middlewares, ...AdditionalMiddlewares]>;
    prepend<AdditionalMiddlewares extends ReadonlyArray<Middleware<any, any>>>(items: AdditionalMiddlewares): MiddlewareArray<[...AdditionalMiddlewares, ...Middlewares]>;
    prepend<AdditionalMiddlewares extends ReadonlyArray<Middleware<any, any>>>(...items: AdditionalMiddlewares): MiddlewareArray<[...AdditionalMiddlewares, ...Middlewares]>;
}
export declare function freezeDraftable<T>(val: T): T;
