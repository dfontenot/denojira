import type { AnyAction } from 'https://esm.sh/v99/redux@4.2.0/index.d.ts';
import type { ThunkMiddleware } from 'https://esm.sh/v99/redux-thunk@2.4.2/es/index.d.ts';
import type { ImmutableStateInvariantMiddlewareOptions } from './immutableStateInvariantMiddleware.d.ts';
import type { SerializableStateInvariantMiddlewareOptions } from './serializableStateInvariantMiddleware.d.ts';
import type { ExcludeFromTuple } from './tsHelpers.d.ts';
import { MiddlewareArray } from './utils.d.ts';
interface ThunkOptions<E = any> {
    extraArgument: E;
}
interface GetDefaultMiddlewareOptions {
    thunk?: boolean | ThunkOptions;
    immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions;
    serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions;
}
export declare type ThunkMiddlewareFor<S, O extends GetDefaultMiddlewareOptions = {}> = O extends {
    thunk: false;
} ? never : O extends {
    thunk: {
        extraArgument: infer E;
    };
} ? ThunkMiddleware<S, AnyAction, E> : ThunkMiddleware<S, AnyAction>;
export declare type CurriedGetDefaultMiddleware<S = any> = <O extends Partial<GetDefaultMiddlewareOptions> = {
    thunk: true;
    immutableCheck: true;
    serializableCheck: true;
}>(options?: O) => MiddlewareArray<ExcludeFromTuple<[ThunkMiddlewareFor<S, O>], never>>;
export declare function curryGetDefaultMiddleware<S = any>(): CurriedGetDefaultMiddleware<S>;
/**
 * Returns any array containing the default middleware installed by
 * `configureStore()`. Useful if you want to configure your store with a custom
 * `middleware` array but still keep the default set.
 *
 * @return The default middleware used by `configureStore()`.
 *
 * @public
 *
 * @deprecated Prefer to use the callback notation for the `middleware` option in `configureStore`
 * to access a pre-typed `getDefaultMiddleware` instead.
 */
export declare function getDefaultMiddleware<S = any, O extends Partial<GetDefaultMiddlewareOptions> = {
    thunk: true;
    immutableCheck: true;
    serializableCheck: true;
}>(options?: O): MiddlewareArray<ExcludeFromTuple<[ThunkMiddlewareFor<S, O>], never>>;
export {};
