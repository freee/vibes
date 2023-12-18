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
import { MdKeyboardArrowRight } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
import MaterialIcon from '../../lv1/icons/MaterialIcon';
import Paragraph from '../../lv1/typography/Paragraph';
import SectionTitle from '../../lv1/typography/SectionTitle';
import CardBase from '../../lv1/bases/CardBase';
var CardNavigation = function (props) {
    var navigationContents = props.navigationContents;
    var className = 'vb-cardNavigation';
    return (React.createElement("div", __assign({}, commonProps(props, className)), navigationContents.map(function (naviContent, index) { return (React.createElement("div", { className: "".concat(className, "__item ").concat(className, "__item--").concat(navigationContents.length), key: index },
        React.createElement(CardBase, { url: naviContent.url, clickable: true },
            React.createElement("div", { className: "".concat(className, "__content ").concat(className, "__content--").concat(navigationContents.length) },
                React.createElement("div", { className: "".concat(className, "__main") },
                    React.createElement("div", { className: "".concat(className, "__title").concat(naviContent.text ? " ".concat(className, "__title--text") : '') },
                        naviContent.IconComponent && (React.createElement(naviContent.IconComponent, { className: "".concat(className, "__icon"), focusable: false })),
                        React.createElement(SectionTitle, null, naviContent.title)),
                    naviContent.text && React.createElement(Paragraph, null, naviContent.text)),
                React.createElement("div", { className: "".concat(className, "__arrow") },
                    React.createElement(MaterialIcon, { IconComponent: MdKeyboardArrowRight })))))); })));
};
export default CardNavigation;
//# sourceMappingURL=CardNavigation.js.map