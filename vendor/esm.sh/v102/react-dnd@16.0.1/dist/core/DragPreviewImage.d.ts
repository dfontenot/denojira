import type { FC } from 'https://esm.sh/v102/@types/react@18.0.26/index.d.ts';
import type { ConnectDragPreview } from '../types/index.d.ts';
export interface DragPreviewImageProps {
    connect: ConnectDragPreview;
    src: string;
}
/**
 * A utility for rendering a drag preview image
 */
export declare const DragPreviewImage: FC<DragPreviewImageProps>;
