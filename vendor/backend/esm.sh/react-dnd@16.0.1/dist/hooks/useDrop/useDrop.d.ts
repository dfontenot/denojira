import type { ConnectDropTarget } from '../../types/index.d.ts';
import type { DropTargetHookSpec, FactoryOrInstance } from '../types.d.ts';
/**
 * useDropTarget Hook
 * @param spec The drop target specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */
export declare function useDrop<DragObject = unknown, DropResult = unknown, CollectedProps = unknown>(specArg: FactoryOrInstance<DropTargetHookSpec<DragObject, DropResult, CollectedProps>>, deps?: unknown[]): [CollectedProps, ConnectDropTarget];
