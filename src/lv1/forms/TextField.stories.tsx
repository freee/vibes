import * as React from 'react';

import { MdDateRange, MdExpandMore, MdFavorite } from 'react-icons/md';
import { action, actions } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import TextField from './TextField';
import ColumnBase from '../bases/ColumnBase';
import { FocusHighlight } from '../a11y/FocusHighlight';
import CheckBox from './CheckBox';
import Paragraph from '../typography/Paragraph';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export default {
  component: TextField,
};

export const TextFieldComponent = () => {
  const ref = React.createRef<HTMLInputElement>();
  return (
    <TextField
      type={select(
        'Type',
        {
          Text: 'text',
          Email: 'email',
          Password: 'password',
          Number: 'number',
        },
        'text',
        'TextField'
      )}
      label={text('Label', 'テキストフィールドのサンプル', 'TextField')}
      placeholder={text('Placeholder', '入力してください', 'TextField')}
      required={boolean('Required', false, 'TextField')}
      disabled={boolean('Disabled', false, 'TextField')}
      error={boolean('Error', false, 'TextField')}
      small={boolean('Small', false, 'TextField')}
      large={boolean('Large', false, 'TextField')}
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
        'TextField'
      )}
      min={number('Min', 0, undefined, 'TextField')}
      max={number('Max', 100, undefined, 'TextField')}
      step={number('Step', 10, undefined, 'TextField')}
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
        'TextField'
      )}
      suffix={text('Suffix', '', 'TextField')}
      loading={boolean('Loading', false, 'TextField')}
      ref={ref}
      {...handlers}
      {...commonKnobs()}
    />
  );
};

export const Widths = () => (
  <>
    <TextField mr={1} mb={1} value="xSmall" label="xSmall" width="xSmall" />
    <TextField mr={1} mb={1} value="small" label="small" width="small" />
    <TextField mr={1} mb={1} value="medium" label="medium" width="medium" />
    <TextField mr={1} mb={1} value="large" label="large" width="large" />
    <TextField value="full" label="full" width="full" />
  </>
);

export const Default = () => (
  <>
    <TextField mr={1} />
    <TextField mr={1} disabled />
    <TextField mr={1} error />
  </>
);

export const Small = () => (
  <>
    <TextField mr={1} small />
    <TextField mr={1} small disabled />
    <TextField mr={1} small error />
  </>
);

export const Large = () => (
  <>
    <TextField mr={1} large />
    <TextField mr={1} large disabled />
    <TextField mr={1} large error />
  </>
);

export const MaxWidth = () => (
  <div style={{ width: `${number('parent element width (rem)', 15)}rem` }}>
    <ColumnBase>
      <TextField
        value="親要素よりも幅が大きいとき、TextFieldの幅は小さくなります。"
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
          'TextField'
        )}
      />
    </ColumnBase>
  </div>
);

export const Suffix = () => (
  <>
    <TextField mr={1} suffix="円" />
    <TextField mr={1} small suffix="円" />
    <TextField mr={1} large suffix="円" />
  </>
);

export const Borderless = () => (
  <>
    <TextField
      borderless
      width="large"
      value="borderless を指定すると、テキストフィールドのボーダーやフォーカスインジケーターが非表示になります。必ずFocusHighlightコンポーネント等でフォーカスインジケーターを表示してください。"
    />
    <FocusHighlight highlightStyle="inset">
      <TextField
        borderless
        width="large"
        value="これはFocusHighlightコンポーネントを使用している例です"
      />
    </FocusHighlight>
  </>
);

export const WithIcon = () => (
  <>
    <Paragraph mb={1}>
      テキストフィールドの右脇にアイコンを表示できますが、これはコンボボックス等の動作を示すためのものです。
      通常のフィールドには使用しないでください。
    </Paragraph>
    <TextField
      IconComponent={MdExpandMore}
      mr={1}
      onIconClick={action('onIconClick')}
      onIconBlur={action('onIconBlur')}
      onIconFocus={action('onIconFocus')}
      iconLabel="メニューを開く"
    />
    <TextField IconComponent={MdExpandMore} mr={1} />
    <TextField IconComponent={MdDateRange} width="xSmall" mr={1} small />
    <TextField IconComponent={MdDateRange} width="small" mr={1} />
    <TextField IconComponent={MdDateRange} width="small" mr={1} large />
    <TextField
      IconComponent={MdFavorite}
      iconLabel="お気に入り"
      width="small"
      large
    />
  </>
);

export const WithLoading = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  return (
    <>
      <TextField IconComponent={MdExpandMore} loading={loading} mr={1} />
      <CheckBox
        onChange={(e) => setLoading(e.target.checked)}
        checked={loading}
      >
        Loading
      </CheckBox>
    </>
  );
};

export const DeprecatedMarginProps = () => (
  <TextField
    width="large"
    label="marginBottom, marginLeft, marginRight, marginTop, marginSizeは使わず、ma, mb, ml, mr, mt を使ってください"
    value="marginBottom, marginLeft, marginRight, marginTop, marginSizeは使わず、ma, mb, ml, mr, mt を使ってください"
    marginBottom={boolean('marginBottom', true, 'MarginProps')}
    marginRight={boolean('marginRight', true, 'MarginProps')}
    marginLeft={boolean('marginLeft', true, 'MarginProps')}
    marginTop={boolean('marginTop', true, 'MarginProps')}
    marginSize={
      select(
        'marginSize',
        {
          undefined: '',
          xSmall: 'xSmall',
          small: 'small',
          large: 'large',
          xLarge: 'xLarge',
          xxLarge: 'xxLarge',
        },
        '',
        'MarginProps'
      ) || undefined
    }
  />
);
