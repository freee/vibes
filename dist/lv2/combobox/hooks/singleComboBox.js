var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState, useCallback, useEffect } from 'react';
import { KeyCodes } from '../../../utilities/keyboard';
import { useComboBox, } from './';
export var useSingleComboBox = function (_a) {
    var fixedItems = _a.fixedItems, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onKeyDown = _a.onKeyDown, options = _a.options, trailingItem = _a.trailingItem, value = _a.value;
    var _b = useComboBox({ value: value }), fieldValue = _b.fieldValue, isOpen = _b.isOpen, listOptionsRef = _b.listOptionsRef, selectedIndex = _b.selectedIndex, selectedOptionRef = _b.selectedOptionRef, setFieldValue = _b.setFieldValue, setOpen = _b.setOpen, setSelectedIndex = _b.setSelectedIndex;
    var _c = useState(options), filteredOptions = _c[0], setFilteredOptions = _c[1];
    var _d = useState(fieldValue), internalValue = _d[0], setInternalValue = _d[1];
    var filterOptions = useCallback(function (fieldValue) {
        // Search options matched with either label or keywords partially
        var filteredOptions = options.filter(function (_a) {
            var label = _a.label, keywords = _a.keywords;
            return label.includes(fieldValue) ||
                (keywords !== null && keywords !== void 0 ? keywords : []).filter(function (kw) { return kw.includes(fieldValue); }).length > 0;
        });
        // labelが完全一致するものを先頭に持ってくる
        var result = __spreadArray(__spreadArray([], filteredOptions.filter(function (option) { return option.label === fieldValue; }), true), filteredOptions.filter(function (option) { return option.label !== fieldValue; }), true);
        if (trailingItem &&
            (!trailingItem.isVisible || trailingItem.isVisible(fieldValue, result))) {
            return __spreadArray(__spreadArray([], result, true), [
                {
                    label: '',
                    id: '',
                    isTrailingItem: true,
                },
            ], false);
        }
        return __spreadArray(__spreadArray([], result, true), (fixedItems
            ? fixedItems
                .map(function (fixedItem, i) {
                return !fixedItem.isVisible || fixedItem.isVisible(fieldValue, result)
                    ? {
                        label: '',
                        id: '',
                        fixedItemType: i === 0 ? 'more' : 'add',
                    }
                    : undefined;
            })
                .filter(function (v) { return v; })
            : []), true);
    }, [fixedItems, options, trailingItem]);
    var handleSelectOption = useCallback(function (option) {
        var value = option ? option.label : '';
        setFieldValue(value);
        if (onChange && fieldValue !== value) {
            onChange(option);
        }
    }, 
    // ここに fieldValue を追加すると挙動がおかしくなるため、追加しない
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange, setFieldValue]);
    var onFieldFocus = useCallback(function (e) {
        setOpen(true);
        // focus した場合は選択項目を全て表示する
        setInternalValue('');
        var filteredOptions = filterOptions('');
        setFilteredOptions(filteredOptions);
        setSelectedIndex(value ? filteredOptions.indexOf(value) : 0);
        if (onFocus) {
            onFocus(e);
        }
    }, [filterOptions, onFocus, setOpen, setSelectedIndex, value]);
    var onFieldBlur = useCallback(function (e) {
        var _a, _b;
        var filteredByLabelOptions = options.filter(function (option) { return option.label === fieldValue; });
        var filteredOptions = filterOptions(fieldValue);
        var labelMatchedOption = filteredByLabelOptions.length === 1
            ? filteredByLabelOptions[0]
            : undefined;
        if (labelMatchedOption) {
            handleSelectOption(labelMatchedOption);
        }
        else if ((trailingItem === null || trailingItem === void 0 ? void 0 : trailingItem.selectIfOnly) &&
            filteredOptions.length === 1 &&
            ((_a = filteredOptions[0]) === null || _a === void 0 ? void 0 : _a.isTrailingItem)) {
            trailingItem.onSelect(fieldValue);
        }
        else if (fixedItems &&
            fixedItems[1] &&
            filteredOptions.length === 1 &&
            ((_b = filteredOptions[0]) === null || _b === void 0 ? void 0 : _b.fixedItemType)) {
            fixedItems[1].onSelect(fieldValue);
        }
        else if (!fieldValue) {
            handleSelectOption();
        }
        else if (value) {
            setFieldValue(value.label);
        }
        setOpen(false);
        setSelectedIndex(-1);
        if (onBlur) {
            onBlur(e);
        }
    }, [
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
    ]);
    var onFieldChange = useCallback(function (e) {
        var _a, _b;
        var newFieldValue = e.target.value;
        var filteredOptions = filterOptions(fieldValue);
        var selectedOption = selectedIndex >= 0 ? filteredOptions[selectedIndex] : null;
        var selectedOptionIndex = selectedOption
            ? filterOptions(newFieldValue).indexOf(selectedOption)
            : 0;
        // 完全一致するものがあれば先頭に選択を変える
        if (filteredOptions.find(function (_a) {
            var label = _a.label;
            return label === newFieldValue;
        }))
            selectedOptionIndex = 0;
        if (selectedOptionIndex === -1)
            selectedOptionIndex = 0;
        // 空の場合は先頭を指す
        if (newFieldValue === '')
            selectedOptionIndex = 0;
        // trailingItem, fixedItemを選択中に非表示になる場合は選択を解除する
        if (((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.isTrailingItem) &&
            (trailingItem === null || trailingItem === void 0 ? void 0 : trailingItem.isVisible) &&
            !trailingItem.isVisible(newFieldValue, filteredOptions)) ||
            ((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.fixedItemType) === 'more' &&
                fixedItems &&
                ((_a = fixedItems[0]) === null || _a === void 0 ? void 0 : _a.isVisible) &&
                !fixedItems[0].isVisible(newFieldValue, filteredOptions)) ||
            ((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.fixedItemType) === 'add' &&
                fixedItems &&
                ((_b = fixedItems[1]) === null || _b === void 0 ? void 0 : _b.isVisible) &&
                !fixedItems[1].isVisible(newFieldValue, filteredOptions))) {
            selectedOptionIndex = -1;
        }
        setFieldValue(newFieldValue);
        setInternalValue(newFieldValue);
        setOpen(true);
        setSelectedIndex(selectedOptionIndex);
        // onChange はoption確定時に呼ぶのでここでは呼ばない
    }, [
        filterOptions,
        fieldValue,
        selectedIndex,
        trailingItem,
        fixedItems,
        setFieldValue,
        setOpen,
        setSelectedIndex,
    ]);
    var onSelectOption = useCallback(function (option) {
        var _a;
        if (option.disabled) {
            return;
        }
        if (option.isTrailingItem) {
            trailingItem === null || trailingItem === void 0 ? void 0 : trailingItem.onSelect(internalValue);
            if (trailingItem && !trailingItem.isMoreOption) {
                setSelectedIndex(-1);
                setOpen(false);
            }
            return;
        }
        else if (fixedItems && option.fixedItemType) {
            if (option.fixedItemType === 'more') {
                fixedItems[0].onSelect(internalValue);
                return;
            }
            (_a = fixedItems[1]) === null || _a === void 0 ? void 0 : _a.onSelect(internalValue);
            setSelectedIndex(-1);
            setOpen(false);
            return;
        }
        handleSelectOption(option);
        setSelectedIndex(-1);
        setOpen(false);
    }, [
        fixedItems,
        handleSelectOption,
        setOpen,
        trailingItem,
        internalValue,
        setSelectedIndex,
    ]);
    var onFieldKeyDown = useCallback(function (e) {
        switch (e.keyCode) {
            case KeyCodes.UP:
                if (selectedIndex > 0) {
                    setSelectedIndex(selectedIndex - 1);
                }
                else {
                    setSelectedIndex(filterOptions(internalValue).length - 1);
                }
                e.preventDefault();
                break;
            case KeyCodes.DOWN:
                if (selectedIndex >= 0 &&
                    selectedIndex < filterOptions(internalValue).length - 1) {
                    setSelectedIndex(selectedIndex + 1);
                }
                else {
                    setSelectedIndex(0);
                }
                e.preventDefault();
                break;
            case KeyCodes.ENTER:
                if (selectedIndex >= 0) {
                    var selectedOption = filterOptions(internalValue)[selectedIndex];
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
    }, [
        filterOptions,
        internalValue,
        onKeyDown,
        onSelectOption,
        selectedIndex,
        setSelectedIndex,
    ]);
    useEffect(function () {
        var filteredOptions = filterOptions(fieldValue);
        setFilteredOptions(filteredOptions);
    }, [fieldValue, filterOptions]);
    return {
        filteredOptions: filteredOptions,
        isOpen: isOpen,
        fieldValue: fieldValue,
        onFieldBlur: onFieldBlur,
        onFieldFocus: onFieldFocus,
        onFieldChange: onFieldChange,
        onFieldKeyDown: onFieldKeyDown,
        selectedIndex: selectedIndex,
        listOptionsRef: listOptionsRef,
        onSelectOption: onSelectOption,
        selectedOptionRef: selectedOptionRef,
    };
};
//# sourceMappingURL=singleComboBox.js.map