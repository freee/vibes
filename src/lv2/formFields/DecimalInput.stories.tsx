import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { CheckBox, ReadOnlyField } from '../..';
import DecimalInput from './DecimalInput';

export default {
  component: DecimalInput,
};

const handlers = actions({
  onBlur: 'onBlur',
  onChange: 'onChange',
  onFocus: 'onFocus',
  onInput: 'onInput',
  onKeyDown: 'onKeyDown',
});

export const DecimalInputComponent = () => (
  <DecimalInput
    value={number('Value', 0, undefined, 'DecimalInput')}
    places={number('Places', 2, undefined, 'DecimalInput')}
    nullable={boolean('Nullable', false, 'DecimalInput')}
    hideSpinner={boolean('hideSpinner', false, 'DecimalInput')}
    alignRight={boolean('AlignRight', false, 'DecimalInput')}
    placeholder={text('Placeholder', '', 'DecimalInput')}
    required={boolean('Required', false, 'DecimalInput')}
    disabled={boolean('Disabled', false, 'DecimalInput')}
    error={boolean('Error', false, 'DecimalInput')}
    small={boolean('Small', false, 'DecimalInput')}
    large={boolean('Large', false, 'DecimalInput')}
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
        'DecimalInput'
      ) || undefined
    }
    suffix={text('Suffix', '', 'DecimalInput')}
    {...handlers}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <DecimalInput mr={1} />
    <DecimalInput mr={1} disabled />
    <DecimalInput mr={1} error />
  </>
);

export const Small = () => (
  <>
    <DecimalInput mr={1} small />
    <DecimalInput mr={1} small disabled />
    <DecimalInput mr={1} small error />
  </>
);

export const Large = () => (
  <>
    <DecimalInput mr={1} large />
    <DecimalInput mr={1} large disabled />
    <DecimalInput mr={1} large error />
  </>
);

export const InteractiveSample = () => {
  const [value, setValue] = React.useState<number | null>(0);
  const [isNullable, setIsNullable] = React.useState<boolean>(false);

  return (
    <>
      <DecimalInput
        mr={1.5}
        nullable={isNullable}
        onChange={(value) => {
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
