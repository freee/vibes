import * as React from 'react';

import NoSearchResults from './NoSearchResults';
import { commonKnobs } from '../../../stories';
import { text, select } from '@storybook/addon-knobs';

export default {
  component: NoSearchResults,
};

export const NoSearchResultsComponent = () => (
  <NoSearchResults
    objectName={text('ObjectName', '取引', 'NoSearchResults')}
    mainText={text('MainText', '', 'NoSearchResults')}
    subText={text('SubText', '', 'NoSearchResults')}
    size={
      select(
        'Size',
        {
          medium: 'medium',
          'fit-height': 'fit-height',
          'fit-width': 'fit-width',
        },
        '',
        'NoSearchResults'
      ) || undefined
    }
    {...commonKnobs()}
  />
);
