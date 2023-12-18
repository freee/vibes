var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import classNames from 'classnames';
import marginClasses from './marginClasses';
import functionalMarginClasses from './functionalMarginClasses';
/**
 * { propName: 'property-value' }形式のpropsを { propNamePropertyValue: true } 形式にする
 */
export var convertClassModifiers = function (props) {
    return Object.fromEntries(Object.entries(props)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return 'string' === typeof value
            ? [
                "".concat(key).concat(value
                    .split(/[-]/)
                    .reduce(function (prev, curr) {
                    return "".concat(prev).concat(curr[0].toUpperCase()).concat(curr.slice(1));
                }, '')),
                true,
            ]
            : [];
    })
        .filter(function (e) { return e.length > 0; }));
};
var modifierClasses = function (baseClassName, modifierClassProps) {
    return classNames(modifierClassProps)
        .split(' ')
        .map(function (modifierName) {
        return modifierName ? "".concat(baseClassName, "--").concat(modifierName) : '';
    });
};
var vbClassNames = function (baseClassName, _a) {
    var modifier = _a.modifier, margin = _a.margin, props = _a.props;
    return __spreadArray(__spreadArray(__spreadArray([
        baseClassName
    ], (modifier ? modifierClasses(baseClassName, modifier) : []), true), (margin ? marginClasses(margin) : []), true), [
        props ? functionalMarginClasses(props) : '',
    ], false).filter(function (e) { return e; })
        .join(' ');
};
export default vbClassNames;
//# sourceMappingURL=vbClassNames.js.map