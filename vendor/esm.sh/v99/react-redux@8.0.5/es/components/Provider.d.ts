import { Context, ReactNode } from 'https://esm.sh/v99/@types/react@18.0.25/index.d.ts';
import { ReactReduxContextValue } from './Context.d.ts';
import { Action, AnyAction, Store } from 'https://esm.sh/v99/redux@4.2.0/index.d.ts';
export interface ProviderProps<A extends Action = AnyAction, S = unknown> {
    /**
     * The single Redux store in your application.
     */
    store: Store<S, A>;
    /**
     * An optional server state snapshot. Will be used during initial hydration render if available, to ensure that the UI output is consistent with the HTML generated on the server.
     */
    serverState?: S;
    /**
     * Optional context to be used internally in react-redux. Use React.createContext() to create a context to be used.
     * If this is used, you'll need to customize `connect` by supplying the same context provided to the Provider.
     * Initial value doesn't matter, as it is overwritten with the internal state of Provider.
     */
    context?: Context<ReactReduxContextValue<S, A>>;
    children: ReactNode;
}
declare function Provider<A extends Action = AnyAction, S = unknown>({ store, context, children, serverState, }: ProviderProps<A, S>): JSX.Element;
export default Provider;
