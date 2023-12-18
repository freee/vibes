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
import styled from 'styled-components';
import { Colors2021GY07, Colors2021P05, Colors2021P07, Colors2021RE05, Colors2021S09, Colors2021YE10, } from '../../constants';
import { TypographyStyle } from './TypographyStyle';
var Style = styled(TypographyStyle).attrs(function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'black' : _b, _c = _a.size, size = _c === void 0 ? 0.875 : _c, _d = _a.weight, weight = _d === void 0 ? 'normal' : _d, _e = _a.ellipsis, ellipsis = _e === void 0 ? false : _e, _f = _a.overflowWrap, overflowWrap = _f === void 0 ? 'normal' : _f;
    return ({
        color: color,
        size: size,
        weight: weight,
        ellipsis: ellipsis,
        inline: true,
        overflowWrap: overflowWrap,
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  font-size: ", "rem;\n  font-weight: ", ";\n  overflow-wrap: ", ";\n  color: ", ";\n"], ["\n  display: ", ";\n  font-size: ", "rem;\n  font-weight: ", ";\n  overflow-wrap: ", ";\n  color: ", ";\n"])), function (_a) {
    var ellipsis = _a.ellipsis;
    return (ellipsis ? 'inline-block' : 'inline');
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var weight = _a.weight;
    return weight;
}, function (_a) {
    var overflowWrap = _a.overflowWrap;
    return overflowWrap;
}, function (_a) {
    var color = _a.color;
    return color === 'burnt' || color === 'S9'
        ? Colors2021S09
        : color === 'link' || color === 'P7'
            ? Colors2021P07
            : color === 'P5'
                ? Colors2021P05
                : color === 'alert' || color === 'RE5'
                    ? Colors2021RE05
                    : color === 'notice' || color === 'YE10'
                        ? Colors2021YE10
                        : color === 'white'
                            ? '#FFFFFF'
                            : Colors2021GY07;
});
/**
 * 様々なフォントサイズ・フォントウェイト・色のインラインテキストを作ることができるコンポーネントです
 */
export var Text = function (props) { return React.createElement(Style, __assign({}, props)); };
var templateObject_1;
//# sourceMappingURL=Text.js.map