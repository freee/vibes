import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    /**
     * 選択状態にします
     */
    current?: boolean;
    /**
     * disabled に設定します
     */
    disabled?: boolean;
    /**
     * click ハンドラを指定します
     */
    onClick?: React.MouseEventHandler;
    /**
     * サイズを小さくします
     */
    small?: boolean;
    /**
     * ボタンの代替テキストとして使用されます（`aria-label` になります）。
     */
    label?: string;
} & MarginClassProps & CommonProps;
export default function PagerButton(props: Props): React.ReactElement;
export {};
