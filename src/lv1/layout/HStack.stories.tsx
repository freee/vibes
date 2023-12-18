import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { HStack } from './HStack';
import Paragraph from '../typography/Paragraph';
import Button from '../buttons/Button';
import { select } from '@storybook/addon-knobs';

export default {
  component: HStack,
};

export const HStackComponent = () => (
  <HStack
    gap={select('gap', [0, 0.25, 0.5, 1, 1.5, 2, 3], 1, 'Stack')}
    justifyContent={
      select(
        'justifycontent',
        {
          undefined: '',
          start: 'start',
          end: 'end',
          center: 'center',
          'space-between': 'space-between',
        },
        '',
        'HStack'
      ) || undefined
    }
    alignItems={
      select(
        'alignItems',
        {
          undefined: '',
          stretch: 'stretch',
          center: 'center',
          start: 'start',
          end: 'end',
        },
        '',
        'HStack'
      ) || undefined
    }
    wrap={
      select(
        'wrap',
        {
          undefined: '',
          wrap: 'wrap',
          nowrap: 'nowrap',
        },
        '',
        'HStack'
      ) || undefined
    }
    {...commonKnobs()}
  >
    <Paragraph>Stackを使うと、コンポーネントを等間隔に並べられます</Paragraph>
    <Button>ボタン1</Button>
    <Button>ボタン2</Button>
  </HStack>
);
