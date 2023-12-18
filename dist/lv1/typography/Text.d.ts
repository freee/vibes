import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { TypographyStyleProps } from './TypographyStyle';
declare type FontColor = 'black' | 'burnt' | 'link' | 'alert' | 'notice' | 'white' | 'GY7' | 'S9' | 'P7' | 'P5' | 'RE5' | 'YE10';
declare type FontSize = 0.75 | 0.875 | 1 | 1.5;
declare type FontWeight = 'normal' | 'bold';
declare type TextProps = {
    /**
     * テキストのサイズをrem単位で指定します。
     *
     * 1rem = 16px換算で、0.75rem = 12px, 0.875rem = 14px, 1.5rem = 24px となります
     *
     */
    size?: FontSize;
    /** テキストの太さを指定します */
    weight?: FontWeight;
    /** テキストの色を指定します */
    color?: FontColor;
    /**
     * テキストのoverflowWrapを指定します。
     *
     * この指定により、テキストが親要素（の幅）をあふれないように、分割できない文字列の途中で「改行を入れるかどうか」の設定ができます
     */
    overflowWrap?: 'break-word' | 'normal' | 'anywhere';
} & Pick<TypographyStyleProps, 'ellipsis'>;
declare type Props = {
    children?: React.ReactNode;
} & TextProps & CommonProps;
/**
 * 様々なフォントサイズ・フォントウェイト・色のインラインテキストを作ることができるコンポーネントです
 */
export declare const Text: React.FC<Props>;
export {};
