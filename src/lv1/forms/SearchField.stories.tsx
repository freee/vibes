import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { FocusHighlight } from '../a11y/FocusHighlight';
import SearchField from './SearchField';
import ColumnBase from '../bases/ColumnBase';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export default {
  component: SearchField,
};

export const SearchFieldComponent = () => (
  <SearchField
    id={text('Id', 'id', 'SearchField')}
    label={text('Label', '検索フォーム', 'SearchField')}
    placeholder={text('Placeholder', '検索', 'SearchField')}
    name={text('Name', 'search', 'SearchField')}
    width={select(
      'Width',
      {
        xSmall: 'xSmall',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
        Full: 'full',
      },
      'medium',
      'SearchField'
    )}
    required={boolean('Required', false, 'SearchField')}
    disabled={boolean('Disabled', false, 'SearchField')}
    error={boolean('Error', false, 'SearchField')}
    small={boolean('Small', false, 'SearchField')}
    large={boolean('Large', false, 'SearchField')}
    maxLength={number('MaxLength', 100, undefined, 'SearchField')}
    borderless={boolean('Borderless', false, 'SearchField')}
    {...handlers}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <SearchField marginRight />
    <SearchField marginRight disabled />
    <SearchField marginRight error />
  </>
);

export const Small = () => (
  <>
    <SearchField marginRight small />
    <SearchField marginRight small disabled />
    <SearchField marginRight small error />
  </>
);

export const Large = () => (
  <>
    <SearchField marginRight large />
    <SearchField marginRight large disabled />
    <SearchField marginRight large error />
  </>
);

export const MaxWidth = () => (
  <div style={{ width: `${number('parent element width (rem)', 15)}rem` }}>
    <ColumnBase>
      <SearchField
        value="親要素よりも幅が大きいとき、SearchFieldの幅は小さくなります。"
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

export const Borderless = () => (
  <>
    <div>
      <SearchField
        borderless
        marginRight
        width={'full'}
        value={
          'borderless を指定すると、ボーダーやフォーカスインジケーターが非表示になります。必ずFocusHighlightコンポーネント等でフォーカスインジケーターを表示してください。'
        }
        mb={1}
      />
    </div>
    <FocusHighlight highlightStyle="inset" width={'full'}>
      <SearchField
        borderless
        marginRight
        width={'full'}
        value={'これはFocusHighlightコンポーネントを使用している例です'}
      />
    </FocusHighlight>
  </>
);
