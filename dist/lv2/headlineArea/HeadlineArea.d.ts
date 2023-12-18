import * as React from 'react';
import { StatusType } from '../../lv1/icons/StatusIcon';
/**
 * 画面上部に配置する、見出し、関連メニュー、画面の説明が一体となったコンポーネントです
 */
declare const HeadlineArea: React.ForwardRefExoticComponent<{
    pageTitle: string;
    children?: React.ReactNode;
    loading?: boolean | undefined;
    relatedMenus?: React.ReactNode;
    statusIconType?: StatusType | undefined;
    statusIconText?: string | undefined;
} & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & React.RefAttributes<HTMLHeadingElement>>;
export default HeadlineArea;
