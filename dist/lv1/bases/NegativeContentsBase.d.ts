import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
declare type Props = {
    children: React.ReactNode;
    contentsBasePaddingSize?: 'small' | 'large';
} & CommonProps;
/**
 * `ContentsBase` のpaddingを打ち消すための専用コンポーネントです。 `ContentsBase` の左右のpaddingを打ち消します。末尾に置いた場合（ `:last-child` となる場合）には下方向のmarginを打ち消します。
 *
 * * 必ず `ContentsBase` の直下に配置してください（下側のマージンの打ち消しのため）
 * * `ContentsBase` に `paddingSize` を指定している場合は、`contentsBasePaddingSize` にそれと同じ値をセットしてください
 */
export declare const NegativeContentsBase: React.FC<Props>;
export {};
