import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    small?: boolean;
    border?: 'default' | 'alert' | 'notice' | 'success';
    position?: 'left' | 'right' | 'center';
    verticalPosition?: 'top' | 'bottom';
} & MarginClassProps & CommonProps;
/**
 * バルーンはツールチップやシステムメッセージなどに利用できます
 */
export declare const BalloonInternal: React.ForwardRefRenderFunction<HTMLDivElement, Props>;
declare const Balloon: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    small?: boolean | undefined;
    border?: "default" | "success" | "alert" | "notice" | undefined;
    position?: "center" | "left" | "right" | undefined;
    verticalPosition?: "top" | "bottom" | undefined;
} & MarginClassProps & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLDivElement>>;
export default Balloon;
