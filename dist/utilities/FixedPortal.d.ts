import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    isActive: boolean;
    positionalBaseElement: HTMLElement | undefined;
    verticalPosition?: 'top' | 'bottom';
    horizontalPosition?: 'left' | 'center' | 'right';
    popupRef?: React.RefObject<HTMLDivElement>;
    'data-masking'?: boolean;
};
/**
 * children をfixedする要素でラップして Portal 化する
 */
declare const FixedPortal: React.FC<Props>;
export default FixedPortal;
