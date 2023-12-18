import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { select } from '@storybook/addon-knobs';
import NoSearchResultsIllust from './NoSearchResultsIllust';

export default {
  component: NoSearchResultsIllust,
};

export const NoSearchResultsIllustComponent = () => (
  <NoSearchResultsIllust
    size={
      select(
        'Size',
        {
          medium: 'medium',
          'fit-height': 'fit-height',
          'fit-width': 'fit-width',
        },
        '',
        'NoSearchResultsIllust'
      ) || undefined
    }
    {...commonKnobs()}
  />
);
