import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
export declare type LineSeparatedListContent = {
    value: React.ReactNode;
};
declare type Props = {
    /**
     * リスト項目要素を設定します
     */
    listContents?: LineSeparatedListContent[];
} & CommonProps;
/**
 * Block上の見た目をした箇条書きのためのコンポーネントです
 */
declare const LineSeparatedList: React.FC<Props>;
export default LineSeparatedList;
