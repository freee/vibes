import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { CheckBox, FormControlLabel, ReadOnlyField } from '../..';
import TimeInput from './TimeInput';

export default {
  component: TimeInput,
};

const handlers = actions({
  onBlur: 'onBlur',
  onChange: 'onChange',
  onFocus: 'onFocus',
  onInput: 'onInput',
  onKeyDown: 'onKeyDown',
});

export const TimeInputComponent = () => (
  <TimeInput
    value={text('Value', '', 'TimeInput')}
    nullable={boolean('Nullable', false, 'TimeInput')}
    maxTime={text('maxTime', '', 'TimeInput')}
    minTime={text('minTime', '', 'TimeInput')}
    placeholder={text('Placeholder', '', 'TimeInput')}
    required={boolean('Required', false, 'TimeInput')}
    disabled={boolean('Disabled', false, 'TimeInput')}
    error={boolean('Error', false, 'TimeInput')}
    small={boolean('Small', false, 'TimeInput')}
    large={boolean('Large', false, 'TimeInput')}
    width={
      select(
        'Width',
        {
          XSmall: 'xSmall',
          Small: 'small',
          Medium: 'medium',
          Large: 'large',
          Full: 'full',
          undefined: '',
        },
        '',
        'TimeInput'
      ) || undefined
    }
    {...handlers}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <TimeInput mr={1} />
    <TimeInput mr={1} disabled />
    <TimeInput mr={1} error />
  </>
);

export const Small = () => (
  <>
    <TimeInput mr={1} small />
    <TimeInput mr={1} small disabled />
    <TimeInput mr={1} small error />
  </>
);

export const Large = () => (
  <>
    <TimeInput mr={1} large />
    <TimeInput mr={1} large disabled />
    <TimeInput mr={1} large error />
  </>
);

export const InteractiveSample = () => {
  const [value, setValue] = React.useState<string | null>('00:00');
  const [isNullable, setIsNullable] = React.useState<boolean>(false);
  const [maxTime, setMaxTime] = React.useState<string | undefined>(undefined);
  const [minTime, setMinTime] = React.useState<string | undefined>(undefined);

  return (
    <>
      <TimeInput
        maxTime={maxTime}
        minTime={minTime}
        mr={1.5}
        nullable={isNullable}
        onChange={(value: string | null) => {
          setValue(value);
        }}
        value={value}
      />
      <CheckBox
        checked={isNullable}
        mr={1.5}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setIsNullable(e.target.checked)
        }
      >
        nullable
      </CheckBox>
      <FormControlLabel htmlFor="minTime">minTime</FormControlLabel>
      <TimeInput
        id="minTime"
        mr={1.5}
        nullable
        onChange={(v) => {
          setMinTime(v ?? undefined);
        }}
        value={minTime}
      />
      <FormControlLabel htmlFor="maxTime">maxTime</FormControlLabel>
      <TimeInput
        id="maxTime"
        mr={1.5}
        nullable
        onChange={(v) => {
          setMaxTime(v ?? undefined);
        }}
        value={maxTime}
      />
      <ReadOnlyField
        value={`current value: ${value === null ? 'null' : value}`}
      />
    </>
  );
};
