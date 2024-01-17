/* eslint-disable react/display-name */
import * as React from 'react';

import { commonKnobs } from '../../../stories';
import ApiComboBox, {
  SingleComboBoxOption,
  useApiComboBox,
} from './ApiComboBox';
import { FormControlGroup, TextField } from '../..';
import { FormControl } from '..';
import { boolean } from '@storybook/addon-knobs';
import { SubSectionTitle } from '../../lv1';
import Button from '../../lv1/buttons/Button';

type Item = {
  id: number;
  name: string;
  shortcut?: string;
  shortcutNum?: string;
  disabled?: boolean;
  other_1?: string;
  other_2?: string;
};

const createMockApi = (suffix: string) => ({
  async fetch({ name, page }: { name: string; page: number }) {
    // eslint-disable-next-line compat/compat
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const limit = 30;
    const items = Array(limit)
      .fill(undefined)
      .map((_, i) => {
        const baseNum = (page - 1) * limit + i + 1;
        return {
          id: baseNum,
          name: `${suffix}_${baseNum}`,
          shortcut: `hinmoku_${baseNum + 1}`,
          shortcutNum: `品目${baseNum + 2}`,
          other_1: `その他の項目A_${baseNum}`,
          other_2: `その他の項目B_${baseNum}`,
        };
      }) as Item[];

    return {
      items: name
        ? items.filter(
            (item) =>
              item.name.indexOf(name) > -1 ||
              (item.shortcut && item.shortcut.indexOf(name) > -1) ||
              (item.shortcutNum && item.shortcutNum.indexOf(name) > -1)
          )
        : items,
      meta: {
        limit,
        currentPage: page,
        totalPages: 100,
        totalCount: 498,
      },
    };
  },
});

export default {
  component: ApiComboBox,
};

export const ApiComboboxComponent = () => {
  const [value, setValue] = React.useState<SingleComboBoxOption>();
  const items = useApiComboBox<Item>({
    fetchItems: createMockApi('item').fetch,
    createOptions: (items) =>
      items.map(
        ({ id, name, shortcut, shortcutNum }): SingleComboBoxOption => ({
          id,
          label: name,
          keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
          disabled: id % 10 === 0,
        })
      ),
  });

  return (
    <ApiComboBox
      value={value}
      createNewItem={(fieldValue?: string) =>
        setValue({ id: 10000, label: fieldValue || '' })
      }
      onChange={(opt) => {
        setValue(opt);
      }}
      {...items}
      borderless={boolean('borderless', false, 'ApiComboBox')}
      {...commonKnobs()}
    />
  );
};

const useFetchItemA = () => {
  return useApiComboBox<Item>({
    fetchItems: createMockApi('item_A').fetch,
    createOptions: (items) =>
      items.map(({ id, name, shortcut, shortcutNum }) => ({
        id,
        label: name,
        keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
      })),
  });
};

const useFetchItemB = () => {
  return useApiComboBox<Item>({
    fetchItems: createMockApi('item_B').fetch,
    createOptions: (items) =>
      items.map(({ id, name, shortcut, shortcutNum }) => ({
        id,
        label: name,
        keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
      })),
  });
};

const useFetchItemC = () => {
  return useApiComboBox<Item>({
    fetchItems: createMockApi('item_C').fetch,
    createOptions: (items) =>
      items.map(({ id, name, shortcut, shortcutNum }) => ({
        id,
        label: name,
        keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
      })),
  });
};

const ComboBoxLine = ({
  id,
  itemA,
  itemB,
  itemC,
}: {
  id: number;
  itemA: ReturnType<typeof useFetchItemA>;
  itemB: ReturnType<typeof useFetchItemB>;
  itemC: ReturnType<typeof useFetchItemC>;
}) => {
  const [valueA, setValueA] = React.useState<SingleComboBoxOption>();
  const [valueB, setValueB] = React.useState<SingleComboBoxOption>();
  const [valueC, setValueC] = React.useState<SingleComboBoxOption>();

  return (
    <FormControlGroup key={id} mt={id > 1 ? 1 : undefined}>
      <FormControl label="id">
        <TextField value={`${id}`} width="xSmall" disabled />
      </FormControl>
      <FormControl label="item_A" ml={1}>
        <ApiComboBox
          value={valueA}
          onChange={(opt) => {
            setValueA(opt);
          }}
          {...itemA}
        />
      </FormControl>
      <FormControl label="item_B" ml={1}>
        <ApiComboBox
          value={valueB}
          onChange={(opt) => {
            setValueB(opt);
          }}
          {...itemB}
        />
      </FormControl>
      <FormControl label="item_C" ml={1}>
        <ApiComboBox
          value={valueC}
          onChange={(opt) => {
            setValueC(opt);
          }}
          {...itemC}
        />
      </FormControl>
    </FormControlGroup>
  );
};

export const MultiLineAndRow = () => {
  const itemA = useFetchItemA();
  const itemB = useFetchItemB();
  const itemC = useFetchItemC();

  return Array(5)
    .fill(undefined)
    .map((_, i) => (
      <ComboBoxLine
        key={i}
        id={i + 1}
        itemA={itemA}
        itemB={itemB}
        itemC={itemC}
      />
    ));
};

const useFetchBankAccount = () => {
  const initialName = '銀行_20';
  const [selectedBank, setSelectedBank] =
    React.useState<SingleComboBoxOption>();
  const [bankNameKana, setBankNameKana] = React.useState<string>();
  const [bankCode, setBankCode] = React.useState<string>();

  const bank = useApiComboBox<Item>({
    initialName,
    fetchItems: createMockApi('銀行').fetch,
    createOptions: (items) =>
      items.map(({ id, name, shortcut, shortcutNum }) => ({
        id,
        label: name,
        keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
      })),
  });

  React.useEffect(() => {
    const initialBank = bank.items.find(({ name }) => name === initialName);

    if (initialBank) {
      setSelectedBank(bank.createOptions([initialBank])[0]);
      setBankNameKana(initialBank.other_1);
      setBankCode(initialBank.other_2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bank.items]);

  return {
    ...bank,
    selectedBank,
    setSelectedBank,
    bankNameKana,
    setBankNameKana,
    bankCode,
    setBankCode,
  };
};

const useFetchBankBranch = (selectedBankLabel?: string) => {
  const [selectedBranch, setSelectedBranch] =
    React.useState<SingleComboBoxOption>();
  const [branchNameKana, setBranchNameKana] = React.useState<string>();
  const [branchCode, setBranchCode] = React.useState<string>();

  const branch = useApiComboBox<Item>({
    fetchItems: createMockApi(`${selectedBankLabel}_支店`).fetch,
    createOptions: (items) =>
      items.map(({ id, name, shortcut, shortcutNum }) => ({
        id,
        label: name,
        keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
      })),
  });

  React.useEffect(() => {
    if (selectedBankLabel) {
      branch.fetchItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBankLabel]);

  React.useEffect(() => {
    if (branch.items.length > 0) {
      setSelectedBranch(branch.createOptions([branch.items[0]])[0]);
      setBranchNameKana(branch.items[0].other_1);
      setBranchCode(branch.items[0].other_2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [branch.items]);

  return {
    ...branch,
    selectedBranch,
    setSelectedBranch,
    branchNameKana,
    setBranchNameKana,
    branchCode,
    setBranchCode,
  };
};

export const UsingWrappedHooksForOtherComponents = () => {
  const {
    selectedBank,
    setSelectedBank,
    bankNameKana,
    setBankNameKana,
    bankCode,
    setBankCode,
    ...bank
  } = useFetchBankAccount();
  const {
    selectedBranch,
    setSelectedBranch,
    branchNameKana,
    setBranchNameKana,
    branchCode,
    setBranchCode,
    ...branch
  } = useFetchBankBranch(selectedBank?.label);

  return (
    <>
      <SubSectionTitle>選択に応じて他のフィールドに値が入る</SubSectionTitle>
      <FormControlGroup mt={0.5}>
        <FormControl label="銀行名">
          <ApiComboBox
            value={selectedBank}
            onChange={(opt) => {
              setSelectedBank(opt);
              setBankNameKana(
                bank.items.find(({ id }) => id === opt?.id)?.other_1
              );
              setBankCode(bank.items.find(({ id }) => id === opt?.id)?.other_2);
            }}
            {...bank}
          />
        </FormControl>
        <FormControl label="銀行名（カナ）" ml={1}>
          <TextField
            value={bankNameKana}
            onChange={(e) => setBankNameKana(e.target.value)}
          />
        </FormControl>
        <FormControl label="銀行コード" ml={1}>
          <TextField
            value={bankCode}
            onChange={(e) => setBankCode(e.target.value)}
          />
        </FormControl>
      </FormControlGroup>
      <FormControlGroup mt={1}>
        <FormControl label="支店名">
          <ApiComboBox
            value={selectedBranch}
            onChange={(opt) => {
              setSelectedBranch(opt);
              setBranchNameKana(
                branch.items.find(({ id }) => id === opt?.id)?.other_1
              );
              setBranchCode(
                branch.items.find(({ id }) => id === opt?.id)?.other_2
              );
            }}
            {...branch}
          />
        </FormControl>
        <FormControl label="支店名（カナ）" ml={1}>
          <TextField
            value={branchNameKana}
            onChange={(e) => setBranchNameKana(e.target.value)}
          />
        </FormControl>
        <FormControl label="支店コード" ml={1}>
          <TextField
            value={branchCode}
            onChange={(e) => setBranchCode(e.target.value)}
          />
        </FormControl>
      </FormControlGroup>
    </>
  );
};

export const ManualFocus = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const onClick = () => {
    ref.current?.focus();
  };
  const [value, setValue] = React.useState<SingleComboBoxOption>();
  const items = useApiComboBox<Item>({
    fetchItems: createMockApi('item').fetch,
    createOptions: (items) =>
      items.map(({ id, name, shortcut, shortcutNum }) => ({
        id,
        label: name,
        keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
      })),
  });

  return (
    <>
      <Button mr={1} onClick={onClick}>
        フォーカスを当てる
      </Button>
      <ApiComboBox
        ref={ref}
        value={value}
        createNewItem={(fieldValue?: string) =>
          setValue({ id: 10000, label: fieldValue || '' })
        }
        onChange={(opt) => {
          setValue(opt);
        }}
        {...items}
        borderless={boolean('borderless', false, 'ApiComboBox')}
      />
    </>
  );
};

export const LongOption = () => {
  const [value, setValue] = React.useState<SingleComboBoxOption>();
  const items = useApiComboBox<Item>({
    fetchItems: createMockApi(
      'LongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongOption'
    ).fetch,
    createOptions: (items) =>
      items.map(({ id, name, shortcut, shortcutNum }) => ({
        id,
        label: name,
        keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
      })),
  });

  return (
    <ApiComboBox
      value={value}
      createNewItem={(fieldValue?: string) =>
        setValue({ id: 10000, label: fieldValue || '' })
      }
      onChange={(opt) => {
        setValue(opt);
      }}
      {...items}
      borderless={boolean('borderless', false, 'ApiComboBox')}
      {...commonKnobs()}
    />
  );
};

export const WithSubLabel = () => {
  const [value, setValue] = React.useState<SingleComboBoxOption>();
  const itemsWithSubLabel = useApiComboBox<Item>({
    fetchItems: createMockApi('item').fetch,
    createOptions: (items) =>
      items.map(({ id, name, shortcut, shortcutNum }) => ({
        id,
        label: name,
        subLabel: shortcut,
        keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
      })),
  });

  return (
    <ApiComboBox
      value={value}
      createNewItem={(fieldValue?: string) =>
        setValue({ id: 10000, label: fieldValue || '' })
      }
      onChange={(opt) => {
        setValue(opt);
      }}
      {...itemsWithSubLabel}
      borderless={boolean('borderless', false, 'ApiComboBox')}
      {...commonKnobs()}
    />
  );
};
