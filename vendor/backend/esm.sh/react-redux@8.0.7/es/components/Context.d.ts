/// <reference types="https://esm.sh/@types/react@18.3.27/index.d.ts" />
import type { Action, AnyAction, Store } from 'https://esm.sh/redux@5.0.1/dist/redux.d.ts';
import type { Subscription } from '../utils/Subscription.d.ts';
export interface ReactReduxContextValue<SS = any, A extends Action = AnyAction> {
    store: Store<SS, A>;
    subscription: Subscription;
    getServerState?: () => SS;
}
export declare const ReactReduxContext: import("https://esm.sh/@types/react@18.3.27/index.d.ts").Context<ReactReduxContextValue<any, AnyAction>>;
export declare type ReactReduxContextInstance = typeof ReactReduxContext;
export default ReactReduxContext;
