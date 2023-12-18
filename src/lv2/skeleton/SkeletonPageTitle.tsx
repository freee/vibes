import * as React from 'react';
import { SkeletonBase } from '../../lv1/skeleton/SkeletonBase';
import { CommonProps } from '../../utilities';
import commonProps from '../../utilities/commonProps';

/**
 * PageTitle用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of PageTitle component.
 */
export const SkeletonPageTitle: React.FC<CommonProps> = (props) => (
  <div {...commonProps(props, 'vb-skeltonPageTitle')}>
    <SkeletonBase width={12} height={1.5} />
  </div>
);

/**
 * @deprecated SkeletonPageTitle を使ってください。 Use SkeletonPageTitle instead.
 */
export const SkeltonPageTitle = SkeletonPageTitle;
