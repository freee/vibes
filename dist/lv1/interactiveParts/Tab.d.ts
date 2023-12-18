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
     * サイズを小さくします
     */
    small?: boolean;
    selected?: boolean;
    /**
     * click ハンドラを設定します
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * blur ハンドラを設定します
     */
    onBlur?: (event: React.FormEvent<HTMLButtonElement>) => void;
    /**
     * 通知の有無および読み上げられるメッセージを設定します
     */
    notification?: string;
} & MarginClassProps & CommonProps;
/**
 * タブひとつひとつを表現するコンポーネントです。単体で使用せず、`lv2/TabBar` を使用してください
 */
declare const Tab: React.FC<Props>;
export default Tab;
