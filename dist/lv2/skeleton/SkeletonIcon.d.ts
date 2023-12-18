import * as React from 'react';
import { CommonProps } from '../../utilities';
declare type Props = {
    /**
     * サイズを指定します
     */
    size?: 'small' | 'medium' | 'large';
} & CommonProps;
/**
 * アイコン用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of icons.
 */
export declare const SkeletonIcon: React.FC<Props>;
/**
 * @deprecated SkeletonIcon を使ってください。 Use SkeletonIcon instead.
 */
export declare const SkeltonIcon: React.FC<Props>;
export {};
