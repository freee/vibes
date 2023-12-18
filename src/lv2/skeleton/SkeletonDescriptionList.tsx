import React from 'react';
import DescriptionList from '../descriptionList/DescriptionList';
import { SkeletonParagraph } from './SkeletonParagraph';
import { CommonProps } from '../../utilities';

type Props = {
  /**
   * 行数を指定します。デフォルトは３です。
   */
  rowCount?: number;
} & CommonProps;

/**
 * ローディング中の DescriptionList を表現するために使います
 * This component provides a skeleton image of DescriptionList.
 */
export const SkeletonDescriptionList: React.FC<Props> = (props) => {
  const { rowCount = 3, ...commonProps } = props;

  return (
    <DescriptionList
      listContents={Array(rowCount).fill({
        title: <SkeletonParagraph size="small" />,
        value: <SkeletonParagraph size="medium" />,
      })}
      {...commonProps}
    />
  );
};
