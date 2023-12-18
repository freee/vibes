import * as React from 'react';

import { action } from '@storybook/addon-actions';
import DropdownMenuContent from './DropdownMenuContent';
import { DropdownContent } from './types';
import { commonKnobs } from '../../../stories';
import Button from '../../lv1/buttons/Button';
import Note from '../../lv1/typography/Note';

export default {
  component: DropdownMenuContent,
};

export const DropdownComponent = () => (
  <DropdownMenuContent
    contents={[
      {
        type: 'selectable',
        text: 'freee株式会社',
        ariaLabel: 'freee株式会社 に切り替える',
        onClick: action('menu clicked'),
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
      },
      { type: 'rule' },
      {
        type: 'textOnly',
        text: '現在の事業所番号\nXXX-XXXX-XXXX',
      },
    ]}
    {...commonKnobs()}
  />
);
export const SingleOption = () => (
  <DropdownMenuContent
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
export const ManyOptions = () => {
  const [state, setState] = React.useState<number>(new Date().getTime());

  const contents: DropdownContent[] = [...Array(100)].map((_, i) => ({
    type: 'selectable',
    text: `リンク${i}`,
    onClick: action('menu clicked'),
  }));

  return (
    <>
      <Button onClick={() => setState(new Date().getTime())}>refresh</Button>
      <DropdownMenuContent key={state} contents={contents} />
    </>
  );
};
