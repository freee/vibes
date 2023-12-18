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
import React, { useCallback, useEffect, useState } from 'react';
import TextField from '../../lv1/forms/TextField';
var presetFormatters = {
    postalCode: {
        preprocess: function (v) { return v.normalize('NFKC').replace(/[-\s]/g, ''); },
        format: function (v) { return v.replace(/^(.{3})(.+)/, '$1-$2'); },
    },
    corporateNumber: {
        preprocess: function (v) { return v.normalize('NFKC').replace(/[-\s]/g, ''); },
        format: function (v) {
            return v.replace(/^(.{1})(.{4})?(.{4})?(.+)/, function (_, p1, p2, p3, p4) {
                return [p1, p2, p3, p4].filter(function (p) { return p != null; }).join(' ');
            });
        },
    },
    invoiceRegistrationCompanyNumber: {
        preprocess: function (v) { return v.normalize('NFKC').replace(/^[tT]|[-\s]/g, ''); },
        format: function (v) { return "T".concat(presetFormatters.corporateNumber.format(v)); },
    },
};
/**
 * 入力された文字を自動的に整形する入力欄です。
 *
 * ## 書式の指定
 *
 *  `preset` で書式を指定できます。
 *
 * | preset | 書式 | 用途 |
 * |:--|:--|:--|
 * | `postalCode` | `###-####` | 郵便番号 |
 * | `corporateNumber` | `# #### #### ####` | 法人番号 |
 * | `invoiceRegistrationCompanyNumber` | `T# #### #### ####` | 適格請求書発行事業者登録番号 |
 *
 *  また `formatter` を指定することで任意の書式に整形することも可能です。
 *
 * ## 値の参照
 *
 * 値を参照する際は `onChangePreprocessedValue` または `onChangeFormattedValue` をご利用ください。
 *
 * `onChange` は処理前の値が参照されるため、表示内容と異なる値が参照されることがあります。
 *
 * なおいずれの値も、桁あふれや不正な文字の除去等は行われません。
 *
 */
export default function FormattedTextField(_a) {
    var _b, _c;
    var props = __rest(_a, []);
    var onChange = props.onChange, onChangePreprocessedValue = props.onChangePreprocessedValue, onChangeFormattedValue = props.onChangeFormattedValue;
    var _d = useState((_b = props.value) !== null && _b !== void 0 ? _b : ''), value = _d[0], setValue = _d[1];
    var _e = useState(''), preprocessedValue = _e[0], setPreprocessedValue = _e[1];
    var _f = useState(''), formattedValue = _f[0], setFormattedValue = _f[1];
    var onChangeInternal = useCallback(function (e) {
        var _a;
        setValue((_a = e.target.value) !== null && _a !== void 0 ? _a : '');
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [onChange]);
    var _g = (_c = props.formatter) !== null && _c !== void 0 ? _c : presetFormatters[props.preset], format = _g.format, preprocess = _g.preprocess;
    useEffect(function () {
        setPreprocessedValue(preprocess ? preprocess(value) : value);
    }, [value, preprocess]);
    useEffect(function () {
        setFormattedValue(format(preprocessedValue));
    }, [preprocessedValue, format]);
    useEffect(function () {
        onChangePreprocessedValue === null || onChangePreprocessedValue === void 0 ? void 0 : onChangePreprocessedValue(preprocessedValue);
    }, [onChangePreprocessedValue, preprocessedValue]);
    useEffect(function () {
        onChangeFormattedValue === null || onChangeFormattedValue === void 0 ? void 0 : onChangeFormattedValue(formattedValue);
    }, [onChangeFormattedValue, formattedValue]);
    return (React.createElement(TextField, __assign({}, __assign(__assign({}, props), { onChange: onChangeInternal, value: formattedValue }))));
}
//# sourceMappingURL=FormattedTextField.js.map