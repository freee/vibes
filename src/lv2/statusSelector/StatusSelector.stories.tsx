import * as React from 'react';

import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { commonKnobs } from '../../../stories';
import StatusSelector from './StatusSelector';
import { DropdownContent } from '../dropdown/types';

export default {
  component: StatusSelector,
};

const dropdownContents: DropdownContent[] = [
  {
    type: 'selectable',
    text: '完了',
    onClick: action('onClick-done'),
  },
  {
    type: 'selectable',
    text: '進行中',
    onClick: action('onClick-success'),
  },
  {
    type: 'selectable',
    text: '却下',
    onClick: action('onClick-warning'),
  },
];

export const StatusSelectorComponent = () => (
  <StatusSelector
    dropdownContents={dropdownContents}
    disabled={boolean('disabled', false, 'StatusSelector')}
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
        'StatusSelector'
      ) || undefined
    }
    {...commonKnobs()}
  >
    {text('Children', 'ラベル', 'StatusSelectorComponent')}
  </StatusSelector>
);

export const Samples = () => (
  <div>
    <StatusSelector
      type="done"
      dropdownContents={dropdownContents}
      marginRight
      marginBottom
    >
      done
    </StatusSelector>
    <StatusSelector
      type="success"
      dropdownContents={dropdownContents}
      marginRight
      marginBottom
    >
      success
    </StatusSelector>
    <StatusSelector
      type="progress"
      dropdownContents={dropdownContents}
      marginRight
      marginBottom
    >
      progress
    </StatusSelector>
    <StatusSelector
      type="required"
      dropdownContents={dropdownContents}
      marginRight
      marginBottom
    >
      required
    </StatusSelector>
    <StatusSelector
      type="disabled"
      dropdownContents={dropdownContents}
      marginRight
      marginBottom
    >
      disabled
    </StatusSelector>
    <StatusSelector
      type="emphasis"
      dropdownContents={dropdownContents}
      marginRight
      marginBottom
    >
      emphasis
    </StatusSelector>
    <StatusSelector
      type="warning"
      dropdownContents={dropdownContents}
      marginRight
      marginBottom
    >
      warning
    </StatusSelector>
    <StatusSelector
      type="error"
      dropdownContents={dropdownContents}
      marginRight
      marginBottom
    >
      error
    </StatusSelector>
  </div>
);
