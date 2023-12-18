import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import CalendarHead from './CalendarHead';

export default {
  component: CalendarHead,
};

export const CalendarHeadComponent = () => (
  <table style={{ width: `${9.5 * 7}rem`, borderCollapse: 'collapse' }}>
    <thead>
      <CalendarHead
        weekStartsOn={select('WeekStartsOn', [0, 1], 0, 'CalendarHead')}
        {...commonKnobs()}
      />
    </thead>
  </table>
);
