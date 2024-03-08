import * as React from 'react';
import useUniqueId from '../../hooks/useUniqueId';
import selfWindowNavigator, {
  SelfWindowNavigationProp,
} from '../../utilities/selfWindowNavigator';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';

type Props = {
  children?: React.ReactNode;
  /**
   * hrefを設定します
   */
  url?: string;
  /**
   * セルを小さくします
   */
  small?: boolean;
  /**
   * 下寄せにします
   */
  alignBottom?: boolean;
  /**
   * 中央寄せにします
   */
  alignCenter?: boolean;
  /**
   * 右寄せにします
   */
  alignRight?: boolean;
  /**
   * 上寄せにします
   */
  alignTop?: boolean;
  /**
   * なるべく単語の切れ目で改行するようにします(`word-break: break-word`)。メールアドレスや金額のカラムで指定してください。
   */
  breakWord?: boolean;
  /**
   * colSpanを設定します
   */
  colSpan?: number;
  /**
   * rowSpanを設定します
   */
  rowSpan?: number;
  /**
   * ツリー状の表現のためのインデントレベルです。左端のカラムにのみ使われる想定です
   */
  indentLevel?: number;
} & SelfWindowNavigationProp &
  CommonProps;

const TableListCell: React.FC<Props> = (props: Props) => {
  const {
    children,
    url,
    small,
    alignBottom,
    alignCenter,
    alignRight,
    alignTop,
    breakWord,
    colSpan,
    rowSpan,
    indentLevel,
    onSelfWindowNavigation,
  } = props;

  const listBaseClass = 'vb-tableListCell';
  const classModifier = {
    small,
    breakWord,
    alignBottom,
    alignCenter,
    alignRight,
    alignTop,
  };
  const uniqueId = useUniqueId('vb-tabeListcell');
  const textNodeId = `${uniqueId}__text`;

  return (
    <td
      {...commonProps(props, listBaseClass, classModifier)}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      {/* IEのみdisplay:tableで表示するため、indentContainerWrapperが必要 */}
      <span className="vb-tableListCell__indentContainerWrapper">
        <span className="vb-tableListCell__indentContainer">
          {!!indentLevel &&
            Array(indentLevel)
              .fill(null)
              .map((_, i) => (
                <span
                  className="vb-tableListCell__indent"
                  key={i}
                  role="presentation"
                  aria-hidden="true"
                >
                  &nbsp;
                </span>
              ))}
          <span
            className={vbClassNames('vb-tableListCell__indentedContent', {
              modifier: { alignCenter, alignRight },
            })}
          >
            {!!url && (
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              <a
                href={url}
                className="vb-tableListCell__link"
                tabIndex={-1}
                aria-labelledby={textNodeId}
                onClick={(e) => {
                  const navigator = selfWindowNavigator(onSelfWindowNavigation);
                  if (navigator) {
                    navigator(e, url);
                  }
                }}
              />
            )}
            <span
              className={vbClassNames('vb-tableListCell__text', {
                modifier: {
                  withLink: !!url,
                },
              })}
              id={textNodeId}
            >
              {children}
            </span>
          </span>
        </span>
      </span>
    </td>
  );
};

export default TableListCell;
