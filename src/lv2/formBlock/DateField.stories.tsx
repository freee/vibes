import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import DateField from './DateField';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
});

export default {
  component: DateField,
};

export const DateFieldComponent = () => (
  <DateField
    selectedDate={text('SelectedDate', '2020-01-01', 'DateField')}
    startDate={text('StartDate', '2019-07-01', 'DateField')}
    endDate={text('EndDate', '2021-06-30', 'DateField')}
    small={boolean('Small', false, 'DateField')}
    disabled={boolean('Disabled', false, 'DateField')}
    error={boolean('Error', false, 'DateField')}
    required={boolean('Required', false, 'DateField')}
    autoComplete={
      select(
        'AutoComplete',
        {
          off: 'off',
          bday: 'bday',
          undefined: '',
        },
        '',
        'DateField'
      ) || undefined
    }
    nullable={boolean('Nullable', false, 'DateField')}
    wareki={boolean('Wareki', false, 'DateField')}
    {...handlers}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <DateField
      marginBottom
      selectedDate="2020-01-01"
      startDate="2019-07-01"
      endDate="2021-06-30"
    />
    <DateField
      marginBottom
      selectedDate="2020-01-01"
      startDate="2019-07-01"
      endDate="2021-06-30"
      disabled
    />
    <DateField
      marginBottom
      selectedDate="2020-01-01"
      startDate="2019-07-01"
      endDate="2021-06-30"
      error
    />
    <DateField
      marginBottom
      selectedDate="2020-01-01"
      startDate="2019-07-01"
      endDate="2021-06-30"
      wareki
    />
  </>
);

export const Small = () => (
  <>
    <DateField
      marginBottom
      selectedDate="2020-01-01"
      startDate="2019-07-01"
      endDate="2021-06-30"
      small
    />
    <DateField
      marginBottom
      selectedDate="2020-01-01"
      startDate="2019-07-01"
      endDate="2021-06-30"
      small
      disabled
    />
    <DateField
      marginBottom
      selectedDate="2020-01-01"
      startDate="2019-07-01"
      endDate="2021-06-30"
      small
      error
    />
    <DateField
      marginBottom
      selectedDate="2020-01-01"
      startDate="2019-07-01"
      endDate="2021-06-30"
      small
      wareki
    />
  </>
);

export const Nullable = () => (
  <>
    <DateField
      marginBottom
      selectedDate={null}
      startDate="2019-07-01"
      endDate="2021-06-30"
      nullable
    />
    <DateField
      marginBottom
      selectedDate={null}
      startDate="2019-07-01"
      endDate="2021-06-30"
      disabled
      nullable
    />
    <DateField
      marginBottom
      selectedDate={null}
      startDate="2019-07-01"
      endDate="2021-06-30"
      error
      nullable
    />
    <DateField
      marginBottom
      selectedDate={null}
      startDate="2019-07-01"
      endDate="2021-06-30"
      wareki
      nullable
    />
  </>
);

export const InteractiveSample = () => {
  const [value, setValue] = React.useState<string>('2020-01-01');
  return (
    <DateField
      selectedDate={value}
      startDate="2019-07-01"
      endDate="2021-06-30"
      onChange={(v) => setValue(v ?? '')}
    />
  );
};

export const InteractiveSampleWithNullable = () => {
  const [value, setValue] = React.useState<string>('2020-01-01');
  return (
    <DateField
      selectedDate={value}
      startDate="2019-07-01"
      endDate="2021-06-30"
      nullable
      onChange={(v) => setValue(v ?? '')}
    />
  );
};

export const InteractiveSampleWithWareki = () => {
  const [value, setValue] = React.useState<string>('2020-01-01');
  return (
    <DateField
      selectedDate={value}
      startDate="1850-01-01"
      endDate="2050-12-31"
      wareki
      onChange={(v) => setValue(v ?? '')}
    />
  );
};
