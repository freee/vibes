import * as React from 'react';

import NoDataCreated from './NoDataCreated';
import { commonKnobs } from '../../../stories';
import { select, text } from '@storybook/addon-knobs';
import Button from '../../lv1/buttons/Button';

export default {
  component: NoDataCreated,
};

export const NoDataCreatedComponent = () => (
  <NoDataCreated
    actionWord={text('ActionWord', '作成', 'NoDataCreated')}
    objectName={text('ObjectName', '取引', 'NoDataCreated')}
    mainText={text('MainText', '', 'NoDataCreated')}
    subText={text('SubText', '', 'NoDataCreated')}
    size={
      select(
        'Size',
        {
          medium: 'medium',
          'fit-height': 'fit-height',
          'fit-width': 'fit-width',
        },
        '',
        'NoDataCreated'
      ) || undefined
    }
    {...commonKnobs()}
  >
    <Button mt={1} appearance="primary">
      新規作成
    </Button>
  </NoDataCreated>
);
