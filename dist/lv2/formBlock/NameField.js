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
import commonProps from '../../utilities/commonProps';
var NameField = function (props) {
    var lastName = props.lastName, firstName = props.firstName, lastNamePlaceholder = props.lastNamePlaceholder, firstNamePlaceholder = props.firstNamePlaceholder, label = props.label, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    labelledby = props.labelledby, disabled = props.disabled, required = props.required, error = props.error, small = props.small, autoComplete = props.autoComplete, onChange = props.onChange, onInput = props.onInput, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, marginTop = props.marginTop, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, marginSize = props.marginSize;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-nameField', {}, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })),
        React.createElement(TextField, { name: "lastNameField", value: lastName, label: "\u59D3".concat(label ? "\uFF08".concat(label, "\uFF09") : ''), placeholder: lastNamePlaceholder === undefined ? '姓' : lastNamePlaceholder, disabled: disabled, required: required, error: error, small: small, autoComplete: autoComplete === 'name' ? 'family-name' : autoComplete, onChange: function (e) {
                onChange && onChange('lastName', e);
            }, onInput: function (e) {
                onInput && onInput('lastName', e);
            }, onFocus: function (e) {
                onFocus && onFocus('lastName', e);
            }, onBlur: function (e) {
                onBlur && onBlur('lastName', e);
            }, onKeyDown: function (e) {
                onKeyDown && onKeyDown('lastName', e);
            }, marginRight: true }),
        React.createElement(TextField, { name: "firstNameField", value: firstName, label: "\u540D".concat(label ? "\uFF08".concat(label, "\uFF09") : ''), placeholder: firstNamePlaceholder === undefined ? '名' : firstNamePlaceholder, disabled: disabled, required: required, small: small, error: error, autoComplete: autoComplete === 'name' ? 'given-name' : autoComplete, onChange: function (e) {
                onChange && onChange('firstName', e);
            }, onInput: function (e) {
                onInput && onInput('firstName', e);
            }, onFocus: function (e) {
                onFocus && onFocus('firstName', e);
            }, onBlur: function (e) {
                onBlur && onBlur('firstName', e);
            }, onKeyDown: function (e) {
                onKeyDown && onKeyDown('firstName', e);
            } })));
};
export default NameField;
//# sourceMappingURL=NameField.js.map