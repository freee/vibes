import * as React from 'react';
import { SkeletonBase } from '../../lv1/skeleton/SkeletonBase';
import { CommonProps } from '../../utilities';
import commonProps from '../../utilities/commonProps';

type Props = {
  /**
   * サイズを指定します
   */
  size?: 'small' | 'medium' | 'large';
} & CommonProps;

const getWidth = (size: 'small' | 'medium' | 'large' = 'medium') => {
  switch (size) {
    case 'small':
      return 6;
    case 'medium':
      return 11;
    case 'large':
      return 24;
  }
};
/**
 * Paragraph用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of Paragraph component.
 */
export const SkeletonParagraph: React.FC<Props> = (props) => (
  <div {...commonProps(props, 'vb-skeltonParagraph')}>
    <SkeletonBase width={getWidth(props.size)} height={0.875} />
  </div>
);

/**
 * @deprecated SkeletonParagraph を使ってください。 Use SkeletonParagraph instead.
 */
export const SkeltonParagraph = SkeletonParagraph;
