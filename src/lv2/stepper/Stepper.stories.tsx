import * as React from 'react';

import Stepper from './Stepper';
import { number, boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';

export default {
  component: Stepper,
};

export const StepperComponent = () => (
  <Stepper
    steps={['step1', 'step2', 'step3', 'step4', 'step5']}
    currentStepIndex={number(
      'currentStepIndex',
      2,
      { min: 0, max: 4 },
      'Stepper'
    )}
    disabledStepIndex={[3, 4]}
    small={boolean('small', false, 'Stepper')}
    {...commonKnobs()}
  />
);

export const Small = () => (
  <Stepper
    steps={['step1', 'step2', 'step3', 'step4', 'step5']}
    currentStepIndex={2}
    disabledStepIndex={[3, 4]}
    small
    {...commonKnobs()}
  />
);

export const StepperWithReactNode = () => (
  <Stepper
    steps={[
      <>
        長いと
        <br />
        改行したく
        <br />
        なる
      </>,
      <>
        ちょっと
        <br />
        <strong>強調</strong>
        <br />
        してみる
      </>,
      'step3',
      'step4',
      'step5',
    ]}
    currentStepIndex={number(
      'currentStepIndex',
      2,
      { min: 0, max: 4 },
      'Stepper'
    )}
    disabledStepIndex={[3, 4]}
    small={boolean('small', false, 'Stepper')}
    {...commonKnobs()}
  />
);
