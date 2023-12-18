import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import TextArea from './TextArea';
import Button from '../buttons/Button';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export default {
  component: TextArea,
};

export const TextAreaComponent = () => {
  return (
    <TextArea
      id="textarea_id"
      name="textarea_name"
      placeholder={text('Placeholder', 'プレースホルダー', 'TextArea')}
      disabled={boolean('Disabled', false, 'TextArea')}
      required={boolean('Required', false, 'TextArea')}
      small={boolean('Small', false, 'TextArea')}
      large={boolean('Large', false, 'TextArea')}
      label={text(
        'Label',
        'labelはlabel要素による関連付けができない場合に使用してください',
        'TextArea'
      )}
      aria-required={boolean('Required', false, 'TextArea')}
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
        'TextArea'
      )}
      maxLength={number('MaxLength', 255, undefined, 'TextArea')}
      resize={select(
        'Resize',
        ['none', 'horizontal', 'vertical', 'both'],
        'both',
        'TextArea'
      )}
      width={select(
        'Width',
        {
          Small: 'small',
          Medium: 'medium',
          Large: 'large',
          Full: 'full',
        },
        'medium',
        'TextArea'
      )}
      height={number('Height', 10, undefined, 'TextArea')}
      {...handlers}
      {...commonKnobs()}
    />
  );
};

export const Default = () => (
  <>
    <TextArea width="full" />
    <TextArea width="full" disabled />
    <TextArea width="full" error />
  </>
);

export const Small = () => (
  <>
    <TextArea width="full" small />
    <TextArea width="full" small disabled />
    <TextArea width="full" small error />
  </>
);

export const Large = () => (
  <>
    <TextArea width="full" large />
    <TextArea width="full" large disabled />
    <TextArea width="full" large error />
  </>
);

export const AutoResize = () => {
  const [value, setValue] = React.useState<string>('');

  return (
    <TextArea
      value={value}
      autoResize
      resize="both"
      width="full"
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setValue(e.target.value)
      }
    />
  );
};

export const ManualFocus = () => {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const onClick = () => ref?.current?.focus();

  return (
    <>
      <Button mr={1} onClick={onClick}>
        フォーカスを当てる
      </Button>
      <TextArea ref={ref} />
    </>
  );
};
