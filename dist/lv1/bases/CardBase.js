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
import selfWindowNavigator from '../../utilities/selfWindowNavigator';
import { useResponsive } from '../../utilities/VibesProvider';
/**
 * グルーピングされた要素を表示するときに使用するパーツです。
 *
 * 同等のグルーピングが複数並ぶ場合、例えばコレクションにおけるひとつのオブジェクトであったり、設定における複数カテゴリを同じ画面で並べる場合に用います。
 *
 * 周囲に24dpのpaddingが入ります。
 *
 * - `DialogBase` や `PopupBase` との混同に注意してください。
 *   - ポップアップコンテンツ（ドロップダウンメニューやコンボボックス等）に使用するべきなのは `PopupBase` です
 *   - モーダルダイアログに使用するべきなのは `DialogBase` です
 *   - `CardBase` は、これらとはシャドウのスタイルが違います。
 * - カード自体をクリック可能にする場合（ボタンやリンクとして使用する場合）は、`clickable` を `true` にしてください
 *   - react-router 等を使用している場合は、遷移時の処理を `onSelfWindowNavigation` に指定してください
 */
var CardBase = function (props) {
    var children = props.children, small = props.small, paddingSize = props.paddingSize, inline = props.inline, clickable = props.clickable, disabled = props.disabled, url = props.url, target = props.target, rel = props.rel, onClick = props.onClick, _a = props.overflowHidden, overflowHidden = _a === void 0 ? true : _a, onSelfWindowNavigation = props.onSelfWindowNavigation, marginBottom = props.marginBottom, marginLeft = props.marginLeft, marginRight = props.marginRight, marginSize = props.marginSize, marginTop = props.marginTop;
    var className = 'vb-cardBase';
    return (React.createElement("div", __assign({}, commonProps(props, className, {
        paddingSmall: small || paddingSize === 'small',
        paddingZero: paddingSize === 'zero',
        paddingLarge: paddingSize === 'large',
        // レスポンシブなpaddingの変更は、inlineでなく、paddingSizeが無指定の場合のみ行う
        paddingResponsive: useResponsive() && !inline && !small && !paddingSize,
        inline: inline,
        disabled: disabled,
        clickable: clickable,
        overflowHidden: overflowHidden,
    }, { marginBottom: marginBottom, marginLeft: marginLeft, marginTop: marginTop, marginSize: marginSize, marginRight: marginRight })), clickable ? (url ? (React.createElement("a", { className: "".concat(className, "__link").concat(disabled ? " ".concat(className, "__link--disabled") : ''), href: url, target: target, rel: rel
            ? rel
            : target === '_blank'
                ? 'noopener noreferrer'
                : undefined, "aria-disabled": disabled, onClick: function (e) {
            if (disabled) {
                e.preventDefault();
                return;
            }
            if (onClick) {
                onClick(e);
            }
            var navigator = selfWindowNavigator(onSelfWindowNavigation);
            if (navigator) {
                navigator(e, url);
            }
        } },
        React.createElement("div", { className: "".concat(className, "__content") }, children))) : (React.createElement("button", { className: "".concat(className, "__button").concat(disabled ? " ".concat(className, "__button--disabled") : ''), onClick: onClick, disabled: disabled },
        React.createElement("div", { className: "".concat(className, "__content") }, children)))) : (children)));
};
export default CardBase;
//# sourceMappingURL=CardBase.js.map