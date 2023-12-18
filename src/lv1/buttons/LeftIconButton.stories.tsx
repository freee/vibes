import * as React from 'react';

import LeftIconButton from './LeftIconButton';
import { commonKnobs } from '../../../stories';
import { MdArrowDropDown } from 'react-icons/md';
import { text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'deprecated/buttons/LeftIconButton',
  component: LeftIconButton,
};

export const LeftIconButtonComponent = () => (
  <LeftIconButton
    primary={boolean('Primary', false, 'LeftIconButton')}
    danger={boolean('Danger', false, 'LeftIconButton')}
    small={boolean('Small', false, 'LeftIconButton')}
    disabled={boolean('Disabled', false, 'LeftIconButton')}
    IconComponent={MdArrowDropDown}
    type={select(
      'Type',
      { submit: 'submit', button: 'button', reset: 'reset' },
      'button',
      'LeftIconButton'
    )}
    {...commonKnobs()}
  >
    {text('Label', 'ボタン', 'LeftIconButton')}
  </LeftIconButton>
);
