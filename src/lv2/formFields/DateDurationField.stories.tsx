import * as React from 'react';

import { actions, action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import DateDurationField from './DateDurationField';

export default {
  component: DateDurationField,
};

const handlers = actions({
  onChange: 'onChange',
  onInput: 'onInput',
  onFocus: 'onFocus',
  onBlur: 'onBlur',
  onKeyDown: 'onKeyDown',
});

export const DateDurationFieldComponent = () => (
  <DateDurationField
    startDate={text('StartDate', '', 'DateDurationField')}
    startDatePlaceholder={text('StartDatePlaceholder', '', 'DateDurationField')}
    endDate={text('EndDate', '', 'DateDurationField')}
    endDatePlaceholder={text('EndDatePlaceholder', '', 'DateDurationField')}
    required={boolean('Required', false, 'DateDurationField')}
    disabled={boolean('Disabled', false, 'DateDurationField')}
    error={boolean('Disabled', false, 'DateDurationField')}
    maxDate={text('MaxDate', '2020-12-15', 'DateDurationField')}
    minDate={text('MinDate', '2017-01-15', 'DateDurationField')}
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
      'DateDurationField'
    )}
    {...handlers}
    {...commonKnobs()}
  />
);

const InteractiveDateDurationField = () => {
  const [[startDate, endDate], setDuration] = React.useState(['', '']);
  return (
    <DateDurationField
      startDate={startDate}
      endDate={endDate}
      maxDate={text('MaxDate', '2020-12-15')}
      minDate={text('MinDate', '2017-01-15')}
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
        'DateDurationField'
      )}
      {...{
        ...handlers,
        onChange: (duration) => {
          setDuration(duration);
          action('onChange')(duration);
        },
      }}
    />
  );
};

export const InteractiveSample = () => <InteractiveDateDurationField />;
