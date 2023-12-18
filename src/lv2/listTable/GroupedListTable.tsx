import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';

import TableListHead from '../../lv1/lists/TableListHead';
import TableListHeadCell from '../../lv1/lists/TableListHeadCell';
import TableListRow from '../../lv1/lists/TableListRow';
import TableListCell from '../../lv1/lists/TableListCell';
import CheckBoxCell from '../../lv1/lists/CheckBoxCell';
import TreeFoldingButtonCell from '../../lv1/lists/TreeFoldingButtonCell';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import { FitContentProps } from '../../lv1/bases/types';

import { TableHeader, TableRow, TableCell } from './ListTable';

export type TableRowGroup = {
  rows: TableRow[];
  summaryCells: TableCell[];
  /**
   * 行クリック時の処理を渡せます。遷移先のURLが存在する場合にはonClick内で遷移させるのではなく、URLを渡してください。
   * react-routerの遷移処理を入れたい場合は onSelfWindowNavigationを使用してください
   */
  onClick?: () => void;
  url?: string;
  onChangeCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
  checkBoxName?: string;
  checkBoxValue?: string;
  folded?: boolean;
  onToggleFolded?: (fold: boolean) => void;
  'data-test'?: string;
} & SelfWindowNavigationProp;

type Props = {
  headers: TableHeader[];
  rowGroups: TableRowGroup[];
  withCheckBox?: boolean;
  onChangeHeaderCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
  foldable?: boolean;
} & CommonProps &
  FitContentProps;

const GroupedListTable: React.FC<Props> = (props: Props) => {
  const {
    headers,
    withCheckBox,
    rowGroups,
    onChangeHeaderCheckBox,
    foldable,
    fitContent,
  } = props;

  return (
    <div {...commonProps(props, 'vb-groupedListTable', { fitContent })}>
      <table
        className="vb-groupedListTable__table"
        // role="treegrid" にしたいが、するとNVDAで表の中身を読めなくなってしまう
      >
        <thead>
          <TableListHead>
            {withCheckBox && (
              <CheckBoxCell
                header={true}
                aria-label="すべて選択"
                onChange={onChangeHeaderCheckBox}
                checked={rowGroups.every((rowGroup) =>
                  rowGroup.rows.every((row) => row.checked)
                )}
              />
            )}
            {foldable && (
              <TableListHeadCell>
                <VisuallyHidden>行の開閉</VisuallyHidden>
              </TableListHeadCell>
            )}
            {headers.map((header, i) => (
              <TableListHeadCell
                key={i}
                alignCenter={header.alignCenter}
                alignRight={header.alignRight}
                ordering={header.ordering}
                onClick={
                  header.onClick &&
                  ((): void => {
                    header.onClick && header.onClick(i);
                  })
                }
                minWidth={header.minWidth}
                maxWidth={header.maxWidth}
                data-test={header['data-test']}
              >
                {header.value}
              </TableListHeadCell>
            ))}
          </TableListHead>
        </thead>
        <tbody>
          {rowGroups.map((rowGroup, rowGroupIndex) => {
            return (
              <React.Fragment key={rowGroupIndex}>
                <TableListRow
                  key={rowGroupIndex}
                  aria-level={1}
                  aria-setsize={rowGroups.length}
                  aria-posinset={rowGroupIndex + 1}
                  aria-expanded={foldable ? !rowGroup.folded : undefined}
                  url={rowGroup.url}
                  onSelfWindowNavigation={rowGroup.onSelfWindowNavigation}
                  onClick={rowGroup.onClick}
                  data-test={rowGroup['data-test']}
                >
                  {withCheckBox && (
                    <CheckBoxCell
                      header={false}
                      checked={rowGroup.rows.every((row) => row.checked)}
                      onChange={rowGroup.onChangeCheckBox}
                      name={rowGroup.checkBoxName}
                      value={rowGroup.checkBoxValue}
                    />
                  )}
                  {foldable && (
                    <TreeFoldingButtonCell
                      folded={!!rowGroup.folded}
                      onToggleFolded={(fold: boolean) => {
                        rowGroup.onToggleFolded &&
                          rowGroup.onToggleFolded(fold);
                      }}
                    />
                  )}
                  {rowGroup.summaryCells.map((cell, cellIndex) => (
                    <TableListCell
                      key={cellIndex}
                      alignCenter={cell.alignCenter}
                      alignRight={cell.alignRight}
                      small={cell.small}
                      url={rowGroup.url}
                      onSelfWindowNavigation={rowGroup.onSelfWindowNavigation}
                      breakWord={cell.breakWord}
                      colSpan={cell.colSpan}
                      data-test={cell['data-test']}
                    >
                      {cell.value}
                    </TableListCell>
                  ))}
                </TableListRow>
                {(!foldable || !rowGroup.folded) &&
                  rowGroup.rows.map((row, rowIndex) => (
                    <TableListRow
                      key={`${rowGroupIndex}-${rowIndex}`}
                      url={row.url}
                      onSelfWindowNavigation={row.onSelfWindowNavigation}
                      onClick={
                        row.onClick &&
                        ((): void => {
                          row.onClick ? row.onClick(rowIndex) : null;
                        })
                      }
                      aria-level={2}
                      aria-setsize={rowGroup.rows.length}
                      aria-posinset={rowIndex + 1}
                      data-test={row['data-test']}
                    >
                      {withCheckBox && (
                        <CheckBoxCell
                          header={false}
                          checked={row.checked}
                          onChange={row.onChangeCheckBox}
                          name={row.checkBoxName}
                          value={row.checkBoxValue}
                        />
                      )}
                      {foldable && <TableListCell />}
                      {row.cells.map((cell, cellIndex) => (
                        <TableListCell
                          key={cellIndex}
                          alignCenter={cell.alignCenter}
                          alignRight={cell.alignRight}
                          small={cell.small}
                          url={row.url}
                          onSelfWindowNavigation={row.onSelfWindowNavigation}
                          breakWord={cell.breakWord}
                          indentLevel={cellIndex === 0 ? 1 : 0}
                          data-test={cell['data-test']}
                        >
                          {cell.value}
                        </TableListCell>
                      ))}
                    </TableListRow>
                  ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default GroupedListTable;
