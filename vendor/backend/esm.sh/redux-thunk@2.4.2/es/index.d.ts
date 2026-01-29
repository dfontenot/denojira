import type { Action, AnyAction } from 'https://esm.sh/redux@4.2.1/index.d.ts';
import type { ThunkMiddleware } from './types.d.ts';
export type { ThunkAction, ThunkDispatch, ThunkActionDispatch, ThunkMiddleware } from './types.d.ts';
declare const thunk: ThunkMiddleware<any, AnyAction, undefined> & {
    withExtraArgument<ExtraThunkArg, State = any, BasicAction extends Action<any> = AnyAction>(extraArgument: ExtraThunkArg): ThunkMiddleware<State, BasicAction, ExtraThunkArg>;
};
export default thunk;
