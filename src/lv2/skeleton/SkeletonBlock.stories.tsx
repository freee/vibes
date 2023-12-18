import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { SkeletonBlock } from './SkeletonBlock';
import { select } from '@storybook/addon-knobs';

export default {
  component: SkeletonBlock,
};
export const SkeletonBlockComponent = () => (
  <SkeletonBlock
    size={select(
      'size',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      'medium',
      'SkeletonBlock'
    )}
    {...commonKnobs()}
  />
);
