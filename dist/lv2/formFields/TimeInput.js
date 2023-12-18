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
import { Ascii, TimeString } from '../../utilities';
var useHandleValue = function (_a) {
    var _b;
    var minTime = _a.minTime, maxTime = _a.maxTime, nullable = _a.nullable, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onKeyDown = _a.onKeyDown, value = _a.value;
    // hh:mm に変換する
    var convert = React.useCallback(function (value) {
        return !value && nullable
            ? null
            : TimeString.convert(Ascii.zenkakuToHankaku(value !== null && value !== void 0 ? value : ''), minTime, maxTime);
    }, [nullable, minTime, maxTime]);
    var _c = React.useState(false), isFocused = _c[0], setFocused = _c[1];
    var _d = React.useState((_b = convert(value)) !== null && _b !== void 0 ? _b : ''), showingValue = _d[0], setShowingValue = _d[1];
    var _e = React.useState(null), selectionRange = _e[0], setSelectionRange = _e[1];
    var ref = React.useRef(null);
    React.useEffect(function () {
        var _a;
        // 非フォーカス時のみ value の値が変わった場合に表示値を更新する
        !isFocused && setShowingValue((_a = convert(value)) !== null && _a !== void 0 ? _a : '');
    }, [convert, isFocused, setShowingValue, value]);
    React.useEffect(function () {
        var _a;
        // 値が変わった場合に選択範囲を再設定する
        if (selectionRange) {
            var start = selectionRange[0], end = selectionRange[1];
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end);
        }
    }, [showingValue, selectionRange]);
    var handleBlur = function (e) {
        var _a;
        setFocused(false);
        var value = e.target.value;
        setShowingValue((_a = convert(value)) !== null && _a !== void 0 ? _a : '');
        setSelectionRange(null);
        onBlur && onBlur(e);
    };
    var handleChange = function (e) {
        var value = e.target.value;
        setShowingValue(value);
        onChange && onChange(convert(value));
    };
    var handleFocus = function (e) {
        setFocused(true);
        onFocus && onFocus(e);
    };
    var handleKeyDown = function (e) {
        var _a;
        // 上下矢印キー押下時に時間を増減する
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            // キャレット位置を取得して、:より前なら時間、後なら分を対象にする
            var position = (_a = e.currentTarget.selectionEnd) !== null && _a !== void 0 ? _a : 0;
            var regexp = /[:：]/g;
            var forward = regexp.test(e.currentTarget.value) && regexp.lastIndex > position;
            var offset = e.key === 'ArrowUp' ? 1 : -1;
            // 時間 or 分を増減
            var hours = TimeString.getHour(showingValue);
            var minutes = TimeString.getMin(showingValue);
            if (forward) {
                hours += offset;
            }
            else {
                minutes += offset * 10;
            }
            // 操作の結果 0min 以下だった場合は 00:00 に修正する
            if (hours * 60 + minutes < 0) {
                hours = 0;
                minutes = 0;
            }
            var timeString = TimeString.createTimeString(hours, minutes);
            var newValue = TimeString.convert(timeString, minTime, maxTime);
            // caret の選択範囲を操作中の項目に設定するために range を計算する
            var range = void 0;
            if (forward) {
                range = [0, newValue.indexOf(':')];
            }
            else {
                range = [newValue.indexOf(':') + 1, newValue.length];
            }
            setShowingValue(newValue);
            setSelectionRange(range);
            onChange && onChange(newValue);
        }
        else {
            setSelectionRange(null);
        }
        onKeyDown && onKeyDown(e);
    };
    return {
        handleBlur: handleBlur,
        handleChange: handleChange,
        handleFocus: handleFocus,
        handleKeyDown: handleKeyDown,
        ref: ref,
        showingValue: showingValue,
    };
};
var TimeInput = function (props) {
    var large = props.large, minTime = props.minTime, maxTime = props.maxTime, nullable = props.nullable, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, onKeyDown = props.onKeyDown, value = props.value, 
    // large の場合は幅が収まらないので一回り大きくする
    _a = props.width, 
    // large の場合は幅が収まらないので一回り大きくする
    width = _a === void 0 ? large ? 'small' : 'xSmall' : _a, others = __rest(props, ["large", "minTime", "maxTime", "nullable", "onBlur", "onChange", "onFocus", "onKeyDown", "value", "width"]);
    var _b = useHandleValue({
        minTime: minTime,
        maxTime: maxTime,
        nullable: nullable,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        onKeyDown: onKeyDown,
        value: value,
    }), handleBlur = _b.handleBlur, handleChange = _b.handleChange, handleFocus = _b.handleFocus, handleKeyDown = _b.handleKeyDown, ref = _b.ref, showingValue = _b.showingValue;
    return (React.createElement(TextField, __assign({}, others, { autoComplete: "off", large: large, onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus, onKeyDown: handleKeyDown, ref: ref, value: showingValue, width: width })));
};
export default TimeInput;
//# sourceMappingURL=TimeInput.js.map