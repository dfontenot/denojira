import type { ReactElement, RefObject } from 'https://esm.sh/@types/react@19.0.7/index.d.ts';
import type { DragPreviewOptions, DragSourceOptions } from './options.d.ts';
export declare type ConnectableElement = RefObject<any> | ReactElement | Element | null;
export declare type DragElementWrapper<Options> = (elementOrNode: ConnectableElement, options?: Options) => ReactElement | null;
export declare type ConnectDragSource = DragElementWrapper<DragSourceOptions>;
export declare type ConnectDropTarget = DragElementWrapper<any>;
export declare type ConnectDragPreview = DragElementWrapper<DragPreviewOptions>;
