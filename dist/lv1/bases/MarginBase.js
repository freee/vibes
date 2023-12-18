var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { CommonStyleWithDeprecatedMarginProps } from '../../internal/CommonStyle';
import styled from 'styled-components';
/**
 * マージンをつけるためのボックスです。
 */
var Style = styled(CommonStyleWithDeprecatedMarginProps).attrs(function (_a) {
    var fitContent = _a.fitContent;
    return ({
        as: 'div',
        fitContent: fitContent,
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var fitContent = _a.fitContent;
    return ({
        font: 'inherit',
        maxWidth: fitContent ? 'fit-content' : undefined,
    });
});
var MarginBase = function (props) { return React.createElement(Style, __assign({}, props)); };
export default MarginBase;
var templateObject_1;
//# sourceMappingURL=MarginBase.js.map