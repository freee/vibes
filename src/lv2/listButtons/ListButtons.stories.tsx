import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { commonKnobs } from '../../../stories';
import ListButtons from './ListButtons';

export default {
  title: 'deprecated/listButtons/ListButtons',
  component: ListButtons,
};

export const ListButtonsComponent = () => (
  <ListButtons
    buttons={[
      {
        label: 'ボタン1',
      },
      {
        label: 'ボタン2（選択中）',
        selected: true,
      },
      {
        label: 'ボタン3（アンカー）',
        href: 'https://www.freee.co.jp/',
      },
      {
        label: 'ボタン4（アンカー別タブ）',
        href: 'https://www.freee.co.jp/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'ボタン5（アイコンつき）',
        statusIconText: 'ステータス',
      },
      {
        label: 'ボタン6（クリックイベント）',
        onClick: action('click'),
      },
    ]}
    {...commonKnobs()}
  />
);
