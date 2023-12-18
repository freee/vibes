import * as React from 'react';
import { actions } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import ToggleButton from './ToggleButton';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export default {
  component: ToggleButton,
};

export const ToggleButtonComponent = () => {
  const props = {
    name: text('Name', 'toggle', 'ToggleButton'),
    type: select(
      'Type',
      { checkbox: 'checkbox', radio: 'radio' },
      'checkbox',
      'ToggleButton'
    ),
    small: boolean('Small', false, 'ToggleButton'),
    disabled: boolean('Disabled', false, 'ToggleButton'),
    ...handlers,
    ...commonKnobs(),
  };
  return (
    <div>
      <ToggleButton {...props}>ボタン1</ToggleButton>
      <ToggleButton {...props}>ボタン2</ToggleButton>
      <ToggleButton {...props}>ボタン3</ToggleButton>
    </div>
  );
};

export const Checkbox = () => (
  <div>
    <ToggleButton name="toggle" type="checkbox">
      ボタン1
    </ToggleButton>
    <ToggleButton name="toggle" type="checkbox">
      ボタン2
    </ToggleButton>
    <ToggleButton name="toggle" type="checkbox">
      ボタン3
    </ToggleButton>
  </div>
);

export const Radio = () => (
  <div>
    <ToggleButton name="toggle" type="radio">
      ボタン1
    </ToggleButton>
    <ToggleButton name="toggle" type="radio">
      ボタン2
    </ToggleButton>
    <ToggleButton name="toggle" type="radio">
      ボタン3
    </ToggleButton>
  </div>
);

export const Disabled = () => (
  <div>
    <ToggleButton name="toggle" type="radio" disabled>
      ボタン1
    </ToggleButton>
    <ToggleButton name="toggle" type="radio" disabled>
      ボタン2
    </ToggleButton>
    <ToggleButton name="toggle" type="radio" disabled>
      ボタン3
    </ToggleButton>
  </div>
);

export const Small = () => (
  <div>
    <ToggleButton name="toggle" type="radio" small>
      ボタン1
    </ToggleButton>
    <ToggleButton name="toggle" type="radio" small>
      ボタン2
    </ToggleButton>
    <ToggleButton name="toggle" type="radio" small>
      ボタン3
    </ToggleButton>
  </div>
);
