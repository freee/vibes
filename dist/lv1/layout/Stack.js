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
import commonProps from '../../utilities/commonProps';
import { convertClassModifiers } from '../../utilities/vbClassNames';
/**
 * 子要素を等間隔に並べるためのコンポーネントです。
 */
export var Stack = function (_a) {
    var _b;
    var _c = _a.direction, direction = _c === void 0 ? 'vertical' : _c, _d = _a.gap, gap = _d === void 0 ? 1 : _d, _e = _a.justifyContent, justifyContent = _e === void 0 ? 'start' : _e, _f = _a.alignItems, alignItems = _f === void 0 ? direction === 'vertical' || direction === 'vertical-reverse'
        ? 'start'
        : 'center' : _f, _g = _a.wrap, wrap = _g === void 0 ? 'wrap' : _g, inline = _a.inline, children = _a.children, props = __rest(_a, ["direction", "gap", "justifyContent", "alignItems", "wrap", "inline", "children"]);
    var Tag = inline ? 'span' : 'div';
    return (React.createElement(Tag, __assign({}, commonProps(props, 'vb-stack', __assign(__assign({ inline: inline }, convertClassModifiers({
        direction: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        wrap: wrap,
    })), (_b = {}, _b["gap".concat(gap * 100)] = true, _b)))), children));
};
//# sourceMappingURL=Stack.js.map