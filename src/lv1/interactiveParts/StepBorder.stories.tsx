import * as React from 'react';

import { boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import StepBorder from './StepBorder';

export default {
  title: 'deprecated/interactiveParts/StepBorder',
  component: StepBorder,
};

export const StepBorderComponent = () => (
  <ul style={{ display: 'inline-block', padding: 0, margin: 0 }}>
    <StepBorder
      done={boolean('Done', false, 'StepBorder')}
      separator={boolean('Separator', false, 'StepBorder')}
      {...commonKnobs()}
    />
  </ul>
);
