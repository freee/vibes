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
import { HeadlineStyle } from './TypographyStyle';
import styled from 'styled-components';
import { HeadlineFont1, MobileBoundaryWidth, MobileHeadlineFont1, VibesBlackColor, } from '../../constants';
import { useResponsive } from '../../utilities/VibesProvider';
var Style = styled(HeadlineStyle).attrs(function (_a) {
    var responsive = _a.responsive;
    return ({ responsive: responsive });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font: ", ";\n\n  ", "\n"], ["\n  color: ", ";\n  font: ", ";\n\n  ", "\n"])), VibesBlackColor, HeadlineFont1, function (_a) {
    var responsive = _a.responsive;
    return responsive
        ? "\n        @media (max-width: ".concat(MobileBoundaryWidth, ") {\n          font: ").concat(MobileHeadlineFont1, ";\n        }")
        : '';
});
var RenderPageTitle = function (_a, ref) {
    var _b = _a.headlineLevel, headlineLevel = _b === void 0 ? 1 : _b, props = __rest(_a, ["headlineLevel"]);
    return (React.createElement(Style, __assign({ responsive: useResponsive(), headlineLevel: headlineLevel, tabIndex: -1 }, props, { ref: ref })));
};
var PageTitle = React.forwardRef(RenderPageTitle);
export default PageTitle;
var templateObject_1;
//# sourceMappingURL=PageTitle.js.map