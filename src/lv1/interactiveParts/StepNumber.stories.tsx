import * as React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { StepNumber } from './StepNumber';
import { HStack } from '../layout/HStack';

export default {
  component: StepNumber,
};

export const StepNumberComponent = () => (
  <StepNumber
    number={text('Number', '1', 'StepBlock')}
    current={boolean('Current', false, 'StepBlock')}
    done={boolean('Done', false, 'StepBlock')}
    disabled={boolean('Disabled', false, 'StepBlock')}
    {...commonKnobs()}
  />
);

export const Default = () => {
  return (
    <HStack>
      <StepNumber number={1} />
      <StepNumber number={1} current />
      <StepNumber number={1} done />
      <StepNumber number={1} disabled />
    </HStack>
  );
};

export const Small = () => {
  return (
    <HStack>
      <StepNumber small number={1} />
      <StepNumber small number={1} current />
      <StepNumber small number={1} done />
      <StepNumber small number={1} disabled />
    </HStack>
  );
};
