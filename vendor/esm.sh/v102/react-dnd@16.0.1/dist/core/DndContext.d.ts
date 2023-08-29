/// <reference path="https://esm.sh/v102/@types/react@18.0.26/index.d.ts" />
import type { DragDropManager } from 'https://esm.sh/v102/dnd-core@16.0.1/dist/index.d.ts';
/**
 * The React context type
 */
export interface DndContextType {
    dragDropManager: DragDropManager | undefined;
}
/**
 * Create the React Context
 */
export declare const DndContext: import("https://esm.sh/v102/@types/react@18.0.26/index.d.ts").Context<DndContextType>;
