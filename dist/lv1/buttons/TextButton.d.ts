import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { ButtonAriaProps, LinkAriaProps } from '../../utilities/AriaProps';
declare type Props = {
    children?: React.ReactNode;
    IconComponent?: React.ElementType;
    iconPosition?: 'left' | 'right';
    id?: string;
    url?: string;
    target?: string;
    rel?: string;
    noBorder?: boolean;
    disabled?: boolean;
    small?: boolean;
    onClick?: (event: React.SyntheticEvent<HTMLSpanElement | HTMLAnchorElement>) => void;
} & ButtonAriaProps & LinkAriaProps & MarginClassProps & CommonProps;
/**
 * このコンポーネントの使用は **非推奨** です。
 * 文中にリンクを配置したい場合は `InlineLink` を、それ以外の場所では `Button` を `appearance="tertiary"` で使用してください。
 */
declare const TextButton: React.FC<Props>;
export default TextButton;
