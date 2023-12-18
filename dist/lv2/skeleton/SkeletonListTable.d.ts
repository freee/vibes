import React from 'react';
import { TableCell } from '../listTable/ListTable';
import { CommonProps } from '../../utilities';
declare type Props = {
    /**
     * 列数を指定します。デフォルトは５です。
     */
    columnCount?: number;
    /**
     * 行数を指定します。デフォルトは３です。
     */
    rowCount?: number;
    /**
     * 各行に表示するコンポーネント等を指定します。
     * デフォルトでは、１列目に `SkeletonParagraph` の `"medium"`サイズが、２列目以降には `SkeletonParagraph` の `"small"` サイズが表示されます。
     */
    rowCells?: Array<TableCell>;
} & CommonProps;
/**
 * ローディング中のテーブルを表現するために使います
 * This component provides a skeleton image of ListTable.
 */
export declare const SkeletonListTable: React.FC<Props>;
/**
 * @deprecated SkeletonListTable を使ってください。 Use SkeletonListTable instead.
 */
export declare const SkeltonListTable: React.FC<Props>;
export {};
