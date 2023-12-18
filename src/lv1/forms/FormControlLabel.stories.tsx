import * as React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import FormControlLabel from './FormControlLabel';

export default {
  component: FormControlLabel,
};

export const FormControlLabelComponent = () => (
  <FormControlLabel
    id={text('Id', 'id_of_this_label_element', 'FormControlLabel')}
    htmlFor={text(
      'HtmlFor',
      'id_of_this_label_describes_for',
      'FormControlLabel'
    )}
    required={boolean('Required', false, 'FormControlLabel')}
    {...commonKnobs()}
  >
    {text('Children', 'ラベル', 'FormControlLabel')}
  </FormControlLabel>
);
