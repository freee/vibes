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
import { TypographyStyle } from './TypographyStyle';
import styled from 'styled-components';
import { CaptionFont, VibesBurntColor } from '../../constants';
var Style = styled(TypographyStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font: ", ";\n"], ["\n  color: ", ";\n  font: ", ";\n"])), VibesBurntColor, CaptionFont);
export default function Note(props) {
    return React.createElement(Style, __assign({ as: props.inline ? 'span' : 'p' }, props));
}
var templateObject_1;
//# sourceMappingURL=Note.js.map