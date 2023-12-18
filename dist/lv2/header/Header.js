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
import HeaderSectionContent from './HeaderSectionContent';
import commonProps from '../../utilities/commonProps';
var Header = function (props) {
    var _a = props.disableGutters, disableGutters = _a === void 0 ? false : _a, logo = props.logo, sectionDataList = props.sectionDataList, sectionNode = props.sectionNode, logoUrl = props.logoUrl, children = props.children;
    var logoNode = logo;
    var infoNode = sectionDataList
        ? sectionDataList.map(function (data, i) { return (React.createElement("span", { key: i, className: "vb-header__section" },
            React.createElement(HeaderSectionContent, { data: data }))); })
        : sectionNode;
    return (React.createElement("header", __assign({ role: "banner" }, commonProps(props, 'vb-header', { disableGutters: disableGutters })),
        React.createElement("div", { className: "vb-header__logo" }, logoUrl ? React.createElement("a", { href: logoUrl }, logoNode) : logoNode),
        children && React.createElement("div", { className: "vb-header__children" }, children),
        React.createElement("div", { className: "vb-header__info" }, infoNode)));
};
export default Header;
//# sourceMappingURL=Header.js.map