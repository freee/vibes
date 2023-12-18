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
import commonProps from '../../utilities/commonProps';
import { filterButtonAriaProps, filterLinkAriaProps, } from '../../utilities/AriaProps';
import selfWindowNavigator from '../../utilities/selfWindowNavigator';
import { MdOpenInNew } from 'react-icons/md';
/**
 *
 * 配置された場所のフォントにスタイルをあわせつつ、「青文字」・「アンダーライン」でボタンまたはリンクであることを表現するコンポーネントです。
 *
 * 本文や注釈などの中にリンクを配置したい場合には、こちらを使用してください。
 *
 *
 * - 文字サイズは配置された場所に従います
 * - 見た目はボタンですが、セマンティクス上はリンクにもボタンにもなります
 *   - `href` を指定すると `<a>` 要素、指定しないと `<button>` 要素となります。
 *   - `href` を指定できない（遷移先のURLが存在しない）場合は `href` を指定しないでください（`#` を入れたりしないでください）
 * - `target` に `_blank` を指定すると OpenInNew アイコンが表示されます
 * - react-router 等を使用している場合は、遷移時の処理を `onSelfWindowNavigation` に指定してください
 * - `Button` コンポーネント（特に `appearance="tertiary"` を指定したもの）との使い分け方については、 `Button` コンポーネントの解説を参照してください。
 *
 * 名称は「インライン」の「リンク」ですが、これは配置場所や目的を制限するものではありません。
 * 文中や文尾以外の場所への配置も、「ボタン」としての使用もすることができます。
 */
var InlineLink = function (props) {
    var href = props.href, children = props.children, rel = props.rel, target = props.target, disabled = props.disabled, onClick = props.onClick, onSelfWindowNavigation = props.onSelfWindowNavigation;
    var baseClassName = 'vb-inlineLink';
    var classModifier = {
        disabled: disabled,
    };
    var icon = target === '_blank' && (React.createElement("span", { className: "".concat(baseClassName, "__iconWrapper"), role: "img", "aria-hidden": "true" },
        React.createElement("span", { className: "".concat(baseClassName, "__icon") },
            React.createElement(MdOpenInNew, null))));
    if (href) {
        return (React.createElement("a", __assign({ href: href }, commonProps(props, baseClassName, classModifier), filterLinkAriaProps(props), { rel: rel ? rel : target === '_blank' ? 'noopener noreferrer' : undefined, target: target, "aria-disabled": disabled && true, onClick: function (e) {
                if (disabled) {
                    e.preventDefault();
                    return;
                }
                if (onClick) {
                    onClick(e);
                }
                var navigator = selfWindowNavigator(onSelfWindowNavigation);
                if (navigator) {
                    navigator(e, href);
                }
            } }),
            children,
            icon));
    }
    return (React.createElement("button", __assign({ disabled: disabled && true, onClick: onClick, type: "button" }, commonProps(props, baseClassName, classModifier), filterButtonAriaProps(props)),
        children,
        icon));
};
export default InlineLink;
//# sourceMappingURL=InlineLink.js.map