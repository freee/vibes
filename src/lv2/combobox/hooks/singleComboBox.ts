import { useState, useCallback, useEffect } from 'react';
import { KeyCodes } from '../../../utilities/keyboard';
import {
  useComboBox,
  SingleComboBoxOption,
  InternalComboBoxOption,
  FixedItem,
  FixedItems,
} from './';

export type TrailingItem = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect: (fieldValue: string) => any;
  render: (fieldValue: string) => React.ReactNode;
  isVisible?: (
    fieldValue: string,
    filteredOptions: SingleComboBoxOption[]
  ) => boolean;
  selectIfOnly?: boolean;
  isMoreOption?: boolean;
};

export const useSingleComboBox = ({
  fixedItems,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  options,
  trailingItem,
  value,
}: {
  fixedItems?: FixedItems;
  onBlur?: React.FormEventHandler;
  onChange?: (option?: SingleComboBoxOption) => void;
  onFocus?: React.FormEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  options: SingleComboBoxOption[];
  trailingItem?: TrailingItem;
  value?: SingleComboBoxOption;
}) => {
  const {
    fieldValue,
    isOpen,
    listOptionsRef,
    selectedIndex,
    selectedOptionRef,
    setFieldValue,
    setOpen,
    setSelectedIndex,
  } = useComboBox({ value });
  const [filteredOptions, setFilteredOptions] =
    useState<InternalComboBoxOption[]>(options);

  const [internalValue, setInternalValue] = useState<string>(fieldValue);

  const filterOptions = useCallback(
    (fieldValue: string): InternalComboBoxOption[] => {
      // Search options matched with either label or keywords partially
      const filteredOptions = options.filter(
        ({ label, keywords }: InternalComboBoxOption) =>
          label.includes(fieldValue) ||
          (keywords ?? []).filter((kw) => kw.includes(fieldValue)).length > 0
      );

      // labelが完全一致するものを先頭に持ってくる
      const result = [
        ...filteredOptions.filter((option) => option.label === fieldValue),
        ...filteredOptions.filter((option) => option.label !== fieldValue),
      ];

      if (
        trailingItem &&
        (!trailingItem.isVisible || trailingItem.isVisible(fieldValue, result))
      ) {
        return [
          ...result,
          {
            label: '',
            id: '',
            isTrailingItem: true,
          },
        ];
      }

      return [
        ...result,
        ...(fixedItems
          ? (fixedItems
              .map((fixedItem: FixedItem, i: number) =>
                !fixedItem.isVisible || fixedItem.isVisible(fieldValue, result)
                  ? {
                      label: '',
                      id: '',
                      fixedItemType: i === 0 ? 'more' : 'add',
                    }
                  : undefined
              )
              .filter((v) => v) as InternalComboBoxOption[])
          : []),
      ];
    },
    [fixedItems, options, trailingItem]
  );

  const handleSelectOption = useCallback(
    (option?: InternalComboBoxOption): void => {
      const value = option ? option.label : '';
      setFieldValue(value);
      if (onChange && fieldValue !== value) {
        onChange(option);
      }
    },
    // ここに fieldValue を追加すると挙動がおかしくなるため、追加しない
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange, setFieldValue]
  );

  const onFieldFocus = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      setOpen(true);
      // focus した場合は選択項目を全て表示する
      setInternalValue('');
      const filteredOptions = filterOptions('');
      setFilteredOptions(filteredOptions);
      setSelectedIndex(value ? filteredOptions.indexOf(value) : 0);
      if (onFocus) {
        onFocus(e);
      }
    },
    [filterOptions, onFocus, setOpen, setSelectedIndex, value]
  );

  const onFieldBlur = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      const filteredByLabelOptions = options.filter(
        (option: InternalComboBoxOption) => option.label === fieldValue
      );
      const filteredOptions = filterOptions(fieldValue);
      const labelMatchedOption =
        filteredByLabelOptions.length === 1
          ? filteredByLabelOptions[0]
          : undefined;
      if (labelMatchedOption) {
        handleSelectOption(labelMatchedOption);
      } else if (
        trailingItem?.selectIfOnly &&
        filteredOptions.length === 1 &&
        filteredOptions[0]?.isTrailingItem
      ) {
        trailingItem.onSelect(fieldValue);
      } else if (
        fixedItems &&
        fixedItems[1] &&
        filteredOptions.length === 1 &&
        filteredOptions[0]?.fixedItemType
      ) {
        fixedItems[1].onSelect(fieldValue);
      } else if (!fieldValue) {
        handleSelectOption();
      } else if (value) {
        setFieldValue(value.label);
      }
      setOpen(false);
      setSelectedIndex(-1);
      if (onBlur) {
        onBlur(e);
      }
    },
    [
      options,
      filterOptions,
      fieldValue,
      trailingItem,
      fixedItems,
      value,
      setOpen,
      setSelectedIndex,
      onBlur,
      handleSelectOption,
      setFieldValue,
    ]
  );

  const onFieldChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const newFieldValue = (e.target as HTMLInputElement).value;
      const filteredOptions = filterOptions(fieldValue);

      const selectedOption =
        selectedIndex >= 0 ? filteredOptions[selectedIndex] : null;
      let selectedOptionIndex = selectedOption
        ? filterOptions(newFieldValue).indexOf(selectedOption)
        : 0;
      // 完全一致するものがあれば先頭に選択を変える
      if (filteredOptions.find(({ label }) => label === newFieldValue))
        selectedOptionIndex = 0;
      if (selectedOptionIndex === -1) selectedOptionIndex = 0;
      // 空の場合は先頭を指す
      if (newFieldValue === '') selectedOptionIndex = 0;

      // trailingItem, fixedItemを選択中に非表示になる場合は選択を解除する
      if (
        (selectedOption?.isTrailingItem &&
          trailingItem?.isVisible &&
          !trailingItem.isVisible(newFieldValue, filteredOptions)) ||
        (selectedOption?.fixedItemType === 'more' &&
          fixedItems &&
          fixedItems[0]?.isVisible &&
          !fixedItems[0].isVisible(newFieldValue, filteredOptions)) ||
        (selectedOption?.fixedItemType === 'add' &&
          fixedItems &&
          fixedItems[1]?.isVisible &&
          !fixedItems[1].isVisible(newFieldValue, filteredOptions))
      ) {
        selectedOptionIndex = -1;
      }
      setFieldValue(newFieldValue);
      setInternalValue(newFieldValue);
      setOpen(true);
      setSelectedIndex(selectedOptionIndex);
      // onChange はoption確定時に呼ぶのでここでは呼ばない
    },
    [
      filterOptions,
      fieldValue,
      selectedIndex,
      trailingItem,
      fixedItems,
      setFieldValue,
      setOpen,
      setSelectedIndex,
    ]
  );

  const onSelectOption = useCallback(
    (option: InternalComboBoxOption): void => {
      if (option.disabled) {
        return;
      }

      if (option.isTrailingItem) {
        trailingItem?.onSelect(internalValue);
        if (trailingItem && !trailingItem.isMoreOption) {
          setSelectedIndex(-1);
          setOpen(false);
        }
        return;
      } else if (fixedItems && option.fixedItemType) {
        if (option.fixedItemType === 'more') {
          fixedItems[0].onSelect(internalValue);
          return;
        }
        fixedItems[1]?.onSelect(internalValue);
        setSelectedIndex(-1);
        setOpen(false);
        return;
      }
      handleSelectOption(option);
      setSelectedIndex(-1);
      setOpen(false);
    },
    [
      fixedItems,
      handleSelectOption,
      setOpen,
      trailingItem,
      internalValue,
      setSelectedIndex,
    ]
  );

  const onFieldKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      switch (e.keyCode) {
        case KeyCodes.UP:
          if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
          } else {
            setSelectedIndex(filterOptions(internalValue).length - 1);
          }
          e.preventDefault();
          break;
        case KeyCodes.DOWN:
          if (
            selectedIndex >= 0 &&
            selectedIndex < filterOptions(internalValue).length - 1
          ) {
            setSelectedIndex(selectedIndex + 1);
          } else {
            setSelectedIndex(0);
          }
          e.preventDefault();
          break;
        case KeyCodes.ENTER:
          if (selectedIndex >= 0) {
            const selectedOption = filterOptions(internalValue)[selectedIndex];
            if (selectedOption) {
              onSelectOption(selectedOption);
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
      filterOptions,
      internalValue,
      onKeyDown,
      onSelectOption,
      selectedIndex,
      setSelectedIndex,
    ]
  );

  useEffect(() => {
    const filteredOptions = filterOptions(fieldValue);
    setFilteredOptions(filteredOptions);
  }, [fieldValue, filterOptions]);

  return {
    filteredOptions,
    isOpen,
    fieldValue,
    onFieldBlur,
    onFieldFocus,
    onFieldChange,
    onFieldKeyDown,
    selectedIndex,
    listOptionsRef,
    onSelectOption,
    selectedOptionRef,
  };
};
