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
import { pickFunctionalMarginProps, } from './functionalMarginClasses';
import vbClassNames from './vbClassNames';
export var pickCommonProps = function (props) {
    return __assign(__assign({}, pickCommonDataProps(props)), pickFunctionalMarginProps(props));
};
export var pickCommonDataProps = function (props) { return ({
    'data-guide': props['data-guide'],
    'data-test': props['data-test'],
    'data-tracking': props['data-tracking'],
    'data-masking': props['data-masking'],
}); };
export default function commonProps(props, baseClassName, classModifiers, deprecatedMarginClassProps) {
    if (classModifiers === void 0) { classModifiers = {}; }
    if (deprecatedMarginClassProps === void 0) { deprecatedMarginClassProps = {}; }
    return {
        'data-guide': props['data-guide'],
        'data-test': props['data-test'],
        'data-tracking': props['data-tracking'],
        'data-masking': props['data-masking'],
        className: vbClassNames(baseClassName, {
            props: props,
            modifier: classModifiers,
            margin: deprecatedMarginClassProps,
        }),
    };
}
//# sourceMappingURL=commonProps.js.map