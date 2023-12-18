import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children?: React.ReactNode;
    /** マージンの大きさを指定します。 `small` = 1rem, `medium` = 1.5rem, `large` = 2rem （サイズ指定が独特なので要注意）*/
    marginSize?: 'small' | 'medium' | 'large';
    top?: boolean;
    left?: boolean;
    right?: boolean;
    bottom?: boolean;
} & CommonProps;
/**
 * マイナスのマージンを持つ領域です。このコンポーネントは将来的に廃止する可能性があります。かわりに
 * マージンをつけたいコンポーネントや `MarginBase` コンポーネントの `ma`, `mb`, `ml`, `mr`, `mt` 属性にマイナス値を渡してください。
 */
declare const NegativeMarginBase: React.FC<Props>;
export default NegativeMarginBase;
