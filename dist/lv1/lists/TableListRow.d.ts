import * as React from 'react';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { TableRowAriaProps } from '../../utilities/AriaProps';
declare const _default: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    /**
     * hrefを設定します
     */
    url?: string | undefined;
    /**
     * クリックハンドラを設定します
     */
    onClick?: (() => any) | undefined;
} & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & SelfWindowNavigationProp & TableRowAriaProps & React.RefAttributes<HTMLTableRowElement>>;
export default _default;
