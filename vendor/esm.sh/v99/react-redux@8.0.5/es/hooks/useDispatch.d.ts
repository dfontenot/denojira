import { Action, AnyAction, Dispatch } from 'https://esm.sh/v99/redux@4.2.0/index.d.ts';
import { Context } from 'https://esm.sh/v99/@types/react@18.0.25/index.d.ts';
import { ReactReduxContextValue } from '../components/Context.d.ts';
/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */
export declare function createDispatchHook<S = unknown, A extends Action = AnyAction>(context?: Context<ReactReduxContextValue<S, A>>): <AppDispatch extends Dispatch<A> = Dispatch<A>>() => AppDispatch;
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */
export declare const useDispatch: <AppDispatch extends Dispatch<AnyAction> = Dispatch<AnyAction>>() => AppDispatch;
