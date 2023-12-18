import * as React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { FocusHighlight, TextField, VisuallyHidden } from '../../lv1';
import vbClassNames from '../../utilities/vbClassNames';
import { MiniTag } from '../tagBox/MiniTag';
var WithBorder = function (_a) {
    var withBorder = _a.withBorder, width = _a.width, children = _a.children;
    return withBorder ? (React.createElement(FocusHighlight, { cornerStyle: "round", width: width === 'full' ? 'full' : 'fit-content' }, children)) : (React.createElement(React.Fragment, null, children));
};
/**
 * MultiComboBoxで使う、TextFieldと選択内容（MiniTag）コンポーネント
 */
export var MultiComboBoxField = function (_a) {
    var baseClassName = _a.baseClassName, originalId = _a.originalId, uniqueId = _a.uniqueId, withBorder = _a.withBorder, borderRef = _a.borderRef, textFieldRef = _a.textFieldRef, isOpen = _a.isOpen, _b = _a.values, values = _b === void 0 ? [] : _b, textFieldValue = _a.textFieldValue, selectedIndex = _a.selectedIndex, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onKeyDown = _a.onKeyDown, onRemoveOption = _a.onRemoveOption, name = _a.name, width = _a.width, disabled = _a.disabled, error = _a.error, required = _a.required, onInput = _a.onInput, label = _a.label, labelledby = _a.labelledby, maxSelectionCount = _a.maxSelectionCount;
    return (React.createElement(WithBorder, { withBorder: withBorder, width: width },
        React.createElement("span", { className: vbClassNames("".concat(baseClassName, "__border"), {
                modifier: {
                    widthXSmall: width === 'xSmall',
                    widthSmall: width === 'small',
                    widthMedium: width === 'medium' || !width,
                    widthLarge: width === 'large',
                    widthFull: width === 'full',
                    disabled: disabled,
                    error: error,
                },
            }), onClick: function () { var _a; return (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, ref: borderRef },
            React.createElement("span", { className: "".concat(baseClassName, "__flex") },
                React.createElement(VisuallyHidden, { autoRead: true }, values.length > 0
                    ? "\u9078\u629E\u3057\u3066\u3044\u308B\u9805\u76EE: ".concat(values.length, "\u500B").concat(maxSelectionCount
                        ? "(".concat(maxSelectionCount, "\u500B\u307E\u3067\u9078\u629E\u3067\u304D\u307E\u3059)")
                        : '')
                    : '選択している項目はありません'),
                React.createElement("span", { className: "".concat(baseClassName, "__list"), role: "list" }, values.map(function (v) { return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                React.createElement("span", { className: "".concat(baseClassName, "__listItem"), role: "listitem", key: v.id, onClick: function (e) {
                        var _a;
                        e.preventDefault();
                        e.stopPropagation();
                        !disabled && ((_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus());
                    } },
                    React.createElement(MiniTag, { disabledRemoveButton: disabled, removable: true, onRemove: function () { return onRemoveOption(v); }, type: v.type, removeButtonTabIndex: -1, color: v.color }, v.label))); })),
                React.createElement("span", { className: "".concat(baseClassName, "__field").concat(maxSelectionCount && values.length >= maxSelectionCount
                        ? " ".concat(baseClassName, "__field--maxSelectionCountReached")
                        : '') },
                    React.createElement(TextField, { id: originalId, borderless: true, role: "combobox", ref: textFieldRef, value: textFieldValue, label: label, labelledby: labelledby, name: name, required: required, disabled: disabled, width: "full", onChange: function (e) {
                            (!maxSelectionCount || values.length < maxSelectionCount) &&
                                onChange(e);
                        }, onInput: onInput, onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, "aria-expanded": isOpen, "aria-autocomplete": "list", "aria-controls": "".concat(uniqueId, "__listbox"), "aria-haspopup": "listbox", "aria-activedescendant": selectedIndex >= 0 && isOpen
                            ? "".concat(uniqueId, "__listOption__").concat(selectedIndex)
                            : undefined, "aria-describedby": "".concat(uniqueId, "__description"), "aria-atomic": true, IconComponent: MdExpandMore }),
                    React.createElement(VisuallyHidden, { id: "".concat(uniqueId, "__description") }, maxSelectionCount && values.length >= maxSelectionCount
                        ? "".concat(maxSelectionCount, "\u500B\u306E\u9805\u76EE\u3092\u9078\u629E\u6E08\u307F\u306E\u305F\u3081\u3001\u3053\u308C\u4EE5\u4E0A\u8FFD\u52A0\u3067\u304D\u307E\u305B\u3093")
                        : '上下キーで選択、Enterキーで確定できます'))))));
};
//# sourceMappingURL=MultiComboBoxField.js.map