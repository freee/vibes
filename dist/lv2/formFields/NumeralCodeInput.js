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
import TextField from '../../lv1/forms/TextField';
import { Ascii } from '../../utilities';
var NumeralCodeInputInternal = function (props, ref) {
    var acceptSymbols = props.acceptSymbols, value = props.value;
    var _a = React.useState(value || ''), showingValue = _a[0], setShowingValue = _a[1];
    var _b = React.useState(false), isFocused = _b[0], setFocused = _b[1];
    React.useEffect(function () {
        if (!isFocused) {
            setShowingValue(value || '');
        }
    }, [isFocused, value]);
    var pattern = new RegExp("[^0-9".concat(acceptSymbols ? acceptSymbols.join('').replace('-', '\\-') : '', "]"), 'g');
    return (React.createElement(TextField, __assign({}, props, { value: showingValue, onChange: function (e) {
            var currentValue = e.target.value;
            var formatedValue = Ascii.zenkakuToHankaku(currentValue).replace(pattern, '');
            setShowingValue(currentValue);
            props.onChange && props.onChange(formatedValue);
        }, onBlur: function (e) {
            setFocused(false);
            setShowingValue(props.value || '');
            props.onBlur && props.onBlur(e);
        }, onFocus: function (e) {
            setFocused(true);
            props.onFocus && props.onFocus(e);
        }, ref: ref })));
};
/**
 * 電話番号・郵便番号・口座番号のように、数値ではないが数字によって入力する項目に使用できるテキストフィールドです。
 *
 * - 仕様の多くは `TextField` と共通しています
 * - ユーザーの入力値は、表示上はフィールドからフォーカスを外した時点で数字以外の文字は除去されます
 *   - ユーザーの入力を妨げないよう、入力中（フォーカス中）は表示される値を変化させないようになっています
 *   - `onChange` の発火は、ユーザーのキー入力ごとに行われます
 * - 全角文字は半角文字に自動で変換されます
 * - 数字ではなく、数値を扱う場合には `DigitsInput` や `type="number"` にした `TextField` を使用してください
 *   - 入力値として 0 で始まる文字列を期待する場合にはこのコンポーネントを使用してください
 * - `acceptSymbols` に文字の配列を渡すことで、数字以外の文字を許容することができます
 *   -  たとえば `acceptSymbols={['-']}` とすることで、ハイフンの入力を許容することができます
 */
var NumeralCodeInput = React.forwardRef(NumeralCodeInputInternal);
export default NumeralCodeInput;
//# sourceMappingURL=NumeralCodeInput.js.map