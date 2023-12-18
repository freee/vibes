import * as React from 'react';
import { SkeletonBase } from '../../lv1/skeleton/SkeletonBase';
import { CommonProps } from '../../utilities';
import commonProps from '../../utilities/commonProps';

/**
 * SectionTitle用のスケルトンイメージのコンポーネントです。
 * This component provides a skeleton image of SectionTitle component.
 */
export const SkeletonSectionTitle: React.FC<CommonProps> = (props) => (
  <div {...commonProps(props, 'vb-skeltonSectionTitle')}>
    <SkeletonBase width={9} height={1} />
  </div>
);

/**
 * @deprecated SkeletonSectionTitle を使ってください。 Use SkeletonSectionTitle instead.
 */
export const SkeltonSectionTitle = SkeletonSectionTitle;
