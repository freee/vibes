import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { TextFieldWidth } from '../../lv1/forms/TextField';
declare type Props = {
    /**
     * Makes the height smaller /サイズを小さくします
     */
    small?: boolean;
    /**
     * Makes the height larger / サイズを大きくします
     */
    large?: boolean;
    /**
     * Changes the width / 幅を指定します
     *
     * - xSmall: 4rem (64px)
     * - small: 7rem (112px)
     * - medium (default): 11rem (176px)
     * - large: 24rem (384px)
     * - full: 100%
     */
    width?: TextFieldWidth;
} & CommonProps;
/**
 * TextField 等のスケルトンイメージのコンポーネントです。
 * Skeleton image component for TextField related components.
 */
export declare const SkeletonInput: React.FC<Props>;
export {};
