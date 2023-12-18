import * as React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import StepBlock from './StepBlock';

export default {
  title: 'deprecated/interactiveParts/StepBlock',
  component: StepBlock,
};

export const StepBlockComponent = () => (
  <ul style={{ display: 'inline-block', padding: 0, margin: 0 }}>
    <StepBlock
      number={text('Number', '1', 'StepBlock')}
      current={boolean('Current', false, 'StepBlock')}
      done={boolean('Done', false, 'StepBlock')}
      disabled={boolean('Disabled', false, 'StepBlock')}
      {...commonKnobs()}
    >
      {text('Children', 'stepper', 'StepBlock')}
    </StepBlock>
  </ul>
);

export const Default = () => {
  return (
    <ul style={{ display: 'inline-block', padding: 0, margin: 0 }}>
      <StepBlock number="1">stepper</StepBlock>
      <StepBlock number="1" current>
        current
      </StepBlock>
      <StepBlock number="1" done>
        done
      </StepBlock>
      <StepBlock number="1" disabled>
        disabled
      </StepBlock>
    </ul>
  );
};

export const Small = () => {
  return (
    <ul style={{ display: 'inline-block', padding: 0, margin: 0 }}>
      <StepBlock small number="1">
        stepper
      </StepBlock>
      <StepBlock small number="1" current>
        current
      </StepBlock>
      <StepBlock small number="1" done>
        done
      </StepBlock>
      <StepBlock small number="1" disabled>
        disabled
      </StepBlock>
    </ul>
  );
};
