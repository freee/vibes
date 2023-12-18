import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { select } from '@storybook/addon-knobs';
import { SkeletonParagraph } from './SkeletonParagraph';

export default {
  component: SkeletonParagraph,
};
export const SkeletonParagraphComponent = () => (
  <SkeletonParagraph
    size={select(
      'size',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      'medium',
      'SkeletonParagraph'
    )}
    {...commonKnobs()}
  />
);
