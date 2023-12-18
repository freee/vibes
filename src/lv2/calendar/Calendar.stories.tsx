import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Calendar from './Calendar';

export default {
  component: Calendar,
};

export const CalendarComponent = () => (
  <Calendar
    year="2018"
    month="12"
    startFromMonday={boolean('StartFromMonday', false, 'Calendar')}
    contents={[
      {
        type: 'TimeRecord',
        date: '2018-12-09',
        status: 'alert',
        dateLabel: '通常',
        openingTime: '20:00',
        endingTime: '24:00',
      },
      {
        type: 'TimeRecord',
        date: '2018-12-10',
        status: 'success',
        dateLabel: '通常',
        openingTime: '9:00',
        endingTime: '19:00',
      },
      {
        type: 'TimeRecord',
        date: '2018-12-11',
        dateLabel: '通常',
        openingTime: '9:00',
        endingTime: '19:00',
      },
      {
        type: 'TimeRecord',
        date: '2018-12-12',
        dateLabel: '通常',
        openingTime: '9:00',
        endingTime: '19:00',
      },
      {
        type: 'TimeRecord',
        date: '2018-12-15',
        status: 'notice',
        dateLabel: '通常',
        openingTime: '9:00',
        endingTime: '19:00',
      },
    ]}
    nationalHolidays={['2018-12-24']}
    onClickDate={action('click date')}
    {...commonKnobs()}
  />
);
