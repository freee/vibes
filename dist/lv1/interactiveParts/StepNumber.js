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
import { MdCheck } from 'react-icons/md';
import commonProps from '../../utilities/commonProps';
var baseClassName = 'vb-stepNumber';
export var StepNumber = function (_a) {
    var number = _a.number, current = _a.current, done = _a.done, disabled = _a.disabled, small = _a.small, props = __rest(_a, ["number", "current", "done", "disabled", "small"]);
    return (React.createElement("span", __assign({}, commonProps(props, baseClassName, { current: current, done: done, disabled: disabled, small: small })),
        React.createElement("span", { className: "".concat(baseClassName, "__numberValue") }, number ? number : '1'),
        done && (React.createElement("figure", { className: "".concat(baseClassName, "__numberCheck") },
            React.createElement(MdCheck, { className: "".concat(baseClassName, "__numberCheckSvg") })))));
};
//# sourceMappingURL=StepNumber.js.map