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
import NegativeMarginBase from '../../lv1/bases/NegativeMarginBase';
import useUniqueId from '../../hooks/useUniqueId';
import VisuallyHidden from '../../lv1/a11y/VisuallyHidden';
import Note from '../../lv1/typography/Note';
import ScrollPortal from '../../utilities/ScrollPortal';
import Loading from '../../lv1/Loading';
import { ItemLabel } from './ItemLabel';
import { useAdjustListPosition, createListBoxClassName, } from './hooks';
import { useSingleComboBox } from './hooks/singleComboBox';
import { pickFunctionalMarginProps } from '../../utilities/functionalMarginClasses';
import vbClassNames from '../../utilities/vbClassNames';
function SingleComboBoxInner(props, ref) {
    var value = props.value, options = props.options, id = props.id, label = props.label, labelledby = props.labelledby, placeholder = props.placeholder, name = props.name, required = props.required, disabled = props.disabled, error = props.error, small = props.small, large = props.large, width = props.width, listWidth = props.listWidth, emptyMessage = props.emptyMessage, isLoading = props.isLoading, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onInput = props.onInput, onKeyDown = props.onKeyDown, trailingItem = props.trailingItem, fixedItems = props.fixedItems, borderless = props.borderless, describedBy = props.describedBy;
    var _a = useSingleComboBox({
        value: value,
        options: options,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyDown: onKeyDown,
        trailingItem: trailingItem,
        fixedItems: fixedItems,
    }), filteredOptions = _a.filteredOptions, isOpen = _a.isOpen, fieldValue = _a.fieldValue, onFieldBlur = _a.onFieldBlur, onFieldFocus = _a.onFieldFocus, onFieldChange = _a.onFieldChange, onFieldKeyDown = _a.onFieldKeyDown, selectedIndex = _a.selectedIndex, listOptionsRef = _a.listOptionsRef, onSelectOption = _a.onSelectOption, selectedOptionRef = _a.selectedOptionRef;
    var uniqueId = useUniqueId('vb-comboBox');
    var listBoxClassName = createListBoxClassName({ isOpen: isOpen, listWidth: listWidth, width: width });
    var _b = useAdjustListPosition(isOpen, ref), textFieldRef = _b.textFieldRef, listOptionsMaxHeight = _b.listOptionsMaxHeight;
    return (React.createElement("div", __assign({}, commonProps(pickCommonDataProps(props), 'vb-comboBox')),
        React.createElement(TextField, __assign({ ref: textFieldRef, value: fieldValue, id: id, label: label, labelledby: labelledby, name: name, required: required, disabled: disabled, placeholder: placeholder, error: error, small: small, large: large, width: width, onBlur: onFieldBlur, onFocus: onFieldFocus, onChange: onFieldChange, onInput: onInput, onKeyDown: onFieldKeyDown, borderless: borderless, role: "combobox", autoComplete: "off", "aria-expanded": isOpen, "aria-autocomplete": "list", "aria-controls": "".concat(uniqueId, "__listbox"), "aria-haspopup": "listbox", "aria-activedescendant": selectedIndex >= 0 && isOpen
                ? "".concat(uniqueId, "__listOption__").concat(selectedIndex)
                : undefined, "aria-describedby": "".concat(describedBy || '', " ").concat(uniqueId, "__description"), "aria-atomic": true, IconComponent: MdExpandMore }, pickMarginClassProps(props), pickFunctionalMarginProps(props))),
        React.createElement(VisuallyHidden, { id: "".concat(uniqueId, "__description") }, "\u4E0A\u4E0B\u30AD\u30FC\u3067\u9078\u629E\u3001Enter\u30AD\u30FC\u3067\u78BA\u5B9A\u3067\u304D\u307E\u3059"),
        React.createElement(ScrollPortal, { isActive: isOpen, onOverflow: function () { return textFieldRef.current && textFieldRef.current.blur(); }, positionalBaseElement: textFieldRef.current, "data-masking": props['data-masking'] },
            React.createElement("div", { id: "".concat(uniqueId, "__listbox"), className: listBoxClassName, role: "listbox", tabIndex: -1, onMouseDown: function (e) { return e.preventDefault(); } },
                React.createElement(PopupBase, { paddingSize: "small" },
                    React.createElement(NegativeMarginBase, { marginSize: "small", top: true, left: true, bottom: true, right: true },
                        React.createElement(Loading, { isLoading: !!isLoading }, filteredOptions.length > 0 ? (React.createElement("div", { className: "vb-comboBox__listOptions", ref: listOptionsRef, style: { maxHeight: listOptionsMaxHeight } },
                            filteredOptions[0].fixedItemType === 'add' && (React.createElement("div", { className: "vb-comboBox__emptyMessage" },
                                React.createElement(Note, null, emptyMessage || '該当する候補はありません'))),
                            filteredOptions.map(function (option, i) {
                                var isSelected = i === selectedIndex;
                                return (
                                /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
                                React.createElement("div", { id: "".concat(uniqueId, "__listOption__").concat(i), key: i, className: vbClassNames('vb-comboBox__listOption', {
                                        modifier: {
                                            selected: isSelected,
                                            disabled: option.disabled,
                                        },
                                    }), role: "option", "aria-selected": !(option.disabled || !isSelected), "aria-disabled": option.disabled, tabIndex: -1, onClick: function () { return onSelectOption(option); }, ref: isSelected ? selectedOptionRef : undefined },
                                    React.createElement(ItemLabel, { fixedItemOption: fixedItems && { fixedItems: fixedItems, isSelected: isSelected }, fieldValue: fieldValue, option: option, trailingItem: trailingItem }),
                                    option.subLabel && (React.createElement("div", { className: "vb-comboBox__listOptionSubLabel" }, option.subLabel))));
                            }))) : (React.createElement("div", { className: "vb-comboBox__emptyMessage" },
                            React.createElement(Note, null, emptyMessage || '該当する候補はありません'))))))))));
}
var SingleComboBox = React.forwardRef(SingleComboBoxInner);
export default SingleComboBox;
//# sourceMappingURL=SingleComboBox.js.map