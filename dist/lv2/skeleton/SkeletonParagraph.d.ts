import * as React from 'react';
import { CommonProps } from '../../utilities';
declare type Props = {
    /**
     * サイズを指定します
     */
    size?: 'small' | 'medium' | 'large';
} & CommonProps;
/**
 * Paragraph用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of Paragraph component.
 */
export declare const SkeletonParagraph: React.FC<Props>;
/**
 * @deprecated SkeletonParagraph を使ってください。 Use SkeletonParagraph instead.
 */
export declare const SkeltonParagraph: React.FC<Props>;
export {};
