import * as React from 'react';

import RightIconButton from './RightIconButton';
import { commonKnobs } from '../../../stories';
import { MdArrowDropDown } from 'react-icons/md';
import { text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'deprecated/buttons/RightIconButton',
  component: RightIconButton,
};

export const RightIconButtonComponent = () => (
  <RightIconButton
    primary={boolean('Primary', false, 'RightIconButton')}
    danger={boolean('Danger', false, 'RightIconButton')}
    small={boolean('Small', false, 'RightIconButton')}
    disabled={boolean('Disabled', false, 'RightIconButton')}
    IconComponent={MdArrowDropDown}
    type={select(
      'Type',
      { submit: 'submit', button: 'button', reset: 'reset' },
      'button',
      'RightIconButton'
    )}
    {...commonKnobs()}
  >
    {text('Label', 'ボタン', 'RightIconButton')}
  </RightIconButton>
);
