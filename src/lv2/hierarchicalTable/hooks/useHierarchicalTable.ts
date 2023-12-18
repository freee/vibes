import { useCallback, useMemo, useState } from 'react';

type HierarchicalRow<Row> = unknown & { childRows: Array<Row> };

type FlatRow<Row> = Row & {
  /**
   * 階層レベル
   */
  level: number;
  /**
   * 直下の子行の数
   */
  childCount: number;
  /**
   * すべての子孫行の数
   */
  totalChildCount: number;
  setSize: number;
  posInset: number;
};

export type FlatRowWithStatus<Row> = FlatRow<Row> & {
  folded: boolean;
  visible: boolean;
};

const toFlatRow = <Row extends HierarchicalRow<Row>>({
  row,
  rowIndex,
  level,
  setSize,
}: {
  row: Row;
  rowIndex: number;
  level: number;
  setSize: number;
}): Array<FlatRow<Row>> => {
  const parentRow = {
    ...row,
    level,
    childCount: row.childRows.length,
    totalChildCount: 0,
    setSize,
    posInset: rowIndex + 1,
  };
  if (parentRow.childCount === 0) {
    return [parentRow];
  }
  const childRows = row.childRows.flatMap(
    (childRow, childRowIndex, childRowArr) =>
      toFlatRow({
        row: childRow,
        rowIndex: childRowIndex,
        level: level + 1,
        setSize: childRowArr.length,
      })
  );
  return [{ ...parentRow, totalChildCount: childRows.length }].concat(
    childRows
  );
};

export const useHierarchicalTable = <Row extends HierarchicalRow<Row>>(
  rows: Array<Row>
): [Array<FlatRowWithStatus<Row>>, (rowIndex: number) => void] => {
  const flatRows = useMemo(
    () =>
      rows.flatMap((row, rowIndex, arr) =>
        toFlatRow({ row, rowIndex, level: 1, setSize: arr.length })
      ),
    [rows]
  );

  // flatRowの各行が内部的に折りたたまれているかどうかを保持する（true のとき閉じている）
  const [rowFoldedStatus, setRowFoldedStatus] = useState(
    new Array<boolean>(flatRows.length).fill(false)
  );

  // rows が変更されたら、開閉状態を初期化する
  const [prevRows, setPrevRows] = useState(rows);
  if (rows !== prevRows) {
    setPrevRows(rows);
    setRowFoldedStatus(new Array<boolean>(flatRows.length).fill(false));
  }

  // flatRowの各行が画面上で見える状態になっているかどうかを保持する
  // 折りたたまれている行の子孫すべてが画面上で見えない状態になる（その行自体は見える）
  const rowVisibility = useMemo(() => {
    const ret = new Array<boolean>(flatRows.length).fill(true);
    let rowIndex = 0;
    while (rowIndex < flatRows.length) {
      const folded = rowFoldedStatus[rowIndex];
      const totalChildCount = flatRows[rowIndex].totalChildCount;
      if (folded && totalChildCount > 0) {
        for (let i = 1; i <= totalChildCount; i++) {
          ret[rowIndex + i] = false;
        }
        // 同階層の次の行まで飛ばす
        rowIndex += totalChildCount + 1;
      } else {
        rowIndex++;
      }
    }
    return ret;
  }, [flatRows, rowFoldedStatus]);

  const updateRowFoldedStatus = useCallback(
    (rowIndex: number) =>
      setRowFoldedStatus((prev) =>
        prev
          .slice(0, rowIndex)
          .concat([!prev[rowIndex]])
          .concat(prev.slice(rowIndex + 1))
      ),
    []
  );

  return [
    flatRows.map((flatRow, rowIndex) => ({
      ...flatRow,
      folded: rowFoldedStatus[rowIndex],
      visible: rowVisibility[rowIndex],
    })),
    updateRowFoldedStatus,
  ];
};
