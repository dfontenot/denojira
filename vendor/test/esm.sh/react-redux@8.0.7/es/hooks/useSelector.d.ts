/// <reference types="https://esm.sh/@types/react@18.3.27/index.d.ts" />
import type { EqualityFn } from '../types.d.ts';
import type { uSESWS } from '../utils/useSyncExternalStore.d.ts';
export declare const initializeUseSelector: (fn: uSESWS) => void;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */
export declare function createSelectorHook(context?: import("https://esm.sh/@types/react@18.3.27/index.d.ts").Context<import("../components/Context.d.ts").ReactReduxContextValue<any, import("https://esm.sh/redux@5.0.1/dist/redux.d.ts").AnyAction>>): <TState = unknown, Selected = unknown>(selector: (state: TState) => Selected, equalityFn?: EqualityFn<Selected>) => Selected;
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */
export declare const useSelector: <TState = unknown, Selected = unknown>(selector: (state: TState) => Selected, equalityFn?: EqualityFn<Selected> | undefined) => Selected;
