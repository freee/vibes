import * as React from 'react';

import { select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import StatusIcon from './StatusIcon';

export default {
  component: StatusIcon,
};

export const StatusIconComponent = () => (
  <StatusIcon
    type={
      select(
        'Type',
        [
          '',
          'done',
          'success',
          'progress',
          'required',
          'disabled',
          'emphasis',
          'warning',
          'error',
        ],
        '',
        'StatusIcon'
      ) || undefined
    }
    {...commonKnobs()}
  >
    {text('Children', 'ラベル', 'StatusIcon')}
  </StatusIcon>
);

export const Samples = () => (
  <div>
    <StatusIcon type="done" marginRight marginBottom>
      done
    </StatusIcon>
    <StatusIcon type="success" marginRight marginBottom>
      success
    </StatusIcon>
    <StatusIcon type="progress" marginRight marginBottom>
      progress
    </StatusIcon>
    <StatusIcon type="required" marginRight marginBottom>
      required
    </StatusIcon>
    <StatusIcon type="disabled" marginRight marginBottom>
      disabled
    </StatusIcon>
    <StatusIcon type="emphasis" marginRight marginBottom>
      emphasis
    </StatusIcon>
    <StatusIcon type="warning" marginRight marginBottom>
      warning
    </StatusIcon>
    <StatusIcon type="error" marginRight marginBottom>
      error
    </StatusIcon>
  </div>
);
