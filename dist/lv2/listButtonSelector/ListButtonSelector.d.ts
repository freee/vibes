import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { StatusType } from '../../lv1/icons/StatusIcon';
declare type ButtonProps = {
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
    selectedLabel: string;
    selectorLabel: string;
    withActionButton?: boolean;
    actionLabel?: string;
    action?: () => any;
    ActionIconComponent?: React.ElementType;
    buttons: Array<ButtonProps>;
    disabled?: boolean;
} & MarginClassProps & CommonProps;
declare type State = {
    isOpen: boolean;
};
/**
 * コンポーネントの位置付けについて議論の余地がある状態なので、新規に使用しないでください。
 *
 * どうしても使用したい場合は必ず相談してください
 */
export default class ListButtonSelector extends React.Component<Props, State> {
    ref: React.RefObject<HTMLDivElement>;
    selectableItemRefs: Array<HTMLAnchorElement | HTMLButtonElement>;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    toggleOpen: () => void;
    handleClose: (e: MouseEvent) => void;
    handleKeyDownSelectableItem(e: React.KeyboardEvent, itemIndex: number): void;
    render(): React.ReactNode;
}
export {};
