import * as React from 'react';
import {
  MdHome,
  MdInbox,
  MdAssessment,
  MdLibraryBooks,
  MdCreditCard,
  MdSettings,
  MdPerson,
  MdEventNote,
  MdReceipt,
  MdDescription,
  MdRouter,
  MdHelp,
} from 'react-icons/md';

import { action } from '@storybook/addon-actions';
import { commonKnobs } from '../../../stories';
import GlobalNavi from './GlobalNavi';
import { boolean } from '@storybook/addon-knobs';
import { Button } from '../../lv1';

export default {
  component: GlobalNavi,
};

export const GlobalNaviComponent = () => (
  <GlobalNavi
    disableGutters={boolean('disableGutters', false, 'GlobalNavi')}
    links={[
      {
        title: 'ホーム',
        url: '#',
        IconComponent: MdHome,
        current: true,
        'data-guide': 'home',
        'data-test': 'ホーム',
        'data-tracking': 'home',
      },
      {
        title: '取引',
        url: '#',
        IconComponent: MdInbox,
        'data-guide': 'transaction',
        'data-test': '取引',
        'data-tracking': 'transaction',
      },
      {
        title: 'レポート',
        url: '#',
        IconComponent: MdAssessment,
        'data-guide': 'report',
        'data-test': 'レポート',
        'data-tracking': 'report',
      },
      {
        title: '決算',
        url: '#',
        IconComponent: MdLibraryBooks,
        'data-guide': 'settlement',
        'data-test': '決算',
        'data-tracking': 'settlement',
      },
      {
        title: '口座',
        url: '#',
        IconComponent: MdCreditCard,
        'data-guide': 'account',
        'data-test': '口座',
        'data-tracking': 'account',
      },
      {
        title: '設定',
        url: '#',
        IconComponent: MdSettings,
        'data-guide': 'configuration',
        'data-test': '設定',
        'data-tracking': 'configuration',
      },
      {
        title: 'リンク（with react-router）',
        url: '#',
        IconComponent: MdRouter,
        onSelfWindowNavigation: action('onSelfWindowNavigation'),
      },
    ]}
    hideHelpForm={boolean('hideHelpForm', false, 'GlobalNavi')}
    {...commonKnobs()}
  />
);

export const SampleForHR = () => (
  <GlobalNavi
    label="メニュー"
    links={[
      {
        title: 'ホーム',
        url: '#',
        IconComponent: MdHome,
        current: true,
      },
      {
        title: '従業員',
        url: '#',
        IconComponent: MdPerson,
      },
      {
        title: '勤怠',
        url: '#',
        IconComponent: MdEventNote,
      },
      {
        title: '給与・賞与',
        url: '#',
        IconComponent: MdReceipt,
      },
      {
        title: '書類',
        url: '#',
        IconComponent: MdDescription,
      },
      {
        title: '設定',
        url: '#',
        IconComponent: MdSettings,
      },
    ]}
    searchQueryParams={{
      type: 'category',
      id: '200193760',
      empty_param: '',
    }}
    {...commonKnobs()}
  />
);

export const DisableGutters = () => (
  <GlobalNavi
    disableGutters
    links={[
      {
        title: 'ホーム',
        url: '#',
        IconComponent: MdHome,
        current: true,
      },
    ]}
  />
);

export const WithoutHelpForm = () => (
  <GlobalNavi
    links={[
      {
        title: 'ホーム',
        url: '#',
        IconComponent: MdHome,
        current: true,
      },
    ]}
    hideHelpForm
  />
);

export const WithSectionNode = () => (
  <GlobalNavi
    links={[
      {
        title: 'ホーム',
        url: '#',
        IconComponent: MdHome,
        current: true,
      },
    ]}
    sectionNode={
      <Button IconComponent={MdHelp} appearance="tertiary">
        ヘルプ
      </Button>
    }
  />
);
