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
      return 4;
    case 'medium':
      return 7.5;
    case 'large':
      return 11;
  }
};

const getHeight = (size: 'small' | 'medium' | 'large' = 'medium') => {
  switch (size) {
    case 'small':
      return 1.5;
    case 'medium':
      return 2.25;
    case 'large':
      return 3;
  }
};

/**
 * ボタンやフォームのフィールドなど用のスケルトンイメージのコンポーネントです
 * This component provides skeleton images for buttons, form fields, and so on.
 */
export const SkeletonBlock: React.FC<Props> = (props) => (
  <div
    {...commonProps(props, 'vb-skeltonBlock', {
      small: props.size === 'small',
      large: props.size === 'large',
    })}
  >
    <SkeletonBase width={getWidth(props.size)} height={getHeight(props.size)} />
  </div>
);

/**
 * @deprecated SkeletonBlock を使ってください。 Use SkeletonBlock instead.
 */
export const SkeltonBlock = SkeletonBlock;
