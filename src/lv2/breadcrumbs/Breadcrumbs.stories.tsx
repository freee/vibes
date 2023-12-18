import * as React from 'react';

import Breadcrumbs from './Breadcrumbs';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';

export default {
  component: Breadcrumbs,
};

export const BreadcrumbsComponent = () => (
  <Breadcrumbs
    links={[
      {
        title: 'ホーム',
        url: '/',
        onSelfWindowNavigation: action('onSelfWindowNavigation'),
        onClickNavigator: action('on-click-navigator'),
      },
      {
        title: '一覧',
        url: '/',
        onClickNavigator: action('on-click-navigator'),
      },
      {
        title: '一覧2',
        onClick: action('onClick'),
      },
      {
        title: '詳細',
        loading: boolean('loading', false, 'BreadcrumbsComponent'),
      },
    ]}
    label={text('Label', 'パンくずリスト', 'Breadcrumbs')}
    {...commonKnobs()}
  />
);

export const BreadcrumbsWithLoadingElement = () => (
  <Breadcrumbs
    links={[
      {
        title: '口座一覧',
        url: '/',
        onSelfWindowNavigation: action('onSelfWindowNavigation'),
        onClickNavigator: action('on-click-navigator'),
      },
      {
        title: '口座名',
        url: '/',
        loading: true,
        onClickNavigator: action('on-click-navigator'),
      },
      {
        title: '科目一覧',
        onClick: action('onClick'),
      },
      {
        title: '科目名',
        loading: true,
      },
    ]}
    label={text('Label', 'パンくずリスト', 'Breadcrumbs')}
    {...commonKnobs()}
  />
);
