import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
export declare type BulletedListContent = {
    value: React.ReactNode;
    url?: string;
    target?: string;
    rel?: string;
    'data-guide'?: string;
    'data-test'?: string;
    'data-tracking'?: string;
    'data-masking'?: boolean;
};
declare type Props = {
    /**
     * リスト項目要素を設定します
     */
    listContents?: BulletedListContent[];
    /**
     * リスト項目要素のマーカーを設定します
     */
    listStyleType?: 'decimal' | 'disc';
    /**
     * 文字サイズを小さくします
     */
    small?: boolean;
} & MarginClassProps & CommonProps;
/**
 * 箇条書きのためのコンポーネントです
 */
declare const BulletedList: React.FC<Props>;
export default BulletedList;
