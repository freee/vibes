import * as React from 'react';
import { MdAdd } from 'react-icons/md';

import { action } from '@storybook/addon-actions';
import { commonKnobs } from '../../../stories';
import ListButtonSelector from './ListButtonSelector';

export default {
  title: 'deprecated/listButtonSelector/ListButtonSelector',
  component: ListButtonSelector,
};

export const ListButtonSelectorComponent = () => (
  <div style={{ height: '18rem' }}>
    <ListButtonSelector
      selectedLabel="フリー株式会社にログイン中"
      selectorLabel="ログインする事業所を選択"
      buttons={[
        {
          label: 'Hoge株式会社',
          onClick: action('click'),
        },
        {
          label: 'フリー株式会社',
          selected: true,
          statusIconText: 'ログイン中',
          statusIconType: 'success',
        },
        {
          label: 'foo株式会社',
          onClick: action('click'),
        },
        {
          label: 'bar株式会社',
          onClick: action('click'),
        },
        {
          label: 'アンカー別タブ',
          href: 'https://www.freee.co.jp/',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      ]}
      {...commonKnobs()}
    />
  </div>
);

export const Disabled = () => (
  <ListButtonSelector
    selectedLabel="フリー株式会社にログイン中"
    selectorLabel="ログインする事業所を選択"
    buttons={[]}
    disabled
  />
);

export const WithActionButton = () => (
  <div style={{ height: '10rem' }}>
    <ListButtonSelector
      selectedLabel="フリー株式会社にログイン中"
      selectorLabel="ログインする事業所を選択"
      buttons={[]}
      actionLabel="新しい事業所をつくる"
      action={action('click')}
      ActionIconComponent={MdAdd}
    />
  </div>
);
