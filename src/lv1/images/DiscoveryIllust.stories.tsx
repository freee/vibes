import * as React from 'react';

import DiscoveryIllust from './DiscoveryIllust';
import { commonKnobs } from '../../../stories';
import { number } from '@storybook/addon-knobs';

export default {
  component: DiscoveryIllust,
};

export const DiscoveryIllustComponent = () => (
  <DiscoveryIllust
    animationDelay={number('animationDelay', 0, undefined, 'DiscoveryIllust')}
    {...commonKnobs()}
  />
);
