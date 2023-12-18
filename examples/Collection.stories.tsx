import * as React from 'react';
import { MdAdd, MdFilterList } from 'react-icons/md';
import Collection from './Collection.mdx';

import {
  Container,
  ContentsBase,
  Breadcrumbs,
  MarginBase,
  JumpButton,
  Button,
  SearchField,
  SelectBox,
  Paragraph,
  WithSideContent,
  ListTable,
  HeadlineArea,
  DropdownButton,
  Pagination,
  Pager,
  Digits,
  FormControl,
  FormControlGroup,
  TextField,
  DigitsInput,
  DateInput,
  ColumnBase,
  SectionTitle,
  VisuallyHidden,
  NoSearchResults,
  NoDataCreated,
} from '../src';
import { Order } from '../src/lv1/lists/TableListHeadCell';

export default {
  title: 'examples/Collection',
  parameters: { docs: { page: Collection } },
};

type ListElm = {
  title: string;
  user: string;
  amount: number;
  status: string;
  date: string;
};
const useData = () => {
  const data: ListElm[] = [
    {
      title: '打ち合わせ費用',
      user: 'フリー太郎',
      amount: 100000,
      status: '申請中',
      date: '2020-10-01',
    },
    {
      title: '書籍購入費',
      user: 'user.email@example.com',
      amount: 123000,
      status: '申請中',
      date: '2020-09-23',
    },
    {
      title: '交通費',
      user: '佐々木大輔',
      amount: 2000,
      status: '精算済',
      date: '2020-10-11',
    },
    {
      title: 'UFO撮影ロケ',
      user: '五反田花子',
      amount: 3000000,
      status: '却下',
      date: '2020-09-12',
    },
    {
      title: 'ツチノコ捜索費',
      user: '三田次郎',
      amount: 1000000,
      status: '申請中',
      date: '2020-11-01',
    },
    {
      title: 'オフィス備品',
      user: 'フリー太郎',
      amount: 48000,
      status: '精算済',
      date: '2020-09-12',
    },
    {
      title: '書籍購入費',
      user: 'user.email@example.com',
      amount: 2800,
      status: '申請中',
      date: '2020-10-12',
    },
    {
      title: 'ネコのエサ代',
      user: '三田次郎',
      amount: 3000,
      status: '申請中',
      date: '2020-10-27',
    },
    {
      title: '駐車場代',
      user: 'フリー太郎',
      amount: 4000,
      status: '申請中',
      date: '2020-10-05',
    },
    {
      title: 'PC用品',
      user: '五反田花子',
      amount: 800000,
      status: '申請中',
      date: '2020-10-21',
    },
  ];

  const [sortKey, setSortKey] = React.useState<keyof ListElm>('date');
  const [sortOrder, setSortOrder] = React.useState<Order>('desc');
  const [statuses, setStatuses] = React.useState<boolean[]>(
    Array(data.length).fill(false)
  );

  const nextOrder: { [key in Order]: Order } = {
    asc: 'desc',
    desc: 'init',
    init: 'asc',
  };

  const sort = (newKey: keyof ListElm) => {
    if (sortKey === newKey) {
      setSortOrder((prev) => nextOrder[prev]);
    } else {
      setSortKey(newKey);
      setSortOrder('asc');
    }
    // ソートしたときはチェックボックスの状態をリセット
    setStatuses(Array(data.length).fill(false));
  };

  const changeAllStatus = (newStatus: boolean) => {
    setStatuses(Array(data.length).fill(newStatus));
  };

  const changeRowStatus = (newStatus: boolean, rowIndex: number) => {
    const newStatuses = statuses.slice();
    newStatuses[rowIndex] = newStatus;
    setStatuses(newStatuses);
  };

  const sortedData =
    sortOrder === 'init'
      ? data
      : data
          .slice()
          .sort(
            (a, b) =>
              (typeof a[sortKey] === 'number' && typeof b[sortKey] === 'number'
                ? Number(a[sortKey]) - Number(b[sortKey])
                : String(a[sortKey]).localeCompare(String(b[sortKey]))) *
              (sortOrder === 'desc' ? -1 : 1)
          );

  const noResults: ListElm[] = [];

  return {
    sortKey,
    sortOrder,
    statuses,
    sort,
    sortedData,
    noResults,
    changeRowStatus,
    changeAllStatus,
  };
};

export const CollectionPage = () => {
  const {
    sort,
    sortKey,
    sortOrder,
    statuses,
    sortedData,
    changeAllStatus,
    changeRowStatus,
  } = useData();

  return (
    <Container width="wide">
      <ContentsBase>
        <Breadcrumbs
          mb={1}
          links={[
            { title: 'ホーム', url: '/' },
            { title: '申請一覧', url: '/path/' },
          ]}
        />
        <HeadlineArea
          pageTitle="コレクション表示"
          relatedMenus={
            <>
              <JumpButton url="/path/to/related/1" mr={1}>
                関連機能1
              </JumpButton>
              <JumpButton url="/path/to/related/2" mr={1}>
                関連機能2
              </JumpButton>
              <DropdownButton
                dropdownContents={[
                  {
                    type: 'selectable',
                    url: '/path/to/service1',
                    text: 'サービス1',
                    target: '_blank',
                  },
                  {
                    type: 'selectable',
                    url: '/path/to/service2',
                    text: 'サービス2',
                    target: '_blank',
                  },
                  { type: 'rule' },
                  {
                    type: 'selectable',
                    url: '/path/to/service3',
                    text: '関連するアプリを探す',
                    target: '_blank',
                  },
                ]}
                buttonLabel="関連サービス・アプリ"
              />
            </>
          }
        >
          これはコレクション表示のサンプルです。ここにはこの画面の説明を書きます。説明が必要ないような画面だったら無理して書かなくてええんやで。
        </HeadlineArea>
        <MarginBase mb={1}>
          <Button IconComponent={MdAdd} mr={1}>
            新規追加
          </Button>
          <JumpButton url="/path/to/import">インポート</JumpButton>
        </MarginBase>
        <MarginBase mb={2}>
          <SearchField
            width="large"
            placeholder="タイトル、ユーザー名、メールアドレスなどで検索"
            marginRight
            marginSize="small"
          />
          <Button>検索</Button>
        </MarginBase>

        <WithSideContent
          mb={1}
          sideContent={
            <>
              <Pagination
                rowsPerPageOptions={[
                  { value: '10' },
                  { value: '20' },
                  { value: '50' },
                  { value: '100' },
                  { value: '200' },
                ]}
                rowsPerPageValue={20}
                currentPage={1}
                rowCount={999}
                mr={1}
              />
              <DropdownButton
                buttonLabel="エクスポート"
                dropdownContents={[
                  {
                    type: 'selectable',
                    text: 'CSV形式でエクスポート',
                  },
                  {
                    type: 'selectable',
                    text: 'JSON形式でエクスポート',
                  },
                  { type: 'rule' },
                  {
                    type: 'selectable',
                    text: 'エクスポート履歴',
                  },
                ]}
              />
            </>
          }
        >
          <DropdownButton
            buttonLabel="一括操作"
            dropdownContents={[
              {
                type: 'selectable',
                text: 'ステータスを変更',
              },
              { type: 'selectable', text: '削除' },
            ]}
            mr={0.5}
          />
          {statuses.filter((e) => e).length > 0 && (
            <Paragraph inline>
              {statuses.filter((e) => e).length}件を選択中
            </Paragraph>
          )}
        </WithSideContent>
        <ListTable
          mr={-1.5}
          ml={-1.5}
          headers={[
            {
              value: 'タイトル',
              minWidth: 15,
              onClick: () => sort('title'),
              ordering: (sortKey == 'title' && sortOrder) || 'init',
            },
            {
              value: 'ユーザー',
              minWidth: 10,
              onClick: () => sort('user'),
              ordering: (sortKey == 'user' && sortOrder) || 'init',
            },
            {
              value: '金額',
              minWidth: 5,
              alignRight: true,
              onClick: () => sort('amount'),
              ordering: (sortKey == 'amount' && sortOrder) || 'init',
            },
            {
              value: 'ステータス',
              onClick: () => sort('status'),
              ordering: (sortKey == 'status' && sortOrder) || 'init',
            },
            {
              value: '作成日',
              onClick: () => sort('date'),
              ordering: (sortKey == 'date' && sortOrder) || 'init',
            },
            { value: '操作' },
          ]}
          onChangeHeaderCheckBox={(e) => changeAllStatus(e.target.checked)}
          rows={sortedData.map((row, i) => ({
            checked: statuses[i],
            onChangeCheckBox: (e) => {
              changeRowStatus(e.target.checked, i);
            },
            url: `/path/to/single/${i}`,
            cells: [
              { value: row.title },
              { value: row.user, breakWord: true },
              { value: Digits.formalize(row.amount), alignRight: true },
              { value: row.status },
              { value: row.date },
              {
                value: (
                  <>
                    <Button mr={0.5} small appearance="tertiary">
                      コピー
                    </Button>
                    <Button mr={0.5} danger small appearance="tertiary">
                      削除
                    </Button>
                  </>
                ),
              },
            ],
          }))}
          withCheckBox
        ></ListTable>
        <Pager
          currentPage={1}
          pageCount={99}
          onPageChange={() => {
            /* 2ページ目以降作ってないので許して */
          }}
        />
      </ContentsBase>
    </Container>
  );
};

export const ListTableWithCheckBox = () => {
  const {
    sort,
    sortKey,
    sortOrder,
    statuses,
    sortedData,
    changeAllStatus,
    changeRowStatus,
  } = useData();

  return (
    <>
      <ListTable
        mr={-1.5}
        ml={-1.5}
        headers={[
          {
            value: 'タイトル',
            minWidth: 15,
            onClick: () => sort('title'),
            ordering: (sortKey == 'title' && sortOrder) || 'init',
          },
          {
            value: 'ユーザー',
            minWidth: 10,
            onClick: () => sort('user'),
            ordering: (sortKey == 'user' && sortOrder) || 'init',
          },
          {
            value: '金額',
            minWidth: 5,
            alignRight: true,
            onClick: () => sort('amount'),
            ordering: (sortKey == 'amount' && sortOrder) || 'init',
          },
          {
            value: 'ステータス',
            onClick: () => sort('status'),
            ordering: (sortKey == 'status' && sortOrder) || 'init',
          },
          {
            value: '作成日',
            onClick: () => sort('date'),
            ordering: (sortKey == 'date' && sortOrder) || 'init',
          },
          { value: '操作' },
        ]}
        onChangeHeaderCheckBox={(e) => changeAllStatus(e.target.checked)}
        rows={sortedData.map((row, i) => ({
          checked: statuses[i],
          onChangeCheckBox: (e) => {
            changeRowStatus(e.target.checked, i);
          },
          url: `/path/to/single/${i}`,
          cells: [
            { value: row.title },
            { value: row.user, breakWord: true },
            { value: Digits.formalize(row.amount), alignRight: true },
            { value: row.status },
            { value: row.date },
            {
              value: (
                <>
                  <Button mr={0.5} small appearance="tertiary">
                    コピー
                  </Button>
                  <Button mr={0.5} danger small appearance="tertiary">
                    削除
                  </Button>
                </>
              ),
            },
          ],
        }))}
        withCheckBox
      ></ListTable>
      <Pager
        currentPage={1}
        pageCount={99}
        onPageChange={() => {
          /* 2ページ目以降作ってないので許して */
        }}
      />
    </>
  );
};

export const FilteredObjectsActionArea = () => (
  <WithSideContent
    mb={1}
    sideContent={
      <>
        <Pagination
          rowsPerPageOptions={[
            { value: '10' },
            { value: '20' },
            { value: '50' },
            { value: '100' },
            { value: '200' },
          ]}
          rowsPerPageValue={20}
          currentPage={1}
          rowCount={999}
          mr={1}
        />
        <DropdownButton
          buttonLabel="エクスポート"
          dropdownContents={[
            {
              type: 'selectable',
              text: 'CSV形式でエクスポート',
            },
            {
              type: 'selectable',
              text: 'JSON形式でエクスポート',
            },
            { type: 'rule' },
            {
              type: 'selectable',
              text: 'エクスポート履歴',
            },
          ]}
        />
      </>
    }
  >
    <DropdownButton
      buttonLabel="一括操作"
      dropdownContents={[
        {
          type: 'selectable',
          text: 'ステータスを変更',
        },
        { type: 'selectable', text: '削除' },
      ]}
    />
  </WithSideContent>
);

export const AllObjectsActionArea = () => (
  <>
    <MarginBase mb={1}>
      <Button IconComponent={MdAdd} mr={1}>
        新規追加
      </Button>
      <JumpButton url="/path/to/import">インポート</JumpButton>
    </MarginBase>
    <MarginBase mb={2}>
      <SearchField
        width="large"
        placeholder="タイトル、ユーザー名、メールアドレスなどで検索"
        marginRight
        marginSize="small"
      />
      <Button>検索</Button>
    </MarginBase>
  </>
);

export const WithComplexFilter = () => {
  const {
    sort,
    sortKey,
    sortOrder,
    statuses,
    sortedData,
    changeAllStatus,
    changeRowStatus,
  } = useData();

  return (
    <Container width="wide">
      <ContentsBase>
        <Breadcrumbs
          mb={1}
          links={[
            { title: 'ホーム', url: '/' },
            { title: '申請一覧', url: '/path/' },
          ]}
        />
        <HeadlineArea
          pageTitle="コレクション表示"
          relatedMenus={
            <>
              <JumpButton url="/path/to/related/1" mr={1}>
                関連機能1
              </JumpButton>
              <JumpButton url="/path/to/related/2" mr={1}>
                関連機能2
              </JumpButton>
              <DropdownButton
                dropdownContents={[
                  {
                    type: 'selectable',
                    url: '/path/to/service1',
                    text: 'サービス1',
                    target: '_blank',
                  },
                  {
                    type: 'selectable',
                    url: '/path/to/service2',
                    text: 'サービス2',
                    target: '_blank',
                  },
                  { type: 'rule' },
                  {
                    type: 'selectable',
                    url: '/path/to/service3',
                    text: '関連するアプリを探す',
                    target: '_blank',
                  },
                ]}
                buttonLabel="関連サービス・アプリ"
              />
            </>
          }
        >
          これはコレクション表示のサンプルです。ここにはこの画面の説明を書きます。説明が必要ないような画面だったら無理して書かなくてええんやで。
        </HeadlineArea>
        <MarginBase mb={1}>
          <Button IconComponent={MdAdd} mr={1}>
            新規追加
          </Button>
          <JumpButton url="/path/to/import">インポート</JumpButton>
        </MarginBase>
        <ColumnBase paddingSize="small" mb={2}>
          <WithSideContent
            verticalAlign="middle"
            sideContent={
              <Button appearance="tertiary">検索条件をクリア</Button>
            }
          >
            <SectionTitle>検索条件</SectionTitle>
          </WithSideContent>
          <FormControlGroup>
            <FormControl label="タイトル" fieldId="form1-title" mr={1} mb={1}>
              <TextField id="form1-title" />
            </FormControl>
            <FormControl label="ユーザー" fieldId="form1-user" mr={1} mb={1}>
              <TextField id="form1-user" width="small" />
            </FormControl>
            <FormControl label="金額" mr={1} mb={1}>
              <DigitsInput nullable label="金額の下限" width="small" />
              〜
              <DigitsInput nullable label="金額の上限" width="small" />
            </FormControl>
            <FormControl
              label="ステータス"
              fieldId="form1-status"
              mr={1}
              mb={1}
            >
              <SelectBox
                options={[
                  { name: '申請中' },
                  { name: '精算済' },
                  { name: '却下' },
                ]}
                id="form1-status"
                width="small"
              />
            </FormControl>
            <FormControl label="日付" mr={1} mb={1}>
              <DateInput label="日付の下限" width="small" />
              〜
              <DateInput label="日付の上限" width="small" />
            </FormControl>
          </FormControlGroup>
          <Button IconComponent={MdFilterList}>絞り込む</Button>
        </ColumnBase>

        <VisuallyHidden>
          {/* 検索条件の見出しを立てているため、一覧部分にも視覚的には見えないかたちで見出しを立てる */}
          <SectionTitle>申請の一覧</SectionTitle>
        </VisuallyHidden>
        <WithSideContent
          mb={1}
          sideContent={
            <>
              <Pagination
                rowsPerPageOptions={[
                  { value: '10' },
                  { value: '20' },
                  { value: '50' },
                  { value: '100' },
                  { value: '200' },
                ]}
                rowsPerPageValue={20}
                currentPage={1}
                rowCount={999}
                mr={1}
              />
              <DropdownButton
                buttonLabel="エクスポート"
                dropdownContents={[
                  {
                    type: 'selectable',
                    text: 'CSV形式でエクスポート',
                  },
                  {
                    type: 'selectable',
                    text: 'JSON形式でエクスポート',
                  },
                  { type: 'rule' },
                  {
                    type: 'selectable',
                    text: 'エクスポート履歴',
                  },
                ]}
              />
            </>
          }
        >
          <DropdownButton
            buttonLabel="一括操作"
            dropdownContents={[
              {
                type: 'selectable',
                text: 'ステータスを変更',
              },
              { type: 'selectable', text: '削除' },
            ]}
            mr={0.5}
          />
          {statuses.filter((e) => e).length > 0 && (
            <Paragraph inline>
              {statuses.filter((e) => e).length}件を選択中
            </Paragraph>
          )}
        </WithSideContent>
        <ListTable
          mr={-1.5}
          ml={-1.5}
          headers={[
            {
              value: 'タイトル',
              minWidth: 15,
              onClick: () => sort('title'),
              ordering: (sortKey == 'title' && sortOrder) || 'init',
            },
            {
              value: 'ユーザー',
              minWidth: 10,
              onClick: () => sort('user'),
              ordering: (sortKey == 'user' && sortOrder) || 'init',
            },
            {
              value: '金額',
              minWidth: 5,
              alignRight: true,
              onClick: () => sort('amount'),
              ordering: (sortKey == 'amount' && sortOrder) || 'init',
            },
            {
              value: 'ステータス',
              onClick: () => sort('status'),
              ordering: (sortKey == 'status' && sortOrder) || 'init',
            },
            {
              value: '作成日',
              onClick: () => sort('date'),
              ordering: (sortKey == 'date' && sortOrder) || 'init',
            },
            { value: '操作' },
          ]}
          onChangeHeaderCheckBox={(e) => changeAllStatus(e.target.checked)}
          rows={sortedData.map((row, i) => ({
            checked: statuses[i],
            onChangeCheckBox: (e) => {
              changeRowStatus(e.target.checked, i);
            },
            url: `/path/to/single/${i}`,
            cells: [
              { value: row.title },
              { value: row.user, breakWord: true },
              { value: Digits.formalize(row.amount), alignRight: true },
              { value: row.status },
              { value: row.date },
              {
                value: (
                  <>
                    <Button mr={0.5} small appearance="tertiary">
                      コピー
                    </Button>
                    <Button mr={0.5} danger small appearance="tertiary">
                      削除
                    </Button>
                  </>
                ),
              },
            ],
          }))}
          withCheckBox
        ></ListTable>
        <Pager
          currentPage={1}
          pageCount={99}
          onPageChange={() => {
            /* 2ページ目以降作ってないので許して */
          }}
        />
      </ContentsBase>
    </Container>
  );
};

export const WithoutCheckbox = () => {
  const { sort, sortKey, sortOrder, sortedData } = useData();

  return (
    <Container width="wide">
      <ContentsBase>
        <Breadcrumbs
          mb={1}
          links={[
            { title: 'ホーム', url: '/' },
            { title: '申請一覧', url: '/path/' },
          ]}
        />
        <HeadlineArea
          pageTitle="コレクション表示"
          relatedMenus={
            <>
              <JumpButton url="/path/to/related/1" mr={1}>
                関連機能1
              </JumpButton>
              <JumpButton url="/path/to/related/2" mr={1}>
                関連機能2
              </JumpButton>
              <DropdownButton
                dropdownContents={[
                  {
                    type: 'selectable',
                    url: '/path/to/service1',
                    text: 'サービス1',
                    target: '_blank',
                  },
                  {
                    type: 'selectable',
                    url: '/path/to/service2',
                    text: 'サービス2',
                    target: '_blank',
                  },
                  { type: 'rule' },
                  {
                    type: 'selectable',
                    url: '/path/to/service3',
                    text: '関連するアプリを探す',
                    target: '_blank',
                  },
                ]}
                buttonLabel="関連サービス・アプリ"
              />
            </>
          }
        >
          これはコレクション表示のサンプルです。ここにはこの画面の説明を書きます。説明が必要ないような画面だったら無理して書かなくてええんやで。
        </HeadlineArea>
        <MarginBase mb={1}>
          <Button IconComponent={MdAdd} mr={1}>
            新規追加
          </Button>
          <JumpButton url="/path/to/import">インポート</JumpButton>
        </MarginBase>

        <WithSideContent
          mb={1}
          sideContent={
            <>
              <Pagination
                rowsPerPageOptions={[
                  { value: '10' },
                  { value: '20' },
                  { value: '50' },
                  { value: '100' },
                  { value: '200' },
                ]}
                rowsPerPageValue={20}
                currentPage={1}
                rowCount={999}
                mr={1}
              />
              <DropdownButton
                buttonLabel="エクスポート"
                dropdownContents={[
                  {
                    type: 'selectable',
                    text: 'CSV形式でエクスポート',
                  },
                  {
                    type: 'selectable',
                    text: 'JSON形式でエクスポート',
                  },
                  { type: 'rule' },
                  {
                    type: 'selectable',
                    text: 'エクスポート履歴',
                  },
                ]}
              />
            </>
          }
        >
          <SearchField
            width="large"
            placeholder="タイトル、ユーザー名、メールアドレスなどで検索"
            marginRight
            marginSize="small"
          />
          <Button>検索</Button>
        </WithSideContent>
        <ListTable
          mr={-1.5}
          ml={-1.5}
          headers={[
            {
              value: 'タイトル',
              minWidth: 15,
              onClick: () => sort('title'),
              ordering: (sortKey == 'title' && sortOrder) || 'init',
            },
            {
              value: 'ユーザー',
              minWidth: 10,
              onClick: () => sort('user'),
              ordering: (sortKey == 'user' && sortOrder) || 'init',
            },
            {
              value: '金額',
              minWidth: 5,
              alignRight: true,
              onClick: () => sort('amount'),
              ordering: (sortKey == 'amount' && sortOrder) || 'init',
            },
            {
              value: 'ステータス',
              onClick: () => sort('status'),
              ordering: (sortKey == 'status' && sortOrder) || 'init',
            },
            {
              value: '作成日',
              onClick: () => sort('date'),
              ordering: (sortKey == 'date' && sortOrder) || 'init',
            },
            { value: '操作' },
          ]}
          rows={sortedData.map((row, i) => ({
            url: `/path/to/single/${i}`,
            cells: [
              { value: row.title },
              { value: row.user, breakWord: true },
              { value: Digits.formalize(row.amount), alignRight: true },
              { value: row.status },
              { value: row.date },
              {
                value: (
                  <>
                    <Button mr={0.5} small appearance="tertiary">
                      コピー
                    </Button>
                    <Button mr={0.5} danger small appearance="tertiary">
                      削除
                    </Button>
                  </>
                ),
              },
            ],
          }))}
        ></ListTable>
        <Pager
          currentPage={1}
          pageCount={99}
          onPageChange={() => {
            /* 2ページ目以降作ってないので許して */
          }}
        />
      </ContentsBase>
    </Container>
  );
};

export const NoSearchResultsFound = () => {
  const { sort, sortKey, sortOrder, noResults } = useData();

  return (
    <Container width="wide">
      <ContentsBase>
        <Breadcrumbs
          mb={1}
          links={[
            { title: 'ホーム', url: '/' },
            { title: '申請一覧', url: '/path/' },
          ]}
        />
        <HeadlineArea
          pageTitle="コレクション表示"
          relatedMenus={
            <>
              <JumpButton url="/path/to/related/1" mr={1}>
                関連機能1
              </JumpButton>
              <JumpButton url="/path/to/related/2" mr={1}>
                関連機能2
              </JumpButton>
              <DropdownButton
                dropdownContents={[
                  {
                    type: 'selectable',
                    url: '/path/to/service1',
                    text: 'サービス1',
                    target: '_blank',
                  },
                  {
                    type: 'selectable',
                    url: '/path/to/service2',
                    text: 'サービス2',
                    target: '_blank',
                  },
                  { type: 'rule' },
                  {
                    type: 'selectable',
                    url: '/path/to/service3',
                    text: '関連するアプリを探す',
                    target: '_blank',
                  },
                ]}
                buttonLabel="関連サービス・アプリ"
              />
            </>
          }
        >
          これはコレクション表示のサンプルです。ここにはこの画面の説明を書きます。説明が必要ないような画面だったら無理して書かなくてええんやで。
        </HeadlineArea>
        <MarginBase mb={1}>
          <Button IconComponent={MdAdd} mr={1}>
            新規追加
          </Button>
          <JumpButton url="/path/to/import">インポート</JumpButton>
        </MarginBase>

        <WithSideContent
          mb={1}
          sideContent={
            <>
              <Paragraph inline mr={0.5}>
                <label htmlFor="examples__collection__collectionPage__limitSelect">
                  表示件数:
                </label>
              </Paragraph>
              <SelectBox
                id="examples__collection__collectionPage__limitSelect"
                width="xSmall"
                options={[
                  { name: '10件' },
                  { name: '20件' },
                  { name: '50件' },
                  { name: '100件' },
                  { name: '200件' },
                ]}
                mr={1}
              />
              <Paragraph inline mr={1}>
                0 / 0
              </Paragraph>
              <DropdownButton
                buttonLabel="エクスポート"
                dropdownContents={[
                  {
                    type: 'selectable',
                    text: 'CSV形式でエクスポート',
                  },
                  {
                    type: 'selectable',
                    text: 'JSON形式でエクスポート',
                  },
                  { type: 'rule' },
                  {
                    type: 'selectable',
                    text: 'エクスポート履歴',
                  },
                ]}
              />
            </>
          }
        >
          <SearchField
            width="large"
            placeholder="タイトル、ユーザー名、メールアドレスなどで検索"
            marginRight
            marginSize="small"
          />
          <Button>検索</Button>
        </WithSideContent>
        {noResults.length > 0 ? (
          <ListTable
            mr={-1.5}
            ml={-1.5}
            headers={[
              {
                value: 'タイトル',
                minWidth: 15,
                onClick: () => sort('title'),
                ordering: (sortKey == 'title' && sortOrder) || 'init',
              },
              {
                value: 'ユーザー',
                minWidth: 10,
                onClick: () => sort('user'),
                ordering: (sortKey == 'user' && sortOrder) || 'init',
              },
              {
                value: '金額',
                minWidth: 5,
                alignRight: true,
                onClick: () => sort('amount'),
                ordering: (sortKey == 'amount' && sortOrder) || 'init',
              },
              {
                value: 'ステータス',
                onClick: () => sort('status'),
                ordering: (sortKey == 'status' && sortOrder) || 'init',
              },
              {
                value: '作成日',
                onClick: () => sort('date'),
                ordering: (sortKey == 'date' && sortOrder) || 'init',
              },
              { value: '操作' },
            ]}
            rows={noResults.map((row, i) => ({
              url: `/path/to/single/${i}`,
              cells: [
                { value: row.title },
                { value: row.user, breakWord: true },
                { value: Digits.formalize(row.amount), alignRight: true },
                { value: row.status },
                { value: row.date },
                {
                  value: (
                    <>
                      <Button mr={0.5} small appearance="tertiary">
                        コピー
                      </Button>
                      <Button mr={0.5} danger small appearance="tertiary">
                        削除
                      </Button>
                    </>
                  ),
                },
              ],
            }))}
          ></ListTable>
        ) : (
          <NoSearchResults mt={1} />
        )}
      </ContentsBase>
    </Container>
  );
};

export const NoDataCreatedYet = () => {
  const { sort, sortKey, sortOrder, noResults } = useData();

  return (
    <Container width="wide">
      <ContentsBase>
        <Breadcrumbs
          mb={1}
          links={[
            { title: 'ホーム', url: '/' },
            { title: '申請一覧', url: '/path/' },
          ]}
        />
        <HeadlineArea
          pageTitle="コレクション表示"
          relatedMenus={
            <>
              <JumpButton url="/path/to/related/1" mr={1}>
                関連機能1
              </JumpButton>
              <JumpButton url="/path/to/related/2" mr={1}>
                関連機能2
              </JumpButton>
              <DropdownButton
                dropdownContents={[
                  {
                    type: 'selectable',
                    url: '/path/to/service1',
                    text: 'サービス1',
                    target: '_blank',
                  },
                  {
                    type: 'selectable',
                    url: '/path/to/service2',
                    text: 'サービス2',
                    target: '_blank',
                  },
                  { type: 'rule' },
                  {
                    type: 'selectable',
                    url: '/path/to/service3',
                    text: '関連するアプリを探す',
                    target: '_blank',
                  },
                ]}
                buttonLabel="関連サービス・アプリ"
              />
            </>
          }
        >
          これはコレクション表示のサンプルです。ここにはこの画面の説明を書きます。説明が必要ないような画面だったら無理して書かなくてええんやで。
        </HeadlineArea>
        <MarginBase mb={1}>
          <Button IconComponent={MdAdd} mr={1}>
            新規追加
          </Button>
          <JumpButton url="/path/to/import">インポート</JumpButton>
        </MarginBase>

        <WithSideContent
          mb={1}
          sideContent={
            <>
              <Paragraph inline mr={0.5}>
                <label htmlFor="examples__collection__collectionPage__limitSelect">
                  表示件数:
                </label>
              </Paragraph>
              <SelectBox
                id="examples__collection__collectionPage__limitSelect"
                width="xSmall"
                options={[
                  { name: '10件' },
                  { name: '20件' },
                  { name: '50件' },
                  { name: '100件' },
                  { name: '200件' },
                ]}
                mr={1}
              />
              <Paragraph inline mr={1}>
                0 / 0
              </Paragraph>
              <DropdownButton
                buttonLabel="エクスポート"
                dropdownContents={[
                  {
                    type: 'selectable',
                    text: 'CSV形式でエクスポート',
                  },
                  {
                    type: 'selectable',
                    text: 'JSON形式でエクスポート',
                  },
                  { type: 'rule' },
                  {
                    type: 'selectable',
                    text: 'エクスポート履歴',
                  },
                ]}
              />
            </>
          }
        >
          <SearchField
            width="large"
            placeholder="タイトル、ユーザー名、メールアドレスなどで検索"
            marginRight
            marginSize="small"
          />
          <Button>検索</Button>
        </WithSideContent>
        {noResults.length > 0 ? (
          <ListTable
            mr={-1.5}
            ml={-1.5}
            headers={[
              {
                value: 'タイトル',
                minWidth: 15,
                onClick: () => sort('title'),
                ordering: (sortKey == 'title' && sortOrder) || 'init',
              },
              {
                value: 'ユーザー',
                minWidth: 10,
                onClick: () => sort('user'),
                ordering: (sortKey == 'user' && sortOrder) || 'init',
              },
              {
                value: '金額',
                minWidth: 5,
                alignRight: true,
                onClick: () => sort('amount'),
                ordering: (sortKey == 'amount' && sortOrder) || 'init',
              },
              {
                value: 'ステータス',
                onClick: () => sort('status'),
                ordering: (sortKey == 'status' && sortOrder) || 'init',
              },
              {
                value: '作成日',
                onClick: () => sort('date'),
                ordering: (sortKey == 'date' && sortOrder) || 'init',
              },
              { value: '操作' },
            ]}
            rows={noResults.map((row, i) => ({
              url: `/path/to/single/${i}`,
              cells: [
                { value: row.title },
                { value: row.user, breakWord: true },
                { value: Digits.formalize(row.amount), alignRight: true },
                { value: row.status },
                { value: row.date },
                {
                  value: (
                    <>
                      <Button mr={0.5} small appearance="tertiary">
                        コピー
                      </Button>
                      <Button mr={0.5} danger small appearance="tertiary">
                        削除
                      </Button>
                    </>
                  ),
                },
              ],
            }))}
          ></ListTable>
        ) : (
          <NoDataCreated mt={3}>
            <Button appearance="primary" mt={1}>
              新規作成
            </Button>
          </NoDataCreated>
        )}
      </ContentsBase>
    </Container>
  );
};
