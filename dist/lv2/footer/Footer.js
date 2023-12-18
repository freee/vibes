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
import AppStoreBadge from '../../lv1/images/AppStoreBadge';
import GooglePlayBadge from '../../lv1/images/GooglePlayBadge';
import commonProps from '../../utilities/commonProps';
export var defaultLinks = [
    {
        title: '利用規約',
        url: 'https://www.freee.co.jp/terms/',
    },
    {
        title: 'プライバシーポリシー',
        url: 'https://www.freee.co.jp/privacy_policy/',
    },
    {
        title: '会社情報',
        url: 'https://corp.freee.co.jp/',
    },
];
function createLinks(links) {
    var linkDatas = links ? links : defaultLinks;
    var linkItems = linkDatas.map(function (linkCont, index) { return (React.createElement("li", { key: index, className: "vb-footerLinks__item" },
        React.createElement("a", { href: linkCont.url, target: "_blank", rel: "noreferrer noopener" }, linkCont.title))); });
    return linkItems;
}
var Footer = function (props) {
    var links = props.links, AppStoreUrl = props.AppStoreUrl, GooglePlayUrl = props.GooglePlayUrl, disableAppStoreBadge = props.disableAppStoreBadge, disableGooglePlayBadge = props.disableGooglePlayBadge, copyright = props.copyright, width = props.width, sectionNode = props.sectionNode;
    var defaultAppStoreUrl = 'https://itunes.apple.com/jp/app/freee/id811207074?l=ja&ls=1&mt=8';
    var defaultGooglePlayUrl = 'https://play.google.com/store/apps/details?id=jp.co.freee.freee';
    var defaultCopyright = '© Copyright 2012-' + new Date().getFullYear() + ' freee K.K.';
    return (React.createElement("footer", __assign({}, commonProps(props, 'vb-footer', {
        widthNarrow: width === 'narrow',
        widthWide: width === 'wide',
    }), { role: "contentinfo" }),
        React.createElement("div", { className: "vb-footerLinksArea" },
            React.createElement("ul", { className: "vb-footerLinks" }, createLinks(links)),
            React.createElement("address", { className: "vb-footerCopyright" }, copyright ? copyright : defaultCopyright)),
        sectionNode ? (React.createElement("div", { className: "vb-footerSection" }, sectionNode)) : (React.createElement("ul", { className: "vb-footerBadges" },
            !disableAppStoreBadge && (React.createElement("li", { className: "vb-footerBadges__item" },
                React.createElement("a", { href: AppStoreUrl ? AppStoreUrl : defaultAppStoreUrl, target: "_blank", rel: "noreferrer noopener" },
                    React.createElement(AppStoreBadge, null)))),
            !disableGooglePlayBadge && (React.createElement("li", { className: "vb-footerBadges__item" },
                React.createElement("a", { href: GooglePlayUrl ? GooglePlayUrl : defaultGooglePlayUrl, target: "_blank", rel: "noreferrer noopener" },
                    React.createElement(GooglePlayBadge, null))))))));
};
export default Footer;
//# sourceMappingURL=Footer.js.map