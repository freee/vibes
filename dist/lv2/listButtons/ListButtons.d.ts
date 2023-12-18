import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { StatusType } from '../../lv1/icons/StatusIcon';
export declare type ButtonProps = {
    label: React.ReactNode;
    selected?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    statusIconText?: string;
    statusIconType?: StatusType;
    bgTransparent?: boolean;
    onClick?: React.MouseEventHandler;
};
declare type Props = {
    buttons: Array<ButtonProps>;
    selectableItemRef?: React.Ref<HTMLAnchorElement | HTMLButtonElement>;
    onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>, itemIndex: number) => void;
} & MarginClassProps & CommonProps;
/**
 * `lv2/ListButtonSelector` で使用される想定のボタンです。単独で使用しないでください
 */
declare const ListButtons: React.FC<Props>;
export default ListButtons;
