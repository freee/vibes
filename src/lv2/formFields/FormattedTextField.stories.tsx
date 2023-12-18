import React, { useState } from 'react';

import { commonKnobs } from '../../../stories';
import { ReadOnlyField, SelectBox } from '../../lv1';
import { FormControl, FormControlGroup, FormattedTextField } from '../../lv2';
import { actions } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

export default {
  component: FormattedTextField,
};

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export const FormattedTextFieldComponent = () => {
  return (
    <FormattedTextField
      value={text('Value', '', 'FormattedTextField')}
      placeholder={text('Placeholder', '', 'FormattedTextField')}
      required={boolean('Required', false, 'FormattedTextField')}
      disabled={boolean('Disabled', false, 'FormattedTextField')}
      error={boolean('Error', false, 'FormattedTextField')}
      small={boolean('Small', false, 'FormattedTextField')}
      borderless={boolean('Borderless', false, 'FormattedTextField')}
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
          'FormattedTextField'
        ) || undefined
      }
      preset={select(
        'Preset',
        {
          PostalCode: 'postalCode',
          CorporateNumber: 'corporateNumber',
          InvoiceRegistrationCompanyNumber: 'invoiceRegistrationCompanyNumber',
        },
        'postalCode',
        'FormattedTextField'
      )}
      {...handlers}
      {...commonKnobs()}
    />
  );
};

export const WithPreset = () => {
  type Preset = 'postalCode' | 'corporateNumber';
  const [preset, setPreset] = useState<Preset>('postalCode');
  const [preprocessedValue, setPreprocessedValue] = useState<string>('');
  const [formattedValue, setFormattedValue] = useState<string>('');

  return (
    <FormControlGroup>
      <FormControl label="preset" mr={1}>
        <SelectBox
          options={[
            'postalCode',
            'corporateNumber',
            'invoiceRegistrationCompanyNumber',
          ].map((name) => ({ name }))}
          onChange={(e) => setPreset(e.target.value as Preset)}
        />
      </FormControl>
      <FormControl label="FormattedTextField" mr={1}>
        <FormattedTextField
          preset={preset}
          onChangePreprocessedValue={setPreprocessedValue}
          onChangeFormattedValue={setFormattedValue}
        />
      </FormControl>
      <FormControl label="onChangePreprocessedValue" mr={1}>
        <ReadOnlyField value={preprocessedValue} />
      </FormControl>
      <FormControl label="onChangeFormattedValue">
        <ReadOnlyField value={formattedValue} />
      </FormControl>
    </FormControlGroup>
  );
};
