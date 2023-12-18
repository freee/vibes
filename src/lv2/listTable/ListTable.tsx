import * as React from 'react';

import TableListHead from '../../lv1/lists/TableListHead';
import TableListHeadCell, { Order } from '../../lv1/lists/TableListHeadCell';
import TableListRow from '../../lv1/lists/TableListRow';
import TableListCell from '../../lv1/lists/TableListCell';
import CheckBoxCell from '../../lv1/lists/CheckBoxCell';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { FitContentProps } from '../../lv1/bases/types';

export type TableHeader = {
  value: React.ReactNode;
  alignCenter?: boolean;
  alignRight?: boolean;
  ordering?: Order;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (rowIndex: number) => any;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  /**
   * 折り返さない(`white-space: nowrap`)
   */
  noWrap?: boolean;
  'data-test'?: string;
};

export type TableRow = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  /**
   * 行クリック時の処理を渡せます。遷移先のURLが存在する場合にはonClick内で遷移させるのではなく、URLを渡してください。
   * react-routerの遷移処理を入れたい場合は onSelfWindowNavigationを使用してください
   */
  onClick?: (rowIndex: number) => any;
  url?: string;
  cells: Array<TableCell>;
  checkBoxDisabled?: boolean;
  checked?: boolean;
  onChangeCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
  checkBoxName?: string;
  checkBoxValue?: string;
  'data-test'?: string;
  ref?: React.Ref<HTMLTableRowElement>;
} & SelfWindowNavigationProp;

export type TableCell = {
  value: React.ReactNode;
  alignCenter?: boolean;
  alignRight?: boolean;
  alignTop?: boolean;
  small?: boolean;
  /**
   * なるべく単語の切れ目で改行するようにします(`word-break: break-word`)。メールアドレスや金額のカラムで指定してください。
   */
  breakWord?: boolean;
  colSpan?: number;
  'data-masking'?: boolean;
  'data-test'?: string;
};

type Props = {
  headers: Array<TableHeader>;
  rows: Array<TableRow>;
  withCheckBox?: boolean;
  onChangeHeaderCheckBox?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Deprecated 使用しないでください
   */
  margins?: MarginClassProps;
} & Pick<
  React.ComponentPropsWithoutRef<typeof TableListHead>,
  'fixedHeader' | 'fixedHeaderOffset'
> &
  CommonProps &
  FitContentProps;

/**
 * リストを表現するテーブルです
 *
 * * 歴史的な理由で `BasicTable` と呼ばれていることがあります
 * * オブジェクトのリストを、1行につき1つ表現するときに使用してください。
 * * 行全体のクリックでその行の詳細または編集画面へ遷移（画面全体の遷移には限らず、「モーダルを開く」でも良い）するようにしてください
 *   * 詳細または編集画面でのアクションを、セル内にボタンとして配置することも可能です
 * * 行クリックでURLに遷移するときは、必ず `url` を渡してください（Ctrl+クリックの操作やリンクURLのコピーをできるようにするため）
 */
const ListTable: React.FC<Props> = (props: Props) => {
  const {
    margins,
    headers,
    rows,
    withCheckBox,
    onChangeHeaderCheckBox,
    fixedHeaderOffset,
    fixedHeader,
    fitContent,
  } = props;

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
    <div {...commonProps(props, 'vb-listTable', { fitContent }, margins)}>
      <table className="vb-listTable__table">
        <thead>
          <TableListHead
            fixedHeader={fixedHeader}
            fixedHeaderOffset={fixedHeaderOffset}
          >
            {withCheckBox && (
              <CheckBoxCell
                header={true}
                aria-label="すべて選択"
                onChange={onChangeHeaderCheckBox}
                checked={allEnabledCheckBoxesSelected}
              />
            )}
            {headers.map((header, i) => {
              return (
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
                  width={header.width}
                  minWidth={header.minWidth}
                  maxWidth={header.maxWidth}
                  noWrap={header.noWrap}
                  data-test={header['data-test']}
                >
                  {header.value}
                </TableListHeadCell>
              );
            })}
          </TableListHead>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            return (
              <TableListRow
                key={i}
                url={row.url}
                onSelfWindowNavigation={row.onSelfWindowNavigation}
                onClick={
                  row.onClick &&
                  ((): void => {
                    row.onClick ? row.onClick(i) : null;
                  })
                }
                data-test={row['data-test']}
                ref={row.ref}
              >
                {withCheckBox && (
                  <CheckBoxCell
                    header={false}
                    checked={row.checked}
                    disabled={row.checkBoxDisabled}
                    onChange={row.onChangeCheckBox}
                    name={row.checkBoxName}
                    value={row.checkBoxValue}
                  />
                )}
                {row.cells.map((cell, j) => {
                  return (
                    <TableListCell
                      key={j}
                      alignCenter={cell.alignCenter}
                      alignRight={cell.alignRight}
                      alignTop={cell.alignTop}
                      small={cell.small}
                      url={row.url}
                      onSelfWindowNavigation={row.onSelfWindowNavigation}
                      breakWord={cell.breakWord}
                      colSpan={cell.colSpan}
                      data-masking={cell['data-masking']}
                      data-test={cell['data-test']}
                    >
                      {cell.value}
                    </TableListCell>
                  );
                })}
              </TableListRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
