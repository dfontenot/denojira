import { Context } from 'https://esm.sh/v99/@types/react@18.0.25/index.d.ts';
import { Action as BasicAction, AnyAction, Store } from 'https://esm.sh/v99/redux@4.2.0/index.d.ts';
import { ReactReduxContextValue } from '../components/Context.d.ts';
/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */
export declare function createStoreHook<S = unknown, A extends BasicAction = AnyAction>(context?: Context<ReactReduxContextValue<S, A>>): <State = S, Action extends BasicAction<any> = A>() => Store<State, Action>;
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */
export declare const useStore: <State = unknown, Action extends BasicAction<any> = AnyAction>() => Store<State, Action>;
