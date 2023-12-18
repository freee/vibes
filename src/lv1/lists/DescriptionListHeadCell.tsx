import * as React from 'react';
import { useResponsive } from '../../utilities/VibesProvider';
import commonProps, { CommonProps } from '../../utilities/commonProps';

type Props = {
  children?: React.ReactNode;
  /**
   * 最小の幅を設定します
   */
  minWidth?: number;
  /**
   * リストの高さを設定します
   */
  spacing?: 'normal' | 'compact';
} & CommonProps;

const DescriptionListHeadCell: React.FC<Props> = (props: Props) => {
  const { children, minWidth, spacing } = props;
  // DescriptionList は横型のテーブルに限られるのでヘッダが対応するスコープは行単位
  const baseClassName = 'vb-descriptionListHeadCell';

  const classModifier = {
    spacingCompact: spacing === 'compact',
    responsive: useResponsive(),
  };

  const cp = commonProps(props, baseClassName, classModifier);
  return (
    <th
      {...{
        ...cp,
        className: `${cp.className}${
          minWidth ? ` ${baseClassName}--minWidth${minWidth}` : ''
        }`,
      }}
      scope="row"
    >
      {children}
    </th>
  );
};

export default DescriptionListHeadCell;
