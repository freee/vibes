import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { commonKnobs } from '../../../stories';

import JumpButton from '../../lv1/buttons/JumpButton';
import Checkbox from '../../lv1/forms/CheckBox';
import Button from '../../lv1/buttons/Button';
import FullScreenModal from '../../lv2/modals/FullScreenModal';

import ListTable, { TableHeader } from './ListTable';
import Paragraph from '../../lv1/typography/Paragraph';
import MessageIcon from '../messageIcon/MessageIcon';
import ScrollableBase from '../../lv1/bases/ScrollableBase';
import { boolean, number } from '@storybook/addon-knobs';
import { Order } from '../../lv1/lists/TableListHeadCell';

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
    'data-test': '左寄せソート不可',
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
      { value: 'テーブルリスト', 'data-test': '1つめのセル' },
      {
        value: (
          <>
            テーブルリスト
            <MessageIcon label="ヘルプ">hoge</MessageIcon>
          </>
        ),
        'data-test': '2つめのセル',
      },
      {
        value: 'テーブルリスト',
        alignCenter: true,
        'data-test': '3つめのセル',
      },
      {
        value: 10000000,
        alignRight: true,
        small: true,
        'data-test': '4つめのセル',
      },
    ],
    'data-test': '行',
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
      { value: 'テーブルリスト、上寄せ', alignTop: true },
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
  {
    cells: [
      { value: 'テーブルリスト' },
      { value: 'テーブルリスト' },
      {
        value: '結合セル',
        colSpan: 2,
        alignCenter: true,
      },
    ],
  },
];

export default {
  component: ListTable,
};

export const ListTableComponent = () => (
  <ListTable
    withCheckBox={boolean('withCheckBox', false, 'ListTable')}
    fixedHeader={boolean('fixedHeader', false, 'ListTable')}
    fixedHeaderOffset={number('fixedHeaderOffset', 0, {}, 'ListTable')}
    fitContent={boolean('fitContent', false, 'ListTable')}
    {...commonKnobs()}
    headers={headers}
    rows={rows}
  />
);

const CheckBoxSample = () => {
  const [statuses, setStatuses] = React.useState<boolean[]>(
    Array(2).fill(false)
  );
  const updateStatus = (value: boolean, index: number) => {
    const newStatuses = [...statuses];
    newStatuses[index] = value;
    setStatuses(newStatuses);
  };

  return (
    <ListTable
      withCheckBox
      onChangeHeaderCheckBox={(e) => {
        setStatuses(statuses.map(() => e.target.checked));
      }}
      fixedHeader={boolean('fixedHeader', false, 'ListTable')}
      fixedHeaderOffset={number('fixedHeaderOffset', 0, {}, 'ListTable')}
      headers={[
        { value: '氏名' },
        { value: 'メールアドレス' },
        { value: 'ステータス' },
      ]}
      rows={[
        {
          checked: statuses[0],
          onChangeCheckBox: (e) => updateStatus(e.target.checked, 0),
          checkBoxName: 'row0',
          checkBoxValue: 'row0',
          onClick: action('rowClick'),
          cells: [
            { value: '伊藤 美穂' },
            { value: 'ito-miho@example.com' },
            { value: '完了' },
          ],
        },
        {
          checked: statuses[1],
          onChangeCheckBox: (e) => updateStatus(e.target.checked, 1),
          url: 'https://www.freee.co.jp',
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
export const WithCheckBox = () => <CheckBoxSample />;

export const WithSomeDisabledCheckBox = () => {
  const [statuses, setStatuses] = React.useState<boolean[]>(
    Array(3).fill(false)
  );

  const onChangeHeaderCheckBox = (e: any) => {
    const newStatuses = Array(rows.length).fill(e.target.checked);
    rows.forEach((row, i) => {
      if (row.checkBoxDisabled) {
        newStatuses[i] = false;
      }
    });
    setStatuses(newStatuses);
  };

  const onChangeRowCheckBox = (value: boolean, index: number) => {
    const newStatuses = [...statuses];
    newStatuses[index] = value;
    setStatuses(newStatuses);
  };

  const headers = [
    { value: '氏名' },
    { value: 'メールアドレス' },
    { value: 'ステータス' },
  ];

  const rows = [
    {
      checked: statuses[0],
      onChangeCheckBox: (e: any) => onChangeRowCheckBox(e.target.checked, 0),
      checkBoxDisabled: false,
      checkBoxName: 'row0',
      checkBoxValue: 'row0',
      onClick: action('rowClick'),
      cells: [
        { value: '伊藤 美穂' },
        { value: 'ito-miho@example.com' },
        { value: '完了' },
      ],
    },
    {
      checked: statuses[1],
      onChangeCheckBox: (e: any) => onChangeRowCheckBox(e.target.checked, 1),
      url: 'https://www.freee.co.jp',
      checkBoxDisabled: true,
      checkBoxName: 'row1',
      checkBoxValue: 'row1',
      cells: [
        { value: '佐藤 雄太' },
        { value: 'sato-yuta@example.com' },
        { value: '未登録' },
      ],
    },
    {
      checked: statuses[2],
      onChangeCheckBox: (e: any) => onChangeRowCheckBox(e.target.checked, 2),
      url: 'https://www.freee.co.jp',
      checkBoxDisabled: false,
      checkBoxName: 'row2',
      checkBoxValue: 'row2',
      cells: [
        { value: '山田 太郎' },
        { value: 'yamada-taro@example.com' },
        { value: '保留' },
      ],
    },
  ];

  return (
    <ListTable
      withCheckBox
      onChangeHeaderCheckBox={onChangeHeaderCheckBox}
      fixedHeader={boolean('fixedHeader', false, 'ListTable')}
      fixedHeaderOffset={number('fixedHeaderOffset', 0, {}, 'ListTable')}
      headers={headers}
      rows={rows}
    />
  );
};

export const WithCheckBoxAndNoRows = () => {
  return (
    <ListTable
      headers={[
        { value: '氏名' },
        { value: 'メールアドレス' },
        { value: 'ステータス' },
      ]}
      onChangeHeaderCheckBox={() => undefined}
      rows={[]}
      withCheckBox
    />
  );
};

export const HeaderCellWithNoWrap = () => {
  return (
    <ListTable
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
};

export const FixedHeader = () => (
  <ScrollableBase scrollableX scrollableY>
    <div style={{ height: '50vh' }}>
      <ListTable
        fixedHeader={true}
        fixedHeaderOffset={0}
        {...commonKnobs()}
        headers={[
          { value: 'column-01', minWidth: 20 },
          { value: 'column-02', minWidth: 20 },
          { value: 'column-03', minWidth: 20 },
          { value: 'column-04', minWidth: 20 },
          { value: 'column-05', minWidth: 20 },
          { value: 'column-06', minWidth: 20 },
          { value: 'column-07', minWidth: 20 },
          { value: 'column-08', minWidth: 20 },
          { value: 'column-09', minWidth: 20 },
          { value: 'column-10', minWidth: 20 },
        ]}
        rows={[...new Array(50)].map((_, i) => ({
          cells: [
            { value: `value-${String(i + 1).padStart(2, '0')}-01` },
            { value: `value-${String(i + 1).padStart(2, '0')}-02` },
            { value: `value-${String(i + 1).padStart(2, '0')}-03` },
            { value: `value-${String(i + 1).padStart(2, '0')}-04` },
            { value: `value-${String(i + 1).padStart(2, '0')}-05` },
            { value: `value-${String(i + 1).padStart(2, '0')}-06` },
            { value: `value-${String(i + 1).padStart(2, '0')}-07` },
            { value: `value-${String(i + 1).padStart(2, '0')}-08` },
            { value: `value-${String(i + 1).padStart(2, '0')}-09` },
            { value: `value-${String(i + 1).padStart(2, '0')}-10` },
          ],
        }))}
      />
    </div>
  </ScrollableBase>
);

export const RowClickForReactRouter = () => (
  <>
    <Paragraph marginBottom>
      react-router等で、クリック時にデフォルトとは違う挙動（pushStateなど）をさせたい場合には
      <code>onSelfWindowNavigation</code> を使用します
    </Paragraph>
    <ListTable
      headers={[{ value: 'col1' }, { value: 'col2' }, { value: 'col3' }]}
      rows={[
        {
          url: 'https://www.freee.co.jp/',
          onSelfWindowNavigation: action('selfWindowNavigation'),
          cells: [{ value: 'col1' }, { value: 'col2' }, { value: 'col3' }],
        },
        {
          url: 'https://www.freee.co.jp/',
          onSelfWindowNavigation: action('selfWindowNavigation'),
          cells: [{ value: 'col1' }, { value: 'col2' }, { value: 'col3' }],
        },
        {
          url: 'https://www.freee.co.jp/',
          onSelfWindowNavigation: action('selfWindowNavigation'),
          cells: [{ value: 'col1' }, { value: 'col2' }, { value: 'col3' }],
        },
        {
          url: 'https://www.freee.co.jp/',
          onSelfWindowNavigation: action('selfWindowNavigation'),
          cells: [
            {
              value: (
                <>
                  col1
                  <br />
                  col1
                  <br />
                  col1
                  <br />
                </>
              ),
            },
            { value: 'col2' },
            { value: 'col3' },
          ],
        },
      ]}
      fixedHeader={boolean('fixedHeader', false, 'ListTable')}
      fixedHeaderOffset={number('fixedHeaderOffset', 0, {}, 'ListTable')}
    ></ListTable>
  </>
);

export const ApplyDataMaskingToCell = () => (
  <>
    <Paragraph marginBottom>
      行動追跡ツールで要素にマスキングを設定する一つの方法として、TableCellに個別でマスキングをかけたい場合、cellに
      <code>&#39;data-masking&#39;&#58; true</code>を指定して使用します
    </Paragraph>
    <ListTable
      headers={[{ value: 'col1' }, { value: 'col2' }, { value: 'col3' }]}
      rows={[
        {
          cells: [
            { value: 'cell1' },
            { value: 'cell2' },
            { value: 'マスキング適用cell', 'data-masking': true },
          ],
        },
      ]}
    ></ListTable>
  </>
);

export const ApplFitContent = () => (
  <>
    <Paragraph marginBottom>
      横幅を画面いっぱいまで広げたくない場合は
      <code>&#39;fitContent&#39;&#58; true</code>を指定して使用します
    </Paragraph>
    <ListTable
      fitContent
      headers={[{ value: 'col1' }, { value: 'col2' }, { value: 'col3' }]}
      rows={[
        {
          cells: [{ value: 'cell1' }, { value: 'cell2' }, { value: 'cell3' }],
        },
      ]}
    ></ListTable>
  </>
);

export const OnModalWithButton = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    action('click row and close the modal');
    setIsOpen(false);
  };

  return (
    <>
      <Paragraph mb={1}>
        行を Enter
        で選択しモーダルが閉じた直後、ボタンにフォーカスがあたるが、そのまま再度モーダルが開いてしまうことはない。
      </Paragraph>
      <Button
        onClick={() => {
          action('click button to open the modal');
          setIsOpen(true);
        }}
      >
        open
      </Button>
      <FullScreenModal
        title="モーダル"
        isOpen={isOpen}
        onRequestClose={() => {
          action('close modal');
          setIsOpen(false);
        }}
      >
        <ListTable
          headers={[{ value: '漢字' }, { value: 'よみ' }]}
          rows={[
            {
              cells: [{ value: '蟀谷' }, { value: 'こめかみ' }],
              onClick: handleClick,
            },
            {
              cells: [{ value: '膕' }, { value: 'ひがかみ' }],
              onClick: handleClick,
            },
            {
              cells: [{ value: '踝' }, { value: 'くるぶし' }],
              onClick: handleClick,
            },
            {
              cells: [{ value: '自由' }, { value: 'ふりー' }],
              url: 'https://www.freee.co.jp/',
            },
          ]}
        />
      </FullScreenModal>
    </>
  );
};

export const WithSortIconAndNoRows = () => {
  const data = [
    { id: 1, value: '砂糖' },
    { id: 2, value: '塩' },
    { id: 3, value: '酢' },
    { id: 4, value: '醤油' },
    { id: 5, value: '味噌' },
  ];

  const [rows, setRows] = React.useState(data);
  const [sortKey, setSortKey] = React.useState<'id' | 'value'>('id');
  const [sortOrder, setSortOrder] = React.useState<Order>('init');

  const nextOrder: { [key in Order]: Order } = {
    init: 'asc',
    asc: 'desc',
    desc: 'init',
  };

  type SortKeyT = 'id' | 'value';
  const changeSort = (key: SortKeyT) => {
    setSortKey(key);
    setSortOrder((prev) => (key === sortKey ? nextOrder[prev] : 'asc'));
  };

  React.useEffect(() => {
    if (sortOrder === 'init') {
      setRows(data);
    } else {
      const sorted = data;
      sorted.sort(
        (a, b) =>
          (typeof a[sortKey] === 'number' && typeof b[sortKey] === 'number'
            ? Number(a[sortKey]) - Number(b[sortKey])
            : String(a[sortKey]).localeCompare(String(b[sortKey]))) *
          (sortOrder === 'desc' ? -1 : 1)
      );
      setRows(sorted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortKey, sortOrder]);

  return (
    <>
      <Paragraph mb={1}>
        TableHeaderのorderingに応じて、矢印アイコンが表示されます。
      </Paragraph>
      <ListTable
        headers={[
          {
            value: 'id',
            ordering: sortKey === 'id' ? sortOrder : 'init',
            onClick: () => changeSort('id'),
          },
          {
            value: 'value',
            ordering: sortKey === 'value' ? sortOrder : 'init',
            onClick: () => changeSort('value'),
          },
        ]}
        rows={rows.map((data) => ({
          cells: [{ value: data.id }, { value: data.value }],
        }))}
        fitContent
      />
    </>
  );
};
