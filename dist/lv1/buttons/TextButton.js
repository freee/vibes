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
import { KeyCodes } from '../../utilities/keyboard';
import { filterButtonAriaProps, filterLinkAriaProps, } from '../../utilities/AriaProps';
/**
 * このコンポーネントの使用は **非推奨** です。
 * 文中にリンクを配置したい場合は `InlineLink` を、それ以外の場所では `Button` を `appearance="tertiary"` で使用してください。
 */
var TextButton = function (props) {
    var children = props.children, IconComponent = props.IconComponent, iconPosition = props.iconPosition, id = props.id, url = props.url, target = props.target, rel = props.rel, noBorder = props.noBorder, disabled = props.disabled, small = props.small, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize, onClick = props.onClick;
    var buttonClass = 'vb-textButton';
    var classModifier = {
        noBorder: noBorder,
        small: small,
        disabled: disabled,
    };
    return (React.createElement("span", __assign({}, commonProps(props, buttonClass, classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })),
        !!IconComponent && iconPosition !== 'right' && (React.createElement(IconComponent, { className: "".concat(buttonClass, "__icon"), focusable: false })),
        url ? (React.createElement("a", __assign({ className: buttonClass + '__link', id: id, href: !disabled ? url : undefined, target: target ? target : '_self', onClick: !disabled ? onClick : undefined, "aria-disabled": disabled && true, rel: rel }, filterLinkAriaProps(props)), children)) : (React.createElement("span", __assign({ id: id, role: "button", tabIndex: 0, onClick: !disabled ? onClick : undefined, onKeyDown: function (e) {
                !disabled && e.keyCode === KeyCodes.ENTER && onClick && onClick(e);
            }, className: buttonClass + '__button', "aria-disabled": disabled && true }, filterButtonAriaProps(props)), children)),
        !!IconComponent && iconPosition === 'right' && (React.createElement(IconComponent, { className: "".concat(buttonClass, "__icon ").concat(buttonClass, "__icon--right"), focusable: false }))));
};
export default TextButton;
//# sourceMappingURL=TextButton.js.map