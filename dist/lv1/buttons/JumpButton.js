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
import { MdChevronRight, MdOpenInNew } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
import Button from './Button';
/**
 * JumpButton は遷移のためのボタンです。別URLへ遷移させることが目的の際に使用してください。
 *
 * - 前の画面に戻るボタンには `BackwardButton` を使用してください
 * - `target="_self"`（同じウィンドウ・タブで開く） の場合は RightChevron アイコン、`target="_blank"` （新しいウィンドウ・タブで開く）の場合は OpenInNew アイコンになります
 * - ListTableの行内に入れる場合など、高さを小さくしたい場合には `small` を使用してください
 * - フォームの送信を伴う場合など、不可逆な遷移をする場合には `Button` を使用してください
 */
var RenderJumpButton = function (props, ref) {
    var children = props.children, url = props.url, appearance = props.appearance, danger = props.danger, disabled = props.disabled, small = props.small, large = props.large, target = props.target, type = props.type, rel = props.rel, onClick = props.onClick, onSelfWindowNavigation = props.onSelfWindowNavigation, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var buttonBaseClass = 'vb-jumpButton';
    return (React.createElement("span", __assign({}, commonProps(props, buttonBaseClass, {}, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginSize: marginSize,
        marginTop: marginTop,
    })),
        React.createElement(Button, { href: url, disabled: disabled, appearance: appearance, danger: danger, small: small, large: large, target: target, rel: rel, type: type, onClick: onClick, onSelfWindowNavigation: onSelfWindowNavigation, IconComponent: target === '_blank' ? MdOpenInNew : MdChevronRight, iconPosition: "right", ref: ref }, children)));
};
var JumpButton = React.forwardRef(RenderJumpButton);
export default JumpButton;
//# sourceMappingURL=JumpButton.js.map