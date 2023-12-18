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
import { MdArrowDropDown } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
import { WithDropdown } from '..';
/**
 * 選択中に再度選択するとドロップダウンを表示できるボタンです。
 */
var SelectableButton = function (_a) {
    var selected = _a.selected, label = _a.label, onClick = _a.onClick, dropdownContents = _a.dropdownContents, badge = _a.badge, props = __rest(_a, ["selected", "label", "onClick", "dropdownContents", "badge"]);
    var baseClass = 'vb-selectableButton';
    return (React.createElement("span", __assign({}, commonProps(props, baseClass)), dropdownContents && dropdownContents.length > 0 ? (React.createElement(WithDropdown, { disabled: !selected, dropdownContents: dropdownContents, renderButton: function (popupId, isOpen, controlRef) { return (React.createElement("button", { className: "".concat(baseClass, "__button ").concat(selected ? 'active' : ''), onClick: onClick, "aria-controls": popupId, "aria-expanded": isOpen, ref: controlRef },
            React.createElement("span", { className: "".concat(baseClass, "__label") }, label),
            badge != null && badge > 0 && (React.createElement("span", { className: "".concat(baseClass, "__badge") }, badge)),
            selected && (React.createElement(MdArrowDropDown, { className: "".concat(baseClass, "__icon ") })))); } })) : (React.createElement("button", { className: "".concat(baseClass, "__button ").concat(selected ? 'active' : ''), onClick: onClick },
        React.createElement("span", { className: "".concat(baseClass, "__label") }, label),
        badge != null && badge > 0 && (React.createElement("span", { className: "".concat(baseClass, "__badge") }, badge))))));
};
export default SelectableButton;
//# sourceMappingURL=SelectableButton.js.map