/* eslint-disable react/display-name */
import * as React from 'react';

import { commonKnobs } from '../../../stories';
import ApiMultiComboBox, {
  MultiComboBoxOption,
  useApiMultiComboBox,
} from './ApiMultiComboBox';
import { FormControlGroup, TextField } from '../..';
import { FormControl } from '..';
import { boolean, text } from '@storybook/addon-knobs';

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
    await new Promise((resolve) => setTimeout(resolve, 3000));

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
  component: ApiMultiComboBox,
};

export const ApiMultiComboBoxComponent = () => {
  const [values, setValues] = React.useState<MultiComboBoxOption[]>();
  const items = useApiMultiComboBox<Item>({
    fetchItems: createMockApi('item').fetch,
    createOptions: (items) =>
      items.map(({ id, name, shortcut, shortcutNum }) => ({
        id,
        label: name,
        keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
      })),
  });

  return (
    <ApiMultiComboBox
      id={text('id', 'apimulticombobox-id', 'ApiMultiComboBox')}
      values={values}
      createNewItem={(fieldValue: string) => {
        if (!fieldValue) return;
        setValues((values) => [
          ...(values ?? []),
          { id: 10000, label: fieldValue },
        ]);
      }}
      onChange={(options) => {
        setValues(options);
      }}
      {...items}
      borderless={boolean('borderless', false, 'ApiMultiComboBox')}
      {...commonKnobs()}
    />
  );
};

const useFetchItemA = () => {
  return useApiMultiComboBox<Item>({
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
  return useApiMultiComboBox<Item>({
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
  return useApiMultiComboBox<Item>({
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
  const [valuesA, setValuesA] = React.useState<MultiComboBoxOption[]>();
  const [valuesB, setValuesB] = React.useState<MultiComboBoxOption[]>();
  const [valuesC, setValuesC] = React.useState<MultiComboBoxOption[]>();

  return (
    <FormControlGroup key={id} mt={id > 1 ? 1 : undefined}>
      <FormControl label="id">
        <TextField value={`${id}`} width="xSmall" disabled />
      </FormControl>
      <FormControl label="item_A" ml={1}>
        <ApiMultiComboBox
          values={valuesA}
          onChange={(opt) => {
            setValuesA(opt);
          }}
          {...itemA}
        />
      </FormControl>
      <FormControl label="item_B" ml={1}>
        <ApiMultiComboBox
          values={valuesB}
          onChange={(opt) => {
            setValuesB(opt);
          }}
          {...itemB}
        />
      </FormControl>
      <FormControl label="item_C" ml={1}>
        <ApiMultiComboBox
          values={valuesC}
          onChange={(opt) => {
            setValuesC(opt);
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

export const SingleSelect = () => {
  const [values, setValues] = React.useState<MultiComboBoxOption[]>();
  const items = useApiMultiComboBox<Item>({
    fetchItems: createMockApi('item').fetch,
    createOptions: (items) =>
      items.map(({ id, name, shortcut, shortcutNum }) => ({
        id,
        label: name,
        keywords: [shortcut, shortcutNum].filter((v) => v) as string[],
      })),
  });

  return (
    <ApiMultiComboBox
      values={values}
      createNewItem={(fieldValue: string) => {
        if (!fieldValue) return;
        setValues((values) => [
          ...(values ?? []),
          { id: 10000, label: fieldValue },
        ]);
      }}
      onChange={(options) => {
        setValues(options);
      }}
      {...items}
      borderless={boolean('borderless', false, 'ApiMultiComboBox')}
      maxSelectionCount={1}
      {...commonKnobs()}
    />
  );
};
