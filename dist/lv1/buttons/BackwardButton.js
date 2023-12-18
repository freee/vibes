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
import { MdChevronLeft } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
import Button from './Button';
/**
 * BackwardButton は前画面への遷移のためのボタンです。
 *
 * - 「次の画面」「他の画面」への遷移には JumpButton を使用してください
 * - `target="_blank"` は指定できません
 * - ListTableの行内に入れる場合など、高さを小さくしたい場合には `small` を使用してください
 * - フォームの送信を伴う場合など、不可逆な遷移をする場合には `Button` を使用してください
 */
var BackwardButton = function (props) {
    var children = props.children, url = props.url, appearance = props.appearance, danger = props.danger, disabled = props.disabled, small = props.small, large = props.large, type = props.type, onClick = props.onClick, onSelfWindowNavigation = props.onSelfWindowNavigation, rel = props.rel, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var buttonBaseClass = 'vb-backwardButton';
    return (React.createElement("span", __assign({}, commonProps(props, buttonBaseClass, {}, { marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginSize: marginSize, marginTop: marginTop })),
        React.createElement(Button, { href: url, appearance: appearance, danger: danger, disabled: disabled, small: small, large: large, type: type, onClick: onClick, onSelfWindowNavigation: onSelfWindowNavigation, rel: rel, IconComponent: MdChevronLeft, iconPosition: "left" }, children)));
};
export default BackwardButton;
//# sourceMappingURL=BackwardButton.js.map