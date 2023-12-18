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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { PopupBase, Loading, Note } from '../../lv1';
import commonProps from '../../utilities/commonProps';
import ScrollPortal from '../../utilities/ScrollPortal';
import useUniqueId from '../../hooks/useUniqueId';
import { createListBoxClassName, useAdjustListPosition, useMultiComboBox, } from './hooks';
import { ItemLabel } from './ItemLabel';
import { MultiComboBoxField } from './MultiComboBoxField';
import vbClassNames from '../../utilities/vbClassNames';
var baseClassName = 'vb-multiComboBox';
var MultiComboBoxInternal = function (_a, ref) {
    var _b = _a.values, values = _b === void 0 ? [] : _b, options = _a.options, isLoading = _a.isLoading, emptyMessage = _a.emptyMessage, listWidth = _a.listWidth, id = _a.id, label = _a.label, labelledby = _a.labelledby, name = _a.name, required = _a.required, disabled = _a.disabled, width = _a.width, error = _a.error, borderless = _a.borderless, onBlur = _a.onBlur, onFocus = _a.onFocus, onInput = _a.onInput, onKeyDown = _a.onKeyDown, onChange = _a.onChange, maxSelectionCount = _a.maxSelectionCount, props = __rest(_a, ["values", "options", "isLoading", "emptyMessage", "listWidth", "id", "label", "labelledby", "name", "required", "disabled", "width", "error", "borderless", "onBlur", "onFocus", "onInput", "onKeyDown", "onChange", "maxSelectionCount"]);
    var _c = useMultiComboBox({
        values: values,
        options: options,
        onChange: onChange,
        onKeyDown: onKeyDown,
        maxSelectionCount: maxSelectionCount,
        alreadyFilteredByFieldValue: false,
    }), textFieldValue = _c.fieldValue, setTextFieldValue = _c.setFieldValue, isOpen = _c.isOpen, setOpen = _c.setOpen, selectedIndex = _c.selectedIndex, setSelectedIndex = _c.setSelectedIndex, borderRef = _c.borderRef, selectedOptionRef = _c.selectedOptionRef, listOptionsRef = _c.listOptionsRef, filteredOptions = _c.filteredOptions, onSelectOption = _c.onSelectOption, onRemoveOption = _c.onRemoveOption, handleKeyDown = _c.handleKeyDown;
    var uniqueId = useUniqueId(id || baseClassName);
    var _d = useAdjustListPosition(isOpen, ref), textFieldRef = _d.textFieldRef, listOptionsMaxHeight = _d.listOptionsMaxHeight;
    var listBoxClassName = createListBoxClassName({ isOpen: isOpen, listWidth: listWidth, width: width });
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
        React.createElement(MultiComboBoxField, { baseClassName: baseClassName, originalId: id, uniqueId: uniqueId, withBorder: !borderless, borderRef: borderRef, textFieldRef: textFieldRef, isOpen: isOpen, values: values, textFieldValue: textFieldValue, selectedIndex: selectedIndex, maxSelectionCount: maxSelectionCount, onBlur: function (e) {
                setOpen(false);
                setTextFieldValue('');
                if (onBlur) {
                    onBlur(e);
                }
            }, onChange: function (e) {
                setTextFieldValue(e.target.value);
                setSelectedIndex(0);
            }, onFocus: function (e) {
                (!maxSelectionCount || values.length < maxSelectionCount) &&
                    setOpen(true);
                if (onFocus) {
                    onFocus(e);
                }
            }, onKeyDown: function (e) {
                handleKeyDown(e);
            }, onRemoveOption: onRemoveOption, name: name, width: width, disabled: disabled, error: error, required: required, onInput: onInput, label: label, labelledby: labelledby }),
        React.createElement(ScrollPortal, { isActive: isOpen, onOverflow: function () { return textFieldRef.current && textFieldRef.current.blur(); }, positionalBaseElement: borderRef.current || undefined, "data-masking": props['data-masking'] },
            React.createElement("div", { id: "".concat(uniqueId, "__listbox"), className: listBoxClassName, role: "listbox", tabIndex: -1, onMouseDown: function (e) { return e.preventDefault(); } },
                React.createElement(PopupBase, { paddingSize: "zero" },
                    React.createElement(Loading, { isLoading: !!isLoading }, filteredOptions.length > 0 ? (React.createElement("div", { className: "vb-comboBox__listOptions", ref: listOptionsRef, style: { maxHeight: listOptionsMaxHeight } }, filteredOptions.map(function (option, i) {
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
                    }))) : (React.createElement("div", { className: "vb-comboBox__emptyMessage" },
                        React.createElement(Note, null, emptyMessage || '該当する候補はありません')))))))));
};
/**
 * 複数の項目を選択したり、種別をまたいで選択したりできるコンボボックスです
 *
 * - 選択できる項目が単一で、種別をまたがない場合には `SingleComboBox` または `ApiComboBox` の使用も検討してください
 *   - 「他の場所で MultiComboBox を使用している種別である」など、単一種別・単一項目を選択であってもMultiComboBoxの使用が妥当だと判断できる場合は MultiComboBox を使用しても問題ありません
 * - 選択した候補には `RE` `OR` `YE` `YG` `GR` `BG` `PU` `GY` の色を指定できます。種別ごとに一貫した色を使用してください。
 * - API経由での項目の取得が必要となる場合は `ApiMultiComboBox` の使用も検討してください
 */
export var MultiComboBox = React.forwardRef(MultiComboBoxInternal);
//# sourceMappingURL=MultiComboBox.js.map