import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { commonKnobs } from '../../../stories';

import JumpButton from '../../lv1/buttons/JumpButton';
import Checkbox from '../../lv1/forms/CheckBox';

import BasicTable from './BasicTable';
import { TableHeader } from '../listTable/ListTable';
import MessageIcon from '../messageIcon/MessageIcon';
import { boolean } from '@storybook/addon-knobs';

const headers: TableHeader[] = [
  {
    value: '左寄せ',
    ordering: 'asc',
    onClick: action('header cell click'),
  },
  {
    value: (
      <>
        左寄せソート不可
        <MessageIcon label="ヘルプ" small>
          hoge
        </MessageIcon>
      </>
    ),
  },
  {
    value: (
      <>
        中央寄せ
        {/* クリック可能なヘッダーセルにクリック可能なものを置く場合、クリックが伝播しないようにする必要がある */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <MessageIcon label="ヘルプ" small>
            hoge
          </MessageIcon>
        </span>
      </>
    ),
    alignCenter: true,
    onClick: action('header cell click'),
  },
  {
    value: '右寄せ、文字小さめ',
    alignRight: true,
    onClick: action('header cell click'),
  },
];

const rows = [
  {
    cells: [
      { value: 'テーブルリスト' },
      {
        value: (
          <>
            テーブルリスト
            <MessageIcon label="ヘルプ">hoge</MessageIcon>
          </>
        ),
      },
      { value: 'テーブルリスト', alignCenter: true },
      { value: 10000000, alignRight: true, small: true },
    ],
  },
  {
    url: 'https://www.freee.co.jp/',
    cells: [
      {
        value: <Checkbox></Checkbox>,
      },
      {
        value: (
          <JumpButton url="https://corp.freee.co.jp/" target="_blank" small>
            ボタン
          </JumpButton>
        ),
      },
      { value: '行リンク', alignCenter: true },
      { value: 10000000, alignRight: true, small: true },
    ],
  },
  {
    cells: [
      { value: 'テーブルリスト' },
      { value: 'テーブルリスト' },
      { value: 'テーブルリスト', alignCenter: true },
      {
        value: (
          <JumpButton small url="https://www.freee.co.jp/">
            ボタン
          </JumpButton>
        ),
      },
    ],
  },
  {
    onClick: action('row2-clicked'),
    cells: [
      {
        value: (
          // Checkboxにclickイベントを持たせられないのでspanに持たせている
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <span
            onKeyDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <Checkbox></Checkbox>
          </span>
        ),
      },
      { value: 'テーブルリスト、文字小さめ', small: true },
      { value: 'テーブルリスト、文字小さめ', alignCenter: true, small: true },
      { value: 10000000, alignRight: true },
    ],
  },
  {
    cells: [
      { value: 'テーブルリスト' },
      { value: 'テーブルリスト' },
      {
        value: (
          <div>
            あああ
            <br /> いいい <br /> ううう
            <br />
            えええ
          </div>
        ),
        alignCenter: true,
      },
      {
        value: (
          <JumpButton small url="https://www.freee.co.jp/">
            ボタン
          </JumpButton>
        ),
        alignRight: true,
      },
    ],
  },
];

export default {
  title: 'deprecated/basicTable/BasicTable',
  component: BasicTable,
};

export const ListTableComponent = () => (
  <BasicTable
    withCheckBox={boolean('withCheckBox', false, 'ListTable')}
    {...commonKnobs()}
    headers={headers}
    rows={rows}
  />
);
