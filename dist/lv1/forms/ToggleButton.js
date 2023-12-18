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
/**
 * **ラジオボタンやチェックボックスの代替** として、オンオフを制御するボタンとして使用します。
 * 複数のオンオフ制御をグループ化して、くっつけて表示できます。
 *
 * - `last-child` `first-child` のスタイル指定があるので、グループごとに同一の親要素をもつようにしてください
 * - グループ内で複数選択可能な場合は `type="checkbox"` ひとつしか選択できない場合は `type="radio"` で使用し、同一グループ内で違うtypeが混在しないようにしてください。
 * - ラジオボタンやチェックボックスの代替なので、アクションボタンとしては使用しないでください
 */
var ToggleButton = function (props) {
    var type = props.type, name = props.name, children = props.children, value = props.value, toggled = props.toggled, small = props.small, disabled = props.disabled, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, onInput = props.onInput, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp;
    var className = 'vb-toggleButton';
    return (React.createElement("label", __assign({}, commonProps(props, className, { small: small, disabled: disabled })),
        React.createElement("input", { className: "".concat(className, "__input"), type: type, name: name, value: value, checked: toggled, disabled: disabled, onChange: onChange, onInput: onInput, onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, onKeyUp: onKeyUp }),
        React.createElement("span", { className: "".concat(className, "__body") }, children)));
};
export default ToggleButton;
//# sourceMappingURL=ToggleButton.js.map