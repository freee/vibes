import * as React from 'react';
import { MdArrowUpward, MdArrowDownward, MdSwapVert } from 'react-icons/md';
import { Keys } from '../../utilities/keyboard';
import commonProps, { CommonProps } from '../../utilities/commonProps';

export type Order = 'asc' | 'desc' | 'init';
type Props = {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const TableListHeadCell: React.FC<Props> = (props: Props) => {
  const {
    children,
    alignCenter,
    alignRight,
    ordering,
    onClick,
    width,
    minWidth,
    maxWidth,
    noWrap,
    rowHeader,
    fixedRowHeader,
    fixedRowHeaderLeft,
  } = props;
  const orderInit = ordering === 'init';
  const orderAscending = ordering === 'asc';
  const orderDescending = ordering === 'desc';

  const listBaseClass = 'vb-tableListHeadCell';
  const content = (
    <>
      {children}
      {orderAscending ? (
        <span
          className={`${listBaseClass}__iconWrapper`}
          role="img"
          aria-label="昇順に並んでいます"
        >
          <MdArrowUpward className={`${listBaseClass}__headerArrowUp`} />
        </span>
      ) : orderDescending ? (
        <span
          className={`${listBaseClass}__iconWrapper`}
          role="img"
          aria-label="降順に並んでいます"
        >
          <MdArrowDownward className={`${listBaseClass}__headerArrowDown`} />
        </span>
      ) : orderInit ? (
        <span
          className={`${listBaseClass}__iconWrapper`}
          role="img"
          aria-label="並び替え可能です"
        >
          <MdSwapVert className={`${listBaseClass}__headerSwapVert`} />
        </span>
      ) : (
        ''
      )}
    </>
  );

  const cp = commonProps(props, listBaseClass, {
    alignCenter,
    alignRight,
    orderAscending,
    orderDescending,
    clickable: !!onClick,
    noWrap,
    rowHeader,
    fixedRowHeader: rowHeader && fixedRowHeader, // rowHeader が true の時のみ有効化する
  });
  return (
    <th
      {...{
        ...cp,
        className: `${cp.className}${
          width ? ` ${listBaseClass}--width${width}` : ''
        }${minWidth ? ` ${listBaseClass}--minWidth${minWidth}` : ''}${
          maxWidth ? ` ${listBaseClass}--maxWidth${maxWidth}` : ''
        }${
          rowHeader && fixedRowHeader && fixedRowHeaderLeft
            ? ` ${listBaseClass}--fixedRowHeaderLeft${fixedRowHeaderLeft}`
            : ''
        }`,
      }}
    >
      {onClick ? (
        <span
          className={`${listBaseClass}__clickElement`}
          role="button"
          onClick={(): void => onClick()}
          onKeyDown={(e): void => {
            if (e.key === Keys.SPACE || e.key === Keys.ENTER) {
              e.preventDefault();
              onClick();
            }
          }}
          tabIndex={0}
        >
          {content}
        </span>
      ) : (
        content
      )}
    </th>
  );
};

export default TableListHeadCell;
