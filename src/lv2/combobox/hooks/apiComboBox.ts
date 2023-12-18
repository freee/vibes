import { FormEvent, useCallback } from 'react';
import { KeyCodes } from '../../../utilities/keyboard';
import {
  useComboBox,
  SingleComboBoxOption,
  FetchParams,
  initialFetchParams,
  ApiMetaData,
  useFetchItems,
  useFetchItemsForComboBox,
} from '.';

export const useApiComboBoxInternal = ({
  createNewItem,
  currentPage,
  fetchItems,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  options,
  totalPages,
  value,
}: {
  createNewItem?: (fieldValue: string) => void;
  currentPage: number;
  fetchItems: (params: FetchParams) => Promise<any>;
  onBlur?: (
    e: FormEvent,
    fetchParams: FetchParams,
    value?: SingleComboBoxOption
  ) => void;
  onChange?: (option?: SingleComboBoxOption) => void;
  onFocus?: (
    e: FormEvent,
    fetchParams: FetchParams,
    isFieldChanged: boolean,
    value?: SingleComboBoxOption
  ) => void;
  onKeyDown?: React.KeyboardEventHandler;
  options: SingleComboBoxOption[];
  totalPages: number;
  value?: SingleComboBoxOption;
}) => {
  const {
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
  } = useComboBox({ value });
  const { isLoadingMore, fetchParams, debouncedFetchItems, loadMore } =
    useFetchItems({
      fieldValue,
      currentPage,
      fetchItems,
      totalPages,
      isFieldChanged,
    });

  const handleSelectOption = useCallback(
    (option?: SingleComboBoxOption): void => {
      setFieldValue(option ? option.label : '');
      if (onChange) {
        onChange(option);
      }
    },
    [onChange, setFieldValue]
  );

  const onFieldFocus = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      setOpen(true);
      setSelectedIndex(value ? options.indexOf(value) : -1);

      if (onFocus) {
        onFocus(e, fetchParams, isFieldChanged, value);
      }
    },
    [
      setOpen,
      setSelectedIndex,
      value,
      options,
      onFocus,
      fetchParams,
      isFieldChanged,
    ]
  );

  const onFieldBlur = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      const filteredByLabelOptions = options.filter(
        (option: SingleComboBoxOption) => option.label === fieldValue
      );
      const labelMatchedOption =
        filteredByLabelOptions.length === 1
          ? filteredByLabelOptions[0]
          : undefined;
      if (labelMatchedOption) {
        handleSelectOption(labelMatchedOption);
      } else if (!fieldValue) {
        handleSelectOption();
      } else if (value) {
        setFieldValue(value.label);
      }
      setOpen(false);
      setSelectedIndex(-1);
      setIsFieldChanged(false);
      if (onBlur) {
        onBlur(e, fetchParams, value);
      }
    },
    [
      options,
      fieldValue,
      value,
      setOpen,
      setSelectedIndex,
      setIsFieldChanged,
      onBlur,
      handleSelectOption,
      setFieldValue,
      fetchParams,
    ]
  );

  const onFieldChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
      const newFieldValue = (e.target as HTMLInputElement).value;

      const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : null;
      const selectedOptionIndex = selectedOption
        ? options.indexOf(selectedOption)
        : -1;

      setFieldValue(newFieldValue);
      setOpen(true);
      setIsFieldChanged(true);
      setSelectedIndex(selectedOptionIndex);
      await debouncedFetchItems({ ...initialFetchParams, name: newFieldValue });
      // onChange はoption確定時に呼ぶのでここでは呼ばない
    },
    [
      selectedIndex,
      options,
      setFieldValue,
      setOpen,
      setIsFieldChanged,
      setSelectedIndex,
      debouncedFetchItems,
    ]
  );

  const onSelectOption = useCallback(
    (option: SingleComboBoxOption): void => {
      handleSelectOption(option);
      setOpen(false);
    },
    [handleSelectOption, setOpen]
  );

  const onFieldKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      const items = [
        ...options,
        currentPage < totalPages && 'loadMore',
        createNewItem &&
          !options.find(({ label }) => label === fieldValue) &&
          'createNewItem',
      ].filter((v) => v) as (
        | SingleComboBoxOption
        | 'loadMore'
        | 'createNewItem'
      )[];

      switch (e.keyCode) {
        case KeyCodes.UP:
          if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
          } else {
            setSelectedIndex(items.length - 1);
          }
          e.preventDefault();
          break;
        case KeyCodes.DOWN:
          if (selectedIndex >= 0 && selectedIndex < items.length - 1) {
            setSelectedIndex(selectedIndex + 1);
          } else {
            setSelectedIndex(0);
          }
          e.preventDefault();
          break;
        case KeyCodes.ENTER:
          if (selectedIndex >= 0) {
            const item = items[selectedIndex];

            if (item === 'loadMore') {
              loadMore();
            } else if (item === 'createNewItem') {
              if (createNewItem) {
                createNewItem(fieldValue);
                setOpen(false);
              }
            } else {
              onSelectOption(item);
            }
          }
          e.preventDefault();
          break;
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [
      options,
      currentPage,
      totalPages,
      createNewItem,
      onKeyDown,
      fieldValue,
      selectedIndex,
      setSelectedIndex,
      loadMore,
      setOpen,
      onSelectOption,
    ]
  );

  return {
    fieldValue,
    isLoadingMore,
    isOpen,
    listOptionsRef,
    loadMore,
    onFieldBlur,
    onFieldChange,
    onFieldFocus,
    onFieldKeyDown,
    onSelectOption,
    selectedIndex,
    selectedOptionRef,
  };
};

/**
 * ApiComboBoxのためにAPIをラップし、以下の機能を付与します。
 *
 * - 複数のApiComboBoxで利用するためのリソース管理
 * - ローディング状態の管理
 * - 初期化時のAPI呼び出し
 * - フォーカス時の挙動制御
 *
 * このhooksの利用は必須ではありません。
 *
 */
export const useApiComboBox = <T, E = never>({
  createOptions,
  fetchItems,
  fetchOnInit,
  initialName,
  responseAdapter,
}: {
  createOptions: (items: T[]) => SingleComboBoxOption<E>[];
  fetchItems: (params: FetchParams) => Promise<any>;
  /**
   * 初期化時にfetchを一回呼ぶ
   */
  fetchOnInit?: boolean;
  /**
   * 初期値としてセットするアイテム名
   */
  initialName?: string;
  /**
   * APIレスポンスの形が合わない場合に整形する
   */
  responseAdapter?: (response: any) => { items: T[]; meta: ApiMetaData };
}) => {
  const {
    items,
    meta,
    options,
    setResponse,
    isLoading,
    hasFetched,
    currentFetchParams,
    fetchItemsForComboBox,
  } = useFetchItemsForComboBox<T>({
    createOptions,
    fetchItems,
    fetchOnInit,
    initialName,
    responseAdapter,
  });

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const onFocus = (
    _e: FormEvent,
    _fetchParams: FetchParams,
    _isFieldChanged: boolean,
    _value?: SingleComboBoxOption
  ) => {
    /* eslint-enable @typescript-eslint/no-unused-vars */
    const nextFetchParams = {
      name: '',
      page: 1,
    };

    if (
      !hasFetched ||
      nextFetchParams.name !== currentFetchParams.name ||
      nextFetchParams.page !== currentFetchParams.page
    ) {
      fetchItemsForComboBox(nextFetchParams);
    }
  };

  return {
    fetchItems: fetchItemsForComboBox,
    isLoading,
    meta,
    onFocus,
    options,
    /**
     * ApiComboBox の props としては使用しないが、useApiComboBox で取得したリソースを
     * 他のコンポーネントから参照・編集したいケースのために返している
     */
    items,
    createOptions,
    setItems: (newItems: T[]) => setResponse({ items: newItems, meta }),
    setMeta: (newMeta: ApiMetaData) => setResponse({ items, meta: newMeta }),
  };
};
