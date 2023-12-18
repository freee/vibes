var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import styled from 'styled-components';
import { NormalFont, VibesBlackColor } from '../constants';
import { marginClassPropsToFunctionalMarginProps, } from '../utilities/marginClasses';
export var marginSizeToValue = function (marginSize) {
    return marginSize === 'auto' ? marginSize : "".concat(marginSize, "rem");
};
export var CommonStyle = styled.span.attrs(function (props) { return props; })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font: ", ";\n  color: ", ";\n  ", "\n"], ["\n  font: ", ";\n  color: ", ";\n  ", "\n"])), NormalFont, VibesBlackColor, function (_a) {
    var ma = _a.ma, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr;
    return ({
        margin: ma
            ? marginSizeToValue(ma)
            : mt || mb || ml || mr
                ? "".concat(mt ? marginSizeToValue(mt) : 0, " ").concat(mr ? marginSizeToValue(mr) : 0, " ").concat(mb ? marginSizeToValue(mb) : 0, " ").concat(ml ? marginSizeToValue(ml) : 0)
                : 0,
    });
});
export var CommonStyleWithDeprecatedMarginProps = styled(CommonStyle).attrs(function (_a) {
    var ma = _a.ma, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, props = __rest(_a, ["ma", "mt", "mb", "ml", "mr"]);
    var converted = marginClassPropsToFunctionalMarginProps(props);
    return {
        ma: ma,
        mt: mt || converted.mt,
        mb: mb || converted.mb,
        mr: mr || converted.mr,
        ml: ml || converted.ml,
    };
})(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=CommonStyle.js.map