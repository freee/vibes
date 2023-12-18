import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import { Keys } from '../../utilities/keyboard';
import vbClassNames from '../../utilities/vbClassNames';

type Props = {
  children?: React.ReactNode;
  /**
   * セルを小さくします
   */
  small?: boolean;
  /**
   * 中央寄せにします
   */
  alignCenter?: boolean;
  /**
   * 右寄せにします
   */
  alignRight?: boolean;
  /**
   * なるべく単語の切れ目で改行するようにします(`word-break: break-word`)。メールアドレスや金額のカラムで指定してください。
   */
  breakWord?: boolean;
  /**
   * 折り返さない(`white-space: nowrap`)
   */
  noWrap?: boolean;
  /**
   * クリックハンドラを設定します
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: () => any;
  /**
   * ステータスを設定します
   */
  status?: 'alert' | 'notice' | 'success';
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
  /**
   * rowSpanを設定します
   */
  rowSpan?: number;
} & CommonProps;

const BorderTableListCell: React.FC<Props> = (props: Props) => {
  const {
    children,
    small,
    alignCenter,
    alignRight,
    breakWord,
    noWrap,
    rowSpan,
    onClick,
    status,
    rowHeader,
    fixedRowHeader,
    fixedRowHeaderLeft,
  } = props;
  const baseClass = 'vb-BorderTableListCell';
  const statusBaseClass = `${baseClass}__status`;
  const classModifier = {
    small,
    alignCenter,
    alignRight,
    clickable: !!onClick,
    breakWord,
    noWrap,
  };

  const statusClass = vbClassNames(statusBaseClass, {
    modifier: {
      alert: status === 'alert',
      notice: status === 'notice',
      success: status === 'success',
    },
  });

  const content = (
    <>
      {onClick ? (
        <span
          className={`${baseClass}__clickElement`}
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
          {children}
        </span>
      ) : (
        children
      )}
      {status && <div className={statusClass}></div>}
    </>
  );

  if (rowHeader) {
    const cp = {
      ...commonProps(props, baseClass, {
        ...classModifier,
        rowHeader,
        fixedRowHeader,
      }),
    };
    return (
      <th
        scope="row"
        rowSpan={rowSpan}
        {...{
          ...cp,
          className: `${cp.className}${
            rowHeader && fixedRowHeader && fixedRowHeaderLeft
              ? ` ${baseClass}--fixedRowHeaderLeft${fixedRowHeaderLeft}`
              : ''
          }`,
        }}
      >
        {content}
      </th>
    );
  }

  return (
    <td rowSpan={rowSpan} {...commonProps(props, baseClass, classModifier)}>
      {content}
    </td>
  );
};

export default BorderTableListCell;
