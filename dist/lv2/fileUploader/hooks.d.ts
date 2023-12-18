import { FileType } from './types';
export declare const useDropFile: (onFileSelect: (files: Array<File>) => any, acceptFileTypes?: FileType[] | undefined, multiple?: boolean | undefined) => {
    canDrop: boolean;
    isOver: boolean;
    drop: import("react-dnd").ConnectDropTarget;
    invalidFileDropped: boolean;
};
