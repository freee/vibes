import * as React from 'react';
import { commonKnobs } from '../../../stories';
import NumeralCodeInput from './NumeralCodeInput';
import { actions } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

export default {
  component: NumeralCodeInput,
};

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export const TextFieldComponent = () => {
  const ref = React.createRef<HTMLInputElement>();
  return (
    <NumeralCodeInput
      type={
        select(
          'Type',
          {
            Text: 'text',
            Tel: 'tel',
            None: '',
          },
          '',
          'TextField'
        ) || undefined
      }
      value={text('Value', '0120', 'NumeralCodeInput')}
      label={text(
        'Label',
        'ここの文字列はaria-labelとして使用されます',
        'NumeralCodeInput'
      )}
      placeholder={text('Placeholder', '', 'NumeralCodeInput')}
      required={boolean('Required', false, 'NumeralCodeInput')}
      disabled={boolean('Disabled', false, 'NumeralCodeInput')}
      error={boolean('Error', false, 'NumeralCodeInput')}
      small={boolean('Small', false, 'NumeralCodeInput')}
      large={boolean('Large', false, 'NumeralCodeInput')}
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
        'NumeralCodeInput'
      )}
      autoComplete={select(
        'AutoComplete',
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
          'tel-extension': 'tel-extension',
          impp: 'impp',
          url: 'url',
          photo: 'photo',
        },
        'off',
        'NumeralCodeInput'
      )}
      ref={ref}
      {...handlers}
      {...commonKnobs()}
    />
  );
};

export const InteractiveSample = () => {
  const ref = React.createRef<HTMLInputElement>();

  const [value, setValue] = React.useState<string>('');
  return (
    <NumeralCodeInput
      value={value}
      onChange={(v) => setValue(v)}
      type={
        select(
          'Type',
          {
            Text: 'text',
            Tel: 'tel',
            None: '',
          },
          '',
          'TextField'
        ) || undefined
      }
      label={text(
        'Label',
        'ここの文字列はaria-labelとして使用されます',
        'NumeralCodeInput'
      )}
      placeholder={text('Placeholder', '', 'NumeralCodeInput')}
      required={boolean('Required', false, 'NumeralCodeInput')}
      disabled={boolean('Disabled', false, 'NumeralCodeInput')}
      error={boolean('Error', false, 'NumeralCodeInput')}
      small={boolean('Small', false, 'NumeralCodeInput')}
      large={boolean('Large', false, 'NumeralCodeInput')}
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
        'NumeralCodeInput'
      )}
      autoComplete={select(
        'AutoComplete',
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
          'tel-extension': 'tel-extension',
          impp: 'impp',
          url: 'url',
          photo: 'photo',
        },
        'off',
        'NumeralCodeInput'
      )}
      ref={ref}
      {...commonKnobs()}
    />
  );
};

export const AcceptHyphen = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <NumeralCodeInput
      value={value}
      onChange={(v) => setValue(v)}
      acceptSymbols={['-', '_']}
    />
  );
};
