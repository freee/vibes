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

const getLength = (size: 'small' | 'medium' | 'large' = 'medium') => {
  switch (size) {
    case 'small':
      return 1.5;
    case 'medium':
      return 2;
    case 'large':
      return 3;
  }
};

/**
 * アイコン用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of icons.
 */
export const SkeletonIcon: React.FC<Props> = (props) => (
  <div
    {...commonProps(props, 'vb-skeltonIcon', {
      small: props.size === 'small',
      large: props.size === 'large',
    })}
  >
    <SkeletonBase
      width={getLength(props.size)}
      height={getLength(props.size)}
    />
  </div>
);

/**
 * @deprecated SkeletonIcon を使ってください。 Use SkeletonIcon instead.
 */
export const SkeltonIcon = SkeletonIcon;
