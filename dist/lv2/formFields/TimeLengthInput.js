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
import TimeInput from './TimeInput';
import { Mins } from '../../utilities';
var useHandleValue = function (_a) {
    var nullable = _a.nullable, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, value = _a.value;
    // mins を hh:mm に変換する
    var numberToString = React.useCallback(function (value) {
        return value === null && nullable ? null : Mins.minToStr(value !== null && value !== void 0 ? value : 0);
    }, [nullable]);
    // hh:mm を mins に変換する
    var stringToNumber = React.useCallback(function (value) {
        return value === null && nullable ? null : Mins.strToMin(value !== null && value !== void 0 ? value : '');
    }, [nullable]);
    var _b = React.useState(false), isFocused = _b[0], setFocused = _b[1];
    var _c = React.useState(numberToString(value)), showingValue = _c[0], setShowingValue = _c[1];
    React.useEffect(function () {
        // 非フォーカス時のみ value の値が変わった場合に表示値を更新する
        !isFocused && setShowingValue(numberToString(value));
    }, [isFocused, numberToString, setShowingValue, value]);
    var handleBlur = function (e) {
        setFocused(false);
        onBlur && onBlur(e);
    };
    var handleChange = function (value) {
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
var TimeLengthInput = function (props) {
    var nullable = props.nullable, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, value = props.value, others = __rest(props, ["nullable", "onBlur", "onChange", "onFocus", "value"]);
    var _a = useHandleValue({
        nullable: nullable,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        value: value,
    }), handleBlur = _a.handleBlur, handleChange = _a.handleChange, handleFocus = _a.handleFocus, showingValue = _a.showingValue;
    return (React.createElement(TimeInput, __assign({}, others, { nullable: nullable, onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus, value: showingValue })));
};
export default TimeLengthInput;
//# sourceMappingURL=TimeLengthInput.js.map