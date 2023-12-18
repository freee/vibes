import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import NumeralField from './NumeralField';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
});

export default {
  title: 'deprecated/forms/NumeralField',
  component: NumeralField,
};

export const NumeralFieldComponent = () => (
  <NumeralField
    value={number('Value', 1000000, undefined, 'NumeralField')}
    placeholder={text('Placeholder', '', 'NumeralField')}
    required={boolean('Required', false, 'NumeralField')}
    disabled={boolean('Disabled', false, 'NumeralField')}
    error={boolean('Error', false, 'NumeralField')}
    small={boolean('Small', false, 'NumeralField')}
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
        'NumeralField'
      ) || undefined
    }
    autoComplete={
      select(
        'Autocomplete',
        {
          off: 'off',
          on: 'on',
          name: 'name',
          'honorific-prefix': 'honorific-prefix',
          'given-name': 'given-name',
          'additional-name': 'additional-name',
          'family-name': 'family-name',
          'honorific-suffix': 'honorific-suffix',
          nickname: 'nickname',
          email: 'email',
          username: 'username',
          'new-password': 'new-password',
          'current-password': 'current-password',
          'one-time-code': 'one-time-code',
          'organization-title': 'organization-title',
          organization: 'organization',
          'street-address': 'street-address',
          'address-line1': 'address-line1',
          'address-line2': 'address-line2',
          'address-line3': 'address-line3',
          'address-level4': 'address-level4',
          'address-level3': 'address-level3',
          'address-level2': 'address-level2',
          'address-level1': 'address-level1',
          country: 'country',
          'country-name': 'country-name',
          'postal-code': 'postal-code',
          'cc-name': 'cc-name',
          'cc-given-name': 'cc-given-name',
          'cc-additional-name': 'cc-additional-name',
          'cc-family-name': 'cc-family-name',
          'cc-number': 'cc-number',
          'cc-exp': 'cc-exp',
          'cc-exp-month': 'cc-exp-month',
          'cc-exp-year': 'cc-exp-year',
          'cc-csc': 'cc-csc',
          'cc-type': 'cc-type',
          'transaction-currency': 'transaction-currency',
          'transaction-amount': 'transaction-amount',
          language: 'language',
          bday: 'bday',
          'bday-day': 'bday-day',
          'bday-month': 'bday-month',
          'bday-year': 'bday-year',
          sex: 'sex',
          tel: 'tel',
          'tel-country-code': 'tel-country-code',
          'tel-national': 'tel-national',
          'tel-area-code': 'tel-area-code',
          'tel-local': 'tel-local',
          'tel-local-prefix': 'tel-local-prefix',
          'tel-local-suffix': 'tel-local-suffix',
          'tel-extension': 'tel-extension',
          impp: 'impp',
          url: 'url',
          photo: 'photo',
          undefined: '',
        },
        '',
        'NumeralField'
      ) || undefined
    }
    {...handlers}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <NumeralField mr={1} />
    <NumeralField mr={1} disabled />
    <NumeralField mr={1} error />
  </>
);

export const InteractiveSample = () => {
  const [value, setValue] = React.useState<number | null>(null);
  return <NumeralField value={value} onChange={(v) => setValue(v)} />;
};
