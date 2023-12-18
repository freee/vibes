import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { SkeletonIcon } from './SkeletonIcon';
import { select } from '@storybook/addon-knobs';

export default {
  component: SkeletonIcon,
};
export const SkeletonIconComponent = () => (
  <SkeletonIcon
    size={select(
      'size',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      'medium',
      'SkeletonIcon'
    )}
    {...commonKnobs()}
  />
);
