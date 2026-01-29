import type { ConnectDragPreview, ConnectDragSource } from '../../types/index.d.ts';
import type { DragSourceHookSpec, FactoryOrInstance } from '../types.d.ts';
/**
 * useDragSource hook
 * @param sourceSpec The drag source specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */
export declare function useDrag<DragObject = unknown, DropResult = unknown, CollectedProps = unknown>(specArg: FactoryOrInstance<DragSourceHookSpec<DragObject, DropResult, CollectedProps>>, deps?: unknown[]): [CollectedProps, ConnectDragSource, ConnectDragPreview];
