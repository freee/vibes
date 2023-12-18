import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import CheckBox from './CheckBox';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export default {
  component: CheckBox,
};

export const CheckBoxComponent = () => (
  <CheckBox
    name="checkbox"
    value="チェックボックス"
    disabled={boolean('Disabled', false, 'CheckBox')}
    checked={boolean('Checked', false, 'CheckBox')}
    error={boolean('Error', false, 'CheckBox')}
    small={boolean('Small', false, 'CheckBox')}
    {...handlers}
    {...commonKnobs()}
  >
    {text('Children', 'チェックボックス', 'CheckBox')}
  </CheckBox>
);

export const Default = () => (
  <>
    <CheckBox mr={1}>default</CheckBox>
    <CheckBox mr={1} disabled>
      disabled
    </CheckBox>
    <CheckBox mr={1} disabled checked>
      disabled
    </CheckBox>
    <CheckBox mr={1} error>
      error
    </CheckBox>
  </>
);

export const Small = () => (
  <>
    <CheckBox mr={1} small>
      default
    </CheckBox>
    <CheckBox mr={1} small disabled>
      disabled
    </CheckBox>
    <CheckBox mr={1} small disabled checked>
      disabled
    </CheckBox>
    <CheckBox mr={1} small error>
      error
    </CheckBox>
  </>
);

export const WithParagraph = () => (
  <>
    <CheckBox>
      改行あり
      <br />
      のテキスト
    </CheckBox>
  </>
);
