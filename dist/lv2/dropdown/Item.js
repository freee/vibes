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
import { MdOpenInNew } from 'react-icons/md';
import CheckBox from '../../lv1/forms/CheckBox';
import MaterialIcon from '../../lv1/icons/MaterialIcon';
import { pickCommonDataProps } from '../../utilities/commonProps';
import selfWindowNavigator from '../../utilities/selfWindowNavigator';
var Item = function (_a) {
    var content = _a.content, onKeyDown = _a.onKeyDown, selectableItemRef = _a.selectableItemRef, onRequestClose = _a.onRequestClose;
    var baseClass = 'vb-dropdownItem';
    switch (content.type) {
        case 'rule':
            return (React.createElement("li", { className: "".concat(baseClass, " ").concat(baseClass, "--rule"), role: "separator" }));
        case 'textOnly':
            return (React.createElement("li", { className: "".concat(baseClass).concat(content.unread ? " ".concat(baseClass, "--unread") : ''), role: "menuitem" },
                React.createElement("span", __assign({ className: "".concat(baseClass, "__text") }, pickCommonDataProps(content)), content.text)));
        case 'checkbox':
            return (React.createElement("li", { className: "".concat(baseClass, " ").concat(baseClass, "--checkbox"), role: "menuitem" },
                React.createElement("span", { className: "".concat(baseClass, "__checkBoxItem") },
                    React.createElement(CheckBox, __assign({ value: content.value, checked: content.checked, onChange: content.onChange, name: content.name, disabled: content.disabled, onKeyDown: onKeyDown, ref: selectableItemRef }, pickCommonDataProps(content)), content.text))));
        case 'selectable':
        default: {
            var unreadClass = content.unread ? " ".concat(baseClass, "--unread") : '';
            var disabledClass = content.disabled ? " ".concat(baseClass, "--disabled") : '';
            var dangerContentClass = content.danger
                ? " ".concat(baseClass, "__content--danger")
                : '';
            return (React.createElement("li", { className: "".concat(baseClass, " ").concat(baseClass, "--selectable ").concat(unreadClass, " ").concat(disabledClass), role: "menuitem" }, content.url ? (React.createElement("a", __assign({ href: content.url, target: content.target, className: "".concat(baseClass, "__selectable").concat(content.target === '_blank'
                    ? " ".concat(baseClass, "__selectable--rightIcon")
                    : ''), onClick: function (e) {
                    content.onClick && content.onClick(e);
                    if (onRequestClose && !content.disableOnRequestClose) {
                        onRequestClose();
                    }
                    var navigator = selfWindowNavigator(content.onSelfWindowNavigation);
                    navigator && navigator(e, content.url);
                }, onKeyDown: function (e) {
                    onKeyDown(e);
                }, ref: selectableItemRef, "aria-label": content.ariaLabel ? content.ariaLabel : undefined, rel: content.rel }, pickCommonDataProps(content)),
                content.target === '_blank' && (React.createElement("span", { className: "".concat(baseClass, "__rightIcon") },
                    React.createElement(MaterialIcon, { IconComponent: MdOpenInNew }))),
                React.createElement("span", { className: "".concat(baseClass, "__content") }, content.text))) : (React.createElement("button", __assign({ className: "".concat(baseClass, "__selectable"), type: "button", disabled: content.disabled, onClick: function (e) {
                    content.onClick && content.onClick(e);
                    if (onRequestClose && !content.disableOnRequestClose) {
                        onRequestClose();
                    }
                }, onKeyDown: function (e) {
                    onKeyDown(e);
                }, ref: selectableItemRef, "aria-label": content.ariaLabel ? content.ariaLabel : undefined }, pickCommonDataProps(content)),
                React.createElement("span", { className: "".concat(baseClass, "__content ").concat(dangerContentClass) }, content.text)))));
        }
    }
};
export default Item;
//# sourceMappingURL=Item.js.map