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
import * as React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { pickMarginClassProps, } from '../../utilities/marginClasses';
import commonProps, { pickCommonDataProps, } from '../../utilities/commonProps';
import TextField from '../../lv1/forms/TextField';
import PopupBase from '../../lv1/bases/PopupBase';
import MarginBase from '../../lv1/bases/MarginBase';
import useUniqueId from '../../hooks/useUniqueId';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import Note from '../../lv1/typography/Note';
import ScrollPortal from '../../utilities/ScrollPortal';
import { ItemLabel } from './ItemLabel';
import { useAdjustListPosition, createListBoxClassName, } from './hooks';
import { useApiComboBoxInternal } from './hooks/apiComboBox';
import { LoadMoreItem } from './LoadMoreItem';
import InlineSpinner from '../../lv1/InlineSpinner';
import { CreateNewItem } from './CreateNewItem';
import { pickFunctionalMarginProps } from '../../utilities/functionalMarginClasses';
import vbClassNames from '../../utilities/vbClassNames';
export { useApiComboBox } from './hooks/apiComboBox';
function ApiComboBoxInner(props, ref) {
    var value = props.value, options = props.options, id = props.id, label = props.label, labelledby = props.labelledby, placeholder = props.placeholder, name = props.name, required = props.required, disabled = props.disabled, error = props.error, small = props.small, large = props.large, borderless = props.borderless, width = props.width, listWidth = props.listWidth, emptyMessage = props.emptyMessage, isLoading = props.isLoading, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onInput = props.onInput, onKeyDown = props.onKeyDown, fetchItems = props.fetchItems, _a = props.meta, currentPage = _a.currentPage, totalPages = _a.totalPages, createNewItem = props.createNewItem;
    var uniqueId = useUniqueId('vb-comboBox');
    var _b = useApiComboBoxInternal({
        createNewItem: createNewItem,
        currentPage: currentPage,
        fetchItems: fetchItems,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        onKeyDown: onKeyDown,
        options: options,
        totalPages: totalPages,
        value: value,
    }), fieldValue = _b.fieldValue, isLoadingMore = _b.isLoadingMore, isOpen = _b.isOpen, listOptionsRef = _b.listOptionsRef, loadMore = _b.loadMore, onFieldBlur = _b.onFieldBlur, onFieldChange = _b.onFieldChange, onFieldFocus = _b.onFieldFocus, onFieldKeyDown = _b.onFieldKeyDown, onSelectOption = _b.onSelectOption, selectedIndex = _b.selectedIndex, selectedOptionRef = _b.selectedOptionRef;
    var listBoxClassName = createListBoxClassName({ isOpen: isOpen, listWidth: listWidth, width: width });
    var _c = useAdjustListPosition(isOpen, ref), textFieldRef = _c.textFieldRef, listOptionsMaxHeight = _c.listOptionsMaxHeight;
    var hasNextPages = currentPage < totalPages;
    var listIsEmpty = !isLoading && options.length === 0;
    var isLoadingAll = isLoading && !isLoadingMore;
    return (React.createElement("div", __assign({}, commonProps(pickCommonDataProps(props), 'vb-comboBox')),
        React.createElement(TextField, __assign({ ref: textFieldRef, value: fieldValue, id: id, label: label, labelledby: labelledby, name: name, required: required, disabled: disabled, placeholder: placeholder, error: error, small: small, large: large, width: width, borderless: borderless, onBlur: onFieldBlur, onFocus: onFieldFocus, onChange: onFieldChange, onInput: onInput, onKeyDown: onFieldKeyDown, role: "combobox", autoComplete: "off", "aria-expanded": isOpen, "aria-autocomplete": "list", "aria-controls": "".concat(uniqueId, "__listbox"), "aria-haspopup": "listbox", "aria-activedescendant": selectedIndex >= 0 && isOpen
                ? "".concat(uniqueId, "__listOption__").concat(selectedIndex)
                : undefined, "aria-describedby": "".concat(uniqueId, "__description"), "aria-atomic": true, IconComponent: MdExpandMore, loading: isLoadingAll }, pickFunctionalMarginProps(props), pickMarginClassProps(props))),
        React.createElement(VisuallyHidden, { id: "".concat(uniqueId, "__description") }, "\u4E0A\u4E0B\u30AD\u30FC\u3067\u9078\u629E\u3001Enter\u30AD\u30FC\u3067\u78BA\u5B9A\u3067\u304D\u307E\u3059"),
        React.createElement(ScrollPortal, { isActive: isOpen, onOverflow: function () { return textFieldRef.current && textFieldRef.current.blur(); }, positionalBaseElement: textFieldRef.current, "data-masking": props['data-masking'] },
            React.createElement("div", { id: "".concat(uniqueId, "__listbox"), className: listBoxClassName, role: "listbox", tabIndex: -1, onMouseDown: function (e) { return e.preventDefault(); } },
                React.createElement(PopupBase, { paddingSize: "small" },
                    React.createElement(MarginBase, { ma: -1 },
                        React.createElement("div", { className: "vb-comboBox__listOptions", ref: listOptionsRef, style: { maxHeight: listOptionsMaxHeight } },
                            !listIsEmpty ? (options.map(function (option, i) {
                                var isSelected = i === selectedIndex;
                                return (
                                /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
                                React.createElement("div", { id: "".concat(uniqueId, "__listOption__").concat(i), key: i, className: vbClassNames('vb-comboBox__listOption', {
                                        modifier: {
                                            selected: isSelected,
                                            disabled: option.disabled,
                                        },
                                    }), role: "option", "aria-selected": !(option.disabled || !isSelected), "aria-disabled": option.disabled, tabIndex: -1, onClick: function () { return onSelectOption(option); }, ref: isSelected ? selectedOptionRef : undefined },
                                    React.createElement(ItemLabel, { fieldValue: fieldValue, option: option }),
                                    option.subLabel && (React.createElement("div", { className: "vb-comboBox__listOptionSubLabel" }, option.subLabel))));
                            })) : isLoadingAll ? null : (React.createElement("div", { className: "vb-comboBox__emptyMessage" },
                                React.createElement(Note, null, emptyMessage || '該当する候補はありません'))),
                            isLoadingMore ? (React.createElement("div", { className: "vb-comboBox__spinner" },
                                React.createElement(InlineSpinner, { isLoading: true }))) : (!isLoading &&
                                !listIsEmpty &&
                                hasNextPages && (React.createElement(LoadMoreItem, { fieldValue: fieldValue, isSelected: selectedIndex === options.length, loadMore: loadMore, selectedOptionRef: selectedOptionRef, uniqueId: uniqueId }))),
                            createNewItem &&
                                !options.find(function (_a) {
                                    var label = _a.label;
                                    return label === fieldValue;
                                }) && (React.createElement(CreateNewItem, { createNewItem: createNewItem, fieldValue: fieldValue, isSelected: selectedIndex ===
                                    options.length + (hasNextPages ? 1 : 0), selectedOptionRef: selectedOptionRef, uniqueId: uniqueId })))))))));
}
/**
 * SingleComboBox に API による検索とページネーションの機能を付与したコンポーネントです。
 *
 * * リソース管理のため、基本的には`useApiComboBox`を併用してください
 * * リスト内の項目が固定されている場合は`SingleComboBox`を使用してください。
 */
var ApiComboBox = React.forwardRef(ApiComboBoxInner);
export default ApiComboBox;
//# sourceMappingURL=ApiComboBox.js.map