import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { select } from '@storybook/addon-knobs';
import NoDataIllust from './NoDataIllust';

export default {
  component: NoDataIllust,
};

export const NoDataIllustComponent = () => (
  <NoDataIllust
    size={
      select(
        'Size',
        {
          medium: 'medium',
          'fit-height': 'fit-height',
          'fit-width': 'fit-width',
        },
        '',
        'NoDataIllust'
      ) || undefined
    }
    {...commonKnobs()}
  />
);
