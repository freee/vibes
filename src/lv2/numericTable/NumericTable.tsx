import * as React from 'react';
import TableListHead from '../../lv1/lists/TableListHead';
import TableListHeadCell, { Order } from '../../lv1/lists/TableListHeadCell';
import TableListRow from '../../lv1/lists/TableListRow';
import BorderTableListCell from '../../lv1/lists/BorderTableListCell';
import CheckBoxCell from '../../lv1/lists/CheckBoxCell';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';

export type NumericTableHeader = {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (rowIndex: number) => any;
  'data-test'?: string;
};

export type NumericTableRow = {
  cells: Array<NumericTableCell>;
  checkBoxDisabled?: boolean;
  checked?: boolean;
  onChangeCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
  checkBoxName?: string;
  checkBoxValue?: string;
  'data-test'?: string;
};

export type NumericTableCell = {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (rowIndex: number) => any;
  status?: 'alert' | 'notice' | 'success';
  'data-masking'?: boolean;
  'data-test'?: string;
};

type Props = {
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
} & Pick<
  React.ComponentPropsWithoutRef<typeof TableListHead>,
  'fixedHeader' | 'fixedHeaderOffset'
> &
  MarginClassProps &
  CommonProps;

function createHeader(
  headers: NumericTableHeader[],
  rowHeaderCount: number,
  fixedRowHeader: boolean,
  fixedRowHeaderLeftList: number[],
  checkboxProps?: {
    checked: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
  }
): React.ReactNode {
  const headerCheckBox = checkboxProps && (
    <CheckBoxCell
      header={true}
      aria-label="すべて選択"
      onChange={checkboxProps.onChange}
      checked={checkboxProps.checked}
    />
  );

  const headerContents = headers.map(
    (header: NumericTableHeader, index: number) => (
      <TableListHeadCell
        key={index}
        alignCenter={header.alignCenter}
        alignRight={header.alignRight}
        ordering={header.ordering}
        width={header.width}
        minWidth={header.minWidth}
        maxWidth={header.maxWidth}
        noWrap={header.noWrap}
        rowHeader={index < rowHeaderCount}
        fixedRowHeader={index < rowHeaderCount && fixedRowHeader}
        fixedRowHeaderLeft={fixedRowHeaderLeftList?.[index]}
        onClick={header.onClick && (() => header.onClick?.(index))}
        data-test={header['data-test']}
      >
        {header.value}
      </TableListHeadCell>
    )
  );

  return (headerCheckBox ? [headerCheckBox] : []).concat(headerContents);
}

function createCells(
  row: NumericTableRow,
  rowHeaderCount: number,
  fixedRowHeader: boolean,
  fixedRowHeaderLeftList: number[],
  withCheckBox?: boolean
): React.ReactNode {
  const checkBoxCell = withCheckBox && (
    <CheckBoxCell
      header={false}
      checked={row.checked}
      disabled={row.checkBoxDisabled}
      onChange={row.onChangeCheckBox}
      name={row.checkBoxName}
      value={row.checkBoxValue}
    />
  );

  const cellContents = row.cells.map(
    (cell: NumericTableCell, index: number) => (
      <BorderTableListCell
        key={index}
        small={cell.small}
        alignCenter={cell.alignCenter}
        alignRight={cell.alignRight}
        breakWord={cell.breakWord}
        noWrap={cell.noWrap}
        status={cell.status}
        rowHeader={index < rowHeaderCount}
        fixedRowHeader={index < rowHeaderCount && fixedRowHeader}
        fixedRowHeaderLeft={fixedRowHeaderLeftList?.[index]}
        onClick={cell.onClick && (() => cell.onClick?.(index))}
        data-masking={cell['data-masking']}
        data-test={row['data-test']}
      >
        {cell.value}
      </BorderTableListCell>
    )
  );

  return (checkBoxCell ? [checkBoxCell] : []).concat(cellContents);
}

function createRows(
  rows: NumericTableRow[],
  rowHeaderCount: number,
  fixedRowHeader: boolean,
  fixedRowHeaderLeftList: number[],
  withCheckBox?: boolean
): React.ReactNode {
  const rowContents = rows.map((row: NumericTableRow, index: number) => (
    <TableListRow key={index} data-test={row['data-test']}>
      {createCells(
        row,
        rowHeaderCount,
        fixedRowHeader,
        fixedRowHeaderLeftList,
        withCheckBox
      )}
    </TableListRow>
  ));

  return rowContents;
}

const NumericTable: React.FC<Props> = (props: Props) => {
  const {
    headers,
    rows,
    withCheckBox,
    onChangeHeaderCheckBox,
    fixedHeaderOffset,
    fixedHeader,
    hasRowHeader,
    rowHeaderCount: rawRowHeaderCount,
    fixedRowHeader,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const rowHeaderCount = rawRowHeaderCount || (hasRowHeader ? 1 : 0);
  // 今のところ header で colspan を指定できないので、最小単位での width の計算を headers から行う
  // もし指定できるようになった場合は、width の list を受け取るなどして対処する必要がある
  const fixedRowHeaderLeftList = headers
    .slice(0, rowHeaderCount)
    .reduce((acc, _, index, arr) => {
      acc[index] = (acc[index - 1] || 0) + (arr[index - 1]?.width || 0);
      return acc;
    }, Array(rowHeaderCount).fill(0));

  const allEnabledCheckBoxesSelected = React.useMemo(() => {
    const filteredRows = rows.filter((row) => !row.checkBoxDisabled);

    return (
      filteredRows.length > 0 &&
      filteredRows
        .filter((row) => !row.checkBoxDisabled)
        .every((row) => row.checked)
    );
  }, [rows]);

  return (
    <div
      {...commonProps(
        props,
        'vb-numericTable',
        {},
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginSize,
          marginTop,
        }
      )}
    >
      <table className="vb-numericTable__table">
        <thead>
          <TableListHead
            fixedHeader={fixedHeader}
            fixedHeaderOffset={fixedHeaderOffset}
          >
            {createHeader(
              headers,
              rowHeaderCount,
              !!fixedRowHeader,
              fixedRowHeaderLeftList,
              withCheckBox && !!onChangeHeaderCheckBox
                ? {
                    checked: allEnabledCheckBoxesSelected,
                    onChange: onChangeHeaderCheckBox,
                  }
                : undefined
            )}
          </TableListHead>
        </thead>
        <tbody>
          {createRows(
            rows,
            rowHeaderCount,
            !!fixedRowHeader,
            fixedRowHeaderLeftList,
            withCheckBox
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NumericTable;
