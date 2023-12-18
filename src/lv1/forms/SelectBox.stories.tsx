import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, select, number } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import SelectBox from './SelectBox';
import ColumnBase from '../bases/ColumnBase';
import Button from '../../lv1/buttons/Button';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

const optionsSamples = [
  { name: '選択してください' },
  { name: '選択肢1', value: 'value1' },
  { name: '選択肢2', value: 'value2', disabled: true },
  { name: '選択肢3', value: 'value3' },
  {
    name: 'abcdefghijllmnabcdefghijllmnabcdefghijllmnabcdefghijllmnabcdefghijllmn',
    value: 'value4',
  },
  {
    name: '選択肢グループ1',
    options: [
      { name: '選択肢1-1', value: 'value1-1' },
      { name: '選択肢1-2', value: 'value1-2' },
      { name: '選択肢1-3', value: 'value1-3' },
    ],
  },
  {
    name: '選択肢グループ2',
    options: [
      { name: '選択肢2-1', value: 'value2-1' },
      { name: '選択肢2-2', value: 'value2-2' },
      { name: '選択肢2-3', value: 'value2-3' },
    ],
    disabled: true,
  },
];

export default {
  component: SelectBox,
};

export const SelectBoxComponent = () => (
  <SelectBox
    label="テキストフィールド"
    options={optionsSamples}
    disabled={boolean('Disabled', false, 'SelectBox')}
    small={boolean('Small', false, 'SelectBox')}
    large={boolean('Large', false, 'SelectBox')}
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
      'SelectBox'
    )}
    defaultValue=""
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
      'SelectBox'
    )}
    {...handlers}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <SelectBox options={optionsSamples} marginRight />
    <SelectBox options={optionsSamples} marginRight disabled />
    <SelectBox options={optionsSamples} marginRight error />
  </>
);

export const Small = () => (
  <>
    <SelectBox options={optionsSamples} marginRight small />
    <SelectBox options={optionsSamples} marginRight small disabled />
    <SelectBox options={optionsSamples} marginRight small error />
  </>
);

export const Large = () => (
  <>
    <SelectBox options={optionsSamples} marginRight large />
    <SelectBox options={optionsSamples} marginRight large disabled />
    <SelectBox options={optionsSamples} marginRight large error />
  </>
);

export const MaxWidth = () => (
  <div style={{ width: `${number('parent element width (rem)', 15)}rem` }}>
    <ColumnBase>
      <SelectBox
        options={[
          {
            name: '親要素よりも幅が大きいとき、SelectBoxの幅は小さくなります。',
          },
        ]}
        width={select(
          'Width',
          {
            XSmall: 'xSmall',
            Small: 'small',
            Medium: 'medium',
            Large: 'large',
            Full: 'full',
          },
          'large',
          'SelectBox'
        )}
      />
    </ColumnBase>
  </div>
);

export const ManualFocus = () => {
  const ref = React.useRef<HTMLSelectElement>(null);
  const onClick = () => {
    ref.current?.focus();
  };

  return (
    <>
      <Button mr={1} onClick={onClick}>
        フォーカスを当てる
      </Button>
      <SelectBox ref={ref} options={optionsSamples} marginRight />
    </>
  );
};
