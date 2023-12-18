import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import InlineLink from '../../lv1/buttons/InlineLink';
import vbClassNames from '../../utilities/vbClassNames';

export type BulletedListContent = {
  value: React.ReactNode;
  url?: string;
  target?: string;
  rel?: string;
  'data-guide'?: string;
  'data-test'?: string;
  'data-tracking'?: string;
  'data-masking'?: boolean;
};
type Props = {
  /**
   * リスト項目要素を設定します
   */
  listContents?: BulletedListContent[];
  /**
   * リスト項目要素のマーカーを設定します
   */
  listStyleType?: 'decimal' | 'disc';
  /**
   * 文字サイズを小さくします
   */
  small?: boolean;
} & MarginClassProps &
  CommonProps;

/**
 * 箇条書きのためのコンポーネントです
 */
const BulletedList: React.FC<Props> = (props: Props) => {
  const {
    listContents,
    listStyleType,
    small,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginSize,
  } = props;

  const listBaseClass = 'vb-bulletedList';

  const listItems =
    listContents &&
    listContents.map((listCont, index) => (
      <li key={index} className={`${listBaseClass}__list__listItem`}>
        {listCont.url ? (
          <InlineLink
            href={listCont.url}
            target={listCont.target || ''}
            data-guide={listCont['data-guide']}
            data-test={listCont['data-test']}
            data-tracking={listCont['data-tracking']}
            data-masking={listCont['data-masking']}
            rel={listCont.rel}
          >
            {listCont.value}
          </InlineLink>
        ) : (
          listCont.value
        )}
      </li>
    ));

  switch (listStyleType) {
    case 'decimal':
      return (
        <div
          {...commonProps(
            props,
            listBaseClass,
            { small },
            { marginBottom, marginLeft, marginRight, marginSize, marginTop }
          )}
        >
          <ol
            className={vbClassNames(`${listBaseClass}__list`, {
              modifier: { decimal: true },
            })}
          >
            {listItems}
          </ol>
        </div>
      );
    case 'disc':
    default:
      return (
        <div
          {...commonProps(
            props,
            listBaseClass,
            { small },
            { marginBottom, marginLeft, marginRight, marginSize, marginTop }
          )}
        >
          <ul
            className={vbClassNames(`${listBaseClass}__list`, {
              modifier: { decimal: false },
            })}
          >
            {listItems}
          </ul>
        </div>
      );
  }
};

export default BulletedList;
