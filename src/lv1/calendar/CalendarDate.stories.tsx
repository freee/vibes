import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import CalendarDate from './CalendarDate';

export default {
  component: CalendarDate,
};

export const CalendarDateComponent = () => (
  <table style={{ width: '9.5rem' }}>
    <tbody>
      <tr>
        <CalendarDate
          date={text('Date', '2020-01-01', 'CalendarDate')}
          dateLabel={text('DateLabel', '通常勤務', 'CalendarDate')}
          today={boolean('Today', false, 'CalendarDate')}
          disabled={boolean('Disabled', false, 'CalendarDate')}
          secondaryHoliday={boolean('SecondaryHoliday', false, 'CalendarDate')}
          primaryHoliday={boolean('PrimaryHoliday', false, 'CalendarDate')}
          nationalHoliday={boolean('NationalHoliday', false, 'CalendarDate')}
          onClickDate={action('click date')}
          onKeyDown={action('key down')}
          {...commonKnobs()}
        />
      </tr>
    </tbody>
  </table>
);

export const Default = () => (
  <table style={{ width: `${9.5 * 5}rem` }}>
    <tbody>
      <tr>
        <CalendarDate date="2020-01-01" dateLabel="default" />
        <CalendarDate date="2020-01-01" dateLabel="today" today />
        <CalendarDate
          date="2020-01-01"
          dateLabel="primaryHoliday"
          primaryHoliday
        />
        <CalendarDate
          date="2020-01-01"
          dateLabel="secondaryHoliday"
          secondaryHoliday
        />
        <CalendarDate
          date="2020-01-01"
          dateLabel="nationalHoliday"
          nationalHoliday
        />
      </tr>
    </tbody>
  </table>
);

export const Disabled = () => (
  <table style={{ width: `${9.5 * 5}rem` }}>
    <tbody>
      <tr>
        <CalendarDate disabled date="2020-01-01" dateLabel="default" />
        <CalendarDate disabled date="2020-01-01" dateLabel="today" today />
        <CalendarDate
          disabled
          date="2020-01-01"
          dateLabel="primaryHoliday"
          primaryHoliday
        />
        <CalendarDate
          disabled
          date="2020-01-01"
          dateLabel="secondaryHoliday"
          secondaryHoliday
        />
        <CalendarDate
          disabled
          date="2020-01-01"
          dateLabel="nationalHoliday"
          nationalHoliday
        />
      </tr>
    </tbody>
  </table>
);

export const TimeRecord = () => (
  <table style={{ width: `${9.5 * 4}rem` }}>
    <tbody>
      <tr>
        <CalendarDate
          date="2020-01-01"
          dateLabel="default"
          content={{
            type: 'TimeRecord',
            date: '2020-01-01',
            dateLabel: '通常',
            openingTime: '10:00',
            endingTime: '19:00',
          }}
        />
        <CalendarDate
          date="2020-01-01"
          dateLabel="alert"
          content={{
            type: 'TimeRecord',
            date: '2020-01-01',
            status: 'alert',
            dateLabel: '通常',
            openingTime: '10:00',
            endingTime: '19:00',
          }}
        />
        <CalendarDate
          date="2020-01-01"
          dateLabel="notice"
          content={{
            type: 'TimeRecord',
            date: '2020-01-01',
            status: 'notice',
            dateLabel: '通常',
            openingTime: '10:00',
            endingTime: '19:00',
          }}
        />
        <CalendarDate
          date="2020-01-01"
          dateLabel="success"
          content={{
            type: 'TimeRecord',
            date: '2020-01-01',
            status: 'success',
            dateLabel: '通常',
            openingTime: '10:00',
            endingTime: '19:00',
          }}
        />
      </tr>
    </tbody>
  </table>
);
