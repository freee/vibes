import * as React from 'react';

import CardNavigation from './CardNavigation';
import { text } from '@storybook/addon-knobs';
import { MdCreditCard, MdPerson, MdReportProblem } from 'react-icons/md';

export default {
  component: CardNavigation,
};

export const CardNavigationComponent = () => (
  <CardNavigation
    navigationContents={[
      {
        title: text('Title1', 'カードナビゲーション', 'CardNavigation'),
        text: text(
          'Text1',
          'テキストテキストテキストテキストテキストテキストテキスト',
          'CardNavigation'
        ),
        url: text('Url', '#', 'CardNavigation'),
        IconComponent: MdCreditCard,
      },
      {
        title: text('Title2', 'URLなし', 'CardNavigation'),
        text: text('Text2', 'URLなし', 'CardNavigation'),
        IconComponent: MdPerson,
      },
      {
        title: text('Title3', 'TEXTなし', 'CardNavigation'),
        url: text('Url', '#', 'CardNavigation'),
        IconComponent: MdReportProblem,
      },
      {
        title: text(
          'Title4',
          '長い長い長い長い長い長い長い長い長い長いタイトル',
          'CardNavigation'
        ),
        text: text(
          'Text4',
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
          'CardNavigation'
        ),
        url: text('Url', '#', 'CardNavigation'),
        IconComponent: MdReportProblem,
      },
    ]}
  />
);

export const CardNavigationComponentLength4 = () => (
  <CardNavigation
    navigationContents={[
      {
        title: text('Title4-1', 'カードナビ', 'CardNavigation'),
        text: text(
          'Text4-1',
          'テキストテキストテキストテキストテキストテキスト',
          'CardNavigation'
        ),
        url: text('Url', '#', 'CardNavigation'),
        IconComponent: MdCreditCard,
      },
      {
        title: text('Title4-2', 'URLなし', 'CardNavigation'),
        text: text('Text4-2', 'URLなし', 'CardNavigation'),
        IconComponent: MdPerson,
      },
      {
        title: text('Title4-3', 'TEXTなし', 'CardNavigation'),
        url: text('Url', '#', 'CardNavigation'),
        IconComponent: MdReportProblem,
      },
      {
        title: text('Title4-4', 'カードナビ', 'CardNavigation'),
        text: text(
          'Text4-4',
          'テキストテキストテキストテキストテキストテキスト',
          'CardNavigation'
        ),
        url: text('Url', '#', 'CardNavigation'),
        IconComponent: MdCreditCard,
      },
    ]}
  />
);

export const CardNavigationComponentLength2 = () => (
  <CardNavigation
    navigationContents={[
      {
        title: text('Title1', 'カードナビゲーション', 'CardNavigation'),
        text: text(
          'Text1',
          'テキストテキストテキストテキストテキストテキストテキスト',
          'CardNavigation'
        ),
        url: text('Url', '#', 'CardNavigation'),
        IconComponent: MdCreditCard,
      },
      {
        title: text('Title2', 'URLなし', 'CardNavigation'),
        text: text('Text2', 'URLなし', 'CardNavigation'),
        IconComponent: MdPerson,
      },
    ]}
  />
);

export const CardNavigationComponentLength1 = () => (
  <CardNavigation
    navigationContents={[
      {
        title: text('Title1', 'カードナビゲーション', 'CardNavigation'),
        text: text(
          'Text1',
          'テキストテキストテキストテキストテキストテキストテキスト',
          'CardNavigation'
        ),
        url: text('Url', '#', 'CardNavigation'),
        IconComponent: MdCreditCard,
      },
    ]}
  />
);
