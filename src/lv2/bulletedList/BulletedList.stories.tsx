import * as React from 'react';

import { boolean, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import BulletedList from './BulletedList';

export default {
  component: BulletedList,
};

const listSamples = [
  { value: 'リストコンテンツ' },
  { value: 'link (default: target="_self")', url: 'https://www.freee.co.jp/' },
  {
    value:
      '長いリストコンテンツ長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い',
  },
  {
    value: 'link (target="_blank")',
    url: 'https://www.freee.co.jp/',
    target: '_blank',
    rel: 'noopener noreferrer',
    'data-guide': 'guide',
    'data-test': 'test',
    'data-tracking': 'tracking',
  },
];

export const BulletedListComponent = () => (
  <BulletedList
    listContents={listSamples}
    listStyleType={
      select(
        'ListStyleType',
        { disc: 'disc', decimal: 'decimal', undefined: '' },
        '',
        'BulletedList'
      ) || undefined
    }
    small={boolean('Small', false, 'BulletedList')}
    {...commonKnobs()}
  />
);

export const Small = () => <BulletedList listContents={listSamples} small />;
