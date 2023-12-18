import * as React from 'react';
import { SkeletonBase } from '../../lv1/skeleton/SkeletonBase';
import { CommonProps } from '../../utilities';
import commonProps from '../../utilities/commonProps';

type Props = {
  /**
   * サイズを指定します
   */
  size?: 'default' | 'large';
} & CommonProps;

const getWidth = (size: 'default' | 'large' = 'default') => {
  switch (size) {
    case 'default':
      return 5;
    case 'large':
      return 18;
  }
};

/**
 * 画像サムネイルなど、大きめの正方形・長方形用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton images for larger squares or rectangles, such as image thumbnails.
 */
export const SkeletonRectangle: React.FC<Props> = (props) => (
  <div {...commonProps(props, 'vb-skeltonRectangle')}>
    <SkeletonBase width={getWidth(props.size)} height={5} />
  </div>
);

/**
 * @deprecated SkeletonRectangle を使ってください。 Use SkeletonRectangle instead.
 */
export const SkeltonRectangle = SkeletonRectangle;
