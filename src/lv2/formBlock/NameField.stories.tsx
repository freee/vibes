import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import NameField from './NameField';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
});

export default {
  component: NameField,
};

export const NameFieldComponent = () => (
  <NameField
    lastName={text('LastName', '', 'NameField')}
    firstName={text('FirstName', '', 'NameField')}
    lastNamePlaceholder={text('LastNamePlaceholder', '', 'NameField')}
    firstNamePlaceholder={text('FirstNamePlaceholder', '', 'NameField')}
    small={boolean('Small', false, 'NameField')}
    disabled={boolean('Disabled', false, 'NameField')}
    error={boolean('Error', false, 'NameField')}
    required={boolean('Required', false, 'NameField')}
    autoComplete={
      select(
        'AutoComplete',
        {
          off: 'off',
          name: 'name',
          undefined: '',
        },
        '',
        'NameField'
      ) || undefined
    }
    {...handlers}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <NameField marginBottom />
    <NameField marginBottom disabled />
    <NameField marginBottom error />
  </>
);

export const Small = () => (
  <>
    <NameField marginBottom small />
    <NameField marginBottom small disabled />
    <NameField marginBottom small error />
  </>
);

export const InteractiveSample = () => {
  const [values, setValues] = React.useState<{
    lastName: string;
    firstName: string;
  }>({ lastName: '', firstName: '' });

  return (
    <NameField
      lastName={values.lastName}
      firstName={values.firstName}
      onChange={(key, e) => {
        const value = e.currentTarget.value;
        setValues((values) => ({ ...values, [key]: value }));
      }}
    />
  );
};
