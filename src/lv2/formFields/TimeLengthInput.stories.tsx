import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { CheckBox, ReadOnlyField } from '../..';
import TimeLengthInput from './TimeLengthInput';

export default {
  component: TimeLengthInput,
};

const handlers = actions({
  onBlur: 'onBlur',
  onChange: 'onChange',
  onFocus: 'onFocus',
  onInput: 'onInput',
  onKeyDown: 'onKeyDown',
});

export const TimeLengthInputComponent = () => (
  <TimeLengthInput
    value={number('Value', 0, undefined, 'TimeLengthInput')}
    nullable={boolean('Nullable', false, 'TimeLengthInput')}
    placeholder={text('Placeholder', '', 'TimeLengthInput')}
    required={boolean('Required', false, 'TimeLengthInput')}
    disabled={boolean('Disabled', false, 'TimeLengthInput')}
    error={boolean('Error', false, 'TimeLengthInput')}
    small={boolean('Small', false, 'TimeLengthInput')}
    large={boolean('Large', false, 'TimeLengthInput')}
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
        'TimeLengthInput'
      ) || undefined
    }
    {...handlers}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <TimeLengthInput mr={1} />
    <TimeLengthInput mr={1} disabled />
    <TimeLengthInput mr={1} error />
  </>
);

export const Small = () => (
  <>
    <TimeLengthInput mr={1} small />
    <TimeLengthInput mr={1} small disabled />
    <TimeLengthInput mr={1} small error />
  </>
);

export const Large = () => (
  <>
    <TimeLengthInput mr={1} large />
    <TimeLengthInput mr={1} large disabled />
    <TimeLengthInput mr={1} large error />
  </>
);

export const InteractiveSample = () => {
  const [value, setValue] = React.useState<number | null>(0);
  const [isNullable, setIsNullable] = React.useState<boolean>(false);

  return (
    <>
      <TimeLengthInput
        mr={1.5}
        nullable={isNullable}
        onChange={(value: number | null) => {
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
      <ReadOnlyField
        value={`current value: ${value === null ? 'null' : value}`}
      />
    </>
  );
};
