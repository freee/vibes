import * as React from 'react';
import { MdDomain, MdPerson, MdExitToApp } from 'react-icons/md';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Header from './Header';
import { Button } from '../../lv1';
import ButtonGroup from '../buttonGroup/ButtonGroup';

const sectionDataList = [
  {
    type: 'plan' as const,
    text: 'ビジネスプラン',
    url: '/plan',
  },
  {
    type: 'link' as const,
    IconComponent: MdDomain,
    iconLabel: '事業所',
    text: 'freee株式会社',
    url: '/company',
  },
  {
    type: 'link' as const,
    IconComponent: MdPerson,
    iconLabel: 'アカウント',
    text: 'freee@freee.co.jp',
    url: '/user',
  },
  {
    type: 'button' as const,
    IconComponent: MdExitToApp,
    text: 'ログアウト',
    onClick: action('logout'),
  },
];

export default {
  component: Header,
};

export const HeaderComponent = () => (
  <Header
    disableGutters={boolean('disableGutters', false, 'Header')}
    logo={<p>Logo Component</p>}
    sectionDataList={sectionDataList}
    logoUrl={text('LogoUrl', '#', 'Header')}
    {...commonKnobs()}
  />
);

export const DisableGutters = () => (
  <Header
    disableGutters
    sectionDataList={sectionDataList}
    logoUrl="#"
    logo={<p>Logo Component</p>}
  />
);

export const WithSectionComponent = () => (
  <Header
    logo={<p>Logo Component</p>}
    sectionNode={
      <ButtonGroup>
        <Button
          appearance="tertiary"
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log('ログイン');
          }}
        >
          ログイン
        </Button>
        <Button
          primary
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log('新規登録');
          }}
        >
          新規登録
        </Button>
      </ButtonGroup>
    }
  />
);
