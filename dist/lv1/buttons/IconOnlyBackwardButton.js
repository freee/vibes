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
import IconOnlyButton from './IconOnlyButton';
/**
 * IconOnlyBackwardButton は前画面への遷移のためのボタンです。
 *
 * - 文字列として遷移先を表現できないので、「次の画面へ進む」のように遷移先が自明な場合にのみ使用してください。
 * - `buttonLabel` に必ず代替テキストを設定してください
 * - 「次の画面」「他の画面」への遷移には IconOnlyJumpButton を使用してください
 * - `target="_blank"` は指定できません
 * - ListTableの行内に入れる場合など、高さを小さくしたい場合には `small` を使用してください
 */
var IconOnlyBackwardButton = function (props) {
    var buttonLabel = props.buttonLabel, url = props.url, appearance = props.appearance, danger = props.danger, disabled = props.disabled, small = props.small, large = props.large, type = props.type, onClick = props.onClick, onSelfWindowNavigation = props.onSelfWindowNavigation, rel = props.rel;
    var buttonBaseClass = 'vb-backwardButton';
    return (React.createElement("span", __assign({}, commonProps(props, buttonBaseClass)),
        React.createElement(IconOnlyButton, { label: buttonLabel, href: url, appearance: appearance, danger: danger, disabled: disabled, small: small, large: large, type: type, onClick: onClick, onSelfWindowNavigation: onSelfWindowNavigation, rel: rel, IconComponent: MdChevronLeft })));
};
export default IconOnlyBackwardButton;
//# sourceMappingURL=IconOnlyBackwardButton.js.map