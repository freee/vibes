import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { MarginClassProps } from '../../utilities/marginClasses';
export declare type SwallowProps = {
    /**
     * ロゴの大きさを指定します。`fit-width` と `fit-height` でそれぞれ親要素に対して100%となるよう表示します。
     */
    size?: 'medium' | 'fit-width' | 'fit-height';
} & CommonProps & MarginClassProps;
declare type Props = SwallowProps & {
    /**
     * サイズ無指定で配置した場合の高さを指定します。
     */
    mediumHeightRem: number;
    renderSVG: (props: {
        className: string;
        styles: React.CSSProperties;
    }) => React.ReactNode;
};
export declare const SwallowContainer: React.FC<Props>;
export {};
