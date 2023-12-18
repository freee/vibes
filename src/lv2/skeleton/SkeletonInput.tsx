import * as React from 'react';
import { SkeletonBase } from '../../lv1/skeleton/SkeletonBase';
import commonProps, { CommonProps } from '../../utilities/commonProps';

import { TextFieldWidth } from '../../lv1/forms/TextField';

type Props = {
  /**
   * Makes the height smaller /サイズを小さくします
   */
  small?: boolean;
  /**
   * Makes the height larger / サイズを大きくします
   */
  large?: boolean;
  /**
   * Changes the width / 幅を指定します
   *
   * - xSmall: 4rem (64px)
   * - small: 7rem (112px)
   * - medium (default): 11rem (176px)
   * - large: 24rem (384px)
   * - full: 100%
   */
  width?: TextFieldWidth;
} & CommonProps;

const widthMap = { xSmall: 2, small: 4, medium: 7, large: 16, full: 12 };

/**
 * TextField 等のスケルトンイメージのコンポーネントです。
 * Skeleton image component for TextField related components.
 */
export const SkeletonInput: React.FC<Props> = (props) => {
  const { small, large, width } = props;

  return (
    <span
      {...commonProps(props, 'vb-skeletonInput', {
        small,
        large,
        widthXSmall: width === 'xSmall',
        widthSmall: width === 'small',
        widthMedium: width === 'medium' || !width,
        widthLarge: width === 'large',
        widthFull: width === 'full',
      })}
    >
      <SkeletonBase
        width={widthMap[width || 'medium']}
        height={small ? 0.75 : large ? 1.5 : 1}
      />
    </span>
  );
};
