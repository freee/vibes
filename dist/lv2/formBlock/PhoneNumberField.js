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
import vbClassNames from '../../utilities/vbClassNames';
import commonProps from '../../utilities/commonProps';
var MAX_LENGTH_A = 5;
var MAX_LENGTH_B = 4;
var MAX_LENGTH_C = 4;
var PhoneNumberField = function (props) {
    var phoneNumberA = props.phoneNumberA, phoneNumberB = props.phoneNumberB, phoneNumberC = props.phoneNumberC, placeholderA = props.placeholderA, placeholderB = props.placeholderB, placeholderC = props.placeholderC, disabled = props.disabled, error = props.error, small = props.small, autoComplete = props.autoComplete, onChange = props.onChange, onInput = props.onInput, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    var hyphenClassName = vbClassNames('vb-phoneNumberField__hyphen', {
        modifier: { disabled: disabled, error: error, small: small },
    });
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-phoneNumberField', {}, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })),
        React.createElement(TextField, { type: "tel", name: "areaCode", label: "\u96FB\u8A71\u756A\u53F7\u306E\u5E02\u5916\u5C40\u756A", value: phoneNumberA, placeholder: placeholderA, maxLength: MAX_LENGTH_A, width: "xSmall", alignCenter: true, disabled: disabled, error: error, small: small, autoComplete: autoComplete === 'tel' ? 'tel-area-code' : autoComplete, onChange: function (e) {
                onChange && onChange('a', e);
            }, onInput: function (e) {
                onInput && onInput('a', e);
            }, onFocus: function (e) {
                onFocus && onFocus('a', e);
            }, onBlur: function (e) {
                onBlur && onBlur('a', e);
            }, onKeyDown: function (e) {
                onKeyDown && onKeyDown('a', e);
            } }),
        React.createElement("span", { className: hyphenClassName }, "-"),
        React.createElement(TextField, { type: "tel", name: "prefix", label: "\u96FB\u8A71\u756A\u53F7\u306E\u5E02\u5185\u5C40\u756A", value: phoneNumberB, placeholder: placeholderB, maxLength: MAX_LENGTH_B, width: "xSmall", alignCenter: true, disabled: disabled, error: error, small: small, autoComplete: autoComplete === 'tel' ? 'tel-local-prefix' : autoComplete, onChange: function (e) {
                onChange && onChange('b', e);
            }, onInput: function (e) {
                onInput && onInput('b', e);
            }, onFocus: function (e) {
                onFocus && onFocus('b', e);
            }, onBlur: function (e) {
                onBlur && onBlur('b', e);
            }, onKeyDown: function (e) {
                onKeyDown && onKeyDown('b', e);
            } }),
        React.createElement("span", { className: hyphenClassName }, "-"),
        React.createElement(TextField, { type: "tel", name: "lineNumber", label: "\u96FB\u8A71\u756A\u53F7\u306E\u52A0\u5165\u8005\u756A\u53F7", value: phoneNumberC, placeholder: placeholderC, maxLength: MAX_LENGTH_C, width: "xSmall", alignCenter: true, disabled: disabled, error: error, small: small, autoComplete: autoComplete === 'tel' ? 'tel-local-suffix' : autoComplete, onChange: function (e) {
                onChange && onChange('c', e);
            }, onInput: function (e) {
                onInput && onInput('c', e);
            }, onFocus: function (e) {
                onFocus && onFocus('c', e);
            }, onBlur: function (e) {
                onBlur && onBlur('c', e);
            }, onKeyDown: function (e) {
                onKeyDown && onKeyDown('c', e);
            } })));
};
export default PhoneNumberField;
//# sourceMappingURL=PhoneNumberField.js.map