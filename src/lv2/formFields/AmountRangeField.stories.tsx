import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import AmountRangeField from './AmountRangeField';

export default {
  component: AmountRangeField,
};

const handlers = actions({
  onChange: 'onChange',
  onInput: 'onInput',
  onFocus: 'onFocus',
  onBlur: 'onBlur',
  onKeyDown: 'onKeyDown',
});

export const AmountRangeFieldComponent = () => (
  <AmountRangeField
    minAmount={number('MinAmount', 0, undefined, 'AmountRangeField')}
    minAmountPlaceholder={text('MinAmountPlaceholder', '', 'AmountRangeField')}
    maxAmount={number('MaxAmount', 0, undefined, 'AmountRangeField')}
    maxAmountPlaceholder={text('MaxAmountPlaceholder', '', 'AmountRangeField')}
    required={boolean('Required', false)}
    disabled={boolean('Disabled', false)}
    error={boolean('Error', false)}
    {...handlers}
    {...commonKnobs()}
  />
);

const InteractiveAmountRangeField = () => {
  const [[minAmount, maxAmount], setRange] = React.useState<
    [number | null, number | null]
  >([null, null]);
  return (
    <AmountRangeField
      minAmount={minAmount}
      maxAmount={maxAmount}
      onChange={(range) => setRange(range)}
    />
  );
};

export const InteractiveSample = () => <InteractiveAmountRangeField />;
