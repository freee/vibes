import * as React from 'react';
import { StatusType } from '../icons/StatusIcon';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    selectableItemIndex?: number;
    children?: React.ReactNode;
    selected?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    statusIconText?: string;
    statusIconType?: StatusType;
    actionButton?: boolean;
    LeftIconComponent?: React.ElementType;
    FarRightIconComponent?: React.ElementType;
    bgTransparent?: boolean;
    onClick?: React.MouseEventHandler;
    selectableItemRef?: React.Ref<HTMLAnchorElement | HTMLButtonElement>;
    onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>, selectableItemIndex: number) => void;
} & MarginClassProps & CommonProps;
/**
 * `lv2/ListButtons` および `lv2/ListButtonSelector` で使用される想定のボタンです。単独で使用しないでください
 */
declare const ListButton: React.FC<Props>;
export default ListButton;
