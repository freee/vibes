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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import TextField from '../../lv1/forms/TextField';
import { Ascii, Digits } from '../../utilities';
var useHandleValue = function (_a) {
    var nullable = _a.nullable, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, places = _a.places, value = _a.value;
    // 数値から小数点を含めた文字列に変換する、その際小数点以下の桁数を指定された桁数で丸める
    var numberToString = React.useCallback(function (value) {
        return nullable && value == null ? '' : (value !== null && value !== void 0 ? value : 0).toFixed(places);
    }, [nullable, places]);
    // 小数点が含まれた文字列を数値に変換する、その際小数点以下の桁数を指定された桁数で丸める
    var stringToNumber = function (value) {
        return nullable && !value
            ? null
            : Number(Digits.numberize(Ascii.zenkakuToHankaku(value)).toFixed(places));
    };
    var _b = React.useState(false), isFocused = _b[0], setFocused = _b[1];
    var _c = React.useState(numberToString(value)), showingValue = _c[0], setShowingValue = _c[1];
    React.useEffect(function () {
        // 非フォーカス時のみ value の値が変わった場合に表示値を更新する
        !isFocused && setShowingValue(numberToString(value));
    }, [isFocused, numberToString, setShowingValue, value]);
    var handleBlur = function (e) {
        var _a;
        setFocused(false);
        var value = e.target.value;
        setShowingValue(String((_a = stringToNumber(value)) !== null && _a !== void 0 ? _a : ''));
        onBlur && onBlur(e);
    };
    var handleChange = function (e) {
        var value = e.target.value;
        setShowingValue(value);
        onChange && onChange(stringToNumber(value));
    };
    var handleFocus = function (e) {
        setFocused(true);
        onFocus && onFocus(e);
    };
    return {
        handleBlur: handleBlur,
        handleChange: handleChange,
        handleFocus: handleFocus,
        showingValue: showingValue,
    };
};
/**
 * 入力値が1〜2桁のことが大半の場合や、小数点を含む可能性が高い数値入力用のコンポーネントです。
 *
 * - 仕様の多くは `TextField` と共通しています。
 * - `<input type="number">` としてレンダリングされ、 `max` `min` `step` が使用できます。
 *   - ブラウザによってスピナーが表示され、`step` で指定した数値を加算・減産できるようになります。
 * - 金額や、小数点以下の無い大きな数値を扱う場合は DigitsInput を使用してください。
 *   - どちらを使うかは、「整数部分の桁数が3〜4桁以上になる頻度」「`step` 単位で加算・除算して調整する頻度」「小数点が含まれる頻度」などから判断してください
 * - places オプションで小数点以下の表示桁数を指定します。それ以上の精度の小数点以下の数値はフォーカスが離れたときに指定の精度まで `toFixed()` で丸められます。
 */
var DecimalInput = function (props) {
    var nullable = props.nullable, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, _a = props.places, places = _a === void 0 ? 2 : _a, _b = props.step, step = _b === void 0 ? 1 / Math.pow(10, places) : _b, value = props.value, others = __rest(props, ["nullable", "onBlur", "onChange", "onFocus", "places", "step", "value"]);
    var _c = useHandleValue({
        nullable: nullable,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        places: places,
        value: value,
    }), handleBlur = _c.handleBlur, handleChange = _c.handleChange, handleFocus = _c.handleFocus, showingValue = _c.showingValue;
    return (React.createElement(TextField, __assign({}, others, { autoComplete: "off", onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus, step: step, type: "number", value: showingValue })));
};
export default DecimalInput;
//# sourceMappingURL=DecimalInput.js.map