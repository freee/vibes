import * as React from 'react';
import commonProps, { CommonProps } from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';

export type LineSeparatedListContent = {
  value: React.ReactNode;
};

type Props = {
  /**
   * リスト項目要素を設定します
   */
  listContents?: LineSeparatedListContent[];
} & CommonProps;

/**
 * Block上の見た目をした箇条書きのためのコンポーネントです
 */
const LineSeparatedList: React.FC<Props> = (props: Props) => {
  const { listContents = [] } = props;

  const baseClass = 'vb-lineSeparatedList';

  const listItems = listContents.map((listContent, index) => (
    <li key={index} className={`${baseClass}__list__listItem`}>
      {listContent.value}
    </li>
  ));

  return (
    <div {...commonProps(props, baseClass)}>
      <ul className={vbClassNames(`${baseClass}__list`, {})}>{listItems}</ul>
    </div>
  );
};

export default LineSeparatedList;
