import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { PasswordField } from './PasswordField';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export default {
  component: PasswordField,
};

export const PasswordFieldComponent = () => (
  <PasswordField
    label={text('Label', 'パスワードフィールドのサンプル', 'PasswordField')}
    required={boolean('Required', false, 'PasswordField')}
    disabled={boolean('Disabled', false, 'PasswordField')}
    error={boolean('Error', false, 'PasswordField')}
    small={boolean('Small', false, 'PasswordField')}
    large={boolean('Large', false, 'PasswordField')}
    width={select(
      'Width',
      {
        XSmall: 'xSmall',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
        Full: 'full',
      },
      'medium',
      'PasswordField'
    )}
    autoComplete={select(
      'AutoComplete',
      {
        off: 'off',
        'new-password': 'new-password',
        'current-password': 'current-password',
      },
      'off',
      'PasswordField'
    )}
    suffix={text('Suffix', '', 'PasswordField')}
    loading={boolean('Loading', false, 'PasswordField')}
    {...handlers}
    {...commonKnobs()}
  />
);
