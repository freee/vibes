import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
declare type Props = {
    children?: React.ReactNode;
    /**
     * アイコンとして表示するコンポーネントを渡します。react-iconsのコンポーネントが想定されています。
     */
    IconComponent?: React.ElementType;
    /**
     * href を指定します
     */
    href?: string;
    /**
     * 選択状態にします
     */
    current?: boolean;
} & SelfWindowNavigationProp & CommonProps;
/**
 * グローバルナビ専用のボタンです。直接使用せず、 `lv2/GlobalNavi` を使用してください。
 */
declare const GlobalNaviButton: React.FC<Props>;
export default GlobalNaviButton;
