import * as React from 'react';
import { CommonProps } from '../../utilities';
declare type Props = {
    /**
     * サイズを指定します
     */
    size?: 'small' | 'medium' | 'large';
} & CommonProps;
/**
 * ボタンやフォームのフィールドなど用のスケルトンイメージのコンポーネントです
 * This component provides skeleton images for buttons, form fields, and so on.
 */
export declare const SkeletonBlock: React.FC<Props>;
/**
 * @deprecated SkeletonBlock を使ってください。 Use SkeletonBlock instead.
 */
export declare const SkeltonBlock: React.FC<Props>;
export {};
