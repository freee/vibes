import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import PhoneNumberField from './PhoneNumberField';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
});

export default {
  component: PhoneNumberField,
};

export const PhoneNumberFieldComponent = () => (
  <PhoneNumberField
    phoneNumberA={text('PhoneNumberA', '', 'PhoneNumberField')}
    phoneNumberB={text('PhoneNumberB', '', 'PhoneNumberField')}
    phoneNumberC={text('PhoneNumberC', '', 'PhoneNumberField')}
    placeholderA={text('PlaceholderA', '', 'PhoneNumberField')}
    placeholderB={text('PlaceholderB', '', 'PhoneNumberField')}
    placeholderC={text('PlaceholderC', '', 'PhoneNumberField')}
    small={boolean('Small', false, 'PhoneNumberField')}
    disabled={boolean('Disabled', false, 'PhoneNumberField')}
    error={boolean('Error', false, 'PhoneNumberField')}
    autoComplete={
      select(
        'AutoComplete',
        {
          off: 'off',
          tel: 'tel',
          undefined: '',
        },
        '',
        'PhoneNumberField'
      ) || undefined
    }
    {...handlers}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <PhoneNumberField marginBottom />
    <PhoneNumberField marginBottom disabled />
    <PhoneNumberField marginBottom error />
  </>
);

export const Small = () => (
  <>
    <PhoneNumberField marginBottom small />
    <PhoneNumberField marginBottom small disabled />
    <PhoneNumberField marginBottom small error />
  </>
);

export const InteractiveSample = () => {
  const [values, setValues] = React.useState<{
    a: string;
    b: string;
    c: string;
  }>({ a: '', b: '', c: '' });

  return (
    <PhoneNumberField
      phoneNumberA={values.a}
      phoneNumberB={values.b}
      phoneNumberC={values.c}
      onChange={(key, e) => {
        const value = e.currentTarget.value;
        setValues((values) => ({ ...values, [key]: value }));
      }}
    />
  );
};
