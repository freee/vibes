import * as React from 'react';

import CheckBoxCell from './CheckBoxCell';
import { text, boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';

export default {
  component: CheckBoxCell,
};

export const CheckBoxCellComponent = () => (
  <CheckBoxCell
    header={boolean('header', false, 'CheckBoxCell')}
    name={text('name', '', 'CheckBoxCell')}
    value={text('value', '', 'CheckBoxCell')}
    checked={boolean('checked', false, 'CheckBoxCell')}
    disabled={boolean('disabled', false, 'CheckBoxCell')}
    aria-label={text('aria-label', '', 'CheckBoxCell')}
    {...commonKnobs()}
  />
);
