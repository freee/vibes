import * as React from 'react';
import { DropdownContent } from './types';
declare const DropdownMenuContent: React.ForwardRefExoticComponent<{
    contents: Array<DropdownContent>;
    firstSelectableItemRef?: React.Ref<HTMLAnchorElement | HTMLInputElement | HTMLButtonElement> | undefined;
    menuMaxHeightOffset?: number | undefined;
    onRequestClose?: (() => void) | undefined;
    onFocusOut?: ((direction: 'upward' | 'downward') => void) | undefined;
} & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLDivElement>>;
export default DropdownMenuContent;
