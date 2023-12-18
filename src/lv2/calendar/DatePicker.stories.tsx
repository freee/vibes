import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import DatePicker from './DatePicker';

export default {
  component: DatePicker,
};

export const DatePickerComponent = () => (
  <DatePicker
    date={text('Date', '2020-11-15', 'DatePicker')}
    minDate={text('MinDate', '2020-09-15', 'DatePicker')}
    maxDate={text('MaxDate', '2020-12-15', 'DatePicker')}
    onDateClick={action('date click')}
    {...commonKnobs()}
  />
);
