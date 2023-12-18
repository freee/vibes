import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { SkeletonCircle } from './SkeletonCircle';
import { select } from '@storybook/addon-knobs';

export default {
  component: SkeletonCircle,
};
export const SkeletonCircleComponent = () => (
  <SkeletonCircle
    size={select(
      'size',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
        xlarge: 'xlarge',
      },
      'medium',
      'SkeletonCircle'
    )}
    {...commonKnobs()}
  />
);
