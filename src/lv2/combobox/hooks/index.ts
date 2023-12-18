import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import vbClassName from '../../../utilities/vbClassNames';
import type { TextFieldWidth } from '../../../lv1/forms/TextField';
import { MiniTag } from '../../tagBox/MiniTag';
import { debounce } from 'throttle-debounce';
import { KeyCodes, Keys } from '../../../utilities/keyboard';

export type ComboBoxOption = {
  label: string;
  id: string | number;
  keywords?: string[];
  disabled?: boolean;
};

export type MultiComboBoxOption<E = never> = ComboBoxOption & {
  type?: string;
  extras?: E;
} & Pick<Parameters<typeof MiniTag>[0], 'color'>;

export type SingleComboBoxOption<E = never> = ComboBoxOption & {
  subLabel?: string;
  extras?: E;
};

export type InternalComboBoxOption = ComboBoxOption & {
  isTrailingItem?: boolean;
  fixedItemType?: 'more' | 'add';
} & Pick<SingleComboBoxOption, 'subLabel'>;

export type FixedItem = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect: (fieldValue: string) => any;
  isVisible?: (
    fieldValue: string,
    filteredOptions: ComboBoxOption[]
  ) => boolean;
  label?: (fieldValue: string) => string;
};

// TODO: [more: FixedItem, add?: FixedItem] TypeScript 4.0~
export type FixedItems = [FixedItem] | [FixedItem, FixedItem];

export type FetchParams = {
  name: string;
  page: number;
};

export type ApiMetaData = {
  limit: number;
  currentPage: number;
  totalPages: number;
  totalCount: number;
};

export const initialFetchParams = {
  name: '',
  page: 1,
};

// 選択肢のリストのスクロール位置を調整する
const adjustListOptionsScroll = (
  listOptionsElement: HTMLDivElement,
  selectedOptionElement: HTMLDivElement
) => {
  const selectedRect = selectedOptionElement.getBoundingClientRect();
  const listRect = listOptionsElement.getBoundingClientRect();
  if (selectedRect.bottom > listRect.bottom) {
    listOptionsElement.scrollTop =
      selectedRect.bottom +
      listOptionsElement.scrollTop -
      listRect.top -
      listRect.height;
  } else if (selectedRect.top < listRect.top) {
    listOptionsElement.scrollTop =
      selectedRect.top + listOptionsElement.scrollTop - listRect.top;
  }
};

export const useComboBox = ({ value }: { value?: ComboBoxOption }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<string>(
    value ? value.label : ''
  );
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isFieldChanged, setIsFieldChanged] = useState<boolean>(false);

  const listOptionsRef = useRef<HTMLDivElement>(null);
  const selectedOptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      return;
    }
    setFieldValue(value ? value.label : '');
  }, [value, setFieldValue, isOpen]);

  useEffect(() => {
    if (
      isOpen &&
      listOptionsRef.current &&
      selectedOptionRef.current &&
      selectedIndex !== -1
    ) {
      adjustListOptionsScroll(
        listOptionsRef.current,
        selectedOptionRef.current
      );
    }
  }, [isOpen, listOptionsRef, selectedOptionRef, selectedIndex]);

  return {
    fieldValue,
    isOpen,
    isFieldChanged,
    listOptionsRef,
    selectedIndex,
    selectedOptionRef,
    setFieldValue,
    setOpen,
    setIsFieldChanged,
    setSelectedIndex,
  };
};

export const useMultiComboBox = ({
  values,
  options,
  onChange,
  onKeyDown,
  maxSelectionCount,
  alreadyFilteredByFieldValue,
}: {
  values: MultiComboBoxOption[];
  options: MultiComboBoxOption[];
  onChange?: (values: MultiComboBoxOption[]) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  maxSelectionCount?: number;
  alreadyFilteredByFieldValue?: boolean;
}) => {
  const [fieldValue, setFieldValue] = useState<string>('');
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectedOptionRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLSpanElement>(null);
  const listOptionsRef = useRef<HTMLDivElement>(null);

  const filteredOptions = useMemo(() => {
    const filteredOptions = options.filter(
      (opt) =>
        !values.find((v) => v.id === opt.id) &&
        (alreadyFilteredByFieldValue ||
          opt.label.includes(fieldValue) ||
          opt.keywords?.some((k) => k.includes(fieldValue)))
    );

    const result = [
      ...filteredOptions.filter((option) => option.label === fieldValue),
      ...filteredOptions.filter((option) => option.label !== fieldValue),
    ];

    return result;
  }, [options, values, fieldValue, alreadyFilteredByFieldValue]);

  useEffect(() => {
    if (
      isOpen &&
      listOptionsRef.current &&
      selectedOptionRef.current &&
      selectedIndex !== -1
    ) {
      adjustListOptionsScroll(
        listOptionsRef.current,
        selectedOptionRef.current
      );
    }
  }, [isOpen, listOptionsRef, selectedOptionRef, selectedIndex]);

  const onSelectOption = useCallback(
    (option: MultiComboBoxOption) => {
      if (
        option.disabled ||
        (maxSelectionCount && values.length >= maxSelectionCount)
      ) {
        return;
      }
      setFieldValue('');
      setSelectedIndex(0);
      if (onChange) {
        onChange([...values, option]);
      }
    },
    [onChange, values, maxSelectionCount]
  );

  const onRemoveOption = useCallback(
    (option: MultiComboBoxOption) => {
      if (onChange && values) {
        onChange(values.filter((v) => v.id !== option.id));
      }
    },
    [onChange, values]
  );

  const handleKeyDown = useCallback(
    (
      e: React.KeyboardEvent<HTMLInputElement>,
      loadMore?: () => void,
      onClickNewItem?: (fieldValue: string) => void
    ) => {
      const items = [
        ...filteredOptions,
        loadMore && 'loadMore',
        onClickNewItem && 'onClickNewItem',
      ].filter((v) => v) as (
        | MultiComboBoxOption
        | 'loadMore'
        | 'onClickNewItem'
      )[];

      switch (e.key) {
        case Keys.UP:
          if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
          } else {
            setSelectedIndex(items.length - 1);
          }
          e.preventDefault();
          break;
        case Keys.DOWN:
          if (selectedIndex >= 0 && selectedIndex < items.length - 1) {
            setSelectedIndex(selectedIndex + 1);
          } else {
            setSelectedIndex(0);
          }
          e.preventDefault();
          break;
        case Keys.ENTER:
          // KeyboardEvent.keys では変換確定のEnterを除外する方法がない
          // KeyboardEvent.isComposing (e.nativeEvent.isComposing) でも macOS Safari で変換確定のEnterではfalseになってしまったので、ここだけ keyCodeを使用している
          if (
            e.keyCode === KeyCodes.ENTER &&
            selectedIndex >= 0 &&
            items[selectedIndex]
          ) {
            const item = items[selectedIndex];

            if (item === 'loadMore') {
              if (loadMore) {
                loadMore();
              }
            } else if (item === 'onClickNewItem') {
              if (onClickNewItem) {
                onClickNewItem(fieldValue);
              }
            } else {
              onSelectOption(item);
            }
          }
          e.preventDefault();
          break;
        case Keys.BACKSPACE:
          if (fieldValue.length === 0 && values.length > 0) {
            onRemoveOption(values[values.length - 1]);
          }
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [
      fieldValue,
      filteredOptions,
      onKeyDown,
      onRemoveOption,
      onSelectOption,
      selectedIndex,
      values,
    ]
  );

  return {
    fieldValue,
    setFieldValue,
    isOpen,
    setOpen,
    selectedIndex,
    setSelectedIndex,
    borderRef,
    selectedOptionRef,
    listOptionsRef,
    filteredOptions,
    handleKeyDown,
    onSelectOption,
    onRemoveOption,
  };
};

export const useAdjustListPosition = (
  isOpen: boolean,
  ref?: React.Ref<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>
) => {
  const tmpTextFieldRef = useRef<HTMLInputElement>();
  const textFieldRef = (ref ||
    tmpTextFieldRef) as React.MutableRefObject<HTMLInputElement>;
  const [listOptionsMaxHeight, setListOptionsMaxHeight] =
    useState<string>('15vh');
  // listOptionsMaxHeight が画面からはみ出さないようにtextFieldRefの位置を基準に
  // 15vh ~ 50vh 間で調整
  useEffect(() => {
    if (!(textFieldRef.current && isOpen)) {
      return;
    }
    const { top, height } = textFieldRef.current.getBoundingClientRect();
    setListOptionsMaxHeight(
      `${Math.min(
        Math.max(
          15,
          Math.round(
            ((window.innerHeight - (top + height)) / window.innerHeight) * 100
          ) - 1
        ),
        50
      )}vh`
    );
  }, [isOpen, textFieldRef]);

  return {
    textFieldRef,
    listOptionsMaxHeight,
  };
};

export const createListBoxClassName = ({
  isOpen,
  width,
  listWidth,
}: {
  isOpen: boolean;
  listWidth?: 'xSmall' | 'small' | 'medium' | 'large';
  width?: TextFieldWidth;
}) =>
  vbClassName('vb-comboBox__listBox', {
    modifier: {
      open: isOpen,
      widthXSmall: listWidth === 'xSmall' || (!listWidth && width === 'xSmall'),
      widthSmall: listWidth === 'small' || (!listWidth && width === 'small'),
      widthMedium:
        listWidth === 'medium' ||
        (!listWidth && (!width || width === 'medium')),
      widthLarge: listWidth === 'large' || (!listWidth && width === 'large'),
    },
  });

export const useFetchItems = ({
  fieldValue,
  currentPage,
  fetchItems,
  totalPages,
  isFieldChanged,
}: {
  fieldValue: string;
  currentPage: number;
  fetchItems: (params: FetchParams) => Promise<any>;
  totalPages: number;
  isFieldChanged?: boolean;
}) => {
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [fetchParams, setFetchParams] =
    useState<FetchParams>(initialFetchParams);
  const debouncedFetchItems = useMemo(
    () =>
      debounce(300, async (params: FetchParams) => {
        try {
          if (params.page > 1) {
            setIsLoadingMore(true);
          }
          await fetchItems(params);
          setFetchParams(params);
        } finally {
          setIsLoadingMore(false);
        }
      }),
    [fetchItems]
  );

  const loadMore = useCallback(() => {
    debouncedFetchItems({
      name: isFieldChanged === false ? '' : fieldValue,
      page: Math.min(currentPage + 1, totalPages),
    });
  }, [
    currentPage,
    debouncedFetchItems,
    isFieldChanged,
    fieldValue,
    totalPages,
  ]);

  return {
    isLoadingMore,
    fetchParams,
    debouncedFetchItems,
    loadMore,
  };
};

export const useFetchItemsForComboBox = <T>({
  createOptions,
  fetchItems,
  fetchOnInit,
  initialName,
  responseAdapter,
}: {
  createOptions: (items: T[]) => ComboBoxOption[];
  fetchItems: (params: FetchParams) => Promise<any>;
  fetchOnInit?: boolean;
  initialName?: string;
  responseAdapter?: (response: any) => { items: T[]; meta: ApiMetaData };
}) => {
  const [{ items, meta }, setResponse] = useState<{
    items: T[];
    meta: ApiMetaData;
  }>({
    items: [],
    meta: {
      limit: 30,
      currentPage: 1,
      totalPages: 1,
      totalCount: 0,
    },
  });
  const options = useMemo(
    () => createOptions(items),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items]
  );

  const [currentFetchParams, setCurrentFetchParams] = useState<FetchParams>({
    name: initialName || initialFetchParams.name,
    page: initialFetchParams.page,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasFetched, setHasFetched] = useState<boolean>(false);
  const fetchItemsForComboBox = useCallback(
    async ({
      name,
      page,
    }: Parameters<typeof fetchItems>[0] = currentFetchParams) => {
      setIsLoading(true);
      try {
        let response = await fetchItems({ name, page });
        if (responseAdapter) {
          response = responseAdapter(response);
        }

        setResponse({
          ...response,
          items: page > 1 ? [...items, ...response.items] : response.items,
        });
        setHasFetched(true);
        setCurrentFetchParams({ name, page });
      } finally {
        setIsLoading(false);
      }
    },
    [currentFetchParams, fetchItems, responseAdapter, setResponse, items]
  );

  useEffect(() => {
    if (fetchOnInit || initialName) {
      fetchItemsForComboBox();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    items,
    meta,
    options,
    setResponse,
    isLoading,
    hasFetched,
    currentFetchParams,
    fetchItemsForComboBox,
  };
};
