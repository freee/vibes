import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    isActive: boolean;
    onOverflow?: () => void;
    onScroll?: () => void;
    portalTargetElement?: HTMLElement | undefined;
    positionalBaseElement: HTMLElement | undefined;
    verticalPosition?: 'top' | 'bottom';
    horizontalPosition?: 'left' | 'center' | 'right';
    popupRef?: React.RefObject<HTMLDivElement>;
    'data-masking'?: boolean;
};
/**
 * children をスクロールに追従する要素でラップして Portal 化する
 */
declare const ScrollPortal: React.FC<Props>;
export default ScrollPortal;
