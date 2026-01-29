import type { BackendFactory, DragDropManager } from 'https://esm.sh/dnd-core@16.0.1/dist/index.d.ts';
import type { FC, ReactNode } from 'https://esm.sh/@types/react@19.0.7/index.d.ts';
export declare type DndProviderProps<BackendContext, BackendOptions> = {
    children?: ReactNode;
    manager: DragDropManager;
} | {
    backend: BackendFactory;
    children?: ReactNode;
    context?: BackendContext;
    options?: BackendOptions;
    debugMode?: boolean;
};
/**
 * A React component that provides the React-DnD context
 */
export declare const DndProvider: FC<DndProviderProps<unknown, unknown>>;
