import * as React from 'react';
import { Order } from '../../lv1/lists/TableListHeadCell';
import { CommonProps } from '../../utilities/commonProps';
/**
 * 行見出しを階層構造にできるテーブルです
 *
 * - 現状の仕様では、階層は5段階までしか持つことができません
 * - それ以上指定したい場合は、stylesheets/lv2/hierarchicalTable.scss を修正してください
 */
export declare type HierarchicalTableHeader = {
    value: React.ReactNode;
    alignCenter?: boolean;
    alignRight?: boolean;
    ordering?: Order;
    /**
     * 固定幅を設定します
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
    onClick?: () => unknown;
} & CommonProps;
export declare type HierarchicalTableRow = {
    cells: Array<HierarchicalTableCell>;
    childRows: Array<HierarchicalTableRow>;
} & CommonProps;
export declare type HierarchicalTableCell = {
    value: React.ReactNode;
    alignCenter?: boolean;
    alignRight?: boolean;
    small?: boolean;
    /**
     * なるべく単語の切れ目で改行するようにします(`word-break: break-word`)。メールアドレスや金額のカラムで指定してください。
     */
    breakWord?: boolean;
    /**
     * 折り返さない(`white-space: nowrap`)
     */
    noWrap?: boolean;
    onClick?: () => unknown;
};
declare type Props = {
    headers: Array<HierarchicalTableHeader>;
    rows: Array<HierarchicalTableRow>;
    /**
     * 列見出しを表の上に固定して表示します
     */
    fixedHeader?: boolean;
    /**
     * 行見出しを表の左に固定して表示します
     */
    fixedRowHeader?: boolean;
} & CommonProps;
declare const HierarchicalTable: React.FC<Props>;
export default HierarchicalTable;
