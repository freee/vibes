var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { PopupBase, Note, InlineSpinner } from '../../lv1';
import commonProps from '../../utilities/commonProps';
import ScrollPortal from '../../utilities/ScrollPortal';
import useUniqueId from '../../hooks/useUniqueId';
import { LoadMoreItem } from './LoadMoreItem';
import { CreateNewItem } from './CreateNewItem';
import { ItemLabel } from './ItemLabel';
import { MultiComboBoxField } from './MultiComboBoxField';
import { createListBoxClassName, useAdjustListPosition, } from './hooks';
import { useApiMultiComboBoxInternal } from './hooks/apiMultiComboBox';
import vbClassNames from '../../utilities/vbClassNames';
export { useApiMultiComboBox } from './hooks/apiMultiComboBox';
var baseClassName = 'vb-multiComboBox';
function ApiMultiComboBoxInner(props, ref) {
    var fetchItems = props.fetchItems, isLoading = props.isLoading, _a = props.meta, currentPage = _a.currentPage, totalPages = _a.totalPages, createNewItem = props.createNewItem, _b = props.values, values = _b === void 0 ? [] : _b, options = props.options, maxSelectionCount = props.maxSelectionCount, emptyMessage = props.emptyMessage, listWidth = props.listWidth, id = props.id, label = props.label, labelledby = props.labelledby, name = props.name, required = props.required, disabled = props.disabled, width = props.width, error = props.error, borderless = props.borderless, onBlur = props.onBlur, onFocus = props.onFocus, onInput = props.onInput, onKeyDown = props.onKeyDown, onChange = props.onChange;
    var uniqueId = useUniqueId(id || baseClassName);
    var _c = useApiMultiComboBoxInternal({
        createNewItem: createNewItem,
        currentPage: currentPage,
        fetchItems: fetchItems,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        onKeyDown: onKeyDown,
        options: options,
        totalPages: totalPages,
        values: values,
        maxSelectionCount: maxSelectionCount,
    }), filteredOptions = _c.filteredOptions, isLoadingMore = _c.isLoadingMore, loadMore = _c.loadMore, textFieldValue = _c.fieldValue, isOpen = _c.isOpen, setOpen = _c.setOpen, selectedIndex = _c.selectedIndex, listOptionsRef = _c.listOptionsRef, selectedOptionRef = _c.selectedOptionRef, borderRef = _c.borderRef, onFieldBlur = _c.onFieldBlur, onFieldChange = _c.onFieldChange, onFieldFocus = _c.onFieldFocus, onFieldKeyDown = _c.onFieldKeyDown, onSelectOption = _c.onSelectOption, onRemoveOption = _c.onRemoveOption, onClickNewItem = _c.onClickNewItem;
    var listBoxClassName = createListBoxClassName({ isOpen: isOpen, listWidth: listWidth, width: width });
    var _d = useAdjustListPosition(isOpen, ref), textFieldRef = _d.textFieldRef, listOptionsMaxHeight = _d.listOptionsMaxHeight;
    var hasNextPages = currentPage < totalPages;
    var listIsEmpty = !isLoading && filteredOptions.length === 0;
    var isLoadingAll = isLoading && !isLoadingMore;
    React.useEffect(function () {
        var _a;
        if (maxSelectionCount) {
            if (((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.isSameNode(textFieldRef.current)) &&
                values.length < maxSelectionCount) {
                setOpen(true);
            }
            if (values.length >= maxSelectionCount) {
                setOpen(false);
            }
        }
    }, [values, maxSelectionCount, textFieldRef, setOpen]);
    return (React.createElement("span", __assign({}, commonProps(props, baseClassName, {
        widthXSmall: width === 'xSmall',
        widthSmall: width === 'small',
        widthMedium: width === 'medium' || !width,
        widthLarge: width === 'large',
        widthFull: width === 'full',
    })),
        React.createElement(MultiComboBoxField, { baseClassName: baseClassName, originalId: id, uniqueId: uniqueId, withBorder: !borderless, borderRef: borderRef, textFieldRef: textFieldRef, selectedIndex: selectedIndex, isOpen: isOpen, values: values, maxSelectionCount: maxSelectionCount, textFieldValue: textFieldValue, onBlur: onFieldBlur, onChange: onFieldChange, onFocus: onFieldFocus, onKeyDown: onFieldKeyDown, onRemoveOption: onRemoveOption, name: name, width: width, disabled: disabled, error: error, required: required, onInput: onInput, label: label, labelledby: labelledby }),
        React.createElement(ScrollPortal, { isActive: isOpen, onOverflow: function () { return textFieldRef.current && textFieldRef.current.blur(); }, positionalBaseElement: borderRef.current || undefined, "data-masking": props['data-masking'] },
            React.createElement("div", { id: "".concat(uniqueId, "__listbox"), className: listBoxClassName, role: "listbox", tabIndex: -1, onMouseDown: function (e) { return e.preventDefault(); } },
                React.createElement(PopupBase, { paddingSize: "zero" },
                    React.createElement("div", { className: "vb-comboBox__listOptions", ref: listOptionsRef, style: { maxHeight: listOptionsMaxHeight } },
                        isLoadingAll ? null : listIsEmpty ? (React.createElement("div", { className: "vb-comboBox__emptyMessage" },
                            React.createElement(Note, null, emptyMessage || '該当する候補はありません'))) : (filteredOptions.map(function (option, i) {
                            var isSelected = i === selectedIndex;
                            return (
                            /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
                            React.createElement("div", { id: "".concat(uniqueId, "__listOption__").concat(i), key: i, className: vbClassNames('vb-comboBox__listOption', {
                                    modifier: {
                                        selected: isSelected,
                                        disabled: option.disabled,
                                    },
                                }), role: "option", "aria-selected": !(option.disabled || !isSelected), "aria-disabled": option.disabled, tabIndex: -1, onClick: function () { return onSelectOption(option); }, ref: isSelected ? selectedOptionRef : undefined },
                                React.createElement(ItemLabel, { fieldValue: textFieldValue, option: option }),
                                option.type && (React.createElement("div", { className: "vb-comboBox__listOptionSubLabel" }, option.type))));
                        })),
                        isLoading ? (React.createElement("div", { className: "vb-comboBox__spinner" },
                            React.createElement(InlineSpinner, { isLoading: true }))) : (hasNextPages && (React.createElement(LoadMoreItem, { fieldValue: textFieldValue, isSelected: selectedIndex === filteredOptions.length, loadMore: loadMore, selectedOptionRef: selectedOptionRef, uniqueId: uniqueId }))),
                        createNewItem &&
                            !__spreadArray(__spreadArray([], values, true), filteredOptions, true).find(function (_a) {
                                var label = _a.label;
                                return label === textFieldValue;
                            }) && (React.createElement(CreateNewItem, { createNewItem: onClickNewItem, fieldValue: textFieldValue, isSelected: selectedIndex ===
                                filteredOptions.length + (hasNextPages ? 1 : 0), selectedOptionRef: selectedOptionRef, uniqueId: uniqueId }))))))));
}
/**
 * `MultiComboBox` に API による検索とページネーションの機能を付与したコンポーネントです。使い方・使い分けについては `MultiComboBox` も参照してください
 *
 * * リソース管理のため、基本的には`useApiMultiComboBox`を併用してください
 * * リスト内の項目が固定されている場合は`MultiComboBox`を使用してください。
 */
var ApiMultiComboBox = React.forwardRef(ApiMultiComboBoxInner);
export default ApiMultiComboBox;
//# sourceMappingURL=ApiMultiComboBox.js.map