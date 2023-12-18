import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    IconComponent: React.ElementType;
    primary?: boolean;
    danger?: boolean;
    disabled?: boolean;
    small?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: React.MouseEventHandler;
} & MarginClassProps & CommonProps;
/**
 * (廃止予定) Buttonコンポーネントを使用してください
 *
 * 編集・削除・新規作成など、ボタン押下によりもたらされれる動作のメタファーやアイキャッチが必要な際に使用してください
 */
export default function LeftIconButton(props: Props): React.ReactElement;
export {};
