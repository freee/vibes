import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    /**
     * 選択状態にします
     */
    current?: boolean;
    /**
     * サイズを小さくします
     */
    small?: boolean;
    /**
     * サイズを大きくします
     */
    large?: boolean;
    /**
     * 押下時に遷移させるURLを指定します。指定した場合は `<a>` 要素、空文字列もしくはundefinedの場合は `<button>` 要素となります
     */
    href?: string;
    /**
     * target を設定します
     */
    target?: string;
    /**
     * 未指定の場合、`target="_blank"` であれば `noopener noreferrer`となります
     *
     * （空文字列を渡した場合には `""` が指定されます）
     */
    rel?: string;
    /**
     * click ハンドラを設定します
     */
    onClick?: React.MouseEventHandler;
    /**
     * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
     */
    IconComponent?: React.ElementType;
} & CommonProps;
declare const SegmentControlButton: React.FC<Props>;
export default SegmentControlButton;
