import React from 'react';
import ListTable, { TableCell } from '../listTable/ListTable';
import { SkeletonParagraph } from './SkeletonParagraph';
import { SkeletonBase } from '../../lv1/skeleton/SkeletonBase';
import { CommonProps } from '../../utilities';

type Props = {
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
export const SkeletonListTable: React.FC<Props> = (props) => {
  const { columnCount = 5, rowCount = 3, rowCells, ...commonProps } = props;
  const numberOfColumns = rowCells?.length || columnCount;

  return (
    <ListTable
      headers={Array(numberOfColumns).fill({
        value: <SkeletonBase width={3} height={0.75} />,
      })}
      rows={Array(rowCount).fill({
        cells: rowCells
          ? rowCells
          : Array(numberOfColumns)
              .fill(1)
              .map((_, i) => ({
                value: (
                  <SkeletonParagraph size={i === 0 ? 'medium' : 'small'} />
                ),
              })),
      })}
      {...commonProps}
    />
  );
};

/**
 * @deprecated SkeletonListTable を使ってください。 Use SkeletonListTable instead.
 */
export const SkeltonListTable = SkeletonListTable;
