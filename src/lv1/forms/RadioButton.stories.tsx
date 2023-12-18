import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import RadioButton from './RadioButton';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export default {
  component: RadioButton,
};

export const RadioButtonComponent = () => (
  <RadioButton
    name="radio"
    value="ラジオボタン"
    disabled={boolean('Disabled', false, 'RadioButton')}
    checked={boolean('Checked', false, 'RadioButton')}
    error={boolean('Error', false, 'RadioButton')}
    small={boolean('Small', false, 'RadioButton')}
    {...handlers}
    {...commonKnobs()}
  >
    {text('Children', 'ラジオボタン', 'RadioButton')}
  </RadioButton>
);

export const Default = () => (
  <>
    <RadioButton mr={1}>default</RadioButton>
    <RadioButton mr={1} disabled>
      disabled
    </RadioButton>
    <RadioButton mr={1} disabled checked>
      disabled
    </RadioButton>
    <RadioButton mr={1} error>
      error
    </RadioButton>
  </>
);

export const Small = () => (
  <>
    <RadioButton mr={1} small>
      default
    </RadioButton>
    <RadioButton mr={1} small disabled>
      disabled
    </RadioButton>
    <RadioButton mr={1} small disabled checked>
      disabled
    </RadioButton>
    <RadioButton mr={1} small error>
      error
    </RadioButton>
  </>
);

export const WithParagraph = () => (
  <>
    <RadioButton mr={1}>
      改行あり
      <br />
      のテキスト
    </RadioButton>
  </>
);
