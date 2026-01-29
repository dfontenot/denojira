import type { FC } from 'https://esm.sh/@types/react@19.0.7/index.d.ts';
import type { ConnectDragPreview } from '../types/index.d.ts';
export interface DragPreviewImageProps {
    connect: ConnectDragPreview;
    src: string;
}
/**
 * A utility for rendering a drag preview image
 */
export declare const DragPreviewImage: FC<DragPreviewImageProps>;
