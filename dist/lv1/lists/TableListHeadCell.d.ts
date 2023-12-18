import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
export declare type Order = 'asc' | 'desc' | 'init';
declare type Props = {
    children?: React.ReactNode;
    /**
     * 中央寄せにします
     */
    alignCenter?: boolean;
    /**
     * 右寄せにします
     */
    alignRight?: boolean;
    /**
     * ソートアイコンを設定します
     */
    ordering?: Order;
    /**
     * クリックハンドラを設定します
     */
    onClick?: () => any;
    /**
     * 幅を設定します
     */
    width?: number;
    /**
     * 最小の幅を設定します
     */
    minWidth?: number;
    /**
     * 最大の幅を設定します
     */
    maxWidth?: number;
    /**
     * 折り返さない(`white-space: nowrap`)
     */
    noWrap?: boolean;
    /**
     * 行の見出しかどうかを設定します
     */
    rowHeader?: boolean;
    /**
     * 横スクロール時に行の見出しとして固定表示するどうかを設定します
     */
    fixedRowHeader?: boolean;
    /**
     * 固定表示する行の見出しが複数になる場合の left の値を設定します
     */
    fixedRowHeaderLeft?: number;
} & CommonProps;
declare const TableListHeadCell: React.FC<Props>;
export default TableListHeadCell;
