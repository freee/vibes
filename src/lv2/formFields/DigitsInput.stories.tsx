import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import DigitsInput from './DigitsInput';
import Button from '../../lv1/buttons/Button';
import { Text } from '../../lv1';
import DecimalInput from './DecimalInput';
import FormControlGroup from '../formControl/FormControlGroup';
import FormControl from '../formControl/FormControl';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
});

export default {
  component: DigitsInput,
};

export const DigitsInputComponent = () => (
  <DigitsInput
    value={number('Value', 1000000, undefined, 'DigitsInput')}
    nullable={boolean('Nullable', true, 'DigitsInput')}
    placeholder={text('Placeholder', '', 'DigitsInput')}
    required={boolean('Required', false, 'DigitsInput')}
    disabled={boolean('Disabled', false, 'DigitsInput')}
    error={boolean('Error', false, 'DigitsInput')}
    small={boolean('Small', false, 'DigitsInput')}
    borderless={boolean('Borderless', false, 'DigitsInput')}
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
        'DigitsInput'
      ) || undefined
    }
    suffix={text('Suffix', '', 'DigitsInput')}
    decimalLimit={number('decimalLimit', 3, undefined, 'DigitsInput')}
    {...handlers}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <DigitsInput mr={1} />
    <DigitsInput mr={1} disabled />
    <DigitsInput mr={1} error />
  </>
);

export const Small = () => (
  <>
    <DigitsInput mr={1} small />
    <DigitsInput mr={1} small disabled />
    <DigitsInput mr={1} small error />
  </>
);

export const InteractiveSample = () => {
  const [value, setValue] = React.useState<number>(0);
  return <DigitsInput value={value} onChange={(v) => setValue(v ?? 0)} />;
};

export const InteractiveSampleWithNullable = () => {
  const [value, setValue] = React.useState<number | null>(0);
  return <DigitsInput nullable value={value} onChange={(v) => setValue(v)} />;
};

export const InteractiveSampleWithDecimal = () => {
  const [value, setValue] = React.useState<number | null>(0);
  const [decimalLimit, setDecimalLimit] = React.useState<number | undefined>(3);

  return (
    <>
      <FormControlGroup>
        <FormControl label="decimalLimit">
          <DecimalInput
            value={decimalLimit}
            onChange={(v) => setDecimalLimit(v ?? undefined)}
            places={0}
          />
        </FormControl>
      </FormControlGroup>
      <FormControlGroup mt={1}>
        <FormControl label="DigitsInput">
          <DigitsInput
            decimalLimit={decimalLimit}
            value={value}
            onChange={(v) => setValue(v)}
          />
          <Text ml={1}>value: {value}</Text>
        </FormControl>
      </FormControlGroup>
    </>
  );
};

export const ManualFocus = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const onClick = () => {
    ref.current?.focus();
  };
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <>
      <Button mr={1} onClick={onClick}>
        フォーカスを当てる
      </Button>
      <DigitsInput
        ref={ref}
        nullable
        value={value}
        onChange={(v) => setValue(v)}
      />
    </>
  );
};
