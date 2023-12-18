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
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { TextField } from '../../lv1';
import { isEdge } from '../../utilities/browsers';
/**
 * パスワード表示ボタンのついたパスワード入力フィールドを表示します。
 * It provides password input field with revealing password button.
 *
 * - Microsoft Edgeの場合は、ブラウザがパスワード表示ボタンを提供するため、ただ `type="password"` が指定されただけのフィールドをrenderします
 */
export var PasswordField = function (_a) {
    var props = __rest(_a, []);
    var _b = React.useState(false), isPasswordVisible = _b[0], setPasswordVisible = _b[1];
    var timeoutRef = React.useRef(null);
    var setBlurTimeout = function () {
        timeoutRef.current = window.setTimeout(function () {
            setPasswordVisible(false);
        }, 300);
    };
    var clearBlurTimeout = function () {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };
    React.useEffect(function () { return function () { return clearBlurTimeout(); }; });
    return isEdge() ? (
    // Edgeだと ::ms-reveal でパスワード表示ボタンが出てくるので、ただの type="password" なTextFieldを返す
    React.createElement(TextField, __assign({ type: "password" }, props))) : (React.createElement(TextField, __assign({ type: isPasswordVisible ? 'text' : 'password', IconComponent: isPasswordVisible ? MdVisibilityOff : MdVisibility, iconLabel: isPasswordVisible ? 'パスワードを隠す' : 'パスワードを表示', onIconClick: function () { return setPasswordVisible(!isPasswordVisible); } }, __assign(__assign({}, props), { onBlur: function (e) {
            setBlurTimeout();
            props.onBlur && props.onBlur(e);
        }, onFocus: function (e) {
            clearBlurTimeout();
            props.onFocus && props.onFocus(e);
        }, onIconBlur: setBlurTimeout, onIconFocus: clearBlurTimeout }))));
};
//# sourceMappingURL=PasswordField.js.map