/// <reference types="https://esm.sh/@types/react@19.0.7/index.d.ts" />
import type { DragDropManager } from 'https://esm.sh/dnd-core@16.0.1/dist/index.d.ts';
/**
 * The React context type
 */
export interface DndContextType {
    dragDropManager: DragDropManager | undefined;
}
/**
 * Create the React Context
 */
export declare const DndContext: import("https://esm.sh/@types/react@19.0.7/index.d.ts").Context<DndContextType>;
