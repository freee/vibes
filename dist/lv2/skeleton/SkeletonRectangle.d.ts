import * as React from 'react';
import { CommonProps } from '../../utilities';
declare type Props = {
    /**
     * サイズを指定します
     */
    size?: 'default' | 'large';
} & CommonProps;
/**
 * 画像サムネイルなど、大きめの正方形・長方形用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton images for larger squares or rectangles, such as image thumbnails.
 */
export declare const SkeletonRectangle: React.FC<Props>;
/**
 * @deprecated SkeletonRectangle を使ってください。 Use SkeletonRectangle instead.
 */
export declare const SkeltonRectangle: React.FC<Props>;
export {};
