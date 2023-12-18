import * as React from 'react';
import TableListHead from '../../lv1/lists/TableListHead';
import TableListHeadCell, { Order } from '../../lv1/lists/TableListHeadCell';
import TableListRow from '../../lv1/lists/TableListRow';
import BorderTableListCell from '../../lv1/lists/BorderTableListCell';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import HierarchicalTableRowHeaderCell from './HierarchicalTableRowHeaderCell';
import {
  useHierarchicalTable,
  FlatRowWithStatus,
} from './hooks/useHierarchicalTable';

/**
 * 行見出しを階層構造にできるテーブルです
 *
 * - 現状の仕様では、階層は5段階までしか持つことができません
 * - それ以上指定したい場合は、stylesheets/lv2/hierarchicalTable.scss を修正してください
 */
export type HierarchicalTableHeader = {
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

export type HierarchicalTableRow = {
  cells: Array<HierarchicalTableCell>;
  childRows: Array<HierarchicalTableRow>;
} & CommonProps;

export type HierarchicalTableCell = {
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

type Props = {
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

function createHeader(
  headers: HierarchicalTableHeader[],
  fixedRowHeader?: boolean
): React.ReactNode {
  const headerContents = headers.map(
    (header: HierarchicalTableHeader, index: number) => (
      <TableListHeadCell
        key={index}
        alignCenter={header.alignCenter}
        alignRight={header.alignRight}
        ordering={header.ordering}
        width={header.width}
        minWidth={header.minWidth}
        maxWidth={header.maxWidth}
        noWrap={header.noWrap}
        rowHeader={index === 0}
        fixedRowHeader={index === 0 && fixedRowHeader}
        onClick={header.onClick}
        data-test={header['data-test']}
      >
        {header.value}
      </TableListHeadCell>
    )
  );

  return headerContents;
}

function createCells(
  cells: HierarchicalTableCell[],
  level: number,
  foldable: boolean,
  folded: boolean,
  onToggleFolded: () => void,
  fixedRowHeader?: boolean
): React.ReactNode {
  return cells.map((cell, index) =>
    index === 0 ? (
      <HierarchicalTableRowHeaderCell
        key={0}
        small={cell.small}
        alignCenter={cell.alignCenter}
        alignRight={cell.alignRight}
        breakWord={cell.breakWord}
        noWrap={cell.noWrap}
        rowHeader={true}
        fixedRowHeader={fixedRowHeader}
        onClick={cell.onClick}
        onToggleFolded={onToggleFolded}
        level={level}
        foldable={foldable}
        folded={folded}
      >
        {cell.value}
      </HierarchicalTableRowHeaderCell>
    ) : (
      <BorderTableListCell
        key={index}
        small={cell.small}
        alignCenter={cell.alignCenter}
        alignRight={cell.alignRight}
        breakWord={cell.breakWord}
        noWrap={cell.noWrap}
        onClick={cell.onClick}
      >
        {cell.value}
      </BorderTableListCell>
    )
  );
}

function createRows(
  rows: Array<FlatRowWithStatus<HierarchicalTableRow>>,
  updateRowFoldedStatus: (rowIndex: number) => void,
  fixedRowHeader?: boolean
): React.ReactNode {
  return rows.map((row, rowIndex) => {
    if (row.visible) {
      const foldable = row.childCount > 0;
      return (
        <TableListRow
          key={rowIndex}
          aria-level={row.level}
          aria-setsize={row.setSize}
          aria-posinset={row.posInset}
          aria-expanded={foldable ? !row.folded : undefined}
          data-test={row['data-test']}
        >
          {createCells(
            row.cells,
            row.level,
            foldable,
            row.folded,
            () => updateRowFoldedStatus(rowIndex),
            fixedRowHeader
          )}
        </TableListRow>
      );
    }
  });
}

const HierarchicalTable: React.FC<Props> = (props: Props) => {
  const { headers, rows, fixedHeader, fixedRowHeader } = props;

  const [hierarchicalRows, updateRowFoldedStatus] = useHierarchicalTable(rows);

  return (
    <div {...commonProps(props, 'vb-hierarchicalTable')}>
      <table className="vb-hierarchicalTable__table">
        <thead>
          <TableListHead fixedHeader={fixedHeader}>
            {createHeader(headers, fixedRowHeader)}
          </TableListHead>
        </thead>
        <tbody>
          {createRows(hierarchicalRows, updateRowFoldedStatus, fixedRowHeader)}
        </tbody>
      </table>
    </div>
  );
};

export default HierarchicalTable;
