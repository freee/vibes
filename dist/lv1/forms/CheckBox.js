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
import vbClassNames from '../../utilities/vbClassNames';
var CheckBoxInternal = function (props, ref) {
    var children = props.children, name = props.name, value = props.value, checked = props.checked, required = props.required, autofocus = props.autofocus, disabled = props.disabled, error = props.error, small = props.small, onChange = props.onChange, onInput = props.onInput, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var className = 'vb-checkbox';
    var classModifier = {
        disabled: disabled,
        error: error,
        small: small,
    };
    return (React.createElement("label", __assign({}, commonProps(props, className, classModifier, {
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginSize: marginSize,
    })),
        React.createElement("input", { type: "checkbox", name: name && name, value: value && value, className: vbClassNames(className + '__control', {
                modifier: classModifier,
            }), disabled: disabled && true, checked: checked && true, required: required && true, autoFocus: autofocus && true, onChange: onChange, onInput: onInput, onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, onKeyUp: onKeyUp, ref: ref }),
        React.createElement("span", { className: className + '__label' }, children)));
};
/**
 * 複数の選択肢から個数に制限なく選択させるときに使用するコンポーネントです。
 *
 * - 「いくつかの選択肢の中からひとつだけを選ぶ」用途には `RadioButton` を使用してください。
 *   - 例外として、ある状態に対して boolean 値のどちらかを選ぶ際に `CheckBox` をひとつだけ置いて選ばせるのはOKです。
 *     - その際には「選択/選択解除したときに何が起こるのか」が明確になるラベルを配置してください
 *     - ON/OFF のふたつの `RadioButton` を置くのもOKです。どちらを使うべきかはスペースの都合や「デフォルト値を設定するべきか」などを考慮して決定してください。
 * - 基本的に、チェックボックスのラベルには句読点は使わないようにしてください。
 *
 * ## accessibility
 * VibesのCheckBoxコンポーネントはブラウザのデフォルト表示の見た目から変更していません。
 * a11yチェックにある「クリックやタッチに反応するサイズが、充分な大きさになっているか」の項目OKにして問題ありません。
 *
 */
var CheckBox = React.forwardRef(CheckBoxInternal);
export default CheckBox;
//# sourceMappingURL=CheckBox.js.map