import * as React from 'react';

import { action } from '@storybook/addon-actions';
import Dropdown from './Dropdown';
import { commonKnobs } from '../../../stories';
import { select } from '@storybook/addon-knobs';
import Note from '../../lv1/typography/Note';

export default {
  component: Dropdown,
};

export const DropdownComponent = () => (
  <Dropdown
    onRequestClose={action('onRequestClose')}
    contents={[
      {
        type: 'selectable',
        text: 'freee株式会社',
        ariaLabel: 'freee株式会社 に切り替える',
        onClick: action('menu clicked'),
        'data-test': '選択可能なアイテム',
      },
      {
        type: 'selectable',
        text: (
          <>
            テスト（株）<Note>備考備考備考</Note>
          </>
        ),
        ariaLabel: 'テスト（株） に切り替える',
        onClick: action('menu clicked'),
      },
      {
        type: 'selectable',
        text: '株式会社テストテストテスト に切り替える',
        onClick: action('menu clicked'),
      },
      {
        type: 'selectable',
        text: '株式会社テストテストテスト に切り替える（unread）',
        unread: true,
      },
      {
        type: 'selectable',
        text: '株式会社テストテストテスト に切り替える（選択不可）',
        disabled: true,
      },
      {
        type: 'selectable',
        text: '削除',
        danger: true,
      },
      {
        type: 'selectable',
        text: '削除',
        disabled: true,
        danger: true,
      },
      {
        type: 'selectable',
        text: 'リンク',
        url: 'https://www.freee.co.jp',
      },
      {
        type: 'selectable',
        text: '外部リンク',
        url: 'https://www.freee.co.jp',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        type: 'selectable',
        text: 'リンク (disabled)',
        disabled: true,
        url: 'https://www.freee.co.jp',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        type: 'selectable',
        text: 'リンク（with react-router）',
        url: 'https://www.freee.co.jp',
        onSelfWindowNavigation: action('selfWindowNavigation'),
      },
      {
        type: 'selectable',
        text: 'とてもとてもとてもとてもとてもとてもとてもとてもとてもとても長い',
        url: 'https://www.freee.co.jp',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        type: 'checkbox',
        text: 'チェックボックス',
        value: 'checkbox',
        name: 'checkbox',
        onChange: action('checkbox change'),
        checked: false,
        'data-test': 'チェック可能なアイテム',
      },
      { type: 'rule' },
      {
        type: 'textOnly',
        text: '現在の事業所番号\nXXX-XXXX-XXXX',
        'data-test': 'テキストアイテム',
      },
    ]}
    align={
      select(
        'align',
        { left: 'left', right: 'right', none: '' },
        '',
        'Dropdown'
      ) || undefined
    }
    {...commonKnobs()}
  />
);
export const SingleOption = () => (
  <Dropdown
    contents={[
      {
        type: 'selectable',
        text: 'freee株式会社',
        ariaLabel: 'freee株式会社 に切り替える',
        onClick: action('menu clicked'),
      },
    ]}
  />
);
