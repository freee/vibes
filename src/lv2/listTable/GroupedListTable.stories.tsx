import * as React from 'react';

import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { commonKnobs } from '../../../stories';

import GroupedListTable from './GroupedListTable';
import { Digits } from '../../utilities';
import { Order } from '../../lv1/lists/TableListHeadCell';

export default {
  component: GroupedListTable,
};

export const GroupedListTableComponent = () => {
  return (
    <GroupedListTable
      headers={[
        {
          value: 'タイトル',
          onClick: action('header onClick'),
          'data-test': 'タイトル',
        },
        { value: '日付', onClick: action('header onClick'), ordering: 'desc' },
        { value: '金額', alignRight: true, onClick: action('header onClick') },
        {
          value: '消費税',
          alignRight: true,
          onClick: action('header onClick'),
        },
      ]}
      rowGroups={[
        {
          summaryCells: [
            {
              value: '2020-10-27 の合計',
              colSpan: 2,
              'data-test': '2020-10-27 の合計',
            },
            { value: '4,234', alignRight: true, 'data-test': '金額' },
            { value: '423', alignRight: true, 'data-test': '消費税' },
          ],
          url: 'https://www.freee.co.jp',
          onSelfWindowNavigation: action('rowGroup onSelfWindowNavigation'),
          onToggleFolded: action('rowGroup onToggleFolded'),
          onChangeCheckBox: action('rowGroup onChangeCheckBox'),
          'data-test': 'サマリー行',
          rows: [
            {
              url: 'https://www.freee.co.jp',
              onSelfWindowNavigation: action('row onSelfWindowNavigation'),
              onChangeCheckBox: action('row onChangeCheckBox'),
              cells: [
                {
                  value: '文房具',
                  'data-test': '1つめのセル',
                },
                { value: '2020-10-27', 'data-test': '2つめのセル' },
                {
                  value: '1,234',
                  alignRight: true,
                  'data-test': '3つめのセル',
                },
                { value: '123', alignRight: true, 'data-test': '4つめのセル' },
              ],
            },
            {
              onClick: action('row onClick'),
              onChangeCheckBox: action('row onChangeCheckBox'),
              cells: [
                { value: '交通費' },
                { value: '2020-10-27' },
                { value: '3,000', alignRight: true },
                { value: '300', alignRight: true },
              ],
            },
          ],
        },
        {
          summaryCells: [
            { value: '2020-10-26 の合計', colSpan: 2 },
            { value: '2,200', alignRight: true },
            { value: '220', alignRight: true },
          ],
          onClick: action('rowGroup onClick'),
          onToggleFolded: action('rowGroup onToggleFolded'),
          onChangeCheckBox: action('rowGroup onChangeCheckBox'),
          folded: true,
          rows: [
            {
              onChangeCheckBox: action('row onChangeCheckBox'),
              cells: [
                { value: '昼食' },
                { value: '2020-10-26' },
                { value: '1,200', alignRight: true },
                { value: '120', alignRight: true },
              ],
            },
            {
              onChangeCheckBox: action('row onChangeCheckBox'),
              cells: [
                { value: '交通費' },
                { value: '2020-10-26' },
                { value: '1,000', alignRight: true },
                { value: '100', alignRight: true },
              ],
            },
          ],
        },
      ]}
      onChangeHeaderCheckBox={action('onChangeHeaderCheckBox')}
      withCheckBox={boolean('withCheckBox', true, 'GroupedListTable')}
      foldable={boolean('foldable', false, 'GroupedListTable')}
      fitContent={boolean('fitContent', false, 'GroupedListTable')}
      {...commonKnobs()}
    />
  );
};

const sample: {
  date: string;
  details: { title: string; date: string; amount: number; tax: number }[];
}[] = [
  {
    date: '2020-10-27',
    details: [
      {
        title: '文房具',
        date: '2020-10-27',
        amount: 1234,
        tax: 123,
      },
      {
        title: '交通費',
        date: '2020-10-27',
        amount: 3000,
        tax: 300,
      },
    ],
  },
  {
    date: '2020-10-26',
    details: [
      {
        title: '昼食',
        date: '2020-10-26',
        amount: 1200,
        tax: 120,
      },
      {
        title: '交通費',
        date: '2020-10-26',
        amount: 1000,
        tax: 100,
      },
    ],
  },
];

export const InteractiveSample = () => {
  const [checkBoxStatuses, setCheckBoxStatuses] = React.useState<boolean[][]>(
    Array(sample.length)
      .fill(null)
      .map((_e, i) => Array(sample[i].details.length || 0).fill(false))
  );
  const [foldingStatuses, setFoldingStatuses] = React.useState<boolean[]>(
    Array(sample.length).fill(false)
  );
  type SortKeyT = 'date' | 'amount' | 'tax';
  const [sortKey, setSortKey] = React.useState<SortKeyT>('date');
  const [sortOrder, setSortOrder] = React.useState<Order>('desc');
  const nextOrder: { [key in Order]: Order } = {
    asc: 'desc',
    desc: 'init',
    init: 'asc',
  };
  const changeSort = (key: SortKeyT) => {
    setSortKey(key);
    setSortOrder((prev) => (key === sortKey ? nextOrder[prev] : 'desc'));
  };

  React.useEffect(() => {
    setCheckBoxStatuses(
      Array(sample.length)
        .fill(null)
        .map((_e, i) => Array(sample[i].details.length || 0).fill(false))
    );
    setFoldingStatuses(Array(sample.length).fill(false));
  }, [sortKey, sortOrder]);

  return (
    <GroupedListTable
      headers={[
        {
          value: 'タイトル',
        },
        {
          value: '日付',
          ordering: sortKey === 'date' ? sortOrder : 'init',
          onClick: () => changeSort('date'),
        },
        {
          value: '金額',
          alignRight: true,
          ordering: sortKey === 'amount' ? sortOrder : 'init',
          onClick: () => changeSort('amount'),
        },
        {
          value: '消費税',
          alignRight: true,
          ordering: sortKey === 'tax' ? sortOrder : 'init',
          onClick: () => changeSort('tax'),
        },
      ]}
      rowGroups={(sortOrder === 'init'
        ? sample
        : sample
            .concat()
            .sort(
              (a, b) =>
                (sortKey === 'date'
                  ? a.date.localeCompare(b.date)
                  : a.details.reduce((acc, e) => acc + e[sortKey], 0) -
                    b.details.reduce((acc, e) => acc + e[sortKey], 0)) *
                (sortOrder === 'desc' ? -1 : 1)
            )
      ).map((group, groupIndex) => {
        return {
          summaryCells: [
            { value: `${group.date}の合計`, colSpan: 2 },
            {
              value: Digits.formalize(
                group.details.reduce((acc, current) => acc + current.amount, 0)
              ),
              alignRight: true,
            },
            {
              value: Digits.formalize(
                group.details.reduce((acc, current) => acc + current.tax, 0)
              ),
              alignRight: true,
            },
          ],
          folded: foldingStatuses[groupIndex],
          onToggleFolded: (toggle) => {
            const groupStatuses = [...foldingStatuses];
            groupStatuses[groupIndex] = toggle;
            setFoldingStatuses(groupStatuses);
          },
          onChangeCheckBox: (e) => {
            const groupStatuses = [...checkBoxStatuses];
            groupStatuses[groupIndex] = Array(group.details.length).fill(
              e.target.checked
            );
            setCheckBoxStatuses(groupStatuses);
          },
          rows: group.details.map((row, rowIndex) => ({
            cells: [
              { value: row.title },
              { value: row.date },
              { value: Digits.formalize(row.amount), alignRight: true },
              { value: Digits.formalize(row.tax), alignRight: true },
            ],
            checked: checkBoxStatuses[groupIndex][rowIndex],
            onChangeCheckBox: (e) => {
              const groupStatuses = [...checkBoxStatuses];
              const rowStatuses = [...checkBoxStatuses[groupIndex]];
              rowStatuses[rowIndex] = e.target.checked;
              groupStatuses[groupIndex] = rowStatuses;
              setCheckBoxStatuses(groupStatuses);
            },
          })),
        };
      })}
      onChangeHeaderCheckBox={(e) => {
        setCheckBoxStatuses(
          Array(sample.length)
            .fill(null)
            .map((_e, i) =>
              Array(sample[i].details.length || 0).fill(e.target.checked)
            )
        );
      }}
      withCheckBox={boolean('withCheckBox', true, 'GroupedListTable')}
      foldable={boolean('foldable', true, 'GroupedListTable')}
      {...commonKnobs()}
    />
  );
};
