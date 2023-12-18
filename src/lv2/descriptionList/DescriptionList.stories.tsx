import * as React from 'react';

import DescriptionList from './DescriptionList';
import TextField from '../../lv1/forms/TextField';
import { commonKnobs } from '../../../stories';
import { number, text, select } from '@storybook/addon-knobs';
import Note from '../../lv1/typography/Note';

export default {
  component: DescriptionList,
};

export const DescriptionListComponent = () => (
  <DescriptionList
    headCellMinWidth={
      number('headCellMinWidth', 0, undefined, 'DescriptionList') || undefined
    }
    listContents={[
      {
        title: text('title', '見出し', 'DescriptionList'),
        value: text('value', 'テキストテキストテキスト', 'DescriptionList'),
      },
      {
        title: '見出し2',
        value: 'テキスト2',
      },
      { title: '見出し3', value: <a href="hoge">fuga</a> },
      {
        title: '見出し見出し見出し',
        value: (
          <>
            テキスト
            <br />
            テキスト
            <br />
            テキスト
            <br />
            テキスト
          </>
        ),
      },
      {
        title: (
          <label htmlFor="descriptionList-textfield-1">
            見出し見出し見出し
          </label>
        ),
        value: <TextField id="descriptionList-textfield-1" />,
      },
      {
        title: (
          <label htmlFor="descriptionList-textfield-2">
            見出し見出し見出し
          </label>
        ),
        value: (
          <>
            <TextField id="descriptionList-textfield-2" />
            <Note marginTop marginSize="xSmall">
              全角英数で入力してください
            </Note>
          </>
        ),
      },
    ]}
    spacing={
      select(
        'Spacing',
        {
          Normal: 'normal',
          Compact: 'compact',
          undefined: '',
        },
        '',
        'DescriptionList'
      ) || undefined
    }
    {...commonKnobs()}
  />
);
