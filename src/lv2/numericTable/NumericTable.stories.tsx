import * as React from 'react';

import NumericTable, {
  NumericTableHeader,
  NumericTableRow,
} from './NumericTable';
import { commonKnobs } from '../../../stories';
import { action } from '@storybook/addon-actions';
import ScrollableBase from '../../lv1/bases/ScrollableBase';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';

const sampleHeaders: Array<NumericTableHeader> = [
  {
    value: 'テーブル見出し',
    ordering: 'asc',
    onClick: action('header cell click'),
  },
  { value: 'テーブル見出しソート不可' },
  {
    value: 'テーブル見出しちょっと長い',
    alignCenter: true,
    onClick: action('header cell click'),
  },
  {
    value: 'テーブル見出し',
    alignRight: true,
    onClick: action('header cell click'),
  },
];

const sampleRows: Array<NumericTableRow> = [
  {
    cells: [
      { value: 'テーブル内容' },
      { value: 'クリック可能', onClick: action('cell click') },
      { value: 'テーブル内容', alignCenter: true },
      { value: '¥10,000', alignRight: true },
    ],
  },
  {
    cells: [
      { value: 'テーブル内容' },
      { value: 'テーブル内容' },
      { value: 'テーブル内容', alignCenter: true },
      { value: '¥10,000', alignRight: true },
    ],
  },
  {
    cells: [
      { value: 'クリック可能', onClick: action('cell click') },
      { value: 'クリック可能', onClick: action('cell click') },
      {
        value: 'クリック可能',
        onClick: action('cell click'),
        alignCenter: true,
      },
      {
        value: '¥10,000',
        alignRight: true,
        onClick: action('cell click'),
      },
    ],
  },
  {
    cells: [
      { value: 'テーブル内容' },
      { value: 'テーブル内容' },
      { value: 'テーブル内容', alignCenter: true },
      { value: '¥10,000', alignRight: true },
    ],
  },
  {
    cells: [
      {
        value: 'exampleexampleexampleexampleexampleexample@example.com',
        breakWord: true,
      },
      { value: 'テーブル内容' },
      { value: 'テーブル内容', alignCenter: true },
      { value: '¥10,000', alignRight: true },
    ],
  },
  {
    cells: [
      { value: 'ステータスつけれれるよ' },
      { value: 'alert', status: 'alert' },
      { value: 'notice', status: 'notice' },
      { value: 'success', status: 'success' },
    ],
  },
];

export default {
  component: NumericTable,
};

export const NumericTableComponent = () => (
  <NumericTable headers={sampleHeaders} rows={sampleRows} {...commonKnobs()} />
);

export const HeaderCellWithNoWrap = () => (
  <NumericTable
    headers={[
      {
        noWrap: true,
        value:
          '折り返さないヘッダ折り返さないヘッダ折り返さないヘッダ折り返さないヘッダ折り返さないヘッダ',
      },
      {
        value:
          '折り返すヘッダ折り返すヘッダ折り返すヘッダ折り返すヘッダ折り返すヘッダ折り返すヘッダ',
      },
    ]}
    rows={[{ cells: [{ value: 'column' }, { value: 'column' }] }]}
  />
);

export const CellWithNoWrap = () => (
  <NumericTable
    headers={[
      { value: 'column(minWidth: 12rem)', minWidth: 12 },
      { value: 'column' },
      { value: 'column' },
      { value: 'column' },
      { value: 'column' },
    ]}
    rows={Array(50).fill({
      //50くらいあれば1画面埋まるくらいになるやろ
      cells: [
        { value: 'column' },
        { value: 'example@example.com', noWrap: true },
        { value: 'example@example.com', noWrap: true },
        {
          value:
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          noWrap: true,
        },
        { value: 'column', noWrap: true },
      ],
    })}
  />
);

export const FixedHeaderAndFixedRowHeader = () => (
  <ScrollableBase scrollableX scrollableY>
    <div style={{ height: '50vh' }}>
      <NumericTable
        fixedHeader={true}
        fixedHeaderOffset={0}
        rowHeaderCount={1}
        fixedRowHeader={true}
        {...commonKnobs()}
        headers={[
          { value: '', minWidth: 20 },
          { value: 'column-01', minWidth: 20 },
          { value: 'column-02', minWidth: 20 },
          { value: 'column-03', minWidth: 20 },
          { value: 'column-04', minWidth: 20 },
          { value: 'column-05', minWidth: 20 },
          { value: 'column-06', minWidth: 20 },
          { value: 'column-07', minWidth: 20 },
          { value: 'column-08', minWidth: 20 },
          { value: 'column-09', minWidth: 20 },
        ]}
        rows={[...new Array(50)].map((_, i) => ({
          cells: [
            { value: `rowHeader-${String(i + 1).padStart(2, '0')}` },
            { value: `value-${String(i + 1).padStart(2, '0')}-01` },
            { value: `value-${String(i + 1).padStart(2, '0')}-02` },
            { value: `value-${String(i + 1).padStart(2, '0')}-03` },
            { value: `value-${String(i + 1).padStart(2, '0')}-04` },
            { value: `value-${String(i + 1).padStart(2, '0')}-05` },
            { value: `value-${String(i + 1).padStart(2, '0')}-06` },
            { value: `value-${String(i + 1).padStart(2, '0')}-07` },
            { value: `value-${String(i + 1).padStart(2, '0')}-08` },
            { value: `value-${String(i + 1).padStart(2, '0')}-09` },
          ],
        }))}
      />
    </div>
  </ScrollableBase>
);

export const FixedTwoRowHeaderAndFixedRowHeader = () => {
  const headers = [
    { value: '取引先', width: 10, minWidth: 10 },
    { value: '品目', width: 10, minWidth: 10 },
    { value: '2022-01', minWidth: 6, alignRight: true },
    { value: '2022-02', minWidth: 6, alignRight: true },
    { value: '2022-03', minWidth: 6, alignRight: true },
    { value: '2022-04', minWidth: 6, alignRight: true },
    { value: '2022-05', minWidth: 6, alignRight: true },
    { value: '2022-06', minWidth: 6, alignRight: true },
    { value: '2022-07', minWidth: 6, alignRight: true },
    { value: '2022-08', minWidth: 6, alignRight: true },
    { value: '2022-09', minWidth: 6, alignRight: true },
  ];

  const parentData = [...Array(10)].map((_, i) => ({
    id: i + 1,
    name: '取引先' + String(i + 1).padStart(2, '0'),
  }));
  const parentChildMap = parentData.map((parent) => ({
    parentId: parent.id,
    childData: [...Array(3)].map((_, i) => ({
      id: i + 1,
      name: '品目' + String(i + 1).padStart(2, '0'),
    })),
  }));

  const rows: Array<NumericTableRow> = parentData.flatMap(
    ({ id, name: parentName }) => {
      const parentRow: NumericTableRow = {
        cells: [
          { value: parentName },
          { value: '' },
          ...[...Array(headers.length - 2)].map(() => ({
            value: '300',
            alignRight: true,
          })),
        ],
      };

      const childRows: Array<NumericTableRow> = (
        parentChildMap.find((m) => m.parentId === id)?.childData || []
      ).map(({ name: childName }) => ({
        cells: [
          { value: <VisuallyHidden>{parentName}</VisuallyHidden> },
          { value: childName },
          ...[...Array(headers.length - 2)].map(() => ({
            value: '100',
            alignRight: true,
          })),
        ],
      }));

      return [parentRow].concat(childRows);
    }
  );

  return (
    <ScrollableBase scrollableX scrollableY>
      <div style={{ height: '50vh' }}>
        <NumericTable
          fixedHeader={true}
          rowHeaderCount={2}
          fixedRowHeader={true}
          {...commonKnobs()}
          headers={headers}
          rows={rows}
        />
      </div>
    </ScrollableBase>
  );
};

export const WithCheckBox = () => {
  const [checkedStatus, setCheckedStatus] = React.useState<boolean[]>(
    Array(2).fill(false)
  );
  const handleChangeHeaderCheckBox = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedStatus(() => Array(2).fill(e.target.checked));
    },
    []
  );
  const handleChangeCheckBox = React.useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedStatus((prev) =>
        prev
          .slice(0, index)
          .concat(e.target.checked)
          .concat(prev.slice(index + 1))
      );
    },
    []
  );

  return (
    <NumericTable
      withCheckBox
      onChangeHeaderCheckBox={handleChangeHeaderCheckBox}
      headers={[
        { value: '氏名' },
        { value: 'メールアドレス' },
        { value: 'ステータス' },
      ]}
      rows={[
        {
          checked: checkedStatus[0],
          onChangeCheckBox: handleChangeCheckBox(0),
          checkBoxName: 'row0',
          checkBoxValue: 'row0',
          cells: [
            { value: '伊藤 美穂' },
            { value: 'ito-miho@example.com' },
            { value: '完了' },
          ],
        },
        {
          checked: checkedStatus[1],
          onChangeCheckBox: handleChangeCheckBox(1),
          checkBoxName: 'row1',
          checkBoxValue: 'row1',
          cells: [
            { value: '佐藤 雄太' },
            { value: 'sato-yuta@example.com' },
            { value: '未登録' },
          ],
        },
      ]}
    />
  );
};

export const WithCheckBoxWithoutHeaderCheckBox = () => {
  const [checkedStatus, setCheckedStatus] = React.useState<boolean[]>(
    Array(2).fill(false)
  );
  const handleChangeCheckBox = React.useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedStatus((prev) =>
        prev
          .slice(0, index)
          .concat(e.target.checked)
          .concat(prev.slice(index + 1))
      );
    },
    []
  );

  return (
    <NumericTable
      withCheckBox
      headers={[
        { value: '不要行', width: 5 },
        { value: '氏名' },
        { value: 'メールアドレス' },
        { value: 'ステータス' },
      ]}
      rows={[
        {
          checked: checkedStatus[0],
          onChangeCheckBox: handleChangeCheckBox(0),
          checkBoxName: 'row0',
          checkBoxValue: 'row0',
          cells: [
            { value: '伊藤 美穂' },
            { value: 'ito-miho@example.com' },
            { value: '完了' },
          ],
        },
        {
          checked: checkedStatus[1],
          onChangeCheckBox: handleChangeCheckBox(1),
          checkBoxName: 'row1',
          checkBoxValue: 'row1',
          cells: [
            { value: '佐藤 雄太' },
            { value: 'sato-yuta@example.com' },
            { value: '未登録' },
          ],
        },
      ]}
    />
  );
};
