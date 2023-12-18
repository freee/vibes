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
import IconOnlyButton from './IconOnlyButton';
/**
 * IconOnlyJumpButton は遷移のためのボタンです。別URLへ遷移させることが目的の際に使用してください。
 *
 * - 文字列として遷移先を表現できないので、「次の画面へ進む」のように遷移先が自明な場合にのみ使用してください。
 * - `buttonLabel` に必ず代替テキストを設定してください
 * - 前の画面に戻るボタンには `IconOnlyBackwardButton` を使用してください
 * - `target="_self"`（同じウィンドウ・タブで開く） の場合は RightChevron アイコン、`target="_blank"` （新しいウィンドウ・タブで開く）の場合は OpenInNew アイコンになります
 * - ListTableの行内に入れる場合など、高さを小さくしたい場合には `small` を使用してください
 */
export default function IconOnlyJumpButton(props) {
    var buttonLabel = props.buttonLabel, url = props.url, appearance = props.appearance, danger = props.danger, disabled = props.disabled, small = props.small, large = props.large, target = props.target, type = props.type, rel = props.rel, onClick = props.onClick, onSelfWindowNavigation = props.onSelfWindowNavigation;
    var buttonBaseClass = 'vb-jumpButton';
    return (React.createElement("span", __assign({}, commonProps(props, buttonBaseClass)),
        React.createElement(IconOnlyButton, { label: buttonLabel, href: url, disabled: disabled, appearance: appearance, danger: danger, small: small, large: large, target: target, rel: rel, type: type, onClick: onClick, onSelfWindowNavigation: onSelfWindowNavigation, IconComponent: target === '_blank' ? MdOpenInNew : MdChevronRight })));
}
//# sourceMappingURL=IconOnlyJumpButton.js.map