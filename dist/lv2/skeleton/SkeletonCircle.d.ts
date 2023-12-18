import * as React from 'react';
import { CommonProps } from '../../utilities';
declare type Props = {
    /**
     * サイズを指定します
     */
    size?: 'small' | 'medium' | 'large' | 'xlarge';
} & CommonProps;
/**
 * ユーザーアバターなど、円形で表示されるUIパーツ用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of circular UI parts such as user avaters.
 */
export declare const SkeletonCircle: React.FC<Props>;
/**
 * @deprecated SkeletonCircle を使ってください。 Use SkeletonCircle instead.
 */
export declare const SkeltonCircle: React.FC<Props>;
export {};
