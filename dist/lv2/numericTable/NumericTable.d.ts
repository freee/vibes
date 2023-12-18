import * as React from 'react';
import TableListHead from '../../lv1/lists/TableListHead';
import { Order } from '../../lv1/lists/TableListHeadCell';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
export declare type NumericTableHeader = {
    value?: React.ReactNode;
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
    onClick?: (rowIndex: number) => any;
    'data-test'?: string;
};
export declare type NumericTableRow = {
    cells: Array<NumericTableCell>;
    checkBoxDisabled?: boolean;
    checked?: boolean;
    onChangeCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
    checkBoxName?: string;
    checkBoxValue?: string;
    'data-test'?: string;
};
export declare type NumericTableCell = {
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
    onClick?: (rowIndex: number) => any;
    status?: 'alert' | 'notice' | 'success';
    'data-masking'?: boolean;
    'data-test'?: string;
};
declare type Props = {
    headers: Array<NumericTableHeader>;
    rows: Array<NumericTableRow>;
    withCheckBox?: boolean;
    onChangeHeaderCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * @deprecated 代わりに rowHeaderCount を利用してください
     * 各行の最初のセルを行の見出しとして表示します
     */
    hasRowHeader?: boolean;
    /**
     * この数だけ、各行の左側の列を行の見出しとして表示します
     */
    rowHeaderCount?: number;
    /**
     * 各行の最初のセルを表の左に固定して表示します（rowHeaderCount と同時に利用する想定）
     * rowHeaderCount が 2 以上の場合、fixed で指定する left の値を計算するために、対応する headers の width 指定が必要になります
     */
    fixedRowHeader?: boolean;
} & Pick<React.ComponentPropsWithoutRef<typeof TableListHead>, 'fixedHeader' | 'fixedHeaderOffset'> & MarginClassProps & CommonProps;
declare const NumericTable: React.FC<Props>;
export default NumericTable;
