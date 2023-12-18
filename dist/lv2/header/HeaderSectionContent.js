import * as React from 'react';
import { VisuallyHidden } from '../../lv1';
import WithDropdown from './../withDropdown/WithDropdown';
var HeaderSectionContents = function (_a) {
    var _b = _a.data, dropdownContents = _b.dropdownContents, IconComponent = _b.IconComponent, iconType = _b.iconType, iconLabel = _b.iconLabel, text = _b.text, type = _b.type, url = _b.url, onClick = _b.onClick, hasBadge = _b.hasBadge;
    var icon = IconComponent ? (React.createElement(IconComponent, { className: "vb-header__icon ".concat(iconType ? "vb-header__icon--".concat(iconType) : ''), role: "img", "aria-label": iconLabel || undefined, "aria-hidden": !iconLabel, focusable: false })) : null;
    switch (type) {
        case 'plan':
            return (React.createElement("a", { href: url, className: "vb-header__plan" }, text));
        case 'link':
            return (React.createElement("a", { className: "vb-header__link", href: url },
                icon,
                React.createElement("span", { className: "vb-header__text" }, text),
                hasBadge && (React.createElement("span", { className: "vb-header__badge" },
                    React.createElement(VisuallyHidden, null, "\u65B0\u7740\u60C5\u5831\u3042\u308A")))));
        case 'button':
            return (React.createElement("button", { className: "vb-header__button", type: "button", onClick: function () {
                    onClick && onClick();
                } },
                icon,
                React.createElement("span", { className: "vb-header__text" }, text),
                hasBadge && (React.createElement("span", { className: "vb-header__badge" },
                    React.createElement(VisuallyHidden, null, "\u65B0\u7740\u60C5\u5831\u3042\u308A")))));
        case 'dropdown': {
            if (!dropdownContents) {
                return null;
            }
            return (React.createElement(WithDropdown, { dropdownContents: dropdownContents, renderButton: function (dropdownId, isOpen, ref) { return (React.createElement("button", { className: "vb-header__button ".concat(isOpen ? 'vb-header__button--active' : ''), type: "button", "aria-expanded": isOpen, "aria-haspopup": true, "aria-controls": dropdownId, ref: ref },
                    icon,
                    React.createElement("span", { className: "vb-header__text" }, text),
                    hasBadge && (React.createElement("span", { className: "vb-header__badge" },
                        React.createElement(VisuallyHidden, null, "\u65B0\u7740\u60C5\u5831\u3042\u308A"))))); } }));
        }
        case 'text':
        default:
            return (React.createElement("span", null,
                icon,
                React.createElement("span", { className: "vb-header__text" }, text),
                hasBadge && (React.createElement("span", { className: "vb-header__badge" },
                    React.createElement(VisuallyHidden, null, "\u65B0\u7740\u60C5\u5831\u3042\u308A")))));
    }
};
export default HeaderSectionContents;
//# sourceMappingURL=HeaderSectionContent.js.map