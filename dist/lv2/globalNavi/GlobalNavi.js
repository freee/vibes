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
import SearchField from '../../lv1/forms/SearchField';
import { MdHome } from 'react-icons/md';
import GlobalNaviButton from '../../lv1/buttons/GlobalNaviButton';
import commonProps from '../../utilities/commonProps';
var baseClass = 'vb-globalNavi';
var listClass = baseClass + 'List';
var defaultLinks = [
    {
        title: 'ホーム',
        url: '/',
        IconComponent: MdHome,
        current: true,
    },
];
function createLinks(links) {
    var linkData = links ? links : defaultLinks;
    return linkData.map(function (linkCont, index) { return (React.createElement("li", { className: listClass + '__item', key: index },
        React.createElement(GlobalNaviButton, { IconComponent: linkCont.IconComponent, current: linkCont.current, href: linkCont.url, onSelfWindowNavigation: linkCont.onSelfWindowNavigation, "data-guide": linkCont['data-guide'], "data-test": linkCont['data-test'], "data-tracking": linkCont['data-tracking'], "data-masking": linkCont['data-masking'] }, linkCont.title))); });
}
var AdditionalQueryParams = function (_a) {
    var queryParams = _a.queryParams;
    if (!queryParams) {
        return null;
    }
    return (React.createElement(React.Fragment, null, Object.keys(queryParams).map(function (key) {
        return queryParams[key] ? (React.createElement("input", { key: key, type: "hidden", name: key, value: queryParams[key] })) : null;
    })));
};
export default function GlobalNavi(props) {
    var _a = props.disableGutters, disableGutters = _a === void 0 ? false : _a, label = props.label, links = props.links, searchUrl = props.searchUrl, hideHelpForm = props.hideHelpForm, searchQueryParams = props.searchQueryParams, sectionNode = props.sectionNode;
    var actionUrl = searchUrl
        ? searchUrl
        : 'https://support.freee.co.jp/hc/ja/search';
    return (React.createElement("nav", __assign({ "aria-label": label, role: "navigation" }, commonProps(props, baseClass, { disableGutters: disableGutters })),
        React.createElement("ul", { className: baseClass + 'List' }, createLinks(links)),
        sectionNode && React.createElement("div", null, sectionNode),
        !sectionNode && !hideHelpForm && (React.createElement("form", { action: actionUrl, method: "get", target: "_blank", acceptCharset: "UTF-8", autoComplete: "off" },
            React.createElement("input", { name: "utf8", type: "hidden", value: "\u2713" }),
            React.createElement(AdditionalQueryParams, { queryParams: searchQueryParams }),
            React.createElement(SearchField, { label: "\u30D8\u30EB\u30D7\u3092\u691C\u7D22", placeholder: "\u30D8\u30EB\u30D7\u3092\u691C\u7D22", name: "query", small: true })))));
}
//# sourceMappingURL=GlobalNavi.js.map