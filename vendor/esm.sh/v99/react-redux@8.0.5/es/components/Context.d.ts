/// <reference path="https://esm.sh/v99/@types/react@18.0.25/index.d.ts" />
import type { Action, AnyAction, Store } from 'https://esm.sh/v99/redux@4.2.0/index.d.ts';
import type { Subscription } from '../utils/Subscription.d.ts';
export interface ReactReduxContextValue<SS = any, A extends Action = AnyAction> {
    store: Store<SS, A>;
    subscription: Subscription;
    getServerState?: () => SS;
}
export declare const ReactReduxContext: import("https://esm.sh/v99/@types/react@18.0.25/index.d.ts").Context<ReactReduxContextValue<any, AnyAction>>;
export declare type ReactReduxContextInstance = typeof ReactReduxContext;
export default ReactReduxContext;
