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
import commonProps from '../../utilities/commonProps';
import DigitInput from '../formFields/DigitsInput';
var AmountRangeField = function (_a) {
    var required = _a.required, disabled = _a.disabled, error = _a.error, originalMinAmount = _a.minAmount, minAmountId = _a.minAmountId, minAmountName = _a.minAmountName, minAmountLabel = _a.minAmountLabel, minAmountLabelledby = _a.minAmountLabelledby, minAmountPlaceholder = _a.minAmountPlaceholder, originalMaxAmount = _a.maxAmount, maxAmountId = _a.maxAmountId, maxAmountName = _a.maxAmountName, maxAmountLabel = _a.maxAmountLabel, maxAmountLabelledby = _a.maxAmountLabelledby, maxAmountPlaceholder = _a.maxAmountPlaceholder, small = _a.small, nullable = _a.nullable, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, onInput = _a.onInput, onKeyDown = _a.onKeyDown, rest = __rest(_a, ["required", "disabled", "error", "minAmount", "minAmountId", "minAmountName", "minAmountLabel", "minAmountLabelledby", "minAmountPlaceholder", "maxAmount", "maxAmountId", "maxAmountName", "maxAmountLabel", "maxAmountLabelledby", "maxAmountPlaceholder", "small", "nullable", "onChange", "onFocus", "onBlur", "onInput", "onKeyDown"]);
    var _b = React.useState(originalMinAmount || null), minAmount = _b[0], setMinAmount = _b[1];
    var _c = React.useState(originalMaxAmount || null), maxAmount = _c[0], setMaxAmount = _c[1];
    React.useEffect(function () {
        setMinAmount(originalMinAmount || null);
    }, [originalMinAmount]);
    React.useEffect(function () {
        setMaxAmount(originalMaxAmount || null);
    }, [originalMaxAmount]);
    var handleBlurMinAmount = React.useCallback(function (e) {
        if (onBlur) {
            onBlur(e);
        }
        if (onChange) {
            if (minAmount && maxAmount && minAmount > maxAmount) {
                // 最小値と最大値が逆行する場合は最大値を最小値に合わせる
                onChange([minAmount, minAmount]);
            }
            else {
                onChange([minAmount, maxAmount]);
            }
        }
    }, [maxAmount, minAmount, onBlur, onChange]);
    var handleBlurMaxAmount = React.useCallback(function (e) {
        if (onBlur) {
            onBlur(e);
        }
        if (onChange) {
            if (minAmount && maxAmount && minAmount > maxAmount) {
                // 最小値と最大値が逆行する場合は最小値を最大値に合わせる
                onChange([maxAmount, maxAmount]);
            }
            else {
                onChange([minAmount, maxAmount]);
            }
        }
    }, [maxAmount, minAmount, onBlur, onChange]);
    return (React.createElement("div", __assign({}, commonProps(rest, 'vb-amountRangeField')),
        React.createElement(DigitInput, { id: minAmountId, label: minAmountLabel !== null && minAmountLabel !== void 0 ? minAmountLabel : '最小値', labelledby: minAmountLabelledby, name: minAmountName, value: minAmount, required: required, disabled: disabled, error: error, placeholder: minAmountPlaceholder, onChange: setMinAmount, onFocus: onFocus, onBlur: handleBlurMinAmount, onInput: onInput, onKeyDown: onKeyDown, small: small, nullable: nullable, width: "small" }),
        React.createElement("span", null, "\u00A0\u301C\u00A0"),
        React.createElement(DigitInput, { id: maxAmountId, label: maxAmountLabel !== null && maxAmountLabel !== void 0 ? maxAmountLabel : '最大値', labelledby: maxAmountLabelledby, name: maxAmountName, value: maxAmount, required: required, disabled: disabled, error: error, placeholder: maxAmountPlaceholder, onChange: setMaxAmount, onFocus: onFocus, onBlur: handleBlurMaxAmount, onInput: onInput, onKeyDown: onKeyDown, small: small, nullable: nullable, width: "small" })));
};
export default AmountRangeField;
//# sourceMappingURL=AmountRangeField.js.map