import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import IndexSearchField from './IndexSearchField';
import ColumnBase from '../../lv1/bases/ColumnBase';
import MarginBase from '../../lv1/bases/MarginBase';
import { Text } from '../../lv1/typography/Text';

const handlers = actions({
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export default {
  component: IndexSearchField,
};

export const SearchFieldComponent = () => {
  const [searchWord, setSearchWord] = React.useState<string | undefined>(
    undefined
  );

  return (
    <>
      <MarginBase mb={1}>
        <Text>検索語句：{searchWord}</Text>
      </MarginBase>
      <MarginBase mb={3}>
        <IndexSearchField
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
          required={boolean('Required', true, 'SearchField')}
          disabled={boolean('Disabled', false, 'SearchField')}
          maxLength={number('MaxLength', 100, undefined, 'SearchField')}
          forceOpen={boolean('forceOpen', false, 'SearchField')}
          onUpdate={setSearchWord}
          {...handlers}
          {...commonKnobs()}
        />
      </MarginBase>
    </>
  );
};

export const Default = () => (
  <>
    <IndexSearchField marginRight />
    <IndexSearchField marginRight disabled />
  </>
);

export const MaxWidth = () => (
  <div style={{ width: `${number('parent element width (rem)', 15)}rem` }}>
    <ColumnBase>
      <IndexSearchField
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

export const SearchTarget = () => (
  <>
    <div>
      <IndexSearchField
        marginRight
        width={'full'}
        searchTarget={['取引先名', '備考', 'email', '従業員名']}
        mb={1}
      />
    </div>
  </>
);

export const ForceOpen = () => (
  <>
    <div>
      <IndexSearchField
        marginRight
        width={'full'}
        value={
          'forceOpen を指定すると、入力欄を常に開いた状態にします。モバイルサイズなど限定的な状況で常に開きたい場合に使用してください'
        }
        forceOpen={true}
        mb={1}
      />
    </div>
  </>
);
