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
import { pickCommonProps } from '../../utilities/commonProps';
import { Ascii, Digits } from '../../utilities';
import { filterTextBoxAriaProps, } from '../../utilities/AriaProps';
var useHandlers = function (_a) {
    var value = _a.value, setShowingValue = _a.setShowingValue, onFocus = _a.onFocus, onBlur = _a.onBlur, onChange = _a.onChange, nullable = _a.nullable, decimalLimit = _a.decimalLimit;
    var _b = React.useState(false), isFocused = _b[0], setFocused = _b[1];
    var onFieldFocus = React.useCallback(function (e) {
        setFocused(true);
        // フォーカス時、valueがnullまたはnullableではない状態で0なら空欄化
        if (!value && (!nullable || value !== 0)) {
            setShowingValue('');
        }
        if (onFocus) {
            onFocus(e);
        }
    }, [value, setShowingValue, setFocused, nullable, onFocus]);
    var onFieldBlur = React.useCallback(function (e) {
        setFocused(false);
        if (value) {
            setShowingValue(Digits.formalize(value));
        }
        else if (nullable && value !== 0) {
            setShowingValue('');
        }
        else {
            setShowingValue('0');
        }
        if (onBlur) {
            onBlur(e);
        }
    }, [value, nullable, onBlur, setShowingValue]);
    // decimalLimit が指定されていた場合その桁数以上の小数点を削除する
    var sliceDecimal = React.useCallback(function (numValue) {
        if (numValue == null || decimalLimit == null) {
            return numValue;
        }
        var _a = "".concat(numValue).split('.'), int = _a[0], decimal = _a[1];
        return Number([int, (decimal || '').slice(0, Math.max(decimalLimit, 0)) || undefined]
            .filter(function (v) { return v != null; })
            .join('.'));
    }, [decimalLimit]);
    var onFieldChange = React.useCallback(function (e) {
        var origValue = e.target.value
            .replace('/', '000')
            .replace(/,,$/, ',000');
        setShowingValue(origValue);
        if (onChange) {
            var numValue = nullable && !origValue
                ? null
                : sliceDecimal(Digits.numberize(Ascii.zenkakuToHankaku(origValue)));
            onChange(numValue);
        }
    }, [nullable, onChange, setShowingValue, sliceDecimal]);
    React.useEffect(function () {
        // 非Focus時のみ値の更新をする
        if (!isFocused) {
            if (value) {
                setShowingValue(Digits.formalize(value));
            }
            else if (nullable && value !== 0) {
                setShowingValue('');
            }
            else {
                setShowingValue('0');
            }
        }
    }, [value, nullable, setShowingValue, isFocused]);
    return { onFieldFocus: onFieldFocus, onFieldBlur: onFieldBlur, onFieldChange: onFieldChange };
};
var DigitsInputInner = function (props, ref) {
    var id = props.id, label = props.label, labelledby = props.labelledby, placeholder = props.placeholder, name = props.name, required = props.required, disabled = props.disabled, error = props.error, small = props.small, width = props.width, suffix = props.suffix, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onInput = props.onInput, onKeyDown = props.onKeyDown, value = props.value, nullable = props.nullable, borderless = props.borderless, decimalLimit = props.decimalLimit;
    var marginTop = props.marginTop, marginBottom = props.marginBottom, marginLeft = props.marginLeft, marginRight = props.marginRight, marginSize = props.marginSize;
    var _a = React.useState(value || nullable ? '' : '0'), showingValue = _a[0], setShowingValue = _a[1];
    var _b = useHandlers({
        value: value,
        setShowingValue: setShowingValue,
        onFocus: onFocus,
        onBlur: onBlur,
        onChange: onChange,
        nullable: nullable,
        decimalLimit: decimalLimit,
    }), onFieldFocus = _b.onFieldFocus, onFieldBlur = _b.onFieldBlur, onFieldChange = _b.onFieldChange;
    return (React.createElement(TextField, __assign({ ref: ref, alignRight: true, id: id, label: label, labelledby: labelledby, placeholder: placeholder, name: name, required: required, disabled: disabled, error: error, small: small, width: width, autoComplete: "off", suffix: suffix, value: showingValue, borderless: borderless, onChange: onFieldChange, onFocus: onFieldFocus, onBlur: onFieldBlur, onInput: onInput, onKeyDown: onKeyDown }, { marginTop: marginTop, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginSize: marginSize }, pickCommonProps(props), filterTextBoxAriaProps(props))));
};
/**
 * 入力された数値を3桁ごとに区切って表示する機能をもつテキストフィールドです。
 * 金額や、大きな数値を扱う場合（目安としては 1,000 以上になるのが通常の場合）に使用してください。
 *
 * - 仕様の多くは `TextField` と共通しています
 * - ユーザーの入力値は、表示上はフィールドからフォーカスを外した時点で数値以外の文字は除去され3桁ごとにカンマが挿入されます
 *   - ユーザーの入力を妨げないよう、入力中（フォーカス中）は表示される値を変化させないようになっています
 *   - `onChange` の発火は、ユーザーのキー入力ごとに行われます
 * - 入力値が1〜2桁のことが大半の場合や、小数点を含む可能性が高い場合には、このコンポーネントではなく、 `DecimalInput` を使用することも検討してください
 *   - `DecimalInput` は、 `<input type="number">` としてレンダリングされ、 `max` `min` `step` が使用できるようになります
 *     （`DigitsInput` はカンマを挿入する関係で  `<input type="text">` としています）
 *     - このとき、ブラウザによってスピナーが表示され、`step` で指定した数値を加算・除算できるようになります
 *   - どちらを使うかは、「整数部分の桁数が3〜4桁以上になる頻度」「`step` 単位で加算・除算して調整する頻度」「小数点が含まれる頻度」などから判断してください
 * - デフォルトの挙動では、空欄にしてフォーカスを外すと入力値は `0` となります。 `nullable={true}` にすることで、空欄にすることができるようになります
 * - ユーザーの入力値は `number | null` として `onChange` で取得できます
 *   - 全角文字を半角文字に変換し、不要な文字を消した上で数値として評価します
 *   - 正の数や整数に限定したり、最大・最小値を指定するような処理はDigitsInputでは行っていません。入力値をそれらに限定したい場合は、使用する側でエラーメッセージを出すなどのハンドリングをしてください
 * - `,`を連続で入力するか`/`を入力すると、`000` が挿入されます
 */
var DigitsInput = React.forwardRef(DigitsInputInner);
export default DigitsInput;
//# sourceMappingURL=DigitsInput.js.map