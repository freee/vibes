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
/**
 * アイコン単体でボタンを配置する場合に使用します
 */
function IconOnlyButtonInner(props, ref) {
    var IconComponent = props.IconComponent, appearance = props.appearance, primary = props.primary, danger = props.danger, disabled = props.disabled, small = props.small, large = props.large, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, label = props.label, type = props.type, href = props.href, target = props.target, rel = props.rel, download = props.download, onSelfWindowNavigation = props.onSelfWindowNavigation, onClick = props.onClick, onKeyDown = props.onKeyDown, onFocus = props.onFocus, onBlur = props.onBlur;
    var buttonBaseClass = 'vb-iconOnlyButton';
    var classModifier = {
        appearancePrimary: appearance
            ? appearance === 'primary'
            : primary || danger,
        appearanceSecondary: appearance === 'secondary' || (!appearance && !primary && !danger),
        appearanceTertiary: appearance === 'tertiary',
        small: small,
        large: large,
        danger: danger,
        disabled: disabled,
    };
    if (href) {
        return (React.createElement("a", __assign({ href: href, target: target, rel: rel || rel === ''
                ? rel
                : target === '_blank'
                    ? 'noopener noreferrer'
                    : undefined, download: download, onClick: function (e) {
                disabled
                    ? e.preventDefault()
                    : onClick && onClick(e);
                if (href) {
                    var navigator_1 = selfWindowNavigator(onSelfWindowNavigation);
                    navigator_1 && navigator_1(e, href);
                }
            }, onKeyDown: onKeyDown, onFocus: onFocus, onBlur: onBlur, "aria-disabled": disabled && true, ref: ref }, filterLinkAriaProps(props), commonProps(props, buttonBaseClass, classModifier, {
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginSize: marginSize,
            marginTop: marginTop,
        }), { "aria-label": label }),
            React.createElement(IconComponent, { className: buttonBaseClass + '__icon' })));
    }
    return (React.createElement("button", __assign({ disabled: disabled && true, onClick: onClick, onKeyDown: onKeyDown, onFocus: onFocus, onBlur: onBlur, ref: ref, "aria-label": label, type: type }, filterButtonAriaProps(props), commonProps(props, buttonBaseClass, classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })),
        React.createElement(IconComponent, { className: buttonBaseClass + '__icon' })));
}
var IconOnlyButton = React.forwardRef(IconOnlyButtonInner);
export default IconOnlyButton;
//# sourceMappingURL=IconOnlyButton.js.map