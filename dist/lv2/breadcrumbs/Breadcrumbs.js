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
import { MdChevronRight } from 'react-icons/md';
import InlineLink from '../../lv1/buttons/InlineLink';
import commonProps from '../../utilities/commonProps';
import { SkeletonParagraph } from '../skeleton/SkeletonParagraph';
var Breadcrumbs = function (props) {
    var links = props.links, label = props.label, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-breadcrumbs', {}, { marginTop: marginTop, marginLeft: marginLeft, marginRight: marginRight, marginBottom: marginBottom, marginSize: marginSize })),
        React.createElement("nav", { role: "navigation", "aria-label": label || '現在位置' },
            React.createElement("ul", { className: "vb-breadcrumbs__list" }, links.map(function (linkCont, index) {
                var lastItem = index === links.length - 1;
                var title = linkCont.loading ? (React.createElement(SkeletonParagraph, { size: "small" })) : (React.createElement(React.Fragment, null, linkCont.title));
                return (React.createElement("li", { className: "vb-breadcrumbs__item", key: index, "aria-current": lastItem ? 'page' : undefined },
                    linkCont.url || linkCont.onClick ? (React.createElement(InlineLink, { href: linkCont.url, onClick: linkCont.onClick, onSelfWindowNavigation: linkCont.onSelfWindowNavigation ||
                            linkCont.onClickNavigator }, title)) : (title),
                    !lastItem && (React.createElement(MdChevronRight, { className: "vb-breadcrumbs__divider", "aria-label": ">" }))));
            })))));
};
export default Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.js.map