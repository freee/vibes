import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { SkeletonRectangle } from './SkeletonRectangle';
import { select } from '@storybook/addon-knobs';

export default {
  component: SkeletonRectangle,
};
export const SkeletonRectangleComponent = () => (
  <SkeletonRectangle
    size={select(
      'size',
      {
        default: 'default',
        large: 'large',
      },
      'default',
      'SkeletonRectangle'
    )}
    {...commonKnobs()}
  />
);
