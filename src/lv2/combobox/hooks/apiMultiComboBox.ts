import React, { FormEvent, useCallback } from 'react';
import {
  ApiMetaData,
  FetchParams,
  initialFetchParams,
  MultiComboBoxOption,
  useFetchItems,
  useFetchItemsForComboBox,
  useMultiComboBox,
} from '.';

export const useApiMultiComboBoxInternal = ({
  createNewItem,
  currentPage,
  fetchItems,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  options,
  totalPages,
  values,
  maxSelectionCount,
}: {
  createNewItem?: (fieldValue: string) => void;
  currentPage: number;
  fetchItems: (params: FetchParams) => Promise<any>;
  onBlur?: (
    e: FormEvent,
    fetchParams: FetchParams,
    values?: MultiComboBoxOption[]
  ) => void;
  onChange?: (options: MultiComboBoxOption[]) => void;
  onFocus?: () => void;
  onKeyDown?: React.KeyboardEventHandler;
  options: MultiComboBoxOption[];
  totalPages: number;
  values: MultiComboBoxOption[];
  maxSelectionCount?: number;
}) => {
  const {
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
  } = useMultiComboBox({
    values,
    options,
    onChange,
    onKeyDown,
    maxSelectionCount,
    alreadyFilteredByFieldValue: true,
  });
  const { isLoadingMore, fetchParams, debouncedFetchItems, loadMore } =
    useFetchItems({
      fieldValue,
      currentPage,
      fetchItems,
      totalPages,
    });

  const onFieldBlur = useCallback(
    (e) => {
      setOpen(false);
      setFieldValue('');
      if (onBlur) {
        onBlur(e, fetchParams, values);
      }
    },
    [fetchParams, onBlur, setFieldValue, setOpen, values]
  );

  const onFieldChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
      const newFieldValue = (e.target as HTMLInputElement).value;

      setFieldValue(newFieldValue);
      setSelectedIndex(0);
      setOpen(true);
      await debouncedFetchItems({ ...initialFetchParams, name: newFieldValue });
      // onChange はoption確定時に呼ぶのでここでは呼ばない
    },
    [debouncedFetchItems, setFieldValue, setOpen, setSelectedIndex]
  );

  const onFieldFocus = useCallback(() => {
    (!maxSelectionCount || values.length < maxSelectionCount) && setOpen(true);
    if (onFocus) {
      onFocus();
    }
  }, [onFocus, setOpen, maxSelectionCount, values]);

  const onSelectOption = useCallback(
    (option: MultiComboBoxOption) => {
      setFieldValue('');
      setSelectedIndex(0);
      if (onChange) {
        onChange([...values, option]);
      }
      // もっと見るが出ている状態で全て選択し切ったら、loadMore()する
      if (
        filteredOptions.filter(({ id }) => id !== option.id).length === 0 &&
        currentPage < totalPages
      ) {
        loadMore();
      }
    },
    [
      currentPage,
      filteredOptions,
      loadMore,
      onChange,
      setFieldValue,
      setSelectedIndex,
      totalPages,
      values,
    ]
  );

  const onRemoveOption = useCallback(
    (option: MultiComboBoxOption) => {
      if (onChange && values) {
        onChange(values.filter((v) => v.id !== option.id));
      }
    },
    [onChange, values]
  );

  const onClickNewItem = useCallback(
    async (fieldValue: string) => {
      if (!createNewItem) return;

      createNewItem(fieldValue);
      setFieldValue('');
    },
    [createNewItem, setFieldValue]
  );

  const onFieldKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      handleKeyDown(
        e,
        currentPage < totalPages ? loadMore : undefined,
        !filteredOptions.find(({ label }) => label === fieldValue)
          ? onClickNewItem
          : undefined
      );
    },
    [
      currentPage,
      fieldValue,
      filteredOptions,
      handleKeyDown,
      loadMore,
      onClickNewItem,
      totalPages,
    ]
  );

  return {
    filteredOptions,
    isLoadingMore,
    loadMore,
    fieldValue,
    isOpen,
    setOpen,
    selectedIndex,
    listOptionsRef,
    selectedOptionRef,
    borderRef,
    onFieldBlur,
    onFieldChange,
    onFieldFocus,
    onFieldKeyDown,
    onSelectOption,
    onRemoveOption,
    onClickNewItem,
  };
};

/**
 * ApiMultiComboBoxのためにAPIをラップし、以下の機能を付与します。
 *
 * - 複数のApiMultiComboBoxで利用するためのリソース管理
 * - ローディング状態の管理
 * - 初期化時のAPI呼び出し
 * - フォーカス時の挙動制御
 *
 * このhooksの利用は必須ではありません。
 *
 */
export const useApiMultiComboBox = <T, E = never>({
  createOptions,
  fetchItems,
  fetchOnInit,
  responseAdapter,
}: {
  createOptions: (items: T[]) => MultiComboBoxOption<E>[];
  fetchItems: (params: FetchParams) => Promise<any>;
  /**
   * 初期化時にfetchを一回呼ぶ
   */
  fetchOnInit?: boolean;
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
    responseAdapter,
  });

  const onFocus = () => {
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
     * ApiMultiComboBox の props としては使用しないが、useApiMultiComboBox で取得したリソースを
     * 他のコンポーネントから参照・編集したいケースのために返している
     */
    items,
    createOptions,
    setItems: (newItems: T[]) => setResponse({ items: newItems, meta }),
    setMeta: (newMeta: ApiMetaData) => setResponse({ items, meta: newMeta }),
  };
};
