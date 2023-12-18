import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { HeadlineStyleProps } from './TypographyStyle';
declare const SubSectionTitle: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    id?: string | undefined;
    /**
     * 見出しレベルを指定します。これに応じて `h1` から `h6` 要素としてrenderされます。初期値は3です。
     * -1にすると `span` 要素となります。
     */
    headlineLevel?: 2 | 1 | -1 | 3 | 4 | 5 | 6 | undefined;
} & Omit<HeadlineStyleProps, "ellipsis" | "headlineLevel"> & import("../../utilities/commonProps").CommonDataProps & import("../../utilities/functionalMarginClasses").FunctionalMarginProps & MarginClassProps & React.RefAttributes<HTMLHeadingElement>>;
export default SubSectionTitle;
